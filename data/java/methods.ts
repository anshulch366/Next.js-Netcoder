import { javaChapter, javaProgram } from "./chapter";

export const methods = javaChapter("Java Methods", "Beginner", [
  {
    title: "Java Methods",
    summary: "Name a calculation once and call it wherever its result is needed.",
    content: [
      "A method declaration describes a result type, a name and a parameter list. When the caller invokes a method, execution enters its body. A return expression sends a value of the declared type back to the call site.",
      "Here a static method belongs to Main, so main can call it directly. Keeping the calculation separate from printing makes it possible to add the results of two calls before showing the total.",
    ],
    examples: [{
      title: "Calculate shelf space for two bookcases",
      code: javaProgram(`int left = shelfSpace(3, 40);
int right = shelfSpace(2, 60);
System.out.println(left + right);`, [], `static int shelfSpace(int shelves, int width) {
    return shelves * width;
}`),
      result: "240. The two calls each return 120 units of shelf space.",
    }],
    quizzes: [{
      question: "Which change lets another method reuse the computed value?",
      options: ["Printing the product and returning void", "Returning the product as an int", "Declaring the product inside main only"],
      answer: 1,
      explanation: "With an int return value, callers can assign, combine or display the result.",
    }],
  },
  {
    title: "Java Method Challenge",
    summary: "Implement a method that rounds a load up to whole trays.",
    content: [
      "Write traysNeeded(int items) for nonnegative whole-item counts. Each tray holds six items. Zero items should need zero trays, six should need one and seven should need two. Try each boundary before reading the worked solution.",
      "Integer division counts the full trays and the remainder identifies leftover items. Add a tray only when that remainder is positive. This also handles an empty order without a special case.",
    ],
    examples: [{
      title: "Test empty, full and partial trays",
      code: javaProgram(`for (int items : new int[]{0, 6, 7, 18}) {
    System.out.println(items + " items -> " + traysNeeded(items));
}`, [], `static int traysNeeded(int items) {
    int full = items / 6;
    int extra = items % 6 == 0 ? 0 : 1;
    return full + extra;
}`),
      result: "The four lines report 0, 1, 2 and 3 trays for 0, 6, 7 and 18 items respectively.",
    }],
    quizzes: [{
      question: "Which input exposes the bug in a solution that always returns items / 6 + 1?",
      options: ["7", "11", "12"],
      answer: 2,
      explanation: "Twelve fills exactly two trays, so always adding one overcounts.",
    }],
  },
  {
    title: "Java Method Parameters",
    summary: "Trace a copied primitive value and a copied object reference.",
    content: [
      "Each argument value is copied into its corresponding parameter. Assigning a different integer to a primitive parameter only changes the method's local copy.",
      "An array argument copies the reference to the array. A method can use that reference to change an element in the caller's array. Reassigning the local parameter to a different array would affect only that parameter.",
    ],
    examples: [{
      title: "Compare changing a count with changing an array element",
      code: javaProgram(`int tickets = 4;
int[] daily = {4};
record(tickets, daily);
System.out.println(tickets + " " + daily[0]);`, [], `static void record(int count, int[] entries) {
    count++;
    entries[0]++;
}`),
      result: "The output is 4 5. The local integer increment ends with the call, while the array element retains the update.",
    }],
    quizzes: [{
      question: "What would assigning entries = new int[]{9} do inside record?",
      options: ["Point the local parameter at another array", "Replace the caller's daily variable", "Change daily[0] to 9"],
      answer: 0,
      explanation: "The parameter holds its own copy of the reference.",
    }],
  },
  {
    title: "Java Method Overloading",
    summary: "Choose between methods with the same name through their parameter lists.",
    content: [
      "Overloaded methods share a name and differ in their parameter types, order or count. The compiler selects an applicable overload from the arguments at the call site. A change in return type alone cannot distinguish two overloads.",
      "A shorter overload can call the longer one to supply a default. This keeps the display format in one implementation even when callers use different forms.",
    ],
    examples: [{
      title: "Make a label with an optional count",
      code: javaProgram(`System.out.println(label("Brush"));
System.out.println(label("Pen", 3));`, [], `static String label(String item) {
    return label(item, 1);
}

static String label(String item, int count) {
    return item + " x " + count;
}`),
      result: "Brush x 1 and Pen x 3 appear on separate lines.",
    }],
    quizzes: [{
      question: "Which overload is chosen by label(\"Map\", 2)?",
      options: ["label(String)", "label(String, int)", "Either, depending on the return value"],
      answer: 1,
      explanation: "The call supplies one string and one integer, matching the second parameter list.",
    }],
  },
  {
    title: "Java Scope",
    summary: "Identify which variable a name refers to inside a block.",
    content: [
      "A local variable is visible from its declaration through the rest of its enclosing block. A loop counter declared in a for header is available inside that loop. A later statement outside the loop cannot refer to it.",
      "A local variable can shadow a field of the same name. Qualifying a static field with its class name makes the intended field explicit.",
    ],
    examples: [{
      title: "Track a local subtotal and a shared limit",
      code: javaProgram(`int limit = 2;
int total = 0;
for (int n = 1; n <= limit; n++) {
    total += n;
}
System.out.println(total + " / " + Main.limit);`, [], `static final int limit = 10;`),
      result: "3 / 10. The loop reads the local limit of 2 and the output reads the class field explicitly.",
    }],
    quizzes: [{
      question: "Which name is unavailable immediately after the loop?",
      options: ["total", "limit", "n"],
      answer: 2,
      explanation: "The loop header defines n within the scope of the for statement.",
    }],
  },
  {
    title: "Java Recursion",
    summary: "Solve a smaller version of a problem and stop at a base case.",
    content: [
      "A recursive method calls itself. Give it a base case that can answer immediately and a recursive step that moves closer to that case. Each active invocation remembers where to resume after the inner call returns.",
      "To add the digits of a nonnegative integer, integer division by ten removes its last digit. The remainder is that digit. Add it to the recursive result for the shortened number.",
    ],
    examples: [{
      title: "Trace a digit sum",
      code: javaProgram(`System.out.println(digitSum(407));`, [], `static int digitSum(int number) {
    if (number < 10) {
        return number;
    }
    return number % 10 + digitSum(number / 10);
}`),
      result: "The calls receive 407, 40 and 4. Returning outward gives 4, then 4, then 11.",
    }],
    quizzes: [{
      question: "Which input reaches the base case immediately?",
      options: ["40", "7", "11"],
      answer: 1,
      explanation: "A single digit already equals its own digit sum.",
    }],
  },
]);
