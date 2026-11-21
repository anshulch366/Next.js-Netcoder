import { chapter } from "../../resource-chapter";

export const publishingGuide = chapter("HTML Tutorial", [
  {
    id: "study-publishingguide-html-head",
    title: "HTML Head",
    level: "Beginner",
    summary: "Page dikhne se pehle browser ko document ki settings do.",
    content: [
      "Head mein title, encoding, viewport aur linked resources jaise metadata hote hain. Browser ko bytes decode karne ke liye charset jaldi milna chahiye. Phone ko layout width batane ke liye viewport setting kaam aati hai.",
      "File ko UTF-8 mein save karo aur charset ko head ke start mein rakho. Uske baad viewport aur title do. Body mein heading likho aur tab ke naam se uska farq dekho.",
    ],
    reading: { title: "W3Schools · HTML Head", url: "https://www.w3schools.com/html/html_head.asp" },
    examples: [{
      title: "Hindi notebook ki settings",
      code: "<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Hindi notebook</title>\n</head>",
      result: "Tab ka naam Hindi notebook hoga. Browser UTF-8 text padhega aur phone par layout device ki width se shuru hoga.",
    }],
    quizzes: [
      { question: "File encoding kaunsa meta batata hai?", options: ["charset", "viewport", "name=\"author\""], answer: 0, explanation: "charset bytes ko characters mein decode karne ka label hai." },
      { question: "Mobile layout width kis setting se aati hai?", options: ["title", "viewport", "lang"], answer: 1, explanation: "Viewport meta layout viewport ki shuruaati sizing batata hai." },
      { question: "Reader ko dikhne wala article aam taur par kahan jaata hai?", options: ["head", "meta", "body"], answer: 2, explanation: "Body document ka visible content rakhti hai." },
    ],
  },
  {
    id: "study-publishingguide-html-layout",
    title: "HTML Layout",
    level: "Beginner",
    summary: "Page ko navigation, main content aur footer jaise regions mein baanto.",
    content: [
      "Layout banate waqt pehle decide karo ki reader ko menu, asli kaam aur supporting details kahan milengi. Semantic HTML reading order deta hai. CSS grid ya flexbox usi structure ko screen par arrange kar sakte hain.",
      "Source mein pehle header, phir main aur aakhir mein footer likho. Layout ko bina CSS padhkar test karo. Agar linearly padhne par bhi page samajh aata hai to structure chhoti screen par bhi kaam aayega.",
    ],
    reading: { title: "W3Schools · HTML Layout", url: "https://www.w3schools.com/html/html_layout.asp" },
    examples: [{
      title: "Club page ke regions",
      code: "<header><nav><a href=\"#agenda\">Agenda</a></nav></header>\n<main id=\"agenda\"><h1>Aaj ka agenda</h1><p>Sketch practice</p></main>\n<footer>Art Club</footer>",
      result: "Navigation link se reader main agenda tak pahunchta hai. Footer mein club ka naam aata hai aur main region alag identify hota hai.",
    }],
    quizzes: [
      { question: "Primary task kis region mein hai?", options: ["footer", "main", "nav"], answer: 1, explanation: "Main document ka dominant content rakhta hai." },
      { question: "Navigation links ko kaunsa element group karta hai?", options: ["aside", "main", "nav"], answer: 2, explanation: "nav navigation landmark deta hai." },
      { question: "Bina CSS layout padhna kyun test karein?", options: ["Source ka logical order check hota hai", "Image size badhta hai", "URL chhota hota hai"], answer: 0, explanation: "Source order sequential reading mein kaam aata hai." },
    ],
  },
  {
    id: "study-publishingguide-html-responsive",
    title: "HTML Responsive",
    level: "Intermediate",
    summary: "Ek page ko chhote aur bade viewport par readable rakho.",
    content: [
      "Fixed 900px box phone ki available width se bahar ja sakta hai. Fluid width available jagah leti hai, max-width desktop par lines ko bahut lamba hone se rokta hai. Media query tab style badalti hai jab content ke liye jagah kaafi ho.",
      "Head mein viewport meta rakho. Neeche ki grid ko pehle ek column do aur 40rem se do columns do. Window resize karo aur check karo ki text horizontal scroll ke bina padha ja raha hai.",
    ],
    reading: { title: "W3Schools · HTML Responsive", url: "https://www.w3schools.com/html/html_responsive.asp" },
    examples: [{
      title: "Jagah milne par do columns",
      code: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n  .cards { display: grid; gap: 1rem; }\n  @media (min-width: 40rem) { .cards { grid-template-columns: 1fr 1fr; } }\n</style>\n<div class=\"cards\"><p>Somvaar</p><p>Mangalvaar</p></div>",
      result: "40rem se kam viewport par din ek ke neeche ek aate hain. Threshold par do barabar columns ban jaate hain.",
    }],
    quizzes: [
      { question: "Query kab match hoti hai?", options: ["Sirf 40px par", "Sirf phone par", "40rem ya usse zyada par"], answer: 2, explanation: "min-width lower bound hai." },
      { question: "Do barabar tracks kaunsi value deti hai?", options: ["1fr 1fr", "1px 4px", "auto 0"], answer: 0, explanation: "Har fr available flexible space ka barabar hissa leta hai." },
      { question: "Phone ke viewport ko device se match kaun karta hai?", options: ["h1", "Viewport meta", "grid ka gap"], answer: 1, explanation: "width=device-width layout ki shuruaati width set karta hai." },
    ],
  },
  {
    id: "study-publishingguide-html-project-v",
    title: "HTML Project V",
    level: "Intermediate",
    summary: "Workshop ka responsive layout banao jisme programme aur venue dono aasani se milen.",
    content: [
      "Phone par programme pehle aur venue uske baad padhna natural hai. Desktop par dono side by side dikh sakte hain. DOM ka order wahi rakhkar CSS se columns badlo taaki reading order stable rahe.",
      "Head mein viewport meta aur style rakho. Body mein main programme ke baad venue ka aside likho. Window ko 44rem ke dono taraf resize karke dekho kaunsa region pehle padhta hai.",
    ],
    reading: { title: "W3Schools · HTML Project V", url: "https://www.w3schools.com/html/html_project_layout.php" },
    examples: [{
      title: "Programme aur venue",
      code: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n  .day { display: grid; gap: 1rem; }\n  @media (min-width: 44rem) { .day { grid-template-columns: 2fr 1fr; } }\n</style>\n<div class=\"day\">\n  <main><h1>Print day</h1><p>10 baje demo</p></main>\n  <aside><h2>Venue</h2><p>Room 2</p></aside>\n</div>",
      result: "Chhoti screen par venue programme ke neeche hai. Wide layout mein gap ke baad bachi flexible width ka lagbhag do tihai main ko milta hai.",
    }],
    quizzes: [
      { question: "Chhoti screen par pehle kya dikhega?", options: ["Print day", "Room 2", "Venue heading"], answer: 0, explanation: "Source mein main pehle aata hai." },
      { question: "Wide view mein bada track kaunsa hai?", options: ["1fr wala doosra", "2fr wala pehla", "Dono fixed 2px"], answer: 1, explanation: "Pehle track ka flexible share do guna hai." },
      { question: "Venue ko aside kyun chuna?", options: ["Yeh hamesha right float hota hai", "Yeh sirf phone pe dikhta hai", "Yeh programme ki supporting detail hai"], answer: 2, explanation: "aside ka role content ke sambandh se aata hai." },
    ],
  },
  {
    id: "study-publishingguide-html-computercode",
    title: "HTML Computercode",
    level: "Beginner",
    summary: "Instructions mein code, user input aur program output ko saaf pehchan do.",
    content: [
      "Programming guide mein jo user type karta hai aur jo system lautata hai unke roles alag hain. code snippet, kbd input, samp output aur var variable ko mark karta hai. pre line breaks aur indentation bachata hai.",
      "Command ko code mein aur expected message ko samp mein rakho. Keyboard shortcut ko kbd se mark karo. HTML tag ko literal dikhana ho to opening angle bracket ko &lt; likho.",
    ],
    reading: { title: "W3Schools · HTML Computercode", url: "https://www.w3schools.com/html/html_computercode_elements.asp" },
    examples: [{
      title: "Terminal guide ke teen hisse",
      code: "<p><kbd>Enter</kbd> dabao.</p>\n<pre><code>echo Hello</code></pre>\n<p>Output: <samp>Hello</samp></p>",
      result: "Reader ko key, command aur sample output alag roles mein milte hain. Browser command ko text ke roop mein dikhata hai.",
    }],
    quizzes: [
      { question: "User ki dabayi key ka tag kya hai?", options: ["samp", "kbd", "var"], answer: 1, explanation: "kbd user input mark karta hai." },
      { question: "Program ka returned text kahan rakhen?", options: ["kbd", "nav", "samp"], answer: 2, explanation: "samp sample output hai." },
      { question: "Multiline code ki indentation kya bachayega?", options: ["pre", "code akela hamesha", "p"], answer: 0, explanation: "pre preformatted whitespace rakhta hai." },
    ],
  },
  {
    id: "study-publishingguide-html-semantics",
    title: "HTML Semantics",
    level: "Beginner",
    summary: "Element ka naam uske content ka kaam bataye, aisa structure chuno.",
    content: [
      "Recipe ki independent story article ho sakti hai, related links aside aur primary navigation nav. Meaningful regions assistive technology ko page ka naksha dete hain. Sirf box chahiye ho to generic div bhi sahi ho sakta hai.",
      "Pehle socho item apne aap padha ja sakta hai ya kisi aur section ka hissa hai. Ek article ko heading do aur uski publication date ko machine-readable datetime ke saath time mein rakho.",
    ],
    reading: { title: "W3Schools · HTML Semantics", url: "https://www.w3schools.com/html/html5_semantic_elements.asp" },
    examples: [{
      title: "Ek independent news item",
      code: "<article>\n  <h2>Library phir khuli</h2>\n  <time datetime=\"2026-06-12\">12 June 2026</time>\n  <p>Naya reading room taiyar hai.</p>\n</article>",
      result: "Reader ko headline, date aur report ka group milega. Software datetime se date ko ek standard format mein padh sakta hai.",
    }],
    quizzes: [
      { question: "Self-contained report ke liye kya chuno?", options: ["span", "nav", "article"], answer: 2, explanation: "Article independently samajh aane wali composition hai." },
      { question: "Machine-readable date kaunsa attribute deta hai?", options: ["datetime", "title", "charset"], answer: 0, explanation: "time ka datetime standard value deta hai." },
      { question: "Region choose karte waqt pehla sawaal kya ho?", options: ["Default color kya hai?", "Content ka purpose kya hai?", "Filename kitna bada hai?"], answer: 1, explanation: "Semantics role aur relationship describe karti hai." },
    ],
  },
  {
    id: "study-publishingguide-html-project-vi",
    title: "HTML Project VI",
    level: "Intermediate",
    summary: "Blog post aisi banao jise list se nikaalkar bhi padha ja sake.",
    content: [
      "Post ka apna title, publish date aur body reader ko context dete hain. Site ka naam alag header mein aur har post apne article mein rahe to feed mein nayi entries jodna aasaan hota hai.",
      "Site heading ke neeche main aur article rakho. Date ko time se mark karo. Doosra post jodte waqt naya sibling article banao. Sirf ek article padhkar check karo ki topic aur date samajh aa rahe hain.",
    ],
    reading: { title: "W3Schools · HTML Project VI", url: "https://www.w3schools.com/html/html_project_blog.php" },
    examples: [{
      title: "Sketch diary ki entry",
      code: "<header><h1>Sketch diary</h1></header>\n<main><article>\n  <h2>Pehla charcoal sketch</h2>\n  <p><time datetime=\"2026-07-04\">4 July 2026</time> · Nisha</p>\n  <p>Aaj maine side light mein shadows banayi.</p>\n</article></main>",
      result: "Site title ke neeche ek dated post dikhegi. Reader naam, tareekh aur observation ek saath padh sakta hai.",
    }],
    quizzes: [
      { question: "Nayi independent post kahan rakhen?", options: ["Main mein naya article", "Pehle time ke andar", "Site title ke andar"], answer: 0, explanation: "Har post ka apna content group hona chahiye." },
      { question: "Is example mein h1 kya batata hai?", options: ["Author ki date", "Blog ka naam", "Pehla sentence"], answer: 1, explanation: "Site heading Sketch diary hai." },
      { question: "4 July ko standard value mein kaise likhen?", options: ["04-2026-07", "July04only", "2026-07-04"], answer: 2, explanation: "Calendar date ke liye year-month-day order hai." },
    ],
  },
  {
    id: "study-publishingguide-html-style-guide",
    title: "HTML Style Guide",
    level: "Beginner",
    summary: "Consistent markup likho jise dobara padhna aur edit karna aasaan ho.",
    content: [
      "Indentation se parent-child relation nazar aata hai. Lowercase tags, quoted values aur consistent filenames team ko diff samajhne mein madad dete hain. Linux server par file path ka case matter kar sakta hai.",
      "Har nesting level par ek jaisa indent rakho. Space wali attribute value quotes mein rakho aur paired tags dono likho. Save ke baad markup validator se nesting check karo aur rendered page bhi dekho.",
    ],
    reading: { title: "W3Schools · HTML Style Guide", url: "https://www.w3schools.com/html/html5_syntax.asp" },
    examples: [{
      title: "Saaf nesting",
      code: "<article class=\"book note\">\n  <h2>Reading list</h2>\n  <p>Is hafte ek kahani padho.</p>\n</article>",
      result: "Indentation editor mein dono children dikhati hai. Quotes ki wajah se book aur note dono ek class attribute ki list mein hain.",
    }],
    quizzes: [
      { question: "Indentation sabse zyada kis mein madad karti hai?", options: ["Network speed mein", "Nesting padhne mein", "Font download mein"], answer: 1, explanation: "Indent parent aur child ka relation nazar se saaf karta hai." },
      { question: "class ki value quotes mein kyun hai?", options: ["Quotes se color lagta hai", "Tag tabhi uppercase hota hai", "Value mein space hai"], answer: 2, explanation: "Quotes attribute ki poori boundary batate hain." },
      { question: "Photo.jpg aur photo.jpg ka farq kyun check karna chahiye?", options: ["Server case-sensitive ho sakta hai", "HTML har file rename karta hai", "JPG inline tag hai"], answer: 0, explanation: "Path ka case deployed filename se match hona chahiye." },
    ],
  },
  {
    id: "study-publishingguide-html-entities",
    title: "HTML Entities",
    level: "Beginner",
    summary: "Markup jaise dikhne wale characters ko page par literal text banao.",
    content: [
      "Less-than sign tag ki shuruaat aur ampersand character reference ki shuruaat ban sakta hai. HTML source mein &lt; aur &amp; likhne par parser inhe characters mein badalta hai. Isse example khud tag banne ke bajay padhne layak rehta hai.",
      "Element ka naam dikhate waqt angle brackets encode karo. Non-breaking space ke liye &nbsp; do jab do tokens ko ek line par rakhna meaningful ho, jaise number aur unit.",
    ],
    reading: { title: "W3Schools · HTML Entities", url: "https://www.w3schools.com/html/html_entities.asp" },
    examples: [{
      title: "Tag ko text ki tarah dikhao",
      code: "<p>Heading ke liye <code>&lt;h1&gt;</code> lagao.</p>\n<p>Fee: 50&nbsp;rupees</p>",
      result: "Sentence mein literal <h1> dikhega. 50 aur rupees ke beech line break ki normal opportunity nahi hogi.",
    }],
    quizzes: [
      { question: "Literal < ke liye kya likhoge?", options: ["&gt;", "&amp;", "&lt;"], answer: 2, explanation: "lt less-than character ko represent karta hai." },
      { question: "Literal ampersand ka named reference kya hai?", options: ["&amp;", "&nbsp;", "&lt;"], answer: 0, explanation: "amp entity ampersand mein decode hoti hai." },
      { question: "50 aur rupees ke beech break rokne ke liye kya use hua?", options: ["br", "&nbsp;", "hr"], answer: 1, explanation: "Non-breaking space dono tokens ko saath rakhti hai." },
    ],
  },
  {
    id: "study-publishingguide-html-symbols",
    title: "HTML Symbols",
    level: "Beginner",
    summary: "Currency, copyright aur mathematical symbols ko Unicode ya references se likho.",
    content: [
      "Keyboard par har symbol ki key nahi hoti. Character ka Unicode number maloom ho to decimal ya hexadecimal numeric reference likh sakte ho. Named reference kuch common symbols ke liye yaad rakhna aasaan hota hai.",
      "UTF-8 file mein ₹ seedha likho ya uska numeric reference do. Decimal reference &# se aur hex reference &#x se shuru hota hai. Dono ko semicolon se poora karo.",
    ],
    reading: { title: "W3Schools · HTML Symbols", url: "https://www.w3schools.com/html/html_symbols.asp" },
    examples: [{
      title: "Price aur copyright",
      code: "<p>Ticket: &#8377;80</p>\n<p>&copy; Art Club · &#x20B9;80</p>",
      result: "Dono prices mein rupee sign aata hai kyunki decimal 8377 aur hex 20B9 ek hi code point hain. &copy; copyright sign deta hai.",
    }],
    quizzes: [
      { question: "Hex reference ka prefix kya hai?", options: ["&#x", "&hex-", "#rgb"], answer: 0, explanation: "x hexadecimal digits signal karta hai." },
      { question: "&#8377; aur &#x20B9; kya dikhate hain?", options: ["Do alag currencies", "Ek hi rupee sign", "Do file paths"], answer: 1, explanation: "Dono ek hi Unicode number ko alag bases mein likhte hain." },
      { question: "Copyright symbol ka named reference kya hai?", options: ["&cent;", "&reg;", "&copy;"], answer: 2, explanation: "copy copyright character mein decode hota hai." },
    ],
  },
  {
    id: "study-publishingguide-html-emojis",
    title: "HTML Emojis",
    level: "Beginner",
    summary: "Emoji ko text ki tarah store karo aur uska meaning sab readers tak pahunchao.",
    content: [
      "Emoji Unicode characters ya character sequences hote hain. Font aur platform ke hisaab se unki drawing badal sakti hai. Agar icon ka meaning important hai to paas mein readable label do.",
      "UTF-8 mein calendar emoji seedha likho. Agar saath ka text pehle hi meaning deta hai to decorative emoji wrapper ko aria-hidden do taaki screen reader wahi baat do baar na bole.",
    ],
    reading: { title: "W3Schools · HTML Emojis", url: "https://www.w3schools.com/html/html_emojis.asp" },
    examples: [{
      title: "Calendar label",
      code: "<p><span aria-hidden=\"true\">📅</span> Agli class: 12 June</p>",
      result: "Calendar aur date dikhte hain. Assistive technology ko date aur label milte hain, decorative icon skip hota hai.",
    }],
    quizzes: [
      { question: "Emoji device par thoda alag kyun dikh sakta hai?", options: ["HTML date badalta hai", "Platform font alag hai", "Paragraph translate hota hai"], answer: 1, explanation: "Glyph ki drawing font ya emoji set par depend karti hai." },
      { question: "aria-hidden kis par hai?", options: ["Poori date par", "Document par", "Sirf decorative span"], answer: 2, explanation: "Meaningful date accessible rehti hai." },
      { question: "Emoji ke saath text kyun diya?", options: ["Meaning saaf rahe", "Emoji double ho jaaye", "UTF-8 band ho"], answer: 0, explanation: "Reader icon pehchane bina bhi message samajh sakta hai." },
    ],
  },
  {
    id: "study-publishingguide-html-charsets",
    title: "HTML Charsets",
    level: "Beginner",
    summary: "File ke bytes aur screen ke characters ka connection samjho.",
    content: [
      "Unicode har character ko code point deta hai. UTF-8 un points ko bytes mein encode karta hai. Agar browser bytes ko kisi aur encoding mein padhe to Hindi ya currency ke symbols bigad sakte hain.",
      "Editor mein file UTF-8 save karo aur head ki shuruaat mein charset declare karo. Server se page bhejte waqt Content-Type ki charset setting bhi file ke actual encoding se milao.",
    ],
    reading: { title: "W3Schools · HTML Charsets", url: "https://www.w3schools.com/html/html_charset.asp" },
    examples: [{
      title: "Hindi naam sahi padho",
      code: "<!doctype html>\n<html lang=\"hi\"><head><meta charset=\"utf-8\"><title>कक्षा</title></head>\n<body><p>किताब ₹80</p></body></html>",
      result: "UTF-8 bytes sahi decode hone par tab mein कक्षा aur page par किताब ₹80 padhenge, jab font mein glyphs available hon.",
    }],
    quizzes: [
      { question: "UTF-8 kis cheez ka naam hai?", options: ["Font family", "Language code", "Character encoding"], answer: 2, explanation: "Encoding characters ko bytes se map karti hai." },
      { question: "lang=\"hi\" kya batata hai?", options: ["Hindi bhasha", "UTF-8 bytes", "Font size"], answer: 0, explanation: "Language aur byte encoding alag information hain." },
      { question: "Encoding mismatch ka aam symptom kya hai?", options: ["Heading rank badalna", "Text ke characters bigadna", "URL expire hona"], answer: 1, explanation: "Galat decoding bytes ko doosre characters samajhti hai." },
    ],
  },
  {
    id: "study-publishingguide-html-url-encode",
    title: "HTML URL Encode",
    level: "Beginner",
    summary: "URL mein user ke text ko safe data component ke roop mein bhejo.",
    content: [
      "Query string mein & agla parameter aur = naam-value boundary batata hai. Search text ke andar bhi & aa sakta hai. Component encode karne par browser use data ke roop mein bhejta hai aur parameter structure sahi rehta hai.",
      "JavaScript mein URLSearchParams ko raw value do aur toString dekho. Space form-style query mein + ban sakta hai aur literal plus %2B. Poori query ko ek saath encode karne se separators bhi encode ho jaate hain.",
    ],
    reading: { title: "W3Schools · HTML URL Encode", url: "https://www.w3schools.com/html/html_urlencode.asp" },
    examples: [{
      title: "Search phrase encode karo",
      code: "<script>\n  const query = new URLSearchParams({ q: \"art & craft\" });\n  console.log(query.toString());\n</script>",
      result: "Console mein q=art+%26+craft aayega. %26 search phrase ka ampersand hai aur dono plus spaces ko darshate hain.",
    }],
    quizzes: [
      { question: "%26 kis character ka data hai?", options: ["&", "=", "/"], answer: 0, explanation: "Ampersand ki percent-encoded value %26 hai." },
      { question: "URLSearchParams ko pehle se encoded text dene mein kya dikkat hai?", options: ["Class reset hoti hai", "Percent dobara encode ho sakta hai", "Form hamesha POST hota hai"], answer: 1, explanation: "Serializer raw input se apni encoding karta hai." },
      { question: "Is output mein + kis cheez ko dikhata hai?", options: ["Naya parameter", "Hash", "Space"], answer: 2, explanation: "Form-style search parameters space ko plus likhte hain." },
    ],
  },
  {
    id: "study-publishingguide-html-vs-xhtml",
    title: "HTML vs. XHTML",
    level: "Intermediate",
    summary: "Ek jaise dikhne wale markup ko HTML aur XML parsers kaise padhte hain, samjho.",
    content: [
      "HTML parser kuch missing tags aur nesting errors ke liye recovery rules use karta hai. XHTML HTML vocabulary ko XML syntax mein likhta hai. application/xhtml+xml ke roop mein serve kiya document XML well-formedness maangta hai, isliye galat closing tag parsing rok sakta hai.",
      "XML version mein root par XHTML namespace do, names ka case match karo, attributes quote karo aur har element close karo. Sirf br ke end mein slash likhne se text/html document ka parser nahi badalta.",
    ],
    reading: { title: "W3Schools · HTML vs. XHTML", url: "https://www.w3schools.com/html/html_xhtml.asp" },
    examples: [{
      title: "XHTML document ka skeleton",
      code: "<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en\">\n  <head><title>Studio</title></head>\n  <body><p>Room A<br />Floor 2</p></body>\n</html>",
      result: "XML mode mein sab tags properly close hone par paragraph do lines mein dikhega. Closing p ko uppercase P karne par XML mein name mismatch hoga.",
    }],
    quizzes: [
      { question: "XML mode kis response type se milta hai?", options: ["text/plain", "application/xhtml+xml", "image/svg"], answer: 1, explanation: "XHTML media type XML parsing select karta hai." },
      { question: "XML mein <p> ka matching closing tag kya hai?", options: ["</P>", "</para>", "</p>"], answer: 2, explanation: "XML names case-sensitive hain." },
      { question: "Sirf <br /> likhne se text/html ka parser kya hoga?", options: ["HTML parser hi rahega", "XML parser banega", "Parser disable hoga"], answer: 0, explanation: "Parsing mode response media type se decide hota hai." },
    ],
  },
]);
