import React from 'react';

export const SOFTWARE_TESTING_QUESTIONS = [
  {
    id: 22001,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is Software testing?",
    answer: (
      <>
        <p><strong>Software testing</strong> is the process of evaluating and verifying that a software application works as expected. It identifies bugs, ensures quality, validates requirements, and confirms the software meets end-user needs before release.</p>
      </>
    ),
  },
  {
    id: 22002,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What are the different types of testing?",
    answer: (
      <>
        <p>Types include: Unit Testing, Integration Testing, System Testing, Acceptance Testing, Regression Testing, Performance Testing, Load Testing, Stress Testing, Security Testing, Usability Testing, Smoke Testing, and Sanity Testing.</p>
      </>
    ),
  },
  {
    id: 22003,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What are the principles of software testing?",
    answer: (
      <>
        <p>Seven principles: 1) Testing shows presence of defects, 2) Exhaustive testing is impossible, 3) Early testing, 4) Defect clustering, 5) Pesticide paradox, 6) Testing is context-dependent, 7) Absence of errors fallacy.</p>
      </>
    ),
  },
  {
    id: 22004,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is end-to-end testing?",
    answer: (
      <>
        <p>End-to-end (E2E) testing validates the complete workflow of an application from start to finish, simulating real user scenarios to ensure all integrated components work correctly together.</p>
      </>
    ),
  },
  {
    id: 22005,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Explain how does a test coverage tool work?",
    answer: (
      <>
        <p>A test coverage tool instruments the source code to track which lines, branches, statements, or functions are executed during test runs, then generates a coverage report showing percentages and uncovered code paths.</p>
      </>
    ),
  },
  {
    id: 22006,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Can you describe the different types of test coverage techniques?",
    answer: (
      <>
        <ul><li><strong>Statement coverage:</strong> Every code statement executed.</li><li><strong>Branch coverage:</strong> Every conditional branch tested.</li><li><strong>Path coverage:</strong> Every possible execution path.</li><li><strong>Condition coverage:</strong> Each Boolean sub-expression evaluated true and false.</li></ul>
      </>
    ),
  },
  {
    id: 22007,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Explain black-box testing, white-box testing, and grey-box testing?",
    answer: (
      <>
        <ul><li><strong>Black-box:</strong> Tester has no knowledge of internals; tests based on requirements only.</li><li><strong>White-box:</strong> Tester knows internal code structure; tests logic paths.</li><li><strong>Grey-box:</strong> Partial knowledge of internals; combines both approaches.</li></ul>
      </>
    ),
  },
  {
    id: 22008,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Explain test scenarios, test scripts, and test cases in software testing?",
    answer: (
      <>
        <ul><li><strong>Test Scenario:</strong> High-level description of a feature to be tested.</li><li><strong>Test Case:</strong> Detailed steps, inputs, and expected results for a specific test.</li><li><strong>Test Script:</strong> Automated code executing test cases programmatically.</li></ul>
      </>
    ),
  },
  {
    id: 22009,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "Explain the difference between Bugs and Errors?",
    answer: (
      <>
        <ul><li><strong>Error:</strong> A human mistake made during development (coding error).</li><li><strong>Bug/Defect:</strong> A flaw in the software code resulting from an error that causes incorrect behaviour.</li><li><strong>Failure:</strong> The observable incorrect behaviour when a bug is triggered at runtime.</li></ul>
      </>
    ),
  },
  {
    id: 22010,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is the risk-based testing?",
    answer: (
      <>
        <p>Risk-based testing prioritizes test cases based on the probability and impact of defects in different areas of the application, focusing testing effort on high-risk components first.</p>
      </>
    ),
  },
  {
    id: 22011,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "Why do we need to perform compatibility testing?",
    answer: (
      <>
        <p>Compatibility testing ensures the application functions correctly across different browsers, OS, devices, screen sizes, databases, and network environments, maximizing the user base it supports.</p>
      </>
    ),
  },
  {
    id: 22012,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is the difference between a test driver and a test stub?",
    answer: (
      <>
        <ul><li><strong>Test Driver:</strong> Simulates a calling module (top-level) that invokes the module under test, used in bottom-up integration testing.</li><li><strong>Test Stub:</strong> Simulates a called module that the module under test depends on, used in top-down integration testing.</li></ul>
      </>
    ),
  },
  {
    id: 22013,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is the difference between bug leakage and bug release?",
    answer: (
      <>
        <ul><li><strong>Bug Release:</strong> A bug is knowingly released to production (low severity) with documentation.</li><li><strong>Bug Leakage:</strong> A bug is unknowingly missed during testing and discovered by end users after release.</li></ul>
      </>
    ),
  },
  {
    id: 22014,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What's the difference between verification and validation?",
    answer: (
      <>
        <ul><li><strong>Verification:</strong> Are we building the product right? — Static process checking documents, design, and code against specifications.</li><li><strong>Validation:</strong> Are we building the right product? — Dynamic testing of the running application against user requirements.</li></ul>
      </>
    ),
  },
  {
    id: 22015,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Latent defect?",
    answer: (
      <>
        <p>A latent defect is an existing bug in software that has not yet manifested or been triggered because the specific conditions required to expose it have not occurred during testing.</p>
      </>
    ),
  },
  {
    id: 22016,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is the function of the software testing tool 'phantom'?",
    answer: (
      <>
        <p>PhantomJS is a headless WebKit browser used for automated web testing, page automation, and screen capture — enabling browser automation without a visible UI, ideal for CI pipeline testing.</p>
      </>
    ),
  },
  {
    id: 22017,
    category: 'Software Testing',
    difficulty: 'hard',
    question: "What is fault masking explain with example?",
    answer: (
      <>
        <p>Fault masking occurs when one defect hides the existence of another. Example: a divide-by-zero bug is masked because a null pointer exception occurs first, preventing execution from reaching the division operation.</p>
      </>
    ),
  },
  {
    id: 22018,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is N+1 testing?",
    answer: (
      <>
        <p>N+1 testing is a regression testing strategy where testing is performed in the cycle immediately following the one where bugs were fixed, ensuring that fixes don't introduce new defects.</p>
      </>
    ),
  },
  {
    id: 22019,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Fuzz testing and when it is used?",
    answer: (
      <>
        <p>Fuzz testing (fuzzing) feeds invalid, random, or unexpected data inputs to an application to discover security vulnerabilities, crashes, and memory leaks. Widely used in security testing and OS-level software testing.</p>
      </>
    ),
  },
  {
    id: 22020,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is random/monkey testing? When is it used?",
    answer: (
      <>
        <p>Monkey testing sends random, invalid, or unexpected inputs to an application without any defined test cases, used early in development to uncover unexpected crashes and robustness issues quickly.</p>
      </>
    ),
  },
  {
    id: 22021,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is exploratory testing?",
    answer: (
      <>
        <p>Exploratory testing is an unscripted, simultaneous learning and testing approach where testers design and execute tests dynamically based on their domain knowledge and real-time findings.</p>
      </>
    ),
  },
  {
    id: 22022,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is the difference between functional and non-functional testing?",
    answer: (
      <>
        <ul><li><strong>Functional testing:</strong> Validates what the system does — features, business logic, and user interactions against requirements.</li><li><strong>Non-functional testing:</strong> Validates how the system performs — performance, reliability, scalability, security, and usability.</li></ul>
      </>
    ),
  },
  {
    id: 22023,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is structural testing?",
    answer: (
      <>
        <p>Structural (white-box) testing examines the internal structure of code — testing logic paths, branches, and code coverage. Requires knowledge of the implementation.</p>
      </>
    ),
  },
  {
    id: 22024,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is integration testing?",
    answer: (
      <>
        <p>Integration testing verifies that individually tested modules work correctly when combined, focusing on the interfaces and data flow between integrated components.</p>
      </>
    ),
  },
  {
    id: 22025,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What are the different types of integration testing techniques?",
    answer: (
      <>
        <ul><li><strong>Big Bang:</strong> All modules integrated at once.</li><li><strong>Top-Down:</strong> Testing from top-level modules downward.</li><li><strong>Bottom-Up:</strong> Testing from lower-level modules upward.</li><li><strong>Sandwich/Hybrid:</strong> Combination of top-down and bottom-up.</li></ul>
      </>
    ),
  },
  {
    id: 22026,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is system testing?",
    answer: (
      <>
        <p>System testing evaluates the complete, fully integrated software system against the specified requirements, performed by the QA team in an environment that closely mirrors production.</p>
      </>
    ),
  },
  {
    id: 22027,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is regression testing?",
    answer: (
      <>
        <p>Regression testing re-executes previously passing tests after code changes (bug fixes, enhancements) to ensure existing functionality has not been broken by the modifications.</p>
      </>
    ),
  },
  {
    id: 22028,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is performance testing?",
    answer: (
      <>
        <p>Performance testing evaluates system responsiveness, stability, speed, and resource usage under specific conditions (load, stress, spike) to ensure the application meets performance benchmarks.</p>
      </>
    ),
  },
  {
    id: 22029,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is load testing?",
    answer: (
      <>
        <p>Load testing measures system behavior under expected and peak load conditions, determining response times, throughput, and resource utilization to identify performance bottlenecks.</p>
      </>
    ),
  },
  {
    id: 22030,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is stress testing?",
    answer: (
      <>
        <p>Stress testing pushes the system beyond its normal operating limits to evaluate how it behaves under extreme conditions, identifying breaking points, recovery mechanisms, and failure modes.</p>
      </>
    ),
  },
  {
    id: 22031,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is volume testing?",
    answer: (
      <>
        <p>Volume testing evaluates system performance when processing large amounts of data (large databases, large file sizes) to identify data-handling bottlenecks and performance degradation.</p>
      </>
    ),
  },
  {
    id: 22032,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is usability testing?",
    answer: (
      <>
        <p>Usability testing evaluates how easily real users can learn, use, and navigate the application, measuring user satisfaction, efficiency, and effectiveness to improve the user experience.</p>
      </>
    ),
  },
  {
    id: 22033,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is acceptance testing?",
    answer: (
      <>
        <p>Acceptance testing (UAT) is performed by end users or clients to verify the system meets business requirements and is ready for production deployment. It is the final testing phase before release.</p>
      </>
    ),
  },
  {
    id: 22034,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is alpha testing?",
    answer: (
      <>
        <p>Alpha testing is performed internally by the development or QA team at the developer's site before releasing to external users. It simulates real user behavior in a controlled environment.</p>
      </>
    ),
  },
  {
    id: 22035,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is beta testing?",
    answer: (
      <>
        <p>Beta testing is performed by a limited group of real end users in the production environment before the public release, collecting feedback on real-world usability and identifying remaining issues.</p>
      </>
    ),
  },
  {
    id: 22036,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is a test plan?",
    answer: (
      <>
        <p>A test plan is a formal document describing the scope, approach, resources, schedule, and activities for a testing effort, including test objectives, environments, tools, and deliverables.</p>
      </>
    ),
  },
  {
    id: 22037,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is a test strategy?",
    answer: (
      <>
        <p>A test strategy is a high-level document defining the overall testing approach, objectives, risk management, testing types, tools, and reporting guidelines for a project or organization.</p>
      </>
    ),
  },
  {
    id: 22038,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is the defect life cycle?",
    answer: (
      <>
        <p>Defect life cycle states: New &rarr; Assigned &rarr; Open &rarr; Fixed &rarr; Retest &rarr; Verified &rarr; Closed. Additional states: Rejected, Deferred, Reopened, Duplicate.</p>
      </>
    ),
  },
  {
    id: 22039,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is a bug tracking tool?",
    answer: (
      <>
        <p>A bug tracking tool manages defect lifecycle — logging, assigning, prioritizing, and tracking bugs to resolution. Examples: Jira, Bugzilla, MantisBT, Azure DevOps, and GitHub Issues.</p>
      </>
    ),
  },
  {
    id: 22040,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is boundary value analysis?",
    answer: (
      <>
        <p>A black-box test design technique testing values at the boundaries of input partitions (minimum, minimum+1, maximum-1, maximum), where defects most frequently occur in software.</p>
      </>
    ),
  },
  {
    id: 22041,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is the meaning of pesticide paradox?",
    answer: (
      <>
        <p>The pesticide paradox states that repeatedly running the same tests will eventually stop finding new defects. Tests must be regularly reviewed and updated to discover new bugs in unchanged code.</p>
      </>
    ),
  },
  {
    id: 22042,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Defect Triage?",
    answer: (
      <>
        <p>Defect triage is a meeting/process where team members review, prioritize, and categorize reported defects, determining severity, priority, assignment, and resolution timeline for each defect.</p>
      </>
    ),
  },
  {
    id: 22043,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Specify different types of integration testing.",
    answer: (
      <>
        <p>Types: Big Bang Integration, Top-Down Integration (with stubs), Bottom-Up Integration (with drivers), Sandwich/Hybrid Integration, and Incremental Integration testing.</p>
      </>
    ),
  },
  {
    id: 22044,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Equivalence class partitioning?",
    answer: (
      <>
        <p>A black-box technique dividing input data into equivalent partitions where all values in a partition are expected to behave the same way, allowing testing one representative value per partition.</p>
      </>
    ),
  },
  {
    id: 22045,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Define boundary value analysis?",
    answer: (
      <>
        <p>A technique that tests values at the exact boundary of valid and invalid input ranges (e.g., for a range 1-100: test 0, 1, 2, 99, 100, 101) since most defects cluster around boundary conditions.</p>
      </>
    ),
  },
  {
    id: 22046,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is a cause-effect graph?",
    answer: (
      <>
        <p>A graphical representation mapping input conditions (causes) to output results (effects), used to design test cases that cover all cause-effect combinations systematically.</p>
      </>
    ),
  },
  {
    id: 22047,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "Difference between manual and automation testing?",
    answer: (
      <>
        <ul><li><strong>Manual Testing:</strong> Human tester executes tests step by step without scripts. Suitable for exploratory, usability testing.</li><li><strong>Automation Testing:</strong> Scripts execute tests automatically. Suitable for regression, load, and repetitive tests.</li></ul>
      </>
    ),
  },
  {
    id: 22048,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What are the different phases of Software Testing Life Cycle?",
    answer: (
      <>
        <p>STLC phases: 1. Requirement Analysis, 2. Test Planning, 3. Test Case Design, 4. Test Environment Setup, 5. Test Execution, 6. Test Closure.</p>
      </>
    ),
  },
  {
    id: 22049,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What do you mean by Defect Cascading?",
    answer: (
      <>
        <p>Defect cascading occurs when a defect in one module triggers or propagates additional defects in other dependent modules, causing a chain reaction of failures across the system.</p>
      </>
    ),
  },
  {
    id: 22050,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Difference between smoke and sanity testing?",
    answer: (
      <>
        <ul><li><strong>Smoke Testing:</strong> Broad, shallow test of critical functions after a new build to decide if it's stable enough for further testing.</li><li><strong>Sanity Testing:</strong> Narrow, focused test of specific functionality after a bug fix to verify the fix works correctly.</li></ul>
      </>
    ),
  },
  {
    id: 22051,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Define the term 'configuration management.'",
    answer: (
      <>
        <p>Configuration management is the systematic process of controlling, recording, and reporting changes to software artifacts (code, documents, test cases) to maintain product integrity throughout development.</p>
      </>
    ),
  },
  {
    id: 22052,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is agile testing?",
    answer: (
      <>
        <p>Agile testing is a continuous testing practice integrated throughout agile sprints, where testing occurs simultaneously with development rather than as a separate final phase.</p>
      </>
    ),
  },
  {
    id: 22053,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "Why agile testing is important?",
    answer: (
      <>
        <p>Agile testing detects defects early (reducing fix cost), provides fast feedback to developers, ensures quality throughout development, and aligns closely with business requirements through continuous collaboration.</p>
      </>
    ),
  },
  {
    id: 22054,
    category: 'Software Testing',
    difficulty: 'hard',
    question: "What is data flow testing?",
    answer: (
      <>
        <p>A white-box technique that tracks the flow of variables through a program — from their definition (assignment) to their use — to identify anomalies like using undefined variables or defining variables never used.</p>
      </>
    ),
  },
  {
    id: 22055,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is the difference between retesting and regression testing?",
    answer: (
      <>
        <ul><li><strong>Retesting:</strong> Re-executing failed test cases after a bug is fixed to verify the fix resolved the specific defect.</li><li><strong>Regression testing:</strong> Running the broader test suite after any change to ensure no existing functionality is broken.</li></ul>
      </>
    ),
  },
  {
    id: 22056,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is Selenium?",
    answer: (
      <>
        <p>Selenium is an open-source framework for automating web browser interactions, supporting multiple browsers (Chrome, Firefox, Edge) and programming languages (Java, Python, C#) for web application testing.</p>
      </>
    ),
  },
  {
    id: 22057,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Name the different kind of locators in Selenium.",
    answer: (
      <>
        <p>Locators: ID, Name, Class Name, Tag Name, Link Text, Partial Link Text, CSS Selector, and XPath.</p>
      </>
    ),
  },
  {
    id: 22058,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Explain what is Xpath?",
    answer: (
      <>
        <p>XPath (XML Path Language) is a query language for navigating XML/HTML document trees. In Selenium, XPath locators identify elements using absolute or relative path expressions (e.g., <code>//input[@id='username']</code>).</p>
      </>
    ),
  },
  {
    id: 22059,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is the meaning of Ad-hoc testing?",
    answer: (
      <>
        <p>Ad-hoc testing is informal, unplanned testing with no formal test cases or documentation, relying on the tester's intuition and domain knowledge to find defects randomly.</p>
      </>
    ),
  },
  {
    id: 22060,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Explain what is exit criteria?",
    answer: (
      <>
        <p>Exit criteria define the conditions that must be met to formally conclude a testing phase — e.g., all critical defects resolved, test coverage targets met, and sign-off from stakeholders obtained.</p>
      </>
    ),
  },
  {
    id: 22061,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What are different types of Performance Testing?",
    answer: (
      <>
        <p>Types: Load Testing, Stress Testing, Spike Testing, Soak/Endurance Testing, Volume Testing, Scalability Testing, and Concurrency Testing.</p>
      </>
    ),
  },
  {
    id: 22062,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What are key challenges of software testing?",
    answer: (
      <>
        <p>Challenges: incomplete requirements, time pressure, complex environments, regression scope, test data management, keeping tests up-to-date, and coordinating distributed teams.</p>
      </>
    ),
  },
  {
    id: 22063,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "List down different types of severity.",
    answer: (
      <>
        <p>Severity levels: <strong>Critical</strong> (system crash/data loss), <strong>Major</strong> (key feature broken), <strong>Moderate</strong> (feature partially broken), <strong>Minor</strong> (cosmetic/low impact defect).</p>
      </>
    ),
  },
  {
    id: 22064,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is a silk test?",
    answer: (
      <>
        <p>Silk Test is a Micro Focus automated functional testing tool for web, mobile, and desktop applications that supports keyword-driven and data-driven test automation across multiple platforms.</p>
      </>
    ),
  },
  {
    id: 22065,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Why should you use Silk Test?",
    answer: (
      <>
        <p>Silk Test offers cross-platform support, built-in test distribution, parallel execution, script reuse, integration with CI/CD tools, and supports multiple scripting languages for robust enterprise testing.</p>
      </>
    ),
  },
  {
    id: 22066,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "How to use Selenium Grid?",
    answer: (
      <>
        <p>Selenium Grid runs tests in parallel across multiple machines and browsers. Set up a Hub (central coordinator) and Nodes (browser instances), then configure RemoteWebDriver pointing to the Hub URL to distribute tests.</p>
      </>
    ),
  },
  {
    id: 22067,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is Intranet application?",
    answer: (
      <>
        <p>An intranet application is a private network application accessible only within an organization, used for internal business processes — unlike internet applications accessible to the public.</p>
      </>
    ),
  },
  {
    id: 22068,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is HTTP?",
    answer: (
      <>
        <p><strong>HTTP</strong> (HyperText Transfer Protocol) is the application-layer protocol governing data communication on the web, defining how clients request and servers respond with web resources.</p>
      </>
    ),
  },
  {
    id: 22069,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What are the applications of HTTP?",
    answer: (
      <>
        <p>Applications: web browsing, REST API communication, file transfer, form submission, streaming media, web service calls, and online application data exchange.</p>
      </>
    ),
  },
  {
    id: 22070,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Define client-side validation?",
    answer: (
      <>
        <p>Client-side validation checks user input in the browser (using JavaScript) before sending data to the server, providing immediate feedback and reducing unnecessary server requests for basic input errors.</p>
      </>
    ),
  },
  {
    id: 22071,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is server-side validation?",
    answer: (
      <>
        <p>Server-side validation verifies submitted data on the server after receiving a request. It is the authoritative validation layer that cannot be bypassed, ensuring data integrity and security.</p>
      </>
    ),
  },
  {
    id: 22072,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "Explain the role of usability testing.",
    answer: (
      <>
        <p>Usability testing assesses ease of use, learnability, efficiency, memorability, error frequency, and user satisfaction to ensure the application provides an intuitive and pleasant user experience.</p>
      </>
    ),
  },
  {
    id: 22073,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "Name some web testing tools.",
    answer: (
      <>
        <p>Tools: Selenium, Cypress, Playwright, Postman (API testing), JMeter (performance), BrowserStack (cross-browser), SoapUI, Katalon Studio, TestNG, and OWASP ZAP (security).</p>
      </>
    ),
  },
  {
    id: 22074,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is a Proxy Server?",
    answer: (
      <>
        <p>A proxy server acts as an intermediary between clients and servers, forwarding requests and responses while providing caching, security filtering, load balancing, and anonymization services.</p>
      </>
    ),
  },
  {
    id: 22075,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "Why use Proxy Server?",
    answer: (
      <>
        <p>Proxy servers provide anonymity, content filtering, improved performance via caching, traffic monitoring, firewall protection, and access control for network security.</p>
      </>
    ),
  },
  {
    id: 22076,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "List out some commonly used Proxy Servers?",
    answer: (
      <>
        <p>Common proxy servers: Squid, Nginx (reverse proxy), HAProxy, Apache Traffic Server, Fiddler (web debugging proxy), Charles Proxy, and Burp Suite (security testing proxy).</p>
      </>
    ),
  },
  {
    id: 22077,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is a Modification Request?",
    answer: (
      <>
        <p>A Modification Request (MR) is a formal document requesting changes to existing software functionality — could be a bug fix, enhancement, or new feature change submitted by stakeholders or QA teams.</p>
      </>
    ),
  },
  {
    id: 22078,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is static testing and how is it different from dynamic testing?",
    answer: (
      <>
        <ul><li><strong>Static testing:</strong> Reviews documents, code, or designs without executing the application (walkthroughs, code reviews, inspections).</li><li><strong>Dynamic testing:</strong> Executes the application with test inputs to verify behavior at runtime.</li></ul>
      </>
    ),
  },
  {
    id: 22079,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Grey Box Testing?",
    answer: (
      <>
        <p>Grey box testing combines black-box and white-box approaches — the tester has partial knowledge of internal structures (database schemas, architecture) to design better tests without full code access.</p>
      </>
    ),
  },
  {
    id: 22080,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is a Test Suite?",
    answer: (
      <>
        <p>A test suite is a collection of related test cases grouped together for execution as a unit, typically covering a specific feature, module, or testing objective.</p>
      </>
    ),
  },
  {
    id: 22081,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is a Test Environment?",
    answer: (
      <>
        <p>A test environment is the hardware, software, network configuration, and test data setup where testing is conducted, designed to simulate production conditions as closely as possible.</p>
      </>
    ),
  },
  {
    id: 22082,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is test harness?",
    answer: (
      <>
        <p>A test harness is a collection of software tools (test runners, stubs, drivers, mock objects) and test data that enables automated execution of tests and collection of results.</p>
      </>
    ),
  },
  {
    id: 22083,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "List out some Test Deliverables.",
    answer: (
      <>
        <p>Deliverables: Test Plan, Test Cases, Test Scripts, Test Data, Test Environment Setup docs, Test Execution Report, Defect Report, Test Summary Report, and Test Closure Report.</p>
      </>
    ),
  },
  {
    id: 22084,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What does a defect report include?",
    answer: (
      <>
        <p>A defect report includes: Defect ID, Title, Description, Steps to Reproduce, Expected Result, Actual Result, Severity, Priority, Environment, Screenshots/Logs, Reporter, and Current Status.</p>
      </>
    ),
  },
  {
    id: 22085,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What are the different categories of Debugging?",
    answer: (
      <>
        <p>Debugging categories: Brute Force (print statements/logs), Backtracking (tracing backwards from failure), Cause Elimination (hypothesis elimination), and Program Slicing (isolating relevant code).</p>
      </>
    ),
  },
  {
    id: 22086,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Explain what is Big Bang Approach?",
    answer: (
      <>
        <p>Big Bang integration testing combines all modules simultaneously and tests the complete system at once. Simple to implement but makes defect isolation very difficult due to late integration.</p>
      </>
    ),
  },
  {
    id: 22087,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Gamma Testing?",
    answer: (
      <>
        <p>Gamma testing is the final stage of testing performed just before software release, focusing on verifying the software meets specified requirements and is fully ready for distribution.</p>
      </>
    ),
  },
  {
    id: 22088,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Globalization Testing?",
    answer: (
      <>
        <p>Globalization testing verifies an application functions correctly across different locales, languages, time zones, currencies, and cultural conventions without requiring redesign for each market.</p>
      </>
    ),
  },
  {
    id: 22089,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Exploratory Testing?",
    answer: (
      <>
        <p>Exploratory testing is a simultaneous learning, test design, and execution approach where testers explore the application freely, adapting their tests based on what they discover.</p>
      </>
    ),
  },
  {
    id: 22090,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Soak Testing?",
    answer: (
      <>
        <p>Soak testing (endurance testing) runs the system under a significant load for an extended period to detect memory leaks, resource exhaustion, or performance degradation that only appear over time.</p>
      </>
    ),
  },
  {
    id: 22091,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Scalability Testing?",
    answer: (
      <>
        <p>Scalability testing evaluates the system's ability to handle growing amounts of load, users, or data by scaling up (more resources per server) or scaling out (more server instances).</p>
      </>
    ),
  },
  {
    id: 22092,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Reliability Testing?",
    answer: (
      <>
        <p>Reliability testing verifies that software performs its required functions consistently under stated conditions for a specified time period without failure, measuring Mean Time Between Failures (MTBF).</p>
      </>
    ),
  },
  {
    id: 22093,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is A/B Testing?",
    answer: (
      <>
        <p>A/B testing compares two versions of a feature (A and B) by exposing different user groups to each version and analyzing metrics (conversion rates, engagement) to determine which performs better.</p>
      </>
    ),
  },
  {
    id: 22094,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Exhaustive Testing?",
    answer: (
      <>
        <p>Exhaustive testing attempts to test all possible input combinations and scenarios. It is theoretically ideal but practically impossible for complex systems, which is why risk-based testing is used instead.</p>
      </>
    ),
  },
  {
    id: 22095,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is a Bug Priority?",
    answer: (
      <>
        <p>Bug priority indicates the urgency of fixing a defect from the business perspective — how quickly the development team must resolve it. Priorities: Critical, High, Medium, and Low.</p>
      </>
    ),
  },
  {
    id: 22096,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "What is Masked Defect?",
    answer: (
      <>
        <p>A masked defect is a bug whose presence is hidden by another defect — the masking defect must be fixed first before the underlying masked defect becomes visible and can be tested.</p>
      </>
    ),
  },
  {
    id: 22097,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is a Standalone application?",
    answer: (
      <>
        <p>A standalone application runs locally on a single device without requiring network connectivity or server interaction, unlike web or client-server applications (e.g., Notepad, VLC Media Player).</p>
      </>
    ),
  },
  {
    id: 22098,
    category: 'Software Testing',
    difficulty: 'medium',
    question: "Explain a Bug Life Cycle?",
    answer: (
      <>
        <p>Bug life cycle: New &rarr; Assigned &rarr; Open (in progress) &rarr; Fixed &rarr; Pending Retest &rarr; Retest &rarr; Verified &rarr; Closed. Other possible states: Rejected, Deferred, Duplicate, Not a Bug.</p>
      </>
    ),
  },
  {
    id: 22099,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is a HotFix?",
    answer: (
      <>
        <p>A hotfix is an emergency patch released outside the normal release cycle to fix a critical production bug that cannot wait for the next scheduled release, typically deployed with minimal testing.</p>
      </>
    ),
  },
  {
    id: 22100,
    category: 'Software Testing',
    difficulty: 'easy',
    question: "What is a bug bounty program?",
    answer: (
      <>
        <p>A bug bounty program rewards external security researchers (ethical hackers) with monetary compensation for responsibly disclosing security vulnerabilities found in an organization's software or systems.</p>
      </>
    ),
  },
];
