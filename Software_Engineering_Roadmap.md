# Software Engineering Roadmap
## الخطة الرئيسية لتعلّم Software Engineering

**الهدف:** بناء عقلية ومهارات Software Engineer قادرة على تصميم وبناء وتشغيل أنظمة برمجية حقيقية، مع أساس قوي يخدم التخصص لاحقًا في AI Engineering وML Engineering.

**طريقة التقدّم:** الخطة مبنية على إتقان المفاهيم، وليس إنهاء عدد محدد من الأسابيع. التوقيت المقترح يساعد على التنظيم فقط؛ لا ننتقل لموضوع جديد لمجرد انتهاء الوقت إذا كانت الأساسيات تحتاج تثبيتًا.

---

## 1. الصورة الكبيرة: ماذا سنتعلم ولماذا؟

Software Engineering أوسع من كتابة الكود. المهندس يتعامل مع دورة حياة النظام كاملة:

```text
Problem
   ↓
Requirements
   ↓
Design & Architecture
   ↓
Implementation
   ↓
Testing
   ↓
Deployment
   ↓
Monitoring
   ↓
Maintenance & Evolution
```

سنمشي عبر ست مراحل مترابطة:

1. Software Engineering Foundations
2. Professional Software Development
3. System Design
4. Backend Engineering, Security & Performance
5. Distributed Systems & Advanced Architecture
6. Testing, Production Engineering & Technical Judgment

وسندعمها بأساسيات Linux/Operating Systems، Networking، وConcurrency/Parallelism عند الحاجة.

---

# Phase 1 — Software Engineering Foundations

**الهدف:** فهم طريقة عمل فرق البرمجيات، وتحويل مشكلة غير واضحة إلى متطلبات قابلة للتنفيذ والاختبار.

### 1.1 Software Engineering Mindset
- الفرق بين Programming وSoftware Engineering.
- دورة حياة تطوير البرمجيات (SDLC).
- التفكير في النظام كمنتج طويل العمر، وليس مجرد برنامج يعمل.
- فهم المشكلة قبل اختيار التكنولوجيا.
- التعامل مع المتطلبات والقيود والمخاطر.

### 1.2 Requirements Engineering
- Requirements Elicitation: جمع المتطلبات من أصحاب المصلحة.
- Requirements Analysis: تحليل المتطلبات وإزالة التعارض والغموض.
- Requirements Specification: توثيق المتطلبات.
- Requirements Validation: التأكد من أن المتطلبات تعكس المشكلة الحقيقية.
- Requirements Management: التعامل مع تغيّر المتطلبات.
- Functional Requirements (FR).
- Non-Functional Requirements (NFR).
- Constraints, Assumptions, Dependencies.
- Business Rules.
- Acceptance Criteria.
- Edge Cases وFailure Scenarios.
- مقدمة إلى Software Requirements Specification (SRS).

### 1.3 SDLC & Delivery Process
- Waterfall مقابل Iterative وIncremental Development.
- Agile mindset ومتى يكون مفيدًا.
- Scrum: Roles, Events, Artifacts.
- Sprint Planning, Daily Scrum, Review, Retrospective.
- Product Backlog وSprint Backlog.
- Epics, User Stories, Tasks, Bugs.
- Estimation وPrioritization.
- Definition of Ready (DoR) وDefinition of Done (DoD).
- التعامل مع التغيير والتأخير والمخاطر.

### 1.4 Working in a Software Team
- تقسيم العمل وتحديد المسؤوليات.
- Task ownership وstatus updates.
- Technical documentation.
- Handover: تسليم العمل لشخص أو فريق آخر.
- كتابة تقارير واضحة عن التقدم والمشكلات والقرارات.
- التواصل في Code Reviews والاجتماعات التقنية.

### 1.5 Git & Collaboration Workflow
- Git fundamentals: commits, branches, merge.
- Branching strategies.
- Pull Requests (PRs).
- Code Review fundamentals.
- Merge conflicts.
- Commit messages.
- التعامل مع Issues وBoards.
- أساسيات العمل على Open-source repositories.

**مخرجات المرحلة:** القدرة على فهم طلب منتج، تفكيكه إلى متطلبات ومهام، وتتبّع العمل داخل فريق تطوير.

---

# Phase 2 — Professional Software Development

**الهدف:** كتابة كود يمكن لفريق آخر فهمه وتعديله واختباره وتوسيعه، وبناء تطبيق منظم بدل تكديس الوظائف في ملفات عشوائية.

### 2.1 Clean Code
- Naming وReadability.
- Functions: single responsibility, size, parameters, side effects.
- Error handling.
- Comments: متى نكتبها ومتى تكون علامة على كود غير واضح؟
- Code smells.
- Refactoring.
- Avoiding duplication دون بناء تجريدات غير ضرورية.
- Balancing simplicity and extensibility.

### 2.2 Core Design Principles
- Separation of Concerns (SoC).
- Modularity.
- Abstraction وEncapsulation.
- Cohesion وCoupling.
- SOLID principles:
  - Single Responsibility Principle.
  - Open/Closed Principle.
  - Liskov Substitution Principle.
  - Interface Segregation Principle.
  - Dependency Inversion Principle.
- Composition vs Inheritance.
- Dependency Injection (DI).
- Programming to interfaces/contracts.

### 2.3 Object-Oriented Design
- Classes وObjects.
- State وBehavior.
- Interfaces وAbstract Classes.
- Composition.
- Polymorphism.
- Domain modeling basics.
- متى يكون OOP مناسبًا، ومتى تكون functions أو data-oriented approaches أبسط؟

### 2.4 Design Patterns
- ما المشكلة التي تحاول Design Patterns حلها؟
- Creational, Structural, Behavioral patterns.
- Factory.
- Strategy.
- Adapter.
- Observer.
- Decorator.
- Builder.
- Repository.
- فهم النمط من المشكلة، وليس حفظ اسمه.
- تجنّب استخدام Pattern لمجرد أنه معروف.

### 2.5 Application Architecture
- Layered Architecture.
- Clean Architecture.
- Hexagonal Architecture (Ports & Adapters).
- Domain, Application, Infrastructure, Presentation layers.
- Service Layer وRepository Pattern.
- Dependency Rule.
- Boundaries between modules.
- Configuration management.
- Logging basics.
- Error and exception strategy.

**مخرجات المرحلة:** بناء تطبيق متوسط الحجم بهيكل واضح، وحدود مسؤوليات مفهومة، وكود قابل للاختبار والتطوير.

---

# Phase 3 — System Design

**الهدف:** الانتقال من التفكير في function أو class إلى التفكير في نظام كامل، ومتطلباته ومكوناته وحدود أدائه.

### 3.1 System Design Fundamentals
- ما هو System Design؟
- High-Level Design (HLD).
- Low-Level Design (LLD).
- Functional vs Non-Functional Requirements في قرارات التصميم.
- تحديد Scope والافتراضات والقيود.
- Architecture diagrams وComponent diagrams.
- Data flow وControl flow.
- Identifying bottlenecks and failure points.

### 3.2 Quality Attributes & Trade-offs
- Latency.
- Throughput.
- Availability.
- Reliability.
- Scalability.
- Maintainability.
- Fault Tolerance.
- Consistency.
- Security.
- Observability.
- SLO, SLA, SLI basics.
- قياس الصفات بدل الاكتفاء بوصف النظام بأنه سريع أو موثوق.
- فهم Trade-offs: تحسين خاصية قد يؤثر في خاصية أخرى.

### 3.3 API Design
- HTTP fundamentals.
- REST principles.
- Resources, methods, status codes.
- Request/response design.
- Pagination, filtering, sorting.
- API versioning.
- Validation.
- Error response conventions.
- Authentication vs Authorization.
- API contracts وOpenAPI basics.
- Backward compatibility.

### 3.4 Database Design
- Relational database concepts.
- Tables, rows, columns, keys.
- Relationships.
- Normalization basics.
- ER diagrams.
- SQL fundamentals for application engineering.
- Transactions.
- ACID properties.
- Indexes and query plans.
- Choosing SQL vs NoSQL based on access patterns and requirements.
- Schema evolution and migrations.

### 3.5 Design Practice
- تحويل المتطلبات إلى HLD.
- تحديد المكونات ومسؤولية كل مكوّن.
- تصميم APIs وDatabase schema.
- رسم أهم data flows.
- تحديد نقاط الفشل والقيود.
- توثيق القرارات والبدائل التي تم رفضها وأسباب ذلك.

**مخرجات المرحلة:** القدرة على تقديم تصميم أولي لنظام، وشرح مكوناته وتدفق البيانات والـtrade-offs وراء قراراته.

---

# Phase 4 — Backend Engineering, Security & Performance

**الهدف:** فهم ما يحدث خلف الـAPI، وكيف نبني خدمات Backend تتحمل الاستخدام الحقيقي وتتعامل بأمان مع الأعطال والضغط.

### 4.1 Backend Architecture
- Request lifecycle.
- Routing, middleware, controllers, services.
- Input validation and serialization.
- Authentication and authorization.
- Session-based auth vs token-based auth.
- JWT: structure, use cases, limitations.
- API Gateway: purpose and responsibilities.
- Service-to-service communication basics.

### 4.2 Asynchronous Processing & Messaging
- Synchronous vs asynchronous workflows.
- Background jobs.
- Message queues.
- Producers, consumers, brokers.
- Retry policies.
- Dead-letter queues.
- Message acknowledgment.
- At-most-once, at-least-once, and effectively-once processing.
- Idempotency.
- RabbitMQ and Kafka: concepts and appropriate use cases.
- Event-driven communication fundamentals.

### 4.3 Caching
- Why caching exists.
- Cache-aside, read-through, write-through, write-behind.
- TTL and invalidation.
- Cache consistency.
- Cache stampede.
- Redis fundamentals.
- What should and should not be cached.
- Measuring whether caching actually improves the system.

### 4.4 Database & API Performance
- Query optimization.
- Index selection.
- N+1 query problem.
- Connection pooling.
- Pagination strategies.
- Locking and contention.
- Batch operations.
- Avoiding unnecessary network round trips.
- Profiling before optimizing.
- Latency budgets and performance measurement.

### 4.5 Security Engineering
- Security mindset and threat modeling basics.
- OWASP Top 10 overview.
- SQL Injection.
- Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) where relevant.
- Broken Access Control.
- Authentication and authorization mistakes.
- Password hashing.
- Secrets management.
- Encryption in transit and at rest.
- Input validation and output encoding.
- Least privilege.
- Audit logging and sensitive-data handling.

### 4.6 Resilience & Failure Handling
- Timeouts.
- Retries and exponential backoff.
- Jitter.
- Circuit Breaker.
- Bulkhead isolation.
- Rate limiting and throttling.
- Idempotency keys.
- Graceful degradation.
- Handling external provider failures.
- Avoiding retry storms and cascading failures.

**مخرجات المرحلة:** بناء Backend service يتعامل مع البيانات والطلبات والمهام الخلفية والأخطاء بطريقة آمنة وقابلة للقياس.

---

# Phase 5 — Distributed Systems & Advanced Architecture

**الهدف:** فهم الأنظمة التي تتكون من عدة خدمات أو أجهزة، ولماذا تظهر مشكلات لا يمكن حلها بالطريقة نفسها المستخدمة داخل برنامج واحد.

### 5.1 Distributed Systems Foundations
- What makes a system distributed?
- Network failures and partial failures.
- Timeouts and unreliable communication.
- Service discovery basics.
- Synchronous vs asynchronous communication.
- Monolith vs modular monolith vs microservices.
- When microservices are justified—and when they are unnecessary.

### 5.2 Domain-Driven Design (DDD)
- Domain and Subdomain.
- Ubiquitous Language.
- Bounded Contexts.
- Entities and Value Objects.
- Aggregates and Aggregate Roots.
- Domain Services.
- Domain Events.
- Context Mapping basics.
- Aligning software boundaries with business domains.

### 5.3 Consistency & Distributed Data
- Strong consistency.
- Eventual consistency.
- Replication.
- Sharding and partitioning.
- CAP theorem and its practical interpretation.
- Quorums at a conceptual level.
- Data ownership across services.
- Distributed transactions.
- Saga pattern.
- Outbox pattern.
- Reconciliation workflows.

### 5.4 Scalability & High Availability
- Vertical vs horizontal scaling.
- Load balancing.
- Stateless vs stateful services.
- Database scaling approaches.
- Read replicas.
- Partitioning strategies.
- High Availability (HA).
- Fault tolerance.
- Redundancy and failover.
- Capacity planning.
- Backpressure.
- Resource isolation.

### 5.5 Event-Driven Architecture
- Events vs commands.
- Event producers and consumers.
- Event schemas and versioning.
- Pub/Sub.
- Event ordering.
- Duplicate delivery.
- Consumer idempotency.
- Eventual consistency.
- Event sourcing: concepts, benefits, and costs.
- Stream processing fundamentals.

### 5.6 Bottlenecks & Complex Failure Scenarios
- Finding bottlenecks across application, database, network, and infrastructure.
- Cascading failures.
- Hot partitions and hot keys.
- Queue buildup and consumer lag.
- Thundering herd.
- Split-brain at a conceptual level.
- Race conditions across services.
- Load shedding and graceful degradation.
- Designing for recovery, not only prevention.

**مخرجات المرحلة:** القدرة على تحليل تصميم distributed system، وفهم consistency/failure/scaling trade-offs، واختيار architecture تتناسب مع المشكلة بدل اتباع الموضة التقنية.

---

# Phase 6 — Testing, Production Engineering & Technical Judgment

**الهدف:** التأكد من أن النظام يعمل كما ينبغي، ثم تشغيله ومراقبته وتحسينه، واتخاذ قرارات هندسية يمكن الدفاع عنها.

### 6.1 Testing Strategy
- Testing pyramid.
- Unit testing.
- Integration testing.
- End-to-End (E2E) testing.
- Contract testing.
- Regression testing.
- Test fixtures and test data.
- Mocking and fakes.
- Test coverage and its limitations.
- Test-Driven Development (TDD).
- Testing failure scenarios and edge cases.

### 6.2 Performance & Reliability Testing
- Load testing.
- Stress testing.
- Spike testing.
- Soak testing.
- Benchmarking.
- Latency percentiles: p50, p95, p99.
- Throughput and saturation.
- Identifying performance regressions.
- Testing recovery and resilience behavior.

### 6.3 CI/CD & Deployment
- Continuous Integration.
- Continuous Delivery vs Continuous Deployment.
- Build and test pipelines.
- Environment separation.
- Configuration and secrets per environment.
- Database migrations during deployment.
- Rollback strategies.
- Blue-green and canary deployment concepts.
- Docker fundamentals and deployment workflows.
- Cloud deployment fundamentals.

### 6.4 Observability & Operations
- Logs, metrics, and distributed traces.
- Monitoring vs observability.
- Dashboards and alerting.
- Correlation IDs.
- Health checks and readiness checks.
- SLIs, SLOs, and error budgets.
- Incident response.
- Root Cause Analysis (RCA).
- Postmortems and learning from failure.
- Operational runbooks.

### 6.5 Technical Decision-Making
- Architecture Decision Records (ADRs).
- Comparing alternatives.
- Build vs buy.
- Complexity and maintenance costs.
- Technical debt.
- Cost, latency, reliability, and team-skill trade-offs.
- Recognizing premature optimization.
- Knowing when a simple solution is the correct engineering decision.

### 6.6 Code Review & Industry Problem Solving
- Reviewing unfamiliar codebases.
- Understanding project structure before changing code.
- Reviewing correctness, readability, security, performance, and tests.
- Giving actionable review feedback.
- Contributing to open-source projects.
- Debugging production-like issues.
- Turning vague business problems into engineering plans.
- Communicating technical decisions to different audiences.

**مخرجات المرحلة:** القدرة على اختبار وتشغيل ومراقبة نظام، وتحليل المشكلات، ومراجعة كود الآخرين، وتبرير القرارات التقنية.

---

# 7. Supporting Foundations

هذه الموضوعات ليست مرحلة منفصلة يجب إنهاؤها كلها قبل بقية الخطة. سندرسها بالتوازي عندما تحتاجها الموضوعات الأساسية، ثم نعود لتعميقها.

## 7.1 Linux & Operating Systems
- Linux command line and filesystem.
- Processes and threads.
- Process lifecycle.
- CPU scheduling basics.
- Memory, stack, and heap.
- Virtual memory basics.
- File descriptors.
- Environment variables.
- Permissions and ownership.
- Signals.
- I/O and system calls at a conceptual level.
- Resource limits and process monitoring.

## 7.2 Computer Networking
- Network layers and TCP/IP model.
- IP addresses and ports.
- DNS resolution.
- TCP vs UDP.
- Sockets.
- HTTP/HTTPS.
- TLS basics.
- Request/response lifecycle.
- Reverse proxies.
- Load balancers.
- WebSockets.
- Connection timeouts and network failure behavior.

## 7.3 Concurrency & Parallelism
- Concurrency vs parallelism.
- Synchronous vs asynchronous execution.
- Blocking vs non-blocking I/O.
- Threads and processes.
- Race conditions.
- Critical sections and locks.
- Deadlocks and starvation.
- Thread safety.
- Shared state.
- Python async/await and asyncio.
- Worker pools and task scheduling.
- When concurrency helps and when it adds complexity.

---

# 8. Project Portfolio — Diverse Engineering Practice

لن نعتمد على مشروع واحد طوال الخطة. سنستخدم مجموعة من الأنظمة الواقعية، ونختار المشروع الذي يجعل المفهوم الحالي ملموسًا. الهدف هو توسيع القدرة على التفكير في domains مختلفة، وليس تكرار نفس نمط المشاريع.

أمثلة للمشاريع التي يمكن أن نعود إليها ونطوّرها تدريجيًا:

| Domain | System | Engineering challenges |
|---|---|---|
| FinTech | Payment Processing & Fraud Engine | Idempotency, transaction states, reconciliation, low-latency scoring |
| Logistics | Fleet & Delivery Optimization | Geospatial data, real-time updates, intermittent connectivity, scheduling |
| Healthcare | Hospital Resource Coordination | Concurrent booking, transactions, audit logs, access control |
| E-commerce | Inventory & Order Orchestration | Overselling, reservations, Saga, queues, eventual consistency |
| Industrial IoT | Predictive Maintenance Platform | Sensor streams, time-series data, drift, alerting, observability |
| Developer Infrastructure | Distributed Build System | Task scheduling, worker failures, parallel execution, artifact caching |
| Cloud Operations | Cloud Cost Intelligence Platform | Usage ingestion, aggregation, anomaly detection, multi-tenant reporting |
| Ticketing | High-Demand Seat Reservation | Contention, temporary holds, consistency, fairness, rate limiting |
| Collaboration | Real-Time Collaborative Workspace | WebSockets, concurrency control, conflict resolution, presence |
| Telecom | Network Observability Platform | High-volume telemetry, stream processing, alert correlation |

### طريقة استخدام المشاريع
- نبدأ بسيناريو واقعي ومشكلة business واضحة.
- نحدد actors والـworkflows.
- نستخرج FR وNFR والقيود.
- نحدد edge cases والفشل المحتمل.
- نصمم الحل ونقارن البدائل.
- ننفّذ أجزاء مناسبة للمستوى الحالي.
- نختبر ونقيس ونراجع القرارات.
- نعيد النظر في التصميم عندما تظهر متطلبات جديدة.

لن نستخدم كل مشروع في كل مرحلة، ولن نفترض أن كل نظام يحتاج Microservices أو Kafka أو Kubernetes. اختيار التقنية نفسه جزء من التدريب الهندسي.

---

# 9. How We Will Study

هذه هي طريقة العمل المتفق عليها لكل موضوع:

1. **Concept from zero:** شرح الفكرة من نقطة البداية، دون افتراض أن معرفة الاسم تعني فهمه.
2. **Why it exists:** ما المشكلة التي أدت إلى ظهور المفهوم؟ وما الذي يحدث إن تجاهلناه؟
3. **Engineering context:** أين يظهر في الأنظمة والفرق والمنتجات الحقيقية؟
4. **Worked example:** مثال محلول خطوة بخطوة.
5. **Design choices & trade-offs:** البدائل، ومتى نختار كل بديل، وتكلفة كل قرار.
6. **Practical exercise:** تمرين بعد الشرح، مناسب لما تم تعليمه بالفعل.
7. **Review & feedback:** مراجعة الحل، وتوضيح النواقص وتصحيح طريقة التفكير.
8. **Connection:** ربط الموضوع بما سبق وبما سيأتي، وبـAI/ML Engineering عندما يكون الربط مفيدًا فعلًا.

### قواعد التعلّم
- لا نختبر موضوعًا لم يتم شرحه بعد.
- لا ننتقل لموضوع جديد لمجرد الالتزام بجدول زمني.
- الصعوبة في أول مرة طبيعية؛ لا نلغي موضوعًا متقدمًا لمجرد أنه جديد.
- لا نحفظ المصطلحات بمعزل عن المشكلات التي تحلها.
- لا نستخدم أدوات أو معماريات معقدة لمجرد أنها شائعة.
- نركّز على الفهم والقدرة على شرح القرار وتنفيذه، لا على إنهاء قائمة موضوعات.

---

# 10. Relationship to the Other Learning Tracks

هذه الخطة جزء من مسار تعلّم أكبر، لكنها لا تستبدل المسارات الأخرى:

| Track | Its role |
|---|---|
| Software Engineering Roadmap | يبني الأساس الهندسي العام: design, code quality, systems, testing, production |
| DDIA — Designing Data-Intensive Applications | يعمّق فهم databases, storage, replication, streams, distributed systems |
| MLOps Engineering Roadmap | يطبّق الهندسة على ML systems: pipelines, experiment tracking, serving, deployment, monitoring, LLMOps |
| AI Engineering Book | يشرح بناء التطبيقات والأنظمة المعتمدة على foundation models |

### كيف نربطها دون تكرار؟
- نتعلم المفهوم الهندسي هنا بصورة عامة.
- نستخدم DDIA لتعميق مفاهيم البيانات والأنظمة الموزعة.
- نطبّق ما يناسب أنظمة ML داخل MLOps roadmap.
- نربط ذلك بـAI Engineering عندما يكون هناك تطبيق واضح، لا لمجرد إدخال AI في كل مثال.

**مهم:** تظل خطة MLOps الحالية مستقلة ومحفوظة كما هي. هذه الخطة توسّع الأساس العام وتدعمها، ولا تغيّر ترتيبها أو تستبدلها.

---

# 11. Progress Tracker

ضع علامة عند إتمام الموضوع بعد فهمه وتطبيقه، وليس بعد مشاهدة أو قراءة المادة فقط.

## Phase 1 — Foundations
- [ ] Software Engineering Mindset
- [ ] Requirements Engineering
- [ ] SDLC
- [ ] Agile & Scrum
- [ ] Team Workflow & Documentation
- [ ] Git Collaboration & Code Review

## Phase 2 — Professional Software Development
- [ ] Clean Code
- [ ] Design Principles & SOLID
- [ ] Object-Oriented Design
- [ ] Design Patterns
- [ ] Application Architecture

## Phase 3 — System Design
- [ ] System Design Fundamentals
- [ ] Quality Attributes & Trade-offs
- [ ] API Design
- [ ] Database Design
- [ ] HLD/LLD Design Practice

## Phase 4 — Backend, Security & Performance
- [ ] Backend Architecture
- [ ] Asynchronous Processing & Messaging
- [ ] Caching
- [ ] Database & API Performance
- [ ] Security Engineering
- [ ] Resilience & Failure Handling

## Phase 5 — Distributed Systems & Advanced Architecture
- [ ] Distributed Systems Foundations
- [ ] Domain-Driven Design
- [ ] Consistency & Distributed Data
- [ ] Scalability & High Availability
- [ ] Event-Driven Architecture
- [ ] Bottlenecks & Complex Failure Scenarios

## Phase 6 — Testing, Production & Judgment
- [ ] Testing Strategy
- [ ] Performance & Reliability Testing
- [ ] CI/CD & Deployment
- [ ] Observability & Operations
- [ ] Technical Decision-Making
- [ ] Code Review & Industry Problem Solving

## Supporting Foundations
- [ ] Linux & Operating Systems
- [ ] Computer Networking
- [ ] Concurrency & Parallelism

---

## Starting Point

نقطة البداية الحالية: Phase 1 — Software Engineering Foundations.

تمهيدًا لاستكمال الخطة، بدأنا بالفعل في:
- Software Engineering Mindset.
- Requirements Engineering.
- Functional Requirements vs Non-Functional Requirements.
- Constraints, Edge Cases, and Failure Scenarios.
- مقدمة أولية إلى SRS.

الخطوة التالية في التسلسل: **SDLC — Software Development Life Cycle**، ثم Agile/Scrum وTeam Workflow.

هذه الوثيقة هي المرجع الرئيسي للخطة. يمكن تحديث Progress Tracker مع التقدم، لكن لا نغيّر نطاق الخطة أو ترتيبها لمجرد الاستعجال؛ أي تعديل يكون بناءً على سبب تعليمي واضح أو قرار نتفق عليه.
