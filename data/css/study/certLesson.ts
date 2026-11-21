import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const certLesson = chapter("CSS Cert", [
  {
    id: "css-cert-certificate", title: "CSS Certificate", level: "Intermediate",
    summary: "Certificate exam ki taiyari ke liye cascade aur layout ka result pehle khud predict karo.",
    content: [
      "Ek topic yaad karna aur unseen code ka output bata paana alag skills hain. Har galat prediction ke saamne actual winning rule likho. Exam ke registration aur current details provider ke certificate page par milte hain.",
      "Mock task mein pehle card ki outer width aur final color batao, phir DevTools mein dono verify karo. Agle din numbers badalkar bina notes calculation repeat karo.",
    ],
    reading: { title: "W3Schools CSS Certificate", url: "https://www.w3schools.com/css/css_exam.asp" },
    examples: [{
      title: "CSS Certificate · Practice",
      code: cssDemo("<p class=\"pass\">Mock test</p>")("p { width: 160px; padding: 8px; box-sizing: border-box; color: navy; }\n.pass { color: teal; }"),
      result: "Outer width 160px, content width 144px aur text teal hoga. Ek task se box sizing aur specificity dono practice hote hain.",
    }],
    quizzes: [
      { question: "Winning color?", options: ["Navy", "Teal", "Inherited black"], answer: 1, explanation: "Class selector type selector se zyada specific hai." },
      { question: "Content width?", options: ["176px", "160px", "144px"], answer: 2, explanation: "160 mein se dono taraf ki 8px padding ghatao." },
      { question: "Concept samajhne ka achha retest?", options: ["Naye numbers par prediction", "Wahi answer ratna", "Sirf score dekhna"], answer: 0, explanation: "Transfer task rule ko dobara apply karwata hai." },
    ],
  },
]);
