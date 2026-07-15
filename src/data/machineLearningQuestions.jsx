import React from 'react';

export const MACHINE_LEARNING_QUESTIONS = [
  {
    id: 12021,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What is the difference between overfitting and underfitting?",
    answer: (
      <>
        <ul><li><strong>Overfitting:</strong> The model learns the training data too well, including its noise and outliers, leading to high training accuracy but poor generalization to unseen data.</li><li><strong>Underfitting:</strong> The model is too simple to capture the underlying pattern in the data, leading to poor performance on both training and test datasets.</li></ul>
      </>
    ),
  },
  {
    id: 12022,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Explain the bias-variance tradeoff?",
    answer: (
      <>
        <p>The <strong>Bias-Variance Tradeoff</strong> is the sweet spot in model complexity where we minimize both bias (error from erroneous assumptions, causing underfitting) and variance (error from sensitivity to small fluctuations in training data, causing overfitting) to minimize total error.</p>
      </>
    ),
  },
  {
    id: 12023,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What is regularization in Machine Learning?",
    answer: (
      <>
        <p><strong>Regularization</strong> is a technique used to prevent overfitting by adding a penalty term to the loss function to discourage complex models. Common types include L1 regularization (Lasso, which adds absolute weights penalty) and L2 regularization (Ridge, which adds squared weights penalty).</p>
      </>
    ),
  },
  {
    id: 12024,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Explain the cross-validation technique in Machine Learning",
    answer: (
      <>
        <p><strong>Cross-Validation</strong> is a resampling procedure used to evaluate machine learning models on a limited data sample. The most common is <strong>K-Fold Cross-Validation</strong>, where the dataset is split into K equal parts: K-1 parts are used for training and 1 part for testing, repeated K times so that every data point is tested exactly once.</p>
      </>
    ),
  },
  {
    id: 12025,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What are some common preprocessing techniques in Machine Learning?",
    answer: (
      <>
        <p>Common techniques: imputation of missing values, feature scaling (Standardization and Normalization), encoding categorical variables (One-Hot encoding, Label encoding), and outlier detection and removal.</p>
      </>
    ),
  },
  {
    id: 12026,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What evaluation metrics can be used for classification problems?",
    answer: (
      <>
        <p>Classification metrics include: Accuracy, Precision (True Positives / Predicted Positives), Recall/Sensitivity (True Positives / Actual Positives), F1-Score (harmonic mean of precision and recall), and Area Under the ROC Curve (AUC-ROC).</p>
      </>
    ),
  },
  {
    id: 12027,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "How to select important variables when working on a data set?",
    answer: (
      <>
        <p>Variable selection methods: filter methods (correlation, Chi-Square), wrapper methods (forward selection, backward elimination), and embedded methods (LASSO regularization, Random Forest feature importance scores).</p>
      </>
    ),
  },
  {
    id: 12028,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What are the key differences between correlation and causality in Machine Learning?",
    answer: (
      <>
        <ul><li><strong>Correlation:</strong> A statistical measure that describes the size and direction of a relationship between two variables (they move together).</li><li><strong>Causality:</strong> Indicates that one event is the result of the occurrence of the other event (one causes the other). Correlation does not imply causation.</li></ul>
      </>
    ),
  },
  {
    id: 12029,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Mention the key differences between supervised and unsupervised Machine Learning?",
    answer: (
      <>
        <ul><li><strong>Supervised Learning:</strong> Models are trained on labeled datasets where targets are known (e.g. classification, regression).</li><li><strong>Unsupervised Learning:</strong> Models identify hidden patterns or structures in unlabeled datasets (e.g. clustering, association).</li></ul>
      </>
    ),
  },
  {
    id: 12030,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Define a ROC curve.",
    answer: (
      <>
        <p>A <strong>Receiver Operating Characteristic (ROC) curve</strong> is a graphical plot illustrating the performance of a binary classifier system as its discrimination threshold is varied. It plots the True Positive Rate (TPR) against the False Positive Rate (FPR).</p>
      </>
    ),
  },
  {
    id: 12031,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What is precision and recall in Machine Learning?",
    answer: (
      <>
        <ul><li><strong>Precision:</strong> Accuracy of positive predictions. Out of all positive predictions, how many were actually positive.</li><li><strong>Recall:</strong> Out of all actual positives, how many did the model identify.</li></ul>
      </>
    ),
  },
  {
    id: 12032,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Specify some pros and cons of decision trees?",
    answer: (
      <>
        <ul><li><strong>Pros:</strong> Easy to interpret and visualize, requires little data preparation, handles both numerical and categorical data.</li><li><strong>Cons:</strong> High tendency to overfit, unstable (small modifications in data change the tree structure significantly).</li></ul>
      </>
    ),
  },
  {
    id: 12033,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What is a confusion matrix?",
    answer: (
      <>
        <p>A <strong>Confusion Matrix</strong> is a table layout summarizing the performance of classification algorithms, displaying True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN).</p>
      </>
    ),
  },
  {
    id: 12034,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Why do we need confusion matrix?",
    answer: (
      <>
        <p>It provides a detailed breakdown of correct and incorrect predictions by class, helping developers evaluate models on imbalanced datasets where simple accuracy can be misleading.</p>
      </>
    ),
  },
  {
    id: 12035,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "List all assumptions of Linear Regression.",
    answer: (
      <>
        <p>Assumptions: linearity (relationship is linear), homoscedasticity (residuals have constant variance), independence (residuals are independent), and normality (residuals are normally distributed).</p>
      </>
    ),
  },
  {
    id: 12036,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Can we use KNN for image processing?",
    answer: (
      <>
        <p>While theoretically possible, K-Nearest Neighbors (KNN) is inefficient for high-dimensional images because distance computations are extremely slow and raw pixel differences do not capture semantic details well.</p>
      </>
    ),
  },
  {
    id: 12037,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Which ML algorithm is known as the lazy learner?",
    answer: (
      <>
        <p><strong>K-Nearest Neighbors (KNN)</strong> is called a lazy learner because it does not learn a discriminative function from the training data during training; it simply stores the training dataset and performs all computations at prediction time.</p>
      </>
    ),
  },
  {
    id: 12038,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What are some popular cross validation techniques?",
    answer: (
      <>
        <p>Popular techniques: K-Fold cross-validation, Stratified K-Fold (maintains class proportions), Leave-One-Out (LOOCV), and Time-Series split.</p>
      </>
    ),
  },
  {
    id: 12039,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What is instance-based learning?",
    answer: (
      <>
        <p><strong>Instance-Based Learning</strong> (or memory-based learning) is a family of learning algorithms that compares new problem instances with instances seen in training (e.g. KNN, case-based reasoning).</p>
      </>
    ),
  },
  {
    id: 12040,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What is Native Bayes?",
    answer: (
      <>
        <p>This is a typo of <strong>Naive Bayes</strong>. It is a probabilistic classification algorithm based on Bayes' Theorem, with the 'naive' assumption of conditional independence between every pair of features.</p>
      </>
    ),
  },
  {
    id: 12041,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What are the differences between Random Forest and Gradient Boosting Machines?",
    answer: (
      <>
        <ul><li><strong>Random Forest:</strong> Uses bagging, builds trees in parallel, averages outputs to reduce variance.</li><li><strong>Gradient Boosting:</strong> Uses boosting, builds trees sequentially, with each tree correcting errors of previous trees to reduce bias.</li></ul>
      </>
    ),
  },
  {
    id: 12042,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Specify the common applications of Supervised Machine Learning?",
    answer: (
      <>
        <p>Applications: email spam detection, credit score card risk evaluations, medical diagnoses, house price projections, and image classification.</p>
      </>
    ),
  },
  {
    id: 12043,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What different techniques of unsupervised Machine Learning do you know?",
    answer: (
      <>
        <p>Techniques: Clustering (K-Means, Hierarchical, DBSCAN), Dimensionality Reduction (PCA, t-SNE), and Association Rule Learning (Apriori, FP-Growth).</p>
      </>
    ),
  },
  {
    id: 12044,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What do you mean by perceptron in Machine Learning?",
    answer: (
      <>
        <p>A <strong>Perceptron</strong> is the simplest single-layer neural network model used for binary classification of linearly separable data, computing weighted inputs and applying step functions.</p>
      </>
    ),
  },
  {
    id: 12045,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What do you mean by training Set and test Set in an ML Model?",
    answer: (
      <>
        <ul><li><strong>Training Set:</strong> The subset of data used to train the model and learn weights.</li><li><strong>Test Set:</strong> The independent subset of data used to evaluate model generalization performance.</li></ul>
      </>
    ),
  },
  {
    id: 12046,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "How do you handle corrupted or missing data in a dataset?",
    answer: (
      <>
        <p>Handle missing data by deleting rows/columns (if few), imputing values (mean, median, mode, or KNN imputation), or using models that tolerate missing values (e.g. XGBoost).</p>
      </>
    ),
  },
  {
    id: 12047,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "How to choose a classifier based on the dataset?",
    answer: (
      <>
        <p>Choosing depends on data size, linearity, dimensional volume, and noise levels. Linear models work on linearly separable data; trees/ensembles handle non-linear complex structures.</p>
      </>
    ),
  },
  {
    id: 12048,
    category: 'Machine Learning',
    difficulty: 'hard',
    question: "What is the difference between Deductive and Inductive Machine Learning?",
    answer: (
      <>
        <ul><li><strong>Deductive:</strong> Starts with general rules or theories and deduces specific conclusions (top-down).</li><li><strong>Inductive:</strong> Observes specific data patterns and generalizes them into broader rules or models (bottom-up, standard ML).</li></ul>
      </>
    ),
  },
  {
    id: 12049,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What does \u2018naive\u2019 in the Naive Bayes Classifier stands for?",
    answer: (
      <>
        <p>It stands for the absolute, simplifying assumption that all input features are completely independent of each other given the class label, which is rarely true in real life.</p>
      </>
    ),
  },
  {
    id: 12050,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Which Machine Learning Algorithm to choose for Classification Problem?",
    answer: (
      <>
        <p>Choose Logistic Regression for baseline/speed, Random Forest or Gradient Boosting for robust tabulations, and SVM or Neural Networks for high-dimensional complex boundaries.</p>
      </>
    ),
  },
  {
    id: 12051,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "How to design an Email Spam Filter?",
    answer: (
      <>
        <p>Process text into TF-IDF vector matrices, clean headers/punctuation, and train a Naive Bayes or Logistic Regression binary classifier.</p>
      </>
    ),
  },
  {
    id: 12052,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What is Pruning in Decision Trees?",
    answer: (
      <>
        <p><strong>Pruning</strong> is a regularization technique that removes leaf branches that provide little predictive value, simplifying trees to avoid overfitting.</p>
      </>
    ),
  },
  {
    id: 12053,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Explain what is a Recommendation System?",
    answer: (
      <>
        <p>An information filtering engine that predicts user ratings or preferences (e.g. Movie recommendations) using Collaborative Filtering or Content-Based Filtering.</p>
      </>
    ),
  },
  {
    id: 12054,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What is PCA or Principal Component Analysis?",
    answer: (
      <>
        <p><strong>PCA</strong> is an unsupervised dimensionality reduction method that projects high-dimensional data onto orthogonal axes (principal components) maximizing variance.</p>
      </>
    ),
  },
  {
    id: 12055,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What is Correlation and Covariance?",
    answer: (
      <>
        <ul><li><strong>Covariance:</strong> Indicates direction of linear relationships between variables.</li><li><strong>Correlation:</strong> Normalized covariance measuring both direction and strength from -1 to 1.</li></ul>
      </>
    ),
  },
  {
    id: 12056,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What is Ensemble Learning?",
    answer: (
      <>
        <p>Combining predictions of multiple weak models (base estimators) to create a stronger, more robust model (e.g., Bagging, Boosting).</p>
      </>
    ),
  },
  {
    id: 12057,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Why do you need confusion matrix?",
    answer: (
      <>
        <p>Enables debugging classification thresholds by showing exact type I and type II error frequencies.</p>
      </>
    ),
  },
  {
    id: 12058,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Which is more important model accuracy or model performance?",
    answer: (
      <>
        <p>Depends on cases. Performance (latency, throughput) is critical in real-time systems, while Accuracy/AUC is prioritized in medical/financial classifications.</p>
      </>
    ),
  },
  {
    id: 12059,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "How to handle an imbalanced dataset?",
    answer: (
      <>
        <p>Handle imbalance using downsampling, upsampling (SMOTE), utilizing penalizing cost functions, or evaluating with F1/AUC rather than simple accuracy.</p>
      </>
    ),
  },
  {
    id: 12060,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What evaluation approaches would work to gauge the effectiveness of an ML model?",
    answer: (
      <>
        <p>Cross-validation iterations, testing on hold-out sets, checking learning curves, and analyzing precision-recall tradeoff diagrams.</p>
      </>
    ),
  },
  {
    id: 12061,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What are some key differences between a Linked List and an Array?",
    answer: (
      <>
        <ul><li><strong>Array:</strong> Contiguous memory storage, fast indexing O(1), expensive inserts/deletes O(N).</li><li><strong>Linked List:</strong> Non-contiguous nodes, slow indexing O(N), fast insert/delete O(1) if location is known.</li></ul>
      </>
    ),
  },
  {
    id: 12062,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What is a hash table?",
    answer: (
      <>
        <p>A data structure mapping keys to values using hash functions to compute array indexes, supporting O(1) average lookup speed.</p>
      </>
    ),
  },
  {
    id: 12063,
    category: 'Machine Learning',
    difficulty: 'hard',
    question: "What is Temporal Difference Learning Method?",
    answer: (
      <>
        <p><strong>Temporal Difference (TD) Learning</strong> is a model-free Reinforcement Learning method that learns by bootstrapping from current estimates, updating value predictions based on immediate rewards and future estimates.</p>
      </>
    ),
  },
  {
    id: 12064,
    category: 'Machine Learning',
    difficulty: 'hard',
    question: "What are the benefits and limitations of the Temporal Difference Learning Method?",
    answer: (
      <>
        <ul><li><strong>Benefits:</strong> Learns online step-by-step without requiring environment transition models.</li><li><strong>Limitations:</strong> Sensitive to initial parameter settings, susceptible to bootstrapping bias errors.</li></ul>
      </>
    ),
  },
  {
    id: 12065,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "State the differences between Statistical Modeling and Machine Learning?",
    answer: (
      <>
        <ul><li><strong>Statistical Modeling:</strong> Focuses on relationship inference, parameter coefficients, and hypothesis test models.</li><li><strong>Machine Learning:</strong> Focuses on predictive accuracy, generalization power, and data-driven iterations.</li></ul>
      </>
    ),
  },
  {
    id: 12066,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "How to build a Data Pipeline?",
    answer: (
      <>
        <p>Build using ETL phases: Extract sources  &rarr;  Transform (cleaning, scaling, mapping features)  &rarr;  Load (staging databases/warehouses) using orchestration runners (Airflow).</p>
      </>
    ),
  },
  {
    id: 12067,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What is Fourier Transform in a single sentence?",
    answer: (
      <>
        <p>The <strong>Fourier Transform</strong> decomposes a time-domain signal waveform into its component frequencies in the frequency domain.</p>
      </>
    ),
  },
  {
    id: 12068,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What is F1 score and how is it used?",
    answer: (
      <>
        <p>The F1-Score is the harmonic mean of precision and recall. It is used to measure classification effectiveness on imbalanced targets.</p>
      </>
    ),
  },
  {
    id: 12069,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Why Naive Bayes is so Naive?",
    answer: (
      <>
        <p>Because it assumes features (like words in spam email) do not interact or correlate with each other within classes, which is mathematically unrealistic.</p>
      </>
    ),
  },
  {
    id: 12070,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "How to capture the correlation between continuous and categorical variables?",
    answer: (
      <>
        <p>Capture using box plots, calculating Point-Biserial correlation coefficients, or running Analysis of Variance (ANOVA) F-tests.</p>
      </>
    ),
  },
  {
    id: 12071,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What are the different types of algorithm techniques in Machine Learning?",
    answer: (
      <>
        <p>Techniques: supervised learning (regression, classification), unsupervised (clustering, reduction), and reinforcement learning (q-learning).</p>
      </>
    ),
  },
  {
    id: 12072,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What is Bayes Theorem and how it is used in ML?",
    answer: (
      <>
        <p>Bayes Theorem calculates posterior probability: P(A|B) = [P(B|A) * P(A)] / P(B). It forms the mathematical foundation of Naive Bayes classifiers.</p>
      </>
    ),
  },
  {
    id: 12073,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Highlight the difference between discriminative and generative models?",
    answer: (
      <>
        <ul><li><strong>Generative:</strong> Learns the joint probability P(X,Y), modeling how data was generated (e.g. Naive Bayes, GANs).</li><li><strong>Discriminative:</strong> Learns the conditional probability P(Y|X), modeling decision boundaries directly (e.g. Logistic Regression, SVM).</li></ul>
      </>
    ),
  },
  {
    id: 12074,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What is pruning? How a decision tree is pruned?",
    answer: (
      <>
        <p>Removing bottom branches providing little splits. Pruned using cost-complexity metrics to simplify classification trees.</p>
      </>
    ),
  },
  {
    id: 12075,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Which one is more important; model performance or model accuracy?",
    answer: (
      <>
        <p>Accuracy is vital for predictions; performance is vital for processing speed and operational resource budgets.</p>
      </>
    ),
  },
  {
    id: 12076,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Where ensemble techniques can be useful?",
    answer: (
      <>
        <p>Useful for improving model stability, reducing prediction variance, and boosting accuracy on complex datasets.</p>
      </>
    ),
  },
  {
    id: 12077,
    category: 'Machine Learning',
    difficulty: 'hard',
    question: "What is the use of the Kernel trick?",
    answer: (
      <>
        <p>The Kernel trick projects low-dimensional, non-linearly separable data into higher dimensions where it becomes linearly separable, without computing coordinates explicitly.</p>
      </>
    ),
  },
  {
    id: 12078,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Mention some methods to screen the Outliers?",
    answer: (
      <>
        <p>Methods: Z-Score analysis, Interquartile Range (IQR) limits, Isolation Forest estimators, and scatter plot visualizations.</p>
      </>
    ),
  },
  {
    id: 12079,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Mention the limitations of collaborative filtering?",
    answer: (
      <>
        <p>Limitations: Cold-start problem (cannot recommend to new users), sparsity of feedback matrices, and popularity bias.</p>
      </>
    ),
  },
  {
    id: 12080,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Explain the process of feature engineering?",
    answer: (
      <>
        <p>Transforming raw database attributes into features that better represent the underlying problem to predictive algorithms.</p>
      </>
    ),
  },
  {
    id: 12081,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Mention some common techniques used in feature engineering.",
    answer: (
      <>
        <p>Techniques: binning numerical values, creating interaction terms, extracting dates, applying log transformations, and target encoding.</p>
      </>
    ),
  },
  {
    id: 12082,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "How to solve cold-start problem in Recommendation Systems?",
    answer: (
      <>
        <p>Solve by using hybrid filtering (content + collaborative), prompting users for initial interests at signup, or recommending popular items first.</p>
      </>
    ),
  },
  {
    id: 12083,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What is Central Limit Theorem?",
    answer: (
      <>
        <p>The <strong>Central Limit Theorem (CLT)</strong> states that the sampling distribution of the sample mean approaches a normal distribution as sample sizes grow large (typically N &gt;= 30), regardless of the population distribution shape.</p>
      </>
    ),
  },
  {
    id: 12084,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Explain the importance of Central Limit Theorem.",
    answer: (
      <>
        <p>It allows us to perform statistical hypothesis tests (t-tests, Z-tests) and calculate confidence intervals even on non-normally distributed populations.</p>
      </>
    ),
  },
  {
    id: 12085,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "Explain what is a Cost Function?",
    answer: (
      <>
        <p>A mathematical function that measures the error difference between model predicted values and actual targets, which models minimize during training.</p>
      </>
    ),
  },
  {
    id: 12086,
    category: 'Machine Learning',
    difficulty: 'hard',
    question: "What are the full forms of PCA, KPCA, and ICA, and what is their use?",
    answer: (
      <>
        <ul><li><strong>PCA:</strong> Principal Component Analysis (linear dimensionality reduction).</li><li><strong>KPCA:</strong> Kernel Principal Component Analysis (non-linear reduction).</li><li><strong>ICA:</strong> Independent Component Analysis (separating mixed signals).</li></ul>
      </>
    ),
  },
  {
    id: 12087,
    category: 'Machine Learning',
    difficulty: 'hard',
    question: "What are the components of relational evaluation techniques?",
    answer: (
      <>
        <p>Components include relational schemas, target variables, evaluation cross-validations, and cost matrices for predictions.</p>
      </>
    ),
  },
  {
    id: 12088,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What is Gradient Descent?",
    answer: (
      <>
        <p>An optimization algorithm used to minimize cost functions by iteratively updating model weights in the direction of steepest descent (negative gradient).</p>
      </>
    ),
  },
  {
    id: 12089,
    category: 'Machine Learning',
    difficulty: 'hard',
    question: "What is a Boltzmann Machine?",
    answer: (
      <>
        <p>A type of stochastic recurrent neural network that learns a probability distribution over its input space, consisting of visible and hidden units.</p>
      </>
    ),
  },
  {
    id: 12090,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What is Pattern Recognition? Where it can be used?",
    answer: (
      <>
        <p>Automated recognition of regularities and patterns in data. Used in OCR, speech recognition, face recognition, and medical diagnostics.</p>
      </>
    ),
  },
  {
    id: 12091,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What is Data augmentation? Give examples",
    answer: (
      <>
        <p>Artificially increasing training dataset size by generating modified copies. Examples: rotating/cropping images, adding noise, and substituting synonyms in text.</p>
      </>
    ),
  },
  {
    id: 12092,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "How can you perform static analysis in a Python application?",
    answer: (
      <>
        <p>Perform static analysis using linting tools like <code>Pylint</code>, <code>Flake8</code>, or type checkers like <code>Mypy</code> without executing scripts.</p>
      </>
    ),
  },
  {
    id: 12093,
    category: 'Machine Learning',
    difficulty: 'hard',
    question: "Specify the different types of Genetic Programming.",
    answer: (
      <>
        <p>Types: Tree-based, Linear Genetic Programming (LGP), Graph-based, and Grammar-guided genetic programs.</p>
      </>
    ),
  },
  {
    id: 12094,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What is Support Vector Machine?",
    answer: (
      <>
        <p>A supervised model that separates classes by finding the hyperplane that maximizes the margin distance between classes.</p>
      </>
    ),
  },
  {
    id: 12095,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "Why data cleansing is important in data analysis?",
    answer: (
      <>
        <p>Improves prediction quality: GIGO (Garbage In, Garbage Out). Clean datasets reduce training noise and prevent skewed models.</p>
      </>
    ),
  },
  {
    id: 12096,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "R or Python- Which is the best for machine learning?",
    answer: (
      <>
        <p>Python is preferred for general-purpose applications and deep learning integrations, whereas R is prioritized for academic statistical modeling and plotting.</p>
      </>
    ),
  },
  {
    id: 12097,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What are tensors in machine learning?",
    answer: (
      <>
        <p>Tensors are multi-dimensional data arrays generalizing scalars, vectors, and matrices to higher dimensions.</p>
      </>
    ),
  },
  {
    id: 12098,
    category: 'Machine Learning',
    difficulty: 'easy',
    question: "What are the perks of using TensorFlow?",
    answer: (
      <>
        <p>Perks: modular graph computations, multi-GPU scaling, built-in Keras APIs, and strong production deployment tools (TF Serving).</p>
      </>
    ),
  },
  {
    id: 12099,
    category: 'Machine Learning',
    difficulty: 'medium',
    question: "What are limitations of using TensorFlow?",
    answer: (
      <>
        <p>Limitations: steep learning curve for custom graphs, slower debugging than PyTorch, and heavy memory usage overheads.</p>
      </>
    ),
  },
  {
    id: 12100,
    category: 'Machine Learning',
    difficulty: 'hard',
    question: "What is an OOB error?",
    answer: (
      <>
        <p><strong>Out-Of-Bag (OOB) error</strong> is a method of measuring prediction error of random forests by evaluating predictions on bootstrap samples not seen during training.</p>
      </>
    ),
  },
];
