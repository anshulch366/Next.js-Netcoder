import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const referenceLessons = chapter("CSS References", [
  {
    id: "css-references-reference", title: "CSS Reference", level: "Intermediate",
    summary: "Property reference mein syntax ke saath initial value, inheritance aur allowed units padho.",
    content: [
      "Ek property ka naam maloom hone ke baad bhi uske supported values aur target boxes verify karne hote hain. Computed panel actual resolved result batata hai.",
      "Gap ke liye row aur column values padho. Container ko grid banaakar dekho ki do-value shorthand ka order kaise kaam karta hai. Width set karke actual gutter measure karo.",
    ],
    examples: [{
      title: "CSS Reference · Practice",
      code: cssDemo("<div class=\"grid\"><b>A</b><b>B</b><b>C</b><b>D</b></div>")(".grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 20px; }\nb { background: ivory; }"),
      result: "Rows ke beech 8px aur columns ke beech 20px jagah hogi.",
    }],
    quizzes: [
      { question: "Row gap kitna?", options: ["20px", "8px", "28px"], answer: 1, explanation: "Gap shorthand ki pehli value rows ke liye hai." },
      { question: "Property lookup mein inheritance kyun dekhen?", options: ["URL valid hai ya nahi", "Code compile time", "Child par value aayegi ya nahi"], answer: 2, explanation: "Har property default inherit nahi karti." },
      { question: "Actual value kahan inspect karo?", options: ["Computed styles", "Bookmark list", "History"], answer: 0, explanation: "Browser resolved property values dikhata hai." },
    ],
  },
  {
    id: "css-references-selectors", title: "CSS Selectors", level: "Intermediate",
    summary: "Reference mein selector ko uske target set ke hisaab se padho.",
    content: [
      "Compound selector bina space ke same element par conditions combine karta hai. Space ho to ancestor-descendant relation ban jaata hai.",
      "Ek card par do classes aur doosre mein nested label rakho. Selectors compare karo aur dekho ki dot se pehle space hatne par match kitna badalta hai.",
    ],
    examples: [{
      title: "CSS Selectors · Practice",
      code: cssDemo("<p class=\"card hot\">A</p><div class=\"card\"><span class=\"hot\">B</span></div>")(".card.hot { border: 2px solid teal; }\n.card .hot { color: maroon; }"),
      result: "A border lega kyunki dono classes ek hi p par hain. B maroon hoga kyunki hot span card ke andar hai.",
    }],
    quizzes: [
      { question: "Same element par dono classes?", options: [".card .hot", ".card, .hot", ".card.hot"], answer: 2, explanation: "Adjacent class selectors compound condition hain." },
      { question: "Nested B ko kaunsa rule?", options: [".card .hot", ".card.hot", "#card"], answer: 0, explanation: "Space ancestor-descendant relation banata hai." },
      { question: "Comma use karne par kya hoga?", options: ["Dono classes zaroor", "Koi bhi listed selector match", "Sirf children"], answer: 1, explanation: "Selector list union hai." },
    ],
  },
  {
    id: "css-references-combinators", title: "CSS Combinators", level: "Intermediate",
    summary: "Siblings ke beech adjacent aur subsequent relationships ko compare karo.",
    content: [
      "+ sirf immediately next element dekhta hai jabki ~ same parent mein baad ke sab matching siblings dekh sakta hai.",
      "Heading ke baad do paragraphs rakho. First ko indentation aur dono ko rang milta hai. Beech mein doosri element jodkar adjacent condition dobara check karo.",
    ],
    examples: [{
      title: "CSS Combinators · Practice",
      code: cssDemo("<h2>Notes</h2><p>Pehla</p><p>Doosra</p>")("h2 + p { padding-left: 1rem; }\nh2 ~ p { color: teal; }"),
      result: "Pehla indented aur teal hai. Doosra teal hai lekin indentation nahi lega.",
    }],
    quizzes: [
      { question: "Immediate sibling operator?", options: ["+", "~", ">"], answer: 0, explanation: "Plus turant agle sibling element ko chunta hai." },
      { question: "Doosre p ka rang?", options: ["Default", "Teal", "Transparent"], answer: 1, explanation: "Subsequent sibling rule dono p match karta hai." },
      { question: "Alag parent ka p ~ se match hoga?", options: ["Hamesha", "Sirf teal ho to", "Nahi"], answer: 2, explanation: "Sibling elements ka parent same hona chahiye." },
    ],
  },
  {
    id: "css-references-pseudo-classes", title: "CSS Pseudo-classes", level: "Intermediate",
    summary: "Structural pseudo-classes ko actual sibling list par evaluate karo.",
    content: [
      "nth-child element ki parent ke children mein position dekhta hai. Odd aur even item numbers se alternating style mil sakta hai.",
      "Ordered list mein ek naya item sabse upar insert karo aur dekho kaunse rows highlight rehte hain. Counting one se shuru hoti hai.",
    ],
    examples: [{
      title: "CSS Pseudo-classes · Practice",
      code: cssDemo("<ol><li>Mix</li><li>Fold</li><li>Dry</li><li>Pack</li></ol>")("li:nth-child(even) { background: lavender; }"),
      result: "Fold aur Pack highlighted honge. Naya pehla li jodne par even positions badal jaayengi.",
    }],
    quizzes: [
      { question: "Fold ki position?", options: ["1", "2", "0"], answer: 1, explanation: "Element counting one-based hai." },
      { question: "Even rule kitne items par?", options: ["3", "4", "2"], answer: 2, explanation: "Four siblings mein positions 2 aur 4 even hain." },
      { question: "First item ka equivalent selector?", options: [":nth-child(1)", ":nth-child(0)", ":last-child hamesha"], answer: 0, explanation: "One first child position hai." },
    ],
  },
  {
    id: "css-references-pseudo-elements", title: "CSS Pseudo-elements", level: "Intermediate",
    summary: "Parts reference se marker, selection aur placeholder jaise targets chuno.",
    content: [
      "Pseudo-element DOM mein extra HTML tag likhe bina ek defined part ko style karne deta hai. Har pseudo-element par har property supported nahi hoti.",
      "List marker ko teal karo aur user-selected text ka background gold. Mouse ya keyboard se text select karke transient state dekho.",
    ],
    examples: [{
      title: "CSS Pseudo-elements · Practice",
      code: cssDemo("<ul><li>Paper kit</li><li>Ink kit</li></ul>")("li::marker { color: teal; }\n::selection { background: gold; color: navy; }"),
      result: "Bullets teal rahenge. Text select hone par selected hissa gold aur navy dikhega.",
    }],
    quizzes: [
      { question: "Selected text ka selector?", options: [":checked", "::marker", "::selection"], answer: 2, explanation: "Selection highlight selected portion represent karta hai." },
      { question: "Bullet ka selector?", options: ["::marker", "::before hamesha", ":first-child"], answer: 0, explanation: "Marker existing list marker ko style karta hai." },
      { question: "Selection hataane par gold?", options: ["Permanent", "Hat jaayega", "Bullet par aa jaayega"], answer: 1, explanation: "Selection highlight selection duration tak visible hai." },
    ],
  },
  {
    id: "css-references-at-rules", title: "CSS At-rules", level: "Intermediate",
    summary: "At-rule CSS ko conditional block, resource registration ya named definition de sakta hai.",
    content: [
      "@media environment dekhta hai, @supports capability aur @keyframes animation stages define karta hai. At-rule ka keyword uska grammar batata hai.",
      "Ek base notice aur print-specific rule rakho. Screen par normal treatment aur print preview mein alternate presentation verify karo.",
    ],
    examples: [{
      title: "CSS At-rules · Practice",
      code: cssDemo("<p class=\"notice\">Class 4 baje</p>")(".notice { background: lavender; }\n@media print { .notice { background: white; border: 1px solid black; } }"),
      result: "Screen par lavender notice hoga. Print mein white background aur black boundary milegi.",
    }],
    quizzes: [
      { question: "Environment condition ke liye?", options: ["@media", "@keyframes", "@font-face"], answer: 0, explanation: "Media rule output conditions check karta hai." },
      { question: "Animation stages define karna ho?", options: ["@supports", "@keyframes", "@charset"], answer: 1, explanation: "Named keyframes animation positions describe karte hain." },
      { question: "Print preview mein border?", options: ["None", "Lavender", "1px solid black"], answer: 2, explanation: "Print block mein border declared hai." },
    ],
  },
  {
    id: "css-references-functions", title: "CSS Functions", level: "Intermediate",
    summary: "Function reference mein arguments aur return type check karo.",
    content: [
      "clamp teen compatible expressions leta hai, var custom property padhta hai aur calc arithmetic karta hai. Galat type se poori declaration invalid ho sakti hai.",
      "Ek token ko preferred gap ke liye viewport-based rakho. clamp se gap ko bound karo. Window wide karke upper cap aur narrow karke lower cap observe karo.",
    ],
    examples: [{
      title: "CSS Functions · Practice",
      code: cssDemo("<div class=\"row\"><b>AM</b><b>PM</b></div>")(".row { --space: 4vw; display: flex; gap: clamp(8px, var(--space), 24px); }"),
      result: "Gap 8px se kam aur 24px se zyada nahi hoga. Beech mein 4vw preferred size hai.",
    }],
    quizzes: [
      { question: "Wide viewport par cap?", options: ["8px", "24px", "4px"], answer: 1, explanation: "Aakhri argument maximum hai." },
      { question: "var kis value ko la raha hai?", options: ["24px", "8px", "4vw"], answer: 2, explanation: "--space mein viewport-relative value hai." },
      { question: "clamp ka pehla argument?", options: ["Minimum", "Maximum", "Preferred"], answer: 0, explanation: "Arguments minimum, preferred aur maximum order mein hain." },
    ],
  },
  {
    id: "css-references-reference-aural", title: "CSS Reference Aural", level: "Intermediate",
    summary: "Speech-oriented CSS aur accessible document structure ka farq samjho.",
    content: [
      "Historical aural properties ya modern CSS Speech features ka support speech engine par depend karta hai. Clear HTML headings aur meaningful reading order assistive output ki buniyad hain.",
      "Speech media ke liye voice-rate ka optional rule rakho. Visual browser mein heading aur paragraph padho. Speech output ko actual supported reading environment mein test karo.",
    ],
    examples: [{
      title: "CSS Reference Aural · Practice",
      code: cssDemo("<h2>Departure</h2><p class=\"timing\">Gate teen, chaar baje.</p>")("@media speech { .timing { voice-rate: slow; } }"),
      result: "Visual page par normal heading aur paragraph dikhenge. Speech CSS support karne wala renderer timing ko dheere padh sakta hai.",
    }],
    quizzes: [
      { question: "Speech-specific media type?", options: ["screen", "print", "speech"], answer: 2, explanation: "Speech media speech synthesizer output ke liye hai." },
      { question: "Visual font size par voice-rate ka asar?", options: ["Koi nahi", "Double", "Zero"], answer: 0, explanation: "Voice rate speech delivery ki setting hai." },
      { question: "Accessible baseline kya hai?", options: ["Sirf aural rules", "Meaningful HTML aur reading order", "Hidden text image"], answer: 1, explanation: "Assistive technology semantic structure se meaning leti hai." },
    ],
  },
  {
    id: "css-references-web-safe-fonts", title: "CSS Web Safe Fonts", level: "Intermediate",
    summary: "Common fonts aur generic fallbacks ki ordered list banao.",
    content: [
      "Koi ek named font har device par installed maan lena galat ho sakta hai. Browser har text run ke liye available compatible face choose karta hai.",
      "Specific family se shuru karo aur end mein generic monospace do. Named families temporarily hataakar compare karo ki code ki character alignment kaise bani rehti hai.",
    ],
    examples: [{
      title: "CSS Web Safe Fonts · Practice",
      code: cssDemo("<pre>Room  A1\nTime  04</pre>")("pre { font-family: Consolas, \"Courier New\", monospace; }"),
      result: "Consolas available ho to use hoga, warna next candidate. Monospace fallback equal-width text ka intent rakhta hai.",
    }],
    quizzes: [
      { question: "Pehla candidate?", options: ["Consolas", "Courier New", "monospace"], answer: 0, explanation: "List left-to-right preference deti hai." },
      { question: "Generic family kya hai?", options: ["Consolas", "monospace", "Courier New"], answer: 1, explanation: "Generic term browser ko font category choose karne deta hai." },
      { question: "Space wale font naam ko kaise likha?", options: ["Hash se", "Slash ke baad", "Quotes mein"], answer: 2, explanation: "Quoted family name clear boundary deta hai." },
    ],
  },
  {
    id: "css-references-animatable", title: "CSS Animatable", level: "Intermediate",
    summary: "Transition se pehle property ki animation type check karo.",
    content: [
      "Numeric compatible values ke beech intermediate steps nikal sakte hain. Kuch properties discrete change karti hain aur smooth visual interpolation har property par nahi milti.",
      "Button ke focus aur hover par transform scale badhao. Reduced-motion preference par transition hatao. CSS reference mein transform aur kisi discrete property ka animation behaviour compare karo.",
    ],
    examples: [{
      title: "CSS Animatable · Practice",
      code: cssDemo("<button>Preview</button>")("button { transition: transform 200ms linear; }\nbutton:hover, button:focus-visible { transform: scale(1.1); }\n@media (prefers-reduced-motion: reduce) { button { transition: none; } }"),
      result: "Normal motion par button 200ms mein 10% bada dikhega. Original layout slot wahi rahega.",
    }],
    quizzes: [
      { question: "1.1 scale ka increase?", options: ["110% extra", "10%", "1%"], answer: 1, explanation: "Original size times 1.1 hai." },
      { question: "Timing function?", options: ["ease-in", "step-start", "linear"], answer: 2, explanation: "Shorthand mein linear constant progress deta hai." },
      { question: "Reference mein kya check karna hai?", options: ["Animation type", "Sirf property spelling", "File extension"], answer: 0, explanation: "Interpolation property ke value type par depend karti hai." },
    ],
  },
  {
    id: "css-references-units", title: "CSS Units", level: "Intermediate",
    summary: "Reference se percentage, viewport aur font-relative units ka base confirm karo.",
    content: [
      "Ek hi em length property ke hisaab se alag reference le sakti hai. Root size maloom ho to rem aur px ka conversion predict kar sakte ho.",
      "Controlled demo mein root 16px rakho aur panel 1.25rem font do. Padding ko .5em do. Pehle font nikaalo aur phir usse padding calculate karo.",
    ],
    examples: [{
      title: "CSS Units · Practice",
      code: cssDemo("<p class=\"measure\">Unit check</p>")("html { font-size: 16px; }\n.measure { font-size: 1.25rem; padding: .5em; background: ivory; }"),
      result: "Font 20px aur padding 10px har side hogi. Root ko 20px karoge to ye 25px aur 12.5px banenge.",
    }],
    quizzes: [
      { question: "1.25rem yahan kitna?", options: ["16px", "12.5px", "20px"], answer: 2, explanation: "16 times 1.25 is 20." },
      { question: ".5em padding ka base?", options: ["Paragraph ka 20px font", "Root ka 16px direct", "Viewport"], answer: 0, explanation: "Padding ke em element ke computed font se aate hain." },
      { question: "Viewport height ka 1%?", options: ["1vw", "1vh", "1rem"], answer: 1, explanation: "vh viewport height relative hai." },
    ],
  },
  {
    id: "css-references-px-em-converter", title: "CSS PX-EM Converter", level: "Intermediate",
    summary: "Target font size ko parent ke pixels se divide karke em nikalo.",
    content: [
      "Conversion ka base har context mein 16px maan lena galat result de sakta hai. Desired 24px at 16px parent ka ratio 1.5em hota hai.",
      "Form mein target aur positive base daalkar calculate karo. Base ko 12 karke same target repeat karo. Zero base validation se rokna zaroori hai kyunki division meaningful nahi hoga.",
    ],
    examples: [{
      title: "CSS PX-EM Converter · Practice",
      code: cssDemo("<form id=\"units\"><label>Target px <input name=\"px\" type=\"number\" value=\"24\" min=\"0\" step=\"any\" required></label><label>Base px <input name=\"base\" type=\"number\" value=\"16\" min=\".01\" step=\"any\" required></label><button>Convert</button><output></output></form><script>document.querySelector(\"#units\").onsubmit = e => { e.preventDefault(); const f = e.currentTarget; f.querySelector(\"output\").textContent = f.elements.px.valueAsNumber / f.elements.base.valueAsNumber + \"em\"; };</script>")("form { display: grid; gap: .5rem; max-width: 18rem; }"),
      result: "Convert par 1.5em milega. Base 12 aur target 24 par output 2em hoga.",
    }],
    quizzes: [
      { question: "Formula kaunsa?", options: ["Target / base", "Base / target", "Target + base"], answer: 0, explanation: "Em desired size ka parent size se ratio hai." },
      { question: "Target 18 aur base 12?", options: ["6em", "1.5em", ".67em"], answer: 1, explanation: "18 divided by 12 is 1.5." },
      { question: "Base 0 kyun roka?", options: ["px invalid hai", "CSS zero ignore karti hai", "Division undefined hai"], answer: 2, explanation: "Zero denominator valid size ratio nahi deta." },
    ],
  },
  {
    id: "css-references-colors", title: "CSS Colors", level: "Intermediate",
    summary: "Named color reference se palette value aur uska exact color compare karo.",
    content: [
      "Named colors sRGB values ko readable names dete hain. Ek hi shade ko hex ya RGB se bhi specify kar sakte ho, lekin foreground aur background ka contrast alag test hai.",
      "Do labels mein teal aur uska matching hex lagao. Inspector ke color picker se RGB values milao aur dono ko white background par compare karo.",
    ],
    examples: [{
      title: "CSS Colors · Practice",
      code: cssDemo("<p class=\"named\">Open</p><p class=\"hex\">Open</p>")(".named { color: teal; } .hex { color: #008080; }\np { background: white; }"),
      result: "Dono labels same teal honge kyunki channels 0,128,128 hain.",
    }],
    quizzes: [
      { question: "Teal ka hex?", options: ["#800080", "#008080", "#808000"], answer: 1, explanation: "Teal mein green aur blue equal 128 hain." },
      { question: "Red channel kitna?", options: ["128", "255", "0"], answer: 2, explanation: "Pehli hex pair 00 hai." },
      { question: "Contrast verify kis ke against?", options: ["Actual background", "Sirf color name", "File name"], answer: 0, explanation: "Readability foreground aur backdrop ke relative luminance par depend karti hai." },
    ],
  },
  {
    id: "css-references-color-values", title: "CSS Color Values", level: "Intermediate",
    summary: "Hex alpha aur functional alpha notation ko decode karo.",
    content: [
      "Eight-digit CSS hex ka order RRGGBBAA hai. Alpha 00 transparent aur FF opaque hota hai. Same translucent foreground alag backgrounds par alag dikhega.",
      "Ek hi half-red overlay ko white aur dark surfaces par dekho. Hex 80 alpha 128/255 hai, jo lagbhag 50% hai. Text content ko full opacity rakho.",
    ],
    examples: [{
      title: "CSS Color Values · Practice",
      code: cssDemo("<div class=\"light\"><span>A</span></div><div class=\"dark\"><span>B</span></div>")(".light { background: white; } .dark { background: #222; }\nspan { display: inline-block; padding: .5rem 2rem; background: #ff000080; color: white; }"),
      result: "Dono strips ka declared red same hai par underlying surface se mix hone par shades alag dikhenge.",
    }],
    quizzes: [
      { question: "Aakhri hex pair kya hai?", options: ["Blue", "Red", "Alpha"], answer: 2, explanation: "CSS eight-digit hex alpha last rakhta hai." },
      { question: "FF alpha ka matlab?", options: ["Opaque", "Transparent", "Half"], answer: 0, explanation: "255/255 full opacity hai." },
      { question: "Shades alag kyun?", options: ["Selector text alag hai", "Backdrop alag hai", "Red channel badla"], answer: 1, explanation: "Alpha composition lower color ko include karti hai." },
    ],
  },
  {
    id: "css-references-default-values", title: "CSS Default Values", level: "Intermediate",
    summary: "Initial, inherited aur browser stylesheet values mein farq dekho.",
    content: [
      "Property ka initial CSS-defined starting value hai. Browser headings ko apni stylesheet se margin aur size deta hai. reset keyword chunne se alag results milte hain.",
      "Parent color set karo, ek child ko inherit aur doosre ko initial do. Heading margin ko revert karke browser style ka asar dekho. Computed panel se confirm karo.",
    ],
    examples: [{
      title: "CSS Default Values · Practice",
      code: cssDemo("<article><h2>Default test</h2><p class=\"inherit\">Parent color</p><p class=\"initial\">Initial color</p></article>")("article { color: teal; }\n.inherit { color: inherit; } .initial { color: initial; }\nh2 { margin: revert; }"),
      result: "Pehla paragraph teal hoga. Doosra property ka initial system color lega. Heading ka margin browser/user cascade se mil sakta hai.",
    }],
    quizzes: [
      { question: "Parent value explicitly lene ka keyword?", options: ["inherit", "initial", "none"], answer: 0, explanation: "Inherit computed parent value leta hai." },
      { question: "Initial ka source?", options: ["Nearest sibling", "Property definition", "Last CSS file"], answer: 1, explanation: "Initial CSS-defined initial value hai." },
      { question: "revert ka purpose?", options: ["Har value zero", "Parent ki copy hamesha", "Current origin ka effect roll back"], answer: 2, explanation: "Revert earlier cascade origins par lautne deta hai." },
    ],
  },
  {
    id: "css-references-browser-support", title: "CSS Browser Support", level: "Intermediate",
    summary: "Compatibility reference ke saath capability aur fallback test karo.",
    content: [
      "Syntax support hona aur tumhara poora component har target browser mein chalna alag checks hain. Pehle readable base style do aur optional property ko feature query mein rakho.",
      "Tag ke liye ek fixed readable color do. Supporting browser par color-mix se tone generate karo. DevTools se enhancement disable karke fallback compare karo.",
    ],
    examples: [{
      title: "CSS Browser Support · Practice",
      code: cssDemo("<span class=\"tag\">Practice</span>")(".tag { background: #d5eeee; color: #102f32; padding: .4rem; }\n@supports (background: color-mix(in srgb, teal 20%, white)) { .tag { background: color-mix(in srgb, teal 20%, white); } }"),
      result: "Feature supported ho to mixed background lagega. Warna tag base background ke saath readable rahega.",
    }],
    quizzes: [
      { question: "Fallback color kya hai?", options: ["Transparent", "#d5eeee", "Black"], answer: 1, explanation: "Base rule conditional enhancement se bahar hai." },
      { question: "Support kaise detect hua?", options: ["User-agent naam", "Screen size", "@supports declaration test"], answer: 2, explanation: "Feature query property aur value check karti hai." },
      { question: "Final verification kya hai?", options: ["Target browser mein component test", "Sirf selector count", "CSS file size"], answer: 0, explanation: "Actual rendering aur interaction compatibility ko confirm karte hain." },
    ],
  },
]);
