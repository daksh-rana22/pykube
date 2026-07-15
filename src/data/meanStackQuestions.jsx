import React from 'react';

export const MEAN_STACK_QUESTIONS = [
  {
    id: 13001,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is the MEAN Stack?",
    answer: (
      <>
        <p>The <strong>MEAN Stack</strong> is a free, open-source JavaScript software stack for building dynamic websites and web applications. It consists of: <strong>M</strong>ongoDB (database), <strong>E</strong>xpress.js (web framework), <strong>A</strong>ngular (frontend framework), and <strong>N</strong>ode.js (runtime environment).</p>
      </>
    ),
  },
  {
    id: 13002,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What are the advantages of using MEAN Stack?",
    answer: (
      <>
        <p>Advantages include: using a single language (JavaScript/TypeScript) across the entire stack, highly MVC-compliant architecture, high performance and scalability via Node.js, and a JSON-like document store (MongoDB) that matches JavaScript objects naturally.</p>
      </>
    ),
  },
  {
    id: 13003,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is the purpose of using MEAN Stack?",
    answer: (
      <>
        <p>The purpose is to accelerate web application development by leveraging unified JavaScript components, reducing context switching for developers, and facilitating cloud deployments with JSON-centric data exchanges.</p>
      </>
    ),
  },
  {
    id: 13004,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is REPL in Node.js?",
    answer: (
      <>
        <p><strong>REPL</strong> stands for <strong>Read-Eval-Print Loop</strong>. It is an interactive computer environment (like a shell/terminal) that takes single user inputs, evaluates them, and returns the result, useful for testing JavaScript code snippets.</p>
      </>
    ),
  },
  {
    id: 13005,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "How AngularJS is different from Node.js?",
    answer: (
      <>
        <ul><li><strong>AngularJS (Angular):</strong> A client-side frontend JavaScript framework running in the user's browser to build dynamic user interfaces.</li><li><strong>Node.js:</strong> A server-side JavaScript runtime built on Chrome's V8 engine used to execute server scripts and host APIs.</li></ul>
      </>
    ),
  },
  {
    id: 13006,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is Routing Guard in Angular?",
    answer: (
      <>
        <p>A <strong>Route Guard</strong> is an Angular interface (like CanActivate, CanDeactivate) that controls navigation, permitting or blocking access to specific route paths based on conditions (e.g. check if user is authenticated).</p>
      </>
    ),
  },
  {
    id: 13007,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is BSON in MongoDB?",
    answer: (
      <>
        <p><strong>BSON</strong> stands for <strong>Binary JSON</strong>. It is a binary-serialized format used by MongoDB to store documents and perform remote procedure calls, extending JSON to support data types like Date and raw binary data.</p>
      </>
    ),
  },
  {
    id: 13008,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is a blocking code?",
    answer: (
      <>
        <p>Blocking code refers to operations that block the execution of subsequent lines of code in the single thread until they finish (e.g. synchronous file reads: <code>fs.readFileSync()</code>).</p>
      </>
    ),
  },
  {
    id: 13009,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "Define DATA modeling?",
    answer: (
      <>
        <p>Data modeling is the process of creating a structured schema layout for data collections (in MongoDB, usually using Mongoose) to define property types, validations, and document relations.</p>
      </>
    ),
  },
  {
    id: 13010,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is a bug \u2013 first request?",
    answer: (
      <>
        <p>In Node.js asynchronous development, callbacks follow an <strong>error-first</strong> pattern where the first argument is reserved for an error object, checking it before processing success data: <code>(err, data) =&gt; {"{"} ... {"}"}</code>.</p>
      </>
    ),
  },
  {
    id: 13011,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is a Dependency Injection?",
    answer: (
      <>
        <p>Dependency Injection (DI) is a design pattern where class dependencies are supplied externally (injected) rather than instantiated internally. Angular uses a built-in DI system to inject services into components.</p>
      </>
    ),
  },
  {
    id: 13012,
    category: 'MEAN Stack',
    difficulty: 'hard',
    question: "How are child threads handled in Node.js?",
    answer: (
      <>
        <p>Node.js runs single-threaded by default, but handles parallel CPU-intensive tasks using the <code>worker_threads</code> module or spawning sub-processes using the <code>child_process</code> module.</p>
      </>
    ),
  },
  {
    id: 13013,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How TypeScript is optionally statically typed language?",
    answer: (
      <>
        <p>Because TypeScript introduces static type definitions but compiles down to standard dynamic JavaScript. Type checking is done at compile-time, and you can bypass strict checks using the <code>any</code> type.</p>
      </>
    ),
  },
  {
    id: 13014,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What's the difference between a Blue/Green Deployment and a Rolling Deployment?",
    answer: (
      <>
        <ul><li><strong>Blue/Green:</strong> Running two identical environments (Blue active, Green staging). We route traffic to Green once tests pass, allowing instant rollbacks.</li><li><strong>Rolling:</strong> Gradually updating old application instances with new versions across servers, minimizing resource overhead.</li></ul>
      </>
    ),
  },
  {
    id: 13015,
    category: 'MEAN Stack',
    difficulty: 'hard',
    question: "What's a test pyramid? By what method may you complete it while talking about HTTP APIs?",
    answer: (
      <>
        <p>The Test Pyramid classifies test tiers: many Unit Tests (bottom), moderate Integration/API Tests (middle), and few End-to-End Tests (top). For HTTP APIs, test endpoints using supertest (integration) and mock DB services.</p>
      </>
    ),
  },
  {
    id: 13016,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What Is Mongoose?",
    answer: (
      <>
        <p><strong>Mongoose</strong> is a schemas-based Object Data Modeling (ODM) library for MongoDB and Node.js. It manages validations, relationships, and schema translations easily.</p>
      </>
    ),
  },
  {
    id: 13017,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "Explain the main difference between REST and GraphQL?",
    answer: (
      <>
        <ul><li><strong>REST:</strong> Organizes resources around URL endpoints, returning fixed payloads that can lead to over/under-fetching.</li><li><strong>GraphQL:</strong> Single query endpoint where clients request specific JSON fields, fetching exactly what is needed.</li></ul>
      </>
    ),
  },
  {
    id: 13018,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "Define AOT and what are its benefits?",
    answer: (
      <>
        <p><strong>Ahead-of-Time (AOT) compilation</strong> compiles Angular templates at build time rather than runtime in browsers. Benefits: faster rendering, smaller bundle sizes, and early template error detection.</p>
      </>
    ),
  },
  {
    id: 13019,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is \u201cDecorators\u201d in TypeScript?",
    answer: (
      <>
        <p>Decorators (prefixed with <code>@</code>) are special annotations that modify or configure classes, methods, or properties at definition time (e.g. <code>@Component</code> in Angular).</p>
      </>
    ),
  },
  {
    id: 13020,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What purpose do Indexes serve in MongoDB?",
    answer: (
      <>
        <p>Indexes speed up document lookup queries by saving small ordered data pointers, preventing expensive full collection scans.</p>
      </>
    ),
  },
  {
    id: 13021,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What are the key differences between REST and GraphQL APIs?",
    answer: (
      <>
        <p>REST uses multiple HTTP verbs (GET, POST) and endpoints. GraphQL uses a single POST endpoint with schemas describing custom data shapes.</p>
      </>
    ),
  },
  {
    id: 13022,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How can you deploy a MEAN Stack application?",
    answer: (
      <>
        <p>Deploy by containerizing components via Docker, hosting MongoDB on MongoDB Atlas, deploying Express/Node APIs to AWS/Heroku, and hosting Angular static builds on CDN buckets (AWS S3/Vercel).</p>
      </>
    ),
  },
  {
    id: 13023,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is CORS, and how do you handle it in Express.js?",
    answer: (
      <>
        <p>Cross-Origin Resource Sharing. Handle it by importing and configuring the <code>cors</code> middleware in Express to allow specific origin requests.</p>
      </>
    ),
  },
  {
    id: 13024,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "Explain the concept of Promises in Node.js and how they are used.",
    answer: (
      <>
        <p>Promises represent values that will resolve or reject in the future, replacing nested callbacks with chained <code>.then().catch()</code> blocks.</p>
      </>
    ),
  },
  {
    id: 13025,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How can you improve the performance of a MEAN stack application?",
    answer: (
      <>
        <p>Improvements: enable database indexing, utilize Redis caching, compress payloads using gzip, bundle/minify Angular builds, and use PM2 clustering.</p>
      </>
    ),
  },
  {
    id: 13026,
    category: 'MEAN Stack',
    difficulty: 'hard',
    question: "What is Angular Universal, and why would you use it?",
    answer: (
      <>
        <p>Angular Universal renders Angular templates on servers (SSR) before sending static HTML to clients, improving SEO and initial page load speed.</p>
      </>
    ),
  },
  {
    id: 13027,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "Explain the concept of middleware in Express.js.",
    answer: (
      <>
        <p>Middleware functions execute during request-response cycles, accessing <code>req</code> and <code>res</code> objects to validate tokens or log payloads before passing control to routers.</p>
      </>
    ),
  },
  {
    id: 13028,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "Specify commonly used IDEs for Node.JS development?",
    answer: (
      <>
        <p>VS Code, WebStorm, Sublime Text, and Atom are widely used IDEs.</p>
      </>
    ),
  },
  {
    id: 13029,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is Scope in JavaScript?",
    answer: (
      <>
        <p>Scope determines the accessibility/visibility of variables and functions in different parts of the code at runtime.</p>
      </>
    ),
  },
  {
    id: 13030,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "Name the different types of scope.",
    answer: (
      <>
        <p>Global Scope, Function Scope, and Block Scope (enforced by let and const inside curly braces).</p>
      </>
    ),
  },
  {
    id: 13031,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is Containerization?",
    answer: (
      <>
        <p>Bundling applications along with their dependencies, system tools, and libraries into single lightweight containers (Docker) running isolated environments.</p>
      </>
    ),
  },
  {
    id: 13032,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What are the benefits of Containerization in MERN Stack?",
    answer: (
      <>
        <p>Ensures consistency across dev/staging/prod environments, eliminates configuration issues, and facilitates microservice scaling.</p>
      </>
    ),
  },
  {
    id: 13033,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What are the differences between Classes and Interfaces in TypeScript?",
    answer: (
      <>
        <ul><li><strong>Class:</strong> Blueprint defining structure and implementation, compiling to JavaScript functions.</li><li><strong>Interface:</strong> Virtual type contract defining structure only, stripped away during compilation.</li></ul>
      </>
    ),
  },
  {
    id: 13034,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What do you understand by callback in Node.js?",
    answer: (
      <>
        <p>A callback is a function passed as an argument that runs once an asynchronous I/O operation (like reading directories) completes.</p>
      </>
    ),
  },
  {
    id: 13035,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is Cross-site Scripting (XSS)?",
    answer: (
      <>
        <p>A vulnerability where attackers inject malicious scripts into trusted websites, executing code in unsuspecting users' browsers.</p>
      </>
    ),
  },
  {
    id: 13036,
    category: 'MEAN Stack',
    difficulty: 'hard',
    question: "Explain different types of XSS.",
    answer: (
      <>
        <ul><li><strong>Stored XSS:</strong> Scripts are saved on databases and run when users visit the page.</li><li><strong>Reflected XSS:</strong> Scripts are reflected off HTTP responses immediately.</li><li><strong>DOM-based XSS:</strong> Scripts modify the DOM tree client-side.</li></ul>
      </>
    ),
  },
  {
    id: 13037,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What are the benefits of using AOT compiler?",
    answer: (
      <>
        <p>Benefits: faster rendering speed, smaller script size, prevents template injection exploits, and displays template errors at build time.</p>
      </>
    ),
  },
  {
    id: 13038,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is Grid System in CSS?",
    answer: (
      <>
        <p>A layout method based on rows and columns that makes it easy to design responsive, aligned user interfaces.</p>
      </>
    ),
  },
  {
    id: 13039,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What are the key components of Grid System?",
    answer: (
      <>
        <p>Grid Container (parent element setting <code>display: grid</code>), Grid Lines, Grid Tracks, and Grid Items (immediate children).</p>
      </>
    ),
  },
  {
    id: 13040,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is NPM of Node.js?",
    answer: (
      <>
        <p>Node Package Manager. It is the default package manager for Node.js, storing open-source package repositories online.</p>
      </>
    ),
  },
  {
    id: 13041,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is the difference between binary and linear research?",
    answer: (
      <>
        <ul><li><strong>Linear Search:</strong> Scans elements sequentially. Works on unsorted arrays, time complexity O(N).</li><li><strong>Binary Search:</strong> Divide-and-conquer search. Requires sorted arrays, time complexity O(log N).</li></ul>
      </>
    ),
  },
  {
    id: 13042,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What are the functions of Dependency Injection?",
    answer: (
      <>
        <p>Functions: separates object creation from usage, increases testability via mock services, and facilitates code reusability.</p>
      </>
    ),
  },
  {
    id: 13043,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How BSON is it related to JSON?",
    answer: (
      <>
        <p>BSON is a binary serialization of JSON-like document shapes. It offers faster traversal and supports date/binary types JSON lacks.</p>
      </>
    ),
  },
  {
    id: 13044,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How to handle errors in Express.js applications?",
    answer: (
      <>
        <p>Handle errors using error-handling middleware containing four parameters: <code>(err, req, res, next) =&gt; {"{"} ... {"}"}</code>, catching exceptions thrown in routes.</p>
      </>
    ),
  },
  {
    id: 13045,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What are the key features that differentiate Angular from other JavaScript frameworks?",
    answer: (
      <>
        <p>Differentiating features: full framework with built-in HTTP client, routing modules, forms validations, and dependency injection systems.</p>
      </>
    ),
  },
  {
    id: 13046,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is callback hell?",
    answer: (
      <>
        <p>A scenario where heavily nested asynchronous callbacks make code hard to read and debug, forming a pyramid shape.</p>
      </>
    ),
  },
  {
    id: 13047,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "How do you avoid callback hell in Node.js?",
    answer: (
      <>
        <p>Avoid by refactoring code to use Promises, modular helper functions, or adopting <code>async/await</code> syntax.</p>
      </>
    ),
  },
  {
    id: 13048,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What are streams in Node.js?",
    answer: (
      <>
        <p>Streams are interfaces to read/write data incrementally (e.g. file streaming), preventing RAM exhaustion on large files.</p>
      </>
    ),
  },
  {
    id: 13049,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is non-blocking I/O in Node.js?",
    answer: (
      <>
        <p>Operations that delegate system execution (like database queries) to the system kernel, continuing JS script lines instantly.</p>
      </>
    ),
  },
  {
    id: 13050,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "Difference between blocking and non-blocking I/O in Node.js?",
    answer: (
      <>
        <p>Blocking pauses thread execution until actions complete, while non-blocking registers callbacks and proceeds immediately.</p>
      </>
    ),
  },
  {
    id: 13051,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What are some common deployment strategies for a MEAN application?",
    answer: (
      <>
        <p>Strategies: deploying to cloud platforms (AWS, Azure), using Docker swarm/Kubernetes, and serving Angular builds on CDN networks.</p>
      </>
    ),
  },
  {
    id: 13052,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What are some popular tools and libraries used in the MEAN ecosystem?",
    answer: (
      <>
        <p>Tools: Mongoose (ODM), PM2 (process monitor), RxJS (reactive extensions), Angular CLI, nodemon, and Helmet security.</p>
      </>
    ),
  },
  {
    id: 13053,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is server-side rendering (SSR)?",
    answer: (
      <>
        <p>Renders complete HTML pages on the web server side before serving them, improving search engine crawlability and perceived load times.</p>
      </>
    ),
  },
  {
    id: 13054,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What are the key advantages of SSR?",
    answer: (
      <>
        <p>Advantages: rich search engine indexing (SEO), faster initial content paint (FCP), and optimal user experience on slow network connections.</p>
      </>
    ),
  },
  {
    id: 13055,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "Explain the aggregation framework in MongoDB.",
    answer: (
      <>
        <p>A multi-stage pipeline query framework that processes data collections to return calculated results (similar to GROUP BY in SQL).</p>
      </>
    ),
  },
  {
    id: 13056,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "Name some common Aggregation Framework Operators?",
    answer: (
      <>
        <p>Operators: <code>$match</code> (filtering), <code>$group</code> (aggregations), <code>$project</code> (field reshapes), <code>$sort</code>, and <code>$lookup</code> (joins).</p>
      </>
    ),
  },
  {
    id: 13057,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is a document in MongoDB?",
    answer: (
      <>
        <p>The unit of data record storage in MongoDB, consisting of key-value field structures represented as BSON objects.</p>
      </>
    ),
  },
  {
    id: 13058,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is Event Emitter of Node.js?",
    answer: (
      <>
        <p>A class in Node's `events` module that facilitates communication between objects, triggering callbacks on named event fires.</p>
      </>
    ),
  },
  {
    id: 13059,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What are the functionalities of Event Emitter?",
    answer: (
      <>
        <p>Functionalities: registering listeners (<code>on()</code>), firing named events (<code>emit()</code>), and removing active event listeners.</p>
      </>
    ),
  },
  {
    id: 13060,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "How to create a basic server using Express.js?",
    answer: (
      <>
        <p>Initialize and listen: <br/> <code>const express = require('express'); const app = express(); app.listen(3000);</code></p>
      </>
    ),
  },
  {
    id: 13061,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "Name some commonly used DevOps Tools.",
    answer: (
      <>
        <p>Tools: Docker, Kubernetes, Jenkins, Git, Ansible, Terraform, and PM2 monitoring utilities.</p>
      </>
    ),
  },
  {
    id: 13062,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is a module in Angular?",
    answer: (
      <>
        <p>A class decorated with <code>@NgModule</code> that consolidates related components, directives, and services into self-contained code blocks.</p>
      </>
    ),
  },
  {
    id: 13063,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is the role of Angular?",
    answer: (
      <>
        <p>Provides the client-side user interface layer, managing views, layouts, user input routing, and dynamic data-binding.</p>
      </>
    ),
  },
  {
    id: 13064,
    category: 'MEAN Stack',
    difficulty: 'hard',
    question: "What is Sharding in MongoDB?",
    answer: (
      <>
        <p><strong>Sharding</strong> is MongoDB's database scaling method. It distributes collection datasets across multiple physical servers (shards) to support huge write loads.</p>
      </>
    ),
  },
  {
    id: 13065,
    category: 'MEAN Stack',
    difficulty: 'hard',
    question: "What are the key components of Sharding in MongoDB?",
    answer: (
      <>
        <p>Components: Shards (store data subsets), Config Servers (store metadata mappings), and Mongos (query routers directing requests).</p>
      </>
    ),
  },
  {
    id: 13066,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "How to create a new collection in MongoDB?",
    answer: (
      <>
        <p>Created implicitly upon inserting the first document, or explicitly using: <br/> <code>db.createCollection('name')</code></p>
      </>
    ),
  },
  {
    id: 13067,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is the purpose of indexing in MongoDB?",
    answer: (
      <>
        <p>Enables MongoDB to quickly locate target documents without parsing entire collections, optimizing read operations.</p>
      </>
    ),
  },
  {
    id: 13068,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How to backup and restore a MongoDB database?",
    answer: (
      <>
        <p>Backup using: <code>mongodump --db dbname</code>. Restore configurations using command line utilities: <code>mongorestore --db dbname /backupdir</code>.</p>
      </>
    ),
  },
  {
    id: 13069,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is body-parser middleware?",
    answer: (
      <>
        <p>Middleware that extracts incoming request body payloads, parsing them to make fields accessible under <code>req.body</code>.</p>
      </>
    ),
  },
  {
    id: 13070,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "How to create a simple HTTP server using Node.js?",
    answer: (
      <>
        <p>Use http module: <br/> <code>const http = require('http'); http.createServer((req, res) =&gt; res.end('Hello')).listen(3000);</code></p>
      </>
    ),
  },
  {
    id: 13071,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How to handle authentication and security in the MEAN stack?",
    answer: (
      <>
        <p>Implement authentication using JSON Web Tokens (JWT), secure connections via HTTPS, hash passwords using bcrypt, and set security headers using Helmet.</p>
      </>
    ),
  },
  {
    id: 13072,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is the concept of Single Page Applications?",
    answer: (
      <>
        <p>Websites that load a single HTML shell, dynamically updating content elements without full browser page reloads.</p>
      </>
    ),
  },
  {
    id: 13073,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "How SPAs are related to MEAN Stack?",
    answer: (
      <>
        <p>Angular provides client-side SPA routing, while Express/Node act as headless APIs fetching JSON data from MongoDB.</p>
      </>
    ),
  },
  {
    id: 13074,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How does Angular handle two-way data binding?",
    answer: (
      <>
        <p>Via model-view synchronization using <code>[()]</code> syntax (ngModel), updating models on view edits and updating views on model changes.</p>
      </>
    ),
  },
  {
    id: 13075,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "Explain the components of MEAN stack.",
    answer: (
      <>
        <p>MongoDB (database), Express (server framework), Angular (UI client), and Node (V8 JavaScript execution server).</p>
      </>
    ),
  },
  {
    id: 13076,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is the difference between AngularJS and Angular (2+)?",
    answer: (
      <>
        <ul><li><strong>AngularJS:</strong> Legacy JavaScript framework using controller scopes (<code>$scope</code>).</li><li><strong>Angular (2+):</strong> Modern TypeScript framework using component-based structures and modules.</li></ul>
      </>
    ),
  },
  {
    id: 13077,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How do you handle authorization in a MEAN stack application?",
    answer: (
      <>
        <p>Assign roles to JWT tokens, verifying access permissions inside Express router middlewares and protecting client views using Angular Route Guards.</p>
      </>
    ),
  },
  {
    id: 13078,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What are observables in Angular?",
    answer: (
      <>
        <p>A class from RxJS that handles asynchronous event streams, allowing subscribers to receive data updates over time.</p>
      </>
    ),
  },
  {
    id: 13079,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How to prevent CSRF in Express.js?",
    answer: (
      <>
        <p>Prevent Cross-Site Request Forgery by generating anti-CSRF tokens using the <code>csurf</code> middleware validation libraries.</p>
      </>
    ),
  },
  {
    id: 13080,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "How does MongoDB differ from traditional SQL databases?",
    answer: (
      <>
        <p>MongoDB stores flexible JSON-like documents without strict schemas, whereas SQL databases use tabular relations, foreign keys, and predefined schemas.</p>
      </>
    ),
  },
  {
    id: 13081,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is the role of the callback function in Node.js?",
    answer: (
      <>
        <p>Asynchronous step validation: callback functions run once background file or system inputs finish executing, preventing process blocking.</p>
      </>
    ),
  },
  {
    id: 13082,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What is replication in MongoDB?",
    answer: (
      <>
        <p>Synchronizing data copies across multiple MongoDB server nodes (Replica Sets) to ensure high availability and failover protection.</p>
      </>
    ),
  },
  {
    id: 13083,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What are the benefits of replication in MongoDB?",
    answer: (
      <>
        <p>Benefits: automated failovers (primary node elections), disaster recovery protection, and read scaling from secondary nodes.</p>
      </>
    ),
  },
  {
    id: 13084,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is the difference between SPA and traditional web applications?",
    answer: (
      <>
        <p>SPAs fetch partial JSON payloads to update specific page components, whereas traditional applications fetch fully rendered HTML pages from servers.</p>
      </>
    ),
  },
  {
    id: 13085,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is the use of the Express.js framework?",
    answer: (
      <>
        <p>Express handles REST routes, parses request bodies, sets session cookies, and handles HTTP responses securely.</p>
      </>
    ),
  },
  {
    id: 13086,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "Explain the architecture of the MEAN stack.",
    answer: (
      <>
        <p>Client (Angular UI)  &rarr;  requests  &rarr;  API server (Express/Node)  &rarr;  queries  &rarr;  Database (MongoDB). Responses flow back in reverse.</p>
      </>
    ),
  },
  {
    id: 13087,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What do you mean by the Event Loop in Node.js?",
    answer: (
      <>
        <p>The core single-threaded loop running inside Node that coordinates non-blocking operations, checking and running callback tasks.</p>
      </>
    ),
  },
  {
    id: 13088,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How does Node.js handle concurrency despite being single-threaded?",
    answer: (
      <>
        <p>By delegating system I/O execution to system kernels or thread pools (libuv), returning inputs to event queues once finished.</p>
      </>
    ),
  },
  {
    id: 13089,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is dependency injection in Angular?",
    answer: (
      <>
        <p>A design pattern where Angular instantiates and provides service instances to components automatically via decorators.</p>
      </>
    ),
  },
  {
    id: 13090,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What are the advantages of Dependency Injection in Angular?",
    answer: (
      <>
        <p>Advantages: decoupled code, shared singleton service instances across components, and easy unit testing using mock classes.</p>
      </>
    ),
  },
  {
    id: 13091,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is Mongoose Schema?",
    answer: (
      <>
        <p>A class configuration structure mapping MongoDB document properties to JavaScript objects, specifying data rules.</p>
      </>
    ),
  },
  {
    id: 13092,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "How do you define a Schema in Mongoose?",
    answer: (
      <>
        <p>Define using new instance structures: <br/> <code>const userSchema = new mongoose.Schema({"{"} name: String {"}"});</code></p>
      </>
    ),
  },
  {
    id: 13093,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What are angular directives? Name some built-in directives.",
    answer: (
      <>
        <p>Annotations modifying DOM elements. Examples: structural (<code>*ngIf</code>, <code>*ngFor</code>) and attribute directives (<code>ngClass</code>, <code>ngStyle</code>).</p>
      </>
    ),
  },
  {
    id: 13094,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What are the differences between SQL and NoSQL databases?",
    answer: (
      <>
        <ul><li><strong>SQL:</strong> Relational tables, fixed schemas, structured query language, vertical scaling.</li><li><strong>NoSQL:</strong> Document collections, dynamic schemas, no SQL requirement, horizontal scaling.</li></ul>
      </>
    ),
  },
  {
    id: 13095,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "How to handle file uploads in Express.js?",
    answer: (
      <>
        <p>Handle file uploads using middleware like <code>multer</code> to parse multipart/form-data payloads and save files to directories.</p>
      </>
    ),
  },
  {
    id: 13096,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "What is the purpose of the package.json file?",
    answer: (
      <>
        <p>Saves project metadata configurations, scripts command shortcuts (start, test), and required package dependencies.</p>
      </>
    ),
  },
  {
    id: 13097,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "How does Angular handle routing?",
    answer: (
      <>
        <p>Via the Angular Router module, configuring route path mappings to components to update views dynamically.</p>
      </>
    ),
  },
  {
    id: 13098,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "Explain the concept of model-view-controller (MVC) architecture.",
    answer: (
      <>
        <ul><li><strong>Model:</strong> Manages database states and configurations.</li><li><strong>View:</strong> Renders visual components to users.</li><li><strong>Controller:</strong> Handles route changes and business logic.</li></ul>
      </>
    ),
  },
  {
    id: 13099,
    category: 'MEAN Stack',
    difficulty: 'easy',
    question: "How does MEAN Stack support MVC architecture?",
    answer: (
      <>
        <p>MongoDB handles Model logic, Angular handles View renderings, and Express/Node APIs handle Controller logic.</p>
      </>
    ),
  },
  {
    id: 13100,
    category: 'MEAN Stack',
    difficulty: 'medium',
    question: "What are some security best practices for a Node.js/Express.js application?",
    answer: (
      <>
        <p>Best practices: sanitize input scripts, enforce HTTPS connections, disable default response headers (x-powered-by), set rate limit policies, and authenticate routes.</p>
      </>
    ),
  },
];
