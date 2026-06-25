export const qaRoadmap = [
  {
    number: '01',
    title: 'Manual Testing',
    subtitle: 'Quality fundamentals & methodology',
    topics: [
      {
        name: 'Testing Life Cycle (STLC)',
        tags: ['Core', 'Process'],
        desc: 'Requirements analysis, test planning, test case design, execution, defect reporting, and test closure phases.'
      },
      {
        name: 'Types of Testing',
        tags: ['Core'],
        desc: 'Functional vs non-functional, smoke, sanity, regression, integration, UAT, performance, and security testing.'
      },
      {
        name: 'Test Case Design',
        tags: ['Skills'],
        desc: 'Boundary value analysis, equivalence partitioning, decision tables, state transition, and use case testing techniques.'
      },
      {
        name: 'Defect Life Cycle',
        tags: ['Process'],
        desc: 'Bug severity vs priority, defect states (New → Open → Fixed → Verified → Closed), and reporting best practices.'
      },
      {
        name: 'Agile & Scrum',
        tags: ['Methodology'],
        desc: 'Sprint planning, daily standups, retrospectives, definition of done, and QA\'s role in an Agile team.'
      }
    ]
  },
  {
    number: '02',
    title: 'Core Java for QA',
    subtitle: 'Programming foundation for automation',
    topics: [
      {
        name: 'Java Fundamentals',
        tags: ['Core', 'Essential'],
        desc: 'Variables, data types, operators, control flow, arrays, and writing clean, readable Java code from scratch.'
      },
      {
        name: 'OOP Principles',
        tags: ['OOP'],
        desc: 'Classes, objects, inheritance, polymorphism, encapsulation, abstract classes, and interfaces for test framework design.'
      },
      {
        name: 'Collections & Exception Handling',
        tags: ['Advanced'],
        desc: 'ArrayLists, HashMaps, Iterators, try/catch/finally, custom exceptions, and file I/O for test data management.'
      },
      {
        name: 'Strings & Regex',
        tags: ['Utility'],
        desc: 'String manipulation methods, StringBuilder, Pattern matching with Regex — essential for parsing web element text.'
      }
    ]
  },
  {
    number: '03',
    title: 'Selenium WebDriver',
    subtitle: 'Browser automation at scale',
    topics: [
      {
        name: 'WebDriver Setup',
        tags: ['Core', 'Setup'],
        desc: 'ChromeDriver, GeckoDriver, WebDriverManager, browser options, headless mode, and cross-browser configuration.'
      },
      {
        name: 'Locators & Selectors',
        tags: ['Core', 'Essential'],
        desc: 'ID, Name, ClassName, TagName, LinkText, CSS Selectors, and XPath (absolute vs relative, axes, predicates).'
      },
      {
        name: 'WebElement Interactions',
        tags: ['Actions'],
        desc: 'click, sendKeys, getText, isDisplayed, Dropdowns (Select class), file uploads, radio buttons, and checkboxes.'
      },
      {
        name: 'Waits & Synchronization',
        tags: ['Stability'],
        desc: 'Implicit waits, explicit waits with ExpectedConditions, FluentWait, and avoiding flaky tests through proper synchronization.'
      },
      {
        name: 'Advanced Interactions',
        tags: ['Advanced'],
        desc: 'Actions class (hover, drag-and-drop, right-click), Alerts, iFrames, multiple windows/tabs, JavaScript executor.'
      }
    ]
  },
  {
    number: '04',
    title: 'TestNG & Frameworks',
    subtitle: 'Structured, scalable test automation',
    topics: [
      {
        name: 'TestNG Core',
        tags: ['Framework', 'Core'],
        desc: 'Annotations (@Test, @BeforeClass, @AfterMethod), grouping, priority, dependencies, parallel execution, and XML suites.'
      },
      {
        name: 'Page Object Model (POM)',
        tags: ['Design Pattern'],
        desc: 'Separating page locators from test logic, PageFactory with @FindBy, fluent interfaces, and maintainable test code.'
      },
      {
        name: 'Data Driven Testing',
        tags: ['Patterns', 'Excel'],
        desc: '@DataProvider in TestNG, reading test data from Excel with Apache POI, and parameterized test execution.'
      },
      {
        name: 'Reporting',
        tags: ['Reporting'],
        desc: 'Allure Reports, ExtentReports — embedding screenshots on failure, test execution summary, and trend dashboards.'
      }
    ]
  },
  {
    number: '05',
    title: 'CI/CD & Tools',
    subtitle: 'Automate the pipeline',
    topics: [
      {
        name: 'Maven Build Tool',
        tags: ['Build', 'Core'],
        desc: 'Project structure (pom.xml), dependency management, Maven Surefire Plugin for running TestNG suites, and lifecycle phases.'
      },
      {
        name: 'Jenkins CI',
        tags: ['CI/CD'],
        desc: 'Setting up Jenkins jobs, triggering tests on code push, pipeline scripting (Declarative), and publishing test reports.'
      },
      {
        name: 'Jira',
        tags: ['Management'],
        desc: 'Creating and linking defects to user stories, sprint tracking, defect dashboards, and integrating with TestRail for test management.'
      },
      {
        name: 'Git & GitHub',
        tags: ['VCS'],
        desc: 'Version-controlling automation code, branching strategy for test suites, and collaborative code reviews via Pull Requests.'
      }
    ]
  }
];
