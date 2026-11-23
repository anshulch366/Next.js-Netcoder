import { javaChapter, javaProgram } from "./chapter";

export const problemSolving = javaChapter("Java Problem Solving", "Beginner", [
  {
    title: "Java Problem Solving",
    summary: "Turn a packing question into inputs, a rule and an observable answer.",
    content: [
      "A print shop packs at most five programs in each envelope. Define the input as a nonnegative number of programs and the output as the smallest number of envelopes that will hold them. Start with easy cases on paper. Zero needs zero, five needs one, and six needs two.",
      "Integer division counts full envelopes. The remainder tells you whether to add a final partial envelope. Putting the rule in a method lets you try different cases without changing the calculation.",
    ],
    examples: [{
      title: "Count envelopes for a print run",
      code: javaProgram(`for (int quantity : new int[] {0, 5, 6, 18}) {
    System.out.println(quantity + " -> " + envelopes(quantity));
}`, [], `static int envelopes(int quantity) {
    int full = quantity / 5;
    return full + (quantity % 5 == 0 ? 0 : 1);
}`),
      result: "The output pairs are 0 -> 0, 5 -> 1, 6 -> 2 and 18 -> 4.",
    }],
    quizzes: [{
      question: "Which rule avoids adding an empty envelope for 10 programs?",
      options: ["Always add one to quantity / 5", "Add one only if quantity % 5 is nonzero", "Use quantity % 5 as the envelope count"],
      answer: 1,
      explanation: "A nonzero remainder means there are programs left after filling the complete envelopes.",
    }],
  },
  {
    title: "Java Build the Logic",
    summary: "Track the first item that reaches the largest value seen so far.",
    content: [
      "A duty manager wants the index of the busiest door. Write down what should be true after each step. The saved index always refers to the first maximum among the counts examined so far. Assume the input has at least one count.",
      "Start with index zero as the current best. Scan from the second count, replacing the saved index only for a strictly larger value. That choice determines which door wins when two counts tie.",
    ],
    examples: [{
      title: "Find the first busiest door",
      code: javaProgram(`int[] counts = {4, 9, 7, 9};
int best = 0;
for (int i = 1; i < counts.length; i++) {
    if (counts[i] > counts[best]) {
        best = i;
    }
}
System.out.println("Door " + (best + 1));`),
      result: "Door 2. Its count of 9 remains the first maximum even when the fourth door ties it.",
    }],
    quizzes: [{
      question: "What result would >= produce for the same data?",
      options: ["Door 1", "Door 2", "Door 4"],
      answer: 2,
      explanation: "The equal fourth count would replace the previous best.",
    }],
  },
  {
    title: "Java Test Cases",
    summary: "Test the inputs on either side of a decision boundary.",
    content: [
      "A group rate begins at eight tickets. Choose expected prices for seven, eight and nine before running the implementation. The exact threshold distinguishes a correct >= check from an accidental > check.",
      "A small test helper can throw AssertionError when a result differs from the expected value. Each failure reports the input and both prices. Change >= to > and rerun to see which test detects the mistake.",
    ],
    examples: [{
      title: "Test a ticket-price threshold",
      code: javaProgram(`checkRate(7, 10);
checkRate(8, 7);
checkRate(9, 7);
System.out.println("3 rate checks passed");`, [], `static int rate(int quantity) {
    return quantity >= 8 ? 7 : 10;
}

static void checkRate(int quantity, int expected) {
    int actual = rate(quantity);
    if (actual != expected) {
        throw new AssertionError(quantity + " tickets: expected " + expected + ", got " + actual);
    }
}`),
      result: "All three checks pass. With a strict > comparison the quantity 8 check throws an AssertionError.",
    }],
    quizzes: [{
      question: "Which one of these inputs distinguishes >= 8 from > 8?",
      options: ["8", "9", "7"],
      answer: 0,
      explanation: "Both comparisons agree above and below eight. They differ at eight itself.",
    }],
  },
]);

export const projects = javaChapter("Java Projects", "Intermediate", [
  {
    title: "Java Projects",
    summary: "Build a box-office report from a small sequence of bookings.",
    content: [
      "Start with ten seats and a list of requested group sizes. Accept positive requests that fit, reject the others, and report seats sold, seats left and rejected groups. A rejection must leave enough seats for a later smaller request.",
      "Split the acceptance rule into a method and keep the report in main. Trace the supplied requests by hand, then test an exact sellout and an empty request list. In both cases seats sold plus seats left should equal the original capacity.",
    ],
    examples: [{
      title: "Build and test a booking report",
      code: javaProgram(`int capacity = 10;
int remaining = capacity;
int rejected = 0;
for (int request : new int[] {4, 8, 3, 0, 2}) {
    if (fits(request, remaining)) {
        remaining -= request;
    } else {
        rejected++;
    }
}
System.out.println("Sold: " + (capacity - remaining));
System.out.println("Left: " + remaining);
System.out.println("Rejected groups: " + rejected);`, [], `static boolean fits(int request, int remaining) {
    return request > 0 && request <= remaining;
}`),
      result: "The report shows 9 sold, 1 left and 2 rejected groups. The 8-seat request exceeded the six seats left, and zero was invalid.",
    }],
    quizzes: [{
      question: "Which extra request would fill the last seat without a rejection?",
      options: ["2", "0", "1"],
      answer: 2,
      explanation: "The helper accepts any positive request up to and including the remaining capacity.",
    }],
  },
]);
