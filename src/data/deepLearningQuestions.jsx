import React from 'react';

export const DEEP_LEARNING_QUESTIONS = [
  {
    id: 3001,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is Deep Learning?",
    answer: (
      <>
        <p><strong>Deep Learning</strong> is a subfield of Machine Learning based on Artificial Neural Networks (ANNs) with representation learning. The adjective "deep" refers to the use of multiple layers in the network.</p>
                <p>It mimics the human brain structure to process data, detect features, and make decisions, performing exceptionally well on unstructured data like images, audio, and natural language.</p>
      </>
    ),
  },
  {
    id: 3002,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is the difference between supervised learning and unsupervised learning?",
    answer: (
      <>
        <p>The differences lie in data labeling and objective functions:</p>
                <ul>
                  <li><strong>Supervised Learning:</strong> The algorithm is trained on labeled data, learning to map input features to a known target (e.g. classification, regression).</li>
                  <li><strong>Unsupervised Learning:</strong> The algorithm is trained on unlabeled data, finding patterns, groupings, or structures directly from raw data (e.g. clustering, density estimation).</li>
                </ul>
      </>
    ),
  },
  {
    id: 3003,
    category: 'Deep Learning',
    difficulty: 'hard',
    question: "Explain Backpropagation in Neural Networks.",
    answer: (
      <>
        <p><strong>Backpropagation</strong> is the mathematical method used to calculate the gradient of the loss function with respect to the network weights.</p>
                <p>It works using the **chain rule** of calculus, propagating the error backward from the output layer to the input layer to calculate gradients and update the weights via an optimizer (like SGD or Adam) to minimize overall loss.</p>
      </>
    ),
  },
  {
    id: 3004,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are activation functions, and why are they necessary?",
    answer: (
      <>
        <p>An <strong>Activation Function</strong> is a mathematical formula applied to the output of a neural node. They are necessary because they introduce **non-linearity** into the network.</p>
                <p>Without non-linearity, a neural network with any number of layers would act as a single-layer linear model, making it impossible to learn complex patterns (like images or non-linear functions).</p>
      </>
    ),
  },
  {
    id: 3005,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is the vanishing gradient problem?",
    answer: (
      <>
        <p>The <strong>Vanishing Gradient Problem</strong> occurs when gradients shrink exponentially as they propagate backward through the layers of a deep neural network.</p>
                <p>This causes early layers to update their weights very slowly or not at all, preventing the network from learning. It is common in networks using Sigmoid or Tanh activation functions, and is mitigated by using **ReLU** activation functions, **Residual Connections** (ResNets), or **Batch Normalization**.</p>
      </>
    ),
  },
  {
    id: 3006,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "Explain dropout regularization.",
    answer: (
      <>
        <p><strong>Dropout Regularization</strong> is a technique where a random fraction of neurons (e.g. 20% to 50%) are deactivated during each step of training.</p>
                <p>This forces the network to learn redundant representations and prevents neurons from co-adapting too closely, significantly reducing **overfitting** and improving general test accuracy.</p>
      </>
    ),
  },
  {
    id: 3007,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is data augmentation?",
    answer: (
      <>
        <p><strong>Data Augmentation</strong> is a technique used to artificially expand a training dataset by generating modified copies of existing data.</p>
                <p>In computer vision, this includes random transformations like cropping, rotating, scaling, flipping, and adjusting brightness, helping the model generalize to various perspectives.</p>
      </>
    ),
  },
  {
    id: 3008,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is transfer learning?",
    answer: (
      <>
        <p><strong>Transfer Learning</strong> is a machine learning technique where a model developed for one task is reused as the starting point for a model on a second related task.</p>
                <p>For example, taking a model trained on ImageNet (millions of general images), freezing its early feature extraction layers, and fine-tuning only the last classifier layer to detect specific objects (e.g., medical anomalies).</p>
      </>
    ),
  },
  {
    id: 3009,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are recurrent neural networks (RNNs)?",
    answer: (
      <>
        <p><strong>Recurrent Neural Networks (RNNs)</strong> are neural networks designed to process sequential data (like text sentences or time series).</p>
                <p>They differ from standard feedforward networks by having loops, which allow information to persist across steps in the sequence, creating a form of internal memory.</p>
      </>
    ),
  },
  {
    id: 3010,
    category: 'Deep Learning',
    difficulty: 'hard',
    question: "Explain the long short-term memory (LSTM) network.",
    answer: (
      <>
        <p>An <strong>LSTM</strong> is a specialized type of RNN designed to learn long-term dependencies in sequential data, overcoming the vanishing gradient problem.</p>
                <p>It regulates the flow of information using a **cell state** controlled by three gates:</p>
                <ul>
                  <li><strong>Forget Gate:</strong> Decides what information to discard from the cell state.</li>
                  <li><strong>Input Gate:</strong> Decides what new information to add to the cell state.</li>
                  <li><strong>Output Gate:</strong> Decides what information from the cell state should be output as the hidden state.</li>
                </ul>
      </>
    ),
  },
  {
    id: 3011,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is the difference between a CNN and an RNN?",
    answer: (
      <>
        <p>Key architectural differences:</p>
                <ul>
                  <li><strong>CNN (Convolutional Neural Network):</strong> Uses convolution filters to extract spatial features. Ideal for images, video, and grid-like structured data.</li>
                  <li><strong>RNN (Recurrent Neural Network):</strong> Uses feedback loops to process sequential datasets. Ideal for time series, audio, and natural language text.</li>
                </ul>
      </>
    ),
  },
  {
    id: 3012,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is batch normalization?",
    answer: (
      <>
        <p><strong>Batch Normalization</strong> is a technique to normalize the inputs of each layer in a neural network to maintain a mean of 0 and variance of 1 within each mini-batch.</p>
                <p>It stabilizes training, allows for higher learning rates, and reduces sensitivity to initial parameter weights.</p>
      </>
    ),
  },
  {
    id: 3013,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is the difference between stochastic gradient descent (SGD) and mini-batch gradient descent?",
    answer: (
      <>
        <p>The difference is the number of samples evaluated per weight update:</p>
                <ul>
                  <li><strong>Stochastic Gradient Descent (SGD):</strong> Computes gradients and updates parameters after evaluating every single sample. Fast but highly noisy updates.</li>
                  <li><strong>Mini-batch Gradient Descent:</strong> Computes gradients and updates parameters after evaluating a batch of samples (e.g. 32, 64, or 128). Combines computational efficiency with stable gradient updates.</li>
                </ul>
      </>
    ),
  },
  {
    id: 3014,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is the role of an optimizer in Deep Learning?",
    answer: (
      <>
        <p>An <strong>Optimizer</strong> is an algorithm that modifies the weights and learning rate of a neural network to minimize the loss function during training (e.g. Adam, RMSProp, SGD). It determines how the model navigates the loss surface.</p>
      </>
    ),
  },
  {
    id: 3015,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "Explain the concept of learning rate in Deep Learning?",
    answer: (
      <>
        <p>The <strong>Learning Rate</strong> is a hyperparameter that controls how much to adjust the model's weights with respect to the loss gradient during optimization:</p>
                <ul>
                  <li><strong>Too High:</strong> The model may overshoot the minimum and fail to converge.</li>
                  <li><strong>Too Low:</strong> The training process will be extremely slow and can get stuck in local minima.</li>
                </ul>
      </>
    ),
  },
  {
    id: 3016,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is overfitting, and how it can be mitigated?",
    answer: (
      <>
        <p><strong>Overfitting</strong> occurs when a neural network performs exceptionally on training data but poorly on unseen test data. It can be mitigated by:</p>
                <ul>
                  <li>Using dropout regularization.</li>
                  <li>Adding L1/L2 weight penalties.</li>
                  <li>Data augmentation and collecting more data.</li>
                  <li>Early stopping during training.</li>
                </ul>
      </>
    ),
  },
  {
    id: 3017,
    category: 'Deep Learning',
    difficulty: 'hard',
    question: "Explain the concept of the universal approximation theorem in Neural Networks.",
    answer: (
      <>
        <p>The <strong>Universal Approximation Theorem</strong> states that a feedforward neural network with a single hidden layer containing a finite number of neurons and a non-linear activation function can approximate any continuous function to any desired degree of accuracy, provided it is given enough capacity.</p>
      </>
    ),
  },
  {
    id: 3018,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is the difference between a generative and discriminative model?",
    answer: (
      <>
        <p>Differences in probability modeling:</p>
                <ul>
                  <li><strong>Discriminative Model:</strong> Learns the boundary between classes by modeling the conditional probability <code>P(Y|X)</code> (e.g., predicting class Y given features X).</li>
                  <li><strong>Generative Model:</strong> Learns the joint probability distribution <code>P(X, Y)</code> to understand how the data was generated, allowing it to generate new data points (e.g., GANs).</li>
                </ul>
      </>
    ),
  },
  {
    id: 3019,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are autoencoders?",
    answer: (
      <>
        <p>An <strong>Autoencoder</strong> is an unsupervised artificial neural network designed to compress inputs into a low-dimensional representation (encoding) and then reconstruct the original inputs (decoding) at the output layer, useful for feature extraction and denoising.</p>
      </>
    ),
  },
  {
    id: 3020,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is the difference between Deep Learning and Machine Learning?",
    answer: (
      <>
        <p>Machine learning relies on manual feature engineering where data scientists must curate input features. Deep learning automates this feature discovery using layered neural network architectures, but requires significantly larger datasets and compute resources.</p>
      </>
    ),
  },
  {
    id: 3021,
    category: 'Deep Learning',
    difficulty: 'hard',
    question: "What is a Restricted Boltzmann Machine?",
    answer: (
      <>
        <p>A <strong>Restricted Boltzmann Machine (RBM)</strong> is a generative, stochastic, artificial neural network that can learn a probability distribution over its set of inputs. It is restricted because nodes in the same layer cannot share connections.</p>
      </>
    ),
  },
  {
    id: 3022,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is gradient descent?",
    answer: (
      <>
        <p><strong>Gradient Descent</strong> is an iterative optimization algorithm used to minimize a loss function. It works by calculating the gradient (slope) of the loss function at a given point and updating the parameters in the opposite direction of the gradient.</p>
      </>
    ),
  },
  {
    id: 3023,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "List top three variants of gradient descent?",
    answer: (
      <>
        <p>The three main variants are:</p>
                <ul>
                  <li>Batch Gradient Descent</li>
                  <li>Stochastic Gradient Descent (SGD)</li>
                  <li>Mini-Batch Gradient Descent</li>
                </ul>
      </>
    ),
  },
  {
    id: 3024,
    category: 'Deep Learning',
    difficulty: 'hard',
    question: "What are Deep Autoencoders?",
    answer: (
      <>
        <p>A <strong>Deep Autoencoder</strong> is an autoencoder that uses multiple hidden layers in both the encoder and decoder components, enabling the network to learn highly non-linear, hierarchical feature representations.</p>
      </>
    ),
  },
  {
    id: 3025,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are generative adversarial networks (GANs)?",
    answer: (
      <>
        <p><strong>GANs</strong> are generative models consisting of two neural networks competing against each other:</p>
                <ul>
                  <li><strong>Generator:</strong> Tries to create fake data (e.g. realistic images) from random noise.</li>
                  <li><strong>Discriminator:</strong> Tries to distinguish between genuine training data and fake generated data.</li>
                </ul>
                <p>They are trained simultaneously in a minimax game to generate highly realistic synthetic data.</p>
      </>
    ),
  },
  {
    id: 3026,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is bagging and boosting in Deep Learning?",
    answer: (
      <>
        <p>Both are ensemble methods:</p>
                <ul>
                  <li><strong>Bagging:</strong> Trains models in parallel on independent random samples of the training data (e.g., Random Forests).</li>
                  <li><strong>Boosting:</strong> Trains models sequentially, where each new model focuses on correcting the errors of the preceding models.</li>
                </ul>
      </>
    ),
  },
  {
    id: 3027,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is binary step function?",
    answer: (
      <>
        <p>A **Binary Step Function** is a threshold-based activation function that outputs <code>1</code> if the input is greater than or equal to a threshold (usually 0), and <code>0</code> otherwise. It is rarely used in deep networks because its gradient is zero everywhere, making backpropagation impossible.</p>
      </>
    ),
  },
  {
    id: 3028,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "Define what is ReLU Function?",
    answer: (
      <>
        <p>The <strong>ReLU (Rectified Linear Unit)</strong> is an activation function defined as:</p>
                <p><code>f(x) = max(0, x)</code></p>
                <p>It outputs the input directly if it is positive, and zero otherwise. It is highly popular because it prevents vanishing gradients during training and is computationally efficient.</p>
      </>
    ),
  },
  {
    id: 3029,
    category: 'Deep Learning',
    difficulty: 'hard',
    question: "What is Swish Function?",
    answer: (
      <>
        <p>The <strong>Swish Function</strong> is a smooth, non-monotonic activation function developed by Google, defined as:</p>
                <p><code>f(x) = x * sigmoid(&beta;x)</code></p>
                <p>It has been shown to outperform ReLU on deep networks by allowing small negative values to propagate through the network.</p>
      </>
    ),
  },
  {
    id: 3030,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is Model Capacity?",
    answer: (
      <>
        <p><strong>Model Capacity</strong> refers to a model's ability to fit a variety of functions. A model with high capacity can learn complex boundaries, but is prone to overfitting. A model with low capacity might underfit.</p>
      </>
    ),
  },
  {
    id: 3031,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is Data Normalization?",
    answer: (
      <>
        <p><strong>Data Normalization</strong> is the scaling of numerical inputs to a uniform range (typically 0 to 1 or -1 to 1). This ensures all features contribute equally to optimization and prevents gradient updates from oscillating.</p>
      </>
    ),
  },
  {
    id: 3032,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What are hyperparameters in Deep Learning?",
    answer: (
      <>
        <p><strong>Hyperparameters</strong> are the configuration variables of a model that are set before training begins (rather than learned during training), such as the learning rate, batch size, and network architecture.</p>
      </>
    ),
  },
  {
    id: 3033,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "Name some common hyperparameters in Deep Learning.",
    answer: (
      <>
        <p>Common hyperparameters include:</p>
                <ul>
                  <li>Learning rate</li>
                  <li>Batch size</li>
                  <li>Number of epochs</li>
                  <li>Number of hidden layers and nodes per layer</li>
                  <li>Activation functions (e.g. ReLU, Sigmoid)</li>
                  <li>Optimizer choice (e.g. Adam)</li>
                </ul>
      </>
    ),
  },
  {
    id: 3034,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "Highlight the difference between shallow network and a deep network.",
    answer: (
      <>
        <p>Shallow networks contain only 1 or 2 hidden layers, representing simple functions. Deep networks contain many layers (sometimes hundreds), allowing them to extract hierarchical, complex feature representations.</p>
      </>
    ),
  },
  {
    id: 3035,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is Batch Gradient Descent?",
    answer: (
      <>
        <p><strong>Batch Gradient Descent</strong> is an optimization method where parameter updates are calculated after evaluating the entire training dataset at once, ensuring stable but slower updates.</p>
      </>
    ),
  },
  {
    id: 3036,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "How does Batch Gradient Descent work?",
    answer: (
      <>
        <p>It processes all training samples through the network, computes the average loss, calculates the gradient of the loss, and then performs a single parameter weight update step.</p>
      </>
    ),
  },
  {
    id: 3037,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "Specify the advantages and disadvantages of Batch Gradient Descent.",
    answer: (
      <>
        <p>Tradeoffs of Batch Gradient Descent:</p>
                <ul>
                  <li><strong>Advantages:</strong> Stable convergence, works well on small datasets.</li>
                  <li><strong>Disadvantages:</strong> Very slow on large datasets, requires massive memory to hold the entire dataset during backpropagation.</li>
                </ul>
      </>
    ),
  },
  {
    id: 3038,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is the use of activation function?",
    answer: (
      <>
        <p>Activation functions are used to introduce non-linear relationships into the outputs of neural nodes, enabling networks to learn and fit highly complex mathematical representations.</p>
      </>
    ),
  },
  {
    id: 3039,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "Can a deep leaning model be solely based on linear regression?",
    answer: (
      <>
        <p>No. A network based solely on linear operations (without non-linear activation functions) collapses into a single linear equation, making it incapable of learning non-linear structures like images or text patterns.</p>
      </>
    ),
  },
  {
    id: 3040,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are exploding and vanishing gradients?",
    answer: (
      <>
        <p>Vanishing gradients shrink to zero in deep networks, halting learning in early layers. Exploding gradients grow exponentially, causing massive weight updates and numerical instability during backpropagation.</p>
      </>
    ),
  },
  {
    id: 3041,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are the applications of Generative Adversarial Networks (GANs)?",
    answer: (
      <>
        <p>GAN applications include:</p>
                <ul>
                  <li>Generating high-resolution synthetic images (e.g. art, faces).</li>
                  <li>Style transfer and image-to-image translations.</li>
                  <li>Text-to-image synthesis.</li>
                  <li>Super-resolution (improving image resolution).</li>
                </ul>
      </>
    ),
  },
  {
    id: 3042,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "How can you handle imbalanced datasets in Deep Learning?",
    answer: (
      <>
        <p>Strategies for handling imbalance:</p>
                <ul>
                  <li>Using class weights to penalize errors on minority classes in loss functions.</li>
                  <li>Resampling datasets using oversampling (SMOTE) or undersampling.</li>
                  <li>Adjusting decision thresholds or utilizing metrics like F1-score.</li>
                </ul>
      </>
    ),
  },
  {
    id: 3043,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are L1 and L2 regularization?",
    answer: (
      <>
        <p>Weight regularization penalties added to the loss function:</p>
                <ul>
                  <li><strong>L1 Regularization (Lasso):</strong> Adds the absolute values of weights to the loss, promoting sparse weight matrices (some weights become exactly 0).</li>
                  <li><strong>L2 Regularization (Ridge):</strong> Adds the squared values of weights to the loss, keeping weights small but non-zero.</li>
                </ul>
      </>
    ),
  },
  {
    id: 3044,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "Why are L1 and L2 regularization used in Deep Learning?",
    answer: (
      <>
        <p>They are used to prevent overfitting by penalizing large weights, forcing the network to maintain simpler representations that generalize better to test data.</p>
      </>
    ),
  },
  {
    id: 3045,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are the applications of autoencoder?",
    answer: (
      <>
        <p>Autoencoder applications include:</p>
                <ul>
                  <li>Dimensionality reduction (non-linear PCA alternative).</li>
                  <li>Image denoising (removing noise from inputs).</li>
                  <li>Anomaly detection (flagging inputs with high reconstruction loss).</li>
                  <li>Generative modeling (Variational Autoencoders).</li>
                </ul>
      </>
    ),
  },
  {
    id: 3046,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is the vanishing/exploding gradient problem?",
    answer: (
      <>
        <p>A training issue in deep networks where weight update gradients either shrink to zero (vanishing) or expand exponentially (exploding) due to recursive matrix multiplications during backpropagation.</p>
      </>
    ),
  },
  {
    id: 3047,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "How vanishing/exploding gradient problem can be addressed?",
    answer: (
      <>
        <p>Solutions include:</p>
                <ul>
                  <li>Using ReLU activation instead of Sigmoid.</li>
                  <li>Applying Batch Normalization.</li>
                  <li>Implementing Residual skip connections.</li>
                  <li>Applying gradient clipping (for exploding gradients).</li>
                </ul>
      </>
    ),
  },
  {
    id: 3048,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "Explain the concept of weight initialization in neural networks.",
    answer: (
      <>
        <p><strong>Weight Initialization</strong> is the process of setting the initial weights of neural nodes. Proper initialization is critical to prevent vanishing or exploding gradients at the start of training.</p>
      </>
    ),
  },
  {
    id: 3049,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "Name some weight initialization methods?",
    answer: (
      <>
        <p>Common initialization methods include:</p>
                <ul>
                  <li><strong>Xavier (Glorot) Initialization:</strong> Ideal for Sigmoid and Tanh activations.</li>
                  <li><strong>He Initialization:</strong> Ideal for ReLU activations.</li>
                  <li>Random normal / uniform distributions (with small variance).</li>
                </ul>
      </>
    ),
  },
  {
    id: 3050,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is the purpose of the learning rate in gradient descent?",
    answer: (
      <>
        <p>The learning rate determines the step size taken in the direction of the minimum loss during optimization. It controls how quickly a model updates its weights.</p>
      </>
    ),
  },
  {
    id: 3051,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What are some popular Deep Learning frameworks?",
    answer: (
      <>
        <p>The standard frameworks are <strong>PyTorch</strong> (developed by Meta), <strong>TensorFlow</strong> and <strong>Keras</strong> (developed by Google).</p>
      </>
    ),
  },
  {
    id: 3052,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is the concept of one-shot learning and its applications?",
    answer: (
      <>
        <p><strong>One-Shot Learning</strong> is a classification task where the model must learn to recognize objects from only a single training instance (often using Siamese networks to calculate vector similarity).</p>
      </>
    ),
  },
  {
    id: 3053,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What are the applications of one-shot learning?",
    answer: (
      <>
        <p>Applications include facial recognition systems (e.g. unlocking smartphones using a single registered photo) and signature verification.</p>
      </>
    ),
  },
  {
    id: 3054,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are skip connections?",
    answer: (
      <>
        <p><strong>Skip Connections</strong> (shortcut connections) bypass one or more layers, feeding the output of an early layer directly to a later layer. They form the basis of **Residual Networks (ResNets)**, allowing gradients to flow backwards unimpeded during backpropagation.</p>
      </>
    ),
  },
  {
    id: 3055,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "How does hyperparameters impact Deep Learning models?",
    answer: (
      <>
        <p>Hyperparameters control the entire capacity, convergence speed, and generalization capability of models. Setting them incorrectly can lead to failure to converge or severe overfitting.</p>
      </>
    ),
  },
  {
    id: 3056,
    category: 'Deep Learning',
    difficulty: 'hard',
    question: "Explain the concept of self-supervised learning in Deep Learning.",
    answer: (
      <>
        <p><strong>Self-Supervised Learning</strong> is a form of unsupervised learning where the model generates its own labels from the input data (e.g., masking words in a sentence and training the model to predict the missing words). It is widely used to pre-train LLMs.</p>
      </>
    ),
  },
  {
    id: 3057,
    category: 'Deep Learning',
    difficulty: 'hard',
    question: "Explain the concept of attention mechanisms in transformer models.",
    answer: (
      <>
        <p><strong>Attention Mechanisms</strong> allow models to dynamically focus on specific parts of an input sequence when generating outputs, calculating similarity coefficients across elements regardless of their relative distance.</p>
      </>
    ),
  },
  {
    id: 3058,
    category: 'Deep Learning',
    difficulty: 'hard',
    question: "What are the core elements of attention mechanisms?",
    answer: (
      <>
        <p>The core elements are **Queries (Q)**, **Keys (K)**, and **Values (V)**, which compute self-attention using scaled dot-products.</p>
      </>
    ),
  },
  {
    id: 3059,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are Gated Recurrent Units (GRUs)?",
    answer: (
      <>
        <p>A <strong>Gated Recurrent Unit (GRU)</strong> is a gating mechanism in RNNs that is similar to LSTM but has a simpler architecture, making it faster to train.</p>
      </>
    ),
  },
  {
    id: 3060,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are the key components of GRUs?",
    answer: (
      <>
        <p>GRUs regulate information flow using two gates:</p>
                <ul>
                  <li><strong>Update Gate:</strong> Decides how much historical state information to retain.</li>
                  <li><strong>Reset Gate:</strong> Decides how much historical state information to forget.</li>
                </ul>
      </>
    ),
  },
  {
    id: 3061,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "Highlight the difference between GRUs and LSTMs.",
    answer: (
      <>
        <p>GRUs have two gates (Update and Reset) and merge the cell state and hidden state. LSTMs have three gates (Forget, Input, and Output) and maintain them separately, representing more parameters but slightly higher modeling power on complex sequences.</p>
      </>
    ),
  },
  {
    id: 3062,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is dropout in Deep Learning?",
    answer: (
      <>
        <p>A regularization method where random neurons are disabled during training steps, preventing overfitting.</p>
      </>
    ),
  },
  {
    id: 3063,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "Why dropout is used?",
    answer: (
      <>
        <p>It prevents neurons from co-adapting too closely, encouraging general feature representation learning.</p>
      </>
    ),
  },
  {
    id: 3064,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "How to evaluate the performance of a Deep Learning model?",
    answer: (
      <>
        <p>Use independent validation/test set metrics: Accuracy, Precision, Recall, F1-Score (for classification) or RMSE and MAE (for regression).</p>
      </>
    ),
  },
  {
    id: 3065,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "How can you deploy Deep Learning models in production?",
    answer: (
      <>
        <p>Deployment patterns include containerizing with Docker, creating web services via FastAPI, and optimizing models using ONNX or TensorRT for faster runtime execution.</p>
      </>
    ),
  },
  {
    id: 3066,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What are some common tools and frameworks used in Deep Learning?",
    answer: (
      <>
        <p>Key tools include PyTorch, TensorFlow, Keras, TensorBoard (for telemetry), and Jupyter Notebooks.</p>
      </>
    ),
  },
  {
    id: 3067,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "How to handle missing data in Deep Learning models?",
    answer: (
      <>
        <p>Impute missing features using statistical averages, use mask arrays to instruct nodes to ignore specific inputs, or drop corrupted rows.</p>
      </>
    ),
  },
  {
    id: 3068,
    category: 'Deep Learning',
    difficulty: 'hard',
    question: "How to implement a convolutional neural network from scratch?",
    answer: (
      <>
        <p>Implementing a CNN from scratch requires coding the forward and backward passes for convolution operations (sliding filters across matrices), activation layers, pooling layers, and fully connected linear layers.</p>
      </>
    ),
  },
  {
    id: 3069,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is sequence-to-sequence models?",
    answer: (
      <>
        <p><strong>Seq2Seq</strong> models map an input sequence to an output sequence (e.g. translating English to Spanish), typically utilizing an Encoder-Decoder structure.</p>
      </>
    ),
  },
  {
    id: 3070,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are the applications of sequence-to-sequence models?",
    answer: (
      <>
        <p>Applications include machine translation, text summarization, speech recognition, and chatbots.</p>
      </>
    ),
  },
  {
    id: 3071,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "How can you speed up the training process of a Deep Learning model?",
    answer: (
      <>
        <p>Speed up training by using GPU/TPU accelerators, using mixed-precision training (FP16), optimizing data loaders (multi-threading), and implementing Batch Normalization.</p>
      </>
    ),
  },
  {
    id: 3072,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "Describe the concept of early stopping.",
    answer: (
      <>
        <p><strong>Early Stopping</strong> is a regularization technique where training is halted when the validation loss stops improving (or begins to rise), preventing overfitting.</p>
      </>
    ),
  },
  {
    id: 3073,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "How to handle the problem of exploding gradients during training?",
    answer: (
      <>
        <p>Address exploding gradients using <strong>Gradient Clipping</strong> (scaling down gradients if they exceed a threshold), weight regularization, or smaller learning rates.</p>
      </>
    ),
  },
  {
    id: 3074,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is the role of word2vec in natural language processing?",
    answer: (
      <>
        <p><strong>Word2Vec</strong> is a technique to learn word embeddings (dense vector representations of words in a continuous vector space) such that semantic similarities are preserved.</p>
      </>
    ),
  },
  {
    id: 3075,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "How to reduce the memory footprint of a Deep Learning model?",
    answer: (
      <>
        <p>Reduce footprint by using quantization (converting weights to 8-bit integers), model pruning (deleting weak weights), or knowledge distillation.</p>
      </>
    ),
  },
  {
    id: 3076,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are the challenges in training Deep Learning models on limited data?",
    answer: (
      <>
        <p>Challenges include severe overfitting and poor generalization. Solved using Data Augmentation, Regularization, and Transfer Learning.</p>
      </>
    ),
  },
  {
    id: 3077,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is reinforcement learning?",
    answer: (
      <>
        <p>An area of machine learning where agents learn to perform actions in an environment to maximize cumulative reward.</p>
      </>
    ),
  },
  {
    id: 3078,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What are the applications of Reinforcement Learning in Deep Learning?",
    answer: (
      <>
        <p>Applications include autonomous driving, game playing (AlphaGo), robotics control, and recommendation ranking.</p>
      </>
    ),
  },
  {
    id: 3079,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What are the key components of a reinforcement learning system?",
    answer: (
      <>
        <p>Key components include: Agent, Environment, State, Action, Reward, and Policy.</p>
      </>
    ),
  },
  {
    id: 3080,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "How to determine the appropriate architecture and hyperparameters for a Deep Learning model?",
    answer: (
      <>
        <p>Use grid search, random search, or Bayesian optimization to scan combinations of layers, learning rates, and activations.</p>
      </>
    ),
  },
  {
    id: 3081,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is bias and variance?",
    answer: (
      <>
        <p>Bias is the error from simple assumptions (underfitting). Variance is the error from sensitivity to training noise (overfitting).</p>
      </>
    ),
  },
  {
    id: 3082,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "How to deal with overfitting in Deep Learning?",
    answer: (
      <>
        <p>Apply dropout, L1/L2 regularization, early stopping, and gather more training data.</p>
      </>
    ),
  },
  {
    id: 3083,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is computational graph in Deep Learning?",
    answer: (
      <>
        <p>A directed graph representing mathematical operations, allowing deep learning engines to calculate derivatives automatically via autograd.</p>
      </>
    ),
  },
  {
    id: 3084,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "Why is mini-batch gradient descent popular?",
    answer: (
      <>
        <p>It balances computational efficiency by utilizing GPU parallelism while maintaining stable gradient updates.</p>
      </>
    ),
  },
  {
    id: 3085,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "How does mini-batch gradient descent works?",
    answer: (
      <>
        <p>It splits the dataset into small batches, computes gradients for a batch, and updates parameters iteratively per batch.</p>
      </>
    ),
  },
  {
    id: 3086,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "Why is the Leaky ReLU function used?",
    answer: (
      <>
        <p><strong>Leaky ReLU</strong> outputs a small positive slope (e.g. 0.01x) for negative inputs. It is used to solve the "dying ReLU" problem where normal ReLUs get stuck outputting zero gradients.</p>
      </>
    ),
  },
  {
    id: 3087,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "Mention some examples of supervised learning?",
    answer: (
      <>
        <p>Examples include spam classification, housing price prediction (linear regression), and object classification in images.</p>
      </>
    ),
  },
  {
    id: 3088,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "Give some examples of unsupervised learning.",
    answer: (
      <>
        <p>Examples include customer segmentation (K-Means), anomaly detection (autoencoders), and association rules.</p>
      </>
    ),
  },
  {
    id: 3089,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is valid padding?",
    answer: (
      <>
        <p><strong>Valid Padding</strong> means no padding is added around the borders of an image before convolution, causing the output size to shrink.</p>
      </>
    ),
  },
  {
    id: 3090,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is same padding?",
    answer: (
      <>
        <p><strong>Same Padding</strong> adds zero-padding around borders so the output dimensions match the input dimensions exactly.</p>
      </>
    ),
  },
  {
    id: 3091,
    category: 'Deep Learning',
    difficulty: 'hard',
    question: "How a transformer architecture is better than RNNs?",
    answer: (
      <>
        <p>Transformers process all words in a sequence in parallel rather than sequentially, allowing for faster training (highly parallelizable) and better capture of long-range relationships using self-attention.</p>
      </>
    ),
  },
  {
    id: 3092,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "Why is generative adversarial networks (GANs) popular?",
    answer: (
      <>
        <p>GANs are popular because they can generate highly realistic synthetic data, including images, art, and high-fidelity text-to-speech waveforms.</p>
      </>
    ),
  },
  {
    id: 3093,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is underfitting?",
    answer: (
      <>
        <p><strong>Underfitting</strong> occurs when a model is too simple to capture the underlying structure of the data, performing poorly on both training and test data.</p>
      </>
    ),
  },
  {
    id: 3094,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "How to address the issue of underfitting in Machine Learning?",
    answer: (
      <>
        <p>Underfitting is addressed by increasing model complexity (more parameters, layers), training for more epochs, or reducing regularization penalties.</p>
      </>
    ),
  },
  {
    id: 3095,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "Why do underfitting occurs?",
    answer: (
      <>
        <p>It occurs when the model lacks capacity or training duration to learn the mathematical relationships present in the features.</p>
      </>
    ),
  },
  {
    id: 3096,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "How are Weights Initialized in a Network?",
    answer: (
      <>
        <p>Weights are set using mathematical initialization techniques like He initialization or Xavier initialization to keep input/output variances stable across layers.</p>
      </>
    ),
  },
  {
    id: 3097,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "State the difference between SAME and VALID padding?",
    answer: (
      <>
        <p>SAME padding adds zero-padding so input and output spatial sizes match. VALID padding adds zero padding, letting output shrink naturally.</p>
      </>
    ),
  },
  {
    id: 3098,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "What is Adam optimization algorithm?",
    answer: (
      <>
        <p><strong>Adam</strong> (Adaptive Moment Estimation) is an optimizer that calculates adaptive learning rates for each parameter, utilizing both first and second moments of the gradients.</p>
      </>
    ),
  },
  {
    id: 3099,
    category: 'Deep Learning',
    difficulty: 'medium',
    question: "How to train hyperparameters in a neural network?",
    answer: (
      <>
        <p>Use search frameworks like Optuna or Random Search to try combinations of learning rates, dropout rates, and batch configurations.</p>
      </>
    ),
  },
  {
    id: 3100,
    category: 'Deep Learning',
    difficulty: 'easy',
    question: "What is Epoch?",
    answer: (
      <>
        <p>An <strong>Epoch</strong> represents one complete training pass of the entire training dataset through the neural network.</p>
      </>
    ),
  },
];
