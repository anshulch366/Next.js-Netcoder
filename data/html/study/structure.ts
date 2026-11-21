import { chapter } from "../../resource-chapter";

export const structure = chapter("HTML Tutorial", [
  {
    id: "study-structure-html-links",
    title: "HTML Links",
    level: "Beginner",
    summary: "Pages, files aur ek hi page ke sections ko clickable raaste se jodo.",
    content: [
      "Anchor ka href destination batata hai. Poora https URL doosri site tak ja sakta hai, relative URL current document se resolve hota hai aur #fragment isi document ke element ko target karta hai.",
      "Lambi guide ke start mein contents link rakho aur destination heading par unique id do. Link text ko aisa rakho ki use akela padhkar bhi manzil samajh aaye.",
    ],
    reading: { title: "W3Schools · HTML Links", url: "https://www.w3schools.com/html/html_links.asp" },
    examples: [{
      title: "Fees section tak jump",
      code: "<a href=\"#fees\">Course ki fees dekho</a>\n<h2 id=\"fees\">Fees</h2>\n<p>Workshop free hai.</p>",
      result: "Link activate karne par URL mein #fees aata hai. Browser target ko view mein laata hai agar scroll ki jagah ho.",
    }],
    quizzes: [
      { question: "#fees kis se match hoga?", options: ["id=\"fees\"", "class=\"fees\"", "Heading ki rank"], answer: 0, explanation: "Fragment element ke id ko target karta hai." },
      { question: "Doosri site ke link mein kya de sakte hain?", options: ["Sirf #", "Absolute https URL", "Sirf filename ke initials"], answer: 1, explanation: "Absolute URL scheme aur host dono batata hai." },
      { question: "Kaunsa link text manzil saaf batata hai?", options: ["Yahan", "Click", "Course ki fees dekho"], answer: 2, explanation: "Pehla label context ke bina bhi destination batata hai." },
    ],
  },
  {
    id: "study-structure-html-images",
    title: "HTML Images",
    level: "Beginner",
    summary: "Photo load karo aur uski zaroori information text mein bhi do.",
    content: [
      "img ka src browser ko file laane ka address deta hai. alt us image ka matlab batata hai jab reader image dekh nahi sakta. Sirf decoration ke liye alt ki value khaali rakho. Meaningful photo ka alt uske context ke mutabik likho.",
      "Apni 400 by 300 photo poster.jpg naam se file ke paas rakho. width aur height browser ko loading se pehle aspect ratio batate hain. File rename karke dekho ki image unavailable hone par kaunsa text kaam aata hai.",
    ],
    reading: { title: "W3Schools · HTML Images", url: "https://www.w3schools.com/html/html_images.asp" },
    examples: [{
      title: "Workshop ki photo",
      code: "<img src=\"poster.jpg\" alt=\"Tara mitti ke bartan par neela rang laga rahi hai\" width=\"400\" height=\"300\">",
      result: "File milne par photo dikhegi. Assistive technology ko kaam ka description milega aur photo fail hone par alt fallback deta hai.",
    }],
    quizzes: [
      { question: "Photo file ka address kahan hai?", options: ["alt", "src", "height"], answer: 1, explanation: "Browser src se resource maangta hai." },
      { question: "Sirf decorative line ki image ka alt kya rakhen?", options: ["alt=\"image\"", "alt=\"important\"", "alt=\"\""], answer: 2, explanation: "Empty alternative decorative detail skip karne deta hai." },
      { question: "width aur height loading mein kaise madad karte hain?", options: ["Jagah reserve karne mein", "File compress karne mein", "Alt badalne mein"], answer: 0, explanation: "Dimensions browser ko pehle se proportions dete hain." },
    ],
  },
  {
    id: "study-structure-html-favicon",
    title: "HTML Favicon",
    level: "Beginner",
    summary: "Tab mein apni site ke naam ke saath chhota icon dikhao.",
    content: [
      "Kai tabs khule hon to favicon site ko nazar se pehchanne mein madad karta hai. Head mein link element document aur icon file ka sambandh batata hai.",
      "Ek square PNG ko icon.png naam se HTML file ke paas rakho. rel mein icon, href mein file ka path aur type mein uska format do. Purana icon cache mein ho to naya filename dekar link update karo.",
    ],
    reading: { title: "W3Schools · HTML Favicon", url: "https://www.w3schools.com/html/html_favicon.asp" },
    examples: [{
      title: "Tab ka icon",
      code: "<head>\n  <title>Art Club</title>\n  <link rel=\"icon\" type=\"image/png\" href=\"icon.png\">\n</head>",
      result: "File milne par supported browser Art Club tab ke paas chhota PNG dikha sakta hai. Page ke body mein photo add nahi hoti.",
    }],
    quizzes: [
      { question: "rel ki kaunsi value favicon batati hai?", options: ["stylesheet", "next", "icon"], answer: 2, explanation: "rel linked file ka role batata hai." },
      { question: "Icon file ka path kahan likha hai?", options: ["href", "title", "alt"], answer: 0, explanation: "link element href se file refer karta hai." },
      { question: "Icon ko page content mein badi photo banana ho to kya use karoge?", options: ["title", "img", "meta"], answer: 1, explanation: "img body ke andar visual content render karta hai." },
    ],
  },
  {
    id: "study-structure-html-page-title",
    title: "HTML Page Title",
    level: "Beginner",
    summary: "Tab, history aur bookmarks ke liye pehchanne layak naam likho.",
    content: [
      "Jab ek site ke teen pages khule hon to har tab par sirf site ka naam hona confusing hota hai. Head ka title document ko naam deta hai. Body ka h1 usi page ke reader ko screen par topic batata hai.",
      "Pehle specific page ka naam aur phir site ka naam rakho. Har page ke head mein ek meaningful title do. Browser tab dekhkar test karo ki schedule aur fees ke pages alag pehchane jaate hain.",
    ],
    reading: { title: "W3Schools · HTML Page Title", url: "https://www.w3schools.com/html/html_page_title.asp" },
    examples: [{
      title: "Schedule ki pehchan",
      code: "<head><title>Class schedule | Art Club</title></head>\n<body><h1>Is hafte ki classes</h1></body>",
      result: "Tab mein Class schedule aur Art Club dono naam aate hain. Page par reader ko Is hafte ki classes heading dikhti hai.",
    }],
    quizzes: [
      { question: "title element kahan jaata hai?", options: ["head", "footer", "h1"], answer: 0, explanation: "Document metadata head mein rehta hai." },
      { question: "Har page ko distinct title kyun do?", options: ["Images jaldi load hon", "Tabs ko alag pehchan sakein", "Link ka color badle"], answer: 1, explanation: "Title browser UI mein page ki identity deta hai." },
      { question: "Screen par main heading kis element se bani?", options: ["title", "head", "h1"], answer: 2, explanation: "h1 body ke visible content mein hai." },
    ],
  },
  {
    id: "study-structure-html-tables",
    title: "HTML Tables",
    level: "Beginner",
    summary: "Rows aur columns mein aise facts rakho jinka matlab dono directions se milta hai.",
    content: [
      "Timetable mein “4 baje” akela adhoora hai. Row se din aur column se activity pata chalti hai. table in relationships ko markup mein rakhta hai. caption dataset ka naam deta hai, tr row aur td value banata hai.",
      "Header ke liye th use karo. Column header ko scope=\"col\" aur row header ko scope=\"row\" do. Doosri row jodte waqt cells ko wahi order do taaki value sahi heading ke neeche aaye.",
    ],
    reading: { title: "W3Schools · HTML Tables", url: "https://www.w3schools.com/html/html_tables.asp" },
    examples: [{
      title: "Class timetable",
      code: "<table>\n  <caption>Art classes</caption>\n  <tr><th scope=\"col\">Din</th><th scope=\"col\">Samay</th></tr>\n  <tr><th scope=\"row\">Somvaar</th><td>4 baje</td></tr>\n</table>",
      result: "Caption ke neeche do columns bante hain. 4 baje wali value Samay column aur Somvaar row se judi hai.",
    }],
    quizzes: [
      { question: "Ek poori row kis tag se banti hai?", options: ["td", "tr", "th"], answer: 1, explanation: "tr row ke cells ko group karta hai." },
      { question: "Somvaar wale th ka scope kya hai?", options: ["col", "table", "row"], answer: 2, explanation: "Yeh apni row ko label karta hai." },
      { question: "Poore timetable ka naam kahan doge?", options: ["caption", "Har td mein", "colspan mein"], answer: 0, explanation: "Caption dataset ko ek visible title deta hai." },
    ],
  },
  {
    id: "study-structure-html-lists",
    title: "HTML Lists",
    level: "Beginner",
    summary: "Items ki relationship ke hisaab se unordered, ordered ya description list banao.",
    content: [
      "Shopping items ka order badal sakta hai, recipe ke steps ka order badalne se result badal sakta hai. ul pehle case aur ol doosre case ke liye hai. Dono mein har item li hota hai. Term aur definition ke liye dl mein dt aur dd aate hain.",
      "Pehle materials aur steps ko alag karo. Ek naya step list ke beech insert karo aur dekho numbering browser khud adjust karta hai. Numbers ko item ke text mein likhne ki zaroorat nahi hoti.",
    ],
    reading: { title: "W3Schools · HTML Lists", url: "https://www.w3schools.com/html/html_lists.asp" },
    examples: [{
      title: "Sketch ki taiyari",
      code: "<ul><li>Pencil</li><li>Kagaz</li></ul>\n<ol><li>Outline banao</li><li>Shade bharo</li></ol>\n<dl><dt>Outline</dt><dd>Shape ki bahari rekha</dd></dl>",
      result: "Materials bullet list bante hain, steps numbered hote hain aur Outline ki definition uske term ke baad milti hai.",
    }],
    quizzes: [
      { question: "Steps ki sequence kaunsi list dikhati hai?", options: ["ul", "dl", "ol"], answer: 2, explanation: "Ordered list sequence ko meaningful banati hai." },
      { question: "Definition ka text kahan likhte hain?", options: ["dd", "dt", "li"], answer: 0, explanation: "dt term hai aur dd uski description hai." },
      { question: "Beech mein step add karne par numbering kaun sambhalega?", options: ["Har li ka title", "Browser", "Doctype"], answer: 1, explanation: "Ordered list ka default counter items ko number deta hai." },
    ],
  },
  {
    id: "study-structure-html-project-iii",
    title: "HTML Project III",
    level: "Beginner",
    summary: "Hobbies page banao jahan reader interests aur practice routine dono dekh sake.",
    content: [
      "Hobbies naam ki inventory hai, practice routine ek sequence hai. Dono par ek hi list type lagaane se yeh farq kho jaata hai. Sections ko headings dene se reader seedha apni pasand ke hisse tak pahunchta hai.",
      "Body mein neeche ka markup rakho. Apni do hobbies aur practice ke teen steps likho. Naya step beech mein insert karke check karo ki routine ki numbering aur hobbies ke bullets sahi rehte hain.",
    ],
    reading: { title: "W3Schools · HTML Project III", url: "https://www.w3schools.com/html/html_project_hobbies.php" },
    examples: [{
      title: "Mera hobby notebook",
      code: "<h1>Meri hobbies</h1>\n<h2>Pasand</h2>\n<ul><li>Sketching</li><li>Cycling</li></ul>\n<h2>Sketch routine</h2>\n<ol><li>Object chuno</li><li>Outline banao</li><li>Shadows bharo</li></ol>",
      result: "Pasand ke neeche do bullets aur routine ke neeche teen numbered steps dikhenge. Dono section headings ki rank barabar hai.",
    }],
    quizzes: [
      { question: "Cycling ko kis list mein jodoge?", options: ["Pasand ki ul", "Routine ki ol", "Nayi dl"], answer: 0, explanation: "Cycling doosri independent hobby hai." },
      { question: "Shadows se pehle shading practice add karne par Shadows ka number kya hoga?", options: ["3", "4", "2"], answer: 1, explanation: "Naya li pehle insert hone se aakhri item ek position aage badhta hai." },
      { question: "Pasand aur Sketch routine h2 kyun hain?", options: ["Dono clickable hain", "Dono paragraphs hain", "Dono page ke sibling sections hain"], answer: 2, explanation: "Dono h1 ke neeche same hierarchy level par hain." },
    ],
  },
  {
    id: "study-structure-html-block-inline",
    title: "HTML Block & Inline",
    level: "Beginner",
    summary: "Normal flow mein box nayi line leta hai ya sentence ke andar rehta hai, ise dekho.",
    content: [
      "Default styles mein paragraph jaisa block available width leta hai aur nayi line par shuru hota hai. span jaisa inline element text ke flow mein jitni jagah chahiye utni leta hai. CSS display se visual behaviour badal sakta hai.",
      "Ek paragraph mein ek hi word ko span se wrap karke color do. Uske baad doosra paragraph likho. Browser ki width kam karke dekho ki inline text wrap hota hai aur paragraph ki apni boundary rehti hai.",
    ],
    reading: { title: "W3Schools · HTML Block & Inline", url: "https://www.w3schools.com/html/html_blocks.asp" },
    examples: [{
      title: "Sentence ke beech highlight",
      code: "<p>Gate <span style=\"color: teal\">A</span> se aao.</p>\n<p>Pass dikhao.</p>",
      result: "A ka rang badlega aur woh sentence ki line mein rahega. Pass dikhao apne block mein shuru hoga.",
    }],
    quizzes: [
      { question: "Kaunsa element default mein inline hai?", options: ["p", "span", "div"], answer: 1, explanation: "span text ke normal inline flow mein hota hai." },
      { question: "Doosra message nayi line par kyun hai?", options: ["teal color ke kaaran", "A capital hone se", "Woh alag p hai"], answer: 2, explanation: "Paragraph ka default display block hai." },
      { question: "Visual flow badalne wali CSS property kya hai?", options: ["display", "lang", "alt"], answer: 0, explanation: "display layout boxes ka behaviour set karta hai." },
    ],
  },
  {
    id: "study-structure-html-div",
    title: "HTML Div",
    level: "Beginner",
    summary: "Jab kai elements ko ek saath style ya arrange karna ho to wrapper banao.",
    content: [
      "div ek generic container hai. Card ke heading aur price ko ek border dena ho to dono ko ek div mein group kar sakte ho. Jahan main ya nav jaisa specific role fit ho, us element se reader ko zyada information milti hai.",
      "Wrapper par border aur padding lagao. Child paragraphs apni alag lines par rehte hain par parent ki ek hi boundary hoti hai. Do cards chahiye hon to poora wrapper repeat karo.",
    ],
    reading: { title: "W3Schools · HTML Div", url: "https://www.w3schools.com/html/html_div.asp" },
    examples: [{
      title: "Ticket details ka wrapper",
      code: "<div style=\"border: 1px solid gray; padding: 12px\">\n  <h2>Evening pass</h2>\n  <p>Entry 5 baje</p>\n</div>",
      result: "Ek border dono lines ko gherega. Border ko sirf p par lagane se heading box ke bahar rahegi.",
    }],
    quizzes: [
      { question: "Ek border dono hisson ko kaise gherega?", options: ["Sirf h2 ko style do", "p ka text capital karo", "Common parent ko style do"], answer: 2, explanation: "Parent box apne dono children ko contain karta hai." },
      { question: "div ka built-in specific meaning kya hai?", options: ["Generic grouping", "Navigation landmark", "Page title"], answer: 0, explanation: "div apne aap ek specific semantic role describe nahi karta." },
      { question: "Card repeat karte waqt kya copy karoge?", options: ["Sirf closing tag", "Poora wrapper aur children", "Sirf style ki value"], answer: 1, explanation: "Har card ko apna container milega." },
    ],
  },
  {
    id: "study-structure-html-classes",
    title: "HTML Classes",
    level: "Beginner",
    summary: "Ek reusable naam se kai elements ko ek saath style karo.",
    content: [
      "Class ek label hai jo alag elements share kar sakte hain. Ek element par kai classes bhi lag sakti hain. Isse base style aur special state alag rakhe ja sakte hain, jaise har tag par padding aur sirf open tag par green text.",
      "HTML mein class names spaces se alag karo. CSS mein har class ke pehle dot lagao. Doosre label par open jodkar dekho ki base style ko dobara likhe bina rang badalta hai.",
    ],
    reading: { title: "W3Schools · HTML Classes", url: "https://www.w3schools.com/html/html_classes.asp" },
    examples: [{
      title: "Base aur state class",
      code: "<style>.tag { padding: 4px; } .open { color: green; }</style>\n<span class=\"tag open\">Khula</span>\n<span class=\"tag\">Band</span>",
      result: "Dono labels par padding hai. Sirf Khula par open class ka green color bhi lagega.",
    }],
    quizzes: [
      { question: "Do classes kaise likhoge?", options: ["class=\"tag open\"", "class=\".tag.open\"", "class=\"tag,open\""], answer: 0, explanation: "HTML class list whitespace se split hoti hai." },
      { question: "CSS mein class selector kya hai?", options: ["#open", ".open", "@open"], answer: 1, explanation: "Dot class name ko select karta hai." },
      { question: "Band ko green karne ke liye kya jodoge?", options: ["Naya doctype", "id=\"green\"", "Uski class list mein open"], answer: 2, explanation: "Existing .open rule us par bhi match ho jayega." },
    ],
  },
  {
    id: "study-structure-html-id",
    title: "HTML Id",
    level: "Beginner",
    summary: "Ek specific element ko fragment, label ya script ke liye naam do.",
    content: [
      "id ka value document mein unique hona chahiye. Yeh ek exact target deta hai. Fragment link # ke baad id se milta hai aur CSS mein bhi # se id select hota hai. Repeated cards ki common styling ke liye class use karo.",
      "Contents link mein #room do aur target heading mein id=\"room\". Dono spellings same rakho. Heading ka visible text badalkar dekho ki id wahi hone par link kaam karta rahega.",
    ],
    reading: { title: "W3Schools · HTML Id", url: "https://www.w3schools.com/html/html_id.asp" },
    examples: [{
      title: "Room details ka target",
      code: "<a href=\"#room\">Room dekho</a>\n<h2 id=\"room\">Art studio</h2>",
      result: "Room dekho activate karne par browser Art studio heading ko target karta hai. Target naam heading ke visible text se alag ho sakta hai.",
    }],
    quizzes: [
      { question: "Ek document mein id=\"room\" kitni baar honi chahiye?", options: ["Har heading par", "Ek baar", "Har paragraph mein"], answer: 1, explanation: "Unique value se target unambiguous rehta hai." },
      { question: "href mein id se pehle kya lagta hai?", options: [".", "@", "#"], answer: 2, explanation: "Hash URL ka fragment shuru karta hai." },
      { question: "Heading ka text badal gaya, id wahi hai. Link ka kya hoga?", options: ["Wahi target milega", "Link disabled hoga", "Page title badlega"], answer: 0, explanation: "Fragment id match karta hai, text nahi." },
    ],
  },
  {
    id: "study-structure-html-project-iv",
    title: "HTML Project IV",
    level: "Beginner",
    summary: "Reusable profile card banao aur ek particular member ka direct link do.",
    content: [
      "Directory mein har profile ka design ek jaisa ho sakta hai, lekin “Meera ki profile” link ko sirf ek card chahiye. Common class aur unique id ki yeh do alag zarooratein hain.",
      "Profile ko article mein rakho. Shared class par border lagao aur pehle card ko meera id do. Doosra member add karte waqt class repeat karo aur uski id badlo. Fragment link se sahi member tak jump test karo.",
    ],
    reading: { title: "W3Schools · HTML Project IV", url: "https://www.w3schools.com/html/html_project_card.php" },
    examples: [{
      title: "Member directory card",
      code: "<style>.member { padding: 1rem; border: 1px solid teal; }</style>\n<a href=\"#meera\">Meera ki profile</a>\n<article class=\"member\" id=\"meera\">\n  <h2>Meera</h2><p>Sketch club mentor</p>\n</article>",
      result: "Link ek specific card tak le jaata hai. Card ka border aur spacing member class se aata hai.",
    }],
    quizzes: [
      { question: "Doosre member ke liye kya reuse karoge?", options: ["meera id", "Wahi naam", "member class"], answer: 2, explanation: "Class shared presentation ka hook hai." },
      { question: "#meera ka destination kya hai?", options: ["Profile article", "Style block", "Page ka tab"], answer: 0, explanation: "Article par matching id maujood hai." },
      { question: "Mentor ka role kis jagah edit karoge?", options: ["href mein", "Card ke paragraph mein", "CSS selector mein"], answer: 1, explanation: "Description article ka visible content hai." },
    ],
  },
  {
    id: "study-structure-html-buttons",
    title: "HTML Buttons",
    level: "Beginner",
    summary: "Action ke liye button banao aur form mein uska type saaf likho.",
    content: [
      "Button keyboard aur pointer dono se activate hota hai. Form ke andar submit button form bhejta hai, reset initial values wapas rakhta hai aur type=\"button\" ko apna action script se dena padta hai.",
      "Search form mein pehle input badlo. Reset dabakar initial value dekho aur submit dabakar address bar ka query string dekho. Button ka label action bataye taaki reader pehle se samajh sake kya hoga.",
    ],
    reading: { title: "W3Schools · HTML Buttons", url: "https://www.w3schools.com/html/html_buttons.asp" },
    examples: [{
      title: "Search aur reset",
      code: "<form method=\"get\">\n  <label>Topic <input name=\"q\" value=\"HTML\"></label>\n  <button type=\"submit\">Search</button>\n  <button type=\"reset\">Pehli value lao</button>\n</form>",
      result: "Reset input ko HTML par lauta dega. Search current page ko q ke saath request karega. Actual search results dena server ka kaam hai.",
    }],
    quizzes: [
      { question: "Reset ke baad input mein kya aayega?", options: ["HTML", "Hamesha blank", "q"], answer: 0, explanation: "Reset default value restore karta hai." },
      { question: "Script se panel kholne wale form button ka type kya rakho?", options: ["submit", "button", "reset"], answer: 1, explanation: "type button ke paas default submit action nahi hota." },
      { question: "GET submit mein q kahan milega?", options: ["Doctype mein", "Button ki class mein", "URL query mein"], answer: 2, explanation: "Named input ka value query parameter banta hai." },
    ],
  },
  {
    id: "study-structure-html-iframes",
    title: "HTML Iframes",
    level: "Beginner",
    summary: "Ek document ke andar doosre document ki apni window dikhao.",
    content: [
      "iframe ek separate browsing context banata hai. Uske andar ka page apna document hota hai. Schedule, map ya demo embed karte waqt title se assistive technology ko frame ka purpose batana chahiye.",
      "Local demo mein srcdoc se chhota document seedhe do. Alag file ho to src mein uska URL rakho. Width aur height frame ki jagah control karte hain. External site ki embedding policy decide kar sakti hai ki woh frame mein khulegi ya nahi.",
    ],
    reading: { title: "W3Schools · HTML Iframes", url: "https://www.w3schools.com/html/html_iframe.asp" },
    examples: [{
      title: "Page ke andar sample notice",
      code: "<iframe title=\"Notice ka preview\" width=\"300\" height=\"100\"\n  srcdoc=\"<p>Workshop kal hai.</p>\"></iframe>",
      result: "Parent page mein ek chhota frame banta hai. Workshop wala paragraph uske apne document mein render hota hai.",
    }],
    quizzes: [
      { question: "Inline document ka attribute kya hai?", options: ["srcset", "srcdoc", "action"], answer: 1, explanation: "srcdoc frame ka HTML source seedha leta hai." },
      { question: "Frame ka purpose kis se bataya?", options: ["width", "height", "title"], answer: 2, explanation: "Descriptive title frame ko accessible naam deta hai." },
      { question: "External HTML file load karne ke liye kya doge?", options: ["src URL", "alt URL", "for id"], answer: 0, explanation: "src embedded document ka address hai." },
    ],
  },
  {
    id: "study-structure-html-javascript",
    title: "HTML JavaScript",
    level: "Beginner",
    summary: "User ke action par page ka content badalne ke liye script jodo.",
    content: [
      "HTML starting structure deta hai. JavaScript DOM se element chun sakti hai, click event sun sakti hai aur us element ka text badal sakti hai. Isse har chhoti interaction ke liye naya page load karna zaroori nahi hota.",
      "Pehle button aur result paragraph rakho, phir unke baad script rakho taaki elements lookup ke samay maujood hon. Click listener mein textContent set karo. External script ko head mein defer ke saath bhi load kar sakte ho.",
    ],
    reading: { title: "W3Schools · HTML JavaScript", url: "https://www.w3schools.com/html/html_scripts.asp" },
    examples: [{
      title: "Button se status badlo",
      code: "<button type=\"button\" id=\"join\">Join</button>\n<p id=\"status\">Jagah khaali hai.</p>\n<script>\n  document.querySelector(\"#join\").addEventListener(\"click\", () => {\n    document.querySelector(\"#status\").textContent = \"Seat select ho gayi.\";\n  });\n</script>",
      result: "Page khulte hi purana status dikhega. Join activate karne par paragraph ka text badlega. Yeh demo sirf isi page ka status update karta hai.",
    }],
    quizzes: [
      { question: "Kaunsa event suna ja raha hai?", options: ["load", "submit", "click"], answer: 2, explanation: "Listener button ki activation par chalta hai." },
      { question: "Text kis property se badla?", options: ["textContent", "className", "href"], answer: 0, explanation: "textContent element ke text ko replace karta hai." },
      { question: "Script elements ke baad kyun rakhi?", options: ["Text bold ho", "Lookup ke waqt elements milen", "Button reset ho"], answer: 1, explanation: "Parser tab tak button aur paragraph bana chuka hota hai." },
    ],
  },
  {
    id: "study-structure-html-file-paths",
    title: "HTML File Paths",
    level: "Beginner",
    summary: "Folder structure se resource ka sahi address nikalo.",
    content: [
      "Relative path document ke base URL se resolve hota hai. Sibling file ke liye seedha naam, parent folder ke liye ../ aur site root ke liye shuru mein slash use hota hai. Galat base samajhne se photo kisi aur folder mein search hoti hai.",
      "Maan lo page /club/pages/about.html hai aur logo /club/images mein hai. Pehle pages se ek level upar jao, phir images kholo. Network panel mein requested URL dekhkar apni calculation check karo.",
    ],
    reading: { title: "W3Schools · HTML File Paths", url: "https://www.w3schools.com/html/html_filepaths.asp" },
    examples: [{
      title: "Nested page se logo",
      code: "<!-- Page: /club/pages/about.html -->\n<img src=\"../images/logo.png\" alt=\"Art Club\">\n<a href=\"/contact.html\">Contact</a>",
      result: "Logo ke liye /club/images/logo.png maanga jaayega. Link site ke root wali /contact.html file par le jaayega.",
    }],
    quizzes: [
      { question: "../ se kahan pahunchte hain?", options: ["Ek parent folder upar", "Site se bahar", "Current file ke andar"], answer: 0, explanation: "Do dots path ka parent segment hain." },
      { question: "Sirf logo.png likhne par is page se kya maanga jaayega?", options: ["/club/logo.png", "/club/pages/logo.png", "/logo.png"], answer: 1, explanation: "Simple filename current directory se resolve hota hai." },
      { question: "Shuru ka slash kya batata hai?", options: ["Parent directory", "Fragment", "Site root"], answer: 2, explanation: "Root-relative URL host ki root se shuru hota hai." },
    ],
  },
]);
