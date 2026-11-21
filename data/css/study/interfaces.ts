import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const interfaces = chapter("CSS Tutorial", [
  {
    id: "css-tutorial-navigation-bars", title: "CSS Navigation Bars", level: "Intermediate",
    summary: "Page links ko ek flexible navigation row mein rakho.",
    content: [
      "Navigation HTML landmark deta hai aur flex links ko line mein arrange karta hai. Current page ki pehchan rang ke saath underline se bhi do.",
      "Nav par wrap enable karo. Window chhoti karke dekho ki links cut hone ke bajay agli line lete hain. Actual active page par hi aria-current rakho.",
    ],
    examples: [{
      title: "CSS Navigation Bars · Practice",
      code: cssDemo("<nav><a href=\"index.html\" aria-current=\"page\">Home</a><a href=\"about.html\">About</a></nav>")("nav { display: flex; flex-wrap: wrap; gap: 1rem; }\nnav [aria-current=\"page\"] { text-decoration-thickness: 3px; }"),
      result: "Home ki underline moti hogi aur dono links ke beech gap hoga.",
    }],
    quizzes: [
      { question: "Wrap ki permission kaun deta hai?", options: ["gap", "flex-wrap", "display: inline"], answer: 1, explanation: "Wrap items ko doosri flex line lene deta hai." },
      { question: "Current destination ka attribute?", options: ["href akela", "title", "aria-current"], answer: 2, explanation: "Page value current location batati hai." },
      { question: "Links ke beech space kaise hai?", options: ["gap", "Border", "Underline"], answer: 0, explanation: "Gap flex items ke beech gutter deta hai." },
    ],
  },
  {
    id: "css-tutorial-dropdowns", title: "CSS Dropdowns", level: "Intermediate",
    summary: "Disclosure se dropdown banao jo keyboard se bhi khule.",
    content: [
      "Sirf hover par dependent menu touch aur keyboard par mushkil hota hai. Native details aur summary open state sambhalte hain.",
      "Summary ko Tab aur Enter se kholo. details ke relative box ke neeche panel ko absolute rakho. Link par Tab se jaakar focus visibility check karo.",
    ],
    examples: [{
      title: "CSS Dropdowns · Practice",
      code: cssDemo("<details><summary>Topics</summary><nav><a href=\"#forms\">Forms</a></nav></details><h2 id=\"forms\">Forms</h2>")("details { position: relative; width: max-content; }\ndetails nav { position: absolute; top: 100%; background: ivory; padding: .5rem; border: 1px solid; }"),
      result: "Topics activate karne par uske neeche link panel dikhega. Summary dobara activate karne par panel band hoga.",
    }],
    quizzes: [
      { question: "Open state kaun sambhalta hai?", options: ["CSS color", "nav", "details"], answer: 2, explanation: "Native details disclosure state rakhta hai." },
      { question: "top: 100% kis ke neeche panel rakhta hai?", options: ["Positioned details", "Viewport hamesha", "Link ke font"], answer: 0, explanation: "Percentage containing block ki height se nikalti hai." },
      { question: "Keyboard se summary activate?", options: ["Ctrl+F", "Enter", "Escape hi"], answer: 1, explanation: "Native summary keyboard operation support karta hai." },
    ],
  },
  {
    id: "css-tutorial-image-gallery", title: "CSS Image Gallery", level: "Intermediate",
    summary: "Different size images ko consistent responsive gallery mein rakho.",
    content: [
      "Grid tracks columns banate hain aur object-fit thumbnails ko distort hone se bachata hai. Har meaningful image ko context wala alt do.",
      "Examples mein project ke existing subject icons use hue hain. Local file mein copy karte waqt src ko apne do image paths se badlo. Window resize karke columns aur thumbnails dekho.",
    ],
    examples: [{
      title: "CSS Image Gallery · Practice",
      code: cssDemo("<div class=\"gallery\"><img src=\"/images/subjects/html.svg\" alt=\"HTML\"><img src=\"/images/subjects/css.svg\" alt=\"CSS\"></div>")(".gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(8rem, 100%), 1fr)); gap: .75rem; }\n.gallery img { width: 100%; height: 6rem; object-fit: contain; }"),
      result: "Jagah ho to do columns aur narrow width par ek column milega. Poora logo apne frame mein rahega.",
    }],
    quizzes: [
      { question: "Object-fit contain kya bachata hai?", options: ["Poora image", "Frame fill karne ke liye crop", "Original file size badalta hai"], answer: 0, explanation: "Contain proportions ke saath poora content fit karta hai." },
      { question: "Columns kis se adapt hote hain?", options: ["alt", "auto-fit aur minmax", "height akeli"], answer: 1, explanation: "Grid available space mein fitting tracks banata hai." },
      { question: "Images ka purpose text mein kis se?", options: ["gap", "src ki length", "alt"], answer: 2, explanation: "Alt meaningful alternative deta hai." },
    ],
  },
  {
    id: "css-tutorial-image-sprites", title: "CSS Image Sprites", level: "Intermediate",
    summary: "Ek shared image sheet ka selected hissa chhoti window mein dikhao.",
    content: [
      "Sprite mein icon coordinates maloom hote hain aur background-position sheet ko box ke peeche shift karta hai. Har slot ka size consistent rakhna zaroori hai.",
      "Demo ki gradient sheet mein do 24px swatches hain. Doosre box ko negative x offset do. Real icon sheet mein gradient ki jagah file URL aur uske dimensions use karo.",
    ],
    examples: [{
      title: "CSS Image Sprites · Practice",
      code: cssDemo("<span class=\"swatch\"></span> <span class=\"swatch second\"></span>")(".swatch { display: inline-block; width: 24px; height: 24px; background: linear-gradient(to right, teal 50%, gold 50%) 0 0 / 48px 24px no-repeat; }\n.second { background-position: -24px 0; }"),
      result: "Pehla box teal aur doosra gold dikhega. Dono wahi 48px-wide background share karte hain.",
    }],
    quizzes: [
      { question: "Doosra swatch ka x offset?", options: ["24px", "-24px", "0"], answer: 1, explanation: "Sheet ko left shift karke doosra slot reveal hota hai." },
      { question: "Ek slot kitna chauda?", options: ["48px", "12px", "24px"], answer: 2, explanation: "Element ki visible width ek icon ki hai." },
      { question: "Kaunsi property slot choose karti hai?", options: ["background-position", "object-fit", "color"], answer: 0, explanation: "Position image sheet ka visible hissa badalti hai." },
    ],
  },
  {
    id: "css-tutorial-attribute-selectors", title: "CSS Attribute Selectors", level: "Intermediate",
    summary: "Markup mein available attribute ke basis par style lagao.",
    content: [
      "Presence, exact value aur suffix alag matches hain. Isse har download link par ek aur class likhne ki zaroorat kam ho sakti hai.",
      "[href$=\".pdf\"] se PDF suffix wala URL chuno. File ke baad query jodkar dekho ki selector literal attribute ke end ko check karta hai. Download hone ka actual behaviour server aur link par depend karta hai.",
    ],
    examples: [{
      title: "CSS Attribute Selectors · Practice",
      code: cssDemo("<a href=\"kit.pdf\">Kit PDF</a> <a href=\"kit.html\">Kit page</a>")("a[href$=\".pdf\"] { border-bottom: 3px dotted teal; }"),
      result: "Sirf Kit PDF ko dotted border milegi. kit.pdf?v=2 ab .pdf par end nahi hota.",
    }],
    quizzes: [
      { question: "Suffix operator?", options: ["^=", "~=", "$="], answer: 2, explanation: "Dollar-equals string ke end ko match karta hai." },
      { question: "Sirf attribute presence test?", options: ["[href]", "[href=\"\"]", ".href"], answer: 0, explanation: "Brackets bina value presence dekhte hain." },
      { question: "Selector kis text ko check karta hai?", options: ["File ka actual format", "href ka literal value", "Link label"], answer: 1, explanation: "CSS network response inspect nahi karti." },
    ],
  },
  {
    id: "css-tutorial-forms", title: "CSS Forms", level: "Intermediate",
    summary: "Form fields ko readable, aligned aur keyboard-friendly banao.",
    content: [
      "Label visible rehna chahiye aur focus ring selected field ki jagah batati hai. Input aur button par inherited font consistent appearance deta hai.",
      "Label ko grid banao, field ko padding do aur Tab se focus test karo. Chhote viewport par check karo ki input apne container se baahar na jaaye.",
    ],
    examples: [{
      title: "CSS Forms · Practice",
      code: cssDemo("<label>Email<input type=\"email\" name=\"email\"></label>")("label { display: grid; gap: .3rem; max-width: 20rem; }\ninput { box-sizing: border-box; width: 100%; font: inherit; padding: .5rem; }\ninput:focus-visible { outline: 3px solid teal; }"),
      result: "Label input ke upar hoga. Field parent ki width mein padding samet fit hogi aur focus ring dikhegi.",
    }],
    quizzes: [
      { question: "Padding width ke andar kaise?", options: ["border-box", "content-box", "outline"], answer: 0, explanation: "Border-box width mein border aur padding include hote hain." },
      { question: "Input font surrounding jaisa kaise?", options: ["width: inherit", "font: inherit", "display: grid"], answer: 1, explanation: "Font values parent se liye jaate hain." },
      { question: "Focus ka cue kya hai?", options: ["Input name", "Email type", "Teal outline"], answer: 2, explanation: "State selector visible ring lagata hai." },
    ],
  },
  {
    id: "css-tutorial-project-vii", title: "CSS Project VII", level: "Intermediate",
    summary: "Ek registration form design karo jisme fields aur submit action scan karna aasaan ho.",
    content: [
      "Shared spacing rhythm se labels apne inputs ke kareeb aur alag groups ek doosre se door rehte hain.",
      "Form aur labels ke liye alag gaps set karo. Keyboard se naam bharo aur empty submit test karo. Browser validation HTML required sambhalega aur CSS focus ko clear banaayegi.",
    ],
    examples: [{
      title: "CSS Project VII · Practice",
      code: cssDemo("<form><label>Naam<input name=\"name\" required></label><label>Batch<select name=\"batch\"><option>A</option><option>B</option></select></label><button>Register</button></form>")("form, label { display: grid; }\nform { max-width: 22rem; gap: 1rem; }\nlabel { gap: .25rem; }\ninput, select, button { font: inherit; padding: .5rem; }\n:focus-visible { outline: 3px solid navy; }"),
      result: "Har label apne field se quarter rem door hai. Groups mein 1rem gap hai. Empty naam par submission rukega.",
    }],
    quizzes: [
      { question: "Groups ka gap kitna?", options: [".25rem", "1rem", ".5rem"], answer: 1, explanation: "Form apne direct children ko space deta hai." },
      { question: "Empty naam kaun rokta hai?", options: ["outline", "display grid", "required"], answer: 2, explanation: "HTML validation missing value check karti hai." },
      { question: "Label aur field ka chhota gap kyun?", options: ["Unka relation dikhe", "Validation band ho", "Button delete ho"], answer: 0, explanation: "Nazdeeki visually related cheezein group karti hai." },
    ],
  },
  {
    id: "css-tutorial-counters", title: "CSS Counters", level: "Intermediate",
    summary: "Repeated headings ko automatic visual numbering do.",
    content: [
      "Counter reset starting scope banata hai, increment har match par number badhata hai aur counter() current value ko generated content mein laata hai.",
      "Container mein count reset karo aur har h2 ke before mein number increment karo. Beech mein ek heading jodo aur dekho ki baad ke numbers khud shift hote hain.",
    ],
    examples: [{
      title: "CSS Counters · Practice",
      code: cssDemo("<section><h2>Mix</h2><h2>Fold</h2></section>")("section { counter-reset: step; }\nh2::before { counter-increment: step; content: counter(step) \". \"; }"),
      result: "Headings 1. Mix aur 2. Fold dikhenge. Meaningful ordered instructions ke liye HTML ol bhi use kar sakte ho.",
    }],
    quizzes: [
      { question: "Starting scope kis se?", options: ["counter()", "content", "counter-reset"], answer: 2, explanation: "Reset named counter ko initialize karta hai." },
      { question: "Increment kahaan hai?", options: ["Har h2::before", "Sirf section", "Body end par"], answer: 0, explanation: "Matching pseudo-element har heading par number badhata hai." },
      { question: "Beech mein heading jodne par Fold ka number?", options: ["2", "3", "0"], answer: 1, explanation: "Additional increment pehle ho jaayega." },
    ],
  },
  {
    id: "css-tutorial-units", title: "CSS Units", level: "Intermediate",
    summary: "Size ki unit us reference ke hisaab se chuno jo design mein stable rehna chahiye.",
    content: [
      "px CSS pixel hai, rem root font se, em context ke font se aur vw viewport width se judta hai. Percentage ki reference property par depend karti hai.",
      "Parent ko 20px font do aur child ko 1.5em. Child ki padding 1em rakhkar compare karo ki font-size aur padding ke em references alag kyun hain.",
    ],
    examples: [{
      title: "CSS Units · Practice",
      code: cssDemo("<div><span>Ticket</span></div>")("div { font-size: 20px; }\nspan { display: inline-block; font-size: 1.5em; padding: 1em; background: ivory; }"),
      result: "Child ka font 30px aur uski padding har side 30px hogi. Padding apne computed font-size ko leti hai.",
    }],
    quizzes: [
      { question: "1.5em font ka result?", options: ["30px", "20px", "15px"], answer: 0, explanation: "20 guna 1.5 barabar 30." },
      { question: "1vw kya hai?", options: ["Parent width ka 1%", "Viewport width ka 1%", "Root font"], answer: 1, explanation: "vw viewport-relative unit hai." },
      { question: "Root se scale chahiye?", options: ["em hamesha", "px", "rem"], answer: 2, explanation: "rem root font size leta hai." },
    ],
  },
  {
    id: "css-tutorial-inheritance", title: "CSS Inheritance", level: "Intermediate",
    summary: "Parent se child ko kaunsi values milti hain, yeh pehchano.",
    content: [
      "color aur font-family aam taur par inherit hote hain. Border aur padding har child par dobara inherit ho jaayen to layout toot sakta hai, isliye yeh default se inherit nahi hote.",
      "Parent par color aur border do. Child ke computed styles inspect karo. Child ka color override karke dekho ki parent aur siblings apni jagah waise hi rehte hain.",
    ],
    examples: [{
      title: "CSS Inheritance · Practice",
      code: cssDemo("<article><p>Notice mein <em>zaroori</em> shabd.</p></article>")("article { color: navy; border: 2px solid teal; }\nem { color: maroon; }"),
      result: "Paragraph navy aur emphasis maroon hoga. Border sirf article ko gherega.",
    }],
    quizzes: [
      { question: "Paragraph navy kyun?", options: ["Border ne rang diya", "color inherit hua", "p universally navy hai"], answer: 1, explanation: "Child par competing value nahi hai." },
      { question: "Border har child par kyun nahi?", options: ["Color invalid hai", "em inline hai", "Default non-inherited hai"], answer: 2, explanation: "Box properties aam taur par inherit nahi hoti." },
      { question: "em ka final color?", options: ["Maroon", "Navy", "Teal"], answer: 0, explanation: "Apni specified value inherited value se pehle aati hai." },
    ],
  },
  {
    id: "css-tutorial-specificity", title: "CSS Specificity", level: "Intermediate",
    summary: "Competing selectors ka weight compare karo.",
    content: [
      "Same origin, importance aur cascade layer mein id ki category class se upar aur class type se upar hoti hai. Weight barabar ho to baad ka matching rule jeet sakta hai.",
      "Paragraph par class aur id dono rakho. Id rule pehle likhne par bhi final color check karo. Id selector hataakar class aur type ka comparison dobara dekho.",
    ],
    examples: [{
      title: "CSS Specificity · Practice",
      code: cssDemo("<p class=\"note\" id=\"today\">Kal ki class</p>")("#today { color: navy; }\n.note { color: teal; }\np { color: maroon; }"),
      result: "Navy text milega. Id rule hataane par teal jeetega kyunki class type se zyada specific hai.",
    }],
    quizzes: [
      { question: "Sabse specific selector?", options: [".note", "p", "#today"], answer: 2, explanation: "Id category higher hai." },
      { question: "Id rule hataane par final color?", options: ["Teal", "Maroon", "Navy"], answer: 0, explanation: "Class selector remaining type selector se upar hai." },
      { question: "Equal specificity aur same cascade conditions ho to?", options: ["Pehla rule hamesha", "Later rule", "Alphabetical order"], answer: 1, explanation: "Source order final tie break karta hai." },
    ],
  },
  {
    id: "css-tutorial-important", title: "CSS !important", level: "Intermediate",
    summary: "Cascade mein importance ka asar samjho.",
    content: [
      "Same author origin ki important declaration normal declaration se pehle decide hoti hai, chahe normal selector zyada specific ho. Frequent overrides se future edits samajhna mushkil hota hai.",
      "Ek class par important color lagao aur id par normal color. DevTools mein important marker toggle karo. Dono important ho to same layer mein specificity phir matter karegi.",
    ],
    examples: [{
      title: "CSS !important · Practice",
      code: cssDemo("<p id=\"slot\" class=\"closed\">Booking band hai</p>")(".closed { color: maroon !important; }\n#slot { color: teal; }"),
      result: "Maroon jeetega. Important hataane ke baad id rule teal dikhaayega.",
    }],
    quizzes: [
      { question: "Marker kahan lagta hai?", options: ["Declaration ki value ke baad", "Selector se pehle", "Element id mein"], answer: 0, explanation: "Importance ek declaration par lagu hoti hai." },
      { question: "Important hataane par kaunsa rule jeetega?", options: [".closed", "#slot", "Dono cancel"], answer: 1, explanation: "Ab normal rules mein id zyada specific hai." },
      { question: "Dono same layer mein important hon to yahan kya jeetega?", options: ["Class hamesha", "Pehla hamesha", "Id"], answer: 2, explanation: "Same importance par specificity compare hoti hai." },
    ],
  },
  {
    id: "css-tutorial-math-functions", title: "CSS Math Functions", level: "Intermediate",
    summary: "Available space ke saath formula se size nikalo.",
    content: [
      "calc compatible units ki arithmetic karta hai. min chhoti value, max badi value aur clamp lower bound, preferred value aur upper bound combine karta hai.",
      "Box ko parent se 2rem chhota rakho aur title ko fluid par bounded font do. Window resize karke dekho font extremes par rukta hai. calc ke plus aur minus ke dono taraf spaces rakho.",
    ],
    examples: [{
      title: "CSS Math Functions · Practice",
      code: cssDemo("<article><h2>Class notes</h2></article>")("article { width: calc(100% - 2rem); background: ivory; }\nh2 { font-size: clamp(1rem, 4vw, 2rem); }"),
      result: "Article parent se 2rem chhota hoga. Heading viewport ke saath badhegi par 1rem aur 2rem ke beech rahegi.",
    }],
    quizzes: [
      { question: "Preferred value kaunsi hai?", options: ["1rem", "4vw", "2rem"], answer: 1, explanation: "clamp ki middle argument preferred hai." },
      { question: "Maximum heading size?", options: ["4rem", "1vw", "2rem"], answer: 2, explanation: "Aakhri argument upper bound hai." },
      { question: "Parent se fixed space ghataana ho?", options: ["calc", "rgb", "counter"], answer: 0, explanation: "calc percentage aur length combine kar sakta hai." },
    ],
  },
  {
    id: "css-tutorial-optimization", title: "CSS Optimization", level: "Intermediate",
    summary: "Repeated style rules ki duplication kam karo aur result measure karo.",
    content: [
      "Shared declarations ek jagah rakhne se maintenance aur transferred CSS ka size kam ho sakta hai. Speed ka faisla actual measurement se karo.",
      "Do buttons ke common rules group karo aur sirf difference alag likho. DevTools mein dono inspect karke verify karo ki consolidation ke baad focus aur visual state sahi rehte hain.",
    ],
    examples: [{
      title: "CSS Optimization · Practice",
      code: cssDemo("<button class=\"save\">Save</button> <button class=\"cancel\">Cancel</button>")(".save, .cancel { padding: .5rem 1rem; border-radius: .4rem; }\n.save { background: navy; color: white; }"),
      result: "Dono buttons ka shape aur padding same hai. Sirf Save par navy treatment lagega.",
    }],
    quizzes: [
      { question: "Comma ka purpose?", options: ["Descendant match", "Pseudo state", "Selector list"], answer: 2, explanation: "Shared declarations har listed selector par lagte hain." },
      { question: "Optimization ke baad kya compare karo?", options: ["Rendered states aur measured size", "Sirf line count", "File ka naam"], answer: 0, explanation: "Behaviour aur delivery dono verify karne chahiye." },
      { question: "Sirf Save ka difference kahan?", options: ["Common selector", ".save rule", "Button text"], answer: 1, explanation: "Specific rule shared styles ko extend karta hai." },
    ],
  },
  {
    id: "css-tutorial-accessibility", title: "CSS Accessibility", level: "Intermediate",
    summary: "Focus, contrast aur non-color cues saath design karo.",
    content: [
      "Error sirf red border se dikhane par kuch readers meaning miss kar sakte hain. Visible error text aur associated instruction state ko samajhne mein madad karte hain.",
      "Invalid field ka label aur message rakho, phir CSS se border aur focus alag dikhao. Keyboard aur zoom par message aur focus ring dono check karo.",
    ],
    examples: [{
      title: "CSS Accessibility · Practice",
      code: cssDemo("<label>Email <input aria-invalid=\"true\" aria-describedby=\"err\"></label><p id=\"err\">Email mein @ jodo.</p>")("[aria-invalid=\"true\"] { border: 2px solid maroon; }\n:focus-visible { outline: 3px solid navy; outline-offset: 2px; }"),
      result: "Error message text mein padhega aur invalid field par border hogi. Keyboard focus ke liye alag outline milegi.",
    }],
    quizzes: [
      { question: "Message input se kaise juda?", options: ["aria-describedby", "border color", "outline-offset"], answer: 0, explanation: "Attribute message id refer karta hai." },
      { question: "State rang ke alawa kaise samajh aayi?", options: ["Margin", "Visible error text", "Font family"], answer: 1, explanation: "Text correction ka reason batata hai." },
      { question: "Focus ring ka offset kya hai?", options: ["3px", "0", "2px"], answer: 2, explanation: "outline-offset ring ko border se alag karta hai." },
    ],
  },
  {
    id: "css-tutorial-website-layout", title: "CSS Website Layout", level: "Intermediate",
    summary: "Header, main aur aside ko source order sambhaalte hue arrange karo.",
    content: [
      "Mobile par natural reading order aksar ek column hota hai. Wide screen par secondary information ke liye doosra column mil sakta hai.",
      "Default flow mein main pehle rakho. 45rem par grid enable karo aur remaining space ko 2:1 divide karo. Browser resize aur keyboard traversal se dono views check karo.",
    ],
    examples: [{
      title: "CSS Website Layout · Practice",
      code: cssDemo("<header>Club</header><div class=\"page\"><main><h1>Programme</h1></main><aside>Room A</aside></div>")(".page { display: grid; gap: 1rem; }\n@media (min-width: 45rem) { .page { grid-template-columns: 2fr 1fr; } }"),
      result: "Narrow screen par room neeche hai. Wide view mein main aur aside adjacent hain aur main ka flexible share bada hai.",
    }],
    quizzes: [
      { question: "Breakpoint se pehle kitne explicit columns?", options: ["Do", "Koi explicit columns nahi", "Teen"], answer: 1, explanation: "Default auto placement ek implicit column banati hai." },
      { question: "Main ka flexible share?", options: ["Ek hissa", "Fixed 2px", "Do hisse"], answer: 2, explanation: "2fr aur 1fr bachi jagah ratio mein baantte hain." },
      { question: "Reading order ka base kya hai?", options: ["HTML source order", "Column color", "Gap"], answer: 0, explanation: "Semantic source order sequential navigation ko guide karta hai." },
    ],
  },
]);
