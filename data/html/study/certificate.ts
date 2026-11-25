import { chapter } from "../../resource-chapter";

export const certificate = chapter("HTML Cert", [
  {
    id: "study-certificate-html-certificate",
    title: "HTML Certificate",
    level: "Beginner",
    summary: "Certificate ki taiyari mein apni markup decisions ko chhote practical sawaalon se check karo.",
    content: [
      "Certification ki taiyari tab meaningful hai jab tum unfamiliar snippet padhkar browser ka behaviour predict kar sako. Structure, forms, accessibility aur media ke objectives ko roz ek chhote task se test karo.",
      "Mock task mein bina notes dekhe email field ko label aur submit key do. Pehle result predict karo, phir keyboard aur dummy value se test karo. Galat prediction ke saamne reason likho aur agle revision mein wahi concept dobara try karo.",
    ],
    reading: { title: "W3Schools · HTML Certificate", url: "https://www.w3schools.com/html/html_exam.asp" },
    examples: [{
      title: "Mock task ka worked answer",
      code: "<form method=\"get\">\n  <label for=\"contact\">Email</label>\n  <input id=\"contact\" type=\"email\" name=\"reply\" required>\n  <button>Check</button>\n</form>",
      result: "Label par click input ko focus karega. Valid dummy email submit karne par reply parameter banega. Is ek task se association, validation aur submission teenon check hote hain.",
    }],
    quizzes: [
      { question: "Label theek hai par submitted key missing hai. Kya check karoge?", options: ["Label ka color", "Form ki class", "Input ka name"], answer: 2, explanation: "Named field hi key-value pair deta hai." },
      { question: "Mock mein empty email ka expected behaviour kya hai?", options: ["Submission rukna", "reply hamesha save hona", "Email khud ban jaana"], answer: 0, explanation: "required empty input ko invalid rakhta hai." },
      { question: "Revision note mein sabse kaam ki cheez kya hai?", options: ["Sirf final score", "Galat prediction aur browser ka actual rule", "Sirf code ki length"], answer: 1, explanation: "Rule samajhne se doosre snippet par bhi decision le sakte ho." },
    ],
  },
]);
