import { pythonChapter } from "./chapter";

export const matplotlib = pythonChapter("Python Matplotlib", "Intermediate", [
  {
    title: "Matplotlib Intro",
    summary: "Turn three measurements into a figure and identify its plotting area.",
    content: [
      "Matplotlib draws data inside an Axes. A Figure holds one or more Axes along with titles and other elements. Install the package with python -m pip install matplotlib before running these examples.",
      "Here the positions represent elapsed minutes. Connecting the readings shows how the measurement changed in time order.",
    ],
    examples: [{
      title: "Draw a temperature trace",
      code: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([0, 5, 10], [18, 21, 20])
ax.set(xlabel="Minutes", ylabel="Temperature (°C)")
plt.show()`,
      result: "The line climbs from 18 to 21 degrees and then falls to 20.",
    }],
    quizzes: [{
      question: "Where does ax.plot draw this line?",
      options: ["Inside the Axes named ax","In a new Figure for each point","On a separate x-axis object"],
      answer: 0,
      explanation: "The Axes owns the coordinate system and the plotted line.",
    }],
  },
  {
    title: "Matplotlib Get Started",
    summary: "Check that your Python interpreter can render a chart to disk.",
    content: [
      "Install Matplotlib in the environment that runs your script. Using python -m pip install matplotlib directs pip to that interpreter.",
      "A saved PNG also works on a machine without a display. The Agg backend renders to an image, and savefig writes that image to the current working directory.",
    ],
    examples: [{
      title: "Save a first chart",
      code: `import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.bar(["North", "South"], [6, 9])
fig.savefig("visitors.png", dpi=120)
plt.close(fig)`,
      result: "Open visitors.png to see two bars. South reaches 9 and North reaches 6.",
    }],
    quizzes: [{
      question: "Which line creates the PNG file?",
      options: ["plt.close(fig)","fig.savefig(...)","plt.subplots()"],
      answer: 1,
      explanation: "savefig renders the figure into the specified file.",
    }],
  },
  {
    title: "Matplotlib Pyplot",
    summary: "Keep references to a figure and its axes when using pyplot.",
    content: [
      "Pyplot manages figures and provides functions such as subplots and show. Keeping the returned Axes lets you say exactly which chart a command belongs to.",
      "Multiple calls on the same Axes can layer different marks. Here a horizontal target crosses a series of daily counts.",
    ],
    examples: [{
      title: "Compare counts with a target",
      code: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [7, 11, 9], label="Orders")
ax.axhline(10, color="gray", label="Target")
ax.legend()
plt.show()`,
      result: "Two legend entries identify the series and the target. Only the second count exceeds 10.",
    }],
    quizzes: [{
      question: "How can another series be added to this same panel?",
      options: ["Call plt.close()","Create a new Figure","Call ax.plot again"],
      answer: 2,
      explanation: "Each call adds an artist to the Axes on which you call the method.",
    }],
  },
  {
    title: "Matplotlib Plotting",
    summary: "Pair horizontal and vertical values and inspect the order of a line.",
    content: [
      "Each x value pairs with the y value at the same position. A line joins those pairs in the input order, so sort time-series observations by time when constructing a chronological chart.",
    ],
    examples: [{
      title: "Plot distance over time",
      code: `import matplotlib.pyplot as plt

minutes = [0, 2, 5, 9]
meters = [0, 140, 350, 480]
fig, ax = plt.subplots()
ax.plot(minutes, meters)
ax.set(xlabel="Minutes", ylabel="Distance (m)")
plt.show()`,
      result: "The last segment spans four minutes and rises by 130 meters.",
    }],
    quizzes: [{
      question: "Which point is plotted at minute 5?",
      options: ["(5, 140)","(5, 350)","(5, 480)"],
      answer: 1,
      explanation: "The third x value pairs with the third y value.",
    }],
  },
  {
    title: "Matplotlib Markers",
    summary: "Mark the exact location of each observation.",
    content: [
      "A line suggests the path between observations. Adding markers reveals which positions were actually measured. You can suppress the connecting line when intermediate values would be misleading.",
    ],
    examples: [{
      title: "Mark individual readings",
      code: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 4, 8], [2, 7, 5], marker="s",
        markersize=9, linestyle="none")
ax.set(xlabel="Sample hour", ylabel="Reading")
plt.show()`,
      result: "Three unconnected square markers appear at the measured coordinates.",
    }],
    quizzes: [{
      question: "What changes if linestyle is set to '-'?",
      options: ["The squares become circles","The coordinates are reordered","A solid line joins the squares"],
      answer: 2,
      explanation: "The marker controls the symbols and linestyle controls the path between them.",
    }],
  },
  {
    title: "Matplotlib Line",
    summary: "Distinguish series with line width and dash patterns.",
    content: [
      "Use linewidth to control the stroke weight and linestyle to control the pattern. Dashed and solid lines remain distinguishable when a chart is printed in grayscale.",
    ],
    examples: [{
      title: "Compare planned and actual progress",
      code: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
days = [1, 2, 3]
ax.plot(days, [2, 4, 6], linestyle="--", label="Planned")
ax.plot(days, [2, 3, 7], linewidth=3, label="Actual")
ax.legend()
plt.show()`,
      result: "The dashed plan ends at 6. The heavier solid line ends at 7.",
    }],
    quizzes: [{
      question: "Which argument produces the dashed plan?",
      options: ["linewidth=3","linestyle='--'","label='Planned'"],
      answer: 1,
      explanation: "The double hyphen is Matplotlib's dashed line style.",
    }],
  },
  {
    title: "Matplotlib Labels",
    summary: "Explain what each axis measures and include its units.",
    content: [
      "Axis labels apply to the full scale. A legend identifies individual series. Put shared units in an axis label so readers can interpret each point without consulting a separate note.",
    ],
    examples: [{
      title: "Label a pump test",
      code: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([0, 1, 2], [0, 8, 15])
ax.set_title("Pump test")
ax.set_xlabel("Elapsed time (min)")
ax.set_ylabel("Water delivered (L)")
plt.show()`,
      result: "The graph labels the last point as 15 liters after two minutes.",
    }],
    quizzes: [{
      question: "Where should the volume unit appear?",
      options: ["In the y-axis label","Only in the filename","In the x-axis label"],
      answer: 0,
      explanation: "The vertical coordinate measures the delivered volume.",
    }],
  },
  {
    title: "Matplotlib Grid",
    summary: "Add guides aligned with the ticks you want readers to compare.",
    content: [
      "Grid lines extend tick positions across the plot. Horizontal guides help compare heights. A light stroke keeps the data visually prominent.",
    ],
    examples: [{
      title: "Show volume guides",
      code: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.bar(["Mon", "Tue", "Wed"], [4, 6, 5])
ax.set_yticks([0, 2, 4, 6])
ax.set_axisbelow(True)
ax.grid(axis="y", alpha=0.35)
plt.show()`,
      result: "Horizontal guides align with 0, 2, 4 and 6 behind the bars.",
    }],
    quizzes: [{
      question: "Why does axis='y' produce horizontal guides?",
      options: ["Bar charts always suppress vertical guides","Each line marks a constant y value","The figure rotates the axes"],
      answer: 1,
      explanation: "Moving horizontally along one of these lines keeps the y-coordinate fixed.",
    }],
  },
  {
    title: "Matplotlib Subplot",
    summary: "Arrange related views in one figure and share an axis.",
    content: [
      "subplots accepts a row count and a column count. For one row with two columns it returns two Axes, which you can unpack and address separately. Shared y limits make their heights directly comparable.",
    ],
    examples: [{
      title: "Compare two stations",
      code: `import matplotlib.pyplot as plt

fig, (west, east) = plt.subplots(1, 2, sharey=True)
west.bar(["AM", "PM"], [4, 7])
east.bar(["AM", "PM"], [6, 5])
west.set_title("West")
east.set_title("East")
west.set_ylabel("Trips")
plt.show()`,
      result: "Two side-by-side panels use the same vertical scale. West has the highest afternoon count.",
    }],
    quizzes: [{
      question: "What does sharey=True synchronize?",
      options: ["The panel titles","The number of bars","The vertical scale"],
      answer: 2,
      explanation: "The Axes share their y-axis limits so equal heights represent equal counts.",
    }],
  },
  {
    title: "Matplotlib Scatter",
    summary: "Show paired observations without imposing a sequence.",
    content: [
      "A scatter plot positions each observation by two measured quantities. Inspect the point cloud for clusters, unusual points, and direction. A visible association alone cannot establish causation.",
    ],
    examples: [{
      title: "Compare parcel weight and cost",
      code: `import matplotlib.pyplot as plt

kg = [1, 2, 2, 3, 4]
cost = [4, 6, 9, 9, 12]
fig, ax = plt.subplots()
ax.scatter(kg, cost)
ax.set(xlabel="Parcel weight (kg)", ylabel="Postage (credits)")
plt.show()`,
      result: "Two parcels at 2 kg have different postage values, 6 and 9.",
    }],
    quizzes: [{
      question: "What creates the vertical pair of points at x=2?",
      options: ["Two parcels with the same weight","Two fitted lines","One parcel with two weights"],
      answer: 0,
      explanation: "Each parcel contributes one point and those two weights coincide.",
    }],
  },
  {
    title: "Matplotlib Bars",
    summary: "Compare totals across named categories from a common baseline.",
    content: [
      "Bar heights encode each category's value. Use a common zero baseline for comparing magnitudes. Pass category names and counts in matching positions.",
    ],
    examples: [{
      title: "Compare library checkouts",
      code: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
bars = ax.bar(["Fiction", "History", "Science"], [12, 7, 9])
ax.bar_label(bars, padding=2)
ax.set_ylim(0, 15)
ax.set_ylabel("Checkouts")
plt.show()`,
      result: "Labels above the bars read 12, 7 and 9. Fiction has five more checkouts than History.",
    }],
    quizzes: [{
      question: "Which call places values above the bars?",
      options: ["ax.set_ylim(...)","ax.bar_label(...)","ax.set_ylabel(...)"],
      answer: 1,
      explanation: "bar_label adds text to the bars in the container returned by bar.",
    }],
  },
  {
    title: "Matplotlib Histograms",
    summary: "Count measurements in adjacent numeric intervals.",
    content: [
      "A histogram partitions one numeric variable into bins, then counts the observations in each bin. With explicit bin edges each interior boundary belongs to the bin on its right. The final bin includes its right edge.",
    ],
    examples: [{
      title: "Bin pickup delays",
      code: `import matplotlib.pyplot as plt

delays = [1, 2, 4, 5, 7, 9, 10]
fig, ax = plt.subplots()
counts, edges, bars = ax.hist(delays, bins=[0, 5, 10], edgecolor="black")
print(counts.tolist())
ax.set(xlabel="Delay (min)", ylabel="Pickups")
plt.show()`,
      result: "The console prints [3.0, 4.0]. The second bar includes both 5 and 10.",
    }],
    quizzes: [{
      question: "Where does a delay of exactly 5 go?",
      options: ["Both bars","The first bar","The second bar"],
      answer: 2,
      explanation: "The first interval is [0, 5) and the final interval is [5, 10].",
    }],
  },
  {
    title: "Matplotlib Pie Charts",
    summary: "Represent nonnegative category counts as shares of one total.",
    content: [
      "Each slice angle reflects its count divided by the sum of the counts. Use categories that partition the same whole. Overlapping categories would double-count some observations.",
    ],
    examples: [{
      title: "Divide a ten-hour budget",
      code: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.pie([5, 3, 2], labels=["Build", "Test", "Review"],
       autopct="%1.0f%%")
ax.set_title("Team hours")
plt.show()`,
      result: "The labels show Build at 50%, Test at 30% and Review at 20%.",
    }],
    quizzes: [{
      question: "If Review increases to 4 hours, what is its new share?",
      options: ["One third","40%","One quarter"],
      answer: 0,
      explanation: "The new total is 12 hours, and 4 divided by 12 is one third.",
    }],
  },
]);

