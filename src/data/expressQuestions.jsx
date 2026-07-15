import React from 'react';

export const EXPRESS_QUESTIONS = [
  {
    id: 6001,
    category: 'Express.js',
    difficulty: 'easy',
    question: "Explain the meaning of Express.js in MERN?",
    answer: (
      <>
        <p>In the **MERN** stack (MongoDB, Express.js, React, Node.js), <strong>Express.js</strong> is the backend web application framework running inside Node.js. It acts as the middleware server that handles routing, request/response cycles, and exposes RESTful API endpoints for the front-end React application to consume.</p>
      </>
    ),
  },
  {
    id: 6002,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What are some salient features of Express.js?",
    answer: (
      <>
        <p>Salient features of Express.js include:</p>
                <ul>
                  <li>Fast, minimal, and unopinionated framework.</li>
                  <li>Robust routing engine to handle different HTTP methods and URL paths.</li>
                  <li>Easy integration of diverse middleware layers for logging, body parsing, and security.</li>
                  <li>Native integration with popular template engines (Pug, EJS, Mustache).</li>
                </ul>
      </>
    ),
  },
  {
    id: 6003,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is routing in Express.js?",
    answer: (
      <>
        <p><strong>Routing</strong> refers to determining how an application responds to a client request to a particular endpoint (a URI/path) and a specific HTTP request method (GET, POST, PUT, DELETE).</p>
                <p>Example: <code>{`app.get('/users', (req, res) => { ... })`}</code></p>
      </>
    ),
  },
  {
    id: 6004,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is templating in Express.js?",
    answer: (
      <>
        <p><strong>Templating</strong> allows you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual data, compiling it into dynamic HTML sent to the client.</p>
      </>
    ),
  },
  {
    id: 6005,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What do you mean by a cookie? Why use it?",
    answer: (
      <>
        <p>A <strong>Cookie</strong> is a small text file sent from a web server and stored on the client browser. It is used to keep track of user sessions, store user preferences, and track visitor behavior across page views.</p>
      </>
    ),
  },
  {
    id: 6006,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is the meaning of scaffolding?",
    answer: (
      <>
        <p><strong>Scaffolding</strong> is the process of generating a skeleton folder structure with default configurations and directories to kickstart a new software project. In Express, this is typically done using the <code>express-generator</code> tool.</p>
      </>
    ),
  },
  {
    id: 6007,
    category: 'Express.js',
    difficulty: 'easy',
    question: "How can you install Express.js in Node?",
    answer: (
      <>
        <p>You install Express.js in your project directory using npm:</p>
                <p><code>npm install express</code></p>
      </>
    ),
  },
  {
    id: 6008,
    category: 'Express.js',
    difficulty: 'easy',
    question: "Why use Express.js?",
    answer: (
      <>
        <p>Express.js simplifies Node.js development. Writing raw HTTP servers in Node.js requires manual parsing of URLs, bodies, and headers. Express handles this out-of-the-box, saving time and keeping backend code clean.</p>
      </>
    ),
  },
  {
    id: 6009,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What template engines can you use with Express.js?",
    answer: (
      <>
        <p>Common template engines include:</p>
                <ul>
                  <li><strong>Pug</strong> (formerly Jade)</li>
                  <li><strong>EJS</strong> (Embedded JavaScript templates)</li>
                  <li><strong>Handlebars / HBS</strong></li>
                  <li><strong>Mustache</strong></li>
                </ul>
      </>
    ),
  },
  {
    id: 6010,
    category: 'Express.js',
    difficulty: 'medium',
    question: "Highlight the key differences between Express.js and Sails.js?",
    answer: (
      <>
        <p>Key differences include:</p>
                <ul>
                  <li><strong>Express.js:</strong> Minimalist, unopinionated framework. Developers must choose their own databases, folder structures, and ORMs.</li>
                  <li><strong>Sails.js:</strong> An MVC framework built on top of Express. It is highly opinionated, providing a built-in ORM (Waterline) and WebSocket support automatically.</li>
                </ul>
      </>
    ),
  },
  {
    id: 6011,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is a router?",
    answer: (
      <>
        <p>A <strong>Router</strong> in Express is an isolated instance of middleware and routes. It is often referred to as a "mini-application", allowing developers to split routes into separate files to organize large codebases.</p>
      </>
    ),
  },
  {
    id: 6012,
    category: 'Express.js',
    difficulty: 'medium',
    question: "Why is it important to differentiate between programmers and operational errors?",
    answer: (
      <>
        <p>Differentiating error classes determines how you handle them:</p>
                <ul>
                  <li><strong>Operational Errors:</strong> Anticipated runtime issues (e.g., database connection failures, invalid user inputs). The application should catch and handle these gracefully.</li>
                  <li><strong>Programmer Errors:</strong> Bugs or design flaws (e.g., calling undefined functions, syntax errors). The application should log details and restart to prevent unstable states.</li>
                </ul>
      </>
    ),
  },
  {
    id: 6013,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is a Middleware in Express.js?",
    answer: (
      <>
        <p><strong>Middleware</strong> functions are functions that have access to the request object (<code>req</code>), the response object (<code>res</code>), and the next middleware function in the application's request-response cycle.</p>
                <p>They can execute code, modify request/response objects, end the cycle, or call <code>next()</code> to pass control.</p>
      </>
    ),
  },
  {
    id: 6014,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What's the purpose of Express.js Router?",
    answer: (
      <>
        <p>The <code>Router</code> module provides modularity. Instead of defining all routes in <code>server.js</code>, you group related routes (e.g., <code>/api/users</code> or <code>/api/products</code>) into separate sub-route files.</p>
      </>
    ),
  },
  {
    id: 6015,
    category: 'Express.js',
    difficulty: 'medium',
    question: "Explain route parameters in Express.js.",
    answer: (
      <>
        <p>Route parameters are named URL segments used to capture values at specific positions in the URL. They are prefixed with a colon <code>:</code> and accessed via <code>req.params</code>.</p>
                <p>Example: <code>/users/:id</code> allows you to retrieve the ID value using <code>req.params.id</code>.</p>
      </>
    ),
  },
  {
    id: 6016,
    category: 'Express.js',
    difficulty: 'easy',
    question: "How do you work with query parameters in Express.js?",
    answer: (
      <>
        <p>Query parameters are key-value pairs appended after the question mark in a URL (e.g. <code>/search?q=apple</code>). Express parses these automatically, making them accessible via <code>req.query</code> (e.g., <code>req.query.q</code>).</p>
      </>
    ),
  },
  {
    id: 6017,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How can you handle errors in Express.js?",
    answer: (
      <>
        <p>Express handles errors using custom error-handling middleware. An error-handling middleware function is defined with four arguments: <code>(err, req, res, next)</code>. Whenever <code>next(err)</code> is called, Express skips all normal middleware and jumps straight to this error handler.</p>
      </>
    ),
  },
  {
    id: 6018,
    category: 'Express.js',
    difficulty: 'medium',
    question: "Explain the concept of template engines in Express.js.",
    answer: (
      <>
        <p>A template engine compiles files from template syntax into dynamic HTML. You register it using <code>app.set('view engine', 'pug')</code> and render files using <code>res.render('filename', dataObject)</code>.</p>
      </>
    ),
  },
  {
    id: 6019,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is database integration in Express.js?",
    answer: (
      <>
        <p>Express.js does not enforce any database structure. You integrate databases by installing node-drivers or ORMs/ODMs (e.g. <code>mongoose</code> for MongoDB, <code>sequelize</code> for SQL databases) and initializing connections inside the Express application entry point.</p>
      </>
    ),
  },
  {
    id: 6020,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How can you redirect 404 errors to a page in Express.js?",
    answer: (
      <>
        <p>Catch 404 errors by adding a fallback middleware at the very bottom of your route definitions (after all valid routes):</p>
                <pre><code>{`app.use((req, res) => {
          res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
        });`}</code></pre>
      </>
    ),
  },
  {
    id: 6021,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How can you enable debugging in Express.js?",
    answer: (
      <>
        <p>Enable debugging by setting the <code>DEBUG</code> environment variable when launching the node application:</p>
                <p><code>DEBUG=express:* node app.js</code></p>
      </>
    ),
  },
  {
    id: 6022,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is next function? What is its use in Express.js?",
    answer: (
      <>
        <p>The <code>next</code> function is a callback argument passed to middleware. Calling <code>next()</code> tells Express to pass execution control to the next middleware function in the stack. Without it, the request hangs.</p>
      </>
    ),
  },
  {
    id: 6023,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How to config properties in Express.js?",
    answer: (
      <>
        <p>You configure settings using <code>app.set('property', value)</code> and retrieve them using <code>app.get('property')</code>. Common config properties include <code>views</code>, <code>view engine</code>, and <code>trust proxy</code>.</p>
      </>
    ),
  },
  {
    id: 6024,
    category: 'Express.js',
    difficulty: 'easy',
    question: "Whether Express.js is used in frontend or backend development.",
    answer: (
      <>
        <p><strong>Backend development</strong>. Express.js is a server-side framework running inside Node.js on a server host, handling API routing and server-side responses.</p>
      </>
    ),
  },
  {
    id: 6025,
    category: 'Express.js',
    difficulty: 'easy',
    question: "How is Express.js different from Node.js?",
    answer: (
      <>
        <p>Differences include:</p>
                <ul>
                  <li><strong>Node.js:</strong> The underlying JavaScript runtime environment that lets you execute JS on servers.</li>
                  <li><strong>Express.js:</strong> A framework built <em>on top</em> of Node.js that provides web app functionalities like routing and middleware out-of-the-box.</li>
                </ul>
      </>
    ),
  },
  {
    id: 6026,
    category: 'Express.js',
    difficulty: 'medium',
    question: "Explain whether MVC frameworks other than Express.js support scaffolding.",
    answer: (
      <>
        <p>Yes. Many other frameworks (such as Ruby on Rails, Django, and Sails.js) support scaffolding, providing CLI generators to automatically compile controller, model, and view folders.</p>
      </>
    ),
  },
  {
    id: 6027,
    category: 'Express.js',
    difficulty: 'easy',
    question: "Does Express.js support any template engines?",
    answer: (
      <>
        <p>Yes. Supports any template engine that conforms to the consolidate.js template interface (such as Pug, EJS, Handlebars, Mustache).</p>
      </>
    ),
  },
  {
    id: 6028,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is application-level middleware?",
    answer: (
      <>
        <p>Application-level middleware is bound to the main application object (<code>app</code>) using <code>app.use()</code> or <code>app.METHOD()</code>, executing on every request targeting the server.</p>
      </>
    ),
  },
  {
    id: 6029,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is router-level middleware?",
    answer: (
      <>
        <p>Router-level middleware is bound to an instance of <code>express.Router()</code>. It executes only on routes managed by that specific router instance.</p>
      </>
    ),
  },
  {
    id: 6030,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is error-handling middleware?",
    answer: (
      <>
        <p>A middleware function defined with four arguments <code>(err, req, res, next)</code>, used exclusively to process errors thrown by route handlers.</p>
      </>
    ),
  },
  {
    id: 6031,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What an express application generator does?",
    answer: (
      <>
        <p>It generates a pre-configured skeleton folder structure, including directories for views, public static files, routes, and `app.js` server settings.</p>
      </>
    ),
  },
  {
    id: 6032,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is dynamic routing in Express.js?",
    answer: (
      <>
        <p>Dynamic routing relies on route parameters (e.g. <code>/users/:id</code>) to capture variable segments in URLs and match them to dynamic handlers.</p>
      </>
    ),
  },
  {
    id: 6033,
    category: 'Express.js',
    difficulty: 'easy',
    question: "Name some database integrations that Express.js supports.",
    answer: (
      <>
        <p>Express supports MongoDB, PostgreSQL, MySQL, Redis, SQLite, and SQLite3 drivers.</p>
      </>
    ),
  },
  {
    id: 6034,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What are HTTP methods in Express.js?",
    answer: (
      <>
        <p>HTTP methods define the actions being performed: <code>GET</code> (read), <code>POST</code> (create), <code>PUT</code> (update), and <code>DELETE</code> (remove).</p>
      </>
    ),
  },
  {
    id: 6035,
    category: 'Express.js',
    difficulty: 'easy',
    question: "Which extension is needed to save programs in Express.js?",
    answer: (
      <>
        <p>Express apps are written in JavaScript or TypeScript, so they are saved using the <code>.js</code> or <code>.ts</code> extension.</p>
      </>
    ),
  },
  {
    id: 6036,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How to allow CORS in Express.js?",
    answer: (
      <>
        <p>Allow CORS by installing the <code>cors</code> middleware: <br/>
                <code>app.use(cors())</code></p>
      </>
    ),
  },
  {
    id: 6037,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How to render plain HTML in Express.js?",
    answer: (
      <>
        <p>Render plain HTML by calling <code>res.sendFile(path.join(__dirname, 'index.html'))</code> from route handlers.</p>
      </>
    ),
  },
  {
    id: 6038,
    category: 'Express.js',
    difficulty: 'easy',
    question: "When to use app.use() in Express.js?",
    answer: (
      <>
        <p>Use <code>app.use()</code> to register middleware layers (e.g., body parsers, routers, static file servers) that should run for incoming requests.</p>
      </>
    ),
  },
  {
    id: 6039,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How can the Express.js application be structured?",
    answer: (
      <>
        <p>Common structures include controllers/, models/, routes/, and views/ folders to separate concerns and ensure maintainability.</p>
      </>
    ),
  },
  {
    id: 6040,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is the meaning of sanitizing input process in Express.js?",
    answer: (
      <>
        <p>Sanitizing inputs cleans request bodies of harmful script tags or SQL injections before processing, helping secure applications.</p>
      </>
    ),
  },
  {
    id: 6041,
    category: 'Express.js',
    difficulty: 'medium',
    question: "When does a Cross-Origin resource get failed in Express.js?",
    answer: (
      <>
        <p>CORS requests fail if the Express server response headers do not contain the appropriate Access-Control-Allow-Origin matching the client origin domain.</p>
      </>
    ),
  },
  {
    id: 6042,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is the use of response object in Express.js?",
    answer: (
      <>
        <p>The response (<code>res</code>) object is used to send data (HTML, JSON, status codes) back to the client browser.</p>
      </>
    ),
  },
  {
    id: 6043,
    category: 'Express.js',
    difficulty: 'easy',
    question: "Name some third-party middleware provided by Express.js.",
    answer: (
      <>
        <p>Common third-party middleware: <code>cookie-parser</code>, <code>morgan</code> (logging), <code>cors</code>, and <code>body-parser</code>.</p>
      </>
    ),
  },
  {
    id: 6044,
    category: 'Express.js',
    difficulty: 'easy',
    question: "List down some databases with which Express JS is integrated.",
    answer: (
      <>
        <p>Integrates with MongoDB (via Mongoose), PostgreSQL (via pg), MySQL, and Redis.</p>
      </>
    ),
  },
  {
    id: 6045,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What are some popular methods of sanitizing?",
    answer: (
      <>
        <p>Popular methods include using packages like <code>express-validator</code> or <code>dompurify</code> to sanitize inputs before writing them to databases.</p>
      </>
    ),
  },
  {
    id: 6046,
    category: 'Express.js',
    difficulty: 'hard',
    question: "What methods can you call when the Formidable.File objects arise giving the information about the uploaded file?",
    answer: (
      <>
        <p>Formidable File objects expose attributes such as <code>.filepath</code>, <code>.originalFilename</code>, and <code>.mimetype</code> to manage file uploads.</p>
      </>
    ),
  },
  {
    id: 6047,
    category: 'Express.js',
    difficulty: 'medium',
    question: "Why should the Express.js server and app be separated?",
    answer: (
      <>
        <p>Separation allows for easier unit testing using SuperTest (without binding to active ports) and keeps code modular.</p>
      </>
    ),
  },
  {
    id: 6048,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is Event Emitter in Node.js?",
    answer: (
      <>
        <p>An **Event Emitter** is a class in Node.js that enables communication between objects. It emits named events that cause registered listener functions to execute.</p>
      </>
    ),
  },
  {
    id: 6049,
    category: 'Express.js',
    difficulty: 'easy',
    question: "Name some companies that use Express.js.",
    answer: (
      <>
        <p>Companies using Express: Uber, Accenture, IBM, and Twitter.</p>
      </>
    ),
  },
  {
    id: 6050,
    category: 'Express.js',
    difficulty: 'easy',
    question: "How to post a query in Express.js?",
    answer: (
      <>
        <p>Post queries using route handlers (e.g. <code>app.post('/query', handler)</code>), extracting body payloads via <code>req.body</code>.</p>
      </>
    ),
  },
  {
    id: 6051,
    category: 'Express.js',
    difficulty: 'easy',
    question: "Which are the arguments available to an Express JS route handler function?",
    answer: (
      <>
        <p>Route handler arguments: <code>req</code> (request), <code>res</code> (response), and optionally <code>next</code> (callback to pass control).</p>
      </>
    ),
  },
  {
    id: 6052,
    category: 'Express.js',
    difficulty: 'medium',
    question: "Difference between Django and Express.js.",
    answer: (
      <>
        <p>Key differences:</p>
                <ul>
                  <li><strong>Django:</strong> Python-based framework, highly opinionated, "batteries-included" with built-in admin panels and ORMs.</li>
                  <li><strong>Express.js:</strong> JavaScript-based, minimalist, and unopinionated backend middleware.</li>
                </ul>
      </>
    ),
  },
  {
    id: 6053,
    category: 'Express.js',
    difficulty: 'easy',
    question: "How does Express.js handle request and response objects?",
    answer: (
      <>
        <p>It passes them as arguments (<code>req</code>, <code>res</code>) to route handler functions, wrapping native Node.js HTTP objects.</p>
      </>
    ),
  },
  {
    id: 6054,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is the difference between an Express.js server and a traditional server?",
    answer: (
      <>
        <p>Express servers run inside single-threaded non-blocking Node.js engines. Traditional servers (e.g. Apache) run multi-threaded blocking IO engines.</p>
      </>
    ),
  },
  {
    id: 6055,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is a callback function in Express.js?",
    answer: (
      <>
        <p>A callback is a function passed as an argument to another function, which executes when specific tasks (like database queries) finish.</p>
      </>
    ),
  },
  {
    id: 6056,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is the purpose of the req.params object in Express.js?",
    answer: (
      <>
        <p>It contains route parameters (prefixed with colons in routes) to extract values from dynamic URL segments.</p>
      </>
    ),
  },
  {
    id: 6057,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is the role of app.locals object in Express.js?",
    answer: (
      <>
        <p>The <code>app.locals</code> object stores global variables that persist throughout the life of the application, making them accessible in all rendered views.</p>
      </>
    ),
  },
  {
    id: 6058,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How can you handle authentication and authorization in Express.js?",
    answer: (
      <>
        <p>Handle auth using packages like Passport.js or JSON Web Tokens (JWT) inside custom route middleware functions.</p>
      </>
    ),
  },
  {
    id: 6059,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is the role of Express.js' Router module?",
    answer: (
      <>
        <p>Provides isolated routing modules, allowing developers to split routes into multiple files for clean folder structures.</p>
      </>
    ),
  },
  {
    id: 6060,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is the difference between custom middleware and built-in middleware in Express.js?",
    answer: (
      <>
        <p>Differences include:</p>
                <ul>
                  <li><strong>Built-in:</strong> Middleware shipped directly with Express (e.g. <code>express.static</code>, <code>express.json</code>).</li>
                  <li><strong>Custom:</strong> Developer-written middleware targeting specific logic (e.g. authorization verification).</li>
                </ul>
      </>
    ),
  },
  {
    id: 6061,
    category: 'Express.js',
    difficulty: 'easy',
    question: "How can you serve static files in Express.js?",
    answer: (
      <>
        <p>Serve static files (images, CSS, JS) by using the built-in <code>express.static</code> middleware:</p>
                <p><code>app.use(express.static('public'))</code></p>
      </>
    ),
  },
  {
    id: 6062,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is the use of app.all() function in Express.js?",
    answer: (
      <>
        <p>The <code>app.all()</code> function registers a handler that executes for all HTTP methods (GET, POST, etc.) on a specific path, useful for general middlewares.</p>
      </>
    ),
  },
  {
    id: 6063,
    category: 'Express.js',
    difficulty: 'medium',
    question: "Explain the concept of body parsing in Express.js.",
    answer: (
      <>
        <p>Body parsing translates incoming request payloads (like JSON) into readable JavaScript objects, accessed via <code>req.body</code>.</p>
      </>
    ),
  },
  {
    id: 6064,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is the purpose of the res.send() function?",
    answer: (
      <>
        <p>Sends HTTP responses. It accepts buffers, strings, or objects and sets appropriate Content-Type headers automatically.</p>
      </>
    ),
  },
  {
    id: 6065,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How does Express.js handle sessions?",
    answer: (
      <>
        <p>Sessions are managed using third-party middleware like <code>express-session</code> to sign session cookies and store state on servers.</p>
      </>
    ),
  },
  {
    id: 6066,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is the purpose of res.json() function in Express.js?",
    answer: (
      <>
        <p>Sends JSON responses (converting JavaScript arrays or objects) and sets the Content-Type header to <code>application/json</code>.</p>
      </>
    ),
  },
  {
    id: 6067,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How do you implement security best practices in an Express.js application?",
    answer: (
      <>
        <p>Security enhancements include using Helmet, setting rate limits, escaping query inputs, and disabling the <code>x-powered-by</code> header.</p>
      </>
    ),
  },
  {
    id: 6068,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is the role of Helmet middleware in Express.js?",
    answer: (
      <>
        <p>Helmet is a third-party security middleware that sets diverse HTTP response headers (HSTS, CSP, etc.) to harden server endpoints.</p>
      </>
    ),
  },
  {
    id: 6069,
    category: 'Express.js',
    difficulty: 'easy',
    question: "Explain compression middleware in Express.js.",
    answer: (
      <>
        <p>Compression middleware (using the <code>compression</code> package) gzips response payloads, reducing transmission size and speeding up loading times.</p>
      </>
    ),
  },
  {
    id: 6070,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How can you implement rate limiting in Express.js?",
    answer: (
      <>
        <p>Implement rate limits using packages like <code>express-rate-limit</code> to limit requests from single IP addresses over time intervals.</p>
      </>
    ),
  },
  {
    id: 6071,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is the difference between res.send() and res.end()?",
    answer: (
      <>
        <p>Differences include:</p>
                <ul>
                  <li><code>res.send()</code>: Sends data, sets headers, and closes response automatically.</li>
                  <li><code>res.end()</code>: Closes the response immediately without sending any payload data.</li>
                </ul>
      </>
    ),
  },
  {
    id: 6072,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How do you handle file structure for large-scale Express.js applications?",
    answer: (
      <>
        <p>Structure using MVC layout folders: <code>controllers/</code>, <code>models/</code>, <code>routes/</code>, <code>middleware/</code>, and <code>config/</code>.</p>
      </>
    ),
  },
  {
    id: 6073,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is CORS, and how do you configure it in Express.js?",
    answer: (
      <>
        <p>CORS stands for Cross-Origin Resource Sharing. It is configured using the `cors` package to allow frontend domains to query APIs.</p>
      </>
    ),
  },
  {
    id: 6074,
    category: 'Express.js',
    difficulty: 'hard',
    question: "What are signed cookies in Express.js?",
    answer: (
      <>
        <p>Cookies containing HMAC signatures validated using a server secret, preventing client modification or tampering.</p>
      </>
    ),
  },
  {
    id: 6075,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How can you pass data from one middleware to another?",
    answer: (
      <>
        <p>Pass data by attaching custom fields to the request (<code>req</code>) object, or storing them in the <code>res.locals</code> variable.</p>
      </>
    ),
  },
  {
    id: 6076,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is the purpose of the res.render() function?",
    answer: (
      <>
        <p>Compiles views from registered template engines and sends the compiled dynamic HTML payload back to the client.</p>
      </>
    ),
  },
  {
    id: 6077,
    category: 'Express.js',
    difficulty: 'medium',
    question: "How can you test an Express.js application?",
    answer: (
      <>
        <p>Test applications using testing frameworks like Mocha, Jest, or Jasmine, combined with assertion libraries and API runners.</p>
      </>
    ),
  },
  {
    id: 6078,
    category: 'Express.js',
    difficulty: 'medium',
    question: "What is the role of SuperTest in testing Express.js apps?",
    answer: (
      <>
        <p>SuperTest simulates HTTP request sequences targeting Express applications without binding to live TCP ports, speeding up testing.</p>
      </>
    ),
  },
  {
    id: 6079,
    category: 'Express.js',
    difficulty: 'easy',
    question: "How do you manage environment variables in Express.js?",
    answer: (
      <>
        <p>Manage configurations using the <code>dotenv</code> package to read values from a <code>.env</code> file into <code>process.env</code>.</p>
      </>
    ),
  },
  {
    id: 6080,
    category: 'Express.js',
    difficulty: 'easy',
    question: "What is RESTful API and how can you implement it using Express.js?",
    answer: (
      <>
        <p>A RESTful API is an API architecture style representing resource states. In Express, you implement it using methods: <code>app.get()</code>, <code>app.post()</code>, <code>app.put()</code>, and <code>app.delete()</code>.</p>
      </>
    ),
  },
];
