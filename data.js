// Software Engineering Learning Platform Data
// Extracted with 100% fidelity from Software_Engineering_Roadmap.md

const ROADMAP_DATA = {
  meta: {
    title: "Software Engineering Roadmap & Learning Platform",
    subtitle: "خطة إتقان هندسة البرمجيات — من الأساسيات إلى الأنظمة الموزعة",
    goal: "بناء عقلية ومهارات Software Engineer قادرة على تصميم وبناء وتشغيل أنظمة برمجية حقيقية، مع أساس قوي يخدم التخصص لاحقًا في AI Engineering وML Engineering.",
    currentTopicId: "p1_3",
    initialCompleted: ["p1_1", "p1_2"]
  },

  studySteps: [
    { num: 1, title: "Concept from zero", ar: "شرح الفكرة من الصفر", desc: "شرح الفكرة من نقطة البداية، دون افتراض أن معرفة الاسم تعني فهمه." },
    { num: 2, title: "Why it exists", ar: "لماذا وُجد هذا المفهوم؟", desc: "ما المشكلة التي أدت إلى ظهور المفهوم؟ وما الذي يحدث إن تجاهلناه؟" },
    { num: 3, title: "Engineering context", ar: "السياق الهندسي الواقعي", desc: "أين يظهر في الأنظمة والفرق والمنتجات الحقيقية؟" },
    { num: 4, title: "Worked example", ar: "مثال تطبيقي محلول", desc: "مثال محلول خطوة بخطوة يوضح التطبيق الفعلي." },
    { num: 5, title: "Design choices & trade-offs", ar: "خيارات التصميم والمفاضلات", desc: "البدائل المتاحة، متى نختار كل بديل، وتكلفة كل قرار هندسي." },
    { num: 6, title: "Practical exercise", ar: "تمرين عملي", desc: "تمرين تطبيقي بعد الشرح، مناسب لما تم تعليمه بالفعل." },
    { num: 7, title: "Review & feedback", ar: "مراجعة وتقييم", desc: "مراجعة الحل، وتوضيح النواقص وتصحيح طريقة التفكير." },
    { num: 8, title: "Connection", ar: "الربط بالمسار المستقبلي", desc: "ربط الموضوع بما سبق وبما سيأتي، وبـAI/ML Engineering عند الفائدة." }
  ],

  learningTracks: [
    {
      track: "Software Engineering Roadmap",
      role: "يبني الأساس الهندسي العام: Design, Code Quality, Systems, Testing, Production",
      status: "Active Track",
      color: "bg-blue-900/40 text-blue-300 border-blue-700/50"
    },
    {
      track: "DDIA (Designing Data-Intensive Applications)",
      role: "يعمّق فهم Databases, Storage, Replication, Streams, Distributed Systems",
      status: "Companion Deep-Dive",
      color: "bg-purple-900/40 text-purple-300 border-purple-700/50"
    },
    {
      track: "MLOps Engineering Roadmap",
      role: "يطبّق الهندسة على ML systems: Pipelines, Experiment tracking, Serving, Monitoring, LLMOps",
      status: "Upcoming Phase",
      color: "bg-amber-900/40 text-amber-300 border-amber-700/50"
    },
    {
      track: "AI Engineering Book",
      role: "يشرح بناء التطبيقات والأنظمة المعتمدة على Foundation Models",
      status: "Specialization",
      color: "bg-emerald-900/40 text-emerald-300 border-emerald-700/50"
    }
  ],

  // 10 Real-world Domain Systems with explicit topic links
  projects: [
    {
      id: "proj_1",
      domain: "FinTech",
      system: "Payment Processing & Fraud Engine",
      systemAr: "محرك معالجة المدفوعات وكشف الاحتيال",
      challenges: ["Idempotency", "Transaction states", "Reconciliation", "Low-latency scoring"],
      icon: "credit-card",
      requiredTopics: ["p3_4", "p4_2", "p4_6", "p5_3"],
      description: "نظام مالي يتطلب معالجة دقيقة للمدفوعات ومنع السحب المزدوج وتسجيل حركات الحسابات مع فحص فوري لاحتمالية الاحتيال."
    },
    {
      id: "proj_2",
      domain: "Logistics",
      system: "Fleet & Delivery Optimization",
      systemAr: "منظومة إدارة وتحسين أسطول الشحن والتوصيل",
      challenges: ["Geospatial data", "Real-time updates", "Intermittent connectivity", "Scheduling"],
      icon: "truck",
      requiredTopics: ["p3_3", "p4_2", "p7_2", "p7_3"],
      description: "تتبع حركة الشاحنات والطرود جغرافياً في الوقت الفعلي مع التعامل مع انقطاع الشبكة وجدولة مسارات التوصيل بأعلى كفاءة."
    },
    {
      id: "proj_3",
      domain: "Healthcare",
      system: "Hospital Resource Coordination",
      systemAr: "منظومة تنسيق الموارد والمواعيد بالمستشفيات",
      challenges: ["Concurrent booking", "Transactions", "Audit logs", "Access control"],
      icon: "activity",
      requiredTopics: ["p2_5", "p3_4", "p4_4", "p4_5"],
      description: "حجز غرف العمليات والأجهزة الطبية الحساسة مع منع الحجز المتزامن، وسجلات تدقيق كاملة، وصلاحيات صارمة لحماية بيانات المرضى."
    },
    {
      id: "proj_4",
      domain: "E-commerce",
      system: "Inventory & Order Orchestration",
      systemAr: "إدارة المخزون وتنسيق الطلبات المعقدة",
      challenges: ["Overselling prevention", "Reservations", "Saga pattern", "Queues", "Eventual consistency"],
      icon: "shopping-bag",
      requiredTopics: ["p4_2", "p4_6", "p5_2", "p5_3"],
      description: "معالجة آلاف الطلبات في نفس اللحظة بدون بيع كميات غير متوفرة، وتطبيق Saga Pattern لمعاملات الشراء والشحن المتعددة."
    },
    {
      id: "proj_5",
      domain: "Industrial IoT",
      system: "Predictive Maintenance Platform",
      systemAr: "منصة الصيانة التنبؤية لحساسات المصانع",
      challenges: ["Sensor streams", "Time-series data", "Data drift", "Alerting", "Observability"],
      icon: "cpu",
      requiredTopics: ["p4_2", "p5_5", "p6_4", "p7_3"],
      description: "استقبال تدفق بيانات الحساسات اللحظية وتخزينها كسلاسل زمنية مع تحليل تنبؤي للأعطال قبل وقوعها وإرسال تنبيهات طارئة."
    },
    {
      id: "proj_6",
      domain: "Developer Infra",
      system: "Distributed Build System",
      systemAr: "نظام بناء وتجميع البرمجيات الموزع",
      challenges: ["Task scheduling", "Worker failures", "Parallel execution", "Artifact caching"],
      icon: "terminal",
      requiredTopics: ["p4_3", "p5_1", "p6_3", "p7_1"],
      description: "توزيع مهام تجميع الكود واختباراته على عشرات الخوادم المتوازية، واسترجاع المخرجات المخبأة لتسريع الـ Build."
    },
    {
      id: "proj_7",
      domain: "Cloud Operations",
      system: "Cloud Cost Intelligence Platform",
      systemAr: "منصة ذكاء تكاليف السحابة وإدارتها",
      challenges: ["Usage ingestion", "Aggregation", "Anomaly detection", "Multi-tenant reporting"],
      icon: "cloud",
      requiredTopics: ["p3_2", "p4_4", "p5_4", "p6_5"],
      description: "تجميع فواتير واستهلاك موارد السحابة لآلاف العملاء وتحديد القفزات غير الطبيعية في التكلفة وإصدار تقارير تحليلية."
    },
    {
      id: "proj_8",
      domain: "Ticketing",
      system: "High-Demand Seat Reservation",
      systemAr: "نظام حجز تذاكر الحفلات والمباريات عالي الضغط",
      challenges: ["Contention", "Temporary holds", "Consistency", "Fairness", "Rate limiting"],
      icon: "ticket",
      requiredTopics: ["p4_3", "p4_4", "p4_6", "p5_6"],
      description: "مواجهة هجوم آلاف المستخدمين لحجز نفس المقعد في نفس الثانية مع حجز مؤقت (TTL) وتحديد المعدل لمنع البوتات."
    },
    {
      id: "proj_9",
      domain: "Collaboration",
      system: "Real-Time Collaborative Workspace",
      systemAr: "مساحة عمل تعاونية لحظية",
      challenges: ["WebSockets", "Concurrency control", "Conflict resolution (CRDT/OT)", "Presence"],
      icon: "users",
      requiredTopics: ["p5_3", "p5_5", "p7_2", "p7_3"],
      description: "محرر مستندات أو لوحة بيضاء تفاعلية تتيح لعدة مهندسين التعديل في الوقت الفعلي مع حل تعارض التعديلات المتزامنة."
    },
    {
      id: "proj_10",
      domain: "Telecom",
      system: "Network Observability Platform",
      systemAr: "منصة مراقبة وتحليل شبكات الاتصالات",
      challenges: ["High-volume telemetry", "Stream processing", "Alert correlation", "p99 latency"],
      icon: "wifi",
      requiredTopics: ["p3_2", "p5_5", "p6_2", "p6_4"],
      description: "معالجة مليارات حزم البيانات وعزل الإنذارات المتكررة وربطها بالسبب الجذري للأعطال في أجزاء من الثانية."
    }
  ],

  phases: [
    {
      id: "phase_1",
      number: 1,
      badge: "Phase 1",
      title: "Software Engineering Foundations",
      titleAr: "أساسيات هندسة البرمجيات والتفكير الهندسي",
      goal: "فهم طريقة عمل فرق البرمجيات، وتحويل مشكلة غير واضحة إلى متطلبات قابلة للتنفيذ والاختبار.",
      outcome: "القدرة على فهم طلب منتج، تفكيكه إلى متطلبات ومهام، وتتبّع العمل داخل فريق تطوير.",
      icon: "compass",
      accent: "#2563eb",
      topics: [
        {
          id: "p1_1",
          number: "1.1",
          title: "Software Engineering Mindset",
          titleAr: "عقلية مهندس البرمجيات",
          summary: "الفرق الجوهري بين مجرد كتابة كود وهندسة نظام متكامل طويل الأجل.",
          points: [
            "الفرق بين Programming وSoftware Engineering.",
            "دورة حياة تطوير البرمجيات (SDLC).",
            "التفكير في النظام كمنتج طويل العمر، وليس مجرد برنامج يعمل لمرة واحدة.",
            "فهم المشكلة وجذورها بعمق قبل اختيار التكنولوجيا.",
            "التعامل المنهجي مع المتطلبات والقيود والمخاطر."
          ],
          questions: [
            {
              q: "What is the primary difference between a programmer and a software engineer?",
              hint: "Think about lifespan, maintenance, team communication, and edge cases.",
              answer: "Programming is primarily about writing code that satisfies an immediate requirement. Software engineering treats software as a multi-year living asset: designing for evolvability, failure modes, maintainability, testing, operational safety, and cross-team collaboration."
            },
            {
              q: "Why is premature technology selection a critical failure mode in engineering?",
              hint: "Problem vs Solution space.",
              answer: "Choosing tech before fully characterizing data access patterns, constraints, and latency budgets forces you to warp the problem around your chosen tool's limitations rather than solving the business reality."
            }
          ]
        },
        {
          id: "p1_2",
          number: "1.2",
          title: "Requirements Engineering",
          titleAr: "هندسة المتطلبات والمواصفات",
          summary: "استخراج المتطلبات وتوثيقها والتمييز بين الوظائف والصفات النوعية.",
          points: [
            "Requirements Elicitation: جمع المتطلبات من أصحاب المصلحة.",
            "Requirements Analysis: تحليل المتطلبات وإزالة التعارض والغموض.",
            "Requirements Specification: توثيق المتطلبات بدقة.",
            "Requirements Validation: التأكد من أن المتطلبات تعكس المشكلة الحقيقية.",
            "Requirements Management: التعامل مع تغيّر المتطلبات باستمرار.",
            "Functional Requirements (FR) مقابل Non-Functional Requirements (NFR).",
            "Constraints, Assumptions, Dependencies.",
            "Business Rules & Acceptance Criteria.",
            "Edge Cases وFailure Scenarios.",
            "مقدمة إلى Software Requirements Specification (SRS)."
          ],
          questions: [
            {
              q: "Why can a system satisfy all Functional Requirements (FR) yet still completely fail in production?",
              hint: "Think about latency, availability, concurrency, and security.",
              answer: "A feature can compute the correct output, but if latency is 15 seconds under 1,000 requests/sec, or if it leaks PII, or if concurrent users cause double booking, the system fails due to unaddressed Non-Functional Requirements (NFRs)."
            },
            {
              q: "How do you turn a vague stakeholder request like 'Make the checkout fast' into an engineering specification?",
              hint: "Use measurable percentiles and budgets.",
              answer: "Define precise metrics: e.g., 'Payment authorization p99 latency must be under 350ms for payload sizes up to 10KB under a steady-state throughput of 500 RPS.'"
            }
          ]
        },
        {
          id: "p1_3",
          number: "1.3",
          title: "SDLC & Delivery Process",
          titleAr: "دورات تطوير البرمجيات والمنهجيات الرشيقة",
          summary: "مناهج إدارة المشروعات البرمجية وتسليم المنتجات بكفاءة.",
          points: [
            "Waterfall مقابل Iterative وIncremental Development.",
            "Agile mindset ومتى يكون مفيدًا.",
            "Scrum: Roles, Events, Artifacts.",
            "Sprint Planning, Daily Scrum, Review, Retrospective.",
            "Product Backlog وSprint Backlog.",
            "Epics, User Stories, Tasks, Bugs.",
            "Estimation وPrioritization.",
            "Definition of Ready (DoR) وDefinition of Done (DoD).",
            "التعامل مع التغيير والتأخير والمخاطر."
          ],
          questions: [
            {
              q: "When is a Waterfall approach genuinely better than an Agile/Scrum process?",
              hint: "Consider fixed regulatory specifications, hardware coupling, and cost of change.",
              answer: "When requirements are strictly bound by external hardware specs, medical/aerospace regulations, or physical interfaces where the cost of change post-deployment is catastrophic and requirements are stable and fully known upfront."
            },
            {
              q: "What is the engineering danger of conflating 'Definition of Done' (DoD) with 'It works on my machine'?",
              hint: "Think about tests, documentation, observability, and migrations.",
              answer: "Code that works locally hasn't met CI passing criteria, automated test coverage, security review, backward-compatible migrations, or deployment verification in staging."
            }
          ]
        },
        {
          id: "p1_4",
          number: "1.4",
          title: "Working in a Software Team",
          titleAr: "العمل الاحترافي ضمن فرق البرمجة",
          summary: "تقسيم المهام، التواصل التقني، وتسليم المشروعات بدون فجوات.",
          points: [
            "تقسيم العمل وتحديد المسؤوليات وتجنب الازدواجية.",
            "Task ownership وتقديم status updates دورية وفعالة.",
            "Technical documentation: كتابة توثيق هندسي واضح ومفيد.",
            "Handover: تسليم العمل لشخص أو فريق آخر بسلاسة.",
            "كتابة تقارير واضحة عن التقدم والمشكلات والقرارات.",
            "التواصل البنّاء في Code Reviews والاجتماعات التقنية."
          ],
          questions: [
            {
              q: "What distinguishes a constructive code review from an unhelpful one?",
              hint: "Correctness, architecture, empathy, automated linting.",
              answer: "Constructive reviews focus on correctness, system boundaries, security, and edge cases with actionable suggestions and explanations. Style arguments (tabs vs spaces) should be delegated to automated linters/formatters."
            }
          ]
        },
        {
          id: "p1_5",
          number: "1.5",
          title: "Git & Collaboration Workflow",
          titleAr: "منظومة Git والتعاون الجماعي",
          summary: "إتقان التحكم في الإصدارات، استراتيجيات الفروع، وفحص الكود.",
          points: [
            "Git fundamentals: commits, branches, merge.",
            "Branching strategies (GitFlow vs Trunk-based development).",
            "Pull Requests (PRs) والمعايير الاحترافية لفتحها.",
            "Code Review fundamentals وكيفية إعطاء ملاحظات دقيقة.",
            "Merge conflicts: حل التعارضات بأمان.",
            "كتابة Commit messages وفق معايير Conventional Commits.",
            "التعامل مع Issues وBoards لتنظيم المهام.",
            "أساسيات العمل والمساهمة في Open-source repositories."
          ],
          questions: [
            {
              q: "Why do modern high-performing teams favor Trunk-Based Development over heavy GitFlow?",
              hint: "Merge debt, long-lived branches, and CI batch sizes.",
              answer: "Long-lived feature branches accumulate merge debt and delayed integration feedback. Trunk-based development with short-lived branches and feature flags ensures continuous integration, trivial merges, and faster rollbacks."
            }
          ]
        }
      ]
    },

    {
      id: "phase_2",
      number: 2,
      badge: "Phase 2",
      title: "Professional Software Development",
      titleAr: "تطوير البرمجيات الاحترافي وجودة الكود",
      goal: "كتابة كود يمكن لفريق آخر فهمه وتعديله واختباره وتوسيعه، وبناء تطبيق منظم بدل تكديس الوظائف في ملفات عشوائية.",
      outcome: "بناء تطبيق متوسط الحجم بهيكل واضح، وحدود مسؤوليات مفهومة، وكود قابل للاختبار والتطوير.",
      icon: "code",
      accent: "#059669",
      topics: [
        {
          id: "p2_1",
          number: "2.1",
          title: "Clean Code",
          titleAr: "الكود النظيف والقابل للقراءة",
          summary: "فنون التسمية، الدوال الصغيرة، معالجة الأخطاء، واكتشاف روائح الكود.",
          points: [
            "Naming وReadability: اختيار أسماء تعبر عن النوايا.",
            "Functions: Single responsibility, size, parameters, side effects.",
            "Error handling استباقي وواضح.",
            "Comments: متى نكتبها ومتى تكون علامة على كود غير واضح؟",
            "Code smells والتعرف عليها مبكرًا.",
            "Refactoring: إعادة الهيكلة دون كسر الوظائف.",
            "Avoiding duplication دون بناء تجريدات غير ضرورية (YAGNI/DRY).",
            "Balancing simplicity and extensibility."
          ],
          questions: [
            {
              q: "Why can blind adherence to DRY (Don't Repeat Yourself) lead to dangerous accidental coupling?",
              hint: "Consider two pieces of code that look identical today but evolve for different business reasons.",
              answer: "Premature abstraction merges two things with coincidentally identical shapes into one shared dependency. When business logic diverts later, modifying the abstraction causes cascading bugs. Duplication is cheaper than the wrong abstraction."
            }
          ]
        },
        {
          id: "p2_2",
          number: "2.2",
          title: "Core Design Principles",
          titleAr: "مبادئ التصميم الأساسية وSOLID",
          summary: "المبادئ المعمارية الخمسة ومفاهيم الترابط والاقتران.",
          points: [
            "Separation of Concerns (SoC).",
            "Modularity وتفكيك النظام إلى وحدات مستقلة.",
            "Abstraction وEncapsulation لحماية الحالة الداخلية.",
            "High Cohesion وLoose Coupling.",
            "SOLID Principles بالتفصيل (SRP, OCP, LSP, ISP, DIP).",
            "Composition vs Inheritance ولماذا نفضل التركيب.",
            "Dependency Injection (DI) وفك الارتباط.",
            "Programming to interfaces/contracts."
          ],
          questions: [
            {
              q: "Explain how violating the Liskov Substitution Principle (LSP) breaks polymorphic reliability.",
              hint: "A subtype should behave like its supertype without callers needing type-checks.",
              answer: "If substituting a subclass requires callers to check `if (obj instanceof SpecificSubtype)` or catch unexpected runtime exceptions (e.g. square inheriting from rectangle breaking aspect ratio), the abstraction contract is broken."
            }
          ]
        },
        {
          id: "p2_3",
          number: "2.3",
          title: "Object-Oriented Design",
          titleAr: "التصميم كائني التوجه ونمذجة النطاق",
          summary: "تصميم الكائنات وسلوكها ونمذجة مجالات الأعمال الواقعية.",
          points: [
            "Classes وObjects والفارق الحقيقي بينهما.",
            "إدارة State وBehavior داخل الكائنات.",
            "Interfaces وAbstract Classes وتحديد العقود البرمجية.",
            "Composition وعلاقات الكائنات.",
            "Polymorphism وتعدد الأشكال العملي.",
            "Domain modeling basics: تمثيل منطق العمل بكائنات نقية.",
            "متى يكون OOP مناسبًا، ومتى تكون Functions أو Data-oriented approaches أبسط؟"
          ],
          questions: [
            {
              q: "When is a pure data-oriented or functional pipeline preferable over an OOP domain model?",
              hint: "Data transformations, high-throughput batching, stateless microservices.",
              answer: "When work consists of sequential transformations on collections of data (e.g., ETL pipelines, ML tensor processing, stream analytics), pure functions and plain immutable records are simpler and far easier to parallelize than mutating stateful object hierarchies."
            }
          ]
        },
        {
          id: "p2_4",
          number: "2.4",
          title: "Design Patterns",
          titleAr: "أنماط التصميم المعمارية",
          summary: "حلول مثبتة لمشاكل تصميمية شائعة، وفهمها من المشكلة وليس حفظ أسمائها.",
          points: [
            "ما المشكلة التي تحاول Design Patterns حلها؟",
            "Creational, Structural, Behavioral patterns وتصنيفاتها.",
            "Factory, Strategy, Adapter, Observer, Decorator, Builder, Repository Patterns.",
            "فهم النمط من المشكلة الحقيقية، وليس حفظ اسمه.",
            "تجنّب استخدام Pattern لمجرد أنه معروف (Over-engineering)."
          ],
          questions: [
            {
              q: "How does the Strategy Pattern enable Open/Closed Principle (OCP) in payment processing?",
              hint: "Adding new payment providers (Stripe, PayPal, Apple Pay) without modifying core order service.",
              answer: "Core order logic accepts a `PaymentStrategy` interface. Adding crypto or BNPL simply requires writing a new class implementing the strategy without touching or risking regressions in existing battle-tested billing code."
            }
          ]
        },
        {
          id: "p2_5",
          number: "2.5",
          title: "Application Architecture",
          titleAr: "معمارية التطبيقات والحدود البرمجية",
          summary: "هيكلة التطبيق: Layered, Clean Architecture, Hexagonal.",
          points: [
            "Layered Architecture ومستوياتها التقليدية.",
            "Clean Architecture ومبدأ استقلالية النطاق.",
            "Hexagonal Architecture (Ports & Adapters).",
            "Domain, Application, Infrastructure, Presentation layers.",
            "Service Layer وRepository Pattern معًا.",
            "Dependency Rule: اتجاه الاعتمادات نحو الداخل دائماً.",
            "Boundaries between modules وكيفية حمايتها.",
            "Configuration management وفصل الإعدادات عن الكود.",
            "Logging basics وتسجيل الأحداث ذات القيمة.",
            "Error and exception strategy عبر كل الطبقات."
          ],
          questions: [
            {
              q: "What is the core benefit of the Dependency Rule in Clean/Hexagonal Architecture?",
              hint: "Dependencies only point inward toward business rules.",
              answer: "Core domain logic has zero imports of databases, HTTP frameworks, or external SDKs. You can swap Postgres for DynamoDB, or REST for gRPC, without touching single line of core business rules."
            }
          ]
        }
      ]
    },

    {
      id: "phase_3",
      number: 3,
      badge: "Phase 3",
      title: "System Design",
      titleAr: "تصميم الأنظمة وبنيتها التحتية",
      goal: "الانتقال من التفكير في function أو class إلى التفكير في نظام كامل، ومتطلباته ومكوناته وحدود أدائه.",
      outcome: "القدرة على تقديم تصميم أولي لنظام، وشرح مكوناته وتدفق البيانات والـtrade-offs وراء قراراته.",
      icon: "layers",
      accent: "#4f46e5",
      topics: [
        {
          id: "p3_1",
          number: "3.1",
          title: "System Design Fundamentals",
          titleAr: "أساسيات تصميم الأنظمة",
          summary: "التصميم عالي ومنخفض المستوى، حدود النظام، ونقاط الاختناق.",
          points: [
            "ما هو System Design؟ ولماذا نحتاجه؟",
            "High-Level Design (HLD) ورسم الصورة الشاملة.",
            "Low-Level Design (LLD) وتفاصيل المكونات الداخلية.",
            "Functional vs Non-Functional Requirements في قرارات التصميم.",
            "تحديد Scope والافتراضات والقيود الواقعية.",
            "Architecture diagrams وComponent diagrams.",
            "Data flow وControl flow عبر مسارات النظام.",
            "Identifying bottlenecks and single points of failure (SPOF)."
          ],
          questions: [
            {
              q: "How do you identify a Single Point of Failure (SPOF) in an architecture diagram?",
              hint: "Trace every critical user flow and check component redundancy.",
              answer: "Any single component, process, database master, or external DNS provider whose outage halts the entire system's primary user journey without automatic failover is a SPOF."
            }
          ]
        },
        {
          id: "p3_2",
          number: "3.2",
          title: "Quality Attributes & Trade-offs",
          titleAr: "صفات الجودة والمفاضلات الهندسية",
          summary: "قياس زمن الاستجابة، السعة، التوافرية، الموثوقية، والتضحيات المتبادلة.",
          points: [
            "Latency: قياس زمن استجابة النظام.",
            "Throughput: عدد العمليات المنفذة في الثانية.",
            "Availability: نسبة توافر الخدمة (The Nines).",
            "Reliability: احتمالية عمل النظام دون فشل.",
            "Scalability: التوسع العمودي والأفقي.",
            "Maintainability: سهولة صيانة وتطوير النظام.",
            "Fault Tolerance: استمرار العمل أثناء الأعطال الجزئية.",
            "Consistency: تناسق البيانات بين الأطراف.",
            "Security & Observability كصفات أساسية.",
            "SLO, SLA, SLI: قياس الالتزامات والحدود بالأرقام.",
            "Trade-offs: تحسين خاصية يدفع ثمنها في خاصية أخرى."
          ],
          questions: [
            {
              q: "Why is average latency (mean) a misleading metric compared to p95 and p99?",
              hint: "Long tails and slow user experience under multi-service fan-out.",
              answer: "If 1 in 100 requests takes 4 seconds due to garbage collection or DB contention, the mean might still look like 50ms. But a single web page making 20 sub-requests has a ~18% chance of hitting that 4-second delay for a real user."
            }
          ]
        },
        {
          id: "p3_3",
          number: "3.3",
          title: "API Design",
          titleAr: "تصميم واجهات البرمجة APIs",
          summary: "مبادئ REST، إصدارات الـ API، التوثيق، والتوافقية العكسية.",
          points: [
            "HTTP fundamentals (Headers, Verbs, Status codes).",
            "REST principles وأفضل ممارسات تصميم الموارد.",
            "Resources, methods, idempotency of HTTP verbs.",
            "Request/response design وتوحيد الهيكل.",
            "Pagination, filtering, sorting للبيانات الكبيرة.",
            "API versioning (URI, Header, Query).",
            "Input validation ومعالجة المدخلات الضارة مبكرًا.",
            "Error response conventions ورموز الأخطاء المعيارية.",
            "Authentication vs Authorization في سياق الـ API.",
            "API contracts وOpenAPI/Swagger basics.",
            "Backward compatibility وتجنب كسر واجهات العملاء."
          ],
          questions: [
            {
              q: "Why is Cursor-based pagination generally superior to Offset-based pagination for large data?",
              hint: "Performance on high offsets (`OFFSET 1000000`) and stability under live writes.",
              answer: "Offset requires database to scan and discard thousands of rows (`O(N)`). Furthermore, if items are added while a user paginates, offset shifts results, causing duplicate or skipped items. Cursors execute a constant `O(1)` index seek (`WHERE id > cursor LIMIT 20`)."
            }
          ]
        },
        {
          id: "p3_4",
          number: "3.4",
          title: "Database Design",
          titleAr: "تصميم قواعد البيانات ونماذج التخزين",
          summary: "قواعد البيانات العلاقية، الفهارس، المعاملات، والمفاضلة بين SQL وNoSQL.",
          points: [
            "Relational database concepts (Tables, columns, keys).",
            "Relationships (1:1, 1:N, N:M) والقيود المرجعية.",
            "Normalization basics (1NF, 2NF, 3NF) ومتى نتخلى عنها.",
            "ER diagrams ورسم علاقات الكيانات.",
            "SQL fundamentals for application engineering.",
            "Transactions والمعاملات المترابطة.",
            "ACID properties (Atomicity, Consistency, Isolation, Durability).",
            "Indexes (B-Tree, Hash) وتحليل query execution plans.",
            "Choosing SQL vs NoSQL based on access patterns and requirements.",
            "Schema evolution, migrations, and zero-downtime alterations."
          ],
          questions: [
            {
              q: "What is the cost of adding an index to a SQL database table?",
              hint: "Write penalty, memory, storage.",
              answer: "Indexes accelerate read queries, but every `INSERT`, `UPDATE`, or `DELETE` must synchronously update all related B-Tree index structures, increasing write latency, locking overhead, and RAM usage."
            }
          ]
        },
        {
          id: "p3_5",
          number: "3.5",
          title: "Design Practice",
          titleAr: "الممارسة العملية لتصميم الأنظمة",
          summary: "تطبيق HLD متكامل، توثيق القرارات، وتبرير التضحيات الهندسية.",
          points: [
            "تحويل متطلبات غامضة إلى High-Level Design متكامل.",
            "تحديد المكونات ومسؤولية كل مكوّن بدقة.",
            "تصميم APIs وDatabase schema متناسقة مع متطلبات النظام.",
            "رسم أهم مسارات تدفق البيانات (Data Flows).",
            "تحديد نقاط الفشل والقيود الحتمية ووضع خطط تلافيها.",
            "توثيق القرارات الهندسية والبدائل المرفوضة وأسباب رفضها."
          ],
          questions: [
            {
              q: "Why is documenting rejected alternatives in an ADR (Architecture Decision Record) as important as documenting the chosen design?",
              hint: "Preventing repetitive arguments 6 months later when team context shifts.",
              answer: "Engineers joining later will inevitably ask 'Why didn't we just use Tool X?'. An ADR records the specific constraints and trade-offs of that moment, preventing repeating the same costly debate."
            }
          ]
        }
      ]
    },

    {
      id: "phase_4",
      number: 4,
      badge: "Phase 4",
      title: "Backend Engineering, Security & Performance",
      titleAr: "هندسة الخوادم الخلفية، الأمان، والأداء العالي",
      goal: "فهم ما يحدث خلف الـAPI، وكيف نبني خدمات Backend تتحمل الاستخدام الحقيقي وتتعامل بأمان مع الأعطال والضغط.",
      outcome: "بناء Backend service يتعامل مع البيانات والطلبات والمهام الخلفية والأخطاء بطريقة آمنة وقابلة للقياس.",
      icon: "server",
      accent: "#d97706",
      topics: [
        {
          id: "p4_1",
          number: "4.1",
          title: "Backend Architecture",
          titleAr: "معمارية الخدمات الخلفية وتدفق الطلبات",
          summary: "دورة حياة الطلب، المصادقة بالتوكن، والبوابات السحابية.",
          points: [
            "Request lifecycle من وصول السوكت وحتى إرجاع الاستجابة.",
            "Routing, middleware, controllers, services وتنظيمها.",
            "Input validation and serialization بأمان وسرعة.",
            "Authentication and authorization: Session-based vs Token-based.",
            "JWT: Structure, use cases, revocation, and security limitations.",
            "API Gateway: الغرض، المسؤوليات، وتوجيه المسارات.",
            "Service-to-service communication basics (REST, gRPC, RPC)."
          ],
          questions: [
            {
              q: "What is the primary operational headache of stateless JWTs when an account is compromised?",
              hint: "Revocation and blacklisting.",
              answer: "Because JWTs are verified cryptographically without database lookup, you cannot instantly revoke a compromised token before its expiration unless you introduce state (e.g. Redis revocation blacklist), which partially negates its stateless benefit."
            }
          ]
        },
        {
          id: "p4_2",
          number: "4.2",
          title: "Asynchronous Processing & Messaging",
          titleAr: "المعالجة غير المتزامنة وأنظمة الرسائل",
          summary: "قوائم الرسائل، طوابير الانتظار، Kafka وRabbitMQ، والتعامل مع التكرار.",
          points: [
            "Synchronous vs asynchronous workflows ومتى نفضل كل منهما.",
            "Background jobs ومعالجة المهام الثقيلة خارج الطلب المباشر.",
            "Message queues: Producers, consumers, brokers.",
            "Retry policies واستراتيجيات إعادة المحاولة الذكية.",
            "Dead-letter queues (DLQ) لجمع الرسائل المعطوبة.",
            "Message acknowledgment وحماية الرسائل من الفقد.",
            "At-most-once, at-least-once, and effectively-once processing.",
            "Idempotency: ضمان عدم تكرار أثر العملية الواحدة.",
            "RabbitMQ vs Kafka: الفروقات الجوهرية وحالات الاستخدام المناسبة.",
            "Event-driven communication fundamentals."
          ],
          questions: [
            {
              q: "Why is idempotency mandatory for consumers in an at-least-once message queue?",
              hint: "Network timeouts during ACKs cause duplicate message delivery.",
              answer: "If a worker finishes processing a charge but crashes or drops network before acknowledging to the broker, the broker redelivers the message to another worker. Without idempotency keys, the customer is billed twice."
            }
          ]
        },
        {
          id: "p4_3",
          number: "4.3",
          title: "Caching",
          titleAr: "التخزين المؤقت وتحسين السرعة",
          summary: "استراتيجيات الكاش، انتهاء الصلاحية، Redis، وتفادي الانهيارات.",
          points: [
            "Why caching exists: تقليل زمن الوصول وتخفيف الحمل على قواعد البيانات.",
            "Cache strategies: Cache-aside, Read-through, Write-through, Write-behind.",
            "TTL (Time to Live) واستراتيجيات التحديث والإبطال (Invalidation).",
            "Cache consistency: التعامل مع تعارض البيانات المخزنة.",
            "Cache stampede / Thundering herd وكيفية تجنبه.",
            "Redis fundamentals: Data structures, persistence, Pub/Sub.",
            "What should and should NOT be cached.",
            "Measuring whether caching actually improves the system or adds useless complexity."
          ],
          questions: [
            {
              q: "What causes a Cache Stampede (Thundering Herd) and how do you protect against it?",
              hint: "A hot key expires under heavy concurrent read traffic.",
              answer: "When a popular key expires, hundreds of concurrent requests find a cache miss and all execute the heavy DB query simultaneously, crashing the database. Solved with mutex locking during miss, probabilistic early refresh (XFetch), or background pre-warming."
            }
          ]
        },
        {
          id: "p4_4",
          number: "4.4",
          title: "Database & API Performance",
          titleAr: "أداء قواعد البيانات والواجهات البرمجية",
          summary: "مشكلة N+1، الفهارس الذكية، مجمعات الاتصال، وميزانيات زمن الاستجابة.",
          points: [
            "Query optimization وتحليل مسارات الاستعلام البطيئة.",
            "Index selection: متى نضع فهرساً ومتى يضر الفهرس بسرعة الكتابة؟",
            "N+1 query problem وحلها الجذري.",
            "Connection pooling وإدارة اتصالات قاعدة البيانات.",
            "Pagination strategies: Offset-based vs Cursor-based.",
            "Locking and contention (Optimistic vs Pessimistic locks).",
            "Batch operations لتجميع العمليات وتقليل تكلفة الشبكة.",
            "Profiling before optimizing: لا تحسّن دون قياس مسبق.",
            "Latency budgets وتحديد ميزانية الوقت لكل جزء من الطلب."
          ],
          questions: [
            {
              q: "Explain the N+1 query problem and how eager loading solves it.",
              hint: "1 query to fetch posts, then N separate queries for each post's author.",
              answer: "An ORM loop issues 1 query for N records, and then in a loop issues N individual queries for their foreign relations. Eager loading combines this into either an efficient JOIN or a single batched `WHERE id IN (...)` query."
            }
          ]
        },
        {
          id: "p4_5",
          number: "4.5",
          title: "Security Engineering",
          titleAr: "هندسة الأمان وحماية الأنظمة",
          summary: "OWASP Top 10، التشفير، إدارة الأسرار، وتفادي الاختراقات الشهيرة.",
          points: [
            "Security mindset and threat modeling basics.",
            "OWASP Top 10 overview والفهم العميق للثغرات الشائعة.",
            "SQL Injection والوقاية بواسطة Parameterized Queries.",
            "Cross-Site Scripting (XSS) وCross-Site Request Forgery (CSRF).",
            "Broken Access Control وضمان صلاحيات المستخدمين بدقة.",
            "Password hashing (Argon2, bcrypt) وأخطاء التخزين.",
            "Secrets management وإبعاد المفاتيح الحساسة عن مستودعات الكود.",
            "Encryption in transit (TLS) and at rest.",
            "Principle of Least Privilege وتحديد الصلاحيات بالحد الأدنى.",
            "Audit logging and sensitive-data handling (GDPR/PII compliance)."
          ],
          questions: [
            {
              q: "Why does string concatenation in SQL queries lead to injection, and why do prepared statements prevent it?",
              hint: "Separating code from data.",
              answer: "Concatenation lets untrusted user input change the AST (syntax tree) of the query. Prepared statements compile the SQL query first; user input is then bound purely as literal parameters and can never be executed as instructions."
            }
          ]
        },
        {
          id: "p4_6",
          number: "4.6",
          title: "Resilience & Failure Handling",
          titleAr: "المرونة وهندسة تحمل الأعطال",
          summary: "قواطع الدوائر، التراجع الأسي، تحديد المعدل، والتدهور السلس.",
          points: [
            "Timeouts: ضبط حدود زمنية واقعية لكل اتصال خارجي.",
            "Retries with exponential backoff and Jitter.",
            "Circuit Breaker pattern لمنع استنزاف الموارد عند انهيار الخدمات.",
            "Bulkhead isolation: عزل مكونات النظام لمنع انتشار العطل.",
            "Rate limiting and throttling لحماية النظام من الإغراق.",
            "Idempotency keys في الطلبات الحساسة.",
            "Graceful degradation: استمرار الوظائف الحيوية عند توقف الثانوية.",
            "Handling external provider failures بأمان.",
            "Avoiding retry storms and cascading failures."
          ],
          questions: [
            {
              q: "Why is 'Jitter' critical when performing exponential backoff retries?",
              hint: "Preventing synchronized retry stampedes.",
              answer: "Without random jitter, all failed clients retry at the exact same synchronized intervals (e.g. 1s, 2s, 4s), hammering the recovering backend with waves of simultaneous load (retry storm)."
            }
          ]
        }
      ]
    },

    {
      id: "phase_5",
      number: 5,
      badge: "Phase 5",
      title: "Distributed Systems & Advanced Architecture",
      titleAr: "الأنظمة الموزعة والمعماريات المتقدمة",
      goal: "فهم الأنظمة التي تتكون من عدة خدمات أو أجهزة، ولماذا تظهر مشكلات لا يمكن حلها بالطريقة نفسها المستخدمة داخل برنامج واحد.",
      outcome: "القدرة على تحليل تصميم distributed system، وفهم consistency/failure/scaling trade-offs، واختيار architecture تتناسب مع المشكلة بدل اتباع الموضة التقنية.",
      icon: "network",
      accent: "#0284c7",
      topics: [
        {
          id: "p5_1",
          number: "5.1",
          title: "Distributed Systems Foundations",
          titleAr: "أسس الأنظمة الموزعة ومشاكل الشبكة",
          summary: "فشل الشبكات الجزئي، اكتشاف الخدمات، والمفاضلة بين Monolith وMicroservices.",
          points: [
            "What makes a system distributed? التحديات غير الموجودة في تطبيق الخادم الواحد.",
            "Network failures and partial failures: التعامل مع حتمية انقطاع الشبكة.",
            "Timeouts and unreliable communication.",
            "Service discovery basics وكيف تجد الخدمات بعضها البعض.",
            "Synchronous vs asynchronous inter-service communication.",
            "Monolith vs modular monolith vs microservices.",
            "When microservices are justified—and when they are unnecessary and harmful."
          ],
          questions: [
            {
              q: "Why is a network timeout ambiguous in a distributed system?",
              hint: "Did the request fail on the way there, crash the server, or fail on the reply?",
              answer: "A client timeout provides zero certainty: the packet might have dropped before arriving, the server might have processed it and crashed, or the response packet got lost. The state of the remote operation is completely unknown."
            }
          ]
        },
        {
          id: "p5_2",
          number: "5.2",
          title: "Domain-Driven Design (DDD)",
          titleAr: "التصميم الموجه بمجال العمل (DDD)",
          summary: "السياقات المحدودة، اللغة المشتركة، وجذور التجميع لتقسيم الخدمات.",
          points: [
            "Domain and Subdomain (Core, Supporting, Generic).",
            "Ubiquitous Language وتوحيد المفردات بين المطورين ومسؤولي الأعمال.",
            "Bounded Contexts ورسم حدود النطاقات المستقلة.",
            "Entities and Value Objects والفرق الجوهري بين الهوية والقيمة.",
            "Aggregates and Aggregate Roots وحماية اتساق البيانات.",
            "Domain Services وDomain Events.",
            "Context Mapping basics: خرائط العلاقات بين السياقات المختلفة.",
            "Aligning software boundaries with business domains."
          ],
          questions: [
            {
              q: "How does a Bounded Context prevent database coupling across microservices?",
              hint: "A 'User' in Authentication context vs 'Customer' in Billing context.",
              answer: "Instead of forcing one bloated monolithic User model across all services, each context maintains its own distinct domain model with only the fields relevant to its business invariants."
            }
          ]
        },
        {
          id: "p5_3",
          number: "5.3",
          title: "Consistency & Distributed Data",
          titleAr: "الاتساق والبيانات في البيئات الموزعة",
          summary: "نظرية CAP، التوافق النهائي، Saga Pattern، وOutbox Pattern.",
          points: [
            "Strong consistency مقابل Eventual consistency.",
            "Replication: نسخ البيانات بين عقد الخوادم.",
            "Sharding and partitioning: تجزئة قواعد البيانات الضخمة.",
            "CAP theorem and its practical interpretation in real systems.",
            "Quorums at a conceptual level (Read/Write quorums).",
            "Data ownership across services: كل خدمة تملك بياناتها حصراً.",
            "Distributed transactions وتحديات 2PC.",
            "Saga pattern: Choreography vs Orchestration لإدارة المعاملات الموزعة.",
            "Transactional Outbox pattern لضمان إرسال الأحداث دون فقد.",
            "Reconciliation workflows لمعالجة الفروقات المالية والمحاسبية دورياً."
          ],
          questions: [
            {
              q: "How does the Transactional Outbox pattern solve the dual-write problem between a DB and a message broker?",
              hint: "Writing to DB and publishing to Kafka cannot be wrapped in one atomic ACID transaction.",
              answer: "You write the domain state AND an event record into an 'outbox' table in the SAME local database ACID transaction. A separate relay process tails the outbox table and publishes events to the broker, ensuring zero lost messages."
            }
          ]
        },
        {
          id: "p5_4",
          number: "5.4",
          title: "Scalability & High Availability",
          titleAr: "قابلية التوسع والجاهزية العالية",
          summary: "موازنة الأحمال، الخدمات عديمة الحالة، النسخ الاحتياطية، وتفادي الفشل.",
          points: [
            "Vertical vs horizontal scaling وتكلفة كل خيار.",
            "Load balancing (L4 vs L7, Round Robin, Least Connections, IP Hash).",
            "Stateless vs stateful services ولماذا نسعى لـ Stateless Backend.",
            "Database scaling approaches: Read replicas, Write scaling.",
            "High Availability (HA) والتكرار الجغرافي (Multi-region).",
            "Fault tolerance, redundancy, and automatic failover.",
            "Capacity planning والتنبؤ بالاحتياجات المستقبلية للموارد.",
            "Backpressure: حماية المستهلكين من الطوفان الزائد للطلبات.",
            "Resource isolation لمنع احتكار أحد المستأجرين للخادم."
          ],
          questions: [
            {
              q: "What is replication lag and why can it cause 'read-after-write' inconsistency?",
              hint: "User creates a post on the primary DB, then refreshes the feed hitting a read replica.",
              answer: "Asynchronous replication to read replicas takes milliseconds to seconds. If a user writes to primary and immediately reads from a replica that hasn't received the replication stream yet, their new post appears to have vanished."
            }
          ]
        },
        {
          id: "p5_5",
          number: "5.5",
          title: "Event-Driven Architecture",
          titleAr: "المعمارية الموجهة بالأحداث (EDA)",
          summary: "الناشر والمشترك، ترتيب الأحداث، Event Sourcing، وتدفق البيانات.",
          points: [
            "Events vs commands: الفرق بين الإخبار عن حدث وإصدار أمر تنفيذي.",
            "Event producers, consumers, and event brokers.",
            "Event schemas and versioning (Avro, Protobuf, JSON Schema).",
            "Pub/Sub patterns وتوزيع الأحداث المتوازي.",
            "Event ordering وتحديات الترتيب في البيئات الموزعة.",
            "Duplicate delivery and consumer idempotency.",
            "Event sourcing: المفاهيم، الفوائد الهائلة، والتكاليف التشغيلية.",
            "Stream processing fundamentals (Kafka Streams, Flink)."
          ],
          questions: [
            {
              q: "What is the difference between a Command and an Event in messaging?",
              hint: "Intent vs History.",
              answer: "A Command (`CreateOrder`) is an instruction to a single recipient that can be rejected. An Event (`OrderCreated`) is an immutable statement of fact that has already occurred; multiple subscribers observe and react to it independently."
            }
          ]
        },
        {
          id: "p5_6",
          number: "5.6",
          title: "Bottlenecks & Complex Failure Scenarios",
          titleAr: "نقاط الاختناق وسيناريوهات الفشل المعقدة",
          summary: "الانهيارات المتتالية، المفاتيح الساخنة، تدافع القطيع، والتعافي من الكوارث.",
          points: [
            "Finding bottlenecks across application, database, network, and infrastructure.",
            "Cascading failures وكيف ينهار النظام تدريجياً بسبب عطل بسيط.",
            "Hot partitions and hot keys في قواعد البيانات الموزعة.",
            "Queue buildup and consumer lag وتراكم المهام.",
            "Thundering herd problem وحلولها الجذرية.",
            "Split-brain at a conceptual level وفقدان التنسيق بين الخوادم.",
            "Race conditions across services وطرق كشفها.",
            "Load shedding and graceful degradation تحت الضغط الشديد.",
            "Designing for recovery, not only prevention: تقليل MTTR."
          ],
          questions: [
            {
              q: "What is 'Load Shedding' and why is dropping requests better than trying to serve them all?",
              hint: "Queuing up requests past capacity increases latency for everyone until timeouts cascade.",
              answer: "When a system operates past its saturation knee, queued requests time out while still consuming CPU. Actively rejecting excess traffic with HTTP 429/503 allows the system to process the accepted requests at normal speed without crashing."
            }
          ]
        }
      ]
    },

    {
      id: "phase_6",
      number: 6,
      badge: "Phase 6",
      title: "Testing, Production Engineering & Technical Judgment",
      titleAr: "الاختبارات، هندسة الإنتاج، والحكم الهندسي الناضج",
      goal: "التأكد من أن النظام يعمل كما ينبغي، ثم تشغيله ومراقبته وتحسينه، واتخاذ قرارات هندسية يمكن الدفاع عنها.",
      outcome: "القدرة على اختبار وتشغيل ومراقبة نظام، وتحليل المشكلات، ومراجعة كود الآخرين، وتبرير القرارات التقنية.",
      icon: "shield-check",
      accent: "#7c3aed",
      topics: [
        {
          id: "p6_1",
          number: "6.1",
          title: "Testing Strategy",
          titleAr: "استراتيجيات الاختبار وهرم التيست",
          summary: "هرم الاختبارات، اختبارات الوحدة والتكامل، TDD، ومحاكاة البيانات.",
          points: [
            "Testing pyramid: Unit, Integration, E2E balance.",
            "Unit testing: اختبار المنطق النقي بسرعة وعزل.",
            "Integration testing: التأكد من ترابط قاعدة البيانات والخدمات.",
            "End-to-End (E2E) testing وسيناريوهات رحلة المستخدم.",
            "Contract testing لحماية توافق الـ APIs المشتركة.",
            "Regression testing لمنع عودة الأخطاء السابقة.",
            "Test fixtures, test containers, and test data management.",
            "Mocking, stubs, and fakes: متى نستخدمها ومتى تضللنا؟",
            "Test coverage and its limitations: الكثافة لا تعني الجودة.",
            "Test-Driven Development (TDD) كمنهجية تفكير وتصميم.",
            "Testing failure scenarios and edge cases."
          ],
          questions: [
            {
              q: "Why can 100% test coverage still result in catastrophic production bugs?",
              hint: "Tests verify that code does what the author wrote, not what the business needed.",
              answer: "Coverage only measures line execution, not edge cases, network failures, concurrency race conditions, or incorrect assumptions about third-party API contracts."
            }
          ]
        },
        {
          id: "p6_2",
          number: "6.2",
          title: "Performance & Reliability Testing",
          titleAr: "اختبارات الأداء والموثوقية وتحمل الضغط",
          summary: "اختبارات الحمل والإجهاد، المئينات (p95/p99)، واكتشاف التدهور في الأداء.",
          points: [
            "Load testing: التحقق من أداء النظام تحت الأحمال الطبيعية المتوقعة.",
            "Stress testing: دفع النظام حتى نقطة الانهيار لمعرفة حدوده.",
            "Spike testing: محاكاة القفزات المفاجئة في أعداد المستخدمين.",
            "Soak testing: تشغيل النظام لفترات طويلة لكشف تسريبات الذاكرة (Memory Leaks).",
            "Benchmarking وقياس الأداء بدقة رياضية.",
            "Latency percentiles: p50, p95, p99 ولماذا المتوسط الحسابي مضلل جداً.",
            "Throughput and saturation: متى يتشبع الخادم ويبدأ في رفض الطلبات.",
            "Identifying performance regressions بعد التحديثات.",
            "Testing recovery and resilience behavior."
          ],
          questions: [
            {
              q: "What is a 'Soak Test' and what kind of bug does it catch that normal load tests miss?",
              hint: "Duration over raw intensity.",
              answer: "A soak test runs steady moderate load for 24-72 hours. It catches slow resource leaks (memory leaks, connection pool leaks, file descriptor exhaustion, log disk buildup) that never appear in a 5-minute peak load test."
            }
          ]
        },
        {
          id: "p6_3",
          number: "6.3",
          title: "CI/CD & Deployment",
          titleAr: "التكامل والتسليم المستمر ونشر البرمجيات",
          summary: "خطوط الأنابيب، الحاويات (Docker)، واستراتيجيات النشر بدون انقطاع.",
          points: [
            "Continuous Integration (CI) وفحص الكود آلياً عند كل Commit.",
            "Continuous Delivery vs Continuous Deployment.",
            "Build and test pipelines وإدارتها (GitHub Actions, GitLab CI).",
            "Environment separation (Dev, Staging, Production).",
            "Configuration and secrets per environment بأمان تام.",
            "Database migrations during deployment دون قفل الجداول.",
            "Rollback strategies والتراجع السريع عند الكوارث.",
            "Blue-green and Canary deployment concepts.",
            "Docker fundamentals and containerized workflows.",
            "Cloud deployment fundamentals (IaaS, PaaS, Serverless)."
          ],
          questions: [
            {
              q: "How does a Canary Deployment minimize blast radius compared to a direct rolling update?",
              hint: "Routing a small fraction (e.g. 2%) of real user traffic first.",
              answer: "Canary routes 2-5% of production traffic to the new version while monitoring error rates and p99 latency. If an issue occurs, only 2% of users experienced it, and traffic reverts instantly before full rollout."
            }
          ]
        },
        {
          id: "p6_4",
          number: "6.4",
          title: "Observability & Operations",
          titleAr: "المراقبة، السجلات، وإدارة الحوادث الحية",
          summary: "السجلات الموزعة، المقاييس، التتبع، وتحليل السبب الجذري (RCA).",
          points: [
            "Logs, metrics, and distributed traces (The Three Pillars).",
            "Monitoring vs Observability: هل تعرف لماذا تعطل النظام وليس فقط أنه تعطل؟",
            "Dashboards and alerting: تجنب إرهاق التنبيهات (Alert Fatigue).",
            "Correlation IDs لتتبع مسار الطلب عبر عدة خوادم وخدمات.",
            "Health checks and readiness checks في بيئات السحابة.",
            "SLIs, SLOs, and error budgets في إدارة الأنظمة الإنتاجية.",
            "Incident response: التصرف المنظم أثناء الكوارث التقنية.",
            "Root Cause Analysis (RCA): التحقيق للوصول للسبب الحقيقي.",
            "Blameless Postmortems: التعلم من الفشل كفريق دون إلقاء اللوم.",
            "Operational runbooks: دليل الإجراءات السريعة للأعطال المتكررة."
          ],
          questions: [
            {
              q: "What is the difference between a Liveness probe and a Readiness probe in containers?",
              hint: "Killing a hung container vs temporarily pausing traffic during heavy load.",
              answer: "Liveness checks if the process is alive (if it fails, the orchestrator kills and restarts the container). Readiness checks if the app is ready to accept user traffic (if it fails, traffic stops routing to it, preventing restarts while warming caches)."
            }
          ]
        },
        {
          id: "p6_5",
          number: "6.5",
          title: "Technical Decision-Making",
          titleAr: "صنع القرارات الهندسية والحكم التقني",
          summary: "سجلات القرارات المعمارية (ADRs)، الديون التقنية، وتفادي التحسين المبكر.",
          points: [
            "Architecture Decision Records (ADRs) وتوثيق أسباب الاختيار.",
            "Comparing alternatives بموضوعية وأرقام.",
            "Build vs Buy: متى نبني داخلياً ومتى نشتري خدمة جاهزة؟",
            "Complexity and maintenance costs: التكلفة الحقيقية لتعقيد الكود.",
            "Technical debt: إدارته بوعي وتسديده قبل تراكم الفوائد.",
            "Trade-offs بين التكلفة، السرعة، الموثوقية، ومهارات الفريق الحالية.",
            "Recognizing premature optimization: متى يكون التحسين هدراً للوقت؟",
            "Knowing when a simple solution is the correct engineering decision."
          ],
          questions: [
            {
              q: "When is choosing a simpler, boring technology the highest form of engineering maturity?",
              hint: "Operational complexity and maintenance overhead.",
              answer: "Mature engineers know that code you don't write and infrastructure you don't manage cannot fail at 3 AM. A single well-indexed Postgres instance is often 10x more reliable and cost-effective than an unneeded distributed microservice mesh."
            }
          ]
        },
        {
          id: "p6_6",
          number: "6.6",
          title: "Code Review & Industry Problem Solving",
          titleAr: "مراجعة الكود وحل المشكلات الواقعية",
          summary: "قراءة الأكواد الضخمة، تقديم الملاحظات البناءة، والمساهمة المفتوحة.",
          points: [
            "Reviewing unfamiliar codebases والتأقلم السريع مع مشاريع ضخمة.",
            "Understanding project structure before changing a single line.",
            "Reviewing correctness, readability, security, performance, and tests.",
            "Giving actionable, respectful, and educational review feedback.",
            "Contributing to open-source projects باحترافية.",
            "Debugging production-like issues تحت الضغط.",
            "Turning vague business problems into solid engineering plans.",
            "Communicating technical decisions to both engineers and executives."
          ],
          questions: [
            {
              q: "How should an engineer communicate a critical technical outage to non-technical executives?",
              hint: "Business impact, resolution steps, timeline, and no technical jargon.",
              answer: "State user and revenue impact directly ('Users currently cannot complete purchases'), root cause in plain terms ('Payment gateway connection timeout'), current mitigating action ('Failover to backup gateway in progress'), and next status update time."
            }
          ]
        }
      ]
    },

    {
      id: "phase_7",
      number: 7,
      badge: "Foundations",
      title: "Supporting Foundations (Parallel Tracks)",
      titleAr: "الأسس الداعمة (تُدرس بالتوازي حسب الحاجة)",
      goal: "بناء فهم قوي لنظام التشغيل، الشبكات، والعمل المتزامن لدعم القرارات الهندسية وتفسير سلوك الأنظمة الحقيقية.",
      outcome: "القدرة على تشخيص مشكلات الأداء على مستوى السيرفر والشبكة واستغلال موارد المعالج بكفاءة.",
      icon: "cpu",
      accent: "#475569",
      topics: [
        {
          id: "p7_1",
          number: "7.1",
          title: "Linux & Operating Systems",
          titleAr: "لينكس وأنظمة التشغيل",
          summary: "العمليات والمسارات، الذاكرة، مصفوفات الملفات، وإشارات النظام.",
          points: [
            "Linux command line and filesystem structure.",
            "Processes and threads: الفروقات في المساحة وتكلفة الإنشاء.",
            "Process lifecycle وحالات العمليات في الذاكرة.",
            "CPU scheduling basics وكيف يوزع المعالج وقته.",
            "Memory, stack, and heap: تخصيص الذاكرة وعواقب كل مساحة.",
            "Virtual memory basics وSwap space.",
            "File descriptors: كل شيء في يونكس ملف.",
            "Environment variables وإدارة إعدادات النظام.",
            "Permissions and ownership (chmod, chown).",
            "Signals (SIGTERM, SIGKILL, SIGHUP) والتعامل مع الإغلاق النظيف.",
            "I/O and system calls at a conceptual level.",
            "Resource limits (ulimit, cgroups) and process monitoring (top, htop)."
          ],
          questions: [
            {
              q: "Why is SIGTERM handled differently from SIGKILL by a production web server?",
              hint: "Graceful shutdown vs immediate process death.",
              answer: "SIGTERM (15) can be caught by the server, allowing it to finish in-flight HTTP requests and cleanly close database connections before exiting. SIGKILL (9) cannot be caught or ignored; the OS terminates the process instantly, potentially causing data corruption."
            }
          ]
        },
        {
          id: "p7_2",
          number: "7.2",
          title: "Computer Networking",
          titleAr: "شبكات الحاسب وبروتوكولات الاتصال",
          summary: "طبقات TCP/IP، مقابس الاتصال، بروتوكول HTTP/S، وموزعات الأحمال.",
          points: [
            "Network layers and TCP/IP model.",
            "IP addresses, subnets, and ports.",
            "DNS resolution من اللحظة التي تكتب فيها الرابط.",
            "TCP vs UDP والمفاضلة بين الموثوقية والسرعة اللحظية.",
            "Sockets وكيفية فتح قناة اتصال مباشرة.",
            "HTTP/HTTPS: آلية المصافحة وتبادل البيانات.",
            "TLS/SSL basics وتشفير الاتصالات وحماية الشهادات.",
            "Request/response lifecycle على مستوى الحزم البرمجية.",
            "Reverse proxies (Nginx, Envoy) وأهميتها في حماية الخوادم.",
            "Load balancers (Layer 4 vs Layer 7).",
            "WebSockets للاتصال ثنائي الاتجاه اللحظي.",
            "Connection timeouts and network failure behavior."
          ],
          questions: [
            {
              q: "Why do high-performance HTTP/2 and HTTP/3 multiplexing matter for web latency?",
              hint: "Head-of-line blocking in HTTP/1.1 pipelines.",
              answer: "HTTP/1.1 requires separate TCP connections to fetch resources concurrently. HTTP/2 multiplexes multiple streams over 1 TCP connection. HTTP/3 moves to QUIC (over UDP) so packet loss in one stream never blocks other parallel streams."
            }
          ]
        },
        {
          id: "p7_3",
          number: "7.3",
          title: "Concurrency & Parallelism",
          titleAr: "التزامن والتوازي ومعالجة المهام",
          summary: "الخيوط والعمليات، سباقات البيانات، الأقفال، وAsync/Await في بايثون.",
          points: [
            "Concurrency vs parallelism: التمييز بين التعامل مع عدة أمور وتنفيذها معاً.",
            "Synchronous vs asynchronous execution.",
            "Blocking vs non-blocking I/O وكيف تصنع خوادم فائقة السرعة.",
            "Threads and processes والمفاضلة بين استهلاك الذاكرة وسرعة التبديل.",
            "Race conditions وكيف تتلف البيانات بسبب التزامن العشوائي.",
            "Critical sections and locks (Mutex, Semaphores).",
            "Deadlocks, livelocks, and starvation وطرق تفاديها.",
            "Thread safety وتصميم هياكل بيانات آمنة للمشاركة.",
            "Shared state ومخاطر الذاكرة المشتركة.",
            "Python async/await, event loop, and asyncio.",
            "Worker pools and task scheduling.",
            "When concurrency helps and when it merely adds useless complexity."
          ],
          questions: [
            {
              q: "What four conditions must be present simultaneously for a deadlock to occur (Coffman conditions)?",
              hint: "Mutual exclusion, Hold and wait, No preemption, Circular wait.",
              answer: "1. Mutual Exclusion (resources held exclusively), 2. Hold and Wait (holding a resource while waiting for another), 3. No Preemption (resources cannot be forcibly confiscated), 4. Circular Wait (Chain of processes waiting for each other)."
            }
          ]
        }
      ]
    }
  ]
};
