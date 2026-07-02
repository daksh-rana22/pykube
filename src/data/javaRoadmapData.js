export const javaRoadmap = [
  {
    number: '01',
    title: 'Frontend',
    subtitle: 'Build what users see',
    countText: '6 topics',
    topics: [
      {
        name: 'HTML5',
        tags: ['Core', 'Semantic'],
        desc: 'Semantic markup, accessibility (ARIA), forms, media elements, and modern HTML APIs like Web Storage and Canvas.',
        concepts: [
          'Semantic HTML5 elements',
          'Forms & Form Validation',
          'SEO & Accessibility (ARIA)',
          'Web Storage (Local/Session)',
          'Canvas & SVG graphics'
        ]
      },
      {
        name: 'CSS3',
        tags: ['Layout', 'Responsive'],
        desc: 'Flexbox, CSS Grid, animations, custom properties, responsive design with media queries, and CSS architecture (BEM, utility-first).',
        concepts: [
          'Flexbox & CSS Grid layouts',
          'CSS Variables & Themes',
          'Responsive Design (Media Queries)',
          'Animations & Transitions',
          'BEM Methodology & CSS modules'
        ]
      },
      {
        name: 'JavaScript (ES6+)',
        tags: ['Core', 'ES2024'],
        desc: 'Closures, promises, async/await, destructuring, modules, event loop, DOM manipulation, and modern browser APIs.',
        concepts: [
          'Closures & Scope chain',
          'Promises & Async/Await',
          'DOM Manipulation & Events',
          'Modules (Import/Export)',
          'ES6+ Syntax features'
        ]
      },
      {
        name: 'TypeScript',
        tags: ['Typed', 'Advanced'],
        desc: 'Static typing, generics, interfaces, decorators, and type inference for building robust large-scale applications.',
        concepts: [
          'Static typing & Type annotations',
          'Interfaces & Custom types',
          'Generics & Utility types',
          'TypeScript with React integration',
          'TSConfig configuration'
        ]
      },
      {
        name: 'React.js',
        tags: ['Framework', 'Popular'],
        desc: 'Component architecture, hooks (useState, useEffect, useContext), React Router, state management with Redux or Zustand.',
        concepts: [
          'Components & Virtual DOM',
          'React Hooks (useState, useEffect, etc.)',
          'State management (Redux/Zustand)',
          'React Router navigation',
          'Component styling & Lifecycle'
        ]
      },
      {
        name: 'Build Tools',
        tags: ['Tooling'],
        desc: 'Vite, Webpack bundling concepts, npm/yarn package management, ESLint, Prettier code quality tools.',
        concepts: [
          'Vite & Webpack bundling',
          'NPM/Yarn package managers',
          'ESLint & Prettier configuration',
          'Transpilation (Babel/SWC)',
          'Production builds'
        ]
      }
    ]
  },
  {
    number: '02',
    title: 'Backend',
    subtitle: 'Power the server logic',
    countText: '6 topics',
    topics: [
      {
        name: 'Core Java',
        tags: ['Core', 'Essential'],
        desc: 'OOP principles, collections framework, generics, exception handling, multithreading, Java Stream API, and Java Memory Model.',
        concepts: [
          'Object-Oriented Programming (OOP)',
          'Collections Framework (List, Set, Map)',
          'Generics & Lambda expressions',
          'Exception Handling',
          'Multithreading & Concurrency'
        ]
      },
      {
        name: 'Spring Framework',
        tags: ['Framework'],
        desc: 'Dependency injection, IoC container, Spring MVC, AOP (Aspect-Oriented Programming), and Spring Security.',
        concepts: [
          'Dependency Injection & IoC',
          'Spring MVC framework',
          'Aspect-Oriented Programming (AOP)',
          'Spring Beans Lifecycle',
          'ApplicationContext config'
        ]
      },
      {
        name: 'Spring Boot',
        tags: ['Framework', 'Popular'],
        desc: 'Auto-configuration, embedded servers (Tomcat/Jetty), Spring Boot Actuator, application properties, and starter dependencies.',
        concepts: [
          'Auto-configuration & Starters',
          'Spring beans & DI container',
          'Application properties & Profiles',
          'Actuator for metrics',
          'Spring Boot CLI & Packaging'
        ]
      },
      {
        name: 'RESTful APIs',
        tags: ['API Design'],
        desc: 'REST principles, HTTP methods, status codes, request/response design, versioning strategies, HATEOAS, and OpenAPI/Swagger.',
        concepts: [
          'HTTP Methods & Response Codes',
          'Request/Response payload serialization',
          'URI versioning & design',
          'OpenAPI & Swagger documentation',
          'HATEOAS & JSON:API'
        ]
      },
      {
        name: 'Microservices',
        tags: ['Architecture', 'Advanced'],
        desc: 'Service decomposition, inter-service communication (REST, gRPC), API gateways, service discovery with Eureka, circuit breakers.',
        concepts: [
          'Service Registry (Eureka)',
          'API Gateway (Spring Cloud Gateway)',
          'Client-side Load Balancing',
          'Circuit Breaker pattern',
          'Distributed Config Server'
        ]
      },
      {
        name: 'Message Queues',
        tags: ['Messaging', 'Advanced'],
        desc: 'Apache Kafka or RabbitMQ for async communication, event-driven architecture, and decoupled service interactions.',
        concepts: [
          'Publisher/Subscriber model',
          'Kafka topics & consumer groups',
          'RabbitMQ exchanges & queues',
          'Event-driven message routing',
          'Message serialization'
        ]
      }
    ]
  },
  {
    number: '03',
    title: 'Database',
    subtitle: 'Store and query data',
    countText: '5 topics',
    topics: [
      {
        name: 'SQL & Relational DBs',
        tags: ['SQL', 'Core'],
        desc: 'PostgreSQL or MySQL — complex queries, JOINs, indexes, transactions (ACID), stored procedures, and query optimization.',
        concepts: [
          'Complex JOINs & Subqueries',
          'Indexing & Query execution plans',
          'ACID Transactions & Isolation levels',
          'Database Views & Stored Procedures',
          'Schema optimization'
        ]
      },
      {
        name: 'JPA & Hibernate',
        tags: ['ORM', 'Java'],
        desc: 'Object-Relational Mapping (ORM), entity relationships (OneToMany, ManyToMany), lazy vs eager loading, JPQL, and Criteria API.',
        concepts: [
          'Object-Relational Mapping (ORM)',
          'Entity relationships (One-to-Many, etc.)',
          'Lazy vs Eager fetching',
          'JPQL & Criteria API queries',
          'Second-level cache'
        ]
      },
      {
        name: 'MongoDB',
        tags: ['NoSQL'],
        desc: 'Document model, BSON, aggregation pipelines, indexes, Spring Data MongoDB integration, and schema design patterns.',
        concepts: [
          'Document-based BSON model',
          'Collection indexing & query optimization',
          'Aggregation framework pipelines',
          'Spring Data MongoDB integrations',
          'Replication & Sharding'
        ]
      },
      {
        name: 'Redis',
        tags: ['Cache', 'Advanced'],
        desc: 'In-memory caching, pub/sub messaging, data structures (sorted sets, hashes), session management, and Spring Cache abstraction.',
        concepts: [
          'Key-Value in-memory storage',
          'Redis data structures',
          'Caching strategies (Cache-Aside)',
          'Session clustering',
          'Pub/Sub messaging'
        ]
      },
      {
        name: 'Database Design',
        tags: ['Design'],
        desc: 'Normalization (1NF–3NF), ER diagrams, indexing strategies, partitioning, sharding, and database migration with Flyway/Liquibase.',
        concepts: [
          'Database Normalization (1NF to 3NF)',
          'Entity Relationship Diagrams (ERD)',
          'Partitioning & Sharding strategies',
          'Database migrations (Flyway/Liquibase)',
          'Connection pooling'
        ]
      }
    ]
  },
  {
    number: '04',
    title: 'Version Control',
    subtitle: 'Track and collaborate',
    countText: '4 topics',
    topics: [
      {
        name: 'Git Core',
        tags: ['Core', 'Essential'],
        desc: 'Commits, branching, merging, rebasing, cherry-picking, stashing, and understanding the Git object model (blobs, trees, commits).',
        concepts: [
          'Commits & working directory staging',
          'Branching & Merging',
          'Resolving merge conflicts',
          'Rebasing & Cherry-picking',
          'Git internals (blobs, trees)'
        ]
      },
      {
        name: 'GitHub / GitLab',
        tags: ['Platform'],
        desc: 'Pull requests, code reviews, branch protection rules, GitHub Actions workflows, and collaborative development workflows.',
        concepts: [
          'Pull Request & Code Review workflow',
          'Branch Protection rules',
          'Issue tracking & Projects',
          'GitHub Actions CI pipelines',
          'Releases & Tags'
        ]
      },
      {
        name: 'Branching Strategies',
        tags: ['Workflow'],
        desc: 'Git Flow, GitHub Flow, trunk-based development — choosing the right strategy for team size and release cadence.',
        concepts: [
          'Git Flow branching model',
          'Trunk-based development',
          'Feature branching workflow',
          'Release branching',
          'Continuous integration rules'
        ]
      },
      {
        name: 'Conventional Commits',
        tags: ['Process'],
        desc: 'Commit message conventions, semantic versioning (semver), CHANGELOG generation, and release automation.',
        concepts: [
          'Commit message naming conventions',
          'Semantic Versioning (SemVer)',
          'Automated changelogs generation',
          'Linter for commit messages',
          'Release release notes'
        ]
      }
    ]
  },
  {
    number: '05',
    title: 'DevOps',
    subtitle: 'Deploy and scale',
    countText: '5 topics',
    topics: [
      {
        name: 'Docker',
        tags: ['Containers', 'Core'],
        desc: 'Containerization concepts, Dockerfile authoring, multi-stage builds, Docker Compose for local environments, and image optimization.',
        concepts: [
          'Containerization vs VM',
          'Dockerfile configuration',
          'Docker Compose multi-containers',
          'Docker Hub & container registry',
          'Image sizing optimization'
        ]
      },
      {
        name: 'Kubernetes',
        tags: ['Orchestration', 'Advanced'],
        desc: 'Pod management, Deployments, Services, ConfigMaps, Secrets, Helm charts, horizontal pod autoscaling, and cluster operations.',
        concepts: [
          'Pod, Service, & Deployment resources',
          'ConfigMap & Secret configuration',
          'Helm package manager charts',
          'Horizontal Pod Autoscaler (HPA)',
          'Cluster namespace routing'
        ]
      },
      {
        name: 'CI/CD Pipelines',
        tags: ['Automation'],
        desc: 'GitHub Actions, Jenkins, or GitLab CI — automated build, test, and deployment pipelines with environment promotion strategies.',
        concepts: [
          'Automated build & test workflows',
          'Pipeline environment variables',
          'Deployment runners & Agents',
          'Artifact caching & storage',
          'Rollbacks & Health checks'
        ]
      },
      {
        name: 'Cloud Providers',
        tags: ['Cloud'],
        desc: 'AWS (EC2, ECS, RDS, S3, Lambda), or GCP/Azure equivalents. IAM, VPC networking, load balancers, and managed database services.',
        concepts: [
          'Virtual machines (AWS EC2)',
          'Object Storage (AWS S3)',
          'Relational database service (RDS)',
          'IAM Roles & permissions',
          'VPC Networking & Security Groups'
        ]
      },
      {
        name: 'Monitoring & Observability',
        tags: ['Metrics', 'Logging'],
        desc: 'Prometheus + Grafana metrics, ELK stack (Elasticsearch, Logstash, Kibana) for logs, distributed tracing with Zipkin or Jaeger.',
        concepts: [
          'Prometheus metrics collection',
          'Grafana dashboard visualizations',
          'ELK stack (Elasticsearch/Logstash/Kibana)',
          'Distributed tracing',
          'Alerting rules'
        ]
      }
    ]
  },
  {
    number: '06',
    title: 'Security',
    subtitle: 'Protect and harden',
    countText: '4 topics',
    topics: [
      {
        name: 'Authentication & Authorization',
        tags: ['Auth', 'Core'],
        desc: 'Spring Security, JWT tokens, OAuth 2.0, OpenID Connect, session management, and role-based access control (RBAC).',
        concepts: [
          'JSON Web Tokens (JWT) creation',
          'OAuth 2.0 & OpenID Connect protocols',
          'Role-Based Access Control (RBAC)',
          'Session management security',
          'Spring Security configuration'
        ]
      },
      {
        name: 'OWASP Top 10',
        tags: ['Vulnerabilities'],
        desc: 'SQL injection, XSS, CSRF, insecure deserialization, security misconfiguration — understand, detect, and prevent common vulnerabilities.',
        concepts: [
          'SQL Injection prevention',
          'Cross-Site Scripting (XSS) mitigation',
          'Cross-Site Request Forgery (CSRF)',
          'Broken Access Control fixing',
          'Dependency security vulnerability scans'
        ]
      },
      {
        name: 'TLS/HTTPS',
        tags: ['Transport'],
        desc: 'SSL/TLS certificates, HTTPS configuration, HSTS, certificate pinning, and Let\'s Encrypt for automated certificate management.',
        concepts: [
          'SSL/TLS certificate handshake',
          'HTTPS server setup',
          'HSTS (HTTP Strict Transport Security)',
          'Let\'s Encrypt certificate auto-renew',
          'Perfect Forward Secrecy'
        ]
      },
      {
        name: 'Secrets Management',
        tags: ['Secrets'],
        desc: 'Environment variables, HashiCorp Vault, AWS Secrets Manager, and never committing credentials to version control.',
        concepts: [
          'HashiCorp Vault secret storage',
          'Environment variable configurations',
          'AWS Secrets Manager integration',
          'Encrypted properties configuration',
          'Secrets rotation'
        ]
      }
    ]
  },
  {
    number: '07',
    title: 'System Design',
    subtitle: 'Think at scale',
    countText: '5 topics',
    topics: [
      {
        name: 'Design Patterns',
        tags: ['Patterns', 'Core'],
        desc: 'Creational (Factory, Builder, Singleton), Structural (Adapter, Decorator, Proxy), Behavioral (Strategy, Observer, Command) patterns.',
        concepts: [
          'Creational patterns (Factory, Singleton)',
          'Structural patterns (Adapter, Decorator)',
          'Behavioral patterns (Observer, Strategy)',
          'Facade & Proxy design patterns',
          'Anti-patterns avoiding'
        ]
      },
      {
        name: 'Architecture Styles',
        tags: ['Architecture'],
        desc: 'Layered architecture, Hexagonal architecture (Ports & Adapters), Domain-Driven Design (DDD) building blocks.',
        concepts: [
          'Monolith vs Microservices',
          'Hexagonal/Clean architecture design',
          'Domain-Driven Design (DDD) concepts',
          'Event-Driven Architectures (EDA)',
          'Serverless architecture'
        ]
      },
      {
        name: 'Scalability Concepts',
        tags: ['Scaling'],
        desc: 'Horizontal vs vertical scaling, load balancing algorithms, caching strategies (CDN, app-level, DB-level), and database read replicas.',
        concepts: [
          'Load balancer hashing algorithms',
          'Vertical vs Horizontal scaling',
          'Database Read Replicas & caching',
          'CDN static resource caching',
          'Message broker decoupling'
        ]
      },
      {
        name: 'API Protocols',
        tags: ['API Design'],
        desc: 'RESTful conventions, GraphQL with Spring for GraphQL, gRPC for internal services, versioning, rate limiting, and pagination.',
        concepts: [
          'GraphQL schema definitions',
          'gRPC protocol buffers serialization',
          'REST vs GraphQL vs gRPC comparison',
          'API Rate limiting & throttling',
          'API pagination patterns'
        ]
      },
      {
        name: 'CAP Theorem',
        tags: ['CAP'],
        desc: 'Consistency, Availability, Partition Tolerance trade-offs, eventual consistency, and choosing the right database for your use case.',
        concepts: [
          'Consistency vs Availability trade-offs',
          'Partition Tolerance implications',
          'Eventual consistency models',
          'Pacelc theorem extending CAP',
          'Database engine selecting'
        ]
      }
    ]
  }
];
