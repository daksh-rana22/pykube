import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  FiSearch, FiChevronDown, FiZap, FiBook, FiTarget,
  FiMessageCircle, FiClock, FiStar, FiCheckCircle, FiAward
} from 'react-icons/fi';
import '../styles/InterviewPage.css';

/* ─── Data ─────────────────────────────────────────────────── */
const CATEGORIES = [
  'All',
  'Advanced Java',
  'Artificial intelligence',
  'AWS',
  'Business Intelligence',
  'C#',
  'Core Java',
  'Coding',
  'Cyber Security',
  'Data Analyst',
  'Data Science',
  'Deep Learning',
  'DOCKER',
  'Excel',
  'Express.js',
  'Full Stack',
  'GitHub',
  'Hibernate',
  'Informatica',
  'JavaScript',
  'Jenkins',
  'JUnit',
  'Machine Learning',
  'MEAN Stack',
  'MERN Stack',
  'Microservices',
  'MongoDB',
  'NLP',
  'PHP',
  'PL/SQL',
  'Power BI',
  'Python',
  'PyTorch',
  'REST API',
  'R Programming',
  'SAAS',
  'SAS',
  'Software Testing',
  'Spring Boot',
  'SCALA',
  'SOAP Web Services',
  'SQL',
  'TensorFlow',
  'Tableau'
];

const QUESTIONS = [
  /* ── Python ── */
  {
    id: 1,
    category: 'Python',
    difficulty: 'easy',
    question: 'What is the difference between a list and a tuple in Python?',
    answer: (
      <>
        <p>Lists and tuples are both sequence types, but the key difference is <strong>mutability</strong>:</p>
        <ul>
          <li><strong>List</strong> — mutable; elements can be added, removed, or changed after creation.</li>
          <li><strong>Tuple</strong> — immutable; once created, its elements cannot be changed.</li>
        </ul>
        <div className="qa-code-block">{`# List (mutable)
my_list = [1, 2, 3]
my_list.append(4)   # ✅ works

# Tuple (immutable)
my_tuple = (1, 2, 3)
my_tuple[0] = 99    # ❌ TypeError`}</div>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Use tuples when you want to ensure data integrity (e.g., coordinates, RGB values) and for slightly better performance.
        </div>
      </>
    ),
  },
  {
    id: 2,
    category: 'Python',
    difficulty: 'medium',
    question: 'Explain Python decorators with an example.',
    answer: (
      <>
        <p>A <strong>decorator</strong> is a function that takes another function as input, adds some behavior around it, and returns a new function. They use the <code>@</code> syntax sugar.</p>
        <div className="qa-code-block">{`import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time()-start:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(0.5)

slow_function()  # slow_function took 0.5001s`}</div>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Common built-in decorators: <code>@staticmethod</code>, <code>@classmethod</code>, <code>@property</code>. Always use <code>functools.wraps</code> in production decorators to preserve metadata.
        </div>
      </>
    ),
  },
  {
    id: 3,
    category: 'Python',
    difficulty: 'hard',
    question: 'What are Python generators and how do they differ from regular functions?',
    answer: (
      <>
        <p>A <strong>generator</strong> is a special function that uses <code>yield</code> instead of <code>return</code>. It produces values lazily — one at a time — rather than building a full list in memory.</p>
        <ul>
          <li>Regular functions execute fully and return a single value.</li>
          <li>Generator functions return a <em>generator object</em> and pause at each <code>yield</code>.</li>
          <li>Generators are memory-efficient for large datasets.</li>
        </ul>
        <div className="qa-code-block">{`def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

gen = fibonacci()
print([next(gen) for _ in range(8)])
# [0, 1, 1, 2, 3, 5, 8, 13]`}</div>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Use generators when processing large files, streaming data, or building pipelines — they avoid loading everything into RAM.
        </div>
      </>
    ),
  },

  /* ── Java ── */
  {
    id: 4,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the difference between == and .equals() in Java?',
    answer: (
      <>
        <p><code>==</code> compares <strong>references</strong> (memory addresses), while <code>.equals()</code> compares <strong>content</strong> (values).</p>
        <div className="qa-code-block">{`String a = new String("hello");
String b = new String("hello");

System.out.println(a == b);       // false (different objects)
System.out.println(a.equals(b));  // true  (same content)`}</div>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Always use <code>.equals()</code> to compare String values. For null-safety, prefer <code>Objects.equals(a, b)</code>.
        </div>
      </>
    ),
  },
  {
    id: 5,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Explain the difference between abstract classes and interfaces in Java.',
    answer: (
      <>
        <p>Both provide abstraction, but they serve different purposes:</p>
        <ul>
          <li><strong>Abstract class</strong> — can have concrete methods, constructors, and state (fields). A class can extend only <em>one</em> abstract class.</li>
          <li><strong>Interface</strong> — defines a contract; can have default/static methods (Java 8+). A class can implement <em>multiple</em> interfaces.</li>
        </ul>
        <div className="qa-code-block">{`abstract class Animal {
    String name;
    abstract void sound();
    void breathe() { System.out.println("breathing"); }
}

interface Flyable {
    default void fly() { System.out.println("flying"); }
}

class Bird extends Animal implements Flyable {
    void sound() { System.out.println("tweet"); }
}`}</div>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Rule of thumb: use abstract classes for "is-a" relationships with shared state; use interfaces for capabilities ("can-do").
        </div>
      </>
    ),
  },
  {
    id: 6,
    category: 'Advanced Java',
    difficulty: 'hard',
    question: 'What is the Java Memory Model and how does it relate to multithreading?',
    answer: (
      <>
        <p>The <strong>Java Memory Model (JMM)</strong> defines how threads interact through memory. Key concepts:</p>
        <ul>
          <li><strong>Heap</strong> — shared among all threads (objects live here).</li>
          <li><strong>Stack</strong> — each thread has its own stack (local variables).</li>
          <li><strong>Visibility</strong> — changes by one thread may not be visible to others without synchronization.</li>
          <li><strong>Happens-before</strong> — guarantees ordering of operations across threads.</li>
        </ul>
        <div className="qa-code-block">{`// Without volatile — thread2 may never see the update
private volatile boolean running = true;  // volatile fixes it

// Thread 1
running = false;

// Thread 2
while (running) { /* ... */ }`}</div>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Use <code>volatile</code> for simple flags, <code>synchronized</code> for compound actions, and <code>java.util.concurrent</code> classes for complex thread-safe data structures.
        </div>
      </>
    ),
  },

  /* ── SQL ── */
  {
    id: 7,
    category: 'SQL',
    difficulty: 'easy',
    question: 'What is the difference between INNER JOIN and LEFT JOIN?',
    answer: (
      <>
        <p>Both joins combine rows from two tables, but differ in which rows are included:</p>
        <ul>
          <li><strong>INNER JOIN</strong> — returns only rows that have matching values in <em>both</em> tables.</li>
          <li><strong>LEFT JOIN</strong> — returns all rows from the left table and matched rows from the right. Unmatched right rows appear as NULL.</li>
        </ul>
        <div className="qa-code-block">{`-- INNER JOIN: only customers who placed orders
SELECT c.name, o.amount
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id;

-- LEFT JOIN: all customers, even those without orders
SELECT c.name, o.amount
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;`}</div>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          LEFT JOIN is useful for finding records without a match: add <code>WHERE o.id IS NULL</code> to find customers with no orders.
        </div>
      </>
    ),
  },
  {
    id: 8,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: 'What are window functions and how do they differ from GROUP BY?',
    answer: (
      <>
        <p><strong>Window functions</strong> perform calculations across a set of rows related to the current row <em>without collapsing them</em> like GROUP BY does.</p>
        <div className="qa-code-block">{`-- GROUP BY: collapses rows, loses individual detail
SELECT dept, AVG(salary) AS avg_sal
FROM employees GROUP BY dept;

-- Window function: keeps all rows + adds running avg
SELECT name, dept, salary,
  AVG(salary) OVER (PARTITION BY dept) AS dept_avg,
  RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS dept_rank
FROM employees;`}</div>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Common window functions: <code>ROW_NUMBER()</code>, <code>RANK()</code>, <code>DENSE_RANK()</code>, <code>LAG()</code>, <code>LEAD()</code>, <code>SUM() OVER()</code>.
        </div>
      </>
    ),
  },

  /* ── Data Science ── */
  {
    id: 9,
    category: 'Data Science',
    difficulty: 'easy',
    question: 'What is the difference between overfitting and underfitting?',
    answer: (
      <>
        <p>These are two opposite failure modes in machine learning:</p>
        <ul>
          <li><strong>Overfitting</strong> — the model memorizes training data and performs poorly on new data (high variance). Typically seen with very complex models or too little data.</li>
          <li><strong>Underfitting</strong> — the model is too simple to capture the underlying patterns (high bias). Seen with linear models on non-linear data.</li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Fix overfitting with: more data, regularization (L1/L2), dropout, cross-validation, or simpler models. Fix underfitting with: more complex models, better features, or less regularization.
        </div>
      </>
    ),
  },
  {
    id: 10,
    category: 'Machine Learning',
    difficulty: 'hard',
    question: 'Explain the bias-variance tradeoff and how it affects model selection.',
    answer: (
      <>
        <p>The <strong>bias-variance tradeoff</strong> describes the tension between two sources of prediction error:</p>
        <ul>
          <li><strong>Bias</strong> — error from wrong assumptions in the learning algorithm. High bias → underfitting.</li>
          <li><strong>Variance</strong> — error from sensitivity to small fluctuations in training data. High variance → overfitting.</li>
        </ul>
        <p>Total error = Bias² + Variance + Irreducible noise</p>
        <div className="qa-code-block">{`# Conceptual code: validation curve
from sklearn.model_selection import validation_curve

train_scores, val_scores = validation_curve(
    estimator, X, y,
    param_name='max_depth',
    param_range=[1, 3, 5, 7, 10],
    cv=5, scoring='neg_mean_squared_error'
)
# Plot both — ideal depth is where val_score peaks`}</div>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Use learning curves and validation curves to diagnose. Ensemble methods like Random Forests reduce variance; boosting techniques reduce bias.
        </div>
      </>
    ),
  },

  /* ── System Design ── */
  {
    id: 11,
    category: 'Microservices',
    difficulty: 'medium',
    question: 'How would you design a URL shortener like bit.ly?',
    answer: (
      <>
        <p>A URL shortener requires a few key components:</p>
        <ul>
          <li><strong>API Layer</strong> — POST /shorten → generates short code; GET /:code → 301/302 redirect.</li>
          <li><strong>Encoding</strong> — Base62 (a-z, A-Z, 0-9) on an auto-increment ID gives ~3.5 billion 6-char codes.</li>
          <li><strong>Database</strong> — simple KV store (Redis for fast lookups + PostgreSQL for persistence).</li>
          <li><strong>Cache</strong> — cache popular short URLs in Redis to reduce DB load (hot key problem).</li>
          <li><strong>Scale</strong> — stateless API servers behind load balancer; DB read replicas; CDN for static assets.</li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Follow-ups to prepare: custom aliases, expiration, analytics, rate limiting, and how to handle hash collisions.
        </div>
      </>
    ),
  },
  {
    id: 12,
    category: 'Microservices',
    difficulty: 'hard',
    question: 'What is the CAP theorem and how does it apply to distributed systems?',
    answer: (
      <>
        <p>The <strong>CAP theorem</strong> states that a distributed system can guarantee at most <strong>two</strong> of the following three properties simultaneously:</p>
        <ul>
          <li><strong>Consistency (C)</strong> — Every read receives the most recent write or an error.</li>
          <li><strong>Availability (A)</strong> — Every request receives a response (not necessarily the latest data).</li>
          <li><strong>Partition Tolerance (P)</strong> — The system continues despite network partitions between nodes.</li>
        </ul>
        <p>In practice, network partitions happen, so the real choice is between <strong>CP</strong> and <strong>AP</strong>:</p>
        <ul>
          <li><strong>CP</strong>: HBase, Zookeeper — favors consistency (banking, payments).</li>
          <li><strong>AP</strong>: Cassandra, DynamoDB — favors availability (social feeds, shopping carts).</li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Modern systems use <strong>PACELC</strong> (extends CAP) which also considers latency vs. consistency tradeoffs during normal operation.
        </div>
      </>
    ),
  },

  /* ── Behavioral ── */
  {
    id: 13,
    category: 'Full Stack',
    difficulty: 'easy',
    question: 'Tell me about a time you had a conflict with a teammate. How did you handle it?',
    answer: (
      <>
        <p>Use the <strong>STAR method</strong> (Situation → Task → Action → Result):</p>
        <ul>
          <li><strong>Situation</strong> — Briefly describe the context (team size, project, timeline).</li>
          <li><strong>Task</strong> — What was your responsibility in the conflict?</li>
          <li><strong>Action</strong> — Be specific: "I scheduled a 1-on-1, listened actively, then proposed a compromise…"</li>
          <li><strong>Result</strong> — Quantify if possible: "We shipped on time and the teammate later became a close collaborator."</li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Avoid blame. Focus on your actions and learnings. Interviewers value self-awareness and communication skills.
        </div>
      </>
    ),
  },
  {
    id: 14,
    category: 'Coding',
    difficulty: 'medium',
    question: 'Describe a situation where you had to learn a new technology quickly.',
    answer: (
      <>
        <p>Structure your answer around how you learn under pressure:</p>
        <ul>
          <li><strong>Context</strong> — What technology? Why was it urgent? What was at stake?</li>
          <li><strong>Strategy</strong> — How did you prioritize? (official docs first, then tutorials, then hands-on)</li>
          <li><strong>Execution</strong> — Did you ask for help? Timeboxing? Built a small PoC?</li>
          <li><strong>Outcome</strong> — What shipped? What did you learn about your learning style?</li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Highlight a growth mindset. Mention specific resources (e.g., "I used the official docs + built a mini project in 2 days to validate my understanding").
        </div>
      </>
    ),
  },
  {
    id: 15,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What prevents Java from being completely object-oriented?',
    answer: (
      <>
        <p>Java is not considered 100% object-oriented because of the following reasons:</p>
        <ul>
          <li><strong>Primitive Data Types</strong> — Java supports 8 primitive data types (like <code>int</code>, <code>char</code>, <code>boolean</code>, <code>double</code>, etc.) which are not objects.</li>
          <li><strong>Static Keyword</strong> — Static variables and methods belong to the class itself rather than individual instances, allowing execution without creating any objects.</li>
          <li><strong>Wrapper Classes</strong> — Although wrapper classes exist (like <code>Integer</code>, <code>Character</code>), autoboxing/unboxing hides but does not eliminate primitive usage.</li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Pure object-oriented languages (like Smalltalk or Ruby) treat everything — including primitive values and functions — as objects.
        </div>
      </>
    ),
  },
  {
    id: 16,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Mention the key differences between default constructors & parameterized constructors?',
    answer: (
      <>
        <p>Constructors initialize new objects. The main differences are:</p>
        <ul>
          <li><strong>Default Constructor</strong> — Has no arguments. If no constructor is defined in a class, the compiler automatically provides a default constructor. It initializes instance variables with default values (e.g., <code>0</code>, <code>null</code>).</li>
          <li><strong>Parameterized Constructor</strong> — Has one or more arguments defined by the programmer. It is used to initialize instance variables with custom values at the time of object creation.</li>
        </ul>
        <div className="qa-code-block">{`class Student {
    String name;
    // Default Constructor (no args)
    Student() {
        this.name = "Unknown";
    }
    // Parameterized Constructor
    Student(String name) {
        this.name = name;
    }
}`}</div>
      </>
    ),
  },
  {
    id: 17,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What are the access modifiers in Java?',
    answer: (
      <>
        <p>Access modifiers define the scope and visibility of classes, constructors, variables, and methods:</p>
        <ul>
          <li><strong>private</strong> — Accessible only within the class they are declared in.</li>
          <li><strong>default (no modifier)</strong> — Accessible only within classes of the same package (package-private).</li>
          <li><strong>protected</strong> — Accessible within the same package, and by subclasses in other packages.</li>
          <li><strong>public</strong> — Accessible from any class in any package.</li>
        </ul>
      </>
    ),
  },
  {
    id: 18,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is an instance variable in Java?',
    answer: (
      <>
        <p>An <strong>instance variable</strong> is a variable declared inside a class but outside any method, constructor, or block.</p>
        <ul>
          <li>They are created when an object of the class is instantiated using the <code>new</code> keyword, and destroyed when the object is garbage-collected.</li>
          <li>Each instance of the class has its own copy of the instance variable.</li>
          <li>If not explicitly initialized, they receive default values (e.g., <code>0</code> for integers, <code>false</code> for booleans, <code>null</code> for objects).</li>
        </ul>
      </>
    ),
  },
  {
    id: 19,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What are the main differences between an object and a class?',
    answer: (
      <>
        <p>The difference between a class and an object is fundamental to Object-Oriented Programming:</p>
        <ul>
          <li><strong>Class</strong> — A template, blueprint, or prototype that defines the variables and methods common to all objects of its type. It is a logical entity and consumes no memory.</li>
          <li><strong>Object</strong> — An instance of a class. It is a physical entity, has a state and behavior, consumes heap memory, and is created using the <code>new</code> keyword.</li>
        </ul>
      </>
    ),
  },
  {
    id: 20,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Define the advantages & disadvantages of Java Sockets?',
    answer: (
      <>
        <p>Sockets provide a low-level communication mechanism for network programming:</p>
        <ul>
          <li><strong>Advantages:</strong>
            <ul>
              <li>Extremely fast and lightweight with minimal overhead.</li>
              <li>Platform-independent network programming.</li>
              <li>Flexible — supports custom protocols over TCP or UDP.</li>
            </ul>
          </li>
          <li><strong>Disadvantages:</strong>
            <ul>
              <li>Requires writing complex code to manage raw input/output streams.</li>
              <li>No built-in security; SSL/TLS socket layer must be managed explicitly.</li>
              <li>Difficult to scale manually — requires managing thread pools, connection timeouts, and state.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 21,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What are the different ways of creating a thread?',
    answer: (
      <>
        <p>There are three primary ways to create a thread in Java:</p>
        <ul>
          <li><strong>Extending the Thread class:</strong> Define a subclass of <code>Thread</code> and override its <code>run()</code> method.
            <div className="qa-code-block">{`class MyThread extends Thread {
    public void run() { System.out.println("Running..."); }
}
new MyThread().start();`}</div>
          </li>
          <li><strong>Implementing Runnable:</strong> Implement the <code>Runnable</code> interface and pass it to a <code>Thread</code> constructor (preferred for cleaner class hierarchy).
            <div className="qa-code-block">{`class MyRunnable implements Runnable {
    public void run() { System.out.println("Running..."); }
}
new Thread(new MyRunnable()).start();`}</div>
          </li>
          <li><strong>Implementing Callable:</strong> Used with <code>ExecutorService</code>, it returns a <code>Future</code> containing a result and can throw checked exceptions.
            <div className="qa-code-block">{`ExecutorService executor = Executors.newSingleThreadExecutor();
Future<String> future = executor.submit(() -> "Result");`}</div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 22,
    category: 'Advanced Java',
    difficulty: 'hard',
    question: 'What is an immutable class? How to create it?',
    answer: (
      <>
        <p>An <strong>immutable class</strong> is a class whose instances cannot be modified after creation. <code>String</code> and <code>Integer</code> are prime examples.</p>
        <p>To create an immutable class in Java:</p>
        <ol>
          <li>Declare the class as <code>final</code> to prevent subclassing.</li>
          <li>Make all fields <code>private</code> and <code>final</code>.</li>
          <li>Do not provide any setter methods.</li>
          <li>Initialize all fields via a constructor performing a deep copy of mutable references.</li>
          <li>Perform deep copies in getter methods when returning mutable object references.</li>
        </ol>
        <div className="qa-code-block">{`public final class ImmutablePerson {
    private final String name;
    private final List<String> hobbies;

    public ImmutablePerson(String name, List<String> hobbies) {
        this.name = name;
        // Deep copy mutable object
        this.hobbies = new ArrayList<>(hobbies);
    }
    public String getName() { return name; }
    public List<String> getHobbies() {
        // Return a copy to maintain immutability
        return new ArrayList<>(hobbies);
    }
}`}</div>
      </>
    ),
  },
  {
    id: 23,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is pass by reference and pass by value?',
    answer: (
      <>
        <p>These terms describe how parameters are passed to methods:</p>
        <ul>
          <li><strong>Pass by Value</strong> — A copy of the actual parameter's value is passed to the method. Changes made to the parameter inside the method do not affect the original variable.</li>
          <li><strong>Pass by Reference</strong> — A reference/address to the actual parameter is passed. Changes made inside the method affect the original variable.</li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          <strong>Java is strictly pass-by-value.</strong> For objects, Java passes the <em>copy of the reference (memory address)</em> by value. It does not pass the actual object itself, nor the original reference variable.
        </div>
      </>
    ),
  },
  {
    id: 24,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is Map and HashMap?',
    answer: (
      <>
        <p>Both are part of the Java Collections Framework but represent different concepts:</p>
        <ul>
          <li><strong>Map</strong> — An interface that represents a collection of key-value pairs. Each key must be unique, and each key maps to exactly one value.</li>
          <li><strong>HashMap</strong> — A concrete class that implements the <code>Map</code> interface. It uses a hash table data structure. It allows one null key and multiple null values, is unsorted and unordered, and is not thread-safe.</li>
        </ul>
        <div className="qa-code-block">{`Map<String, Integer> map = new HashMap<>();
map.put("Apple", 1);
map.put("Banana", 2);
System.out.println(map.get("Apple")); // 1`}</div>
      </>
    ),
  },
  {
    id: 25,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Mention the difference between a constructor and a method?',
    answer: (
      <>
        <p>Constructors and methods serve different purposes in class definition:</p>
        <ul>
          <li><strong>Constructor:</strong>
            <ul>
              <li>Used to initialize the state of a newly created object.</li>
              <li>Has no return type (not even <code>void</code>).</li>
              <li>Must have the exact same name as the class.</li>
              <li>Called implicitly when using the <code>new</code> keyword.</li>
            </ul>
          </li>
          <li><strong>Method:</strong>
            <ul>
              <li>Used to represent the behavior or perform an action.</li>
              <li>Must specify a return type (or <code>void</code>).</li>
              <li>Can have any valid identifier name.</li>
              <li>Must be called explicitly on an object or class.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 26,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Highlight the difference between multitasking & multithreading?',
    answer: (
      <>
        <p>Both allow running multiple activities at once, but work at different levels:</p>
        <ul>
          <li><strong>Multitasking</strong> — The capability of an operating system to execute multiple tasks (processes) simultaneously. E.g., running a web browser and an IDE concurrently on your computer.</li>
          <li><strong>Multithreading</strong> — A subset of multitasking where multiple threads within a single process execute concurrently. E.g., a web browser downloading an image while rendering text on the screen.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the difference between multiprocessing & multithreading?',
    answer: (
      <>
        <p>These are different ways to achieve concurrency:</p>
        <ul>
          <li><strong>Multiprocessing:</strong>
            <ul>
              <li>Uses multiple CPUs/processors to execute processes.</li>
              <li>Each process has its own address space and memory.</li>
              <li>Process creation and context switching have high overhead.</li>
              <li>Failure of one process does not affect others.</li>
            </ul>
          </li>
          <li><strong>Multithreading:</strong>
            <ul>
              <li>Uses a single CPU (or multi-core) to run threads within the same process.</li>
              <li>Threads share the same memory space and resources of the parent process.</li>
              <li>Thread creation and context switching have very low overhead.</li>
              <li>If a thread encounters an uncaught exception, it can destabilize the process.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 28,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is an Abstract Class in Java?',
    answer: (
      <>
        <p>An <strong>abstract class</strong> is a class declared with the <code>abstract</code> keyword that cannot be directly instantiated.</p>
        <ul>
          <li>It can contain both abstract methods (methods without a body) and concrete methods (methods with a body).</li>
          <li>It can have constructors, instance fields, static methods, and final methods.</li>
          <li>It is designed to be a base template for subclasses to extend and implement missing abstract behaviors.</li>
        </ul>
        <div className="qa-code-block">{`abstract class Graphic {
    int x, y;
    abstract void draw(); // Subclasses must implement
    void moveTo(int newX, int newY) {
        this.x = newX;
        this.y = newY;
    }
}`}</div>
      </>
    ),
  },
  {
    id: 29,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What will happen if the static modifier is removed from the signature of the main method?',
    answer: (
      <>
        <p>If you remove the <code>static</code> keyword from the <code>main</code> method (e.g., <code>public void main(String[] args)</code>):</p>
        <ul>
          <li>The code will **compile without errors**.</li>
          <li>At runtime, the JVM will fail to run the program and throw an error like: <code>NoSuchMethodError: main</code> or <code>Error: Main method is not static in class...</code></li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          The JVM needs the <code>main</code> method to be <code>static</code> so it can execute it at startup without instantiating the class first.
        </div>
      </>
    ),
  },
  {
    id: 30,
    category: 'Advanced Java',
    difficulty: 'hard',
    question: 'Explain different types of inner classes in Java?',
    answer: (
      <>
        <p>Java supports four types of nested classes declared inside another class:</p>
        <ul>
          <li><strong>Member Inner Class</strong> — Non-static class declared inside a class but outside methods. Needs an outer class instance to exist.</li>
          <li><strong>Static Nested Class</strong> — Declared with the <code>static</code> modifier. Can be instantiated without an instance of the outer class.</li>
          <li><strong>Local Inner Class</strong> — Declared inside a method or block of code. Scope is limited to the enclosing block.</li>
          <li><strong>Anonymous Inner Class</strong> — An inner class without a name, declared and instantiated in a single expression. Often used to implement listener interfaces.</li>
        </ul>
        <div className="qa-code-block">{`class Outer {
    class Inner {} // Member Inner
    static class StaticInner {} // Static Nested
    void method() {
        class LocalInner {} // Local Inner
        Runnable r = new Runnable() { // Anonymous Inner
            public void run() {}
        };
    }
}`}</div>
      </>
    ),
  },
  {
    id: 31,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Are imports checked for validity at compile-time? Will the code containing an import line like java.lang.ABCD compile?',
    answer: (
      <>
        <p>Yes, import statements are checked for validity at compile-time.</p>
        <ul>
          <li>If you import an explicit class that does not exist (like <code>import java.lang.ABCD;</code>), the compiler will output a <strong>cannot find symbol</strong> or <strong>package does not exist</strong> compilation error.</li>
          <li>Wildcard imports (like <code>import java.util.*;</code>) only import classes as needed, so they do not fail if some classes within the package do not exist, but explicit wrong classes will fail.</li>
        </ul>
      </>
    ),
  },
  {
    id: 32,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the key difference between declaring a variable & defining a variable?',
    answer: (
      <>
        <p>The difference lies in metadata vs. memory/state allocation:</p>
        <ul>
          <li><strong>Declaring a variable</strong> — Establishes the name and type of the variable, informing the compiler of its existence without allocating memory or setting a value. E.g., <code>int count;</code></li>
          <li><strong>Defining (Initializing) a variable</strong> — Allocates memory and assigns an initial value to the variable. E.g., <code>count = 10;</code></li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          In Java, declaration and definition are often combined: <code>int count = 10;</code>
        </div>
      </>
    ),
  },
  {
    id: 33,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the default value of any object reference declared as an instance variable?',
    answer: (
      <>
        <p>The default value of any object reference (such as <code>String</code>, <code>Object</code>, arrays, or custom class instances) declared as an instance variable is <strong>null</strong>.</p>
        <div className="qa-code-block">{`class Demo {
    String text; // defaults to null
    int number;  // defaults to 0
}`}</div>
      </>
    ),
  },
  {
    id: 34,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Can a top-level class be protected or private?',
    answer: (
      <>
        <p>No, a top-level class (a class declared directly in a file) **cannot** be declared as <code>private</code> or <code>protected</code>.</p>
        <ul>
          <li>They can only be declared as <code>public</code> or have <code>default</code> (package-private) access.</li>
          <li><strong>Why private is not allowed:</strong> A private top-level class would be inaccessible to all other classes, making it useless.</li>
          <li><strong>Why protected is not allowed:</strong> Protected access is defined for subclass access across packages. Since packages do not support hierarchy (inheritance structure), protected has no meaning at the top level.</li>
        </ul>
      </>
    ),
  },
  {
    id: 35,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'How to serialize an object to a file?',
    answer: (
      <>
        <p>To serialize an object to a file in Java, your class must implement the <code>java.io.Serializable</code> marker interface. You then write the object using <code>FileOutputStream</code> combined with <code>ObjectOutputStream</code>.</p>
        <div className="qa-code-block">{`try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("user.ser"))) {
    User user = new User("Alice", 25);
    oos.writeObject(user);
}`}</div>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Ensure you define a <code>private static final long serialVersionUID</code> to verify that the sender and receiver of a serialized object have loaded classes for that object that are compatible.
        </div>
      </>
    ),
  },
  {
    id: 36,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Which methods of Serializable interface should you implement?',
    answer: (
      <>
        <p>None! <code>java.io.Serializable</code> is a <strong>marker interface</strong> (also known as a tagging interface). It contains no methods or fields.</p>
        <p>Its sole purpose is to signal to the Java Virtual Machine (JVM) and the serialization runtime that instances of this class can be safely converted into a byte stream.</p>
      </>
    ),
  },
  {
    id: 37,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What happens to object references included in the object when you serialize an object?',
    answer: (
      <>
        <p>When an object is serialized, all other objects referenced by its instance variables are also serialized recursively, provided their classes implement <code>Serializable</code>.</p>
        <ul>
          <li>If any referenced object's class does not implement <code>Serializable</code>, the serialization process will fail at runtime and throw a <code>NotSerializableException</code>.</li>
          <li>This forms an entire "object graph" of serialized data.</li>
        </ul>
      </>
    ),
  },
  {
    id: 38,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What happens to a class’s static variables during serialization?',
    answer: (
      <>
        <p>Static variables are <strong>not</strong> serialized.</p>
        <ul>
          <li>Serialization only applies to the instance state of an object.</li>
          <li>Since static variables belong to the class definition rather than any specific object instance, they are ignored during the serialization process.</li>
          <li>When deserializing, the object will reference whatever current static value is loaded in the JVM class loader.</li>
        </ul>
      </>
    ),
  },
  {
    id: 39,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'How does an exception permeate through a code?',
    answer: (
      <>
        <p>When an exception is thrown, Java searches backwards through the call stack for a matching handler:</p>
        <ol>
          <li>The JVM starts searching from the method where the exception occurred.</li>
          <li>If that method doesn't have a matching <code>try-catch</code> block, the exception is passed (bubbles up) to the caller method.</li>
          <li>This process (unwinding the call stack) continues until a matching handler is found.</li>
          <li>If the exception reaches the <code>main</code> method and is still unhandled, the thread terminates, and the default exception handler prints the stack trace to <code>System.err</code>.</li>
        </ol>
      </>
    ),
  },
  {
    id: 40,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'How to use the Observer & Observable?',
    answer: (
      <>
        <p>In legacy Java development, you use the <code>java.util.Observable</code> class (the subject/publisher) and the <code>java.util.Observer</code> interface (the subscriber):</p>
        <ol>
          <li>Your subject class extends <code>Observable</code>. When its state changes, it calls <code>setChanged()</code> and <code>notifyObservers(data)</code>.</li>
          <li>Your observer class implements <code>Observer</code> and implements the <code>update(Observable o, Object arg)</code> method.</li>
          <li>You register the observer using <code>observable.addObserver(this)</code>.</li>
        </ol>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Note: <code>Observer</code> and <code>Observable</code> are deprecated since Java 9 because they don't support serialization and are not thread-safe. Modern projects use the Reactive Streams Flow API (<code>java.util.concurrent.Flow</code>) or <code>PropertyChangeListener</code>.
        </div>
      </>
    ),
  },
  {
    id: 41,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'How does Java deal with integer overflows & underflows?',
    answer: (
      <>
        <p>Java does not throw exceptions when an integer primitive (like <code>int</code> or <code>long</code>) overflows or underflows. Instead, it wraps around silently using two's complement representation.</p>
        <ul>
          <li>For example, adding 1 to <code>Integer.MAX_VALUE</code> (2147483647) results in <code>Integer.MIN_VALUE</code> (-2147483648).</li>
        </ul>
        <div className="qa-code-block">{`// Silent wrap-around
int max = Integer.MAX_VALUE;
System.out.println(max + 1); // -2147483648`}</div>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          If you want to detect overflows and throw an error, use math helper methods from Java 8+ like <code>Math.addExact()</code>, <code>Math.multiplyExact()</code>, which throw an <code>ArithmeticException</code> on overflow.
        </div>
      </>
    ),
  },
  {
    id: 42,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Mention the difference between Exception & Error?',
    answer: (
      <>
        <p>Both inherit from the <code>Throwable</code> class, but they represent different kinds of problems:</p>
        <ul>
          <li><strong>Exception</strong> — Represents conditions that a reasonable application should try to catch and recover from (e.g., <code>IOException</code>, <code>NullPointerException</code>).</li>
          <li><strong>Error</strong> — Represents serious, systemic problems that an application should not attempt to catch (e.g., <code>OutOfMemoryError</code>, <code>StackOverflowError</code>). They indicate JVM or system resource depletion.</li>
        </ul>
      </>
    ),
  },
  {
    id: 43,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Is there a static class in Java?',
    answer: (
      <>
        <p>Java does not support top-level static classes. A class declared directly within a file cannot be marked <code>static</code>.</p>
        <p>However, you can declare a nested class as <code>static</code> (called a <strong>static nested class</strong>):</p>
        <div className="qa-code-block">{`class Outer {
    static class StaticInner {
        void msg() { System.out.println("Hello"); }
    }
}
// Instantiation without outer object
Outer.StaticInner obj = new Outer.StaticInner();`}</div>
      </>
    ),
  },
  {
    id: 44,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is a JavaBean?',
    answer: (
      <>
        <p>A <strong>JavaBean</strong> is a standard reusable software component class that adheres to specific design guidelines:</p>
        <ul>
          <li>It must have a public no-argument constructor.</li>
          <li>Its properties must be private.</li>
          <li>Access to properties must be provided via public getter and setter methods (e.g., <code>getName()</code> and <code>setName()</code>).</li>
          <li>It should implement the <code>java.io.Serializable</code> interface to persist its state.</li>
        </ul>
      </>
    ),
  },
  {
    id: 45,
    category: 'Advanced Java',
    difficulty: 'hard',
    question: 'What is the structure of Java Heap?',
    answer: (
      <>
        <p>The JVM Heap memory is structured into different sections to facilitate generational garbage collection:</p>
        <ul>
          <li><strong>Young Generation</strong> — Holds short-lived objects. Divided into:
            <ul>
              <li><em>Eden Space:</em> Where all new objects are initially allocated.</li>
              <li><em>Survivor Spaces (S0 &amp; S1):</em> Where objects that survived Eden garbage collections live.</li>
            </ul>
          </li>
          <li><strong>Old (Tenured) Generation</strong> — Stores long-lived objects that survived multiple rounds of Young GC.</li>
          <li><strong>Metaspace (Class Metadata)</strong> — Replaced PermGen in Java 8. It lives in native off-heap memory and stores class definitions and metadata.</li>
        </ul>
      </>
    ),
  },
  {
    id: 46,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Difference between the throw & throws keyword?',
    answer: (
      <>
        <p>The difference lies in declaration vs. execution of an exception:</p>
        <ul>
          <li><strong>throw</strong> — Used to explicitly throw a single exception object in the body of a method (e.g., <code>throw new ArithmeticException();</code>).</li>
          <li><strong>throws</strong> — Used in the method signature to declare that the method might throw one or more exceptions during execution, delegating the responsibility to the calling method (e.g., <code>public void process() throws IOException</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 47,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the meaning of session management in servlet?',
    answer: (
      <>
        <p><strong>Session management</strong> is the mechanism used by servlets to maintain conversational state across multiple requests from the same user, since HTTP is stateless.</p>
        <p>Common session tracking mechanisms include:</p>
        <ul>
          <li><strong>HttpSession API:</strong> Creates a session associated with a unique ID (stored as a cookie called <code>JSESSIONID</code>).</li>
          <li><strong>Cookies:</strong> Text files stored on the client side that are sent with each HTTP request.</li>
          <li><strong>URL Rewriting:</strong> Appending session tokens directly to URLs.</li>
          <li><strong>Hidden Form Fields:</strong> Submitting state via hidden form inputs.</li>
        </ul>
      </>
    ),
  },
  {
    id: 48,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the core purpose of the JDBC ResultSet Interface?',
    answer: (
      <>
        <p>The <code>java.sql.ResultSet</code> interface holds the tabular data returned from executing a database query (e.g., <code>SELECT</code>).</p>
        <ul>
          <li>It maintains a cursor pointing to the current row of data.</li>
          <li>By default, it moves forward only and is read-only.</li>
          <li>Developers use methods like <code>next()</code> to move the cursor, and getter methods (like <code>getString()</code> or <code>getInt()</code>) to read columns.</li>
        </ul>
      </>
    ),
  },
  {
    id: 49,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the tradeoff between using an unordered array & an ordered array?',
    answer: (
      <>
        <p>The choice between ordered and unordered arrays depends on the read-to-write ratio:</p>
        <ul>
          <li><strong>Unordered Array:</strong>
            <ul>
              <li><em>Insertion:</em> $O(1)$ fast (just append to end).</li>
              <li><em>Search:</em> $O(N)$ slow (requires linear scan).</li>
              <li><em>Deletion:</em> $O(N)$ slow (requires search, then shift/swap).</li>
            </ul>
          </li>
          <li><strong>Ordered Array:</strong>
            <ul>
              <li><em>Insertion:</em> $O(N)$ slow (must search insertion point and shift elements).</li>
              <li><em>Search:</em> $O(\log N)$ fast (supports binary search).</li>
              <li><em>Deletion:</em> $O(N)$ slow (requires shifting elements after removal).</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 50,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Why Java have transient fields?',
    answer: (
      <>
        <p>The <code>transient</code> modifier prevents a member variable from being serialized.</p>
        <ul>
          <li>If a variable is declared <code>transient</code>, its value is not written to the serialized byte stream.</li>
          <li>When deserialized, the field is restored with its default value (e.g., <code>null</code> or <code>0</code>).</li>
          <li>It is commonly used to protect sensitive data (like passwords) or ignore cached/temporary values.</li>
        </ul>
      </>
    ),
  },
  {
    id: 51,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is multiple inheritance in Java?',
    answer: (
      <>
        <p>Multiple inheritance is inheriting behaviors and fields from more than one parent class.</p>
        <ul>
          <li><strong>Java classes do not support multiple inheritance:</strong> A class cannot extend more than one class. This prevents the "Diamond Problem" (ambiguity of identical signatures).</li>
          <li><strong>Java interfaces support multiple inheritance:</strong> An interface can extend multiple interfaces, and a class can implement multiple interfaces. Conflicts are resolved via explicit compiler override requirements.</li>
        </ul>
      </>
    ),
  },
  {
    id: 52,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the meaning of Java Servlet?',
    answer: (
      <>
        <p>A <strong>Java Servlet</strong> is a Java program that runs on a web server or servlet container (like Apache Tomcat) to handle incoming requests and generate dynamic responses (typically HTML or JSON).</p>
        <ul>
          <li>It acts as an intermediary between a web client and database applications.</li>
          <li>Servlets implement the <code>jakarta.servlet.Servlet</code> interface and manage request/response cycles through lifecycle methods: <code>init()</code>, <code>service()</code>, and <code>destroy()</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 53,
    category: 'Advanced Java',
    difficulty: 'hard',
    question: 'Why do threads block on I/O in Java?',
    answer: (
      <>
        <p>In traditional blocking I/O (BIO), when a thread calls <code>read()</code> or <code>write()</code> on a stream:</p>
        <ul>
          <li>The thread yields control of the CPU and enters a BLOCKED/WAITING state until data is physically ready from the network or disk.</li>
          <li>This prevents CPU cycles from being wasted on active polling but means one thread is dedicated to one stream.</li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          To avoid blockages, Java NIO (Non-blocking I/O) uses channels, buffers, and selectors, allowing a single thread to monitor multiple I/O channels simultaneously.
        </div>
      </>
    ),
  },
  {
    id: 54,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Is null a keyword?',
    answer: (
      <>
        <p>Yes, <code>null</code> is a reserved word representing a null reference literal. It represents the absence of any object reference.</p>
        <ul>
          <li>It is not technically a keyword in specifications, but a literal constant (like <code>true</code> or <code>false</code>).</li>
          <li>However, because it is reserved, you cannot use <code>null</code> as an identifier (e.g., variable or method name).</li>
        </ul>
      </>
    ),
  },
  {
    id: 55,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the preferred size of a Java component?',
    answer: (
      <>
        <p>The <strong>preferred size</strong> of a component is the size it would ideally like to occupy to be fully visible without truncating its contents (such as text labels or images).</p>
        <ul>
          <li>It is determined by the component's implementation and can be custom-set explicitly using <code>setPreferredSize(Dimension)</code>.</li>
          <li>Layout managers query this size when determining how to position and size components inside a container.</li>
        </ul>
      </>
    ),
  },
  {
    id: 56,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: "What method is used to specify a container's layout in Java?",
    answer: (
      <>
        <p>The <code>setLayout(LayoutManager mgr)</code> method of the <code>java.awt.Container</code> class is used to specify or change a container's layout manager.</p>
        <div className="qa-code-block">{`JPanel panel = new JPanel();
panel.setLayout(new BorderLayout()); // Sets BorderLayout`}</div>
      </>
    ),
  },
  {
    id: 57,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the Collections API in Java?',
    answer: (
      <>
        <p>The <strong>Collections API</strong> is a unified architecture in the <code>java.util</code> package for representing and manipulating groups of objects.</p>
        <p>It consists of:</p>
        <ul>
          <li><strong>Interfaces:</strong> Represent abstract data types (e.g., <code>Collection</code>, <code>List</code>, <code>Set</code>, <code>Map</code>).</li>
          <li><strong>Implementations:</strong> Concrete classes that implement interfaces (e.g., <code>ArrayList</code>, <code>HashSet</code>, <code>HashMap</code>).</li>
          <li><strong>Algorithms:</strong> Polymorphic methods to perform operations like sorting, searching, and shuffling (found in the <code>Collections</code> utility class).</li>
        </ul>
      </>
    ),
  },
  {
    id: 58,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is an Iterator interface in Java?',
    answer: (
      <>
        <p>The <code>java.util.Iterator</code> interface is used to traverse any collection sequentially. It provides three primary methods:</p>
        <ul>
          <li><code>hasNext()</code> — Returns <code>true</code> if there are more elements to traverse.</li>
          <li><code>next()</code> — Returns the next element in the iteration.</li>
          <li><code>remove()</code> — Removes the last element returned by the iterator from the underlying collection.</li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Using <code>iterator.remove()</code> is the only safe way to modify a collection while iterating. Modifying a collection directly during a <code>for-each</code> loop throws a <code>ConcurrentModificationException</code>.
        </div>
      </>
    ),
  },
  {
    id: 59,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the difference between sleeping & yielding?',
    answer: (
      <>
        <p>Both methods pause thread execution, but work differently:</p>
        <ul>
          <li><strong>Sleeping (<code>Thread.sleep(millis)</code>):</strong>
            <ul>
              <li>Forces the current thread to pause execution and enter the <code>TIMED_WAITING</code> state.</li>
              <li>Allows threads of lower or equal priority to get CPU time.</li>
              <li>Always blocks execution for the specified duration.</li>
            </ul>
          </li>
          <li><strong>Yielding (<code>Thread.yield()</code>):</strong>
            <ul>
              <li>Provides a hint to the scheduler that the thread is willing to yield its current processor use.</li>
              <li>The thread transitions back to the <code>RUNNABLE</code> state (not blocked) and can immediately be rescheduled.</li>
              <li>Usually, only threads of the same priority can preempt it.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 60,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Does garbage collection in Java guarantee that a program will not run out of memory?',
    answer: (
      <>
        <p>No, garbage collection (GC) does not guarantee that a program won't run out of memory.</p>
        <ul>
          <li>GC only reclaims memory from objects that are <strong>unreachable</strong> (no active references).</li>
          <li>If a program continues to allocate memory and maintains references to obsolete objects (causing a **memory leak**), or if active memory requirements exceed the maximum JVM heap size, the JVM will throw an <code>OutOfMemoryError</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 61,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What restrictions are placed on a package statement’s location within a source code file?',
    answer: (
      <>
        <p>The <code>package</code> statement must be the **very first line of code** in a Java source file, excluding comments.</p>
        <ul>
          <li>Only comments (single-line, multi-line, or Javadocs) can precede the <code>package</code> statement.</li>
          <li>Import statements and class declarations must follow the <code>package</code> statement.</li>
        </ul>
      </>
    ),
  },
  {
    id: 62,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Can garbage collector invoke the finalize() method of an object while it is reachable?',
    answer: (
      <>
        <p>No, the garbage collector will never invoke the <code>finalize()</code> method of an object while that object is still reachable.</p>
        <ul>
          <li>The GC only invokes <code>finalize()</code> when it determines that there are no active references to the object, immediately before reclaiming its memory.</li>
          <li><strong>Note:</strong> <code>finalize()</code> is deprecated since Java 9 and removed in later versions due to performance and reliability issues. Developers should use <code>AutoCloseable</code> and <code>try-with-resources</code> instead.</li>
        </ul>
      </>
    ),
  },
  {
    id: 63,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the difference between time slicing & preemptive scheduling?',
    answer: (
      <>
        <p>These are different CPU scheduling policies used by thread schedulers:</p>
        <ul>
          <li><strong>Time Slicing</strong> — A scheduling scheme where each runnable thread is allocated a fixed slice of execution time (quantum). Once this time expires, the thread is paused to let another thread run.</li>
          <li><strong>Preemptive Scheduling</strong> — A scheduling scheme where a higher-priority thread immediately preempts (interrupts and replaces) a running lower-priority thread, even if that thread has not finished its execution time slice.</li>
        </ul>
      </>
    ),
  },
  {
    id: 64,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is clipping in Java?',
    answer: (
      <>
        <p>In Java 2D graphics, <strong>clipping</strong> is the process of restricting rendering/drawing operations to a specific geometric shape (the clip region).</p>
        <ul>
          <li>Only pixels drawn inside the defined boundary are rendered; anything drawn outside is ignored.</li>
          <li>This is managed using methods like <code>Graphics.setClip(Shape)</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 65,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is a native method in Java?',
    answer: (
      <>
        <p>A <strong>native method</strong> is a Java method whose implementation is written in another programming language (typically C or C++) and compiled into platform-specific shared libraries.</p>
        <ul>
          <li>It is declared in Java with the <code>native</code> keyword and has no method body.</li>
          <li>It uses the **Java Native Interface (JNI)** to link the Java environment with native libraries.</li>
        </ul>
        <div className="qa-code-block">{`public class NativeDemo {
    public native void performNativeAction(); // no body
    static {
        System.loadLibrary("MyNativeLib");
    }
}`}</div>
      </>
    ),
  },
  {
    id: 66,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Can a “for statement” loop indefinitely?',
    answer: (
      <>
        <p>Yes, you can create an infinite loop by omitting all three expressions (initialization, termination condition, and update expression) in a <code>for</code> loop:</p>
        <div className="qa-code-block">{`for (;;) {
    System.out.println("Infinite loop");
}`}</div>
      </>
    ),
  },
  {
    id: 67,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the order of precedence & associativity? How are they used?',
    answer: (
      <>
        <p>These rules resolve ambiguity in complex expressions containing multiple operators:</p>
        <ul>
          <li><strong>Precedence:</strong> Determines the grouping of operators when different operators are present (e.g., multiplication <code>*</code> has higher precedence than addition <code>+</code>, so <code>2 + 3 * 4</code> evaluates to <code>14</code>, not <code>20</code>).</li>
          <li><strong>Associativity:</strong> Determines evaluation order when operators have the same precedence. Most operators are left-associative (e.g., <code>10 - 5 - 2</code> evaluates left-to-right as <code>(10 - 5) - 2 = 3</code>), while assignment operators are right-associative (e.g., <code>x = y = 5</code> groups as <code>x = (y = 5)</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 68,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: "What is a task's priority & how to use it in scheduling?",
    answer: (
      <>
        <p>In Java, every thread has a priority represented by an integer from 1 (<code>Thread.MIN_PRIORITY</code>) to 10 (<code>Thread.MAX_PRIORITY</code>). By default, a thread inherits the priority of its parent thread.</p>
        <ul>
          <li><strong>Usage:</strong> The JVM thread scheduler uses thread priorities to decide which thread to execute next.</li>
          <li>While higher priority threads generally receive more CPU allocation than lower priority ones, scheduling is OS-dependent and not strictly guaranteed (not deterministic).</li>
          <li>You can set priority using <code>thread.setPriority(int priority)</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 69,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What class is the highest of the AWT event hierarchy?',
    answer: (
      <>
        <p>The <code>java.util.EventObject</code> class is the absolute root of the event hierarchy in Java.</p>
        <ul>
          <li>All AWT and Swing event classes directly or indirectly inherit from it.</li>
          <li>Its immediate subclass representing AWT events is <code>java.awt.AWTEvent</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 70,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the initial stage of a thread after it has been created & started?',
    answer: (
      <>
        <p>When a thread is instantiated (<code>new Thread()</code>), it is in the <code>NEW</code> state.</p>
        <ul>
          <li>Once the <code>start()</code> method is invoked on it, the thread transitions to the <strong>RUNNABLE</strong> state.</li>
          <li>In this state, it is eligible to run and waits for CPU allocation from the OS thread scheduler.</li>
        </ul>
      </>
    ),
  },
  {
    id: 71,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the primary purpose of finalization?',
    answer: (
      <>
        <p>The primary purpose of finalization (via the <code>finalize()</code> method) is to release non-memory resources (such as file handles, database connections, or graphics contexts) before an object is garbage-collected.</p>
        <div className="qa-tip">
          <span className="qa-tip-icon">⚠️</span>
          <strong>Warning:</strong> Finalization is highly discouraged because it does not guarantee prompt execution, can cause deadlocks, and slows down garbage collection. Developers should use the <code>try-with-resources</code> statement (with <code>AutoCloseable</code>) instead.
        </div>
      </>
    ),
  },
  {
    id: 72,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the key difference between Boolean & operator and Boolean && operator?',
    answer: (
      <>
        <p>Both evaluate logical AND, but their evaluation strategy differs:</p>
        <ul>
          <li><strong>& (Logical AND):</strong> A non-short-circuiting operator. It evaluates **both** operands, even if the left-hand side evaluates to <code>false</code>.</li>
          <li><strong>&& (Conditional AND):</strong> A short-circuiting operator. If the left-hand side evaluates to <code>false</code>, the evaluation stops immediately and returns <code>false</code>, skipping the right-hand operand.</li>
        </ul>
        <div className="qa-code-block">{`String text = null;
// && prevents NullPointerException because text != null is false
if (text != null && text.length() > 0) { ... }

// & will throw NullPointerException because text.length() is evaluated
if (text != null & text.length() > 0) { ... }`}</div>
      </>
    ),
  },
  {
    id: 73,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the Gregorian Calendar class?',
    answer: (
      <>
        <p><code>java.util.GregorianCalendar</code> is a concrete subclass of <code>java.util.Calendar</code> that implements the standard Gregorian calendar system used worldwide.</p>
        <ul>
          <li>It provides support for leap years, time zones, and standard calendar arithmetic.</li>
          <li>In modern Java applications (Java 8+), it is recommended to use the thread-safe Java Time API classes (like <code>java.time.ZonedDateTime</code>) instead.</li>
        </ul>
      </>
    ),
  },
  {
    id: 74,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Which Container method is used to cause a container to be laid out and redisplayed?',
    answer: (
      <>
        <p>The <code>validate()</code> method (or <code>revalidate()</code> in Swing) is used to instruct a container to layout its subcomponents again after its child components have been added, removed, or modified.</p>
        <ul>
          <li>This causes the container's layout manager to recalculate component positions.</li>
          <li>To force the components to immediately redraw themselves on the screen, a call to <code>repaint()</code> is usually made.</li>
        </ul>
      </>
    ),
  },
  {
    id: 75,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the use of the finally clause of a try-catch-finally statement?',
    answer: (
      <>
        <p>The <code>finally</code> block is used to execute critical cleanup code regardless of whether an exception is thrown or handled.</p>
        <ul>
          <li>It executes even if a <code>return</code>, <code>break</code>, or <code>continue</code> statement is encountered in the <code>try</code> or <code>catch</code> blocks.</li>
          <li>Common use cases include closing database connections, network sockets, or file streams to prevent memory and resource leaks.</li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          The only scenarios where <code>finally</code> does not execute are if <code>System.exit()</code> is called, the JVM crashes, or the thread is interrupted/killed.
        </div>
      </>
    ),
  },
  {
    id: 76,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What must a class do for implementing an interface?',
    answer: (
      <>
        <p>For a class to implement an interface, it must:</p>
        <ol>
          <li>Use the <code>implements</code> keyword in the class declaration (e.g., <code>class MyClass implements MyInterface</code>).</li>
          <li>Provide concrete method bodies for all abstract methods declared in the interface, unless the class itself is declared as <code>abstract</code>.</li>
          <li>Ensure that all implemented methods are declared with <code>public</code> access visibility.</li>
        </ol>
      </>
    ),
  },
  {
    id: 77,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Why use wait(), notify(), & notifyAll() methods?',
    answer: (
      <>
        <p>These methods are defined in the <code>Object</code> class and are used for <strong>inter-thread communication</strong> to coordinate execution in multi-threaded programs:</p>
        <ul>
          <li><code>wait()</code> — Causes the executing thread to temporarily release its object lock and enter the waiting state until another thread signals it.</li>
          <li><code>notify()</code> — Wakes up a single thread that is waiting on the object's lock monitor.</li>
          <li><code>notifyAll()</code> — Wakes up all threads waiting on the object's lock monitor (preferred to avoid deadlocks).</li>
        </ul>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          These methods can only be called from a <strong>synchronized context</strong> (synchronized method or block). Calling them outside synchronization throws an <code>IllegalMonitorStateException</code>.
        </div>
      </>
    ),
  },
  {
    id: 78,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the difference between the static & a non-static inner class?',
    answer: (
      <>
        <p>The difference lies in how they relate to the enclosing outer class:</p>
        <ul>
          <li><strong>Static Nested Class:</strong> Declared with the <code>static</code> modifier. It does not hold a reference to an instance of the outer class and cannot access the outer class's non-static variables directly. Created using: <code>new Outer.StaticInner()</code>.</li>
          <li><strong>Non-Static Inner Class:</strong> Associated with an instance of the outer class. It can access all members (including private instance fields) of the outer class directly. Created using: <code>outerObj.new Inner()</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 79,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: "What is an object's lock & which object have locks?",
    answer: (
      <>
        <p>In Java, <strong>every object</strong> has an associated implicit lock (sometimes called a monitor).</p>
        <ul>
          <li>When a thread executes a <code>synchronized</code> block or method, it acquires the lock of that target object.</li>
          <li>While the lock is held, no other thread can execute any other synchronized code on that same object.</li>
          <li>The lock is automatically released when the thread exits the synchronized block or if an exception occurs.</li>
        </ul>
      </>
    ),
  },
  {
    id: 80,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Can we cast an object reference to the interface reference?',
    answer: (
      <>
        <p>Yes. If the underlying object's class implements that interface, you can assign or cast its reference to the interface type.</p>
        <ul>
          <li>This is a form of upcasting and can be done implicitly: <code>List list = new ArrayList();</code></li>
          <li>If the compiler cannot verify the implementation, an explicit cast is required: <code>MyInterface mi = (MyInterface) obj;</code>. If the object does not implement it, a <code>ClassCastException</code> is thrown at runtime.</li>
        </ul>
      </>
    ),
  },
  {
    id: 81,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Can an object get garbage collection when it is reachable?',
    answer: (
      <>
        <p>No, an object is **never** eligible for garbage collection as long as it is reachable.</p>
        <ul>
          <li>An object is reachable if there is at least one active path of references from any live thread (e.g., local stack variables, static fields, active method parameters).</li>
          <li>The GC only reclaims objects once they become completely unreachable.</li>
        </ul>
      </>
    ),
  },
  {
    id: 82,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Explain the relationship between clipping & repainting?',
    answer: (
      <>
        <p>Clipping and repainting work together to optimize graphical rendering in Java AWT/Swing:</p>
        <ul>
          <li>When a region of a window needs redrawing, a repaint request is made (via <code>repaint()</code>).</li>
          <li>The windowing system sets a **clipping shape** matching the exact boundary of the modified area.</li>
          <li>When the <code>paint()</code> method executes, Java ignores any drawing operations that fall outside the clipping boundary, saving significant CPU and GPU cycles.</li>
        </ul>
      </>
    ),
  },
  {
    id: 83,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Explain the relationship between an EventListener interface & an Event Adapter class?',
    answer: (
      <>
        <p>These are two mechanisms for handling graphical user interface events:</p>
        <ul>
          <li><strong>EventListener:</strong> An interface declaring callback methods for events. Implementing classes must implement all defined methods, even if they only need to use one (e.g., <code>MouseListener</code> requires implementing 5 methods).</li>
          <li><strong>Event Adapter:</strong> A helper class that already implements the listener interface with empty, do-nothing method implementations. Developers can extend the adapter class and only override the specific methods they require.</li>
        </ul>
      </>
    ),
  },
  {
    id: 84,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Specify the restrictions placed on the values of each case of a switch statement?',
    answer: (
      <>
        <p>The values inside a <code>case</code> block of a <code>switch</code> statement must adhere to the following rules:</p>
        <ol>
          <li>They must be **constant expressions** (literal values or fields marked <code>final</code> that are initialized at compile-time).</li>
          <li>The data type must be compatible with the switch expression (supported types include <code>char</code>, <code>byte</code>, <code>short</code>, <code>int</code>, their wrapper classes, <code>String</code>, and <code>Enum</code>).</li>
          <li>Every case value must be **unique** within the switch block; duplicates cause a compilation error.</li>
        </ol>
      </>
    ),
  },
  {
    id: 85,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the highest-level event class of an event-delegation model?',
    answer: (
      <>
        <p>The highest-level event class is <code>java.util.EventObject</code>.</p>
        <ul>
          <li>It serves as the base class for all event classes in Java's delegation event model, representing the event source.</li>
        </ul>
      </>
    ),
  },
  {
    id: 86,
    category: 'Advanced Java',
    difficulty: 'hard',
    question: 'How to organize the elements of a GridBagLayout?',
    answer: (
      <>
        <p>You organize elements in a <code>GridBagLayout</code> by associating each component with a <code>GridBagConstraints</code> object.</p>
        <p>Key properties configured in <code>GridBagConstraints</code> include:</p>
        <ul>
          <li><code>gridx</code>, <code>gridy</code> — Specifies the row and column coordinates of the grid cell.</li>
          <li><code>gridwidth</code>, <code>gridheight</code> — Specifies the number of cells the component spans horizontally/vertically.</li>
          <li><code>fill</code> — Determines how a component resizes if its display area is larger than its requested size.</li>
          <li><code>weightx</code>, <code>weighty</code> — Determines how extra layout space is distributed among components when resizing the window.</li>
        </ul>
      </>
    ),
  },
  {
    id: 87,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the difference between paint() & repaint() method?',
    answer: (
      <>
        <p>The differences relate to execution flow and scheduling:</p>
        <ul>
          <li><strong>paint()</strong> — Contains the actual graphics instructions to draw the component. It is called automatically by the AWT rendering thread and should not be invoked directly by application code.</li>
          <li><strong>repaint()</strong> — An asynchronous method called by the developer to request that a component be redrawn. It schedules a call to the component's <code>update()</code>/<code>paint()</code> method on the event queue.</li>
        </ul>
      </>
    ),
  },
  {
    id: 88,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the use of the Java File class?',
    answer: (
      <>
        <p>The <code>java.io.File</code> class is an abstract representation of file and directory pathnames in the file system.</p>
        <ul>
          <li>It is used to create, delete, and rename files or directories, verify existence, check file permissions, and list contents.</li>
          <li>It does not read or write the actual data content of the file. For content operations, input/output streams or readers/writers are used.</li>
        </ul>
      </>
    ),
  },
  {
    id: 89,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: "What happens if you call a thread's interrupt method when it is waiting or sleeping state?",
    answer: (
      <>
        <p>If a thread is in a blocking state (such as <code>Thread.sleep()</code>, <code>Object.wait()</code>, or <code>Thread.join()</code>) and its <code>interrupt()</code> method is called:</p>
        <ul>
          <li>The thread's blocked status is cancelled immediately.</li>
          <li>The thread will wake up and throw an <code>InterruptedException</code>.</li>
          <li>The thread's interrupted status flag is automatically cleared (reset to <code>false</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 90,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is Casting in Java?',
    answer: (
      <>
        <p>Casting is the process of converting a variable from one data type to another:</p>
        <ul>
          <li><strong>Implicit Casting (Widening):</strong> Done automatically by Java when converting from a smaller to a larger data type (e.g., <code>int</code> to <code>double</code>). No data loss occurs.</li>
          <li><strong>Explicit Casting (Narrowing):</strong> Done manually by enclosing the target type in parentheses (e.g., <code>(int) 5.5</code>). It is required when converting to a smaller data type, and can result in data loss.</li>
        </ul>
      </>
    ),
  },
  {
    id: 91,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the difference between a List & a Choice?',
    answer: (
      <>
        <p>These are old AWT components with different dropdown behaviors:</p>
        <ul>
          <li><strong>Choice:</strong> A compact dropdown component that shows only the currently selected item. Clicking it displays a pop-up menu list (similar to an HTML <code>select</code> dropdown).</li>
          <li><strong>List:</strong> A scrollable list box component that displays multiple items simultaneously. It can be configured to support single or multiple selections.</li>
        </ul>
      </>
    ),
  },
  {
    id: 92,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is a Set interface in Java?',
    answer: (
      <>
        <p>The <code>java.util.Set</code> interface is a collection type that **does not permit duplicate elements**.</p>
        <ul>
          <li>It models the mathematical set abstraction.</li>
          <li>Common implementations include <code>HashSet</code> (fastest, unordered), <code>LinkedHashSet</code> (maintains insertion order), and <code>TreeSet</code> (maintains elements sorted in ascending order).</li>
        </ul>
      </>
    ),
  },
  {
    id: 93,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Are true & false keywords?',
    answer: (
      <>
        <p>No, <code>true</code> and <code>false</code> are boolean literals (representing constant values), not keywords.</p>
        <ul>
          <li>However, because they are reserved words, they cannot be used as variable names or custom identifiers in your code.</li>
        </ul>
      </>
    ),
  },
  {
    id: 94,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is a void return type?',
    answer: (
      <>
        <p>The <code>void</code> return type specified in a method signature indicates that the method **does not return any value** to its caller.</p>
        <ul>
          <li>A void method completes execution and returns control implicitly once it reaches its closing curly brace.</li>
          <li>It can also use an optional <code>return;</code> statement (without an expression) to exit early.</li>
        </ul>
      </>
    ),
  },
  {
    id: 95,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the use of the enableEvents()?',
    answer: (
      <>
        <p>The <code>enableEvents(long eventsToEnable)</code> method of the <code>java.awt.Component</code> class is used to instruct a component to deliver specific event types to its event processing methods (e.g. <code>processMouseEvent()</code>), even if no active event listeners are registered for those event types.</p>
        <ul>
          <li>It is typically used when subclassing components to handle events internally rather than registering external listener objects.</li>
        </ul>
      </>
    ),
  },
  {
    id: 96,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Explain the differences between the File class and the RandomAccessFile class?',
    answer: (
      <>
        <p>These classes serve different file manipulation roles:</p>
        <ul>
          <li><strong>File Class:</strong> Represents filesystem pathnames and metadata (e.g. file size, existence, permissions). It cannot read or write data inside files.</li>
          <li><strong>RandomAccessFile Class:</strong> Used for reading and writing data inside a file, supporting random access (jumping to any position using a file pointer via <code>seek(long pos)</code>). It behaves like a large array of bytes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 97,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What are the restrictions on method overriding?',
    answer: (
      <>
        <p>In Java, method overriding must adhere to the following rules:</p>
        <ul>
          <li>The overriding method must have the exact same name and parameter list.</li>
          <li>The return type must be the same or a covariant type (a subclass of the parent return type).</li>
          <li>The overriding method cannot reduce the visibility (e.g., a <code>protected</code> method cannot be overridden as package-private or <code>private</code>; it can only be <code>protected</code> or <code>public</code>).</li>
          <li>It cannot throw broader or new checked exceptions.</li>
          <li>Private, final, and static methods cannot be overridden.</li>
        </ul>
      </>
    ),
  },
  {
    id: 98,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Mention the three ways in which a thread can enter the waiting state?',
    answer: (
      <>
        <p>A thread can transition to a waiting state (e.g. <code>WAITING</code> or <code>TIMED_WAITING</code>) in the following ways:</p>
        <ol>
          <li>Calling <code>Thread.sleep(long millis)</code> — goes to timed waiting.</li>
          <li>Calling <code>object.wait()</code> or <code>object.wait(long timeout)</code> within a synchronized block.</li>
          <li>Calling <code>thread.join()</code> or <code>thread.join(long timeout)</code> to wait for another thread to terminate.</li>
        </ol>
      </>
    ),
  },
  {
    id: 99,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the Java ResourceBundle class?',
    answer: (
      <>
        <p><code>java.util.ResourceBundle</code> is used to load locale-specific resources (typically key-value translations in <code>.properties</code> files) to implement internationalization (i18n) and localization (l10n).</p>
        <ul>
          <li>It allows a Java application to dynamically swap text resources depending on the user's active locale.</li>
        </ul>
      </>
    ),
  },
  {
    id: 100,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What do you mean by numeric promotion?',
    answer: (
      <>
        <p>Numeric promotion is the compiler's automatic conversion of smaller numeric primitives to a larger type during operations to prevent overflow and ensure compatibility:</p>
        <ul>
          <li><strong>Unary Promotion:</strong> Unary operations on <code>byte</code>, <code>short</code>, or <code>char</code> promote the operand to <code>int</code>.</li>
          <li><strong>Binary Promotion:</strong> If one operand is <code>double</code>, the other is promoted to <code>double</code>. Otherwise, if one is <code>float</code>, the other is promoted to <code>float</code>. Otherwise, if one is <code>long</code>, the other is promoted to <code>long</code>. Otherwise, both are promoted to <code>int</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 101,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the main difference between a Scrollbar & a ScrollPane?',
    answer: (
      <>
        <p>Both support scrolling but operate at different levels of abstraction:</p>
        <ul>
          <li><strong>Scrollbar:</strong> A basic component representing a single scrollbar widget. It does not contain other components; developers must manually write listener code to coordinate its values with other UI elements.</li>
          <li><strong>ScrollPane:</strong> A container that automatically manages its own horizontal and vertical scrollbars, handling scrolling for any child component placed inside it automatically.</li>
        </ul>
      </>
    ),
  },
  {
    id: 102,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Explain the difference between the public & non-public class?',
    answer: (
      <>
        <p>The difference lies in packages visibility scope:</p>
        <ul>
          <li><strong>Public Class:</strong> Declared with <code>public</code>. It is visible to all classes in all packages. A source file can contain at most one public top-level class, and the filename must match the public class name.</li>
          <li><strong>Non-Public Class (Default/Package-Private):</strong> Declared without an access modifier. It is visible only to other classes within the same package.</li>
        </ul>
      </>
    ),
  },
  {
    id: 103,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the difference between the prefix & postfix forms of the ++ operator?',
    answer: (
      <>
        <p>The differences relate to when the increment occurs relative to evaluation:</p>
        <ul>
          <li><strong>Prefix (<code>++x</code>):</strong> Increments the variable value first, then returns the incremented value for use in the expression.</li>
          <li><strong>Postfix (<code>x++</code>):</strong> Returns the original value of the variable for use in the expression first, then increments the variable value.</li>
        </ul>
      </>
    ),
  },
  {
    id: 104,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Define Java package and how to use it?',
    answer: (
      <>
        <p>A Java package is a namespace/folder mechanism used to group related classes, interfaces, and sub-packages together, preventing naming conflicts and controlling access.</p>
        <ul>
          <li><strong>How to use:</strong> Declare the package at the top of the source file using the <code>package</code> statement (e.g. <code>package com.example.utils;</code>). To use classes from other packages, use the <code>import</code> statement (e.g. <code>import java.util.ArrayList;</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 105,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What are the synchronized methods & synchronized statements?',
    answer: (
      <>
        <p>Both prevent thread interference but offer different scoping grains:</p>
        <ul>
          <li><strong>Synchronized Method:</strong> The entire method body is synchronized. It locks the instance object (<code>this</code>) or the <code>Class</code> object (for static methods) for the duration of the method call.</li>
          <li><strong>Synchronized Statement (Block):</strong> A specific block of code inside a method is synchronized. It allows locking on a specific custom object, providing finer-grained control and better performance than synchronizing the whole method.</li>
        </ul>
      </>
    ),
  },
  {
    id: 106,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What kind of problems does a Java programmer face who doesn’t use layout managers?',
    answer: (
      <>
        <p>Without layout managers (using absolute positioning with <code>setLayout(null)</code>):</p>
        <ul>
          <li><strong>Portability Issues:</strong> Components may overlap or look distorted on different operating systems or screen resolutions.</li>
          <li><strong>Resize Fragility:</strong> Resizing the window does not automatically reposition or resize child components.</li>
          <li><strong>Localization Problems:</strong> Dynamic text size changes (due to translations/i18n) can cause text to become truncated or wrap incorrectly.</li>
        </ul>
      </>
    ),
  },
  {
    id: 107,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Explain the major OOP or object-oriented concepts in Java?',
    answer: (
      <>
        <p>Java implements four core Object-Oriented Programming (OOP) principles:</p>
        <ul>
          <li><strong>Inheritance:</strong> A class inheriting fields/methods from a superclass to promote code reusability (<code>extends</code>).</li>
          <li><strong>Polymorphism:</strong> The ability of an object to take many forms (Method Overloading for compile-time, Method Overriding for runtime).</li>
          <li><strong>Encapsulation:</strong> Hiding data by making fields private and exposing them through public getter/setter methods.</li>
          <li><strong>Abstraction:</strong> Hiding internal implementation details and showing only essential features (via interfaces and abstract classes).</li>
        </ul>
      </>
    ),
  },
  {
    id: 108,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What do you mean by the final keyword in Java?',
    answer: (
      <>
        <p>The <code>final</code> keyword is a non-access modifier used to restrict modification:</p>
        <ul>
          <li><strong>Final Variable:</strong> Creates a constant whose value cannot be reassigned once initialized.</li>
          <li><strong>Final Method:</strong> Cannot be overridden by subclasses.</li>
          <li><strong>Final Class:</strong> Cannot be inherited (extended) by any other class.</li>
        </ul>
      </>
    ),
  },
  {
    id: 109,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What do you mean by Static Keyword in Java?',
    answer: (
      <>
        <p>The <code>static</code> keyword indicates that a member (field, method, inner class, or block) belongs to the class itself, rather than to any specific instance of the class.</p>
        <ul>
          <li>Static variables have a single copy shared among all instances.</li>
          <li>Static methods can be called directly without creating an object of the class, and cannot access non-static instance members.</li>
        </ul>
      </>
    ),
  },
  {
    id: 110,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Can an Abstract Class in Java implement another interface?',
    answer: (
      <>
        <p>Yes. An abstract class can implement one or more interfaces.</p>
        <ul>
          <li>Since it is abstract, it does **not** have to provide implementations for any of the interface's abstract methods.</li>
          <li>The responsibility of implementing those methods is delegated to the first concrete subclass that extends the abstract class.</li>
        </ul>
      </>
    ),
  },
  {
    id: 111,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Explain Upcasting & Downcasting in Java.',
    answer: (
      <>
        <p>Casting allows reference conversions across the class hierarchy:</p>
        <ul>
          <li><strong>Upcasting:</strong> Casting a subclass reference to a superclass reference type (e.g. <code>Animal a = new Dog();</code>). It is always safe and done implicitly by the compiler.</li>
          <li><strong>Downcasting:</strong> Casting a superclass reference back to a subclass reference type (e.g. <code>Dog d = (Dog) a;</code>). It must be done explicitly and can throw <code>ClassCastException</code> if the referenced object is not actually an instance of the target subclass.</li>
        </ul>
      </>
    ),
  },
  {
    id: 112,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What are the benefits of organizing interfaces & classes into a Java package?',
    answer: (
      <>
        <p>Organizing classes into packages offers key benefits:</p>
        <ul>
          <li><strong>Naming Collision Prevention:</strong> Avoids name conflicts (e.g. having two classes named <code>User</code> in different packages).</li>
          <li><strong>Access Protection:</strong> Controls visibility using default (package-private) and protected scopes.</li>
          <li><strong>Modularity &amp; Maintainability:</strong> Makes large codebases easier to navigate by grouping related modules logically.</li>
        </ul>
      </>
    ),
  },
  {
    id: 113,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the difference between super() & this() in Java?',
    answer: (
      <>
        <p>Both invoke constructors but target different classes:</p>
        <ul>
          <li><strong>super():</strong> Invokes the constructor of the parent (superclass). Must be the first statement of a subclass constructor.</li>
          <li><strong>this():</strong> Invokes another constructor within the same class (constructor overloading). Must be the first statement of the calling constructor.</li>
        </ul>
      </>
    ),
  },
  {
    id: 114,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'Explain Default Constructor in Java?',
    answer: (
      <>
        <p>A default constructor is a no-argument constructor that the Java compiler automatically generates for a class if and only if no other constructors are explicitly defined.</p>
        <ul>
          <li>Its purpose is to initialize instance variables to their default values (e.g. <code>0</code>, <code>false</code>, <code>null</code>) and call the parent class's no-argument constructor <code>super()</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 115,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What are the benefits of using Unicode characters?',
    answer: (
      <>
        <p>Unicode is a universal character encoding standard that assigns a unique number for every character, across different languages, platforms, and programs.</p>
        <p>Key benefits include:</p>
        <ul>
          <li><strong>Global Interoperability:</strong> Standardizes text representation across all global languages (English, Chinese, Hindi, Arabic, etc.) without swapping encodings.</li>
          <li><strong>Consistency:</strong> Avoids character corruption (commonly known as "mojibake").</li>
          <li><strong>Java Integration:</strong> Java's <code>char</code> type is natively based on UTF-16 Unicode, making internationalization operations clean and seamless.</li>
        </ul>
      </>
    ),
  },
  {
    id: 116,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'Why should a Java program override equals() & hashCode() methods?',
    answer: (
      <>
        <p>In Java, these methods must be overridden together to maintain the general contract of equals and hashCode:</p>
        <ul>
          <li><strong>Consistency:</strong> If two objects are equal according to <code>equals(Object)</code>, they must return the same <code>hashCode()</code> value.</li>
          <li><strong>Collection Correctness:</strong> Hash-based collections (like <code>HashMap</code> and <code>HashSet</code>) use <code>hashCode()</code> to find which bucket to store or search the object, and then use <code>equals()</code> to resolve collisions.</li>
          <li>Without overriding both, equal objects will return different hashes, leading to duplicate values or lookups returning <code>null</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 117,
    category: 'Advanced Java',
    difficulty: 'medium',
    question: 'What is the role of the Garbage Collector?',
    answer: (
      <>
        <p>The JVM's Garbage Collector (GC) is an automatic memory management system whose role is to:</p>
        <ul>
          <li><strong>Allocate Memory:</strong> Find free space on the heap for newly instantiated objects.</li>
          <li><strong>Identify Unreachable Objects:</strong> Track object references from live threads and identify objects that are no longer referenced/accessible.</li>
          <li><strong>Reclaim Memory:</strong> Deallocate memory of unreachable objects, returning it to the OS or defragmenting heap space.</li>
        </ul>
      </>
    ),
  },
  {
    id: 118,
    category: 'Advanced Java',
    difficulty: 'easy',
    question: 'What is the use of finalize() method?',
    answer: (
      <>
        <p>The <code>finalize()</code> method was historically used as a callback to release non-memory resources (like file handles, database connections, or graphics contexts) before an object is garbage collected.</p>
        <div className="qa-tip">
          <span className="qa-tip-icon">⚠️</span>
          <strong>Note:</strong> <code>finalize()</code> is deprecated since Java 9 and completely removed in modern versions due to unpredictable execution. Developers should use <code>try-with-resources</code> with <code>AutoCloseable</code> classes instead.
        </div>
      </>
    ),
  },
  {
    id: 119,
    category: 'Advanced Java',
    difficulty: 'hard',
    question: 'Which layer should be used while starting the boundary of a transaction?',
    answer: (
      <>
        <p>Transaction boundaries should be started and managed in the **Service Layer** (Business Logic Layer) of the application.</p>
        <ul>
          <li><strong>Reason:</strong> The service layer orchestrates business workflows which often require calling multiple DAO/Repository methods. Starting the transaction at the Service level guarantees that all operations within that business method either succeed together or rollback as a single atomic unit.</li>
          <li>Starting it in the DAO layer prevents chaining multiple repository actions into a single transaction, and starting it in the Controller layer exposes business context details to the presentation layer.</li>
        </ul>
      </>
    ),
  },
  {
    id: 120,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What do you understand by Artificial Intelligence?',
    answer: (
      <>
        <p><strong>Artificial Intelligence (AI)</strong> is a branch of computer science focused on building intelligent systems capable of performing tasks that typically require human intelligence.</p>
        <p>These cognitive tasks include:</p>
        <ul>
          <li>Learning and reasoning</li>
          <li>Problem-solving and decision-making</li>
          <li>Perception and pattern recognition</li>
          <li>Natural language understanding and generation</li>
        </ul>
      </>
    ),
  },
  {
    id: 121,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Why do we need Artificial Intelligence?',
    answer: (
      <>
        <p>AI is essential for solving complex real-world challenges because of its ability to:</p>
        <ul>
          <li><strong>Automate repetitive tasks:</strong> Increases efficiency and reduces human error (e.g., customer support, data entry).</li>
          <li><strong>Analyze massive datasets:</strong> Uncovers insights and patterns that are impossible for humans to process manually (e.g., fraud detection, genomics).</li>
          <li><strong>Execute dangerous operations:</strong> Can be deployed in environments hazardous to humans (e.g., space exploration, mining, bomb defusal).</li>
          <li><strong>Enhance decision-making:</strong> Speed and precision diagnostics in medicine, stock market predictions, and routing optimization.</li>
        </ul>
      </>
    ),
  },
  {
    id: 122,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What are the types of AI?',
    answer: (
      <>
        <p>AI is classified under two main paradigms:</p>
        <ul>
          <li><strong>Based on Capabilities:</strong>
            <ul>
              <li><em>Weak AI / Narrow AI:</em> Designed and trained for a specific task (e.g., Siri, chess engines, facial recognition). Currently, all existing AI is Weak AI.</li>
              <li><em>General AI (AGI):</em> Hypothetical AI capable of understanding, learning, and performing any intellectual task as well as a human.</li>
              <li><em>Super AI (ASI):</em> Hypothetical AI that exceeds human cognitive abilities across all fields.</li>
            </ul>
          </li>
          <li><strong>Based on Functionality:</strong>
            <ul>
              <li><em>Reactive Machines:</em> Basic systems that respond to immediate inputs without memory (e.g., Deep Blue).</li>
              <li><em>Limited Memory:</em> Can use historical data to make temporary decisions (e.g., self-driving car pathing).</li>
              <li><em>Theory of Mind:</em> Systems capable of understanding human beliefs, emotions, and intentions (under development).</li>
              <li><em>Self-Aware AI:</em> Conscious machines possessing self-awareness (future concept).</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 123,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What are the different domains/Subsets of AI?',
    answer: (
      <>
        <p>AI is a broad field composed of several specialized domains and subsets:</p>
        <ul>
          <li><strong>Machine Learning (ML)</strong> — Algorithms that allow computers to learn patterns from data and make predictions without explicit programming.</li>
          <li><strong>Deep Learning (DL)</strong> — A subset of ML utilizing multi-layered artificial neural networks (neural networks with many hidden layers).</li>
          <li><strong>Natural Language Processing (NLP)</strong> — Enabling machines to understand, translate, and generate human languages.</li>
          <li><strong>Computer Vision</strong> — Restoring visual perception to computers, allowing them to identify and process digital images and videos.</li>
          <li><strong>Robotics</strong> — Designing and building physical agents to execute real-world manual tasks.</li>
        </ul>
      </>
    ),
  },
  {
    id: 124,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Which programming language is used for AI?',
    answer: (
      <>
        <p>While many languages can be used, the choice depends on libraries and execution performance:</p>
        <ul>
          <li><strong>Python:</strong> The absolute leader due to its simple syntax, extensive community, and powerful libraries (Scikit-Learn, TensorFlow, PyTorch, NumPy).</li>
          <li><strong>R:</strong> Preferred for statistics-heavy modeling, data visualization, and academic analysis.</li>
          <li><strong>C++:</strong> Used for performance-critical AI engines, real-time gaming algorithms, and embedded robotics due to low-level memory control and fast execution.</li>
          <li><strong>Java:</strong> Used in enterprise-scale search algorithms, data engineering pipelines, and multi-threaded neural networks.</li>
        </ul>
      </>
    ),
  },
  {
    id: 125,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the intelligent agent in AI, and where are they used?',
    answer: (
      <>
        <p>An <strong>intelligent agent</strong> is an autonomous entity that perceives its environment through sensors, processes information, and acts upon that environment using actuators in a way that maximizes its chance of successfully achieving its goals.</p>
        <p>Intelligent agents are used in:</p>
        <ul>
          <li>Web crawlers and search engine indexing bots.</li>
          <li>Smart home thermostats (like Nest) adjusting temperatures dynamically.</li>
          <li>Autonomous vehicles routing and braking based on sensor inputs.</li>
          <li>Automated algorithmic trading bots in financial markets.</li>
        </ul>
      </>
    ),
  },
  {
    id: 126,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is Strong AI, and how is it different from the Weak AI?',
    answer: (
      <>
        <p>The difference lies in understanding and consciousness:</p>
        <ul>
          <li><strong>Weak AI (Narrow AI):</strong> Performs specific predefined tasks with no actual consciousness. It translates text, recognizes faces, or predicts values based on data correlations but does not "understand" what it is doing.</li>
          <li><strong>Strong AI (AGI):</strong> A theoretical machine that possesses human-like consciousness, self-awareness, and true understanding. It can reason, abstract concepts, make plans under complete uncertainty, and apply learned knowledge across unrelated domains.</li>
        </ul>
      </>
    ),
  },
  {
    id: 127,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Give a brief introduction to the Turing test in AI?',
    answer: (
      <>
        <p>Proposed by mathematician Alan Turing in 1950, the **Turing Test** is a benchmark designed to determine if a machine can exhibit human-like intelligence.</p>
        <ul>
          <li><strong>Procedure:</strong> A human judge conducts text-only conversations with two hidden participants—a human and a machine.</li>
          <li><strong>Outcome:</strong> If the judge cannot consistently identify which participant is the machine after a set period of conversation, the machine passes the test, indicating its behavior is indistinguishable from human intelligence.</li>
        </ul>
      </>
    ),
  },
  {
    id: 128,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is NLP? What are the various components of NLP?',
    answer: (
      <>
        <p><strong>Natural Language Processing (NLP)</strong> is the domain of AI that enables computer systems to interact with human languages.</p>
        <p>It consists of two main components:</p>
        <ul>
          <li><strong>Natural Language Understanding (NLU):</strong> The process of converting raw natural language text into structured logical representations that the computer can reason about (involves parsing, POS tagging, named entity recognition, and semantic role labeling).</li>
          <li><strong>Natural Language Generation (NLG):</strong> The process of translating structured data/decisions back into natural human-sounding sentences (involves content planning, sentence structuring, and grammatical expression).</li>
        </ul>
      </>
    ),
  },
  {
    id: 129,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What are the different components of the Expert System?',
    answer: (
      <>
        <p>An Expert System is a software program that emulates the decision-making ability of a human expert. It consists of three parts:</p>
        <ol>
          <li><strong>Knowledge Base:</strong> Stores structured facts, heuristics, and IF-THEN rules gathered from human domain experts.</li>
          <li><strong>Inference Engine:</strong> The brain of the system. It applies logical reasoning rules to the knowledge base to deduce solutions or make recommendations using forward or backward chaining.</li>
          <li><strong>User Interface:</strong> The interface that translates user queries into logical inputs and displays the inference engine's deductions back to the user.</li>
        </ol>
      </>
    ),
  },
  {
    id: 130,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the use of computer vision in AI?',
    answer: (
      <>
        <p>Computer Vision is used to analyze, interpret, and extract structured metadata from digital images, video streams, and multi-dimensional sensor data.</p>
        <p>Key applications include:</p>
        <ul>
          <li><strong>Object Detection:</strong> Finding and tagging bounding boxes (e.g. pedestrians, signs in autonomous driving).</li>
          <li><strong>Image Classification:</strong> Identifying the primary subject of an image (e.g. medical imaging classifying scans as benign or malignant).</li>
          <li><strong>Facial Recognition:</strong> Security authentication and surveillance profiling.</li>
          <li><strong>Optical Character Recognition (OCR):</strong> Digitizing text from physical forms and documents.</li>
        </ul>
      </>
    ),
  },
  {
    id: 131,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is game theory? How is it important in AI?',
    answer: (
      <>
        <p><strong>Game Theory</strong> is a mathematical framework that models strategic interactions between rational agents who must make decisions that affect one another's utility.</p>
        <ul>
          <li><strong>Importance in AI:</strong> It is crucial for designing multi-agent environments where independent AI systems must cooperate, coordinate, or compete (e.g., in automated auction bids, multiplayer game behaviors, network routing protocols, and cybersecurity defense networks).</li>
        </ul>
      </>
    ),
  },
  {
    id: 132,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is an Artificial neural network? Name some commonly used Artificial Neural networks?',
    answer: (
      <>
        <p>An <strong>Artificial Neural Network (ANN)</strong> is a computational model inspired by the structures of biological neural networks in the human brain. It consists of input, hidden, and output layers of interconnected artificial neurons.</p>
        <p>Common architectures include:</p>
        <ul>
          <li><strong>Feedforward Neural Networks (FNN):</strong> Information travels unidirectionally from input to output.</li>
          <li><strong>Convolutional Neural Networks (CNN):</strong> Specialized in spatial grid structures, widely used for computer vision.</li>
          <li><strong>Recurrent Neural Networks (RNN):</strong> Specialized for sequential sequences (time-series, text) by feeding state outputs back as inputs.</li>
          <li><strong>Transformers:</strong> Utilize self-attention mechanisms to process sequential data in parallel, dominating modern Generative AI.</li>
        </ul>
      </>
    ),
  },
  {
    id: 133,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is knowledge representation in AI?',
    answer: (
      <>
        <p><strong>Knowledge Representation</strong> is the study of how an AI system structures real-world facts, rules, and concepts into formal symbol systems (data structures) so that reasoning algorithms can perform inferences and solve complex problems.</p>
      </>
    ),
  },
  {
    id: 134,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What are the various techniques of knowledge representation in AI?',
    answer: (
      <>
        <p>There are four classic formalisms for representing knowledge in AI systems:</p>
        <ul>
          <li><strong>Semantic Networks:</strong> Graph structures consisting of nodes (representing objects or concepts) connected by labeled edges (representing relations like <code>is-a</code> or <code>has-a</code>).</li>
          <li><strong>Frames:</strong> Record-like structures consisting of collection slots and values, useful for representing stereotypical physical items.</li>
          <li><strong>Predicate Logic (First-Order Logic):</strong> Using symbols, variables, quantifiers, and connectives to write assertions and deduce new statements logically.</li>
          <li><strong>Conceptual Dependency (CD):</strong> A system for representing the semantic meaning of natural language sentences in a language-independent structure.</li>
        </ul>
      </>
    ),
  },
  {
    id: 135,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'How can AI be used in fraud detection?',
    answer: (
      <>
        <p>AI detects fraud by analyzing high-volume transaction streams in real-time:</p>
        <ul>
          <li><strong>Anomaly Detection:</strong> Flagging purchases that deviate from a customer's standard spending habits (e.g. sudden large transactions from an unusual location).</li>
          <li><strong>Behavioral Profiling:</strong> Creating dynamic user profiles based on clickstream, timing, and navigation patterns.</li>
          <li><strong>Supervised Classifiers:</strong> Running machine learning models (like XGBoost or Random Forests) trained on historical datasets containing fraud labels to assign risk scores to transactions instantly.</li>
        </ul>
      </>
    ),
  },
  {
    id: 136,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the inference engine, and why it is used in AI?',
    answer: (
      <>
        <p>The <strong>inference engine</strong> is the processing brain of an expert system. It applies logical rules to the knowledge base to deduce solutions.</p>
        <p>It utilizes two reasoning mechanisms:</p>
        <ul>
          <li><strong>Forward Chaining:</strong> Starts from known facts and applies rules to deduce new facts (data-driven reasoning).</li>
          <li><strong>Backward Chaining:</strong> Starts from a goal/hypothesis and checks the rules backward to see if supporting facts exist in the database (goal-driven reasoning).</li>
        </ul>
      </>
    ),
  },
  {
    id: 137,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Discuss some real-world applications of AI?',
    answer: (
      <>
        <p>AI is applied extensively across major global industries:</p>
        <ul>
          <li><strong>Healthcare:</strong> AI-powered cancer cell screening, automated drug discovery, and surgical robotics.</li>
          <li><strong>Finance:</strong> Algorithmic stock trading, automated credit approvals, and anti-money laundering filters.</li>
          <li><strong>E-Commerce:</strong> Dynamic search results and recommender engines (Netflix, Amazon).</li>
          <li><strong>Automotive:</strong> Lane centering, collision avoidance, and autonomous driving.</li>
          <li><strong>Productivity:</strong> Generative text copilots (ChatGPT) and image generation.</li>
        </ul>
      </>
    ),
  },
  {
    id: 138,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'Explain the Hidden Markov model?',
    answer: (
      <>
        <p>A <strong>Hidden Markov Model (HMM)</strong> is a statistical model where the system being modeled is assumed to be a Markov process with hidden (unobserved) states.</p>
        <ul>
          <li>It assumes that the state transitions are hidden, but each state emits observable tokens with specific probabilities.</li>
          <li>The model resolves queries like: what is the most likely sequence of hidden states that produced a sequence of observed emissions?</li>
          <li>It is widely used in speech recognition, bioinformatics (DNA sequencing), and Part-of-Speech (POS) tagging in NLP.</li>
        </ul>
      </>
    ),
  },
  {
    id: 139,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'Explain the minimax algorithm along with the different terms?',
    answer: (
      <>
        <p>The <strong>Minimax algorithm</strong> is a recursive backtracking decision-making algorithm used in two-player zero-sum games (such as Chess, Checkers, and Tic-Tac-Toe) to determine the optimal move.</p>
        <p>Key terms used:</p>
        <ul>
          <li><strong>Max:</strong> The player attempting to maximize the score (usually the AI agent).</li>
          <li><strong>Min:</strong> The opponent attempting to minimize the AI's score.</li>
          <li><strong>Terminal State:</strong> The final board states representing end-of-game nodes (win, loss, draw).</li>
          <li><strong>Evaluation Function:</strong> A function that calculates a static score for non-terminal board configurations.</li>
          <li><strong>Alpha-Beta Pruning:</strong> An optimization technique that discards paths that are guaranteed to yield worse outcomes than already evaluated options, speeding up recursion.</li>
        </ul>
      </>
    ),
  },
  {
    id: 140,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What are the types of Artificial Intelligence?',
    answer: (
      <>
        <p>AI is categorized based on capabilities and functionalities:</p>
        <ul>
          <li><strong>Capabilities:</strong>
            <ul>
              <li><em>Weak/Narrow AI:</em> Trained for a specific task (e.g., Siri, Alexa, spam filters).</li>
              <li><em>General AI (AGI):</em> Theoretical machine matching human intelligence.</li>
              <li><em>Super AI (ASI):</em> Theoretical machine exceeding human intelligence.</li>
            </ul>
          </li>
          <li><strong>Functionalities:</strong> Reactive Machines, Limited Memory, Theory of Mind, and Self-Aware AI.</li>
        </ul>
      </>
    ),
  },
  {
    id: 141,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the difference between a strong AI and a weak AI?',
    answer: (
      <>
        <p>The core differences are:</p>
        <ul>
          <li><strong>Weak AI (Narrow AI)</strong> — Solves specific tasks, operates under constraints, and lacks true cognitive comprehension or self-awareness.</li>
          <li><strong>Strong AI (AGI)</strong> — Possesses self-awareness, abstract reasoning, and holds general intelligence capable of transferring knowledge between unrelated tasks.</li>
        </ul>
      </>
    ),
  },
  {
    id: 142,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'What are Bayesian networks?',
    answer: (
      <>
        <p>A <strong>Bayesian Network</strong> is a probabilistic graphical model that represents a set of random variables and their conditional dependencies via a Directed Acyclic Graph (DAG).</p>
        <ul>
          <li>Nodes represent random variables (discrete or continuous).</li>
          <li>Edges represent conditional dependencies between variables.</li>
          <li>They are used to calculate the likelihood of certain causes given observed symptoms (e.g., medical diagnosis).</li>
        </ul>
      </>
    ),
  },
  {
    id: 143,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'How many types of agents are there in Artificial Intelligence?',
    answer: (
      <>
        <p>There are five primary types of intelligent agents based on their degree of intelligence and capability:</p>
        <ol>
          <li><strong>Simple Reflex Agents:</strong> Act only on current perceptions (ignore history).</li>
          <li><strong>Model-Based Reflex Agents:</strong> Maintain internal state to track unseen parts of the environment.</li>
          <li><strong>Goal-Based Agents:</strong> Act to achieve a specified goal state.</li>
          <li><strong>Utility-Based Agents:</strong> Maximize a utility function representing agent preference/happiness.</li>
          <li><strong>Learning Agents:</strong> Can learn from past performance to improve actions.</li>
        </ol>
      </>
    ),
  },
  {
    id: 144,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is Overfitting?',
    answer: (
      <>
        <p><strong>Overfitting</strong> is a machine learning modeling error that occurs when a model learns the training data too well, capturing its noise and random fluctuations rather than the underlying pattern.</p>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Overfit models perform exceptionally well on training data but fail to generalize, leading to poor accuracy on unseen validation/test data.
        </div>
      </>
    ),
  },
  {
    id: 145,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is Fuzzy logic?',
    answer: (
      <>
        <p><strong>Fuzzy Logic</strong> is a method of reasoning that resembles human decision-making by dealing with approximate, many-valued logic rather than binary (true/false, 0/1) logic.</p>
        <ul>
          <li>It allows truth values to range anywhere between 0.0 and 1.0.</li>
          <li>Useful for dealing with vagueness (e.g., classifying temperature as "very hot", "warm", or "cool").</li>
        </ul>
      </>
    ),
  },
  {
    id: 146,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What is a Chatbot? How can they help to deliver the best customer support to the customers?',
    answer: (
      <>
        <p>A <strong>Chatbot</strong> is an AI application designed to simulate human conversation via text or voice.</p>
        <p>They improve customer support by:</p>
        <ul>
          <li>Providing instant 24/7 support.</li>
          <li>Scaling to handle thousands of concurrent queries without wait times.</li>
          <li>Resolving repetitive FAQ-style issues, freeing human agents for complex cases.</li>
        </ul>
      </>
    ),
  },
  {
    id: 147,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Why is Image Recognition a Key Function of AI?',
    answer: (
      <>
        <p>Image Recognition is fundamental because it grants machines visual perception, enabling them to automate tasks such as:</p>
        <ul>
          <li>Biometric security (facial scans).</li>
          <li>Autonomous navigation (detecting lane lines, obstacles, and traffic signs).</li>
          <li>Medical diagnostics (identifying anomalies in MRI scans).</li>
        </ul>
      </>
    ),
  },
  {
    id: 148,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Why Do We Utilize an Inference Engine in AI?',
    answer: (
      <>
        <p>We use an Inference Engine in expert systems to separate the domain-specific facts (Knowledge Base) from the control logic that evaluates those rules.</p>
        <ul>
          <li>This enables easy modification of domain knowledge without rewriting the reasoning algorithm.</li>
        </ul>
      </>
    ),
  },
  {
    id: 149,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is a Rational Agent, and What is Rationality?',
    answer: (
      <>
        <p>Definitions in AI theory:</p>
        <ul>
          <li><strong>Rational Agent:</strong> An agent that selects actions expected to maximize its performance measure, given its perceived history and internal knowledge.</li>
          <li><strong>Rationality:</strong> The standard of choosing actions that yield the optimal expected outcome. It is not omniscience, as it is bounded by the agent's information.</li>
        </ul>
      </>
    ),
  },
  {
    id: 150,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What do you understand by the reward maximization?',
    answer: (
      <>
        <p>In <strong>Reinforcement Learning</strong>, reward maximization is the objective where an agent learns to navigate an environment to maximize its cumulative long-term expected reward (return).</p>
      </>
    ),
  },
  {
    id: 151,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What are parametric and non-parametric model?',
    answer: (
      <>
        <p>The differences relate to model assumptions:</p>
        <ul>
          <li><strong>Parametric Models:</strong> Assume a fixed functional form (structure) for the mapping function (e.g. Linear Regression, Logistic Regression). They have a fixed set of parameters.</li>
          <li><strong>Non-parametric Models:</strong> Do not make strong assumptions about the functional form, allowing parameters to grow and adapt with the data size (e.g. K-Nearest Neighbors, Decision Trees, SVMs).</li>
        </ul>
      </>
    ),
  },
  {
    id: 152,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Tell one technique to avoid overfitting in neural networks?',
    answer: (
      <>
        <p>A common technique is <strong>Dropout</strong>.</p>
        <ul>
          <li>During training, randomly selected neurons are ignored ("dropped out") with a set probability.</li>
          <li>This prevents neurons from co-adapting too closely, forcing the network to learn robust, generalized representations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 153,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Which programming language is not generally used in AI, and why?',
    answer: (
      <>
        <p>Languages like <strong>HTML</strong> are not used because they are markup languages, not programming languages. Among programming languages, **low-level Assembly** is not used because it lacks the mathematical abstractions required for matrix algebra and tensor operations.</p>
      </>
    ),
  },
  {
    id: 154,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What is tensor flow, and how it is used in AI?',
    answer: (
      <>
        <p><strong>TensorFlow</strong> is Google's open-source library for numerical computation and large-scale Machine Learning.</p>
        <ul>
          <li>It provides abstractions to define mathematical operations as data flow graphs.</li>
          <li>It automatically computes gradients (autodiff) and executes tensor computations efficiently across CPUs, GPUs, and TPUs.</li>
        </ul>
      </>
    ),
  },
  {
    id: 155,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is a market-basket analysis?',
    answer: (
      <>
        <p><strong>Market-Basket Analysis</strong> is a data mining technique used to identify associations between items purchased together by customers.</p>
        <ul>
          <li>It uses association rule learning (such as the Apriori algorithm) to find rules like <code>{"{Bread} -> {Butter}"}</code> based on metrics of Support, Confidence, and Lift.</li>
        </ul>
      </>
    ),
  },
  {
    id: 156,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'What is a uniform cost search algorithm?',
    answer: (
      <>
        <p><strong>Uniform Cost Search (UCS)</strong> is an uninformed graph search algorithm that expands the node with the lowest path cost <code>g(n)</code> from the root.</p>
        <ul>
          <li>It is equivalent to Dijkstra's algorithm applied to trees/graphs.</li>
          <li>It is complete and optimal if step costs are positive.</li>
        </ul>
      </>
    ),
  },
  {
    id: 157,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is Alpha–Beta pruning?',
    answer: (
      <>
        <p><strong>Alpha-Beta Pruning</strong> is an optimization method for the minimax game-tree search algorithm.</p>
        <ul>
          <li>It keeps track of two values: <em>Alpha</em> (minimum score Max is assured of) and <em>Beta</em> (maximum score Min can get).</li>
          <li>If a branch is guaranteed to result in a worse option than an already evaluated choice, it is pruned, saving significant search time.</li>
        </ul>
      </>
    ),
  },
  {
    id: 158,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is regularization in Machine Learning?',
    answer: (
      <>
        <p><strong>Regularization</strong> is a technique used to prevent overfitting by adding a penalty term to the loss function that discourages complex models:</p>
        <ul>
          <li><strong>L1 Regularization (Lasso):</strong> Adds absolute values of weights penalty, encouraging sparse weights (feature selection).</li>
          <li><strong>L2 Regularization (Ridge):</strong> Adds squared values of weights penalty, encouraging small, distributed weights.</li>
        </ul>
      </>
    ),
  },
  {
    id: 159,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'What is vanishing gradient?',
    answer: (
      <>
        <p>The <strong>vanishing gradient problem</strong> occurs when training deep neural networks using backpropagation.</p>
        <ul>
          <li>As errors propagate backward, gradients shrink exponentially in earlier layers when using activation functions like Sigmoid or Tanh.</li>
          <li>This causes earlier layers to train extremely slowly, preventing the network from learning deep representations. Fixes include using ReLU and batch normalization.</li>
        </ul>
      </>
    ),
  },
  {
    id: 160,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What is the concept of the Tower of Hanoi?',
    answer: (
      <>
        <p>The <strong>Tower of Hanoi</strong> is a mathematical puzzle involving three rods and multiple disks of different sizes.</p>
        <ul>
          <li><strong>Goal:</strong> Move the entire stack to another rod under two rules: 1) Only one disk can be moved at a time, and 2) No disk can be placed on top of a smaller disk.</li>
          <li>In AI, it is used to study recursive planning algorithms and state-space search representations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 161,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is an expert system, and what are its characteristics?',
    answer: (
      <>
        <p>An <strong>expert system</strong> is an AI application that solves complex problems by emulating the decision-making ability of a human specialist.</p>
        <p>Key characteristics include:</p>
        <ul>
          <li>High performance and reliability.</li>
          <li>Explicit explanation capability (can explain "why" it reached a conclusion).</li>
          <li>Clear division between the rule engine and the knowledge database.</li>
        </ul>
      </>
    ),
  },
  {
    id: 162,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What are the advantages of using an expert system?',
    answer: (
      <>
        <p>Key advantages include:</p>
        <ul>
          <li><strong>Permanence:</strong> Preserves domain knowledge indefinitely (unlike human experts who leave or retire).</li>
          <li><strong>Consistency:</strong> Delivers objective decisions without fatigue or bias.</li>
          <li><strong>Availability:</strong> Can be deployed 24/7 across multiple servers.</li>
        </ul>
      </>
    ),
  },
  {
    id: 163,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the A* algorithm used for in search methods?',
    answer: (
      <>
        <p>The <strong>A* algorithm</strong> is a pathfinding and graph traversal algorithm used to find the shortest path between start and goal nodes.</p>
        <ul>
          <li>It uses the evaluation function: <code>f(n) = g(n) + h(n)</code>.</li>
          <li><code>g(n)</code> is the exact cost from the start to node <code>n</code>, and <code>h(n)</code> is an admissible heuristic estimating the cost from <code>n</code> to the goal.</li>
        </ul>
      </>
    ),
  },
  {
    id: 164,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'How does the breadth-first search algorithm function?',
    answer: (
      <>
        <p><strong>Breadth-First Search (BFS)</strong> is an uninformed search algorithm that explores all nodes at the current depth level before moving to the next level.</p>
        <ul>
          <li>It uses a **Queue (FIFO)** data structure.</li>
          <li>It is complete and guarantees the optimal path if all edge costs are equal.</li>
        </ul>
      </>
    ),
  },
  {
    id: 165,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the working principle of the depth-first search algorithm?',
    answer: (
      <>
        <p><strong>Depth-First Search (DFS)</strong> is an uninformed search algorithm that explores as deep as possible along each branch before backtracking.</p>
        <ul>
          <li>It uses a **Stack (LIFO)** data structure.</li>
          <li>It is memory efficient compared to BFS, but it is not complete (can get stuck in infinite loops) and is not optimal.</li>
        </ul>
      </>
    ),
  },
  {
    id: 166,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the bidirectional search algorithm?',
    answer: (
      <>
        <p><strong>Bidirectional Search</strong> is a graph search algorithm that runs two concurrent searches: one forward from the initial state, and one backward from the goal state.</p>
        <ul>
          <li>The search terminates when the two paths intersect in the middle.</li>
          <li>It reduces the time complexity from <code>O(b^d)</code> to <code>O(b^(d/2))</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 167,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'How does the iterative deepening depth-first search algorithm work?',
    answer: (
      <>
        <p><strong>Iterative Deepening DFS (IDDFS)</strong> combines the space-efficiency of DFS and the completeness of BFS.</p>
        <ul>
          <li>It repeatedly runs a depth-limited DFS, increasing the depth limit by 1 in each iteration.</li>
          <li>It uses only <code>O(bd)</code> memory space (like DFS) but guarantees finding the shallowest goal node (like BFS).</li>
        </ul>
      </>
    ),
  },
  {
    id: 168,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What are the applications of fuzzy logic?',
    answer: (
      <>
        <p>Fuzzy logic is used extensively in industrial control systems where inputs are vague:</p>
        <ul>
          <li>Automotive automatic transmissions and braking control.</li>
          <li>Consumer electronics (washing machines adjusting wash cycles, air conditioning temp regulation).</li>
          <li>Financial risk assessment and decision-support software.</li>
        </ul>
      </>
    ),
  },
  {
    id: 169,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'What is the concept of partial-order planning?',
    answer: (
      <>
        <p><strong>Partial-Order Planning (POP)</strong> is a planning technique that represents plans where some steps are not ordered in a strict sequence.</p>
        <ul>
          <li>It operates on a "least commitment" principle: steps are only ordered relative to one another if necessary to resolve conflict (e.g. step A must occur before step B).</li>
        </ul>
      </>
    ),
  },
  {
    id: 170,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What does FOPL stand for?',
    answer: (
      <>
        <p><strong>FOPL</strong> stands for <strong>First-Order Predicate Logic</strong>.</p>
        <ul>
          <li>It is a formal logic system that extends propositional logic by introducing predicates, functions, objects, and quantifiers (universal <code>∀</code> and existential <code>∃</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 171,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the difference between inductive, deductive, and abductive Machine Learning?',
    answer: (
      <>
        <p>These represent different logical reasoning paradigms:</p>
        <ul>
          <li><strong>Inductive Learning:</strong> Extracting general rules/patterns from specific observed examples (e.g., standard ML model training).</li>
          <li><strong>Deductive Learning:</strong> Applying general rules to specific cases to reach guaranteed conclusions (e.g., logical inference).</li>
          <li><strong>Abductive Learning:</strong> Starting from an observation and inferring the most likely explanation (e.g., medical diagnostics).</li>
        </ul>
      </>
    ),
  },
  {
    id: 172,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Enumerate the different algorithm techniques in Machine Learning.',
    answer: (
      <>
        <p>Machine learning tasks are grouped into four primary training paradigms:</p>
        <ul>
          <li><strong>Supervised Learning:</strong> Model is trained on labeled training data (inputs mapped to targets).</li>
          <li><strong>Unsupervised Learning:</strong> Model finds hidden structures in unlabeled datasets (clustering, associations).</li>
          <li><strong>Semi-Supervised Learning:</strong> Uses a small amount of labeled data combined with large amounts of unlabeled data.</li>
          <li><strong>Reinforcement Learning:</strong> Agent learns to act through trial-and-error using reward/penalty feedback loops.</li>
        </ul>
      </>
    ),
  },
  {
    id: 173,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What is the definition of Deep Learning?',
    answer: (
      <>
        <p><strong>Deep Learning</strong> is a specialized subset of Machine Learning based on Artificial Neural Networks with multiple hidden layers (hence "deep").</p>
        <ul>
          <li>Unlike shallow ML, Deep Learning models perform automatic feature extraction directly from raw inputs (such as image pixels or audio waves).</li>
        </ul>
      </>
    ),
  },
  {
    id: 174,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Differentiate between supervised, unsupervised, and reinforcement learning.',
    answer: (
      <>
        <p>The differences depend on the presence of labels and feedback:</p>
        <ul>
          <li><strong>Supervised:</strong> Trained on historical input-output pairs (labels) to predict continuous values or categories.</li>
          <li><strong>Unsupervised:</strong> Receives unlabeled inputs; seeks to group similar records (clustering) or compress structures.</li>
          <li><strong>Reinforcement:</strong> No static dataset; uses active environments where actions trigger states and scalar rewards.</li>
        </ul>
      </>
    ),
  },
  {
    id: 175,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the concept of Naive Bayes?',
    answer: (
      <>
        <p><strong>Naive Bayes</strong> is a classification algorithm based on Bayes' Theorem under the "naive" assumption that all features are completely independent of one another given the class label.</p>
        <div className="qa-tip">
          <span className="qa-tip-icon">💡</span>
          Despite this simplification, Naive Bayes is extremely fast and performs well in text classification (such as spam filtering).
        </div>
      </>
    ),
  },
  {
    id: 176,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'Explain the Backpropagation Algorithm.',
    answer: (
      <>
        <p><strong>Backpropagation</strong> is the fundamental algorithm used to train neural networks:</p>
        <ol>
          <li>It runs a forward pass to calculate predictions and compute the network error (loss).</li>
          <li>It computes the partial derivatives of the loss function with respect to each weight using the mathematical chain rule.</li>
          <li>It propagates these gradient values backward through the network layers to update weights via gradient descent.</li>
        </ol>
      </>
    ),
  },
  {
    id: 177,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the process of optimizing route weights to reduce model error?',
    answer: (
      <>
        <p>This process is called <strong>Gradient Descent</strong> optimization.</p>
        <ul>
          <li>It calculates the gradient of the loss function, then updates network weights in the opposite direction of the gradient to gradually minimize error.</li>
        </ul>
      </>
    ),
  },
  {
    id: 178,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Define perceptron in Machine Learning.',
    answer: (
      <>
        <p>A <strong>Perceptron</strong> is the simplest single-layer artificial neuron used for binary classification.</p>
        <ul>
          <li>It computes a weighted sum of its inputs, adds a bias term, and applies a step function (returning 0 or 1) to make predictions.</li>
        </ul>
      </>
    ),
  },
  {
    id: 179,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Is KNN different from K-means Clustering?',
    answer: (
      <>
        <p>Yes, they serve completely different ML tasks:</p>
        <ul>
          <li><strong>KNN (K-Nearest Neighbors):</strong> A supervised classification/regression algorithm. It labels a query node based on the majority vote of its nearest neighbors.</li>
          <li><strong>K-means:</strong> An unsupervised clustering algorithm. It partitions a dataset into <code>K</code> groups by calculating distance centroids.</li>
        </ul>
      </>
    ),
  },
  {
    id: 180,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What does ensemble learning involve?',
    answer: (
      <>
        <p><strong>Ensemble Learning</strong> involves combining predictions from multiple individual models (weak learners) to construct a stronger, more robust model.</p>
        <p>Primary techniques include:</p>
        <ul>
          <li><strong>Bagging:</strong> Training models in parallel on bootstrapped samples (e.g. Random Forest).</li>
          <li><strong>Boosting:</strong> Training models sequentially, where each model focuses on correcting prior model errors (e.g. XGBoost, AdaBoost).</li>
        </ul>
      </>
    ),
  },
  {
    id: 181,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Outline the steps in the Machine Learning process.',
    answer: (
      <>
        <p>The standard end-to-end machine learning pipeline consists of:</p>
        <ol>
          <li>Problem definition and requirement gathering.</li>
          <li>Data collection and ingestion.</li>
          <li>Data cleaning and preprocessing.</li>
          <li>Feature engineering and selection.</li>
          <li>Model selection and training.</li>
          <li>Evaluation and hyperparameter tuning.</li>
          <li>Deployment and monitoring.</li>
        </ol>
      </>
    ),
  },
  {
    id: 182,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Define a hash table.',
    answer: (
      <>
        <p>A <strong>Hash Table</strong> is a data structure that stores key-value pairs.</p>
        <ul>
          <li>It uses a hash function to map keys to bucket indices, offering <code>O(1)</code> average time complexity for insertion, deletion, and lookup.</li>
        </ul>
      </>
    ),
  },
  {
    id: 183,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What are the components of relational evaluation techniques?',
    answer: (
      <>
        <p>Relational evaluation techniques evaluate the accuracy of classifiers using:</p>
        <ul>
          <li><strong>Precision:</strong> Ratio of true positives to total predicted positives.</li>
          <li><strong>Recall (Sensitivity):</strong> Ratio of true positives to total actual positives.</li>
          <li><strong>Confusion Matrix:</strong> Tabular summary of True Positives, True Negatives, False Positives, and False Negatives.</li>
        </ul>
      </>
    ),
  },
  {
    id: 184,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'How do we differentiate between model accuracy and model performance?',
    answer: (
      <>
        <p>The distinction separates prediction correctness from system efficiency:</p>
        <ul>
          <li><strong>Model Accuracy:</strong> The statistical correctness of predictions (e.g., percentage of correctly classified images).</li>
          <li><strong>Model Performance:</strong> Broader system-level metric measuring inference speed (latency), memory footprint, and throughput.</li>
        </ul>
      </>
    ),
  },
  {
    id: 185,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Explain the concept of F1 score.',
    answer: (
      <>
        <p>The <strong>F1 Score</strong> is the harmonic mean of Precision and Recall:</p>
        <div className="qa-code-block">{`F1 = 2 * (Precision * Recall) / (Precision + Recall)`}</div>
        <ul>
          <li>It balances both metrics and is highly useful for evaluating classifiers on imbalanced datasets.</li>
        </ul>
      </>
    ),
  },
  {
    id: 186,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What are some applications of Machine Learning?',
    answer: (
      <>
        <p>Common real-world ML applications include:</p>
        <ul>
          <li>Spam filtering in email clients.</li>
          <li>Credit card transaction fraud scoring.</li>
          <li>Personalized product recommendations (Amazon, YouTube).</li>
          <li>Speech-to-text transcription tools.</li>
        </ul>
      </>
    ),
  },
  {
    id: 187,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Can you name three techniques for feature selection in Machine Learning?',
    answer: (
      <>
        <p>Feature selection methods include:</p>
        <ul>
          <li><strong>Filter Methods:</strong> Statistical correlation tests (e.g. Pearson correlation).</li>
          <li><strong>Wrapper Methods:</strong> Iteratively evaluating feature subsets (e.g. Recursive Feature Elimination).</li>
          <li><strong>Embedded Methods:</strong> Built-in regularization penalties (e.g. LASSO regularization forcing redundant weights to 0).</li>
        </ul>
      </>
    ),
  },
  {
    id: 188,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What is the purpose of a recommendation system?',
    answer: (
      <>
        <p>The purpose of a <strong>Recommendation System</strong> is to predict user preferences and suggest relevant items (products, videos, articles) to maximize engagement, retention, and sales conversion.</p>
      </>
    ),
  },
  {
    id: 189,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Which methods can be used to reduce dimensionality?',
    answer: (
      <>
        <p>Common dimensionality reduction techniques include:</p>
        <ul>
          <li><strong>Principal Component Analysis (PCA):</strong> Unsupervised linear projection maximizing variance.</li>
          <li><strong>t-SNE / UMAP:</strong> Non-linear projections preserving local neighbor clusters (useful for visualization).</li>
          <li><strong>Linear Discriminant Analysis (LDA):</strong> Supervised projection maximizing class separation.</li>
        </ul>
      </>
    ),
  },
  {
    id: 190,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'Enumerate different methods for sequential supervised Learning.',
    answer: (
      <>
        <p>Sequential supervised learning deals with inputs where data ordering matters:</p>
        <ul>
          <li><strong>Hidden Markov Models (HMM):</strong> Generative probabilistic sequence models.</li>
          <li><strong>Conditional Random Fields (CRF):</strong> Discriminative graphical model for sequence labeling.</li>
          <li><strong>Recurrent Neural Networks (RNN / LSTM):</strong> Deep learning models handling sequential state dependencies.</li>
        </ul>
      </>
    ),
  },
  {
    id: 191,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the Bias-Variance tradeoff?',
    answer: (
      <>
        <p>The <strong>Bias-Variance Tradeoff</strong> describes the compromise between two sources of error in machine learning:</p>
        <ul>
          <li><strong>Bias:</strong> Error from overly simple assumptions (leads to underfitting).</li>
          <li><strong>Variance:</strong> Error from extreme sensitivity to small fluctuations in training data (leads to overfitting).</li>
          <li><em>Goal:</em> Find the sweet spot minimizing total error (Bias² + Variance + Noise).</li>
        </ul>
      </>
    ),
  },
  {
    id: 192,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What is the definition of TensorFlow?',
    answer: (
      <>
        <p><strong>TensorFlow</strong> is an open-source framework developed by Google for dataflow programming, numerical computation, and building deep neural networks.</p>
      </>
    ),
  },
  {
    id: 193,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'How can TensorFlow be installed?',
    answer: (
      <>
        <p>TensorFlow can be installed via python package manager pip:</p>
        <div className="qa-code-block">{`pip install tensorflow`}</div>
      </>
    ),
  },
  {
    id: 194,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What are the different TensorFlow objects?',
    answer: (
      <>
        <p>Core TensorFlow abstractions include:</p>
        <ul>
          <li><strong>Tensor:</strong> Multi-dimensional array representing data.</li>
          <li><strong>Variable:</strong> Mutable parameters that survive across runs (e.g. weights and biases).</li>
          <li><strong>Constant:</strong> Immutable values.</li>
        </ul>
      </>
    ),
  },
  {
    id: 195,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Explain the concept of a cost function.',
    answer: (
      <>
        <p>A <strong>cost function</strong> (or loss function) measures how poorly a machine learning model is performing by calculating the numerical difference between the model's predicted values and the actual target labels.</p>
        <ul>
          <li>The optimization algorithm works to minimize this cost value during training.</li>
        </ul>
      </>
    ),
  },
  {
    id: 196,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'List various activation neurons or functions.',
    answer: (
      <>
        <p>Activation functions introduce non-linearity into neural networks. Common functions include:</p>
        <ul>
          <li><strong>Sigmoid:</strong> Maps inputs to a range between 0 and 1.</li>
          <li><strong>Tanh:</strong> Maps inputs to a range between -1 and 1.</li>
          <li><strong>ReLU (Rectified Linear Unit):</strong> Returns <code>max(0, x)</code>, solving gradients for positive values.</li>
          <li><strong>Softmax:</strong> Converts outputs into a probability distribution summing to 1 (used in multi-class outputs).</li>
        </ul>
      </>
    ),
  },
  {
    id: 197,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What are the hyperparameters of an Artificial Neural Network (ANN)?',
    answer: (
      <>
        <p>Hyperparameters are configuration settings configured prior to training:</p>
        <ul>
          <li>Learning rate and optimizer choice.</li>
          <li>Number of hidden layers and neurons per layer.</li>
          <li>Batch size and training epochs.</li>
          <li>Activation functions and dropout rates.</li>
        </ul>
      </>
    ),
  },
  {
    id: 198,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Define dropouts.',
    answer: (
      <>
        <p><strong>Dropout</strong> is a regularization technique where a randomly selected fraction of neurons in a layer are deactivated (set to zero) during each training step.</p>
        <ul>
          <li>This prevents neurons from co-adapting too closely, helping the network generalize better.</li>
        </ul>
      </>
    ),
  },
  {
    id: 199,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is LSTM (Long Short-Term Memory)?',
    answer: (
      <>
        <p><strong>LSTM</strong> is a specialized Recurrent Neural Network (RNN) architecture designed to learn long-term dependencies in sequence data.</p>
        <ul>
          <li>It resolves vanishing gradients by incorporating gating structures that regulate the flow of cell memory.</li>
        </ul>
      </>
    ),
  },
  {
    id: 200,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Enumerate the main components of LSTM.',
    answer: (
      <>
        <p>An LSTM cell controls state memory using three gating structures:</p>
        <ul>
          <li><strong>Forget Gate:</strong> Decides how much historical memory to discard from the cell state.</li>
          <li><strong>Input Gate:</strong> Decides what new information to add to the cell state.</li>
          <li><strong>Output Gate:</strong> Decides what information from the cell state to output as the hidden state.</li>
          <li><strong>Cell State:</strong> The internal memory vector that flows down the sequence.</li>
        </ul>
      </>
    ),
  },
  {
    id: 201,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'List the variations of RNN.',
    answer: (
      <>
        <p>Common variants of Recurrent Neural Networks include:</p>
        <ul>
          <li><strong>LSTM (Long Short-Term Memory):</strong> Incorporates cell memory with three gates.</li>
          <li><strong>GRU (Gated Recurrent Unit):</strong> A simplified, faster LSTM variant using only two gates (Reset and Update gates).</li>
          <li><strong>Bidirectional RNN:</strong> Processes sequences in both forward and backward directions to leverage future context.</li>
        </ul>
      </>
    ),
  },
  {
    id: 202,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What is the definition of an autoencoder? Provide a few examples of its applications.',
    answer: (
      <>
        <p>An <strong>Autoencoder</strong> is an unsupervised neural network trained to reconstruct its input data after passing it through a compressed bottleneck layer.</p>
        <p>Applications include:</p>
        <ul>
          <li>Denoising images (removing random noise).</li>
          <li>Dimensionality reduction.</li>
          <li>Anomaly detection (aberrant structures yield high reconstruction error).</li>
        </ul>
      </>
    ),
  },
  {
    id: 203,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'What are the components of a generative adversarial network (GAN)? How is it deployed?',
    answer: (
      <>
        <p>A <strong>Generative Adversarial Network (GAN)</strong> consists of two neural networks trained in competition:</p>
        <ul>
          <li><strong>Generator:</strong> Learns to generate realistic fake data from random noise.</li>
          <li><strong>Discriminator:</strong> Learns to distinguish between actual dataset samples and generated fake samples.</li>
          <li><em>Deployment:</em> They are trained together in a minimax game framework. Once trained, the Discriminator is discarded, and the Generator is deployed to synthesize realistic assets.</li>
        </ul>
      </>
    ),
  },
  {
    id: 204,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What does \'\'TensorFlow cluster\'\' refer to?',
    answer: (
      <>
        <p>A <strong>TensorFlow cluster</strong> refers to a set of physical machines/jobs that participate in the distributed execution of a TensorFlow graph.</p>
        <ul>
          <li>It contains one or more <strong>jobs</strong>, which are partitioned into worker and parameter server tasks.</li>
        </ul>
      </>
    ),
  },
  {
    id: 205,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'List the extraction techniques utilized for dimensionality reduction.',
    answer: (
      <>
        <p>Dimensionality reduction can be done via feature extraction methods:</p>
        <ul>
          <li><strong>Principal Component Analysis (PCA):</strong> Projects data linearly onto orthogonal axes maximizing variance.</li>
          <li><strong>Kernel PCA:</strong> Uses kernel functions to perform non-linear dimensionality reduction.</li>
          <li><strong>Linear Discriminant Analysis (LDA):</strong> Maximizes subclass separation for supervised datasets.</li>
        </ul>
      </>
    ),
  },
  {
    id: 206,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What are intermediate tensors? Do sessions have a lifespan?',
    answer: (
      <>
        <p>Concepts in TensorFlow computational graphs:</p>
        <ul>
          <li><strong>Intermediate Tensors:</strong> Tensors that represent temporary output results generated during intermediate node calculations within a graph.</li>
          <li><strong>Session Lifespan:</strong> In TF 1.x, a Session manages resources and variables. It lives until explicitly closed (using <code>session.close()</code> or a context block).</li>
        </ul>
      </>
    ),
  },
  {
    id: 207,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'What is the lifespan of a variable?',
    answer: (
      <>
        <p>In TensorFlow, a <code>Variable</code> lives across multiple run calls within a session. It is initialized explicitly and holds its state until the session closes or is reset.</p>
      </>
    ),
  },
  {
    id: 208,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Can logical inference be solved in propositional logic?',
    answer: (
      <>
        <p>Yes. Logical inference in propositional logic is solvable and decible using methods like Truth Tables, Resolution, or SAT solvers.</p>
        <ul>
          <li>However, determining satisfiability is NP-Complete (Cook-Levin Theorem).</li>
        </ul>
      </>
    ),
  },
  {
    id: 209,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'What are some commonly used algorithms for hyperparameter optimization?',
    answer: (
      <>
        <p>Common techniques to search the hyperparameter space include:</p>
        <ul>
          <li><strong>Grid Search:</strong> Exhaustive search over a specified subset of parameters.</li>
          <li><strong>Random Search:</strong> Randomly samples combinations (faster, often outperforms Grid Search).</li>
          <li><strong>Bayesian Optimization:</strong> Builds a probabilistic model of the objective function to select the most promising hyperparameters.</li>
        </ul>
      </>
    ),
  },
  {
    id: 210,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Enumerate the stages of AI learning.',
    answer: (
      <>
        <p>The core training phases of an AI model include:</p>
        <ol>
          <li><strong>Training Phase:</strong> Model fits parameters on training data.</li>
          <li><strong>Validation Phase:</strong> Model hyperparameters are tuned based on validation split performance.</li>
          <li><strong>Testing Phase:</strong> Unbiased evaluation of final model on unseen test split.</li>
        </ol>
      </>
    ),
  },
  {
    id: 211,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'Describe Markov\'s Decision Processes (MDPs) in the context of Artificial Intelligence.',
    answer: (
      <>
        <p>A <strong>Markov Decision Process (MDP)</strong> is a mathematical framework used to model decision-making in environments where outcomes are partly random and partly controlled by a decision agent.</p>
        <ul>
          <li>It assumes the environment satisfies the **Markov Property** (the future state depends only on the current state and action, not historical actions).</li>
        </ul>
      </>
    ),
  },
  {
    id: 212,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'Name the elements comprising a Markov Decision Process (MDP).',
    answer: (
      <>
        <p>An MDP is defined as a tuple <code>(S, A, P, R, γ)</code>:</p>
        <ul>
          <li><strong>S:</strong> Set of all possible states.</li>
          <li><strong>A:</strong> Set of all possible actions.</li>
          <li><strong>P:</strong> Transition probability function (probability of moving to state S' given action A in state S).</li>
          <li><strong>R:</strong> Reward function indicating rewards returned.</li>
          <li><strong>γ (Gamma):</strong> Discount factor (between 0 and 1) prioritizing immediate rewards over future rewards.</li>
        </ul>
      </>
    ),
  },
  {
    id: 213,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Explain the concept of K-means clustering.',
    answer: (
      <>
        <p><strong>K-means</strong> is an unsupervised partitioning clustering algorithm:</p>
        <ol>
          <li>It places <code>K</code> random centroids in the data space.</li>
          <li>It assigns each data point to its closest centroid.</li>
          <li>It recalculates centroid coordinates as the average of its assigned points.</li>
          <li>Steps 2 & 3 repeat until centroids stabilize.</li>
        </ol>
      </>
    ),
  },
  {
    id: 214,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Provide real-world examples of K-means clustering.',
    answer: (
      <>
        <p>Typical K-means applications include:</p>
        <ul>
          <li>Customer segmentation for marketing campaigns.</li>
          <li>Document clustering by topic keywords.</li>
          <li>Image compression (reducing color space dimensions).</li>
        </ul>
      </>
    ),
  },
  {
    id: 215,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Which approach is best suited for game-playing problems?',
    answer: (
      <>
        <p><strong>Adversarial Search algorithms</strong> (like Minimax, Alpha-Beta Pruning, and Monte Carlo Tree Search) are best suited for two-player game-playing problems.</p>
      </>
    ),
  },
  {
    id: 216,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Differentiate between breadth-first search and best-first search in artificial intelligence.',
    answer: (
      <>
        <p>The differences separate uninformed and informed searches:</p>
        <ul>
          <li><strong>Breadth-First Search (BFS):</strong> Uninformed search. Evaluates nodes layer by layer. Guarantees finding the optimal path if step costs are equal.</li>
          <li><strong>Best-First Search:</strong> Informed heuristic search. It evaluates nodes using a heuristic function <code>h(n)</code>, expanding the most promising path first (not guaranteed to be optimal).</li>
        </ul>
      </>
    ),
  },
  {
    id: 217,
    category: 'Artificial intelligence',
    difficulty: 'medium',
    question: 'Define frames and scripts in the context of \'\'Artificial Intelligence.\'\'',
    answer: (
      <>
        <p>Representations of knowledge structures:</p>
        <ul>
          <li><strong>Frames:</strong> Record structures containing collection slots and values to represent physical objects or concepts.</li>
          <li><strong>Scripts:</strong> A specialized extension of frames that represents a chronological sequence of events (e.g. step-by-step scripts of dining at a restaurant).</li>
        </ul>
      </>
    ),
  },
  {
    id: 218,
    category: 'Artificial intelligence',
    difficulty: 'hard',
    question: 'In top-down inductive learning methods, how many literals are available, and what are they?',
    answer: (
      <>
        <p>In Top-Down Inductive Logic Programming (ILP), there are three types of literals available for constructing rules:</p>
        <ul>
          <li><strong>Predicates:</strong> Relations like <code>parent(X, Y)</code>.</li>
          <li><strong>Equality/Inequality:</strong> Constraints like <code>X = Y</code> or <code>X ≠ Y</code>.</li>
          <li><strong>Negative Literals:</strong> Negated relations like <code>not(female(X))</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 219,
    category: 'Artificial intelligence',
    difficulty: 'easy',
    question: 'Name different platforms for Artificial Intelligence (AI) development.',
    answer: (
      <>
        <p>Popular developer toolkits and environments include:</p>
        <ul>
          <li>PyTorch and TensorFlow/Keras (deep learning).</li>
          <li>Scikit-Learn (classical ML).</li>
          <li>Cloud Environments: Google Cloud AI Platform, AWS SageMaker, and Azure ML.</li>
        </ul>
      </>
    ),
  },
  {
    id: 220,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is AWS?',
    answer: (
      <>
        <p><strong>Amazon Web Services (AWS)</strong> is a secure cloud services platform provided by Amazon. It offers on-demand compute power, database storage, content delivery, and other infrastructure-as-a-service (IaaS) and platform-as-a-service (PaaS) capabilities to help businesses scale and grow.</p>
      </>
    ),
  },
  {
    id: 221,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are the key components of AWS?',
    answer: (
      <>
        <p>AWS is built around several core infrastructure service groups:</p>
        <ul>
          <li><strong>Compute:</strong> EC2 (Elastic Compute Cloud), Lambda (serverless), Lightsail.</li>
          <li><strong>Storage:</strong> S3 (Simple Storage Service), EBS (Elastic Block Store), EFS (Elastic File System), Glacier (archiving).</li>
          <li><strong>Databases:</strong> RDS (Relational DB), DynamoDB (NoSQL), Redshift (Data Warehousing).</li>
          <li><strong>Networking:</strong> VPC (Virtual Private Cloud), Route 53 (DNS), CloudFront (CDN).</li>
          <li><strong>Management/Security:</strong> IAM (Identity &amp; Access Management), CloudWatch, CloudTrail.</li>
        </ul>
      </>
    ),
  },
  {
    id: 222,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is geo-targeting in CloudFront?',
    answer: (
      <>
        <p><strong>Geo-targeting</strong> (or Geo Restriction) in Amazon CloudFront allows you to prevent users in specific geographic locations from accessing content that you are distributing.</p>
        <ul>
          <li>You can define an **allowlist** (permitting only specific countries to view content) or a **blocklist** (restricting specific countries).</li>
          <li>It is commonly used to comply with content licensing agreements and local regulation policies.</li>
        </ul>
      </>
    ),
  },
  {
    id: 223,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is RTO and RPO in AWS?',
    answer: (
      <>
        <p>These are key metrics used in disaster recovery planning:</p>
        <ul>
          <li><strong>RTO (Recovery Time Objective):</strong> The maximum acceptable downtime duration before service is restored after a disaster. It answers: <em>"How quickly must we recover?"</em></li>
          <li><strong>RPO (Recovery Point Objective):</strong> The maximum acceptable data loss measured in time. It answers: <em>"How much data can we afford to lose?"</em> and determines backup frequency.</li>
        </ul>
      </>
    ),
  },
  {
    id: 224,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What are the factors to consider while migrating to Amazon Web Services?',
    answer: (
      <>
        <p>Key migration factors include:</p>
        <ul>
          <li><strong>Migration Strategy (6 Rs):</strong> Rehosting, Replatforming, Refactoring, Repurchasing, Retaining, or Retiring.</li>
          <li><strong>Security &amp; Compliance:</strong> Ensuring target environments meet legal/industry audits (HIPAA, GDPR, PCI-DSS).</li>
          <li><strong>Cost Analysis:</strong> Comparing TCO (Total Cost of Ownership) using AWS calculators.</li>
          <li><strong>Data Migration plan:</strong> Bandwidth calculations and migration tool selections (AWS DMS, Snowball).</li>
        </ul>
      </>
    ),
  },
  {
    id: 225,
    category: 'AWS',
    difficulty: 'medium',
    question: 'When Would You Prefer Provisioned IOPS over Standard RDS Storage?',
    answer: (
      <>
        <p>You should choose **Provisioned IOPS** when running highly transactional, I/O-intensive database workloads (like OLTP systems) that demand consistent, low-latency, and predictable throughput.</p>
        <ul>
          <li>Standard (General Purpose SSD) storage relies on a burst-credit bucket model which can experience latency spikes once credits are depleted under sustained load.</li>
        </ul>
      </>
    ),
  },
  {
    id: 226,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Snowball?',
    answer: (
      <>
        <p><strong>AWS Snowball</strong> is a physical data transport device used to migrate petabyte-scale datasets into and out of the AWS Cloud.</p>
        <ul>
          <li>It bypasses internet upload limitations by copying data directly to a ruggedized physical storage appliance shipped securely by Amazon.</li>
        </ul>
      </>
    ),
  },
  {
    id: 227,
    category: 'AWS',
    difficulty: 'medium',
    question: 'Explain Connection Draining?',
    answer: (
      <>
        <p><strong>Connection Draining</strong> (or Deregistration Delay) ensures that an Elastic Load Balancer (ELB) stops sending new requests to deregistering or unhealthy backend instances while allowing active, in-flight connections to complete gracefully.</p>
      </>
    ),
  },
  {
    id: 228,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is a Stateful and a Stateless Firewall?',
    answer: (
      <>
        <p>The difference lies in connection tracking:</p>
        <ul>
          <li><strong>Stateful Firewall (e.g. AWS Security Groups):</strong> Remembers the state of connections. If an inbound port is opened, the outbound return traffic is automatically permitted.</li>
          <li><strong>Stateless Firewall (e.g. Network ACLs):</strong> Evaluates inbound and outbound traffic independently. You must write explicit rules for both incoming requests and outgoing responses.</li>
        </ul>
      </>
    ),
  },
  {
    id: 229,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is a Power User Access in AWS?',
    answer: (
      <>
        <p><strong>Power User Access</strong> is an AWS-managed IAM policy that grants full permissions to create and manage all AWS resources (compute, database, storage) but explicitly blocks user/resource permission management (IAM actions).</p>
      </>
    ),
  },
  {
    id: 230,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are Recovery Time Objective and Recovery Point Objective in AWS?',
    answer: (
      <>
        <p>RTO is the target duration for restoring system operations after a disruption, whereas RPO represents the maximum age of data that can be lost without major business impact. Both shape backup cycles and architecture redundancy levels.</p>
      </>
    ),
  },
  {
    id: 231,
    category: 'AWS',
    difficulty: 'easy',
    question: 'How do you monitor Amazon VPC?',
    answer: (
      <>
        <p>VPC network traffic can be monitored using:</p>
        <ul>
          <li><strong>VPC Flow Logs:</strong> To capture IP traffic going to and from network interfaces.</li>
          <li><strong>AWS CloudTrail:</strong> To audit API calls modifying the network topology.</li>
          <li><strong>CloudWatch:</strong> To track VPN connectivity states and set alarms.</li>
        </ul>
      </>
    ),
  },
  {
    id: 232,
    category: 'AWS',
    difficulty: 'easy',
    question: 'Explain what S3 is?',
    answer: (
      <>
        <p><strong>Amazon S3 (Simple Storage Service)</strong> is a highly scalable, secure, and durable object storage service.</p>
        <ul>
          <li>Unlike block storage (hard drives), S3 stores data as files (objects) within folders (buckets) along with custom metadata and a unique key, accessible via HTTP/HTTPS REST APIs.</li>
        </ul>
      </>
    ),
  },
  {
    id: 233,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are Key-Pairs in AWS?',
    answer: (
      <>
        <p>A <strong>Key-Pair</strong> consists of a public key stored on AWS and a private key file (PEM/PPK format) stored by the user. They are used for secure SSH authentication when logging into Amazon EC2 instances.</p>
      </>
    ),
  },
  {
    id: 234,
    category: 'AWS',
    difficulty: 'easy',
    question: 'How can you send a request to Amazon S3?',
    answer: (
      <>
        <p>S3 is an HTTP-based service, so you can interact with it via:</p>
        <ul>
          <li>The AWS Management Console.</li>
          <li>AWS CLI commands.</li>
          <li>AWS Software Development Kits (SDKs) in various code bases.</li>
          <li>Direct HTTP REST API requests (GET, PUT, DELETE).</li>
        </ul>
      </>
    ),
  },
  {
    id: 235,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are Spot Instances and On-Demand Instances?',
    answer: (
      <>
        <p>EC2 pricing options:</p>
        <ul>
          <li><strong>On-Demand Instances:</strong> Pay for compute by the second with no upfront contracts. Best for steady, predictable apps.</li>
          <li><strong>Spot Instances:</strong> Bid on unused EC2 capacity for discounts up to 90%. However, AWS can terminate them with a 2-minute warning when capacity is needed. Best for fault-tolerant batch runs.</li>
        </ul>
      </>
    ),
  },
  {
    id: 236,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What are the different types of load balancers in AWS and what are their uses?',
    answer: (
      <>
        <p>Elastic Load Balancing (ELB) provides four balancer architectures:</p>
        <ul>
          <li><strong>Application Load Balancer (ALB):</strong> Layer 7 balancer routing HTTP/HTTPS traffic based on request headers/paths.</li>
          <li><strong>Network Load Balancer (NLB):</strong> Layer 4 balancer for high-speed TCP/UDP traffic requiring static IP mappings.</li>
          <li><strong>Gateway Load Balancer (GWLB):</strong> Balances traffic across virtual security appliances.</li>
          <li><strong>Classic Load Balancer (CLB):</strong> Legacy, retired balancer.</li>
        </ul>
      </>
    ),
  },
  {
    id: 237,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What Is Identity and Access Management (IAM) and How Is It Used?',
    answer: (
      <>
        <p><strong>AWS IAM</strong> is a security service that manages access control. It enables authentication (who can log in via usernames, MFA) and authorization (what AWS resources a user or role has rights to access via policies).</p>
      </>
    ),
  },
  {
    id: 238,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is the difference between an IAM role and an IAM user?',
    answer: (
      <>
        <ul>
          <li><strong>IAM User:</strong> Has permanent credentials (password, access keys) and represents a specific user/application.</li>
          <li><strong>IAM Role:</strong> Has no permanent credentials. It is temporarily assumed by users, instances, or services to execute safe tasks with short-term security tokens.</li>
        </ul>
      </>
    ),
  },
  {
    id: 239,
    category: 'AWS',
    difficulty: 'medium',
    question: 'Which type of scaling would you recommend for RDS and why?',
    answer: (
      <>
        <ul>
          <li><strong>Vertical Scaling (Scale Up/Down):</strong> Modifying CPU/RAM size. Recommended for write-heavy loads, but requires a brief outage.</li>
          <li><strong>Horizontal Scaling (Scale Out):</strong> Creating **Read Replicas** or partitioning data (Sharding). Recommended for read-heavy operations to reduce main database strain.</li>
        </ul>
      </>
    ),
  },
  {
    id: 240,
    category: 'AWS',
    difficulty: 'easy',
    question: 'Why is the buffer important in Amazon Web Services (AWS)?',
    answer: (
      <>
        <p>Buffers (like Amazon SQS) are critical for decoupling systems. They queue incoming spikes in traffic, letting backend processing components consume tasks at their own pace without crashing or dropping requests.</p>
      </>
    ),
  },
  {
    id: 241,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What components does an AMI include?',
    answer: (
      <>
        <p>An Amazon Machine Image (AMI) contains:</p>
        <ul>
          <li>A virtual root volume template (operating system, application server, configurations).</li>
          <li>Permissions dictating which AWS accounts can use the image.</li>
          <li>Block device mappings specifying what storage volumes to attach upon boot.</li>
        </ul>
      </>
    ),
  },
  {
    id: 242,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is Provisioned IOPS, and how is it used?',
    answer: (
      <>
        <p>Provisioned IOPS is a premium EBS storage class (io1/io2) that guarantees a target read/write performance rate, allowing databases and high-traffic applications to avoid latency under heavy workloads.</p>
      </>
    ),
  },
  {
    id: 243,
    category: 'AWS',
    difficulty: 'medium',
    question: 'How can data be secured when transferring it in the cloud?',
    answer: (
      <>
        <p>Data in transit security practices include:</p>
        <ul>
          <li>Enforcing TLS/SSL (HTTPS) endpoints.</li>
          <li>Setting up IPsec VPN networks.</li>
          <li>Using client-side encryption before upload.</li>
          <li>Deploying AWS Direct Connect paths.</li>
        </ul>
      </>
    ),
  },
  {
    id: 244,
    category: 'AWS',
    difficulty: 'easy',
    question: 'Name the different layers of cloud computing.',
    answer: (
      <>
        <p>The three traditional service tiers are:</p>
        <ul>
          <li><strong>IaaS (Infrastructure as a Service):</strong> Virtualized hardware nodes (e.g. AWS EC2).</li>
          <li><strong>PaaS (Platform as a Service):</strong> Application runtimes without server management (e.g. Elastic Beanstalk).</li>
          <li><strong>SaaS (Software as a Service):</strong> Finished application interfaces (e.g. email or cloud storage apps).</li>
        </ul>
      </>
    ),
  },
  {
    id: 245,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are the main features of cloud computing?',
    answer: (
      <>
        <p>Primary features include: On-demand self-service billing, multi-tenant resource pooling, broad global network access, rapid elasticity (scaling), and pay-as-you-go cost structures.</p>
      </>
    ),
  },
  {
    id: 246,
    category: 'AWS',
    difficulty: 'easy',
    question: 'Name some non-regional AWS services.',
    answer: (
      <>
        <p>Global services not bound to a specific region include IAM, Route 53 (DNS), CloudFront (CDN), and Web Application Firewall (WAF) for distributions.</p>
      </>
    ),
  },
  {
    id: 247,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What are the different layers that define cloud architecture?',
    answer: (
      <>
        <p>A secure architecture divides workflows into layers: DNS/CDN Routing Layer, Application/Web Server Layer, Caching Layer, Database Layer, and Security/IAM Audit Layer.</p>
      </>
    ),
  },
  {
    id: 248,
    category: 'AWS',
    difficulty: 'medium',
    question: 'How does storage in EBS differ from storage in an instance store?',
    answer: (
      <>
        <ul>
          <li><strong>EBS (Elastic Block Store):</strong> Network-attached persistent storage. Data survives instance stops/terminations.</li>
          <li><strong>Instance Store:</strong> Locally attached temporary storage. Data is lost permanently if the instance stops, reboots onto new hardware, or terminates.</li>
        </ul>
      </>
    ),
  },
  {
    id: 249,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are the different Storage Classes available in Amazon S3?',
    answer: (
      <>
        <p>S3 offers classes for varying access frequencies: S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA, S3 One Zone-IA, S3 Glacier Instant Retrieval, S3 Glacier Flexible Retrieval, and S3 Glacier Deep Archive.</p>
      </>
    ),
  },
  {
    id: 250,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is the purpose of Elastic Transcoder?',
    answer: (
      <>
        <p><strong>AWS Elastic Transcoder</strong> is a cloud media conversion service. It reformats media files (like raw videos) into resolutions and formats compatible with mobile devices, web players, and smart TVs.</p>
      </>
    ),
  },
  {
    id: 251,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is the definition of VPC?',
    answer: (
      <>
        <p>An <strong>Amazon VPC (Virtual Private Cloud)</strong> is a logically isolated virtual network allocated to your AWS account. It gives you full control over subnets, IP ranges, route tables, and internet gateways.</p>
      </>
    ),
  },
  {
    id: 252,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is the concept of AWS Lambda?',
    answer: (
      <>
        <p><strong>AWS Lambda</strong> is a serverless compute service that executes code in response to events (e.g. S3 file upload, API request) without managing VM OS servers. Billing is calculated only for memory and active processing milliseconds.</p>
      </>
    ),
  },
  {
    id: 253,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is SQS?',
    answer: (
      <>
        <p><strong>Amazon SQS (Simple Queue Service)</strong> is a fully managed message queuing system that allows microservices to communicate asynchronously without losing messages or blocking active application threads.</p>
      </>
    ),
  },
  {
    id: 254,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are the benefits of Auto Scaling?',
    answer: (
      <>
        <p>Auto Scaling ensures high availability, automated fault recovery (replacing failed instances), and optimization of costs by scaling down during inactive hours.</p>
      </>
    ),
  },
  {
    id: 255,
    category: 'AWS',
    difficulty: 'easy',
    question: 'How does Amazon EC2 differ from Amazon S3?',
    answer: (
      <>
        <ul>
          <li><strong>EC2:</strong> Virtual compute instances providing CPU/RAM to run programs.</li>
          <li><strong>S3:</strong> Object storage designed for static file storage (images, logs, documents).</li>
        </ul>
      </>
    ),
  },
  {
    id: 256,
    category: 'AWS',
    difficulty: 'easy',
    question: 'Can Amazon S3 be used with EC2 instances?',
    answer: (
      <>
        <p>Yes. EC2 instances can use the AWS CLI/SDK to read configurations, code bundles, or raw data from S3, and upload output results, backups, and execution logs back to S3.</p>
      </>
    ),
  },
  {
    id: 257,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Geo Restriction in CloudFront?',
    answer: (
      <>
        <p>Geo Restriction (or Geo-blocking) allows you to block or allow access to your website's content for users in specific countries based on their IP addresses.</p>
      </>
    ),
  },
  {
    id: 258,
    category: 'AWS',
    difficulty: 'medium',
    question: 'Is it possible to connect a corporate data center to the Amazon Cloud?',
    answer: (
      <>
        <p>Yes, corporate networks can connect securely to AWS via AWS VPN tunnels, AWS Direct Connect (a physical fiber line), or AWS Transit Gateway routers.</p>
      </>
    ),
  },
  {
    id: 259,
    category: 'AWS',
    difficulty: 'medium',
    question: 'Can the private IP addresses of an EC2 instance be changed while it is running or stopped in a VPC?',
    answer: (
      <>
        <p>The primary private IP address assigned at instance creation cannot be modified. However, secondary private IP addresses can be freely attached or detached at any time.</p>
      </>
    ),
  },
  {
    id: 260,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What are the distinguishing characteristics of cloud architecture compared to traditional architecture?',
    answer: (
      <>
        <p>Cloud systems feature dynamic auto-scaling, lower capital expense upfront (pay-as-you-go), automated management, and global deployment times of under a minute.</p>
      </>
    ),
  },
  {
    id: 261,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is a Data Lake?',
    answer: (
      <>
        <p>A <strong>Data Lake</strong> is a centralized repository that stores vast amounts of raw, unstructured, semi-structured, and structured data at scale, commonly using Amazon S3 as the core storage layer.</p>
      </>
    ),
  },
  {
    id: 262,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Serverless Computing?',
    answer: (
      <>
        <p>A cloud computing model where the cloud vendor automatically runs, hosts, and scales servers. Developers only upload code and pay for resources consumed during active execution.</p>
      </>
    ),
  },
  {
    id: 263,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon EC2?',
    answer: (
      <>
        <p><strong>Amazon Elastic Compute Cloud (EC2)</strong> is a web service providing secure, resizable compute capacity (virtual machines) in the AWS Cloud.</p>
      </>
    ),
  },
  {
    id: 264,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon EC2 Auto Scaling?',
    answer: (
      <>
        <p>A service that automatically adjusts the number of EC2 instances in your application pool to maintain steady, predictable performance at the lowest possible cost.</p>
      </>
    ),
  },
  {
    id: 265,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is fleet management in Amazon EC2 Auto Scaling?',
    answer: (
      <>
        <p>Fleet management automatically monitors the health of running EC2 instances, terminating unhealthy instances and replacing them to keep the group at the desired capacity.</p>
      </>
    ),
  },
  {
    id: 266,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon CloudFront?',
    answer: (
      <>
        <p>A fast <strong>Content Delivery Network (CDN)</strong> that globally caches static/dynamic content (HTML, JS, images, videos) in regional edge locations to reduce load times for end users.</p>
      </>
    ),
  },
  {
    id: 267,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are the two types of queues in SQS?',
    answer: (
      <>
        <ul>
          <li><strong>Standard Queue:</strong> Unlimited throughput, at-least-once message delivery, best-effort message ordering.</li>
          <li><strong>FIFO Queue:</strong> Limited throughput (3,000 requests/sec with batching), exactly-once processing, strict first-in-first-out ordering.</li>
        </ul>
      </>
    ),
  },
  {
    id: 268,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon DynamoDB?',
    answer: (
      <>
        <p>A fully managed, serverless <strong>NoSQL database</strong> designed to deliver single-digit millisecond response times at any scale, supporting key-value and document structures.</p>
      </>
    ),
  },
  {
    id: 269,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon S3 Glacier?',
    answer: (
      <>
        <p>A secure, durable S3 storage class designed for low-cost data archiving and backups, with retrieval times ranging from minutes to hours.</p>
      </>
    ),
  },
  {
    id: 270,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is Amazon Redshift?',
    answer: (
      <>
        <p><strong>Amazon Redshift</strong> is a fast, fully managed, petabyte-scale data warehouse service.</p>
        <ul>
          <li>It uses columnar storage and mass parallel processing (MPP) to execute complex analytic queries across massive datasets efficiently.</li>
          <li>It integrates directly with BI tools to produce dashboards and business reports.</li>
        </ul>
      </>
    ),
  },
  {
    id: 271,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are Elastic Load Balancing (ELB) and its types?',
    answer: (
      <>
        <p><strong>Elastic Load Balancing (ELB)</strong> automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, or IP addresses) to ensure high availability.</p>
        <p>The four types of load balancers are:</p>
        <ul>
          <li><strong>Application Load Balancer (ALB):</strong> Layer 7 (HTTP/HTTPS) routing.</li>
          <li><strong>Network Load Balancer (NLB):</strong> Layer 4 (TCP/UDP) routing for high-performance networks.</li>
          <li><strong>Gateway Load Balancer (GWLB):</strong> Layer 3 gateway for virtual security appliances.</li>
          <li><strong>Classic Load Balancer (CLB):</strong> Retired legacy balancer.</li>
        </ul>
      </>
    ),
  },
  {
    id: 272,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What are sticky sessions in ELB?',
    answer: (
      <>
        <p><strong>Sticky Sessions</strong> (session affinity) configure a load balancer to route all requests from a specific user session to the same backend EC2 server instance.</p>
        <ul>
          <li>This is achieved using cookies. It is useful for stateful applications where session state data is stored locally on the server filesystem instead of a central cache (like Redis).</li>
        </ul>
      </>
    ),
  },
  {
    id: 273,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is AWS Elastic Beanstalk?',
    answer: (
      <>
        <p><strong>AWS Elastic Beanstalk</strong> is an easy-to-use Platform-as-a-Service (PaaS) used for deploying and scaling web applications and services.</p>
        <ul>
          <li>Developers upload application code (written in Java, .NET, PHP, Node.js, Python, Ruby, Go, or Docker), and Beanstalk automatically handles provisioning, load balancing, auto-scaling, and health monitoring.</li>
        </ul>
      </>
    ),
  },
  {
    id: 274,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are the benefits of AWS Elastic Beanstalk?',
    answer: (
      <>
        <p>Key advantages include:</p>
        <ul>
          <li>Fast and simple deployment.</li>
          <li>Automated infrastructure provisioning and scaling (auto-scaling out and in).</li>
          <li>Maintains complete underlying resource control (you can still log into the EC2 instances if needed).</li>
        </ul>
      </>
    ),
  },
  {
    id: 275,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is AWS CloudTrail?',
    answer: (
      <>
        <p><strong>AWS CloudTrail</strong> is a service that records and audits all API calls made in your AWS account.</p>
        <ul>
          <li>It provides log history of actions taken by users, roles, or AWS services via the Console, CLI, or SDKs, enabling governance, compliance tracking, and risk auditing.</li>
        </ul>
      </>
    ),
  },
  {
    id: 276,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon ElastiCache?',
    answer: (
      <>
        <p><strong>Amazon ElastiCache</strong> is a fully managed in-memory data store and caching service.</p>
        <ul>
          <li>It supports <strong>Redis</strong> and <strong>Memcached</strong> engines to accelerate application performance by caching frequently queried database records in memory (RAM).</li>
        </ul>
      </>
    ),
  },
  {
    id: 277,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon Lightsail?',
    answer: (
      <>
        <p><strong>Amazon Lightsail</strong> is an easy-to-use virtual private server (VPS) product group tailored for small projects, developers, and simple websites.</p>
        <ul>
          <li>It packages compute instances, SSD storage, transfer allowances, DNS, and static IPs into low-cost monthly plans.</li>
        </ul>
      </>
    ),
  },
  {
    id: 278,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon ECS?',
    answer: (
      <>
        <p><strong>Amazon ECS (Elastic Container Service)</strong> is a highly scalable, high-performance container orchestration service designed to run and scale Docker containers on AWS.</p>
        <ul>
          <li>It supports both EC2 deployment and serverless Fargate compute.</li>
        </ul>
      </>
    ),
  },
  {
    id: 279,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon EFS?',
    answer: (
      <>
        <p><strong>Amazon EFS (Elastic File System)</strong> provides serverless, network-attached shared file systems (NFSv4) for Linux-based workloads.</p>
        <ul>
          <li>Unlike EBS volumes (which attach to one EC2 instance), EFS can be mounted concurrently by thousands of EC2 instances across different Availability Zones.</li>
        </ul>
      </>
    ),
  },
  {
    id: 280,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is the AWS Snow Family?',
    answer: (
      <>
        <p>The <strong>AWS Snow Family</strong> is a collection of physical storage and edge-compute hardware devices designed to migrate massive datasets (petabyte-scale) into and out of AWS without network bottlenecks.</p>
      </>
    ),
  },
  {
    id: 281,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is AWS Elastic Disaster Recovery?',
    answer: (
      <>
        <p><strong>AWS Elastic Disaster Recovery (AWS DRS)</strong> is a disaster recovery service that replicates physical, virtual, or cloud servers into a low-cost staging area in AWS, enabling rapid failover boot times during outages.</p>
      </>
    ),
  },
  {
    id: 282,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is Amazon Aurora, and what are its features?',
    answer: (
      <>
        <p><strong>Amazon Aurora</strong> is a relational database engine built for the cloud, fully compatible with MySQL and PostgreSQL.</p>
        <p>Key features include:</p>
        <ul>
          <li>Up to 5x faster than standard MySQL, and 3x faster than standard PostgreSQL.</li>
          <li>Distributed, self-healing storage replicated across 3 Availability Zones.</li>
          <li>Auto-scaling storage capacity up to 128 TB.</li>
        </ul>
      </>
    ),
  },
  {
    id: 283,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon RDS?',
    answer: (
      <>
        <p><strong>Amazon RDS (Relational Database Service)</strong> is a managed database service that simplifies provisioning, patching, backing up, and scaling of relational databases (MySQL, PostgreSQL, Oracle, MariaDB, SQL Server).</p>
      </>
    ),
  },
  {
    id: 284,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is Amazon Neptune?',
    answer: (
      <>
        <p><strong>Amazon Neptune</strong> is a fast, reliable, fully managed graph database engine optimized for storing and navigating highly connected datasets (such as social networks, recommendation graphs, and fraud patterns).</p>
      </>
    ),
  },
  {
    id: 285,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon Route 53?',
    answer: (
      <>
        <p><strong>Amazon Route 53</strong> is a highly available and scalable cloud Domain Name System (DNS) web service designed to route end-user internet requests to AWS infrastructure or external endpoints.</p>
      </>
    ),
  },
  {
    id: 286,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is AWS Shield?',
    answer: (
      <>
        <p><strong>AWS Shield</strong> is a managed Distributed Denial of Service (DDoS) protection service that safeguards web applications running on AWS against network and transport layer attacks.</p>
      </>
    ),
  },
  {
    id: 287,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is Amazon Network Firewall?',
    answer: (
      <>
        <p><strong>Amazon Network Firewall</strong> is a managed stateful firewall service that inspects all incoming and outgoing network traffic at the boundaries of your VPC, enabling custom rule controls.</p>
      </>
    ),
  },
  {
    id: 288,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon EBS?',
    answer: (
      <>
        <p><strong>Amazon EBS (Elastic Block Store)</strong> provides network-attached block-level storage volumes for use with EC2 instances, supporting database and filesystem requirements.</p>
      </>
    ),
  },
  {
    id: 289,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon SageMaker?',
    answer: (
      <>
        <p><strong>Amazon SageMaker</strong> is a fully managed cloud service that helps developers and data scientists build, train, tune, and deploy machine learning models at scale.</p>
      </>
    ),
  },
  {
    id: 290,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is Amazon EMR?',
    answer: (
      <>
        <p><strong>Amazon EMR (Elastic MapReduce)</strong> is a managed cluster platform that simplifies running big data frameworks (such as Apache Spark, Hadoop, Hive, and Presto) to process vast datasets.</p>
      </>
    ),
  },
  {
    id: 291,
    category: 'AWS',
    difficulty: 'medium',
    question: 'How does EMR separate compute and storage?',
    answer: (
      <>
        <p>In Amazon EMR, data can be stored persistently in **Amazon S3** (using EMRFS) or **Amazon DynamoDB**, while compute clusters are spun up or down dynamically to process the data, lowering costs.</p>
      </>
    ),
  },
  {
    id: 292,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is Amazon Kinesis?',
    answer: (
      <>
        <p><strong>Amazon Kinesis</strong> is a platform designed to collect, process, and analyze real-time streaming data (such as application logs, IoT telemetry streams, and website clickstreams) at scale.</p>
      </>
    ),
  },
  {
    id: 293,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are the members of the AWS Snow family?',
    answer: (
      <>
        <p>The Snow family includes: <strong>AWS Snowcone</strong> (portable, 8TB), <strong>AWS Snowball Edge</strong> (large capacity, up to 80TB), and <strong>AWS Snowmobile</strong> (shipping container truck, up to 100PB).</p>
      </>
    ),
  },
  {
    id: 294,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What types of attacks can AWS Shield prevent?',
    answer: (
      <>
        <p>AWS Shield Standard blocks common Layer 3 and 4 DDoS attacks (like SYN floods, UDP reflections). AWS Shield Advanced blocks Layer 7 application attacks (when integrated with AWS WAF).</p>
      </>
    ),
  },
  {
    id: 295,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is meant by AMI?',
    answer: (
      <>
        <p>An <strong>AMI (Amazon Machine Image)</strong> is a pre-configured template containing OS systems, app servers, and configurations required to launch new virtual instances.</p>
      </>
    ),
  },
  {
    id: 296,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What are the security practices followed in Amazon EC2?',
    answer: (
      <>
        <p>Standard security policies include: Restricting ports with Security Groups, assigning IAM roles instead of long-term credentials, enforcing EBS encryption, and updating patch sets.</p>
      </>
    ),
  },
  {
    id: 297,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is the root device volume in Amazon EC2?',
    answer: (
      <>
        <p>The root device volume contains the image used to boot the EC2 instance (usually an EBS volume or an ephemeral instance store volume).</p>
      </>
    ),
  },
  {
    id: 298,
    category: 'AWS',
    difficulty: 'easy',
    question: 'Explain regions and availability zones in Amazon EC2.',
    answer: (
      <>
        <ul>
          <li><strong>Region:</strong> A physical, separate geographic location (e.g. US East).</li>
          <li><strong>Availability Zone (AZ):</strong> An isolated data center cluster within a region connected by ultra-low-latency redundant fiber connections.</li>
        </ul>
      </>
    ),
  },
  {
    id: 299,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What are the different types of Amazon EC2 instances and their key features?',
    answer: (
      <>
        <p>Instances are grouped by workload optimizations:</p>
        <ul>
          <li><strong>General Purpose:</strong> Balanced CPU/RAM (T4g, M6g).</li>
          <li><strong>Compute Optimized:</strong> High-performance CPUs (C6g).</li>
          <li><strong>Memory Optimized:</strong> Large RAM workloads (R6g).</li>
          <li><strong>Storage Optimized:</strong> Fast SSD file systems (I3en).</li>
        </ul>
      </>
    ),
  },
  {
    id: 300,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What are the advantages of EC2 Auto Scaling?',
    answer: (
      <>
        <p>It provides dynamic, predictive, and scheduled scaling policies to ensure resource availability matches traffic demand, replacing failed instances automatically.</p>
      </>
    ),
  },
  {
    id: 301,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What are Throughput Optimized HDD and Cold HDD volume types?',
    answer: (
      <>
        <ul>
          <li><strong>Throughput Optimized HDD (st1):</strong> Low-cost magnetic storage optimized for frequently accessed, big-data workloads (MapReduce, logs).</li>
          <li><strong>Cold HDD (sc1):</strong> Lowest-cost magnetic storage optimized for infrequently accessed archival datasets.</li>
        </ul>
      </>
    ),
  },
  {
    id: 302,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are the uses of load balancers in Amazon Lightsail?',
    answer: (
      <>
        <p>In Lightsail, load balancers distribute requests across multiple instances, handle SSL certificate encryption termination, and monitor instance health status.</p>
      </>
    ),
  },
  {
    id: 303,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What is an Amazon Lightsail instance plan?',
    answer: (
      <>
        <p>A flat-rate pricing plan that bundles compute power, memory (RAM), SSD storage, and data transfer limits for simplified cost tracking.</p>
      </>
    ),
  },
  {
    id: 304,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are DNS records in Amazon Lightsail?',
    answer: (
      <>
        <p>Lightsail's integrated DNS zones allow you to map domains to instances, static IPs, or load balancers using A, CNAME, MX, and TXT records.</p>
      </>
    ),
  },
  {
    id: 305,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is AWS Copilot CLI?',
    answer: (
      <>
        <p><strong>AWS Copilot</strong> is a command-line interface tool designed to simplify launching, building, and operating production-ready containerized apps on ECS (Fargate).</p>
      </>
    ),
  },
  {
    id: 306,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What are the distinctions between Amazon Beanstalk and Amazon ECS?',
    answer: (
      <>
        <ul>
          <li><strong>Elastic Beanstalk:</strong> A PaaS platform that completely abstracts underlying systems—you just upload code.</li>
          <li><strong>ECS:</strong> A container orchestrator that gives raw control over Docker tasks, task definition settings, and host ports.</li>
        </ul>
      </>
    ),
  },
  {
    id: 307,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is an AWS Lambda function?',
    answer: (
      <>
        <p>An **AWS Lambda function** is the custom code bundle (and configured trigger triggers) that runs serverlessly in isolated runtime containers on AWS compute.</p>
      </>
    ),
  },
  {
    id: 308,
    category: 'AWS',
    difficulty: 'medium',
    question: 'How do AWS Lambda and Amazon ECS differ?',
    answer: (
      <>
        <ul>
          <li><strong>Lambda:</strong> Event-driven execution billed per millisecond, capped at a 15-minute runtime limit.</li>
          <li><strong>ECS:</strong> Containerized environments running continuously without session limits.</li>
        </ul>
      </>
    ),
  },
  {
    id: 309,
    category: 'AWS',
    difficulty: 'hard',
    question: 'How does AWS Lambda ensure integrated security control?',
    answer: (
      <>
        <p>Security is enforced via <strong>IAM Execution Roles</strong> (controlling what AWS services the function can access), <strong>Resource Policies</strong> (dictating which events can trigger it), and <strong>VPC configurations</strong>.</p>
      </>
    ),
  },
  {
    id: 310,
    category: 'AWS',
    difficulty: 'medium',
    question: 'Which platform branches support graviton instances on AWS Elastic Beanstalk?',
    answer: (
      <>
        <p>Modern Elastic Beanstalk platforms running on Amazon Linux 2 (or AL2023) for Node.js, Python, Java, Docker, and Go support Graviton 64-bit ARM architectures.</p>
      </>
    ),
  },
  {
    id: 311,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is EFS Intelligent-Tiering?',
    answer: (
      <>
        <p>EFS Intelligent-Tiering automatically optimizes network file costs by shifting files that haven't been accessed for a set period into a lower-cost Infrequent Access (IA) storage tier.</p>
      </>
    ),
  },
  {
    id: 312,
    category: 'AWS',
    difficulty: 'easy',
    question: 'What are Amazon EBS snapshots?',
    answer: (
      <>
        <p>Point-in-time, incremental backups of EBS volumes stored durably on S3. Only block updates made after the last snapshot are stored, saving space.</p>
      </>
    ),
  },
  {
    id: 313,
    category: 'AWS',
    difficulty: 'medium',
    question: 'How do backup and disaster recovery differ?',
    answer: (
      <>
        <ul>
          <li><strong>Backup:</strong> Periodically copying data to guard against deletion or database corruption.</li>
          <li><strong>Disaster Recovery (DR):</strong> The system infrastructure plan to restore full client processing availability during active region/hardware outages.</li>
        </ul>
      </>
    ),
  },
  {
    id: 314,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is the purpose of DynamoDB Accelerator?',
    answer: (
      <>
        <p><strong>DynamoDB Accelerator (DAX)</strong> is an in-memory, write-through cache cluster for DynamoDB, accelerating database reads to microsecond latencies.</p>
      </>
    ),
  },
  {
    id: 315,
    category: 'AWS',
    difficulty: 'medium',
    question: 'How does Amazon ElastiCache function?',
    answer: (
      <>
        <p>ElastiCache stores query results in cache RAM (using Redis/Memcached), allowing subsequent queries to fetch data instantly without hitting the database disk layer.</p>
      </>
    ),
  },
  {
    id: 316,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What is the relationship between Amazon Neptune and RDS permissions?',
    answer: (
      <>
        <p>Neptune uses database subnet groups and security groups that align with RDS architectures, but executes graph data traversals on its own specialized engine.</p>
      </>
    ),
  },
  {
    id: 317,
    category: 'AWS',
    difficulty: 'easy',
    question: 'How does Amazon CloudFront accelerate content delivery?',
    answer: (
      <>
        <p>CloudFront routes request paths to nearest Global Edge locations, serving cached static assets locally and using optimized AWS backbone fiber routes for origin fetches.</p>
      </>
    ),
  },
  {
    id: 318,
    category: 'AWS',
    difficulty: 'medium',
    question: 'What does the latency-based routing feature of Amazon Route 53 do?',
    answer: (
      <>
        <p>Latency Routing maps user queries to the specific AWS region data center that presents the lowest round-trip network response latency for that user.</p>
      </>
    ),
  },
  {
    id: 319,
    category: 'AWS',
    difficulty: 'hard',
    question: 'How does AWS Network Firewall protect a VPC?',
    answer: (
      <>
        <p>By executing stateful traffic inspection, IPS (intrusion prevention) signatures, and URL blocklists directly at the VPC gateways to restrict unauthorized ingress/egress routes.</p>
      </>
    ),
  },
  {
    id: 320,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is Business Intelligence (BI)?',
    answer: (
      <>
        <p><strong>Business Intelligence (BI)</strong> refers to the procedural and technical infrastructure that collects, stores, and analyzes the data produced by a company's activities.</p>
        <ul>
          <li>It encompasses data mining, process analysis, performance benchmarking, and descriptive analytics.</li>
          <li>The ultimate goal of BI is to present actionable information to help executives, managers, and operational workers make more informed business decisions.</li>
        </ul>
      </>
    ),
  },
  {
    id: 321,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are the key components of a BI system?',
    answer: (
      <>
        <p>A standard BI system architecture includes the following components:</p>
        <ul>
          <li><strong>Data Sources:</strong> Operational databases, CRM/ERP systems, APIs, flat files.</li>
          <li><strong>ETL (Extract, Transform, Load) Pipeline:</strong> Cleanses and prepares data.</li>
          <li><strong>Data Warehouse:</strong> Centralized repository storing historical, structured data.</li>
          <li><strong>OLAP Engine:</strong> Facilitates multi-dimensional data analysis.</li>
          <li><strong>BI Reporting/Visualization Tools:</strong> Dashboards, interactive reports (e.g. Power BI, Tableau).</li>
        </ul>
      </>
    ),
  },
  {
    id: 322,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'Explain ETL and its significance in BI.',
    answer: (
      <>
        <p><strong>ETL</strong> stands for <strong>Extract, Transform, Load</strong>:</p>
        <ul>
          <li><strong>Extract:</strong> Fetching raw data from various source systems.</li>
          <li><strong>Transform:</strong> Cleansing, filtering, normalizing, joining, and aggregating the data to fit target schemas.</li>
          <li><strong>Load:</strong> Writing the finalized data into the target data warehouse.</li>
        </ul>
        <p><strong>Significance:</strong> ETL converts disparate, messy operational data into a clean, uniform, and consolidated source of truth suitable for high-performance reporting.</p>
      </>
    ),
  },
  {
    id: 323,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is a data warehouse, and how is it different from a database?',
    answer: (
      <>
        <ul>
          <li><strong>Database (OLTP):</strong> Optimized for fast, transactional write operations (inserting/updating individual sales, orders, clicks). Stored in highly normalized schemas.</li>
          <li><strong>Data Warehouse (OLAP):</strong> Optimized for large-scale, analytical read queries across historical datasets. Stored in denormalized star/snowflake schemas to reduce complex joins.</li>
        </ul>
      </>
    ),
  },
  {
    id: 324,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How do OLAP (Online Analytical Processing) and OLTP (Online Transactional Processing) differ?',
    answer: (
      <>
        <ul>
          <li><strong>OLTP:</strong> Handles day-to-day operational transactions. Characterized by simple, fast queries, high concurrency, and normalized tables (e.g., ATM withdrawals).</li>
          <li><strong>OLAP:</strong> Handles complex historical data analysis. Characterized by aggregated, multi-dimensional queries, lower concurrency, and denormalized tables (e.g., Yearly sales trends analysis).</li>
        </ul>
      </>
    ),
  },
  {
    id: 325,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Mention some popular BI tools you have experience with.',
    answer: (
      <>
        <p>Common industry-standard BI suites include:</p>
        <ul>
          <li><strong>Power BI:</strong> Microsoft's desktop and cloud reporting tool, popular for its Excel integration and cost-efficiency.</li>
          <li><strong>Tableau:</strong> Popular for rich, highly custom visual analytics and interactive dashboard rendering.</li>
          <li><strong>QlikView / Qlik Sense:</strong> Known for associative data indexing engines.</li>
          <li><strong>Looker:</strong> Modern SQL-modeling layer integrated with Google Cloud.</li>
        </ul>
      </>
    ),
  },
  {
    id: 326,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How do you handle missing or incomplete data in a BI project?',
    answer: (
      <>
        <p>Handling strategies during the ETL/transformation stage:</p>
        <ul>
          <li><strong>Imputation:</strong> Filling missing numerical columns with mean, median, or default fallback values.</li>
          <li><strong>Filtering:</strong> Dropping rows with vital missing keys if they represent incomplete transactions.</li>
          <li><strong>Flagging:</strong> Mapping null dimensions to a default <code>"Unknown"</code> or <code>"N/A"</code> member so reporting groups are not broken.</li>
        </ul>
      </>
    ),
  },
  {
    id: 327,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Explain the concept of data visualization in BI.',
    answer: (
      <>
        <p><strong>Data Visualization</strong> is the graphical representation of information and data.</p>
        <ul>
          <li>By using visual elements like charts, graphs, and maps, visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.</li>
        </ul>
      </>
    ),
  },
  {
    id: 328,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is the importance of data quality in BI?',
    answer: (
      <>
        <p>Data quality is paramount because of the <strong>"Garbage In, Garbage Out"</strong> rule.</p>
        <ul>
          <li>If managers base strategic decisions on inaccurate, stale, or duplicate data, it can lead to financial losses, poor marketing targeting, and operational inefficiencies.</li>
        </ul>
      </>
    ),
  },
  {
    id: 329,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How do you optimize BI performance in large datasets?',
    answer: (
      <>
        <p>Common report performance tuning techniques:</p>
        <ul>
          <li>Pre-aggregating values at ETL load stage.</li>
          <li>Creating star schemas instead of flat tables.</li>
          <li>Implementing index optimization on database keys.</li>
          <li>Using incremental loading/refreshing.</li>
          <li>Hiding unused columns to reduce file/memory overhead.</li>
        </ul>
      </>
    ),
  },
  {
    id: 330,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What are the common challenges faced in BI implementations?',
    answer: (
      <>
        <p>Frequent blockers include:</p>
        <ul>
          <li>User adoption resistance.</li>
          <li>Poor data quality and siloed data systems.</li>
          <li>Vague KPI metrics.</li>
          <li>High software licensing and integration costs.</li>
        </ul>
      </>
    ),
  },
  {
    id: 331,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are KPIs (Key Performance Indicators) in BI?',
    answer: (
      <>
        <p><strong>KPIs</strong> are quantifiable measurements used to evaluate the success of an organization or activity in meeting performance objectives.</p>
        <ul>
          <li>Examples: Monthly recurring revenue (MRR), Customer acquisition cost (CAC), Net promoter score (NPS).</li>
        </ul>
      </>
    ),
  },
  {
    id: 332,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How can BI be useful for predictive analytics?',
    answer: (
      <>
        <p>Modern BI tools incorporate machine learning nodes to predict future trends based on historical data. By utilizing regressions, time-series forecasting, and classification models, BI tools can forecast inventory requirements, customer churn, and seasonal sales spikes.</p>
      </>
    ),
  },
  {
    id: 333,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is the significance of data governance in BI?',
    answer: (
      <>
        <p><strong>Data Governance</strong> defines standard policies and ownership roles for managing data usability, security, and integrity across an organization.</p>
        <ul>
          <li>It ensures that KPIs are calculated consistently across all departments (e.g. Finance and Sales agreeing on definition of "active customer").</li>
        </ul>
      </>
    ),
  },
  {
    id: 334,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How do you handle large volumes of data in BI?',
    answer: (
      <>
        <p>By leveraging distributed data storage frameworks (like Redshift, Snowflake), partitioning large fact tables, using DirectQuery mode (letting the database engine execute the queries instead of importing raw rows into the BI tool memory), and building aggregated tables for high-level summaries.</p>
      </>
    ),
  },
  {
    id: 335,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are the differences between self-service BI and traditional BI?',
    answer: (
      <>
        <ul>
          <li><strong>Traditional BI:</strong> Managed entirely by the IT department. Business users must submit requests for new reports, leading to bottlenecks.</li>
          <li><strong>Self-Service BI:</strong> Direct access to models via user-friendly tools. Business users can query, explore data, and build their own custom dashboards independently.</li>
        </ul>
      </>
    ),
  },
  {
    id: 336,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the role of AI and machine learning in Business Intelligence?',
    answer: (
      <>
        <p>AI/ML automates data discovery and insights. It powers features like Natural Language Q&amp;A (typing "What was our top selling product in 2025?"), automated anomaly alerts, key driver analysis, and automated translations.</p>
      </>
    ),
  },
  {
    id: 337,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'How can BI benefit small businesses?',
    answer: (
      <>
        <p>Allows small businesses to optimize stock/inventory levels, trace client purchase preferences, identify unprofitable service lines, and replace slow manual spreadsheets with automated dashboard updates.</p>
      </>
    ),
  },
  {
    id: 338,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'How do you stay up-to-date with BI trends and technologies?',
    answer: (
      <>
        <p>Through Microsoft and Tableau product release blogs, tracking community channels (e.g., Guy in a Cube, SQLBI), participating in local user groups, and completing certifications.</p>
      </>
    ),
  },
  {
    id: 339,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How can data security be ensured in BI systems?',
    answer: (
      <>
        <p>Security is enforced via:</p>
        <ul>
          <li><strong>Row-Level Security (RLS):</strong> Hiding rows based on user email (e.g. Sales reps only seeing their own region's data).</li>
          <li>Role-Based Access Control (RBAC).</li>
          <li>Data encryption in-transit (SSL) and at-rest.</li>
          <li>Regular permission auditing.</li>
        </ul>
      </>
    ),
  },
  {
    id: 340,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How would you ensure data quality in a Business Intelligence project?',
    answer: (
      <>
        <p>By defining strict schema constraints, creating automated ETL tests checking for nulls or negative amounts, deduplicating keys at ingress, and establishing a regular data auditing routine with Data Stewards.</p>
      </>
    ),
  },
  {
    id: 341,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'How do you visualize data in Business Intelligence?',
    answer: (
      <>
        <p>By mapping KPIs to the most informative visual models:</p>
        <ul>
          <li><strong>Time-series:</strong> Line charts.</li>
          <li><strong>Category comparison:</strong> Bar or column charts.</li>
          <li><strong>Distribution:</strong> Histograms or scatter plots.</li>
          <li><strong>Proportions:</strong> Treemaps or pie charts.</li>
        </ul>
      </>
    ),
  },
  {
    id: 342,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is a dimension in BI?',
    answer: (
      <>
        <p>A <strong>Dimension</strong> is a table containing descriptive attributes (context) surrounding business events. E.g., Date, Customer Name, Product Category, Store Location. They are used to filter, group, and slice numerical values.</p>
      </>
    ),
  },
  {
    id: 343,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Define a fact table.',
    answer: (
      <>
        <p>A <strong>Fact Table</strong> is the central table in a star/snowflake schema containing numerical metrics (measures) and foreign keys pointing to dimension tables. E.g., Sales Quantity, Revenue, Cost, Discount.</p>
      </>
    ),
  },
  {
    id: 344,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is a data cube?',
    answer: (
      <>
        <p>A <strong>Data Cube</strong> (OLAP cube) is a multi-dimensional array of data used for fast execution of query operations. It pre-calculates and caches values across various dimension paths, facilitating instant slicing and dicing.</p>
      </>
    ),
  },
  {
    id: 345,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'How can BI benefit a business?',
    answer: (
      <>
        <p>BI enables data-driven decisions, uncovers hidden operational waste, clarifies client retention paths, automates weekly PDF status email deliveries, and unifies company performance metrics.</p>
      </>
    ),
  },
  {
    id: 346,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are data marts?',
    answer: (
      <>
        <p>A <strong>Data Mart</strong> is a subset of a data warehouse focused on a single functional department (e.g. Sales Data Mart, HR Data Mart) designed to simplify reporting access for that specific user group.</p>
      </>
    ),
  },
  {
    id: 347,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is data mining in Business Intelligence?',
    answer: (
      <>
        <p>Data Mining is the process of exploring large datasets to discover hidden anomalies, correlations, and predictive patterns using statistics and machine learning.</p>
      </>
    ),
  },
  {
    id: 348,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'How does data visualization aid BI?',
    answer: (
      <>
        <p>It shortens the time-to-insight. Instead of scanning spreadsheets of thousands of rows, stakeholders can immediately identify outliers, performance dips, or growth spikes via color-coded visual charts.</p>
      </>
    ),
  },
  {
    id: 349,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Explain the concept of drill-down in BI.',
    answer: (
      <>
        <p><strong>Drill-down</strong> is an interactive analytical navigation method where users click on a high-level summary category (e.g., Year 2025) to view its underlying detailed components (e.g., Quarter 1, 2, 3, 4, or individual months).</p>
      </>
    ),
  },
  {
    id: 350,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is the significance of real-time BI?',
    answer: (
      <>
        <p>Real-time BI ingests and visualizes data instantly as transactions occur. It is critical for operational monitoring, such as server health, live logistics tracking, dynamic price adjustments, and fraud screening.</p>
      </>
    ),
  },
  {
    id: 351,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Describe the role of a BI Analyst.',
    answer: (
      <>
        <p>A BI Analyst bridges the gap between IT data systems and business operations. They gather client requirements, query database tables, build data models, design dashboard reports, and present findings to managers.</p>
      </>
    ),
  },
  {
    id: 352,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is a dashboard in Business Intelligence?',
    answer: (
      <>
        <p>A <strong>Dashboard</strong> is a single-screen interactive visual report that aggregates key metrics, KPIs, and status indicators in real-time, providing at-a-glance health summaries of the business.</p>
      </>
    ),
  },
  {
    id: 353,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How do you handle data inconsistencies in BI?',
    answer: (
      <>
        <p>By defining standardization rules in the ETL stage: cleansing formatting anomalies (e.g., forcing dates to ISO format), mapping misspelled categories, deduplicating client keys, and utilizing referential integrity constraints.</p>
      </>
    ),
  },
  {
    id: 354,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is the concept of data aggregation in BI.',
    answer: (
      <>
        <p><strong>Data Aggregation</strong> is the process of gathering and summarizing raw data into grouped fields (e.g., Sum, Average, Count, Min, Max) to make queries faster and reports more readable.</p>
      </>
    ),
  },
  {
    id: 355,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the role of AI and ML in BI?',
    answer: (
      <>
        <p>AI/ML automates data cleaning, provides natural language query interfaces, runs predictive forecasts on graphs, and flags anomalies before they impact the business.</p>
      </>
    ),
  },
  {
    id: 356,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How can BI help in predicting future trends?',
    answer: (
      <>
        <p>By analyzing historical operational data, BI platforms run statistical regression algorithms and time-series moving averages to predict future customer acquisition rates or stock demands.</p>
      </>
    ),
  },
  {
    id: 357,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'Describe the process of data warehousing.',
    answer: (
      <>
        <p>The sequence includes: Extracting data from source operational layers, transforming it in a staging area (normalizing and cleansing), loading it into target schemas, and setting up OLAP models for reports.</p>
      </>
    ),
  },
  {
    id: 358,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What are the challenges of implementing BI in an organization?',
    answer: (
      <>
        <p>Challenges include: Low dashboard adoption, legacy system integration difficulties, bad source data formatting, and missing clear business goals.</p>
      </>
    ),
  },
  {
    id: 359,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the role of a data steward in BI?',
    answer: (
      <>
        <p>A <strong>Data Steward</strong> ensures data assets comply with standard data governance rules. They monitor data quality, manage data definitions, and control permissions.</p>
      </>
    ),
  },
  {
    id: 360,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the purpose of a BI Dashboard, and what key elements should it contain?',
    answer: (
      <>
        <p>The purpose is to deliver immediate, actionable business insights on a single screen. Key elements include: High-level KPI cards, clear trending charts, interactive filters (slicers), and alert thresholds.</p>
      </>
    ),
  },
  {
    id: 361,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are aggregates?',
    answer: (
      <>
        <p>Aggregates are pre-summarized data calculations (such as totals or averages) computed during the ETL run, allowing dashboards to render instantly instead of computing math across millions of rows at runtime.</p>
      </>
    ),
  },
  {
    id: 362,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Name different types of documents used in BI.',
    answer: (
      <>
        <p>Standard project documents include:</p>
        <ul>
          <li><strong>BRD:</strong> Business Requirements Document.</li>
          <li><strong>FRD:</strong> Functional Requirements Document.</li>
          <li><strong>Data Dictionary:</strong> Listing table metadata and schemas.</li>
          <li><strong>UAT Scripts:</strong> User Acceptance Testing test cases.</li>
        </ul>
      </>
    ),
  },
  {
    id: 363,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'Explain what is INNER JOIN, SELF JOIN, and CROSS JOIN?',
    answer: (
      <>
        <p>Common SQL Join operations:</p>
        <ul>
          <li><strong>INNER JOIN:</strong> Returns rows that have matching values in both tables.</li>
          <li><strong>SELF JOIN:</strong> A table joined with itself (useful for hierarchy parsing).</li>
          <li><strong>CROSS JOIN:</strong> Returns the Cartesian product of the two tables (combines every row of table A with every row of B).</li>
        </ul>
      </>
    ),
  },
  {
    id: 364,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is RAD methodology?',
    answer: (
      <>
        <p><strong>RAD (Rapid Application Development)</strong> is an agile project methodology focusing on rapid prototyping and user feedback over rigid planning, allowing reports to evolve iteratively.</p>
      </>
    ),
  },
  {
    id: 365,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is the use of the Requirement Traceability Matrix (RTM)?',
    answer: (
      <>
        <p>An <strong>RTM</strong> is a grid document that maps user requirements to test cases and design deliverables, ensuring every requested metric is built and tested.</p>
      </>
    ),
  },
  {
    id: 366,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the use of Unified Modeling Language?',
    answer: (
      <>
        <p><strong>UML</strong> is a standardized modeling language used to create visual diagrams of system architectures, database schemas, and process flows.</p>
      </>
    ),
  },
  {
    id: 367,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is scope creep?',
    answer: (
      <>
        <p><strong>Scope Creep</strong> is the uncontrolled growth of project requirements beyond the initial agreement, causing projects to miss deadlines.</p>
      </>
    ),
  },
  {
    id: 368,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is the BPMN gateway?',
    answer: (
      <>
        <p>In <strong>Business Process Model and Notation (BPMN)</strong>, a gateway controls the routing flow of decisions, splits, and merges (e.g. exclusive or parallel paths).</p>
      </>
    ),
  },
  {
    id: 369,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How to avoid Scope Creep?',
    answer: (
      <>
        <p>By defining clear requirements in the BRD, setting up a formal change control process, and deploying iterative prototypes to align expectations early.</p>
      </>
    ),
  },
  {
    id: 370,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the role of a business analyst in a project?',
    answer: (
      <>
        <p>A Business Analyst acts as the liaison between business stakeholders and developers, mapping operational goals into technical specifications.</p>
      </>
    ),
  },
  {
    id: 371,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'How do you approach documenting requirements?',
    answer: (
      <>
        <p>By interviewing stakeholders, outlining clear user stories, defining visual dashboard layouts, and creating detailed data mapping specifications.</p>
      </>
    ),
  },
  {
    id: 372,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How do you deal with performance issues in a BI report/dashboard?',
    answer: (
      <>
        <p>By reducing visual cards, shifting calculations from dashboard runtime (DAX) to the database level, using cached aggregates, and removing unused columns.</p>
      </>
    ),
  },
  {
    id: 373,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What do you understand by the term granularity?',
    answer: (
      <>
        <p><strong>Granularity</strong> refers to the level of detail represented in data tables. E.g., transaction-level granularity (every receipt line) vs. daily-aggregate granularity (sales totals per day).</p>
      </>
    ),
  },
  {
    id: 374,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is Data Drilling?',
    answer: (
      <>
        <p>Data Drilling describes operations that alter data detail: <strong>Drill-down</strong> (moving from high-level to detailed data) and <strong>Drill-up</strong> (moving from detailed to high-level summaries).</p>
      </>
    ),
  },
  {
    id: 375,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'Name some techniques used for data architecture design?',
    answer: (
      <>
        <p>Dimensional Modeling (Star/Snowflake schema design), Data Vault modeling, and 3NF database normalization.</p>
      </>
    ),
  },
  {
    id: 376,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is Confirmatory Data Analytics?',
    answer: (
      <>
        <p><strong>Confirmatory Data Analysis (CDA)</strong> focuses on testing pre-defined hypotheses or theories to confirm or reject their validity using statistical tests (e.g. p-values, confidence intervals).</p>
      </>
    ),
  },
  {
    id: 377,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'Explain the process of Confirmatory Data Analytics (CDA).',
    answer: (
      <>
        <p>The workflow: Defining a null hypothesis, collecting testing data, executing statistical significance tests (e.g., t-test, ANOVA), and drawing conclusions based on confidence levels.</p>
      </>
    ),
  },
  {
    id: 378,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is Exploratory Data Analytics?',
    answer: (
      <>
        <p><strong>Exploratory Data Analysis (EDA)</strong> is the process of examining datasets to summarize their main features and uncover hidden anomalies or correlations without predefined hypotheses.</p>
      </>
    ),
  },
  {
    id: 379,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What are the key methods and techniques used DA?',
    answer: (
      <>
        <p>Common techniques include: Descriptive statistics (mean, variance), correlation matrices, clustering models, and regression analysis.</p>
      </>
    ),
  },
  {
    id: 380,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What do you mean by Qualitative Data Analytics?',
    answer: (
      <>
        <p>Analyzing non-numeric data (such as user comments, transcripts, or reviews) to capture opinions, sentiments, or thematic concepts.</p>
      </>
    ),
  },
  {
    id: 381,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Highlight the difference between Physical Backups and Logical Backups.',
    answer: (
      <>
        <ul>
          <li><strong>Physical Backup:</strong> Copying physical database files (datafiles, transaction logs) to another disk. Fast recovery.</li>
          <li><strong>Logical Backup:</strong> Exporting database structure and data rows as SQL statements (e.g. <code>INSERT</code> statements). Database-engine independent.</li>
        </ul>
      </>
    ),
  },
  {
    id: 382,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are the different types of hierarchy?',
    answer: (
      <>
        <p>Hierarchy structures in modeling:</p>
        <ul>
          <li><strong>Standard (Balanced):</strong> Every branch has the same depth (e.g. Year &gt; Quarter &gt; Month).</li>
          <li><strong>Unbalanced (Ragged):</strong> Branches have varying depths (e.g. Organization hierarchy where supervisors report to different management levels).</li>
        </ul>
      </>
    ),
  },
  {
    id: 383,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is dicing and sliding?',
    answer: (
      <>
        <p>OLAP cube navigation terms:</p>
        <ul>
          <li><strong>Slicing:</strong> Selecting a single dimension value to get a 2D cross-section (e.g. sales in region "North").</li>
          <li><strong>Dicing:</strong> Selecting multiple values across dimensions to isolate a sub-cube (e.g. sales in region "North" for product category "Electronics" in 2025).</li>
        </ul>
      </>
    ),
  },
  {
    id: 384,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is Data Partitioning?',
    answer: (
      <>
        <p>Splitting large database tables into smaller, self-contained segments (e.g., partitioning by Date Year), making queries faster by skipping irrelevant data slices.</p>
      </>
    ),
  },
  {
    id: 385,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is a Repository?',
    answer: (
      <>
        <p>A centralized database that stores metadata about the BI system, including table relationships, metrics definitions, and report permissions.</p>
      </>
    ),
  },
  {
    id: 386,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Which model is used for text retrieval?',
    answer: (
      <>
        <p>The <strong>Vector Space Model (VSM)</strong> or TF-IDF indexing models, mapping unstructured text documents into vector arrays for search indexing.</p>
      </>
    ),
  },
  {
    id: 387,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Name the subset of a data warehouse?',
    answer: (
      <>
        <p>A <strong>Data Mart</strong> is a specialized subset of a data warehouse that contains data relevant to a specific department or team.</p>
      </>
    ),
  },
  {
    id: 388,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'K-means partitioning is suitable for which type of data sets?',
    answer: (
      <>
        <p>K-means is best suited for numeric, continuous multi-dimensional datasets where clusters can be calculated using Euclidean distances.</p>
      </>
    ),
  },
  {
    id: 389,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is neutral network?',
    answer: (
      <>
        <p>A <strong>neural network</strong> is a machine learning model inspired by the brain, consisting of layers of connected nodes that process inputs and learn complex patterns.</p>
      </>
    ),
  },
  {
    id: 390,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'List down the different types of Neutral Networks?',
    answer: (
      <>
        <p>Common architectures: Feedforward Neural Networks (FNN), Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN), and Transformers.</p>
      </>
    ),
  },
  {
    id: 391,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the role of a CRM (Customer Relationship Management) System?',
    answer: (
      <>
        <p>A CRM system manages client interactions, tracking contact details, lead conversions, emails, and support tickets, providing data to the sales mart.</p>
      </>
    ),
  },
  {
    id: 392,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are the key elements of a Designer Interface?',
    answer: (
      <>
        <p>In BI design: Canvas workspace, field data list, visualization library panel, query builder panel, and formatting tab.</p>
      </>
    ),
  },
  {
    id: 393,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the main objective of a BI system?',
    answer: (
      <>
        <p>To turn raw operational datasets into structured dashboards that help users make fast, accurate decisions.</p>
      </>
    ),
  },
  {
    id: 394,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'Difference between BRD and SRS in Business Analysis',
    answer: (
      <>
        <ul>
          <li><strong>BRD (Business Requirements Document):</strong> High-level document focused on business needs, explaining *what* the project goals are.</li>
          <li><strong>SRS (Software Requirements Specification):</strong> Technical document detailing functionality, database schemas, and workflows, explaining *how* it will be built.</li>
        </ul>
      </>
    ),
  },
  {
    id: 395,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is BCG Matrix?',
    answer: (
      <>
        <p>The <strong>BCG Matrix</strong> (Boston Consulting Group) is a portfolio planning model that categorizes a company's business units or products into four quadrants based on market growth rate and relative market share:</p>
        <ul>
          <li><strong>Stars:</strong> High growth, high market share (require heavy investment).</li>
          <li><strong>Cash Cows:</strong> Low growth, high market share (generate steady cash flow).</li>
          <li><strong>Question Marks:</strong> High growth, low market share (require strategic decisions).</li>
          <li><strong>Dogs:</strong> Low growth, low market share (unprofitable/should be divested).</li>
        </ul>
      </>
    ),
  },
  {
    id: 396,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Mention the two types diagrams used in Business Analysis.',
    answer: (
      <>
        <p>The two main classes of UML diagrams used in business analysis are:</p>
        <ul>
          <li><strong>Structural Diagrams:</strong> Depict the static components of the system (e.g. Class diagrams, Object diagrams, Component diagrams).</li>
          <li><strong>Behavioral Diagrams:</strong> Depict the dynamic workflows and user interactions (e.g. Use Case diagrams, Activity diagrams, Sequence diagrams).</li>
        </ul>
      </>
    ),
  },
  {
    id: 397,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'Differentiate between Fish Model and V Model?',
    answer: (
      <>
        <ul>
          <li><strong>V-Model:</strong> A sequential software development lifecycle model that maps each development phase directly with a corresponding validation and testing phase.</li>
          <li><strong>Fish Model:</strong> An extension of the V-model designed to depict parallel testing actions and feedback loops across multiple stages simultaneously, resembling a fish skeleton.</li>
        </ul>
      </>
    ),
  },
  {
    id: 398,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What does INVEST stand for?',
    answer: (
      <>
        <p>In Agile project management, **INVEST** is an acronym representing the characteristics of a high-quality user story:</p>
        <p><strong>I</strong>ndependent, <strong>N</strong>egotiable, <strong>V</strong>aluable, <strong>E</strong>stimable, <strong>S</strong>mall, and <strong>T</strong>estable.</p>
      </>
    ),
  },
  {
    id: 399,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is Pugh Matrix?',
    answer: (
      <>
        <p>The <strong>Pugh Matrix</strong> (design matrix) is a quantitative decision-making tool used by business analysts to evaluate and score multiple design options against a designated baseline standard.</p>
      </>
    ),
  },
  {
    id: 400,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are the elements of BPMN Gateway?',
    answer: (
      <>
        <p>In BPMN, gateways regulate process flow routing. Key elements include Exclusive gateways (routing traffic to a single path), Parallel gateways (forking multiple parallel flows), and Inclusive gateways.</p>
      </>
    ),
  },
  {
    id: 401,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is FMEA?',
    answer: (
      <>
        <p><strong>FMEA (Failure Mode and Effects Analysis)</strong> is a structured method for identifying potential failure points in a design, operational process, or service workflow, rating their severity, occurrence, and detection ratings.</p>
      </>
    ),
  },
  {
    id: 402,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is Kano Analysis?',
    answer: (
      <>
        <p>A feature prioritization model that helps product designers categorize user requirements based on customer satisfaction levels vs. feature implementation completeness.</p>
      </>
    ),
  },
  {
    id: 403,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What are the main areas in a Kano Analysis?',
    answer: (
      <>
        <p>Features are classified into four key dimensions: Must-Be (basic entry-level features), One-Dimensional (performance features), Attractive (delighters that surprise users), and Indifferent attributes.</p>
      </>
    ),
  },
  {
    id: 404,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is a Pair-Choice Technique?',
    answer: (
      <>
        <p>A requirements prioritization method where features are compared directly in pairs to determine which is more critical. Aggregating the choices produces a clear priority list.</p>
      </>
    ),
  },
  {
    id: 405,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the difference between pool and swimlane?',
    answer: (
      <>
        <ul>
          <li><strong>Pool:</strong> Represents a major participant, organization, or external entity in a BPMN process diagram.</li>
          <li><strong>Swimlane:</strong> Sub-divisions within a pool used to assign responsibility for specific activities to roles, departments, or systems.</li>
        </ul>
      </>
    ),
  },
  {
    id: 406,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is SIPOC Diagram?',
    answer: (
      <>
        <p>A high-level process mapping tool used in Six Sigma and business analysis listing: <strong>S</strong>uppliers, <strong>I</strong>nputs, <strong>P</strong>rocess, <strong>O</strong>utputs, and <strong>C</strong>ustomers.</p>
      </>
    ),
  },
  {
    id: 407,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Explain what is a Data Collection Plan?',
    answer: (
      <>
        <p>A master document outlining what data needs to be collected, from which databases or sources, how often, and who is responsible, preventing missing parameters during requirements gathering.</p>
      </>
    ),
  },
  {
    id: 408,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is MSA?',
    answer: (
      <>
        <p><strong>Measurement System Analysis (MSA)</strong> is an experimental assessment method evaluating the precision, repeatability, and bias of a measurement system to ensure data quality before statistical analysis.</p>
      </>
    ),
  },
  {
    id: 409,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is a Misuse Case?',
    answer: (
      <>
        <p>A specialized UML use case that represents hostile user behaviors (e.g. data theft, SQL injection) attempting to breach systems, helping define non-functional security requirements.</p>
      </>
    ),
  },
  {
    id: 410,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What do you understand by Requirement Prioritization?',
    answer: (
      <>
        <p>The process of organizing requirements based on commercial value, cost, urgency, and technical feasibility to ensure high-priority items are delivered first.</p>
      </>
    ),
  },
  {
    id: 411,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the requirement elicitation technique?',
    answer: (
      <>
        <p>Methods used to gather requirements from users, such as workshops, direct interviews, prototyping sessions, survey questionnaires, and job shadowing.</p>
      </>
    ),
  },
  {
    id: 412,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is BAS? Define its function.',
    answer: (
      <>
        <p><strong>Business Analytics Systems (BAS)</strong> are software solutions that query and analyze operational data to optimize business strategies.</p>
      </>
    ),
  },
  {
    id: 413,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is a Conditional Format?',
    answer: (
      <>
        <p>A visualization rule changing element attributes (colors, icons, charts) dynamically based on target thresholds, helping call out performance anomalies instantly.</p>
      </>
    ),
  },
  {
    id: 414,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is guided navigation?',
    answer: (
      <>
        <p>An interface design framework that guides report viewers through a logical sequence of drill-downs and insights, preventing user confusion in complex dashboards.</p>
      </>
    ),
  },
  {
    id: 415,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are the key components of guided navigation?',
    answer: (
      <>
        <p>Primary components include: Dynamic action links, interactive drill-down buttons, conditional warnings, and breadcrumb navigation trails.</p>
      </>
    ),
  },
  {
    id: 416,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is M language?',
    answer: (
      <>
        <p><strong>M Language</strong> is the functional, case-sensitive mashup formula language used by Power Query to extract, transform, and load data inside Power BI and Excel.</p>
      </>
    ),
  },
  {
    id: 417,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What are the most important components of SSAS?',
    answer: (
      <>
        <p>SQL Server Analysis Services (SSAS) includes: Multidimensional cube models (OLAP), Tabular models (in-memory data engine), and query engines (DAX, MDX).</p>
      </>
    ),
  },
  {
    id: 418,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is (SSBI) self-service business intelligence?',
    answer: (
      <>
        <p>Self-Service BI allows non-technical business users to load, analyze, and build dashboards independently without relying on the IT department.</p>
      </>
    ),
  },
  {
    id: 419,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are the major components of Power BI?',
    answer: (
      <>
        <p>The Power BI ecosystem includes:</p>
        <ul>
          <li><strong>Power BI Desktop:</strong> Visual report design application.</li>
          <li><strong>Power BI Service:</strong> Cloud portal for sharing reports.</li>
          <li><strong>Power BI Gateway:</strong> Connects cloud reports to on-premises data.</li>
        </ul>
      </>
    ),
  },
  {
    id: 420,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Name different connectivity modes in Power BI.',
    answer: (
      <>
        <ul>
          <li><strong>Import:</strong> Loads a copy of data into the desktop cache (best performance).</li>
          <li><strong>DirectQuery:</strong> Queries source database tables in real-time (ideal for large tables).</li>
          <li><strong>Live Connection:</strong> Connects directly to an external SSAS tabular model.</li>
        </ul>
      </>
    ),
  },
  {
    id: 421,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are filters in Power BI Reports?',
    answer: (
      <>
        <p>Filters restrict data visibility. Types include Visual-level filters, Page-level filters, Report-level filters, and Drill-through filters.</p>
      </>
    ),
  },
  {
    id: 422,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are different kinds of visualizations in Power BI?',
    answer: (
      <>
        <p>Visual types: Stacked bar charts, line graphs, KPIs cards, matrix grids, tree maps, scatter plots, and filled maps.</p>
      </>
    ),
  },
  {
    id: 423,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'Can you explain the difference between OLAP and OLTP?',
    answer: (
      <>
        <p>OLTP (Online Transactional Processing) is optimized for high volumes of simple write transactions. OLAP (Online Analytical Processing) is optimized for complex read queries across historical data.</p>
      </>
    ),
  },
  {
    id: 424,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How do you handle large datasets that exceed the capacity of your BI tool?',
    answer: (
      <>
        <p>By using **DirectQuery** or live database connections, creating aggregated summary tables, or migrating to a cloud data warehouse (like Snowflake).</p>
      </>
    ),
  },
  {
    id: 425,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is Online Transaction Processing (OLTP)?',
    answer: (
      <>
        <p>OLTP systems manage transaction-oriented applications (like online shopping or banking), prioritizing write speed, data integrity, and normalized structures.</p>
      </>
    )
  },
  {
    id: 426,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is ERP in Business Intelligence?',
    answer: (
      <>
        <p><strong>ERP (Enterprise Resource Planning)</strong> is software that manages core business processes (finance, HR, supply chain), acting as a primary data source for BI warehouses.</p>
      </>
    ),
  },
  {
    id: 427,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What do you understand by Executive information system (EIS)?',
    answer: (
      <>
        <p>An EIS is a high-level BI tool designed for senior executives, prioritizing high-level KPI trends and quick summaries over granular details.</p>
      </>
    ),
  },
  {
    id: 428,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is Dimensional Modeling (DM)?',
    answer: (
      <>
        <p>A data modeling approach designed to optimize data warehouse read speeds, organizing tables into **Facts** (numerical data) and **Dimensions** (context attributes).</p>
      </>
    ),
  },
  {
    id: 430,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What are Multidimensional Analysis methods available in business objects?',
    answer: (
      <>
        <p>Standard OLAP operations: Slice (selecting a slice), Dice (selecting a sub-cube), Drill-down/up, and Pivot (rotating the data axis).</p>
      </>
    ),
  },
  {
    id: 431,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What does JAD stands for?',
    answer: (
      <>
        <p><strong>JAD</strong> stands for <strong>Joint Application Design</strong>. It is a development methodology that brings key business stakeholders, subject matter experts, and developers together in facilitated workshops to collaboratively define requirements and design system layouts.</p>
      </>
    ),
  },
  {
    id: 432,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is business modelling?',
    answer: (
      <>
        <p>The process of representing business rules, database flows, and organizational operations visually (e.g. using BPMN flowcharts).</p>
      </>
    ),
  },
  {
    id: 433,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is MoSCoW Method?',
    answer: (
      <>
        <p>A requirement prioritization framework categorizing items into: <strong>M</strong>ust-have, <strong>S</strong>hould-have, <strong>C</strong>ould-have, and <strong>W</strong>on't-have.</p>
      </>
    ),
  },
  {
    id: 434,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is SWOT Analysis?',
    answer: (
      <>
        <p>A strategic planning tool identifying an organization's: <strong>S</strong>trengths, <strong>W</strong>eaknesses, <strong>O</strong>pportunities, and <strong>T</strong>hreats.</p>
      </>
    ),
  },
  {
    id: 435,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is a subquery?',
    answer: (
      <>
        <p>A SQL query nested inside another query (e.g. inside the <code>WHERE</code> or <code>SELECT</code> clause) to return intermediate filtering data.</p>
      </>
    ),
  },
  {
    id: 436,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are the different type of subqueries?',
    answer: (
      <>
        <p>Types include Single-row subqueries (returning one row), Multi-row subqueries, and Correlated subqueries (nested query depends on the outer query).</p>
      </>
    ),
  },
  {
    id: 437,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'State the differences between Data Warehouse System and a Transactional System?',
    answer: (
      <>
        <p>Data warehouses store historical, denormalized data optimized for complex read queries. Transactional systems store current, normalized data optimized for fast write operations.</p>
      </>
    ),
  },
  {
    id: 438,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is Snowflake Schema? How is it different from Star Scheme?',
    answer: (
      <>
        <ul>
          <li><strong>Star Schema:</strong> Fact tables connect directly to denormalized dimension tables. Simpler, faster query performance.</li>
          <li><strong>Snowflake Schema:</strong> Dimension tables are normalized and split into sub-tables. Saves disk space, but queries require more table joins.</li>
        </ul>
      </>
    ),
  },
  {
    id: 439,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'Define Ragged Hierarchy.',
    answer: (
      <>
        <p>A hierarchy structure where branches have varying depths (e.g. organization charts where some reporting paths contain three levels and others contain five).</p>
      </>
    ),
  },
  {
    id: 440,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the difference between dimension and fact table?',
    answer: (
      <>
        <p>Fact tables store numerical metrics (revenue, cost) and keys. Dimension tables store descriptive context columns (product category, store name, calendar dates).</p>
      </>
    ),
  },
  {
    id: 441,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is SOA Modeling?',
    answer: (
      <>
        <p><strong>SOA (Service-Oriented Architecture) Modeling</strong> describes designing software components as reusable services that communicate over a network.</p>
      </>
    ),
  },
  {
    id: 442,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are logical vectors in R?',
    answer: (
      <>
        <p>R vectors containing only logical values (<code>TRUE</code>, <code>FALSE</code>, <code>NA</code>) commonly used for filtering dataframes.</p>
      </>
    ),
  },
  {
    id: 443,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is analytical reporting?',
    answer: (
      <>
        <p>Reports that go beyond listing data records, providing qualitative analysis, correlation calculations, and recommendations to help guide strategy.</p>
      </>
    ),
  },
  {
    id: 444,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Name the different techniques used for Requirement Prioritization.',
    answer: (
      <>
        <p>Standard techniques: MoSCoW method, Pugh Matrix, Analytic Hierarchy Process (AHP), and 100-Point Method.</p>
      </>
    ),
  },
  {
    id: 445,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are responsive slicers in Power BI?',
    answer: (
      <>
        <p>Slicers (filters) that automatically resize and reorganize their layout depending on display screen size (web browser vs. mobile screen).</p>
      </>
    ),
  },
  {
    id: 446,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Explain the different stages in the working of Power BI?',
    answer: (
      <>
        <p>The workflow: 1) Connecting to data sources, 2) Transforming data in Power Query, 3) Building relationships in Model View, 4) Writing DAX measures, 5) Designing visual reports, and 6) Publishing to Power BI Service.</p>
      </>
    ),
  },
  {
    id: 447,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'Explain the advantages of self-service BI for end-users?',
    answer: (
      <>
        <p>Self-service BI provides faster insights by removing the IT department bottleneck, allowing users to build customized reports instantly.</p>
      </>
    ),
  },
  {
    id: 448,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is Data Normalization?',
    answer: (
      <>
        <p>The process of organizing data tables to reduce redundancy and dependencies, dividing large tables into smaller tables connected by relationships (e.g. 3NF normalization).</p>
      </>
    ),
  },
  {
    id: 449,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are the benefits of data normalization?',
    answer: (
      <>
        <p>Reduces disk storage waste, eliminates write/delete anomalies, and guarantees database integrity.</p>
      </>
    ),
  },
  {
    id: 450,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is data denormalization?',
    answer: (
      <>
        <p>The process of merging normalized tables to introduce redundancy, reducing the number of SQL joins required to execute read queries.</p>
      </>
    ),
  },
  {
    id: 451,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are the benefits of data denormalization?',
    answer: (
      <>
        <p>Dramatically increases read query speed in data warehouses and OLAP reports by pre-joining tables.</p>
      </>
    ),
  },
  {
    id: 452,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What are Global Filters? How do they differ from Column Filters?',
    answer: (
      <>
        <ul>
          <li><strong>Global Filters:</strong> Apply to all pages and visualization elements across the entire dashboard.</li>
          <li><strong>Column Filters:</strong> Restrict data inside a single visual or data table column.</li>
        </ul>
      </>
    ),
  },
  {
    id: 453,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is Power Query?',
    answer: (
      <>
        <p>The data transformation engine in Power BI and Excel, used to extract, clean, pivot, merge, and filter raw datasets before importing them.</p>
      </>
    ),
  },
  {
    id: 454,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What are query parameters?',
    answer: (
      <>
        <p>Variables inside Power Query used to store and change value targets (such as server names or date filters) dynamically without modifying the query code itself.</p>
      </>
    ),
  },
  {
    id: 455,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is DAX?',
    answer: (
      <>
        <p><strong>DAX (Data Analysis Expressions)</strong> is the library of formulas and calculations used to create calculated columns and measures in Power BI, SSAS, and Power Pivot.</p>
      </>
    ),
  },
  {
    id: 456,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What are the benefits of using variables in DAX?',
    answer: (
      <>
        <p>Variables (defined using <code>VAR</code> / <code>RETURN</code>) improve DAX code readability, speed up query execution (by calculating a value once instead of executing it multiple times), and simplify debugging.</p>
      </>
    ),
  },
  {
    id: 457,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What do you understand by a calculated column?',
    answer: (
      <>
        <p>A column added to a table in the data model calculated using DAX. They are calculated row-by-row and stored in memory, consuming storage resources.</p>
      </>
    ),
  },
  {
    id: 458,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is query collapsing?',
    answer: (
      <>
        <p>Also called **Query Folding**, it describes Power Query converting transformations (like filters or joins) into a single SQL statement executed directly by the source database, optimizing loading performance.</p>
      </>
    ),
  },
  {
    id: 459,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is a Bookmark in Power BI?',
    answer: (
      <>
        <p>A feature capturing the current view configuration of a report page (including filters, page state, and hidden elements), enabling custom navigation buttons.</p>
      </>
    ),
  },
  {
    id: 460,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How to handle Many to Many relationships?',
    answer: (
      <>
        <p>By creating a central **Bridge Table** containing unique keys from both tables, establishing one-to-many relationships pointing from the bridge to each table to prevent visual ambiguities.</p>
      </>
    ),
  },
  {
    id: 461,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the difference between MAX and MAXA functions?',
    answer: (
      <>
        <ul>
          <li><strong>MAX:</strong> Finds the maximum value in a numeric column, ignoring logical boolean values.</li>
          <li><strong>MAXA:</strong> Evaluates logical values as well (<code>TRUE</code> evaluates as 1, <code>FALSE</code> as 0).</li>
        </ul>
      </>
    ),
  },
  {
    id: 462,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is an incremental refresh?',
    answer: (
      <>
        <p>A refresh configuration that updates only the newly modified data partitions (e.g. today's sales) rather than reloading the entire historical table, saving time and compute resources.</p>
      </>
    ),
  },
  {
    id: 463,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What type of data can you store in Power BI?',
    answer: (
      <>
        <p>Power BI stores text, decimals, integers, boolean states, dates, and binary images in its memory models.</p>
      </>
    ),
  },
  {
    id: 464,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is an Embed Code?',
    answer: (
      <>
        <p>An HTML iframe code snippet generated by Power BI Service that allows you to embed interactive dashboards directly into company websites or portals.</p>
      </>
    ),
  },
  {
    id: 465,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is the method to hide and unhide a specific report in Power BI?',
    answer: (
      <>
        <p>In Power BI Desktop, right-click the page tab at the bottom and click "Hide Page". In Power BI Service, page visibility can be toggled using report edit parameters.</p>
      </>
    ),
  },
  {
    id: 466,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How to create multiple dynamic connections between two tables?',
    answer: (
      <>
        <p>By defining one **active** relationship and multiple **inactive** relationships, then activating the inactive connections selectively using the <code>USERELATIONSHIP()</code> filter inside DAX measures.</p>
      </>
    ),
  },
  {
    id: 467,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'What is COVAR? How is it different from COVARP?',
    answer: (
      <>
        <ul>
          <li><strong>COVAR:</strong> Calculates the sample covariance between two variables.</li>
          <li><strong>COVARP:</strong> Calculates the population covariance.</li>
        </ul>
      </>
    ),
  },
  {
    id: 468,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is z-order in Power BI?',
    answer: (
      <>
        <p>The visual layering stack that dictates which elements appear on top or behind others when charts overlap on the report canvas.</p>
      </>
    ),
  },
  {
    id: 469,
    category: 'Business Intelligence',
    difficulty: 'easy',
    question: 'What is a DATEDD function in Power BI.',
    answer: (
      <>
        <p>In standard DAX, the function is <code>DATEADD</code> (with one D in date). It adds/subtracts a specific time interval (days, months, years) to a column of dates, commonly used for time-intelligence calculations.</p>
      </>
    ),
  },
  {
    id: 470,
    category: 'Business Intelligence',
    difficulty: 'medium',
    question: 'How does SSRS integrate with Power BI?',
    answer: (
      <>
        <p>By embedding SSRS paginated reports directly within Power BI dashboards, or hosting them concurrently inside the cloud Power BI Report Server portal.</p>
      </>
    ),
  },
  {
    id: 471,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is C#?',
    answer: (
      <>
        <p><strong>C# (C-Sharp)</strong> is a modern, object-oriented, type-safe programming language developed by Microsoft as part of its .NET initiative. It is designed to build a wide range of applications, including web, mobile, desktop, and game development (using Unity).</p>
      </>
    ),
  },
  {
    id: 472,
    category: 'C#',
    difficulty: 'easy',
    question: 'How is C# different from C?',
    answer: (
      <>
        <ul>
          <li><strong>C:</strong> A procedural, structured programming language. It does not natively support object-oriented concepts and requires manual memory management (malloc/free).</li>
          <li><strong>C#:</strong> A modern, object-oriented programming language. It runs on the Common Language Runtime (CLR), which automatically manages memory via Garbage Collection, and includes extensive type safety features.</li>
        </ul>
      </>
    ),
  },
  {
    id: 473,
    category: 'C#',
    difficulty: 'medium',
    question: 'What are Jagged Arrays?',
    answer: (
      <>
        <p>A <strong>Jagged Array</strong> is an "array of arrays" where each member array can have a different length or dimension. Unlike multi-dimensional arrays (which are rectangular), jagged arrays store references to separate arrays in memory.</p>
        <p>Example: <code>int[][] jagged = new int[3][];</code> where <code>jagged[0] = new int[2];</code> and <code>jagged[1] = new int[5];</code></p>
      </>
    ),
  },
  {
    id: 474,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is the difference between out and ref parameters?',
    answer: (
      <>
        <ul>
          <li><strong>ref:</strong> The variable must be initialized before it is passed to the method. The method can modify it or leave it as is.</li>
          <li><strong>out:</strong> The variable does not need to be initialized before it is passed. However, the called method <em>must</em> assign a value to it before returning.</li>
        </ul>
      </>
    ),
  },
  {
    id: 475,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the benefit of ‘using’ statement in C#?',
    answer: (
      <>
        <p>The <code>using</code> statement ensures that objects implementing the <code>IDisposable</code> interface (like file streams, database connections, or font resources) are correctly disposed of as soon as the execution block exits, even if an exception occurs.</p>
      </>
    ),
  },
  {
    id: 476,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the difference between Break and Continue Statement?',
    answer: (
      <>
        <ul>
          <li><strong>break:</strong> Exits the closest enclosing loop or <code>switch</code> statement immediately.</li>
          <li><strong>continue:</strong> Skips the remaining statements in the current iteration of the loop and starts the next iteration.</li>
        </ul>
      </>
    ),
  },
  {
    id: 477,
    category: 'C#',
    difficulty: 'medium',
    question: 'Explain the steps involved in the C# code compilation?',
    answer: (
      <>
        <p>The compilation flow in C# involves two main steps:</p>
        <ol>
          <li><strong>Compile to IL:</strong> The C# compiler (Roslyn) compiles the source code into Common Intermediate Language (CIL or IL) and generates metadata stored in an assembly (EXE or DLL).</li>
          <li><strong>JIT Compilation:</strong> When the program runs, the Just-In-Time (JIT) compiler of the CLR compiles the IL code into native machine code optimized for the target processor architecture.</li>
        </ol>
      </>
    ),
  },
  {
    id: 478,
    category: 'C#',
    difficulty: 'medium',
    question: 'What are the various methods to pass parameters in a method?',
    answer: (
      <>
        <p>Parameters can be passed using:</p>
        <ul>
          <li><strong>Value Parameters:</strong> Passes a copy of the argument value (default).</li>
          <li><strong>Reference Parameters (<code>ref</code>):</strong> Passes a reference pointing to the original storage address.</li>
          <li><strong>Output Parameters (<code>out</code>):</strong> Passes a reference to return multiple parameters from a method.</li>
          <li><strong>Parameter Arrays (<code>params</code>):</strong> Passes a variable number of parameters as an array.</li>
        </ul>
      </>
    ),
  },
  {
    id: 479,
    category: 'C#',
    difficulty: 'easy',
    question: 'What are the advantages of C#?',
    answer: (
      <>
        <p>Key benefits include:</p>
        <ul>
          <li>Automatic memory management via Garbage Collection.</li>
          <li>Strong type safety and extensive exception-handling blocks.</li>
          <li>Full support for Object-Oriented features (inheritance, encapsulation, polymorphism).</li>
          <li>Native integration with the robust .NET Class Libraries.</li>
        </ul>
      </>
    ),
  },
  {
    id: 480,
    category: 'C#',
    difficulty: 'medium',
    question: 'Explain all the C# access modifiers?',
    answer: (
      <>
        <p>C# provides the following accessibility scopes:</p>
        <ul>
          <li><strong>public:</strong> Unrestricted access.</li>
          <li><strong>private:</strong> Restricted to the containing class.</li>
          <li><strong>protected:</strong> Restricted to the containing class and derived classes.</li>
          <li><strong>internal:</strong> Restricted to the current assembly (project).</li>
          <li><strong>protected internal:</strong> Current assembly OR derived classes in other assemblies.</li>
          <li><strong>private protected:</strong> Containing class OR derived classes within the <em>same</em> assembly.</li>
        </ul>
      </>
    ),
  },
  {
    id: 481,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is meant by an Abstract Class?',
    answer: (
      <>
        <p>An <strong>Abstract Class</strong> (declared with the <code>abstract</code> keyword) is a partial class design that cannot be instantiated directly. It serves as a base class containing virtual or abstract methods, requiring concrete derived classes to implement them.</p>
      </>
    ),
  },
  {
    id: 482,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is meant by a Partial Class?',
    answer: (
      <>
        <p>A <strong>Partial Class</strong> (declared using the <code>partial</code> keyword) splits the definition of a single class, struct, or interface across multiple physical files. They are merged into a single cohesive class during project compilation.</p>
      </>
    ),
  },
  {
    id: 483,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is the difference between read-only and constants?',
    answer: (
      <>
        <ul>
          <li><strong>const:</strong> Compile-time constants. The value is hardcoded during compilation and cannot be changed later. Can only be declared on basic types.</li>
          <li><strong>readonly:</strong> Run-time constants. The value can be evaluated and assigned at runtime, either during declaration or inside the class constructor.</li>
        </ul>
      </>
    ),
  },
  {
    id: 484,
    category: 'C#',
    difficulty: 'medium',
    question: 'Describe the accessibility modifier “protected internal”?',
    answer: (
      <>
        <p>An access scope where members are visible to any class inside the same assembly, OR any class inheriting from the parent class even if located in a separate assembly.</p>
      </>
    ),
  },
  {
    id: 485,
    category: 'C#',
    difficulty: 'medium',
    question: 'What are the differences between System.String and System.Text.StringBuilder classes?',
    answer: (
      <>
        <ul>
          <li><strong>System.String:</strong> Immutable. Any string modifications (like concatenation) generate a new string object in the managed heap, leading to memory overhead.</li>
          <li><strong>System.Text.StringBuilder:</strong> Mutable. Modifications happen in-place on the same string buffer without creating new string instances, suitable for loops.</li>
        </ul>
      </>
    ),
  },
  {
    id: 486,
    category: 'C#',
    difficulty: 'medium',
    question: 'What’s the difference between the System.Array.CopyTo() and System.Array.Clone()?',
    answer: (
      <>
        <ul>
          <li><strong>Clone():</strong> Creates a shallow copy of the array as a new array object. It returns an <code>object</code> reference that must be cast.</li>
          <li><strong>CopyTo():</strong> Copies the contents of the array into an <em>already existing</em> destination array starting at a specified index.</li>
        </ul>
      </>
    ),
  },
  {
    id: 487,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is the lock statement in C#?',
    answer: (
      <>
        <p>The <code>lock</code> keyword obtains a mutual exclusion lock for a given object, executing a statement block. It ensures that only one thread can access the critical code block at any given time, preventing race conditions.</p>
      </>
    ),
  },
  {
    id: 488,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is serialization?',
    answer: (
      <>
        <p><strong>Serialization</strong> is the process of converting an object instance into a byte stream (JSON, XML, or binary format) so it can be saved to disk, stored in databases, or sent over a network. <strong>Deserialization</strong> converts it back into an active object.</p>
      </>
    ),
  },
  {
    id: 489,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is Boxing and Unboxing in C#?',
    answer: (
      <>
        <ul>
          <li><strong>Boxing:</strong> Implicitly converting a value type (like an int or struct) to an <code>object</code> type or an interface type implemented by this value type. Stored on the heap.</li>
          <li><strong>Unboxing:</strong> Explicitly converting the boxed reference type back into a value type. Must match the original type.</li>
        </ul>
      </>
    ),
  },
  {
    id: 490,
    category: 'C#',
    difficulty: 'easy',
    question: 'Define method overloading in C#?',
    answer: (
      <>
        <p>Declaring multiple methods within the same class with the same name but different signatures (different parameter counts, parameter types, or parameter order).</p>
      </>
    ),
  },
  {
    id: 491,
    category: 'C#',
    difficulty: 'easy',
    question: 'What are the data types available in C#?',
    answer: (
      <>
        <p>C# types are divided into:</p>
        <ul>
          <li><strong>Value Types:</strong> Directly store data. Inherit from <code>System.ValueType</code>. Stored on the stack. Examples: <code>int</code>, <code>float</code>, <code>char</code>, <code>bool</code>, <code>struct</code>, <code>enum</code>.</li>
          <li><strong>Reference Types:</strong> Store a reference to the data's memory address. Stored on the heap. Examples: <code>class</code>, <code>interface</code>, <code>delegate</code>, <code>string</code>, <code>object</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 492,
    category: 'C#',
    difficulty: 'easy',
    question: 'What are the various loop types supported in C#?',
    answer: (
      <>
        <p>C# supports four primary loop structures:</p>
        <ul>
          <li><strong>for:</strong> Iterates a specific number of times.</li>
          <li><strong>while:</strong> Iterates as long as a specified condition evaluates to true.</li>
          <li><strong>do-while:</strong> Evaluates the condition at the end of the loop, ensuring it runs at least once.</li>
          <li><strong>foreach:</strong> Iterates through collections implementing <code>IEnumerable</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 493,
    category: 'C#',
    difficulty: 'easy',
    question: 'How does exception handling function in C#?',
    answer: (
      <>
        <p>C# handles exceptions using four keywords:</p>
        <ul>
          <li><strong>try:</strong> Wraps code that might throw an error.</li>
          <li><strong>catch:</strong> Catches and handles specific exceptions thrown from the try block.</li>
          <li><strong>finally:</strong> Code block that executes regardless of whether an exception was thrown.</li>
          <li><strong>throw:</strong> Explicitly raises an exception object.</li>
        </ul>
      </>
    ),
  },
  {
    id: 494,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is object-oriented programming (OOP) in C#?',
    answer: (
      <>
        <p>OOP is a programming paradigm built around objects and classes. It focuses on four core pillars: Inheritance, Encapsulation, Polymorphism, and Abstraction.</p>
      </>
    ),
  },
  {
    id: 495,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is inheritance in C#?',
    answer: (
      <>
        <p>The mechanism where a child class (derived class) inherits the properties and methods of a parent class (base class), supporting code reuse. C# does not support multiple inheritance of classes (only interfaces).</p>
      </>
    ),
  },
  {
    id: 496,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is polymorphism in C#?',
    answer: (
      <>
        <p>The ability of an object to take on many forms. C# supports two types: compile-time (overloading methods) and run-time (overriding virtual base class methods in derived classes using the <code>override</code> keyword).</p>
      </>
    ),
  },
  {
    id: 497,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is encapsulation in C#?',
    answer: (
      <>
        <p>The practice of hiding an object's internal details and data representation from outside classes, restricting direct access. It is implemented using properties with <code>get</code> and <code>set</code> accessors.</p>
      </>
    ),
  },
  {
    id: 498,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is abstraction in C#?',
    answer: (
      <>
        <p>The process of exposing only relevant features while hiding complex implementation details. Achieved using abstract classes and interfaces.</p>
      </>
    ),
  },
  {
    id: 499,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is a delegate in C#?',
    answer: (
      <>
        <p>A <strong>Delegate</strong> is a type-safe object that points to a method with a specific signature. It is C#'s version of a function pointer, commonly used for callbacks and event publishing.</p>
      </>
    ),
  },
  {
    id: 500,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is a lambda expression in C#?',
    answer: (
      <>
        <p>A concise inline anonymous function that uses the lambda operator (<code>=&gt;</code>) to pass parameters to functional delegates (like Func or Action). E.g. <code>x =&gt; x * x</code></p>
      </>
    ),
  },
  {
    id: 501,
    category: 'C#',
    difficulty: 'easy',
    question: 'Why should you use C# language?',
    answer: (
      <>
        <p>Because it offers strong type safety, automated Garbage Collection, modern developer features (LINQ, async/await), and can build cross-platform apps via .NET Core and high-performance games via Unity.</p>
      </>
    ),
  },
  {
    id: 502,
    category: 'C#',
    difficulty: 'easy',
    question: 'Define a thread in C#?',
    answer: (
      <>
        <p>A thread is the smallest unit of execution within a process. C# manages threads via the <code>System.Threading.Thread</code> class, allowing developers to execute background tasks concurrently.</p>
      </>
    ),
  },
  {
    id: 503,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is the difference between \'throw\' and \'throw ex\' in C#?',
    answer: (
      <>
        <ul>
          <li><code>throw;</code> preserves the original stack trace of the exception, allowing developers to see where the error originally occurred.</li>
          <li><code>throw ex;</code> overwrites the stack trace, making the current catch block the origin point of the exception.</li>
        </ul>
      </>
    ),
  },
  {
    id: 504,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the concept of an interface in C#?',
    answer: (
      <>
        <p>An <strong>Interface</strong> is a contract containing declarations of methods, properties, and events without implementations. Classes that implement the interface must provide the concrete code for these members.</p>
      </>
    ),
  },
  {
    id: 505,
    category: 'C#',
    difficulty: 'medium',
    question: 'How does a struct differ from a class in C#?',
    answer: (
      <>
        <ul>
          <li><strong>struct:</strong> Value type. Stored on the stack. Cannot inherit other classes. Ideal for small, lightweight data containers.</li>
          <li><strong>class:</strong> Reference type. Stored on the heap. Supports full inheritance. Managed by the Garbage Collector.</li>
        </ul>
      </>
    ),
  },
  {
    id: 506,
    category: 'C#',
    difficulty: 'easy',
    question: "What does the term 'namespace' mean in C#?",
    answer: (
      <>
        <p>A <strong>Namespace</strong> is a logical container used to organize classes and prevent naming collisions. It defines a scope that prevents elements with the exact same name from conflicting with each other (e.g. <code>System.IO</code> vs <code>System.Net</code>).</p>
      </>
    ),
  },
  {
    id: 507,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is a constructor in C#?',
    answer: (
      <>
        <p>A <strong>Constructor</strong> is a special member method of a class that is automatically invoked when an object instance of that class is created. It typically initializes class properties and fields and holds the same name as the class.</p>
      </>
    ),
  },
  {
    id: 508,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is the significance of a static constructor in C#?',
    answer: (
      <>
        <p>A static constructor is used to initialize static data fields or execute specific actions that need to run only once. It is automatically called before the first class instance is created or any static members are accessed.</p>
      </>
    ),
  },
  {
    id: 509,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is a sealed class in C#?',
    answer: (
      <>
        <p>A <strong>Sealed Class</strong> (declared using the <code>sealed</code> keyword) is a class that cannot be inherited by any other class. This is useful for security or optimization, as JIT compilers can optimize virtual member calls.</p>
      </>
    ),
  },
  {
    id: 510,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is a generic class in C#?',
    answer: (
      <>
        <p>A <strong>Generic Class</strong> is defined with type parameters (e.g., <code>class MyList&lt;T&gt;</code>). It permits class structures to operate on varying data types without sacrificing compile-time type safety or paying boxing overheads.</p>
      </>
    ),
  },
  {
    id: 511,
    category: 'C#',
    difficulty: 'medium',
    question: 'How would you define a generic method in C#?',
    answer: (
      <>
        <p>A method declared with type parameters, allowing it to perform operations on arguments of different data types while preserving type safety. E.g. <code>public void Swap&lt;T&gt;(ref T lhs, ref T rhs)</code></p>
      </>
    ),
  },
  {
    id: 512,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the concept of a property in C#?',
    answer: (
      <>
        <p>A <strong>Property</strong> is an abstraction member providing a flexible mechanism to read, write, or compute private fields using accessors (get/set) without exposing the raw variables.</p>
      </>
    ),
  },
  {
    id: 513,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the purpose of a get accessor in C#?',
    answer: (
      <>
        <p>The <code>get</code> accessor is a method used to return the value of a property. It executes when the property value is read.</p>
      </>
    ),
  },
  {
    id: 514,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the role of a set accessor in C#?',
    answer: (
      <>
        <p>The <code>set</code> accessor is a method used to assign a new value to a property. It utilizes an implicit variable named <code>value</code> representing the incoming assignment.</p>
      </>
    ),
  },
  {
    id: 515,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is the concept of an event in C#?',
    answer: (
      <>
        <p>An <strong>Event</strong> is a message sent by an object to signal the occurrence of an action (e.g., button clicked). It is built on top of delegates, providing a publisher-subscriber model.</p>
      </>
    ),
  },
  {
    id: 516,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the definition of a collection in C#?',
    answer: (
      <>
        <p>A collection is a dynamic data structure (class) provided by the .NET Framework to store, group, and manipulate groups of objects. Examples: Lists, Dictionaries, Queues, Stacks.</p>
      </>
    ),
  },
  {
    id: 517,
    category: 'C#',
    difficulty: 'easy',
    question: 'How would you define an array in C#?',
    answer: (
      <>
        <p>An <strong>Array</strong> is a fixed-size, contiguous collection of elements of the same data type. Elements are accessed via zero-based indexing.</p>
      </>
    ),
  },
  {
    id: 518,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the purpose of a dictionary in C#?',
    answer: (
      <>
        <p>A <code>Dictionary&lt;TKey, TValue&gt;</code> stores key-value pairs, providing fast O(1) lookups by hashing keys.</p>
      </>
    ),
  },
  {
    id: 519,
    category: 'C#',
    difficulty: 'easy',
    question: 'How would you describe a list in C#?',
    answer: (
      <>
        <p>A <code>List&lt;T&gt;</code> is a dynamic array that automatically resizes as elements are added, supporting indexing and collection helper methods.</p>
      </>
    ),
  },
  {
    id: 520,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is the concept of a tuple in C#?',
    answer: (
      <>
        <p>A <strong>Tuple</strong> is a lightweight data structure containing a specific sequence of values of different types, useful for returning multiple values from a method without creating custom classes.</p>
      </>
    ),
  },
  {
    id: 521,
    category: 'C#',
    difficulty: 'easy',
    question: 'How would you define a value type in C#?',
    answer: (
      <>
        <p>A data type that directly contains data. Stored on the stack. Copying values duplicates the data itself. E.g. <code>int</code>, <code>double</code>, <code>struct</code>.</p>
      </>
    ),
  },
  {
    id: 522,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is a stack in C#?',
    answer: (
      <>
        <p>A collection representing a **Last-In, First-Out (LIFO)** data flow, managed using <code>Push()</code> and <code>Pop()</code> methods.</p>
      </>
    ),
  },
  {
    id: 523,
    category: 'C#',
    difficulty: 'easy',
    question: "What does the term 'queue' refer to in C#?",
    answer: (
      <>
        <p>A collection representing a **First-In, First-Out (FIFO)** data flow, managed using <code>Enqueue()</code> and <code>Dequeue()</code> methods.</p>
      </>
    ),
  },
  {
    id: 524,
    category: 'C#',
    difficulty: 'easy',
    question: 'How would you define a HashSet in C#?',
    answer: (
      <>
        <p>An unordered collection containing unique values, optimizing search, addition, and set operation operations (unions, intersections).</p>
      </>
    ),
  },
  {
    id: 525,
    category: 'C#',
    difficulty: 'easy',
    question: 'Can you explain the concept of IDictionary in C#?',
    answer: (
      <>
        <p>The generic interface representing non-generic or generic collections of key/value pairs, defining standard indexing accessors and key validation.</p>
      </>
    ),
  },
  {
    id: 526,
    category: 'C#',
    difficulty: 'easy',
    question: 'Which important Integrated Development Environments (IDEs) for C# development are provided by Microsoft?',
    answer: (
      <>
        <p>The two primary tools are:</p>
        <ul>
          <li><strong>Visual Studio:</strong> Full-featured enterprise IDE.</li>
          <li><strong>Visual Studio Code:</strong> Lightweight, cross-platform source code editor supporting C# development via extensions (C# Dev Kit).</li>
        </ul>
      </>
    ),
  },
  {
    id: 527,
    category: 'C#',
    difficulty: 'easy',
    question: 'Can you briefly describe the key features of C#?',
    answer: (
      <>
        <p>Key highlights include: Full object-orientation, automatic garbage collection, type safety, language-integrated query (LINQ), asynchronous programming (async/await), and structured exception handling.</p>
      </>
    ),
  },
  {
    id: 528,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is the meaning of Unmanaged or Managed Code?',
    answer: (
      <>
        <ul>
          <li><strong>Managed Code:</strong> Code executing under the supervision of the CLI/CLR (which handles GC, safety checks, type safety).</li>
          <li><strong>Unmanaged Code:</strong> Code executing directly on the operating system outside the .NET runtime (e.g. C/C++ libraries handling manual memory).</li>
        </ul>
      </>
    ),
  },
  {
    id: 529,
    category: 'C#',
    difficulty: 'medium',
    question: 'How do finally blocks and Finalize/Finalizers differ from each other in C#?',
    answer: (
      <>
        <ul>
          <li><strong>finally:</strong> A block in exception handling executed unconditionally to clean up resources (files, connections) immediately.</li>
          <li><strong>Finalize:</strong> A method (destructor) invoked by the Garbage Collector before reclaiming heap memory, used for asynchronous unmanaged resource release.</li>
        </ul>
      </>
    ),
  },
  {
    id: 530,
    category: 'C#',
    difficulty: 'medium',
    question: 'How do the Dispose() and Finalize() methods differ from each other?',
    answer: (
      <>
        <ul>
          <li><strong>Dispose():</strong> Called explicitly by developer code (or via `using` block) to free resources immediately.</li>
          <li><strong>Finalize():</strong> Called implicitly by the Garbage Collector when destroying unreferenced objects, offering a fallback resource release.</li>
        </ul>
      </>
    ),
  },
  {
    id: 531,
    category: 'C#',
    difficulty: 'hard',
    question: 'What is the definition of circular references?',
    answer: (
      <>
        <p>A scenario where two or more objects refer to each other directly or indirectly, creating a reference dependency loop. The .NET garbage collector handles circular reference collection automatically using mark-and-sweep tracking.</p>
      </>
    ),
  },
  {
    id: 532,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the concept of Generics in C#?',
    answer: (
      <>
        <p>Generics decouple algorithms from concrete data types, allowing developers to reuse data models (e.g. collections) while guaranteeing type safety and eliminating boxing overheads.</p>
      </>
    ),
  },
  {
    id: 533,
    category: 'C#',
    difficulty: 'medium',
    question: 'How would you define an object pool in .NET?',
    answer: (
      <>
        <p>A performance design pattern that keeps a set of initialized objects ready for use in a pool, reducing allocation and GC cleanup cycles in high-throughput applications.</p>
      </>
    ),
  },
  {
    id: 534,
    category: 'C#',
    difficulty: 'medium',
    question: 'Enumerate the commonly used types of exceptions in .NET.',
    answer: (
      <>
        <p>Common exceptions include:</p>
        <ul>
          <li><code>NullReferenceException</code>: Accessing a null object.</li>
          <li><code>IndexOutOfRangeException</code>: Indexing arrays past limits.</li>
          <li><code>ArgumentException</code>: Invalid parameter values.</li>
          <li><code>InvalidOperationException</code>: Method calls on objects in improper states.</li>
        </ul>
      </>
    ),
  },
  {
    id: 535,
    category: 'C#',
    difficulty: 'medium',
    question: 'What do you understand by Custom Exceptions?',
    answer: (
      <>
        <p>Developer-defined exception classes inheriting from <code>System.Exception</code>, capturing custom business rules or domain failures.</p>
      </>
    ),
  },
  {
    id: 536,
    category: 'C#',
    difficulty: 'easy',
    question: 'How would you define delegates?',
    answer: (
      <>
        <p>Type-safe reference types containing a reference to a method with a specified return type and parameter list, facilitating callback architectures.</p>
      </>
    ),
  },
  {
    id: 537,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is the distinction between method overriding and method overloading?',
    answer: (
      <>
        <ul>
          <li><strong>Overloading:</strong> Creating methods with same name but different signatures in the same class (compile-time).</li>
          <li><strong>Overriding:</strong> Redefining a base class virtual/abstract method inside a derived class (run-time).</li>
        </ul>
      </>
    ),
  },
  {
    id: 538,
    category: 'C#',
    difficulty: 'easy',
    question: 'How can you achieve class inheritance in C#?',
    answer: (
      <>
        <p>By declaring a class name followed by a colon (<code>:</code>) and the base class name. E.g. <code>public class DerivedClass : BaseClass</code></p>
      </>
    ),
  },
  {
    id: 539,
    category: 'C#',
    difficulty: 'easy',
    question: 'What are the various ways to overload a method?',
    answer: (
      <>
        <p>Methods can be overloaded by changing parameters count, parameters data types, or parameters ordering within the method signature.</p>
      </>
    ),
  },
  {
    id: 540,
    category: 'C#',
    difficulty: 'medium',
    question: 'Why is it not possible to specify the accessibility modifier for methods within an interface?',
    answer: (
      <>
        <p>Historically, all interface members in C# were implicitly <code>public</code> because they define a public API contract that implementing classes must expose. However, modern C# (8.0+) allows private/protected modifiers for default implementation members.</p>
      </>
    ),
  },
  {
    id: 541,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is the difference between Interface and Abstract Class in C#?',
    answer: (
      <>
        <ul>
          <li><strong>Interface:</strong> Can only declare members without implementations (C# 8.0+ supports default implementations). Supports multiple inheritance. Cannot have instance fields or constructors.</li>
          <li><strong>Abstract Class:</strong> Can contain fully implemented methods, constructors, and instance fields. A class can only inherit from one abstract class.</li>
        </ul>
      </>
    ),
  },
  {
    id: 542,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the purpose of an enum in C#?',
    answer: (
      <>
        <p>An <strong>Enum (Enumeration)</strong> is a distinct value type containing a set of named numerical constants. It makes code more readable and self-documenting by replacing magic numbers with meaningful names.</p>
      </>
    ),
  },
  {
    id: 543,
    category: 'C#',
    difficulty: 'easy',
    question: "Can 'this' keyword be used within a static method?",
    answer: (
      <>
        <p>No. The <code>this</code> keyword refers to the current instance of the class. Because static methods belong to the class itself and run without class instance context, using <code>this</code> will cause a compilation error.</p>
      </>
    ),
  },
  {
    id: 544,
    category: 'C#',
    difficulty: 'easy',
    question: 'What do properties represent in C#?',
    answer: (
      <>
        <p>Properties act as smart fields. They expose class fields to external code using get/set accessors, enabling developers to validate, secure, or compute data transparently upon access.</p>
      </>
    ),
  },
  {
    id: 545,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is an extension method in C#?',
    answer: (
      <>
        <p>An <strong>Extension Method</strong> allows developers to add new methods to existing types (like classes or interfaces) without modifying the original code or inheriting from it. They are declared as static methods inside static classes using the <code>this</code> keyword on the first parameter.</p>
      </>
    ),
  },
  {
    id: 546,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is a DTO?',
    answer: (
      <>
        <p>A <strong>DTO (Data Transfer Object)</strong> is a simple class carrying data between different system layers (e.g. from an API service to a database repository) without containing any business logic.</p>
      </>
    ),
  },
  {
    id: 547,
    category: 'C#',
    difficulty: 'easy',
    question: 'What Sets String and StringBuilder apart in C#?',
    answer: (
      <>
        <p>String is immutable (modifying it creates new memory allocations), whereas StringBuilder is mutable (modifying it edits a single internal buffer in-place), offering better performance in loops.</p>
      </>
    ),
  },
  {
    id: 548,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the purpose of a delegate in C#?',
    answer: (
      <>
        <p>Delegates provide a safe way to store reference pointers to methods. They are primarily used to pass methods as arguments to other methods, handle callbacks, and create events.</p>
      </>
    ),
  },
  {
    id: 549,
    category: 'C#',
    difficulty: 'easy',
    question: 'What are sealed classes in C#?',
    answer: (
      <>
        <p>Classes declared with the <code>sealed</code> keyword which cannot be inherited by any other class, ensuring structural security and enabling micro-optimizations.</p>
      </>
    ),
  },
  {
    id: 550,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is IEnumerable in C#?',
    answer: (
      <>
        <p>The base interface for non-generic collections in .NET. It defines a single method, <code>GetEnumerator()</code>, which returns an enumerator that allows looping through a collection using a <code>foreach</code> loop.</p>
      </>
    ),
  },
  {
    id: 551,
    category: 'C#',
    difficulty: 'medium',
    question: 'What differentiates early binding from late binding in C#?',
    answer: (
      <>
        <ul>
          <li><strong>Early Binding:</strong> Resolves method/class names at compile-time (standard type matching, overload resolution). Fast performance.</li>
          <li><strong>Late Binding:</strong> Resolves members dynamically at runtime using reflection or the <code>dynamic</code> keyword, providing flexibility at the cost of execution overhead.</li>
        </ul>
      </>
    ),
  },
  {
    id: 552,
    category: 'C#',
    difficulty: 'hard',
    question: 'What is the difference between IEnumerable and IQueryable?',
    answer: (
      <>
        <ul>
          <li><strong>IEnumerable:</strong> Best for in-memory collections. Slicing/filtering operations run on the local client (in-memory) after all records are pulled from database layers.</li>
          <li><strong>IQueryable:</strong> Best for out-of-memory resources (databases). Slicing/filtering operations compile into SQL queries and execute directly on the database engine.</li>
        </ul>
      </>
    ),
  },
  {
    id: 553,
    category: 'C#',
    difficulty: 'medium',
    question: 'What does Constructor Chaining mean in C#?',
    answer: (
      <>
        <p>A technique where a class constructor invokes another constructor within the same class (using <code>this()</code>) or base class (using <code>base()</code>), preventing duplicate initialization code blocks.</p>
      </>
    ),
  },
  {
    id: 554,
    category: 'C#',
    difficulty: 'medium',
    question: "What's the difference between the Array.CopyTo() and Array.Clone()?",
    answer: (
      <>
        <ul>
          <li><strong>Clone():</strong> Creates a shallow copy of the array as a new array instance.</li>
          <li><strong>CopyTo():</strong> Copies elements into an existing target array starting at a specific index location.</li>
        </ul>
      </>
    ),
  },
  {
    id: 555,
    category: 'C#',
    difficulty: 'medium',
    question: 'What are Indexers in C#?',
    answer: (
      <>
        <p>Indexers allow object instances of a class or struct to be indexed like arrays using square brackets. E.g. <code>myObj[index]</code>. They are defined using the <code>this</code> keyword.</p>
      </>
    ),
  },
  {
    id: 556,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is Object Pooling?',
    answer: (
      <>
        <p>A performance pattern that maintains a pool of pre-allocated objects. Instead of instantiating and destroying objects repeatedly, code borrows them from the pool, improving memory allocation efficiency.</p>
      </>
    ),
  },
  {
    id: 557,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is the difference between the Equality Operator (==) and Equals() Method in C#?',
    answer: (
      <>
        <ul>
          <li><strong>Equality Operator (==):</strong> For reference types, compares references to see if they point to the exact same object (except strings). For value types, compares values.</li>
          <li><strong>Equals() Method:</strong> Compares the logical content of objects. Classes override this to support value-level equality comparisons.</li>
        </ul>
      </>
    ),
  },
  {
    id: 558,
    category: 'C#',
    difficulty: 'easy',
    question: 'Why should the finally block be used in C#?',
    answer: (
      <>
        <p>To clean up unmanaged resources (closing databases, freeing graphics contexts, closing files) guaranteeing execution whether exceptions are thrown or not.</p>
      </>
    ),
  },
  {
    id: 559,
    category: 'C#',
    difficulty: 'medium',
    question: 'Explain the difference between Task and Thread in .NET',
    answer: (
      <>
        <ul>
          <li><strong>Thread:</strong> A physical operating system execution thread. High creation overhead.</li>
          <li><strong>Task:</strong> An abstraction representing an asynchronous operation from the Task Parallel Library (TPL). Automatically queued to run on the .NET ThreadPool.</li>
        </ul>
      </>
    ),
  },
  {
    id: 560,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the use of lambda expressions in C#?',
    answer: (
      <>
        <p>To write brief inline delegate callbacks, specify LINQ query filters, and simplify event handler declarations.</p>
      </>
    ),
  },
  {
    id: 561,
    category: 'C#',
    difficulty: 'easy',
    question: 'What do you mean by operators in C#?',
    answer: (
      <>
        <p>Symbols executing mathematical or logical operations (e.g. arithmetic <code>+</code>, logical comparison <code>&amp;&amp;</code>, assignment <code>=</code>).</p>
      </>
    ),
  },
  {
    id: 562,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is a hashtable in C#?',
    answer: (
      <>
        <p>A non-generic collection storing key-value pairs. It hashes keys to achieve fast indexing, but requires boxing/unboxing because elements are stored as <code>object</code> types.</p>
      </>
    ),
  },
  {
    id: 563,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is an immutable string?',
    answer: (
      <>
        <p>A string object whose contents cannot be altered after creation. Modifying a string allocates a new string block in memory rather than altering the existing character array.</p>
      </>
    ),
  },
  {
    id: 564,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is a destructor in C#?',
    answer: (
      <>
        <p>A class cleanup method (defined using a tilde: <code>~ClassName()</code>) invoked by the Garbage Collector when instances are no longer referenced, releasing unmanaged objects.</p>
      </>
    ),
  },
  {
    id: 565,
    category: 'C#',
    difficulty: 'easy',
    question: 'Explain the types of comments in C# with examples.',
    answer: (
      <>
        <p>C# provides three comment formats:</p>
        <ul>
          <li><strong>Single Line:</strong> <code>// comment</code></li>
          <li><strong>Multi Line:</strong> <code>/* comment */</code></li>
          <li><strong>XML Documentation:</strong> <code>/// &lt;summary&gt; description &lt;/summary&gt;</code> (used by IDE compiler tooltips).</li>
        </ul>
      </>
    ),
  },
  {
    id: 566,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is a virtual method, and how is it different from an abstract method?',
    answer: (
      <>
        <ul>
          <li><strong>Virtual Method:</strong> Contains a default code implementation in the base class, and derived classes *can* optionally override it.</li>
          <li><strong>Abstract Method:</strong> Declared in an abstract class without any implementation, and derived classes *must* implement it.</li>
        </ul>
      </>
    ),
  },
  {
    id: 567,
    category: 'C#',
    difficulty: 'easy',
    question: 'What is the static keyword?',
    answer: (
      <>
        <p>A modifier declaring members (fields, properties, methods) belonging to the class type itself rather than object instances. Static classes cannot be instantiated.</p>
      </>
    ),
  },
  {
    id: 568,
    category: 'C#',
    difficulty: 'medium',
    question: 'What is dependency injection, and how can it be achieved?',
    answer: (
      <>
        <p>A design pattern resolving dependencies between classes dynamically at runtime rather than hardcoding them. It is commonly achieved in .NET via Constructor Injection, Property Injection, or Method Injection using the built-in IoC container.</p>
      </>
    ),
  },
  {
    id: 569,
    category: 'C#',
    difficulty: 'medium',
    question: 'What are the characteristics of delegates?',
    answer: (
      <>
        <p>They are type-safe, support multicasting (executing multiple referenced methods in sequence using <code>+=</code>), and can reference static or instance methods.</p>
      </>
    ),
  },
  {
    id: 570,
    category: 'C#',
    difficulty: 'medium',
    question: 'Explain var and dynamic.',
    answer: (
      <>
        <ul>
          <li><strong>var:</strong> Statically typed. The compiler infers the type at compile-time based on the initialization value. Visual Studio tracks compile-time warnings and IntelliSense.</li>
          <li><strong>dynamic:</strong> Dynamically typed. Type resolution occurs at runtime. Bypasses compiler checking.</li>
        </ul>
      </>
    ),
  },
  {
    id: 571,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What do you mean by Java?',
    answer: (
      <>
        <p><strong>Java</strong> is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. Developed by James Gosling at Sun Microsystems in 1995, it is popular for its safety, concurrent thread support, and architectural platform independence.</p>
      </>
    ),
  },
  {
    id: 572,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is JVM or Java Virtual Machine?',
    answer: (
      <>
        <p>The <strong>JVM (Java Virtual Machine)</strong> is an abstract runtime engine that executes compiled Java bytecode. It provides a execution context, handles garbage collection, manages runtime data areas, and translates bytecode into processor machine instructions.</p>
      </>
    ),
  },
  {
    id: 573,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Mention the key differences between JVM, JRE, & JDK?',
    answer: (
      <>
        <ul>
          <li><strong>JVM (Java Virtual Machine):</strong> The abstract specification and runtime engine that executes Java bytecode (.class files).</li>
          <li><strong>JRE (Java Runtime Environment):</strong> Contains the JVM along with the core Class Libraries and configuration files required to run Java applications.</li>
          <li><strong>JDK (Java Development Kit):</strong> A full developer package containing the JRE, the Java compiler (javac), and development tools (javadoc, jdb, jar) to create applications.</li>
        </ul>
      </>
    ),
  },
  {
    id: 574,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What are the different types of memory areas allocated by JVM?',
    answer: (
      <>
        <p>The JVM runtime data memory is split into five functional sections:</p>
        <ul>
          <li><strong>Class (Method) Area:</strong> Stores class structures, static fields, and constant pools. Shared across threads.</li>
          <li><strong>Heap:</strong> Stores active object instances and arrays. Managed by the Garbage Collector and shared across all threads.</li>
          <li><strong>Stack:</strong> Stores local variables and partial results. Each thread has its own private Stack.</li>
          <li><strong>Program Counter (PC) Register:</strong> Stores the address of the JVM instruction currently executing.</li>
          <li><strong>Native Method Stack:</strong> Holds instructions for native assembly languages (C/C++) invoked via JNI.</li>
        </ul>
      </>
    ),
  },
  {
    id: 575,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What do you mean by JIT compiler?',
    answer: (
      <>
        <p>The <strong>JIT (Just-In-Time) compiler</strong> is a core component of the JVM that optimizes performance. It compiles frequently executed bytecode (hotspots) directly into native machine code at runtime, bypassing interpreter execution loops for these segments.</p>
      </>
    ),
  },
  {
    id: 576,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is a platform in Java?',
    answer: (
      <>
        <p>A platform is the hardware or software environment in which a program runs. The Java platform is a software-only environment consisting of the JRE and JVM, which runs on top of other hardware-based operating systems.</p>
      </>
    ),
  },
  {
    id: 577,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Explain the principal differences between the Java platform & other platforms?',
    answer: (
      <>
        <p>Unlike hardware-bound platforms (like Windows or Linux which compile source code straight to machine instructions), the Java platform is a software-based abstraction layer. This allowscompiled Java bytecode to run unmodified on any device hosting a compatible JVM.</p>
      </>
    ),
  },
  {
    id: 578,
    category: 'Core Java',
    difficulty: 'easy',
    question: "What gives Java WORA or 'write once and run anywhere' nature?",
    answer: (
      <>
        <p>Java compiles source code into an intermediate format called **bytecode**. Bytecode is platform-neutral. Because every target operating system has its own custom JVM that translates bytecode into its local machine instructions, the same byte code can run on Windows, macOS, or Linux without recompilation.</p>
      </>
    ),
  },
  {
    id: 579,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is Java ClassLoader?',
    answer: (
      <>
        <p>The **ClassLoader** is a subsystem of the JVM responsible for dynamically loading Java classes into memory during runtime. It works on three principles: Delegation, Visibility, and Uniqueness.</p>
      </>
    ),
  },
  {
    id: 580,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What if I write (static public void) instead of (public static void)?',
    answer: (
      <>
        <p>The code will compile and execute without errors. The order of access modifiers (public) and non-access modifiers (static) is interchangeable in Java declaration specifications, although <code>public static void</code> is the standard convention.</p>
      </>
    ),
  },
  {
    id: 581,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the default value of the local variables?',
    answer: (
      <>
        <p>Local variables (declared inside methods) do not have default values. They must be explicitly initialized before access; otherwise, the compiler will throw a compilation error.</p>
      </>
    ),
  },
  {
    id: 582,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What are the different access specifiers in Java?',
    answer: (
      <>
        <p>Java defines four access scopes:</p>
        <ul>
          <li><strong>private:</strong> Access restricted to the defining class.</li>
          <li><strong>default (package-private):</strong> Access restricted to classes in the same package.</li>
          <li><strong>protected:</strong> Accessible within the same package and by subclasses in other packages.</li>
          <li><strong>public:</strong> Accessible from any class in the project.</li>
        </ul>
      </>
    ),
  },
  {
    id: 583,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the purpose of static methods & static variables?',
    answer: (
      <>
        <ul>
          <li><strong>static variables:</strong> Belong to the class itself and are shared among all instances, saving memory.</li>
          <li><strong>static methods:</strong> Can be invoked without creating a class instance, commonly used for utility operations (e.g. <code>Math.max()</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 584,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What are the advantages of Java Packages?',
    answer: (
      <>
        <p>Packages organize class files into folders, prevent namespace collisions, control file visibility, and make code modular and maintainable.</p>
      </>
    ),
  },
  {
    id: 585,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the Object-Oriented Paradigm?',
    answer: (
      <>
        <p>A programming concept built around the idea of "objects" (which contain data and methods) rather than logic and actions. It is structured around Classes, Objects, Inheritance, Polymorphism, Abstraction, and Encapsulation.</p>
      </>
    ),
  },
  {
    id: 586,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Highlight the difference between an object-oriented programming language & an object-based programming language.',
    answer: (
      <>
        <ul>
          <li><strong>Object-Oriented Languages:</strong> Fully support all OOP features, including inheritance and polymorphism (e.g., Java, C++).</li>
          <li><strong>Object-Based Languages:</strong> Support encapsulation and objects, but lack inheritance and polymorphism capabilities (e.g., early versions of JavaScript).</li>
        </ul>
      </>
    ),
  },
  {
    id: 587,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is a Constructor in Java?',
    answer: (
      <>
        <p>A <strong>Constructor</strong> is a block of code similar to a method that is called when an instance of an object is created. It initializes the object's fields and has the exact same name as the class without a return type.</p>
      </>
    ),
  },
  {
    id: 588,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the meaning of default and parameterized constructors?',
    answer: (
      <>
        <ul>
          <li><strong>Default Constructor:</strong> A no-argument constructor inserted automatically by the Java compiler if no constructors are declared in the class.</li>
          <li><strong>Parameterized Constructor:</strong> A constructor defined with specific arguments to initialize fields with custom values.</li>
        </ul>
      </>
    ),
  },
  {
    id: 589,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Explain the static method in Java?',
    answer: (
      <>
        <p>A method declared with the <code>static</code> modifier. It belongs to the class itself rather than any instance, and can only access static fields or invoke other static methods directly.</p>
      </>
    ),
  },
  {
    id: 590,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Define the restrictions applied to the Java static methods?',
    answer: (
      <>
        <p>Static methods face two primary restrictions:</p>
        <ol>
          <li>They cannot access non-static (instance) variables or call non-static methods directly.</li>
          <li>They cannot use the keywords <code>this</code> or <code>super</code>, as there is no object instance context.</li>
        </ol>
      </>
    ),
  },
  {
    id: 591,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What are the benefits of passing this keyword into a method instead of the current class object itself?',
    answer: (
      <>
        <p>Passing <code>this</code> passes the exact reference of the current executing object instance. It is more memory-efficient and clear than instantiating new objects, and helps preserve referential identity across method callbacks.</p>
      </>
    ),
  },
  {
    id: 592,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the Inheritance in Java?',
    answer: (
      <>
        <p>A mechanism where a child class inherits properties and methods from a parent class using the <code>extends</code> keyword. It supports code reuse and runtime polymorphism.</p>
      </>
    ),
  },
  {
    id: 593,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is a composition in Java?',
    answer: (
      <>
        <p>Composition is a design technique where a class holds a reference to an instance of another class as a member field (representing a **"Has-A"** relationship), rather than inheriting from it (**"Is-A"**).</p>
      </>
    ),
  },
  {
    id: 594,
    category: 'Core Java',
    difficulty: 'medium',
    question: "Why doesn't Java support pointers?",
    answer: (
      <>
        <p>To ensure security and simplicity. Direct memory manipulation using pointers can lead to memory corruption, buffer overflows, and unauthorized memory access. JVM handles memory references implicitly and safely.</p>
      </>
    ),
  },
  {
    id: 595,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the primary use of the super keyword?',
    answer: (
      <>
        <p>The <code>super</code> keyword is a reference variable used to refer to immediate parent class objects: invoking parent constructors, calling parent overridden methods, and accessing hidden parent variables.</p>
      </>
    ),
  },
  {
    id: 596,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is a Method Overloading?',
    answer: (
      <>
        <p>Defining multiple methods in the same class with the same name but different argument lists (different counts, types, or order of parameters).</p>
      </>
    ),
  },
  {
    id: 597,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Why doesn’t Java allow overriding of the static method?',
    answer: (
      <>
        <p>Because method overriding is resolved at runtime based on the actual object type (dynamic binding), whereas static methods are bound at compile-time based on the reference type (static binding). Overriding static methods leads to method hiding, not overriding.</p>
      </>
    ),
  },
  {
    id: 598,
    category: 'Core Java',
    difficulty: 'hard',
    question: 'Is it possible to modify the throws clause of the superclass method when overriding it in the subclass?',
    answer: (
      <>
        <p>Yes, but with restrictions: the overriding subclass method can only declare the same checked exceptions, subclasses of those exceptions, or no exceptions at all. It cannot declare new or broader checked exceptions.</p>
      </>
    ),
  },
  {
    id: 599,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Can you have virtual functions in Java?',
    answer: (
      <>
        <p>Yes. In Java, all non-static, non-final, non-private methods are implicitly virtual. They can be overridden by derived classes and are bound dynamically at runtime.</p>
      </>
    ),
  },
  {
    id: 600,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Specify the fundamental difference between the final method & the abstract method?',
    answer: (
      <>
        <ul>
          <li><strong>final method:</strong> Contains a complete implementation and cannot be overridden by any subclass.</li>
          <li><strong>abstract method:</strong> Contains no implementation and *must* be overridden and implemented by concrete subclasses.</li>
        </ul>
      </>
    ),
  },
  {
    id: 601,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Explain the term Abstraction?',
    answer: (
      <>
        <p>The OOP process of hiding complex internal details and exposing only the essential interface features to the user, achieved in Java via interfaces and abstract classes.</p>
      </>
    ),
  },
  {
    id: 602,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the meaning of Interface in Java?',
    answer: (
      <>
        <p>An **Interface** is a reference type (contract) containing declarations of abstract methods, static constants, or default methods. Classes implement them to guarantee specific behaviors.</p>
      </>
    ),
  },
  {
    id: 603,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What are the key advantages of Encapsulation in Java?',
    answer: (
      <>
        <p>Advantages include: data hiding, improved code flexibility (read-only or write-only properties), ease of testing, and validation of inputs inside setters.</p>
      </>
    ),
  },
  {
    id: 604,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What do you mean by Exception Handling?',
    answer: (
      <>
        <p>A mechanism that handles runtime errors (like ClassNotFound, IO, or SQL exceptions) gracefully, preserving normal application execution flow using try, catch, finally, throw, and throws.</p>
      </>
    ),
  },
  {
    id: 605,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the purpose of using Java BufferedInputStream & BufferedOutputStream classes?',
    answer: (
      <>
        <p>They wrap existing input/output streams to implement an internal buffer array. Instead of reading or writing bytes individually from disk (which is slow), they read/write blocks of data at once, optimizing I/O speed.</p>
      </>
    ),
  },
  {
    id: 606,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is an Externalizable interface in Java?',
    answer: (
      <>
        <p><strong>Externalizable</strong> is an extension of the <code>Serializable</code> interface. Unlike standard serialization (where the JVM automatically handles writing object fields), <code>Externalizable</code> gives the developer complete control over the serialization process by requiring the implementation of <code>writeExternal()</code> and <code>readExternal()</code> methods.</p>
      </>
    ),
  },
  {
    id: 607,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is Socket in Java?',
    answer: (
      <>
        <p>A <strong>Socket</strong> is an endpoint for establishing two-way communication between two programs running on a network. Java provides the <code>Socket</code> class (for client sockets) and the <code>ServerSocket</code> class (for listening servers) inside the <code>java.net</code> package.</p>
      </>
    ),
  },
  {
    id: 608,
    category: 'Core Java',
    difficulty: 'hard',
    question: 'Define the purpose of the strictfp keyword?',
    answer: (
      <>
        <p>The <code>strictfp</code> modifier guarantees that floating-point calculations (using float and double) are computed precisely the same on all platforms, complying strictly with the IEEE 754 standard and avoiding platform-dependent arithmetic drift.</p>
      </>
    ),
  },
  {
    id: 609,
    category: 'Core Java',
    difficulty: 'hard',
    question: 'What are the peerless components in Java?',
    answer: (
      <>
        <p>In AWT (Abstract Window Toolkit), "peerless components" refer to lightweight components (such as Swing components) that are drawn entirely using Java code on the screen and do not rely on platform-native window peers.</p>
      </>
    ),
  },
  {
    id: 610,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Why we use the JavaBean?',
    answer: (
      <>
        <p>A **JavaBean** is a reusable software component design pattern. It encapsulates multiple objects into a single container bean. It must implement <code>Serializable</code>, expose a zero-argument constructor, and provide public getter/setter methods for its private fields.</p>
      </>
    ),
  },
  {
    id: 611,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is RMI?',
    answer: (
      <>
        <p><strong>RMI (Remote Method Invocation)</strong> is an API that allows an object running in one Java Virtual Machine to invoke methods on an object running in another JVM, enabling distributed computing architectures.</p>
      </>
    ),
  },
  {
    id: 612,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is multithreading feature in Java?',
    answer: (
      <>
        <p>The capability to run multiple threads concurrently within a single program. This maximizes CPU utilization, especially on multi-core processors, by running tasks (like file downloads and UI updates) in parallel.</p>
      </>
    ),
  },
  {
    id: 613,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is daemon thread?',
    answer: (
      <>
        <p>A **Daemon Thread** is a low-priority service provider thread running in the background (e.g. Garbage Collector). The JVM automatically terminates daemon threads as soon as all user (non-daemon) threads finish executing.</p>
      </>
    ),
  },
  {
    id: 614,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Thread Scheduler in Java?',
    answer: (
      <>
        <p>A component of the JVM that determines which thread in the **Runnable** state should be allocated CPU execution time, operating on preemptive or time-slicing scheduling policies.</p>
      </>
    ),
  },
  {
    id: 615,
    category: 'Core Java',
    difficulty: 'medium',
    question: "What is the 'volatile keyword' in Java?",
    answer: (
      <>
        <p>A modifier indicating that a variable's value must always be read from and written to main memory, bypassing CPU caches. This guarantees thread-safety and visibility of variable modifications across threads.</p>
      </>
    ),
  },
  {
    id: 616,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What are the key differences between Synchronous programming & Asynchronous programming?',
    answer: (
      <>
        <ul>
          <li><strong>Synchronous:</strong> Thread execution blocks waiting for a task to finish before proceeding to the next line of code.</li>
          <li><strong>Asynchronous:</strong> Execution is non-blocking; the calling thread triggers a task and continues, receiving notifications or processing results via callback threads later.</li>
        </ul>
      </>
    ),
  },
  {
    id: 617,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Garbage Collection in Java?',
    answer: (
      <>
        <p>An automated memory management daemon that scans the JVM heap to identify and destroy objects that are no longer referenced, freeing up memory resources.</p>
      </>
    ),
  },
  {
    id: 618,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is Java reflection?',
    answer: (
      <>
        <p>An API that allows runtime inspection and dynamic loading of classes, methods, constructors, and fields, even if they were declared private. Commonly used by frameworks like Spring and Hibernate.</p>
      </>
    ),
  },
  {
    id: 619,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the difference between HashSet & TreeSet?',
    answer: (
      <>
        <ul>
          <li><strong>HashSet:</strong> Backed by a HashMap. Unordered. Offers O(1) performance for basic operations. Accepts null values.</li>
          <li><strong>TreeSet:</strong> Backed by a TreeMap. Elements are sorted in natural order or via a custom Comparator. Offers O(log n) performance. Does not accept null values.</li>
        </ul>
      </>
    ),
  },
  {
    id: 620,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Name the best Java IDEs in 2023?',
    answer: (
      <>
        <p>The top integrated environments are IntelliJ IDEA (industry preferred), Eclipse, and NetBeans, along with VS Code for lightweight development.</p>
      </>
    ),
  },
  {
    id: 621,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Define the role of the JDBC DriverManager class?',
    answer: (
      <>
        <p>The <code>DriverManager</code> class acts as the interface between the user application and the installed database drivers, registering drivers and establishing network connections to databases using connection URLs.</p>
      </>
    ),
  },
  {
    id: 622,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What are the functions of JVM & JRE?',
    answer: (
      <>
        <ul>
          <li><strong>JVM:</strong> Executes bytecode, manages memory, compiles intermediate code using the JIT, and translates bytecode into machine instructions.</li>
          <li><strong>JRE:</strong> Provides runtime directory structures, standard class libraries, and configuration resources needed to run applications.</li>
        </ul>
      </>
    ),
  },
  {
    id: 623,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Define Serialization in Java?',
    answer: (
      <>
        <p>The process of converting an object's state into a flat byte stream so it can be stored on disk, sent over a network, or saved in databases. The class must implement the <code>java.io.Serializable</code> marker interface.</p>
      </>
    ),
  },
  {
    id: 624,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is a singleton class?',
    answer: (
      <>
        <p>A design pattern restricting class instantiation to a single object instance per JVM. It is implemented using a private constructor, a static variable of the class type, and a public static getter method.</p>
      </>
    ),
  },
  {
    id: 625,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Define the Ternary Operator?',
    answer: (
      <>
        <p>A shorthand conditional expression containing three parameters: <code>condition ? valueIfTrue : valueIfFalse</code>, replacing simple if-else blocks.</p>
      </>
    ),
  },
  {
    id: 626,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the use of a vector class in Java?',
    answer: (
      <>
        <p>A legacy, growable array class similar to ArrayList. Unlike ArrayList, all Vector operations are synchronized, making it thread-safe but introducing performance overhead.</p>
      </>
    ),
  },
  {
    id: 627,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Define implicit objects?',
    answer: (
      <>
        <p>In JSP (JavaServer Pages), implicit objects are pre-defined Java reference variables created by the servlet container (e.g., <code>request</code>, <code>response</code>, <code>session</code>, <code>application</code>) that are directly accessible inside scriptlets.</p>
      </>
    ),
  },
  {
    id: 628,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the meaning of lazy loading in hibernate?',
    answer: (
      <>
        <p>An optimization technique where child entities or associated collections are not fetched from the database immediately when the parent entity is loaded. Instead, they are loaded dynamically when first accessed in the code.</p>
      </>
    ),
  },
  {
    id: 629,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Define a Unicode?',
    answer: (
      <>
        <p>A universal character encoding standard that assigns a unique numerical code point to every character across all world languages. Java uses Unicode natively to store character variables.</p>
      </>
    ),
  },
  {
    id: 630,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is Dynamic Initialization?',
    answer: (
      <>
        <p>Initializing a variable at runtime using expressions evaluated during program execution (e.g. <code>double c = Math.sqrt(a * a + b * b);</code>), rather than static values known at compile-time.</p>
      </>
    ),
  },
  {
    id: 631,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What do you mean by BREAK Statement in Java?',
    answer: (
      <>
        <p>A loop control keyword that immediately exits the innermost loop (or switch statement), passing control to the statement following the loop.</p>
      </>
    ),
  },
  {
    id: 632,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Polymorphism in Java, mention its different types?',
    answer: (
      <>
        <p>The ability of an object to take on multiple forms. Java supports two types:</p>
        <ul>
          <li><strong>Compile-time Polymorphism:</strong> Method overloading, resolved at compilation.</li>
          <li><strong>Runtime Polymorphism:</strong> Method overriding, resolved dynamically at runtime using dynamic binding.</li>
        </ul>
      </>
    ),
  },
  {
    id: 633,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Encapsulation in Java?',
    answer: (
      <>
        <p>The OOP technique of wrapping fields and methods into a single class unit, declaring instance variables private and providing public getter and setter methods to access them safely.</p>
      </>
    ),
  },
  {
    id: 634,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is Starvation in Java?',
    answer: (
      <>
        <p>A multi-threading issue where a thread is persistently denied CPU cycles because higher-priority threads dominate scheduler queue allocations.</p>
      </>
    ),
  },
  {
    id: 635,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the key difference between an ArrayList and a Vector?',
    answer: (
      <>
        <ul>
          <li><strong>ArrayList:</strong> Not synchronized (not thread-safe), offering fast performance. Resizes by 50% of its size when full.</li>
          <li><strong>Vector:</strong> Fully synchronized (thread-safe), introducing execution lock overhead. Resizes by 100% when full.</li>
        </ul>
      </>
    ),
  },
  {
    id: 636,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What are the major differences between an Iterator and ListIterator?',
    answer: (
      <>
        <ul>
          <li><strong>Iterator:</strong> Traverses collections in the forward direction only. Works with all collection types.</li>
          <li><strong>ListIterator:</strong> Traverses lists in both forward and backward directions, supporting operations like element modification and index retrieval.</li>
        </ul>
      </>
    ),
  },
  {
    id: 637,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the difference between an Iterator & Enumeration?',
    answer: (
      <>
        <ul>
          <li><strong>Iterator:</strong> Fail-fast. Allows element removal during iteration. Used with modern collection classes.</li>
          <li><strong>Enumeration:</strong> Fail-safe. Read-only (does not support element removal). Used primarily with legacy classes like Vector or Stack.</li>
        </ul>
      </>
    ),
  },
  {
    id: 638,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Event handling in Java?',
    answer: (
      <>
        <p>A mechanism that responds to user inputs (like button clicks, mouse movements, or keystrokes) by registering Listener interfaces on Component objects.</p>
      </>
    ),
  },
  {
    id: 639,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'How can we add a new method in an interface without breaking all the child classes that implement the interface?',
    answer: (
      <>
        <p>By declaring the new method as a <code>default</code> or <code>static</code> method inside the interface (available in Java 8+). Implementing classes inherit default implementations automatically and do not need to provide overriding code.</p>
      </>
    ),
  },
  {
    id: 640,
    category: 'Core Java',
    difficulty: 'hard',
    question: 'Explain how a ThreadPool executor can work with BlockingQueue?',
    answer: (
      <>
        <p>A <code>ThreadPoolExecutor</code> stores incoming client tasks in a thread-safe <code>BlockingQueue</code>. If all pool threads are busy, new tasks queue inside the BlockingQueue. As threads finish executing current tasks, they block waiting to pull new items from the queue, managing flow control.</p>
      </>
    ),
  },
  {
    id: 641,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Explain the difference between synchronized & concurrent collection?',
    answer: (
      <>
        <ul>
          <li><strong>Synchronous Collections:</strong> Lock the entire collection during access (e.g. Vector, Hashtable, Collections.synchronizedList). This guarantees thread-safety but causes significant serialization bottlenecks.</li>
          <li><strong>Concurrent Collections:</strong> Use lock striping or non-blocking algorithms to lock only segments of the data structures (e.g. ConcurrentHashMap, CopyOnWriteArrayList), supporting high concurrent read/write throughput.</li>
        </ul>
      </>
    ),
  },
  {
    id: 642,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How does Java achieve platform independence?',
    answer: (
      <>
        <p>By compiling source code (<code>.java</code>) into an intermediate, platform-neutral byte code format (<code>.class</code>) rather than CPU machine instructions. The compiled bytecode is then translated and executed by the specific Java Virtual Machine (JVM) built for the target operating system.</p>
      </>
    ),
  },
  {
    id: 643,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the difference between notify and notifyAll in Java?',
    answer: (
      <>
        <ul>
          <li><strong>notify():</strong> Wakes up a single arbitrary thread that is waiting on this object's monitor queue.</li>
          <li><strong>notifyAll():</strong> Wakes up all threads waiting on this object's monitor, letting them compete for the object lock. Safer to prevent deadlock situations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 644,
    category: 'Core Java',
    difficulty: 'hard',
    question: 'Mention a difference between CountDownLatch & CyclicBarrier?',
    answer: (
      <>
        <ul>
          <li><strong>CountDownLatch:</strong> Cannot be reset or reused; once the countdown hits zero, it remains open. Used for one-shot coordination tasks.</li>
          <li><strong>CyclicBarrier:</strong> Can be dynamically reset and reused after threads are released at the barrier, suitable for recurring cyclic parallel tasks.</li>
        </ul>
      </>
    ),
  },
  {
    id: 645,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the difference between StringBuilder and StringBuffer in Java?',
    answer: (
      <>
        <ul>
          <li><strong>StringBuffer:</strong> Methods are synchronized, making it thread-safe for shared access but slower.</li>
          <li><strong>StringBuilder:</strong> Methods are unsynchronized, making it faster. Recommended for single-thread scenarios.</li>
        </ul>
      </>
    ),
  },
  {
    id: 646,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Define the differences between Polymorphism & Inheritance in Java?',
    answer: (
      <>
        <ul>
          <li><strong>Inheritance:</strong> A structural relationship where a child class acquires fields and methods of a parent class (reusing code structures).</li>
          <li><strong>Polymorphism:</strong> A behavioral capability enabling objects to take on different execution forms at runtime, resolving method calls dynamically.</li>
        </ul>
      </>
    ),
  },
  {
    id: 647,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the difference between SAX and DOM Parser?',
    answer: (
      <>
        <ul>
          <li><strong>DOM (Document Object Model):</strong> Inloads the entire XML document tree structure into memory, allowing arbitrary navigation. High memory usage.</li>
          <li><strong>SAX (Simple API for XML):</strong> A streaming, event-based parser traversing XML elements sequentially without storing them in memory. Memory-efficient.</li>
        </ul>
      </>
    ),
  },
  {
    id: 648,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the difference between Fail-Fast & Fail-Safe iterators in Java?',
    answer: (
      <>
        <ul>
          <li><strong>Fail-Fast:</strong> Throws <code>ConcurrentModificationException</code> instantly if the collection is structurally modified during iteration (e.g. ArrayList's iterator).</li>
          <li><strong>Fail-Safe:</strong> Iterates over a cloned copy of the collection or handles modifications concurrently, avoiding exceptions (e.g. ConcurrentHashMap's iterator).</li>
        </ul>
      </>
    ),
  },
  {
    id: 649,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the difference between Comparator and Comparable in Java?',
    answer: (
      <>
        <ul>
          <li><strong>Comparable:</strong> Implemented by the target class itself using <code>compareTo()</code> to define its default (natural) sorting order.</li>
          <li><strong>Comparator:</strong> Declared in a separate external class using <code>compare()</code>, enabling multiple custom sorting configurations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 650,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the difference between Checked & Unchecked Exceptions?',
    answer: (
      <>
        <ul>
          <li><strong>Checked Exceptions:</strong> Checked at compile-time (e.g., IOException, SQLException). The compiler forces developers to handle them inside try-catch or throws clauses.</li>
          <li><strong>Unchecked Exceptions:</strong> Resolved at runtime, inheriting from <code>RuntimeException</code> (e.g., NullPointerException, ArithmeticException). Handling is optional.</li>
        </ul>
      </>
    ),
  },
  {
    id: 651,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Compare race condition & deadlock in Java?',
    answer: (
      <>
        <ul>
          <li><strong>Race Condition:</strong> Occurs when multiple threads access shared state concurrently, causing incorrect data outcomes depending on thread scheduling order.</li>
          <li><strong>Deadlock:</strong> Occurs when two or more threads block indefinitely, waiting to acquire locks held by each other, freezing execution.</li>
        </ul>
      </>
    ),
  },
  {
    id: 652,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Why does Java not support multiple inheritances?',
    answer: (
      <>
        <p>To avoid the **Diamond Problem** (where a subclass inherits conflicting implementations of a method from two separate superclasses) and to keep the language model simple and compile-safe.</p>
      </>
    ),
  },
  {
    id: 653,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What do you mean by overloading & overriding in Java?',
    answer: (
      <>
        <ul>
          <li><strong>Overloading:</strong> Creating multiple methods in the same class with the same name but different signatures (compile-time).</li>
          <li><strong>Overriding:</strong> Declaring a method in a subclass with the exact same signature as a method in its superclass, changing its implementation (runtime).</li>
        </ul>
      </>
    ),
  },
  {
    id: 654,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can you have multiple public classes in a Java source file?',
    answer: (
      <>
        <p>No. A Java source file can have at most one <code>public</code> class, and the filename must match the name of that public class exactly.</p>
      </>
    ),
  },
  {
    id: 655,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Define Java Package? Which package is imported by default?',
    answer: (
      <>
        <p>A package is a grouping container organizing related classes and interfaces. The <code>java.lang</code> package is automatically imported by the compiler into every Java source file.</p>
      </>
    ),
  },
  {
    id: 656,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Explain finally and finalize method in Java?',
    answer: (
      <>
        <ul>
          <li><strong>finally:</strong> An exception handling block used to release resources (closing databases, files), executing regardless of whether exceptions are thrown.</li>
          <li><strong>finalize():</strong> A protected method of <code>java.lang.Object</code> invoked by the Garbage Collector before reclaiming object heap storage (deprecated in modern Java).</li>
        </ul>
      </>
    ),
  },
  {
    id: 657,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can interface extend or implement another interface?',
    answer: (
      <>
        <p>An interface can **extend** another interface (and can even extend multiple interfaces using commas), but it cannot **implement** another interface, as interfaces cannot contain non-default method implementations.</p>
      </>
    ),
  },
  {
    id: 658,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What do you mean by Java Annotation?',
    answer: (
      <>
        <p>Annotations are metadata tags (prefixed with <code>@</code>) embedded in source code, providing instructions to the compiler, code analysis engines, or runtimes (e.g. <code>@Override</code>, <code>@Deprecated</code>) without altering logic directly.</p>
      </>
    ),
  },
  {
    id: 659,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is an anonymous inner class in Java?',
    answer: (
      <>
        <p>An inner class declared without a class name that is instantiated in a single expression, typically used to override interface listener methods on-the-fly. E.g. <code>Runnable r = new Runnable() &#123; public void run() &#123; ... &#125; &#125;;</code></p>
      </>
    ),
  },
  {
    id: 660,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Is Java pass by value or reference?',
    answer: (
      <>
        <p>Java is strictly **pass-by-value**. When passing arguments to a method, a copy of the value is passed: for primitive types, a copy of the data value; for objects, a copy of the reference address pointer pointing to the heap object.</p>
      </>
    ),
  },
  {
    id: 661,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Can we initialize the final blank variable?',
    answer: (
      <>
        <p>Yes. A final blank variable (declared without initialization) must be assigned a value exactly once, either inside the class constructors (for instance fields) or static blocks (for static fields).</p>
      </>
    ),
  },
  {
    id: 662,
    category: 'Core Java',
    difficulty: 'easy',
    question: "What is the use of 'this' keyword in a class?",
    answer: (
      <>
        <p>The <code>this</code> keyword is a reference pointing to the current executing object instance, commonly used to distinguish instance fields from local parameters, chain constructors, or pass current references.</p>
      </>
    ),
  },
  {
    id: 663,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Mention a class that is considered as a superclass of all the classes?',
    answer: (
      <>
        <p>The <code>java.lang.Object</code> class is the absolute root parent of the Java class hierarchy; every class inherits from it implicitly.</p>
      </>
    ),
  },
  {
    id: 664,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is wrong with using HashMap in the multithreaded environment?',
    answer: (
      <>
        <p>HashMap is unsynchronized. In concurrent scenarios, race conditions during resizing buckets can cause internal pointer loops, leading to infinite CPU loops or corrupted data states. Use <code>ConcurrentHashMap</code> instead.</p>
      </>
    ),
  },
  {
    id: 665,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Does all property of Immutable Object need to be final in Java?',
    answer: (
      <>
        <p>Technically, no, but it is highly recommended. As long as properties are private, have no setter methods, and references to mutable fields are not leaked outside, the object remains logically immutable. Declaring fields <code>final</code> enforces compile-time immutability.</p>
      </>
    ),
  },
  {
    id: 666,
    category: 'Core Java',
    difficulty: 'hard',
    question: 'How do you handle error conditions while accessing stored procedures or writing stored procedures from Java?',
    answer: (
      <>
        <p>By trapping SQL exceptions using standard JDBC <code>try-catch(SQLException)</code> blocks, retrieving state codes using <code>ex.getSQLState()</code>, and checking transaction rollbacks via connection parameters.</p>
      </>
    ),
  },
  {
    id: 667,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'When to override hashCode() & equals() method?',
    answer: (
      <>
        <p>Whenever a custom class object will be used as a key in hashing collections (like HashMap, HashSet). They must be overridden together to satisfy the contract: if <code>equals()</code> returns true, their <code>hashCode()</code> must return the same value.</p>
      </>
    ),
  },
  {
    id: 668,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Which two methods you need to implement a key Object in HashMap?',
    answer: (
      <>
        <p>You must implement the <code>equals(Object obj)</code> method (to find matching keys in buckets) and the <code>hashCode()</code> method (to determine bucket mapping).</p>
      </>
    ),
  },
  {
    id: 669,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What do you mean by wrapper class in Java?',
    answer: (
      <>
        <p>Classes wrapping primitive types into object instances (e.g. <code>Integer</code> for <code>int</code>, <code>Double</code> for <code>double</code>), enabling primitives to be used in generic Collection frameworks.</p>
      </>
    ),
  },
  {
    id: 670,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Enumeration in Java?',
    answer: (
      <>
        <p>An interface providing methods to traverse a legacy collection (like Vector or Stack) sequentially, offering read-only traversal via <code>hasMoreElements()</code> and <code>nextElement()</code>.</p>
      </>
    ),
  },
  {
    id: 671,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Define core java?',
    answer: (
      <>
        <p><strong>Core Java</strong> refers to the fundamental and basic concepts of Java programming, specifically the Standard Edition (Java SE). It includes basic syntax, data types, object-oriented concepts, exception handling, multi-threading, and the Collections Framework.</p>
      </>
    ),
  },
  {
    id: 672,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How to enable Java in Chrome?',
    answer: (
      <>
        <p>Google Chrome (and most modern browsers) no longer supports NPAPI plugins, meaning you cannot run Java Applets directly inside the browser. To run web application Java features, developers use Java Web Start (JNLP) or modern packaging frameworks that compile to client-side WebAssembly.</p>
      </>
    ),
  },
  {
    id: 673,
    category: 'Core Java',
    difficulty: 'hard',
    question: 'Explain the internal working of HashMap in Java?',
    answer: (
      <>
        <p>HashMap operates on the principle of Hashing. It uses an internal array of Node/Entry buckets:</p>
        <ol>
          <li><strong>Put Operation:</strong> Computes the key's <code>hashCode()</code> to determine the bucket index. If the bucket is empty, a node is created.</li>
          <li><strong>Hash Collisions:</strong> If keys map to the same index, they form a singly linked list. Since Java 8, if the list size exceeds 8, the linked list is balanced into a Red-Black Tree to optimize search performance from O(n) to O(log n).</li>
          <li><strong>Get Operation:</strong> Finds the bucket index, then traverses the linked list/tree invoking <code>equals()</code> to locate the matching key object.</li>
        </ol>
      </>
    ),
  },
  {
    id: 674,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is a bytecode in Java?',
    answer: (
      <>
        <p><strong>Bytecode</strong> is the platform-independent intermediate machine instruction format compiled from Java source files by the Java compiler (javac). It is saved as <code>.class</code> files and executed by the JVM.</p>
      </>
    ),
  },
  {
    id: 675,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'How to connect databases in Java?',
    answer: (
      <>
        <p>Database connections are established using **JDBC (Java Database Connectivity)** in five steps:</p>
        <ol>
          <li>Load and register the specific JDBC database driver.</li>
          <li>Establish a connection using <code>DriverManager.getConnection(url, user, pass)</code>.</li>
          <li>Create a <code>Statement</code> or <code>PreparedStatement</code> object.</li>
          <li>Execute SQL queries to return a <code>ResultSet</code>.</li>
          <li>Close connection and statement resources.</li>
        </ol>
      </>
    ),
  },
  {
    id: 676,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is enum in Java?',
    answer: (
      <>
        <p>An <strong>Enum</strong> is a special Java class representing a group of constants (unchangeable variables). Unlike simple constants, Java enums are full type-safe classes that can contain constructors, fields, and custom methods.</p>
      </>
    ),
  },
  {
    id: 677,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is DAO in Java?',
    answer: (
      <>
        <p><strong>DAO (Data Access Object)</strong> is a design pattern that encapsulates all database access operations in a separate interface class, separating database calls from the business logic layer.</p>
      </>
    ),
  },
  {
    id: 678,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is AWT in Java?',
    answer: (
      <>
        <p><strong>AWT (Abstract Window Toolkit)</strong> is Java's original platform-dependent windowing and GUI toolkit. It uses operating system native peers to draw buttons, menus, and text fields.</p>
      </>
    ),
  },
  {
    id: 679,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is a framework in Java?',
    answer: (
      <>
        <p>A Java framework is a pre-written suite of classes, APIs, and libraries offering a standard structure to build applications (e.g., Spring Boot for enterprise APIs, Hibernate for database ORM).</p>
      </>
    ),
  },
  {
    id: 680,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How to update Java on Windows?',
    answer: (
      <>
        <p>By downloading the latest installer from the official Oracle JDK or open-source OpenJDK vendor sites, running the setup wizard, and updating the <code>JAVA_HOME</code> system environment path variable.</p>
      </>
    ),
  },
  {
    id: 681,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is a variable in Java?',
    answer: (
      <>
        <p>A variable is a named memory location container that stores values during Java program execution. Variables are classified into Local variables, Instance variables, and Class (static) variables.</p>
      </>
    ),
  },
  {
    id: 682,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Define functional interface in Java?',
    answer: (
      <>
        <p>A **Functional Interface** is an interface that contains exactly one abstract method (annotated optionally with <code>@FunctionalInterface</code>). They are used as target types for Lambda expressions (e.g. <code>Runnable</code>, <code>Callable</code>, <code>Consumer</code>).</p>
      </>
    ),
  },
  {
    id: 683,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What was Java initially named?',
    answer: (
      <>
        <p>Java was initially named <strong>Oak</strong> by James Gosling, named after an oak tree standing outside his office. It was later renamed to Java in 1995 due to trademark conflicts.</p>
      </>
    ),
  },
  {
    id: 684,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What are static variables, static methods, & static blocks?',
    answer: (
      <>
        <ul>
          <li><strong>Static Variables:</strong> Class variables shared by all instances. Memory is allocated once when the class is loaded.</li>
          <li><strong>Static Methods:</strong> Methods that belong to the class and can be called without creating an instance.</li>
          <li><strong>Static Blocks:</strong> Blocks of code used to initialize static fields, executed automatically when the class loads.</li>
        </ul>
      </>
    ),
  },
  {
    id: 685,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the use of a static method in Java?',
    answer: (
      <>
        <p>To perform operations that are independent of instance states, typically for helper utility methods (like <code>Math.pow()</code>) and factory methods.</p>
      </>
    ),
  },
  {
    id: 686,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What are the interfaces?',
    answer: (
      <>
        <p>Interfaces are formal contracts defining a list of abstract method signatures that implementing classes must fulfill, helping decouple client dependencies.</p>
      </>
    ),
  },
  {
    id: 687,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How is abstraction achieved in Java?',
    answer: (
      <>
        <p>Abstraction is achieved in two ways: partially (0-100%) using **Abstract Classes** containing both concrete and abstract methods, or fully (100%) using **Interfaces**.</p>
      </>
    ),
  },
  {
    id: 688,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Why are strings immutable in Java?',
    answer: (
      <>
        <p>Immutability is built-in for security, efficiency, and synchronization:</p>
        <ul>
          <li><strong>String Pool:</strong> Saves memory by sharing identical string literals.</li>
          <li><strong>Security:</strong> Prevents network connection parameters or files from being altered unexpectedly.</li>
          <li><strong>Thread-Safety:</strong> Multiple threads can share strings without synchronization.</li>
        </ul>
      </>
    ),
  },
  {
    id: 689,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can interfaces be inherited in Java?',
    answer: (
      <>
        <p>Yes. An interface can inherit from another interface using the <code>extends</code> keyword. Multiple inheritance is supported, e.g. <code>interface Child extends ParentA, ParentB</code>.</p>
      </>
    ),
  },
  {
    id: 690,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can a Java interface have static methods?',
    answer: (
      <>
        <p>Yes, since Java 8, interfaces can contain static methods. They must include a complete method implementation and cannot be overridden by implementing classes.</p>
      </>
    ),
  },
  {
    id: 691,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'How does garbage collection work in Java?',
    answer: (
      <>
        <p>The Garbage Collector tracks live references using Reachability Analysis from root references (threads, static fields). It clears unreferenced heap objects in generations: Young Generation (minor GC) and Old/Tenured Generation (major GC).</p>
      </>
    ),
  },
  {
    id: 692,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can there be two main methods in a class?',
    answer: (
      <>
        <p>Yes. You can overload the <code>main</code> method by declaring versions with different parameter signatures. However, the JVM will only execute the standard entry point: <code>public static void main(String[] args)</code>.</p>
      </>
    ),
  },
  {
    id: 693,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Can private variables be inherited in Java?',
    answer: (
      <>
        <p>No. Private members belong strictly to the enclosing class and are not inherited. However, if the base class provides public/protected getters or setters, derived classes can access their values.</p>
      </>
    ),
  },
  {
    id: 694,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can you increase the size of an array after declaration?',
    answer: (
      <>
        <p>No. Java arrays are fixed-size data structures. To dynamically resize collections, use the <code>ArrayList</code> class, which allocates a larger array internally and copies elements when full.</p>
      </>
    ),
  },
  {
    id: 695,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How many data types does Java support?',
    answer: (
      <>
        <p>Java supports two main type categories: Primitives (byte, short, int, long, float, double, char, boolean) and Reference types (classes, interfaces, arrays).</p>
      </>
    ),
  },
  {
    id: 696,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How to find the ASCII value of a character in java?',
    answer: (
      <>
        <p>By casting the <code>char</code> variable directly to an <code>int</code>. E.g. <code>int ascii = (int) 'A';</code> which yields 65.</p>
      </>
    ),
  },
  {
    id: 697,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How to get strings as user input from a console?',
    answer: (
      <>
        <p>By instantiating a <code>Scanner</code> object linked to system input. E.g. <code>Scanner in = new Scanner(System.in); String str = in.nextLine();</code></p>
      </>
    ),
  },
  {
    id: 698,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How to check the size of a string?',
    answer: (
      <>
        <p>By calling the <code>length()</code> method on the string instance. E.g. <code>int size = "hello".length();</code></p>
      </>
    ),
  },
  {
    id: 699,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How can we sort a list of elements in Java?',
    answer: (
      <>
        <p>By using the Collections helper framework. E.g. <code>Collections.sort(myList);</code> or sorting in-place using <code>myList.sort(comparator);</code>.</p>
      </>
    ),
  },
  {
    id: 700,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can you store a double value in a long type variable without casting?',
    answer: (
      <>
        <p>No. A <code>double</code> is a 64-bit floating point type that can represent fractions and numbers larger than <code>long</code>. Storing it in a <code>long</code> is a narrowing conversion that requires explicit casting, e.g. <code>long x = (long) 5.5;</code>.</p>
      </>
    ),
  },
  {
    id: 701,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Which one amongst an int or Integer will take more memory?',
    answer: (
      <>
        <p>An <strong>Integer</strong> object takes significantly more memory than a primitive <strong>int</strong>:</p>
        <ul>
          <li>Primitive <code>int</code>: Requires exactly 4 bytes of stack/heap space.</li>
          <li>Boxed <code>Integer</code> object: Requires 16 bytes (8/12 bytes object header metadata, 4 bytes for value data, plus padding), occupying 4x more space.</li>
        </ul>
      </>
    ),
  },
  {
    id: 702,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the difference between a top-level class & a nested static class?',
    answer: (
      <>
        <ul>
          <li><strong>Top-Level Class:</strong> Declared directly in a package namespace. Cannot be declared static.</li>
          <li><strong>Nested Static Class:</strong> Declared static inside another outer class. It does not hold a reference to instances of the outer class.</li>
        </ul>
      </>
    ),
  },
  {
    id: 703,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What are the uses of the final keyword?',
    answer: (
      <>
        <p>The <code>final</code> modifier makes elements constant:</p>
        <ul>
          <li><strong>final variables:</strong> Cannot be re-assigned.</li>
          <li><strong>final methods:</strong> Cannot be overridden by subclasses.</li>
          <li><strong>final classes:</strong> Cannot be inherited.</li>
        </ul>
      </>
    ),
  },
  {
    id: 704,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the difference between shallow copy & deep copy?',
    answer: (
      <>
        <ul>
          <li><strong>Shallow Copy:</strong> Copies the fields of the object. If fields contain references to other objects, only the memory addresses are copied, sharing instances.</li>
          <li><strong>Deep Copy:</strong> Recursively instantiates and copies all nested referenced objects, creating fully independent objects.</li>
        </ul>
      </>
    ),
  },
  {
    id: 705,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the meaning of object cloning?',
    answer: (
      <>
        <p>The process of creating an exact copy of an object using the <code>clone()</code> method. The class must implement the <code>java.lang.Cloneable</code> marker interface to allow cloning.</p>
      </>
    ),
  },
  {
    id: 706,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Why are static blocks used?',
    answer: (
      <>
        <p>To initialize class static fields. They execute automatically once when the JVM first loads the class, before any instances are created or static methods called.</p>
      </>
    ),
  },
  {
    id: 707,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the main difference between String & String Builder class in Java?',
    answer: (
      <>
        <p>String is immutable (creating new heap allocations on edit), whereas StringBuilder is mutable (modifying values inside the same buffer array in-place), offering better performance.</p>
      </>
    ),
  },
  {
    id: 708,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is XName class in Java?',
    answer: (
      <>
        <p>There is no native <code>XName</code> class in the standard Java SE libraries. <code>XName</code> is a class in C# .NET (System.Xml.Linq) representing local and namespace XML identifiers. In Java, XML namespaces are managed using <code>QName</code> (from <code>javax.xml.namespace.QName</code>).</p>
      </>
    ),
  },
  {
    id: 709,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can static methods reference non-static variables?',
    answer: (
      <>
        <p>No. Static methods belong to the class definition and execute without any class instance context, so they cannot reference instance variables directly.</p>
      </>
    ),
  },
  {
    id: 710,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How do static blocks get executed if there are multiple static blocks?',
    answer: (
      <>
        <p>They are executed sequentially in the order they appear in the source code file during class loading.</p>
      </>
    ),
  },
  {
    id: 711,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Which class do all classes inherit from Java?',
    answer: (
      <>
        <p>The <code>java.lang.Object</code> class is the parent superclass of all classes in Java, directly or indirectly. It provides core standard methods like <code>equals()</code>, <code>hashCode()</code>, <code>toString()</code>, and <code>getClass()</code>.</p>
      </>
    ),
  },
  {
    id: 712,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Difference between Serializable & Externalizable?',
    answer: (
      <>
        <ul>
          <li><strong>Serializable:</strong> Marker interface (no methods). The JVM automatically serializes fields using reflection. Easy to implement, but slower.</li>
          <li><strong>Externalizable:</strong> Contains <code>writeExternal()</code> and <code>readExternal()</code>. The developer writes custom logic to serialize select fields, offering high speed and complete control.</li>
        </ul>
      </>
    ),
  },
  {
    id: 713,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can we use String in the switch case?',
    answer: (
      <>
        <p>Yes, since Java 7, you can use <code>String</code> variables inside <code>switch</code> blocks. The JVM compares strings internally using their hash codes and the <code>equals()</code> method.</p>
      </>
    ),
  },
  {
    id: 714,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is object serialization & Deserialization?',
    answer: (
      <>
        <ul>
          <li><strong>Serialization:</strong> Converting the state of an object instance into a byte stream.</li>
          <li><strong>Deserialization:</strong> Converting the byte stream back into a live Java object in memory.</li>
        </ul>
      </>
    ),
  },
  {
    id: 715,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What are the differences between checked & unchecked exceptions in Java?',
    answer: (
      <>
        <ul>
          <li><strong>Checked Exceptions:</strong> Subclasses of <code>Exception</code> (excluding RuntimeException). Checked at compile-time, requiring try-catch or throws declarations.</li>
          <li><strong>Unchecked Exceptions:</strong> Subclasses of <code>RuntimeException</code>. Evaluated at runtime, handling is optional.</li>
        </ul>
      </>
    ),
  },
  {
    id: 716,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Which class contains the clone method? Cloneable or Object?',
    answer: (
      <>
        <p>The <code>clone()</code> method is declared inside the <strong>java.lang.Object</strong> class. The <code>Cloneable</code> interface is a marker interface (with no methods) that must be implemented by the class to grant permission to call <code>Object.clone()</code> without throwing a <code>CloneNotSupportedException</code>.</p>
      </>
    ),
  },
  {
    id: 717,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How to compile a Java program?',
    answer: (
      <>
        <p>Using the command line compiler tool **javac** followed by the filename: <code>javac MyProgram.java</code>. This compiles the source into a <code>MyProgram.class</code> bytecode file.</p>
      </>
    ),
  },
  {
    id: 718,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Define instance variable in Java?',
    answer: (
      <>
        <p>An instance variable is a variable declared inside a class but outside any methods. They are instantiated on the heap when an object is created and are unique to each class instance.</p>
      </>
    ),
  },
  {
    id: 719,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Maven in Java?',
    answer: (
      <>
        <p><strong>Maven</strong> is a build automation and project management tool. It uses a <code>pom.xml</code> file to manage project dependencies, build lifecycles, and plugins automatically.</p>
      </>
    ),
  },
  {
    id: 720,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is an array in Java?',
    answer: (
      <>
        <p>An array is an object container storing a fixed number of elements of a single data type in contiguous memory locations, accessed using zero-based indices.</p>
      </>
    ),
  },
  {
    id: 721,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is an applet in Java?',
    answer: (
      <>
        <p>An Applet is a legacy Java program designed to run embedded inside web browsers using NPAPI plugin technology. It is deprecated and removed from modern Java specifications.</p>
      </>
    ),
  },
  {
    id: 722,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What are generics in Java?',
    answer: (
      <>
        <p>Generics (introduced in Java 5) permit classes, interfaces, and methods to be parameterized with types, providing compile-time type safety and eliminating explicit casting.</p>
      </>
    ),
  },
  {
    id: 723,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is a stream in Java?',
    answer: (
      <>
        <p>In Java 8, a **Stream** represents a sequence of elements supporting functional programming operations (like <code>map</code>, <code>filter</code>, <code>reduce</code>) to process collections declaratively.</p>
      </>
    ),
  },
  {
    id: 724,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is lambda expression in Java?',
    answer: (
      <>
        <p>A short inline anonymous block of code (introduced in Java 8) that implements the single abstract method of a functional interface, syntax: <code>(parameters) -&gt; &#123; body &#125;</code>.</p>
      </>
    ),
  },
  {
    id: 725,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What are microservices in Java?',
    answer: (
      <>
        <p>An architectural style where a large application is built as a suite of small, independently deployable, modular services communicating via lightweight APIs (e.g. built using Spring Boot).</p>
      </>
    ),
  },
  {
    id: 726,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What do you mean by typecasting in Java?',
    answer: (
      <>
        <p>Converting a variable of one data type into another. Classified into: widening casting (implicit, small to large type, e.g. <code>int</code> to <code>double</code>) and narrowing casting (explicit, large to small, e.g. <code>double</code> to <code>int</code>).</p>
      </>
    ),
  },
  {
    id: 727,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'In what ways can you add new elements in an array?',
    answer: (
      <>
        <p>Because arrays are fixed-size, you cannot add new elements directly. You must allocate a larger array, copy the old elements, and add the new element, or use dynamic collections like <code>ArrayList</code>.</p>
      </>
    ),
  },
  {
    id: 728,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How to call a method in Java?',
    answer: (
      <>
        <p>By using the object variable name followed by a dot and the method name (for instance methods, e.g., <code>obj.myMethod()</code>), or directly using the Class name (for static methods, e.g., <code>MyClass.myStaticMethod()</code>).</p>
      </>
    ),
  },
  {
    id: 729,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Mention the difference between next () & nextLine() methods?',
    answer: (
      <>
        <ul>
          <li><strong>next():</strong> Reads input up to the first whitespace character (returns a single word).</li>
          <li><strong>nextLine():</strong> Reads the entire input line up to the line break (returns the full line).</li>
        </ul>
      </>
    ),
  },
  {
    id: 730,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is MVC in Java?',
    answer: (
      <>
        <p><strong>MVC (Model-View-Controller)</strong> is an architectural pattern splitting applications into three layers: Model (data structure), View (UI screens), and Controller (business logic and routing).</p>
      </>
    ),
  },
  {
    id: 731,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the diamond problem in Java?',
    answer: (
      <>
        <p>An inheritance conflict where a class inherits from two parent classes that implement the same method signature with different code. Java avoids this by not supporting multiple inheritance of classes.</p>
      </>
    ),
  },
  {
    id: 732,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is Aggregation in Java?',
    answer: (
      <>
        <p>A specialized form of association representing a **"has-a"** relationship where child objects can exist independently of the parent object (e.g. a Department has Professors, but if the Department is deleted, the Professors still exist).</p>
      </>
    ),
  },
  {
    id: 733,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Recursion in Java?',
    answer: (
      <>
        <p>A programming technique where a method calls itself recursively to solve a problem. It must contain a base case condition to prevent stack overflow errors.</p>
      </>
    ),
  },
  {
    id: 734,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Autoboxing & Unboxing in Java?',
    answer: (
      <>
        <ul>
          <li><strong>Autoboxing:</strong> The automatic conversion of primitive types to their corresponding wrapper classes (e.g., <code>int</code> to <code>Integer</code>).</li>
          <li><strong>Unboxing:</strong> The automatic conversion of wrapper objects back to primitive types (e.g., <code>Integer</code> to <code>int</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 735,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is an iterator in Java?',
    answer: (
      <>
        <p>An object implementing the <code>Iterator</code> interface, used to traverse elements of a Collection sequentially in the forward direction, supporting safe removal during loops.</p>
      </>
    ),
  },
  {
    id: 736,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is a HashMap?',
    answer: (
      <>
        <p>A Collection storing data as key-value pairs. It permits null values and a null key, is unsynchronized, and provides O(1) performance for lookups.</p>
      </>
    ),
  },
  {
    id: 737,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is a stack?',
    answer: (
      <>
        <p>A Last-In-First-Out (LIFO) data structure. In Java, it is implemented using the <code>Stack</code> class or the modern <code>Deque</code> interface.</p>
      </>
    ),
  },
  {
    id: 738,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is a TreeMap?',
    answer: (
      <>
        <p>A Map implementation sorted according to the natural ordering of its keys or by a custom Comparator. It guarantees O(log n) time cost for key operations.</p>
      </>
    ),
  },
  {
    id: 739,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Who executes the bytecode in Java?',
    answer: (
      <>
        <p>The <strong>JVM (Java Virtual Machine)</strong> interprets or compiles the bytecode into target machine instructions during runtime execution.</p>
      </>
    ),
  },
  {
    id: 740,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How many types of constructors does Java support?',
    answer: (
      <>
        <p>Java supports two types: default constructors (no-argument, inserted by compiler if none is defined) and parameterized constructors (custom arguments).</p>
      </>
    ),
  },
  {
    id: 741,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What are the benefits of making a class singleton?',
    answer: (
      <>
        <p>Ensures a single global coordinator instance (e.g. database connection pools, configuration managers), saving memory and preventing resource access conflicts.</p>
      </>
    ),
  },
  {
    id: 742,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How is polymorphism achieved in Java?',
    answer: (
      <>
        <p>By overloading methods (resolved at compile-time) or overriding virtual methods (resolved dynamically at runtime using subclass references).</p>
      </>
    ),
  },
  {
    id: 743,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can the main method be declared as private in Java?',
    answer: (
      <>
        <p>Yes, the code will compile, but the JVM will throw a runtime error (<code>NoSuchMethodError</code>) because the application entry point must be declared <code>public</code> to run.</p>
      </>
    ),
  },
  {
    id: 744,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is an object in Java?',
    answer: (
      <>
        <p>An instance of a class containing both state (fields) and behavior (methods), allocated in the JVM heap space.</p>
      </>
    ),
  },
  {
    id: 745,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is thread-safe in Java?',
    answer: (
      <>
        <p>A state where a class or method behaves correctly when accessed by multiple threads simultaneously, achieved using synchronization, locks, or volatile variables.</p>
      </>
    ),
  },
  {
    id: 746,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Java Main Method public static void main?',
    answer: (
      <>
        <p>The standard application entry point: <code>public</code> (accessible by JVM), <code>static</code> (called without instance), <code>void</code> (returns no values), and accepts arguments as <code>String[] args</code>.</p>
      </>
    ),
  },
  {
    id: 747,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the difference between Declaration & Definition in Java?',
    answer: (
      <>
        <ul>
          <li><strong>Declaration:</strong> Specifies the name, type, and signature of variables/methods without allocating storage or writing implementation.</li>
          <li><strong>Definition:</strong> Allocates memory for variables or provides the concrete body implementation for methods.</li>
        </ul>
      </>
    ),
  },
  {
    id: 748,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Method Overriding?',
    answer: (
      <>
        <p>A feature permitting a subclass to declare a method with the same name, return type, and parameter signature as a parent class method, providing a custom implementation.</p>
      </>
    ),
  },
  {
    id: 749,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the sleep() & wait() methods in Java?',
    answer: (
      <>
        <ul>
          <li><strong>Thread.sleep():</strong> Pauses the current executing thread for a specified duration. It does not release locks.</li>
          <li><strong>Object.wait():</strong> Puts the thread to sleep, releasing the object monitor lock. Wakes up when <code>notify()</code> or <code>notifyAll()</code> is called.</li>
        </ul>
      </>
    ),
  },
  {
    id: 750,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'When to use a transient keyword with a variable in Java?',
    answer: (
      <>
        <p>The <code>transient</code> modifier tells the JVM not to serialize the variable during object serialization, useful for sensitive data (like passwords) or temporary calculations.</p>
      </>
    ),
  },
  {
    id: 751,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What are assertions in Java, and what is their use?',
    answer: (
      <>
        <p><strong>Assertions</strong> (using the <code>assert</code> keyword) are debugging statements enabling developers to test assumptions about program state. If assertions are enabled (via <code>-ea</code> JVM flag) and the checked condition evaluates to false, an <code>AssertionError</code> is thrown.</p>
      </>
    ),
  },
  {
    id: 752,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Why threads are needed in Java?',
    answer: (
      <>
        <p>Threads allow concurrent execution within a single program context. This maximizes processor utilization, prevents background operations (like network API requests) from locking UI screens, and supports high-throughput parallel servers.</p>
      </>
    ),
  },
  {
    id: 753,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the difference between the Runnable interface & Thread class in Java?',
    answer: (
      <>
        <ul>
          <li><strong>Runnable:</strong> A functional interface defining a single <code>run()</code> method. Better practice as it allows class objects to inherit from other classes (avoiding Java's single inheritance restriction).</li>
          <li><strong>Thread:</strong> A full class representing an OS thread. Inheriting it restricts the subclass from extending other classes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 754,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is Time Slicing?',
    answer: (
      <>
        <p>A thread scheduling execution model where the CPU allocates a small fixed slice of time (quantum) to each runnable thread in round-robin sequence, creating the illusion of parallel execution.</p>
      </>
    ),
  },
  {
    id: 755,
    category: 'Core Java',
    difficulty: 'hard',
    question: 'Can you make an array volatile?',
    answer: (
      <>
        <p>Yes, you can declare an array variable <code>volatile</code>. However, the volatile modifier only applies to the array reference pointer itself; individual elements inside the array are NOT volatile and can still experience memory visibility issues.</p>
      </>
    ),
  },
  {
    id: 756,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'When does a class get garbage collected in Java?',
    answer: (
      <>
        <p>A class gets unloaded and garbage collected from JVM Metaspace only when:</p>
        <ol>
          <li>All instances of the class are garbage collected.</li>
          <li>The ClassLoader instance that loaded the class is garbage collected.</li>
          <li>The Class object itself is no longer referenced.</li>
        </ol>
      </>
    ),
  },
  {
    id: 757,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Mention the differences between the factory pattern & abstract factory pattern?',
    answer: (
      <>
        <ul>
          <li><strong>Factory Pattern:</strong> Creates instances of subclasses derived from a single common interface/class using a parameterized method.</li>
          <li><strong>Abstract Factory Pattern:</strong> A factory of factories. It creates families of related dependent objects without specifying concrete classes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 758,
    category: 'Core Java',
    difficulty: 'hard',
    question: 'How is the Observable class used?',
    answer: (
      <>
        <p>The <code>java.util.Observable</code> class (along with the <code>Observer</code> interface) implements the publish-subscribe pattern. An Observable object registers Observer delegates, automatically broadcasting updates via <code>notifyObservers()</code> when its state changes (deprecated since Java 9 in favor of the Flow API).</p>
      </>
    ),
  },
  {
    id: 759,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Explain the purpose of the Comparator interface in Java?',
    answer: (
      <>
        <p>To define custom sorting rules for objects, separate from their natural ordering. It contains a <code>compare(T o1, T o2)</code> method returning negative, zero, or positive integer bounds.</p>
      </>
    ),
  },
  {
    id: 760,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the impact of a private constructor?',
    answer: (
      <>
        <p>Declaring a class constructor <code>private</code> prevents external classes from instantiating it directly, commonly used to enforce Singleton classes, create factory methods, or define utility classes containing only static members.</p>
      </>
    ),
  },
  {
    id: 761,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What are the advantages of Java Sockets?',
    answer: (
      <>
        <p>They provide direct, low-overhead, two-way connection ports for real-time network programming, supporting standard TCP/IP and UDP protocols.</p>
      </>
    ),
  },
  {
    id: 762,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can an application with multiple classes have the main method?',
    answer: (
      <>
        <p>Yes. Any number of classes in a Java project can declare a <code>public static void main</code> entry point. You specify which main method to run when launching the application via the JVM command line.</p>
      </>
    ),
  },
  {
    id: 763,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Difference between HashMap & HashTable?',
    answer: (
      <>
        <ul>
          <li><strong>HashMap:</strong> Not synchronized (not thread-safe), permitting fast performance. Allows one null key and multiple null values.</li>
          <li><strong>HashTable:</strong> Synchronized (thread-safe), introducing lock overhead. Does not allow null keys or null values.</li>
        </ul>
      </>
    ),
  },
  {
    id: 764,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is a Priority Queue in Java?',
    answer: (
      <>
        <p>A Queue implementation where elements are ordered according to their natural priority (or via a custom Comparator) rather than FIFO sequence. The head element represents the minimum/maximum value.</p>
      </>
    ),
  },
  {
    id: 765,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'If a class has no modifiers, wherever could the class be accessed?',
    answer: (
      <>
        <p>If a class has no access modifiers (package-private/default visibility), it can be accessed only by other classes located within the same package namespace.</p>
      </>
    ),
  },
  {
    id: 766,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Explain the restrictions placed on the values of each case of a switch statement?',
    answer: (
      <>
        <p>The case values in a switch statement must satisfy three restrictions:</p>
        <ol>
          <li>They must be constant expressions (known at compile-time).</li>
          <li>Their data type must match the switch expression (char, byte, short, int, Character, Byte, Short, Integer, String, or Enum).</li>
          <li>They must be unique; duplicate case values are not allowed.</li>
        </ol>
      </>
    ),
  },
  {
    id: 767,
    category: 'Core Java',
    difficulty: 'hard',
    question: 'Can an anonymous class declare as implementing an interface & extending a superclass?',
    answer: (
      <>
        <p>No. The syntax of an anonymous class allows it to either extend a single class OR implement a single interface, but not both in its instantiation signature. E.g. <code>new SuperClass() &#123; ... &#125;</code> or <code>new Interface() &#123; ... &#125;</code>.</p>
      </>
    ),
  },
  {
    id: 768,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is an alternative to inheritance?',
    answer: (
      <>
        <p><strong>Composition</strong> (enclosing instance references of other classes as fields) is the primary alternative, promoting loose coupling and flexibility over inheritance hierarchy structures (representing "has-a" instead of "is-a").</p>
      </>
    ),
  },
  {
    id: 769,
    category: 'Core Java',
    difficulty: 'hard',
    question: 'What is the use of Void class in Java?',
    answer: (
      <>
        <p>The <code>java.lang.Void</code> class is an uninstantiable placeholder class that holds a reference to the Class object representing the primitive Java keyword <code>void</code>, commonly used in reflection or with generics like <code>Callable&lt;Void&gt;</code> to represent methods returning no value.</p>
      </>
    ),
  },
  {
    id: 770,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Locale in Java?',
    answer: (
      <>
        <p>A <code>Locale</code> object represents a specific geographical, political, or cultural region, used to format dates, times, currencies, and numbers to comply with local standards.</p>
      </>
    ),
  },
  {
    id: 771,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How many types of variables are there in Java?',
    answer: (
      <>
        <p>Java supports three main variable categories: Local variables (inside methods), Instance variables (inside classes, unique to instances), and Static/Class variables (shared across instances).</p>
      </>
    ),
  },
  {
    id: 772,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Mention one difference between break and continue statement.',
    answer: (
      <>
        <ul>
          <li><strong>break:</strong> Exits the enclosing loop statement immediately.</li>
          <li><strong>continue:</strong> Skips the remaining lines in the current iteration, starting the next loop cycle.</li>
        </ul>
      </>
    ),
  },
  {
    id: 773,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'How many ways to method overloading?',
    answer: (
      <>
        <p>Methods can be overloaded in two ways: changing the number of arguments, or changing the data types of arguments in the method signature.</p>
      </>
    ),
  },
  {
    id: 774,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is Constructor Overloading in Java?',
    answer: (
      <>
        <p>Declaring multiple constructors in a class with the same class name but different parameter lists, facilitating instance initialization in different ways.</p>
      </>
    ),
  },
  {
    id: 775,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the meaning of Constructor Chaining?',
    answer: (
      <>
        <p>A technique where one constructor calls another constructor of the same class (using <code>this()</code>) or parent class (using <code>super()</code>) sequentially, avoiding redundant setup code.</p>
      </>
    ),
  },
  {
    id: 776,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is Copy Constructor in Java?',
    answer: (
      <>
        <p>A constructor that initializes a new object instance using the values of another existing instance of the same class. E.g. <code>public MyClass(MyClass original) &#123; this.val = original.val; &#125;</code></p>
      </>
    ),
  },
  {
    id: 777,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is the String pool in Java?',
    answer: (
      <>
        <p>A storage area inside the JVM heap that caches string literal values. When a string literal is created, the JVM checks the pool first: if it exists, it returns the reference, saving heap space.</p>
      </>
    ),
  },
  {
    id: 778,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What do you mean by resuming, suspending, & stopping the thread?',
    answer: (
      <>
        <ul>
          <li><strong>suspending:</strong> Pausing thread execution temporarily (deprecated API).</li>
          <li><strong>resuming:</strong> Restarting execution of a suspended thread (deprecated API).</li>
          <li><strong>stopping:</strong> Terminating thread execution immediately (deprecated API due to inconsistent resource states).</li>
        </ul>
      </>
    ),
  },
  {
    id: 779,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the meaning of enums type-safe in Java?',
    answer: (
      <>
        <p>Java enums define a distinct type namespace. You cannot assign arbitrary integers or strings to enum variables; they can only take values declared inside the enum definition, preventing runtime mismatch errors.</p>
      </>
    ),
  },
  {
    id: 780,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'What is the difference between abstract class & interface?',
    answer: (
      <>
        <ul>
          <li><strong>Abstract Class:</strong> Can hold constructors, instance fields, and private/protected methods. Single class inheritance only.</li>
          <li><strong>Interface:</strong> Can only hold constants, default/static methods, and abstract method signatures. Supports multiple inheritance.</li>
        </ul>
      </>
    ),
  },
  {
    id: 781,
    category: 'Core Java',
    difficulty: 'easy',
    question: 'Can an abstract class have constructor?',
    answer: (
      <>
        <p>Yes. Abstract classes can declare constructors. They are called during instantiation of subclass objects using constructor chaining (<code>super()</code> calls) to initialize base fields.</p>
      </>
    ),
  },
  {
    id: 782,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is dynamic dispatch in Java?',
    answer: (
      <>
        <p>Dynamic dispatch is the mechanism where calls to overridden virtual methods are resolved at runtime based on the actual object instance type, rather than the reference pointer type.</p>
      </>
    ),
  },
  {
    id: 783,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is runtime polymorphism or dynamic method dispatch?',
    answer: (
      <>
        <p>The OOP process where a call to an overridden method is bound dynamically at runtime based on the class type of the object instance being referenced.</p>
      </>
    ),
  },
  {
    id: 784,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'What is Dynamic Binding?',
    answer: (
      <>
        <p>Binding where method calls are resolved at runtime (e.g. overridden methods), rather than compile-time based on reference types.</p>
      </>
    ),
  },
  {
    id: 785,
    category: 'Core Java',
    difficulty: 'medium',
    question: 'Can an overloaded method be overridden too?',
    answer: (
      <>
        <p>Yes. If a base class contains overloaded methods, derived classes can override any or all of those overloaded methods by providing custom implementations matching their signatures.</p>
      </>
    ),
  },
  {
    id: 786,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is a Data Structure?',
    answer: (
      <>
        <p>A <strong>Data Structure</strong> is a specialized format for organizing, processing, retrieving, and storing data in computer memory so it can be accessed and modified efficiently.</p>
      </>
    ),
  },
  {
    id: 787,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is an Array?',
    answer: (
      <>
        <p>An **Array** is a linear data structure that stores a collection of elements of the same data type in contiguous memory locations, allowing O(1) direct access using numerical indices.</p>
      </>
    ),
  },
  {
    id: 788,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is a Linked List?',
    answer: (
      <>
        <p>A **Linked List** is a linear data structure where elements (nodes) are not stored in contiguous memory. Instead, each node is an independent object containing data and a reference pointer (link) to the next node in the sequence.</p>
      </>
    ),
  },
  {
    id: 789,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is a Stack?',
    answer: (
      <>
        <p>A **Stack** is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Operations are restricted to the "top" of the stack: <code>push()</code> to insert and <code>pop()</code> to remove.</p>
      </>
    ),
  },
  {
    id: 790,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is LIFO?',
    answer: (
      <>
        <p><strong>LIFO (Last-In-First-Out)</strong> is a data processing order where the element added most recently is the first one to be removed. Example: A stack of dinner plates.</p>
      </>
    ),
  },
  {
    id: 791,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is FIFO?',
    answer: (
      <>
        <p><strong>FIFO (First-In-First-Out)</strong> is a data processing order where the element added first is the first one to be removed. Example: A queue of customers waiting in line.</p>
      </>
    ),
  },
  {
    id: 792,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is a Queue?',
    answer: (
      <>
        <p>A **Queue** is a linear data structure following the FIFO principle. Elements are inserted at the back (enqueue) and removed from the front (dequeue).</p>
      </>
    ),
  },
  {
    id: 793,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What are Binary Trees?',
    answer: (
      <>
        <p>A **Binary Tree** is a non-linear hierarchical data structure in which each parent node has at most two children, referred to as the left child and the right child.</p>
      </>
    ),
  },
  {
    id: 794,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is Recursion?',
    answer: (
      <>
        <p>A programming technique where a function calls itself directly or indirectly to solve a larger problem by breaking it down into smaller sub-problems. It requires a base case to terminate execution.</p>
      </>
    ),
  },
  {
    id: 795,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is the OOPs concept?',
    answer: (
      <>
        <p><strong>Object-Oriented Programming (OOP)</strong> is a programming paradigm organized around "objects" rather than actions, and data rather than logic, to build modular and reusable software structures.</p>
      </>
    ),
  },
  {
    id: 796,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What are the concepts introduced in OOPs?',
    answer: (
      <>
        <p>OOP is built on four core pillars:</p>
        <ul>
          <li><strong>Encapsulation:</strong> Wrapping data and methods into a single class unit, restricting direct access.</li>
          <li><strong>Abstraction:</strong> Hiding internal complexities and exposing only essential interface details.</li>
          <li><strong>Inheritance:</strong> Reusing code by letting child classes acquire properties from parent classes.</li>
          <li><strong>Polymorphism:</strong> Allowing objects to behave differently depending on runtime context.</li>
        </ul>
      </>
    ),
  },
  {
    id: 797,
    category: 'Coding',
    difficulty: 'medium',
    question: 'Explain what a Binary Search Tree?',
    answer: (
      <>
        <p>A **Binary Search Tree (BST)** is a node-based binary tree data structure with the following properties:</p>
        <ul>
          <li>The left subtree of a node contains only keys less than the node's key.</li>
          <li>The right subtree of a node contains only keys greater than the node's key.</li>
          <li>Left and right subtrees must also be binary search trees.</li>
        </ul>
      </>
    ),
  },
  {
    id: 798,
    category: 'Coding',
    difficulty: 'medium',
    question: 'Explain Doubly Linked Lists?',
    answer: (
      <>
        <p>A **Doubly Linked List** is a linked list where each node contains three fields: the data value, a pointer to the next node, and a pointer to the previous node, supporting bidirectional traversal.</p>
      </>
    ),
  },
  {
    id: 799,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is a Graph?',
    answer: (
      <>
        <p>A **Graph** is a non-linear data structure consisting of a finite set of vertices (or nodes) and a set of edges connecting pairs of vertices, representing complex network topologies.</p>
      </>
    ),
  },
  {
    id: 800,
    category: 'Coding',
    difficulty: 'medium',
    question: 'Differentiate between linear and non-linear data structure?',
    answer: (
      <>
        <ul>
          <li><strong>Linear Data Structures:</strong> Elements are arranged sequentially (in a single line) where each element is connected to its previous and next element (e.g., Arrays, Stacks, Queues, Linked Lists).</li>
          <li><strong>Non-Linear Data Structures:</strong> Elements are organized hierarchically or in interconnected networks (e.g., Trees, Graphs).</li>
        </ul>
      </>
    ),
  },
  {
    id: 801,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is a Deque?',
    answer: (
      <>
        <p>A <strong>Deque (Double-Ended Queue)</strong> is a linear sequence structure that supports efficient O(1) insertions and removals at both ends (front and back).</p>
      </>
    ),
  },
  {
    id: 802,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What’s the difference between Stack and Array?',
    answer: (
      <>
        <ul>
          <li><strong>Array:</strong> Fixed-size, index-based direct access data structure supporting O(1) random retrieval anywhere.</li>
          <li><strong>Stack:</strong> Sequential access data structure restricted to push/pop operations at the top, following LIFO access.</li>
        </ul>
      </>
    ),
  },
  {
    id: 803,
    category: 'Coding',
    difficulty: 'medium',
    question: 'How does variable declaration affect memory?',
    answer: (
      <>
        <p>Declaring a variable instructs the compiler to reserve a specific amount of memory space based on the variable's data type (e.g., 4 bytes for an integer) and associates that memory address with the variable name.</p>
      </>
    ),
  },
  {
    id: 804,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What are dynamic data structures?',
    answer: (
      <>
        <p>Data structures that can grow or shrink in size dynamically in memory during program execution (e.g., Linked Lists, Stacks, dynamic arrays like ArrayList), as opposed to fixed-size structures.</p>
      </>
    ),
  },
  {
    id: 805,
    category: 'Coding',
    difficulty: 'easy',
    question: 'How to get the matching characters in a string?',
    answer: (
      <>
        <p>By using a hashing lookup structure (like a Set or boolean array) to record characters encountered while scanning the string, identifying duplicates instantly.</p>
      </>
    ),
  },
  {
    id: 806,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is the time complexity of binary search?',
    answer: (
      <>
        <p>Binary search has a logarithmic time complexity of <strong>O(log n)</strong>, as it divides the search space in half with each step.</p>
      </>
    ),
  },
  {
    id: 807,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is the difference between a linked list and an array?',
    answer: (
      <>
        <ul>
          <li><strong>Array:</strong> Contiguous memory layout. O(1) lookup speed. Insertion and deletion are slow, O(n), because elements must be shifted.</li>
          <li><strong>Linked List:</strong> Non-contiguous memory. O(n) lookup speed. Insertion and deletion are fast, O(1), by updating pointers.</li>
        </ul>
      </>
    ),
  },
  {
    id: 808,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is the difference between a stack and a queue?',
    answer: (
      <>
        <ul>
          <li><strong>Stack:</strong> Follows Last-In-First-Out (LIFO) access. Elements are inserted and removed at the same end.</li>
          <li><strong>Queue:</strong> Follows First-In-First-Out (FIFO) access. Elements are inserted at the rear and removed at the front.</li>
        </ul>
      </>
    ),
  },
  {
    id: 809,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is the difference between an abstract class and an interface in object-oriented programming?',
    answer: (
      <>
        <ul>
          <li><strong>Abstract Class:</strong> Can contain instance fields, concrete methods, and constructors. Supports single inheritance. Represent an "is-a" relationship.</li>
          <li><strong>Interface:</strong> Can only contain constant variables and abstract/default method declarations. Supports multiple inheritance. Represents a "can-do" contract.</li>
        </ul>
      </>
    ),
  },
  {
    id: 810,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is debugging?',
    answer: (
      <>
        <p>The systematic process of locating, analyzing, and correcting bugs, errors, or anomalies in a program's source code to ensure it behaves correctly.</p>
      </>
    ),
  },
  {
    id: 811,
    category: 'Coding',
    difficulty: 'easy',
    question: 'Explain the concept of polymorphism in object-oriented programming.',
    answer: (
      <>
        <p>Polymorphism allows objects of different classes to respond to the same method call differently. It is implemented via method overloading (static/compile-time) and method overriding (dynamic/runtime).</p>
      </>
    ),
  },
  {
    id: 812,
    category: 'Coding',
    difficulty: 'medium',
    question: 'Explain the difference between a shallow copy and a deep copy.',
    answer: (
      <>
        <ul>
          <li><strong>Shallow Copy:</strong> Copies the top-level fields of an object. Reference variables point to the same memory addresses as the source object.</li>
          <li><strong>Deep Copy:</strong> Creates a complete copy of the object and all sub-objects referenced, making them completely independent.</li>
        </ul>
      </>
    ),
  },
  {
    id: 813,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is the time complexity of the quicksort algorithm?',
    answer: (
      <>
        <ul>
          <li><strong>Best/Average Case:</strong> O(n log n) when the pivot divides the array reasonably evenly.</li>
          <li><strong>Worst Case:</strong> O(n²) when the pivot chosen is consistently the smallest or largest element (e.g. sorted arrays).</li>
        </ul>
      </>
    ),
  },
  {
    id: 814,
    category: 'Coding',
    difficulty: 'easy',
    question: 'How to reverse a string?',
    answer: (
      <>
        <p>By using the two-pointer approach swapping characters from front and back, or using helper classes (e.g. <code>new StringBuilder(str).reverse().toString()</code>).</p>
      </>
    ),
  },
  {
    id: 815,
    category: 'Coding',
    difficulty: 'easy',
    question: 'How to find the non-matching characters in a string?',
    answer: (
      <>
        <p>By tracking characters in a frequency map or boolean lookup list, filtering for entries that have a frequency count of exactly one.</p>
      </>
    ),
  },
  {
    id: 816,
    category: 'Coding',
    difficulty: 'easy',
    question: 'How can you find the maximum element in an array?',
    answer: (
      <>
        <p>By initializing a variable to the first element of the array, traversing the remaining elements sequentially, and updating the variable whenever a larger value is found.</p>
      </>
    ),
  },
  {
    id: 817,
    category: 'Coding',
    difficulty: 'easy',
    question: 'How to calculate the number of consonants and vowels in a string?',
    answer: (
      <>
        <p>By converting the string to lowercase and iterating through each character, checking if it is an alphabetic vowel (a, e, i, o, u) or a consonant, increments separate counters accordingly.</p>
      </>
    ),
  },
  {
    id: 818,
    category: 'Coding',
    difficulty: 'medium',
    question: 'How to determine if the two given strings are anagram of each other?',
    answer: (
      <>
        <p>By sorting the characters of both strings and comparing if they are identical, or by verifying that their character frequency count distributions match exactly.</p>
      </>
    ),
  },
  {
    id: 819,
    category: 'Coding',
    difficulty: 'easy',
    question: 'How to check if a string is a palindrome?',
    answer: (
      <>
        <p>By comparing characters from both ends of the string moving inward (using two pointers) and verifying that all matching pairs are identical.</p>
      </>
    ),
  },
  {
    id: 820,
    category: 'Coding',
    difficulty: 'easy',
    question: 'How to count the occurrence of a particular character in a string?',
    answer: (
      <>
        <p>By iterating through the string and incrementing a counter whenever the target character is matched, or by calculating the length difference: <code>str.length() - str.replace("c", "").length()</code>.</p>
      </>
    ),
  },
  {
    id: 821,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is the best way to find whether an integer is even or odd?',
    answer: (
      <>
        <p>Using the bitwise AND operator, which is faster than division/modulus: <code>(num &amp; 1) == 0</code> is even, otherwise it is odd.</p>
      </>
    ),
  },
  {
    id: 822,
    category: 'Coding',
    difficulty: 'medium',
    question: 'Explain how can you print a Fibonacci sequence using recursion?',
    answer: (
      <>
        <p>By declaring a recursive function <code>fib(n) = fib(n-1) + fib(n-2)</code> with base cases <code>fib(0) = 0</code> and <code>fib(1) = 1</code>, and invoking it in a loop for the sequence limit.</p>
      </>
    ),
  },
  {
    id: 823,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is a conditional statement?',
    answer: (
      <>
        <p>A control flow statement (e.g. <code>if-else</code>, <code>switch</code>) that executes specific blocks of code depending on whether a boolean expression evaluates to true or false.</p>
      </>
    ),
  },
  {
    id: 824,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What are binary search trees?',
    answer: (
      <>
        <p>A BST is a node-based binary tree data structure where all nodes in the left subtree have values less than the parent node, and all nodes in the right subtree have values greater than the parent node.</p>
      </>
    ),
  },
  {
    id: 825,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What’s the purpose of loop in computer programming?',
    answer: (
      <>
        <p>To repeatedly execute a block of code a specified number of times or until a termination condition is met, reducing code redundancy.</p>
      </>
    ),
  },
  {
    id: 826,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What different types of loops are used in programming?',
    answer: (
      <>
        <p>Programming languages utilize three standard types of loops:</p>
        <ul>
          <li><strong>For Loop:</strong> Used when the exact number of iterations is known beforehand.</li>
          <li><strong>While Loop:</strong> Used when looping continues until a boolean expression evaluates to false, evaluating the condition before each loop.</li>
          <li><strong>Do-While Loop:</strong> Similar to a while loop, but guarantees that the loop block is executed at least once before checking the condition.</li>
        </ul>
      </>
    ),
  },
  {
    id: 827,
    category: 'Coding',
    difficulty: 'easy',
    question: 'How to swap two numbers without using a third variable?',
    answer: (
      <>
        <p>Using basic arithmetic operations:</p>
        <pre><code>
          a = a + b;{'\n'}
          b = a - b;{'\n'}
          a = a - b;
        </code></pre>
        <p>Alternatively, using bitwise XOR operations:</p>
        <pre><code>
          a = a ^ b;{'\n'}
          b = a ^ b;{'\n'}
          a = a ^ b;
        </code></pre>
      </>
    ),
  },
  {
    id: 828,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is Flask?',
    answer: (
      <>
        <p><strong>Flask</strong> is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries, exposing a simple and lightweight foundation for developers.</p>
      </>
    ),
  },
  {
    id: 829,
    category: 'Coding',
    difficulty: 'medium',
    question: 'Explain the key features of a Flask?',
    answer: (
      <>
        <p>Key features include: an integrated development server and debugger, built-in support for unit testing, RESTful request dispatching, Jinja2 templating, and full WSGI compliance.</p>
      </>
    ),
  },
  {
    id: 830,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is Django?',
    answer: (
      <>
        <p><strong>Django</strong> is a high-level, batteries-included Python web framework that encourages rapid development and clean, pragmatic design, offering standard built-in configurations for auth, admin, and ORM.</p>
      </>
    ),
  },
  {
    id: 831,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What are the advantages of Django?',
    answer: (
      <>
        <p>Advantages include: high security (preventing SQL injection and XSS out-of-the-box), scalability, excellent documentation, rapid development flow, and a rich ecosystem of third-party plugins.</p>
      </>
    ),
  },
  {
    id: 832,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is the difference between Flask and Django?',
    answer: (
      <>
        <ul>
          <li><strong>Flask:</strong> A micro-framework. Highly flexible, lightweight, and lets developers pick their own database ORMs and structures.</li>
          <li><strong>Django:</strong> A monolithic, "batteries-included" framework. Comes with a built-in admin panel, ORM, authentication, and form validation templates.</li>
        </ul>
      </>
    ),
  },
  {
    id: 833,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is the difference between compiler and interpreter?',
    answer: (
      <>
        <ul>
          <li><strong>Compiler:</strong> Translates the entire source code into machine code at once before execution (e.g. C, C++). Faster execution.</li>
          <li><strong>Interpreter:</strong> Translates and executes source code line-by-line during runtime (e.g. Python, Ruby). Easier debugging.</li>
        </ul>
      </>
    ),
  },
  {
    id: 834,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is an operating system?',
    answer: (
      <>
        <p>An <strong>Operating System (OS)</strong> is system software that manages computer hardware and software resources, providing common services for computer programs.</p>
      </>
    ),
  },
  {
    id: 835,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What are the key features of an operating system?',
    answer: (
      <>
        <p>Key services include: Processor management, Memory management (RAM), File system organization, Device I/O control, Security management, and Job scheduling.</p>
      </>
    ),
  },
  {
    id: 836,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is the difference between a process and a thread?',
    answer: (
      <>
        <ul>
          <li><strong>Process:</strong> An independent executing program instance with its own allocated private memory space. High context-switch overhead.</li>
          <li><strong>Thread:</strong> A lightweight sub-segment of a process. Multiple threads share the same process memory space, communicating efficiently with low overhead.</li>
        </ul>
      </>
    ),
  },
  {
    id: 837,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is multitasking?',
    answer: (
      <>
        <p>The logical extension of multiprogramming where the CPU executes multiple tasks (processes) concurrently by rapidly switching between them, giving users the impression of parallel running programs.</p>
      </>
    ),
  },
  {
    id: 838,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is multiprocessing?',
    answer: (
      <>
        <p>A hardware-based computing model using two or more physical CPUs (processors) within a single computer system to execute instructions in parallel.</p>
      </>
    ),
  },
  {
    id: 839,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is multithreading?',
    answer: (
      <>
        <p>A software execution model permitting a single process to execute multiple threads concurrently to improve application performance (e.g. background downloads).</p>
      </>
    ),
  },
  {
    id: 840,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is deadlock?',
    answer: (
      <>
        <p>A multi-threading situation where two or more threads are blocked indefinitely, each waiting to acquire a lock held by the other thread, freezing execution flow.</p>
      </>
    ),
  },
  {
    id: 841,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is database management system (DBMS)?',
    answer: (
      <>
        <p>A **DBMS** is system software for creating, managing, and retrieving database records, ensuring security, integrity, and transaction properties (ACID).</p>
      </>
    ),
  },
  {
    id: 842,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What are the types of DBMS?',
    answer: (
      <>
        <p>DBMS classifications include: Relational DBMS (RDBMS), NoSQL (Document, Key-Value, Graph, Columnar), Hierarchical databases, and Network databases.</p>
      </>
    ),
  },
  {
    id: 843,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is SQL?',
    answer: (
      <>
        <p><strong>SQL (Structured Query Language)</strong> is the standard domain-specific language used to query, manipulate, and define tables in relational database management systems.</p>
      </>
    ),
  },
  {
    id: 844,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is NoSQL?',
    answer: (
      <>
        <p><strong>NoSQL (Not Only SQL)</strong> databases store data in non-tabular formats (like JSON documents, wide columns, or graphs), optimized for high write scale, horizontal scaling, and flexible schemas.</p>
      </>
    ),
  },
  {
    id: 845,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is the difference between SQL and NoSQL?',
    answer: (
      <>
        <ul>
          <li><strong>SQL:</strong> Relational structure. Fixed schema. Scales vertically (faster CPU/RAM). Guarantees strict ACID consistency.</li>
          <li><strong>NoSQL:</strong> Non-relational (documents, key-value). Dynamic schema. Scales horizontally (adding more nodes). Adheres to BASE consistency properties.</li>
        </ul>
      </>
    ),
  },
  {
    id: 846,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is Dynamic memory allocation?',
    answer: (
      <>
        <p>Allocating system memory to a program at runtime (e.g. using <code>malloc()</code> in C or the <code>new</code> operator in Java/C++), rather than assigning fixed memory during compilation.</p>
      </>
    ),
  },
  {
    id: 847,
    category: 'Coding',
    difficulty: 'medium',
    question: 'How does dynamic memory allocation help in managing data?',
    answer: (
      <>
        <p>It avoids wasteful over-allocation and constraints of fixed buffer sizes, permitting applications to request exact memory spaces at runtime as workloads scale.</p>
      </>
    ),
  },
  {
    id: 848,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is the difference between VOID and NULL?',
    answer: (
      <>
        <ul>
          <li><strong>VOID:</strong> A type specifier indicating that a function returns no value or that a pointer is type-less (<code>void*</code>).</li>
          <li><strong>NULL:</strong> A constant value representing a pointer or reference that does not point to any valid object or memory address.</li>
        </ul>
      </>
    ),
  },
  {
    id: 849,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is data abstraction?',
    answer: (
      <>
        <p>The process of exposing only the essential structure of data entities while hiding complex implementation details, implemented using classes, interfaces, and header files.</p>
      </>
    ),
  },
  {
    id: 850,
    category: 'Coding',
    difficulty: 'medium',
    question: 'Why String is final or immutable in Java programming?',
    answer: (
      <>
        <p>Java Strings are immutable to enable String Pool caching (saving heap space), guarantee security (preventing connection details from modification), and provide built-in thread safety.</p>
      </>
    ),
  },
  {
    id: 851,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is the time complexity of the binary search algorithm?',
    answer: (
      <>
        <p>Logarithmic time complexity <strong>O(log n)</strong>, as it divides the search arrays in half recursively.</p>
      </>
    ),
  },
  {
    id: 852,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is polymorphism in object-oriented programming.',
    answer: (
      <>
        <p>The ability of different objects to respond uniquely to the same interface method call, achieved via overloading and overriding.</p>
      </>
    ),
  },
  {
    id: 853,
    category: 'Coding',
    difficulty: 'easy',
    question: 'Name different types of constants.',
    answer: (
      <>
        <p>Constants are classified into: Numeric constants (Integer constants, Real/Floating-point constants) and Character constants (Single character constants, String constants).</p>
      </>
    ),
  },
  {
    id: 854,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What are numeric constants?',
    answer: (
      <>
        <p>Literal numerical values that cannot be modified during program execution (e.g. integer literals like <code>100</code>, or floating point literals like <code>3.14159</code>).</p>
      </>
    ),
  },
  {
    id: 855,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What are string constants?',
    answer: (
      <>
        <p>A sequence of characters enclosed in double quotes (e.g. <code>"Hello World"</code>) stored in static read-only memory namespaces.</p>
      </>
    ),
  },
  {
    id: 856,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is graph?',
    answer: (
      <>
        <p>A mathematical non-linear structure composed of a set of nodes (vertices) connected by relational links (edges), representing networks.</p>
      </>
    ),
  },
  {
    id: 857,
    category: 'Coding',
    difficulty: 'easy',
    question: 'How to implement Binary Search?',
    answer: (
      <>
        <p>By defining two boundary pointers (<code>low</code>, <code>high</code>) on a sorted array, computing the midpoint index, comparing target values, and shifting boundaries recursively or iteratively.</p>
      </>
    ),
  },
  {
    id: 858,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is overloading and overriding?',
    answer: (
      <>
        <ul>
          <li><strong>Overloading:</strong> Creating multiple methods in the same class with identical names but different argument parameters.</li>
          <li><strong>Overriding:</strong> Redefining a method in a child subclass with matching signatures to override base class implementations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 859,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What are operators?',
    answer: (
      <>
        <p>Special symbols instructing compilers to perform specific mathematical, logical, relational, or bitwise manipulations on variable operands.</p>
      </>
    ),
  },
  {
    id: 860,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What are the different types of operators?',
    answer: (
      <>
        <p>Operator classifications include: Arithmetic operators (<code>+, -, *, /, %</code>), Relational operators (<code>==, !=, &lt;, &gt;</code>), Logical operators (<code>&&, ||, !</code>), Bitwise operators, and Assignment operators.</p>
      </>
    ),
  },
  {
    id: 861,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is subroutine?',
    answer: (
      <>
        <p>A sequence of program instructions performing a specific sub-task, packaged as a unit. Also referred to as a function, procedure, or method.</p>
      </>
    ),
  },
  {
    id: 862,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What are the key characteristics of Subroutines?',
    answer: (
      <>
        <p>Characteristics include: encapsulation of tasks, execution entry and return control structures, parameter arguments passing, and local variable scoping.</p>
      </>
    ),
  },
  {
    id: 863,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What are arithmetic operations?',
    answer: (
      <>
        <p>Standard mathematical calculations performed on numerical operands, including addition, subtraction, multiplication, division, and modulus operations.</p>
      </>
    ),
  },
  {
    id: 864,
    category: 'Coding',
    difficulty: 'easy',
    question: 'What is the purpose of arithmetic operations?',
    answer: (
      <>
        <p>To calculate numerical expressions, adjust iteration loop counters, track dimensions, and evaluate mathematical algorithms.</p>
      </>
    ),
  },
  {
    id: 865,
    category: 'Coding',
    difficulty: 'medium',
    question: 'What is low-level programming?',
    answer: (
      <>
        <p>Writing instructions close to the hardware architecture (e.g., Assembly language, Machine code) without abstracting processor registers and memory configurations.</p>
      </>
    ),
  },
  {
    id: 866,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'Define Cybersecurity?',
    answer: (
      <>
        <p><strong>Cybersecurity</strong> is the practice of protecting computer systems, networks, servers, devices, and data from unauthorized digital attacks, damage, or theft.</p>
      </>
    ),
  },
  {
    id: 867,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is Cryptography?',
    answer: (
      <>
        <p><strong>Cryptography</strong> is the practice and study of securing communication and data from adversaries by translating plaintext data into unreadable ciphertext formats using mathematical keys.</p>
      </>
    ),
  },
  {
    id: 868,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the difference between Threat, Vulnerability, and Risk?',
    answer: (
      <>
        <ul>
          <li><strong>Threat:</strong> Any potential event or action that could cause harm or compromise a system (e.g., malware, hacker).</li>
          <li><strong>Vulnerability:</strong> A weakness or flaw in system code, hardware, or policies that can be exploited by a threat (e.g., an unpatched software bug).</li>
          <li><strong>Risk:</strong> The likelihood combined with the potential impact of a threat successfully exploiting a vulnerability (Risk = Threat × Vulnerability × Impact).</li>
        </ul>
      </>
    ),
  },
  {
    id: 869,
    category: 'Cyber Security',
    difficulty: 'hard',
    question: 'What is Cross-Site Scripting and how it can be prevented?',
    answer: (
      <>
        <p><strong>Cross-Site Scripting (XSS)</strong> is a vulnerability where malicious scripts are injected into trusted web applications, executing in target client browsers. It is prevented by:</p>
        <ul>
          <li>Strict context-aware input validation and sanitization.</li>
          <li>HTML, JS, and CSS output encoding before rendering values.</li>
          <li>Implementing a strong Content Security Policy (CSP) header.</li>
        </ul>
      </>
    ),
  },
  {
    id: 870,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is a Botnet?',
    answer: (
      <>
        <p>A **Botnet** is a network of compromised computer systems or IoT devices ("bots" or "zombies") infected with malware and controlled remotely by a threat actor (botmaster) to launch DDoS attacks, distribute spam, or steal credentials.</p>
      </>
    ),
  },
  {
    id: 871,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is a CIA triad?',
    answer: (
      <>
        <p>The **CIA Triad** is the core foundational model of security engineering:</p>
        <ul>
          <li><strong>Confidentiality:</strong> Guaranteeing that data is accessible only to authorized users.</li>
          <li><strong>Integrity:</strong> Protecting data from unauthorized modification or corruption.</li>
          <li><strong>Availability:</strong> Ensuring systems and services remain operational and accessible to users when needed.</li>
        </ul>
      </>
    ),
  },
  {
    id: 872,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the difference between hashing and encryption?',
    answer: (
      <>
        <ul>
          <li><strong>Hashing:</strong> A one-way mathematical function translating input data into a fixed-length string. It cannot be reversed (e.g. SHA-256), used for integrity and password storage.</li>
          <li><strong>Encryption:</strong> A two-way function converting data into ciphertext using an encryption algorithm and key. It can be decrypted back to plaintext using the corresponding key.</li>
        </ul>
      </>
    ),
  },
  {
    id: 873,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the use of a firewall and how it can be implemented?',
    answer: (
      <>
        <p>A <strong>Firewall</strong> monitors and controls incoming and outgoing network traffic based on predetermined security rules, creating a barrier between trusted and untrusted networks. It is implemented as hardware appliances, software running on servers, or host-based operating system configurations.</p>
      </>
    ),
  },
  {
    id: 874,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What are the benefits of Cyber Security?',
    answer: (
      <>
        <p>Benefits include: protecting data assets and intellectual property, maintaining business operational continuity, complying with industry regulations (GDPR, HIPAA), and retaining customer trust.</p>
      </>
    ),
  },
  {
    id: 875,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What do you mean by honeypots?',
    answer: (
      <>
        <p>A **Honeypot** is a decoy system, network, or data repository configured with vulnerabilities to attract cyberattackers. It serves as an early-warning intrusion detection mechanism and allows security teams to study attack methodologies.</p>
      </>
    ),
  },
  {
    id: 876,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'Differentiate between Vulnerability Assessment and Penetration Testing.',
    answer: (
      <>
        <ul>
          <li><strong>Vulnerability Assessment:</strong> A passive, automated scan of systems to identify and catalog known security weaknesses, returning a prioritized list of vulnerabilities.</li>
          <li><strong>Penetration Testing:</strong> An active, authorized simulation of a real cyberattack to exploit identified vulnerabilities and test system defenses.</li>
        </ul>
      </>
    ),
  },
  {
    id: 877,
    category: 'Cyber Security',
    difficulty: 'hard',
    question: 'What do you mean by a Null Session?',
    answer: (
      <>
        <p>A **Null Session** is an anonymous connection established with an SMB (Server Message Block) port on a Windows system without providing a username, password, or security credentials, historically exploited to harvest system usernames, shares, and SID details.</p>
      </>
    ),
  },
  {
    id: 878,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What are the common types of cyber security attacks?',
    answer: (
      <>
        <p>Common attacks include: Phishing, Ransomware, Man-in-the-Middle (MITM), Distributed Denial of Service (DDoS), SQL Injection, Cross-Site Scripting (XSS), and Social Engineering.</p>
      </>
    ),
  },
  {
    id: 879,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What do you mean by Shoulder Surfing?',
    answer: (
      <>
        <p>A physical social engineering technique where threat actors look over a user's shoulder to capture passwords, PINs, or confidential data entered on laptops, ATMs, or keyboards.</p>
      </>
    ),
  },
  {
    id: 880,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What do you mean by Man-in-the-Middle Attack?',
    answer: (
      <>
        <p>A **Man-in-the-Middle (MITM)** attack is where an attacker intercepts, relays, and potentially alters communication between two nodes without their knowledge (e.g. ARP poisoning or rogue Wi-Fi hotspots).</p>
      </>
    ),
  },
  {
    id: 881,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What do you mean by a DDoS attack? How can you prevent it?',
    answer: (
      <>
        <p>A <strong>DDoS (Distributed Denial of Service)</strong> attack floods system servers with a massive volume of traffic from distributed botnets to disrupt service availability. Prevention includes:</p>
        <ul>
          <li>Using CDNs (Content Delivery Networks) to distribute traffic.</li>
          <li>Deploying dedicated DDoS mitigation appliances (scrubbing centers).</li>
          <li>Configuring rate-limiting and firewall ACLs on borders.</li>
        </ul>
      </>
    ),
  },
  {
    id: 882,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is traceroute? Why is it used?',
    answer: (
      <>
        <p>A network diagnostic command utility that displays the path (hops) and transit delays of packets traversing an IP network, useful for troubleshooting network routing issues and identifying firewall drop-off points.</p>
      </>
    ),
  },
  {
    id: 883,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What steps will you take to secure a server?',
    answer: (
      <>
        <p>Best practices for server hardening include:</p>
        <ol>
          <li>Disable unused services, ports, and default user accounts.</li>
          <li>Apply security patches and OS updates regularly.</li>
          <li>Enforce multi-factor authentication (MFA) and SSH key-based logins.</li>
          <li>Configure Host-based firewalls and Intrusion Prevention Systems (IPS).</li>
          <li>Enable logging, auditing, and secure off-site log shipping.</li>
        </ol>
      </>
    ),
  },
  {
    id: 884,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is Port Scanning?',
    answer: (
      <>
        <p>A reconnaissance technique that probes a target server IP to identify active open TCP/UDP network ports and discover running services and operating system versions.</p>
      </>
    ),
  },
  {
    id: 885,
    category: 'Cyber Security',
    difficulty: 'hard',
    question: 'What do you mean by ARP poisoning?',
    answer: (
      <>
        <p>An attack where malicious ARP packets are broadcasted onto a local area network to link an attacker's MAC address with the IP address of a legitimate gateway, redirecting network traffic to the attacker.</p>
      </>
    ),
  },
  {
    id: 886,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What are the three main goals of cybersecurity?',
    answer: (
      <>
        <p>The three core objectives are maintaining **Confidentiality** (data privacy), **Integrity** (data reliability), and **Availability** (systems uptime), forming the CIA Triad.</p>
      </>
    ),
  },
  {
    id: 887,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is encryption?',
    answer: (
      <>
        <p>The process of using cryptographic algorithms and keys to translate readable plaintext into unreadable ciphertext to prevent unauthorized access.</p>
      </>
    ),
  },
  {
    id: 888,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is vulnerability?',
    answer: (
      <>
        <p>A security flaw, design weakness, or configuration error present in code or infrastructure that exposes the system to compromise if exploited by a threat actor.</p>
      </>
    ),
  },
  {
    id: 889,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is penetration testing?',
    answer: (
      <>
        <p>An authorized, active cybersecurity assessment where ethical hackers attempt to exploit vulnerabilities in application logic or networks to test response procedures.</p>
      </>
    ),
  },
  {
    id: 890,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is a DDoS attack?',
    answer: (
      <>
        <p>A Distributed Denial of Service attack, which coordinates multiple compromised computer nodes to flood a target server with garbage traffic, crashing web services.</p>
      </>
    ),
  },
  {
    id: 891,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is social engineering?',
    answer: (
      <>
        <p>A manipulation technique that exploits human psychology to trick users into disclosing credentials, downloading malicious attachments, or granting system access.</p>
      </>
    ),
  },
  {
    id: 892,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is phishing?',
    answer: (
      <>
        <p>A social engineering vector where attackers send deceptive emails or messages masquerading as trusted organizations to trick recipients into entering credentials or downloading malware.</p>
      </>
    ),
  },
  {
    id: 893,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is ransomware?',
    answer: (
      <>
        <p>A class of malware that encrypts files on infected client systems, demanding a cryptocurrency ransom payment from the victim in exchange for the decryption key.</p>
      </>
    ),
  },
  {
    id: 894,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is multi-factor authentication (MFA)?',
    answer: (
      <>
        <p>An access control security control requiring users to verify their identity using at least two independent factors: something you know (password), something you have (OTP token), or something you are (biometrics).</p>
      </>
    ),
  },
  {
    id: 895,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is a security incident?',
    answer: (
      <>
        <p>An event that indicates system systems or data might have been compromised, violating established organizational security policies.</p>
      </>
    ),
  },
  {
    id: 896,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is a security policy?',
    answer: (
      <>
        <p>A formal document outlining rules, behavioral guidelines, and infrastructure controls to protect an organization's technology and information assets.</p>
      </>
    ),
  },
  {
    id: 897,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is an Intrusion Detection System (IDS)?',
    answer: (
      <>
        <p>A software utility or hardware appliance that monitors network or system activities for malicious actions or policy violations, generating alerts to warn security teams.</p>
      </>
    ),
  },
  {
    id: 898,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is encryption key management?',
    answer: (
      <>
        <p>The practice of generating, exchanging, storing, rotating, and destroying cryptographic keys securely throughout their lifecycle to maintain data confidentiality.</p>
      </>
    ),
  },
  {
    id: 899,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the concept of defense-in-depth?',
    answer: (
      <>
        <p>A security strategy employing multiple layered security controls (physical, administrative, and technical) across an IT infrastructure, ensuring that if one layer fails, subsequent layers defend the asset.</p>
      </>
    ),
  },
  {
    id: 900,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is a Security Information and Event Management (SIEM) system?',
    answer: (
      <>
        <p>A software platform that aggregates, correlates, and analyzes security logs from servers, firewalls, and applications across an organization to detect anomalies and trigger real-time alerts.</p>
      </>
    ),
  },
  {
    id: 901,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the role of a Security Operations Center (SOC)?',
    answer: (
      <>
        <p>A <strong>SOC (Security Operations Center)</strong> is a centralized facility housing an information security team responsible for monitoring, detecting, analyzing, and responding to cybersecurity incidents on an organizational scale 24/7/365.</p>
      </>
    ),
  },
  {
    id: 902,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the concept of threat intelligence?',
    answer: (
      <>
        <p><strong>Threat Intelligence</strong> is evidence-based knowledge (e.g. context, mechanisms, indicators of compromise) about existing or emerging hazards to IT assets, used to inform security decisions and block attacks proactively.</p>
      </>
    ),
  },
  {
    id: 903,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is the role of encryption in data protection?',
    answer: (
      <>
        <p>Encryption protects data confidentiality. Even if database files or backup tapes are stolen by threat actors, they remain unreadable without access to the proper decryption keys.</p>
      </>
    ),
  },
  {
    id: 904,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is a Security Assessment?',
    answer: (
      <>
        <p>A systematic review of system architectures, policies, and technical controls to evaluate the organization's security posture and identify compliance gaps.</p>
      </>
    ),
  },
  {
    id: 905,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What are the differences between vulnerability scanning and penetration testing?',
    answer: (
      <>
        <ul>
          <li><strong>Vulnerability Scanning:</strong> Automated passive scanning that identifies and reports known vulnerabilities. Does not exploit them.</li>
          <li><strong>Penetration Testing:</strong> A manual, active security simulation to exploit vulnerabilities and verify the severity of potential impacts.</li>
        </ul>
      </>
    ),
  },
  {
    id: 906,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the difference between symmetric and asymmetric encryption?',
    answer: (
      <>
        <ul>
          <li><strong>Symmetric Encryption:</strong> Uses the exact same single key for both encryption and decryption (e.g. AES, DES). Fast but key distribution is difficult.</li>
          <li><strong>Asymmetric Encryption:</strong> Uses a key pair: a public key for encryption and a private key for decryption (e.g. RSA, ECC). Slower but resolves key exchange issues.</li>
        </ul>
      </>
    ),
  },
  {
    id: 907,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is Secure Sockets Layer/Transport Layer Security (SSL/TLS)?',
    answer: (
      <>
        <p><strong>SSL/TLS</strong> are cryptographic protocols designed to provide secure, encrypted communication over a computer network (commonly used to secure HTTP connections as HTTPS).</p>
      </>
    ),
  },
  {
    id: 908,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What are security best practices for password management?',
    answer: (
      <>
        <p>Best practices include: requiring a minimum length of 12+ characters, combining letters, numbers, and symbols, avoiding reuse across services, using a password manager, and enforcing Multi-Factor Authentication (MFA).</p>
      </>
    ),
  },
  {
    id: 909,
    category: 'Cyber Security',
    difficulty: 'hard',
    question: 'What is a Public Key Infrastructure (PKI)?',
    answer: (
      <>
        <p>A **PKI (Public Key Infrastructure)** is a framework of roles, policies, hardware, software, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption.</p>
      </>
    ),
  },
  {
    id: 910,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the concept of zero trust security?',
    answer: (
      <>
        <p>A security framework based on the premise: **"Never Trust, Always Verify."** It assumes threats are present inside the network boundary, requiring continuous authentication, authorization, and validation for every device and user access request.</p>
      </>
    ),
  },
  {
    id: 911,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the role of a Security Engineer?',
    answer: (
      <>
        <p>A Security Engineer designs, implements, and maintains security systems and infrastructure controls (like firewalls, IPS, and monitoring tools) to secure organizational assets.</p>
      </>
    ),
  },
  {
    id: 912,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What are the common types of malware?',
    answer: (
      <>
        <p>Common types include: Viruses (infect files), Worms (self-replicate over networks), Trojans (disguised as benign software), Ransomware (encrypts data), Spyware, and Rootkits.</p>
      </>
    ),
  },
  {
    id: 913,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the difference between black-box and white-box testing?',
    answer: (
      <>
        <ul>
          <li><strong>Black-box Testing:</strong> Tester has zero knowledge of the target system internals or code structure, simulating external threat actors.</li>
          <li><strong>White-box Testing:</strong> Tester has complete access to target source code, system documentation, and network layouts, supporting thorough security reviews.</li>
        </ul>
      </>
    ),
  },
  {
    id: 914,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the concept of secure coding practices?',
    answer: (
      <>
        <p>A set of coding principles aimed at preventing security vulnerabilities (like SQL injection or buffer overflows) during software development by enforcing input validation, output encoding, and proper error handling.</p>
      </>
    ),
  },
  {
    id: 915,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the principle of defense-in-breadth?',
    answer: (
      <>
        <p>An expansion of defense-in-depth focusing on deploying diverse security products and controls horizontally across different segments of the network architecture to avoid single-vendor points of failure.</p>
      </>
    ),
  },
  {
    id: 916,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the difference between a vulnerability and an exploit?',
    answer: (
      <>
        <ul>
          <li><strong>Vulnerability:</strong> A security weakness or flaw present in system code or configurations.</li>
          <li><strong>Exploit:</strong> A piece of code, software, or methodology developed to take advantage of that vulnerability to compromise the system.</li>
        </ul>
      </>
    ),
  },
  {
    id: 917,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: "What is the concept of 'least privilege' in access control?",
    answer: (
      <>
        <p>The principle of restricting user and system accounts to the absolute minimum levels of access permissions required to perform their specific job functions, minimizing potential attack footprints.</p>
      </>
    ),
  },
  {
    id: 918,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is a Security Incident Response Team (SIRT)?',
    answer: (
      <>
        <p>A designated group of IT and security professionals responsible for coordinating containment, eradication, and recovery procedures during a security breach.</p>
      </>
    ),
  },
  {
    id: 919,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is a software patch?',
    answer: (
      <>
        <p>A software update released by developers to resolve security vulnerabilities, fix bugs, or improve operational capabilities in existing systems.</p>
      </>
    ),
  },
  {
    id: 920,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is a Secure Development Lifecycle (SDLC)?',
    answer: (
      <>
        <p>A software development methodology integrating security activities (threat modeling, secure code reviews, penetration testing) across every phase of software development.</p>
      </>
    ),
  },
  {
    id: 921,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the role of a Chief Information Security Officer (CISO)?',
    answer: (
      <>
        <p>A senior executive responsible for establishing the cybersecurity vision, alignment strategy, and security policies required to protect business operations.</p>
      </>
    ),
  },
  {
    id: 922,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is a security audit?',
    answer: (
      <>
        <p>An evaluation of an organization's compliance with internal security policies and regulatory frameworks (e.g., PCI-DSS, SOC 2) by reviewing system configurations and access controls.</p>
      </>
    ),
  },
  {
    id: 923,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the concept of data leakage?',
    answer: (
      <>
        <p>The unauthorized transmission of sensitive or confidential data from inside an organization to an external recipient, occurring via email, physical media, or cloud uploads.</p>
      </>
    ),
  },
  {
    id: 924,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is the role of encryption in data transmission?',
    answer: (
      <>
        <p>It prevents eavesdropping on networks by translating packets into ciphertext during transmission (e.g. using SSL/TLS), ensuring data integrity and confidentiality.</p>
      </>
    ),
  },
  {
    id: 925,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the principle of separation of duties?',
    answer: (
      <>
        <p>An administrative control dividing critical tasks among multiple users to prevent fraud or unauthorized actions. For example, the person who writes software code cannot be the same person who signs and deploys it to production.</p>
      </>
    ),
  },
  {
    id: 926,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the concept of data classification?',
    answer: (
      <>
        <p>Categorizing data assets based on sensitivity (e.g., Public, Internal, Confidential, Restricted) to apply appropriate security controls and encryption priorities.</p>
      </>
    ),
  },
  {
    id: 927,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is a Certificate Authority (CA)?',
    answer: (
      <>
        <p>A trusted entity that issues digital certificates, verifying the identity of websites, servers, or individuals to facilitate secure public-key cryptography.</p>
      </>
    ),
  },
  {
    id: 928,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is a security incident response plan, and why is it important?',
    answer: (
      <>
        <p>A structured document defining procedures for detecting, containing, and recovering from security incidents. It minimizes breach costs, reduces downtime, and guides teams during crises.</p>
      </>
    ),
  },
  {
    id: 929,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'Distinguish between IDS and IPS.',
    answer: (
      <>
        <ul>
          <li><strong>IDS (Intrusion Detection System):</strong> A passive monitor analyzing network traffic and generating alerts when anomalies are detected.</li>
          <li><strong>IPS (Intrusion Prevention System):</strong> An active inline device that analyzes traffic and automatically drops packets or blocks connections to stop attacks.</li>
        </ul>
      </>
    ),
  },
  {
    id: 930,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'Name the elements of cybersecurity?',
    answer: (
      <>
        <p>The key domains are: Application Security, Information/Data Security, Network Security, Disaster Recovery planning, Operational Security, and End-user education.</p>
      </>
    ),
  },
  {
    id: 931,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'Explain the brute force attack and how to prevent it?',
    answer: (
      <>
        <p>An automated trial-and-error attack attempting to guess a user password by trying all possible character combinations. Prevention includes: enforcing account lockouts after multiple failed attempts, implementing CAPTCHAs, and enforcing MFA.</p>
      </>
    ),
  },
  {
    id: 932,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'Name the different layers of the OSI model.',
    answer: (
      <>
        <p>The Open Systems Interconnection model has seven layers: 7) Application, 6) Presentation, 5) Session, 4) Transport, 3) Network, 2) Data Link, and 1) Physical.</p>
      </>
    ),
  },
  {
    id: 933,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is a VPN?',
    answer: (
      <>
        <p>A <strong>VPN (Virtual Private Network)</strong> establishes an encrypted network tunnel over public internet connections, keeping data transmission secure from local network interceptors.</p>
      </>
    ),
  },
  {
    id: 934,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What are black hat hackers?',
    answer: (
      <>
        <p>Threat actors who break into computer systems maliciously for personal gain, financial theft, or operational disruption, violating laws.</p>
      </>
    ),
  },
  {
    id: 935,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What are white hat hackers?',
    answer: (
      <>
        <p>Ethical security professionals authorized to search for vulnerabilities in networks or systems to report them and improve overall security defenses.</p>
      </>
    ),
  },
  {
    id: 936,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What are grey hat hackers?',
    answer: (
      <>
        <p>Hackers who navigate between white and black hat realms. They may bypass security boundaries to identify vulnerabilities without malicious intent, but often disclose them publicly or request bug bounty rewards without authorization.</p>
      </>
    ),
  },
  {
    id: 937,
    category: 'Cyber Security',
    difficulty: 'hard',
    question: 'How to reset a password-protected BIOS configuration?',
    answer: (
      <>
        <p>BIOS passwords can be cleared using physical hardware manipulation or software bypasses:</p>
        <ol>
          <li>Removing the CMOS button battery from the motherboard for 5-10 minutes to drain volatile memory configurations.</li>
          <li>Shifting the clearing jumper (labeled CLEAR_CMOS) on the motherboard pins temporarily.</li>
          <li>Entering manufacturer-backdoor default passwords.</li>
        </ol>
      </>
    ),
  },
  {
    id: 938,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is MITM attack?',
    answer: (
      <>
        <p>A <strong>Man-in-the-Middle (MITM)</strong> attack occurs when an unauthorized entity intercepts, reads, or modifies messages exchanged between two nodes (e.g. via ARP Spoofing, DNS poisoning, or Rogue Hotspots).</p>
      </>
    ),
  },
  {
    id: 939,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is the main difference between SSL and TLS?',
    answer: (
      <>
        <p>TLS (Transport Layer Security) is the modern, secure successor protocol to SSL (Secure Sockets Layer). SSL is fully deprecated due to cryptographic vulnerabilities (e.g., POODLE attack), whereas TLS 1.3 is the current industry standard.</p>
      </>
    ),
  },
  {
    id: 940,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is the abbreviation of CSRF?',
    answer: (
      <>
        <p><strong>CSRF</strong> stands for <strong>Cross-Site Request Forgery</strong>, a vulnerability where authenticated users are tricked into executing unwanted commands on a web application they trust.</p>
      </>
    ),
  },
  {
    id: 941,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is 2FA and how to implement it for a public website?',
    answer: (
      <>
        <p><strong>Two-Factor Authentication (2FA)</strong> adds an extra security layer beyond passwords. Implementation includes:</p>
        <ul>
          <li>Using standard Time-Based One-Time Password (TOTP) algorithms (e.g., Google Authenticator) using shared secret keys.</li>
          <li>Sending SMS or Email OTPs via API gateways.</li>
          <li>Enabling hardware tokens complying with FIDO2/WebAuthn standards.</li>
        </ul>
      </>
    ),
  },
  {
    id: 942,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'Explain the term WAF?',
    answer: (
      <>
        <p>A <strong>WAF (Web Application Firewall)</strong> is a specialized security filter that inspects and filters HTTP traffic entering a web application, blocking Layer 7 attacks like SQL Injection and Cross-Site Scripting.</p>
      </>
    ),
  },
  {
    id: 943,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is hacking?',
    answer: (
      <>
        <p>The process of identifying and exploiting weaknesses in a computer system or network to gain unauthorized access or control over assets.</p>
      </>
    ),
  },
  {
    id: 944,
    category: 'easy',
    question: 'Who are hackers?',
    answer: (
      <>
        <p>Individuals with technical computer skills who use their knowledge to identify weaknesses, solve problems, or compromise systems (categorized into white, black, or grey hats).</p>
      </>
    ),
  },
  {
    id: 945,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is network sniffing?',
    answer: (
      <>
        <p>The practice of capturing and monitoring packets of data traversing a network using hardware adapters or software packet analyzers (e.g., Wireshark) in promiscuous mode.</p>
      </>
    ),
  },
  {
    id: 946,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is the importance of DNS monitoring?',
    answer: (
      <>
        <p>Monitoring DNS traffic helps detect malicious activities like DNS Tunneling (exfiltrating data), DNS Hijacking, or connections to domain names associated with malware command-and-control servers.</p>
      </>
    ),
  },
  {
    id: 947,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'Define the process of salting. What is the use of salting?',
    answer: (
      <>
        <p><strong>Salting</strong> is the process of appending a unique, random string of characters (a salt) to a password before hashing it. This prevents offline attacks using Rainbow Tables, ensuring identical passwords yield different hashes.</p>
      </>
    ),
  },
  {
    id: 948,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is SSH?',
    answer: (
      <>
        <p><strong>SSH (Secure Shell)</strong> is a cryptographic network protocol used to run command terminal operations and transfer files securely over unsecured networks.</p>
      </>
    ),
  },
  {
    id: 949,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'Is SSL protocol enough for network security?',
    answer: (
      <>
        <p>No. SSL is deprecated and fully insecure. Modern setups must utilize TLS 1.2 or 1.3. Even then, TLS only secures transit data; firewalls, IPS, and secure host coding are required to defend servers.</p>
      </>
    ),
  },
  {
    id: 950,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'What is black box testing and white box testing?',
    answer: (
      <>
        <ul>
          <li><strong>Black Box Testing:</strong> Evaluates security controls from an external perspective, simulating attacks with zero prior system knowledge.</li>
          <li><strong>White Box Testing:</strong> Conducts structural code audits and configuration reviews with complete access to design files and code.</li>
        </ul>
      </>
    ),
  },
  {
    id: 951,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'Explain TCP Three-way handshake.',
    answer: (
      <>
        <p>The sequence to establish a connection:</p>
        <ol>
          <li><strong>SYN:</strong> The client sends a Synchronize packet to request a connection.</li>
          <li><strong>SYN-ACK:</strong> The server replies with a Synchronize-Acknowledgment packet.</li>
          <li><strong>ACK:</strong> The client sends an Acknowledgment packet, establishing the connection.</li>
        </ol>
      </>
    ),
  },
  {
    id: 952,
    category: 'Cyber Security',
    difficulty: 'hard',
    question: 'Define residual risk. What are ways to deal with risk?',
    answer: (
      <>
        <p><strong>Residual Risk</strong> is the remaining security risk that exists after implementing security safeguards. It is managed in four ways:</p>
        <ul>
          <li><strong>Mitigation:</strong> Deploying further security controls to reduce the risk.</li>
          <li><strong>Transfer:</strong> Outsourcing the risk (e.g., buying cybersecurity insurance).</li>
          <li><strong>Avoidance:</strong> Discontinuing the risky activity entirely.</li>
          <li><strong>Acceptance:</strong> Acknowledging the risk level and absorbing potential consequences.</li>
        </ul>
      </>
    ),
  },
  {
    id: 953,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'Define the term Exfiltration?',
    answer: (
      <>
        <p><strong>Exfiltration</strong> is the unauthorized transfer or extraction of sensitive data from an organization's network by cyberattackers or malicious insiders.</p>
      </>
    ),
  },
  {
    id: 954,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'How to make the user authentication process more secure?',
    answer: (
      <>
        <p>Enforce strong password complexity rules, deploy Multi-Factor Authentication (MFA), limit login attempts, implement risk-based adaptive authentication, and store credentials using modern hashing algorithms (e.g., bcrypt, Argon2).</p>
      </>
    ),
  },
  {
    id: 955,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'Name the protocol that broadcast the information across all the devices.',
    answer: (
      <>
        <p><strong>ARP (Address Resolution Protocol)</strong> is commonly used to broadcast packets (ARP Requests) across local network segments to map IP addresses to physical MAC addresses. Similarly, UDP-based protocols like **DHCP** and **NetBIOS** utilize broadcasts to discover servers.</p>
      </>
    ),
  },
  {
    id: 956,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'How to protect email messages?',
    answer: (
      <>
        <p>Email security is enforced by implementing encryption protocols (S/MIME, PGP), deploying email gateways to filter spam/phishing, and configuring authentication records: SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), and DMARC.</p>
      </>
    ),
  },
  {
    id: 957,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What are the risks associated with public Wi-Fi?',
    answer: (
      <>
        <p>Risks include: Man-in-the-Middle (MITM) packet sniffing, rogue hotspot clones ("Evil Twins"), malware distribution, and session hijacking on unencrypted sites.</p>
      </>
    ),
  },
  {
    id: 958,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is Data Encryption and why it is important in network security?',
    answer: (
      <>
        <p>Converting data into an unreadable format using keys. It ensures that even if packets are intercepted over a network, the payload remains confidential and secure from eavesdropping.</p>
      </>
    ),
  },
  {
    id: 959,
    category: 'Cyber Security',
    difficulty: 'hard',
    question: 'Explain the main difference between Diffie-Hellman and RSA.',
    answer: (
      <>
        <ul>
          <li><strong>Diffie-Hellman:</strong> A key-agreement protocol enabling two parties to securely establish a shared secret key over an unsecure network. It does not perform encryption or decryption directly.</li>
          <li><strong>RSA:</strong> An asymmetric cryptographic algorithm that can be used for both encrypting/decrypting data and creating digital signatures.</li>
        </ul>
      </>
    ),
  },
  {
    id: 960,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is a remote desktop protocol?',
    answer: (
      <>
        <p><strong>RDP (Remote Desktop Protocol)</strong> is a proprietary protocol developed by Microsoft providing a graphical interface to connect and control another computer remotely over network connections.</p>
      </>
    ),
  },
  {
    id: 961,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'Name social engineering attacks?',
    answer: (
      <>
        <p>Common vectors include: Phishing (email), Vishing (voice), Smishing (SMS), Baiting (USB drops), Pretexting, Tailgating, and Spear Phishing.</p>
      </>
    ),
  },
  {
    id: 962,
    category: 'Cyber Security',
    difficulty: 'hard',
    question: 'Explain the concept of IV in encryption.',
    answer: (
      <>
        <p>An <strong>Initialization Vector (IV)</strong> is a random block of data combined with the encryption key when executing block ciphers. It ensures that encrypting identical plaintexts yields completely different ciphertexts, preventing patterns.</p>
      </>
    ),
  },
  {
    id: 963,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'Explain honeypot and its Types.',
    answer: (
      <>
        <p>Decoy decoy systems designed to trap attackers. Types include:</p>
        <ul>
          <li><strong>Low-Interaction Honeypots:</strong> Simulate basic services (e.g. open ports) with minimal resource costs, gathering basic logs.</li>
          <li><strong>High-Interaction Honeypots:</strong> Deploy actual operating systems and database architectures, allowing detailed tracking of complex attack chains.</li>
        </ul>
      </>
    ),
  },
  {
    id: 964,
    category: 'Cyber Security',
    difficulty: 'easy',
    question: 'What is a computer virus?',
    answer: (
      <>
        <p>A type of malicious software that, when executed, replicates by inserting its code into other computer files, relying on human execution to spread.</p>
      </>
    ),
  },
  {
    id: 965,
    category: 'Cyber Security',
    difficulty: 'medium',
    question: 'Explain steps to secure web server.',
    answer: (
      <>
        <p>Web server hardening involves:</p>
        <ol>
          <li>Disabling directory listing and information headers.</li>
          <li>Enforcing HTTPS with TLS 1.3 only, disabling SSL/TLS legacy versions.</li>
          <li>Implementing a Web Application Firewall (WAF) to filter inputs.</li>
          <li>Configuring security headers: Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, X-Content-Type-Options.</li>
          <li>Running the web service daemon with a dedicated low-privilege user account.</li>
        </ol>
      </>
    ),
  },
];

const TIPS = [
  {
    icon: '🎯',
    title: 'Use the STAR Method',
    desc: 'Structure behavioral answers with Situation, Task, Action, and Result for clarity and impact.',
    color: '#3b82f6',
    bg: '#eff6ff',
  },
  {
    icon: '💻',
    title: 'Code Out Loud',
    desc: 'Talk through your thinking as you write code. Interviewers value communication as much as the solution.',
    color: '#10b981',
    bg: '#ecfdf5',
  },
  {
    icon: '❓',
    title: 'Clarify Before Coding',
    desc: 'Ask clarifying questions about inputs, edge cases, and constraints before writing a single line.',
    color: '#f97316',
    bg: '#fff7ed',
  },
  {
    icon: '📐',
    title: 'Start with Brute Force',
    desc: 'Propose a simple solution first, then optimize. Interviewers want to see your thinking process.',
    color: '#8b5cf6',
    bg: '#f5f3ff',
  },
  {
    icon: '🔄',
    title: 'Test Your Solution',
    desc: 'Walk through your code with a simple example and edge cases to catch bugs before being asked.',
    color: '#ef4444',
    bg: '#fef2f2',
  },
  {
    icon: '📚',
    title: 'Know Your Basics',
    desc: 'Data structures, time complexity, and core language features are asked in 90% of tech interviews.',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
];

/* ─── Component ─────────────────────────────────────────────── */
export default function InterviewPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 20;

  const [categoryFilter, setCategoryFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const qaSectionRef = useRef(null);
  const categoryDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredCategories = useMemo(() => {
    return CATEGORIES.filter(cat =>
      cat.toLowerCase().includes(categoryFilter.toLowerCase())
    );
  }, [categoryFilter]);

  const filtered = useMemo(() => {
    return QUESTIONS.filter(q => {
      const matchCat = activeCategory === 'All' || q.category === activeCategory;
      const matchSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / questionsPerPage);

  const paginatedQuestions = useMemo(() => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    return filtered.slice(startIndex, startIndex + questionsPerPage);
  }, [filtered, currentPage]);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    setOpenId(null);
    qaSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggle = (id) => setOpenId(prev => (prev === id ? null : id));

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) {
        end = 4;
      }
      if (currentPage >= totalPages - 1) {
        start = totalPages - 3;
      }

      if (start > 2) {
        pages.push('...');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push('...');
      }

      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="interview-page">
      {/* ── Hero ── */}
      <section className="interview-hero">
        <div className="interview-hero-bg">
          <div className="interview-orb orb-a" />
          <div className="interview-orb orb-b" />
          <div className="interview-orb orb-c" />
          <div className="interview-grid-lines" />
        </div>
        <div className="container">
          <div className="interview-hero-content">
            <div className="interview-hero-badge">
              <FiZap size={14} />
              Interview Prep Hub
            </div>
            <h1 className="interview-hero-title">
              Ace Your Next <span>Tech Interview</span>
            </h1>
            <p className="interview-hero-sub">
              Curated questions &amp; expert answers across Python, Java, SQL, Data Science,
              System Design, and Behavioral rounds — all in one place.
            </p>
            <div className="interview-hero-stats">
              <div className="ih-stat">
                <div className="ih-stat-num">50+</div>
                <div className="ih-stat-label">Questions</div>
              </div>
              <div className="ih-stat">
                <div className="ih-stat-num">40+</div>
                <div className="ih-stat-label">Categories</div>
              </div>
              <div className="ih-stat">
                <div className="ih-stat-num">100%</div>
                <div className="ih-stat-label">Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="interview-filter-section">
        <div className="container">
          {/* Search */}
          <div className="interview-search-wrapper">
            <FiSearch className="interview-search-icon" size={18} />
            <input
              type="text"
              className="interview-search-input"
              placeholder="Search questions…"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
                setOpenId(null);
              }}
            />
          </div>

          {/* Category Select (Mobile only - Custom Dropdown) */}
          <div className="interview-category-select-wrapper" ref={categoryDropdownRef}>
            <button
              type="button"
              className="interview-category-select-btn"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="selected-text">
                {activeCategory === 'All' ? 'All Categories' : activeCategory}
              </span>
              <FiChevronDown className={`select-arrow-icon ${isDropdownOpen ? 'open' : ''}`} size={16} />
            </button>

            {isDropdownOpen && (
              <div className="category-dropdown-menu">
                <div className="category-dropdown-search">
                  <FiSearch className="search-icon" size={14} />
                  <input
                    type="text"
                    className="category-dropdown-input"
                    placeholder="Search categories..."
                    value={categoryFilter}
                    onChange={e => setCategoryFilter(e.target.value)}
                    onClick={e => e.stopPropagation()}
                  />
                </div>
                <div className="category-dropdown-options">
                  {filteredCategories.length === 0 ? (
                    <div className="no-categories-found">No categories found</div>
                  ) : (
                    filteredCategories.map(cat => (
                      <button
                        key={cat}
                        type="button"
                        className={`category-dropdown-option${activeCategory === cat ? ' active' : ''}`}
                        onClick={() => {
                          setActiveCategory(cat);
                          setCurrentPage(1);
                          setOpenId(null);
                          setIsDropdownOpen(false);
                          setCategoryFilter('');
                        }}
                      >
                        {cat}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Category tabs (Desktop only) */}
          <div className="interview-category-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`category-tab${activeCategory === cat ? ' active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                  setOpenId(null);
                }}
              >
                <span className="category-tab-dot" />
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Q&A Accordion ── */}
      <section className="interview-qa-section" ref={qaSectionRef}>
        <div className="container">
          <p className="qa-results-info">
            Showing <strong>{filtered.length}</strong> question{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && <> in <strong>{activeCategory}</strong></>}
          </p>

          {filtered.length === 0 ? (
            <div className="qa-empty">
              <span className="qa-empty-icon">🔍</span>
              <h3>No questions found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          ) : (
            <>
              <div className="qa-grid">
                {paginatedQuestions.map((q, idx) => {
                  const absoluteIdx = (currentPage - 1) * questionsPerPage + idx;
                  return (
                    <div
                      key={q.id}
                      className={`qa-card${openId === q.id ? ' open' : ''}`}
                    >
                      <button
                        className="qa-card-header"
                        onClick={() => toggle(q.id)}
                        aria-expanded={openId === q.id}
                      >
                        <div className="qa-num">{String(absoluteIdx + 1).padStart(2, '0')}</div>
                        <div className="qa-header-text">
                          <span className="qa-question-text">{q.question}</span>
                          <div className="qa-badges">
                            <span className="qa-badge-cat">
                              {q.category}
                            </span>
                          </div>
                        </div>
                        <div className="qa-toggle-icon">
                          <FiChevronDown size={16} />
                        </div>
                      </button>
                      <div className={`qa-answer-panel${openId === q.id ? ' open' : ''}`}>
                        <div className="qa-answer-inner">
                          {q.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {totalPages > 1 && (
                <div className="qa-pagination">
                  <button
                    className="pagination-btn"
                    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <span className="pagination-text-desktop">Previous</span>
                    <span className="pagination-text-mobile">&lsaquo;</span>
                  </button>

                  {getPageNumbers().map((pageNum, idx) => {
                    if (pageNum === '...') {
                      return (
                        <span key={`ellipsis-${idx}`} className="pagination-ellipsis">
                          ...
                        </span>
                      );
                    }
                    return (
                      <button
                        key={pageNum}
                        className={`pagination-btn${currentPage === pageNum ? ' active' : ''}`}
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    className="pagination-btn"
                    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    <span className="pagination-text-desktop">Next</span>
                    <span className="pagination-text-mobile">&rsaquo;</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Interview Tips ── */}
      <section className="interview-tips-section">
        <div className="container">
          <div className="interview-section-header">
            <span className="interview-section-sub">Pro Advice</span>
            <h2 className="interview-section-title">Interview Success Tips</h2>
            <p className="interview-section-desc">
              Master these strategies to stand out in any technical or behavioral round.
            </p>
            <div className="section-bar" />
          </div>
          <div className="tips-grid">
            {TIPS.map((tip, i) => (
              <div className="tip-card" key={i}>
                <div
                  className="tip-card-icon"
                  style={{ background: tip.bg, color: tip.color }}
                >
                  {tip.icon}
                </div>
                <div className="tip-card-title">{tip.title}</div>
                <div className="tip-card-desc">{tip.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="interview-cta-section">
        <div className="container">
          <div className="interview-cta-content">
            <h2 className="interview-cta-title">Ready for a Real Mock Interview?</h2>
            <p className="interview-cta-sub">
              Practice 1-on-1 with our expert coaches and get actionable feedback to land your dream role.
            </p>
            <div className="interview-cta-btns">
              <a href="/services/interview-preparation" className="cta-btn-primary">
                <FiTarget size={16} />
                Book a Mock Interview
              </a>
              <a href="/contact" className="cta-btn-secondary">
                <FiMessageCircle size={16} />
                Talk to a Coach
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
