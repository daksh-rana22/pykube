import React from 'react';

export const MICROSERVICES_QUESTIONS = [
  {
    id: 15001,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What do you mean by Microservices?",
    answer: (
      <>
        <p><strong>Microservices</strong> (or Microservice Architecture) is an architectural style that structures an application as a collection of small, autonomous, loosely coupled services modeled around a specific business domain, communicating via lightweight protocols (e.g. HTTP/REST, gRPC, or message brokers).</p>
      </>
    ),
  },
  {
    id: 15002,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What is a Monolithic Architecture?",
    answer: (
      <>
        <p>A <strong>Monolithic Architecture</strong> is a traditional software development model where the entire application (database interface, business logic, and user interface) is built, deployed, and scaled as a single, unified codebase.</p>
      </>
    ),
  },
  {
    id: 15003,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What are the benefits of Microservices?",
    answer: (
      <>
        <p>Benefits include: independent deployments, horizontal scalability of individual services, fault isolation (one service crash doesn't bring down the whole system), technology stack flexibility, and simpler codebases for agile teams.</p>
      </>
    ),
  },
  {
    id: 15004,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is a Spring Cloud?",
    answer: (
      <>
        <p><strong>Spring Cloud</strong> is a framework that provides tools for developers to quickly build common patterns in distributed systems (e.g., configuration management, service discovery, circuit breakers, routing, micro-proxy, and control bus).</p>
      </>
    ),
  },
  {
    id: 15005,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What are the uses of reports & dashboards in a Microservices environment?",
    answer: (
      <>
        <p>They consolidate logs, traces, and metrics across distributed services, giving teams centralized visibility into operational health, API response latencies, and service error rates.</p>
      </>
    ),
  },
  {
    id: 15006,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What are the key differences between Monolithic & Microservices Architecture?",
    answer: (
      <>
        <ul><li><strong>Monolithic:</strong> Single unified deployment, single shared database, single technology stack, single point of failure.</li><li><strong>Microservices:</strong> Multiple modular deployments, database-per-service patterns, multiple technology stacks, isolated faults.</li></ul>
      </>
    ),
  },
  {
    id: 15007,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What challenges do you face while using Microservices?",
    answer: (
      <>
        <p>Challenges: distributed systems complexity, maintaining data consistency (eventual consistency), network latencies, complex logging and monitoring (distributed tracing), and testing integrations.</p>
      </>
    ),
  },
  {
    id: 15008,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Mention some famous companies that are using Microservice Architecture?",
    answer: (
      <>
        <p>Netflix, Amazon, Uber, eBay, Spotify, and Twitter are well-known companies utilizing microservices.</p>
      </>
    ),
  },
  {
    id: 15009,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What are the main characteristics of Microservices?",
    answer: (
      <>
        <p>Characteristics: decentralized governance, database-per-service pattern, smart endpoints and dumb pipes, automated infrastructure (CI/CD), and designed for failure protection.</p>
      </>
    ),
  },
  {
    id: 15010,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Explain different types of tests for Microservices?",
    answer: (
      <>
        <p>Types of tests: Unit Tests (test isolated functions), Integration Tests (verify database/API calls), Contract Tests (validate service-to-service interfaces), Component Tests (verify individual microservice functions), and End-to-End Tests.</p>
      </>
    ),
  },
  {
    id: 15011,
    category: 'Microservices',
    difficulty: 'hard',
    question: "What do you understand by Client certificates?",
    answer: (
      <>
        <p>Client certificates are digital certificates used in mutual TLS (mTLS) to authenticate clients (or calling microservices) to server services, establishing secure cryptographical identities on both ends.</p>
      </>
    ),
  },
  {
    id: 15012,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is the use of PACT in the Microservices Architecture?",
    answer: (
      <>
        <p><strong>PACT</strong> is a contract testing framework that enables consumer-driven contract testing, ensuring that dependent microservices can communicate without breaking changes without full E2E environments.</p>
      </>
    ),
  },
  {
    id: 15013,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is OAuth?",
    answer: (
      <>
        <p>An open authorization standard framework that enables applications to obtain limited access to user accounts on HTTP services without exposing user passwords (using access tokens).</p>
      </>
    ),
  },
  {
    id: 15014,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is the meaning of End-to-End Microservices Testing?",
    answer: (
      <>
        <p>Testing the complete application workflow from beginning to end across all physical microservices, databases, and message queues to ensure they work together.</p>
      </>
    ),
  },
  {
    id: 15015,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Why Microservices use Containers?",
    answer: (
      <>
        <p>Containers provide lightweight, isolated runtime environments, ensuring consistent behavior across deployment phases, fast startup times, and efficient CPU resource scaling.</p>
      </>
    ),
  },
  {
    id: 15016,
    category: 'Microservices',
    difficulty: 'hard',
    question: "Explain Semantic monitoring in the Microservices architecture?",
    answer: (
      <>
        <p>Semantic monitoring runs automated transaction tests (canary tests) against production endpoints regularly to verify that system workflows behave correctly under real conditions.</p>
      </>
    ),
  },
  {
    id: 15017,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What do you mean by CDC?",
    answer: (
      <>
        <p><strong>Consumer-Driven Contracts (CDC)</strong> is a pattern where service consumers define expectations (contracts) for provider APIs, preventing providers from releasing breaking API updates.</p>
      </>
    ),
  },
  {
    id: 15018,
    category: 'Microservices',
    difficulty: 'hard',
    question: "What do you understand by Reactive Extensions in Microservices?",
    answer: (
      <>
        <p>Reactive Extensions (Rx) allow microservices to handle event streams and asynchronous data inputs reactively, supporting non-blocking stream compositions.</p>
      </>
    ),
  },
  {
    id: 15019,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What is 'Continuous Monitoring'?",
    answer: (
      <>
        <p>The process of constantly tracking, logging, and alerting on service health, API responses, CPU usage, and network traffic across distributed microservices.</p>
      </>
    ),
  },
  {
    id: 15020,
    category: 'Microservices',
    difficulty: 'medium',
    question: "How independent Microservices communicate with each other?",
    answer: (
      <>
        <p>They communicate via synchronous protocols (REST APIs/HTTP, gRPC) or asynchronous protocols (RabbitMQ, Apache Kafka message buses).</p>
      </>
    ),
  },
  {
    id: 15021,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Mention the main features of Microservices?",
    answer: (
      <>
        <p>Features: componentization via services, organized around business capabilities, decentralized data management, and evolutionary design.</p>
      </>
    ),
  },
  {
    id: 15022,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What are the key components of Microservices?",
    answer: (
      <>
        <p>Components: API Gateway (routes requests), Service Discovery (locates nodes), Config Server, Circuit Breakers, and distributed Message Brokers.</p>
      </>
    ),
  },
  {
    id: 15023,
    category: 'Microservices',
    difficulty: 'easy',
    question: "List the advantages & the disadvantages of Microservices?",
    answer: (
      <>
        <ul><li><strong>Advantages:</strong> Scalability, isolated faults, stack flexibility, simpler code modules.</li><li><strong>Disadvantages:</strong> Configuration overhead, network latency, data consistency (eventual consistency), complex debug tracing.</li></ul>
      </>
    ),
  },
  {
    id: 15024,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Highlight the differences between SOA, Monolithic, & Microservices Architecture.",
    answer: (
      <>
        <ul><li><strong>Monolithic:</strong> Codebase deployed together sharing a database.</li><li><strong>SOA (Service-Oriented):</strong> Enterprise services communicating over ESB (Enterprise Service Bus), often complex and centralized.</li><li><strong>Microservices:</strong> Decentralized, lightweight, decoupled services using simple APIs.</li></ul>
      </>
    ),
  },
  {
    id: 15025,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is a Domain-Driven Design?",
    answer: (
      <>
        <p><strong>Domain-Driven Design (DDD)</strong> is a software development philosophy that maps complex domain designs to software components, establishing Bounded Contexts around sub-domains.</p>
      </>
    ),
  },
  {
    id: 15026,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Differentiate between Coupling & Cohesion?",
    answer: (
      <>
        <ul><li><strong>Coupling:</strong> Degree of interdependence between software modules. In microservices, we want low coupling.</li><li><strong>Cohesion:</strong> Degree to which elements inside a module belong together. In microservices, we want high cohesion.</li></ul>
      </>
    ),
  },
  {
    id: 15027,
    category: 'Microservices',
    difficulty: 'hard',
    question: "What is the meaning of Distributed Transaction?",
    answer: (
      <>
        <p>A transaction that spans across multiple physical databases or microservices, requiring coordination patterns (e.g. Saga Pattern, Two-Phase Commit).</p>
      </>
    ),
  },
  {
    id: 15028,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is a Contract Testing?",
    answer: (
      <>
        <p>Contract Testing validates that a service provider's API outputs match the schema format expected by consumers without spinning up other backend systems.</p>
      </>
    ),
  },
  {
    id: 15029,
    category: 'Microservices',
    difficulty: 'hard',
    question: "What can understand by Conway\u2019s Law?",
    answer: (
      <>
        <p>Conway's Law states that organizations design systems which mimic their own communication structures (e.g., siloed teams build siloed monolithic components).</p>
      </>
    ),
  },
  {
    id: 15030,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is the key difference between Stub & Mock?",
    answer: (
      <>
        <ul><li><strong>Stub:</strong> Simple object returning pre-defined static data to facilitate test executions.</li><li><strong>Mock:</strong> Smart mock validating interaction expectations (verifying that correct API calls were fired).</li></ul>
      </>
    ),
  },
  {
    id: 15031,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What do you mean by Mike Cohn\u2019s Test Pyramid?",
    answer: (
      <>
        <p>A framework separating test classes: unit tests at the base (fast, cheap), integration/contract tests in the middle, and UI tests at the apex.</p>
      </>
    ),
  },
  {
    id: 15032,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Explain what Canary Releasing is?",
    answer: (
      <>
        <p>A deployment strategy that routes new API updates to a small fraction of real users (e.g., 5%) first to verify stability before updating the entire system.</p>
      </>
    ),
  },
  {
    id: 15033,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Specify different types of credentials of the two-factor authentication?",
    answer: (
      <>
        <p>Types: something you know (password), something you have (OTP token, SMS), and something you are (biometrics).</p>
      </>
    ),
  },
  {
    id: 15034,
    category: 'Microservices',
    difficulty: 'hard',
    question: "Define non-deterministic tests? How to eliminate them?",
    answer: (
      <>
        <p>Tests that randomly pass or fail (flaky tests) due to timing, network dependency, or state pollution. Eliminate by mocking external APIs and isolating environments.</p>
      </>
    ),
  },
  {
    id: 15035,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is the fundamental role of RESTful APIs in Microservices?",
    answer: (
      <>
        <p>Provides the standardized, stateless communication interface for services to exchange resource payloads over HTTP protocols.</p>
      </>
    ),
  },
  {
    id: 15036,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Define Eureka in Microservices?",
    answer: (
      <>
        <p><strong>Netflix Eureka</strong> is a service discovery tool allowing microservice instances to dynamically register their IP addresses and find available target service nodes.</p>
      </>
    ),
  },
  {
    id: 15037,
    category: 'Microservices',
    difficulty: 'hard',
    question: "What is Tasklet & Chunk?",
    answer: (
      <>
        <ul><li><strong>Tasklet:</strong> A simple step execution in Spring Batch containing custom logic (e.g., query execution).</li><li><strong>Chunk:</strong> A batch step executing transactions on chunks of records iteratively.</li></ul>
      </>
    ),
  },
  {
    id: 15038,
    category: 'Microservices',
    difficulty: 'medium',
    question: "How to deploy Exception Handling in the Microservices Architecture?",
    answer: (
      <>
        <p>Deploy by using global exception handlers (e.g., <code>@ControllerAdvice</code> in Spring), translating backend errors into standardized JSON error formats with HTTP status codes.</p>
      </>
    ),
  },
  {
    id: 15039,
    category: 'Microservices',
    difficulty: 'medium',
    question: "How to access RESTful Microservices?",
    answer: (
      <>
        <p>Access services using RestTemplate, WebClient, Feign clients, or client libraries like Axios in Node environment configurations.</p>
      </>
    ),
  },
  {
    id: 15040,
    category: 'Microservices',
    difficulty: 'hard',
    question: "What is the procedure to perform security testing of Microservices?",
    answer: (
      <>
        <p>Run API vulnerability scans, verify mutual TLS (mTLS) between services, check JWT token expiration configurations, and perform penetration tests against the API Gateway.</p>
      </>
    ),
  },
  {
    id: 15041,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is Idempotence? Explain how it is used?",
    answer: (
      <>
        <p>The property where firing an API request multiple times produces the exact same side-effects as firing it once (e.g., PUT requests, or validating unique transaction IDs).</p>
      </>
    ),
  },
  {
    id: 15042,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Mention some tools for managing a Microservice Architecture?",
    answer: (
      <>
        <p>Tools: Kubernetes (orchestration), Spring Cloud (configuration/routing), Consul (discovery), Zipkin/Jaeger (tracing), and Prometheus (metrics).</p>
      </>
    ),
  },
  {
    id: 15043,
    category: 'Microservices',
    difficulty: 'hard',
    question: "How to create State Machines from Microservices?",
    answer: (
      <>
        <p>Coordinate state transitions across services using workflow orchestration engines like Spring StateMachine, Temporal, or AWS Step Functions.</p>
      </>
    ),
  },
  {
    id: 15044,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Mention the most common mistakes when transitioning to the Microservices?",
    answer: (
      <>
        <p>Mistakes: spliting databases too early, sharing a database across services (shared-database anti-pattern), ignoring network latency overheads, and neglecting decentralized tracing tools.</p>
      </>
    ),
  },
  {
    id: 15045,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Where to use WebMVC Test Annotation?",
    answer: (
      <>
        <p>Use <code>@WebMvcTest</code> in Spring Boot integration tests to test MVC controller routing and request mappings without launching the full database context.</p>
      </>
    ),
  },
  {
    id: 15046,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Why do people hesitate to use Microservices?",
    answer: (
      <>
        <p>Hesitations: configuration overhead, difficulties debugging cross-service issues, eventual consistency challenges, and high initial setup costs.</p>
      </>
    ),
  },
  {
    id: 15047,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What are the major challenges for Microservices Testing?",
    answer: (
      <>
        <p>Challenges: environment isolation, handling flaky tests due to network delays, managing test data consistency, and maintaining API client contracts.</p>
      </>
    ),
  },
  {
    id: 15048,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Specify the fundamentals of Microservices Design?",
    answer: (
      <>
        <p>Fundamentals: single responsibility principle (SRP) per service, database-per-service isolation, smart gateways, and asynchronous fallback policies.</p>
      </>
    ),
  },
  {
    id: 15049,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What do you understand by Bounded Context?",
    answer: (
      <>
        <p>A key concept in Domain-Driven Design (DDD) defining explicit boundaries within which a domain model is defined, separating terms and responsibilities cleanly.</p>
      </>
    ),
  },
  {
    id: 15050,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Explain the functioning of a Microservice Architecture?",
    answer: (
      <>
        <p>Clients call API Gateway  &rarr;  routes requests using service discovery maps  &rarr;  services fetch databases independently  &rarr;  communicate asynchronously via brokers.</p>
      </>
    ),
  },
  {
    id: 15051,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What do you mean by Ubiquitous language?",
    answer: (
      <>
        <p>A common shared terminology used by both business stakeholders and developers to describe domain models, avoiding translation mistakes.</p>
      </>
    ),
  },
  {
    id: 15052,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What is RESTful/REST? What are its uses?",
    answer: (
      <>
        <p>Representational State Transfer. An architectural style that uses stateless HTTP operations (GET, POST) to handle resources, used for lightweight API calls.</p>
      </>
    ),
  },
  {
    id: 15053,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What problems does Spring Cloud solve?",
    answer: (
      <>
        <p>Solves distributed configuration, load balancing client-side, dynamic route configurations, circuit breaking fallbacks, and microservice discovery.</p>
      </>
    ),
  },
  {
    id: 15054,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What is DRY in the Microservices Architecture?",
    answer: (
      <>
        <p>Don't Repeat Yourself. In microservices, we sometimes trade DRY code (e.g., copying simple model definitions) to maintain low coupling between services.</p>
      </>
    ),
  },
  {
    id: 15055,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is cross-functional testing?",
    answer: (
      <>
        <p>Testing non-functional aspects of microservices like scalability margins, API security vulnerabilities, network failovers, and response latencies.</p>
      </>
    ),
  },
  {
    id: 15056,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Explain the role of the architect in a Microservices architecture?",
    answer: (
      <>
        <p>Defines service interfaces, establishes inter-service integration communication patterns, and sets deployment orchestration pipelines.</p>
      </>
    ),
  },
  {
    id: 15057,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Define smart endpoints & dumb pipes?",
    answer: (
      <>
        <p>Routing logic resides inside end services (smart endpoints), while communication channels only route raw message packets without parsing business logic (dumb pipes).</p>
      </>
    ),
  },
  {
    id: 15058,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What is the difference between Blue/Green deployment & Rolling deployment?",
    answer: (
      <>
        <ul><li><strong>Blue/Green:</strong> Running two identical environments, instantly switching routers once green is tested.</li><li><strong>Rolling:</strong> Gradually updating old service nodes in batches over time.</li></ul>
      </>
    ),
  },
  {
    id: 15059,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What is a Gateway in Microservices?",
    answer: (
      <>
        <p>An entry router (API Gateway) that intercepts incoming traffic, providing authentication checks, rate limits, CORS policies, and request routing.</p>
      </>
    ),
  },
  {
    id: 15060,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Mention some automation tools in Microservice environments?",
    answer: (
      <>
        <p>Tools: Docker, Kubernetes, Jenkins pipelines, Helm Charts, Ansible configuration scripts, and Terraform environments.</p>
      </>
    ),
  },
  {
    id: 15061,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What are the key benefits of using Microservices over traditional Monolithic architecture?",
    answer: (
      <>
        <p>Enables teams to develop and deploy services in parallel, scales resource nodes dynamically, and prevents single-point-of-failure outages.</p>
      </>
    ),
  },
  {
    id: 15062,
    category: 'Microservices',
    difficulty: 'medium',
    question: "How to monitor Microservices?",
    answer: (
      <>
        <p>Monitor using the ELK stack for logs, Zipkin/Jaeger for tracing transaction spans, and Prometheus/Grafana dashboard setups for service health metrics.</p>
      </>
    ),
  },
  {
    id: 15063,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Define SOA?",
    answer: (
      <>
        <p><strong>Service-Oriented Architecture (SOA)</strong> is an architectural pattern where business functions are exposed as reusable services over centralized middleware networks (ESB).</p>
      </>
    ),
  },
  {
    id: 15064,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Explain the service discovery in the Microservice Architecture?",
    answer: (
      <>
        <p>A dynamic lookup system where service nodes register their network locations (IP, port), allowing other services to locate them automatically.</p>
      </>
    ),
  },
  {
    id: 15065,
    category: 'Microservices',
    difficulty: 'hard',
    question: "What is the meaning of CQRS?",
    answer: (
      <>
        <p><strong>Command Query Responsibility Segregation (CQRS)</strong> is a pattern that segregates update operations (Commands) from read operations (Queries) using separate models.</p>
      </>
    ),
  },
  {
    id: 15066,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Explain the term DDD in Microservices?",
    answer: (
      <>
        <p>Domain-Driven Design. It structures application architectures by dividing complex business domains into decoupled modular contexts (sub-domains).</p>
      </>
    ),
  },
  {
    id: 15067,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Explain what Cross-Browser Testing is?",
    answer: (
      <>
        <p>Testing frontend applications across different browser platforms (Chrome, Firefox, Safari) to ensure style consistency and functionality.</p>
      </>
    ),
  },
  {
    id: 15068,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is component testing?",
    answer: (
      <>
        <p>Testing a single microservice in isolation by mocking its downstream database connections and external API services.</p>
      </>
    ),
  },
  {
    id: 15069,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What are the drawbacks of Microservices?",
    answer: (
      <>
        <p>Drawbacks: distributed complexity, difficulty debugging across network boundaries, high operational overhead, and transaction coordination challenges.</p>
      </>
    ),
  },
  {
    id: 15070,
    category: 'Microservices',
    difficulty: 'medium',
    question: "How to integrate Zuul with other projects?",
    answer: (
      <>
        <p>Integrate using Spring Cloud dependency libraries, decorating configuration files with the <code>@EnableZuulProxy</code> annotation annotation.</p>
      </>
    ),
  },
  {
    id: 15071,
    category: 'Microservices',
    difficulty: 'easy',
    question: "How can Docker help in a Microservice architecture?",
    answer: (
      <>
        <p>Docker packages microservices and their configurations into portable container instances, enabling isolated scaling and simple deployments.</p>
      </>
    ),
  },
  {
    id: 15072,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What are Spring Cloud annotations & configuration?",
    answer: (
      <>
        <p>Annotations like <code>@EnableDiscoveryClient</code> (for Eureka registration) and config files mapping server configuration settings dynamically.</p>
      </>
    ),
  },
  {
    id: 15073,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Name some key features of API Gateway?",
    answer: (
      <>
        <p>Features: request routing, token authentication, rate limiting, logging/metrics, load balancing, and CORS setups.</p>
      </>
    ),
  },
  {
    id: 15074,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What is the difference between Authorization & Authentication?",
    answer: (
      <>
        <ul><li><strong>Authentication:</strong> Verifying who the user is (e.g. Passwords).</li><li><strong>Authorization:</strong> Verifying what permissions the user has (e.g. Roles).</li></ul>
      </>
    ),
  },
  {
    id: 15075,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What do you understand by wiremock?",
    answer: (
      <>
        <p>An HTTP mock server tool used to record and stub API responses from downstream services, facilitating integration tests.</p>
      </>
    ),
  },
  {
    id: 15076,
    category: 'Microservices',
    difficulty: 'easy',
    question: "List down the characteristics of a Good Microservice?",
    answer: (
      <>
        <p>Characteristics: single responsibility boundaries, loosely coupled interactions, independently deployable, and automated monitoring capability.</p>
      </>
    ),
  },
  {
    id: 15077,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What are the main things to keep in mind during the integration of Microservices?",
    answer: (
      <>
        <p>Ensure backward compatibility of API endpoints, set request timeouts, implement retry limits, and log correlations IDs across service calls.</p>
      </>
    ),
  },
  {
    id: 15078,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Which communication type is preferred between Synchronous or Asynchronous in Microservices?",
    answer: (
      <>
        <p>Asynchronous communication is preferred for background events to ensure loose coupling, while synchronous is used for real-time reads.</p>
      </>
    ),
  },
  {
    id: 15079,
    category: 'Microservices',
    difficulty: 'medium',
    question: "What is the difference between Choreography & Orchestration in Microservices?",
    answer: (
      <>
        <ul><li><strong>Orchestration:</strong> A central coordinator microservice guides execution steps (command-driven).</li><li><strong>Choreography:</strong> Services listen to events reactively and execute steps independently (event-driven).</li></ul>
      </>
    ),
  },
  {
    id: 15080,
    category: 'Microservices',
    difficulty: 'easy',
    question: "What do you mean by Semantic Versioning?",
    answer: (
      <>
        <p>A versioning format: MAJOR.MINOR.PATCH (e.g. 2.1.0). Increment MAJOR for breaking API changes, MINOR for features, and PATCH for bugs.</p>
      </>
    ),
  },
  {
    id: 15081,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Explain the meaning of Continuous Delivery (CD)?",
    answer: (
      <>
        <p>The DevOps practice where code updates are automatically built, tested, and staged for immediate release to production environments.</p>
      </>
    ),
  },
  {
    id: 15082,
    category: 'Microservices',
    difficulty: 'hard',
    question: "What is a Bulkhead design pattern?",
    answer: (
      <>
        <p>An architecture pattern that allocates isolated resource pools (e.g., separate thread pools) to different services, preventing a failure in one service from starving resources elsewhere.</p>
      </>
    ),
  },
  {
    id: 15083,
    category: 'Microservices',
    difficulty: 'medium',
    question: "Explain CAP theorem?",
    answer: (
      <>
        <p>The theorem stating that distributed systems can satisfy at most two out of three guarantees: Consistency, Availability, and Partition Tolerance.</p>
      </>
    ),
  },
  {
    id: 15084,
    category: 'Microservices',
    difficulty: 'easy',
    question: "Specify the major principles of Microservices?",
    answer: (
      <>
        <p>Principles: modeled around business domains, automate infrastructure, hide internal implementation details, and decentralize decisions.</p>
      </>
    ),
  },
];
