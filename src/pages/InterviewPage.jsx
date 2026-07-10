import React, { useState, useMemo } from 'react';
import {
  FiSearch, FiChevronDown, FiZap, FiBook, FiTarget,
  FiMessageCircle, FiClock, FiStar, FiCheckCircle, FiAward
} from 'react-icons/fi';
import '../styles/InterviewPage.css';

/* ─── Data ─────────────────────────────────────────────────── */
const CATEGORIES = ['All', 'Python', 'Java', 'SQL', 'Data Science', 'System Design', 'Behavioral'];

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
    category: 'Java',
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
    category: 'Java',
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
    category: 'Java',
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
    category: 'SQL',
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
    category: 'Data Science',
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
    category: 'System Design',
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
    category: 'System Design',
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
    category: 'Behavioral',
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
    category: 'Behavioral',
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
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    return QUESTIONS.filter(q => {
      const matchCat = activeCategory === 'All' || q.category === activeCategory;
      const matchDiff = activeDifficulty === 'all' || q.difficulty === activeDifficulty;
      const matchSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchDiff && matchSearch;
    });
  }, [activeCategory, activeDifficulty, searchQuery]);

  const toggle = (id) => setOpenId(prev => (prev === id ? null : id));

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
                <div className="ih-stat-num">6</div>
                <div className="ih-stat-label">Categories</div>
              </div>
              <div className="ih-stat">
                <div className="ih-stat-num">3</div>
                <div className="ih-stat-label">Difficulty Levels</div>
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
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category tabs */}
          <div className="interview-category-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`category-tab${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span className="category-tab-dot" />
                {cat}
              </button>
            ))}
          </div>

          {/* Difficulty pills */}
          <div className="difficulty-filter">
            {['all', 'easy', 'medium', 'hard'].map(d => (
              <button
                key={d}
                className={`diff-btn${activeDifficulty === d ? ` active-${d}` : ''}`}
                onClick={() => setActiveDifficulty(d)}
              >
                {d === 'all' ? 'All Levels' : d.charAt(0).toUpperCase() + d.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Q&A Accordion ── */}
      <section className="interview-qa-section">
        <div className="container">
          <p className="qa-results-info">
            Showing <strong>{filtered.length}</strong> question{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && <> in <strong>{activeCategory}</strong></>}
            {activeDifficulty !== 'all' && <> · <strong style={{textTransform:'capitalize'}}>{activeDifficulty}</strong></>}
          </p>

          {filtered.length === 0 ? (
            <div className="qa-empty">
              <span className="qa-empty-icon">🔍</span>
              <h3>No questions found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="qa-grid">
              {filtered.map((q, idx) => (
                <div
                  key={q.id}
                  className={`qa-card${openId === q.id ? ' open' : ''}`}
                >
                  <button
                    className="qa-card-header"
                    onClick={() => toggle(q.id)}
                    aria-expanded={openId === q.id}
                  >
                    <div className="qa-num">{String(idx + 1).padStart(2, '0')}</div>
                    <div className="qa-header-text">
                      <span className="qa-question-text">{q.question}</span>
                      <div className="qa-badges">
                        <span className={`qa-badge-diff ${q.difficulty}`}>{q.difficulty}</span>
                        <span className="qa-badge-cat">{q.category}</span>
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
              ))}
            </div>
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
