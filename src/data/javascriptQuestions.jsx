import React from 'react';

export const JAVASCRIPT_QUESTIONS = [
  {
    id: 10001,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is JavaScript?",
    answer: (
      <>
        <p><strong>JavaScript</strong> is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is best known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js.</p>
      </>
    ),
  },
  {
    id: 10002,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the difference between Java & JavaScript?",
    answer: (
      <>
        <ul><li><strong>Java:</strong> An OOP programming language, compiled to bytecode running on JVM, strongly typed.</li><li><strong>JavaScript:</strong> A scripting language, interpreted/JIT compiled, running in browser or Node, dynamically typed.</li></ul>
      </>
    ),
  },
  {
    id: 10003,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What are the data types supported by JavaScript?",
    answer: (
      <>
        <p>Primitive types: <code>Number</code>, <code>String</code>, <code>Boolean</code>, <code>Undefined</code>, <code>Null</code>, <code>Symbol</code>, and <code>BigInt</code>. Non-primitive/complex types: <code>Object</code> (including Arrays and Functions).</p>
      </>
    ),
  },
  {
    id: 10004,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What are the features of JavaScript?",
    answer: (
      <>
        <p>Features: light weight, interpreted, object-oriented capabilities, event-driven handling, client-side validation, and asynchronous processing.</p>
      </>
    ),
  },
  {
    id: 10005,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What are the scopes of a variable in JavaScript?",
    answer: (
      <>
        <p>Variable scopes:</p><ul><li><strong>Global Scope:</strong> Accessible everywhere.</li><li><strong>Function Scope:</strong> Declared inside a function, accessible only within it (var).</li><li><strong>Block Scope:</strong> Declared inside curly braces {"{"}{"}"}, accessible only within that block (let, const).</li></ul>
      </>
    ),
  },
  {
    id: 10006,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is the purpose of \u2018This\u2019 operator in JavaScript?",
    answer: (
      <>
        <p>The <code>this</code> keyword refers to the object that is executing the current function context, determined dynamically based on function call types.</p>
      </>
    ),
  },
  {
    id: 10007,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is Callback?",
    answer: (
      <>
        <p>A callback is a function passed to another function as an argument, executed later to complete some operation.</p>
      </>
    ),
  },
  {
    id: 10008,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "How does Type Of Operator work?",
    answer: (
      <>
        <p>The <code>typeof</code> operator returns a string indicating the type of the unevaluated operand (e.g. <code>typeof 'hello'</code> returns <code>'string'</code>).</p>
      </>
    ),
  },
  {
    id: 10009,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "How to create a cookie using JavaScript?",
    answer: (
      <>
        <p>Write to <code>document.cookie</code> object: <br/> <code>document.cookie = 'username=JohnDoe; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/';</code></p>
      </>
    ),
  },
  {
    id: 10010,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What are the ways to define a variable in JavaScript?",
    answer: (
      <>
        <p>Declare variables using <code>var</code> (function scoped), <code>let</code> (block scoped), and <code>const</code> (block scoped, read-only constant).</p>
      </>
    ),
  },
  {
    id: 10011,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the difference between null & undefined?",
    answer: (
      <>
        <ul><li><code>undefined</code>: A variable has been declared but has not yet been assigned a value.</li><li><code>null</code>: An assignment value representing the intentional absence of any object value.</li></ul>
      </>
    ),
  },
  {
    id: 10012,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is an event bubbling in JavaScript?",
    answer: (
      <>
        <p>Event bubbling is a type of event propagation where an event triggers on the innermost target element and then bubbles up through its parent ancestors in the DOM tree.</p>
      </>
    ),
  },
  {
    id: 10013,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is NaN in JavaScript?",
    answer: (
      <>
        <p><strong>NaN</strong> stands for 'Not-a-Number'. It is a property of the global object representing an invalid mathematical calculation result.</p>
      </>
    ),
  },
  {
    id: 10014,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is a prompt box in JavaScript?",
    answer: (
      <>
        <p>A popup dialog box that prompts users to input text values, returning the string value or null if cancelled.</p>
      </>
    ),
  },
  {
    id: 10015,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What are the different types of errors in JavaScript?",
    answer: (
      <>
        <p>Types: SyntaxError, ReferenceError, TypeError, RangeError, URIError, and EvalError.</p>
      </>
    ),
  },
  {
    id: 10016,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What are the various functional components in JavaScript?",
    answer: (
      <>
        <p>Components include standard declarations, function expressions, arrow functions, generator functions, and immediately invoked functional expressions (IIFE).</p>
      </>
    ),
  },
  {
    id: 10017,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What are escape characters in JavaScript?",
    answer: (
      <>
        <p>Special characters prefixed with a backslash to escape string literal characters (e.g. <code>\n</code> for new line, <code>\t</code> for tab).</p>
      </>
    ),
  },
  {
    id: 10018,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What do you understand by hoisting in JavaScript?",
    answer: (
      <>
        <p>Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope during compilation.</p>
      </>
    ),
  },
  {
    id: 10019,
    category: 'JavaScript',
    difficulty: 'hard',
    question: "What is a Temporal Dead Zone?",
    answer: (
      <>
        <p>The **Temporal Dead Zone (TDZ)** is the period between variable binding initialization (block entry) and declaration point, where accessing let/const variables throws ReferenceErrors.</p>
      </>
    ),
  },
  {
    id: 10020,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is BOM?",
    answer: (
      <>
        <p><strong>BOM</strong> (Browser Object Model) is a collection of browser objects provided by runtimes (like window, location, screen, history) outside the document itself.</p>
      </>
    ),
  },
  {
    id: 10021,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "How can you prevent JavaScript code from running before the page is fully loaded?",
    answer: (
      <>
        <p>Include scripts using <code>defer</code> or <code>async</code> tags, or bind logic to <code>window.onload</code> or <code>DOMContentLoaded</code> events.</p>
      </>
    ),
  },
  {
    id: 10022,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is the purpose of this keyword in JavaScript?",
    answer: (
      <>
        <p>Refers to the context object executing the function. In global contexts, it points to the window object.</p>
      </>
    ),
  },
  {
    id: 10023,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "Explain the difference between == and === in JavaScript.",
    answer: (
      <>
        <ul><li><code>==</code>: Loose equality operator comparing values after applying implicit type coercion.</li><li><code>===</code>: Strict equality operator comparing both values and types without coercion.</li></ul>
      </>
    ),
  },
  {
    id: 10024,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is the purpose of the async/await keywords in JavaScript?",
    answer: (
      <>
        <p>Provides cleaner syntax to resolve Promises sequentially without nesting `.then()` loops.</p>
      </>
    ),
  },
  {
    id: 10025,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the difference between let, const, and var in variable declaration?",
    answer: (
      <>
        <ul><li><code>var</code>: Function scoped, hoist-initialized to undefined.</li><li><code>let</code>: Block scoped, uninitialized (TDZ).</li><li><code>const</code>: Block scoped, uninitialized, read-only reassignment check.</li></ul>
      </>
    ),
  },
  {
    id: 10026,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "Explain the concept of closures in JavaScript.",
    answer: (
      <>
        <p>A closure lets inner functions access outer function variables even after the outer function execution context is removed.</p>
      </>
    ),
  },
  {
    id: 10027,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is the Event Loop in JavaScript?",
    answer: (
      <>
        <p>The mechanism coordinating script executions, processing callback task queues once call stacks are clean.</p>
      </>
    ),
  },
  {
    id: 10028,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "How to delete a cookie using JavaScript?",
    answer: (
      <>
        <p>Delete cookies by writing cookie name sets with expiration dates set to past time values (e.g. <code>expires=Thu, 01 Jan 1970 00:00:00 UTC;</code>).</p>
      </>
    ),
  },
  {
    id: 10029,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the use of debugger in JavaScript?",
    answer: (
      <>
        <p>The <code>debugger</code> statement pauses code execution and launches debugging tools if developer tools are active in browsers.</p>
      </>
    ),
  },
  {
    id: 10030,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is Implicit Type Coercion?",
    answer: (
      <>
        <p>Automatic implicit value conversions performed by JavaScript compilers during evaluations (e.g. adding numbers and strings).</p>
      </>
    ),
  },
  {
    id: 10031,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is the difference between Attributes and Property?",
    answer: (
      <>
        <ul><li><strong>Attribute:</strong> Defined in HTML source code tags (e.g. <code>value='initial'</code>).</li><li><strong>Property:</strong> Live DOM object attributes accessed via JS (e.g. <code>element.value</code>).</li></ul>
      </>
    ),
  },
  {
    id: 10032,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What are the ways in which a JavaScript code can be involved in an HTML file?",
    answer: (
      <>
        <p>Involved via inline script attributes, internal <code>&lt;script&gt;</code> blocks, or importing external <code>.js</code> files.</p>
      </>
    ),
  },
  {
    id: 10033,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "Define Higher-order functions in JavaScript.",
    answer: (
      <>
        <p>Functions that accept other functions as arguments or return functions as output results (e.g. map, filter).</p>
      </>
    ),
  },
  {
    id: 10034,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What do you mean by a Typed Language?",
    answer: (
      <>
        <p>Languages where data types are explicitly declared and checked. JavaScript is dynamically typed, checking types only at runtime.</p>
      </>
    ),
  },
  {
    id: 10035,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "Difference between Local storage & Session storage?",
    answer: (
      <>
        <ul><li><code>localStorage</code>: Persists indefinitely across sessions.</li><li><code>sessionStorage</code>: Cleared when browser tab closes.</li></ul>
      </>
    ),
  },
  {
    id: 10036,
    category: 'JavaScript',
    difficulty: 'hard',
    question: "What is currying in JavaScript programming?",
    answer: (
      <>
        <p>Currying translates single functions with multiple arguments into sequence evaluation chains of nested single-argument functions.</p>
      </>
    ),
  },
  {
    id: 10037,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "Difference between undeclared & undefined?",
    answer: (
      <>
        <ul><li><strong>Undeclared:</strong> Variables not declared at all, throwing ReferenceErrors.</li><li><strong>Undefined:</strong> Variables declared but not assigned any values.</li></ul>
      </>
    ),
  },
  {
    id: 10038,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is the difference between Call & Apply?",
    answer: (
      <>
        <ul><li><code>call()</code>: Invokes functions using comma-separated argument lists.</li><li><code>apply()</code>: Invokes functions using arguments passed inside arrays.</li></ul>
      </>
    ),
  },
  {
    id: 10039,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "Difference between Function declaration and Function expression?",
    answer: (
      <>
        <ul><li><strong>Declaration:</strong> Hoisted completely, can be called before declaration.</li><li><strong>Expression:</strong> Saved inside variables, not hoisted until lines execute.</li></ul>
      </>
    ),
  },
  {
    id: 10040,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What are cookies in JavaScript?",
    answer: (
      <>
        <p>Small browser-stored text datasets containing key-value configurations sent back to servers in request headers.</p>
      </>
    ),
  },
  {
    id: 10041,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What are the arrow functions in JavaScript?",
    answer: (
      <>
        <p>Shorthand syntax for function declarations, which lexically bind the <code>this</code> context of parent scopes.</p>
      </>
    ),
  },
  {
    id: 10042,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the difference between Window and Document in JavaScript?",
    answer: (
      <>
        <ul><li><code>window</code>: The global browser tab container object enclosing BOM properties.</li><li><code>document</code>: The root DOM tree node representing the loaded page HTML.</li></ul>
      </>
    ),
  },
  {
    id: 10043,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is the use of a constructor function?",
    answer: (
      <>
        <p>Constructor functions initialize new objects when invoked using the <code>new</code> operator keyword.</p>
      </>
    ),
  },
  {
    id: 10044,
    category: 'JavaScript',
    difficulty: 'hard',
    question: "What do you mean by prototype design pattern?",
    answer: (
      <>
        <p>A design pattern where objects share attributes and methods through prototypical inheritance chains instead of class blueprints.</p>
      </>
    ),
  },
  {
    id: 10045,
    category: 'JavaScript',
    difficulty: 'hard',
    question: "What are generator functions?",
    answer: (
      <>
        <p>Functions that can be exited and re-entered, pausing execution states using the <code>yield</code> keyword.</p>
      </>
    ),
  },
  {
    id: 10046,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the use of callbacks?",
    answer: (
      <>
        <p>Allows executing code sequentially after asynchronous tasks (like database queries or file fetches) finish.</p>
      </>
    ),
  },
  {
    id: 10047,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is WeakSet?",
    answer: (
      <>
        <p>A collection of objects where keys are held weakly, permitting garbage collector sweeps if no other references exist.</p>
      </>
    ),
  },
  {
    id: 10048,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is a WeakMap?",
    answer: (
      <>
        <p>A key-value collection where keys must be objects and are weakly referenced to avoid memory leakage.</p>
      </>
    ),
  },
  {
    id: 10049,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "Explain is NaN function?",
    answer: (
      <>
        <p>The <code>isNaN()</code> function converts values to numbers and checks if the converted value evaluates to <code>NaN</code>.</p>
      </>
    ),
  },
  {
    id: 10050,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "State the difference between ViewState and SessionState?",
    answer: (
      <>
        <ul><li><strong>ViewState:</strong> ASP.NET client-side page state preservation mechanism.</li><li><strong>SessionState:</strong> Session data stored on the web server side for active users.</li></ul>
      </>
    ),
  },
  {
    id: 10051,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "How can you read and write a file through JavaScript?",
    answer: (
      <>
        <p>In browsers, utilize FileReader APIs or file input components. In Node.js server scripts, import the <code>fs</code> filesystem module.</p>
      </>
    ),
  },
  {
    id: 10052,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What are the different types of Pop-up boxes available in JavaScript?",
    answer: (
      <>
        <p>Three default types: Alert box, Confirm box, and Prompt box.</p>
      </>
    ),
  },
  {
    id: 10053,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "Difference between an alert box and a confirmation box?",
    answer: (
      <>
        <ul><li><strong>Alert:</strong> Displays messages with a single OK button to dismiss.</li><li><strong>Confirm:</strong> Displays messages with OK and Cancel buttons, returning Boolean values.</li></ul>
      </>
    ),
  },
  {
    id: 10054,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What are JavaScript Cookies?",
    answer: (
      <>
        <p>Text-based client configurations stored in browsers to manage active sessions and visitor preferences.</p>
      </>
    ),
  },
  {
    id: 10055,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the role of a type of operator?",
    answer: (
      <>
        <p>Determines the underlying primitive data type of variables or expressions, returning types like string or object.</p>
      </>
    ),
  },
  {
    id: 10056,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is blur function?",
    answer: (
      <>
        <p>An element method that removes keyboard focus from the active DOM input component.</p>
      </>
    ),
  },
  {
    id: 10057,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "How to detect the Operating System of the client machine?",
    answer: (
      <>
        <p>Inspect the navigator details: <br/> <code>const os = navigator.userAgent;</code> or <code>navigator.platform</code> attributes.</p>
      </>
    ),
  },
  {
    id: 10058,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the difference between .call() and .apply()?",
    answer: (
      <>
        <p>Call takes arguments separated by commas, while Apply takes arguments wrapped in an array.</p>
      </>
    ),
  },
  {
    id: 10059,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the role of break and continue statements?",
    answer: (
      <>
        <ul><li><code>break</code>: Exits loops instantly.</li><li><code>continue</code>: Skips the current iteration loop and jumps to the next evaluation step.</li></ul>
      </>
    ),
  },
  {
    id: 10060,
    category: 'JavaScript',
    difficulty: 'hard',
    question: "What is the difference between a web garden and a web farm?",
    answer: (
      <>
        <ul><li><strong>Web Garden:</strong> Running multiple application processes inside a single server host.</li><li><strong>Web Farm:</strong> Deploying applications across multiple physical server hosts behind a load balancer.</li></ul>
      </>
    ),
  },
  {
    id: 10061,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What do you mean by Immediately Invoked Function in JavaScript?",
    answer: (
      <>
        <p>An **IIFE** is a function expression that executes immediately after definition: <br/> <code>(function() {"{"} ... {"}"})();</code></p>
      </>
    ),
  },
  {
    id: 10062,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is strict mode in JavaScript?",
    answer: (
      <>
        <p>Enables restricted code compilation rules, throwing exceptions for unsafe syntax (global variables, duplicate keys).</p>
      </>
    ),
  },
  {
    id: 10063,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "Specify the benefits of using External JavaScript.",
    answer: (
      <>
        <p>Benefits: code reuse, clean separation of concerns, faster page loads due to browser caching of JS files.</p>
      </>
    ),
  },
  {
    id: 10064,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What are object prototypes in JavaScript?",
    answer: (
      <>
        <p>Prototypes are template objects from which JavaScript objects inherit properties and methods.</p>
      </>
    ),
  },
  {
    id: 10065,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What are the types of errors in JavaScript?",
    answer: (
      <>
        <p>Errors: SyntaxError (code syntax), TypeError (incorrect type call), ReferenceError (missing variable), RangeError (out of range).</p>
      </>
    ),
  },
  {
    id: 10066,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is recursion in a JavaScript?",
    answer: (
      <>
        <p>Recursion is a process where a function calls itself repeatedly until it satisfies a termination condition.</p>
      </>
    ),
  },
  {
    id: 10067,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is DOM?",
    answer: (
      <>
        <p>Document Object Model. The HTML tree structure parsed by browsers and modified by JavaScript to update content dynamically.</p>
      </>
    ),
  },
  {
    id: 10068,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is the difference between client-side and server-side JavaScript?",
    answer: (
      <>
        <ul><li><strong>Client-Side:</strong> Runs in browsers, handles user interface rendering and browser events.</li><li><strong>Server-Side:</strong> Runs on servers (Node), handles file access, routing, and database queries.</li></ul>
      </>
    ),
  },
  {
    id: 10069,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the role of promises in JavaScript?",
    answer: (
      <>
        <p>Promises handle asynchronous operations, resolving with a value or rejecting with an error.</p>
      </>
    ),
  },
  {
    id: 10070,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What are classes in JavaScript?",
    answer: (
      <>
        <p>Introduced in ES6, classes are syntactic sugar over prototypal inheritance, offering a clean syntax to define objects.</p>
      </>
    ),
  },
  {
    id: 10071,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is Object Destructuring?",
    answer: (
      <>
        <p>A clean syntax to extract properties from objects or arrays and assign them to variables: <br/> <code>const {"{"} name, age {"}"} = user;</code></p>
      </>
    ),
  },
  {
    id: 10072,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is the key difference between prototypal and classical inheritance?",
    answer: (
      <>
        <ul><li><strong>Classical:</strong> Classes inherit from other classes (blueprints).</li><li><strong>Prototypal:</strong> Objects inherit directly from other objects (delegation).</li></ul>
      </>
    ),
  },
  {
    id: 10073,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "Explain JavaScript Design Patterns.",
    answer: (
      <>
        <p>Structured templates: Module pattern (encapsulation), Singleton (single instance), and Observer (event notifications).</p>
      </>
    ),
  },
  {
    id: 10074,
    category: 'JavaScript',
    difficulty: 'hard',
    question: "What is memoization?",
    answer: (
      <>
        <p>An optimization technique that caches the return results of expensive function calls, returning cached values on duplicate inputs.</p>
      </>
    ),
  },
  {
    id: 10075,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is Lexical Scoping in JavaScript?",
    answer: (
      <>
        <p>Variable scope is determined by its physical declaration location within the source code during compilation.</p>
      </>
    ),
  },
  {
    id: 10076,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the requirement for debugging in JavaScript?",
    answer: (
      <>
        <p>Utilize browser Developer Tools, log errors using <code>console.log()</code>, or insert <code>debugger</code> statement breakpoints.</p>
      </>
    ),
  },
  {
    id: 10077,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is the difference between Event Capturing and Event Bubbling?",
    answer: (
      <>
        <p>Capturing propagates events downward from parent nodes to target elements. Bubbling propagates events upward from target elements to parent nodes.</p>
      </>
    ),
  },
  {
    id: 10078,
    category: 'JavaScript',
    difficulty: 'hard',
    question: "How to deep-freeze object in JavaScript?",
    answer: (
      <>
        <p>Call <code>Object.freeze()</code> recursively on all nested properties to make the entire object completely read-only.</p>
      </>
    ),
  },
  {
    id: 10079,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "Is JavaScript a pass-by-value or pass-by-reference language?",
    answer: (
      <>
        <p>JavaScript is **pass-by-value**. For objects, the value passed is a copy of the reference pointing to the object in memory.</p>
      </>
    ),
  },
  {
    id: 10080,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "Is JavaScript a case-sensitive language?",
    answer: (
      <>
        <p>Yes. Variables named <code>myVar</code> and <code>myvar</code> represent two distinct symbol names.</p>
      </>
    ),
  },
  {
    id: 10081,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "Difference between exec () and test () methods in JavaScript?",
    answer: (
      <>
        <ul><li><code>test()</code>: RegExp method returning a Boolean if a pattern matches a string.</li><li><code>exec()</code>: RegExp method returning an array of matched details or null if no match occurs.</li></ul>
      </>
    ),
  },
  {
    id: 10082,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "Name all loops available in JavaScript.",
    answer: (
      <>
        <p>Loops: <code>for</code>, <code>while</code>, <code>do-while</code>, <code>for-in</code> (object properties), and <code>for-of</code> (iterable values).</p>
      </>
    ),
  },
  {
    id: 10083,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What do you mean by the unshift() method?",
    answer: (
      <>
        <p>Adds one or more elements to the beginning of an array and returns the array's new length.</p>
      </>
    ),
  },
  {
    id: 10084,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What are the unescape() and escape() functions in javascript?",
    answer: (
      <>
        <p>Deprecated functions used to encode and decode query string characters into hex escape sequences.</p>
      </>
    ),
  },
  {
    id: 10085,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is decodeURI() and encodeURI() in JavaScript?",
    answer: (
      <>
        <ul><li><code>encodeURI()</code>: Encodes special characters in complete URLs.</li><li><code>decodeURI()</code>: Restores encoded hex codes back to standard characters.</li></ul>
      </>
    ),
  },
  {
    id: 10086,
    category: 'JavaScript',
    difficulty: 'hard',
    question: "What is QuickSort Algorithm in JavaScript?",
    answer: (
      <>
        <p>A divide-and-conquer sorting algorithm that partitions arrays around pivot elements and sorts sub-arrays recursively.</p>
      </>
    ),
  },
  {
    id: 10087,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is pop()method in JavaScript?",
    answer: (
      <>
        <p>Removes the last element from an array and returns that element, modifying the array's length.</p>
      </>
    ),
  },
  {
    id: 10088,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "Mention the two primary groups of data types in JavaScript.",
    answer: (
      <>
        <ul><li><strong>Primitives:</strong> Immutable values (e.g. String, Number, Boolean).</li><li><strong>Reference types:</strong> Objects (Objects, Arrays, Functions).</li></ul>
      </>
    ),
  },
  {
    id: 10089,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "How can you create Generic objects?",
    answer: (
      <>
        <p>Create generic objects using the object literal syntax: <br/> <code>const obj = {"{"}{"}"};</code> or <code>new Object();</code>.</p>
      </>
    ),
  },
  {
    id: 10090,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is variable typing in JavaScript?",
    answer: (
      <>
        <p>Assigning different data types to variables dynamically, as JS does not enforce type bindings.</p>
      </>
    ),
  },
  {
    id: 10091,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is unshift method in JavaScript?",
    answer: (
      <>
        <p>An array method that prepends items to the start of arrays, adjusting element indexes.</p>
      </>
    ),
  },
  {
    id: 10092,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "Difference between JavaScript and Jscript?",
    answer: (
      <>
        <ul><li><strong>JavaScript:</strong> The standard Netscape/Mozilla implementation of ECMAScript.</li><li><strong>JScript:</strong> Microsoft's legacy reverse-engineered implementation of ECMAScript used in Internet Explorer.</li></ul>
      </>
    ),
  },
  {
    id: 10093,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is anonymous function in JavaScript?",
    answer: (
      <>
        <p>A function declared without any associated name identifier (e.g., callbacks, self-executing functions).</p>
      </>
    ),
  },
  {
    id: 10094,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "Is JavaScript a statically typed or a dynamically typed language?",
    answer: (
      <>
        <p>Dynamically typed, determining and checking variable types at runtime rather than during compilation.</p>
      </>
    ),
  },
  {
    id: 10095,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What are the best practices for optimizing JavaScript performance?",
    answer: (
      <>
        <p>Optimizations: minimize DOM access, use requestAnimationFrame for animations, avoid memory leaks by clearing intervals, and use debouncing/throttling.</p>
      </>
    ),
  },
  {
    id: 10096,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What are the disadvantages of using innerHTML in JavaScript?",
    answer: (
      <>
        <p>Disadvantages: poses XSS security risks (script injections), replaces entire DOM node structures causing slow performance, and strips event listeners.</p>
      </>
    ),
  },
  {
    id: 10097,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What do you understand by the screen objects in JavaScript?",
    answer: (
      <>
        <p>Renders client-side monitor attributes, exposing properties like <code>screen.width</code>, <code>screen.height</code>, and color depth details.</p>
      </>
    ),
  },
  {
    id: 10098,
    category: 'JavaScript',
    difficulty: 'medium',
    question: "What is the role of deferred scripts in JavaScript?",
    answer: (
      <>
        <p>Loads scripts in parallel with DOM parsing, executing them in sequence only after the DOM is fully constructed.</p>
      </>
    ),
  },
  {
    id: 10099,
    category: 'JavaScript',
    difficulty: 'easy',
    question: "What is the use of Void (0) in JavaScript?",
    answer: (
      <>
        <p>The <code>void</code> operator evaluates an expression and returns <code>undefined</code>. <code>void(0)</code> is commonly used to prevent link anchors from reloading pages when clicked.</p>
      </>
    ),
  },
];
