import React from 'react';

export const PYTHON_QUESTIONS = [
  {
    id: 20001,
    category: 'Python',
    difficulty: 'easy',
    question: "What is Python? What are the benefits of using Python?",
    answer: (
      <>
        <p><strong>Python</strong> is a high-level, interpreted, general-purpose programming language known for its clean, readable syntax. Benefits: easy to learn, extensive standard libraries, cross-platform portability, large community, versatility across web dev, data science, AI, and automation.</p>
      </>
    ),
  },
  {
    id: 20002,
    category: 'Python',
    difficulty: 'easy',
    question: "What is an Interpreted language?",
    answer: (
      <>
        <p>An interpreted language executes code line-by-line at runtime via an interpreter (e.g. CPython), rather than pre-compiling the entire program to machine code before execution like C/C++.</p>
      </>
    ),
  },
  {
    id: 20003,
    category: 'Python',
    difficulty: 'easy',
    question: "What is PEP 8 and why is it important?",
    answer: (
      <>
        <p><strong>PEP 8</strong> is Python's official style guide defining coding conventions (indentation, naming, line length). It promotes consistency and readability across Python codebases, making collaboration and code review easier.</p>
      </>
    ),
  },
  {
    id: 20004,
    category: 'Python',
    difficulty: 'easy',
    question: "What are lists and tuples? What is the key difference between the two?",
    answer: (
      <>
        <ul><li><strong>List:</strong> Mutable ordered sequence — elements can be added, removed, or changed: <code>[1, 2, 3]</code></li><li><strong>Tuple:</strong> Immutable ordered sequence — once created, elements cannot be changed: <code>(1, 2, 3)</code></li></ul>
      </>
    ),
  },
  {
    id: 20005,
    category: 'Python',
    difficulty: 'easy',
    question: "What is pass in Python?",
    answer: (
      <>
        <p><code>pass</code> is a null statement used as a placeholder where syntax requires a statement but no action is needed (e.g. empty functions, loops, or class bodies).</p>
      </>
    ),
  },
  {
    id: 20006,
    category: 'Python',
    difficulty: 'medium',
    question: "What are global, protected and private attributes in Python?",
    answer: (
      <>
        <ul><li><strong>Global:</strong> No prefix — accessible everywhere.</li><li><strong>Protected:</strong> Single underscore prefix (<code>_name</code>) — convention for internal use, not enforced.</li><li><strong>Private:</strong> Double underscore prefix (<code>__name</code>) — name-mangled to prevent access from outside the class.</li></ul>
      </>
    ),
  },
  {
    id: 20007,
    category: 'Python',
    difficulty: 'easy',
    question: "What is the use of self in Python?",
    answer: (
      <>
        <p><code>self</code> refers to the current instance of a class, passed as the first argument to instance methods, allowing access to the instance's attributes and methods.</p>
      </>
    ),
  },
  {
    id: 20008,
    category: 'Python',
    difficulty: 'easy',
    question: "What is break, continue and pass in Python?",
    answer: (
      <>
        <ul><li><strong>break:</strong> Exits the current loop immediately.</li><li><strong>continue:</strong> Skips the current iteration and moves to the next.</li><li><strong>pass:</strong> A no-op placeholder statement; does nothing.</li></ul>
      </>
    ),
  },
  {
    id: 20009,
    category: 'Python',
    difficulty: 'medium',
    question: "What is the difference between Python Arrays and lists?",
    answer: (
      <>
        <ul><li><strong>List:</strong> Can store mixed data types, built-in, more flexible.</li><li><strong>Array (array module/NumPy):</strong> Stores homogeneous data types, more memory-efficient, faster for numerical operations.</li></ul>
      </>
    ),
  },
  {
    id: 20010,
    category: 'Python',
    difficulty: 'medium',
    question: "What is lambda in Python? Why is it used?",
    answer: (
      <>
        <p>A <code>lambda</code> is an anonymous, single-expression inline function: <code>square = lambda x: x ** 2</code>. Used for short-lived operations as callbacks in map/filter/sorted without defining full named functions.</p>
      </>
    ),
  },
  {
    id: 20011,
    category: 'Python',
    difficulty: 'medium',
    question: "What is pickling and unpickling?",
    answer: (
      <>
        <ul><li><strong>Pickling:</strong> Serializing a Python object hierarchy to a byte stream using the <code>pickle.dump()</code> function.</li><li><strong>Unpickling:</strong> Deserializing the byte stream back to a Python object using <code>pickle.load()</code>.</li></ul>
      </>
    ),
  },
  {
    id: 20012,
    category: 'Python',
    difficulty: 'medium',
    question: "What are generators in Python?",
    answer: (
      <>
        <p>Generators are functions that use the <code>yield</code> keyword to produce a sequence of values lazily on demand, pausing execution between yields. They are memory-efficient for large data streams.</p>
      </>
    ),
  },
  {
    id: 20013,
    category: 'Python',
    difficulty: 'medium',
    question: "What is PYTHONPATH in Python?",
    answer: (
      <>
        <p>An environment variable specifying a list of directories Python searches when importing modules, extending the default module search path beyond the standard library.</p>
      </>
    ),
  },
  {
    id: 20014,
    category: 'Python',
    difficulty: 'medium',
    question: "How are arguments passed by value or by reference in python?",
    answer: (
      <>
        <p>Python uses <strong>pass by object reference</strong> (pass by assignment). Mutable objects (lists, dicts) can be modified in-place inside functions, while immutable objects (int, str, tuple) cannot be reassigned externally.</p>
      </>
    ),
  },
  {
    id: 20015,
    category: 'Python',
    difficulty: 'medium',
    question: "How is memory managed in Python?",
    answer: (
      <>
        <p>Python manages memory automatically through a private heap (allocates/deallocates objects), reference counting (primary mechanism), and a cyclic garbage collector for handling circular references.</p>
      </>
    ),
  },
  {
    id: 20016,
    category: 'Python',
    difficulty: 'easy',
    question: "Is indentation required in python?",
    answer: (
      <>
        <p>Yes. Python uses indentation (whitespace) to define code blocks (functions, loops, conditionals) instead of curly braces. Incorrect indentation causes an <code>IndentationError</code>.</p>
      </>
    ),
  },
  {
    id: 20017,
    category: 'Python',
    difficulty: 'easy',
    question: "What are functions in Python?",
    answer: (
      <>
        <p>Reusable, named blocks of code defined using <code>def</code> that perform specific tasks, accept parameters, and optionally return values: <code>def greet(name): return f'Hello, {"{"}name{"}"}'</code></p>
      </>
    ),
  },
  {
    id: 20018,
    category: 'Python',
    difficulty: 'easy',
    question: "What is a dictionary in Python?",
    answer: (
      <>
        <p>An unordered, mutable collection of key-value pairs enclosed in curly braces. Keys must be unique and hashable: <code>person = {"{"}'name': 'Alice', 'age': 30{"}"}</code></p>
      </>
    ),
  },
  {
    id: 20019,
    category: 'Python',
    difficulty: 'easy',
    question: "How to remove values to a python array?",
    answer: (
      <>
        <p>Remove by value using <code>list.remove(value)</code>, by index using <code>list.pop(index)</code>, or delete using <code>del list[index]</code>. For NumPy arrays, use <code>numpy.delete(arr, index)</code>.</p>
      </>
    ),
  },
  {
    id: 20020,
    category: 'Python',
    difficulty: 'medium',
    question: "Does python support multiple inheritance?",
    answer: (
      <>
        <p>Yes. Python supports multiple inheritance, allowing a class to inherit from multiple parent classes: <code>class Child(Parent1, Parent2): pass</code>. Method Resolution Order (MRO) using C3 linearization resolves conflicts.</p>
      </>
    ),
  },
  {
    id: 20021,
    category: 'Python',
    difficulty: 'easy',
    question: "What are Python's key features?",
    answer: (
      <>
        <p>Features: interpreted, dynamically typed, object-oriented, extensive standard library, automatic memory management, cross-platform, supports functional and procedural programming paradigms.</p>
      </>
    ),
  },
  {
    id: 20022,
    category: 'Python',
    difficulty: 'medium',
    question: "What are the differences between Python 2 and Python 3?",
    answer: (
      <>
        <ul><li><strong>Print:</strong> Python 2 uses <code>print x</code>; Python 3 uses <code>print(x)</code>.</li><li><strong>Integer division:</strong> Python 2 <code>3/2=1</code>; Python 3 <code>3/2=1.5</code>.</li><li><strong>Unicode:</strong> Python 3 defaults all strings to Unicode.</li><li>Python 2 reached end-of-life in 2020.</li></ul>
      </>
    ),
  },
  {
    id: 20023,
    category: 'Python',
    difficulty: 'hard',
    question: "Explain the Global Interpreter Lock (GIL) in Python?",
    answer: (
      <>
        <p>The GIL is a mutex in CPython that allows only one thread to execute Python bytecode at a time, preventing true multi-core CPU parallelism in multi-threaded Python programs. Use multiprocessing or async for concurrency.</p>
      </>
    ),
  },
  {
    id: 20024,
    category: 'Python',
    difficulty: 'easy',
    question: "How do you handle exceptions in Python?",
    answer: (
      <>
        <p>Using try/except/else/finally blocks: <code>try: risky() except ValueError as e: handle(e) else: success() finally: cleanup()</code></p>
      </>
    ),
  },
  {
    id: 20025,
    category: 'Python',
    difficulty: 'medium',
    question: "What are Python decorators, and how do they work?",
    answer: (
      <>
        <p>Decorators are functions that wrap other functions/classes to extend behavior without modifying the original code, applied using <code>@decorator_name</code> syntax above the function definition.</p>
      </>
    ),
  },
  {
    id: 20026,
    category: 'Python',
    difficulty: 'medium',
    question: "Explain the difference between a shallow copy and a deep copy in Python?",
    answer: (
      <>
        <ul><li><strong>Shallow copy (<code>copy.copy()</code>):</strong> Creates a new object but references the same nested objects.</li><li><strong>Deep copy (<code>copy.deepcopy()</code>):</strong> Creates a completely independent copy including all nested objects.</li></ul>
      </>
    ),
  },
  {
    id: 20027,
    category: 'Python',
    difficulty: 'easy',
    question: "How do you handle file I/O operations in Python?",
    answer: (
      <>
        <p>Use the built-in <code>open()</code> function with modes ('r', 'w', 'a', 'rb') and the <code>with</code> statement for automatic file closing: <code>with open('file.txt', 'r') as f: content = f.read()</code></p>
      </>
    ),
  },
  {
    id: 20028,
    category: 'Python',
    difficulty: 'hard',
    question: "How can you profile and optimize Python code?",
    answer: (
      <>
        <p>Profile using <code>cProfile</code> or <code>timeit</code>. Optimize by: using built-in functions, list comprehensions, NumPy for numerical work, avoiding global variables, and using generators for large datasets.</p>
      </>
    ),
  },
  {
    id: 20029,
    category: 'Python',
    difficulty: 'easy',
    question: "How to handle errors and exceptions in Python?",
    answer: (
      <>
        <p>Use try/except blocks to catch exceptions, raise custom exceptions with <code>raise</code>, and use finally for cleanup. Define custom exception classes inheriting from <code>Exception</code>.</p>
      </>
    ),
  },
  {
    id: 20030,
    category: 'Python',
    difficulty: 'easy',
    question: "What is the use of the pass statement in Python?",
    answer: (
      <>
        <p><code>pass</code> acts as a no-operation placeholder allowing syntactically required code blocks (class bodies, function bodies, loop blocks) to remain empty without causing errors.</p>
      </>
    ),
  },
  {
    id: 20031,
    category: 'Python',
    difficulty: 'easy',
    question: "Explain the concept of a Python module?",
    answer: (
      <>
        <p>A module is a single Python file (.py) containing functions, classes, and variables that can be imported and reused in other Python scripts using <code>import module_name</code>.</p>
      </>
    ),
  },
  {
    id: 20032,
    category: 'Python',
    difficulty: 'medium',
    question: "How do you handle missing keys in a dictionary?",
    answer: (
      <>
        <p>Use <code>dict.get(key, default)</code> to return a default instead of raising KeyError, or <code>collections.defaultdict</code> to auto-initialize missing keys with a default factory.</p>
      </>
    ),
  },
  {
    id: 20033,
    category: 'Python',
    difficulty: 'easy',
    question: "What are the differences between a list and a set in Python?",
    answer: (
      <>
        <ul><li><strong>List:</strong> Ordered, allows duplicates, supports indexing: <code>[1, 2, 2]</code></li><li><strong>Set:</strong> Unordered, no duplicates, does not support indexing: <code>{"{"}1, 2{"}"}</code></li></ul>
      </>
    ),
  },
  {
    id: 20034,
    category: 'Python',
    difficulty: 'hard',
    question: "Explain the concept of name mangling in Python?",
    answer: (
      <>
        <p>Name mangling transforms identifiers with double underscore prefix (<code>__attr</code>) to <code>_ClassName__attr</code> at compile time, making them harder to access from outside the class and preventing accidental override in subclasses.</p>
      </>
    ),
  },
  {
    id: 20035,
    category: 'Python',
    difficulty: 'medium',
    question: "How do you handle recursion depth errors in Python?",
    answer: (
      <>
        <p>Increase the recursion limit using <code>sys.setrecursionlimit(n)</code>, or refactor recursive algorithms to iterative ones using an explicit stack to avoid <code>RecursionError</code>.</p>
      </>
    ),
  },
  {
    id: 20036,
    category: 'Python',
    difficulty: 'medium',
    question: "What is the difference between the is and == operators in Python?",
    answer: (
      <>
        <ul><li><strong>==:</strong> Checks value equality — whether two objects have the same value.</li><li><strong>is:</strong> Checks identity equality — whether two variables point to the exact same object in memory.</li></ul>
      </>
    ),
  },
  {
    id: 20037,
    category: 'Python',
    difficulty: 'hard',
    question: "How do you handle circular imports in Python?",
    answer: (
      <>
        <p>Resolve by: moving imports inside functions/methods, restructuring modules to remove circular dependencies, using importlib.import_module() lazily, or merging modules.</p>
      </>
    ),
  },
  {
    id: 20038,
    category: 'Python',
    difficulty: 'medium',
    question: "What is the purpose of the yield keyword in Python?",
    answer: (
      <>
        <p><code>yield</code> turns a function into a generator, pausing execution and returning a value to the caller without terminating the function. Execution resumes from the same point on the next call to <code>next()</code>.</p>
      </>
    ),
  },
  {
    id: 20039,
    category: 'Python',
    difficulty: 'hard',
    question: "What are metaclasses in Python?",
    answer: (
      <>
        <p>Metaclasses are classes of classes — they define how classes are created and behave. The default metaclass is <code>type</code>. Custom metaclasses inherit from <code>type</code> and override <code>__new__</code> or <code>__init__</code> to customize class creation.</p>
      </>
    ),
  },
  {
    id: 20040,
    category: 'Python',
    difficulty: 'easy',
    question: "How do you handle and raise exceptions in Python?",
    answer: (
      <>
        <p>Raise exceptions using <code>raise ExceptionType('message')</code>. Handle them with try/except blocks. Define custom exceptions by subclassing <code>Exception</code> and re-raise using bare <code>raise</code> inside except blocks.</p>
      </>
    ),
  },
  {
    id: 20041,
    category: 'Python',
    difficulty: 'medium',
    question: "Explain the differences between instance methods, class methods, and static methods in Python?",
    answer: (
      <>
        <ul><li><strong>Instance method:</strong> Takes <code>self</code>, accesses instance data.</li><li><strong>Class method (@classmethod):</strong> Takes <code>cls</code>, accesses class-level data.</li><li><strong>Static method (@staticmethod):</strong> Takes neither, independent utility function inside the class.</li></ul>
      </>
    ),
  },
  {
    id: 20042,
    category: 'Python',
    difficulty: 'hard',
    question: "How can you handle memory leaks in Python?",
    answer: (
      <>
        <p>Use <code>tracemalloc</code> to track allocations, <code>gc.collect()</code> to force garbage collection, avoid circular references, use weak references (<code>weakref</code> module), and close resources explicitly with context managers.</p>
      </>
    ),
  },
  {
    id: 20043,
    category: 'Python',
    difficulty: 'easy',
    question: "What is the purpose of the __init__ method in Python classes?",
    answer: (
      <>
        <p><code>__init__</code> is the constructor method called automatically when a new instance is created, used to initialize the instance's attributes with values passed during instantiation.</p>
      </>
    ),
  },
  {
    id: 20044,
    category: 'Python',
    difficulty: 'hard',
    question: "Explain the concept of monkey patching in Python.",
    answer: (
      <>
        <p>Monkey patching dynamically modifies a class or module at runtime by replacing or adding attributes/methods, typically used in testing to mock behavior without changing source code.</p>
      </>
    ),
  },
  {
    id: 20045,
    category: 'Python',
    difficulty: 'easy',
    question: "How do you remove duplicate elements from a list in Python?",
    answer: (
      <>
        <p>Convert to a set: <code>list(set(my_list))</code> (loses order), or use dict.fromkeys to preserve order: <code>list(dict.fromkeys(my_list))</code>.</p>
      </>
    ),
  },
  {
    id: 20046,
    category: 'Python',
    difficulty: 'easy',
    question: "Explain the difference between a module and a package in Python.",
    answer: (
      <>
        <ul><li><strong>Module:</strong> A single <code>.py</code> file containing Python code.</li><li><strong>Package:</strong> A directory containing multiple modules and a special <code>__init__.py</code> file, organizing related modules into a namespace.</li></ul>
      </>
    ),
  },
  {
    id: 20047,
    category: 'Python',
    difficulty: 'medium',
    question: "How do you handle and process command-line arguments in Python?",
    answer: (
      <>
        <p>Use <code>sys.argv</code> for raw access, or the <code>argparse</code> module for structured parsing with named arguments, help messages, and type validation.</p>
      </>
    ),
  },
  {
    id: 20048,
    category: 'Python',
    difficulty: 'medium',
    question: "Explain the concept of duck typing in Python.",
    answer: (
      <>
        <p>Duck typing means Python doesn't check object types explicitly; if an object has the required methods/attributes, it can be used regardless of its class. 'If it walks like a duck and quacks like a duck, it is a duck.'</p>
      </>
    ),
  },
  {
    id: 20049,
    category: 'Python',
    difficulty: 'medium',
    question: "What is the purpose of the else clause in a try statement?",
    answer: (
      <>
        <p>The <code>else</code> block executes only if the <code>try</code> block completes without raising any exception, used to place code that should run only on success.</p>
      </>
    ),
  },
  {
    id: 20050,
    category: 'Python',
    difficulty: 'easy',
    question: "How can you create a virtual environment in Python?",
    answer: (
      <>
        <p>Create using: <code>python -m venv env_name</code>, activate on Windows with <code>env_name\Scripts\activate</code>, on Unix with <code>source env_name/bin/activate</code>.</p>
      </>
    ),
  },
  {
    id: 20051,
    category: 'Python',
    difficulty: 'easy',
    question: "How do you implement a stack in Python?",
    answer: (
      <>
        <p>Use a list with <code>append()</code> for push and <code>pop()</code> for pop operations (LIFO), or <code>collections.deque</code> for thread-safe stack operations.</p>
      </>
    ),
  },
  {
    id: 20052,
    category: 'Python',
    difficulty: 'easy',
    question: "What is the purpose of the finally clause in a try statement?",
    answer: (
      <>
        <p>The <code>finally</code> block always executes regardless of whether an exception occurred or not, used for cleanup operations like closing files or database connections.</p>
      </>
    ),
  },
  {
    id: 20053,
    category: 'Python',
    difficulty: 'easy',
    question: "How can you find the current working directory in Python?",
    answer: (
      <>
        <p>Use <code>os.getcwd()</code> from the <code>os</code> module, or <code>Path.cwd()</code> from the <code>pathlib</code> module.</p>
      </>
    ),
  },
  {
    id: 20054,
    category: 'Python',
    difficulty: 'easy',
    question: "What is the use of the with statement in Python?",
    answer: (
      <>
        <p>The <code>with</code> statement implements context managers, automatically handling resource setup and teardown (e.g. file closing) even if exceptions occur: <code>with open('file.txt') as f:</code></p>
      </>
    ),
  },
  {
    id: 20055,
    category: 'Python',
    difficulty: 'easy',
    question: "How do you handle file I/O in Python?",
    answer: (
      <>
        <p>Open files with <code>open(filename, mode)</code>. Read with <code>read()</code>, <code>readline()</code>, <code>readlines()</code>. Write with <code>write()</code>. Always use <code>with</code> blocks for automatic closing.</p>
      </>
    ),
  },
  {
    id: 20056,
    category: 'Python',
    difficulty: 'medium',
    question: "How do you handle and catch specific exceptions in Python?",
    answer: (
      <>
        <p>Chain multiple except clauses: <code>except ValueError: ... except TypeError: ... except (KeyError, IndexError): ...</code> Use <code>except Exception as e</code> to catch and inspect all standard exceptions.</p>
      </>
    ),
  },
  {
    id: 20057,
    category: 'Python',
    difficulty: 'hard',
    question: "Explain the concept of method resolution order (MRO) in Python.",
    answer: (
      <>
        <p>MRO defines the order Python searches parent classes for inherited methods in multiple inheritance scenarios. Python uses the C3 linearization algorithm. Inspect with <code>ClassName.__mro__</code>.</p>
      </>
    ),
  },
  {
    id: 20058,
    category: 'Python',
    difficulty: 'medium',
    question: "What is the purpose of the __name__ variable in Python?",
    answer: (
      <>
        <p><code>__name__</code> is set to <code>'__main__'</code> when a module is run directly, or to the module's name when imported. Used in <code>if __name__ == '__main__':</code> guards to control execution.</p>
      </>
    ),
  },
  {
    id: 20059,
    category: 'Python',
    difficulty: 'medium',
    question: "What is the purpose of the __str__ method in Python?",
    answer: (
      <>
        <p><code>__str__</code> defines the human-readable string representation of an object returned by <code>str(obj)</code> and <code>print(obj)</code>. Override it to provide meaningful output for custom class instances.</p>
      </>
    ),
  },
  {
    id: 20060,
    category: 'Python',
    difficulty: 'easy',
    question: "How do you perform file handling in Python?",
    answer: (
      <>
        <p>Use <code>open()</code> to create file objects, then call read/write methods. Use <code>with</code> context managers for automatic cleanup. Modes: 'r' (read), 'w' (write), 'a' (append), 'b' (binary).</p>
      </>
    ),
  },
  {
    id: 20061,
    category: 'Python',
    difficulty: 'medium',
    question: "Explain the concept of method overloading in Python?",
    answer: (
      <>
        <p>Python doesn't support traditional method overloading. Instead, use default parameter values, <code>*args</code>/<code>**kwargs</code> for variable arguments, or <code>functools.singledispatch</code> for type-based dispatch.</p>
      </>
    ),
  },
  {
    id: 20062,
    category: 'Python',
    difficulty: 'medium',
    question: "Explain the concept of a decorator in Python?",
    answer: (
      <>
        <p>A decorator is a higher-order function that takes a function as input, adds behavior, and returns the modified function. Applied with <code>@decorator</code> syntax before a function definition.</p>
      </>
    ),
  },
  {
    id: 20063,
    category: 'Python',
    difficulty: 'easy',
    question: "Name the common built-in data types in Python?",
    answer: (
      <>
        <p>Types: int, float, complex, str, bool, list, tuple, set, frozenset, dict, bytes, bytearray, and NoneType.</p>
      </>
    ),
  },
  {
    id: 20064,
    category: 'Python',
    difficulty: 'hard',
    question: "What are Python descriptors and how do they work?",
    answer: (
      <>
        <p>Descriptors are objects that define <code>__get__</code>, <code>__set__</code>, and/or <code>__delete__</code> methods, customizing attribute access on class instances. Properties, classmethod, and staticmethod are built-in descriptor implementations.</p>
      </>
    ),
  },
  {
    id: 20065,
    category: 'Python',
    difficulty: 'hard',
    question: "Explain the differences between __getattr__() and __getattribute__() in Python.",
    answer: (
      <>
        <ul><li><strong>__getattribute__():</strong> Called every time any attribute is accessed (always invoked).</li><li><strong>__getattr__():</strong> Called only when the attribute is not found through normal means (fallback handler).</li></ul>
      </>
    ),
  },
  {
    id: 20066,
    category: 'Python',
    difficulty: 'hard',
    question: "What are the differences between __new__() and __init__() methods in Python?",
    answer: (
      <>
        <ul><li><strong>__new__():</strong> Creates and returns the new instance object (called first).</li><li><strong>__init__():</strong> Initializes the already-created instance with attribute values (called second).</li></ul>
      </>
    ),
  },
  {
    id: 20067,
    category: 'Python',
    difficulty: 'easy',
    question: "How to make Python script executable on Unix/Linux systems?",
    answer: (
      <>
        <p>Add a shebang line at the top: <code>#!/usr/bin/env python3</code>, then make it executable with: <code>chmod +x script.py</code>, and run it directly: <code>./script.py</code>.</p>
      </>
    ),
  },
  {
    id: 20068,
    category: 'Python',
    difficulty: 'medium',
    question: "Explain the purpose and usage of the *args and kwargs in Python function definitions.",
    answer: (
      <>
        <ul><li><strong>*args:</strong> Collects extra positional arguments into a tuple: <code>def func(*args)</code></li><li><strong>**kwargs:</strong> Collects extra keyword arguments into a dictionary: <code>def func(**kwargs)</code></li></ul>
      </>
    ),
  },
  {
    id: 20069,
    category: 'Python',
    difficulty: 'hard',
    question: "What is the purpose of the __slots__ attribute in Python classes?",
    answer: (
      <>
        <p><code>__slots__</code> restricts instance attributes to a fixed set, preventing the creation of a <code>__dict__</code> per instance. This reduces memory usage significantly for classes with many instances.</p>
      </>
    ),
  },
  {
    id: 20070,
    category: 'Python',
    difficulty: 'medium',
    question: "Explain the concept of method chaining in Python.",
    answer: (
      <>
        <p>Method chaining allows calling multiple methods sequentially on the same object by returning <code>self</code> from each method: <code>obj.set_name('Alice').set_age(30).save()</code></p>
      </>
    ),
  },
  {
    id: 20071,
    category: 'Python',
    difficulty: 'easy',
    question: "What is type conversion in Python?",
    answer: (
      <>
        <p>Converting a value from one data type to another. Implicit (automatic by Python) or explicit (manual using int(), float(), str(), list(), etc.): <code>int('42')</code> converts string to integer.</p>
      </>
    ),
  },
  {
    id: 20072,
    category: 'Python',
    difficulty: 'easy',
    question: "Is python programming a case sensitive language?",
    answer: (
      <>
        <p>Yes. Python is case-sensitive: <code>name</code>, <code>Name</code>, and <code>NAME</code> are treated as three distinct identifiers.</p>
      </>
    ),
  },
  {
    id: 20073,
    category: 'Python',
    difficulty: 'medium',
    question: "How can you profile and optimize Python code?",
    answer: (
      <>
        <p>Use <code>cProfile</code> for function-level profiling, <code>line_profiler</code> for line-level analysis, <code>timeit</code> for micro-benchmarks. Optimize hot paths using NumPy, Cython, or algorithmic improvements.</p>
      </>
    ),
  },
  {
    id: 20074,
    category: 'Python',
    difficulty: 'hard',
    question: "What is the purpose of the async and await keywords in Python?",
    answer: (
      <>
        <p><code>async def</code> defines a coroutine function. <code>await</code> suspends the coroutine until the awaited async operation completes, enabling non-blocking concurrent I/O without threads using the asyncio event loop.</p>
      </>
    ),
  },
  {
    id: 20075,
    category: 'Python',
    difficulty: 'medium',
    question: "What are context managers in Python? Provide an example.",
    answer: (
      <>
        <p>Objects implementing <code>__enter__</code> and <code>__exit__</code> for resource management. Example: <code>with open('file.txt') as f: data = f.read()</code> — file closes automatically when block exits.</p>
      </>
    ),
  },
  {
    id: 20076,
    category: 'Python',
    difficulty: 'hard',
    question: "Please explain the usage of the split(), sub(), and subn() methods in Python's 're' module.",
    answer: (
      <>
        <ul><li><strong>re.split(pattern, str):</strong> Splits string at regex matches.</li><li><strong>re.sub(pattern, repl, str):</strong> Replaces all matches with repl.</li><li><strong>re.subn(pattern, repl, str):</strong> Same as sub() but also returns count of substitutions made.</li></ul>
      </>
    ),
  },
  {
    id: 20077,
    category: 'Python',
    difficulty: 'easy',
    question: "What is meant by Python literals?",
    answer: (
      <>
        <p>Literals are fixed raw values directly assigned to variables in source code: integer literals (<code>42</code>), float literals (<code>3.14</code>), string literals (<code>'hello'</code>), boolean literals (<code>True</code>), and None.</p>
      </>
    ),
  },
  {
    id: 20078,
    category: 'Python',
    difficulty: 'medium',
    question: "What are Dict and List comprehensions?",
    answer: (
      <>
        <ul><li><strong>List comprehension:</strong> <code>[x*2 for x in range(5)]</code> — concise list creation.</li><li><strong>Dict comprehension:</strong> <code>{"{"}k: v for k, v in items.items(){"}"}</code> — concise dictionary creation.</li></ul>
      </>
    ),
  },
  {
    id: 20079,
    category: 'Python',
    difficulty: 'easy',
    question: "How do you write comments in python?",
    answer: (
      <>
        <p>Single-line comments use <code>#</code>: <code># This is a comment</code>. Multi-line comments use triple quotes (though technically docstrings): <code>'''multi-line'''</code> or <code>"""multi-line"""</code>.</p>
      </>
    ),
  },
  {
    id: 20080,
    category: 'Python',
    difficulty: 'easy',
    question: "What is Tkinter?",
    answer: (
      <>
        <p>Tkinter is Python's standard built-in GUI (Graphical User Interface) toolkit, providing widgets like buttons, labels, text boxes, and windows for building desktop applications.</p>
      </>
    ),
  },
  {
    id: 20081,
    category: 'Python',
    difficulty: 'medium',
    question: "What is the purpose of file-related modules in Python, and can you provide examples of such modules?",
    answer: (
      <>
        <p>File modules handle file system operations. Examples: <code>os</code> (file paths, directories), <code>shutil</code> (file copying), <code>pathlib</code> (object-oriented paths), <code>glob</code> (file pattern matching), and <code>zipfile</code> (ZIP archives).</p>
      </>
    ),
  },
  {
    id: 20082,
    category: 'Python',
    difficulty: 'hard',
    question: "Why isn't all memory deallocated when Python exits?",
    answer: (
      <>
        <p>Python's memory allocator manages its own internal pools. On interpreter shutdown, not all memory is explicitly freed because the OS reclaims process memory anyway, and freeing every object would slow exit time unnecessarily.</p>
      </>
    ),
  },
  {
    id: 20083,
    category: 'Python',
    difficulty: 'easy',
    question: "What are Python virtual environments, and why are they used?",
    answer: (
      <>
        <p>Isolated Python environments with separate package installations, preventing dependency conflicts between different projects. Created with <code>venv</code> or <code>virtualenv</code>: <code>python -m venv myenv</code>.</p>
      </>
    ),
  },
  {
    id: 20084,
    category: 'Python',
    difficulty: 'medium',
    question: "How can you measure the execution time of a Python program?",
    answer: (
      <>
        <p>Use <code>timeit</code> module: <code>timeit.timeit('code', number=1000)</code>. Or use <code>time.perf_counter()</code> for wall-clock timing around code blocks.</p>
      </>
    ),
  },
  {
    id: 20085,
    category: 'Python',
    difficulty: 'easy',
    question: "Which two loop statements are commonly used in Python?",
    answer: (
      <>
        <p>The <code>for</code> loop (iterates over sequences/iterables) and the <code>while</code> loop (repeats while a condition is True).</p>
      </>
    ),
  },
  {
    id: 20086,
    category: 'Python',
    difficulty: 'easy',
    question: "What is the meaning of PEP 8?",
    answer: (
      <>
        <p>PEP 8 (Python Enhancement Proposal 8) is the official style guide for Python code, covering naming conventions, indentation (4 spaces), line length (79 chars), blank lines, and import ordering.</p>
      </>
    ),
  },
  {
    id: 20087,
    category: 'Python',
    difficulty: 'easy',
    question: "In what situations would you use triple quotes as delimiters in Python?",
    answer: (
      <>
        <p>Triple quotes (<code>'''</code> or <code>"""</code>) are used for: multi-line strings, docstrings (function/class/module documentation), and strings containing both single and double quotes.</p>
      </>
    ),
  },
  {
    id: 20088,
    category: 'Python',
    difficulty: 'easy',
    question: "What does __init__() mean in Python?",
    answer: (
      <>
        <p><code>__init__()</code> is the special constructor method automatically called when a new class instance is created, used to set initial attribute values for the object.</p>
      </>
    ),
  },
  {
    id: 20089,
    category: 'Python',
    difficulty: 'easy',
    question: "What is a docstring in Python?",
    answer: (
      <>
        <p>A docstring is a string literal as the first statement in a module, function, class, or method body that documents its purpose. Accessed via <code>__doc__</code> attribute or <code>help()</code>.</p>
      </>
    ),
  },
  {
    id: 20090,
    category: 'Python',
    difficulty: 'easy',
    question: "Is it possible to create multi-line comments in Python?",
    answer: (
      <>
        <p>Python has no official multi-line comment syntax. Common conventions: use multiple <code>#</code> lines, or triple-quoted strings (<code>'''...'''</code>) that aren't assigned to variables (they're technically string literals, not comments).</p>
      </>
    ),
  },
  {
    id: 20091,
    category: 'Python',
    difficulty: 'medium',
    question: "What are the benefits of using Django?",
    answer: (
      <>
        <p>Django benefits: built-in ORM, admin panel, authentication system, URL routing, template engine, security features (CSRF, XSS protection), scalability, and a large ecosystem of packages.</p>
      </>
    ),
  },
  {
    id: 20092,
    category: 'Python',
    difficulty: 'easy',
    question: "How can we create an empty class in Python?",
    answer: (
      <>
        <p>Use the <code>pass</code> statement as the class body: <code>class EmptyClass: pass</code></p>
      </>
    ),
  },
  {
    id: 20093,
    category: 'Python',
    difficulty: 'easy',
    question: "Define Constructor in Python?",
    answer: (
      <>
        <p>A constructor is the special <code>__init__</code> method automatically invoked when a class is instantiated, initializing the new object's attributes: <code>def __init__(self, name): self.name = name</code></p>
      </>
    ),
  },
  {
    id: 20094,
    category: 'Python',
    difficulty: 'medium',
    question: "How do we find bugs and statistical problems in Python?",
    answer: (
      <>
        <p>Use <code>pylint</code> or <code>flake8</code> for static analysis, <code>pdb</code> for debugging, <code>pytest</code> for unit tests, and <code>cProfile</code> for performance profiling.</p>
      </>
    ),
  },
  {
    id: 20095,
    category: 'Python',
    difficulty: 'medium',
    question: "Differentiate between SciPy and NumPy?",
    answer: (
      <>
        <ul><li><strong>NumPy:</strong> Provides multi-dimensional arrays, basic mathematical functions, and linear algebra.</li><li><strong>SciPy:</strong> Built on NumPy, providing advanced scientific algorithms (optimization, integration, signal processing, statistics).</li></ul>
      </>
    ),
  },
  {
    id: 20096,
    category: 'Python',
    difficulty: 'medium',
    question: "Name some common security issues that can be avoided by using Django?",
    answer: (
      <>
        <p>Django protects against: SQL injection (ORM parameterized queries), XSS (template auto-escaping), CSRF (CSRF middleware tokens), clickjacking (X-Frame-Options headers), and sensitive data exposure.</p>
      </>
    ),
  },
  {
    id: 20097,
    category: 'Python',
    difficulty: 'medium',
    question: "Can Python make use of access specifiers?",
    answer: (
      <>
        <p>Python does not enforce access specifiers like Java/C++. It uses naming conventions: single underscore (<code>_attr</code>) for protected, double underscore (<code>__attr</code>) for name-mangled private, with no hard enforcement.</p>
      </>
    ),
  },
  {
    id: 20098,
    category: 'Python',
    difficulty: 'easy',
    question: "What are the OOP's concepts available in Python?",
    answer: (
      <>
        <p>OOP concepts: Encapsulation, Abstraction, Inheritance (single and multiple), Polymorphism, and method overriding. Implemented via class definitions, <code>@abstractmethod</code>, and super().</p>
      </>
    ),
  },
  {
    id: 20099,
    category: 'Python',
    difficulty: 'easy',
    question: "Define PYTHONPATH?",
    answer: (
      <>
        <p>PYTHONPATH is an environment variable listing directories that Python adds to <code>sys.path</code> at startup, allowing Python to find and import modules from those directories.</p>
      </>
    ),
  },
  {
    id: 20100,
    category: 'Python',
    difficulty: 'medium',
    question: "What is the purpose of the 'super' keyword in Python?",
    answer: (
      <>
        <p><code>super()</code> returns a proxy object of the parent class, allowing child classes to call parent class methods (especially <code>__init__</code>) without hardcoding the parent class name: <code>super().__init__(args)</code></p>
      </>
    ),
  },
];
