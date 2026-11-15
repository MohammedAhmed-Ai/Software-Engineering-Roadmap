// Software Engineering Learning Platform - Core Engine (app.js)

class LearningPlatform {
  constructor() {
    this.storageKey = "swe_roadmap_progress_v3";
    this.statsKey = "swe_roadmap_stats_v3";
    this.themeKey = "swe_roadmap_theme_v3";
    this.currentFilter = "all";
    this.searchQuery = "";
    this.activeDrawerTopic = null;
    this.timerInterval = null;
    this.timerTimeLeft = 25 * 60;
    this.isTimerRunning = false;
    this.activeTab = "roadmap";

    // Load theme: strictly "dark" or "light"
    const savedTheme = localStorage.getItem(this.themeKey);
    this.currentTheme = (savedTheme === "light" || savedTheme === "dark") ? savedTheme : "dark";

    this.state = this.loadState();
    this.stats = this.loadStats();

    // Web Audio
    this.audioCtx = null;

    // Apply Theme
    this.applyTheme(this.currentTheme);

    // Initialize UI
    this.initAudio();
    this.updateStreak();
    this.renderAll();
    this.setupEventListeners();
  }

  // --- Strict Light & Dark Theme Management ---
  applyTheme(theme) {
    this.currentTheme = theme;
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem(this.themeKey, theme);

    // Update Theme Toggle Button in Header
    const toggleBtn = document.getElementById("theme-toggle-btn");
    if (toggleBtn) {
      if (theme === "dark") {
        toggleBtn.innerHTML = `
          <i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>
          <span class="text-xs font-medium text-title">Light Mode</span>
        `;
      } else {
        toggleBtn.innerHTML = `
          <i data-lucide="moon" class="w-4 h-4 text-blue-600"></i>
          <span class="text-xs font-medium text-title">Dark Mode</span>
        `;
      }
      if (window.lucide) lucide.createIcons();
    }
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === "dark" ? "light" : "dark";
    this.applyTheme(nextTheme);
    this.renderAll();
  }

  // --- Audio Synthesis ---
  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn("Web Audio not supported", e);
    }
  }

  ensureAudioReady() {
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  playChime(type = "success") {
    if (!this.stats.soundEnabled) return;
    this.ensureAudioReady();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    if (type === "success") {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = "sine";
      osc2.type = "triangle";

      osc1.frequency.setValueAtTime(523.25, now);
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.12);
      osc2.frequency.setValueAtTime(659.25, now);
      osc2.frequency.exponentialRampToValueAtTime(783.99, now + 0.2);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.45);
      osc2.stop(now + 0.45);
    } else if (type === "fanfare") {
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + idx * 0.09;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.14, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + 0.4);
      });
    } else if (type === "timer") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 1.2);
    }
  }

  // --- State & LocalStorage ---
  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load roadmap state", e);
    }

    const initial = {};
    ROADMAP_DATA.phases.forEach(phase => {
      phase.topics.forEach(t => {
        const isDefaultCompleted = ROADMAP_DATA.meta.initialCompleted.includes(t.id);
        initial[t.id] = {
          completed: isDefaultCompleted,
          masteryLevel: isDefaultCompleted ? 3 : 0,
          inProgress: t.id === ROADMAP_DATA.meta.currentTopicId,
          notes: "",
          completedSteps: isDefaultCompleted ? [1, 2, 3, 4, 5, 6, 7, 8] : [],
          lastUpdated: Date.now()
        };
      });
    });
    return initial;
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
      localStorage.setItem(this.statsKey, JSON.stringify(this.stats));
    } catch (e) {
      console.error("Failed to save state", e);
    }
  }

  loadStats() {
    try {
      const saved = localStorage.getItem(this.statsKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.activityLog) parsed.activityLog = {};
        return parsed;
      }
    } catch (e) {
      console.error("Failed to load stats", e);
    }

    const today = new Date().toISOString().split("T")[0];
    const initialLog = {};
    initialLog[today] = 2;

    return {
      xp: 200,
      streak: 1,
      lastStudyDate: today,
      soundEnabled: true,
      currentMissionId: ROADMAP_DATA.meta.currentTopicId || "p1_3",
      activityLog: initialLog
    };
  }

  logActivity(count = 1) {
    const today = new Date().toISOString().split("T")[0];
    if (!this.stats.activityLog) this.stats.activityLog = {};
    this.stats.activityLog[today] = (this.stats.activityLog[today] || 0) + count;
    this.saveState();
  }

  updateStreak() {
    const today = new Date().toISOString().split("T")[0];
    if (this.stats.lastStudyDate !== today) {
      const lastDate = new Date(this.stats.lastStudyDate);
      const currentDate = new Date(today);
      const diffDays = Math.floor((currentDate - lastDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        this.stats.streak += 1;
      } else if (diffDays > 1) {
        this.stats.streak = 1;
      }
      this.stats.lastStudyDate = today;
      this.saveState();
    }
  }

  // --- XP & Rank ---
  getRankInfo(xp) {
    if (xp < 300) {
      return { rank: "Level 1 — Novice Architect", nextXp: 300, progress: (xp / 300) * 100 };
    } else if (xp < 800) {
      return { rank: "Level 2 — Software Apprentice", nextXp: 800, progress: ((xp - 300) / 500) * 100 };
    } else if (xp < 1600) {
      return { rank: "Level 3 — Software Craftsman", nextXp: 1600, progress: ((xp - 800) / 800) * 100 };
    } else if (xp < 2600) {
      return { rank: "Level 4 — Senior Engineer", nextXp: 2600, progress: ((xp - 1600) / 1000) * 100 };
    } else if (xp < 3800) {
      return { rank: "Level 5 — Systems Architect", nextXp: 3800, progress: ((xp - 2600) / 1200) * 100 };
    } else {
      return { rank: "Level 6 — Principal Master Engineer", nextXp: 5000, progress: 100 };
    }
  }

  // --- 3-Tier Mastery Management ---
  setMasteryLevel(topicId, level, event) {
    if (event) event.stopPropagation();
    const item = this.state[topicId] || { completed: false, inProgress: false, notes: "", completedSteps: [] };
    const oldLevel = item.masteryLevel || 0;

    if (oldLevel === level) {
      item.masteryLevel = 0;
      item.completed = false;
      this.stats.xp = Math.max(0, this.stats.xp - (level * 35));
    } else {
      item.masteryLevel = level;
      item.completed = (level === 3);
      if (level > oldLevel) {
        const addedXp = (level - oldLevel) * 35;
        this.stats.xp += addedXp;
        this.playChime(level === 3 ? "fanfare" : "success");
        if (level === 3) this.triggerConfetti(event ? { x: event.clientX, y: event.clientY } : null);
        this.spawnXpAnimation(event ? { x: event.clientX, y: event.clientY } : null, `+${addedXp} XP`);
        this.logActivity(1);
      }
    }

    item.lastUpdated = Date.now();
    this.state[topicId] = item;
    this.saveState();
    this.renderAll();

    if (this.activeDrawerTopic && this.activeDrawerTopic.id === topicId) {
      this.renderDrawerContent();
    }
  }

  toggleTopicCompletion(topicId, event) {
    if (event) event.stopPropagation();
    const item = this.state[topicId] || { completed: false, inProgress: false, notes: "", completedSteps: [] };
    const willBeCompleted = !item.completed;

    if (willBeCompleted) {
      this.setMasteryLevel(topicId, 3, event);
    } else {
      this.setMasteryLevel(topicId, 0, event);
    }
  }

  setAsCurrentMission(topicId) {
    this.stats.currentMissionId = topicId;
    if (this.state[topicId]) {
      this.state[topicId].inProgress = true;
    }
    this.saveState();
    this.renderAll();
    this.playChime("success");
  }

  triggerConfetti(coords) {
    if (typeof confetti === "function") {
      if (coords && coords.x && coords.y) {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: {
            x: coords.x / window.innerWidth,
            y: coords.y / window.innerHeight
          },
          colors: ['#2563eb', '#059669', '#d97706', '#0284c7']
        });
      } else {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.75 },
          colors: ['#2563eb', '#059669', '#d97706', '#0284c7']
        });
      }
    }
  }

  spawnXpAnimation(coords, text = "+100 XP") {
    const el = document.createElement("div");
    el.className = "xp-burst";
    el.innerText = text;

    const x = coords && coords.x ? coords.x : window.innerWidth / 2;
    const y = coords && coords.y ? coords.y : window.innerHeight / 2;

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 900);
  }

  // --- Drawer / Modal Methods ---
  openDrawer(topicId) {
    let targetTopic = null;
    let targetPhase = null;

    for (const phase of ROADMAP_DATA.phases) {
      const found = phase.topics.find(t => t.id === topicId);
      if (found) {
        targetTopic = found;
        targetPhase = phase;
        break;
      }
    }

    if (!targetTopic) return;

    this.activeDrawerTopic = { ...targetTopic, phase: targetPhase };
    this.renderDrawerContent();

    const drawer = document.getElementById("study-drawer");
    const backdrop = document.getElementById("drawer-backdrop");

    drawer.classList.remove("translate-x-full");
    backdrop.classList.remove("pointer-events-none", "opacity-0");
    backdrop.classList.add("opacity-100");
  }

  closeDrawer() {
    const drawer = document.getElementById("study-drawer");
    const backdrop = document.getElementById("drawer-backdrop");

    drawer.classList.add("translate-x-full");
    backdrop.classList.remove("opacity-100");
    backdrop.classList.add("pointer-events-none", "opacity-0");
    this.activeDrawerTopic = null;
  }

  toggleDrawerStudyStep(stepNum) {
    if (!this.activeDrawerTopic) return;
    const topicId = this.activeDrawerTopic.id;
    const topicState = this.state[topicId] || { completed: false, inProgress: false, notes: "", completedSteps: [] };

    const idx = topicState.completedSteps.indexOf(stepNum);
    if (idx > -1) {
      topicState.completedSteps.splice(idx, 1);
    } else {
      topicState.completedSteps.push(stepNum);
      this.playChime("success");
      this.logActivity(1);
    }

    if (topicState.completedSteps.length === 8 && !topicState.completed) {
      this.setMasteryLevel(topicId, 3);
    }

    topicState.lastUpdated = Date.now();
    this.state[topicId] = topicState;
    this.saveState();
    this.renderDrawerContent();
    this.renderAll();
  }

  saveDrawerNotes(text) {
    if (!this.activeDrawerTopic) return;
    const topicId = this.activeDrawerTopic.id;
    if (!this.state[topicId]) {
      this.state[topicId] = { completed: false, inProgress: false, notes: "", completedSteps: [] };
    }
    const hadNoNotes = !this.state[topicId].notes || this.state[topicId].notes.trim() === "";
    this.state[topicId].notes = text;
    this.state[topicId].lastUpdated = Date.now();
    if (hadNoNotes && text.trim().length > 5) {
      this.logActivity(1);
    }
    this.saveState();
  }

  // --- Pomodoro Timer ---
  toggleTimer() {
    if (this.isTimerRunning) {
      clearInterval(this.timerInterval);
      this.isTimerRunning = false;
      document.getElementById("timer-btn-text").innerText = "Resume Focus";
      document.getElementById("timer-icon").setAttribute("data-lucide", "play");
    } else {
      this.isTimerRunning = true;
      document.getElementById("timer-btn-text").innerText = "Pause";
      document.getElementById("timer-icon").setAttribute("data-lucide", "pause");

      this.timerInterval = setInterval(() => {
        if (this.timerTimeLeft > 0) {
          this.timerTimeLeft--;
          this.updateTimerDisplay();
        } else {
          clearInterval(this.timerInterval);
          this.isTimerRunning = false;
          this.playChime("timer");
          this.triggerConfetti();
          this.stats.xp += 50;
          this.logActivity(2);
          this.saveState();
          this.renderAll();
          alert("Focus sprint completed! Take a 5-minute breather (+50 XP).");
          this.resetTimer();
        }
      }, 1000);
    }
    if (window.lucide) lucide.createIcons();
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.isTimerRunning = false;
    this.timerTimeLeft = 25 * 60;
    this.updateTimerDisplay();
    document.getElementById("timer-btn-text").innerText = "Start Focus";
    document.getElementById("timer-icon").setAttribute("data-lucide", "play");
    if (window.lucide) lucide.createIcons();
  }

  updateTimerDisplay() {
    const mins = Math.floor(this.timerTimeLeft / 60);
    const secs = this.timerTimeLeft % 60;
    const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    const timerText = document.getElementById("timer-display");
    if (timerText) timerText.innerText = formatted;
  }

  // --- Feature 1: GitHub-Style Heatmap Generator ---
  renderActivityHeatmap() {
    const container = document.getElementById("activity-heatmap-grid");
    if (!container) return;

    const weeks = 20;
    const today = new Date();
    const log = this.stats.activityLog || {};

    let html = "";
    let totalLogs = 0;

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (weeks * 7) + (6 - today.getDay()));

    for (let w = 0; w < weeks; w++) {
      html += `<div class="flex flex-col gap-1">`;
      for (let d = 0; d < 7; d++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + (w * 7) + d);

        if (currentDate > today) {
          html += `<div class="w-[11px] h-[11px] opacity-0"></div>`;
          continue;
        }

        const dateStr = currentDate.toISOString().split("T")[0];
        const count = log[dateStr] || 0;
        totalLogs += count;

        let level = 0;
        if (count >= 5) level = 4;
        else if (count >= 3) level = 3;
        else if (count >= 2) level = 2;
        else if (count >= 1) level = 1;

        const dateFormatted = currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        html += `
          <div 
            class="heatmap-cell" 
            data-level="${level}" 
            title="${count} study events on ${dateFormatted}"
          ></div>
        `;
      }
      html += `</div>`;
    }

    container.innerHTML = html;

    const totalEl = document.getElementById("heatmap-total-count");
    if (totalEl) totalEl.innerText = `${totalLogs} events logged`;
  }

  // --- Feature 2: Radar Chart Generator ---
  renderRadarChart() {
    const svgContainer = document.getElementById("radar-chart-container");
    if (!svgContainer) return;

    const axes = [
      { name: "Foundations", phaseId: "phase_1" },
      { name: "Craft", phaseId: "phase_2" },
      { name: "System Design", phaseId: "phase_3" },
      { name: "Backend", phaseId: "phase_4" },
      { name: "Distributed", phaseId: "phase_5" },
      { name: "Testing & Prod", phaseId: "phase_6" }
    ];

    const size = 200;
    const center = size / 2;
    const radius = 68;
    const totalAxes = axes.length;

    const scores = axes.map(axis => {
      const phase = ROADMAP_DATA.phases.find(p => p.id === axis.phaseId);
      if (!phase || phase.topics.length === 0) return 0.2;
      const totalPoints = phase.topics.reduce((acc, t) => {
        const item = this.state[t.id];
        return acc + (item ? (item.masteryLevel || (item.completed ? 3 : 0)) : 0);
      }, 0);
      const maxPoints = phase.topics.length * 3;
      return Math.max(0.15, totalPoints / maxPoints);
    });

    const points = scores.map((score, i) => {
      const angle = (Math.PI * 2 / totalAxes) * i - (Math.PI / 2);
      const r = radius * score;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");

    let webHtml = "";
    [0.33, 0.66, 1].forEach(frac => {
      const r = radius * frac;
      webHtml += `<circle cx="${center}" cy="${center}" r="${r}" class="radar-grid" />`;
    });

    let spokesHtml = "";
    axes.forEach((axis, i) => {
      const angle = (Math.PI * 2 / totalAxes) * i - (Math.PI / 2);
      const xEnd = center + radius * Math.cos(angle);
      const yEnd = center + radius * Math.sin(angle);
      const xText = center + (radius + 16) * Math.cos(angle);
      const yText = center + (radius + 16) * Math.sin(angle);

      spokesHtml += `<line x1="${center}" y1="${center}" x2="${xEnd}" y2="${yEnd}" class="radar-grid" />`;
      spokesHtml += `<text x="${xText}" y="${yText}" fill="var(--text-muted)" font-size="8.5" font-family="JetBrains Mono" font-weight="600" text-anchor="middle" dominant-baseline="middle">${axis.name}</text>`;
    });

    svgContainer.innerHTML = `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="mx-auto overflow-visible">
        ${webHtml}
        ${spokesHtml}
        <polygon points="${points}" class="radar-polygon" />
      </svg>
    `;
  }

  // --- Feature 5: Export to Obsidian Journal ---
  exportObsidianVault() {
    const dateStr = new Date().toISOString().split("T")[0];
    let md = `---
title: Software Engineering Mastery Journal
date: ${dateStr}
xp: ${this.stats.xp}
streak: ${this.stats.streak}
tags:
  - software-engineering
  - roadmap
  - learning-tracker
---

# Software Engineering Mastery Journal
> Exported from the Software Engineering Roadmap & Learning Platform.

## 📊 Summary
- **Current Target:** ${this.stats.currentMissionId}
- **Mastery XP:** ${this.stats.xp} XP
- **Study Streak:** ${this.stats.streak} consecutive days
- **Overall Completion:** ${this.calculateOverallProgress().percentage}%

---

`;

    ROADMAP_DATA.phases.forEach(phase => {
      md += `\n# ${phase.badge}: ${phase.title}\n`;
      md += `*${phase.titleAr}*\n\n`;
      md += `> **Goal:** ${phase.goal}\n`;
      md += `> **Outcome:** ${phase.outcome}\n\n`;

      phase.topics.forEach(t => {
        const item = this.state[t.id] || { completed: false, masteryLevel: 0, notes: "", completedSteps: [] };
        const tierLabels = ["⚪ Unstarted", "🟡 Concept Understood", "🔵 Code Implemented", "🟢 Production Mastered"];
        const statusLabel = tierLabels[item.masteryLevel || (item.completed ? 3 : 0)];

        md += `### ${t.number} ${t.title} (${t.titleAr})\n`;
        md += `- **Status:** ${statusLabel}\n`;
        md += `- **8-Step Framework Progress:** ${item.completedSteps ? item.completedSteps.length : 0} / 8 steps completed\n\n`;

        md += `#### Core Roadmap Topics:\n`;
        t.points.forEach(p => {
          md += `- ${p}\n`;
        });

        if (t.questions && t.questions.length > 0) {
          md += `\n#### Architectural Trade-off Checks:\n`;
          t.questions.forEach((q, qIdx) => {
            md += `**Q${qIdx + 1}: ${q.q}**\n`;
            md += `*Hint:* ${q.hint}\n`;
            md += `*Model Answer:* ${q.answer}\n\n`;
          });
        }

        if (item.notes && item.notes.trim()) {
          md += `\n#### 📝 My Personal Study Notes:\n\`\`\`text\n${item.notes}\n\`\`\`\n`;
        }

        md += `\n---\n\n`;
      });
    });

    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Software_Engineering_Mastery_Journal_${dateStr}.md`;
    a.click();
    URL.revokeObjectURL(url);
    this.playChime("success");
    alert("Obsidian Journal (.md) exported successfully!");
  }

  // --- Calculations for Progress ---
  calculateOverallProgress() {
    let totalTopics = 0;
    let completedTopics = 0;

    ROADMAP_DATA.phases.forEach(phase => {
      phase.topics.forEach(t => {
        totalTopics++;
        if (this.state[t.id] && (this.state[t.id].completed || this.state[t.id].masteryLevel === 3)) {
          completedTopics++;
        }
      });
    });

    const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    return { totalTopics, completedTopics, percentage };
  }

  // --- Rendering Functions ---
  renderAll() {
    this.renderStatsBar();
    this.renderHeroMission();
    this.renderActivityHeatmap();
    this.renderRadarChart();
    this.renderRoadmap();
    this.renderProjectsTab();
    this.renderMethodologyTab();
    this.renderNotesTab();
    this.updateTimerDisplay();
    if (window.lucide) lucide.createIcons();
  }

  renderStatsBar() {
    const { totalTopics, completedTopics, percentage } = this.calculateOverallProgress();
    const rankInfo = this.getRankInfo(this.stats.xp);

    const masteryEl = document.getElementById("mastery-percentage");
    const masteryBar = document.getElementById("mastery-progress-bar");
    const topicCountEl = document.getElementById("mastery-topic-count");

    if (masteryEl) masteryEl.innerText = `${percentage}%`;
    if (masteryBar) masteryBar.style.width = `${percentage}%`;
    if (topicCountEl) topicCountEl.innerText = `${completedTopics} / ${totalTopics} Topics Mastered`;

    const rankBadge = document.getElementById("user-rank-badge");
    const xpBadge = document.getElementById("user-xp-badge");
    const xpBar = document.getElementById("user-xp-bar");

    if (rankBadge) rankBadge.innerText = rankInfo.rank;
    if (xpBadge) xpBadge.innerText = `${this.stats.xp} XP`;
    if (xpBar) xpBar.style.width = `${Math.min(100, rankInfo.progress)}%`;

    const streakEl = document.getElementById("user-streak");
    if (streakEl) streakEl.innerText = `${this.stats.streak}d`;

    const soundBtn = document.getElementById("sound-toggle-btn");
    if (soundBtn) {
      soundBtn.innerHTML = this.stats.soundEnabled
        ? `<i data-lucide="volume-2" class="w-4 h-4 text-emerald-500"></i>`
        : `<i data-lucide="volume-x" class="w-4 h-4 text-dim"></i>`;
    }
  }

  renderHeroMission() {
    const missionId = this.stats.currentMissionId || "p1_3";
    let currentTopic = null;
    let currentPhase = null;

    for (const phase of ROADMAP_DATA.phases) {
      const found = phase.topics.find(t => t.id === missionId);
      if (found) {
        currentTopic = found;
        currentPhase = phase;
        break;
      }
    }

    if (!currentTopic) return;

    const missionBadge = document.getElementById("hero-mission-badge");
    const missionTitle = document.getElementById("hero-mission-title");
    const missionAr = document.getElementById("hero-mission-ar");
    const missionSummary = document.getElementById("hero-mission-summary");
    const missionBtn = document.getElementById("hero-mission-action");

    if (missionBadge) missionBadge.innerText = `Current Target: ${currentPhase.badge}`;
    if (missionTitle) missionTitle.innerText = `${currentTopic.number} ${currentTopic.title}`;
    if (missionAr) missionAr.innerText = currentTopic.titleAr;
    if (missionSummary) missionSummary.innerText = currentTopic.summary;

    if (missionBtn) {
      missionBtn.onclick = () => this.openDrawer(currentTopic.id);
    }
  }

  renderRoadmap() {
    const container = document.getElementById("phases-container");
    if (!container) return;

    let html = "";

    ROADMAP_DATA.phases.forEach((phase) => {
      const filteredTopics = phase.topics.filter(topic => {
        const itemState = this.state[topic.id] || { completed: false, masteryLevel: 0, inProgress: false };

        if (this.searchQuery) {
          const q = this.searchQuery.toLowerCase();
          const matchTitle = topic.title.toLowerCase().includes(q);
          const matchAr = topic.titleAr.toLowerCase().includes(q);
          const matchSummary = topic.summary.toLowerCase().includes(q);
          const matchPoints = topic.points.some(p => p.toLowerCase().includes(q));
          if (!matchTitle && !matchAr && !matchSummary && !matchPoints) return false;
        }

        const isDone = itemState.completed || itemState.masteryLevel === 3;
        if (this.currentFilter === "completed") return isDone;
        if (this.currentFilter === "in_progress") return (itemState.inProgress || (itemState.masteryLevel > 0 && itemState.masteryLevel < 3)) && !isDone;
        if (this.currentFilter === "unstarted") return !isDone && !itemState.inProgress && (itemState.masteryLevel || 0) === 0;
        return true;
      });

      if (filteredTopics.length === 0 && (this.searchQuery || this.currentFilter !== "all")) {
        return;
      }

      const completedCount = phase.topics.filter(t => {
        const st = this.state[t.id];
        return st && (st.completed || st.masteryLevel === 3);
      }).length;
      const totalCount = phase.topics.length;
      const phasePct = Math.round((completedCount / totalCount) * 100);
      const isPhaseMastered = completedCount === totalCount;

      html += `
        <div class="glass-panel rounded-xl p-6 mb-6" id="phase-card-${phase.id}">
          <!-- Phase Header -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-inherit">
            <div class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-lg flex items-center justify-center font-bold text-base flex-shrink-0" style="background: ${phase.accent}18; color: ${phase.accent}; border: 1px solid ${phase.accent}40;">
                <i data-lucide="${phase.icon || 'folder'}" class="w-5 h-5"></i>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase font-mono" style="background: ${phase.accent}18; color: ${phase.accent}; border: 1px solid ${phase.accent}30;">
                    ${phase.badge}
                  </span>
                  <span class="text-xs text-dim font-mono">${completedCount}/${totalCount} Completed (${phasePct}%)</span>
                  ${isPhaseMastered ? '<span class="text-xs px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30">Mastered</span>' : ''}
                </div>
                <h3 class="text-lg font-bold text-title tracking-tight">${phase.title}</h3>
                <p class="text-sm text-dim font-arabic mt-0.5">${phase.titleAr}</p>
              </div>
            </div>

            <!-- Phase Progress Bar -->
            <div class="w-full md:w-52 flex flex-col gap-1.5">
              <div class="flex justify-between text-xs text-dim font-mono">
                <span>Phase Progress</span>
                <span class="font-bold text-title">${phasePct}%</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div class="h-full rounded-full transition-all duration-300" style="width: ${phasePct}%; background: ${phase.accent}"></div>
              </div>
            </div>
          </div>

          <!-- Phase Goal Note -->
          <div class="my-4 p-3 rounded-lg text-xs font-arabic flex items-start gap-2.5" style="background: var(--bg-input); border: 1px solid var(--border-card);">
            <i data-lucide="target" class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"></i>
            <div>
              <span class="font-bold text-blue-600 dark:text-blue-400">الهدف والمخرج:</span> 
              <span class="text-body">${phase.goal}</span>
              <span class="text-emerald-600 dark:text-emerald-400 font-semibold block mt-1">${phase.outcome}</span>
            </div>
          </div>

          <!-- Topics Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-4">
            ${filteredTopics.map(topic => {
              const itemState = this.state[topic.id] || { completed: false, masteryLevel: 0, inProgress: false, notes: "", completedSteps: [] };
              const currentTier = itemState.masteryLevel || (itemState.completed ? 3 : 0);
              const isCurrentMission = this.stats.currentMissionId === topic.id;
              const hasNotes = itemState.notes && itemState.notes.trim().length > 0;
              const completedStepsCount = itemState.completedSteps ? itemState.completedSteps.length : 0;

              return `
                <div class="glass-panel glass-panel-hover rounded-lg p-4 cursor-pointer flex flex-col justify-between ${
                  currentTier === 3 
                    ? 'border-emerald-500/50' 
                    : isCurrentMission 
                    ? 'border-blue-500 ring-1 ring-blue-500/40' 
                    : ''
                }" onclick="app.openDrawer('${topic.id}')">

                  <div>
                    <div class="flex items-center justify-between gap-2 mb-2">
                      <span class="font-mono text-xs px-2 py-0.5 rounded font-bold" style="background: var(--bg-input); color: var(--text-muted); border: 1px solid var(--border-card);">${topic.number}</span>

                      <div class="flex items-center gap-1.5" onclick="event.stopPropagation()">
                        ${isCurrentMission ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-mono font-semibold">Active</span>' : ''}
                        ${hasNotes ? '<i data-lucide="file-text" class="w-3.5 h-3.5 text-amber-500" title="Notes saved"></i>' : ''}
                        
                        <!-- 3-Tier Selector -->
                        <div class="flex items-center gap-0.5">
                          <button 
                            class="mastery-tier-btn ${currentTier >= 1 ? 'active-1' : ''}" 
                            title="Tier 1: Learned Concept" 
                            onclick="app.setMasteryLevel('${topic.id}', 1, event)"
                          >C</button>
                          <button 
                            class="mastery-tier-btn ${currentTier >= 2 ? 'active-2' : ''}" 
                            title="Tier 2: Built & Applied" 
                            onclick="app.setMasteryLevel('${topic.id}', 2, event)"
                          >A</button>
                          <button 
                            class="mastery-tier-btn ${currentTier === 3 ? 'active-3' : ''}" 
                            title="Tier 3: Production Mastered" 
                            onclick="app.setMasteryLevel('${topic.id}', 3, event)"
                          >M</button>
                        </div>
                      </div>
                    </div>

                    <h4 class="font-bold text-sm text-title line-clamp-1">
                      ${topic.title}
                    </h4>
                    <p class="text-xs text-dim font-arabic mt-0.5 line-clamp-1">
                      ${topic.titleAr}
                    </p>
                    <p class="text-xs text-body mt-2 line-clamp-2 leading-relaxed">
                      ${topic.summary}
                    </p>
                  </div>

                  <div class="pt-3 mt-3 border-t border-inherit flex items-center justify-between text-[11px] text-dim">
                    <span class="flex items-center gap-1 font-mono">
                      <i data-lucide="check-square" class="w-3.5 h-3.5 text-blue-500"></i>
                      <span>${completedStepsCount}/8 steps</span>
                    </span>
                    <span class="hover:text-blue-500 flex items-center gap-0.5 transition-colors font-medium">
                      Study Lab &rarr;
                    </span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    });

    if (html === "") {
      html = `
        <div class="text-center py-16 glass-panel rounded-xl">
          <i data-lucide="search-x" class="w-10 h-10 text-dim mx-auto mb-3"></i>
          <h3 class="text-base font-bold text-title">No topics match your filter</h3>
          <p class="text-xs text-dim mt-1">Try resetting your search query or switching filters.</p>
          <button onclick="app.resetFilters()" class="mt-4 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold">
            Reset Filters
          </button>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  // --- Study Lab Drawer ---
  renderDrawerContent() {
    if (!this.activeDrawerTopic) return;
    const topic = this.activeDrawerTopic;
    const topicState = this.state[topic.id] || { completed: false, masteryLevel: 0, inProgress: false, notes: "", completedSteps: [] };
    const currentTier = topicState.masteryLevel || (topicState.completed ? 3 : 0);
    const isTarget = this.stats.currentMissionId === topic.id;

    document.getElementById("drawer-phase-badge").innerText = topic.phase.badge;
    document.getElementById("drawer-phase-badge").style.borderColor = topic.phase.accent;
    document.getElementById("drawer-phase-badge").style.color = topic.phase.accent;

    document.getElementById("drawer-topic-number").innerText = topic.number;
    document.getElementById("drawer-topic-title").innerText = topic.title;
    document.getElementById("drawer-topic-title-ar").innerText = topic.titleAr;
    document.getElementById("drawer-topic-summary").innerText = topic.summary;

    const statusBanner = document.getElementById("drawer-status-banner");
    if (statusBanner) {
      statusBanner.innerHTML = `
        <div class="p-3.5 rounded-lg border border-inherit flex flex-col sm:flex-row sm:items-center justify-between gap-3" style="background: var(--bg-card)">
          <div>
            <div class="text-[10px] uppercase font-mono text-dim">Current Mastery Level</div>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-xs font-bold font-mono ${
                currentTier === 3 ? 'text-emerald-500' : currentTier === 2 ? 'text-blue-500' : currentTier === 1 ? 'text-amber-500' : 'text-dim'
              }">
                ${currentTier === 3 ? '🟢 Tier 3: Production Mastered' : currentTier === 2 ? '🔵 Tier 2: Built & Applied' : currentTier === 1 ? '🟡 Tier 1: Concept Understood' : '⚪ Unstarted'}
              </span>
            </div>
          </div>

          <div class="flex items-center gap-1.5">
            <button onclick="app.setMasteryLevel('${topic.id}', 1)" class="mastery-tier-btn px-2.5 py-1 ${currentTier >= 1 ? 'active-1' : ''}">1. Concept</button>
            <button onclick="app.setMasteryLevel('${topic.id}', 2)" class="mastery-tier-btn px-2.5 py-1 ${currentTier >= 2 ? 'active-2' : ''}">2. Applied</button>
            <button onclick="app.setMasteryLevel('${topic.id}', 3)" class="mastery-tier-btn px-2.5 py-1 ${currentTier === 3 ? 'active-3' : ''}">3. Mastered</button>
            ${!isTarget ? `<button onclick="app.setAsCurrentMission('${topic.id}')" class="px-2 py-1 rounded bg-blue-500/15 text-blue-600 dark:text-blue-400 hover:bg-blue-500/25 border border-blue-500/30 text-[10px] font-semibold ml-2 font-mono">Set Target</button>` : ''}
          </div>
        </div>
      `;
    }

    const matchingProjects = ROADMAP_DATA.projects.filter(p => p.requiredTopics && p.requiredTopics.includes(topic.id));
    const projectPillsContainer = document.getElementById("drawer-related-projects");
    if (projectPillsContainer) {
      if (matchingProjects.length > 0) {
        projectPillsContainer.innerHTML = `
          <div class="mt-4 p-3 rounded-lg border border-inherit text-xs" style="background: var(--bg-input)">
            <span class="text-dim text-[11px] block mb-1.5 font-mono uppercase">🏗️ Practiced in Real-World Systems:</span>
            <div class="flex flex-wrap gap-1.5">
              ${matchingProjects.map(p => `
                <span class="code-pill text-title flex items-center gap-1">
                  <i data-lucide="${p.icon || 'layers'}" class="w-3 h-3 text-blue-500"></i>
                  ${p.domain}: ${p.system}
                </span>
              `).join("")}
            </div>
          </div>
        `;
      } else {
        projectPillsContainer.innerHTML = "";
      }
    }

    const pointsList = document.getElementById("drawer-points-list");
    if (pointsList) {
      pointsList.innerHTML = topic.points.map(pt => `
        <li class="flex items-start gap-2.5 text-xs text-body font-arabic leading-relaxed">
          <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5"></i>
          <span>${pt}</span>
        </li>
      `).join("");
    }

    const questionsContainer = document.getElementById("drawer-questions-list");
    if (questionsContainer) {
      if (topic.questions && topic.questions.length > 0) {
        questionsContainer.innerHTML = topic.questions.map((q, idx) => `
          <div class="p-3.5 rounded-lg border border-inherit text-xs" style="background: var(--bg-input)">
            <div class="font-bold text-title mb-1.5 flex items-start gap-2">
              <span class="text-blue-500 font-mono">Q${idx + 1}:</span>
              <span>${q.q}</span>
            </div>
            <div class="text-[11px] text-dim italic mb-2">Hint: ${q.hint}</div>
            
            <details class="cursor-pointer group">
              <summary class="text-[11px] font-mono text-blue-600 dark:text-blue-400 hover:underline select-none">
                [ Click to reveal architectural answer ]
              </summary>
              <div class="mt-2 p-2.5 rounded border border-inherit text-body leading-relaxed text-[11px]" style="background: var(--bg-card)">
                ${q.answer}
              </div>
            </details>
          </div>
        `).join("");
      } else {
        questionsContainer.innerHTML = `<p class="text-xs text-dim italic">No specific defense questions assigned for this topic yet.</p>`;
      }
    }

    const stepsContainer = document.getElementById("drawer-study-steps");
    if (stepsContainer) {
      stepsContainer.innerHTML = ROADMAP_DATA.studySteps.map(step => {
        const isChecked = topicState.completedSteps && topicState.completedSteps.includes(step.num);
        return `
          <div class="p-3 rounded-lg border transition-all cursor-pointer ${
            isChecked ? 'border-blue-500/50 bg-blue-500/10' : 'border-inherit hover:border-slate-400 dark:hover:border-slate-600'
          }" style="background: var(--bg-input)" onclick="app.toggleDrawerStudyStep(${step.num})">
            <div class="flex items-start gap-3">
              <input type="checkbox" class="cyber-checkbox mt-0.5" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); app.toggleDrawerStudyStep(${step.num})" />
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold ${isChecked ? 'text-blue-600 dark:text-blue-400' : 'text-title'}">Step ${step.num}: ${step.title}</span>
                  <span class="text-[11px] text-dim font-arabic">${step.ar}</span>
                </div>
                <p class="text-[11px] text-body mt-1 font-arabic leading-normal">${step.desc}</p>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    const notesBox = document.getElementById("drawer-notes-textarea");
    if (notesBox) {
      notesBox.value = topicState.notes || "";
      notesBox.oninput = (e) => this.saveDrawerNotes(e.target.value);
    }

    if (window.lucide) lucide.createIcons();
  }

  // --- Feature 3: Matrix in Projects Tab ---
  renderProjectsTab() {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    container.innerHTML = ROADMAP_DATA.projects.map((proj, idx) => `
      <div class="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-2 py-0.5 rounded text-xs font-semibold font-mono" style="background: var(--badge-bg); color: var(--badge-text); border: 1px solid var(--border-card);">
              ${proj.domain}
            </span>
            <span class="text-xs font-mono text-dim">Project #${idx + 1}</span>
          </div>

          <h4 class="text-base font-bold text-title mb-1">${proj.system}</h4>
          <p class="text-xs text-dim font-arabic mb-3">${proj.systemAr}</p>
          <p class="text-xs text-body font-arabic leading-relaxed mb-4">${proj.description}</p>
        </div>

        <div>
          <div class="mb-3">
            <div class="text-[10px] uppercase tracking-wider font-semibold text-dim mb-1.5 font-mono">Required Roadmap Skills:</div>
            <div class="flex flex-wrap gap-1.5">
              ${(proj.requiredTopics || []).map(topicId => {
                let topicLabel = topicId;
                for (const ph of ROADMAP_DATA.phases) {
                  const f = ph.topics.find(t => t.id === topicId);
                  if (f) { topicLabel = `${f.number} ${f.title}`; break; }
                }
                const isMastered = this.state[topicId] && (this.state[topicId].completed || this.state[topicId].masteryLevel === 3);
                return `
                  <button 
                    onclick="app.openDrawer('${topicId}')" 
                    class="code-pill hover:border-blue-500 cursor-pointer transition-colors flex items-center gap-1 ${isMastered ? 'text-emerald-600 dark:text-emerald-400 border-emerald-500/40' : 'text-blue-600 dark:text-blue-400'}"
                    title="Open ${topicLabel}"
                  >
                    ${isMastered ? '✓' : '○'} ${topicLabel}
                  </button>
                `;
              }).join("")}
            </div>
          </div>

          <div class="text-[10px] uppercase tracking-wider font-semibold text-dim mb-1.5 font-mono">Challenges:</div>
          <div class="flex flex-wrap gap-1.5">
            ${proj.challenges.map(c => `<span class="code-pill">${c}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join("");
  }

  renderMethodologyTab() {
    const stepsContainer = document.getElementById("methodology-steps-container");
    if (stepsContainer) {
      stepsContainer.innerHTML = ROADMAP_DATA.studySteps.map(step => `
        <div class="p-4 rounded-xl glass-panel">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-7 h-7 rounded-md font-bold flex items-center justify-center font-mono text-xs" style="background: var(--badge-bg); color: var(--badge-text); border: 1px solid var(--border-card);">
              ${step.num}
            </div>
            <div>
              <h4 class="font-bold text-sm text-title">${step.title}</h4>
              <p class="text-xs text-dim font-arabic">${step.ar}</p>
            </div>
          </div>
          <p class="text-xs text-body font-arabic leading-relaxed">${step.desc}</p>
        </div>
      `).join("");
    }

    const tracksContainer = document.getElementById("methodology-tracks-container");
    if (tracksContainer) {
      tracksContainer.innerHTML = ROADMAP_DATA.learningTracks.map(trk => `
        <div class="p-4 rounded-xl glass-panel">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-sm text-title">${trk.track}</h4>
            <span class="text-[11px] px-2 py-0.5 rounded font-mono ${trk.color}">${trk.status}</span>
          </div>
          <p class="text-xs text-body font-arabic leading-relaxed">${trk.role}</p>
        </div>
      `).join("");
    }
  }

  renderNotesTab() {
    const container = document.getElementById("notes-summary-container");
    if (!container) return;

    const topicsWithNotes = [];
    ROADMAP_DATA.phases.forEach(phase => {
      phase.topics.forEach(t => {
        if (this.state[t.id] && this.state[t.id].notes && this.state[t.id].notes.trim()) {
          topicsWithNotes.push({ ...t, phase, notes: this.state[t.id].notes });
        }
      });
    });

    if (topicsWithNotes.length === 0) {
      container.innerHTML = `
        <div class="text-center py-16 glass-panel rounded-xl">
          <i data-lucide="book-open" class="w-10 h-10 text-dim mx-auto mb-3"></i>
          <h3 class="text-base font-bold text-title">No Study Notes Yet</h3>
          <p class="text-xs text-dim mt-1">Open any topic from the roadmap to write your thoughts, insights, and code snippets!</p>
        </div>
      `;
    } else {
      container.innerHTML = topicsWithNotes.map(item => `
        <div class="glass-panel rounded-xl p-5 mb-4">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs px-2 py-0.5 rounded" style="background: var(--badge-bg); color: var(--badge-text); border: 1px solid var(--border-card);">${item.number}</span>
              <h4 class="font-bold text-sm text-title">${item.title}</h4>
            </div>
            <button onclick="app.openDrawer('${item.id}')" class="text-xs text-blue-600 dark:text-blue-400 hover:underline">Edit Notes &rarr;</button>
          </div>
          <div class="p-3 rounded-lg text-xs font-mono text-body whitespace-pre-wrap leading-relaxed" style="background: var(--bg-input); border: 1px solid var(--border-card);">
            ${this.escapeHtml(item.notes)}
          </div>
        </div>
      `).join("");
    }
  }

  escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // --- Filter and Search ---
  setFilter(filterName) {
    this.currentFilter = filterName;
    document.querySelectorAll(".filter-btn").forEach(btn => {
      if (btn.getAttribute("data-filter") === filterName) {
        btn.classList.add("bg-blue-600", "text-white");
        btn.classList.remove("text-dim");
      } else {
        btn.classList.remove("bg-blue-600", "text-white");
        btn.classList.add("text-dim");
      }
    });
    this.renderRoadmap();
    if (window.lucide) lucide.createIcons();
  }

  resetFilters() {
    this.currentFilter = "all";
    this.searchQuery = "";
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";
    this.setFilter("all");
  }

  // --- Backup Export / Import ---
  exportBackup() {
    const data = {
      version: 3,
      exportDate: new Date().toISOString(),
      stats: this.stats,
      state: this.state
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Software_Engineering_Roadmap_Backup_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.playChime("success");
  }

  importBackup(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.state && data.stats) {
          this.state = data.state;
          this.stats = data.stats;
          this.saveState();
          this.renderAll();
          this.playChime("fanfare");
          alert("Backup successfully restored! Welcome back.");
        } else {
          alert("Invalid backup file format.");
        }
      } catch (err) {
        alert("Failed to read backup file.");
      }
    };
    reader.readAsText(file);
  }

  resetAllProgress() {
    if (confirm("Are you sure you want to reset all progress and start fresh? This cannot be undone unless you have a backup!")) {
      localStorage.removeItem(this.storageKey);
      localStorage.removeItem(this.statsKey);
      this.state = this.loadState();
      this.stats = this.loadStats();
      this.renderAll();
      alert("All progress reset to initial starting point.");
    }
  }

  // --- Event Listeners ---
  setupEventListeners() {
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        this.renderRoadmap();
        if (window.lucide) lucide.createIcons();
      });
    }

    const soundBtn = document.getElementById("sound-toggle-btn");
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        this.stats.soundEnabled = !this.stats.soundEnabled;
        this.saveState();
        this.renderStatsBar();
        if (this.stats.soundEnabled) this.playChime("success");
        if (window.lucide) lucide.createIcons();
      });
    }

    document.querySelectorAll(".nav-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab");
        this.activeTab = target;

        document.querySelectorAll(".nav-tab").forEach(t => {
          t.classList.remove("border-blue-500", "text-blue-500", "font-bold");
          t.classList.add("border-transparent", "text-dim");
        });
        tab.classList.add("border-blue-500", "text-blue-500", "font-bold");
        tab.classList.remove("border-transparent", "text-dim");

        document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
        const targetContent = document.getElementById(`tab-content-${target}`);
        if (targetContent) targetContent.classList.remove("hidden");

        if (target === "notes") this.renderNotesTab();
        if (window.lucide) lucide.createIcons();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeDrawer();
    });
  }
}

// Instantiate on load
let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new LearningPlatform();
  window.app = app;
});
