import { chapter } from "../../resource-chapter";

export const drawing = chapter("HTML Graphics", [
  {
    id: "study-drawing-html-canvas",
    title: "HTML Canvas",
    level: "Intermediate",
    summary: "JavaScript se bitmap par shapes draw karo aur coordinates ko pixels se jodo.",
    content: [
      "Canvas ek drawing surface hai. Origin top-left par hota hai, x right aur y neeche badhta hai. Drawn rectangle ek alag HTML element nahi banta. Chart banate waqt values ko text mein bhi dena zaroori hai.",
      "Canvas ki drawing dimensions attributes se set karo, phir 2D context lo. fillStyle pehle set karo aur fillRect ko x, y, width aur height do. Width ko double karke dekho ki origin apni jagah rehta hai.",
    ],
    reading: { title: "W3Schools · HTML Canvas", url: "https://www.w3schools.com/html/html5_canvas.asp" },
    examples: [{
      title: "Attendance ki bar",
      code: "<canvas id=\"bar\" width=\"160\" height=\"50\">Attendance 80 students</canvas>\n<p>Attendance: 80 students</p>\n<script>\n  const pen = document.querySelector(\"#bar\").getContext(\"2d\");\n  pen.fillStyle = \"teal\";\n  pen.fillRect(10, 10, 80, 24);\n</script>",
      result: "Rectangle top-left se 10 pixels right aur 10 neeche shuru hoga. Bar ki width 80 aur height 24 drawing units hogi.",
    }],
    quizzes: [
      { question: "fillRect ka teesra argument kya hai?", options: ["Ending x coordinate", "Width", "Height"], answer: 1, explanation: "fillRect position ke baad size leta hai." },
      { question: "y badhaane par shape kidhar jaayegi?", options: ["Upar", "Left", "Neeche"], answer: 2, explanation: "Default canvas coordinates mein y neeche badhta hai." },
      { question: "Chart ke neeche attendance text kyun hai?", options: ["Value bina drawing dekhe bhi mile", "Canvas rotate ho", "Width double ho"], answer: 0, explanation: "Pixel drawing mein value ka text semantic roop se available nahi hota." },
    ],
  },
  {
    id: "study-drawing-html-svg",
    title: "HTML SVG",
    level: "Intermediate",
    summary: "Vector shapes ko markup mein describe karke scalable diagram banao.",
    content: [
      "SVG shape ka geometry rakhta hai. Browser har display size par us geometry ko draw kar sakta hai. Inline SVG ka circle apna element hai, isliye uske attributes ya CSS se ek shape ko alag update kar sakte ho.",
      "viewBox mein internal coordinate system do. Circle ka centre cx aur cy aur radius r se set karo. Rendered width badhaakar dekho ki shape scale hoti hai aur proportions stable rehte hain.",
    ],
    reading: { title: "W3Schools · HTML SVG", url: "https://www.w3schools.com/html/html5_svg.asp" },
    examples: [{
      title: "Station marker",
      code: "<svg viewBox=\"0 0 100 100\" width=\"100\" role=\"img\" aria-labelledby=\"station-title\">\n  <title id=\"station-title\">Station marker</title>\n  <circle cx=\"50\" cy=\"50\" r=\"30\" fill=\"teal\"/>\n</svg>",
      result: "100-unit square ke beech mein 60-unit diameter ka teal circle dikhega. Title graphic ko accessible naam deta hai.",
    }],
    quizzes: [
      { question: "Circle ki radius kya hai?", options: ["50", "60", "30"], answer: 2, explanation: "r centre se edge ka distance hai." },
      { question: "Internal coordinate system kis se milta hai?", options: ["viewBox", "title", "role"], answer: 0, explanation: "viewBox user-space rectangle define karta hai." },
      { question: "Circle ko right le jaane ke liye kya badhao?", options: ["cy", "cx", "r"], answer: 1, explanation: "cx horizontal centre set karta hai." },
    ],
  },
]);
