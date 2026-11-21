import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const basics = chapter("CSS Tutorial", [
  {
    id: "css-tutorial-home", title: "CSS HOME", level: "Beginner",
    summary: "Apne pehle page ki heading ko rang do.",
    content: [
      "HTML heading ka matlab batata hai aur CSS uski presentation badalti hai. Ek rule se ek hi tarah ke kai elements ko style mil sakta hai.",
      "Example ko index.html mein save karke browser mein kholo. Teal ko purple karo, save aur refresh karo. Heading ka text wahi rehne par bhi uska rang badlega.",
    ],
    examples: [{
      title: "CSS HOME · Practice",
      code: cssDemo("<h1>Art club</h1><p>Sabka swagat hai.</p>")("h1 { color: teal; }"),
      result: "Art club teal dikhega. Paragraph apne default text color mein rahega.",
    }],
    quizzes: [
      { question: "Rule kis par laga?", options: ["h1", "p", "body"], answer: 0, explanation: "Selector h1 sirf heading ko match karta hai." },
      { question: "Text ka rang kis declaration se hai?", options: ["background: teal", "color: teal", "border: teal"], answer: 1, explanation: "color foreground text set karta hai." },
      { question: "Doosri h1 jodne par kya hoga?", options: ["Sirf pehli styled rahegi", "Paragraph bold hoga", "Woh bhi teal hogi"], answer: 2, explanation: "Type selector saare matching elements chunta hai." },
    ],
  },
  {
    id: "css-tutorial-introduction", title: "CSS Introduction", level: "Beginner",
    summary: "Ek stylesheet se poore page ka design consistent rakho.",
    content: [
      "Cascading Style Sheets mein browser matching rules ko milaakar har element ki final values nikalta hai. Content dobara likhe bina design badal sakte ho.",
      "Do alag paragraphs ko ek class do. Style block mein class ko target karo aur border ki width badlo. Dono notices ek rule share karte hain.",
    ],
    examples: [{
      title: "CSS Introduction · Practice",
      code: cssDemo("<p class=\"notice\">Gate A</p><p class=\"notice\">Gate B</p>")(".notice { border-left: 4px solid navy; padding-left: 8px; }"),
      result: "Dono paragraphs ke left mein navy line aur andar 8px gap dikhega.",
    }],
    quizzes: [
      { question: "Dono notices ko kya jodta hai?", options: ["Ek hi id", "notice class", "Text ka pehla shabd"], answer: 1, explanation: "Class kai elements share kar sakte hain." },
      { question: "Line moti karne ke liye kya badlo?", options: ["8px", "notice ka text", "4px"], answer: 2, explanation: "Border width 4px hai." },
      { question: "CSS edit se kya same rahega?", options: ["Notice ka HTML text", "Har pixel", "Border width zaroor"], answer: 0, explanation: "CSS presentation describe karti hai." },
    ],
  },
  {
    id: "css-tutorial-syntax", title: "CSS Syntax", level: "Beginner",
    summary: "Rule ko selector aur declaration mein padho.",
    content: [
      "Selector elements chunta hai aur braces ke andar har property apni value leti hai. Ek block mein kai independent changes rakh sakte ho.",
      "Property aur value ke beech colon aur declarations ke beech semicolon lagao. DevTools mein ek declaration untick karke doosri ka asar alag dekho.",
    ],
    examples: [{
      title: "CSS Syntax · Practice",
      code: cssDemo("<h2>Schedule</h2>")("h2 { color: navy; letter-spacing: 2px; }"),
      result: "Heading navy hogi aur letters ke beech extra spacing hogi.",
    }],
    quizzes: [
      { question: "Selector kaunsa hai?", options: ["navy", "2px", "h2"], answer: 2, explanation: "Braces se pehle selector hai." },
      { question: "Property aur value kya alag karta hai?", options: ["Colon", "Comma", "Dot"], answer: 0, explanation: "Declaration property colon value se banti hai." },
      { question: "Sirf spacing hataane par kya bachega?", options: ["Blank heading", "Navy color", "Doosra selector"], answer: 1, explanation: "color ek alag valid declaration hai." },
    ],
  },
  {
    id: "css-tutorial-selectors", title: "CSS Selectors", level: "Beginner",
    summary: "Type, class aur id se alag targets chuno.",
    content: [
      "Type selector element naam dekhta hai, dot class ko aur hash unique id ko match karta hai. Grouping se same rule multiple targets ko de sakte ho.",
      "Ek p ko note class aur doosre ko lead id do. Browser mein dekho ki p ka common rule dono ko milta hai aur specific selectors extra styling jodte hain.",
    ],
    examples: [{
      title: "CSS Selectors · Practice",
      code: cssDemo("<p class=\"note\">Pencil lao</p><p id=\"lead\">Kal subah milo</p>")("p { padding: 6px; }\n.note { color: teal; }\n#lead { font-weight: bold; }"),
      result: "Dono paragraphs padded hain. Pehla teal aur doosra bold hoga.",
    }],
    quizzes: [
      { question: "Class select karne ka prefix?", options: ["Dot", "Hash", "Colon"], answer: 0, explanation: ".note class se match karta hai." },
      { question: "Dono par kaunsa rule match hua?", options: ["#lead", "p", ".note"], answer: 1, explanation: "Dono paragraph elements hain." },
      { question: "Id selector kaunsa hai?", options: [".lead", "lead", "#lead"], answer: 2, explanation: "Hash ke baad id likhte hain." },
    ],
  },
  {
    id: "css-tutorial-how-to", title: "CSS How To", level: "Beginner",
    summary: "Inline, internal aur external styles ka scope samjho.",
    content: [
      "Inline style ek element ke attribute mein hoti hai, internal style page ke head mein aur external stylesheet kai pages share kar sakte hain.",
      "Neeche internal rule har p ko teal karta hai aur doosre p ka inline normal declaration us par maroon deta hai. Shared file banani ho to rule site.css mein rakho aur head mein <link rel=\"stylesheet\" href=\"site.css\"> lagao.",
    ],
    examples: [{
      title: "CSS How To · Practice",
      code: cssDemo("<p>Library</p><p style=\"color: maroon\">Lab</p>")("p { color: teal; }"),
      result: "Library teal aur Lab maroon hoga. Doosre element par competing normal author rules mein inline value jeetegi.",
    }],
    quizzes: [
      { question: "Kai pages ke common rules kahan rakhen?", options: ["Har p ka text", "Linked CSS file", "Har id ka naam"], answer: 1, explanation: "Shared stylesheet ek edit se sab linked pages badalti hai." },
      { question: "Internal rules kis tag mein?", options: ["link ke text mein", "script", "style"], answer: 2, explanation: "Style element CSS rules rakhta hai." },
      { question: "Lab ka rang kya hai?", options: ["Maroon", "Teal", "Inherited black"], answer: 0, explanation: "Inline declaration is normal stylesheet rule se upar hai." },
    ],
  },
  {
    id: "css-tutorial-comments", title: "CSS Comments", level: "Beginner",
    summary: "Rule ke peeche ka design decision note karo.",
    content: [
      "CSS parser slash-star aur star-slash ke beech ka text ignore karta hai. Isse maintainer ko reason milta hai aur ek declaration temporary band kar sakte ho.",
      "Neeche color comment ke andar hai. Markers hataakar reload karo aur dekho ki background ke saath text bhi change hota hai. Multiline comments ek doosre ke andar nest mat karo.",
    ],
    examples: [{
      title: "CSS Comments · Practice",
      code: cssDemo("<p class=\"alert\">Timing badli hai</p>")(".alert {\n  /* color: navy; */\n  background: ivory;\n}"),
      result: "Ivory background lagega. Commented navy declaration apply nahi hogi.",
    }],
    quizzes: [
      { question: "CSS comment ka start kya hai?", options: ["//", "<!--", "/*"], answer: 2, explanation: "Slash-star CSS comment shuru karta hai." },
      { question: "Abhi active declaration kaunsi hai?", options: ["background", "color", "Dono"], answer: 0, explanation: "Background markers ke bahar hai." },
      { question: "Sirf markers hataane par text kaisa hoga?", options: ["Ivory", "Navy", "Transparent"], answer: 1, explanation: "color phir valid declaration ban jaata hai." },
    ],
  },
  {
    id: "css-tutorial-errors", title: "CSS Errors", level: "Beginner",
    summary: "Galat declaration ko baaki rule se alag diagnose karo.",
    content: [
      "Browser aksar unknown property ya invalid value ko skip karta hai aur agle valid declaration se styling jaari rakhta hai. Missing brace ya semicolon ka asar zyada door tak ja sakta hai.",
      "Neeche rang ki property jaan-boojhkar galat likhi hai. DevTools Styles mein warning dekho, phir colour ko color karo aur actual text compare karo.",
    ],
    examples: [{
      title: "CSS Errors · Practice",
      code: cssDemo("<p>Workshop notice</p>")("p { colour: navy; background: ivory; }"),
      result: "Pehle sirf ivory background lagega. Spelling theek karne par text navy hoga.",
    }],
    quizzes: [
      { question: "Kaunsi spelling CSS samajhti hai?", options: ["color", "colour", "colr"], answer: 0, explanation: "Standard property ka naam color hai." },
      { question: "Valid background ka kya hoga?", options: ["Hamesha drop hoga", "Apply hoga", "Navy ho jaayega"], answer: 1, explanation: "Semicolon ke baad valid declaration alag parse hoti hai." },
      { question: "Ignored declaration kahan dekhoge?", options: ["Bookmarks", "Download list", "DevTools Styles"], answer: 2, explanation: "Styles pane matched aur invalid rules dikhata hai." },
    ],
  },
  {
    id: "css-tutorial-colors", title: "CSS Colors", level: "Beginner",
    summary: "Foreground aur background ke liye readable rang chuno.",
    content: [
      "Hex mein red, green aur blue channels ki pairs hoti hain. RGB inhi channels ko numbers mein batata hai. Text aur uske peeche ke rang ka difference readability tay karta hai.",
      "Neeche #003366 ko rgb(0, 51, 102) se replace karo. Phir sirf background badlo aur check karo ki dark text aasani se padha ja sake.",
    ],
    examples: [{
      title: "CSS Colors · Practice",
      code: cssDemo("<p>Reading room khula hai</p>")("p { color: #003366; background-color: ivory; }"),
      result: "Ivory par gahra neela text dikhega. Equivalent RGB value se appearance same rahegi.",
    }],
    quizzes: [
      { question: "Hex ki pehli pair kiski hai?", options: ["Blue", "Red", "Alpha"], answer: 1, explanation: "Six-digit hex ka order RRGGBB hai." },
      { question: "Text ke peeche rang kis se lagega?", options: ["color", "accent-color", "background-color"], answer: 2, explanation: "Background element ke box par paint hota hai." },
      { question: "#003366 mein blue decimal kitna hai?", options: ["102", "66", "51"], answer: 0, explanation: "Hex 66 ka decimal 102 hota hai." },
    ],
  },
  {
    id: "css-tutorial-backgrounds", title: "CSS Backgrounds", level: "Beginner",
    summary: "Box ke peeche color aur image ki painting control karo.",
    content: [
      "Background content ka hissa nahi hota. Isliye meaningful information text mein bhi do. Repeat, position aur size alag decisions hain.",
      "Ek chhota gradient tile banao aur use sirf horizontal direction mein repeat karo. Size ya repeat ko badal kar dekho ki pattern kis jagah tak pahunchta hai.",
    ],
    examples: [{
      title: "CSS Backgrounds · Practice",
      code: cssDemo("<p>Workshop pass</p>")("p { padding: 24px; background-color: ivory; background-image: linear-gradient(teal, navy); background-size: 12px 4px; background-repeat: repeat-x; }"),
      result: "Ivory box ke upar chaar pixel unchi colored strip repeat hogi. Text padding ke andar readable rahega.",
    }],
    quizzes: [
      { question: "repeat-x kis taraf hai?", options: ["Vertical", "Dono taraf", "Horizontal"], answer: 2, explanation: "x axis width ke saath hai." },
      { question: "Tile ki height kitni hai?", options: ["4px", "12px", "24px"], answer: 0, explanation: "background-size ki doosri value height hai." },
      { question: "Box ke baaki hisse ka rang?", options: ["Navy", "Ivory", "Teal"], answer: 1, explanation: "Background color image layer ke neeche paint hota hai." },
    ],
  },
  {
    id: "css-tutorial-project-i", title: "CSS Project I", level: "Beginner",
    summary: "Ek class notice design karo jo heading aur time ko nazar se alag kare.",
    content: [
      "Notice baar-baar publish hoga, isliye ek reusable class par background aur spacing rakho. Event ka asli naam aur waqt HTML mein rahe.",
      "Article ko class do aur sirf uske andar ki heading target karo. Doosra notice copy karo aur time badlo. Test karo ki ek rule dono notices ko same design deta hai.",
    ],
    examples: [{
      title: "CSS Project I · Practice",
      code: cssDemo("<article class=\"notice\"><h2>Sketch class</h2><p>Shanivaar, 4 baje</p></article>")(".notice { background: #eef8f5; padding: 1rem; }\n.notice h2 { color: #175849; margin-top: 0; }"),
      result: "Halka green card, gahri heading aur uske neeche class ka waqt dikhega.",
    }],
    quizzes: [
      { question: "Background kis box par hai?", options: ["Article", "Sirf h2", "Sirf p"], answer: 0, explanation: ".notice article se match karta hai." },
      { question: "Doosre card ko kya reuse karna hai?", options: ["Unique id", "notice class", "Bilkul wahi time"], answer: 1, explanation: "Class same style reuse karwati hai." },
      { question: ".notice h2 kisko chunta hai?", options: ["Har article", "Heading ka parent", "Notice ke andar heading"], answer: 2, explanation: "Space descendant relation deta hai." },
    ],
  },
  {
    id: "css-tutorial-borders", title: "CSS Borders", level: "Beginner",
    summary: "Box ki visible boundary banao.",
    content: [
      "Border ke liye width, style aur color set hote hain. Sirf width likhne par default style none ki wajah se line nazar nahi aati.",
      "Pehle all-side shorthand lagao, phir left side ko mota karo. Padding aur border ko alag rang ki jagah samajhkar inspect karo.",
    ],
    examples: [{
      title: "CSS Borders · Practice",
      code: cssDemo("<p>Entry pass</p>")("p { border: 2px solid teal; border-left-width: 8px; padding: 6px; }"),
      result: "Chaar taraf teal boundary hogi. Left edge 8px aur baaki edges 2px honge.",
    }],
    quizzes: [
      { question: "Line ka pattern kaunsi value hai?", options: ["teal", "solid", "2px"], answer: 1, explanation: "solid border-style hai." },
      { question: "Left edge ki final width?", options: ["2px", "6px", "8px"], answer: 2, explanation: "Baad ki longhand left width badalti hai." },
      { question: "Border ke andar gap kya deta hai?", options: ["padding", "margin", "outline-offset"], answer: 0, explanation: "Padding content aur border ke beech hai." },
    ],
  },
  {
    id: "css-tutorial-margins", title: "CSS Margins", level: "Beginner",
    summary: "Do boxes ke beech bahar ki jagah rakho.",
    content: [
      "Margin border ke bahar hota hai aur element ka background wahan paint nahi hota. Normal block flow mein kuch vertical margins collapse bhi kar sakte hain.",
      "Notice ki width set karo aur horizontal margins auto rakho. Parent zyada chauda ho to bachi horizontal space dono taraf bantti hai. Window chhoti karke difference dekho.",
    ],
    examples: [{
      title: "CSS Margins · Practice",
      code: cssDemo("<p class=\"notice\">Aaj ka notice</p>")(".notice { width: 60%; margin: 12px auto; background: ivory; }"),
      result: "Notice parent ki width ka 60% lekar beech mein baithega. Upar aur neeche 12px margin set hai.",
    }],
    quizzes: [
      { question: "auto yahan kin margins par hai?", options: ["Top aur bottom", "Chaaron", "Left aur right"], answer: 2, explanation: "Do-value shorthand mein doosri value horizontal hoti hai." },
      { question: "Margin mein box ka background dikhega?", options: ["Nahi", "Sirf left mein", "Hamesha"], answer: 0, explanation: "Background margin ke bahar paint nahi hota." },
      { question: "Available horizontal space ka kitna hissa width hai?", options: ["12%", "60%", "40px"], answer: 1, explanation: "Width parent ke hisaab se percentage leti hai." },
    ],
  },
  {
    id: "css-tutorial-padding", title: "CSS Padding", level: "Beginner",
    summary: "Text aur box ke edge ke beech saans lene ki jagah do.",
    content: [
      "Padding background ke andar hoti hai. Clickable button par padding badhaane se hit area bhi badhta hai.",
      "Button par do-value shorthand do. Sirf doosri value badhao aur dekho ki height par asar aaye bina width badhti hai.",
    ],
    examples: [{
      title: "CSS Padding · Practice",
      code: cssDemo("<button>Join class</button>")("button { padding: 8px 20px; border: 1px solid teal; background: ivory; }"),
      result: "Text ke upar-neeche 8px aur dono side 20px padding hogi.",
    }],
    quizzes: [
      { question: "Top padding kitni?", options: ["8px", "20px", "1px"], answer: 0, explanation: "Pehli value block ke top aur bottom par hai." },
      { question: "Hit area kyun badhta hai?", options: ["Margin click hota hai", "Padding button box ka hissa hai", "Font khud bada hota hai"], answer: 1, explanation: "Button ki boundary mein padding shaamil hai." },
      { question: "Sirf left padding badalni ho?", options: ["margin-left", "border-left", "padding-left"], answer: 2, explanation: "Longhand ek side par kaam karti hai." },
    ],
  },
  {
    id: "css-tutorial-height-width", title: "CSS Height / Width", level: "Beginner",
    summary: "Box ko size dete waqt content badhne ki gunjaish rakho.",
    content: [
      "Fixed height lamba paragraph aane par overflow kar sakti hai. min-height ek lower limit hai aur content ke saath box phir bhi badh sakta hai.",
      "Card ko parent ki aadhi width aur minimum height do. Zyada lines paste karo aur compare karo ki fixed height ki jagah minimum rakhne ka kya faayda hai.",
    ],
    examples: [{
      title: "CSS Height / Width · Practice",
      code: cssDemo("<div class=\"card\">Lesson notes</div>")(".card { width: 50%; min-height: 4rem; background: lavender; }"),
      result: "Box parent ki aadhi width lega aur kam se kam 4rem uncha hoga. Lamba content height badha sakta hai.",
    }],
    quizzes: [
      { question: "50% kis se niklega?", options: ["Screen height", "Containing block ki width", "Font weight"], answer: 1, explanation: "Width percentage containing block se resolve hoti hai." },
      { question: "Height ko kam se kam 4rem kaun rakhta hai?", options: ["max-height", "line-height", "min-height"], answer: 2, explanation: "Minimum lower bound hai." },
      { question: "Lambe content ke liye flexible choice?", options: ["min-height ke saath auto height", "height: 1px", "overflow: hidden hamesha"], answer: 0, explanation: "Box text ke saath expand kar sakta hai." },
    ],
  },
  {
    id: "css-tutorial-box-model", title: "CSS Box Model", level: "Beginner",
    summary: "Element ki total jagah content, padding, border aur margin se samjho.",
    content: [
      "Default content-box mein declared width sirf content ki hoti hai. Dono sides ki padding aur border jodne se visible box ki width milti hai.",
      "Card ka outer border width pehle calculate karo aur phir DevTools box model se milao. Margin jodne se surrounding space badhegi lekin border box ka measurement wahi rahega.",
    ],
    examples: [{
      title: "CSS Box Model · Practice",
      code: cssDemo("<div class=\"box\">Ticket</div>")(".box { box-sizing: content-box; width: 100px; padding: 10px; border: 2px solid navy; margin: 5px; }"),
      result: "Border se border tak 124px milenge. Horizontal margins shaamil karne par occupied width 134px hogi.",
    }],
    quizzes: [
      { question: "Content width kitni hai?", options: ["124px", "134px", "100px"], answer: 2, explanation: "Explicit content-box declared width ko content tak rakhta hai." },
      { question: "124 kaise mila?", options: ["100 + 20 + 4", "100 + 10 + 2", "100 + 10 + 4"], answer: 0, explanation: "Dono sides ki padding aur borders judte hain." },
      { question: "Margin visible box ko kitna chauda karta hai?", options: ["5px", "0px", "10px"], answer: 1, explanation: "Margin border box ke bahar hai." },
    ],
  },
  {
    id: "css-tutorial-project-ii", title: "CSS Project II", level: "Beginner",
    summary: "Ek ticket card ko exactly 240px jagah mein fit karo.",
    content: [
      "Ticket mein padding aur border bhi chahiye. Agar width mein dono ka hisaab na ho to cards ki row container se bahar nikal sakti hai.",
      "border-box chuno aur phir width, padding aur border do. Content width khud calculate karo. Padding ko 20px karne ke baad outer width dobara naapkar dekho.",
    ],
    examples: [{
      title: "CSS Project II · Practice",
      code: cssDemo("<article class=\"ticket\"><h2>Workshop pass</h2><p>Seat A12</p></article>")(".ticket { box-sizing: border-box; width: 240px; padding: 16px; border: 2px dashed teal; }"),
      result: "Outer ticket 240px aur content 204px chauda hoga. Dashed border se ticket ka edge pehchaan mein aayega.",
    }],
    quizzes: [
      { question: "Content width kya hai?", options: ["204px", "240px", "276px"], answer: 0, explanation: "240 mein se 32px padding aur 4px borders nikaalo." },
      { question: "Padding 20px karne par outer width?", options: ["248px", "240px", "232px"], answer: 1, explanation: "Declared width mein padding shaamil hai." },
      { question: "Ticket edge ka pattern kya hai?", options: ["Double", "Dotted", "Dashed"], answer: 2, explanation: "Shorthand ka style dashed hai." },
    ],
  },
  {
    id: "css-tutorial-outline", title: "CSS Outline", level: "Beginner",
    summary: "Keyboard focus ko layout hilaaye bina clearly dikhao.",
    content: [
      "Outline border ke bahar paint hota hai aur layout mein extra space reserve nahi karta. Focus ring se pata chalta hai agla keyboard action kahan lagega.",
      "Tab se button par focus lao. Outline-offset badhaakar ring aur border ke beech distance dekho. Focus style ko hataane se pehle visible replacement do.",
    ],
    examples: [{
      title: "CSS Outline · Practice",
      code: cssDemo("<button>Agla lesson</button>")("button:focus-visible { outline: 3px solid navy; outline-offset: 3px; }"),
      result: "Keyboard se focus par button ke bahar navy ring dikhegi. Saath ke controls apni jagah rahenge.",
    }],
    quizzes: [
      { question: "Ring kab lagti hai?", options: ["Har hover par", "focus-visible match par", "Sirf submit ke baad"], answer: 1, explanation: "Pseudo-class keyboard focus jaise relevant cases target karti hai." },
      { question: "Ring ka distance kaunsi property?", options: ["outline-color", "padding-top", "outline-offset"], answer: 2, explanation: "Offset border se outline ki doori hai." },
      { question: "Outline se layout width badhegi?", options: ["Nahi", "6px", "3px"], answer: 0, explanation: "Outline box sizing mein count nahi hoti." },
    ],
  },
  {
    id: "css-tutorial-text", title: "CSS Text", level: "Beginner",
    summary: "Paragraph ki reading ko alignment, line spacing aur decoration se control karo.",
    content: [
      "Lambi lines aur chipki hui baselines padhna mushkil banati hain. Unitless line-height font-size ke saath proportion mein badhti hai.",
      "Paragraph ko limited line length do aur line-height set karo. Font size badlo aur dekho ki line box bhi saath scale hota hai. Heading ko center rakhkar body ko normal reading alignment mein rakho.",
    ],
    examples: [{
      title: "CSS Text · Practice",
      code: cssDemo("<h2>Club diary</h2><p>Har hafte hum ek naya sketch banate hain aur uski kahani saath likhte hain.</p>")("h2 { text-align: center; }\np { max-width: 30ch; line-height: 1.5; }"),
      result: "Heading centered hogi. Paragraph chhoti lines mein wrap hoga aur lines ke beech comfortable gap hoga.",
    }],
    quizzes: [
      { question: "16px font par 1.5 line-height?", options: ["17.5px", "1.5px", "24px"], answer: 2, explanation: "Multiplier font-size se guna hota hai." },
      { question: "text-align kya center karta hai?", options: ["Inline content", "Block ka outer box", "Viewport"], answer: 0, explanation: "Alignment box ke andar text par lagta hai." },
      { question: "Line length limit kaunsa rule deta hai?", options: ["line-height", "max-width", "text-align"], answer: 1, explanation: "Maximum width wrapping ko influence karti hai." },
    ],
  },
  {
    id: "css-tutorial-fonts", title: "CSS Fonts", level: "Beginner",
    summary: "Font family, size aur weight ko alag control karo.",
    content: [
      "Browser family list ko order mein dekhta hai aur available font choose karta hai. Last mein generic family dene se missing font par readable fallback milta hai.",
      "Heading ko serif stack aur paragraph ko sans-serif do. Pehle font ko unavailable naam se badlo aur fallback dekho. Bold ke liye weight aur size ke liye rem use karo.",
    ],
    examples: [{
      title: "CSS Fonts · Practice",
      code: cssDemo("<h2>Reading club</h2><p>Sunday session</p>")("h2 { font-family: Georgia, serif; font-weight: 700; }\np { font-family: Arial, sans-serif; font-size: 1rem; }"),
      result: "Heading serif aur bold, paragraph sans-serif hoga. Actual face device par installed fonts par depend karega.",
    }],
    quizzes: [
      { question: "Georgia missing ho to kya use hoga?", options: ["Generic serif", "Hamesha Arial", "Text hidden"], answer: 0, explanation: "Family list agla candidate deti hai." },
      { question: "700 kya control karta hai?", options: ["Width", "Weight", "Font size"], answer: 1, explanation: "font-weight stroke weight choose karta hai." },
      { question: "rem kis par based hai?", options: ["Paragraph ki width", "Viewport height", "Root font size"], answer: 2, explanation: "rem root element ke font-size ka multiple hai." },
    ],
  },
  {
    id: "css-tutorial-project-iii", title: "CSS Project III", level: "Beginner",
    summary: "Reading excerpt ke liye typography design karo.",
    content: [
      "Title, excerpt aur author ko nazar se alag dikhna chahiye. Meaning HTML heading aur paragraphs se aata hai aur type scale us hierarchy ko dekhne mein madad karti hai.",
      "Ek article ki reading width limit karo. Title serif rakho aur byline ko smaller size do. Chhoti window aur browser zoom par check karo ki excerpt cut na ho.",
    ],
    examples: [{
      title: "CSS Project III · Practice",
      code: cssDemo("<article><h2>Subah ka bazaar</h2><p>Dukaanon ke khulne se pehle gali shaant thi.</p><p class=\"byline\">Meera</p></article>")("article { max-width: 42ch; line-height: 1.6; }\nh2 { font-family: Georgia, serif; }\n.byline { font-size: .875rem; }"),
      result: "Ek bounded reading column mein serif title aur chhoti byline dikhegi. Article ki height text ke saath badhegi.",
    }],
    quizzes: [
      { question: "Author ka size kaun badalta hai?", options: ["article max-width", ".byline", "h2"], answer: 1, explanation: "Class sirf author paragraph par hai." },
      { question: "42ch kya limit karta hai?", options: ["Lines ki sankhya", "Heading weight", "Column width"], answer: 2, explanation: "ch font ke zero glyph ki advance width par based hai." },
      { question: "Zoom test ka purpose?", options: ["Text wrap aur readability check karna", "Font install karna", "HTML rename karna"], answer: 0, explanation: "Zoom par available space aur apparent size badalte hain." },
    ],
  },
]);
