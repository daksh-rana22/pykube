import React from 'react';

export const FULL_STACK_QUESTIONS = [
  {
    id: 7001,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is Full Stack development?",
    answer: (
      <>
        <p><strong>Full Stack development</strong> refers to the development of both frontend (client-side) and backend (server-side) portions of web applications. This includes managing databases, servers, systems engineering, and client-facing interfaces.</p>
      </>
    ),
  },
  {
    id: 7002,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What skills do one need to be a full-stack developer?",
    answer: (
      <>
        <p>Essential skills include:</p><ul><li><strong>Frontend:</strong> HTML5, CSS3, JavaScript/TypeScript, and frameworks like React, Angular, or Vue.</li><li><strong>Backend:</strong> Node.js, Python, Java, PHP, or C# and web frameworks like Express, Django, or Spring Boot.</li><li><strong>Databases:</strong> SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Redis).</li><li><strong>Other:</strong> Version control (Git), API design (REST/GraphQL), containerization (Docker), and deployment pipelines (CI/CD).</li></ul>
      </>
    ),
  },
  {
    id: 7003,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Explain Pair Programming?",
    answer: (
      <>
        <p><strong>Pair Programming</strong> is an agile software development technique where two programmers work together at one workstation. One programmer, the <em>Driver</em>, writes the code, while the other, the <em>Observer</em> or <em>Navigator</em>, reviews each line of code as it is typed, checking for errors and planning strategic directions.</p>
      </>
    ),
  },
  {
    id: 7004,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is CORS?",
    answer: (
      <>
        <p><strong>CORS</strong> (Cross-Origin Resource Sharing) is a security feature implemented by browsers. It uses HTTP headers to tell browsers whether a web application running at one origin (domain) is allowed to access resources from a server at a different origin.</p>
      </>
    ),
  },
  {
    id: 7005,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is Inversion of Control (IoC)?",
    answer: (
      <>
        <p><strong>Inversion of Control (IoC)</strong> is a design pattern in software engineering where the custom-written portions of a computer program receive the flow of control from a generic framework. The framework calls the developer's code, rather than the developer's code calling a library, often implemented via Dependency Injection.</p>
      </>
    ),
  },
  {
    id: 7006,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "How can you prevent a bot from scraping a publicly accessible API?",
    answer: (
      <>
        <p>Strategies to deter API scraping include:</p><ul><li><strong>Rate Limiting:</strong> Limit request volume from single IP addresses or user tokens.</li><li><strong>Authentication:</strong> Require valid API keys or JWT tokens.</li><li><strong>CAPTCHA:</strong> Force interactive verification for suspicious patterns.</li><li><strong>IP Blacklisting/Web Application Firewalls (WAF):</strong> Identify and block known scraping proxy ranges.</li></ul>
      </>
    ),
  },
  {
    id: 7007,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is RESTful API?",
    answer: (
      <>
        <p>A <strong>RESTful API</strong> is an application programming interface that conforms to the constraints of the REST architectural style, utilizing HTTP methods (GET, POST, PUT, DELETE) to manage stateless representation of database resources.</p>
      </>
    ),
  },
  {
    id: 7008,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is a callback in JavaScript?",
    answer: (
      <>
        <p>A <strong>Callback</strong> is a function passed as an argument to another function, which is then executed inside the outer function to complete a specific action (often asynchronous, like a network response or file read).</p>
      </>
    ),
  },
  {
    id: 7009,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "How is GraphQL different from REST?",
    answer: (
      <>
        <p>Key differences include:</p><ul><li><strong>GraphQL:</strong> Single endpoint where clients request specific fields using query schemas, preventing over-fetching.</li><li><strong>REST:</strong> Multiple endpoints representing resource states, where servers return complete fixed payloads.</li></ul>
      </>
    ),
  },
  {
    id: 7010,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is long polling?",
    answer: (
      <>
        <p><strong>Long Polling</strong> is a real-time web technique where the client requests information from the server, and the server holds the request open until new data is available, responding only when updates occur to simulate push notifications.</p>
      </>
    ),
  },
  {
    id: 7011,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is a connection leak in Java and how can we fix it?",
    answer: (
      <>
        <p>A connection leak occurs when database connections are opened but not closed, eventually exhausting the connection pool. To fix it, ensure connections are closed in a <code>finally</code> block, or use Java's try-with-resources statement: <br/> <code>try (Connection conn = dataSource.getConnection()) {"{ ... }"}</code>.</p>
      </>
    ),
  },
  {
    id: 7012,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "How many ways to handle exceptions in the Spring MVC Framework?",
    answer: (
      <>
        <p>Spring MVC provides three primary error handling mechanisms:</p><ul><li><strong>HandlerExceptionResolver:</strong> Custom beans to resolve servlet exceptions.</li><li><strong>@ExceptionHandler:</strong> Handling exceptions in local Controller classes.</li><li><strong>@ControllerAdvice:</strong> Global error handling across all controllers.</li></ul>
      </>
    ),
  },
  {
    id: 7013,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain multithreading and continuous integration?",
    answer: (
      <>
        <p>Concepts:</p><ul><li><strong>Multithreading:</strong> Executing multiple threads concurrently within a single program to maximize CPU utilization.</li><li><strong>Continuous Integration (CI):</strong> Devops practice where developers merge code edits frequently into central repositories, triggering automated builds and testing.</li></ul>
      </>
    ),
  },
  {
    id: 7014,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "How can we enhance the scalability and efficiency of a website?",
    answer: (
      <>
        <p>Optimization methods include using CDNs, implementing caching (Redis), vertical/horizontal scaling, compressing payload bundles, and optimizing SQL database queries.</p>
      </>
    ),
  },
  {
    id: 7015,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What are the types of design patterns?",
    answer: (
      <>
        <p>The three main categories of software design patterns are:</p><ul><li><strong>Creational:</strong> Object creation mechanisms (e.g. Singleton, Factory).</li><li><strong>Structural:</strong> Assembling classes into larger structures (e.g. Adapter, Bridge).</li><li><strong>Behavioral:</strong> Object communication and responsibility delegation (e.g. Observer, Strategy).</li></ul>
      </>
    ),
  },
  {
    id: 7016,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is Bridge pattern? Explain it uses?",
    answer: (
      <>
        <p>The <strong>Bridge design pattern</strong> decouples an abstraction from its implementation so that the two can vary independently. It is used when both classes and their functionalities need to extend via parallel hierarchies.</p>
      </>
    ),
  },
  {
    id: 7017,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What are the various kinds of CSS selectors?",
    answer: (
      <>
        <p>Selectors include Universal (<code>*</code>), Element type, Class (<code>.class</code>), ID (<code>#id</code>), Attribute, Pseudo-classes (<code>:hover</code>), and Combinators (<code>+</code>, <code>&gt;</code>).</p>
      </>
    ),
  },
  {
    id: 7018,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is meant by the term \u201cReplication\u201d in MongoDB?",
    answer: (
      <>
        <p><strong>Replication</strong> is the process of synchronizing data across multiple servers (a replica set in MongoDB). It provides redundancy, increases data availability, and ensures disaster recovery.</p>
      </>
    ),
  },
  {
    id: 7019,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Define and expand the term NPM. Why do we use NPM with Node.Js?",
    answer: (
      <>
        <p><strong>NPM</strong> (Node Package Manager) is the default package manager for JavaScript runtimes. It is used to install, share, and manage third-party dependency packages inside Node.js applications.</p>
      </>
    ),
  },
  {
    id: 7020,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is numeric promotion?",
    answer: (
      <>
        <p><strong>Numeric Promotion</strong> is the automatic conversion of a smaller numeric primitive data type (like byte or short) to a larger numeric primitive data type (like int or double) during arithmetic operations to prevent overflow.</p>
      </>
    ),
  },
  {
    id: 7021,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What Is Dependency Injection?",
    answer: (
      <>
        <p><strong>Dependency Injection (DI)</strong> is a design pattern where an object receives its dependent objects from external sources rather than creating them internally, decoupling classes and easing unit testing.</p>
      </>
    ),
  },
  {
    id: 7022,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What\u2019s the Difference Between Abstract and Interface Classes?",
    answer: (
      <>
        <ul><li><strong>Abstract Class:</strong> Can contain instance variables, constructors, and concrete method implementations. A subclass can extend only one abstract class.</li><li><strong>Interface:</strong> Represents a contract. Classes can implement multiple interfaces, defining method signatures but (traditionally) no state.</li></ul>
      </>
    ),
  },
  {
    id: 7023,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What Are The Strategies to Prevent a Bot From Scraping a Publicly Accessible API?",
    answer: (
      <>
        <p>Key strategies: request throttling/rate limiting, CORS policies, behavioral user-agent scanning, requiring API keys, and deploying web application firewalls (WAF).</p>
      </>
    ),
  },
  {
    id: 7024,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What Is a Callback in JavaScript?",
    answer: (
      <>
        <p>A callback is a function passed to another function as an argument, intended to be called back at a later time (e.g. after a timer or file read completes).</p>
      </>
    ),
  },
  {
    id: 7025,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What Do You Mean by Data Attributes?",
    answer: (
      <>
        <p>Data attributes are custom attributes prefixed with <code>data-</code> in HTML elements. They allow storing private custom data that can be accessed via JavaScript dataset properties.</p>
      </>
    ),
  },
  {
    id: 7026,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain the Difference Between \u201cResetting\u201d and \u201cNormalizing\u201d CSS?",
    answer: (
      <>
        <ul><li><strong>Resetting CSS:</strong> Strips away all browser default styling (e.g., setting margin/padding to zero).</li><li><strong>Normalizing CSS:</strong> Retains useful defaults and corrects bugs so elements render consistently across all browsers.</li></ul>
      </>
    ),
  },
  {
    id: 7027,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What Does ACID Mean in Database Systems?",
    answer: (
      <>
        <p>ACID attributes guarantee transaction safety:</p><ul><li><strong>Atomicity:</strong> Transactions succeed or fail completely.</li><li><strong>Consistency:</strong> Data moves from one valid state to another.</li><li><strong>Isolation:</strong> Concurrent transactions do not interfere.</li><li><strong>Durability:</strong> Committed transactions persist after crashes.</li></ul>
      </>
    ),
  },
  {
    id: 7028,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "How Rolling Deployment Differs From Blue-Green Deployment?",
    answer: (
      <>
        <ul><li><strong>Rolling:</strong> Slowly updates server instances one-by-one or in small batches over time.</li><li><strong>Blue-Green:</strong> Provisions two identical environments. The idle one (Green) is updated, and traffic switches over instantly.</li></ul>
      </>
    ),
  },
  {
    id: 7029,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Mention The Differences Between Server-Side Scripting and Client-Side Scripting.",
    answer: (
      <>
        <ul><li><strong>Server-Side:</strong> Executes on backend servers (Node, Python), handles business logic and DB access before sending HTML.</li><li><strong>Client-Side:</strong> Runs in user web browsers (JavaScript), handles user interface rendering and dynamic browser behaviors.</li></ul>
      </>
    ),
  },
  {
    id: 7030,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What Are the Types of Design Patterns?",
    answer: (
      <>
        <p>Design patterns fall into Creational, Structural, and Behavioral patterns depending on object compilation and communication responsibilities.</p>
      </>
    ),
  },
  {
    id: 7031,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What\u2019s the Difference Between Normalization and Denormalization?",
    answer: (
      <>
        <ul><li><strong>Normalization:</strong> Reduces data redundancy by dividing tables and defining foreign relationships.</li><li><strong>Denormalization:</strong> Adds redundant data to tables to speed up complex queries by eliminating joins.</li></ul>
      </>
    ),
  },
  {
    id: 7032,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What Are the important Differences Between GraphQL and REST?",
    answer: (
      <>
        <p>GraphQL lets clients query specific data fields from a single endpoint. REST exposes separate resource-bound endpoints returning static response payloads.</p>
      </>
    ),
  },
  {
    id: 7033,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "List Some Common Ways To Reduce the Load Time of a Web Application.",
    answer: (
      <>
        <p>Reduce load times by using content delivery networks (CDNs), image optimization, script minification, browser caching, and bundle lazy-loading.</p>
      </>
    ),
  },
  {
    id: 7034,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What Is Multithreading? How Is It Used?",
    answer: (
      <>
        <p>Multithreading is executing multiple concurrent task threads inside a program, enabling operations like background file processing without hanging user interfaces.</p>
      </>
    ),
  },
  {
    id: 7035,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What Factors Do You Need for Successful Integration?",
    answer: (
      <>
        <p>Successful integration requires clear API interface definitions, automated testing (CI/CD), robust data validation, and monitoring/logging structures.</p>
      </>
    ),
  },
  {
    id: 7036,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "How Would You Locate a Memory Leak?",
    answer: (
      <>
        <p>Locate memory leaks using profiling tools (e.g., Chrome DevTools Memory tab, Java VisualVM) to analyze heap dumps, trace object allocation, and monitor garbage collection cycles.</p>
      </>
    ),
  },
  {
    id: 7037,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What Is Long Polling?",
    answer: (
      <>
        <p>A connection strategy where clients query servers and the connection is held open by the server until updates are ready to push back.</p>
      </>
    ),
  },
  {
    id: 7038,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What Is an Application Server?",
    answer: (
      <>
        <p>An <strong>Application Server</strong> is a software framework that exposes business logic and dynamic database processing systems (e.g., JBoss, WebLogic), differing from basic web servers that serve static assets.</p>
      </>
    ),
  },
  {
    id: 7039,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What Tools Should You Use To Test Your Code\u2019s Functionality?",
    answer: (
      <>
        <p>Common testing tools: Jest, Mocha, JUnit (unit testing), Postman (API testing), and Selenium or Cypress (end-to-end testing).</p>
      </>
    ),
  },
  {
    id: 7040,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What Is the Observer Pattern?",
    answer: (
      <>
        <p>The <strong>Observer design pattern</strong> defines a one-to-many dependency where a subject object maintains a list of dependents (observers) and notifies them automatically of state changes.</p>
      </>
    ),
  },
  {
    id: 7041,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What do you think of AMD vs CommonJS?",
    answer: (
      <>
        <ul><li><strong>CommonJS:</strong> Synchronous module loading standard used in Node.js (uses <code>require()</code>).</li><li><strong>AMD (Asynchronous Module Definition):</strong> Asynchronous module loader standard designed for client browsers (uses <code>define()</code>).</li></ul>
      </>
    ),
  },
  {
    id: 7042,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "How and When Would You Clear Floats in CSS?",
    answer: (
      <>
        <p>Clear floats using parent containers with `overflow: hidden` or a clearfix class to prevent child floating elements from collapsing parent layouts.</p>
      </>
    ),
  },
  {
    id: 7043,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Can You Share Code Between Files? If So, Then How?",
    answer: (
      <>
        <p>Yes. In modern JavaScript/ES6, use <code>export</code> and <code>import</code> statements. In Node.js CommonJS, use <code>module.exports</code> and <code>require()</code>.</p>
      </>
    ),
  },
  {
    id: 7044,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is DOM manipulation? What differentiates it from BOM?",
    answer: (
      <>
        <ul><li><strong>DOM (Document Object Model):</strong> Represents the page HTML document structure to edit content/styles.</li><li><strong>BOM (Browser Object Model):</strong> Represents browser objects outside the document (e.g., <code>window.location</code>, <code>navigator</code>).</li></ul>
      </>
    ),
  },
  {
    id: 7045,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What Are the Most Important Qualities That a Full-Stack Developer Must Have?",
    answer: (
      <>
        <p>Key qualities: versatility across backend and frontend architectures, strong problem-solving skills, and clean coding practices.</p>
      </>
    ),
  },
  {
    id: 7046,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "Which Technologies and Languages Would You Need To Develop a Project From Scratch?",
    answer: (
      <>
        <p>Requirements include an OS/hosting environment, backend runtime (Node/Java), database (SQL/NoSQL), web routing layers, and frontend tools.</p>
      </>
    ),
  },
  {
    id: 7047,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Can You List Some Recent Full-Stack Development Trends?",
    answer: (
      <>
        <p>Trends include Serverless architectures, Microfrontends, Jamstack, AI-assisted development tools, and Edge Computing runtimes.</p>
      </>
    ),
  },
  {
    id: 7048,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What Is the Difference Between Thread and Process?",
    answer: (
      <>
        <ul><li><strong>Process:</strong> Independent execution unit containing its own allocated memory space.</li><li><strong>Thread:</strong> Subset execution unit within a process, sharing memory space with other threads in that process.</li></ul>
      </>
    ),
  },
  {
    id: 7049,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Share an Experience When You Found Your Coworkers\u2019 Code To Be Inefficient? How Did You Deal With It?",
    answer: (
      <>
        <p>Address inefficiency during code review cycles constructively by showing comparative benchmarks, explaining design patterns, and proposing refactored options.</p>
      </>
    ),
  },
  {
    id: 7050,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Are You Aware of Design Patterns? Are You Comfortable Working With Them?",
    answer: (
      <>
        <p>Yes. Familiarity with Creational (Factory), Structural (Adapter), and Behavioral (Observer) patterns is essential for reusable code architectures.</p>
      </>
    ),
  },
  {
    id: 7051,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What Is Your Best Example of Implementing or Debugging a Program?",
    answer: (
      <>
        <p>An example is debugging memory leaks by using browser heap profiling tools to identify and release circular reference listeners.</p>
      </>
    ),
  },
  {
    id: 7052,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the difference between responsive and adaptive design?",
    answer: (
      <>
        <ul><li><strong>Responsive Design:</strong> Fluid grid layouts that adjust smoothly to any screen width.</li><li><strong>Adaptive Design:</strong> Layouts with fixed break-point sizing targeting specific device dimensions.</li></ul>
      </>
    ),
  },
  {
    id: 7053,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is a web server?",
    answer: (
      <>
        <p>A <strong>Web Server</strong> serves static assets (HTML, CSS, JS, images) via HTTP protocol, acting as the entry point for frontend web clients.</p>
      </>
    ),
  },
  {
    id: 7054,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "State the difference between a static and dynamic website.",
    answer: (
      <>
        <ul><li><strong>Static:</strong> Returns pre-written files exactly as stored on disk.</li><li><strong>Dynamic:</strong> Server compiles page content on-the-fly using databases and custom templates for each user request.</li></ul>
      </>
    ),
  },
  {
    id: 7055,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "How do you select the tools and technologies for a project?",
    answer: (
      <>
        <p>Choose tools based on performance constraints, developer ecosystem maturity, hosting budgets, and scalability requirements.</p>
      </>
    ),
  },
  {
    id: 7056,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Why is RESTful API a popular choice in web development?",
    answer: (
      <>
        <p>REST is stateless, scalable, relies on standard HTTP verbs, and separates client interfaces from server-side database representations.</p>
      </>
    ),
  },
  {
    id: 7057,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Can you explain the MVC design pattern?",
    answer: (
      <>
        <p>MVC divides applications into three components:</p><ul><li><strong>Model:</strong> Core data structure and database schema logic.</li><li><strong>View:</strong> User interface rendering layout.</li><li><strong>Controller:</strong> Processes requests, updates models, and selects views.</li></ul>
      </>
    ),
  },
  {
    id: 7058,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Which is the popular language used by full-stack developers?",
    answer: (
      <>
        <p>JavaScript/TypeScript, as it allows developers to write code for both the frontend (React/Angular) and backend (Node.js/Express) in a single language.</p>
      </>
    ),
  },
  {
    id: 7059,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is type coercion in JavaScript?",
    answer: (
      <>
        <p>Type coercion is the automatic implicit conversion of values from one data type to another (e.g. <code>5 + '5'</code> yields string <code>'55'</code>).</p>
      </>
    ),
  },
  {
    id: 7060,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Differentiate between Mocks and stubs.",
    answer: (
      <>
        <ul><li><strong>Stub:</strong> A placeholder object that returns dummy data to satisfy program compile parameters.</li><li><strong>Mock:</strong> A testing object that records calls and verifies whether expected assertions occurred during test runs.</li></ul>
      </>
    ),
  },
  {
    id: 7061,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What are the advantages of using unit testing?",
    answer: (
      <>
        <p>Unit testing catches bugs early, ensures code refactors do not break logic, serves as active documentation, and improves modular design.</p>
      </>
    ),
  },
  {
    id: 7062,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What steps can be taken to guarantee the security of data in your applications?",
    answer: (
      <>
        <p>Security layers: encrypting data-in-transit (HTTPS/TLS), hashing passwords using bcrypt, parameterizing database queries, and setting secure cookie policies.</p>
      </>
    ),
  },
  {
    id: 7063,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What sets unit testing apart from integration testing?",
    answer: (
      <>
        <ul><li><strong>Unit:</strong> Tests single components/methods in complete isolation using mock objects.</li><li><strong>Integration:</strong> Tests interaction between multiple combined components (e.g. controller querying database).</li></ul>
      </>
    ),
  },
  {
    id: 7064,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Could you elucidate the concept of microservices architecture?",
    answer: (
      <>
        <p>Microservices compile software as a collection of small, independent deployable services that communicate via lightweight network APIs (REST/gRPC).</p>
      </>
    ),
  },
  {
    id: 7065,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Elaborate on the CSS box model.",
    answer: (
      <>
        <p>The CSS Box Model controls layouts. Every HTML element is modeled as a box composed of (from center out): <strong>Content</strong>, <strong>Padding</strong>, <strong>Border</strong>, and <strong>Margin</strong>.</p>
      </>
    ),
  },
  {
    id: 7066,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What does lazy loading entail in Angular?",
    answer: (
      <>
        <p>Lazy loading loads specific Angular route modules only when visitors navigate to them, reducing initial bundle sizes and fast-loading web apps.</p>
      </>
    ),
  },
  {
    id: 7067,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Which technologies and proficiencies are essential for building a project from scratch?",
    answer: (
      <>
        <p>Needs database setups, backend middleware APIs, frontend framework packaging, and DevOps continuous integration settings.</p>
      </>
    ),
  },
  {
    id: 7068,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What's the role of the 'extract' function in PHP?",
    answer: (
      <>
        <p>The <code>extract()</code> function imports variables from an associative array into the local symbol table, converting array keys into variable names.</p>
      </>
    ),
  },
  {
    id: 7069,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "How is the 'alt' attribute utilized for images?",
    answer: (
      <>
        <p>The <code>alt</code> attribute provides alternative text descriptions for images, crucial for web accessibility (screen readers) and SEO rankings.</p>
      </>
    ),
  },
  {
    id: 7070,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Differentiate between Hashtable and HashMap.",
    answer: (
      <>
        <ul><li><strong>Hashtable:</strong> Thread-safe, synchronized, and does not allow null keys or values (slower).</li><li><strong>HashMap:</strong> Not synchronized (not thread-safe), but allows one null key and multiple null values (faster).</li></ul>
      </>
    ),
  },
  {
    id: 7071,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Define a Java Applet.",
    answer: (
      <>
        <p>A legacy Java class designed to execute client-side inside web browsers using plugins, now deprecated and replaced by modern web languages.</p>
      </>
    ),
  },
  {
    id: 7072,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain the concept of 'Scope' in AngularJS.",
    answer: (
      <>
        <p>In AngularJS, <code>$scope</code> represents the application model object that connects the view (HTML) with the controller logic, facilitating two-way binding.</p>
      </>
    ),
  },
  {
    id: 7073,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the significance of V8?",
    answer: (
      <>
        <p><strong>V8</strong> is Google's open-source, high-performance WebAssembly and JavaScript engine written in C++, which compiles JS directly into machine code for Chrome and Node.js.</p>
      </>
    ),
  },
  {
    id: 7074,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Define WebP.",
    answer: (
      <>
        <p><strong>WebP</strong> is a modern image format developed by Google that provides superior lossless and lossy compression for web images, reducing file sizes compared to PNG/JPEG.</p>
      </>
    ),
  },
  {
    id: 7075,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is the concept of 'State' in React?",
    answer: (
      <>
        <p>In React, <strong>State</strong> is a built-in object that stores component-specific dynamic data. When state values change, the component automatically re-renders to update UI components.</p>
      </>
    ),
  },
  {
    id: 7076,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Define jQuery and list its features.",
    answer: (
      <>
        <p>jQuery is a legacy JavaScript library that simplifies DOM traversal, event handling, animations, and Ajax requests across browser types.</p>
      </>
    ),
  },
  {
    id: 7077,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is a namespace in C#?",
    answer: (
      <>
        <p>A namespace is a logical group structure in C# used to organize classes and prevent naming collisions inside large project builds.</p>
      </>
    ),
  },
  {
    id: 7078,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain the concept of hoisting in JavaScript.",
    answer: (
      <>
        <p>Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope during compilation.</p>
      </>
    ),
  },
  {
    id: 7079,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is the purpose of backtracking, and when is it employed?",
    answer: (
      <>
        <p>Backtracking is an algorithmic method for finding solutions recursively by building candidates and discarding them ('backtracking') if they fail path conditions.</p>
      </>
    ),
  },
  {
    id: 7080,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is double brace initialization, and what benefits does it offer?",
    answer: (
      <>
        <p>A Java shorthand syntax combining instance initializer blocks within anonymous inner classes, though generally discouraged due to memory leaks.</p>
      </>
    ),
  },
  {
    id: 7081,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the difference between the \u201cSendRedirect\u201d and the \u201cForward\u201d method in Java?",
    answer: (
      <>
        <ul><li><strong>sendRedirect():</strong> Tells the client browser to make a new HTTP request to a different URL (slower, updates URL bar).</li><li><strong>forward():</strong> Forwards request internally inside the server (faster, client is unaware, URL remains same).</li></ul>
      </>
    ),
  },
  {
    id: 7082,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain what a JavaScript Promise is and outline its different states.",
    answer: (
      <>
        <p>A <strong>Promise</strong> represents the eventual completion or failure of an asynchronous operation. Its three states are:</p><ul><li><strong>Pending:</strong> Initial state, operation incomplete.</li><li><strong>Fulfilled:</strong> Operation completed successfully.</li><li><strong>Rejected:</strong> Operation failed with error.</li></ul>
      </>
    ),
  },
  {
    id: 7083,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is a Request Dispatcher?",
    answer: (
      <>
        <p>A servlet interface used to forward requests to other resources (HTML, JSP, servlet) or include their output in response flows.</p>
      </>
    ),
  },
  {
    id: 7084,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What are the applications of Python?",
    answer: (
      <>
        <p>Python is used in web backend development (Django), data science, machine learning modeling, task scripting, and automation.</p>
      </>
    ),
  },
  {
    id: 7085,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the difference between MVC (Model View Controller) and MVP (Model View Presenter)?",
    answer: (
      <>
        <ul><li><strong>MVC:</strong> Controller intercepts requests, updating the Model, while the View receives updates directly from the Model.</li><li><strong>MVP:</strong> Presenter sits as mediator, handling data flows completely, keeping View and Model entirely decoupled.</li></ul>
      </>
    ),
  },
  {
    id: 7086,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Explain the MEAN Stack.",
    answer: (
      <>
        <p>A JavaScript bundle combining <strong>MongoDB</strong> (database), <strong>Express.js</strong> (backend API), <strong>Angular</strong> (frontend UI), and <strong>Node.js</strong> (backend runtime).</p>
      </>
    ),
  },
  {
    id: 7087,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is an application server, and how does it work?",
    answer: (
      <>
        <p>Runs business logic programs, handles multithreading, and manages database connection pools to serve dynamic requests.</p>
      </>
    ),
  },
  {
    id: 7088,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "How do you optimize SQL queries?",
    answer: (
      <>
        <p>Optimizations: add indexes to frequently searched columns, avoid <code>SELECT *</code>, rewrite nested subqueries as JOINs, and analyze execution plans.</p>
      </>
    ),
  },
  {
    id: 7089,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "How do you handle browser compatibility issues?",
    answer: (
      <>
        <p>Handle compatibility using CSS normalization, adding vendor prefixes, importing polyfills for JS APIs, and testing layouts via cross-browser tools.</p>
      </>
    ),
  },
  {
    id: 7090,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the difference between abstract and interface?",
    answer: (
      <>
        <p>Abstract classes provide inheritance paths and concrete variables. Interfaces provide strict behavioral contracts for implementation.</p>
      </>
    ),
  },
  {
    id: 7091,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Why and how do you clear floats in CSS?",
    answer: (
      <>
        <p>Clear floats using <code>clear: both</code> or standard flexbox/grid layout modules to prevent parent layout collapse bugs.</p>
      </>
    ),
  },
  {
    id: 7092,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "How do you share code between files in JavaScript?",
    answer: (
      <>
        <p>Use standard imports and exports (ES6) or common JS `require` statements to load functions across script files.</p>
      </>
    ),
  },
  {
    id: 7093,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the difference between Host objects and Native objects?",
    answer: (
      <>
        <ul><li><strong>Native Objects:</strong> Defined by ECMAScript specification (e.g., <code>Object</code>, <code>Array</code>, <code>Date</code>).</li><li><strong>Host Objects:</strong> Supplied by runtime environments (e.g., <code>window</code>, <code>document</code> in browsers, <code>process</code> in Node).</li></ul>
      </>
    ),
  },
  {
    id: 7094,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is the best way to remove array duplicates in ES6?",
    answer: (
      <>
        <p>The cleanest way is using the <code>Set</code> collection constructor:</p><p><code>const unique = [...new Set(array)];</code></p>
      </>
    ),
  },
  {
    id: 7095,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is 'Strict Mode,' and how to use it in JavaScript?",
    answer: (
      <>
        <p>Strict mode checks code logic more strictly, throwing errors for bad practices (like global variables). Declare it by writing <code>'use strict';</code> at file tops.</p>
      </>
    ),
  },
  {
    id: 7096,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "How does database indexing work?",
    answer: (
      <>
        <p>Database indexes work like book indexes, building B-Trees pointing to row coordinates to prevent slow full-table scans.</p>
      </>
    ),
  },
  {
    id: 7097,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What are filters in Vue.js?",
    answer: (
      <>
        <p>Legacy Vue utilities used to apply text formatting (like converting strings to uppercase) directly inside HTML mustache bindings.</p>
      </>
    ),
  },
  {
    id: 7098,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Why is the 'this' operator inconsistent in JavaScript?",
    answer: (
      <>
        <p>Because <code>this</code> is determined dynamically by how a function is called, not where it is defined (unless arrow functions are used).</p>
      </>
    ),
  },
  {
    id: 7099,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is Data Structure, and what are the different types?",
    answer: (
      <>
        <p>Structures to store and organize data. Main classes include Linear (Arrays, Lists, Stacks) and Non-Linear (Trees, Graphs).</p>
      </>
    ),
  },
  {
    id: 7100,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What are semantic HTML tags, and why should you use them?",
    answer: (
      <>
        <p>Tags that describe their content's meaning (e.g., <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>), improving accessibility and search rankings.</p>
      </>
    ),
  },
  {
    id: 7101,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is the purpose of the 'main' element in HTML?",
    answer: (
      <>
        <p>Identifies the central, primary content of the document body, ensuring only one exists per page layout.</p>
      </>
    ),
  },
  {
    id: 7102,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is Pascal String?",
    answer: (
      <>
        <p>A string storage layout where the first byte stores the length of the string, followed by the character data bytes.</p>
      </>
    ),
  },
  {
    id: 7103,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the difference between Map and WeakMap?",
    answer: (
      <>
        <ul><li><strong>Map:</strong> Retains keys indefinitely, allowing any data type as keys.</li><li><strong>WeakMap:</strong> Allows only objects as keys, allowing garbage collector sweeps if no other references exist.</li></ul>
      </>
    ),
  },
  {
    id: 7104,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What distinguishes a web server from an application server?",
    answer: (
      <>
        <p>Web servers focus on static files and HTTP parsing. Application servers execute business logics, multithreading, and enterprise components.</p>
      </>
    ),
  },
  {
    id: 7105,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the difference between JDBC and Hibernate?",
    answer: (
      <>
        <ul><li><strong>JDBC:</strong> Standard Java API requiring developers to write database-specific SQL queries manually.</li><li><strong>Hibernate:</strong> ORM framework that maps Java classes directly to database tables, handling SQL automatically.</li></ul>
      </>
    ),
  },
  {
    id: 7106,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the functioning of DevOps?",
    answer: (
      <>
        <p>DevOps combines development and operation flows, automating code updates, configuration testing, and server setups via pipelines.</p>
      </>
    ),
  },
  {
    id: 7107,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What sets Promises apart from async/await in JavaScript?",
    answer: (
      <>
        <p>Async/await is syntactic sugar over Promises, allowing developers to write asynchronous code that reads like synchronous code.</p>
      </>
    ),
  },
  {
    id: 7108,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the concept of multi-threading?",
    answer: (
      <>
        <p>Executing tasks in parallel threads inside a single system process, maximizing multi-core CPU efficiency.</p>
      </>
    ),
  },
  {
    id: 7109,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What are the go-to ways to handle sessions in servlets?",
    answer: (
      <>
        <p>Servlet session tracking uses Cookies, URL rewriting, Hidden form fields, or HttpSession API variables.</p>
      </>
    ),
  },
  {
    id: 7110,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "How do synchronous and asynchronous programming differ?",
    answer: (
      <>
        <ul><li><strong>Synchronous:</strong> Lines execute sequentially, blocking subsequent commands until current lines finish.</li><li><strong>Asynchronous:</strong> Schedules tasks to finish later, continuing code execution without blocking thread processes.</li></ul>
      </>
    ),
  },
  {
    id: 7111,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is the difference between Fail-Fast and Fail-Safe iterators?",
    answer: (
      <>
        <ul><li><strong>Fail-Fast:</strong> Throws <code>ConcurrentModificationException</code> instantly if the collection is altered during iteration.</li><li><strong>Fail-Safe:</strong> Iterates over a clone copy of the collection, ignoring modifications during iteration.</li></ul>
      </>
    ),
  },
  {
    id: 7112,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What are the benefits of pair programming?",
    answer: (
      <>
        <p>Improves code quality, reduces logic errors, facilitates knowledge sharing, and eases integration paths.</p>
      </>
    ),
  },
  {
    id: 7113,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the event loop in JavaScript?",
    answer: (
      <>
        <p>The **Event Loop** is the engine mechanism that manages asynchronous callback execution, processing event queues when the main thread stack is empty.</p>
      </>
    ),
  },
  {
    id: 7114,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "How can you deter a bot from scraping a public API?",
    answer: (
      <>
        <p>Deter bots using request throttling, API key authentication, header validation (User-Agent check), and web firewalls (WAF).</p>
      </>
    ),
  },
  {
    id: 7115,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "How can you discourage bots from scraping a public API?",
    answer: (
      <>
        <p>Discourage scraper scripts by changing response payload schemas dynamically or using captchas on key validation loops.</p>
      </>
    ),
  },
  {
    id: 7116,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain connection leaks in Java and their resolution.",
    answer: (
      <>
        <p>Leakage occurs if database connections are left open. Resolve by wrapping resources in try-with-resources statements.</p>
      </>
    ),
  },
  {
    id: 7117,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "How do you implement a callback in JavaScript?",
    answer: (
      <>
        <p>Pass a function definition as an argument to another function, and invoke it inside when tasks complete.</p>
      </>
    ),
  },
  {
    id: 7118,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What steps can you take to decrease a web application's load time?",
    answer: (
      <>
        <p>Gzip scripts, minify source files, use CDN hosting, cache assets, and defer/lazy load bulky module scripts.</p>
      </>
    ),
  },
  {
    id: 7119,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What does the Zip() function do in Python?",
    answer: (
      <>
        <p>Combines multiple iterables (lists, tuples) into an iterator of tuples, matching elements based on index offsets.</p>
      </>
    ),
  },
  {
    id: 7120,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "Define a deadlock in Java and suggest preventive measures.",
    answer: (
      <>
        <p>A **Deadlock** happens when threads lock resources waiting on each other indefinitely. Prevent by acquiring locks in a consistent order.</p>
      </>
    ),
  },
  {
    id: 7121,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "Can you explain the debounce function in JavaScript?",
    answer: (
      <>
        <p>Debouncing delays executing a function until a certain amount of time has elapsed since the last time it was called (e.g. search input fields).</p>
      </>
    ),
  },
  {
    id: 7122,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What approaches can be used for error handling in a GraphQL server?",
    answer: (
      <>
        <p>GraphQL servers handle errors by formatting the <code>errors</code> array in response JSONs, defining resolver-level try-catch loops.</p>
      </>
    ),
  },
  {
    id: 7123,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Briefly explain the useMemo and useCallback hooks in React.",
    answer: (
      <>
        <ul><li><code>useMemo</code>: Caches the calculated *result* of a function between re-renders.</li><li><code>useCallback</code>: Caches the *function definition* itself between re-renders.</li></ul>
      </>
    ),
  },
  {
    id: 7124,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is a JavaScript generator-function and how does it work?",
    answer: (
      <>
        <p>Generator functions return Iterator objects, using the <code>yield</code> keyword to pause and resume function execution flows dynamically.</p>
      </>
    ),
  },
  {
    id: 7125,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Could you provide an overview of a React component's lifecycle and its associated methods?",
    answer: (
      <>
        <p>Lifecycle flows: **Mounting** (constructor, render, componentDidMount), **Updating** (shouldComponentUpdate, componentDidUpdate), and **Unmounting** (componentWillUnmount).</p>
      </>
    ),
  },
  {
    id: 7126,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What distinguishes controlled and uncontrolled components in React?",
    answer: (
      <>
        <ul><li><strong>Controlled:</strong> Form data state is managed by React component state.</li><li><strong>Uncontrolled:</strong> Form data is managed directly by browser DOM refs.</li></ul>
      </>
    ),
  },
  {
    id: 7127,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "In Node.js, what role do Event objects play in modules like http or fs?",
    answer: (
      <>
        <p>They act as listener bindings, emitting alerts (such as 'data' or 'error') to trigger non-blocking stream handlers.</p>
      </>
    ),
  },
  {
    id: 7128,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "How can you create a custom Pipe in Angular, and where is it applicable?",
    answer: (
      <>
        <p>Create pipes by implementing the <code>PipeTransform</code> interface, decorating with <code>@Pipe</code> to transform text directly inside templates.</p>
      </>
    ),
  },
  {
    id: 7129,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What's a recommended approach for managing state in large Vue.js applications?",
    answer: (
      <>
        <p>Manage states using Pinia or Vuex libraries to centralize application states across routes and components.</p>
      </>
    ),
  },
  {
    id: 7130,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "Could you explain the concept of reactive programming and its benefits in web development?",
    answer: (
      <>
        <p>Reactive programming focuses on asynchronous data streams (e.g. RxJS), easing complex event processing and data flows.</p>
      </>
    ),
  },
  {
    id: 7131,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "How can you establish message passing between a Python web application's server and a WebSocket client?",
    answer: (
      <>
        <p>Message passing uses WebSocket libraries (like <code>websockets</code> or Django Channels) to maintain active persistent connections.</p>
      </>
    ),
  },
  {
    id: 7132,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is the approach to handling optimistic updates in a web application?",
    answer: (
      <>
        <p>Optimistic updates modify frontend states instantly before servers respond, reverting layouts if API requests fail.</p>
      </>
    ),
  },
  {
    id: 7133,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "How do you implement error boundaries in a React application?",
    answer: (
      <>
        <p>Create error boundaries using class components that implement lifecycle methods like <code>componentDidCatch</code>.</p>
      </>
    ),
  },
  {
    id: 7134,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is request blocking in web performance optimization, and how can it be mitigated?",
    answer: (
      <>
        <p>Mitigate blocking by deferring script execution, using HTTP/2 multiplexing, and reducing render-blocking stylesheet sizes.</p>
      </>
    ),
  },
  {
    id: 7135,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Can you explain the concept of atomic design in modern web design?",
    answer: (
      <>
        <p>Atomic design divides web page elements into Atoms, Molecules, Organisms, Templates, and Pages to build modular components.</p>
      </>
    ),
  },
  {
    id: 7136,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "How can you create a performance benchmarking tool for Node.js applications?",
    answer: (
      <>
        <p>Create benchmarks using the built-in <code>perf_hooks</code> module, recording high-resolution process execution time intervals.</p>
      </>
    ),
  },
  {
    id: 7137,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What are semantic elements in HTML?",
    answer: (
      <>
        <p>HTML tags that define structural layout meanings (like <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code>) rather than just visual layouts.</p>
      </>
    ),
  },
  {
    id: 7138,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Describe the concepts of tags, attributes, and elements in HTML.",
    answer: (
      <>
        <ul><li><strong>Tag:</strong> Command syntax (e.g. <code>&lt;img&gt;</code>).</li><li><strong>Attribute:</strong> Property value settings (e.g. <code>src='...'</code>).</li><li><strong>Element:</strong> The entire tag pair and content.</li></ul>
      </>
    ),
  },
  {
    id: 7139,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is JavaScript, and how can it be included in HTML documents?",
    answer: (
      <>
        <p>JS is a scripting language, imported into HTML using <code>&lt;script src='...'&gt;&lt;/script&gt;</code> tags.</p>
      </>
    ),
  },
  {
    id: 7140,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Could you provide an overview of four libraries used in JavaScript?",
    answer: (
      <>
        <p>Common JS libraries: Lodash (helpers), Axios (requests), Chart.js (graphs), and Redux (states).</p>
      </>
    ),
  },
  {
    id: 7141,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is the definition of a Callback function in JavaScript?",
    answer: (
      <>
        <p>A function passed as an argument that runs after operations complete, essential for asynchronous logic flows.</p>
      </>
    ),
  },
  {
    id: 7142,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Expand the terms MEAN stack and MERN stack, and mention their alternatives.",
    answer: (
      <>
        <p>Bundles include MEAN (Angular) and MERN (React). Alternatives: MEVN (Vue.js) and LAMP (Linux, Apache, MySQL, PHP).</p>
      </>
    ),
  },
  {
    id: 7143,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is meant by scope in AngularJS? Define the different types.",
    answer: (
      <>
        <p>Scope binds controllers and views. Types include local directive scopes, child controller scopes, and global rootScopes.</p>
      </>
    ),
  },
  {
    id: 7144,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Briefly explain Directives in AngularJS.",
    answer: (
      <>
        <p>Directives are marker attributes (like <code>ng-model</code>) that extend HTML compile parameters with customized program actions.</p>
      </>
    ),
  },
  {
    id: 7145,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What are the features of Node.js, and why is it considered a single-threaded framework?",
    answer: (
      <>
        <p>Node utilizes single-threaded event loops for JS execution, relying on underlying system threads for non-blocking IO.</p>
      </>
    ),
  },
  {
    id: 7146,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Define and expand the term NPM. Why do we use NPM with Node.js?",
    answer: (
      <>
        <p>NPM is Node Package Manager, used to download and handle dependency trees for backend scripts.</p>
      </>
    ),
  },
  {
    id: 7147,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is CORS, and how can you include CORS in Express.js?",
    answer: (
      <>
        <p>CORS allows cross-domain queries. In Express, configure it using the third-party <code>cors</code> middleware.</p>
      </>
    ),
  },
  {
    id: 7148,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is 'Replication' in MongoDB?",
    answer: (
      <>
        <p>Replication synchronizes database records across multiple servers (replica sets) to provide automated database backups and read scalability.</p>
      </>
    ),
  },
  {
    id: 7149,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "How can you create a new database in PostgreSQL?",
    answer: (
      <>
        <p>Create a database using the SQL query: <br/> <code>CREATE DATABASE dbname;</code></p>
      </>
    ),
  },
  {
    id: 7150,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is the difference between the WHERE clause and the HAVING clause?",
    answer: (
      <>
        <ul><li><code>WHERE</code>: Filters rows *before* any grouping (GROUP BY) occurs.</li><li><code>HAVING</code>: Filters summarized groups *after* grouping is applied.</li></ul>
      </>
    ),
  },
  {
    id: 7151,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is the definition of an RDBMS, and how does it differ from a DBMS?",
    answer: (
      <>
        <p>RDBMS structures data as related tables with primary/foreign keys. Standard DBMS stores data as unstructured records.</p>
      </>
    ),
  },
  {
    id: 7152,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Difference between RDBMS and DBMS.",
    answer: (
      <>
        <p>RDBMS enforces relational constraints, database schemas, and transactions. DBMS operates flat files without schema relations.</p>
      </>
    ),
  },
  {
    id: 7153,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain the concepts of Cluster and Non-Cluster Indexes in PostgreSQL.",
    answer: (
      <>
        <ul><li><strong>Clustered Index:</strong> Dictates the physical storage order of rows on disk.</li><li><strong>Non-Clustered Index:</strong> Creates a separate search index pointing to row coordinates on disk.</li></ul>
      </>
    ),
  },
  {
    id: 7154,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "State the difference between the DROP command and the TRUNCATE command in SQL.",
    answer: (
      <>
        <ul><li><code>DROP</code>: Deletes the entire table structure and data from disk.</li><li><code>TRUNCATE</code>: Empties all rows from the table, keeping the column headers intact.</li></ul>
      </>
    ),
  },
  {
    id: 7155,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Define Buffers in the context of Node.js.",
    answer: (
      <>
        <p>Buffers represent fixed-size raw memory allocations outside V8, used to read and process binary files or streams directly.</p>
      </>
    ),
  },
  {
    id: 7156,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain the concept of Streams in Node.js.",
    answer: (
      <>
        <p>Streams read or write data in small, sequential chunks, preventing high memory load when processing huge files.</p>
      </>
    ),
  },
  {
    id: 7157,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is Scaffolding in Express.js?",
    answer: (
      <>
        <p>Generates default folder structures (routes/, views/) to speed up initialization, often using <code>express-generator</code>.</p>
      </>
    ),
  },
  {
    id: 7158,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Does MVC support it?",
    answer: (
      <>
        <p>Yes, MVC frameworks rely on generators to scaffold model, view, and controller modules consistently.</p>
      </>
    ),
  },
  {
    id: 7159,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Differentiate between these technologies; Node.Js and Django.",
    answer: (
      <>
        <ul><li><strong>Node.js:</strong> JavaScript runtime, non-blocking asynchronous architecture.</li><li><strong>Django:</strong> Python web framework, synchronous blocking design pattern.</li></ul>
      </>
    ),
  },
  {
    id: 7160,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the purpose of interpolation in Angular.Js, and could you provide a concise overview of how Angular.Js enhances HTML?",
    answer: (
      <>
        <p>Interpolation binds controller data values to HTML templates using double curly braces, enhancing HTML dynamically.</p>
      </>
    ),
  },
  {
    id: 7161,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is the difference between a Clustered and a Non-Clustered index?",
    answer: (
      <>
        <p>Clustered indexes sort rows physically. Non-Clustered indexes preserve a pointer table linking index values to disk rows.</p>
      </>
    ),
  },
  {
    id: 7162,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "Explain the concept of Triggers in PostgreSQL?",
    answer: (
      <>
        <p>Triggers are SQL procedures executed automatically when specific database mutations (INSERT, UPDATE, DELETE) occur on tables.</p>
      </>
    ),
  },
  {
    id: 7163,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What are Views in PostgreSQL, and why are they used?",
    answer: (
      <>
        <p>Views are virtual query tables. They encapsulate complex SELECT query commands to simplify read operations for clients.</p>
      </>
    ),
  },
  {
    id: 7164,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the role of the EXPLAIN statement in PostgreSQL?",
    answer: (
      <>
        <p>It parses query execution paths, detailing index scans or joins, aiding database optimizations.</p>
      </>
    ),
  },
  {
    id: 7165,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "Explain Connection Pooling in PostgreSQL?",
    answer: (
      <>
        <p>Connection pooling maintains a list of warm database connections, reducing query delays by avoiding connection handshakes.</p>
      </>
    ),
  },
  {
    id: 7166,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the purpose of the VACUUM command in PostgreSQL?",
    answer: (
      <>
        <p>Reclaims storage space occupied by dead database rows resulting from updates or deletions (preventing MVCC table bloat).</p>
      </>
    ),
  },
  {
    id: 7167,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain the concept of ACID properties in the context of PostgreSQL?",
    answer: (
      <>
        <p>Guarantees safe transactions: Atomicity, Consistency, Isolation, and Durability, protecting data integrity.</p>
      </>
    ),
  },
  {
    id: 7168,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What are Transactions in PostgreSQL, and how do you manage them?",
    answer: (
      <>
        <p>Group queries inside <code>BEGIN</code> and <code>COMMIT</code> boundaries. Use <code>ROLLBACK</code> to revert edits if statements fail.</p>
      </>
    ),
  },
  {
    id: 7169,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "Explain the concept of MVCC (Multi-Version Concurrency Control) in PostgreSQL?",
    answer: (
      <>
        <p>MVCC allows concurrent reads and writes safely by generating snapshot versions of rows per transaction.</p>
      </>
    ),
  },
  {
    id: 7170,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is Foreign Key constraint, and how does it ensure referential integrity in PostgreSQL?",
    answer: (
      <>
        <p>Links table columns to key values in another table, preventing orphaned database records.</p>
      </>
    ),
  },
  {
    id: 7171,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain Data Types in PostgreSQL? Give some examples.",
    answer: (
      <>
        <p>Types: primitives (INTEGER, VARCHAR), complex (JSONB, ARRAY), and geometric types (POINT).</p>
      </>
    ),
  },
  {
    id: 7172,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is a composite primary key in PostgreSQL?",
    answer: (
      <>
        <p>A primary key composed of two or more columns combined, guaranteeing unique combined values across database rows.</p>
      </>
    ),
  },
  {
    id: 7173,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is a full-stack developer?",
    answer: (
      <>
        <p>A developer capable of building both the frontend layout and backend API server routes and databases.</p>
      </>
    ),
  },
  {
    id: 7174,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What does responsive web design entail?",
    answer: (
      <>
        <p>Designing fluid layouts that dynamically resize to look great across mobile, tablet, and desktop screens.</p>
      </>
    ),
  },
  {
    id: 7175,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Differentiate between cookies, local storage, and session storage.",
    answer: (
      <>
        <ul><li><strong>Cookies:</strong> Small limits, sent to server on every request.</li><li><strong>LocalStorage:</strong> Large limits, persists in browser indefinitely.</li><li><strong>SessionStorage:</strong> Cleared when the browser tab closes.</li></ul>
      </>
    ),
  },
  {
    id: 7176,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is CSS specificity, and how does it affect styling?",
    answer: (
      <>
        <p>A rule engine dictating which CSS selectors override others (ID overrides Class, Class overrides Element).</p>
      </>
    ),
  },
  {
    id: 7177,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "Explain Semantic HTML.",
    answer: (
      <>
        <p>Using tags that convey content structure meaning, assisting web crawlers and screen readers.</p>
      </>
    ),
  },
  {
    id: 7178,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is DOM?",
    answer: (
      <>
        <p>Document Object Model. The logical tree representation of web pages that JavaScript modifies to update layouts.</p>
      </>
    ),
  },
  {
    id: 7179,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is Event Bubbling and Event Capturing in JavaScript?",
    answer: (
      <>
        <ul><li><strong>Bubbling:</strong> Event triggers on target, then bubbles *up* to ancestor elements.</li><li><strong>Capturing:</strong> Event starts at parent container and trickles *down* to the target element.</li></ul>
      </>
    ),
  },
  {
    id: 7180,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is Closures in JavaScript?",
    answer: (
      <>
        <p>A **Closure** is when a function remembers and accesses its lexical scope variables even when executed outside that scope.</p>
      </>
    ),
  },
  {
    id: 7181,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What are the uses of Docker?",
    answer: (
      <>
        <p>Docker isolates application environments, ensuring consistency across development, staging, and production setups.</p>
      </>
    ),
  },
  {
    id: 7182,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "How to speed up web application loading?",
    answer: (
      <>
        <p>Optimize by lazy loading bundles, minifying scripts, compressing images to WebP, and utilizing CDN caches.</p>
      </>
    ),
  },
  {
    id: 7183,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Differentiate between Blue-Green Deployment and Rolling Deployment.",
    answer: (
      <>
        <p>Blue-Green flips traffic between parallel environments. Rolling slowly replaces servers individually.</p>
      </>
    ),
  },
  {
    id: 7184,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is serverless computing, and what are its pros and cons?",
    answer: (
      <>
        <p>Executes functions on-demand without managing server instances. Pros: scale, cost. Cons: cold starts, vendor lock.</p>
      </>
    ),
  },
  {
    id: 7185,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is CI/CD, and why is it important in full-stack development?",
    answer: (
      <>
        <p>Continuous Integration and Continuous Deployment automates code testing and deployments, preventing release bugs.</p>
      </>
    ),
  },
  {
    id: 7186,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain the concept of containerization and its benefits.",
    answer: (
      <>
        <p>Packages code and all dependencies into a lightweight image that shares host OS kernels, speeding up deployments.</p>
      </>
    ),
  },
  {
    id: 7187,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is JWT (JSON Web Token), and how is it used for authentication?",
    answer: (
      <>
        <p>Cryptographically signed JSON payload containing user claims, enabling stateless authorization checks across servers.</p>
      </>
    ),
  },
  {
    id: 7188,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is OAuth, and how does it work?",
    answer: (
      <>
        <p>An open authorization standard that grants websites delegated access to user accounts without sharing passwords.</p>
      </>
    ),
  },
  {
    id: 7189,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is Webpack, and why is it used in modern web development?",
    answer: (
      <>
        <p>Webpack is a static module bundler that compiles JavaScript, CSS, and asset files into single web-optimized files.</p>
      </>
    ),
  },
  {
    id: 7190,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain the difference between monolith and microservices architecture.",
    answer: (
      <>
        <ul><li><strong>Monolith:</strong> Single large codebase where all backend modules are deployed together.</li><li><strong>Microservices:</strong> Split into autonomous deployable APIs that communicate via networks.</li></ul>
      </>
    ),
  },
  {
    id: 7191,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is horizontal vs vertical scaling?",
    answer: (
      <>
        <ul><li><strong>Vertical:</strong> Upgrading server CPU, RAM capacity (bigger host).</li><li><strong>Horizontal:</strong> Adding more server hosts to share load (load balancing).</li></ul>
      </>
    ),
  },
  {
    id: 7192,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is a CDN (Content Delivery Network), and how does it improve performance?",
    answer: (
      <>
        <p>Caches static assets on geographically distributed edge servers, reducing distance latency for visitors.</p>
      </>
    ),
  },
  {
    id: 7193,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "How do you handle state management in microfrontends?",
    answer: (
      <>
        <p>State managed via custom browser events, shared pub/sub services, or top-level window state containers.</p>
      </>
    ),
  },
  {
    id: 7194,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is cross-site scripting (XSS), and how can you prevent it?",
    answer: (
      <>
        <p>Injects malicious client-side scripts. Prevent by escaping input data, implementing strict CSP headers.</p>
      </>
    ),
  },
  {
    id: 7195,
    category: 'Full Stack',
    difficulty: 'hard',
    question: "What is Cross-Site Request Forgery (CSRF), and how do you protect against it?",
    answer: (
      <>
        <p>Tricks browsers into executing unauthorized commands. Protect using CSRF tokens or SameSite cookie settings.</p>
      </>
    ),
  },
  {
    id: 7196,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What are SQL injections, and how can they be prevented?",
    answer: (
      <>
        <p>Injects malicious SQL commands via forms. Prevent by using parameterized queries or ORMs.</p>
      </>
    ),
  },
  {
    id: 7197,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "Explain the concept of single sign-on (SSO).",
    answer: (
      <>
        <p>Allows authentication once, granting access across multiple independent software systems securely.</p>
      </>
    ),
  },
  {
    id: 7198,
    category: 'Full Stack',
    difficulty: 'easy',
    question: "What is the purpose of a load balancer?",
    answer: (
      <>
        <p>Distributes incoming traffic across healthy backend server hosts to prevent outages.</p>
      </>
    ),
  },
  {
    id: 7199,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "How does Redis help in caching web application data?",
    answer: (
      <>
        <p>Stores database query results or session states in fast in-memory key-value stores to prevent slow DB lookups.</p>
      </>
    ),
  },
  {
    id: 7200,
    category: 'Full Stack',
    difficulty: 'medium',
    question: "What is the difference between WebSockets and long polling for real-time communication?",
    answer: (
      <>
        <ul><li><strong>WebSockets:</strong> Full-duplex persistent TCP connections.</li><li><strong>Long Polling:</strong> Repeatedly open and hold HTTP requests.</li></ul>
      </>
    ),
  },
];
