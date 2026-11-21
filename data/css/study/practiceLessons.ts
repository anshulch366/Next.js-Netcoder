import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const practiceLessons = chapter("CSS Examples", [
  {
    id: "css-examples-templates", title: "CSS Templates", level: "Intermediate",
    summary: "Reusable card template mein structure aur variant ko alag rakho.",
    content: [
      "Har card mein spacing aur border same ho sakte hain jabki featured card ka accent alag chahiye. Shared class ko duplicate karne se future edits mushkil hote hain.",
      "Base card aur modifier class likho. Teen alag titles se template test karo aur check karo ki koi fixed height text cut na kare.",
    ],
    examples: [{
      title: "CSS Templates · Practice",
      code: cssDemo("<article class=\"card\">Sketch practice</article><article class=\"card featured\">Monthly exhibition</article>")(".card { padding: 1rem; margin-block: .5rem; border-left: 4px solid silver; }\n.featured { border-color: teal; }"),
      result: "Dono cards ka spacing same hoga aur sirf featured card ki border teal hogi.",
    }],
    quizzes: [
      { question: "Shared style kahan?", options: [".card", ".featured", "article ka text"], answer: 0, explanation: "Dono cards base class lete hain." },
      { question: "Naya featured card ka class value?", options: ["#featured", "card featured", "card.featured literal"], answer: 1, explanation: "HTML class names spaces se alag hote hain." },
      { question: "Long title se kya test hota hai?", options: ["Network throughput", "URL scheme", "Wrapping aur height"], answer: 2, explanation: "Template real content variations handle kare." },
    ],
  },
  {
    id: "css-examples-examples", title: "CSS Examples", level: "Intermediate",
    summary: "Ek controlled example se rule ka actual effect alag karke dekho.",
    content: [
      "Baseline aur variation mein ek property change karne se cause saaf dikhta hai. Bahut saare changes ek saath result explain karna mushkil banaate hain.",
      "Dono notes ko same width aur background do. Sirf doosre par padding add karo aur inspect karo ki text aur background edge ke beech distance kaise badalta hai.",
    ],
    examples: [{
      title: "CSS Examples · Practice",
      code: cssDemo("<p>Baseline</p><p class=\"variant\">Variation</p>")("p { box-sizing: border-box; width: 12rem; background: ivory; }\n.variant { padding: 1rem; }"),
      result: "Dono ka outer width 12rem hai. Variation ke andar text inset hai aur available content width kam hai.",
    }],
    quizzes: [
      { question: "Experiment ka variable?", options: ["Background", "Padding", "Outer width"], answer: 1, explanation: "Sirf variant rule padding badalta hai." },
      { question: "Width stable kyun?", options: ["Margin auto", "Font size", "border-box"], answer: 2, explanation: "Padding declared width ke andar hai." },
      { question: "Content width sabse kam kiski?", options: ["Variant", "Baseline", "Dono hamesha equal"], answer: 0, explanation: "Variant mein horizontal padding jagah leti hai." },
    ],
  },
  {
    id: "css-examples-videos", title: "CSS Videos", level: "Intermediate",
    summary: "Video lesson ko pause karke result predict karna seekho.",
    content: [
      "Passive replay se code familiar lag sakta hai, par prediction se pata chalta hai ki axis ya cascade ka rule samjha hai. Video demo ke baad khud same idea naye content par lagao.",
      "Flex demo dekhte waqt output se pehle pause karo. Neeche row-reverse ke baad visual order aur HTML order batao. Keyboard se tab karke dono orders ka farq verify karo.",
    ],
    examples: [{
      title: "CSS Videos · Practice",
      code: cssDemo("<nav><a href=\"#a\">A</a><a href=\"#b\">B</a></nav><p id=\"a\">A section</p><p id=\"b\">B section</p>")("nav { display: flex; flex-direction: row-reverse; justify-content: flex-end; gap: .5rem; }"),
      result: "Left-to-right page mein links visually B phir A honge. Default keyboard traversal source mein pehle A par aayega.",
    }],
    quizzes: [
      { question: "Visual leftmost link?", options: ["A", "Dono overlap", "B"], answer: 2, explanation: "Reversed row visual order palatti hai." },
      { question: "Pehla tab stop?", options: ["A", "B", "Paragraph"], answer: 0, explanation: "DOM source order A se shuru hota hai." },
      { question: "Video ke baad kya reproduce karo?", options: ["Sirf thumbnail", "Naye labels se axis experiment", "Sirf timeline"], answer: 1, explanation: "Nayi situation mein rule apply karna understanding test karta hai." },
    ],
  },
  {
    id: "css-examples-editor", title: "CSS Editor", level: "Intermediate",
    summary: "Editor ke source aur browser ke temporary edits ko alag samjho.",
    content: [
      "DevTools mein style live toggle karna fast experiment hai. Reload ke baad change bachaane ke liye rule apni stylesheet ya editor source mein save karo.",
      "Preview mein border width ko 2 se 6 karo. Pehle DevTools se try karo, phir source save karke reload karo. Computed aur authored values compare karo.",
    ],
    examples: [{
      title: "CSS Editor · Practice",
      code: cssDemo("<p class=\"sample\">Editor test</p>")(".sample { border: 2px solid teal; padding: 8px; }"),
      result: "Original preview 2px border dikhayega. File mein 6px save karne par reload ke baad bhi moti border rahegi.",
    }],
    quizzes: [
      { question: "Permanent change kahan save karein?", options: ["Source stylesheet", "Sirf DevTools toggle", "Browser history"], answer: 0, explanation: "Source reload par dobara read hota hai." },
      { question: "Computed panel kya dikhata hai?", options: ["Sirf filename", "Resolved style values", "Quiz score"], answer: 1, explanation: "Computed styles final applied values inspect karne dete hain." },
      { question: "Sirf thickness badalne ki property?", options: ["border-color", "padding", "border-width"], answer: 2, explanation: "Border width visual stroke ki motai hai." },
    ],
  },
  {
    id: "css-examples-snippets", title: "CSS Snippets", level: "Intermediate",
    summary: "Chhota reusable snippet copy karte waqt uski assumptions pehchano.",
    content: [
      "Screen-reader-only text visually chhup sakta hai par accessible name mein rehna chahiye. display none use karne se yeh text accessibility tree se bhi hat sakta hai.",
      "Icon button mein actual label rakho aur utility class se visually clip karo. Accessibility tree mein button naam aur keyboard focus check karo.",
    ],
    examples: [{
      title: "CSS Snippets · Practice",
      code: cssDemo("<button><span aria-hidden=\"true\">↓</span><span class=\"sr\">Download notes</span></button>")(".sr { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }"),
      result: "Button par arrow dikhega aur accessible naam Download notes milega. Label DOM mein available hai.",
    }],
    quizzes: [
      { question: "Accessible naam kya hai?", options: ["Sirf down arrow", "Download notes", "sr"], answer: 1, explanation: "Visible decoration hidden hai aur text label available hai." },
      { question: "display none se problem?", options: ["Text bold ho jaata hai", "Button bada ho jaata hai", "Naam ka text chhoot sakta hai"], answer: 2, explanation: "Hidden subtree aam taur par accessibility tree se bahar hai." },
      { question: "Utility kis par lagani hai?", options: ["Label span", "Poore button", "Body"], answer: 0, explanation: "Interactive control visible aur focusable rehna chahiye." },
    ],
  },
  {
    id: "css-examples-quiz", title: "CSS Quiz", level: "Intermediate",
    summary: "Cascade quiz mein pehle matching declarations shortlist karo.",
    content: [
      "Inheritance, specificity aur source order ko ek saath guess karne se galti hoti hai. Same importance aur layer mein pehle specificity phir equal-weight ties ke liye order dekho.",
      "Neeche page chalane se pehle heading ka rang likho. Ek class rule hataakar dobara predict karo. Har baar winning selector aur tie-break ka reason bolo.",
    ],
    examples: [{
      title: "CSS Quiz · Practice",
      code: cssDemo("<h2 class=\"note\">Class update</h2>")(".note { color: navy; }\nh2 { color: red; }\n.note { color: teal; }"),
      result: "Teal final color hai. Do class rules equal specificity rakhte hain aur aakhri class rule jeetta hai.",
    }],
    quizzes: [
      { question: "Final color?", options: ["Red", "Navy", "Teal"], answer: 2, explanation: "Equal class rules mein last declaration teal hai." },
      { question: "Aakhri rule hataane par?", options: ["Navy", "Red", "Transparent"], answer: 0, explanation: "Class ab bhi type se higher specificity rakhti hai." },
      { question: "Dono class rules haten to?", options: ["Teal", "Red", "Navy"], answer: 1, explanation: "Sirf h2 rule match karke color deta hai." },
    ],
  },
  {
    id: "css-examples-exercises", title: "CSS Exercises", level: "Intermediate",
    summary: "Requirement ko ek testable CSS edit mein badlo.",
    content: [
      "Task hai ki card 200px rahe, padding 12px ho aur border ke baad bhi container se na nikle. Pehle expected box calculate karo aur phir working code se verify karo.",
      "Khud missing box-sizing value likho. Neeche answer compare karo aur padding 16px karke boundary dobara check karo.",
    ],
    examples: [{
      title: "CSS Exercises · Practice",
      code: cssDemo("<div class=\"exercise\">Practice card</div>")(".exercise { box-sizing: border-box; width: 200px; padding: 12px; border: 2px solid; }"),
      result: "Outer width 200px aur content 172px hoga. Padding badalne par outer width stable rahegi.",
    }],
    quizzes: [
      { question: "Correct sizing mode?", options: ["border-box", "content-box", "padding-box standard default"], answer: 0, explanation: "Width ke andar padding aur border chahiye." },
      { question: "Pehle content width?", options: ["176px", "172px", "228px"], answer: 1, explanation: "200 - 24 - 4 = 172." },
      { question: "Padding 16px par content?", options: ["168px", "200px", "164px"], answer: 2, explanation: "200 - 32 - 4 = 164." },
    ],
  },
  {
    id: "css-examples-code-challenges", title: "CSS Code Challenges", level: "Intermediate",
    summary: "Unseen content ke liye solution banao jisme fixed number of cards assume na karna pade.",
    content: [
      "Goal hai ki wide row mein jitne columns fit hon utne banein aur very narrow parent par single card overflow na kare.",
      "Auto-fit aur bounded minimum combine karo. Card add/remove karo aur parent ko 10rem se neeche test karo. Expected result ko computed track sizes se milao.",
    ],
    examples: [{
      title: "CSS Code Challenges · Practice",
      code: cssDemo("<div class=\"shelf\"><div>A</div><div>B</div><div>C</div></div>")(".shelf { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(10rem, 100%), 1fr)); gap: .5rem; }\n.shelf > div { background: lavender; }"),
      result: "10rem tracks jahan fit honge wahan columns banenge. Parent 8rem ho to minimum 8rem tak gir sakta hai.",
    }],
    quizzes: [
      { question: "Inner min ka purpose?", options: ["Rows fixed karna", "Narrow parent mein overflow rokna", "Colors choose karna"], answer: 1, explanation: "Minimum track parent se bada force nahi hota." },
      { question: "Available columns kis se?", options: ["z-index", "rowspan", "auto-fit"], answer: 2, explanation: "Auto-repeat available space dekhkar tracks banata hai." },
      { question: "Extra space kaise bharti hai?", options: ["1fr maximum", "10rem margin", "Absolute position"], answer: 0, explanation: "Flexible track maximum spare width leta hai." },
    ],
  },
  {
    id: "css-examples-projects", title: "CSS Projects", level: "Intermediate",
    summary: "Ek design brief ko acceptance checks mein badlo.",
    content: [
      "Event banner mein naam, date aur registration link saaf milne chahiye. Real title lamba ho sakta hai aur narrow screen par button wrap hona chahiye.",
      "Content pehle likho, phir flexible layout lagao. Long event name aur 320px viewport par check karo ki link aur text overlap na karein. Actual destination ko uske href se test karo.",
    ],
    examples: [{
      title: "CSS Projects · Practice",
      code: cssDemo("<header><div><h2>Sketch meetup</h2><p>12 June</p></div><a href=\"#join\">Registration</a></header><p id=\"join\">Entry desk, Room A</p>")("header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding: 1rem; background: ivory; }"),
      result: "Wide space par details aur link opposite ends par hain. Kam jagah par link next line le sakta hai.",
    }],
    quizzes: [
      { question: "Responsive acceptance check?", options: ["Sirf empty title", "Sirf wide screen", "Long naam aur narrow screen"], answer: 2, explanation: "Realistic content stress layout test karta hai." },
      { question: "Link ka destination?", options: ["join id", "Header class", "Current color"], answer: 0, explanation: "Fragment matching element target karta hai." },
      { question: "Wrap na ho to kya issue aa sakta hai?", options: ["Automatic new column always", "Crowding ya overflow", "Text delete"], answer: 1, explanation: "Single flex line items ko jagah mein force kar sakti hai." },
    ],
  },
  {
    id: "css-examples-website", title: "CSS Website", level: "Intermediate",
    summary: "Kai pages par consistent shared styling ka structure banao.",
    content: [
      "Site-wide nav, spacing aur color tokens common stylesheet mein hon to har page ka design ek jagah se maintain hota hai. Page-specific styles ko scoped classes mein rakho.",
      "Demo ke rules site.css mein rakhkar Home aur About dono ke head se link kar sakte ho. Current page marker har file mein appropriate link par badlo.",
    ],
    examples: [{
      title: "CSS Website · Practice",
      code: cssDemo("<nav><a href=\"index.html\">Home</a><a href=\"about.html\" aria-current=\"page\">About</a></nav><main><h1>About</h1></main>")(":root { --ink: #12344a; }\nbody { color: var(--ink); font-family: system-ui, sans-serif; }\nnav { display: flex; gap: 1rem; }\nnav [aria-current] { font-weight: bold; }"),
      result: "About link bold aur body text shared ink shade mein hoga. Same stylesheet doosre page ko bhi consistent look deti hai.",
    }],
    quizzes: [
      { question: "Shared design kahan rakhen?", options: ["site.css", "Har anchor ke text mein", "Image file mein"], answer: 0, explanation: "Linked stylesheet multiple documents reuse karte hain." },
      { question: "Home page par current marker?", options: ["About hi par", "Home link par", "Dono par"], answer: 1, explanation: "Current destination truthful honi chahiye." },
      { question: "Token badalne ka result?", options: ["URLs change", "HTML translate", "Token use karne wale styles update"], answer: 2, explanation: "Custom property consumers resolved value lete hain." },
    ],
  },
  {
    id: "css-examples-syllabus", title: "CSS Syllabus", level: "Intermediate",
    summary: "CSS topics ko dependency order mein padho.",
    content: [
      "Selectors samajhne ke baad cascade, sizing ke baad flex/grid aur inke baad responsive layout debug karna aasaan hota hai. Har unit ka observable outcome rakho.",
      "Milestone mein pehle selector batao, phir box ki width calculate karo aur narrow parent par behaviour predict karo. Teeno checks sahi hon to responsive tracks par badho.",
    ],
    examples: [{
      title: "CSS Syllabus · Practice",
      code: cssDemo("<div class=\"milestone\">Layout checkpoint</div>")(".milestone { box-sizing: border-box; width: min(100%, 18rem); padding: 1rem; border: 1px solid; }"),
      result: "Card maximum 18rem aur chhote parent mein 100% hoga. Dono widths mein padding aur border shaamil hain.",
    }],
    quizzes: [
      { question: "Sizing se pehle kis concept ki zaroorat?", options: ["3D animation", "Matching selector", "Video codec"], answer: 1, explanation: "Rule target identify kiye bina sizing debug mushkil hai." },
      { question: "20rem parent mein outer width?", options: ["20rem", "19rem", "18rem"], answer: 2, explanation: "min smaller candidate leta hai." },
      { question: "10rem parent mein outer width?", options: ["10rem", "18rem", "12rem"], answer: 0, explanation: "100% chhota candidate ban jaata hai." },
    ],
  },
  {
    id: "css-examples-study-plan", title: "CSS Study Plan", level: "Intermediate",
    summary: "Practice ko predict, implement aur inspect sessions mein baanto.",
    content: [
      "Ek din selector aur box model yaad se likho, doosre din flex aur grid compare karo aur teesre din responsive mini project banao. Har mismatch ka rule note karo.",
      "Aaj ke drill mein gap ke baad do items ka width predict karo. Kal container width badalkar bina notes calculation repeat karo. Answer ko grid overlay se verify karo.",
    ],
    examples: [{
      title: "CSS Study Plan · Practice",
      code: cssDemo("<div class=\"drill\"><b>A</b><b>B</b></div>")(".drill { display: grid; width: 240px; grid-template-columns: 1fr 1fr; gap: 20px; }\nb { background: ivory; }"),
      result: "Har item 110px track par hoga. Container 300px karne par dono 140px ho jaayenge.",
    }],
    quizzes: [
      { question: "240px ka answer?", options: ["120px", "100px", "110px"], answer: 2, explanation: "(240 - 20) / 2 barabar 110." },
      { question: "300px ka answer?", options: ["140px", "150px", "130px"], answer: 0, explanation: "(300 - 20) / 2 barabar 140." },
      { question: "Next session mein meaningful retest?", options: ["Wahi number copy karna", "Nayi width par khud predict karna", "Sirf color badalna"], answer: 1, explanation: "Calculation ko naye case par apply karna recall test karta hai." },
    ],
  },
  {
    id: "css-examples-interview-prep", title: "CSS Interview Prep", level: "Intermediate",
    summary: "Interview mein property ka naam aur layout decision ka reason dono batao.",
    content: [
      "Ek row mein variable-width actions flex se aasani se align ho sakte hain. Multiple rows mein shared column lines chahiye hon to grid better fit ho sakta hai.",
      "Neeche toolbar mein title ko available space aur action ko natural width do. Candidate ki tarah explain karo ki long title aur narrow width aane par kya hoga, phir test karo.",
    ],
    examples: [{
      title: "CSS Interview Prep · Practice",
      code: cssDemo("<div class=\"toolbar\"><strong>Monthly exhibition schedule</strong><button>Open</button></div>")(".toolbar { display: flex; align-items: center; gap: .5rem; }\nstrong { flex: 1; min-width: 0; overflow-wrap: anywhere; }\nbutton { flex: none; }"),
      result: "Title available space leta aur zaroorat par wrap karta hai. Button apni natural width rakhta hai.",
    }],
    quizzes: [
      { question: "Toolbar ke liye flex kyun?", options: ["Ek main axis par alignment", "Do-dimensional tracks compulsory", "Sirf buttons support hote hain"], answer: 0, explanation: "Row mein title aur action distribute karne hain." },
      { question: "Button shrink kyun nahi hota?", options: ["gap .5rem", "flex: none", "strong min-width"], answer: 1, explanation: "None grow aur shrink dono zero karta hai." },
      { question: "Shared multirow column lines ke liye?", options: ["Opacity", "Float alone", "Grid"], answer: 2, explanation: "Grid rows aur columns ke shared tracks deta hai." },
    ],
  },
]);
