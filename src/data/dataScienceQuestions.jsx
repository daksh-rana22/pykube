import React from 'react';

export const DATA_SCIENCE_QUESTIONS = [
  {
    id: 2001,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is Data Science?",
    answer: (
      <>
        <p><strong>Data Science</strong> is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.</p>
                <p>It combines domain expertise, programming skills (typically Python or R), and knowledge of mathematics and statistics to solve complex business problems.</p>
      </>
    ),
  },
  {
    id: 2002,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is the Difference Between Data Science and Machine Learning?",
    answer: (
      <>
        <p>Although they overlap, they have different scopes:</p>
                <ul>
                  <li><strong>Data Science:</strong> An all-encompassing field focused on the entire data lifecycle. It includes data engineering, data cleaning, exploratory data analysis, statistics, data visualization, and business analytics.</li>
                  <li><strong>Machine Learning:</strong> A subset of Data Science that focus on building algorithms that learn patterns from historical data to make predictions or decisions without being explicitly programmed.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2003,
    category: 'Data Science',
    difficulty: 'medium',
    question: "Explain Normal Distribution?",
    answer: (
      <>
        <p>The <strong>Normal Distribution</strong> (or Gaussian Distribution) is a probability distribution that is symmetric about the mean, showing that data near the mean are more frequent in occurrence than data far from the mean.</p>
                <p>Key properties include:</p>
                <ul>
                  <li>It is bell-shaped.</li>
                  <li>The mean, median, and mode are all equal.</li>
                  <li>It follows the <strong>Empirical Rule (68-95-99.7 Rule)</strong>:
                    <ul>
                      <li>~68% of data falls within 1 standard deviation (&sigma;) of the mean.</li>
                      <li>~95% of data falls within 2 standard deviations (2&sigma;).</li>
                      <li>~99.7% of data falls within 3 standard deviations (3&sigma;).</li>
                    </ul>
                  </li>
                </ul>
      </>
    ),
  },
  {
    id: 2004,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is bias?",
    answer: (
      <>
        <p>In machine learning, <strong>bias</strong> represents the error introduced by approximating a real-world problem (which may be highly complex) by a much simpler model.</p>
                <ul>
                  <li><strong>High Bias:</strong> Can cause an algorithm to miss the relevant relations between features and target outputs (underfitting).</li>
                  <li><strong>Low Bias:</strong> Means the model makes few assumptions about the target function and can adapt well to the training data.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2005,
    category: 'Data Science',
    difficulty: 'medium',
    question: "Discuss Naive Bayes algorithm?",
    answer: (
      <>
        <p><strong>Naive Bayes</strong> is a supervised classification algorithm based on Bayes' Theorem with an assumption of independence among predictors (hence the word "Naive").</p>
                <p>Bayes' Theorem formula:</p>
                <p><code>P(A|B) = [P(B|A) * P(A)] / P(B)</code></p>
                <p>It is fast, easy to build, and highly effective for text classification (e.g., spam filtering, sentiment analysis).</p>
      </>
    ),
  },
  {
    id: 2006,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What the aim of conducting A/B Testing?",
    answer: (
      <>
        <p>The primary aim of <strong>A/B Testing</strong> (split testing) is to compare two versions of a single variable (e.g. web page, email layout) to determine which one performs better based on a specific conversion metric.</p>
                <p>It eliminates guesswork and allows data scientists to verify if changes in a system yield a statistically significant improvement.</p>
      </>
    ),
  },
  {
    id: 2007,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is a Linear Regression?",
    answer: (
      <>
        <p><strong>Linear Regression</strong> is a statistical method used to model the relationship between a dependent variable (Y) and one or more independent variables (X) by fitting a linear equation to observed data.</p>
                <p>Equation: <code>Y = &beta;<sub>0</sub> + &beta;<sub>1</sub>X + &epsilon;</code></p>
                <p>It assumes a linear relationship, homoscedasticity (constant variance of errors), and independence of errors.</p>
      </>
    ),
  },
  {
    id: 2008,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What are the steps for a Data analytics project?",
    answer: (
      <>
        <p>A typical data analytics project follows these phases:</p>
                <ol>
                  <li><strong>Business Problem Definition:</strong> Clearly articulating the objectives.</li>
                  <li><strong>Data Discovery:</strong> Gathering data from various sources (SQL, APIs, CSVs).</li>
                  <li><strong>Data Cleaning:</strong> Handling duplicates, missing values, and outliers.</li>
                  <li><strong>Exploratory Data Analysis (EDA):</strong> Finding correlations and visual patterns.</li>
                  <li><strong>Modeling:</strong> Building statistical models or machine learning algorithms.</li>
                  <li><strong>Insights and Reporting:</strong> Dashboarding and summarizing conclusions for stakeholders.</li>
                </ol>
      </>
    ),
  },
  {
    id: 2009,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What is Back Propagation?",
    answer: (
      <>
        <p><strong>Backpropagation</strong> (backward propagation of errors) is the fundamental algorithm used to train artificial neural networks.</p>
                <p>It works by calculating the gradient of the loss function with respect to each weight in the network using the <strong>chain rule</strong> of calculus, propagating the error backward from the output layer to the input layer to update the weights via gradient descent.</p>
      </>
    ),
  },
  {
    id: 2010,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is the K-means clustering method?",
    answer: (
      <>
        <p><strong>K-Means Clustering</strong> is an unsupervised learning algorithm that groups a dataset into <em>K</em> clusters.</p>
                <p>It iteratively performs two steps:</p>
                <ol>
                  <li><strong>Assignment:</strong> Assigns each data point to its nearest centroid.</li>
                  <li><strong>Update:</strong> Computes the mean of the points in each cluster and shifts the centroid to that mean.</li>
                </ol>
      </>
    ),
  },
  {
    id: 2011,
    category: 'Data Science',
    difficulty: 'easy',
    question: "Which language is best for text analytics? R or Python?",
    answer: (
      <>
        <p><strong>Python</strong> is generally considered the best language for text analytics and Natural Language Processing (NLP) due to its rich ecosystem of libraries like NLTK, SpaCy, Hugging Face (Transformers), and scikit-learn. R is excellent for statistical plots, but Python has superior tools for production deployment and deep learning.</p>
      </>
    ),
  },
  {
    id: 2012,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is skewed Distribution & uniform distribution?",
    answer: (
      <>
        <p>These terms describe probability distributions:</p>
                <ul>
                  <li><strong>Skewed Distribution:</strong> An asymmetric distribution where data is skewed to the left (negatively skewed, long tail on the left) or to the right (positively skewed, long tail on the right).</li>
                  <li><strong>Uniform Distribution:</strong> A distribution where all outcomes are equally likely (e.g. rolling a fair six-sided die). The probability density function is completely flat.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2013,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What is reinforcement learning?",
    answer: (
      <>
        <p><strong>Reinforcement Learning (RL)</strong> is a type of machine learning where an <strong>agent</strong> learns to make decisions by performing actions in an environment to maximize some notion of cumulative <strong>reward</strong>.</p>
                <p>The agent learns from trial and error, receiving feedback in the form of rewards or penalties (e.g., training a model to play chess or drive autonomous cars).</p>
      </>
    ),
  },
  {
    id: 2014,
    category: 'Data Science',
    difficulty: 'medium',
    question: "Explain cluster sampling technique in Data science?",
    answer: (
      <>
        <p><strong>Cluster Sampling</strong> is a probability sampling technique where the population is divided into separate groups called <strong>clusters</strong>. Then, a simple random sample of clusters is selected, and all (or a random subset of) elements within the selected clusters are analyzed.</p>
                <p>This is often used when a population is large and geographically dispersed, making simple random sampling too expensive.</p>
      </>
    ),
  },
  {
    id: 2015,
    category: 'Data Science',
    difficulty: 'easy',
    question: "Explain the benefits of using statistics by Data Scientists?",
    answer: (
      <>
        <p>Statistics provides the mathematical foundation for data science. Key benefits include:</p>
                <ul>
                  <li>Design experiments (A/B testing) to test product enhancements.</li>
                  <li>Understand data distributions and verify assumptions (normality, variance).</li>
                  <li>Identify correlations and make forecasts based on sample data.</li>
                  <li>Assess significance and control error rates (Type I/II errors).</li>
                </ul>
      </>
    ),
  },
  {
    id: 2016,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is a Decision Tree?",
    answer: (
      <>
        <p>A <strong>Decision Tree</strong> is a supervised learning algorithm used for both classification and regression. It structures data as a flowchart-like tree where:</p>
                <ul>
                  <li>Each internal node represents a test on an attribute.</li>
                  <li>Each branch represents the outcome of the test.</li>
                  <li>Each leaf node represents a class label or continuous value.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2017,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What is a P-Value? What is the Significance of P-Value?",
    answer: (
      <>
        <p>The <strong>p-value</strong> (probability value) is the probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is true.</p>
                <p><strong>Significance:</strong> A low p-value (typically &le; 0.05) indicates strong evidence against the null hypothesis, leading to its rejection. It helps determine if results are statistically significant or occurred by random chance.</p>
      </>
    ),
  },
  {
    id: 2018,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is a confusion matrix?",
    answer: (
      <>
        <p>A <strong>Confusion Matrix</strong> is a table used to describe the performance of a classification model on a set of test data for which the true values are known.</p>
                <p>It summarizes four key metrics:</p>
                <ul>
                  <li><strong>True Positives (TP):</strong> Model predicted positive, and it was positive.</li>
                  <li><strong>True Negatives (TN):</strong> Model predicted negative, and it was negative.</li>
                  <li><strong>False Positives (FP):</strong> Model predicted positive, but it was negative (Type I error).</li>
                  <li><strong>False Negatives (FN):</strong> Model predicted negative, but it was positive (Type II error).</li>
                </ul>
      </>
    ),
  },
  {
    id: 2019,
    category: 'Data Science',
    difficulty: 'medium',
    question: "How is Deep Learning different from Machine Learning?",
    answer: (
      <>
        <p>Deep Learning is a subset of Machine Learning:</p>
                <ul>
                  <li><strong>Machine Learning:</strong> Often requires manual feature engineering, where analysts extract relevant inputs before feeding them to algorithms (e.g. Random Forest). Works well on smaller datasets.</li>
                  <li><strong>Deep Learning:</strong> Uses multi-layered artificial neural networks that automatically discover and extract features from raw data (e.g. images, audio). Requires massive amounts of data and computational power.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2020,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is the difference between recall and precision?",
    answer: (
      <>
        <p>Both evaluate classification models but focus on different error vectors:</p>
                <ul>
                  <li><strong>Precision:</strong> Out of all predicted positive cases, how many were actually positive? Formula: <code>TP / (TP + FP)</code>. Important when False Positives are expensive (e.g., spam detection).</li>
                  <li><strong>Recall:</strong> Out of all actual positive cases, how many did the model find? Formula: <code>TP / (TP + FN)</code>. Important when False Negatives are expensive (e.g., medical diagnoses).</li>
                </ul>
      </>
    ),
  },
  {
    id: 2021,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What are the feature selection methods used to select the right variables?",
    answer: (
      <>
        <p>Feature selection methods fall into three categories:</p>
                <ul>
                  <li><strong>Filter Methods:</strong> Rely on statistical metrics to score features independently of the model (e.g. Pearson correlation, Chi-Square, ANOVA).</li>
                  <li><strong>Wrapper Methods:</strong> Evaluate feature subsets using a predictive model (e.g. Forward Selection, Backward Elimination, Recursive Feature Elimination).</li>
                  <li><strong>Embedded Methods:</strong> Feature selection built into the model training phase (e.g. Lasso regression L1 penalty, tree-based feature importances).</li>
                </ul>
      </>
    ),
  },
  {
    id: 2022,
    category: 'Data Science',
    difficulty: 'medium',
    question: "How can you avoid overfitting your model?",
    answer: (
      <>
        <p>Overfitting can be prevented by applying the following techniques:</p>
                <ul>
                  <li>Use <strong>Cross-Validation</strong> (e.g. K-Fold) to evaluate generalization.</li>
                  <li>Gather more training data.</li>
                  <li>Reduce model complexity (fewer tree depths, fewer neural nodes).</li>
                  <li>Apply <strong>Regularization</strong> (L1 Lasso / L2 Ridge) to penalize large weights.</li>
                  <li>Use <strong>Ensemble Methods</strong> (like Random Forests) to smooth predictions.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2023,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What are the differences between supervised and unsupervised learning?",
    answer: (
      <>
        <p>The core difference is the presence of labels:</p>
                <ul>
                  <li><strong>Supervised Learning:</strong> Algorithms learn from labeled input-output training pairs. The model maps features to a known target (e.g. Classification, Regression).</li>
                  <li><strong>Unsupervised Learning:</strong> Algorithms analyze unlabeled data to discover hidden patterns, groupings, or structures (e.g. Clustering, Dimensionality Reduction).</li>
                </ul>
      </>
    ),
  },
  {
    id: 2024,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is variance in Data Science?",
    answer: (
      <>
        <p>In data science, <strong>variance</strong> is the error introduced by a model's sensitivity to small fluctuations in the training dataset.</p>
                <p>A model with high variance is overly complex, capturing noise in the training set (overfitting), which leads to poor generalization on test datasets.</p>
      </>
    ),
  },
  {
    id: 2025,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is pruning in a decision tree algorithm?",
    answer: (
      <>
        <p><strong>Pruning</strong> is a technique in decision tree algorithms that removes branches that split on features with low predictive power.</p>
                <p>This reduces the size and depth of the decision tree, thereby combating overfitting and improving generalization on unseen test data.</p>
      </>
    ),
  },
  {
    id: 2026,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What is entropy in a decision tree algorithm?",
    answer: (
      <>
        <p>In decision trees, <strong>Entropy</strong> is a measure of impurity or randomness in a dataset. It is used by algorithms like ID3 to decide which feature to split on.</p>
                <p>Formula: <code>H(S) = -&Sigma; p<sub>i</sub> log<sub>2</sub>(p<sub>i</sub>)</code></p>
                <p>A completely pure node has an entropy of 0, while a completely uniform split has an entropy of 1. Decision trees split nodes to maximize <strong>Information Gain</strong> (decrease entropy).</p>
      </>
    ),
  },
  {
    id: 2027,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is a k-fold cross-validation?",
    answer: (
      <>
        <p><strong>K-Fold Cross-Validation</strong> is a model validation technique where the dataset is randomly divided into <em>K</em> equal-sized folds. The model is trained <em>K</em> times, each time using <em>K-1</em> folds for training and the remaining fold for testing.</p>
                <p>The performance metrics are averaged across all <em>K</em> runs, giving a more stable and reliable estimate of how the model generalizes to new data.</p>
      </>
    ),
  },
  {
    id: 2028,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is an RNN (recurrent neural network)?",
    answer: (
      <>
        <p>A <strong>Recurrent Neural Network (RNN)</strong> is a class of artificial neural networks designed to process sequential data (e.g. text, time series).</p>
                <p>Unlike standard feedforward networks, RNNs have loops, allowing information to persist across steps in the sequence. This creates a form of internal memory, making them suitable for NLP, speech translation, and forecasting.</p>
      </>
    ),
  },
  {
    id: 2029,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is root cause analysis?",
    answer: (
      <>
        <p><strong>Root Cause Analysis (RCA)</strong> is a structured problem-solving methodology used to identify the fundamental, underlying cause of a failure or anomaly (rather than just treating the symptoms).</p>
                <p>In data science, RCA is often used to investigate abrupt drops in product metrics or unexpected model performance degradation.</p>
      </>
    ),
  },
  {
    id: 2030,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What are recommender systems?",
    answer: (
      <>
        <p><strong>Recommender Systems</strong> are information filtering systems designed to predict the preference or rating a user would give to an item.</p>
                <p>Common approaches include:</p>
                <ul>
                  <li><strong>Content-Based Filtering:</strong> Matches user profile tags with item tags.</li>
                  <li><strong>Collaborative Filtering:</strong> Utilizes shared preferences across users (User/Item-based).</li>
                  <li><strong>Hybrid Systems:</strong> Combines content-based and collaborative methods for higher accuracy.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2031,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What does it mean when the p-values are high and low?",
    answer: (
      <>
        <p>In hypothesis testing:</p>
                <ul>
                  <li><strong>Low P-Value (&le; 0.05):</strong> The observed difference is unlikely to have occurred by random chance. You reject the null hypothesis in favor of the alternative hypothesis.</li>
                  <li><strong>High P-Value (&gt; 0.05):</strong> The observed difference could easily have occurred by random chance. You fail to reject the null hypothesis.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2032,
    category: 'Data Science',
    difficulty: 'medium',
    question: "When is resampling done?",
    answer: (
      <>
        <p>Resampling is done in several data science scenarios:</p>
                <ul>
                  <li><strong>Balancing Datasets:</strong> Oversampling minority classes (SMOTE) or undersampling majority classes in imbalanced classification.</li>
                  <li><strong>Model Validation:</strong> Bootstrapping or Cross-validation to get robust performance bounds.</li>
                  <li><strong>Non-parametric Testing:</strong> Permutation tests to calculate statistical significance without assuming normal distributions.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2033,
    category: 'Data Science',
    difficulty: 'medium',
    question: "Explain the terms KPI, lift, model fitting, robustness and DOE?",
    answer: (
      <>
        <p>Core concepts in business analytics and modeling:</p>
                <ul>
                  <li><strong>KPI (Key Performance Indicator):</strong> Metric measuring business objectives.</li>
                  <li><strong>Lift:</strong> Measure of model performance improvement compared to random selection.</li>
                  <li><strong>Model Fitting:</strong> Adjusting parameters to align predictions with training data.</li>
                  <li><strong>Robustness:</strong> A model's ability to maintain high accuracy when tested on noisy or modified data.</li>
                  <li><strong>DOE (Design of Experiments):</strong> Structured experimentation to evaluate factors affecting output.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2034,
    category: 'Data Science',
    difficulty: 'medium',
    question: "Define confounding variables?",
    answer: (
      <>
        <p>A <strong>confounding variable</strong> is an unmeasured extra variable that correlates (directly or inversely) with both the independent and dependent variables, potentially creating a false correlation or masking a true causal relationship.</p>
                <p><em>Example:</em> Ice cream sales and sunburns are correlated, but "hot sunny weather" is the confounder causing both.</p>
      </>
    ),
  },
  {
    id: 2035,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What is a computational graph?",
    answer: (
      <>
        <p>A <strong>Computational Graph</strong> is a directed graph where nodes represent mathematical operations (e.g. addition, multiplication) and edges represent the flow of data (tensors).</p>
                <p>It forms the mathematical execution backbone for deep learning libraries like TensorFlow and PyTorch, making it easy to run automated differentiation (autograd) during backpropagation.</p>
      </>
    ),
  },
  {
    id: 2036,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What are auto-encoders?",
    answer: (
      <>
        <p>An <strong>Autoencoder</strong> is an unsupervised artificial neural network used to learn efficient data codings (representations) by training the network to ignore signal "noise".</p>
                <p>It consists of two parts:</p>
                <ul>
                  <li><strong>Encoder:</strong> Compresses the input data into a low-dimensional bottleneck layer (latent space).</li>
                  <li><strong>Decoder:</strong> Reconstructs the original input data from the compressed representation.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2037,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What are Exploding Gradients and Vanishing Gradients?",
    answer: (
      <>
        <p>Common failure modes when training deep neural networks:</p>
                <ul>
                  <li><strong>Vanishing Gradients:</strong> Gradients shrink exponentially as they propagate backward through layers, making it impossible for early layers to update their weights. Solved using ReLU activation or LSTM structures.</li>
                  <li><strong>Exploding Gradients:</strong> Gradients grow exponentially as they propagate backward, causing massive weight updates and numerical instability. Solved using gradient clipping.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2038,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is the difference between an error and a residual error?",
    answer: (
      <>
        <p>Though similar, they differ in reference bounds:</p>
                <ul>
                  <li><strong>Error (Disturbance):</strong> The difference between an observed value and the <em>true theoretical population</em> value (which is generally unobservable).</li>
                  <li><strong>Residual Error (Residual):</strong> The difference between an observed value and the <em>estimated value</em> predicted by a model fitted on sample data.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2039,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is TF/IDF vectorization?",
    answer: (
      <>
        <p><strong>TF-IDF (Term Frequency-Inverse Document Frequency)</strong> is a numerical statistic reflecting how important a word is to a document in a collection or corpus.</p>
                <ul>
                  <li><strong>Term Frequency (TF):</strong> Frequency of a word in a specific document.</li>
                  <li><strong>Inverse Document Frequency (IDF):</strong> Penalizes words that appear frequently across all documents (e.g. "the", "is") to highlight rare, informative words.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2040,
    category: 'Data Science',
    difficulty: 'easy',
    question: "Define the term Star Schema?",
    answer: (
      <>
        <p>A <strong>Star Schema</strong> is a style of data warehouse schema structure that consists of one central <strong>Fact Table</strong> surrounded by multiple <strong>Dimension Tables</strong>, forming the shape of a star. It is highly optimized for fast querying and simple joins in BI workloads.</p>
      </>
    ),
  },
  {
    id: 2041,
    category: 'Data Science',
    difficulty: 'easy',
    question: "Why is R used in Data Visualization?",
    answer: (
      <>
        <p>R is popular for visualization due to its powerful graphic packages, most notably <strong>ggplot2</strong> (built on the Grammar of Graphics framework) and <strong>Shiny</strong> (for interactive dashboards). R allows data scientists to write publication-grade charts with minimal custom code.</p>
      </>
    ),
  },
  {
    id: 2042,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What are the types of biases that can occur during sampling?",
    answer: (
      <>
        <p>Sampling biases include:</p>
                <ul>
                  <li><strong>Selection Bias:</strong> Sample selection is not completely random, underrepresenting certain cohorts.</li>
                  <li><strong>Self-Selection Bias:</strong> Individuals select themselves into a group (e.g. online product reviews).</li>
                  <li><strong>Survivorship Bias:</strong> Focusing only on elements that survived a process, ignoring those that failed.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2043,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is survivorship bias?",
    answer: (
      <>
        <p><strong>Survivorship Bias</strong> is the logical error of focusing on the people or things that "survived" some process while ignoring those that did not (usually because of their lack of visibility).</p>
                <p><em>Example:</em> Analyzing only successful startup companies to find traits of success, while ignoring the 90% of startups that failed using the same traits.</p>
      </>
    ),
  },
  {
    id: 2044,
    category: 'Data Science',
    difficulty: 'medium',
    question: "Why is resampling done?",
    answer: (
      <>
        <p>Resampling is performed to evaluate model generalization and manage dataset distribution issues. It involves drawing repeated samples from the original data to run validation steps (like K-Fold cross validation) or build bootstrap datasets to construct confidence intervals.</p>
      </>
    ),
  },
  {
    id: 2045,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is the importance of dimensionality reduction?",
    answer: (
      <>
        <p>Dimensionality reduction is crucial because it:</p>
                <ul>
                  <li>Combats the "curse of dimensionality" (where models overfit due to sparse high-dimensional data).</li>
                  <li>Reduces computation times and memory requirements during model training.</li>
                  <li>Removes collinear and noisy variables, improving model interpretability.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2046,
    category: 'Data Science',
    difficulty: 'medium',
    question: "Which is better - random forest or multiple decision trees?",
    answer: (
      <>
        <p><strong>Random Forest</strong> is generally superior to multiple individual decision trees. A single decision tree is highly prone to overfitting. A Random Forest combines multiple trees using bootstrap aggregation (bagging) and random feature selection, reducing variance and producing more accurate, stable predictions.</p>
                `
      </>
    ),
  },
  {
    id: 2047,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is the difference between the Test set and validation set?",
    answer: (
      <>
        <p>Dataset splits serve distinct roles:</p>
                <ul>
                  <li><strong>Validation Set:</strong> Used during the tuning process to evaluate hyperparameter configurations and prevent overfitting. The model "looks" at this data indirectly.</li>
                  <li><strong>Test Set:</strong> A completely isolated dataset used only at the very end of development to measure final model generalization.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2048,
    category: 'Data Science',
    difficulty: 'easy',
    question: "How will you treat missing values during data analysis?",
    answer: (
      <>
        <p>Missing values can be treated by:</p>
                <ul>
                  <li>Deleting rows (if missing data is minimal and random).</li>
                  <li>Imputing with statistical measures like mean, median, or mode.</li>
                  <li>Replacing with categorical flags (e.g. "Unknown").</li>
                  <li>Using predictive modeling (KNN, linear regression) to predict and fill missing entries.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2049,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is Ensemble Learning?",
    answer: (
      <>
        <p><strong>Ensemble Learning</strong> is a machine learning concept where multiple models (weak learners) are combined to produce a single stronger prediction model.</p>
                <p>Three main types include:</p>
                <ul>
                  <li><strong>Bagging (Bootstrap Aggregating):</strong> Training models in parallel on random data subsets (e.g. Random Forest).</li>
                  <li><strong>Boosting:</strong> Training models sequentially, where each new model focuses on correcting the errors of the previous ones (e.g. XGBoost, AdaBoost).</li>
                  <li><strong>Stacking:</strong> Using a meta-model to combine predictions from multiple different base models.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2050,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is the Cost Function?",
    answer: (
      <>
        <p>A <strong>Cost Function</strong> (or Loss Function) is a mathematical formula that measures the error between a model's predicted outputs and the actual target values.</p>
                <p>The goal of machine learning algorithms during training is to minimize this cost function using optimization algorithms like Gradient Descent.</p>
      </>
    ),
  },
  {
    id: 2051,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What Is the difference between Epoch, Batch, and Iteration in Deep Learning?",
    answer: (
      <>
        <p>These terms describe deep learning training configurations:</p>
                <ul>
                  <li><strong>Epoch:</strong> One full pass of the entire training dataset through the neural network.</li>
                  <li><strong>Batch:</strong> A subset of the training dataset passed to the model at one time (e.g., 32 images).</li>
                  <li><strong>Iteration:</strong> The total number of batches processed. For example, if there are 1000 samples and batch size is 100, one epoch requires 10 iterations.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2052,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What are the different layers on CNN?",
    answer: (
      <>
        <p>A **Convolutional Neural Network (CNN)** typically contains three main layers:</p>
                <ul>
                  <li><strong>Convolutional Layer:</strong> Applies filters to the input image to extract features (like edges, corners).</li>
                  <li><strong>Pooling Layer:</strong> Downsamples the feature maps (usually Max Pooling) to reduce dimensions and computational complexity.</li>
                  <li><strong>Fully Connected Layer:</strong> Flattened layers at the end that perform the final classification based on extracted features.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2053,
    category: 'Data Science',
    difficulty: 'hard',
    question: "How Does an LSTM Network Work?",
    answer: (
      <>
        <p>An **LSTM (Long Short-Term Memory)** network is a specialized RNN that can learn long-term dependencies.</p>
                <p>It overcomes the vanishing gradient problem using a **cell state** regulated by three gates:</p>
                <ul>
                  <li><strong>Forget Gate:</strong> Decides what information to discard from the cell state.</li>
                  <li><strong>Input Gate:</strong> Decides what new information to store in the cell state.</li>
                  <li><strong>Output Gate:</strong> Decides what information from the cell state to output as the hidden state.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2054,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What are the variants of Back Propagation?",
    answer: (
      <>
        <p>Variants of Backpropagation and training optimization include:</p>
                <ul>
                  <li><strong>Stochastic Gradient Descent (SGD):</strong> Computes gradients and updates weights after every single sample.</li>
                  <li><strong>Batch Gradient Descent:</strong> Updates weights after evaluating the entire training set.</li>
                  <li><strong>Mini-Batch Gradient Descent:</strong> Updates weights after evaluating smaller batches (combines speed and stability).</li>
                  <li><strong>Advanced Optimizers:</strong> Adam, RMSProp, and Adagrad (which adjust learning rates dynamically).</li>
                </ul>
      </>
    ),
  },
  {
    id: 2055,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is the ROC curve?",
    answer: (
      <>
        <p>An <strong>ROC (Receiver Operating Characteristic) Curve</strong> is a graphical plot illustrating the diagnostic ability of a binary classifier system as its discrimination threshold is varied.</p>
                <p>It plots the **True Positive Rate (TPR)** against the **False Positive Rate (FPR)**. The **AUC (Area Under the Curve)** measures the overall performance, where 1.0 represents a perfect classifier and 0.5 represents random guessing.</p>
      </>
    ),
  },
  {
    id: 2056,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What is meant by 'curse of dimensionality'? How can we solve it?",
    answer: (
      <>
        <p>The <strong>Curse of Dimensionality</strong> refers to the phenomenon where data becomes extremely sparse in high-dimensional spaces, making distance metrics (like Euclidean distance) less meaningful and causing models to overfit.</p>
                <p>Solutions include:</p>
                <ul>
                  <li>Dimensionality reduction techniques (PCA, t-SNE).</li>
                  <li>Feature selection (removing redundant variables).</li>
                  <li>Regularization (L1/L2 penalties).</li>
                </ul>
      </>
    ),
  },
  {
    id: 2057,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is pickle module in Python?",
    answer: (
      <>
        <p>The <strong>pickle</strong> module in Python is used for serializing and de-serializing Python object structures.</p>
                <p>It converts Python objects (like trained scikit-learn models or data frames) into a byte stream, allowing you to save the model to disk and load it back later to make predictions.</p>
      </>
    ),
  },
  {
    id: 2058,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What are the support vectors in SVM?",
    answer: (
      <>
        <p>In Support Vector Machines, <strong>Support Vectors</strong> are the data points that lie closest to the decision boundary (hyperplane).</p>
                <p>These are the critical points because if they are removed, the position of the decision boundary changes. The entire SVM algorithm relies only on these support vectors to construct the margin.</p>
      </>
    ),
  },
  {
    id: 2059,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is a univariate analysis?",
    answer: (
      <>
        <p><strong>Univariate Analysis</strong> is the simplest form of analyzing data. "Uni" means one, so it is the analysis of a single variable at a time (e.g. calculating the mean, median, standard deviation, or plotting a histogram of age).</p>
      </>
    ),
  },
  {
    id: 2060,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is multicollinearity, and how can you overcome it?",
    answer: (
      <>
        <p><strong>Multicollinearity</strong> occurs when two or more independent variables in a regression model are highly correlated, making coefficient estimates unstable.</p>
                <p>Solutions include:</p>
                <ul>
                  <li>Calculating VIF (Variance Inflation Factor) and dropping variables with VIF &gt; 5.</li>
                  <li>Combining highly correlated variables into a single feature.</li>
                  <li>Using Principal Component Analysis (PCA).</li>
                </ul>
      </>
    ),
  },
  {
    id: 2061,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is imbalanced data?",
    answer: (
      <>
        <p><strong>Imbalanced Data</strong> refers to classification problems where the target classes are not represented equally (e.g., fraud detection where 99.9% of transactions are legitimate and only 0.1% are fraudulent).</p>
                <p>This biases models toward predicting the majority class, requiring adjustments like SMOTE, class weighting, or metric adjustments.</p>
      </>
    ),
  },
  {
    id: 2062,
    category: 'Data Science',
    difficulty: 'medium',
    question: "Can we process raw data more than once?",
    answer: (
      <>
        <p>Yes, raw data can be processed multiple times. Different analysis objectives require different preprocessing transformations (e.g., one model may require standardized features, while another tree-based model does not). Storing the raw immutable data allows you to re-run and experiment with new pipelines.</p>
      </>
    ),
  },
  {
    id: 2063,
    category: 'Data Science',
    difficulty: 'easy',
    question: "Explain the term Enumeration",
    answer: (
      <>
        <p>In programming and data science, <strong>Enumeration</strong> is the process of assigning a sequential, unique number to a list of items (e.g. using the <code>enumerate()</code> function in Python to retrieve both the index and value during loop iterations).</p>
      </>
    ),
  },
  {
    id: 2064,
    category: 'Data Science',
    difficulty: 'hard',
    question: "How to compare the distance between two binary strings?",
    answer: (
      <>
        <p>The standard way to measure the distance between two binary strings of equal length is the <strong>Hamming Distance</strong>. It counts the number of positions at which the corresponding bits are different.</p>
                <p><em>Example:</em> The Hamming distance between <code>1011101</code> and <code>1001001</code> is 2 (since the 3rd and 5th bits differ).</p>
      </>
    ),
  },
  {
    id: 2065,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is R2 metrics?",
    answer: (
      <>
        <p>The <strong>R<sup>2</sup> metric</strong> (Coefficient of Determination) evaluates regression models by measuring the proportion of variance in the dependent variable explained by the independent variables. It ranges from 0 to 1, where 1 represents a perfect fit.</p>
      </>
    ),
  },
  {
    id: 2066,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What are descriptive statistics?",
    answer: (
      <>
        <p><strong>Descriptive Statistics</strong> are statistics used to summarize and describe the basic characteristics of a dataset (e.g., mean, median, mode, range, variance, standard deviation, and quartiles), without drawing conclusions beyond the sample.</p>
      </>
    ),
  },
  {
    id: 2067,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is data augmentation?",
    answer: (
      <>
        <p><strong>Data Augmentation</strong> is a technique used to artificially increase the size of a training dataset by creating modified versions of existing data (e.g. flipping, rotating, or cropping images in computer vision datasets). This helps prevent overfitting and improves generalization.</p>
      </>
    ),
  },
  {
    id: 2068,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is a chi-square test?",
    answer: (
      <>
        <p>A <strong>Chi-Square Test</strong> is a statistical test used to determine if there is a significant association between two categorical variables (e.g., testing if gender is associated with product preference).</p>
      </>
    ),
  },
  {
    id: 2069,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is an ordered dictionary?",
    answer: (
      <>
        <p>An <strong>Ordered Dictionary</strong> (like <code>collections.OrderedDict</code> in Python) is a dictionary subclass that remembers the order in which keys were first inserted. Note: In Python 3.7+, standard dictionaries preserve insertion order by default.</p>
      </>
    ),
  },
  {
    id: 2070,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is the difference between return and yield keywords?",
    answer: (
      <>
        <p>Used to return values from Python functions:</p>
                <ul>
                  <li><strong>return:</strong> Exits the function completely, returning a value to the caller.</li>
                  <li><strong>yield:</strong> Pauses the function execution and returns a generator. The function state is saved, allowing it to resume where it left off on the next iteration. Excellent for memory optimization on large datasets.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2071,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is Interpolation and Extrapolation?",
    answer: (
      <>
        <p>These are prediction/estimation techniques:</p>
                <ul>
                  <li><strong>Interpolation:</strong> Estimating values <em>within</em> the range of observed data points. High reliability.</li>
                  <li><strong>Extrapolation:</strong> Estimating values <em>outside</em> the range of observed data points. Subject to high error rates as assumptions may change.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2072,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What is Power Analysis?",
    answer: (
      <>
        <p><strong>Power Analysis</strong> is a statistical calculation used to determine the minimum sample size required for an experiment (like A/B testing) to detect an effect of a given size with a given degree of confidence.</p>
                <p>It balances significance level (&alpha;), statistical power (1-&beta;), effect size, and sample size.</p>
      </>
    ),
  },
  {
    id: 2073,
    category: 'Data Science',
    difficulty: 'hard',
    question: "Do Gradient Descent methods at all times converge to similar point?",
    answer: (
      <>
        <p>No. For **convex** optimization problems, Gradient Descent is guaranteed to converge to the global minimum. However, for **non-convex** problems (like deep neural networks), Gradient Descent can get trapped in local minima or saddle points, converging to different points depending on weight initialization.</p>
      </>
    ),
  },
  {
    id: 2074,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is the Law of Large Numbers?",
    answer: (
      <>
        <p>The <strong>Law of Large Numbers (LLN)</strong> is a theorem stating that as the number of trials or sample size increases, the sample mean converges closer to the actual theoretical population mean (expected value).</p>
      </>
    ),
  },
  {
    id: 2075,
    category: 'Data Science',
    difficulty: 'medium',
    question: "How regularly an algorithm must be update?",
    answer: (
      <>
        <p>Algorithms should be updated when performance starts to degrade, a phenomenon known as <strong>Model Drift</strong> (or concept drift). This is typically monitored by checking if the input distributions shift or if prediction error rates rise over time.</p>
      </>
    ),
  },
  {
    id: 2076,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is a hash table collision? How can it be prevented?",
    answer: (
      <>
        <p>A collision occurs when two keys yield the same index. It can be resolved or prevented by using chaining (linked list buckets), open addressing (linear/quadratic probing), or designing a cryptographic hash function with low collision probability.</p>
      </>
    ),
  },
  {
    id: 2077,
    category: 'Data Science',
    difficulty: 'easy',
    question: "How should you tackle multi-source problems?",
    answer: (
      <>
        <p>Tackle multi-source problems by establishing schema mappings, creating unique identifier mappings (fuzzy matching), and building robust ETL pipelines to clean and centralize data before analysis.</p>
      </>
    ),
  },
  {
    id: 2078,
    category: 'Data Science',
    difficulty: 'medium',
    question: "Explain the concept of boosting?",
    answer: (
      <>
        <p><strong>Boosting</strong> is an ensemble technique where models are trained sequentially. Each new model is trained to minimize the errors (residuals) of the previous models, combining multiple weak learners into a single strong model (e.g. Gradient Boosting).</p>
      </>
    ),
  },
  {
    id: 2079,
    category: 'Data Science',
    difficulty: 'hard',
    question: "How you can make data normal using Box-Cox transformation?",
    answer: (
      <>
        <p>The <strong>Box-Cox Transformation</strong> is a mathematical power transformation that stabilizes variance and transforms highly skewed positive datasets into a normal distribution.</p>
                <p>Formula: <code>y(&lambda;) = (y<sup>&lambda;</sup> - 1) / &lambda;</code> (for &lambda; &ne; 0)</p>
      </>
    ),
  },
  {
    id: 2080,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is association analysis? Where is it used?",
    answer: (
      <>
        <p><strong>Association Analysis</strong> (Market Basket Analysis) finds rules that associate items together. It is widely used in retail to identify items frequently bought together (e.g. "If customers buy bread, they also buy butter 80% of the time").</p>
      </>
    ),
  },
  {
    id: 2081,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is the difference between Causation and Correlation?",
    answer: (
      <>
        <p>Correlation indicates that two variables move together, while causation implies that the change in one variable is the direct cause of the change in another. Correlation does not imply causation.</p>
      </>
    ),
  },
  {
    id: 2082,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What happens if two users access the same HDFS file at the same time?",
    answer: (
      <>
        <p>HDFS supports write-once, read-many access. If two users read a file simultaneously, it works without issues. If one user tries to write/append while another is writing, HDFS locks the file, rejecting the second write access until the lease is closed.</p>
      </>
    ),
  },
  {
    id: 2083,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is PyTorch?",
    answer: (
      <>
        <p><strong>PyTorch</strong> is an open-source machine learning library based on the Torch library. It is widely used for deep learning applications such as computer vision and NLP, providing flexible tensor computation with GPU acceleration and dynamic computational graphs.</p>
      </>
    ),
  },
  {
    id: 2084,
    category: 'Data Science',
    difficulty: 'medium',
    question: "How should you maintain a deployed model?",
    answer: (
      <>
        <p>Model maintenance involves:</p>
                <ul>
                  <li>Monitoring predictions and telemetry logs for shifts.</li>
                  <li>Regularly retraining models with fresh historical data.</li>
                  <li>Setting up fallback defaults to prevent server crashes if input values are corrupt.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2085,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What information is gained in a decision tree algorithm?",
    answer: (
      <>
        <p><strong>Information Gain</strong> is the reduction in entropy achieved by partitioning a dataset according to a given feature. Decision tree algorithms (like ID3) split on features that yield the highest Information Gain.</p>
      </>
    ),
  },
  {
    id: 2086,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is Dropout?",
    answer: (
      <>
        <p><strong>Dropout</strong> is a regularization technique in neural networks where a random percentage of neurons are deactivated (dropped out) during each training step. This prevents neurons from co-adapting and forces the network to learn redundant representations, reducing overfitting.</p>
      </>
    ),
  },
  {
    id: 2087,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is a bias-variance trade-off in Data Science?",
    answer: (
      <>
        <p>The <strong>Bias-Variance Tradeoff</strong> is the struggle to minimize both bias and variance to prevent underfitting and overfitting. As model complexity increases, bias decreases but variance increases. The goal is to find the sweet spot that minimizes total error.</p>
      </>
    ),
  },
  {
    id: 2088,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is RMSE?",
    answer: (
      <>
        <p><strong>RMSE (Root Mean Squared Error)</strong> is a metric used to evaluate regression models by measuring the standard deviation of residuals. Formula: <code>&radic;[&Sigma;(y<sub>actual</sub> - y<sub>pred</sub>)<sup>2</sup> / N]</code>.</p>
      </>
    ),
  },
  {
    id: 2089,
    category: 'Data Science',
    difficulty: 'hard',
    question: "What is a kernel function in SVM?",
    answer: (
      <>
        <p>A **Kernel Function** in Support Vector Machines computes inner products of input vectors in a high-dimensional feature space, enabling the model to construct a linear decision boundary for non-linearly separable data without calculating coordinates in that high-dimensional space directly.</p>
      </>
    ),
  },
  {
    id: 2090,
    category: 'Data Science',
    difficulty: 'medium',
    question: "How can we select an appropriate value of k in k-means?",
    answer: (
      <>
        <p>The value of K can be selected using:</p>
                <ul>
                  <li><strong>Elbow Method:</strong> Plotting the sum of squared distances against K and finding the "elbow" point where rate of decrease slows down.</li>
                  <li><strong>Silhouette Score:</strong> Measuring how similar an object is to its own cluster compared to other clusters. High silhouette score indicates good clustering.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2091,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What is batch normalization?",
    answer: (
      <>
        <p><strong>Batch Normalization</strong> is a technique to normalize the inputs of each layer in a neural network to maintain a mean of 0 and variance of 1. This stabilizes training, reduces sensitivity to weight initialization, and speeds up convergence.</p>
      </>
    ),
  },
  {
    id: 2092,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is an Activation function?",
    answer: (
      <>
        <p>An <strong>Activation Function</strong> is a mathematical function applied to the output of a neural node. It introduces non-linearity into the network, allowing the model to learn complex patterns (e.g. ReLU, Sigmoid, Tanh).</p>
      </>
    ),
  },
  {
    id: 2093,
    category: 'Data Science',
    difficulty: 'hard',
    question: "How to detect if the time series data is stationary?",
    answer: (
      <>
        <p>Stationarity (constant mean and variance over time) can be detected using:</p>
                <ul>
                  <li><strong>Visual Inspection:</strong> Plotting data to check for trends or seasonality.</li>
                  <li><strong>ADF (Augmented Dickey-Fuller) Test:</strong> A statistical hypothesis test. If the p-value is &le; 0.05, we reject the null hypothesis and conclude the series is stationary.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2094,
    category: 'Data Science',
    difficulty: 'medium',
    question: "What happens when some of the assumptions required for linear regression are violated?",
    answer: (
      <>
        <p>Violating regression assumptions causes incorrect predictions or invalid standard errors:</p>
                <ul>
                  <li><strong>Non-linearity:</strong> Causes bias. Fix with polynomial features.</li>
                  <li><strong>Heteroscedasticity:</strong> Causes invalid confidence intervals. Fix with log transforms.</li>
                  <li><strong>Multicollinearity:</strong> Inflates coefficients. Fix by removing variables.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2095,
    category: 'Data Science',
    difficulty: 'medium',
    question: "How to deal with unbalanced binary classification?",
    answer: (
      <>
        <p>Handle unbalanced binary classification using SMOTE to oversample minority labels, class weighting in loss functions, and selecting F1-score or Precision-Recall AUC instead of accuracy.</p>
      </>
    ),
  },
  {
    id: 2096,
    category: 'Data Science',
    difficulty: 'medium',
    question: "How can outlier values be treated?",
    answer: (
      <>
        <p>Outliers can be treated by dropping them (if they are measurement errors), capping them at 1.5 * IQR boundaries (winsorization), or applying log transforms to compress data variance.</p>
      </>
    ),
  },
  {
    id: 2097,
    category: 'Data Science',
    difficulty: 'hard',
    question: "Which cross-validation method would you use to a batch of time series data?",
    answer: (
      <>
        <p>For time series data, standard K-Fold cross validation cannot be used because it violates temporal order. Instead, you use <strong>Time Series Split (Forward Chaining)</strong>, where fold 1 is train, fold 2 is test; then fold 1+2 is train, fold 3 is test, and so on.</p>
      </>
    ),
  },
  {
    id: 2098,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What is the difference between Point Estimates and Confidence Interval?",
    answer: (
      <>
        <p>Key differences in estimation:</p>
                <ul>
                  <li><strong>Point Estimate:</strong> A single value calculated from sample data that acts as the best guess for the population parameter (e.g. sample mean).</li>
                  <li><strong>Confidence Interval:</strong> A range of values, calculated with a certain confidence level (e.g. 95%), that is likely to contain the true population parameter.</li>
                </ul>
      </>
    ),
  },
  {
    id: 2099,
    category: 'Data Science',
    difficulty: 'easy',
    question: "Define quality assurance and six sigma?",
    answer: (
      <>
        <p><strong>Quality Assurance (QA)</strong> is a systematic process of verifying whether a product meets specified requirements. <strong>Six Sigma</strong> is a set of techniques and tools for process improvement, aiming for near perfection (no more than 3.4 defects per million opportunities).</p>
      </>
    ),
  },
  {
    id: 2100,
    category: 'Data Science',
    difficulty: 'easy',
    question: "What do you understand by feature vectors?",
    answer: (
      <>
        <p>A <strong>Feature Vector</strong> is an n-dimensional vector of numerical features that represent some object (e.g. a vector of pixels for an image, or a vector of word counts for a text document), serving as the input for machine learning models.</p>
      </>
    ),
  },
];
