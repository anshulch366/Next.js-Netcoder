import { pythonChapter } from "./chapter";

export const machineLearning = pythonChapter("Machine Learning", "Intermediate", [
  {
    title: "Getting Started",
    summary: "Frame a prediction problem with features, a target and a baseline.",
    content: [
      "For each completed delivery, record its distance as a feature and its duration as the numeric target. A regression model learns a rule from examples. A baseline gives you a simple prediction to beat.",
      "For the library examples in this chapter, run python -m pip install numpy matplotlib scikit-learn in your Python environment. The first example uses only the standard library.",
    ],
    examples: [{
      title: "Measure a baseline error",
      code: `from statistics import mean

training_minutes = [12, 15, 18]
prediction = mean(training_minutes)
new_delivery_minutes = 17
print(prediction, abs(new_delivery_minutes - prediction))`,
      result: "The mean predicts 15 minutes and misses the new delivery by 2 minutes.",
    }],
    quizzes: [{
      question: "Which value should be hidden when predicting a future trip?",
      options: ["The trip distance","Its actual duration","The training-set mean"],
      answer: 1,
      explanation: "The actual duration is the target and becomes available after the trip.",
    }],
  },
  {
    title: "Mean Median Mode",
    summary: "Choose a measure of center that fits your data.",
    content: [
      "The mean spreads the total evenly across observations. The median is the middle of the sorted values, averaging the two central values for an even-sized dataset. The mode is the most frequent value.",
      "One very long visit can pull the mean upward. Comparing it with the median helps describe a typical visit when durations are skewed.",
    ],
    examples: [{
      title: "Summarize visit durations",
      code: `from statistics import mean, median, multimode

minutes = [2, 3, 3, 4, 18]
print(mean(minutes), median(minutes), multimode(minutes))`,
      result: "The output is 6, 3 and [3]. The 18-minute visit raises the mean.",
    }],
    quizzes: [{
      question: "If the last visit grows to 28 minutes, which summary increases?",
      options: ["The median only","The mode only","The mean only"],
      answer: 2,
      explanation: "The total increases by 10 while the middle value and frequency counts that determine the mode stay the same.",
    }],
  },
  {
    title: "Standard Deviation",
    summary: "Measure how widely values vary around their mean.",
    content: [
      "Standard deviation takes the square root of the average squared distance from the mean for a whole population. Its units match the observations. For a sample used to estimate population spread, statistics.stdev uses a denominator of n minus one.",
    ],
    examples: [{
      title: "Compare equally centered batches",
      code: `from statistics import mean, pstdev

for batch in ([10, 10, 10, 10], [8, 8, 12, 12]):
    print(mean(batch), pstdev(batch))`,
      result: "Both means are 10. The population standard deviations are 0 and 2.",
    }],
    quizzes: [{
      question: "What happens to the population standard deviation if 5 is added to every value?",
      options: ["It stays the same","It grows by 5","It becomes zero"],
      answer: 0,
      explanation: "Every observation and the mean shift together, preserving each distance.",
    }],
  },
  {
    title: "Percentile",
    summary: "Locate a threshold at a given position in an ordered dataset.",
    content: [
      "A percentile describes a position along sorted values. NumPy's default linear method interpolates between neighboring observations when the requested position falls between them. The 50th percentile gives the median.",
    ],
    examples: [{
      title: "Estimate a wait-time threshold",
      code: `import numpy as np

waits = [2, 4, 8, 14, 20]
print(np.percentile(waits, [50, 75]).tolist())`,
      result: "The two thresholds are 8.0 and 14.0 minutes.",
    }],
    quizzes: [{
      question: "What is the 75th percentile if all five waits equal 6?",
      options: ["4.5","6","75"],
      answer: 1,
      explanation: "Every ordered position and every interpolation between positions has value 6.",
    }],
  },
  {
    title: "Data Distribution",
    summary: "Read the shape of a sample from interval counts.",
    content: [
      "A distribution describes how often different values occur. Binning helps you see concentration, gaps and tails. Bin boundaries matter, so keep them fixed when comparing groups.",
    ],
    examples: [{
      title: "Count lengths by interval",
      code: `import numpy as np

lengths = [2, 3, 3, 4, 8, 9, 12]
counts, edges = np.histogram(lengths, bins=[0, 5, 10, 15])
for left, right, count in zip(edges, edges[1:], counts):
    print(left, right, count)`,
      result: "The intervals starting at 0, 5 and 10 contain 4, 2 and 1 observations respectively.",
    }],
    quizzes: [{
      question: "What does the count of 2 for the middle bin mean?",
      options: ["The mean length is 2","The bin width is 2","Two lengths lie from 5 inclusive to 10 exclusive"],
      answer: 2,
      explanation: "The values 8 and 9 fall inside that interval.",
    }],
  },
  {
    title: "Normal Data Distribution",
    summary: "Simulate measurements around a specified center and spread.",
    content: [
      "A normal distribution is symmetric about its mean. Its standard deviation sets the horizontal scale. For an ideal normal population roughly 68 percent of values fall within one standard deviation of the mean.",
      "A random sample fluctuates around theoretical proportions. Seeding the generator makes a classroom run reproducible.",
    ],
    examples: [{
      title: "Sample manufactured lengths",
      code: `import numpy as np

rng = np.random.default_rng(12)
lengths = rng.normal(loc=50, scale=2, size=10000)
inside = (lengths >= 48) & (lengths <= 52)
print(round(float(inside.mean()), 2))`,
      result: "The fraction is near 0.68 because 48 and 52 are one standard deviation from 50.",
    }],
    quizzes: [{
      question: "With scale=4, which interval is one standard deviation from the mean on either side?",
      options: ["46 to 54","48 to 52","42 to 58"],
      answer: 0,
      explanation: "One standard deviation is now four length units.",
    }],
  },
  {
    title: "Scatter Plot",
    summary: "Inspect the relationship between a feature and a target before fitting a model.",
    content: [
      "Plot one point per observation with its feature on the horizontal axis and target on the vertical axis. Spread among points with the same x value reveals variation that a single feature cannot explain.",
    ],
    examples: [{
      title: "Inspect two study sessions of equal length",
      code: `import matplotlib.pyplot as plt

hours = [1, 2, 2, 3, 4]
scores = [53, 61, 75, 77, 86]
fig, ax = plt.subplots()
ax.scatter(hours, scores)
ax.set(xlabel="Study hours", ylabel="Score")
plt.show()`,
      result: "The pattern generally rises. The points at two hours differ by 14 score units.",
    }],
    quizzes: [{
      question: "What can this chart establish?",
      options: ["Additional study always causes a higher score","The observed hours and scores tend to rise together","All two-hour scores equal 68"],
      answer: 1,
      explanation: "The chart displays an association in these observed pairs.",
    }],
  },
  {
    title: "Linear Regression",
    summary: "Fit a straight line to estimate a numeric target.",
    content: [
      "Linear regression chooses an intercept and slope that minimize the sum of squared residuals on the training data. A residual is the actual outcome minus its prediction. scikit-learn expects a row of feature values for every observation.",
    ],
    examples: [{
      title: "Estimate the cost of a print order",
      code: `from sklearn.linear_model import LinearRegression

copies = [[1], [2], [3], [4]]
costs = [5, 8, 11, 14]
model = LinearRegression().fit(copies, costs)
print(round(model.coef_[0], 2), round(model.predict([[5]])[0], 2))`,
      result: "The slope is 3.0 credits per copy. Five copies give a predicted cost of 17.0 credits.",
    }],
    quizzes: [{
      question: "What does the intercept of 2 represent in this fitted line?",
      options: ["Cost per extra copy","The number of training rows","Predicted cost at zero copies"],
      answer: 2,
      explanation: "Setting the feature to zero removes the slope term, leaving the intercept.",
    }],
  },
  {
    title: "Polynomial Regression",
    summary: "Fit a curved relationship by adding powers of a feature.",
    content: [
      "PolynomialFeatures can add x squared as an additional input. A linear regression on x and x squared can therefore describe curvature. Larger degrees increase flexibility and can amplify small changes outside the training range.",
    ],
    examples: [{
      title: "Learn a square-area rule",
      code: `from sklearn.linear_model import LinearRegression
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures

side = [[1], [2], [3], [4]]
area = [1, 4, 9, 16]
model = make_pipeline(PolynomialFeatures(2, include_bias=False),
                      LinearRegression())
model.fit(side, area)
print(round(model.predict([[2.5]])[0], 2))`,
      result: "The fitted quadratic predicts an area of 6.25 for a side length of 2.5.",
    }],
    quizzes: [{
      question: "Which extra feature allows this curve?",
      options: ["The square of the side length","The sorted row number","The mean area"],
      answer: 0,
      explanation: "The coefficient on the squared term lets the slope change with side length.",
    }],
  },
  {
    title: "Multiple Regression",
    summary: "Estimate a numeric target using two independent inputs.",
    content: [
      "Multiple linear regression fits one coefficient per input feature and an intercept. Each coefficient describes the predicted change from increasing that feature by one unit while holding the other inputs fixed. Keep feature columns in the same order during prediction.",
    ],
    examples: [{
      title: "Fit a packing-time model",
      code: `from sklearn.linear_model import LinearRegression

# Each row contains boxes, then labels.
orders = [[1, 1], [1, 3], [2, 1], [2, 3]]
minutes = [9, 11, 12, 14]
model = LinearRegression().fit(orders, minutes)
print(model.coef_.round(2).tolist())
print(round(model.predict([[3, 2]])[0], 2))`,
      result: "The coefficients are 3.0 and 1.0. Three boxes and two labels take a predicted 16.0 minutes.",
    }],
    quizzes: [{
      question: "Under this model, adding one label to the same order changes the prediction by how much?",
      options: ["3 minutes","1 minute","5 minutes"],
      answer: 1,
      explanation: "Labels are the second feature, whose coefficient is one.",
    }],
  },
  {
    title: "Scale",
    summary: "Express features in units of their training-set standard deviation.",
    content: [
      "A feature recorded in large units can dominate a distance calculation. StandardScaler subtracts the training mean and divides by the training standard deviation for each column. Apply the fitted transformation to new rows so their coordinates use the same scale.",
    ],
    examples: [{
      title: "Compare two measured features",
      code: `from sklearn.preprocessing import StandardScaler

train = [[10, 1000], [20, 3000]]
scaler = StandardScaler().fit(train)
print(scaler.transform([[15, 2000], [20, 3000]]).tolist())`,
      result: "The midpoint maps to [0.0, 0.0] and the upper training point maps to [1.0, 1.0].",
    }],
    quizzes: [{
      question: "Why fit the scaler only on training rows?",
      options: ["To create more classes","To remove all outliers","To keep held-out measurements from influencing the transformation"],
      answer: 2,
      explanation: "Fitting on held-out data would leak its distribution into training.",
    }],
  },
  {
    title: "Train/Test",
    summary: "Reserve observations for a separate assessment of prediction error.",
    content: [
      "Split features and targets together so each row keeps its correct outcome. Fit the estimator on training rows, predict the held-out targets and compare them with the recorded answers. For chronological forecasts, respect the time order.",
    ],
    examples: [{
      title: "Hold out later batches",
      code: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split

size = [[1], [2], [3], [4], [5], [6]]
minutes = [4, 6, 8, 10, 13, 15]
x_train, x_test, y_train, y_test = train_test_split(
    size, minutes, test_size=2, shuffle=False)
model = LinearRegression().fit(x_train, y_train)
print(round(mean_absolute_error(y_test, model.predict(x_test)), 2))`,
      result: "Predictions of 12 and 14 each miss by one minute. The reported mean absolute error is 1.0.",
    }],
    quizzes: [{
      question: "Why keep the final two batches out of fit?",
      options: ["They serve as unseen examples for evaluation","Regression only accepts four samples","Their target values must be deleted permanently"],
      answer: 0,
      explanation: "Holding them aside lets you measure error on observations outside training.",
    }],
  },
  {
    title: "Decision Tree",
    summary: "Follow a learned threshold to a class prediction.",
    content: [
      "A classification tree splits feature ranges into regions. Each internal node tests a condition and each leaf supplies a prediction. Limiting depth controls how many sequential decisions a path may contain.",
    ],
    examples: [{
      title: "Learn one sorting rule",
      code: `from sklearn.tree import DecisionTreeClassifier, export_text

weights = [[1], [2], [6], [7]]
sizes = ["small", "small", "large", "large"]
tree = DecisionTreeClassifier(max_depth=1, random_state=0)
tree.fit(weights, sizes)
print(export_text(tree, feature_names=["weight"]))
print(tree.predict([[5]])[0])`,
      result: "The tree splits at weight 4. A parcel of weight 5 follows the upper branch and gets the label large.",
    }],
    quizzes: [{
      question: "How many feature tests can this depth-one tree make for one parcel?",
      options: ["Two","One","Four"],
      answer: 1,
      explanation: "There is one root split followed by a leaf on each branch.",
    }],
  },
  {
    title: "Confusion Matrix",
    summary: "Find which true classes are being confused with which predictions.",
    content: [
      "In scikit-learn a confusion matrix uses true labels for rows and predicted labels for columns. Setting labels fixes the ordering, even when a class is absent. Off-diagonal cells count the mistakes.",
    ],
    examples: [{
      title: "Count missed alarms and false alarms",
      code: `from sklearn.metrics import confusion_matrix

actual = [0, 0, 0, 1, 1, 1]
predicted = [0, 1, 0, 1, 0, 0]
matrix = confusion_matrix(actual, predicted, labels=[0, 1])
print(matrix.tolist())`,
      result: "The rows are [2, 1] and [2, 1]. Two actual alarms were predicted as zero.",
    }],
    quizzes: [{
      question: "Which cell counts false positives for class 1?",
      options: ["Row 1, column 0","Row 1, column 1","Row 0, column 1"],
      answer: 2,
      explanation: "A false positive has actual label 0 and predicted label 1.",
    }],
  },
  {
    title: "Hierarchical Clustering",
    summary: "Build groups by successively merging nearby clusters.",
    content: [
      "Agglomerative clustering begins with one cluster per observation. The linkage rule determines the distance or merge cost for groups. A two-cluster cut stops the grouping at two sets. Cluster numbers are arbitrary identifiers.",
    ],
    examples: [{
      title: "Group similar shelf heights",
      code: `from sklearn.cluster import AgglomerativeClustering

heights = [[10], [11], [30], [31]]
groups = AgglomerativeClustering(n_clusters=2).fit_predict(heights)
print(groups[0] == groups[1], groups[1] == groups[2])`,
      result: "The comparisons print True and False. The first two shelves belong together and the middle pair cross the gap.",
    }],
    quizzes: [{
      question: "Why compare equality of labels instead of checking that the first label equals 0?",
      options: ["Cluster numbers have no intrinsic meaning","Every row has the same cluster","The labels are always probabilities"],
      answer: 0,
      explanation: "Renaming the groups leaves the partition unchanged.",
    }],
  },
  {
    title: "Logistic Regression",
    summary: "Convert a linear score into a binary class probability.",
    content: [
      "Logistic regression models the probability of one of two classes using a logistic curve. predict_proba returns probabilities in classes_ order. You can choose a probability threshold to trade off missed positives and false alarms.",
    ],
    examples: [{
      title: "Read a probability column",
      code: `from sklearn.linear_model import LogisticRegression

hours = [[1], [2], [3], [7], [8], [9]]
completed = [0, 0, 0, 1, 1, 1]
model = LogisticRegression().fit(hours, completed)
column = list(model.classes_).index(1)
p = model.predict_proba([[8]])[0, column]
print(p > 0.5, model.predict([[8]])[0])`,
      result: "The probability of completion exceeds one half, and the predicted class is 1.",
    }],
    quizzes: [{
      question: "What usually happens when the positive threshold rises from 0.5 to 0.8?",
      options: ["Every probability increases","Fewer or the same number of samples are called positive","More samples must be positive"],
      answer: 1,
      explanation: "Only observations whose estimated probability reaches the higher cutoff qualify.",
    }],
  },
  {
    title: "Grid Search",
    summary: "Compare several settings with the same validation procedure.",
    content: [
      "A hyperparameter is chosen before fitting, such as the maximum depth of a tree. GridSearchCV fits each candidate configuration across training folds and selects by the chosen validation score. Keep a separate test set for assessing the selected model.",
    ],
    examples: [{
      title: "Compare tree depths",
      code: `from sklearn.datasets import load_iris
from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.tree import DecisionTreeClassifier

X, y = load_iris(return_X_y=True)
train, test, labels, held_out = train_test_split(
    X, y, stratify=y, random_state=7)
search = GridSearchCV(DecisionTreeClassifier(random_state=7),
                      {"max_depth": [1, 2, 3]}, cv=3)
search.fit(train, labels)
print(search.best_params_)
print(round(search.score(test, held_out), 2))`,
      result: "The first line reports the selected depth. The second reports accuracy on separate test flowers.",
    }],
    quizzes: [{
      question: "How many candidate-fold fits take place before the final refit?",
      options: ["3","6","9"],
      answer: 2,
      explanation: "Three candidate depths are each evaluated using three folds.",
    }],
  },
  {
    title: "Categorical Data",
    summary: "Represent unordered labels as indicator columns.",
    content: [
      "One-hot encoding allocates a column to each category observed during fitting. One active column indicates membership without assuming an order among colors or names. Decide how your pipeline will handle a category first seen after training.",
    ],
    examples: [{
      title: "Encode parcel colors",
      code: `from sklearn.preprocessing import OneHotEncoder

encoder = OneHotEncoder(handle_unknown="ignore", sparse_output=False)
encoder.fit([["blue"], ["red"], ["green"]])
print(encoder.categories_[0].tolist())
print(encoder.transform([["red"], ["amber"]]).tolist())`,
      result: "The columns are blue, green and red. Red gives [0.0, 0.0, 1.0] and the unseen amber gives all zeros.",
    }],
    quizzes: [{
      question: "Which setting allows amber to be transformed?",
      options: ["handle_unknown='ignore'","sparse_output=False","The color's spelling"],
      answer: 0,
      explanation: "The encoder represents unseen categories with zeros when instructed to ignore them.",
    }],
  },
  {
    title: "K-means",
    summary: "Partition numeric observations around a chosen number of centroids.",
    content: [
      "K-means alternates between assigning points to the nearest centroid and recomputing centroids as group means. It minimizes within-cluster squared distances locally. Initialization, feature scale and the chosen cluster count affect the result.",
    ],
    examples: [{
      title: "Separate short and long trips",
      code: `from sklearn.cluster import KMeans

trips = [[1], [2], [3], [10], [11], [12]]
model = KMeans(n_clusters=2, n_init=10, random_state=4).fit(trips)
print(sorted(model.cluster_centers_.ravel().round(1).tolist()))`,
      result: "The cluster centers are 2.0 and 11.0, the means of the two groups.",
    }],
    quizzes: [{
      question: "What does the centroid of the shorter trips represent?",
      options: ["Their maximum distance","Their mean distance","The number of trips"],
      answer: 1,
      explanation: "A k-means centroid is the coordinate-wise mean of its assigned observations.",
    }],
  },
  {
    title: "Bootstrap Aggregation",
    summary: "Combine models trained on resampled observations.",
    content: [
      "A bootstrap sample draws training rows with replacement, allowing some rows to repeat while others are left out. Bagging fits a separate estimator on each sample and aggregates predictions. Averaging can reduce the variability of an unstable estimator.",
    ],
    examples: [{
      title: "Average five small regression trees",
      code: `from sklearn.ensemble import BaggingRegressor
from sklearn.tree import DecisionTreeRegressor

sizes = [[1], [2], [3], [4], [5], [6]]
prices = [6, 8, 9, 15, 14, 17]
bag = BaggingRegressor(estimator=DecisionTreeRegressor(max_depth=2),
                       n_estimators=5, random_state=2)
bag.fit(sizes, prices)
votes = [tree.predict([[4]])[0] for tree in bag.estimators_]
print(round(sum(votes) / len(votes), 2))
print(round(bag.predict([[4]])[0], 2))`,
      result: "Both printed predictions match because regression bagging averages the five tree outputs.",
    }],
    quizzes: [{
      question: "Can one row appear twice in a tree's bootstrap sample?",
      options: ["Only for missing values","Only if there are five trees","Yes, draws are made with replacement"],
      answer: 2,
      explanation: "After each draw the same training row is still available.",
    }],
  },
  {
    title: "Cross Validation",
    summary: "Measure how a model performs across several held-out folds.",
    content: [
      "K-fold validation reserves one fold for scoring and uses the remaining folds for fitting, repeating until each fold has been held out once. A pipeline fits preprocessing inside each training fold so validation rows cannot influence its fitted parameters.",
    ],
    examples: [{
      title: "Score a scaled classifier",
      code: `from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

X, y = load_iris(return_X_y=True)
model = make_pipeline(StandardScaler(), KNeighborsClassifier(3))
scores = cross_val_score(model, X, y, cv=5, scoring="accuracy")
print(len(scores), round(scores.mean(), 2))`,
      result: "The first number is 5. The second summarizes the five held-out accuracy measurements.",
    }],
    quizzes: [{
      question: "Why put StandardScaler inside the pipeline?",
      options: ["Each fold calculates its own training statistics","It makes every test score identical","It selects the number of folds"],
      answer: 0,
      explanation: "The evaluation clones and fits the whole pipeline separately on each training split.",
    }],
  },
  {
    title: "AUC - ROC Curve",
    summary: "Evaluate how well scores rank positives above negatives.",
    content: [
      "Moving a binary decision threshold produces different true-positive and false-positive rates. Plotting those pairs gives a ROC curve. Its area measures ranking quality across thresholds. Supply continuous scores or positive-class probabilities to preserve their ordering.",
    ],
    examples: [{
      title: "Score four ranked cases",
      code: `from sklearn.metrics import roc_auc_score, roc_curve

actual = [0, 0, 1, 1]
scores = [0.1, 0.6, 0.4, 0.9]
fpr, tpr, thresholds = roc_curve(actual, scores)
print(roc_auc_score(actual, scores))
print(list(zip(fpr.tolist(), tpr.tolist())))`,
      result: "AUC is 0.75. The two positives outrank the two negatives in three of the four possible positive-negative pairs.",
    }],
    quizzes: [{
      question: "Why is AUC below 1 here?",
      options: ["There are too few thresholds","The positive scored 0.4 ranks below the negative scored 0.6","Both positives rank first"],
      answer: 1,
      explanation: "That reversed positive-negative pair prevents perfect separation.",
    }],
  },
  {
    title: "K-nearest neighbors",
    summary: "Predict a label by voting among nearby training observations.",
    content: [
      "A nearest-neighbors classifier keeps the labeled examples. For a new measurement, it finds the k closest examples using a distance metric and combines their labels. Scale features with different units before comparing distances.",
    ],
    examples: [{
      title: "Classify a six-centimeter leaf",
      code: `from sklearn.neighbors import KNeighborsClassifier

lengths = [[2], [4], [5], [8], [9]]
labels = ["short", "short", "short", "long", "long"]
model = KNeighborsClassifier(n_neighbors=3).fit(lengths, labels)
print(model.predict([[6]])[0])`,
      result: "The three closest lengths are 5, 4 and 8. Two of the three vote short.",
    }],
    quizzes: [{
      question: "If k changes to 1, which training length determines this prediction?",
      options: ["4","8","5"],
      answer: 2,
      explanation: "Five is just one centimeter from the new measurement; all other lengths are farther away.",
    }],
  },
]);

