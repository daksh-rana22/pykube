import React from 'react';

export const SPRING_BOOT_QUESTIONS = [
  {
    id: 23001,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What is Spring Boot?",
    answer: (
      <>
        <p><strong>Spring Boot</strong> is an opinionated, production-ready extension of the Spring Framework that drastically reduces the boilerplate configuration required to build Spring-based applications. It follows a 'convention over configuration' philosophy, providing auto-configuration, embedded web servers (Tomcat, Jetty, Undertow), and a curated set of starter dependencies. Developers can create standalone, self-contained Spring applications with minimal setup — no XML configuration files, no separate application server deployment needed. Spring Boot is ideal for building microservices, REST APIs, and cloud-native applications.</p>
      </>
    ),
  },
  {
    id: 23002,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What are the features of Spring Boot?",
    answer: (
      <>
        <p>Key features of Spring Boot include:</p><ul><li><strong>Auto-Configuration:</strong> Automatically configures Spring beans based on the classpath, properties, and annotations without manual XML setup.</li><li><strong>Spring Boot Starters:</strong> Pre-packaged dependency descriptors (e.g., spring-boot-starter-web) that bundle all required libraries.</li><li><strong>Embedded Servers:</strong> Ships with embedded Tomcat, Jetty, or Undertow so applications run as standalone JARs.</li><li><strong>Actuator:</strong> Production-ready monitoring endpoints exposing health, metrics, and environment info.</li><li><strong>Spring Boot CLI:</strong> Command-line tool for rapid Groovy-based Spring prototyping.</li><li><strong>Opinionated Defaults:</strong> Sensible defaults that reduce decision fatigue while remaining fully customizable.</li></ul>
      </>
    ),
  },
  {
    id: 23003,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What is the difference between Spring and Spring Boot?",
    answer: (
      <>
        <ul><li><strong>Spring Framework:</strong> A comprehensive dependency injection and application framework requiring extensive XML or Java-based configuration to set up components, data sources, transaction managers, and web MVC.</li><li><strong>Spring Boot:</strong> Builds on top of Spring, providing auto-configuration to eliminate manual setup, embedded servers to remove the need for external application servers, and starter POMs to simplify dependency management.</li></ul><p>Spring Boot doesn't replace Spring — it uses Spring under the hood but removes the setup friction, allowing developers to focus on business logic rather than infrastructure configuration.</p>
      </>
    ),
  },
  {
    id: 23004,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What is the significance of @SpringBootApplication annotation?",
    answer: (
      <>
        <p>The <code>@SpringBootApplication</code> annotation is a convenience composite annotation combining three essential annotations:</p><ul><li><strong>@SpringBootConfiguration:</strong> Marks the class as a configuration class (equivalent to @Configuration).</li><li><strong>@EnableAutoConfiguration:</strong> Activates Spring Boot's auto-configuration mechanism that scans the classpath and configures beans automatically.</li><li><strong>@ComponentScan:</strong> Enables component scanning, automatically detecting @Component, @Service, @Repository, and @Controller classes in the package and sub-packages.</li></ul><p>Placing <code>@SpringBootApplication</code> on the main class is the standard entry point for all Spring Boot applications.</p>
      </>
    ),
  },
  {
    id: 23005,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What is Spring Boot Actuator?",
    answer: (
      <>
        <p><strong>Spring Boot Actuator</strong> is a sub-project providing production-ready features to monitor and manage Spring Boot applications. It exposes HTTP endpoints and JMX beans for operational insights:</p><ul><li><strong>/health:</strong> Application health status and component health indicators.</li><li><strong>/metrics:</strong> JVM memory, CPU usage, HTTP request statistics.</li><li><strong>/env:</strong> Environment properties and configuration values.</li><li><strong>/loggers:</strong> View and change logging levels at runtime.</li><li><strong>/beans:</strong> List all Spring beans in the context.</li><li><strong>/info:</strong> Custom application info.</li></ul><p>Actuator integrates with Micrometer for metric export to Prometheus, Grafana, and other monitoring systems.</p>
      </>
    ),
  },
  {
    id: 23006,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What are Spring Boot Starters?",
    answer: (
      <>
        <p><strong>Spring Boot Starters</strong> are pre-built dependency descriptor POMs that bundle all required dependencies for a specific functionality, eliminating the need to manually manage transitive dependencies. Common starters:</p><ul><li><strong>spring-boot-starter-web:</strong> Spring MVC, Jackson, embedded Tomcat for web/REST apps.</li><li><strong>spring-boot-starter-data-jpa:</strong> Hibernate, Spring Data JPA, database connectivity.</li><li><strong>spring-boot-starter-security:</strong> Spring Security for authentication/authorization.</li><li><strong>spring-boot-starter-test:</strong> JUnit, Mockito, AssertJ for testing.</li><li><strong>spring-boot-starter-actuator:</strong> Production monitoring endpoints.</li></ul><p>Starters follow the naming convention: <code>spring-boot-starter-*</code> for official starters and <code>*-spring-boot-starter</code> for third-party starters.</p>
      </>
    ),
  },
  {
    id: 23007,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is Spring Boot Auto-Configuration?",
    answer: (
      <>
        <p>Auto-configuration is Spring Boot's mechanism to automatically configure Spring application beans based on what's on the classpath, the beans already defined, and property settings. It works through:</p><ul><li>The <code>@EnableAutoConfiguration</code> annotation triggering classpath scanning.</li><li>Auto-configuration classes listed in <code>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code>.</li><li>Conditional annotations (<code>@ConditionalOnClass</code>, <code>@ConditionalOnMissingBean</code>) applying configurations only when conditions are met.</li></ul><p>For example, if spring-data-jpa and H2 are on the classpath, Spring Boot auto-configures a DataSource, EntityManagerFactory, and TransactionManager automatically.</p>
      </>
    ),
  },
  {
    id: 23008,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What is application.properties in Spring Boot?",
    answer: (
      <>
        <p><code>application.properties</code> (or <code>application.yml</code>) is the central configuration file in Spring Boot, placed in <code>src/main/resources</code>. It configures all application-level settings:</p><ul><li>Server port: <code>server.port=8080</code></li><li>Database connection: <code>spring.datasource.url=jdbc:mysql://localhost/db</code></li><li>Logging levels: <code>logging.level.com.example=DEBUG</code></li><li>JPA settings: <code>spring.jpa.hibernate.ddl-auto=update</code></li></ul><p>Profile-specific files (<code>application-dev.properties</code>, <code>application-prod.properties</code>) override defaults for specific environments.</p>
      </>
    ),
  },
  {
    id: 23009,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is the role of @RestController in Spring Boot?",
    answer: (
      <>
        <p><code>@RestController</code> is a composed annotation combining <code>@Controller</code> and <code>@ResponseBody</code>. It marks a class as a Spring MVC controller where every method automatically serializes return values to JSON (or XML) and writes them to the HTTP response body — no need to annotate each method with @ResponseBody individually. It is the standard annotation for building RESTful APIs in Spring Boot. Example:</p><ul><li><strong>@Controller + @ResponseBody = @RestController</strong></li><li>Methods return domain objects that Jackson auto-serializes to JSON.</li></ul>
      </>
    ),
  },
  {
    id: 23010,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How does dependency injection work in Spring Boot?",
    answer: (
      <>
        <p>Spring Boot uses the Spring IoC (Inversion of Control) container for dependency injection. The container manages object creation and wiring. Injection modes:</p><ul><li><strong>Constructor Injection (recommended):</strong> Dependencies injected via constructor, enabling immutability and easier unit testing.</li><li><strong>Setter Injection:</strong> Dependencies set via setter methods after object creation.</li><li><strong>Field Injection (@Autowired):</strong> Spring directly injects the field — simple but harder to test and not recommended for mandatory dependencies.</li></ul><p>Spring automatically resolves and injects beans matching the required type from the application context.</p>
      </>
    ),
  },
  {
    id: 23011,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is Spring Data JPA?",
    answer: (
      <>
        <p><strong>Spring Data JPA</strong> is a Spring module simplifying JPA-based data access by providing repository abstractions that eliminate boilerplate DAO code. Key features:</p><ul><li><strong>JpaRepository:</strong> Extends CrudRepository with pagination and sorting. Provides save(), findAll(), findById(), delete() out of the box.</li><li><strong>Query Methods:</strong> Automatically derives queries from method names: <code>findByEmailAndAge(String email, int age)</code>.</li><li><strong>@Query annotation:</strong> Custom JPQL or native SQL queries.</li><li><strong>Pagination:</strong> <code>findAll(Pageable pageable)</code> returns Page objects.</li></ul><p>Spring Boot auto-configures the EntityManagerFactory and TransactionManager when spring-boot-starter-data-jpa is included.</p>
      </>
    ),
  },
  {
    id: 23012,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What is @Autowired annotation in Spring Boot?",
    answer: (
      <>
        <p><code>@Autowired</code> is a Spring annotation that marks a constructor, field, setter, or config method for automatic dependency injection by the Spring IoC container. The container automatically resolves and injects the matching bean. It can be used on:</p><ul><li><strong>Fields:</strong> <code>@Autowired private UserService userService;</code></li><li><strong>Constructors:</strong> Preferred — no annotation needed from Spring 4.3+ for single-constructor classes.</li><li><strong>Setter methods:</strong> For optional dependencies.</li></ul><p>Use <code>@Qualifier</code> to disambiguate when multiple beans of the same type exist.</p>
      </>
    ),
  },
  {
    id: 23013,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is Spring Security in Spring Boot?",
    answer: (
      <>
        <p><strong>Spring Security</strong> is a powerful authentication and authorization framework integrated into Spring Boot via the <code>spring-boot-starter-security</code> starter. Key features:</p><ul><li><strong>Authentication:</strong> Form login, HTTP Basic, OAuth2, JWT, LDAP support.</li><li><strong>Authorization:</strong> URL-based security rules, method-level security with @PreAuthorize/@Secured.</li><li><strong>CSRF protection:</strong> Enabled by default for web applications.</li><li><strong>Password encoding:</strong> BCryptPasswordEncoder for secure password storage.</li></ul><p>Spring Boot auto-configures a basic security setup generating a random password on startup. Customize by extending <code>SecurityFilterChain</code> beans with custom rules.</p>
      </>
    ),
  },
  {
    id: 23014,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What are Spring Profiles?",
    answer: (
      <>
        <p>Spring Profiles allow defining different configurations for different environments (dev, test, prod). Profiles are activated via:</p><ul><li><code>spring.profiles.active=prod</code> in application.properties</li><li>Environment variable: <code>SPRING_PROFILES_ACTIVE=prod</code></li><li>JVM arg: <code>-Dspring.profiles.active=prod</code></li></ul><p>Use <code>@Profile('dev')</code> on beans to conditionally create them only for specific profiles. Profile-specific property files (<code>application-dev.properties</code>) override the main application.properties, enabling environment-specific database URLs, logging levels, and feature flags.</p>
      </>
    ),
  },
  {
    id: 23015,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "What is the difference between @Component, @Service, @Repository, and @Controller?",
    answer: (
      <>
        <p>All four are specializations of <code>@Component</code>, enabling auto-detection via component scanning. The differences are semantic and functional:</p><ul><li><strong>@Component:</strong> Generic Spring bean — use for utility classes or when no specific role applies.</li><li><strong>@Service:</strong> Service layer bean — business logic. No additional technical behavior beyond @Component.</li><li><strong>@Repository:</strong> DAO/persistence layer bean. Additionally activates Spring's PersistenceExceptionTranslation — database exceptions are translated to Spring's DataAccessException hierarchy.</li><li><strong>@Controller:</strong> MVC controller bean — handles web requests, processes models, and returns view names.</li></ul>
      </>
    ),
  },
  {
    id: 23016,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is the purpose of @RequestMapping in Spring Boot?",
    answer: (
      <>
        <p><code>@RequestMapping</code> maps HTTP requests to handler methods or classes, supporting multiple HTTP methods, URL patterns, request parameters, and headers. It can be applied at class level (base path) and method level (specific operation):</p><ul><li><code>@RequestMapping('/api/users')</code> on class sets base URL.</li><li><code>@RequestMapping(value='/id', method=RequestMethod.GET)</code> on method handles specific HTTP method.</li></ul><p>Shortcut annotations provide cleaner code: <code>@GetMapping</code>, <code>@PostMapping</code>, <code>@PutMapping</code>, <code>@DeleteMapping</code>, <code>@PatchMapping</code> — each pre-set to the corresponding HTTP method.</p>
      </>
    ),
  },
  {
    id: 23017,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is Spring Boot's embedded server and how does it work?",
    answer: (
      <>
        <p>Spring Boot embeds a servlet container directly into the application JAR, eliminating the need to deploy to an external application server. The embedded server starts when the application launches via the <code>main()</code> method. Default is <strong>Tomcat</strong>; alternatives are Jetty and Undertow, switchable by excluding Tomcat and adding the alternative starter. Configuration: <code>server.port=8080</code>, <code>server.context-path=/api</code> in application.properties. This makes Spring Boot apps truly self-contained — packaged as executable JARs deployable with <code>java -jar app.jar</code>.</p>
      </>
    ),
  },
  {
    id: 23018,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is @Transactional in Spring Boot?",
    answer: (
      <>
        <p><code>@Transactional</code> declares transactional boundaries on methods or classes, managed by Spring's transaction infrastructure. When a @Transactional method executes:</p><ul><li>A transaction starts before method execution.</li><li>On successful completion, the transaction commits.</li><li>On RuntimeException, the transaction rolls back automatically.</li></ul><p>Key attributes: <code>propagation</code> (REQUIRED, REQUIRES_NEW, NESTED), <code>isolation</code> (READ_COMMITTED, SERIALIZABLE), <code>readOnly=true</code> (optimization hint), and <code>rollbackFor</code> (trigger rollback on specific exceptions). Works via Spring AOP proxy — only external method calls trigger transactional behavior.</p>
      </>
    ),
  },
  {
    id: 23019,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "What is Spring Boot's externalized configuration?",
    answer: (
      <>
        <p>Spring Boot supports loading configuration from multiple sources in a defined precedence order (highest wins):</p><ol><li>Command-line arguments</li><li>SPRING_APPLICATION_JSON (inline JSON)</li><li>OS environment variables</li><li>application-{"{"}profile{"}"}.properties</li><li>application.properties in classpath</li><li>@PropertySource annotations</li><li>Default properties</li></ol><p>This allows the same application binary to run in different environments without code changes — development uses H2, production uses PostgreSQL, all configured externally.</p>
      </>
    ),
  },
  {
    id: 23020,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "How to run a Spring Boot application?",
    answer: (
      <>
        <p>Spring Boot applications can be run in multiple ways:</p><ul><li><strong>IDE:</strong> Run the main class (annotated with @SpringBootApplication) directly from IntelliJ or Eclipse.</li><li><strong>Maven:</strong> <code>mvn spring-boot:run</code></li><li><strong>Gradle:</strong> <code>./gradlew bootRun</code></li><li><strong>Executable JAR:</strong> <code>mvn package</code> then <code>java -jar target/app.jar</code></li><li><strong>Docker container:</strong> Package as container image using Spring Boot's built-in Buildpacks: <code>mvn spring-boot:build-image</code></li></ul>
      </>
    ),
  },
  {
    id: 23021,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What are the key components of Spring Boot?",
    answer: (
      <>
        <p>Spring Boot's architecture consists of several key components:</p><ul><li><strong>Spring Boot Starters:</strong> Pre-built dependency bundles (spring-boot-starter-web, spring-boot-starter-data-jpa) that pull in all required libraries automatically.</li><li><strong>Auto-Configuration:</strong> Automatically configures the application based on classpath dependencies and settings via @EnableAutoConfiguration.</li><li><strong>Spring Boot CLI:</strong> A command-line tool for quickly prototyping Spring applications using Groovy scripts without a full project setup.</li><li><strong>Spring Boot Actuator:</strong> Adds production monitoring and management endpoints for health checks, metrics, and environment inspection.</li><li><strong>Spring Initializr:</strong> Web-based project generator at start.spring.io for bootstrapping new Spring Boot projects.</li></ul>
      </>
    ),
  },
  {
    id: 23022,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is a Spring CLI?",
    answer: (
      <>
        <p><strong>Spring Boot CLI</strong> (Command Line Interface) is a tool that enables rapid Spring application prototyping using Groovy scripts, without requiring a full Maven/Gradle project structure. Key capabilities:</p><ul><li>Write and run Groovy-based Spring apps with a single command: <code>spring run app.groovy</code></li><li>Automatically resolves Spring dependencies without explicit imports in Groovy scripts.</li><li>Supports creating project structures: <code>spring init --dependencies=web,jpa myapp</code></li><li>Ideal for quick experiments, demos, and learning Spring Boot concepts.</li></ul><p>Install via SDKMAN, Homebrew, or manual download from the Spring website.</p>
      </>
    ),
  },
  {
    id: 23023,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "Where can you define the properties in a Spring Boot application?",
    answer: (
      <>
        <p>Properties can be defined in multiple locations (in order of precedence — highest first):</p><ol><li><strong>Command-line arguments:</strong> <code>java -jar app.jar --server.port=9090</code></li><li><strong>Environment variables:</strong> <code>SERVER_PORT=9090</code></li><li><strong>application-{"{"}profile{"}"}.properties:</strong> Profile-specific file in classpath.</li><li><strong>application.properties / application.yml:</strong> Main config file in <code>src/main/resources</code>.</li><li><strong>@PropertySource:</strong> Custom property files imported via annotation.</li><li><strong>Default values:</strong> In <code>@Value</code> annotations or @ConfigurationProperties defaults.</li></ol><p>YAML format (<code>application.yml</code>) supports hierarchical configuration and is preferred for complex nested properties.</p>
      </>
    ),
  },
  {
    id: 23024,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What embedded containers does Spring support?",
    answer: (
      <>
        <p>Spring Boot supports three embedded servlet containers out of the box:</p><ul><li><strong>Apache Tomcat (default):</strong> Industry-standard servlet container included via <code>spring-boot-starter-web</code>. Most widely used.</li><li><strong>Eclipse Jetty:</strong> Lightweight, highly embeddable server. Preferred for low-latency, high-concurrency scenarios. Include by excluding Tomcat and adding <code>spring-boot-starter-jetty</code>.</li><li><strong>Undertow:</strong> Non-blocking, high-performance server from JBoss/Red Hat. Excellent throughput and low memory footprint. Include via <code>spring-boot-starter-undertow</code>.</li></ul><p>All three support HTTPS, HTTP/2, WebSocket, and can be configured via <code>server.*</code> properties.</p>
      </>
    ),
  },
  {
    id: 23025,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "Highlight the main differences between Hibernate & JPA?",
    answer: (
      <>
        <ul><li><strong>JPA (Java Persistence API):</strong> A specification (standard interface) defining how Java objects should be persisted to relational databases. It only provides interfaces and annotations — no implementation. Part of the Jakarta EE standard.</li><li><strong>Hibernate:</strong> The most popular JPA implementation (provider). Implements the JPA specification and adds extra features: HQL (Hibernate Query Language), second-level caching, lazy loading strategies, and additional mapping capabilities.</li></ul><p>In Spring Boot, you configure JPA interfaces in your code, and Hibernate is the default underlying provider that fulfills those contracts.</p>
      </>
    ),
  },
  {
    id: 23026,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "What is a shutdown in an Actuator?",
    answer: (
      <>
        <p>The <strong>/actuator/shutdown</strong> endpoint allows graceful shutdown of a Spring Boot application via an HTTP POST request. It is <strong>disabled by default</strong> for security reasons and must be explicitly enabled:</p><ul><li>Enable in properties: <code>management.endpoint.shutdown.enabled=true</code></li><li>Expose via web: <code>management.endpoints.web.exposure.include=shutdown</code></li><li>Trigger shutdown: <code>POST http://localhost:8080/actuator/shutdown</code></li></ul><p>When triggered, the Spring application context is closed gracefully, completing in-flight requests before stopping. Always secure this endpoint in production using Spring Security or by restricting access to management ports.</p>
      </>
    ),
  },
  {
    id: 23027,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What are some key differences between RequestMapping & GetMapping?",
    answer: (
      <>
        <ul><li><strong>@RequestMapping:</strong> Generic, multi-purpose mapping supporting any HTTP method. Requires specifying the method attribute: <code>@RequestMapping(value='/users', method=RequestMethod.GET)</code>. Can be used at class level for base URL mapping.</li><li><strong>@GetMapping:</strong> A specialized shortcut for <code>@RequestMapping(method=RequestMethod.GET)</code>. More concise and self-documenting. Available alongside @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping.</li></ul><p><strong>Best practice:</strong> Use @GetMapping/@PostMapping etc. at method level for clarity, and @RequestMapping at class level to set the base URL path.</p>
      </>
    ),
  },
  {
    id: 23028,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What do you mean by LiveReload in Spring Boot?",
    answer: (
      <>
        <p><strong>LiveReload</strong> is a developer productivity feature provided by Spring Boot DevTools that automatically triggers a browser refresh when server-side files change. How it works:</p><ul><li>Spring Boot DevTools includes an embedded LiveReload server.</li><li>When code changes are detected and recompiled, the LiveReload server sends a signal to the browser.</li><li>The browser (with LiveReload extension or built-in support) automatically refreshes, showing the latest changes.</li></ul><p>Enable by adding <code>spring-boot-devtools</code> dependency. Works for templates, static resources, and Java class changes that trigger application restart.</p>
      </>
    ),
  },
  {
    id: 23029,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is hot-swapping in Spring Boot?",
    answer: (
      <>
        <p><strong>Hot-swapping</strong> refers to replacing updated classes in the running JVM without fully restarting the application. Spring Boot DevTools enables a form of hot-swapping:</p><ul><li>Monitors the classpath for changes.</li><li>Uses two ClassLoaders — one for libraries (rarely changes) and one for application classes (frequently changes).</li><li>On change, only restarts the application ClassLoader (much faster than full restart — typically under 1 second).</li></ul><p>For true method-body hot-swapping (without restart), tools like <strong>JRebel</strong> or <strong>HotSwapAgent</strong> with DCEVM (Dynamic Code Evolution VM) are needed.</p>
      </>
    ),
  },
  {
    id: 23030,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is Auto-Configuration in Spring Boot?",
    answer: (
      <>
        <p>Auto-configuration is Spring Boot's core mechanism that automatically configures application beans based on classpath contents and user-defined beans. It works through:</p><ul><li><strong>Conditional configuration:</strong> @ConditionalOnClass (configure only if class exists), @ConditionalOnMissingBean (configure only if user hasn't defined their own), @ConditionalOnProperty (configure only if property set).</li><li><strong>Auto-configuration classes</strong> registered in <code>META-INF/spring/AutoConfiguration.imports</code>.</li></ul><p>Example: If <code>spring-data-jpa</code> and <code>h2</code> are on the classpath, Spring Boot auto-configures an in-memory DataSource, Hibernate JPA provider, and TransactionManager — zero configuration required.</p>
      </>
    ),
  },
  {
    id: 23031,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How do you enable logging in to Spring Boot?",
    answer: (
      <>
        <p>Spring Boot uses <strong>SLF4J</strong> as the logging facade with <strong>Logback</strong> as the default implementation. Configure logging in <code>application.properties</code>:</p><ul><li>Set root level: <code>logging.level.root=WARN</code></li><li>Set package level: <code>logging.level.com.example=DEBUG</code></li><li>Log to file: <code>logging.file.name=app.log</code></li><li>Log pattern: <code>logging.pattern.console=%d{"{"}HH:mm:ss{"}"} %-5level %logger{"{"}36{"}"} - %msg%n</code></li></ul><p>For advanced configuration, add <code>logback-spring.xml</code> to resources. Use <code>@Slf4j</code> (Lombok) or <code>LoggerFactory.getLogger()</code> to get logger instances in code.</p>
      </>
    ),
  },
  {
    id: 23032,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is CORS in Spring Boot?",
    answer: (
      <>
        <p><strong>CORS</strong> (Cross-Origin Resource Sharing) is a browser security mechanism that restricts HTTP requests from one origin (domain) to another. In Spring Boot, CORS can be configured at multiple levels:</p><ul><li><strong>Method level:</strong> <code>@CrossOrigin(origins = 'http://localhost:3000')</code> on controller methods.</li><li><strong>Controller level:</strong> <code>@CrossOrigin</code> on the entire controller class.</li><li><strong>Global configuration:</strong> Via <code>WebMvcConfigurer.addCorsMappings()</code> to define allowed origins, methods, and headers application-wide.</li><li><strong>Spring Security:</strong> <code>http.cors().configurationSource()</code> for security-integrated CORS handling.</li></ul>
      </>
    ),
  },
  {
    id: 23033,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What are some sources of external configuration?",
    answer: (
      <>
        <p>Spring Boot's externalized configuration sources (highest precedence first):</p><ol><li>Command-line arguments (<code>--key=value</code>)</li><li>SPRING_APPLICATION_JSON environment variable (inline JSON)</li><li>ServletConfig / ServletContext init parameters</li><li>JNDI attributes from <code>java:comp/env</code></li><li>Java system properties (<code>-Dkey=value</code>)</li><li>OS environment variables</li><li>Profile-specific application properties (<code>application-{"{"}profile{"}"}.yml</code>)</li><li>Application properties (<code>application.yml</code>) inside packaged JAR</li><li>Default properties (SpringApplication.setDefaultProperties)</li></ol>
      </>
    ),
  },
  {
    id: 23034,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is the role of Spring Data?",
    answer: (
      <>
        <p><strong>Spring Data</strong> is an umbrella project providing consistent, Spring-based data access abstractions across different data stores:</p><ul><li><strong>Spring Data JPA:</strong> Relational databases via Hibernate/JPA.</li><li><strong>Spring Data MongoDB:</strong> MongoDB document database.</li><li><strong>Spring Data Redis:</strong> Redis key-value store.</li><li><strong>Spring Data Elasticsearch:</strong> Elasticsearch search engine.</li><li><strong>Spring Data R2DBC:</strong> Reactive relational database connectivity.</li></ul><p>All modules provide repository interfaces eliminating boilerplate CRUD code, query derivation from method names, and seamless Spring Boot auto-configuration integration.</p>
      </>
    ),
  },
  {
    id: 23035,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "What are the main differences between @SpringBootApplication & @EnableAutoConfiguration annotation?",
    answer: (
      <>
        <ul><li><strong>@EnableAutoConfiguration:</strong> A single annotation that activates Spring Boot's auto-configuration mechanism, scanning the classpath and configuring beans conditionally. Does not include component scanning or configuration class declaration.</li><li><strong>@SpringBootApplication:</strong> A composite annotation combining @SpringBootConfiguration + @EnableAutoConfiguration + @ComponentScan. It is the recommended single annotation for the main application class, providing complete setup in one annotation.</li></ul><p>In most cases, use @SpringBootApplication on the main class. @EnableAutoConfiguration is used only when you need fine-grained control and want to exclude component scanning or custom configuration setup.</p>
      </>
    ),
  },
  {
    id: 23036,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "How to register a custom auto-configuration?",
    answer: (
      <>
        <p>Custom auto-configuration is registered through the following steps:</p><ol><li>Create a configuration class annotated with <code>@AutoConfiguration</code> (Spring Boot 3+) or <code>@Configuration</code>.</li><li>Add conditional annotations like <code>@ConditionalOnMissingBean</code> to avoid overriding user-defined beans.</li><li>Register the class in <code>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code> (Spring Boot 3+) or <code>META-INF/spring.factories</code> (Spring Boot 2.x).</li></ol><p>This allows your auto-configuration to be discovered and applied automatically when your library is added to another project's classpath.</p>
      </>
    ),
  },
  {
    id: 23037,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What do you mean by Swagger?",
    answer: (
      <>
        <p><strong>Swagger</strong> (now part of the OpenAPI specification) is a framework for documenting RESTful APIs. In Spring Boot, the <strong>SpringDoc OpenAPI</strong> or <strong>Springfox</strong> library integrates Swagger UI automatically:</p><ul><li>Scans @RestController classes and their mapping annotations at startup.</li><li>Generates an interactive API documentation UI at <code>/swagger-ui.html</code>.</li><li>Exposes the raw OpenAPI spec in JSON/YAML at <code>/v3/api-docs</code>.</li></ul><p>Developers can try API endpoints directly from the browser. Annotations like <code>@Operation</code>, <code>@ApiResponse</code>, and <code>@Schema</code> enrich the generated documentation.</p>
      </>
    ),
  },
  {
    id: 23038,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "What is Spring Batch? How to implement it using Spring Boot?",
    answer: (
      <>
        <p><strong>Spring Batch</strong> is a framework for processing large volumes of data in batch jobs with features like restart/retry, chunk-oriented processing, and parallel execution. Core components:</p><ul><li><strong>Job:</strong> Top-level batch process consisting of Steps.</li><li><strong>Step:</strong> A phase in a Job containing an ItemReader, ItemProcessor, and ItemWriter.</li><li><strong>ItemReader:</strong> Reads data (CSV, database, API).</li><li><strong>ItemProcessor:</strong> Transforms/validates data.</li><li><strong>ItemWriter:</strong> Writes processed data to the target store.</li></ul><p>In Spring Boot, add <code>spring-boot-starter-batch</code> and configure Job beans. Spring Boot auto-configures the JobRepository and TransactionManager.</p>
      </>
    ),
  },
  {
    id: 23039,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is a FreeMarker Template?",
    answer: (
      <>
        <p><strong>FreeMarker</strong> is a server-side Java template engine supported by Spring Boot for generating HTML, XML, or any text-based output. Spring Boot auto-configures FreeMarker when <code>spring-boot-starter-freemarker</code> is added:</p><ul><li>Templates are stored in <code>src/main/resources/templates/</code> with <code>.ftlh</code> extension.</li><li>Controllers return template names and model data.</li><li>FreeMarker merges the model with the template to generate the final HTML response.</li></ul><p>Alternative template engines supported by Spring Boot: Thymeleaf (default), Mustache, and Groovy templates.</p>
      </>
    ),
  },
  {
    id: 23040,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "What do you mean by AOP? How to use it with Spring Boot?",
    answer: (
      <>
        <p><strong>AOP</strong> (Aspect-Oriented Programming) separates cross-cutting concerns (logging, security, transactions) from business logic without modifying the actual code. Key AOP concepts:</p><ul><li><strong>Aspect:</strong> Module encapsulating cross-cutting concerns.</li><li><strong>Join Point:</strong> A point in execution (method call) where advice is applied.</li><li><strong>Advice:</strong> Action taken — @Before, @After, @Around, @AfterReturning, @AfterThrowing.</li><li><strong>Pointcut:</strong> Expression selecting which join points to intercept.</li></ul><p>In Spring Boot, add <code>spring-boot-starter-aop</code> and use <code>@Aspect</code> + <code>@Component</code> annotations. Spring uses CGLIB/JDK proxies to weave aspects at runtime.</p>
      </>
    ),
  },
  {
    id: 23041,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is an Apache Kafka?",
    answer: (
      <>
        <p><strong>Apache Kafka</strong> is a distributed event streaming platform designed for high-throughput, fault-tolerant, real-time data pipelines and event-driven applications. Core concepts:</p><ul><li><strong>Producer:</strong> Publishes messages to Kafka topics.</li><li><strong>Consumer:</strong> Subscribes to topics and processes messages.</li><li><strong>Topic:</strong> A named channel for categorizing messages.</li><li><strong>Partition:</strong> Topics are divided into partitions for parallelism.</li><li><strong>Broker:</strong> Kafka server storing and serving messages.</li></ul><p>In Spring Boot, use <code>spring-boot-starter</code> with Spring Kafka (<code>spring-kafka</code>). Use <code>@KafkaListener</code> to consume messages and <code>KafkaTemplate</code> to produce them.</p>
      </>
    ),
  },
  {
    id: 23042,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What are the advantages & disadvantages of Spring Boot?",
    answer: (
      <>
        <p><strong>Advantages:</strong></p><ul><li>Rapid application development with minimal configuration.</li><li>Embedded servers eliminate external server management.</li><li>Production-ready with Actuator monitoring endpoints.</li><li>Excellent ecosystem integration (Spring Data, Security, Cloud, Batch).</li><li>Opinionated defaults reduce decision fatigue.</li></ul><p><strong>Disadvantages:</strong></p><ul><li>Large JAR size due to bundled dependencies.</li><li>Auto-configuration can be magical and hard to debug when things go wrong.</li><li>Not always suitable for very lightweight microservices (consider Micronaut/Quarkus for startup-time-critical apps).</li><li>Learning curve for understanding auto-configuration internals.</li></ul>
      </>
    ),
  },
  {
    id: 23043,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is the difference between a WAR file & an embedded container?",
    answer: (
      <>
        <ul><li><strong>WAR (Web Application Archive):</strong> Traditional packaging format for Java web applications deployed to an external application server (Tomcat, JBoss, WebLogic). The server manages the servlet container. Requires server to be separately installed and managed.</li><li><strong>Embedded Container:</strong> Spring Boot packages the servlet container (Tomcat/Jetty/Undertow) inside the executable JAR. The application is self-contained — run with <code>java -jar app.jar</code> with no external server needed. Ideal for microservices and cloud deployments.</li></ul><p>Spring Boot supports both modes — package as WAR for legacy server deployments or as executable JAR for modern cloud-native deployments.</p>
      </>
    ),
  },
  {
    id: 23044,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "Name a few common Spring Boot Start POMS.",
    answer: (
      <>
        <p>Common Spring Boot Starter POMs:</p><ul><li><strong>spring-boot-starter-web:</strong> Spring MVC, Jackson, embedded Tomcat.</li><li><strong>spring-boot-starter-data-jpa:</strong> Hibernate, Spring Data JPA.</li><li><strong>spring-boot-starter-security:</strong> Spring Security.</li><li><strong>spring-boot-starter-test:</strong> JUnit 5, Mockito, AssertJ, Spring Test.</li><li><strong>spring-boot-starter-actuator:</strong> Production monitoring endpoints.</li><li><strong>spring-boot-starter-thymeleaf:</strong> Thymeleaf template engine.</li><li><strong>spring-boot-starter-cache:</strong> Spring caching abstraction.</li><li><strong>spring-boot-starter-validation:</strong> Bean Validation (Hibernate Validator).</li><li><strong>spring-boot-starter-mail:</strong> JavaMail for email sending.</li></ul>
      </>
    ),
  },
  {
    id: 23045,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "Is it possible to change the port of an embedded Tomcat server in Spring boot?",
    answer: (
      <>
        <p>Yes, the port can be changed in multiple ways:</p><ul><li><strong>application.properties:</strong> <code>server.port=9090</code></li><li><strong>application.yml:</strong> <code>server: port: 9090</code></li><li><strong>Command-line argument:</strong> <code>java -jar app.jar --server.port=9090</code></li><li><strong>Environment variable:</strong> <code>SERVER_PORT=9090</code></li><li><strong>Programmatically:</strong> Implement <code>WebServerFactoryCustomizer</code> and set <code>factory.setPort(9090)</code>.</li><li><strong>Random port:</strong> Set <code>server.port=0</code> to use a random available port (useful for testing).</li></ul>
      </>
    ),
  },
  {
    id: 23046,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "What do you understand by an Advice in Spring?",
    answer: (
      <>
        <p>In Spring AOP, an <strong>Advice</strong> is the action taken by an aspect at a specific join point. Types of advice:</p><ul><li><strong>@Before:</strong> Executes before the matched join point method. Cannot prevent method execution (unless throws exception).</li><li><strong>@After:</strong> Executes after the method completes (regardless of outcome — success or exception).</li><li><strong>@AfterReturning:</strong> Executes only after successful method completion. Can access the return value.</li><li><strong>@AfterThrowing:</strong> Executes only when the method throws an exception. Can access the exception object.</li><li><strong>@Around:</strong> Most powerful — wraps the entire method, controls whether it executes (via <code>ProceedingJoinPoint.proceed()</code>), and can modify inputs/outputs.</li></ul>
      </>
    ),
  },
  {
    id: 23047,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "What is Proxy in the Spring Framework?",
    answer: (
      <>
        <p>Spring uses <strong>proxies</strong> to implement AOP, transactions, and security — adding behavior to beans without modifying their code. Spring creates proxy objects that wrap the actual beans:</p><ul><li><strong>JDK Dynamic Proxy:</strong> Used when the bean implements at least one interface. Creates a proxy implementing the same interface(s).</li><li><strong>CGLIB Proxy:</strong> Used when the bean doesn't implement interfaces. Creates a subclass of the bean class at runtime.</li></ul><p>Important implication: <code>@Transactional</code> only works on externally called methods (through the proxy). Self-invocation (calling a method on <code>this</code> within the same class) bypasses the proxy and loses transactional behavior.</p>
      </>
    ),
  },
  {
    id: 23048,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "Define the term 'Opinionated' in Spring Boot?",
    answer: (
      <>
        <p>Spring Boot being <strong>'opinionated'</strong> means it provides pre-configured, sensible defaults for common use cases, making technology and configuration decisions on your behalf:</p><ul><li>Default embedded server: Tomcat.</li><li>Default JSON serializer: Jackson.</li><li>Default logging: Logback via SLF4J.</li><li>Default database connection pool: HikariCP.</li><li>Default JPA provider: Hibernate.</li></ul><p>These defaults follow industry best practices and work for most scenarios. However, Spring Boot remains highly flexible — every opinionated default can be overridden by defining your own beans or changing properties. This balance makes it fast to start but never restrictive.</p>
      </>
    ),
  },
  {
    id: 23049,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "Why is a String immutable in Java?",
    answer: (
      <>
        <p><strong>String immutability</strong> in Java is by design for several important reasons:</p><ul><li><strong>String Pool:</strong> JVM maintains a pool of string literals. Immutability allows safe sharing of string instances across the application without defensive copying.</li><li><strong>Security:</strong> Strings are used for sensitive data (database URLs, passwords, class names). Immutability prevents unexpected modifications after validation.</li><li><strong>Thread Safety:</strong> Immutable strings are inherently thread-safe — multiple threads can share the same instance without synchronization.</li><li><strong>Hash Code Caching:</strong> String caches its hash code, enabling efficient use as HashMap keys.</li></ul><p>For mutable string operations, use <code>StringBuilder</code> (single-threaded) or <code>StringBuffer</code> (thread-safe).</p>
      </>
    ),
  },
  {
    id: 23050,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What are Spring Beans?",
    answer: (
      <>
        <p><strong>Spring Beans</strong> are Java objects instantiated, assembled, and managed by the Spring IoC (Inversion of Control) container. Beans are the backbone of a Spring application. A bean is defined by:</p><ul><li>Its class definition.</li><li>Configuration metadata (how it is created, its dependencies, lifecycle callbacks).</li></ul><p>Beans can be defined via <code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, <code>@Controller</code> annotations (detected by @ComponentScan) or <code>@Bean</code> methods in <code>@Configuration</code> classes. The container manages their full lifecycle from creation to destruction, injecting dependencies automatically.</p>
      </>
    ),
  },
  {
    id: 23051,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "Explain the difference between Spring Boot's @Component, @Service, and @Repository annotations.",
    answer: (
      <>
        <p>All three are specializations of <code>@Component</code> and trigger component scanning:</p><ul><li><strong>@Component:</strong> Generic stereotype for any Spring-managed component. Use when the class doesn't clearly fit a specific layer (e.g., utility classes, helpers).</li><li><strong>@Service:</strong> Marks a service-layer class containing business logic. No added technical behavior — purely semantic, aiding readability and potential tooling support.</li><li><strong>@Repository:</strong> Marks a persistence-layer class (DAO). Adds exception translation — database-specific exceptions are wrapped in Spring's <code>DataAccessException</code> hierarchy, providing a consistent exception model regardless of the underlying data store.</li></ul>
      </>
    ),
  },
  {
    id: 23052,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What is the purpose of Spring Boot Starters?",
    answer: (
      <>
        <p>Spring Boot Starters solve the 'dependency management nightmare' problem by bundling all necessary dependencies for a specific feature into a single dependency declaration. Benefits:</p><ul><li><strong>Simplified dependency management:</strong> Add one starter instead of multiple individual libraries.</li><li><strong>Compatible version management:</strong> All bundled dependencies are tested together at compatible versions, eliminating version conflict issues.</li><li><strong>Auto-configuration triggered:</strong> Adding a starter on the classpath triggers relevant auto-configuration classes automatically.</li><li><strong>Convention over configuration:</strong> Starters embody Spring's 'opinionated' approach, providing working defaults immediately.</li></ul>
      </>
    ),
  },
  {
    id: 23053,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "How can you customize the behavior of Spring Boot's Auto-Configuration?",
    answer: (
      <>
        <p>Auto-configuration can be customized in several ways:</p><ul><li><strong>Define your own beans:</strong> Auto-configuration uses @ConditionalOnMissingBean — defining your own DataSource bean prevents Spring Boot from creating its default DataSource.</li><li><strong>Exclude auto-configurations:</strong> <code>@SpringBootApplication(exclude=DataSourceAutoConfiguration.class)</code> or <code>spring.autoconfigure.exclude</code> property.</li><li><strong>Override properties:</strong> Change auto-configured behavior via application.properties (e.g., <code>spring.datasource.url</code>).</li><li><strong>@ConditionalOnProperty:</strong> Create beans only when specific properties are set.</li><li><strong>Custom auto-configuration class:</strong> Register your own configuration with conditional annotations.</li></ul>
      </>
    ),
  },
  {
    id: 23054,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is the concept of Spring Boot Auto-Configuration?",
    answer: (
      <>
        <p>Spring Boot Auto-Configuration automatically configures the Spring application based on the classpath dependencies, defined beans, and properties. It works by:</p><ul><li>Scanning auto-configuration classes registered in <code>META-INF/spring/AutoConfiguration.imports</code>.</li><li>Applying <code>@Conditional*</code> annotations to configure beans only when conditions are met.</li><li>Backing off when the developer defines their own beans (using @ConditionalOnMissingBean).</li></ul><p>Example: When <code>spring-boot-starter-web</code> is added, Spring Boot auto-configures DispatcherServlet, Jackson ObjectMapper, ViewResolvers, and the embedded Tomcat server — all without any manual configuration.</p>
      </>
    ),
  },
  {
    id: 23055,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How does Spring Boot differ from Spring Framework?",
    answer: (
      <>
        <p>Key differences:</p><ul><li><strong>Configuration:</strong> Spring requires extensive XML or Java config; Spring Boot uses auto-configuration with sensible defaults.</li><li><strong>Server deployment:</strong> Spring apps need external servlet container; Spring Boot embeds Tomcat/Jetty in the JAR.</li><li><strong>Dependency management:</strong> Spring needs manual dependency version management; Spring Boot provides BOM (Bill of Materials) managing compatible versions via parent POM.</li><li><strong>Getting started:</strong> Spring requires significant setup; Spring Boot allows starting in minutes with start.spring.io.</li><li><strong>Production features:</strong> Spring requires additional setup; Spring Boot Actuator provides built-in monitoring.</li></ul>
      </>
    ),
  },
  {
    id: 23056,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is a Spring Boot dependency management?",
    answer: (
      <>
        <p>Spring Boot dependency management uses a <strong>Bill of Materials (BOM)</strong> via the <code>spring-boot-starter-parent</code> or <code>spring-boot-dependencies</code> POM. Benefits:</p><ul><li>Pre-defined, tested, compatible versions for hundreds of dependencies (Spring libraries, Jackson, Hibernate, SLF4J, etc.).</li><li>No need to specify version numbers for managed dependencies — they inherit from the BOM.</li><li>Version conflicts are minimized since all dependencies are tested together.</li></ul><p>To use: Set parent POM as <code>spring-boot-starter-parent</code> in Maven, or import <code>spring-boot-dependencies</code> BOM in the dependencyManagement section for Gradle/Maven.</p>
      </>
    ),
  },
  {
    id: 23057,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What is the purpose of Spring Boot DevTools?",
    answer: (
      <>
        <p><strong>Spring Boot DevTools</strong> (<code>spring-boot-devtools</code>) is a developer productivity module providing:</p><ul><li><strong>Automatic restart:</strong> Detects classpath changes and restarts the application context automatically (typically under 1 second — much faster than full restart).</li><li><strong>LiveReload:</strong> Triggers automatic browser refresh when templates or static resources change.</li><li><strong>Disabled caching:</strong> Disables template and static resource caching in development to show changes immediately.</li><li><strong>Remote DevTools:</strong> Supports remote application restarts over a secure tunnel.</li></ul><p>DevTools is automatically disabled in production (detects that application runs as a JAR or in a specific ClassLoader context).</p>
      </>
    ),
  },
  {
    id: 23058,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "Is it possible to create a non-web application in Spring Boot?",
    answer: (
      <>
        <p>Yes. Spring Boot supports non-web (command-line, batch, or service) applications. To create one:</p><ul><li>Exclude <code>spring-boot-starter-web</code> — don't include any web starter in dependencies.</li><li>Implement <code>CommandLineRunner</code> or <code>ApplicationRunner</code> interface in a @Component to execute logic after context startup.</li><li>Or extend <code>SpringApplication</code> with <code>setWebApplicationType(WebApplicationType.NONE)</code>.</li></ul><p>This is useful for scheduled jobs, data processing pipelines (with Spring Batch), CLI tools, and daemon services that don't require an HTTP server.</p>
      </>
    ),
  },
  {
    id: 23059,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "Why choose Spring Boot over Spring?",
    answer: (
      <>
        <p>Spring Boot is preferred over plain Spring for most modern applications because:</p><ul><li><strong>Zero XML configuration:</strong> Auto-configuration replaces verbose XML setup.</li><li><strong>Faster development:</strong> Start.spring.io generates a working project in seconds.</li><li><strong>Self-contained deployment:</strong> Embedded server makes deployment as simple as <code>java -jar</code>.</li><li><strong>Production-ready:</strong> Actuator provides health checks, metrics, and monitoring out of the box.</li><li><strong>Microservices alignment:</strong> Lightweight, independently deployable JARs align perfectly with microservice architectures.</li><li><strong>Community & ecosystem:</strong> Active community with rich ecosystem (Spring Cloud, Spring Data, Spring Security).</li></ul>
      </>
    ),
  },
  {
    id: 23060,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is the purpose of using @ComponentScan in the class files?",
    answer: (
      <>
        <p><code>@ComponentScan</code> instructs Spring to scan specified packages and their sub-packages for Spring-managed components (<code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, <code>@Controller</code>, <code>@Configuration</code>), registering them as beans in the application context. Customization options:</p><ul><li><code>@ComponentScan(basePackages='com.example.services')</code> — scan specific packages.</li><li><code>includeFilters</code> / <code>excludeFilters</code> — fine-grained include/exclude rules.</li></ul><p>When using <code>@SpringBootApplication</code>, @ComponentScan is automatically included, scanning the package of the main class and all sub-packages by default.</p>
      </>
    ),
  },
  {
    id: 23061,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What is Spring Initializer?",
    answer: (
      <>
        <p><strong>Spring Initializr</strong> (start.spring.io) is a web-based project bootstrapping tool that generates a Spring Boot project skeleton with your chosen configuration:</p><ul><li>Build tool: Maven or Gradle.</li><li>Language: Java, Kotlin, or Groovy.</li><li>Spring Boot version.</li><li>Project metadata (group, artifact, package name).</li><li>Dependencies: Select from hundreds of starters (Web, JPA, Security, etc.).</li></ul><p>It generates a downloadable ZIP containing the complete project structure, POM/build file, main class, and test class — ready to import into any IDE. Also accessible via the Spring Boot CLI: <code>spring init --dependencies=web,jpa myproject</code>.</p>
      </>
    ),
  },
  {
    id: 23062,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "Why Spring Data REST is not recommended in real-world applications?",
    answer: (
      <>
        <p><strong>Spring Data REST</strong> automatically exposes Spring Data JPA repositories as REST endpoints. It's convenient for prototyping but has serious limitations in production:</p><ul><li><strong>Exposes domain model directly:</strong> Reveals internal entity structure without a DTO layer, violating separation of concerns and leaking sensitive data.</li><li><strong>Limited control:</strong> Difficult to add custom business logic, validation, or transformation between HTTP and database layers.</li><li><strong>HATEOAS complexity:</strong> Returns hypermedia responses that most clients don't need and don't understand.</li><li><strong>Security challenges:</strong> Difficult to implement fine-grained authorization per entity operation.</li><li><strong>Tight coupling:</strong> Changes to the domain model directly impact the API contract.</li></ul>
      </>
    ),
  },
  {
    id: 23063,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "Explain the difference between the SpringApplication.run() and SpringApplication.run(Class, String) methods.",
    answer: (
      <>
        <p>Both start the Spring Boot application, but with subtle differences:</p><ul><li><strong>SpringApplication.run(MyApp.class, args):</strong> Static convenience method. Creates a new SpringApplication instance with the provided primary source class and starts the application. This is the standard way used in the main method.</li><li><strong>new SpringApplication(MyApp.class).run(args):</strong> Creates a SpringApplication instance first, allowing customization before running — e.g., setting web application type, adding additional sources, customizing banner, setting listeners — then calling run(args).</li></ul><p>The static variant is preferred for standard applications; the instance variant is used when pre-run customization is needed.</p>
      </>
    ),
  },
  {
    id: 23064,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How does Spring Boot simplify the creation of RESTful APIs?",
    answer: (
      <>
        <p>Spring Boot simplifies REST API creation through several mechanisms:</p><ul><li><strong>@RestController:</strong> Combines @Controller + @ResponseBody, automatically serializing return values to JSON.</li><li><strong>@RequestMapping shortcuts:</strong> @GetMapping, @PostMapping, @PutMapping, @DeleteMapping for clean method-level mapping.</li><li><strong>@PathVariable / @RequestParam:</strong> Easy URL path and query parameter binding.</li><li><strong>@RequestBody:</strong> Automatic JSON-to-object deserialization via Jackson.</li><li><strong>ResponseEntity:</strong> Full control over HTTP status codes and response headers.</li><li><strong>Auto-configured Jackson:</strong> JSON serialization works out of the box without any setup.</li><li><strong>Spring Data REST / Spring HATEOAS:</strong> Optional advanced REST capabilities.</li></ul>
      </>
    ),
  },
  {
    id: 23065,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is Spring Boot Actuator, and what is its significance?",
    answer: (
      <>
        <p><strong>Spring Boot Actuator</strong> provides production-ready operational features. Key endpoints:</p><ul><li><strong>/actuator/health:</strong> Application health and component status (DB, cache, message broker).</li><li><strong>/actuator/metrics:</strong> JVM memory, GC, HTTP request rates, custom metrics.</li><li><strong>/actuator/env:</strong> All configuration properties and their values.</li><li><strong>/actuator/loggers:</strong> View/change log levels dynamically at runtime.</li><li><strong>/actuator/info:</strong> Custom application information.</li><li><strong>/actuator/threaddump:</strong> Current thread state snapshot.</li></ul><p>Actuator integrates with Micrometer for exporting metrics to Prometheus, Datadog, InfluxDB, and other monitoring systems — essential for production observability.</p>
      </>
    ),
  },
  {
    id: 23066,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How does Spring Boot support externalized configuration?",
    answer: (
      <>
        <p>Spring Boot's externalized configuration allows the same application code to run differently in different environments through layered property sources. Key mechanisms:</p><ul><li><strong>application.properties / application.yml:</strong> Base configuration file.</li><li><strong>Profile-specific files:</strong> <code>application-dev.properties</code> overrides base for dev profile.</li><li><strong>Environment variables:</strong> OS environment variables map to Spring properties (with name normalization).</li><li><strong>@ConfigurationProperties:</strong> Type-safe binding of property groups to Java POJOs with validation support.</li><li><strong>Spring Cloud Config Server:</strong> Centralized configuration for distributed microservices.</li></ul>
      </>
    ),
  },
  {
    id: 23067,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What is the purpose of the Spring Boot Starter modules?",
    answer: (
      <>
        <p>Spring Boot Starter modules serve as one-stop dependency aggregators that:</p><ul><li>Group all required libraries for a feature (e.g., <code>spring-boot-starter-web</code> includes Spring MVC, Jackson, Tomcat, Spring Boot auto-configuration).</li><li>Ensure all included libraries have compatible, tested versions using the Spring Boot BOM.</li><li>Trigger auto-configuration when placed on the classpath.</li><li>Reduce <code>pom.xml</code>/<code>build.gradle</code> verbosity from dozens of individual dependencies to one starter.</li></ul><p>Custom starters can be created for internal libraries, following the same conventions.</p>
      </>
    ),
  },
  {
    id: 23068,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "Explain the concept of 'auto-configuration' in Spring Boot.",
    answer: (
      <>
        <p>Auto-configuration is triggered by <code>@EnableAutoConfiguration</code> (part of @SpringBootApplication). The process:</p><ol><li>Spring Boot scans the classpath for libraries and frameworks.</li><li>Loads auto-configuration candidate classes from <code>META-INF/spring/AutoConfiguration.imports</code>.</li><li>Each auto-configuration class is annotated with conditions: <code>@ConditionalOnClass</code> (library must be present), <code>@ConditionalOnMissingBean</code> (user hasn't defined their own), <code>@ConditionalOnProperty</code> (specific property set).</li><li>Only matching configurations are applied, creating the appropriate beans.</li></ol><p>Result: A working application context with zero manual configuration for standard setups.</p>
      </>
    ),
  },
  {
    id: 23069,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is the use of @Transactional annotation in Spring Boot?",
    answer: (
      <>
        <p><code>@Transactional</code> is the cornerstone annotation for database transaction management in Spring Boot. When applied to a method or class:</p><ul><li>Spring creates a transaction before method execution.</li><li>Commits the transaction upon successful completion.</li><li>Rolls back automatically on <code>RuntimeException</code> or <code>Error</code>.</li></ul><p>Key configuration attributes:</p><ul><li><code>propagation</code>: REQUIRED (join existing), REQUIRES_NEW (always new), SUPPORTS (optional).</li><li><code>isolation</code>: READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE.</li><li><code>readOnly=true</code>: Optimization hint for read-only operations.</li><li><code>rollbackFor</code>: Trigger rollback for checked exceptions.</li></ul><p><strong>Important:</strong> Only works on Spring beans via external proxy calls — not self-invocation.</p>
      </>
    ),
  },
  {
    id: 23070,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How can you resolve whitelabel error page in spring boot application?",
    answer: (
      <>
        <p>Spring Boot's 'Whitelabel Error Page' is the default error page shown when no custom error handling is configured. Solutions:</p><ul><li><strong>Custom @ControllerAdvice:</strong> Create a class with <code>@ControllerAdvice</code> and <code>@ExceptionHandler</code> methods for custom error responses.</li><li><strong>Custom error controller:</strong> Implement <code>ErrorController</code> and map <code>/error</code> path.</li><li><strong>Custom error pages:</strong> Create <code>src/main/resources/templates/error/</code> with <code>404.html</code>, <code>500.html</code>.</li><li><strong>Disable whitelabel:</strong> <code>server.error.whitelabel.enabled=false</code> in properties.</li><li><strong>Custom ErrorAttributes:</strong> Override <code>DefaultErrorAttributes</code> to customize error response JSON structure.</li></ul>
      </>
    ),
  },
  {
    id: 23071,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is bootstrapping in spring boot?",
    answer: (
      <>
        <p><strong>Bootstrapping</strong> in Spring Boot refers to the application startup process managed by <code>SpringApplication.run()</code>:</p><ol><li><strong>Create ApplicationContext:</strong> Appropriate context type (AnnotationConfigServletWebServerApplicationContext for web, AnnotationConfigApplicationContext for non-web).</li><li><strong>Apply auto-configuration:</strong> Scans classpath and configures beans.</li><li><strong>Initialize ApplicationListeners:</strong> ApplicationStartedEvent, ApplicationEnvironmentPreparedEvent lifecycle events fired.</li><li><strong>Refresh context:</strong> All beans instantiated, dependencies injected.</li><li><strong>Start embedded server:</strong> Tomcat/Jetty/Undertow starts listening on the configured port.</li><li><strong>ApplicationReadyEvent:</strong> Fired when application is ready to serve requests.</li></ol>
      </>
    ),
  },
  {
    id: 23072,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "Which is the latest version of the Spring Boot?",
    answer: (
      <>
        <p>As of 2024-2025, the latest stable Spring Boot version is <strong>Spring Boot 3.x</strong> (specifically 3.2.x and 3.3.x releases). Key changes in Spring Boot 3:</p><ul><li>Requires Java 17 as the minimum baseline.</li><li>Full Jakarta EE 9+ migration (javax.* packages renamed to jakarta.*).</li><li>Native image support via GraalVM for near-instant startup times.</li><li>Improved observability with Micrometer Tracing.</li><li>Virtual threads support (Java 21 Project Loom).</li></ul><p>Always check the official <a href='https://spring.io/projects/spring-boot'>spring.io</a> website for the current latest release.</p>
      </>
    ),
  },
  {
    id: 23073,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How to check the environment properties in a Spring boot application?",
    answer: (
      <>
        <p>Environment properties can be inspected in multiple ways:</p><ul><li><strong>Actuator /env endpoint:</strong> <code>GET /actuator/env</code> lists all property sources and their values (requires actuator dependency and endpoint exposure).</li><li><strong>Inject Environment:</strong> <code>@Autowired Environment env; env.getProperty('server.port')</code></li><li><strong>@Value injection:</strong> <code>@Value('${"{"}server.port{"}"}') int port;</code></li><li><strong>@ConfigurationProperties:</strong> Bind entire property groups to type-safe Java POJOs.</li><li><strong>Logging on startup:</strong> Set <code>logging.level.org.springframework.boot.context.config=DEBUG</code> to log all loaded property sources during startup.</li></ul>
      </>
    ),
  },
  {
    id: 23074,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is an IOC container?",
    answer: (
      <>
        <p>The <strong>IoC (Inversion of Control) container</strong> is the core of the Spring Framework, responsible for instantiating, configuring, assembling, and managing the lifecycle of application objects (beans). 'Inversion of Control' means the framework controls object creation instead of the application code. Spring provides two IoC container implementations:</p><ul><li><strong>BeanFactory:</strong> Basic, lazy-loading container. Rarely used directly.</li><li><strong>ApplicationContext:</strong> Advanced container extending BeanFactory with enterprise features: internationalization, event publishing, AOP integration, and eager loading. The standard container in Spring Boot.</li></ul>
      </>
    ),
  },
  {
    id: 23075,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What are the basic annotations that Spring Boot offers?",
    answer: (
      <>
        <p>Essential Spring Boot annotations:</p><ul><li><strong>@SpringBootApplication:</strong> Main application entry point (combines @Configuration + @EnableAutoConfiguration + @ComponentScan).</li><li><strong>@RestController:</strong> REST API controller with automatic JSON serialization.</li><li><strong>@Service / @Repository / @Component:</strong> Bean stereotypes for layered architecture.</li><li><strong>@Autowired:</strong> Dependency injection.</li><li><strong>@Value:</strong> Property value injection.</li><li><strong>@ConfigurationProperties:</strong> Type-safe property binding.</li><li><strong>@Entity / @Table:</strong> JPA entity mapping.</li><li><strong>@GetMapping / @PostMapping / @PutMapping / @DeleteMapping:</strong> HTTP method handlers.</li><li><strong>@Transactional:</strong> Transaction management.</li></ul>
      </>
    ),
  },
  {
    id: 23076,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is the main difference between @RestController and @Controller in Spring Boot?",
    answer: (
      <>
        <ul><li><strong>@Controller:</strong> Traditional Spring MVC controller. Methods typically return a view name (String) that is resolved to an HTML template by a ViewResolver. Used for server-side rendering with Thymeleaf/FreeMarker. To return JSON, each method needs <code>@ResponseBody</code> annotation.</li><li><strong>@RestController:</strong> Composed annotation = <code>@Controller + @ResponseBody</code>. All methods automatically serialize return values to JSON/XML and write to the HTTP response body. Used for building RESTful APIs. No view resolution — pure data endpoints.</li></ul><p>Use @RestController for REST APIs, @Controller for MVC web applications rendering server-side templates.</p>
      </>
    ),
  },
  {
    id: 23077,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How does Spring Boot simplify the development of microservices?",
    answer: (
      <>
        <p>Spring Boot is the industry standard for microservice development due to:</p><ul><li><strong>Standalone JARs:</strong> Each microservice is an independently deployable executable JAR with embedded server.</li><li><strong>Fast startup:</strong> Spring Boot apps start in seconds, supporting rapid scaling and container orchestration.</li><li><strong>Spring Cloud integration:</strong> Service discovery (Eureka), API Gateway (Spring Cloud Gateway), config management (Config Server), circuit breakers (Resilience4j).</li><li><strong>Actuator:</strong> Health checks for Kubernetes liveness/readiness probes.</li><li><strong>Spring Data:</strong> Polyglot persistence — different microservices use different databases easily.</li><li><strong>Docker/Kubernetes native:</strong> Buildpack support for container image creation.</li></ul>
      </>
    ),
  },
  {
    id: 23078,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "What is the purpose of Spring Cloud in microservices architecture?",
    answer: (
      <>
        <p><strong>Spring Cloud</strong> provides tools for building distributed systems and microservices architecture on top of Spring Boot:</p><ul><li><strong>Spring Cloud Config:</strong> Centralized external configuration management with Git-backed config repository.</li><li><strong>Eureka (Spring Cloud Netflix):</strong> Service registry and discovery — services register themselves and find each other dynamically.</li><li><strong>Spring Cloud Gateway:</strong> API Gateway with routing, filtering, rate limiting, and load balancing.</li><li><strong>Resilience4j:</strong> Circuit breaker, retry, rate limiter, bulkhead patterns for fault tolerance.</li><li><strong>Spring Cloud Sleuth/Micrometer Tracing:</strong> Distributed tracing across microservices.</li><li><strong>Spring Cloud Bus:</strong> Propagate configuration changes across all service instances via message broker.</li></ul>
      </>
    ),
  },
  {
    id: 23079,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "How can you achieve communication between microservices in Spring Boot?",
    answer: (
      <>
        <p>Microservice communication patterns in Spring Boot:</p><ul><li><strong>Synchronous (REST):</strong> Use <code>RestTemplate</code> (legacy) or <code>WebClient</code> (reactive, preferred) for HTTP REST calls. Spring Cloud LoadBalancer enables client-side load balancing.</li><li><strong>Synchronous (Feign Client):</strong> Declarative HTTP client — define interface with @FeignClient annotation; Spring generates the implementation automatically.</li><li><strong>Asynchronous (Message Broker):</strong> Use Apache Kafka (Spring Kafka) or RabbitMQ (Spring AMQP) for event-driven, decoupled communication.</li><li><strong>gRPC:</strong> High-performance binary protocol for inter-service communication.</li></ul><p>Prefer asynchronous messaging for loose coupling and resilience.</p>
      </>
    ),
  },
  {
    id: 23080,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "What is Eureka in Spring Cloud?",
    answer: (
      <>
        <p><strong>Eureka</strong> is Netflix's service registry and discovery server, integrated into Spring Cloud. It enables microservices to find and communicate with each other without hardcoded addresses:</p><ul><li><strong>Eureka Server:</strong> Central registry where services register. Annotate with <code>@EnableEurekaServer</code>.</li><li><strong>Eureka Client:</strong> Each microservice registers itself with its host, port, and health URL. Annotate with <code>@EnableDiscoveryClient</code>.</li><li><strong>Heartbeat:</strong> Clients send periodic heartbeats; Eureka removes instances that stop sending them.</li><li><strong>Client-side discovery:</strong> Services query Eureka for instances and perform load balancing themselves.</li></ul><p>Alternative: Kubernetes Service Discovery, Consul, or Zookeeper.</p>
      </>
    ),
  },
  {
    id: 23081,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "Explain the concept of a circuit breaker in microservices architecture.",
    answer: (
      <>
        <p>The <strong>Circuit Breaker</strong> pattern prevents cascading failures in distributed systems. Inspired by electrical circuit breakers, it monitors calls to remote services and opens when failures exceed a threshold:</p><ul><li><strong>Closed state:</strong> Normal operation — requests flow through. Failures counted.</li><li><strong>Open state:</strong> After failure threshold exceeded, circuit opens — requests fail fast with fallback response without calling the failing service.</li><li><strong>Half-Open state:</strong> After a timeout, a test request is allowed. If it succeeds, circuit closes; if it fails, stays open.</li></ul><p>In Spring Boot, use <strong>Resilience4j</strong> with <code>@CircuitBreaker</code> annotation and <code>spring-cloud-starter-circuitbreaker-resilience4j</code> dependency. Configure thresholds in application.properties.</p>
      </>
    ),
  },
  {
    id: 23082,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How does Spring Boot support containerization and deployment in microservices?",
    answer: (
      <>
        <p>Spring Boot provides first-class containerization support:</p><ul><li><strong>Buildpacks:</strong> <code>./mvnw spring-boot:build-image</code> creates an optimized OCI container image without writing a Dockerfile. Uses Cloud Native Buildpacks (Paketo).</li><li><strong>Layered JARs:</strong> Spring Boot 2.3+ packages JARs in layers (dependencies, snapshot-dependencies, application) for efficient Docker layer caching.</li><li><strong>GraalVM Native Images:</strong> Compile to native binaries for near-instant startup and minimal memory (Spring Boot 3+).</li><li><strong>Actuator health endpoints:</strong> <code>/actuator/health/liveness</code> and <code>/actuator/health/readiness</code> for Kubernetes probes.</li><li><strong>Graceful shutdown:</strong> <code>server.shutdown=graceful</code> for zero-downtime rolling deployments.</li></ul>
      </>
    ),
  },
  {
    id: 23083,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How can you externalize configuration in Spring Boot?",
    answer: (
      <>
        <p>Externalizing configuration separates code from environment-specific settings. Approaches:</p><ul><li><strong>application.properties/yml:</strong> Base configuration committed to source control, with sensitive values replaced by placeholders.</li><li><strong>Environment variables:</strong> Set per-environment in the deployment platform (Kubernetes ConfigMaps/Secrets, ECS task definitions).</li><li><strong>@ConfigurationProperties:</strong> Type-safe POJO binding with validation: <code>@ConfigurationProperties(prefix='app.database')</code>.</li><li><strong>Spring Cloud Config Server:</strong> Centralized Git-backed configuration repository with live refresh via Spring Cloud Bus.</li><li><strong>Secrets management:</strong> HashiCorp Vault, AWS Parameter Store, or Azure Key Vault integration for sensitive credentials.</li></ul>
      </>
    ),
  },
  {
    id: 23084,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What are microservices in Spring Boot?",
    answer: (
      <>
        <p><strong>Microservices</strong> in the context of Spring Boot are small, independently deployable services, each running in its own process and communicating via HTTP REST or messaging. Each Spring Boot microservice:</p><ul><li>Has a single, well-defined business responsibility (e.g., User Service, Order Service, Payment Service).</li><li>Has its own embedded server and is packaged as a self-contained executable JAR.</li><li>Can be developed, deployed, and scaled independently of other services.</li><li>Manages its own database (database-per-service pattern).</li><li>Exposes REST APIs consumed by other services or frontend applications.</li></ul>
      </>
    ),
  },
  {
    id: 23085,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "Explain what is a Microservices Architecture?",
    answer: (
      <>
        <p><strong>Microservices Architecture</strong> structures an application as a collection of small, independent services that:</p><ul><li>Are organized around business capabilities (User, Orders, Inventory, Payment).</li><li>Are independently deployable, allowing frequent releases of individual services.</li><li>Communicate via lightweight protocols (REST/HTTP, gRPC, message queues).</li><li>Are owned by small, cross-functional teams.</li><li>Use decentralized data management — each service owns its database.</li></ul><p>Benefits: Independent scaling, technology flexibility per service, fault isolation, and continuous deployment. Challenges: Distributed system complexity, network latency, data consistency, and observability requirements.</p>
      </>
    ),
  },
  {
    id: 23086,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What are the features of Spring Cloud?",
    answer: (
      <>
        <p>Spring Cloud features for distributed systems:</p><ul><li><strong>Config Server:</strong> Centralized, version-controlled configuration with live refresh.</li><li><strong>Service Discovery (Eureka/Consul):</strong> Dynamic service registration and lookup.</li><li><strong>API Gateway (Spring Cloud Gateway):</strong> Routing, load balancing, rate limiting, authentication at the edge.</li><li><strong>Circuit Breaker (Resilience4j):</strong> Fault tolerance patterns — circuit breaker, retry, bulkhead.</li><li><strong>Distributed Tracing (Sleuth/Zipkin):</strong> Request tracing across service boundaries.</li><li><strong>Spring Cloud Bus:</strong> Broadcast configuration changes across all instances.</li><li><strong>Spring Cloud OpenFeign:</strong> Declarative REST client with load balancing.</li><li><strong>Spring Cloud Stream:</strong> Event-driven messaging with Kafka/RabbitMQ.</li></ul>
      </>
    ),
  },
  {
    id: 23087,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How to override the default properties of a Spring Boot Project?",
    answer: (
      <>
        <p>Default properties can be overridden through multiple mechanisms in order of precedence:</p><ul><li><strong>Command-line arguments:</strong> <code>java -jar app.jar --server.port=9090</code> — highest precedence.</li><li><strong>Environment variables:</strong> <code>SERVER_PORT=9090</code> — maps to <code>server.port</code>.</li><li><strong>Profile-specific properties:</strong> <code>application-prod.properties</code> overrides <code>application.properties</code> when prod profile is active.</li><li><strong>@TestPropertySource:</strong> For test-specific overrides in integration tests.</li><li><strong>@SpringBootTest(properties='...'):</strong> In-test property override.</li><li><strong>SpringApplication.setDefaultProperties():</strong> Programmatic default override with lowest precedence.</li></ul>
      </>
    ),
  },
  {
    id: 23088,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "How to implement Spring Security in A Spring Boot Application?",
    answer: (
      <>
        <p>Steps to implement Spring Security in Spring Boot:</p><ol><li><strong>Add dependency:</strong> <code>spring-boot-starter-security</code>.</li><li><strong>Define SecurityFilterChain bean:</strong><br/><code>@Bean SecurityFilterChain filterChain(HttpSecurity http)</code> — configure URL authorization rules, login form/API, CSRF, and session management.</li><li><strong>UserDetailsService:</strong> Implement to load users from database. Use <code>JpaUserDetailsService</code> pattern.</li><li><strong>PasswordEncoder bean:</strong> <code>BCryptPasswordEncoder</code> for password hashing.</li><li><strong>Method security:</strong> Enable with <code>@EnableMethodSecurity</code>, then use <code>@PreAuthorize('hasRole(ADMIN)')</code>.</li><li><strong>JWT:</strong> Add JWT filter extending OncePerRequestFilter for stateless REST API security.</li></ol>
      </>
    ),
  },
  {
    id: 23089,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "Which embedded containers does Spring Boot Supports?",
    answer: (
      <>
        <p>Spring Boot supports three embedded servlet containers:</p><ul><li><strong>Apache Tomcat (default):</strong> Included via <code>spring-boot-starter-web</code>. Most widely used, full-featured, excellent compatibility.</li><li><strong>Eclipse Jetty:</strong> Lightweight and highly embeddable. Include by excluding Tomcat and adding <code>spring-boot-starter-jetty</code>. Preferred for WebSocket-heavy applications.</li><li><strong>Undertow:</strong> Non-blocking, high-throughput server by JBoss. Excellent performance with low resource usage. Include via <code>spring-boot-starter-undertow</code>.</li></ul><p>For reactive applications (Spring WebFlux), <strong>Netty</strong> is the default embedded server instead of a servlet container.</p>
      </>
    ),
  },
  {
    id: 23090,
    category: 'Spring Boot',
    difficulty: 'hard',
    question: "Where to use WebMVC Test Annotation?",
    answer: (
      <>
        <p><code>@WebMvcTest</code> is a Spring Boot test annotation for slice testing of the MVC layer only (without loading the full application context):</p><ul><li>Loads only @Controller, @ControllerAdvice, @JsonComponent, Filter, WebMvcConfigurer, and HandlerMethodArgumentResolver beans.</li><li>Does NOT load @Service, @Repository, or @Component beans — mock these with @MockBean.</li><li>Auto-configures MockMvc for testing HTTP requests without starting a real server.</li></ul><p>Use when: testing controller request/response mappings, validation, error handling, and JSON serialization independently from the service layer. For full integration tests, use @SpringBootTest instead.</p>
      </>
    ),
  },
  {
    id: 23091,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How can you configure Spring Boot Application Logging?",
    answer: (
      <>
        <p>Spring Boot uses <strong>SLF4J + Logback</strong> by default. Configuration options:</p><ul><li><strong>application.properties:</strong> <code>logging.level.root=INFO</code>, <code>logging.level.com.example=DEBUG</code>, <code>logging.file.name=app.log</code>.</li><li><strong>logback-spring.xml:</strong> Full Logback XML configuration for rolling file appenders, log patterns, and multiple appenders. Use <code>logback-spring.xml</code> (not logback.xml) to support Spring profile-conditional logging.</li><li><strong>Switch to Log4j2:</strong> Exclude Logback and add <code>spring-boot-starter-log4j2</code>.</li><li><strong>In code:</strong> Use <code>@Slf4j</code> (Lombok) or <code>LoggerFactory.getLogger(MyClass.class)</code>.</li></ul>
      </>
    ),
  },
  {
    id: 23092,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "What is the minimum Java programming version needed for Spring Boot?",
    answer: (
      <>
        <p>Minimum Java version requirements by Spring Boot version:</p><ul><li><strong>Spring Boot 3.x:</strong> Requires Java 17 (baseline) or newer (supports Java 21 with virtual threads).</li><li><strong>Spring Boot 2.7.x:</strong> Requires Java 8 or newer.</li><li><strong>Spring Boot 2.6.x and earlier:</strong> Java 8 minimum.</li></ul><p>Spring Boot 3 adopted Java 17 as the minimum to leverage modern language features (records, sealed classes, pattern matching) and align with the Jakarta EE 9+ namespace migration. Java 21 with virtual threads (Project Loom) is supported for improved scalability in Spring Boot 3.2+.</p>
      </>
    ),
  },
  {
    id: 23093,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How can you use thymeleaf?",
    answer: (
      <>
        <p><strong>Thymeleaf</strong> is the default server-side template engine in Spring Boot. Usage:</p><ol><li>Add dependency: <code>spring-boot-starter-thymeleaf</code>.</li><li>Place templates in <code>src/main/resources/templates/</code> with <code>.html</code> extension.</li><li>Return the template name from @Controller method: <code>return 'home'</code> &rarr; resolves to <code>templates/home.html</code>.</li><li>Add data to Model: <code>model.addAttribute('users', userList)</code>.</li><li>Access in template: <code>&lt;div th:each='user : ${"{"}users{"}"}'&gt;&lt;p th:text='${"{"}user.name{"}"}'&gt;&lt;/p&gt;&lt;/div&gt;</code>.</li></ol><p>Thymeleaf is natural HTML — templates render correctly in browsers without a server running.</p>
      </>
    ),
  },
  {
    id: 23094,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How to effectively use Spring Boot for Command-Line Applications?",
    answer: (
      <>
        <p>Spring Boot supports command-line (non-web) applications through two interfaces:</p><ul><li><strong>CommandLineRunner:</strong> Implement <code>run(String... args)</code> — receives raw command-line arguments as String array.</li><li><strong>ApplicationRunner:</strong> Implement <code>run(ApplicationArguments args)</code> — receives parsed arguments with named options (<code>args.getOptionValues('name')</code>).</li></ul><p>Both are called after the application context is fully initialized. Multiple runners can be ordered with <code>@Order</code>. Set <code>spring.main.web-application-type=NONE</code> in properties to prevent starting a web server.</p>
      </>
    ),
  },
  {
    id: 23095,
    category: 'Spring Boot',
    difficulty: 'easy',
    question: "How to Change the Default Port in Spring Boot?",
    answer: (
      <>
        <p>The default port (8080) can be changed through multiple mechanisms:</p><ul><li><strong>application.properties:</strong> <code>server.port=9090</code></li><li><strong>application.yml:</strong> <code>server:\n  port: 9090</code></li><li><strong>Command-line:</strong> <code>java -jar app.jar --server.port=9090</code></li><li><strong>Environment variable:</strong> <code>SERVER_PORT=9090</code></li><li><strong>Random port:</strong> <code>server.port=0</code> — Spring selects a random available port (useful in integration tests, retrieve via <code>@LocalServerPort</code>).</li><li><strong>Programmatic:</strong> <code>WebServerFactoryCustomizer&lt;TomcatServletWebServerFactory&gt;</code> bean.</li></ul>
      </>
    ),
  },
  {
    id: 23096,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "How to handle file uploads in spring boot applications?",
    answer: (
      <>
        <p>File uploads in Spring Boot are handled via <code>MultipartFile</code>:</p><ol><li>Configure multipart in properties: <code>spring.servlet.multipart.max-file-size=10MB</code>, <code>spring.servlet.multipart.max-request-size=10MB</code>.</li><li>Create upload endpoint: <code>@PostMapping('/upload') ResponseEntity upload(@RequestParam MultipartFile file)</code>.</li><li>Process the file: <code>file.getBytes()</code>, <code>file.getInputStream()</code>, or <code>file.transferTo(Path)</code>.</li><li>For multiple files: <code>@RequestParam List&lt;MultipartFile&gt; files</code>.</li></ol><p>For cloud storage, integrate with AWS S3 (Spring Cloud AWS), Azure Blob Storage, or Google Cloud Storage.</p>
      </>
    ),
  },
  {
    id: 23097,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is the use of Spring Boot Embedded Container?",
    answer: (
      <>
        <p>Spring Boot's embedded container (Tomcat/Jetty/Undertow) provides:</p><ul><li><strong>Self-contained deployment:</strong> Application runs as a standalone JAR with <code>java -jar</code> — no external server installation needed.</li><li><strong>Simplified DevOps:</strong> One artifact to deploy, version, and manage. Works seamlessly with Docker containers.</li><li><strong>Environment consistency:</strong> Same server version in development, testing, and production — no 'works on my machine' server version mismatches.</li><li><strong>Programmatic configuration:</strong> Configure SSL, HTTP/2, compression, and session management via <code>ServerProperties</code> or <code>WebServerFactoryCustomizer</code>.</li><li><strong>Microservice alignment:</strong> Each service controls its own server configuration independently.</li></ul>
      </>
    ),
  },
  {
    id: 23098,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is the role of spring security?",
    answer: (
      <>
        <p><strong>Spring Security</strong> is the comprehensive security framework for Spring applications, providing:</p><ul><li><strong>Authentication:</strong> Verifying user identity via form login, HTTP Basic, OAuth2 Resource Server (JWT), LDAP, or custom providers.</li><li><strong>Authorization:</strong> Role and permission-based access control at URL level and method level (<code>@PreAuthorize</code>).</li><li><strong>Protection from common attacks:</strong> CSRF (cross-site request forgery), XSS headers (Content-Security-Policy), session fixation, clickjacking (X-Frame-Options).</li><li><strong>Password management:</strong> BCrypt, PBKDF2, Argon2 password encoding.</li><li><strong>OAuth2 / OpenID Connect:</strong> SSO integration with identity providers (Keycloak, Auth0, Google).</li></ul>
      </>
    ),
  },
  {
    id: 23099,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "What is @SpringBootApplication annotation?",
    answer: (
      <>
        <p><code>@SpringBootApplication</code> is a meta-annotation composed of three annotations:</p><ul><li><strong>@SpringBootConfiguration:</strong> Designates the class as a configuration class (a specialized @Configuration that indicates it's a Spring Boot configuration source).</li><li><strong>@EnableAutoConfiguration:</strong> Enables Spring Boot's auto-configuration mechanism — scans the classpath and automatically configures beans based on what's available.</li><li><strong>@ComponentScan:</strong> Enables component scanning starting from the annotated class's package, detecting all @Component, @Service, @Repository, @Controller annotated classes.</li></ul><p>Always place this annotation on the main class containing the <code>public static void main(String[] args)</code> method that calls <code>SpringApplication.run()</code>.</p>
      </>
    ),
  },
  {
    id: 23100,
    category: 'Spring Boot',
    difficulty: 'medium',
    question: "Explain what is @Autowired annotation?",
    answer: (
      <>
        <p><code>@Autowired</code> is Spring's dependency injection annotation that instructs the IoC container to automatically resolve and inject a matching bean into the annotated field, constructor, or method. Resolution process:</p><ul><li>Container looks for a bean matching the required type.</li><li>If exactly one match found — injects it.</li><li>If multiple matches — uses <code>@Qualifier('beanName')</code> or <code>@Primary</code> to resolve ambiguity.</li><li>If no match and <code>required=true</code> (default) — throws <code>NoSuchBeanDefinitionException</code>.</li></ul><p><strong>Best practice:</strong> Prefer constructor injection over field injection for mandatory dependencies — it enables immutability, clear dependency declaration, and easier unit testing without Spring context.</p>
      </>
    ),
  },
];
