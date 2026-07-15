import React from 'react';

export const DATA_ANALYST_QUESTIONS = [
  {
    id: 1001,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What are the responsibilities of a Data Analyst?",
    answer: (
      <>
        <p>A Data Analyst is responsible for translating data into actionable business insights. Their key responsibilities include:</p>
                <ul>
                  <li><strong>Data Collection:</strong> Gathering data from primary and secondary sources using SQL queries, APIs, or web scraping.</li>
                  <li><strong>Data Cleaning:</strong> Filtering, parsing, and preprocessing raw data to remove noise, duplicates, and errors.</li>
                  <li><strong>Data Analysis:</strong> Applying statistical techniques and machine learning algorithms to identify trends, correlations, and patterns.</li>
                  <li><strong>Data Visualization:</strong> Building interactive dashboards and reports using tools like Tableau, Power BI, or Looker to present findings.</li>
                  <li><strong>Stakeholder Collaboration:</strong> Communicating insights to business teams to drive strategic decision-making.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1002,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What are the different challenges one faces during data analysis?",
    answer: (
      <>
        <p>Data analysts face several operational and technical challenges throughout the data lifecycle:</p>
                <ul>
                  <li><strong>Poor Data Quality:</strong> Incomplete, duplicate, inconsistent, or flat-out incorrect data.</li>
                  <li><strong>Data Silos:</strong> Data stored in fragmented, incompatible systems across different departments.</li>
                  <li><strong>Scalability Issues:</strong> Handling extremely large datasets that slow down traditional queries and processing pipelines.</li>
                  <li><strong>Misaligned Expectations:</strong> Disconnect between the technical results of an analysis and the business objectives.</li>
                  <li><strong>Security & Privacy:</strong> Ensuring compliance with strict data privacy laws (e.g., GDPR, CCPA) while performing analysis.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1003,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "Explain data cleansing?",
    answer: (
      <>
        <p><strong>Data cleansing</strong> (or data cleaning) is the process of identifying and correcting corrupt, inaccurate, or irrelevant records from a recordset, table, or database.</p>
                <p>The standard workflow involves:</p>
                <ol>
                  <li>Removing duplicate or irrelevant observations.</li>
                  <li>Fixing structural errors (e.g., typos, inconsistent capitalization, mismatched data types).</li>
                  <li>Handling missing data (either through imputation, omission, or flag values).</li>
                  <li>Filtering out outliers that represent data entry errors.</li>
                  <li>Validating the cleaned dataset against business logic and integrity constraints.</li>
                </ol>
      </>
    ),
  },
  {
    id: 1004,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Write the difference between data mining and data profiling?",
    answer: (
      <>
        <p>Although related, data mining and data profiling serve different purposes in the data lifecycle:</p>
                <ul>
                  <li><strong>Data Profiling:</strong> The process of analyzing raw data to understand its structure, content, relationships, and quality. It is done at the beginning of a project to assess patterns, null counts, and data types (e.g., "What does our data look like?").</li>
                  <li><strong>Data Mining:</strong> The process of discovering hidden patterns, anomalies, correlations, and trends in large datasets using machine learning, statistics, and database systems (e.g., "What insights can we extract from this data?").</li>
                </ul>
      </>
    ),
  },
  {
    id: 1005,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Which validation methods are employed by data analysts?",
    answer: (
      <>
        <p>Data validation ensures the integrity, cleanliness, and accuracy of data before analysis. Common methodologies include:</p>
                <ul>
                  <li><strong>Data Type Validation:</strong> Verifying that values belong to the correct data type (e.g., integers, dates).</li>
                  <li><strong>Range Validation:</strong> Checking that values fall within acceptable logical boundaries (e.g., age between 0 and 120).</li>
                  <li><strong>Constraint Validation:</strong> Ensuring relational constraints are met, such as unique constraints, non-null requirements, and foreign key integrity.</li>
                  <li><strong>Consistency Validation:</strong> Cross-referencing related data points (e.g., Delivery Date should be after Order Date).</li>
                  <li><strong>Structured Validation:</strong> Verifying file formats and schema compliance (e.g., XML/JSON schemas).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1006,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "Explain Outlier?",
    answer: (
      <>
        <p>An <strong>outlier</strong> is a data point that differs significantly from other observations in a dataset. Outliers can occur due to experimental variability, measurement errors, or genuine rare occurrences.</p>
                <p>Common detection techniques include:</p>
                <ul>
                  <li><strong>Z-Score:</strong> Measuring how many standard deviations a data point is from the mean. Typically, |Z| &gt; 3 indicates an outlier.</li>
                  <li><strong>IQR (Interquartile Range) Method:</strong> Outliers are defined as points falling outside: <br/><code>[Q1 - 1.5 * IQR, Q3 + 1.5 * IQR]</code>.</li>
                  <li><strong>Visualizations:</strong> Using box plots and scatter plots to inspect outliers visually.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1007,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What do you mean by data visualization?",
    answer: (
      <>
        <p><strong>Data visualization</strong> is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.</p>
                <p>Effective visualization simplifies complex data structures and aids decision-makers by making data understandable at a single glance.</p>
      </>
    ),
  },
  {
    id: 1008,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "What do you mean by collisions in a hash table? Explain the ways to avoid it.",
    answer: (
      <>
        <p>A <strong>collision</strong> occurs in a hash table when two different keys hash to the exact same index in the underlying array. Since each slot can store only a limited amount of data, collisions must be resolved.</p>
                <p>Common collision resolution strategies include:</p>
                <ul>
                  <li><strong>Chaining (Open Hashing):</strong> Storing elements that hash to the same bucket in a linked list or dynamic array attached to that index.</li>
                  <li><strong>Open Addressing (Closed Hashing):</strong> Finding another open slot in the table when a collision occurs using methods like:
                    <ul>
                      <li><em>Linear Probing:</em> Searching sequentially (index + 1, index + 2, etc.).</li>
                      <li><em>Quadratic Probing:</em> Searching slots at quadratic intervals (index + 1², index + 2², etc.).</li>
                      <li><em>Double Hashing:</em> Using a second hash function to compute the probe step size.</li>
                    </ul>
                  </li>
                </ul>
      </>
    ),
  },
  {
    id: 1009,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Explain Collaborative Filtering?",
    answer: (
      <>
        <p><strong>Collaborative Filtering</strong> is a technique used by recommendation systems to make predictions about the interests of a user by collecting preferences from many users. It assumes that if person A has the same opinion as person B on an issue, A is more likely to share B's opinion on a different issue.</p>
                <p>Main types include:</p>
                <ul>
                  <li><strong>User-based:</strong> Recommends items by finding similar users (e.g., "Users like you also bought...").</li>
                  <li><strong>Item-based:</strong> Recommends items that are similar to items the user has liked in the past, based on other users' ratings.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1010,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What do you mean by Time Series Analysis? Where is it used?",
    answer: (
      <>
        <p><strong>Time Series Analysis (TSA)</strong> is a statistical technique that deals with time-series data or trend analysis. Time-series data means data index/ordered with time (hourly, daily, monthly, etc.).</p>
                <p>It is widely used in:</p>
                <ul>
                  <li>Stock market forecasting and financial planning.</li>
                  <li>Sales and inventory forecasting.</li>
                  <li>Weather forecasting.</li>
                  <li>Website traffic analysis.</li>
                  <li>Sensor data analysis in IoT (Internet of Things).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1011,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "What do you mean by clustering algorithms? Write different properties of clustering algorithms?",
    answer: (
      <>
        <p><strong>Clustering</strong> is an unsupervised learning method that groups data points into clusters such that points in the same cluster are more similar to each other than to those in other clusters.</p>
                <p>Key properties of clustering algorithms include:</p>
                <ul>
                  <li><strong>Scalability:</strong> Ability to handle large datasets efficiently.</li>
                  <li><strong>High Dimensionality:</strong> Capability to cluster data in high-dimensional spaces.</li>
                  <li><strong>Shape Flexibility:</strong> Ability to discover clusters of arbitrary shapes (not just spherical clusters).</li>
                  <li><strong>Noise Tolerance:</strong> Capability to handle outliers and noisy data.</li>
                  <li><strong>Interpretability:</strong> The degree to which the resulting clusters make logical and actionable business sense.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1012,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What is a Pivot table? What are its usage?",
    answer: (
      <>
        <p>A <strong>Pivot Table</strong> is a data summarization tool found in data visualization and spreadsheet programs (like Excel, Google Sheets, or pandas in Python). It automatically sorts, counts, totals, or averages data stored in one table and displays the results in a second, summary table.</p>
                <p>Common uses include:</p>
                <ul>
                  <li>Summarizing large datasets into readable tables.</li>
                  <li>Comparing records, identifying trends, and calculating sums/averages.</li>
                  <li>Slicing and filtering data by columns/rows to dynamically inspect distributions.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1013,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What do you mean by univariate, bivariate, and multivariate analysis?",
    answer: (
      <>
        <p>These terms describe the complexity of analysis based on the number of variables involved:</p>
                <ul>
                  <li><strong>Univariate Analysis:</strong> Analysis of a single variable to describe its distribution, range, central tendency, and spread (e.g., mean height of students).</li>
                  <li><strong>Bivariate Analysis:</strong> Analysis of two variables to determine the relationship or correlation between them (e.g., temperature vs. ice cream sales).</li>
                  <li><strong>Multivariate Analysis:</strong> Analysis of three or more variables to understand complex interactions and dependencies (e.g., predicting house prices based on size, location, bedrooms, and age).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1014,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What is a waterfall chart and when do we use it?",
    answer: (
      <>
        <p>A <strong>Waterfall Chart</strong> is a form of data visualization that helps in understanding the cumulative effect of sequentially introduced positive or negative values.</p>
                <p>It is typically used for:</p>
                <ul>
                  <li>Visualizing financial statements (e.g., showing how gross revenue transitions to net income after subtracting costs).</li>
                  <li>Showing changes in inventory or cash flow over time.</li>
                  <li>Comparing differences between actual and budgeted values.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1015,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "What are Eigenvectors and Eigenvalues?",
    answer: (
      <>
        <p>In linear algebra, they represent properties of linear transformations:</p>
                <ul>
                  <li><strong>Eigenvector:</strong> A non-zero vector that does not change its direction when a linear transformation is applied to it; it only gets scaled.</li>
                  <li><strong>Eigenvalue:</strong> The factor or scalar by which the eigenvector is scaled during the transformation (represented by &lambda;).</li>
                </ul>
                <p>In data analysis, they form the core mathematical basis for <strong>Principal Component Analysis (PCA)</strong>, helping to identify the directions (principal components) along which the variance of the data is maximized.</p>
      </>
    ),
  },
  {
    id: 1016,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Mention what are the various steps in an analytics project?",
    answer: (
      <>
        <p>A typical analytics project follows these phases:</p>
                <ol>
                  <li><strong>Business Understanding:</strong> Defining the problem, objectives, and success criteria.</li>
                  <li><strong>Data Exploration & Gathering:</strong> Collecting relevant datasets from various sources.</li>
                  <li><strong>Data Cleaning & Preparation:</strong> Handling missing values, outliers, and incorrect formats.</li>
                  <li><strong>Data Analysis & Modeling:</strong> Applying statistical analysis, hypothesis testing, or machine learning models.</li>
                  <li><strong>Validation & Evaluation:</strong> Checking model performance and verifying results against the business objectives.</li>
                  <li><strong>Deployment & Communication:</strong> Presenting findings via dashboards and launching analytical models into production.</li>
                </ol>
      </>
    ),
  },
  {
    id: 1017,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "Write some key skills usually required for a data analyst?",
    answer: (
      <>
        <p>Key technical and soft skills for a data analyst include:</p>
                <ul>
                  <li><strong>SQL:</strong> Writing queries to retrieve and manipulate relational data.</li>
                  <li><strong>Programming (Python/R):</strong> Using libraries like pandas, NumPy, and scikit-learn for analysis.</li>
                  <li><strong>Data Visualization:</strong> Dashboarding in Tableau, Power BI, or Looker.</li>
                  <li><strong>Statistics & Math:</strong> Probability distributions, hypothesis testing, and regression analysis.</li>
                  <li><strong>Communication:</strong> Explaining technical insights to non-technical stakeholders.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1018,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "Explain what is Hierarchical Clustering Algorithm?",
    answer: (
      <>
        <p><strong>Hierarchical Clustering</strong> is a method of cluster analysis which seeks to build a hierarchy of clusters. There are two main strategies:</p>
                <ul>
                  <li><strong>Agglomerative (Bottom-Up):</strong> Starts with each data point as its own cluster. In each step, the two closest clusters are merged until only one big cluster remains.</li>
                  <li><strong>Divisive (Top-Down):</strong> Starts with all data points in a single cluster. It recursively splits the cluster into smaller clusters until each data point is its own cluster.</li>
                </ul>
                <p>Results are typically visualized using a tree-like diagram called a <strong>Dendrogram</strong>.</p>
      </>
    ),
  },
  {
    id: 1019,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Explain what is Map Reduce?",
    answer: (
      <>
        <p><strong>MapReduce</strong> is a programming model and software framework for processing massive datasets in parallel across distributed clusters (like Hadoop).</p>
                <p>It consists of two main steps:</p>
                <ul>
                  <li><strong>Map:</strong> Filters and sorts data, converting it into key-value pairs (tuples).</li>
                  <li><strong>Reduce:</strong> Groups and aggregates the output of the map phase based on keys, summarizing the intermediate values into a final result.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1020,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "Explain SVM machine learning algorithm?",
    answer: (
      <>
        <p><strong>Support Vector Machine (SVM)</strong> is a supervised machine learning algorithm used for both classification and regression. The objective is to find a <strong>hyperplane</strong> in an N-dimensional space that distinctly classifies the data points.</p>
                <ul>
                  <li><strong>Support Vectors:</strong> Data points closest to the decision boundary (hyperplane) that influence its position.</li>
                  <li><strong>Margin:</strong> The distance between the hyperplane and the nearest support vectors. SVM aims to maximize this margin to reduce classification errors.</li>
                  <li><strong>Kernel Trick:</strong> A technique to project low-dimensional non-linear data into a higher-dimensional space where it becomes linearly separable.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1021,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What do you understand by the KNN imputation method?",
    answer: (
      <>
        <p><strong>KNN (K-Nearest Neighbors) Imputation</strong> is a technique used to fill in missing values in a dataset. It replaces missing values in a target column by identifying the <em>K</em> most similar data points (neighbors) based on other features, using distance metrics like Euclidean distance.</p>
                <p>The missing value is imputed using the mean (for continuous variables) or mode (for categorical variables) of the neighbors.</p>
      </>
    ),
  },
  {
    id: 1022,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What do you understand by an N-gram in Data Analysis?",
    answer: (
      <>
        <p>In text analysis and NLP (Natural Language Processing), an <strong>N-gram</strong> is a contiguous sequence of <em>N</em> items (words, characters, symbols) from a given sample of text.</p>
                <ul>
                  <li><strong>Unigram (N=1):</strong> "Data", "Analysis"</li>
                  <li><strong>Bigram (N=2):</strong> "Data Analysis", "Machine Learning"</li>
                  <li><strong>Trigram (N=3):</strong> "Natural Language Processing"</li>
                </ul>
                <p>N-grams are useful for building language models, autocomplete systems, and analyzing word collocations.</p>
      </>
    ),
  },
  {
    id: 1023,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How can you deal with the multi-source problems in Data Analysis?",
    answer: (
      <>
        <p>Integrating data from multiple disparate sources is a frequent data analytics challenge. Solutions include:</p>
                <ul>
                  <li><strong>ETL/ELT Pipelines:</strong> Extracting, transforming, and loading data into a centralized repository (Data Warehouse).</li>
                  <li><strong>Data Schema Standardization:</strong> Creating a unified schema mapping all sources to standard formats (e.g., dates, currencies, and string cases).</li>
                  <li><strong>Master Data Management (MDM):</strong> Establishing a single source of truth for critical business entities (like Customers or Products).</li>
                  <li><strong>Fuzzy Matching & Deduplication:</strong> Identifying and merging duplicate entities across source systems (e.g., matching "Apple Inc." with "Apple").</li>
                </ul>
      </>
    ),
  },
  {
    id: 1024,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What do you understand by the terms KPI, design of experiments, and 80/20 rule?",
    answer: (
      <>
        <p>These are fundamental concepts used in business analysis and optimization:</p>
                <ul>
                  <li><strong>KPI (Key Performance Indicator):</strong> A quantifiable measure used to evaluate the success of an organization or activity in meeting objectives (e.g., Monthly Active Users).</li>
                  <li><strong>Design of Experiments (DoE):</strong> A structured method to determine the relationship between factors affecting a process and the output of that process (e.g., A/B testing variables).</li>
                  <li><strong>80/20 Rule (Pareto Principle):</strong> The concept that roughly 80% of consequences come from 20% of causes (e.g., 80% of sales come from 20% of customers).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1025,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What is the difference between variance and covariance in Data Analysis?",
    answer: (
      <>
        <p>Both measure variability, but in different contexts:</p>
                <ul>
                  <li><strong>Variance:</strong> Measures the spread or dispersion of a single variable around its mean (how much the data points vary from the average).</li>
                  <li><strong>Covariance:</strong> Measures the joint variability of two random variables (how much they change together). A positive covariance means they increase together; a negative covariance means one increases as the other decreases.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1026,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What is a Null hypothesis?",
    answer: (
      <>
        <p>In inferential statistics, the <strong>Null Hypothesis (H<sub>0</sub>)</strong> is a statement of no effect, no difference, or no association. It serves as the baseline assumption that any observed difference in a dataset is due to chance rather than a systemic cause.</p>
                <p>The goal of hypothesis testing is to determine if there is enough statistical evidence to reject H<sub>0</sub> in favor of the Alternative Hypothesis (H<sub>1</sub>).</p>
      </>
    ),
  },
  {
    id: 1027,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What is the difference between R-Squared and Adjusted R-Squared?",
    answer: (
      <>
        <p>Used to evaluate regression models:</p>
                <ul>
                  <li><strong>R-Squared (Coefficient of Determination):</strong> Measures the proportion of variance in the dependent variable explained by the independent variables. It always increases or stays constant when new variables are added, even if they are irrelevant.</li>
                  <li><strong>Adjusted R-Squared:</strong> Adjusts R-squared based on the number of predictors in the model. It penalizes adding irrelevant features, only increasing if the new variable improves the model more than expected by chance.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1028,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "Explain what is correlogram analysis?",
    answer: (
      <>
        <p>A <strong>Correlogram</strong> (or Autocorrelation Plot) is a visual representation of correlation statistics. In time series analysis, it shows the correlation of the series with itself at different time lags.</p>
                <p>It is used to:</p>
                <ul>
                  <li>Identify randomness in a dataset.</li>
                  <li>Detect seasonal patterns and trends in time series.</li>
                  <li>Choose parameters (p, d, q) for ARIMA modeling.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1029,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What are the advantages of version control in Data Analysis?",
    answer: (
      <>
        <p>Version control (e.g., Git) is crucial for data science workflows:</p>
                <ul>
                  <li><strong>Collaboration:</strong> Multiple analysts can work on the same codebase without overwriting work.</li>
                  <li><strong>History Tracking:</strong> Keeps a complete history of changes, making it easy to roll back errors.</li>
                  <li><strong>Reproducibility:</strong> Ensures experiments and model versions can be reproduced.</li>
                  <li><strong>Code Quality:</strong> Facilitates peer code reviews via pull requests.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1030,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "How can you highlight the cells containing negative values in an Excel sheet?",
    answer: (
      <>
        <p>You can highlight cells with negative values in Excel using <strong>Conditional Formatting</strong>:</p>
                <ol>
                  <li>Select the range of cells you want to format.</li>
                  <li>Go to the <strong>Home</strong> tab and click on <strong>Conditional Formatting</strong>.</li>
                  <li>Select <strong>Highlight Cells Rules</strong> &gt; <strong>Less Than...</strong></li>
                  <li>Enter <code>0</code> in the box.</li>
                  <li>Select the formatting style (e.g., Light Red Fill with Dark Red Text) and click OK.</li>
                </ol>
      </>
    ),
  },
  {
    id: 1031,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What do you understand by Data Wrangling in Data Analytics?",
    answer: (
      <>
        <p><strong>Data Wrangling</strong> (or data munging) is the process of transforming and mapping raw data from its original form into another format that is more convenient and valuable for downstream analysis.</p>
                <p>It includes activities like combining datasets, handling missing values, extracting attributes, and restructuring data formats.</p>
      </>
    ),
  },
  {
    id: 1032,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What steps can you take to handle slow Excel workbooks?",
    answer: (
      <>
        <p>To optimize slow Excel workbooks, you can:</p>
                <ul>
                  <li>Convert heavy formulas to static values once calculated.</li>
                  <li>Avoid volatile functions like <code>OFFSET</code>, <code>INDIRECT</code>, and <code>TODAY</code> (which recalculate every time any cell changes).</li>
                  <li>Use <code>INDEX-MATCH</code> or <code>XLOOKUP</code> instead of entire-column <code>VLOOKUP</code>s.</li>
                  <li>Minimize the use of conditional formatting across massive ranges.</li>
                  <li>Save the workbook as a binary sheet (.xlsb) to compress file size and load faster.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1033,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What are different types of Hypothesis Testing?",
    answer: (
      <>
        <p>Different statistical hypothesis tests are used based on data distributions and samples:</p>
                <ul>
                  <li><strong>T-Test:</strong> Compares means of two groups (independent or paired).</li>
                  <li><strong>Z-Test:</strong> Compares means when population variance is known and sample size is large (N &gt; 30).</li>
                  <li><strong>ANOVA (Analysis of Variance):</strong> Compares means across three or more groups.</li>
                  <li><strong>Chi-Square Test:</strong> Evaluates associations between categorical variables (Goodness of Fit or Independence).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1034,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What is the default port for SQL?",
    answer: (
      <>
        <p>Default ports vary by database management system:</p>
                <ul>
                  <li><strong>Microsoft SQL Server:</strong> Port <code>1433</code></li>
                  <li><strong>MySQL:</strong> Port <code>3306</code></li>
                  <li><strong>PostgreSQL:</strong> Port <code>5432</code></li>
                  <li><strong>Oracle Database:</strong> Port <code>1521</code></li>
                </ul>
      </>
    ),
  },
  {
    id: 1035,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What are the different types of Joins?",
    answer: (
      <>
        <p>Joins in SQL are used to combine records from two or more tables based on a related column:</p>
                <ul>
                  <li><strong>INNER JOIN:</strong> Returns records that have matching values in both tables.</li>
                  <li><strong>LEFT (OUTER) JOIN:</strong> Returns all records from the left table, and matched records from the right table.</li>
                  <li><strong>RIGHT (OUTER) JOIN:</strong> Returns all records from the right table, and matched records from the left table.</li>
                  <li><strong>FULL (OUTER) JOIN:</strong> Returns all records when there is a match in either left or right table.</li>
                  <li><strong>CROSS JOIN:</strong> Returns the Cartesian product of the two tables.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1036,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What is the significance of Exploratory Data Analysis (EDA)?",
    answer: (
      <>
        <p><strong>EDA</strong> is the process of examining a dataset before modeling. It is significant because it helps analysts:</p>
                <ul>
                  <li>Summarize the main characteristics of data (distributions, averages, ranges).</li>
                  <li>Detect outliers, anomalies, and data input errors.</li>
                  <li>Understand relationships between independent and dependent variables.</li>
                  <li>Formulate hypotheses for formal testing.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1037,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Explain the Type I and Type II errors in Statistics?",
    answer: (
      <>
        <p>Errors in statistical hypothesis testing:</p>
                <ul>
                  <li><strong>Type I Error (False Positive):</strong> Rejecting the null hypothesis when it is actually true (concluding an effect exists when it doesn't). Symbolized by alpha (&alpha;).</li>
                  <li><strong>Type II Error (False Negative):</strong> Failing to reject the null hypothesis when it is actually false (concluding no effect exists when it does). Symbolized by beta (&beta;).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1038,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What's the difference between a data lake and a data warehouse?",
    answer: (
      <>
        <p>Key differences between data lakes and warehouses include:</p>
                <ul>
                  <li><strong>Data Lake:</strong> Stores raw, unstructured, semi-structured, and structured data at massive scale. Uses Schema-on-Read. Typically used for big data and machine learning.</li>
                  <li><strong>Data Warehouse:</strong> Stores clean, modeled, structured data optimized for analytical queries. Uses Schema-on-Write. Typically used for corporate reporting and BI.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1039,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "How does data visualization help you?",
    answer: (
      <>
        <p>Data visualization aids interpretation by:</p>
                <ul>
                  <li>Translating complex datasets into easy-to-digest visual formats.</li>
                  <li>Speeding up the comprehension of key trends and critical correlations.</li>
                  <li>Enabling business managers to grasp performance metrics instantly.</li>
                  <li>Highlighting anomalies and outliers that would be hard to spot in spreadsheets.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1040,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Which are the different tools required in Big Data?",
    answer: (
      <>
        <p>Big data processing requires frameworks built for distributed workloads:</p>
                <ul>
                  <li><strong>Storage:</strong> HDFS (Hadoop Distributed File System), Amazon S3.</li>
                  <li><strong>Processing Engines:</strong> Apache Spark, Apache Hadoop MapReduce.</li>
                  <li><strong>NoSQL Databases:</strong> Apache Cassandra, MongoDB, HBase.</li>
                  <li><strong>Querying Engines:</strong> Apache Hive, Presto, AWS Athena.</li>
                  <li><strong>Message Brokers:</strong> Apache Kafka (for streaming data).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1041,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What programming languages are frequently used in data analysis?",
    answer: (
      <>
        <p>The standard programming languages in data analytics are:</p>
                <ul>
                  <li><strong>Python:</strong> Highly popular due to libraries like pandas, NumPy, scikit-learn, and matplotlib.</li>
                  <li><strong>SQL:</strong> The standard language for database querying and manipulation.</li>
                  <li><strong>R:</strong> Excellent for academic research, statistical calculations, and advanced plotting.</li>
                  <li><strong>Julia:</strong> Emerging for high-performance scientific and mathematical computing.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1042,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What is the difference between structured and unstructured data?",
    answer: (
      <>
        <p>Data formats differ based on their schema organization:</p>
                <ul>
                  <li><strong>Structured Data:</strong> Highly organized, fits into tables, rows, and columns. Easily searchable using SQL (e.g., relational databases, Excel sheets).</li>
                  <li><strong>Unstructured Data:</strong> Has no predefined schema or structural format. Harder to query directly without processing (e.g., images, video files, emails, PDF reports, audio recordings).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1043,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How would you clean and prepare data for analysis?",
    answer: (
      <>
        <p>Data preparation typically involves:</p>
                <ol>
                  <li>Inspecting schema types and null counts.</li>
                  <li>Removing duplicate records.</li>
                  <li>Handling missing values (dropping columns, filling defaults, or computing statistics).</li>
                  <li>Standardizing formats (e.g. date formats <code>YYYY-MM-DD</code>).</li>
                  <li>Normalizing numeric scales if feeding into machine learning.</li>
                  <li>Saving the processed data to a clean table or CSV for analysis.</li>
                </ol>
      </>
    ),
  },
  {
    id: 1044,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What is the difference between a mean and a median?",
    answer: (
      <>
        <p>Measures of central tendency:</p>
                <ul>
                  <li><strong>Mean:</strong> The mathematical average of a dataset (sum divided by count). Highly sensitive to extreme outliers.</li>
                  <li><strong>Median:</strong> The middle value when data points are sorted in ascending order. Highly robust to outliers.</li>
                </ul>
                <p><em>Example:</em> In <code>[1, 2, 3, 100]</code>, Mean = 26.5 (skewed), Median = 2.5 (more representative of the bulk).</p>
      </>
    ),
  },
  {
    id: 1045,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What are the different connection types in Tableau Software?",
    answer: (
      <>
        <p>Tableau offers two main connection options:</p>
                <ul>
                  <li><strong>Live Connection:</strong> Establishes a direct link to the database. Queries are sent directly to the database in real-time. Ideal for fast, frequently updated databases.</li>
                  <li><strong>Extract Connection:</strong> Creates a static snapshot of the data stored locally in Tableau's fast Hyper engine. Ideal for offline work, improving dashboard speed, and reducing database query load.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1046,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How would you handle missing values in a dataset?",
    answer: (
      <>
        <p>Strategies for handling missing values include:</p>
                <ul>
                  <li><strong>Deleterious Omission:</strong> Dropping rows or columns containing nulls (only if missing values are few).</li>
                  <li><strong>Constant Imputation:</strong> Filling nulls with default values (e.g., "Unknown" or 0).</li>
                  <li><strong>Statistical Imputation:</strong> Replacing nulls with the mean or median (for numerical columns) or mode (for categorical).</li>
                  <li><strong>Model Imputation:</strong> Using regression or KNN algorithms to predict and fill missing values.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1047,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What is a correlation coefficient?",
    answer: (
      <>
        <p>A <strong>correlation coefficient</strong> (typically Pearson's <em>r</em>) measures the strength and direction of a linear relationship between two variables. It ranges from <code>-1</code> to <code>+1</code>:</p>
                <ul>
                  <li><code>+1</code>: Perfect positive correlation (both increase proportionally).</li>
                  <li><code>0</code>: No linear correlation.</li>
                  <li><code>-1</code>: Perfect negative correlation (one increases, other decreases).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1048,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How would you detect outliers in a dataset?",
    answer: (
      <>
        <p>Outlier detection methods include:</p>
                <ul>
                  <li><strong>Box Plots:</strong> Visualizing points beyond 1.5 * IQR from the quartile boundaries.</li>
                  <li><strong>Scatter Plots:</strong> Inspecting multi-variable distributions for isolated coordinates.</li>
                  <li><strong>Z-Score Analysis:</strong> Flagging points where the Z-score lies outside <code>[-3, 3]</code>.</li>
                  <li><strong>Algorithms:</strong> Using Isolation Forest or DBSCAN clustering for multi-dimensional data.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1049,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What is the difference between a bar chart and a histogram?",
    answer: (
      <>
        <p>Though visually similar, they represent different types of data:</p>
                <ul>
                  <li><strong>Bar Chart:</strong> Used to compare categorical variables (e.g., Sales by Region). Has spaces between bars.</li>
                  <li><strong>Histogram:</strong> Used to show the probability distribution of a continuous numerical variable divided into intervals (bins). Bars touch to represent continuity.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1050,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Explain the concept of sampling in data analysis.",
    answer: (
      <>
        <p><strong>Sampling</strong> is the process of selecting a subset of data points from a larger population to estimate characteristics of the entire population.</p>
                <p>Common sampling techniques include:</p>
                <ul>
                  <li><strong>Simple Random Sampling:</strong> Every data point has an equal chance of selection.</li>
                  <li><strong>Stratified Sampling:</strong> Population is divided into groups (strata), and samples are taken randomly from each stratum.</li>
                  <li><strong>Systematic Sampling:</strong> Selecting every Nth element from a sorted list.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1051,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "How would you determine the statistical significance of an observed result?",
    answer: (
      <>
        <p>To determine statistical significance, you perform hypothesis testing:</p>
                <ol>
                  <li>State the Null (H<sub>0</sub>) and Alternative (H<sub>1</sub>) hypotheses.</li>
                  <li>Choose an appropriate statistical test (e.g., T-Test, Chi-Square).</li>
                  <li>Select a significance level (&alpha;), usually 0.05.</li>
                  <li>Calculate the <strong>p-value</strong> from your sample data.</li>
                  <li>Compare the p-value with &alpha;. If <code>p-value &lt; &alpha;</code>, reject the Null Hypothesis and conclude the result is statistically significant.</li>
                </ol>
      </>
    ),
  },
  {
    id: 1052,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "Explain the difference between supervised and unsupervised learning.",
    answer: (
      <>
        <p>Supervised and unsupervised learning are two main types of machine learning:</p>
                <ul>
                  <li><strong>Supervised Learning:</strong> Models are trained on labeled data (where the output variable is known). Example algorithms: Linear Regression, Decision Trees.</li>
                  <li><strong>Unsupervised Learning:</strong> Models find hidden patterns or structures in unlabeled data. Example algorithms: K-Means Clustering, Principal Component Analysis (PCA).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1053,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How would you evaluate the performance of a machine learning model?",
    answer: (
      <>
        <p>Evaluation depends on the model type:</p>
                <ul>
                  <li><strong>Regression models:</strong> Evaluate using R-Squared, Mean Absolute Error (MAE), and Root Mean Squared Error (RMSE).</li>
                  <li><strong>Classification models:</strong> Evaluate using Accuracy, Precision, Recall, F1-Score, and the Confusion Matrix.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1054,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What is overfitting in machine learning, and how can it be avoided?",
    answer: (
      <>
        <p><strong>Overfitting</strong> occurs when a model learns the training data too well, including its noise and random fluctuations, causing poor performance on unseen test data.</p>
                <p>Ways to avoid overfitting:</p>
                <ul>
                  <li>Use cross-validation.</li>
                  <li>Train with more data.</li>
                  <li>Reduce model complexity (feature selection).</li>
                  <li>Apply regularization techniques (L1/L2 regularization).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1055,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How would you approach a data analysis project from start to finish?",
    answer: (
      <>
        <p>A structured approach includes:</p>
                <ol>
                  <li><strong>Define the business goal:</strong> Identify what problem we are trying to solve.</li>
                  <li><strong>Acquire & ingest data:</strong> Query databases and import datasets.</li>
                  <li><strong>Clean data:</strong> Handle missing values, errors, and duplicates.</li>
                  <li><strong>Explore data (EDA):</strong> Plot correlations and identify distributions.</li>
                  <li><strong>Model & analyze:</strong> Run statistical tests or build regression models.</li>
                  <li><strong>Communicate results:</strong> Build reports and present actionable recommendations.</li>
                </ol>
      </>
    ),
  },
  {
    id: 1056,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Explain the concept of A/B testing.",
    answer: (
      <>
        <p><strong>A/B Testing</strong> is a statistical experimentation method comparing two versions (A and B) of a variable (e.g., website layout) to determine which performs better.</p>
                <p>Traffic is split randomly between the versions, and conversion rates or other metrics are analyzed using hypothesis tests to ensure the differences are statistically significant.</p>
      </>
    ),
  },
  {
    id: 1057,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What is the difference between data mining and data analysis?",
    answer: (
      <>
        <p>Though related, they differ in scope:</p>
                <ul>
                  <li><strong>Data Mining:</strong> Focused on discovering unrecognized patterns, trends, and anomalies within large datasets using automated systems and machine learning.</li>
                  <li><strong>Data Analysis:</strong> A broader process of gathering, cleaning, modeling, and visualizing data to answer specific business questions and support decision-making.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1058,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "How do you handle large datasets that don't fit into memory?",
    answer: (
      <>
        <p>Techniques to analyze datasets larger than RAM include:</p>
                <ul>
                  <li><strong>Chunking:</strong> Reading data in smaller batches (e.g., using <code>chunksize</code> in pandas).</li>
                  <li><strong>Out-of-Core Processing libraries:</strong> Using tools like Dask, Vaex, or Polars which optimize parallel execution.</li>
                  <li><strong>Database delegation:</strong> Doing computations on the database server using SQL before importing results.</li>
                  <li><strong>Distributed Frameworks:</strong> Using Spark or Hadoop clusters.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1059,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "What is the Central Limit Theorem, and why is it important?",
    answer: (
      <>
        <p>The <strong>Central Limit Theorem (CLT)</strong> states that the distribution of sample means approximates a normal (bell-shaped) distribution as the sample size becomes large (usually N &gt; 30), regardless of the population's distribution shape.</p>
                <p>It is important because it allows statisticians to use normal-distribution-based tests (like Z-tests and T-tests) on data that is not normally distributed.</p>
      </>
    ),
  },
  {
    id: 1060,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Describe a situation where you used data analysis to solve a problem.",
    answer: (
      <>
        <p>This is a behavioral question. A strong answer uses the <strong>STAR method</strong>:</p>
                <ul>
                  <li><strong>Situation:</strong> Define the context (e.g., "The company experienced a 10% drop in Q3 customer retention").</li>
                  <li><strong>Task:</strong> Describe your goal (e.g., "I was tasked with identifying the root cause of churn").</li>
                  <li><strong>Action:</strong> Explain your process (e.g., "I joined customer usage logs with demographic data in SQL, cleaned null columns, and ran a correlation analysis in Python").</li>
                  <li><strong>Result:</strong> Share the positive business outcome (e.g., "I discovered a correlation between checkout errors and churn, which led to a product patch that improved retention by 4%").</li>
                </ul>
      </>
    ),
  },
  {
    id: 1061,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "How would you handle conflicting priorities or tight deadlines in your work as a data analyst?",
    answer: (
      <>
        <p>When managing competing analytics demands, a structured prioritization framework is essential:</p>
                <ul>
                  <li><strong>Evaluate Impact vs. Effort:</strong> Prioritize tasks that deliver high business value with reasonable effort.</li>
                  <li><strong>Communicate Proactively:</strong> Discuss deadlines with stakeholders early, explaining technical roadblocks.</li>
                  <li><strong>Use Agile boards:</strong> Track tasks in Jira or Trello to ensure clear visibility and progress tracking.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1062,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Can you explain the concept of hypothesis testing?",
    answer: (
      <>
        <p><strong>Hypothesis Testing</strong> is a statistical method used to determine if there is enough evidence in a sample of data to support a particular claim or hypothesis about a population.</p>
                <p>It tests a Null Hypothesis (no effect) against an Alternative Hypothesis (an effect exists). The test yields a p-value; if the p-value is below a set threshold (alpha, typically 0.05), we reject the null hypothesis, confirming the observed effect is likely not due to random chance.</p>
      </>
    ),
  },
  {
    id: 1063,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "Explain the concept of dimensionality reduction.",
    answer: (
      <>
        <p><strong>Dimensionality Reduction</strong> is the process of reducing the number of input variables (features) in a dataset. It is useful for reducing computational costs, combating the "curse of dimensionality", and simplifying model interpretation.</p>
                <p>Common techniques include:</p>
                <ul>
                  <li><strong>Feature Selection:</strong> Keeping only the most important features and dropping the rest.</li>
                  <li><strong>Feature Extraction:</strong> Transforming high-dimensional data into a lower-dimensional space (e.g., Principal Component Analysis (PCA) or t-SNE).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1064,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What is data normalization, and why is its importance?",
    answer: (
      <>
        <p><strong>Data Normalization</strong> is the scaling of numerical data to fit within a specific range (usually 0 to 1 or -1 to 1). It is important because:</p>
                <ul>
                  <li>It prevents features with large magnitudes (e.g., Salary) from dominating features with small magnitudes (e.g., Age) in distance-based algorithms like KNN or K-Means.</li>
                  <li>It helps gradient descent optimization converge faster in neural networks.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1065,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How do you ensure the quality and integrity of data during the analysis process?",
    answer: (
      <>
        <p>Data quality and integrity can be maintained through:</p>
                <ul>
                  <li><strong>Unit tests:</strong> Writing test cases to verify data loader inputs.</li>
                  <li><strong>Schema assertions:</strong> Using database constraints or packages like `great_expectations` to validate incoming data schemas.</li>
                  <li><strong>Audit trails:</strong> Documenting every cleaning step taken on the raw data so it can be reviewed and rerun.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1066,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How would you communicate complex data analysis findings to non-technical stakeholders?",
    answer: (
      <>
        <p>Communicating analytics findings requires shifting focus from technical mechanics to business outcomes:</p>
                <ul>
                  <li><strong>Avoid jargon:</strong> Use plain business terms instead of complex statistical vocabulary.</li>
                  <li><strong>Tell a story:</strong> Lead with the key takeaway, followed by the supporting evidence.</li>
                  <li><strong>Use clean visuals:</strong> Rely on simple charts (bar charts, line graphs) over complex heatmaps or 3D plots.</li>
                  <li><strong>Focus on action:</strong> Explain what decisions the data supports, rather than just showing numbers.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1067,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What are some data privacy and security considerations in data analysis?",
    answer: (
      <>
        <p>Compliance and security guidelines include:</p>
                <ul>
                  <li><strong>Anonymization:</strong> Removing or masking Personally Identifiable Information (PII) before analysis.</li>
                  <li><strong>Access control:</strong> Ensuring only authorized analysts can query sensitive tables.</li>
                  <li><strong>Regulatory compliance:</strong> Adhering to standards like GDPR, CCPA, and HIPAA.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1068,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What can you do to stay updated with the latest trends and developments in data analysis?",
    answer: (
      <>
        <p>Staying current in data analytics can be achieved by:</p>
                <ul>
                  <li>Reading tech blogs (e.g. Medium, Towards Data Science).</li>
                  <li>Participating in data science communities (Kaggle, Reddit's r/datascience).</li>
                  <li>Taking online certification courses on new packages and tools.</li>
                  <li>Attending local tech meetups and industry conferences.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1069,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How to handle data discrepancies or inconsistencies in different data sources?",
    answer: (
      <>
        <p>Discrepancies can be resolved through:</p>
                <ul>
                  <li><strong>Source prioritization:</strong> Defining which system is the master source of truth for specific fields.</li>
                  <li><strong>Regex standardizations:</strong> Standardizing text cases and strings across data sources.</li>
                  <li><strong>Fuzzy logic:</strong> Applying string similarity matching (Levenshtein distance) to align identifiers.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1070,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "How do you ensure data confidentiality and ethics in your work as a data analyst?",
    answer: (
      <>
        <p>Ethical data analysis requires:</p>
                <ul>
                  <li>Obtaining informed consent for data collection.</li>
                  <li>Avoiding bias in data sampling and modeling.</li>
                  <li>Restricting the collection of unnecessary data points.</li>
                  <li>Protecting user anonymity during reporting.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1071,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How do you handle working with incomplete or messy datasets?",
    answer: (
      <>
        <p>Handling messy data requires a systematic data cleaning workflow:</p>
                <ul>
                  <li>Assess the missingness (determine if data is missing at random).</li>
                  <li>Impute missing values using statistically sound averages or predictive models.</li>
                  <li>Drop corrupted records if they account for a negligible percentage of the dataset.</li>
                  <li>Document all cleaning assumptions for transparency.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1072,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "How would you handle data imbalances in a classification problem?",
    answer: (
      <>
        <p>Data imbalance (e.g., fraud detection where &lt;1% of transactions are fraudulent) can be addressed by:</p>
                <ul>
                  <li><strong>Resampling:</strong> Undersampling the majority class or oversampling the minority class (e.g., using SMOTE - Synthetic Minority Over-sampling Technique).</li>
                  <li><strong>Algorithmic adjustments:</strong> Using class weights to penalize misclassifying the minority class.</li>
                  <li><strong>Metric shifts:</strong> Evaluating models using F1-score or Precision-Recall curves rather than raw Accuracy.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1073,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How do you determine which variables are important in a predictive model?",
    answer: (
      <>
        <p>Methods to find feature importance include:</p>
                <ul>
                  <li><strong>Correlation Matrix:</strong> Looking at coefficients between features and the target.</li>
                  <li><strong>Feature Coefficients:</strong> Evaluating coefficients in standardized linear/logistic regressions.</li>
                  <li><strong>Tree-based Importance:</strong> Accessing feature importances calculated by Random Forests or XGBoost.</li>
                  <li><strong>Recursive Feature Elimination (RFE):</strong> Systematically pruning features to observe accuracy drops.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1074,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Explain the concept of outlier detection and its significance.",
    answer: (
      <>
        <p><strong>Outlier Detection</strong> is the process of identifying values that deviate significantly from the rest of the dataset.</p>
                <p>It is significant because outliers can skew statistical averages (like the mean), distort regression coefficients, and violate normality assumptions. In some contexts (like cyber-attacks or credit card fraud), outlier detection itself is the core goal.</p>
      </>
    ),
  },
  {
    id: 1075,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "Can you describe the process of designing and implementing a database for a data analysis project?",
    answer: (
      <>
        <p>Designing a schema involves:</p>
                <ol>
                  <li><strong>Requirement analysis:</strong> Identify key data entities and relationships.</li>
                  <li><strong>Conceptual Design:</strong> Drawing Entity-Relationship Diagrams (ERD).</li>
                  <li><strong>Normalization:</strong> Organizing tables to 3rd Normal Form (3NF) to reduce redundancy.</li>
                  <li><strong>Index configuration:</strong> Setting up primary keys and indexes on frequently queried columns.</li>
                  <li><strong>ETL Integration:</strong> Writing scripts to load source data into the target tables.</li>
                </ol>
      </>
    ),
  },
  {
    id: 1076,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "How do you handle multicollinearity in a regression analysis?",
    answer: (
      <>
        <p><strong>Multicollinearity</strong> occurs when two or more independent variables are highly correlated, causing unstable regression coefficient estimates.</p>
                <p>To handle multicollinearity, you can:</p>
                <ul>
                  <li>Calculate the <strong>VIF (Variance Inflation Factor)</strong> for each variable. Remove variables with a VIF &gt; 5 or 10.</li>
                  <li>Combine highly correlated variables into a single feature.</li>
                  <li>Use <strong>Principal Component Analysis (PCA)</strong> to create orthogonal predictors.</li>
                  <li>Apply regularization methods like Ridge or Lasso regression.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1077,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What do you mean by LOD in Tableau?",
    answer: (
      <>
        <p><strong>LOD (Level of Detail)</strong> expressions in Tableau allow you to compute values at the data source level and the visualization level. They give you total control over the granularity of your calculations.</p>
                <p>There are three main types of LOD expressions:</p>
                <ul>
                  <li><strong>FIXED:</strong> Computes values using specified dimensions, ignoring any filters or fields in the view.</li>
                  <li><strong>INCLUDE:</strong> Computes values using specified dimensions in addition to whatever dimensions are in the view.</li>
                  <li><strong>EXCLUDE:</strong> Prevents specified dimensions from being used in the computation, even if they are in the view.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1078,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How do you assess the reliability and accuracy of data sources?",
    answer: (
      <>
        <p>Assessing data sources requires looking at:</p>
                <ul>
                  <li><strong>Source Authority:</strong> Checking if the data comes from a reputable system of record.</li>
                  <li><strong>Completeness:</strong> Evaluating the percentage of null or missing records.</li>
                  <li><strong>Consistency:</strong> Verifying if the data matches external benchmarks or other reporting systems.</li>
                  <li><strong>Timeliness:</strong> Confirming if the data is updated regularly and matches current realities.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1079,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "Differentiate between correlation and causation.",
    answer: (
      <>
        <p>A fundamental rule of data analytics:</p>
                <ul>
                  <li><strong>Correlation:</strong> A statistical measure indicating that two variables move together (e.g., as ice cream sales rise, sunburns also rise).</li>
                  <li><strong>Causation:</strong> Indicates that one event is the direct result of the occurrence of the other event (e.g., hot weather causes sunburns, and hot weather also causes ice cream sales).</li>
                </ul>
                <p>Correlation does not imply causation. Showing causation requires controlled experiments (like A/B testing).</p>
      </>
    ),
  },
  {
    id: 1080,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "How would you approach feature engineering in a machine learning project?",
    answer: (
      <>
        <p>Feature engineering maximizes model performance by transforming raw data:</p>
                <ul>
                  <li><strong>Creating interaction terms:</strong> Multiplying or dividing variables (e.g., Price/SqFt).</li>
                  <li><strong>Binning:</strong> Converting continuous variables into discrete brackets (e.g., Age ranges).</li>
                  <li><strong>One-Hot Encoding:</strong> Converting categorical variables into binary flags.</li>
                  <li><strong>Feature scaling:</strong> Applying min-max scaling or standardizations.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1081,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "Explain the term data warehousing?",
    answer: (
      <>
        <p><strong>Data Warehousing</strong> is the process of collecting, consolidating, and managing data from diverse sources into a single, centralized database optimized for analytical querying, reporting, and business intelligence.</p>
                <p>Unlike transactional databases (OLTP) which support fast writes, data warehouses (OLAP) are designed for fast reads and complex historical aggregations.</p>
      </>
    ),
  },
  {
    id: 1082,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How do you handle bias in data analysis?",
    answer: (
      <>
        <p>Bias can distort analysis and lead to incorrect conclusions. Ways to mitigate bias include:</p>
                <ul>
                  <li><strong>Sampling bias:</strong> Ensure samples are randomly drawn and represent the entire target population.</li>
                  <li><strong>Confirmation bias:</strong> Approaching analysis with an open question rather than seeking data to prove a pre-existing theory.</li>
                  <li><strong>Measurement bias:</strong> Regularly calibrating data sensors and database trackers to ensure consistent outputs.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1083,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What are the ways to handle missing data in a dataset?",
    answer: (
      <>
        <p>Standard approaches to missing data include:</p>
                <ol>
                  <li>Dropping rows/columns if the missingness is less than 5% and random.</li>
                  <li>Imputing with statistical metrics (mean, median, mode).</li>
                  <li>Predicting values using machine learning (regression, KNN).</li>
                  <li>Defining a separate "Missing" categorical state to capture the missingness itself as a signal.</li>
                </ol>
      </>
    ),
  },
  {
    id: 1084,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Can you explain the concept of data mining and its applications?",
    answer: (
      <>
        <p><strong>Data Mining</strong> is the process of finding anomalies, patterns, and correlations within large datasets to predict outcomes.</p>
                <p>Common applications include:</p>
                <ul>
                  <li><strong>Retail:</strong> Market basket analysis to find products frequently purchased together.</li>
                  <li><strong>Finance:</strong> Identifying anomalous credit transactions (fraud detection).</li>
                  <li><strong>Marketing:</strong> Segmenting customers into target demographics.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1085,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What are some statistical methodologies commonly used by data analysts?",
    answer: (
      <>
        <p>Commonly applied statistical methodologies include:</p>
                <ul>
                  <li><strong>Descriptive Statistics:</strong> Means, medians, standard deviations, and percentiles.</li>
                  <li><strong>Regression Analysis:</strong> Linear and logistic regressions to model dependencies.</li>
                  <li><strong>Hypothesis Testing:</strong> T-tests, ANOVA, and Chi-Square tests to verify significance.</li>
                  <li><strong>Probability Distributions:</strong> Fitting data to normal, binomial, or Poisson curves.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1086,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What are some data validation methodologies utilized in data analysis?",
    answer: (
      <>
        <p>Data validation methods are used to inspect incoming data streams:</p>
                <ul>
                  <li><strong>Type checks:</strong> Ensure data fields contain expected formats (e.g. numeric IDs).</li>
                  <li><strong>Logical range checks:</strong> Verify that ages, dates, or prices fall within logical bounds.</li>
                  <li><strong>Cross-system checks:</strong> Reconciling record counts between source and target systems to catch loading errors.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1087,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Can you explain the K-means algorithm?",
    answer: (
      <>
        <p><strong>K-Means Clustering</strong> is an unsupervised learning algorithm used to partition data into <em>K</em> distinct clusters:</p>
                <ol>
                  <li>Initialize <em>K</em> centroids randomly in the feature space.</li>
                  <li>Assign each data point to its nearest centroid (usually based on Euclidean distance).</li>
                  <li>Recalculate the centroids as the average position of all points in that cluster.</li>
                  <li>Repeat steps 2 and 3 until the centroids no longer move (convergence).</li>
                </ol>
      </>
    ),
  },
  {
    id: 1088,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "In what situations are t-tests or z-tests typically used?",
    answer: (
      <>
        <p>These tests are used to compare sample means:</p>
                <ul>
                  <li><strong>Z-Test:</strong> Used when sample size is large (N &gt; 30) AND the population standard deviation is known.</li>
                  <li><strong>T-Test:</strong> Used when sample size is small (N &lt; 30) OR the population standard deviation is unknown (the sample standard deviation is used instead).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1089,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How would you handle suspicious or missing data in a dataset during analysis?",
    answer: (
      <>
        <p>Suspicious data (such as a customer height of 10 feet or age of -5) should be handled systematically:</p>
                <ol>
                  <li>Flag the record as anomalous.</li>
                  <li>Cross-reference the original database records to check for input bugs.</li>
                  <li>If the records are incorrect, replace them with nulls and perform standard statistical imputation, or drop the records if they are rare.</li>
                </ol>
      </>
    ),
  },
  {
    id: 1090,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "What is the difference between Principal Component Analysis (PCA) and Factor Analysis (FA)?",
    answer: (
      <>
        <p>Both are dimensionality reduction methods, but their underlying assumptions differ:</p>
                <ul>
                  <li><strong>PCA:</strong> A mathematical technique that combines variables to explain the maximum total variance in the dataset. The components are linear combinations of the variables and are orthogonal.</li>
                  <li><strong>Factor Analysis:</strong> A statistical model aimed at finding latent variables (factors) that explain the correlations between the observed variables (e.g., latent "intelligence" explaining scores in math, reading, and science).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1091,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What are some future trends in data analysis?",
    answer: (
      <>
        <p>Future trends shaping the industry include:</p>
                <ul>
                  <li><strong>AI-Driven Analytics:</strong> Using Large Language Models (LLMs) to query databases using natural language.</li>
                  <li><strong>Real-time Analytics:</strong> Querying streaming data pipelines (Kafka, Flink) instantly instead of running nightly batch jobs.</li>
                  <li><strong>Edge Analytics:</strong> Running lightweight models directly on edge devices and sensors to minimize network transit.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1092,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "What is the distinction between recall and true positive rate?",
    answer: (
      <>
        <p>In machine learning and classification, **Recall** and **True Positive Rate (TPR)** (also known as Sensitivity) are mathematically identical:</p>
                <p><code>Recall = TPR = TP / (TP + FN)</code></p>
                <p>They represent the proportion of actual positive cases that were correctly identified by the model.</p>
      </>
    ),
  },
  {
    id: 1093,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "What is the difference between standardized and unstandardized coefficients?",
    answer: (
      <>
        <p>Used to interpret regression outputs:</p>
                <ul>
                  <li><strong>Unstandardized Coefficients:</strong> Represent the change in the dependent variable for every one-unit increase in the independent variable, measured in their original units (e.g., house price increase per square foot).</li>
                  <li><strong>Standardized Coefficients:</strong> Express the coefficients in terms of standard deviations. This allows you to directly compare the relative strength of different predictors regardless of their original scale.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1094,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How are outliers detected in data analysis?",
    answer: (
      <>
        <p>Outlier detection techniques include:</p>
                <ul>
                  <li><strong>Statistical boundaries:</strong> Z-scores outside [-3, 3], or values outside 1.5 * IQR.</li>
                  <li><strong>Visual plots:</strong> Inspecting box plots, histograms, and bivariate scatter plots.</li>
                  <li><strong>Distance algorithms:</strong> Finding points that lie far from cluster centers in K-Means or DBSCAN.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1095,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "Name popular technical tools used for data analysis and presentation?",
    answer: (
      <>
        <p>The standard analytics stack includes:</p>
                <ul>
                  <li><strong>Data Processing:</strong> SQL, Python (pandas), R, Excel.</li>
                  <li><strong>Business Intelligence (BI):</strong> Tableau, Power BI, Looker, Sigma.</li>
                  <li><strong>Cloud Warehouses:</strong> Snowflake, Google BigQuery, Amazon Redshift.</li>
                </ul>
      </>
    ),
  },
  {
    id: 1096,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "Mention different types of sampling techniques used in data analysis?",
    answer: (
      <>
        <p>Sampling methodologies are divided into two main categories:</p>
                <ul>
                  <li><strong>Probability Sampling:</strong> Simple Random, Stratified (grouped by category), Systematic (every Nth row), Cluster Sampling.</li>
                  <li><strong>Non-probability Sampling:</strong> Convenience, Purposive, Quota, Snowball sampling (frequently used when random sampling is impractical).</li>
                </ul>
      </>
    ),
  },
  {
    id: 1097,
    category: 'Data Analyst',
    difficulty: 'hard',
    question: "Can you give a dynamic range for a pivot table in ''Data Source''?",
    answer: (
      <>
        <p>Yes, you can make the data source of a pivot table dynamic (so it automatically expands as new rows are added) using two main methods in Excel:</p>
                <ul>
                  <li><strong>Excel Tables:</strong> Convert the raw range into an official Excel Table (using <code>Ctrl + T</code>). Use the table name as the pivot table source. This is the recommended and easiest method.</li>
                  <li><strong>OFFSET Formula:</strong> Define a Named Range using a dynamic formula: <br/>
                  <code>=OFFSET(Sheet1!$A$1, 0, 0, COUNTA(Sheet1!$A:$A), COUNTA(Sheet1!$1:$1))</code></li>
                </ul>
      </>
    ),
  },
  {
    id: 1098,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "Explain Subquery in SQL?",
    answer: (
      <>
        <p>A <strong>Subquery</strong> (or nested query) is a query query nested inside another SQL query (inside the <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>, or <code>HAVING</code> clauses).</p>
                <p>Example: Finding customers who placed orders above average:</p>
                <pre><code>SELECT customer_name 
        FROM customers 
        WHERE customer_id IN (
            SELECT customer_id 
            FROM orders 
            WHERE order_amount &gt; (SELECT AVG(order_amount) FROM orders)
        )</code></pre>
      </>
    ),
  },
  {
    id: 1099,
    category: 'Data Analyst',
    difficulty: 'easy',
    question: "What is Collaborative Filtering?",
    answer: (
      <>
        <p><strong>Collaborative Filtering</strong> is a recommendation algorithm that suggests items to a user by identifying patterns of agreement across many users. If user A and user B rated several movies similarly, the system will recommend movies user B liked to user A.</p>
      </>
    ),
  },
  {
    id: 1100,
    category: 'Data Analyst',
    difficulty: 'medium',
    question: "How Do You Define a Good Data Model?",
    answer: (
      <>
        <p>A good data model meets these criteria:</p>
                <ul>
                  <li><strong>Scalability:</strong> Able to handle growing volumes of data without query degradation.</li>
                  <li><strong>Consistency:</strong> Ensures standard data definitions, naming conventions, and integrity constraints.</li>
                  <li><strong>Performance:</strong> Supports fast read queries for business intelligence through correct indexing and schema normalization (or dimensional modeling).</li>
                  <li><strong>Maintainability:</strong> Easy to update as new business rules and columns are introduced.</li>
                </ul>
      </>
    ),
  },
];
