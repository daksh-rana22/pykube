import React from 'react';

export const JENKINS_QUESTIONS = [
  {
    id: 11001,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What is the meaning of Jenkins?",
    answer: (
      <>
        <p><strong>Jenkins</strong> is a popular open-source Automation Server built in Java. It supports developers in building, testing, and deploying their software projects, facilitating continuous integration and continuous delivery (CI/CD) workflows.</p>
      </>
    ),
  },
  {
    id: 11002,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What is the use of Jenkins?",
    answer: (
      <>
        <p>Jenkins is used to automate repetitive tasks throughout the software development life cycle, such as checking out source code, compiling files, running unit tests, packaging distributions, and deploying artifacts to staging or production environments.</p>
      </>
    ),
  },
  {
    id: 11003,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "List some key features of Jenkins.",
    answer: (
      <>
        <p>Key features: easy installation, web-based administration interface, rich plugin ecosystem (1500+ plugins), distributed master-agent architecture, and Pipeline-as-Code support (Jenkinsfile).</p>
      </>
    ),
  },
  {
    id: 11004,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What are the benefits of using Jenkins?",
    answer: (
      <>
        <p>Benefits: early bug detection during integration, automated build and deploy pipelines, cross-platform support (Java), high extensibility, and a strong open-source community.</p>
      </>
    ),
  },
  {
    id: 11005,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "How to achieve continuous integration through Jenkins?",
    answer: (
      <>
        <p>Continuous integration is achieved by configuring Jenkins jobs to poll SCM repositories (like Git) for new commits or trigger builds via webhooks. When changes are detected, Jenkins compiles code and runs automated tests immediately.</p>
      </>
    ),
  },
  {
    id: 11006,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "Name some other continuous integration tools. How is Jenkins better than others?",
    answer: (
      <>
        <p>Alternative CI tools: GitLab CI, Travis CI, CircleCI, and Bamboo. Jenkins stands out due to its huge, mature plugin ecosystem, complete customization flexibility, and being free and self-hostable.</p>
      </>
    ),
  },
  {
    id: 11007,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What do you mean by DevOps? What is the role of Jenkins in it?",
    answer: (
      <>
        <p><strong>DevOps</strong> is a culture and practice bridging Development and Operations teams. Jenkins acts as the central integration engine in DevOps pipelines, automating code builds, testing stages, and cloud deployments.</p>
      </>
    ),
  },
  {
    id: 11008,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "Specify the system requirements to install Jenkins.",
    answer: (
      <>
        <p>Requires Java Runtime Environment (JRE) or Java Development Kit (JDK 11, 17, or 21). Minimal hardware: 256MB RAM (1GB+ recommended) and 10GB drive space for logs and build files.</p>
      </>
    ),
  },
  {
    id: 11009,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What is the process of installing Jenkins?",
    answer: (
      <>
        <p>Install by downloading the war file and running <code>java -jar jenkins.war</code>, or by setting up native package managers (apt, yum, brew) or running a Docker container: <code>docker run -p 8080:8080 jenkins/jenkins:lts</code>.</p>
      </>
    ),
  },
  {
    id: 11010,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "Name some important plugins in Jenkins.",
    answer: (
      <>
        <p>Important plugins: Git plugin, Pipeline plugin, Credentials Plugin, Blue Ocean, Docker Pipeline, Maven Integration, and Role-based Authorization Strategy.</p>
      </>
    ),
  },
  {
    id: 11011,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What do you understand by Groovy?",
    answer: (
      <>
        <p><strong>Groovy</strong> is an Apache object-oriented programming language for the Java platform. Jenkins uses Groovy script syntax to define pipeline execution steps in Jenkinsfiles.</p>
      </>
    ),
  },
  {
    id: 11012,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "Which SCM tools does Jenkins support?",
    answer: (
      <>
        <p>Supports Git, Subversion (SVN), Mercurial, Perforce, CVS, and ClearCase via appropriate plugins.</p>
      </>
    ),
  },
  {
    id: 11013,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What is the meaning of a job in Jenkins?",
    answer: (
      <>
        <p>A <strong>Job</strong> (or project) is a user-configured task that Jenkins executes, containing step instructions to pull code, run test scripts, compile files, and execute post-build triggers.</p>
      </>
    ),
  },
  {
    id: 11014,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What is a Jenkins pipeline?",
    answer: (
      <>
        <p>A suite of plugins supporting the implementation and integration of continuous delivery pipelines into Jenkins. It represents your entire software delivery process as a single script.</p>
      </>
    ),
  },
  {
    id: 11015,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "Name the types of Jenkins pipelines.",
    answer: (
      <>
        <ul><li><strong>Declarative Pipeline:</strong> Structured syntax providing a simpler, guided format.</li><li><strong>Scripted Pipeline:</strong> Flexible, Groovy-based syntax for complex pipeline structures.</li></ul>
      </>
    ),
  },
  {
    id: 11016,
    category: 'Jenkins',
    difficulty: 'hard',
    question: "Which syntax does Jenkins use to schedule SVN polling or build jobs?",
    answer: (
      <>
        <p>Uses the standard <strong>cron syntax</strong> consisting of 5 fields: <code>MINUTE HOUR DOM MONTH DOW</code> (e.g. <code>H/15 * * * *</code> polls every 15 minutes).</p>
      </>
    ),
  },
  {
    id: 11017,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "Explain how to create a build job in Jenkins.",
    answer: (
      <>
        <p>Go to Jenkins Dashboard  &rarr;  New Item  &rarr;  enter a name  &rarr;  select Freestyle project or Pipeline  &rarr;  configure SCM details  &rarr;  add Build Steps  &rarr;  click Save.</p>
      </>
    ),
  },
  {
    id: 11018,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "How to use a third-party tool in Jenkins?",
    answer: (
      <>
        <p>Configure third-party tool locations (like Maven, Gradle, JDK) under 'Global Tool Configuration', and reference them in pipeline files using the <code>tools</code> directive.</p>
      </>
    ),
  },
  {
    id: 11019,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "How does Jenkins authenticate the users?",
    answer: (
      <>
        <p>Via internal user databases, LDAP directory structures, Active Directory integration, GitHub OAuth credentials, or custom security plugins.</p>
      </>
    ),
  },
  {
    id: 11020,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What is the key difference between Bamboo & Jenkins?",
    answer: (
      <>
        <ul><li><strong>Jenkins:</strong> Free open-source tool, highly extensible via a large plugin ecosystem, self-configured.</li><li><strong>Bamboo:</strong> Paid commercial tool by Atlassian, features out-of-the-box Jira/Bitbucket integrations, and built-in deployment workflows.</li></ul>
      </>
    ),
  },
  {
    id: 11021,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "Explain the process of Jenkins.",
    answer: (
      <>
        <p>Commit code  &rarr;  Git triggers webhook  &rarr;  Jenkins fetches commits  &rarr;  runs build compiler  &rarr;  runs tests  &rarr;  logs results  &rarr;  archives artifacts  &rarr;  sends alerts.</p>
      </>
    ),
  },
  {
    id: 11022,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "How to create a backup & copy files in Jenkins?",
    answer: (
      <>
        <p>Backup files by saving the <code>JENKINS_HOME</code> directory containing configurations, jobs, and user credentials. Alternatively, use the ThinBackup plugin to automate schedules.</p>
      </>
    ),
  },
  {
    id: 11023,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What is a Domain-Specific Language in Jenkins?",
    answer: (
      <>
        <p><strong>DSL</strong> refers to the Groovy-based pipeline syntax (Declarative or Scripted DSL) used to code execution steps within a Jenkinsfile.</p>
      </>
    ),
  },
  {
    id: 11024,
    category: 'Jenkins',
    difficulty: 'hard',
    question: "How to make a Multibranch Pipeline in Jenkins?",
    answer: (
      <>
        <p>New Item  &rarr;  select 'Multibranch Pipeline'. Configure SCM source (like GitHub repository). Jenkins automatically scans all branches and spawns pipelines for branches containing a <code>Jenkinsfile</code>.</p>
      </>
    ),
  },
  {
    id: 11025,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "Elaborate on the Blue Ocean in Jenkins.",
    answer: (
      <>
        <p><strong>Blue Ocean</strong> is a modern visual user experience dashboard for Jenkins pipelines. It offers clean, graphical representations of pipeline stages and intuitive build debugging.</p>
      </>
    ),
  },
  {
    id: 11026,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What do you mean by continuous testing?",
    answer: (
      <>
        <p>Executing automated tests (unit, integration, regression, security) at every stage of the delivery pipeline to discover errors immediately.</p>
      </>
    ),
  },
  {
    id: 11027,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "How to integrate Git with Jenkins?",
    answer: (
      <>
        <p>Install the Git Plugin  &rarr;  go to Job configurations  &rarr;  select Git under Source Code Management  &rarr;  enter repository URL  &rarr;  add access credentials  &rarr;  save configuration.</p>
      </>
    ),
  },
  {
    id: 11028,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "Highlight the differences between Continuous Delivery, Continuous Integration, and Continuous Deployment.",
    answer: (
      <>
        <ul><li><strong>Continuous Integration:</strong> Automates merging code and running tests on commits.</li><li><strong>Continuous Delivery:</strong> Automates release packaging, requiring manual triggers to push releases to production.</li><li><strong>Continuous Deployment:</strong> Automates deploying every passing change to production servers automatically.</li></ul>
      </>
    ),
  },
  {
    id: 11029,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What is Pipeline-as-a-Code in Jenkins? Explain different types of pipelines.",
    answer: (
      <>
        <p>Defining deployment pipelines inside text files (Jenkinsfile) checked into code repositories. Types include Declarative (structured) and Scripted (Groovy-based).</p>
      </>
    ),
  },
  {
    id: 11030,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What is an Agent Directive in Jenkins?",
    answer: (
      <>
        <p>The <code>agent</code> directive specifies where pipeline build steps should execute. Options include <code>any</code>, <code>none</code>, or specific labels (e.g. <code>agent {"{"} label 'docker-node' {"}"}</code>).</p>
      </>
    ),
  },
  {
    id: 11031,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "Differentiate between Ant, Maven, & Jenkins?",
    answer: (
      <>
        <ul><li><strong>Ant:</strong> A low-level build compile tool mapping tasks via XML configuration files.</li><li><strong>Maven:</strong> A declarative build automation tool managing project dependencies automatically.</li><li><strong>Jenkins:</strong> An orchestrator server that schedules and executes Ant/Maven builds automatically.</li></ul>
      </>
    ),
  },
  {
    id: 11032,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "How to set up a Jenkins job?",
    answer: (
      <>
        <p>Click 'New Item'  &rarr;  select Freestyle or Pipeline  &rarr;  name it  &rarr;  configure SCM details and build triggers  &rarr;  add build steps  &rarr;  save.</p>
      </>
    ),
  },
  {
    id: 11033,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What are the ways to secure Jenkins?",
    answer: (
      <>
        <p>Security steps: enable security authentication, configure Matrix-based security authorizations, enforce HTTPS URLs, and regularly update plugins.</p>
      </>
    ),
  },
  {
    id: 11034,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "How to define parameters in Jenkins?",
    answer: (
      <>
        <p>Check 'This project is parameterized' in settings, adding parameter types (String, Boolean, Choice). In pipelines, access values via <code>params.PARAMETER_NAME</code>.</p>
      </>
    ),
  },
  {
    id: 11035,
    category: 'Jenkins',
    difficulty: 'hard',
    question: "Mention the ways to configure the Jenkins node agent to communicate with the Jenkins master.",
    answer: (
      <>
        <p>Agents communicate via: Launching agents via SSH keys from the master, running agent JNLP (Java Web Start) connections, or launching agents using Windows service configurations.</p>
      </>
    ),
  },
  {
    id: 11036,
    category: 'Jenkins',
    difficulty: 'hard',
    question: "Explain what a trigger is. Give an example of how a repository is polled when a new commit is detected.",
    answer: (
      <>
        <p>Triggers schedule build executions. For polling, check 'Poll SCM' and set cron timings (e.g. <code>*/5 * * * *</code>). Every 5 minutes, Jenkins compares remote commit hashes with local states, starting builds on new matches.</p>
      </>
    ),
  },
  {
    id: 11037,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "Why use the JENKINS_HOME directory?",
    answer: (
      <>
        <p>It is the server root storage folder. Storing all job settings, build histories, plugin binaries, workspace files, and server keys.</p>
      </>
    ),
  },
  {
    id: 11038,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What do you mean by a backup plugin? Why use it?",
    answer: (
      <>
        <p>Plugins (like ThinBackup) that automate backing up settings and histories to backup drives, preventing data loss during crashes.</p>
      </>
    ),
  },
  {
    id: 11039,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What to do if your project build is broken?",
    answer: (
      <>
        <p>Inspect the console logs to identify compile or test failures, locate the offending commit, revert changes, or push fixes immediately.</p>
      </>
    ),
  },
  {
    id: 11040,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What is a Maven? What are the benefits of integrating Maven with Jenkins?",
    answer: (
      <>
        <p>Maven is a build lifecycle management tool. Integration allows automatic dependency resolution, unit testing, and test report aggregation.</p>
      </>
    ),
  },
  {
    id: 11041,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "How to run automated tests on Jenkins?",
    answer: (
      <>
        <p>Add test execution commands (e.g. <code>mvn test</code> or <code>npm test</code>) to build steps or pipeline stages, archiving results for display.</p>
      </>
    ),
  },
  {
    id: 11042,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What do you understand about Kubernetes?",
    answer: (
      <>
        <p>Kubernetes is a container orchestration platform. Jenkins integrates with Kubernetes to spin up dynamic build agent containers on demand, cleaning them up after builds.</p>
      </>
    ),
  },
  {
    id: 11043,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What are the requirements for using Jenkins?",
    answer: (
      <>
        <p>Java Runtime (JRE/JDK) environment, SCM access permissions, and hosting hardware allocations.</p>
      </>
    ),
  },
  {
    id: 11044,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "How to move or copy Jenkins from one server to another?",
    answer: (
      <>
        <p>Copy files by moving the entire contents of the <code>JENKINS_HOME</code> folder to the destination server, updating path variables, and restarting Jenkins.</p>
      </>
    ),
  },
  {
    id: 11045,
    category: 'Jenkins',
    difficulty: 'hard',
    question: "What is the procedure for deploying a custom build of a core plugin?",
    answer: (
      <>
        <p>Compile the custom plugin to produce a <code>.hpi</code> file  &rarr;  go to Jenkins Dashboard  &rarr;  Manage Jenkins  &rarr;  Plugins  &rarr;  Advanced  &rarr;  upload the <code>.hpi</code> file  &rarr;  restart.</p>
      </>
    ),
  },
  {
    id: 11046,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What are the two main components that Jenkins is integrated with?",
    answer: (
      <>
        <p>Integrated primarily with Version Control Systems (SCM like Git) and Build tools (like Maven, Gradle, or npm compilers).</p>
      </>
    ),
  },
  {
    id: 11047,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "Define continuous integration in Jenkins.",
    answer: (
      <>
        <p>A development practice where developers merge code into main branches daily, triggering automated build and test steps instantly via Jenkins.</p>
      </>
    ),
  },
  {
    id: 11048,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What is the relation between Jenkins & Hudson?",
    answer: (
      <>
        <p>Jenkins was created as a fork of Hudson in 2011 following a dispute with Oracle. Hudson was eventually deprecated, and Jenkins became the dominant active branch.</p>
      </>
    ),
  },
  {
    id: 11049,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "How to ensure that your project builds don\u2019t break in Jenkins?",
    answer: (
      <>
        <p>Ensure builds do not break by setting up pre-commit validation hook runs locally, using feature branch builds, and testing code edits prior to merging.</p>
      </>
    ),
  },
  {
    id: 11050,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "Which commands are used to start Jenkins manually?",
    answer: (
      <>
        <p>For standalone wars, run: <code>java -jar jenkins.war</code>. On Linux, run: <code>sudo systemctl start jenkins</code>.</p>
      </>
    ),
  },
  {
    id: 11051,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What does the CI/CD pipeline stand for?",
    answer: (
      <>
        <p>Continuous Integration and Continuous Delivery / Continuous Deployment.</p>
      </>
    ),
  },
  {
    id: 11052,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What is a Jenkinsfile?",
    answer: (
      <>
        <p>A text file containing pipeline code configuration checked directly into SCM code roots (Pipeline-as-Code).</p>
      </>
    ),
  },
  {
    id: 11053,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "Why use Jenkins with Selenium?",
    answer: (
      <>
        <p>Automates end-to-end user browser UI testing, running test suites on every build to find regression errors automatically.</p>
      </>
    ),
  },
  {
    id: 11054,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "Mention some default environmental variables in Jenkins.",
    answer: (
      <>
        <p>Default variables: <code>BUILD_ID</code>, <code>BUILD_NUMBER</code>, <code>JOB_NAME</code>, <code>JENKINS_URL</code>, and <code>WORKSPACE</code>.</p>
      </>
    ),
  },
  {
    id: 11055,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What are some key aspects of the Jenkins pipeline?",
    answer: (
      <>
        <p>Key aspects include: Pipeline-as-Code files, visual stage steps, rollback safety logs, build parameters, and master-agent step scheduling.</p>
      </>
    ),
  },
  {
    id: 11056,
    category: 'Jenkins',
    difficulty: 'hard',
    question: "What are the three security mechanisms?",
    answer: (
      <>
        <p>Mechanisms: User Authentication (verifying users), User Authorization (permission matrices), and SCM security tokens.</p>
      </>
    ),
  },
  {
    id: 11057,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What is Post in Jenkins?",
    answer: (
      <>
        <p>The <code>post</code> section defines actions that execute at the end of pipelines based on build outcomes (e.g. <code>success</code>, <code>failure</code>, or <code>always</code>).</p>
      </>
    ),
  },
  {
    id: 11058,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "How to clone a Git Repository via Jenkins?",
    answer: (
      <>
        <p>In pipeline scripts, execute: <br/> <code>git credentialsId: 'cred-id', url: 'https://github.com/user/repo.git'</code></p>
      </>
    ),
  },
  {
    id: 11059,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "Jenkins is built on which programming language?",
    answer: (
      <>
        <p>Jenkins is written and compiled using the <strong>Java</strong> programming language.</p>
      </>
    ),
  },
  {
    id: 11060,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "Why use Pipelines in Jenkins?",
    answer: (
      <>
        <p>Pipelines let you check in delivery steps to version repositories, tracking pipeline edits and supporting complex build branches.</p>
      </>
    ),
  },
  {
    id: 11061,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What is Post-section, Agent, & Jenkinsfile?",
    answer: (
      <>
        <ul><li><code>post-section</code>: Script actions running on build completions.</li><li><code>agent</code>: Configures target servers executing steps.</li><li><code>Jenkinsfile</code>: Pipeline configuration text file.</li></ul>
      </>
    ),
  },
  {
    id: 11062,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What are the prerequisites for using Jenkins?",
    answer: (
      <>
        <p>A server host, Java SDK installation configurations, database access keys (if needed), and Git/SCM code repository access.</p>
      </>
    ),
  },
  {
    id: 11063,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "List the categories of jobs in Jenkins.",
    answer: (
      <>
        <p>Freestyle projects, Pipeline projects, Multibranch Pipelines, Folder structures, and Multi-configuration projects.</p>
      </>
    ),
  },
  {
    id: 11064,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What do you understand by Scripted Pipelines in Jenkins?",
    answer: (
      <>
        <p>A scripted pipeline is an imperative style built with Groovy language scripts, offering high programming flexibility for complex flows.</p>
      </>
    ),
  },
  {
    id: 11065,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "Which Environmental Directive is used in Jenkins?",
    answer: (
      <>
        <p>The <code>environment</code> directive defines key-value variables globally or within stages (e.g. <code>environment {"{"} DB_USER = 'dbadmin' {"}"}</code>).</p>
      </>
    ),
  },
  {
    id: 11066,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "Mention the different ways in which a build can be scheduled in Jenkins.",
    answer: (
      <>
        <p>Builds are scheduled by: triggering after other builds complete, polling SCM commits via cron, Webhook pushes, or time-interval schedules.</p>
      </>
    ),
  },
  {
    id: 11067,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "What is the use of the role-based strategy plugin?",
    answer: (
      <>
        <p>It allows administrators to define fine-grained roles (Global, Project, Agent) and assign them to specific user groups to secure jobs.</p>
      </>
    ),
  },
  {
    id: 11068,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What is a stage block in Jenkins?",
    answer: (
      <>
        <p>A block grouping step sequences conceptually (e.g. 'Build', 'Test', 'Deploy') displayed on dashboards.</p>
      </>
    ),
  },
  {
    id: 11069,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "Define flow control in Jenkins.",
    answer: (
      <>
        <p>Deciding step directions using conditions (e.g., executing deployment stages only on production branch tags).</p>
      </>
    ),
  },
  {
    id: 11070,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What is a declarative pipeline in Jenkins?",
    answer: (
      <>
        <p>A simplified, opinionated visual template style defining steps using clean block directives.</p>
      </>
    ),
  },
  {
    id: 11071,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "What is an SCM in Jenkins?",
    answer: (
      <>
        <p>Source Control Management (e.g. Git, SVN), configuring how Jenkins fetches project repository files.</p>
      </>
    ),
  },
  {
    id: 11072,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "How to change a port for Jenkins?",
    answer: (
      <>
        <p>In setup configurations (like <code>/etc/default/jenkins</code> or systemd properties files), modify the port config key: <code>HTTP_PORT=9090</code>.</p>
      </>
    ),
  },
  {
    id: 11073,
    category: 'Jenkins',
    difficulty: 'medium',
    question: "How can you configure Docker in Jenkins?",
    answer: (
      <>
        <p>Install Docker plugins, configure Docker daemon TCP APIs under configurations, and execute build steps inside containers: <code>agent {"{"} docker {"{"} image 'node:20-alpine' {"}"} {"}"}</code>.</p>
      </>
    ),
  },
  {
    id: 11074,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "When to use a GitHub plugin in Jenkins?",
    answer: (
      <>
        <p>Use to connect GitHub repositories, enabling automatic build triggers on GitHub Webhook push notifications.</p>
      </>
    ),
  },
  {
    id: 11075,
    category: 'Jenkins',
    difficulty: 'easy',
    question: "How can you configure Jenkins with Maven?",
    answer: (
      <>
        <p>Install Maven plugins, set Maven installation paths in global configurations, and run build targets using <code>mvn clean install</code>.</p>
      </>
    ),
  },
  {
    id: 11076,
    category: 'Jenkins',
    difficulty: 'hard',
    question: "What is the process of creating a slave node in Jenkins?",
    answer: (
      <>
        <p>Manage Jenkins  &rarr;  Nodes  &rarr;  New Node  &rarr;  configure agent directory details and execution labels  &rarr;  launch agent on slave machines connecting back to the master controller.</p>
      </>
    ),
  },
];
