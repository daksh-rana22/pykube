import React from 'react';

export const MERN_STACK_QUESTIONS = [
  {
    id: 14001,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Explain how ReactJS works.",
    answer: (
      <>
        <p><strong>ReactJS</strong> uses a component-based architecture where each component maintains its state. It utilizes a <strong>Virtual DOM</strong> to optimize DOM updates: when state changes, React builds a new virtual representation, compares it with the previous one (reconciliation), and updates only the modified elements in the real DOM.</p>
      </>
    ),
  },
  {
    id: 14002,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What are the props in ReactJS?",
    answer: (
      <>
        <p><strong>Props</strong> (short for properties) are read-only inputs passed from a parent component to a child component, allowing components to remain reusable and dynamic.</p>
      </>
    ),
  },
  {
    id: 14003,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What are the benefits of ReactJS?",
    answer: (
      <>
        <p>Benefits: declarative syntax, Virtual DOM for fast rendering, component-based reusability, unidirectional data flow, and strong ecosystem support (Hooks, Redux, React Native).</p>
      </>
    ),
  },
  {
    id: 14004,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is a Virtual DOM?",
    answer: (
      <>
        <p>A lightweight in-memory representation of the real DOM. React updates the Virtual DOM first, runs diffing algorithms to identify changes, and selectively patches the real DOM to improve rendering performance.</p>
      </>
    ),
  },
  {
    id: 14005,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Define the key features of MongoDB.",
    answer: (
      <>
        <p>Key features: document-oriented storage (BSON), dynamic schema flexibility, high availability via replication, horizontal scalability via sharding, and rich aggregation query frameworks.</p>
      </>
    ),
  },
  {
    id: 14006,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "How is ReactJS different from AngularJS?",
    answer: (
      <>
        <ul><li><strong>ReactJS:</strong> A frontend library focusing only on the View layer, uses Virtual DOM, unidirectional data binding, and JSX.</li><li><strong>AngularJS:</strong> A full MVC framework, uses real DOM, two-way data binding, and TypeScript syntax.</li></ul>
      </>
    ),
  },
  {
    id: 14007,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What do you mean by replication in MongoDB?",
    answer: (
      <>
        <p>Replication synchronizes data copies across multiple MongoDB server nodes (Replica Sets), providing data redundancy, automated failovers, and disaster recovery protection.</p>
      </>
    ),
  },
  {
    id: 14008,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is the main difference between a functional component & a class component?",
    answer: (
      <>
        <ul><li><strong>Functional Component:</strong> Plain JS functions accepting props and returning JSX. Hooks are used to manage state.</li><li><strong>Class Component:</strong> ES6 classes extending React.Component, managing state via <code>this.state</code> and lifecycle methods.</li></ul>
      </>
    ),
  },
  {
    id: 14009,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What are the key features of Node.js?",
    answer: (
      <>
        <p>Features: built on V8 engines, asynchronous event-driven, single-threaded but highly concurrent via the Event Loop, non-blocking I/O, and rich npm package repositories.</p>
      </>
    ),
  },
  {
    id: 14010,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Mention some limitations of ReactJS.",
    answer: (
      <>
        <p>Limitations: only covers the UI View layer (requires third-party routers/state managers), fast-paced updates deprecate libraries quickly, and writing JSX has a learning curve for some designers.</p>
      </>
    ),
  },
  {
    id: 14011,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is the meaning of Asynchronous API?",
    answer: (
      <>
        <p>An API that returns control immediately while performing work in the background, executing callbacks or resolving Promises once tasks finish, without blocking threads.</p>
      </>
    ),
  },
  {
    id: 14012,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What do you mean by Callback Hell?",
    answer: (
      <>
        <p>A nesting pattern of asynchronous callbacks that makes code unreadable and hard to maintain, forming deep triangular structures.</p>
      </>
    ),
  },
  {
    id: 14013,
    category: 'MERN Stack',
    difficulty: 'hard',
    question: "What is the meaning of Reconciliation?",
    answer: (
      <>
        <p>Reconciliation is React's O(N) heuristic algorithm that compares the new Virtual DOM tree with the previous one, determining how to patch the real DOM efficiently.</p>
      </>
    ),
  },
  {
    id: 14014,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Why is the use of Redux?",
    answer: (
      <>
        <p>Redux provides a predictable, centralized global state container for JavaScript apps, managing shared states across deep component hierarchies.</p>
      </>
    ),
  },
  {
    id: 14015,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What is the difference between an Element & a Component in ReactJS?",
    answer: (
      <>
        <ul><li><strong>Element:</strong> A plain object describing a DOM node (e.g. <code>const el = &lt;div&gt;Hello&lt;/div&gt;</code>).</li><li><strong>Component:</strong> A function or class that accepts inputs and returns React elements.</li></ul>
      </>
    ),
  },
  {
    id: 14016,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "When to embed a document within another in MongoDB?",
    answer: (
      <>
        <p>Embed documents when relationships are 1-to-1 or 1-to-many where child data is always read along with parent data, keeping operations atomic within single documents.</p>
      </>
    ),
  },
  {
    id: 14017,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Does MongoDB support Foreign Key Constraints?",
    answer: (
      <>
        <p>No. MongoDB does not enforce relational integrity constraints. Developers enforce relationships using manual document references (ObjectId) or application logic.</p>
      </>
    ),
  },
  {
    id: 14018,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What are the benefits of BSON in MongoDB?",
    answer: (
      <>
        <p>BSON supports fast traversal, is lightweight to serialize/deserialize, and includes primitive data types like Date and raw binary data JSON lacks.</p>
      </>
    ),
  },
  {
    id: 14019,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "How does Node.js prevent the blocking code?",
    answer: (
      <>
        <p>By delegating system I/O (files, networks) to the system kernel or background threads, registering callback handlers executed when tasks complete.</p>
      </>
    ),
  },
  {
    id: 14020,
    category: 'MERN Stack',
    difficulty: 'hard',
    question: "How to achieve transaction & locking in MongoDB?",
    answer: (
      <>
        <p>MongoDB supports multi-document ACID transactions using Sessions. Use standard session APIs: <br/> <code>const session = client.startSession(); session.startTransaction();</code></p>
      </>
    ),
  },
  {
    id: 14021,
    category: 'MERN Stack',
    difficulty: 'hard',
    question: "Specify how Node.js handles child threads.",
    answer: (
      <>
        <p>Node.js runs single-threaded by default, but handles parallel CPU-intensive tasks using the <code>worker_threads</code> module or spawning sub-processes using the <code>child_process</code> module.</p>
      </>
    ),
  },
  {
    id: 14022,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Specify the reason if Node.js is single-threaded and how it handles concurrency.",
    answer: (
      <>
        <p>Single-threaded design reduces memory overheads and context switches. It handles thousands of concurrent connections using non-blocking event loops, routing finished operations to event queues.</p>
      </>
    ),
  },
  {
    id: 14023,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What are Pure Components?",
    answer: (
      <>
        <p>A React component that performs shallow comparisons of props and state before rendering, avoiding unnecessary re-renders (similar to `React.memo` for functional components).</p>
      </>
    ),
  },
  {
    id: 14024,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Define React Hooks.",
    answer: (
      <>
        <p>Functions introduced in React 16.8 that allow functional components to hook into state, lifecycle events, and context (e.g. <code>useState</code>, <code>useEffect</code>).</p>
      </>
    ),
  },
  {
    id: 14025,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Mention some benefits of using React Hooks.",
    answer: (
      <>
        <p>Benefits: reuse stateful logic without changing component hierarchies, avoid writing classes, and group related sidebar codes cleanly.</p>
      </>
    ),
  },
  {
    id: 14026,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What is the meaning of Aggregation in MongoDB?",
    answer: (
      <>
        <p>Processing multiple documents to calculate computed results (using operators like <code>$match</code>, <code>$group</code>, <code>$sort</code>) within pipeline stages.</p>
      </>
    ),
  },
  {
    id: 14027,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What do you mean by JSX?",
    answer: (
      <>
        <p><strong>JSX</strong> stands for <strong>JavaScript XML</strong>. It is a syntax extension for JavaScript that allows writing HTML-like structures directly inside React source code.</p>
      </>
    ),
  },
  {
    id: 14028,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is ReactDOM?",
    answer: (
      <>
        <p>The package that provides DOM-specific methods, serving as the entry point to mount React components onto browsers (e.g. <code>ReactDOM.createRoot()</code>).</p>
      </>
    ),
  },
  {
    id: 14029,
    category: 'MERN Stack',
    difficulty: 'hard',
    question: "Explain the method of Sharding in MongoDB.",
    answer: (
      <>
        <p>Sharding distributes collection data across multiple shards (servers) using shard keys, scaling databases horizontally to support massive write volumes.</p>
      </>
    ),
  },
  {
    id: 14030,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What is a Stream? Mention different types of Streams available in Node.js.",
    answer: (
      <>
        <p>Streams read or write data incrementally. Types include: Readable (to read), Writable (to write), Duplex (both), and Transform (modifies data as it writes).</p>
      </>
    ),
  },
  {
    id: 14031,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Define the Blocking Code.",
    answer: (
      <>
        <p>Code that blocks subsequent executions until it finishes (e.g. synchronous file reads: <code>fs.readFileSync()</code>).</p>
      </>
    ),
  },
  {
    id: 14032,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What do you mean by prop drilling & how can you avoid it?",
    answer: (
      <>
        <p>Prop drilling is passing props down through multiple layers of components that don't need them. Avoid it using React Context or Redux.</p>
      </>
    ),
  },
  {
    id: 14033,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Mention the difference between ShadowDOM & VirtualDOM.",
    answer: (
      <>
        <ul><li><strong>ShadowDOM:</strong> A browser technology for encapsulating styles and markup in Web Components.</li><li><strong>VirtualDOM:</strong> An in-memory JavaScript representation of the DOM used to optimize React renders.</li></ul>
      </>
    ),
  },
  {
    id: 14034,
    category: 'MERN Stack',
    difficulty: 'hard',
    question: "What are the differences between useRef & createRef?",
    answer: (
      <>
        <ul><li><code>createRef</code>: Always returns a new ref object on every render (used in class components).</li><li><code>useRef</code>: Returns the same persistent ref object across renders (used in functional components).</li></ul>
      </>
    ),
  },
  {
    id: 14035,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Comparison between a smart component & a dumb component?",
    answer: (
      <>
        <ul><li><strong>Smart (Container):</strong> Manages states, API fetches, and passes data to child components.</li><li><strong>Dumb (Presentational):</strong> Accepts props and renders UI elements.</li></ul>
      </>
    ),
  },
  {
    id: 14036,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Explain the functioning of React.",
    answer: (
      <>
        <p>React renders components to the Virtual DOM, diffs it with the previous snapshot, and updates only the differences in the real browser DOM.</p>
      </>
    ),
  },
  {
    id: 14037,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Can you provide a description of Mongoose?",
    answer: (
      <>
        <p>Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages validations, relationships, and schema translations easily.</p>
      </>
    ),
  },
  {
    id: 14038,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Define Asynchronous API and its relevance in Node.js.",
    answer: (
      <>
        <p>An API that schedules operations in the background and returns control instantly, allowing Node to handle concurrent requests efficiently.</p>
      </>
    ),
  },
  {
    id: 14039,
    category: 'MERN Stack',
    difficulty: 'hard',
    question: "Differentiate between process.nextTick() and setImmediate().",
    answer: (
      <>
        <ul><li><code>process.nextTick()</code>: Executes callbacks immediately at the end of the current operation, before the event loop continues.</li><li><code>setImmediate()</code>: Executes callbacks in the Check phase of the event loop.</li></ul>
      </>
    ),
  },
  {
    id: 14040,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Explain the concept of Higher Order Components (HOC).",
    answer: (
      <>
        <p>A Higher-Order Component is a pattern where a function takes a component and returns a new component with enhanced capabilities (e.g. <code>withRouter</code>).</p>
      </>
    ),
  },
  {
    id: 14041,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "How does Node.js prevent blocking code execution?",
    answer: (
      <>
        <p>Delegates execution to kernel pools (libuv), returning inputs to event queues once finished without blocking scripts.</p>
      </>
    ),
  },
  {
    id: 14042,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Provide the abbreviations for MERN.",
    answer: (
      <>
        <p>MongoDB, Express.js, ReactJS, and Node.js.</p>
      </>
    ),
  },
  {
    id: 14043,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Explain the concept of the Event Loop in Node.js.",
    answer: (
      <>
        <p>The single-threaded loop that checks the call stack, executing callbacks from the task queue once the stack is clean.</p>
      </>
    ),
  },
  {
    id: 14044,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Define the term ''I/O'' in the context of programming.",
    answer: (
      <>
        <p>Input/Output, representing data transfers (e.g. Reading files, calling APIs, querying databases) between applications and systems.</p>
      </>
    ),
  },
  {
    id: 14045,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Explain the concept of ''control stream'' in programming.",
    answer: (
      <>
        <p>Managing execution orders of asynchronous code blocks (using Promises, callback queues, or async/await) to maintain consistency.</p>
      </>
    ),
  },
  {
    id: 14046,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is Dependency Injection and what role does it play in software design?",
    answer: (
      <>
        <p>A design pattern that supplies dependencies externally instead of instantiating them internally, increasing testability and loose coupling.</p>
      </>
    ),
  },
  {
    id: 14047,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What are the distinctions between Class components and Functional components?",
    answer: (
      <>
        <p>Class components use ES6 classes and lifecycle methods. Functional components use functions and React Hooks.</p>
      </>
    ),
  },
  {
    id: 14048,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Explain the difference between invoking and returning a callback.",
    answer: (
      <>
        <p>Invoking executes the callback function. Returning passes the callback function reference to outer functions without running it.</p>
      </>
    ),
  },
  {
    id: 14049,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "How can you implement transactions in MongoDB?",
    answer: (
      <>
        <p>Implement using MongoDB Sessions: start a session, begin a transaction, execute database updates within the session, and commit.</p>
      </>
    ),
  },
  {
    id: 14050,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "How can you use the like operator to query MongoDB?",
    answer: (
      <>
        <p>Query using regular expressions (Regex) in queries: <br/> <code>db.users.find({"{"} name: /john/i {"}"})</code></p>
      </>
    ),
  },
  {
    id: 14051,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "How do you convert promise-based Node.js applications to use async/await?",
    answer: (
      <>
        <p>Decorate containing functions with <code>async</code>, and replace <code>.then()</code> loops with <code>await</code> variables, wrapping operations in try-catch.</p>
      </>
    ),
  },
  {
    id: 14052,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Explain the significance of using keys in lists and their benefits in React.",
    answer: (
      <>
        <p>Keys help React identify which items have changed, been added, or been removed, optimizing list re-renders.</p>
      </>
    ),
  },
  {
    id: 14053,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Can you elaborate on the MongoDB Aggregation Pipeline?",
    answer: (
      <>
        <p>A framework where documents pass through a sequence of stages (pipeline), with each stage transforming the output results.</p>
      </>
    ),
  },
  {
    id: 14054,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is the Event Loop, and how does it function?",
    answer: (
      <>
        <p>Coordinates event executions, checking call stacks and executing callback cues once the call stack is empty.</p>
      </>
    ),
  },
  {
    id: 14055,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "How can you apply prop validation in ReactJS?",
    answer: (
      <>
        <p>Apply using the <code>prop-types</code> library, declaring component validations: <br/> <code>MyComponent.propTypes = {"{"} name: PropTypes.string {"}"};</code></p>
      </>
    ),
  },
  {
    id: 14056,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Is it possible to use Classes in Node.js?",
    answer: (
      <>
        <p>Yes. Node.js supports ES6 class definitions natively since JavaScript supports prototype configurations.</p>
      </>
    ),
  },
  {
    id: 14057,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "How can you update a MongoDB field using the value of another field?",
    answer: (
      <>
        <p>Use the aggregation framework in update operations since MongoDB 4.2: <br/> <code>db.users.updateMany({"{"}{"}"}, [{"{"} $set: {"{"} fullname: {"{"} $concat: ['$first', ' ', '$last'] {"}"} {"}"} {"}"}])</code></p>
      </>
    ),
  },
  {
    id: 14058,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is the purpose of using super(props) in React?",
    answer: (
      <>
        <p>Invokes the parent class constructor (React.Component) to initialize and bind the <code>this</code> context inside subclass constructors.</p>
      </>
    ),
  },
  {
    id: 14059,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "In which scenarios should you avoid using Node.js?",
    answer: (
      <>
        <p>Avoid Node.js for heavy CPU-bound tasks (image processing, video rendering) since its single-threaded design blocks the event loop.</p>
      </>
    ),
  },
  {
    id: 14060,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "When should you choose Redis over MongoDB, or vice versa?",
    answer: (
      <>
        <ul><li><strong>Redis:</strong> Ideal for fast in-memory key-value lookups, session states, and caching.</li><li><strong>MongoDB:</strong> Ideal for complex document storage, indexing, and aggregation workflows.</li></ul>
      </>
    ),
  },
  {
    id: 14061,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Why is it necessary to bind event handlers to ''this'' in React?",
    answer: (
      <>
        <p>Because JavaScript class methods do not bind <code>this</code> context by default. Functions passed as handlers lose their reference context unless bound or defined as arrow functions.</p>
      </>
    ),
  },
  {
    id: 14062,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What is the significance of a Covered Query in MongoDB?",
    answer: (
      <>
        <p>A query that can be resolved entirely using index keys, returning results without parsing any database documents on disk.</p>
      </>
    ),
  },
  {
    id: 14063,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Could you provide more details or context about the specific code sample you're referring to?",
    answer: (
      <>
        <p>Refers to matching code samples, configurations, or schemas in the MERN environment. Ask for details if specific snippets are questioned.</p>
      </>
    ),
  },
  {
    id: 14064,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "How does the V8 engine compile JavaScript code?",
    answer: (
      <>
        <p>Compiles JavaScript directly into native machine code at runtime (Just-In-Time) using ignition interpreters and turbofan compilers.</p>
      </>
    ),
  },
  {
    id: 14065,
    category: 'MERN Stack',
    difficulty: 'hard',
    question: "How does libuv work beneath the surface in Node.js?",
    answer: (
      <>
        <p><strong>libuv</strong> is a multi-platform support library providing asynchronous I/O. It manages thread pools for file operations and handles network loops.</p>
      </>
    ),
  },
  {
    id: 14066,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "How can you find a document with an array containing a specific value in MongoDB?",
    answer: (
      <>
        <p>Query using standard keys: <br/> <code>db.users.find({"{"} tags: 'admin' {"}"})</code>. MongoDB automatically matches array elements.</p>
      </>
    ),
  },
  {
    id: 14067,
    category: 'MERN Stack',
    difficulty: 'hard',
    question: "In the CAP theorem, where does MongoDB stand?",
    answer: (
      <>
        <p>MongoDB is a **CP** system (Consistency and Partition Tolerance). It prioritizes consistency, blocking writes during primary node elections.</p>
      </>
    ),
  },
  {
    id: 14068,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What is the advantage of separating an Express app and server in Node.js?",
    answer: (
      <>
        <p>Enables running tests on the app code cleanly using supertest without starting server port listeners, keeping components modular.</p>
      </>
    ),
  },
  {
    id: 14069,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What does ''Asynchronous API'' mean?",
    answer: (
      <>
        <p>An API that returns control immediately while performing tasks in the background, invoking callback logs upon completion.</p>
      </>
    ),
  },
  {
    id: 14070,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Do Hooks in React replace the need for render props and higher-order components (HOCs)?",
    answer: (
      <>
        <p>Yes. Hooks solve the problems of sharing stateful logic in simpler ways without nesting or wrapping components.</p>
      </>
    ),
  },
  {
    id: 14071,
    category: 'MERN Stack',
    difficulty: 'hard',
    question: "What does the ''Reactor Pattern'' entail in Node.js?",
    answer: (
      <>
        <p>The core non-blocking I/O pattern where event handlers register operations, and event demultiplexers dispatch completed tasks back to handlers.</p>
      </>
    ),
  },
  {
    id: 14072,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "How can async/await be used in Node.js?",
    answer: (
      <>
        <p>Used to write asynchronous code that reads like synchronous lines, returning implicit Promises from containing functions.</p>
      </>
    ),
  },
  {
    id: 14073,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What are Node.js streams?",
    answer: (
      <>
        <p>Data handling streams that read or write inputs chunk-by-chunk to prevent RAM overload during file operations.</p>
      </>
    ),
  },
  {
    id: 14074,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "How are Node.js buffers used?",
    answer: (
      <>
        <p>Buffers allocate memory outside the V8 heap to store and handle raw binary datasets (e.g. Image or file reads).</p>
      </>
    ),
  },
  {
    id: 14075,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What is the role of middleware in software development?",
    answer: (
      <>
        <p>Executes during request-response cycles to validate configurations, log payloads, or parse requests before routing.</p>
      </>
    ),
  },
  {
    id: 14076,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Explain the Methods to perform the operations on Buffer.",
    answer: (
      <>
        <p>Methods include: <code>Buffer.alloc(size)</code>, <code>Buffer.from(string)</code>, <code>buf.write(string)</code>, and <code>buf.toString()</code>.</p>
      </>
    ),
  },
  {
    id: 14077,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "How many types of API functions are there in Node.js?",
    answer: (
      <>
        <p>Two main types: Synchronous functions (block thread execution) and Asynchronous functions (non-blocking, use callbacks/Promises).</p>
      </>
    ),
  },
  {
    id: 14078,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is REPL?",
    answer: (
      <>
        <p>Read-Eval-Print Loop. The interactive shell environment used to run and test JavaScript code snippets locally.</p>
      </>
    ),
  },
  {
    id: 14079,
    category: 'MERN Stack',
    difficulty: 'hard',
    question: "List down the two arguments that `async.queue` takes as input?",
    answer: (
      <>
        <p>It takes: a worker callback function to execute on queue tasks, and the concurrency limit value (maximum parallel workers).</p>
      </>
    ),
  },
  {
    id: 14080,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is the purpose of `module.exports`?",
    answer: (
      <>
        <p>Defines the exports returned by a module file when imported in other scripts using <code>require()</code>.</p>
      </>
    ),
  },
  {
    id: 14081,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What tools can be used to assure consistent code style in Node.js?",
    answer: (
      <>
        <p>Linting utilities like <code>ESLint</code> and formatting tools like <code>Prettier</code> enforce consistent styles.</p>
      </>
    ),
  },
  {
    id: 14082,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "How does Node.js overcome the problem of blocking I/O operations?",
    answer: (
      <>
        <p>Node delegates operations to the system kernel or background threads (libuv), returning inputs to event queues once finished.</p>
      </>
    ),
  },
  {
    id: 14083,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "How do you create a simple server in Node.js that returns Hello World?",
    answer: (
      <>
        <p>Use http: <br/> <code>const http = require('http'); http.createServer((q, r) =&gt; r.end('Hello World')).listen(3000);</code></p>
      </>
    ),
  },
  {
    id: 14084,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What is fork in Node.js?",
    answer: (
      <>
        <p>A method in the <code>child_process</code> module that spawns a new Node.js instance to run parallel scripts, establishing IPC communication channels.</p>
      </>
    ),
  },
  {
    id: 14085,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is a first class function in Javascript?",
    answer: (
      <>
        <p>Functions are treated as variables, meaning they can be passed as arguments, returned from other functions, and assigned to variables.</p>
      </>
    ),
  },
  {
    id: 14086,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is Node.js and how does it work?",
    answer: (
      <>
        <p>An open-source server environment executing JS. It works by running an event loop to handle non-blocking concurrent operations.</p>
      </>
    ),
  },
  {
    id: 14087,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "How do you manage packages in your Node.js project?",
    answer: (
      <>
        <p>Manage packages using package manager tools like <code>npm</code> or <code>yarn</code>, tracking versions in package.json.</p>
      </>
    ),
  },
  {
    id: 14088,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "How is Node.js better than other frameworks that are most popularly used?",
    answer: (
      <>
        <p>Offers fast processing via V8, non-blocking I/O for heavy connections, unified JS scripting, and a large package repository.</p>
      </>
    ),
  },
  {
    id: 14089,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Explain how Control Flow controls function calls?",
    answer: (
      <>
        <p>Determines call sequences in asynchronous scripts, using callbacks, Promises, or async/await to execute code in the correct order.</p>
      </>
    ),
  },
  {
    id: 14090,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What are some commonly used timing features of Node.js?",
    answer: (
      <>
        <p>Timing functions: <code>setTimeout()</code> (delay execution), <code>setInterval()</code> (repeat execution), and <code>setImmediate()</code>.</p>
      </>
    ),
  },
  {
    id: 14091,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What are the advantages of using promises instead of callbacks?",
    answer: (
      <>
        <p>Promises prevent callback hell, make error handling cleaner with <code>catch()</code>, and improve code readability.</p>
      </>
    ),
  },
  {
    id: 14092,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What are the different ways to style a React component?",
    answer: (
      <>
        <p>Style using inline CSS, external CSS stylesheets, CSS Modules, or CSS-in-JS libraries (Styled Components).</p>
      </>
    ),
  },
  {
    id: 14093,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Name a few techniques to optimize React app performance.",
    answer: (
      <>
        <p>Optimizations: memoize components with <code>React.memo</code>, lazy load routes with <code>React.lazy</code>, and keep state local to prevent global re-renders.</p>
      </>
    ),
  },
  {
    id: 14094,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "How to pass data between React components?",
    answer: (
      <>
        <p>Pass data down using props. Pass data up using parent callbacks. Share data globally using Context or Redux.</p>
      </>
    ),
  },
  {
    id: 14095,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What are the different phases of the component lifecycle?",
    answer: (
      <>
        <p>Three phases: Mounting (initializing DOM nodes), Updating (updating state/props), and Unmounting (cleaning up components).</p>
      </>
    ),
  },
  {
    id: 14096,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "Explain React state and props.",
    answer: (
      <>
        <ul><li><strong>State:</strong> Internal variable data managed and modified within the component itself.</li><li><strong>Props:</strong> External read-only data passed from parent components.</li></ul>
      </>
    ),
  },
  {
    id: 14097,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "Explain about types of side effects in React component.",
    answer: (
      <>
        <p>Effects include: fetching API data, modifying the document title, subscribing to socket servers, or setting timer delays.</p>
      </>
    ),
  },
  {
    id: 14098,
    category: 'MERN Stack',
    difficulty: 'medium',
    question: "What are error boundaries?",
    answer: (
      <>
        <p>Class components that catch JavaScript errors anywhere in their child component tree, rendering fallback UIs instead of crashing the app.</p>
      </>
    ),
  },
  {
    id: 14099,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What are the rules that must be followed while using React Hooks?",
    answer: (
      <>
        <p>Rules: only call Hooks at the top level (not inside loops or conditions), and only call Hooks from React Function components.</p>
      </>
    ),
  },
  {
    id: 14100,
    category: 'MERN Stack',
    difficulty: 'easy',
    question: "What is the use of useEffect React Hooks?",
    answer: (
      <>
        <p>Handles side effects (data fetching, DOM modifications) in functional components, executing after renders complete.</p>
      </>
    ),
  },
];
