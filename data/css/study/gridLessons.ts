import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const gridLessons = chapter("CSS Grid", [
  {
    id: "css-grid-grid-intro", title: "Grid Intro", level: "Intermediate",
    summary: "Rows aur columns dono mein alignment chahiye to Grid use karo.",
    content: [
      "Container tracks define karta hai aur direct children cells mein place hote hain. Default auto placement source order follow karta hai.",
      "Chaar labels aur do equal columns banao. Ek aur label add karo aur dekho ki manually row declare kiye bina next implicit row ban jaati hai.",
    ],
    examples: [{
      title: "Grid Intro · Practice",
      code: cssDemo("<div class=\"grid\"><b>A</b><b>B</b><b>C</b><b>D</b></div>")(".grid { display: grid; grid-template-columns: 1fr 1fr; gap: .5rem; }\nb { background: ivory; }"),
      result: "A aur B pehli row mein, C aur D doosri mein honge.",
    }],
    quizzes: [
      { question: "Row 2 ka pehla item?", options: ["B", "D", "C"], answer: 2, explanation: "Do columns ke baad auto placement next row leta hai." },
      { question: "Direct grid items kaun?", options: ["Chaar b elements", "Sirf container", "Text ke sab letters"], answer: 0, explanation: "Container ke direct children items bante hain." },
      { question: "Paanchwa item kahan?", options: ["Pehle item ke upar", "Teesri row", "Hidden"], answer: 1, explanation: "Grid zaroorat par implicit row banata hai." },
    ],
  },
  {
    id: "css-grid-grid-container", title: "Grid Container", level: "Intermediate",
    summary: "Grid tracks ko fixed, flexible aur bounded sizes do.",
    content: [
      "fr leftover space ka fraction hai jabki gap tracks ke beech jagah rakhta hai. minmax(0,1fr) flexible track ke automatic content minimum ko limit kar sakta hai.",
      "Container ko 300px do. Ek fixed track aur gap ke baad remaining width calculate karo aur DevTools grid overlay se confirm karo.",
    ],
    examples: [{
      title: "Grid Container · Practice",
      code: cssDemo("<div class=\"grid\"><span>Menu</span><span>Report</span></div>")(".grid { display: grid; width: 300px; grid-template-columns: 90px minmax(0, 1fr); gap: 10px; }\nspan { background: lavender; }"),
      result: "Pehla track 90px, gap 10px aur doosra track 200px hoga.",
    }],
    quizzes: [
      { question: "Flexible width kitni?", options: ["200px", "210px", "300px"], answer: 0, explanation: "300 - 90 - 10 = 200." },
      { question: "Track sizes kahan likhte hain?", options: ["grid-column on child", "grid-template-columns", "place-self"], answer: 1, explanation: "Container column definitions yahan hain." },
      { question: "Gap track mein include hota hai?", options: ["Pehle track ke andar", "Second ke padding mein", "Nahi, alag jagah leta hai"], answer: 2, explanation: "Grid gutters sizing mein alag count hote hain." },
    ],
  },
  {
    id: "css-grid-grid-items", title: "Grid Items", level: "Intermediate",
    summary: "Ek item ko grid lines ya span ke through place karo.",
    content: [
      "Teen columns mein chaar boundary lines hoti hain. Negative line -1 explicit grid ke last edge ko refer karti hai.",
      "Lead card ko first se last column line tak rakho. Doosre cards auto-place hone do. Columns ki sankhya badalne par bhi lead poora explicit grid span karega.",
    ],
    examples: [{
      title: "Grid Items · Practice",
      code: cssDemo("<div class=\"grid\"><b class=\"lead\">Aaj</b><b>A</b><b>B</b></div>")(".grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: .5rem; }\n.lead { grid-column: 1 / -1; background: gold; }"),
      result: "Lead poori first row lega. A aur B next row ke pehle do cells mein honge.",
    }],
    quizzes: [
      { question: "-1 yahan kya hai?", options: ["Negative width", "Aakhri explicit column line", "First item"], answer: 1, explanation: "Negative indexing end se lines ginti hai." },
      { question: "Teen columns ki lines?", options: ["3", "6", "4"], answer: 2, explanation: "Har track ke do edges shared hote hain." },
      { question: "Item do tracks lena chahe?", options: ["grid-column: span 2", "grid-row: 0", "gap: 2"], answer: 0, explanation: "Span track count se area leta hai." },
    ],
  },
  {
    id: "css-grid-grid-12-column-layout", title: "Grid 12-column Layout", level: "Intermediate",
    summary: "12 equal tracks se flexible proportions banao.",
    content: [
      "12 ko 2, 3 aur 4 se divide kar sakte hain, isliye halves, thirds aur quarters same structure mein bante hain. Gaps bhi actual widths ki calculation mein shaamil hote hain.",
      "Main ko 8 aur sidebar ko 4 tracks do. Small screen par dono ko full span do. Desktop par dono ke shared grid lines inspect karo.",
    ],
    examples: [{
      title: "Grid 12-column Layout · Practice",
      code: cssDemo("<div class=\"layout\"><main>Workshop notes</main><aside>Dates</aside></div>")(".layout { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: .5rem; }\nmain, aside { grid-column: span 12; background: ivory; }\n@media (min-width: 42rem) { main { grid-column: span 8; } aside { grid-column: span 4; } }"),
      result: "Wide row mein main 8 tracks aur dates 4 tracks lengi. Mobile par dono full-width rows honge.",
    }],
    quizzes: [
      { question: "Wide spans ka total?", options: ["8", "16", "12"], answer: 2, explanation: "8 aur 4 ek row poori karte hain." },
      { question: "Narrow par aside kitne tracks?", options: ["12", "4", "1"], answer: 0, explanation: "Base rule dono ko span 12 deta hai." },
      { question: "Quarter-width region kitne tracks?", options: ["4", "3", "6"], answer: 1, explanation: "12 ka quarter 3 hai." },
    ],
  },
  {
    id: "css-grid-project-viii", title: "CSS Project VIII", level: "Intermediate",
    summary: "Ek responsive magazine grid banao jisme lead story prominent ho.",
    content: [
      "Source order mein lead sabse pehle rakho taaki mobile aur keyboard reading order naturally correct rahe. Wide layout mein span se hierarchy dikhao.",
      "Teen articles ko grid mein rakho. 40rem se upar teen tracks banaakar lead ko do tracks do. Window chhoti karo aur verify karo ki har story readable single column mein aa jaati hai.",
    ],
    examples: [{
      title: "CSS Project VIII · Practice",
      code: cssDemo("<section><article class=\"lead\"><h2>Library khuli</h2></article><article>Sketch meetup</article><article>Art show</article></section>")("section { display: grid; gap: 1rem; }\narticle { background: ivory; padding: 1rem; }\n@media (min-width: 40rem) { section { grid-template-columns: repeat(3, 1fr); } .lead { grid-column: span 2; } }"),
      result: "Desktop par pehli story do tracks aur meetup teesra track leta hai. Art show next row mein aata hai.",
    }],
    quizzes: [
      { question: "Art show doosri row mein kyun?", options: ["Pehli row ke teen tracks bhar gaye", "Uska order -1 hai", "Display none hai"], answer: 0, explanation: "Lead 2 aur meetup 1 track lete hain." },
      { question: "Mobile par lead span rule?", options: ["Hamesha 2", "Inactive", "Becomes fixed"], answer: 1, explanation: "Span media query ke andar hai." },
      { question: "Reading order stable kaise?", options: ["Negative z-index", "Reverse order", "Lead HTML mein pehle"], answer: 2, explanation: "Source order sab layouts mein meaningful hai." },
    ],
  },
  {
    id: "css-grid-supports", title: "CSS @supports", level: "Intermediate",
    summary: "Feature query se supported declaration par enhancement lagao.",
    content: [
      "Base layout pehle se usable hona chahiye. @supports property-value syntax ki support test karta hai, har real-world layout ke flawless hone ki guarantee nahi deta.",
      "Default stacked cards rakho aur grid support hone par do columns lagao. DevTools mein enhancement block disable karke fallback padho.",
    ],
    examples: [{
      title: "CSS @supports · Practice",
      code: cssDemo("<div class=\"cards\"><p>Notes</p><p>Dates</p></div>")(".cards p { padding: .5rem; background: lavender; }\n@supports (display: grid) { .cards { display: grid; grid-template-columns: 1fr 1fr; gap: .5rem; } }"),
      result: "Grid support mein cards side by side dikhenge. Enhancement skip hone par paragraphs readable stack rahenge.",
    }],
    quizzes: [
      { question: "Test kya hai?", options: ["Viewport width", "display: grid ki support", "Internet speed"], answer: 1, explanation: "Feature query declaration support check karti hai." },
      { question: "Fallback kahaan define hai?", options: ["Sirf JavaScript mein", "Title mein", "Conditional block ke bahar"], answer: 2, explanation: "Base HTML aur CSS pehle se kaam karte hain." },
      { question: "Width condition ke liye kya use karoge?", options: ["@media", "@supports width syntax only", "@font-face"], answer: 0, explanation: "Media query environment condition dekhti hai." },
    ],
  },
]);
