import React from 'react';

export const PHP_QUESTIONS = [
  {
    id: 17001,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is PHP?",
    answer: (
      <>
        <p><strong>PHP</strong> stands for <strong>Hypertext Preprocessor</strong>. It is a widely-used open source general-purpose server-side scripting language that is especially suited for web development and can be embedded into HTML.</p>
      </>
    ),
  },
  {
    id: 17002,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is PEAR in PHP?",
    answer: (
      <>
        <p><strong>PEAR</strong> stands for <strong>PHP Extension and Application Repository</strong>. It is a framework and distribution system for reusable PHP software components, providing a structured library of open-source PHP code packages.</p>
      </>
    ),
  },
  {
    id: 17003,
    category: 'PHP',
    difficulty: 'easy',
    question: "What are cookies? How do you create cookies in PHP?",
    answer: (
      <>
        <p>Cookies are small text files stored on the client browser to track user session details. In PHP, cookies are created using the <code>setcookie()</code> function: <br/> <code>setcookie('name', 'value', time() + 3600, '/');</code></p>
      </>
    ),
  },
  {
    id: 17004,
    category: 'PHP',
    difficulty: 'medium',
    question: "Define the use of .htaccess and php.ini files in PHP?",
    answer: (
      <>
        <ul><li><strong>php.ini:</strong> The main configuration file for initializing PHP settings (like file upload limits, memory limits, and error reporting flags).</li><li><strong>.htaccess:</strong> An Apache server configuration file that allows directory-level configuration changes (like URL rewriting or setting PHP flags locally).</li></ul>
      </>
    ),
  },
  {
    id: 17005,
    category: 'PHP',
    difficulty: 'easy',
    question: "How is typecasting achieved in PHP?",
    answer: (
      <>
        <p>Typecasting is achieved by prefixing variables with the target type name enclosed in parentheses, for example: <code>(int)$var</code>, <code>(string)$var</code>, or <code>(array)$var</code>.</p>
      </>
    ),
  },
  {
    id: 17006,
    category: 'PHP',
    difficulty: 'easy',
    question: "What are constructors and destructors in PHP",
    answer: (
      <>
        <ul><li><strong>Constructor:</strong> Special class methods defined as <code>__construct()</code> that run automatically when objects are instantiated.</li><li><strong>Destructor:</strong> Special class methods defined as <code>__destruct()</code> that run when objects are destroyed or scripts end.</li></ul>
      </>
    ),
  },
  {
    id: 17007,
    category: 'PHP',
    difficulty: 'easy',
    question: "What are some common error types in PHP?",
    answer: (
      <>
        <p>Common errors: Notices (non-critical execution hints), Warnings (non-fatal errors, scripts continue), Fatal Errors (fatal execution issues, scripts terminate), and Parse Errors (syntax mistakes).</p>
      </>
    ),
  },
  {
    id: 17008,
    category: 'PHP',
    difficulty: 'medium',
    question: "What are traits in PHP?",
    answer: (
      <>
        <p><strong>Traits</strong> are a mechanism for code reuse in single-inheritance languages like PHP. A trait is intended to reduce limitations of single inheritance by enabling developers to reuse sets of methods freely in several independent classes.</p>
      </>
    ),
  },
  {
    id: 17009,
    category: 'PHP',
    difficulty: 'easy',
    question: "What do we mean by \u2018escaping to PHP\u2019?",
    answer: (
      <>
        <p>It is the process of embedding PHP code blocks inside HTML layouts using opening and closing script tags: <code>&lt;?php ... ?&gt;</code>.</p>
      </>
    ),
  },
  {
    id: 17010,
    category: 'PHP',
    difficulty: 'easy',
    question: "How many types of an array are there in PHP?",
    answer: (
      <>
        <p>There are three types: Indexed Arrays (numeric keys), Associative Arrays (named string keys), and Multidimensional Arrays (arrays containing other arrays).</p>
      </>
    ),
  },
  {
    id: 17011,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is GET and POST method in PHP?",
    answer: (
      <>
        <ul><li><strong>GET:</strong> Sends request parameter payloads appended to the URL query string, limited in size and visible to all.</li><li><strong>POST:</strong> Sends request payloads inside the HTTP request body, secure and unlimited in size.</li></ul>
      </>
    ),
  },
  {
    id: 17012,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is the use of callback in PHP?",
    answer: (
      <>
        <p>Callbacks allow passing functions as arguments to other functions, facilitating dynamic execution routines using closures or callable arrays: <code>call_user_func($callback)</code>.</p>
      </>
    ),
  },
  {
    id: 17013,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is the difference between runtime exception and compile time exception",
    answer: (
      <>
        <ul><li><strong>Compile-time Exception:</strong> Syntax or parse errors that prevent PHP code compilation.</li><li><strong>Runtime Exception:</strong> Semantic errors that occur during script executions (like database connection drops).</li></ul>
      </>
    ),
  },
  {
    id: 17014,
    category: 'PHP',
    difficulty: 'easy',
    question: "What are the differences between the echo and print statements in PHP?",
    answer: (
      <>
        <p><code>echo</code> has no return value and can take multiple arguments. <code>print</code> returns a value of 1, allowing it to be used in expressions, and accepts only one argument.</p>
      </>
    ),
  },
  {
    id: 17015,
    category: 'PHP',
    difficulty: 'medium',
    question: "Is it possible to extend the execution time of a PHP script?",
    answer: (
      <>
        <p>Yes, you can extend it using <code>set_time_limit(seconds)</code> in script code, or modifying the <code>max_execution_time</code> value inside the php.ini configuration file.</p>
      </>
    ),
  },
  {
    id: 17016,
    category: 'PHP',
    difficulty: 'easy',
    question: "Explain PHP parameterized functions?",
    answer: (
      <>
        <p>Functions defined with parameters/arguments inside parenthesized headers, enabling passing custom inputs during calls: <code>function add($a, $b) {"{"} return $a + $b; {"}"}</code>.</p>
      </>
    ),
  },
  {
    id: 17017,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is the difference between for and foreach loop in PHP?",
    answer: (
      <>
        <ul><li><strong>for:</strong> Loops based on explicit counter limits and increments, ideal for structured numeric steps.</li><li><strong>foreach:</strong> Iterates over arrays or objects sequentially without requiring manual counters.</li></ul>
      </>
    ),
  },
  {
    id: 17018,
    category: 'PHP',
    difficulty: 'easy',
    question: "What are include() and require() functions?",
    answer: (
      <>
        <ul><li><code>include()</code>: Loads external script files. Throws a warning on failure, letting execution continue.</li><li><code>require()</code>: Loads external script files. Throws a fatal error on failure, terminating execution.</li></ul>
      </>
    ),
  },
  {
    id: 17019,
    category: 'PHP',
    difficulty: 'easy',
    question: "How can we create a database using PHP and MySQL?",
    answer: (
      <>
        <p>Create database connections using PDO or mysqli, and execute SQL statements: <code>CREATE DATABASE dbname;</code>.</p>
      </>
    ),
  },
  {
    id: 17020,
    category: 'PHP',
    difficulty: 'hard',
    question: "What is Memcache and Memcached? Is it possible to share a single instance of a Memcache between several PHP projects?",
    answer: (
      <>
        <p>Memcache is the client extension utilizing standard APIs. Memcached is the modern extension wrapping libmemcached features. Yes, multiple projects can share a single Memcache daemon by using unique key prefixes.</p>
      </>
    ),
  },
  {
    id: 17021,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is Path Traversal?",
    answer: (
      <>
        <p>An exploit where attackers input relative paths (e.g. <code>../../etc/passwd</code>) to read restricted files on servers due to insecure input sanitization.</p>
      </>
    ),
  },
  {
    id: 17022,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is the e mail function in PHP?",
    answer: (
      <>
        <p>PHP sends emails using the built-in <code>mail()</code> function: <br/> <code>mail($to, $subject, $message, $headers);</code></p>
      </>
    ),
  },
  {
    id: 17023,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is typecasting in PHP?",
    answer: (
      <>
        <p>Explicitly converting a variable value from one primitive type (e.g. string) to another (e.g. integer) using cast operators.</p>
      </>
    ),
  },
  {
    id: 17024,
    category: 'PHP',
    difficulty: 'easy',
    question: "Draw a comparison between server-side and client-side programming languages.",
    answer: (
      <>
        <ul><li><strong>Server-side (PHP):</strong> Runs on servers, executes SQL operations, hides source code from clients.</li><li><strong>Client-side (JS):</strong> Runs inside user browsers, handles UI interactions, visible source code.</li></ul>
      </>
    ),
  },
  {
    id: 17025,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is type juggling?",
    answer: (
      <>
        <p>In PHP, variables automatically switch data types based on the context of their usage (e.g. Adding a string containing a number to an integer results in an integer).</p>
      </>
    ),
  },
  {
    id: 17026,
    category: 'PHP',
    difficulty: 'easy',
    question: "How to fetch data from a MySQL database with PHP?",
    answer: (
      <>
        <p>Establish connection using PDO, prepare SQL queries, execute, and fetch rows using loops: <code>$stmt &rarr; fetch(PDO::FETCH_ASSOC)</code>.</p>
      </>
    ),
  },
  {
    id: 17027,
    category: 'PHP',
    difficulty: 'easy',
    question: "Explain different types of errors in PHP.",
    answer: (
      <>
        <p>E_NOTICE (informational warning), E_WARNING (non-fatal error), E_ERROR (fatal crash), and E_PARSE (compilation syntax error).</p>
      </>
    ),
  },
  {
    id: 17028,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is the difference between session and cookie?",
    answer: (
      <>
        <ul><li><strong>Session:</strong> Stores user data on servers, secure, and expires when browsers close.</li><li><strong>Cookie:</strong> Stores data in client browsers, less secure, and persists based on custom expiration dates.</li></ul>
      </>
    ),
  },
  {
    id: 17029,
    category: 'PHP',
    difficulty: 'medium',
    question: "Explain what is a persistence cookie?",
    answer: (
      <>
        <p>A cookie configured with an explicit expiration date/time in the future, surviving browser closures and system reboots.</p>
      </>
    ),
  },
  {
    id: 17030,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is public, private, protected, static and final scopes?",
    answer: (
      <>
        <ul><li><strong>public:</strong> Accessible from anywhere.</li><li><strong>private:</strong> Accessible only within the defining class.</li><li><strong>protected:</strong> Accessible within defining and inherited classes.</li><li><strong>static:</strong> Declares class-level attributes/methods without instantiation.</li><li><strong>final:</strong> Prevents methods from being overridden or classes from being inherited.</li></ul>
      </>
    ),
  },
  {
    id: 17031,
    category: 'PHP',
    difficulty: 'medium',
    question: "Define garbage collection.",
    answer: (
      <>
        <p>The automated process of cleaning up memory by freeing objects that have zero references, preventing memory leaks in long-running scripts.</p>
      </>
    ),
  },
  {
    id: 17032,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is PDO?",
    answer: (
      <>
        <p><strong>PHP Data Objects (PDO)</strong> is a database abstraction layer providing a lightweight, consistent API to execute queries across multiple SQL database types safely using prepared statements.</p>
      </>
    ),
  },
  {
    id: 17033,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is URL rewriting?",
    answer: (
      <>
        <p>Modifying dynamic URL addresses into readable structures (e.g. transforming <code>index.php?id=5</code> into <code>/user/5</code>) using server redirect rules.</p>
      </>
    ),
  },
  {
    id: 17034,
    category: 'PHP',
    difficulty: 'easy',
    question: "Name some popular PHP frameworks.",
    answer: (
      <>
        <p>Popular frameworks: Laravel, Symfony, CodeIgniter, Yii, Zend Framework (Laminas), and CakePHP.</p>
      </>
    ),
  },
  {
    id: 17035,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is the role of ODBC in PHP?",
    answer: (
      <>
        <p>Open Database Connectivity. It acts as an API interface layer to execute SQL queries on legacy databases like MS Access or IBM DB2.</p>
      </>
    ),
  },
  {
    id: 17036,
    category: 'PHP',
    difficulty: 'easy',
    question: "Why use super-global arrays in PHP?",
    answer: (
      <>
        <p>They are predefined, built-in variables accessible globally from any function, class, or script file without declaring global scope variables (e.g. <code>$_GET</code>, <code>$_POST</code>).</p>
      </>
    ),
  },
  {
    id: 17037,
    category: 'PHP',
    difficulty: 'easy',
    question: "Name different types of loops that exists in PHP",
    answer: (
      <>
        <p>Loops: while, do-while, for, and foreach loops.</p>
      </>
    ),
  },
  {
    id: 17038,
    category: 'PHP',
    difficulty: 'medium',
    question: "What are the encryption functions in PHP?",
    answer: (
      <>
        <p>Encryption functions: <code>password_hash()</code>, <code>crypt()</code>, and openssl functions like <code>openssl_encrypt()</code>.</p>
      </>
    ),
  },
  {
    id: 17039,
    category: 'PHP',
    difficulty: 'easy',
    question: "Difference between echo() and print()",
    answer: (
      <>
        <p>echo has no return value and executes faster. print returns 1 and accepts only single parameters.</p>
      </>
    ),
  },
  {
    id: 17040,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is MIME?",
    answer: (
      <>
        <p>Multipurpose Internet Mail Extensions. A standard indicating document and file types (e.g., <code>text/html</code>, <code>image/png</code>) sent over HTTP headers.</p>
      </>
    ),
  },
  {
    id: 17041,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is type juggling?",
    answer: (
      <>
        <p>Automatic conversions applied by PHP at runtime when evaluating variable mismatches within expressions.</p>
      </>
    ),
  },
  {
    id: 17042,
    category: 'PHP',
    difficulty: 'easy',
    question: "Explain what is Joomla?",
    answer: (
      <>
        <p>Joomla is a popular open-source Content Management System (CMS) written in PHP, utilizing MySQL relational database systems.</p>
      </>
    ),
  },
  {
    id: 17043,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is output buffering?",
    answer: (
      <>
        <p>Caching generated HTML outputs inside memory buffers before sending payloads to browsers, allowing headers to be set at any point.</p>
      </>
    ),
  },
  {
    id: 17044,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is the purpose of Output buffering?",
    answer: (
      <>
        <p>Allows setting cookies or redirects after rendering content, compresses payloads (gzip), and reduces network round-trips.</p>
      </>
    ),
  },
  {
    id: 17045,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is the difference between JavaScript and PHP?",
    answer: (
      <>
        <ul><li><strong>JavaScript:</strong> Client-side scripting inside user browsers (dynamic behaviors).</li><li><strong>PHP:</strong> Server-side scripting executing database queries on servers.</li></ul>
      </>
    ),
  },
  {
    id: 17046,
    category: 'PHP',
    difficulty: 'easy',
    question: "How to redirect a page in PHP programming?",
    answer: (
      <>
        <p>Redirect using header headers: <br/> <code>header('Location: https://example.com'); exit;</code></p>
      </>
    ),
  },
  {
    id: 17047,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is goto statement? Why is it used?",
    answer: (
      <>
        <p>A control statement used to jump execution flow directly to predefined labels in PHP scripts, though generally avoided for readability.</p>
      </>
    ),
  },
  {
    id: 17048,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is NULL in PHP?",
    answer: (
      <>
        <p>A special data type indicating that a variable has no assigned value or has been unset using <code>unset()</code>.</p>
      </>
    ),
  },
  {
    id: 17049,
    category: 'PHP',
    difficulty: 'medium',
    question: "Name some constants predefined in PHP.",
    answer: (
      <>
        <p>Constants: <code>__FILE__</code>, <code>__LINE__</code>, <code>__DIR__</code>, <code>__FUNCTION__</code>, <code>PHP_VERSION</code>, and <code>PHP_OS</code>.</p>
      </>
    ),
  },
  {
    id: 17050,
    category: 'PHP',
    difficulty: 'easy',
    question: "What do you understand by break and continue statements in PHP?",
    answer: (
      <>
        <ul><li><strong>break:</strong> Exits the current loop instantly.</li><li><strong>continue:</strong> Skips the remaining operations of the current loop iteration and moves to the next.</li></ul>
      </>
    ),
  },
  {
    id: 17051,
    category: 'PHP',
    difficulty: 'easy',
    question: "Explain the different types of arrays supported by PHP?",
    answer: (
      <>
        <p>PHP supports indexed arrays, associative key-value arrays, and multidimensional arrays.</p>
      </>
    ),
  },
  {
    id: 17052,
    category: 'PHP',
    difficulty: 'easy',
    question: "What are the data types in PHP?",
    answer: (
      <>
        <p>Data types: String, Integer, Float, Boolean, Array, Object, NULL, and Resource (database pointers).</p>
      </>
    ),
  },
  {
    id: 17053,
    category: 'PHP',
    difficulty: 'medium',
    question: "Can you set infinite execution time in PHP?",
    answer: (
      <>
        <p>Yes, by setting time limit to zero inside scripts: <br/> <code>set_time_limit(0);</code></p>
      </>
    ),
  },
  {
    id: 17054,
    category: 'PHP',
    difficulty: 'easy',
    question: "Name some of the top (CMS) made using PHP?",
    answer: (
      <>
        <p>WordPress, Joomla, Drupal, and Magento CMS configurations.</p>
      </>
    ),
  },
  {
    id: 17055,
    category: 'PHP',
    difficulty: 'medium',
    question: "What do you mean by value type and reference type?",
    answer: (
      <>
        <ul><li><strong>Value Type:</strong> Variables receive copies of values, modifications don't affect original variables.</li><li><strong>Reference Type:</strong> Variables share pointers using the <code>&amp;</code> symbol; updates modify source values.</li></ul>
      </>
    ),
  },
  {
    id: 17056,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is type hinting in PHP?",
    answer: (
      <>
        <p>Enforces specific data types for function arguments (e.g., <code>function save(User $user)</code>), throwing type errors on mismatches.</p>
      </>
    ),
  },
  {
    id: 17057,
    category: 'PHP',
    difficulty: 'hard',
    question: "What is Zend Engine?",
    answer: (
      <>
        <p>The core open-source scripting engine that compiles and executes PHP code, translating files into opcodes before executing them.</p>
      </>
    ),
  },
  {
    id: 17058,
    category: 'PHP',
    difficulty: 'hard',
    question: "What are the key functionalities of Zend Engine?",
    answer: (
      <>
        <p>Functionalities: compiling code into opcodes, memory allocations, garbage collection routines, and extension interface APIs.</p>
      </>
    ),
  },
  {
    id: 17059,
    category: 'PHP',
    difficulty: 'medium',
    question: "What are the key features introduced in PHP7?",
    answer: (
      <>
        <p>Features: scalar type declarations, return type declarations, null coalescing operator (<code>??</code>), space ship operator (<code>&lt;=&gt;</code>), and significant performance boosts.</p>
      </>
    ),
  },
  {
    id: 17060,
    category: 'PHP',
    difficulty: 'medium',
    question: "What are magic methods in PHP?",
    answer: (
      <>
        <p>Special class methods (prefixed with <code>__</code>) that run automatically in response to specific actions (e.g. <code>__get()</code>, <code>__set()</code>, <code>__call()</code>).</p>
      </>
    ),
  },
  {
    id: 17061,
    category: 'PHP',
    difficulty: 'easy',
    question: "Differentiate between GET and POST requests.",
    answer: (
      <>
        <p>GET sends data inside URL query parameters, limited and visible. POST sends data inside HTTP request bodies, secure and unlimited.</p>
      </>
    ),
  },
  {
    id: 17062,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is the difference between single quotes (''') and double quotes ('''') in PHP?",
    answer: (
      <>
        <ul><li><strong>Single quotes:</strong> Evaluate literal strings; variables are not parsed.</li><li><strong>Double quotes:</strong> Parse embedded variables and escape sequences dynamically.</li></ul>
      </>
    ),
  },
  {
    id: 17063,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is the default session time in PHP?",
    answer: (
      <>
        <p>The default session duration is **1440 seconds** (24 minutes), configured by <code>session.gc_maxlifetime</code> in php.ini.</p>
      </>
    ),
  },
  {
    id: 17064,
    category: 'PHP',
    difficulty: 'hard',
    question: "Can you use COM component in PHP?",
    answer: (
      <>
        <p>Yes, on Windows servers using the built-in <code>COM</code> class to integrate Microsoft COM components: <br/> <code>$word = new COM('word.application');</code></p>
      </>
    ),
  },
  {
    id: 17065,
    category: 'PHP',
    difficulty: 'easy',
    question: "How to define a constant in PHP?",
    answer: (
      <>
        <p>Define using the <code>define()</code> function or the <code>const</code> keyword: <br/> <code>define('APP_NAME', 'MyApp');</code></p>
      </>
    ),
  },
  {
    id: 17066,
    category: 'PHP',
    difficulty: 'easy',
    question: "What do you understand by PHP escape?",
    answer: (
      <>
        <p>The process of exiting HTML parser blocks to evaluate PHP using scripting tags: <code>&lt;?php ... ?&gt;</code>.</p>
      </>
    ),
  },
  {
    id: 17067,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is htaccess?",
    answer: (
      <>
        <p>An Apache directory-level configuration file utilized to rewrite URLs, set redirect headers, and modify caching headers.</p>
      </>
    ),
  },
  {
    id: 17068,
    category: 'PHP',
    difficulty: 'easy',
    question: "Why use htaccess?",
    answer: (
      <>
        <p>Allows changing folder configurations without editing main Apache system config files.</p>
      </>
    ),
  },
  {
    id: 17069,
    category: 'PHP',
    difficulty: 'hard',
    question: "What is soundex() function?",
    answer: (
      <>
        <p>A function that calculates the soundex key of a string, representing its English pronunciation key to evaluate phonetics.</p>
      </>
    ),
  },
  {
    id: 17070,
    category: 'PHP',
    difficulty: 'hard',
    question: "What is metaphone()?",
    answer: (
      <>
        <p>A phonetic algorithm function that returns the pronunciation key of a string, more accurate than <code>soundex()</code>.</p>
      </>
    ),
  },
  {
    id: 17071,
    category: 'PHP',
    difficulty: 'medium',
    question: "How do you handle errors in PHP?",
    answer: (
      <>
        <p>Handle errors using try-catch blocks, writing custom error handlers using <code>set_error_handler()</code>, or configuring php.ini log flags.</p>
      </>
    ),
  },
  {
    id: 17072,
    category: 'PHP',
    difficulty: 'medium',
    question: "How to prevent SQL injection in PHP?",
    answer: (
      <>
        <p>Prevent injection using Prepared Statements via PDO or mysqli, separating SQL query templates from user input parameters.</p>
      </>
    ),
  },
  {
    id: 17073,
    category: 'PHP',
    difficulty: 'easy',
    question: "Does PHP supports multiple inheritance?",
    answer: (
      <>
        <p>No. PHP supports single inheritance only, but code reusability across multiple independent classes is achieved using **Traits**.</p>
      </>
    ),
  },
  {
    id: 17074,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is the use of @ in PHP programming?",
    answer: (
      <>
        <p>The <code>@</code> symbol acts as an error control operator, suppressing execution warnings or notice logs on expressions it prefixes.</p>
      </>
    ),
  },
  {
    id: 17075,
    category: 'PHP',
    difficulty: 'medium',
    question: "Explain the concept of namespaces in PHP.",
    answer: (
      <>
        <p>Namespaces resolve class name collisions in large projects by grouping classes, interfaces, and functions under defined directory-like logical paths.</p>
      </>
    ),
  },
  {
    id: 17076,
    category: 'PHP',
    difficulty: 'medium',
    question: "How does autoloading work in PHP?",
    answer: (
      <>
        <p>Loads class files automatically when class instantiation calls are fired, using register functions: <code>spl_autoload_register()</code>.</p>
      </>
    ),
  },
  {
    id: 17077,
    category: 'PHP',
    difficulty: 'hard',
    question: "Explain the concept of late static binding in PHP.",
    answer: (
      <>
        <p>Late static binding references the class that was called at runtime rather than the class that defines the method, using the <code>static::</code> keyword instead of <code>self::</code>.</p>
      </>
    ),
  },
  {
    id: 17078,
    category: 'PHP',
    difficulty: 'easy',
    question: "What are anonymous functions (closures) in PHP?",
    answer: (
      <>
        <p>Functions defined without specified names, useful as callbacks, and capturing outer scope variables using the <code>use</code> keyword.</p>
      </>
    ),
  },
  {
    id: 17079,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is the difference between ''include'' and ''require'' in PHP?",
    answer: (
      <>
        <p>include throws a non-fatal warning on file mismatches. require throws a fatal exception, stopping script execution instantly.</p>
      </>
    ),
  },
  {
    id: 17080,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is Mbstring? Specify its use",
    answer: (
      <>
        <p><strong>Mbstring</strong> (Multi-Byte String) is an extension used to handle multibyte character sets (like UTF-8, Japanese) safely in PHP, preventing byte split corruption.</p>
      </>
    ),
  },
  {
    id: 17081,
    category: 'PHP',
    difficulty: 'medium',
    question: "How to use Mbstring?",
    answer: (
      <>
        <p>Enable it in php.ini and use multi-byte string functions like <code>mb_substr()</code> or <code>mb_strlen()</code> instead of standard equivalents.</p>
      </>
    ),
  },
  {
    id: 17082,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is PECL?",
    answer: (
      <>
        <p><strong>PECL</strong> stands for <strong>PHP Extension Community Library</strong>. It is a repository for PHP extensions written in C that must be compiled and loaded into php.ini.</p>
      </>
    ),
  },
  {
    id: 17083,
    category: 'PHP',
    difficulty: 'medium',
    question: "List some popular PECL extensions.",
    answer: (
      <>
        <p>Popular extensions: Redis, Xdebug, APCu caching, MongoDB driver, and Imagick image processing.</p>
      </>
    ),
  },
  {
    id: 17084,
    category: 'PHP',
    difficulty: 'easy',
    question: "How to use PECL extension?",
    answer: (
      <>
        <p>Install extensions using the command tool: <code>pecl install extensionName</code>, and enable them by adding <code>extension=extensionName.so</code> to php.ini.</p>
      </>
    ),
  },
  {
    id: 17085,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is Gd PHP?",
    answer: (
      <>
        <p>An extension library utilized to create and manipulate image files (JPEG, PNG, GIF) directly inside PHP script streams.</p>
      </>
    ),
  },
  {
    id: 17086,
    category: 'PHP',
    difficulty: 'hard',
    question: "What is Scripting Engine?",
    answer: (
      <>
        <p>The core parser interpreter compilation component that reads, processes, compiles, and runs PHP script files (e.g. Zend Engine).</p>
      </>
    ),
  },
  {
    id: 17087,
    category: 'PHP',
    difficulty: 'hard',
    question: "What is the use of Scripting Engine?",
    answer: (
      <>
        <p>Translates human-readable script files into intermediate binary instructions (opcodes) and executes them on the host system.</p>
      </>
    ),
  },
  {
    id: 17088,
    category: 'PHP',
    difficulty: 'medium',
    question: "Highlight the differences between PECL and PEAR.",
    answer: (
      <>
        <ul><li><strong>PEAR:</strong> Contains reusable library packages written in pure PHP code.</li><li><strong>PECL:</strong> Contains low-level compiled extensions written in C.</li></ul>
      </>
    ),
  },
  {
    id: 17089,
    category: 'PHP',
    difficulty: 'medium',
    question: "Draw a comparison between PHP 5 and PHP 7.",
    answer: (
      <>
        <ul><li><strong>PHP 5:</strong> Memory overheads, slower engine compiler, dynamic type enforcement.</li><li><strong>PHP 7:</strong> Twice as fast via Zend Engine 3, return type declarations, lower RAM footprint.</li></ul>
      </>
    ),
  },
  {
    id: 17090,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is a list in PHP?",
    answer: (
      <>
        <p>A language construct used to assign a list of variables in one operation from array elements: <br/> <code>list($a, $b) = $myArray;</code></p>
      </>
    ),
  },
  {
    id: 17091,
    category: 'PHP',
    difficulty: 'easy',
    question: "What are access specifiers in PHP?",
    answer: (
      <>
        <p>Keywords that define the visibility scope of properties and methods inside classes: public, protected, and private.</p>
      </>
    ),
  },
  {
    id: 17092,
    category: 'PHP',
    difficulty: 'easy',
    question: "Explain different types of access specifiers.",
    answer: (
      <>
        <p>public methods can be accessed anywhere. protected methods can only be accessed by the parent class and subclasses. private methods can only be accessed inside the parent class.</p>
      </>
    ),
  },
  {
    id: 17093,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is nowdoc in PHP?",
    answer: (
      <>
        <p>A string syntax format similar to single quotes where variables are not parsed: <br/> <code>$str = &lt;&lt;&lt;'EOD'<br/>$variableName<br/>EOD;</code></p>
      </>
    ),
  },
  {
    id: 17094,
    category: 'PHP',
    difficulty: 'medium',
    question: "What is heredoc in PHP?",
    answer: (
      <>
        <p>A string syntax format similar to double quotes where variables are parsed dynamically: <br/> <code>$str = &lt;&lt;&lt;EOD<br/>$variableName<br/>EOD;</code></p>
      </>
    ),
  },
  {
    id: 17095,
    category: 'PHP',
    difficulty: 'easy',
    question: "Difference between nowdoc and heredoc.",
    answer: (
      <>
        <p>heredoc parses embedded variables dynamically. nowdoc treats strings literally without evaluating variables.</p>
      </>
    ),
  },
  {
    id: 17096,
    category: 'PHP',
    difficulty: 'easy',
    question: "How to terminate the execution of a script in PHP?",
    answer: (
      <>
        <p>Terminate script executions using the <code>exit()</code> or <code>die()</code> statements.</p>
      </>
    ),
  },
  {
    id: 17097,
    category: 'PHP',
    difficulty: 'easy',
    question: "How long is SHA256 hash in PHP?",
    answer: (
      <>
        <p>A SHA-256 hash returned by <code>hash('sha256', $data)</code> is always **64 characters** long in hexadecimal format.</p>
      </>
    ),
  },
  {
    id: 17098,
    category: 'PHP',
    difficulty: 'easy',
    question: "Specify different Print Functions in PHP?",
    answer: (
      <>
        <p>Functions: <code>echo</code>, <code>print</code>, <code>printf()</code>, <code>print_r()</code>, and <code>var_dump()</code>.</p>
      </>
    ),
  },
  {
    id: 17099,
    category: 'PHP',
    difficulty: 'easy',
    question: "What are the superglobals in PHP?",
    answer: (
      <>
        <p>Predefined variables always accessible: <code>$GLOBALS</code>, <code>$_SERVER</code>, <code>$_GET</code>, <code>$_POST</code>, <code>$_FILES</code>, <code>$_COOKIE</code>, <code>$_SESSION</code>, <code>$_REQUEST</code>, and <code>$_ENV</code>.</p>
      </>
    ),
  },
  {
    id: 17100,
    category: 'PHP',
    difficulty: 'easy',
    question: "What is the difference between unset() and isset() in PHP?",
    answer: (
      <>
        <ul><li><code>isset()</code>: Checks if a variable has been declared and is not NULL.</li><li><code>unset()</code>: Destroys a variable, freeing its allocated memory.</li></ul>
      </>
    ),
  },
];
