import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const rwdLessons = chapter("CSS Responsive", [
  {
    id: "css-responsive-rwd-intro", title: "RWD Intro", level: "Intermediate",
    summary: "Responsive design content ko available space ke hisaab se adapt karta hai.",
    content: [
      "Flexible widths, wrapping aur useful breakpoints ek hi document ko alag viewports par padhne layak banate hain. Pehle smallest useful layout se shuru karo.",
      "Notes column ko relative width aur reading maximum do. 320px aur wide window par resize karke check karo ki horizontal scroll aur bahut lambi lines se bacha gaya hai.",
    ],
    examples: [{
      title: "RWD Intro · Practice",
      code: cssDemo("<main><h1>Sketch diary</h1><p>Chhoti screen par bhi yeh entry padho.</p></main>")("main { width: 90%; max-width: 42rem; margin-inline: auto; overflow-wrap: anywhere; }"),
      result: "Phone par column available space ka 90% le sakta hai. Desktop par width 42rem par rukti hai.",
    }],
    quizzes: [
      { question: "Responsive width kaunsi?", options: ["42rem fixed always", "90%", "auto margin akela"], answer: 1, explanation: "Percentage containing block ke saath size badalti hai." },
      { question: "Desktop par maximum kyun?", options: ["Phone disable ho", "Font italic ho", "Reading lines manageable rahein"], answer: 2, explanation: "Max width overly long lines rokta hai." },
      { question: "Unbroken word ke liye rule?", options: ["overflow-wrap: anywhere", "white-space: nowrap", "position: fixed"], answer: 0, explanation: "Word wrap se overflow kam hota hai." },
    ],
  },
  {
    id: "css-responsive-rwd-viewport", title: "RWD Viewport", level: "Intermediate",
    summary: "Mobile browser ke layout viewport ko device width se milao.",
    content: [
      "Viewport meta ke bina kuch mobile browsers wide virtual layout banaakar page ko shrink karte hain, jisse narrow-screen queries intended waqt par apply nahi hoti.",
      "Example file ke head mein viewport meta dekho. Device emulation par narrow aur wide size compare karo. Zoom ko disable karne wale user-scalable restrictions na lagao.",
    ],
    examples: [{
      title: "RWD Viewport · Practice",
      code: cssDemo("<p>Viewport check</p>")("p { background: ivory; }\n@media (max-width: 32rem) { p { background: lavender; } }"),
      result: "Demo file mein width=device-width meta hai. 32rem ya kam viewport par paragraph lavender aur usse bade par ivory hoga.",
    }],
    quizzes: [
      { question: "Viewport meta kahan?", options: ["CSS selector", "Footer", "Document head"], answer: 2, explanation: "Browser layout settings head mein padhta hai." },
      { question: "32rem exactly par rang?", options: ["Lavender", "Ivory", "Transparent"], answer: 0, explanation: "Max-width boundary inclusive hai." },
      { question: "User zoom kyun accessible rahe?", options: ["Device width fix ho", "Text bada karke padh sake", "CSS load ho"], answer: 1, explanation: "Zoom low-vision readers ke kaam aata hai." },
    ],
  },
  {
    id: "css-responsive-rwd-grid-view", title: "RWD Grid View", level: "Intermediate",
    summary: "Layout ko fixed pixels ke bajay available width ke shares mein socho.",
    content: [
      "Grid fractions flexible space baantte hain aur breakpoint par share badal sakta hai. Gutter ko separate count karna overflow se bachata hai.",
      "Teen cards pehle ek column mein rakho. Jagah milne par teen tracks do aur check karo ki gap set karne par row container ke andar hi rahe.",
    ],
    examples: [{
      title: "RWD Grid View · Practice",
      code: cssDemo("<div class=\"cards\"><p>A</p><p>B</p><p>C</p></div>")(".cards { display: grid; gap: 12px; }\n@media (min-width: 36rem) { .cards { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\np { margin: 0; background: gold; }"),
      result: "Wide row mein do gaps ghataane ke baad teen equal tracks honge. Narrow view mein cards stack honge.",
    }],
    quizzes: [
      { question: "Teen columns mein internal gaps kitne?", options: ["2", "3", "4"], answer: 0, explanation: "Adjacent pairs ke beech gap banta hai." },
      { question: "36rem se neeche kya dikhega?", options: ["Teen fixed columns", "Single column", "Blank grid"], answer: 1, explanation: "Base layout auto-placement use karta hai." },
      { question: "36rem par kaunsa rule active?", options: ["Sirf base single", "Print rule", "Teen tracks"], answer: 2, explanation: "min-width threshold inclusive hai." },
    ],
  },
  {
    id: "css-responsive-rwd-media-queries", title: "RWD Media Queries", level: "Intermediate",
    summary: "Breakpoint content ki zaroorat par rakho.",
    content: [
      "Device model ke bajay toolbar ko resize karke dekho kis width par labels squeeze hote hain. Base stacked layout ko media query se horizontal banao.",
      "Nav ko column do aur 34rem par row switch karo. Zoom badhaakar check karo ki controls phir bhi accessible hain aur labels cut nahi hote.",
    ],
    examples: [{
      title: "RWD Media Queries · Practice",
      code: cssDemo("<nav><a href=\"#one\">Programme</a><a href=\"#two\">Registration</a></nav><p id=\"one\">Aaj ka programme</p><p id=\"two\">Form details</p>")("nav { display: flex; flex-direction: column; gap: .5rem; }\n@media (min-width: 34rem) { nav { flex-direction: row; flex-wrap: wrap; } }"),
      result: "Narrow screen mein links vertically aur wide screen mein horizontal dikhenge. Long labels wrap kar sakte hain.",
    }],
    quizzes: [
      { question: "Base direction?", options: ["Row", "Column", "Reverse row"], answer: 1, explanation: "Base nav rule column set karta hai." },
      { question: "Breakpoint choose karne ka evidence?", options: ["Sirf ek phone model", "URL length", "Content fit ka test"], answer: 2, explanation: "Layout ko actual labels ke saath evaluate karte hain." },
      { question: "Long labels ke liye wide mode mein kya hai?", options: ["flex-wrap", "Overflow hidden", "White-space nowrap"], answer: 0, explanation: "Extra rows content ko fit hone deti hain." },
    ],
  },
  {
    id: "css-responsive-rwd-images", title: "RWD Images", level: "Intermediate",
    summary: "Responsive images mein displayed size aur downloaded resource alag decisions hain.",
    content: [
      "CSS frame ko fit karti hai. srcset aur sizes browser ko multiple resolution candidates mein chunne ka context de sakte hain.",
      "Neeche width-descriptor candidates ke liye apni asli 480px aur 960px files rakho. sizes batata hai image ka expected slot. DevTools Network mein fresh load par browser ka chosen source dekho.",
    ],
    examples: [{
      title: "RWD Images · Practice",
      code: cssDemo("<img src=\"club-480.jpg\" srcset=\"club-480.jpg 480w, club-960.jpg 960w\" sizes=\"(max-width: 600px) 100vw, 600px\" alt=\"Club exhibition\">")("img { display: block; width: 100%; max-width: 600px; height: auto; }"),
      result: "Image 600px tak fit hogi. Browser viewport, pixel density aur available candidates se suitable file chun sakta hai.",
    }],
    quizzes: [
      { question: "480w kya hai?", options: ["CSS ki mandatory width", "Height", "Source ki intrinsic width"], answer: 2, explanation: "Width descriptor source pixels batata hai." },
      { question: "sizes kya describe karta hai?", options: ["Expected slot width", "File size bytes", "Image caption"], answer: 0, explanation: "Browser selection mein displayed size ka hint leta hai." },
      { question: "Proportions kis se bache?", options: ["width: 0", "height: auto", "srcset akela"], answer: 1, explanation: "CSS width ke saath height naturally scale hoti hai." },
    ],
  },
  {
    id: "css-responsive-rwd-videos", title: "RWD Videos", level: "Intermediate",
    summary: "Video ya embedded player ko available width mein rakho.",
    content: [
      "Native video apna intrinsic ratio jaanta hai. Iframe ke liye aspect-ratio se predictable rectangle reserve kar sakte ho aur squeeze se bach sakte ho.",
      "Demo external network ke bina iframe ke andar sample text dikhata hai. Apne embed URL se srcdoc replace karo. Frame ko resize karke width aur height ka ratio compare karo.",
    ],
    examples: [{
      title: "RWD Videos · Practice",
      code: cssDemo("<iframe title=\"Demo player frame\" srcdoc=\"<p>Player preview</p>\"></iframe>")("iframe { display: block; width: 100%; max-width: 40rem; height: auto; aspect-ratio: 16 / 9; border: 0; }"),
      result: "Player frame available space mein 16:9 rahega. 320px width par frame ki height 180px hogi.",
    }],
    quizzes: [
      { question: "320px wide frame ki height?", options: ["180px", "160px", "240px"], answer: 0, explanation: "320 guna 9/16 = 180." },
      { question: "Frame ka purpose kaise bataya?", options: ["Aspect ratio", "title", "Border zero"], answer: 1, explanation: "Title embedded frame ka accessible naam hai." },
      { question: "Maximum width kya hai?", options: ["16rem", "9rem", "40rem"], answer: 2, explanation: "Max-width desktop expansion bound karti hai." },
    ],
  },
  {
    id: "css-responsive-rwd-frameworks", title: "RWD Frameworks", level: "Intermediate",
    summary: "Responsive framework ki classes ka layout contract samjho.",
    content: [
      "Container, grid aur breakpoint utilities common rules reuse karwati hain. Class ka effect tabhi hota hai jab uski matching stylesheet loaded ho.",
      "Neeche chhota local utility pattern hai. Container aur row classes lagao aur breakpoint par do columns verify karo. External framework mein class names aur breakpoints uski documented definitions se milao.",
    ],
    examples: [{
      title: "RWD Frameworks · Practice",
      code: cssDemo("<div class=\"container\"><div class=\"row\"><p>Notes</p><p>Practice</p></div></div>")(".container { max-width: 52rem; margin: auto; padding: 1rem; }\n.row { display: grid; gap: 1rem; }\n@media (min-width: 40rem) { .row { grid-template-columns: repeat(2, 1fr); } }"),
      result: "Reusable classes wide view mein centered container aur two-column row deti hain. Ye example apni local CSS se chalta hai.",
    }],
    quizzes: [
      { question: "Class ka effect kahan se aata hai?", options: ["Class naam ke English meaning se", "Matching CSS rules", "HTML version se"], answer: 1, explanation: "Browser class naam se layout infer nahi karta." },
      { question: "Container ki responsibility?", options: ["Field validation", "Data fetching", "Width aur outer alignment"], answer: 2, explanation: "Shared container page width aur padding control karta hai." },
      { question: "Breakpoint yahan kitna?", options: ["40rem", "52rem", "1rem"], answer: 0, explanation: "Media rule row ko 40rem par badalta hai." },
    ],
  },
  {
    id: "css-responsive-rwd-templates", title: "RWD Templates", level: "Intermediate",
    summary: "Ek reusable page skeleton banao jiska layout naye content par bhi chale.",
    content: [
      "Header, main aur footer ki responsibilities stable rakho. Template tab test hota hai jab titles aur descriptions ki length badle.",
      "Grid shell ko kam se kam viewport height do. Main ko flexible row do. Short aur long entries se test karo ki footer short page mein neeche aur long page mein content ke baad aaye.",
    ],
    examples: [{
      title: "RWD Templates · Practice",
      code: cssDemo("<div class=\"shell\"><header>Club diary</header><main><h1>Sketch day</h1><p>Class notes</p></main><footer>Art Club</footer></div>")("body { margin: 0; }\n.shell { display: grid; min-height: 100vh; grid-template-rows: auto 1fr auto; }\nheader, main, footer { padding: 1rem; }"),
      result: "Short page par main spare vertical space leta hai. Long content shell ki height badha sakta hai.",
    }],
    quizzes: [
      { question: "Flexible row kaunsi?", options: ["Header", "Footer", "Main"], answer: 2, explanation: "Middle row ko 1fr mila hai." },
      { question: "min-height kyun?", options: ["Content badhne ki jagah rahe", "Footer fixed ho", "Page scroll band ho"], answer: 0, explanation: "Minimum bound growth allow karta hai." },
      { question: "Template ka practical test?", options: ["Sirf blank page", "Long aur short content", "Ek fixed screenshot"], answer: 1, explanation: "Content variation layout assumptions expose karti hai." },
    ],
  },
]);
