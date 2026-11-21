import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const advancedTools = chapter("CSS Advanced", [
  {
    id: "css-advanced-image-centering", title: "CSS Image Centering", level: "Intermediate",
    summary: "Image aur uske box ko center karna alag kaam hain.",
    content: [
      "Block image ki constrained width ke saath auto inline margins use parent mein center karte hain. Fixed frame mein grid dono axes par center kar sakti hai.",
      "Frame ko explicit height aur grid alignment do. Image ka size badlo aur observe karo ki centre point same rehta hai.",
    ],
    examples: [{
      title: "CSS Image Centering · Practice",
      code: cssDemo("<div class=\"frame\"><img width=\"64\" src=\"/images/subjects/css.svg\" alt=\"CSS\"></div>")(".frame { display: grid; place-items: center; height: 8rem; background: ivory; }"),
      result: "Logo frame ke horizontal aur vertical beech mein hoga.",
    }],
    quizzes: [
      { question: "Dono axes kis se center hue?", options: ["text-align akela", "place-items: center", "margin-top: 0"], answer: 1, explanation: "Grid item alignment dono directions par hai." },
      { question: "Vertical centering nazar kyun aayi?", options: ["Alt CSS hai", "Image inline hai", "Frame mein extra height hai"], answer: 2, explanation: "Free space ke andar placement badalti hai." },
      { question: "Block image ko sirf horizontally center?", options: ["Limited width aur auto inline margins", "height auto akeli", "object-position hi"], answer: 0, explanation: "Margins outer box ko align karte hain." },
    ],
  },
  {
    id: "css-advanced-image-filters", title: "CSS Image Filters", level: "Intermediate",
    summary: "Image ki rendered appearance badlo bina original file edit kiye.",
    content: [
      "grayscale saturation hata sakta hai aur contrast light-dark difference badalta hai. Filter chain left se right apply hoti hai.",
      "Ek hi image ko original aur filtered roop mein side by side rakho. Grayscale ko zero karne par compare karo ki contrast effect ab bhi active hai.",
    ],
    examples: [{
      title: "CSS Image Filters · Practice",
      code: cssDemo("<img width=\"64\" src=\"/images/subjects/css.svg\" alt=\"Original CSS logo\"> <img class=\"print\" width=\"64\" src=\"/images/subjects/css.svg\" alt=\"Print preview\">")(".print { filter: grayscale(1) contrast(1.2); }"),
      result: "Sirf print preview grayscale aur enhanced contrast mein dikhega. Source SVG file wahi hai.",
    }],
    quizzes: [
      { question: "Poora grayscale value?", options: ["0", "1px", "1"], answer: 2, explanation: "Grayscale 1 poori conversion hai." },
      { question: "Original file ka kya hua?", options: ["Wahi rahi", "Permanently grayscale", "Delete"], answer: 0, explanation: "Filter paint stage mein lagta hai." },
      { question: "Functions ka order?", options: ["Hamesha alphabetical", "Left se right", "Random"], answer: 1, explanation: "Har filter previous result ko input leta hai." },
    ],
  },
  {
    id: "css-advanced-image-shapes", title: "CSS Image Shapes", level: "Intermediate",
    summary: "Text ko rectangular image box ke bajay shape ke ird-gird wrap karao.",
    content: [
      "shape-outside float ki wrapping boundary set karta hai. Visible crop chahiye to border-radius ya clip-path alag set karna padta hai.",
      "Circle float ko paragraph ke shuru mein rakho. shape-margin badhaakar text aur curve ka distance dekho. Float hataakar observe karo ki same wrapping effect gayab ho jaata hai.",
    ],
    examples: [{
      title: "CSS Image Shapes · Practice",
      code: cssDemo("<article><img src=\"/images/subjects/css.svg\" alt=\"CSS logo\">Is club mein hum har hafte rang, typography aur layout ki practice karte hain. Har student apni diary mein ek chhota design banata hai.</article>")("article { max-width: 18rem; }\nimg { float: left; width: 5rem; height: 5rem; border-radius: 50%; shape-outside: circle(50%); shape-margin: .4rem; }"),
      result: "Text float ke circular contour ke hisaab se wrap karega aur curve ke paas extra gap hoga.",
    }],
    quizzes: [
      { question: "Wrapping boundary ki property?", options: ["shape-outside", "border-radius akeli", "object-fit"], answer: 0, explanation: "Shape-outside text flow ki shape define karti hai." },
      { question: "Is example mein float kyun?", options: ["Image fetch ke liye", "Shape wrapping floated box par lagti hai", "Alt dikhane ke liye"], answer: 1, explanation: "Float text ko side mein flow karwata hai." },
      { question: "Extra contour gap?", options: ["line-height", "outline-offset", "shape-margin"], answer: 2, explanation: "Shape margin wrap boundary ko expand karta hai." },
    ],
  },
  {
    id: "css-advanced-object-fit", title: "CSS object-fit", level: "Intermediate",
    summary: "Fixed frame mein image ko stretch kiye bina fit karo.",
    content: [
      "contain poori image ko frame mein rakhta hai, cover frame ko bharne ke liye edges crop kar sakta hai. Box size aur image content ka size alag samjho.",
      "Same source ko do frames mein rakho. Non-square frame lo taaki contain ki khaali jagah aur cover ki cropping visibly compare ho.",
    ],
    examples: [{
      title: "CSS object-fit · Practice",
      code: cssDemo("<img class=\"all\" src=\"/images/subjects/html.svg\" alt=\"Poora logo\"><img class=\"crop\" src=\"/images/subjects/html.svg\" alt=\"Cropped logo\">")("img { width: 8rem; height: 4rem; background: ivory; }\n.all { object-fit: contain; } .crop { object-fit: cover; }"),
      result: "Pehle frame mein poora logo aur doosre mein edge crop ho sakta hai. Dono boxes ka outer size same hai.",
    }],
    quizzes: [
      { question: "Poora logo kis value se?", options: ["cover", "contain", "fill hamesha"], answer: 1, explanation: "Contain intrinsic proportions ke saath poora fit karta hai." },
      { question: "Empty space avoid karne ka option?", options: ["contain", "scale-down hamesha", "cover"], answer: 2, explanation: "Cover poora frame fill karta hai." },
      { question: "object-fit kis cheez ko size karta hai?", options: ["Replaced content", "Parent width", "Document height"], answer: 0, explanation: "Image box ke andar object fit badalta hai." },
    ],
  },
  {
    id: "css-advanced-object-position", title: "CSS object-position", level: "Intermediate",
    summary: "Cropped photo ka important hissa frame ke andar rakho.",
    content: [
      "object-fit:cover ke baad content frame se bada ho sakta hai. object-position bataata hai ki cropped content ka kaunsa side align hoga.",
      "Ek portrait ya square source ko wide frame mein cover karo. top aur bottom compare karo. Dono ka difference tab dikhega jab vertical direction mein crop ho raha ho.",
    ],
    examples: [{
      title: "CSS object-position · Practice",
      code: cssDemo("<img src=\"/images/subjects/html.svg\" alt=\"HTML logo ka upper crop\">")("img { width: 10rem; height: 3rem; object-fit: cover; object-position: center top; }"),
      result: "Content horizontally centred aur top-aligned hoga. Extra height ka lower hissa crop hoga.",
    }],
    quizzes: [
      { question: "Top priority kis value se?", options: ["center bottom", "right center", "center top"], answer: 2, explanation: "Doosri value vertical alignment hai." },
      { question: "Property outer image box ko move karti hai?", options: ["Nahi, content ko", "Haan, normal flow mein", "Parent ko"], answer: 0, explanation: "Object-position content ki placement set karta hai." },
      { question: "Crop dikhne ki zaroorat?", options: ["Alt blank ho", "Aspect ratios alag hon", "Border 1px ho"], answer: 1, explanation: "Cover mismatch ko crop karke fit karta hai." },
    ],
  },
  {
    id: "css-advanced-masking", title: "CSS Masking", level: "Intermediate",
    summary: "Mask ki opacity se element ke visible hisse tay karo.",
    content: [
      "Alpha mask ke opaque parts element dikhate hain aur transparent parts chhupaate hain. Gradient se soft fade bana sakte ho jahan clip-path aam taur par sharp boundary deta hai.",
      "Ek decorative strip par mask-image lagao. Black stop ko 25% se 75% karo aur compare karo ki solid visible region kitna lamba rehta hai.",
    ],
    examples: [{
      title: "CSS Masking · Practice",
      code: cssDemo("<div class=\"strip\" aria-hidden=\"true\"></div>")(".strip { height: 3rem; background: teal; mask-image: linear-gradient(to right, black 25%, transparent); }"),
      result: "Strip left par solid aur right ki taraf gradually invisible hogi. Mask color khud teal ko black nahi banata.",
    }],
    quizzes: [
      { question: "Opaque black mask kya karega?", options: ["Content dikhayega", "Content black karega", "Content chhupayega"], answer: 0, explanation: "Alpha mode mein opacity visibility control karti hai." },
      { question: "Soft fade kis se?", options: ["Binary cut akela", "Gradient mask", "Border width"], answer: 1, explanation: "Continuous alpha gradual visibility deti hai." },
      { question: "Layout space ka kya hoga?", options: ["Zero ho jaayegi", "Double hogi", "Bani rahegi"], answer: 2, explanation: "Mask painting ko affect karta hai." },
    ],
  },
  {
    id: "css-advanced-buttons", title: "CSS Buttons", level: "Intermediate",
    summary: "Button ke hover, focus aur disabled states ko ek saath design karo.",
    content: [
      "Action ke liye native button keyboard behaviour deta hai. Sirf gray styling se action disable nahi hota, actual disabled attribute bhi chahiye.",
      "Do buttons rakho aur disabled wale ko Tab se test karo. Enabled button ki focus ring aur border ki contrast check karo.",
    ],
    examples: [{
      title: "CSS Buttons · Practice",
      code: cssDemo("<button>Register</button> <button disabled>Sold out</button>")("button { padding: .6em 1em; background: navy; color: white; border: 0; border-radius: .4em; }\nbutton:disabled { background: #555; }\nbutton:focus-visible { outline: 3px solid teal; outline-offset: 2px; }"),
      result: "Register focus le sakta hai. Sold out muted dikhega aur native disabled state mein activate nahi hoga.",
    }],
    quizzes: [
      { question: "Action actually disable kisne kiya?", options: ["Gray color", "disabled attribute", "Border zero"], answer: 1, explanation: "HTML disabled interaction rokta hai." },
      { question: "Relative padding ki unit?", options: ["px", "fr", "em"], answer: 2, explanation: "Padding button ke font-size se scale hoti hai." },
      { question: "Focused enabled button ka cue?", options: ["Teal outline", "Gray background", "Disabled label"], answer: 0, explanation: "Focus-visible rule outline paint karta hai." },
    ],
  },
  {
    id: "css-advanced-pagination", title: "CSS Pagination", level: "Intermediate",
    summary: "Results ke pages ke beech navigation banao.",
    content: [
      "Har page number ka real href hone se destination share aur bookmark ho sakta hai. Current page ko visual style aur aria-current dono se identify karo.",
      "Nav ko label do aur current destination ko bold karo. Keyboard se har link activate karke query parameter dekho. Actual results dene ke liye page handler chahiye.",
    ],
    examples: [{
      title: "CSS Pagination · Practice",
      code: cssDemo("<nav aria-label=\"Results pages\"><a href=\"?page=1\">1</a><a href=\"?page=2\" aria-current=\"page\">2</a><a href=\"?page=3\">3</a></nav>")("nav { display: flex; gap: .4rem; }\na { padding: .5rem; }\n[aria-current=\"page\"] { font-weight: bold; border-bottom: 3px solid; }"),
      result: "Page 2 marked hoga. Link 3 current path par page=3 query kholega.",
    }],
    quizzes: [
      { question: "Current number kya hai?", options: ["1", "3", "2"], answer: 2, explanation: "aria-current page 2 par hai." },
      { question: "Real destination kis se milti hai?", options: ["href", "font-weight", "aria-label"], answer: 0, explanation: "Href navigable URL deta hai." },
      { question: "CSS kya actual next results fetch karegi?", options: ["Hamesha", "Nahi, handler chahiye", "Sirf bold par"], answer: 1, explanation: "Styling aur data retrieval alag operations hain." },
    ],
  },
  {
    id: "css-advanced-multiple-columns", title: "CSS Multiple Columns", level: "Intermediate",
    summary: "Ek continuous article ko newspaper jaise columns mein flow karao.",
    content: [
      "Multi-column layout text ko pehle ek column mein neeche aur phir agle mein rakhta hai. Grid mein independent cards arrange karna alag problem hai.",
      "Paragraphs ko columns container mein rakho aur gap do. Narrow viewport par count ek rakho. Source order same rehne se sequential reading ka relation bana rehta hai.",
    ],
    examples: [{
      title: "CSS Multiple Columns · Practice",
      code: cssDemo("<article><p>Club ki pehli class mein sabne ek seedha sketch banaya.</p><p>Doosri class mein wahi sketch rangon ke saath phir banaya.</p></article>")("article { column-gap: 2rem; }\n@media (min-width: 32rem) { article { column-count: 2; column-rule: 1px solid silver; } }"),
      result: "Wide view mein text do columns mein bahega. Gap mein patli line hogi aur narrow view ek column rahega.",
    }],
    quizzes: [
      { question: "Beech ki line?", options: ["column-rule", "border-bottom", "outline"], answer: 0, explanation: "Column rule gap mein paint hoti hai." },
      { question: "Continuous reading direction?", options: ["Row by row cells", "Ek column ke neeche, phir agla", "Random"], answer: 1, explanation: "Multi-column fragment flow aisa hai." },
      { question: "Do columns kab?", options: ["Sirf 32px", "Har viewport", "32rem aur upar"], answer: 2, explanation: "Min-width query layout switch karti hai." },
    ],
  },
  {
    id: "css-advanced-user-interface", title: "CSS User Interface", level: "Intermediate",
    summary: "Editing controls ko resize aur focus ke saath usable rakho.",
    content: [
      "Textarea ko vertically resize karna long response mein madad karta hai. Horizontal resizing layout tod sakti ho to direction constrain kar sakte ho.",
      "Textarea ki minimum height aur width bound set karo. Supporting desktop browser mein resize handle drag karo aur Tab se focus ring dekho.",
    ],
    examples: [{
      title: "CSS User Interface · Practice",
      code: cssDemo("<label>Feedback <textarea></textarea></label>")("textarea { display: block; width: min(100%, 20rem); box-sizing: border-box; min-height: 4rem; resize: vertical; overflow: auto; }\ntextarea:focus-visible { outline: 2px solid navy; }"),
      result: "Field ki height user badha sakta hai. Width parent aur 20rem mein se chhoti limit leti hai.",
    }],
    quizzes: [
      { question: "Resize ki allowed direction?", options: ["Horizontal", "Vertical", "Dono"], answer: 1, explanation: "resize vertical height adjustment deta hai." },
      { question: "Minimum height?", options: ["20rem", "100%", "4rem"], answer: 2, explanation: "min-height lower bound hai." },
      { question: "Width ko overflow se kya bachata hai?", options: ["min aur border-box", "Outline", "Label text"], answer: 0, explanation: "Smaller width aur inclusive sizing fit mein madad karte hain." },
    ],
  },
  {
    id: "css-advanced-variables", title: "CSS Variables", level: "Intermediate",
    summary: "Custom property se design value ko reusable naam do.",
    content: [
      "Double-hyphen property cascade aur aam taur par inheritance follow karti hai. var() use site par value resolve karta hai aur missing token ke liye fallback le sakta hai.",
      "Root par brand color do aur ek section mein override karo. Dono buttons ka rule same rakho aur dekho ki ancestry se final color badalta hai.",
    ],
    examples: [{
      title: "CSS Variables · Practice",
      code: cssDemo("<button>Library</button><section><button>Studio</button></section>")(":root { --brand: navy; }\nsection { --brand: maroon; }\nbutton { background: var(--brand, teal); color: white; }"),
      result: "Pehla button navy aur section ka button maroon hoga. Token missing ho to teal fallback use ho sakta hai.",
    }],
    quizzes: [
      { question: "Custom property ka prefix?", options: ["$", "@", "--"], answer: 2, explanation: "CSS variable names double hyphen se shuru hote hain." },
      { question: "Studio ka token kahan se?", options: ["Section override", "Root hi", "Fallback"], answer: 0, explanation: "Nearest inherited value maroon hai." },
      { question: "Missing token ka fallback?", options: ["White", "Teal", "Maroon"], answer: 1, explanation: "var ki doosri argument fallback hai." },
    ],
  },
  {
    id: "css-advanced-property", title: "CSS @property", level: "Intermediate",
    summary: "Custom property ke liye allowed type aur inheritance define karo.",
    content: [
      "Registered property browser ko syntax deti hai, isliye invalid typed value ko prescribed rules se handle kiya ja sakta hai aur compatible values ke beech interpolation mumkin hoti hai.",
      "Length token register karo, inheritance false rakho aur parent par use 30px do. Child par apni declaration na ho to uska initial-value inspect karo. Supporting browser mein computed padding compare karo.",
    ],
    examples: [{
      title: "CSS @property · Practice",
      code: cssDemo("<div class=\"parent\"><p>Inner note</p></div>")("@property --space { syntax: \"<length>\"; inherits: false; initial-value: 8px; }\n.parent { --space: 30px; }\np { padding: var(--space); background: ivory; }"),
      result: "Registration support hone par p ko 8px padding milegi. Parent ka 30px token child ko inherit nahi hua.",
    }],
    quizzes: [
      { question: "Allowed type?", options: ["Length", "Color", "URL"], answer: 0, explanation: "Syntax descriptor length declare karta hai." },
      { question: "Child ka default?", options: ["30px", "8px", "0px"], answer: 1, explanation: "Non-inherited registered token initial-value leta hai." },
      { question: "Parent token child tak chahiye to descriptor?", options: ["syntax: auto", "initial-value: inherit only", "inherits: true"], answer: 2, explanation: "Inheritance descriptor propagation control karta hai." },
    ],
  },
  {
    id: "css-advanced-box-sizing", title: "CSS Box Sizing", level: "Intermediate",
    summary: "Declared width mein padding aur border ka hisaab choose karo.",
    content: [
      "content-box mein ye extras width par add hote hain. border-box mein ye width ke andar aate hain aur content space kam hoti hai.",
      "Do cards ko same width, border aur padding do. Sirf box-sizing alag karo aur DevTools mein border-box width compare karo.",
    ],
    examples: [{
      title: "CSS Box Sizing · Practice",
      code: cssDemo("<p class=\"a\">Content</p><p class=\"b\">Border</p>")("p { width: 120px; padding: 10px; border: 2px solid; }\n.a { box-sizing: content-box; }\n.b { box-sizing: border-box; }"),
      result: "A ka outer width 144px aur B ka 120px hoga. B ke content ko 96px milenge.",
    }],
    quizzes: [
      { question: "A ka border box?", options: ["120px", "144px", "96px"], answer: 1, explanation: "120 + 20 + 4 hai." },
      { question: "B ka content box?", options: ["120px", "144px", "96px"], answer: 2, explanation: "120 se padding aur border ghataate hain." },
      { question: "Margin border-box width mein aata hai?", options: ["Nahi", "Hamesha", "Sirf px mein"], answer: 0, explanation: "Margin outer spacing hai." },
    ],
  },
  {
    id: "css-advanced-functions", title: "CSS Functions", level: "Intermediate",
    summary: "CSS functions declaration ko calculated ya structured value dete hain.",
    content: [
      "var token resolve karta hai, min compatible sizes compare karta hai aur rgb color banata hai. Function ka return expected property type se compatible hona chahiye.",
      "Token mein width limit rakho, phir use min ke andar do. Viewport ko narrow karo aur dekho kab 100% limit jeetti hai. Color ko rgb function se set karo.",
    ],
    examples: [{
      title: "CSS Functions · Practice",
      code: cssDemo("<div class=\"panel\">Workshop panel</div>")(".panel { --limit: 18rem; width: min(100%, var(--limit)); background: rgb(220 235 240); }"),
      result: "Panel available width aur 18rem mein se chhoti value lega. Background halka blue-gray hoga.",
    }],
    quizzes: [
      { question: "Nested var kya return karta hai?", options: ["100px", "Color", "18rem"], answer: 2, explanation: "Token value --limit se milti hai." },
      { question: "Parent 12rem ho to width?", options: ["12rem", "18rem", "30rem"], answer: 0, explanation: "min chhota candidate leta hai." },
      { question: "Color value kaunsa function deta hai?", options: ["minmax()", "rgb()", "counter()"], answer: 1, explanation: "RGB color channels se color banata hai." },
    ],
  },
  {
    id: "css-advanced-media-queries", title: "CSS Media Queries", level: "Intermediate",
    summary: "Environment ki condition match hone par rules activate karo.",
    content: [
      "Width ke alawa print aur reduced-motion preferences bhi query ho sakti hain. Base style ko functional rakho aur conditional rules se enhancement do.",
      "Screen par navigation rakho lekin print version mein navigation hide karo. Browser Print Preview mein check karo ki actual content aur heading ab bhi dikhte hain.",
    ],
    examples: [{
      title: "CSS Media Queries · Practice",
      code: cssDemo("<nav>Home · Lessons</nav><main><h1>Class notes</h1><p>Pencil saath lao.</p></main>")("main { max-width: 40rem; }\n@media print { nav { display: none; } main { max-width: none; } }"),
      result: "Screen par menu aur notes dono honge. Print preview mein sirf notes available page width lete hain.",
    }],
    quizzes: [
      { question: "Print condition ka syntax?", options: ["@media print", "@print-screen", ":print"], answer: 0, explanation: "Media type print output select karta hai." },
      { question: "Print mein kya hidden?", options: ["main", "nav", "h1"], answer: 1, explanation: "Conditional rule nav ko none karta hai." },
      { question: "Paper layout verify kahan?", options: ["Network headers", "Color picker", "Print Preview"], answer: 2, explanation: "Preview actual print styles apply karta hai." },
    ],
  },
]);
