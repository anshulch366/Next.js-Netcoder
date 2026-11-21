import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const flow = chapter("CSS Tutorial", [
  {
    id: "css-tutorial-icons", title: "CSS Icons", level: "Beginner",
    summary: "Icon ko label ke saath align karo.",
    content: [
      "Icon sirf decoration ho to assistive technology se chhupa sakte ho, kyunki paas ka text action samjhata hai. currentColor icon ko surrounding text ke rang se milata hai.",
      "Button mein ek chhota arrow aur visible Download label do. Button ka color badlo aur dekho ki arrow bhi usi rang mein aata hai.",
    ],
    examples: [{
      title: "CSS Icons · Practice",
      code: cssDemo("<button><span aria-hidden=\"true\">↓</span> Download</button>")("button { color: navy; }\nbutton span { border: 1px solid currentColor; padding-inline: .2em; }"),
      result: "Arrow ki border aur text navy honge. Button ka accessible naam Download rahega.",
    }],
    quizzes: [
      { question: "Border ka rang kahan se aata hai?", options: ["Background", "Computed color", "Font size"], answer: 1, explanation: "currentColor element ka text color leta hai." },
      { question: "aria-hidden kis par hai?", options: ["Poora button", "Download text", "Arrow"], answer: 2, explanation: "Decorative symbol duplicate announcement se bachta hai." },
      { question: "Action ka naam kaun deta hai?", options: ["Download label", "Navy border", "Padding"], answer: 0, explanation: "Visible text control ko naam deta hai." },
    ],
  },
  {
    id: "css-tutorial-links", title: "CSS Links", level: "Beginner",
    summary: "Navigation ko text ke beech pehchanne layak rakho.",
    content: [
      "Underline rang ke alawa bhi link ka signal hai. Hover aur keyboard focus alag interaction states hain, isliye dono test karo.",
      "Link ko underline do aur hover aur focus-visible par dark background lagao. Tab se link chuno aur Enter se destination check karo.",
    ],
    examples: [{
      title: "CSS Links · Practice",
      code: cssDemo("<a href=\"#fees\">Fees dekho</a><p id=\"fees\">Entry free hai.</p>")("a { color: navy; text-decoration: underline; }\na:hover, a:focus-visible { background: navy; color: white; }"),
      result: "Normal link underlined hai. Hover ya keyboard focus par white text navy background par dikhega.",
    }],
    quizzes: [
      { question: "Keyboard focus ke liye kaunsa selector?", options: ["a:hover", "a:visited", "a:focus-visible"], answer: 2, explanation: "Focus-visible keyboard navigation ke liye style deta hai." },
      { question: "Underline kyun rakhen?", options: ["Rang ke bina pehchan", "URL chhota karne ke liye", "Text bold karne ke liye"], answer: 0, explanation: "Decoration ek extra visual cue hai." },
      { question: "Click ka target kya hai?", options: ["navy class", "fees id", "White paragraph"], answer: 1, explanation: "href fragment matching id se judta hai." },
    ],
  },
  {
    id: "css-tutorial-lists", title: "CSS Lists", level: "Beginner",
    summary: "List markers ka roop badlo aur list ka meaning rakho.",
    content: [
      "Browser ul ko bullets aur ol ko numbers deta hai. list-style-type marker ka type aur marker pseudo-element uski appearance set karte hain.",
      "Square markers lagao aur sirf marker ka color badlo. Text ka rang compare karo taaki marker aur item body ki boundary saaf ho.",
    ],
    examples: [{
      title: "CSS Lists · Practice",
      code: cssDemo("<ul><li>Pencil</li><li>Kagaz</li></ul>")("ul { list-style-type: square; }\nli::marker { color: teal; }"),
      result: "Dono items ke aage teal squares honge. Item text apna normal rang rakhega.",
    }],
    quizzes: [
      { question: "Square shape kis se aayi?", options: ["list-style-type", "border-radius", "marker color"], answer: 0, explanation: "Type marker ka shape chunta hai." },
      { question: "Sirf bullet target kaise karoge?", options: ["li:hover", "li::marker", "ul::after"], answer: 1, explanation: "Marker pseudo-element list marker represent karta hai." },
      { question: "Numbered sequence ke liye HTML kya ho?", options: ["ul", "div", "ol"], answer: 2, explanation: "ol order ka meaning deta hai." },
    ],
  },
  {
    id: "css-tutorial-project-iv", title: "CSS Project IV", level: "Beginner",
    summary: "Ek resources menu banao jahan har item aasani se click ho.",
    content: [
      "List structure links ko group karta hai aur anchor par padding poori padded area ko clickable banati hai. Keyboard focus bhi nazar aana chahiye.",
      "Menu ke anchors ko inline-block do, phir padding aur focus outline lagao. Text ke turant baahar padded jagah par click karke hit area test karo.",
    ],
    examples: [{
      title: "CSS Project IV · Practice",
      code: cssDemo("<nav><ul><li><a href=\"#kit\">Kit list</a></li><li><a href=\"#time\">Timing</a></li></ul></nav><p id=\"kit\">Pencil</p><p id=\"time\">4 baje</p>")("nav ul { list-style: none; padding: 0; }\nnav a { display: inline-block; padding: .5rem 1rem; color: navy; }\nnav a:focus-visible { outline: 2px solid teal; }"),
      result: "Do padded links apni rows mein dikhenge. Tab se navy links par clear focus ring aayegi.",
    }],
    quizzes: [
      { question: "Padding anchor par kyun?", options: ["URL badalta hai", "Click area badhta hai", "li remove hota hai"], answer: 1, explanation: "Anchor ki padded box interactive hai." },
      { question: "Bullets kaise hate?", options: ["padding: 0 akela", "display: block", "list-style: none"], answer: 2, explanation: "List marker explicitly none hai." },
      { question: "Focus kaise test karoge?", options: ["Tab se links par jaakar", "Sirf click karke", "File rename karke"], answer: 0, explanation: "Keyboard navigation ring ki visibility dikhaati hai." },
    ],
  },
  {
    id: "css-tutorial-tables", title: "CSS Tables", level: "Beginner",
    summary: "Tabular data ki rows padhne mein aasaan banao.",
    content: [
      "Cell padding text ko edge se alag karti hai. Border collapse adjacent cells ke borders ko shared edge par resolve karta hai.",
      "Headings aur data ke liye same padding lagao. Collapse ko separate se badalkar border joints dekho. Data ka relation HTML th aur td se bana rehta hai.",
    ],
    examples: [{
      title: "CSS Tables · Practice",
      code: cssDemo("<table><caption>Timetable</caption><tr><th>Din</th><th>Room</th></tr><tr><td>Som</td><td>A</td></tr></table>")("table { border-collapse: collapse; }\nth, td { border: 1px solid gray; padding: .4rem; text-align: left; }"),
      result: "Cells ke beech single shared lines aur left-aligned labels aayenge.",
    }],
    quizzes: [
      { question: "Shared edges kaunsi property?", options: ["border-spacing akela", "outline", "border-collapse"], answer: 2, explanation: "Collapse adjacent borders ko resolve karta hai." },
      { question: "Cell ke andar space kis se?", options: ["padding", "Table margin", "Caption"], answer: 0, explanation: "Padding content ke aas-paas hoti hai." },
      { question: "Header ka meaning kaun deta hai?", options: ["Bold text akela", "th", "Left alignment"], answer: 1, explanation: "Markup table relationships batata hai." },
    ],
  },
  {
    id: "css-tutorial-display", title: "CSS Display", level: "Beginner",
    summary: "Element ka layout box aur uske children ka layout choose karo.",
    content: [
      "Block aam taur par nayi line leta hai, inline text ke flow mein aata hai aur display none subtree ko layout se hata deta hai.",
      "Do spans ko blocks banao aur ek extra hint ko none do. Hint ka display wapas block karke dekho ki uski jagah page mein phir ban jaati hai.",
    ],
    examples: [{
      title: "CSS Display · Practice",
      code: cssDemo("<span>Subah</span><span>Shaam</span><p class=\"hint\">Extra slot</p>")("span { display: block; }\n.hint { display: none; }"),
      result: "Subah aur Shaam alag lines par honge. Extra slot ke liye koi layout space nahi hogi.",
    }],
    quizzes: [
      { question: "Span nayi line par kyun?", options: ["display: block", "Default span block hai", "Text chhota hai"], answer: 0, explanation: "CSS ne outer display badla." },
      { question: "display none se jagah?", options: ["Height bachi rehti hai", "Hat jaati hai", "Sirf color badalta hai"], answer: 1, explanation: "Element layout box generate nahi karta." },
      { question: "Jagah rakhe par element chhupana ho?", options: ["display: none", "display: grid", "visibility: hidden"], answer: 2, explanation: "Visibility layout ko preserve karti hai." },
    ],
  },
  {
    id: "css-tutorial-max-width", title: "CSS Max-width", level: "Beginner",
    summary: "Container ko chhoti screen mein fit aur desktop par bounded rakho.",
    content: [
      "Fixed width screen se badi ho sakti hai. max-width upper bound deti hai jabki actual width available jagah se kam bhi ho sakti hai.",
      "Card ko width 100% aur max-width 32rem do. Browser ki width ghatao aur dekho ki card narrow screen ko follow karta hai aur wide screen par ruk jaata hai.",
    ],
    examples: [{
      title: "CSS Max-width · Practice",
      code: cssDemo("<article>Reading notes</article>")("article { width: 100%; max-width: 32rem; margin-inline: auto; background: ivory; }"),
      result: "Wide parent par centered card 32rem tak hoga. Chhote parent par card uski width tak simtega.",
    }],
    quizzes: [
      { question: "Maximum size kya hai?", options: ["100rem", "32rem", "32px"], answer: 1, explanation: "max-width upper limit hai." },
      { question: "Parent 20rem ho to card?", options: ["32rem", "52rem", "20rem"], answer: 2, explanation: "100% available width maximum se chhoti hai." },
      { question: "Horizontal centering kaise hui?", options: ["margin-inline: auto", "max-width akela", "Background"], answer: 0, explanation: "Free inline space auto margins mein bantti hai." },
    ],
  },
  {
    id: "css-tutorial-project-v", title: "CSS Project V", level: "Beginner",
    summary: "Ek narrow screen par scroll hone wala timetable banao.",
    content: [
      "Bahut columns squeeze karne par data padhna mushkil hota hai. Table ko minimum width aur wrapper ko horizontal scroll dene se baaki page fit rehta hai.",
      "Region ka naam do aur keyboard focus allow karo. Window ko table se chhota karke wrapper ke andar scroll karo. Wide screen par unnecessary scrollbar nahi aana chahiye.",
    ],
    examples: [{
      title: "CSS Project V · Practice",
      code: cssDemo("<div class=\"wrap\" role=\"region\" aria-label=\"Class timings\" tabindex=\"0\"><table><tr><th>Session</th><th>Din</th><th>Room</th></tr><tr><td>Sketch</td><td>Som</td><td>A</td></tr></table></div>")(".wrap { max-width: 100%; overflow-x: auto; }\ntable { min-width: 30rem; width: 100%; }\nth, td { padding: .5rem; text-align: left; }"),
      result: "30rem se chhote wrapper mein table horizontally scroll ho sakta hai. Page ke doosre sections ki width nahi badhni chahiye.",
    }],
    quizzes: [
      { question: "Scroll ka owner kaun?", options: ["Har th", "Body hi hamesha", "Wrapper"], answer: 2, explanation: "Overflow wrapper par set hai." },
      { question: "Table kyun sikudkar 20rem nahi hota?", options: ["min-width: 30rem", "padding .5rem", "role region"], answer: 0, explanation: "Minimum track ko readable rakhta hai." },
      { question: "tabindex 0 kyun diya?", options: ["Table sort karne ke liye", "Keyboard focus ke liye", "Width reset karne ke liye"], answer: 1, explanation: "Focusable region keyboard se operate kiya ja sakta hai." },
    ],
  },
  {
    id: "css-tutorial-position", title: "CSS Position", level: "Beginner",
    summary: "Normal flow aur positioned overlay ka farq samjho.",
    content: [
      "Relative element apni flow space rakhta hai aur absolute descendant ka containing block ban sakta hai. Absolute child normal flow se bahar hota hai.",
      "Card ko relative aur badge ko absolute karo. Card ke right aur top se badge ka gap naapkar dekho. Card par relative hataakar containing block ki dependency test karo.",
    ],
    examples: [{
      title: "CSS Position · Practice",
      code: cssDemo("<article>Class A <b>Naya</b></article>")("article { position: relative; padding: 2rem; background: ivory; }\nb { position: absolute; top: 4px; right: 6px; }"),
      result: "Badge card ke top-right par hoga. Badge ki height card ki auto height mein normal child ki tarah count nahi hogi.",
    }],
    quizzes: [
      { question: "Badge ka reference box?", options: ["Positioned article", "h1", "Document title"], answer: 0, explanation: "Nearest positioned ancestor containing block deta hai." },
      { question: "Kaunsa child normal flow se bahar hai?", options: ["article", "b", "Dono static hain"], answer: 1, explanation: "Absolute positioning badge ko out of flow karti hai." },
      { question: "Viewport ke saath tikne ke liye aam choice?", options: ["static", "inline", "fixed"], answer: 2, explanation: "Fixed positioning aam taur par viewport reference leti hai." },
    ],
  },
  {
    id: "css-tutorial-position-offsets", title: "CSS Position Offsets", level: "Beginner",
    summary: "Positioned box ke edges ko inset properties se control karo.",
    content: [
      "top, right, bottom aur left physical offsets hain. inset shorthand ka order margin ki tarah clockwise hai. Static element par ye offsets aam taur par positioning nahi karte.",
      "Parent ko relative rakho aur child ko absolute karke chaar offsets do. Child ki explicit dimensions na dene par opposing offsets available size tay karte hain.",
    ],
    examples: [{
      title: "CSS Position Offsets · Practice",
      code: cssDemo("<div class=\"frame\"><span>Preview</span></div>")(".frame { position: relative; height: 6rem; background: tan; }\n.frame span { position: absolute; inset: 8px 16px; background: ivory; }"),
      result: "Inner box top-bottom se 8px aur left-right se 16px andar rahega.",
    }],
    quizzes: [
      { question: "Left gap kitna?", options: ["8px", "16px", "24px"], answer: 1, explanation: "Do-value inset mein doosri value horizontal hai." },
      { question: "Insets kis ancestor se naapte hain?", options: ["title", "Span ke text se", "Relative frame"], answer: 2, explanation: "Frame containing block hai." },
      { question: "Sirf top gap badalna ho?", options: ["top", "padding-left", "z-index"], answer: 0, explanation: "Top positioned box ka physical upper offset hai." },
    ],
  },
  {
    id: "css-tutorial-z-index", title: "CSS Z-index", level: "Beginner",
    summary: "Overlap hone par painting order niyantrit karo.",
    content: [
      "Ek hi stacking context mein z-index wale positioned siblings ki higher layer aam taur par upar paint hoti hai. Nested stacking context ka child apne parent context ki boundary mein rehta hai.",
      "Do absolute labels overlap karo aur unke z-index swap karo. DOM order badle bina dekho ki overlap mein kaunsa rang upar aata hai.",
    ],
    examples: [{
      title: "CSS Z-index · Practice",
      code: cssDemo("<div class=\"stage\"><b>A</b><i>B</i></div>")(".stage { position: relative; height: 4rem; }\nb, i { position: absolute; padding: 1rem; }\nb { background: gold; z-index: 2; }\ni { left: 1rem; background: teal; z-index: 1; }"),
      result: "Overlap wali jagah par gold A ka box upar dikhega. Dono ek hi local stacking comparison mein hain.",
    }],
    quizzes: [
      { question: "Upar kaunsa box?", options: ["B", "Dono transparent", "A"], answer: 2, explanation: "2 ki layer 1 se upar hai." },
      { question: "z-index kya badalta hai?", options: ["Paint order", "Layout width", "DOM order"], answer: 0, explanation: "Stacking painter order ko control karta hai." },
      { question: "Nested child ka bahut bada index kis se limited hai?", options: ["Text length se", "Uske stacking context se", "Tag name se"], answer: 1, explanation: "Parent context ek unit ki tarah stack hota hai." },
    ],
  },
  {
    id: "css-tutorial-overflow", title: "CSS Overflow", level: "Beginner",
    summary: "Content box mein fit na aaye to uske saath kya ho, yeh decide karo.",
    content: [
      "auto overflow hone par scroll allow karta hai. hidden clip karta hai aur visible content ko boundary se baahar paint hone de sakta hai.",
      "Box ki height chhoti rakho aur lines badhao. auto aur hidden ka farq mouse aur keyboard se test karo taaki zaroori content reachable rahe.",
    ],
    examples: [{
      title: "CSS Overflow · Practice",
      code: cssDemo("<div class=\"log\" tabindex=\"0\">Line 1<br>Line 2<br>Line 3<br>Line 4</div>")(".log { height: 2.5rem; overflow: auto; border: 1px solid; }"),
      result: "Sab lines saath fit na hon to box ke andar scroll karke baaki text padha ja sakta hai.",
    }],
    quizzes: [
      { question: "Zaroorat par scroll kaunsi value?", options: ["auto", "visible", "clip"], answer: 0, explanation: "Auto overflow hone par scrolling enable karti hai." },
      { question: "Sirf vertical direction control?", options: ["overflow-x", "overflow-y", "text-overflow"], answer: 1, explanation: "Y axis vertical hai." },
      { question: "Content fit ho to auto ka kya fayda?", options: ["Hamesha double bar", "Text delete", "Scroll ki zaroorat nahi"], answer: 2, explanation: "Auto available size ke hisaab se behave karta hai." },
    ],
  },
  {
    id: "css-tutorial-float", title: "CSS Float", level: "Beginner",
    summary: "Image ke aas-paas paragraph text wrap karao.",
    content: [
      "Float ek side par baithta hai aur normal text lines apni available width adjust karti hain. Parent ko flow-root dene se woh floated child ki height contain kar sakta hai.",
      "Figure ki jagah ek colored initial ko left float karo aur right margin do. Paragraph ko lamba karo taaki lines float ke neeche phir full width leti dikh sakein.",
    ],
    examples: [{
      title: "CSS Float · Practice",
      code: cssDemo("<article><b>A</b>Art club ki kahani ek chhote kamre se shuru hui. Ab hum har hafte milkar naya sketch banate hain.</article>")("article { display: flow-root; max-width: 18rem; }\nb { float: left; font-size: 3rem; margin-right: .5rem; }"),
      result: "Pehli lines bade A ke right wrap hongi. A ki height ke baad lines poori available width le sakti hain.",
    }],
    quizzes: [
      { question: "Text kis side wrap hoga?", options: ["Sirf A ke upar", "A ke right", "Hamesha neeche"], answer: 1, explanation: "A left float hai." },
      { question: "Parent ko float contain karna ho?", options: ["text-align: left", "opacity: 1", "display: flow-root"], answer: 2, explanation: "Flow-root naya block formatting context banata hai." },
      { question: "Float ke baad block ko neeche shuru karna ho?", options: ["clear: both", "z-index: 2", "line-height: 1"], answer: 0, explanation: "Clear float ke saamne placement rokta hai." },
    ],
  },
  {
    id: "css-tutorial-inline-block", title: "CSS Inline-block", level: "Beginner",
    summary: "Text ki line mein rehkar size lene wala box banao.",
    content: [
      "Inline-block inline flow mein participate karta hai par width, height aur padding le sakta hai. Paas ke inline-block elements ke beech source whitespace gap de sakta hai.",
      "Do badges ko fixed width do. Window narrow karo aur dekho ki poora badge agali line par ja sakta hai. Vertical-align se line ke andar alignment adjust hoti hai.",
    ],
    examples: [{
      title: "CSS Inline-block · Practice",
      code: cssDemo("<span>AM</span> <span>PM</span>")("span { display: inline-block; width: 3rem; padding: .25rem; background: lavender; text-align: center; }"),
      result: "Dono badges space milne par ek line mein honge aur dono ki content width 3rem hogi.",
    }],
    quizzes: [
      { question: "Kaunsi value inline flow aur set width dono deti hai?", options: ["none", "contents", "inline-block"], answer: 2, explanation: "Inline-block atomic inline box banata hai." },
      { question: "Badges ke beech chhota gap kahan se aa sakta hai?", options: ["HTML whitespace", "Width property hi", "Font weight"], answer: 0, explanation: "Inline flow space character ko render karta hai." },
      { question: "Label ke andar text center kaise hua?", options: ["vertical-align", "text-align", "margin-top"], answer: 1, explanation: "Text-align inline content ko align karta hai." },
    ],
  },
  {
    id: "css-tutorial-align", title: "CSS Align", level: "Beginner",
    summary: "Text, block aur flex items ko align karne ke alag reference frames samjho.",
    content: [
      "text-align box ke andar inline content ko align karta hai. Constrained block ka margin-inline auto use beech mein laata hai. Flex axes ke liye container properties hoti hain.",
      "Neeche box aur uske text ko independent tareeke se center karo. Pehle text-align hatao aur phir auto margin hatao taaki dono effects alag dikh sakein.",
    ],
    examples: [{
      title: "CSS Align · Practice",
      code: cssDemo("<p class=\"label\">Room 2</p>")(".label { width: 8rem; margin-inline: auto; text-align: center; background: ivory; }"),
      result: "Box parent mein centered hai aur Room 2 box ke andar centered hai.",
    }],
    quizzes: [
      { question: "Box ko center kisne kiya?", options: ["Auto inline margins", "text-align", "Color"], answer: 0, explanation: "Bachi horizontal space margins mein banti hai." },
      { question: "Text ko center kisne kiya?", options: ["margin-inline", "text-align", "width"], answer: 1, explanation: "Inline content paragraph ke andar align hota hai." },
      { question: "Box poora parent le to auto margins ke liye kitni extra jagah?", options: ["Aadhi width", "8rem", "Zero"], answer: 2, explanation: "Unused horizontal space hi distribute hoti hai." },
    ],
  },
  {
    id: "css-tutorial-combinators", title: "CSS Combinators", level: "Beginner",
    summary: "Elements ka relationship selector mein likho.",
    content: [
      "Space kisi bhi depth ka descendant chunta hai, > direct child, + turant agla sibling aur ~ baad ke matching siblings chunta hai.",
      "Nav ke direct link aur nested link ko compare karo. Greater-than ko space se replace karo aur dekho ki nested link bhi rule le leta hai.",
    ],
    examples: [{
      title: "CSS Combinators · Practice",
      code: cssDemo("<nav><a href=\"#a\">Home</a><div><a href=\"#b\">Archive</a></div></nav>")("nav > a { border-bottom: 3px solid teal; }"),
      result: "Sirf Home ko border milega. Archive ka direct parent div hai.",
    }],
    quizzes: [
      { question: "Direct child ka symbol?", options: ["+", ">", "~"], answer: 1, explanation: "Greater-than ek level dekhta hai." },
      { question: "Nested Archive bhi match karna ho?", options: ["nav + a", "nav ~ a", "nav a"], answer: 2, explanation: "Descendant combinator kisi bhi depth par match karta hai." },
      { question: "Turant agla sibling kaunsa?", options: ["+", ">", "Space"], answer: 0, explanation: "Adjacent sibling combinator immediately following element dekhta hai." },
    ],
  },
  {
    id: "css-tutorial-pseudo-classes", title: "CSS Pseudo-classes", level: "Beginner",
    summary: "Element ki state ya tree mein position ke hisaab se style lagao.",
    content: [
      "Pseudo-class matching condition batati hai. Hover pointer par depend karta hai aur focus-visible keyboard interaction ko visible bana sakta hai.",
      "Button ko Tab se focus aur pointer se hover karo. Phir mouse hataakar dekho kaunsa state rule abhi match ho raha hai.",
    ],
    examples: [{
      title: "CSS Pseudo-classes · Practice",
      code: cssDemo("<button>Details</button>")("button:hover { background: lavender; }\nbutton:focus-visible { outline: 3px solid navy; }"),
      result: "Hover par lavender aur keyboard focus par navy ring milti hai. Dono conditions saath bhi match kar sakti hain.",
    }],
    quizzes: [
      { question: "State selector kis se shuru?", options: ["Hash", "Dot", "Single colon"], answer: 2, explanation: "Pseudo-class ka syntax :name hai." },
      { question: "Mouse ke bina relevant state?", options: [":focus-visible", ":hover hi", ":visited button"], answer: 0, explanation: "Keyboard focus visible styling le sakta hai." },
      { question: "Hover khatam hone par background rule?", options: ["Permanent save", "Match karna band", "Inline ban jaata hai"], answer: 1, explanation: "Pseudo-class current state par depend karti hai." },
    ],
  },
  {
    id: "css-tutorial-pseudo-elements", title: "CSS Pseudo-elements", level: "Beginner",
    summary: "Element ke ek hisse ko ya generated decorative box ko style do.",
    content: [
      "Double-colon syntax first-letter, before aur after jaise pseudo-elements ko identify karta hai. Essential message ko actual HTML mein rakho.",
      "Paragraph ka pehla letter bada karo aur tag ke aage decorative shape lagao. HTML inspect karo, shape ke liye alag span likhne ki zaroorat nahi thi.",
    ],
    examples: [{
      title: "CSS Pseudo-elements · Practice",
      code: cssDemo("<p>Notebook kholkar shuru karo.</p><span class=\"tag\">Open</span>")("p::first-letter { font-size: 2em; }\n.tag::before { content: \"\"; display: inline-block; width: .5em; height: .5em; background: teal; margin-right: .4em; }"),
      result: "N bada dikhega aur Open se pehle teal square paint hoga.",
    }],
    quizzes: [
      { question: "Pehle letter ka selector?", options: ["::first-letter", ":first-child", "::marker"], answer: 0, explanation: "First-letter text ka initial letter target karta hai." },
      { question: "Empty generated box ko kya chahiye?", options: ["href", "content: \"\"", "name"], answer: 1, explanation: "Before pseudo-element ko content generate karta hai." },
      { question: "Open shabd HTML mein kyun?", options: ["Color fixed rahe", "Box round ho", "Meaning accessible text rahe"], answer: 2, explanation: "Zaroori information generated decoration par depend nahi karti." },
    ],
  },
  {
    id: "css-tutorial-opacity", title: "CSS Opacity", level: "Beginner",
    summary: "Poore element ki transparency aur sirf background ki transparency ka farq dekho.",
    content: [
      "Opacity element aur uske children ko ek group ki tarah fade karti hai. Alpha color sirf us paint layer ko translucent bana sakta hai.",
      "Do badges compare karo. Pehle par opacity half aur doosre par half-alpha background do. Dono labels ka text dhyaan se dekho.",
    ],
    examples: [{
      title: "CSS Opacity · Practice",
      code: cssDemo("<p class=\"all\">Poora badge</p><p class=\"bg\">Sirf background</p>")(".all { background: teal; opacity: .5; }\n.bg { background: rgb(0 128 128 / 50%); }"),
      result: "Pehle badge ka text aur background dono faded honge. Doosre par text apni full opacity rakhega.",
    }],
    quizzes: [
      { question: "Child text bhi fade karna ho?", options: ["Sirf alpha background", "Parent opacity", "font-weight"], answer: 1, explanation: "Opacity group compositing par lagti hai." },
      { question: "0 opacity ka visual result?", options: ["Opaque", "Display none", "Transparent"], answer: 2, explanation: "Paint transparent hota hai par layout space reh sakti hai." },
      { question: "Sirf backdrop halka chahiye?", options: ["Alpha color", "Parent opacity zero", "Visibility hidden"], answer: 0, explanation: "Alpha us background color par hi lagta hai." },
    ],
  },
  {
    id: "css-tutorial-project-vi", title: "CSS Project VI", level: "Beginner",
    summary: "Photo card par readable status badge rakho.",
    content: [
      "Badge ko image ke upar rakhne ke liye positioned card chahiye aur text ko readable rakhne ke liye translucent background. Poore card ki opacity ghataane se label bhi fade ho jaayega.",
      "Demo mein gradient sample image ki jagah hai. Parent relative aur badge absolute karo. Window resize karke check karo ki badge card ke corner se hi anchored rahe.",
    ],
    examples: [{
      title: "CSS Project VI · Practice",
      code: cssDemo("<article class=\"photo\"><span>Registration open</span></article>")(".photo { position: relative; height: 9rem; background: linear-gradient(120deg, tan, teal); }\n.photo span { position: absolute; right: .5rem; bottom: .5rem; background: rgb(0 0 0 / 80%); color: white; padding: .4rem; }"),
      result: "White status lower-right par dark translucent strip mein hoga. Neeche ka gradient halka nazar aa sakta hai.",
    }],
    quizzes: [
      { question: "Badge kis corner mein?", options: ["Top left", "Center", "Bottom right"], answer: 2, explanation: "Bottom aur right offsets set hain." },
      { question: "Alpha sirf background mein kyun?", options: ["Label fully readable rahe", "Position fixed ho", "Gradient repeat ho"], answer: 0, explanation: "Element opacity text ko bhi fade karti." },
      { question: "Card ke saath anchor kaise bana?", options: ["Text color white", "Parent position relative", "Padding .4rem"], answer: 1, explanation: "Absolute badge ka containing block card hai." },
    ],
  },
]);
