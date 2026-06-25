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
        desc: 'Semantic markup, accessibility (ARIA), forms, media elements, and modern HTML APIs like Web Storage and Canvas.'
      },
      {
        name: 'CSS3',
        tags: ['Layout', 'Responsive'],
        desc: 'Flexbox, CSS Grid, animations, custom properties, responsive design with media queries, and CSS architecture (BEM, utility-first).'
      },
      {
        name: 'JavaScript (ES6+)',
        tags: ['Core', 'ES2024'],
        desc: 'Closures, promises, async/await, destructuring, modules, event loop, DOM manipulation, and modern browser APIs.'
      },
      {
        name: 'TypeScript',
        tags: ['Typed', 'Advanced'],
        desc: 'Static typing, generics, interfaces, decorators, and type inference for building robust large-scale applications.'
      },
      {
        name: 'React.js',
        tags: ['Framework', 'Popular'],
        desc: 'Component architecture, hooks (useState, useEffect, useContext), React Router, state management with Redux or Zustand.'
      },
      {
        name: 'Build Tools',
        tags: ['Tooling'],
        desc: 'Vite, Webpack bundling concepts, npm/yarn package management, ESLint, Prettier code quality tools.'
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
        desc: 'OOP principles, collections framework, generics, exception handling, multithreading, Java Stream API, and Java Memory Model.'
      },
      {
        name: 'Spring Framework',
        tags: ['Framework'],
        desc: 'Dependency injection, IoC container, Spring MVC, AOP (Aspect-Oriented Programming), and Spring Security.'
      },
      {
        name: 'Spring Boot',
        tags: ['Framework', 'Popular'],
        desc: 'Auto-configuration, embedded servers (Tomcat/Jetty), Spring Boot Actuator, application properties, and starter dependencies.'
      },
      {
        name: 'RESTful APIs',
        tags: ['API Design'],
        desc: 'REST principles, HTTP methods, status codes, request/response design, versioning strategies, HATEOAS, and OpenAPI/Swagger.'
      },
      {
        name: 'Microservices',
        tags: ['Architecture', 'Advanced'],
        desc: 'Service decomposition, inter-service communication (REST, gRPC), API gateways, service discovery with Eureka, circuit breakers.'
      },
      {
        name: 'Message Queues',
        tags: ['Messaging', 'Advanced'],
        desc: 'Apache Kafka or RabbitMQ for async communication, event-driven architecture, and decoupled service interactions.'
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
        desc: 'PostgreSQL or MySQL — complex queries, JOINs, indexes, transactions (ACID), stored procedures, and query optimization.'
      },
      {
        name: 'JPA & Hibernate',
        tags: ['ORM', 'Java'],
        desc: 'Object-Relational Mapping (ORM), entity relationships (OneToMany, ManyToMany), lazy vs eager loading, JPQL, and Criteria API.'
      },
      {
        name: 'MongoDB',
        tags: ['NoSQL'],
        desc: 'Document model, BSON, aggregation pipelines, indexes, Spring Data MongoDB integration, and schema design patterns.'
      },
      {
        name: 'Redis',
        tags: ['Cache', 'Advanced'],
        desc: 'In-memory caching, pub/sub messaging, data structures (sorted sets, hashes), session management, and Spring Cache abstraction.'
      },
      {
        name: 'Database Design',
        tags: ['Design'],
        desc: 'Normalization (1NF–3NF), ER diagrams, indexing strategies, partitioning, sharding, and database migration with Flyway/Liquibase.'
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
        desc: 'Commits, branching, merging, rebasing, cherry-picking, stashing, and understanding the Git object model (blobs, trees, commits).'
      },
      {
        name: 'GitHub / GitLab',
        tags: ['Platform'],
        desc: 'Pull requests, code reviews, branch protection rules, GitHub Actions workflows, and collaborative development workflows.'
      },
      {
        name: 'Branching Strategies',
        tags: ['Workflow'],
        desc: 'Git Flow, GitHub Flow, trunk-based development — choosing the right strategy for team size and release cadence.'
      },
      {
        name: 'Conventional Commits',
        tags: ['Process'],
        desc: 'Commit message conventions, semantic versioning (semver), CHANGELOG generation, and release automation.'
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
        desc: 'Containerization concepts, Dockerfile authoring, multi-stage builds, Docker Compose for local environments, and image optimization.'
      },
      {
        name: 'Kubernetes',
        tags: ['Orchestration', 'Advanced'],
        desc: 'Pod management, Deployments, Services, ConfigMaps, Secrets, Helm charts, horizontal pod autoscaling, and cluster operations.'
      },
      {
        name: 'CI/CD Pipelines',
        tags: ['Automation'],
        desc: 'GitHub Actions, Jenkins, or GitLab CI — automated build, test, and deployment pipelines with environment promotion strategies.'
      },
      {
        name: 'Cloud Providers',
        tags: ['Cloud'],
        desc: 'AWS (EC2, ECS, RDS, S3, Lambda), or GCP/Azure equivalents. IAM, VPC networking, load balancers, and managed database services.'
      },
      {
        name: 'Monitoring & Observability',
        tags: ['Metrics', 'Logging'],
        desc: 'Prometheus + Grafana metrics, ELK stack (Elasticsearch, Logstash, Kibana) for logs, distributed tracing with Zipkin or Jaeger.'
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
        desc: 'Spring Security, JWT tokens, OAuth 2.0, OpenID Connect, session management, and role-based access control (RBAC).'
      },
      {
        name: 'OWASP Top 10',
        tags: ['Vulnerabilities'],
        desc: 'SQL injection, XSS, CSRF, insecure deserialization, security misconfiguration — understand, detect, and prevent common vulnerabilities.'
      },
      {
        name: 'TLS/HTTPS',
        tags: ['Transport'],
        desc: 'SSL/TLS certificates, HTTPS configuration, HSTS, certificate pinning, and Let\'s Encrypt for automated certificate management.'
      },
      {
        name: 'Secrets Management',
        tags: ['Secrets'],
        desc: 'Environment variables, HashiCorp Vault, AWS Secrets Manager, and never committing credentials to version control.'
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
        desc: 'Creational (Factory, Builder, Singleton), Structural (Adapter, Decorator, Proxy), Behavioral (Strategy, Observer, Command) patterns.'
      },
      {
        name: 'Architecture Styles',
        tags: ['Architecture'],
        desc: 'Layered architecture, Hexagonal architecture (Ports & Adapters), Domain-Driven Design (DDD) building blocks.'
      },
      {
        name: 'Scalability Concepts',
        tags: ['Scaling'],
        desc: 'Horizontal vs vertical scaling, load balancing algorithms, caching strategies (CDN, app-level, DB-level), and database read replicas.'
      },
      {
        name: 'API Protocols',
        tags: ['API Design'],
        desc: 'RESTful conventions, GraphQL with Spring for GraphQL, gRPC for internal services, versioning, rate limiting, and pagination.'
      },
      {
        name: 'CAP Theorem',
        tags: ['CAP'],
        desc: 'Consistency, Availability, Partition Tolerance trade-offs, eventual consistency, and choosing the right database for your use case.'
      }
    ]
  }
];
