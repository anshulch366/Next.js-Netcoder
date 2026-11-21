import { chapter } from "../../resource-chapter";

export const drawing = chapter("HTML Graphics", [
  {
    id: "study-drawing-html-canvas",
    title: "HTML Canvas",
    level: "Intermediate",
    summary: "Draw a rectangle on a bitmap and relate its dimensions to data.",
    content: [
      "Canvas coordinates start at the upper-left corner. Increasing x moves right and increasing y moves down. A painted bar is a group of pixels, so a chart also needs a readable account of its values.",
      "Set the drawing dimensions on the canvas, obtain its 2D context and set fillStyle before calling fillRect. Double the width argument and observe which edge stays fixed.",
    ],
    reading: { title: "W3Schools · HTML Canvas", url: "https://www.w3schools.com/html/html5_canvas.asp" },
    examples: [{
      title: "Draw an attendance bar",
      code: "<canvas id=\"bar\" width=\"160\" height=\"50\">Attendance 80 students</canvas>\n<p>Attendance: 80 students</p>\n<script>\n  const pen = document.querySelector(\"#bar\").getContext(\"2d\");\n  pen.fillStyle = \"teal\";\n  pen.fillRect(10, 10, 80, 24);\n</script>",
      result: "The teal bar starts 10 units from the top and left. It is 80 units wide and 24 units high. The paragraph gives readers the attendance figure.",
    }],
    quizzes: [
      { question: "What is the third argument to fillRect?", options: ["Final x coordinate", "Width", "Height"], answer: 1, explanation: "The arguments are x, y, width and height." },
      { question: "Which way does the bar move if its y coordinate increases?", options: ["Up", "Left", "Down"], answer: 2, explanation: "The default vertical axis increases downward." },
      { question: "Why provide the attendance in text?", options: ["To make the value available without the drawing", "To rotate the canvas", "To double its width"], answer: 0, explanation: "A painted rectangle does not expose the data value as text." },
    ],
  },
  {
    id: "study-drawing-html-svg",
    title: "HTML SVG",
    level: "Intermediate",
    summary: "Describe scalable graphics with named shapes and coordinates.",
    content: [
      "SVG records geometry that the browser can draw at different sizes. An inline circle is an element with editable attributes. The viewBox defines the coordinate system used for its centre and radius.",
      "Place the circle at the centre of the 100-unit square. Increase the displayed width and observe how it scales. Associate the title with the graphic so it has an accessible name.",
    ],
    reading: { title: "W3Schools · HTML SVG", url: "https://www.w3schools.com/html/html5_svg.asp" },
    examples: [{
      title: "A station marker",
      code: "<svg viewBox=\"0 0 100 100\" width=\"100\" role=\"img\" aria-labelledby=\"station-title\">\n  <title id=\"station-title\">Station marker</title>\n  <circle cx=\"50\" cy=\"50\" r=\"30\" fill=\"teal\"/>\n</svg>",
      result: "A teal circle with a diameter of 60 units appears in the centre of the square. The graphic is named Station marker.",
    }],
    quizzes: [
      { question: "What is the circle's radius?", options: ["50", "60", "30"], answer: 2, explanation: "The r attribute is the distance from the centre to the edge." },
      { question: "What defines the internal coordinate system?", options: ["viewBox", "title", "role"], answer: 0, explanation: "The viewBox specifies the user-space rectangle." },
      { question: "Which coordinate moves the centre to the right?", options: ["cy", "cx", "r"], answer: 1, explanation: "The cx attribute sets the horizontal centre." },
    ],
  },
]);
