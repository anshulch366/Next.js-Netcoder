import { chapter } from "../../resource-chapter";

export const foundations = chapter("HTML Tutorial", [
  {
    id: "study-foundations-html-home",
    title: "HTML HOME",
    level: "Beginner",
    summary: "Apni pehli HTML file se browser mein ek chhota notice dikhao.",
    content: [
      "Socho class ka time sabko ek page par batana hai. Ek heading batati hai notice kis baare mein hai aur uske neeche paragraph detail deta hai. HTML in dono hisson ko pehchan deta hai.",
      "Plain-text editor mein neeche ka code likho aur index.html naam se save karo. File browser mein kholo. Phir editor mein time badlo, save karo aur browser refresh karke dono versions compare karo.",
    ],
    reading: { title: "W3Schools · HTML HOME", url: "https://www.w3schools.com/html/default.asp" },
    examples: [{
      title: "Class ka notice",
      code: "<!doctype html>\n<html lang=\"hi-Latn\">\n<head><meta charset=\"utf-8\"><title>Class notice</title></head>\n<body>\n  <h1>Aaj ki class</h1>\n  <p>Class 4 baje shuru hogi.</p>\n</body>\n</html>",
      result: "Tab par “Class notice” aur page par “Aaj ki class” ke neeche time dikhega. Paragraph mein 4 ko 5 karne par refresh ke baad sirf time badlega.",
    }],
    quizzes: [
      { question: "File kis naam se save karoge?", options: ["index.jpg", "index.html.txt", "index.html"], answer: 2, explanation: ".html extension se file HTML document ke roop mein khulti hai." },
      { question: "Page par notice ka time kahan likha hai?", options: ["p mein", "title mein", "doctype mein"], answer: 0, explanation: "Paragraph body mein hai, isliye reader use page par padhta hai." },
      { question: "Local file edit karne ke baad purana time dikh raha hai. Kya karo?", options: ["Naya h1 lagao", "File save karke refresh karo", "Title hatao"], answer: 1, explanation: "Refresh browser ko disk par save hua version dobara padhata hai." },
    ],
  },
  {
    id: "study-foundations-html-introduction",
    title: "HTML Introduction",
    level: "Beginner",
    summary: "Samjho browser angle brackets wale text ko webpage mein kaise badalta hai.",
    content: [
      "HTML ka poora naam HyperText Markup Language hai. Hypertext se pages link hote hain. Markup batata hai ki text heading hai, paragraph hai ya link. Browser in nishanon ko padhkar elements ki ek tree banata hai, jise DOM kehte hain.",
      "Ek paragraph ke andar link rakho. Link ka text reader ko destination samjhata hai aur href browser ko uska address deta hai. Elements pane mein dekho ki link paragraph ka child hai.",
    ],
    reading: { title: "W3Schools · HTML Introduction", url: "https://www.w3schools.com/html/html_intro.asp" },
    examples: [{
      title: "Ek sentence mein link",
      code: "<p>Agli class ka <a href=\"schedule.html\">schedule dekho</a>.</p>",
      result: "Pura sentence dikhega. Sirf “schedule dekho” activate karne par browser usi folder ki schedule.html file maangega.",
    }],
    quizzes: [
      { question: "Hypertext ka kaunsa use yahan dikhta hai?", options: ["Do documents ko jodna", "Font install karna", "Photo compress karna"], answer: 0, explanation: "Anchor ek document se doosre tak jaane ka raasta deta hai." },
      { question: "Is example mein a ka parent kya hai?", options: ["href", "p", "schedule.html"], answer: 1, explanation: "Anchor paragraph ke opening aur closing tag ke beech hai." },
      { question: "Destination badalna hai, dikhne wala text wahi rakhna hai. Kya badloge?", options: ["Paragraph ka tag", "Link ka text", "href ki value"], answer: 2, explanation: "href aur link ka readable label alag cheezein hain." },
    ],
  },
  {
    id: "study-foundations-html-editors",
    title: "HTML Editors",
    level: "Beginner",
    summary: "Editor, saved file aur browser preview ka rishta samjho.",
    content: [
      "Editor mein source likhte ho aur browser uska result dikhata hai. Word processor formatting ke liye extra data jod sakta hai, isliye HTML likhne ke liye plain-text mode ya code editor chuno.",
      "Ek folder kholo aur usme hello.html banao. File UTF-8 mein save karo. Browser mein wahi file kholo, editor mein ek shabd badlo aur save karke reload karo. Agar tags hi dikh rahe hain to filename ke end mein .txt check karo.",
    ],
    reading: { title: "W3Schools · HTML Editors", url: "https://www.w3schools.com/html/html_editors.asp" },
    examples: [{
      title: "Save aur reload ka test",
      code: "<!doctype html>\n<meta charset=\"utf-8\">\n<title>Editor test</title>\n<p>Mera pehla draft</p>",
      result: "Page par “Mera pehla draft” dikhega. Source mein draft ki jagah page likhkar save aur reload karoge to sentence badal jayega.",
    }],
    quizzes: [
      { question: "Source likhne ke liye kya chuno?", options: ["Image viewer", "Plain-text editor", "Audio player"], answer: 1, explanation: "Editor actual markup ko text ke roop mein save karta hai." },
      { question: "hello.html.txt mein aakhri extension kya hai?", options: [".html", ".hello", ".txt"], answer: 2, explanation: "File type pehchanne mein aakhri extension maayne rakhta hai." },
      { question: "Local preview mein edit kab dikhega?", options: ["Save aur reload ke baad", "Sirf cursor hilane par", "File rename karne se"], answer: 0, explanation: "Browser ko updated file padhni hoti hai." },
    ],
  },
  {
    id: "study-foundations-html-basic",
    title: "HTML Basic",
    level: "Beginner",
    summary: "Document ka skeleton banao aur tab ki information ko page ke content se alag jagah rakho.",
    content: [
      "Doctype ki pehli line modern standards mode chunti hai. html root ke andar head mein document ki settings aur body mein reader ke liye content aata hai. Yeh structure har agle example ko sahi jagah rakhne mein madad karta hai.",
      "Skeleton copy karo. Pehle sirf title badalkar tab dekho, phir h1 badalkar page dekho. Dono mein alag text rakhne se inki zimmedari saaf dikhegi.",
    ],
    reading: { title: "W3Schools · HTML Basic", url: "https://www.w3schools.com/html/html_basic.asp" },
    examples: [{
      title: "Library page ka skeleton",
      code: "<!doctype html>\n<html lang=\"en\">\n  <head><meta charset=\"utf-8\"><title>Library hours</title></head>\n  <body><h1>Opening times</h1><p>Monday, 9 AM</p></body>\n</html>",
      result: "Browser tab “Library hours” kahega. Document mein heading “Opening times” aur uske neeche Monday ka time dikhega.",
    }],
    quizzes: [
      { question: "Doctype kahan likhoge?", options: ["h1 ke andar", "Body ke baad", "Document ke shuru mein"], answer: 2, explanation: "Browser parsing shuru karte waqt declaration padhta hai." },
      { question: "Metadata ka container kya hai?", options: ["head", "body", "p"], answer: 0, explanation: "Title aur character encoding jaise settings head mein jaate hain." },
      { question: "Opening times ko page par badalne ke liye kya edit karoge?", options: ["lang", "h1 ka text", "title"], answer: 1, explanation: "Is example mein visible heading h1 se aati hai." },
    ],
  },
  {
    id: "study-foundations-html-elements",
    title: "HTML Elements",
    level: "Beginner",
    summary: "Tag aur element ko nesting ke saath samjho.",
    content: [
      "<p> opening tag hai. Opening tag, beech ka content aur closing tag milkar paragraph element banate hain. Ek element doosre ke andar ho sakta hai. Andar wala pehle band karoge to browser ko intended structure milta hai.",
      "Paragraph mein sirf ek shabd important mark karo. Phir br se ek hi paragraph mein line todo. br ek void element hai, iske andar content aur closing tag nahi hota.",
    ],
    reading: { title: "W3Schools · HTML Elements", url: "https://www.w3schools.com/html/html_elements.asp" },
    examples: [{
      title: "Ek paragraph ke andar do elements",
      code: "<p>Apni <strong>ID</strong> lao.<br>Gate 2 par milo.</p>",
      result: "Sirf ID important mark hota hai aur aam taur par bold dikhta hai. Gate 2 usi paragraph ki agli line par aata hai.",
    }],
    quizzes: [
      { question: "Poora paragraph element kaunsa hai?", options: ["<p>Hello</p>", "<p>", "</p>"], answer: 0, explanation: "Paired element mein opening, content aur closing teeno shaamil hain." },
      { question: "ID ke turant baad kya band hoga?", options: ["p", "strong", "br"], answer: 1, explanation: "Nested strong paragraph ke andar shuru hua aur pehle khatam hota hai." },
      { question: "br ko closing tag kyun nahi chahiye?", options: ["Yeh poora paragraph hai", "Yeh CSS rule hai", "Yeh void element hai"], answer: 2, explanation: "Line break ke andar child content nahi hota." },
    ],
  },
  {
    id: "study-foundations-html-attributes",
    title: "HTML Attributes",
    level: "Beginner",
    summary: "Ek hi tag ka behaviour uske opening tag mein di hui values se badlo.",
    content: [
      "Element us cheez ki category batata hai aur attribute us instance ki detail. Do anchors ek jaise dikh sakte hain par alag href values unhe alag pages par le jaati hain.",
      "Opening tag mein naam, equals sign aur quoted value likho. Link ke beech ka text badalne se label badalta hai. href badalne se destination badalta hai. Spaces wali values ko quotes ke andar rakho.",
    ],
    reading: { title: "W3Schools · HTML Attributes", url: "https://www.w3schools.com/html/html_attributes.asp" },
    examples: [{
      title: "Do links, do destinations",
      code: "<a href=\"map.html\" title=\"Campus map\">Map</a>\n<a href=\"hours.html\">Opening hours</a>",
      result: "Map select karne par map.html khulta hai, doosra link hours.html kholta hai. title kuch browsers mein pointer hover par extra hint dikhata hai.",
    }],
    quizzes: [
      { question: "Attribute kis jagah likhte hain?", options: ["Closing tag ke baad", "Opening tag mein", "Text ke har shabd mein"], answer: 1, explanation: "Browser opening tag padhte waqt element ki settings leta hai." },
      { question: "Map ka destination kis value se milta hai?", options: ["Campus map", "Map", "map.html"], answer: 2, explanation: "href mein URL diya hai." },
      { question: "Visible label badalne ke liye kya edit karoge?", options: ["Tags ke beech ka text", "Sirf title", "Sirf href"], answer: 0, explanation: "Anchor ka text uska visible label hai." },
    ],
  },
  {
    id: "study-foundations-html-headings",
    title: "HTML Headings",
    level: "Beginner",
    summary: "h1 se h6 ki ranks se lambi guide ka outline banao.",
    content: [
      "Heading rank reader ko batati hai ki kaunsi baat kis section ke andar aati hai. Screen reader users heading se heading tak ja sakte hain. Sirf font bada karne se text ko heading ki pehchan nahi milti.",
      "Page ka mukhya naam h1 mein do, uske main sections h2 mein aur unke subsections h3 mein. Do barabar sections ko ek hi rank do. Font size badalna ho to CSS lagao.",
    ],
    reading: { title: "W3Schools · HTML Headings", url: "https://www.w3schools.com/html/html_headings.asp" },
    examples: [{
      title: "Recipe ka outline",
      code: "<h1>Poha banana</h1>\n<h2>Taiyari</h2>\n<h3>Poha dhona</h3>\n<h2>Pakana</h2>",
      result: "Taiyari aur Pakana barabar level par hain. Poha dhona sirf Taiyari ki branch mein aata hai.",
    }],
    quizzes: [
      { question: "Pakana ke barabar ka section kaunsi rank lega?", options: ["h1", "h4", "h2"], answer: 2, explanation: "Dono recipe ke main sections hain." },
      { question: "Poha dhona ka parent section kya hai?", options: ["Taiyari", "Pakana", "Koi section nahi"], answer: 0, explanation: "h3 apne se pehle wale h2 ke andar ka subdivision dikhata hai." },
      { question: "Heading ka visual size kahan set karoge?", options: ["Rank skip karke", "CSS mein", "Doctype mein"], answer: 1, explanation: "Rank structure sambhalti hai aur font-size appearance sambhalta hai." },
    ],
  },
  {
    id: "study-foundations-html-paragraphs",
    title: "HTML Paragraphs",
    level: "Beginner",
    summary: "Naya khayal, line break aur fixed spacing ke liye sahi markup chuno.",
    content: [
      "Browser normal paragraph mein lagataar spaces aur source ki newlines ko aksar ek space ki tarah dikhata hai. Isliye Enter dabaane se page par naya paragraph nahi banta. Har alag khayal ko apna p do.",
      "Address ki do lines ek hi unit hain, wahan br lagao. Poem ya aligned sample mein original spaces aur line breaks zaroori hon to pre use karo. Paragraphs ka faasla CSS margin se badlo.",
    ],
    reading: { title: "W3Schools · HTML Paragraphs", url: "https://www.w3schools.com/html/html_paragraphs.asp" },
    examples: [{
      title: "Address aur alag message",
      code: "<p>Room 12<br>First floor</p>\n<p>Apna pass saath lao.</p>\n<pre>A    B\n1    2</pre>",
      result: "Room aur floor alag lines par dikhte hain. Message apna paragraph hai aur neeche pre ki columns mein extra spaces bache rehte hain.",
    }],
    quizzes: [
      { question: "Naye khayal ke liye kaunsa element?", options: ["p", "br", "span"], answer: 0, explanation: "Paragraph ek alag text unit banata hai." },
      { question: "Room aur floor ko ek paragraph mein do lines par kaise rakhen?", options: ["Source mein spaces", "Beech mein br", "title attribute"], answer: 1, explanation: "br rendered text mein line break deta hai." },
      { question: "Sample ki spacing kaunsa element bachata hai?", options: ["p", "em", "pre"], answer: 2, explanation: "Preformatted text source ke whitespace ko preserve karta hai." },
    ],
  },
  {
    id: "study-foundations-html-styles",
    title: "HTML Styles",
    level: "Beginner",
    summary: "Ek element par style attribute se CSS declaration lagao.",
    content: [
      "Browser ka default rang aur font har notice ki zaroorat poori nahi karta. Inline style ek specific element ki presentation badalta hai. Declaration mein property batati hai kya badlega aur value batati hai kaise.",
      "style ke quotes mein property aur value ko colon se jodo. Multiple declarations ko semicolon se alag karo. Neeche color ko navy se green karo aur dekho ki background apni jagah rehta hai.",
    ],
    reading: { title: "W3Schools · HTML Styles", url: "https://www.w3schools.com/html/html_styles.asp" },
    examples: [{
      title: "Notice ko highlight karo",
      code: "<p style=\"color: navy; background-color: ivory; padding: 8px;\">Kal library khuli hai.</p>",
      result: "Text navy, uske peeche ivory background aur kinare ke andar 8px ka gap dikhega.",
    }],
    quizzes: [
      { question: "Text ka rang kaunsi property badalti hai?", options: ["padding", "color", "background-color"], answer: 1, explanation: "color foreground text par lagti hai." },
      { question: "Andar ke gap ko 16px karne ke liye kya badloge?", options: ["color", "lang", "padding"], answer: 2, explanation: "Padding content aur element ke edge ke beech jagah hai." },
      { question: "Do inline declarations ka separator kya hai?", options: ["Semicolon", "Comma", "Slash"], answer: 0, explanation: "CSS declaration list mein har property-value pair ko semicolon alag karta hai." },
    ],
  },
  {
    id: "study-foundations-html-project-i",
    title: "HTML Project I",
    level: "Beginner",
    summary: "Ek single-page class announcement banao jo pehli nazar mein kya, kab aur kahan bataye.",
    content: [
      "Pehle reader ke teen sawaal likho. Event ka naam page ka main heading banta hai, date aur jagah paragraphs bante hain. Tab ko pehchanne ke liye ek chhota title do. Is tarah har text block ka ek kaam hai.",
      "notice.html mein complete file banao. Pehle bina styling ke padho. Phir venue badalkar check karo ki sirf ek paragraph edit karna pada. Preview ka tab aur page dono dekhkar project check karo.",
    ],
    reading: { title: "W3Schools · HTML Project I", url: "https://www.w3schools.com/html/html_project_webpage.php" },
    examples: [{
      title: "Reading club announcement",
      code: "<!doctype html>\n<html lang=\"hi-Latn\">\n<head><meta charset=\"utf-8\"><title>Reading club</title></head>\n<body>\n  <h1>Kahani ki shaam</h1>\n  <p>Shanivaar ko 5 baje milte hain.</p>\n  <p>Jagah: Library hall</p>\n</body>\n</html>",
      result: "Tab se Reading club pehchanoge. Page par event, time aur venue teen alag units mein milenge. Hall ko Room 3 karoge to heading wahi rahegi.",
    }],
    quizzes: [
      { question: "Event ka mukhya naam kahan rakhen?", options: ["meta", "title attribute", "h1"], answer: 2, explanation: "h1 page ka primary heading hai." },
      { question: "Venue badal gaya. Kaunsi jagah edit karni hai?", options: ["Doosra p", "Pehla p", "Doctype"], answer: 0, explanation: "Doosre paragraph mein venue diya gaya hai." },
      { question: "Browser ke tab par kya aayega?", options: ["Library hall", "Reading club", "Kahani ki shaam"], answer: 1, explanation: "Document title tab ko label karta hai." },
    ],
  },
  {
    id: "study-foundations-html-formatting",
    title: "HTML Formatting",
    level: "Beginner",
    summary: "Text ka matlab batane ke liye importance, emphasis aur revision mark karo.",
    content: [
      "strong zaroori baat aur em bolne ka stress batata hai. b aur i kuch likhawati conventions ke liye hain. Sirf bold ya italic dikhana ho to CSS se control kar sakte ho. Meaningful markup design badalne par bhi apna role rakhta hai.",
      "Purane aur naye rates saath dikhane ke liye del aur ins lagao. Chemical formula mein sub aur power mein sup lagao. Markup ko sirf unhi shabdon ke ird-gird rakho jinka meaning badalta hai.",
    ],
    reading: { title: "W3Schools · HTML Formatting", url: "https://www.w3schools.com/html/html_formatting.asp" },
    examples: [{
      title: "Price update aur formula",
      code: "<p><strong>Naya rate:</strong> <del>₹90</del> <ins>₹75</ins></p>\n<p>Paani ka formula H<sub>2</sub>O hai.</p>",
      result: "Aam browser purana rate strike-through aur naya underline dikhata hai. Formula mein 2 baseline ke neeche aata hai.",
    }],
    quizzes: [
      { question: "Hata hua rate kaunsa tag batata hai?", options: ["del", "ins", "em"], answer: 0, explanation: "del document se delete hua content mark karta hai." },
      { question: "Formula mein 2 neeche kaise aaya?", options: ["sup se", "sub se", "mark se"], answer: 1, explanation: "sub subscript banata hai." },
      { question: "Zaroori warning ko meaning ke saath mark karna hai. Kya lagao?", options: ["i", "small", "strong"], answer: 2, explanation: "strong importance convey karta hai." },
    ],
  },
  {
    id: "study-foundations-html-quotations",
    title: "HTML Quotations",
    level: "Beginner",
    summary: "Apne shabdon aur kisi aur ke kahe hue shabdon ko alag pehchan do.",
    content: [
      "Sentence ke beech chhoti quotation ke liye q aur ek alag quoted passage ke liye blockquote use hota hai. Source URL ko cite attribute mein de sakte ho. Reader ko author dikhana ho to naam visible text mein likho.",
      "Quote aur attribution ko figure mein group karo. blockquote mein asli baat aur figcaption mein source label rakho. Kisi karya ka title likhna ho to cite element istemal kar sakte ho.",
    ],
    reading: { title: "W3Schools · HTML Quotations", url: "https://www.w3schools.com/html/html_quotation_elements.asp" },
    examples: [{
      title: "Workshop feedback",
      code: "<figure>\n  <blockquote cite=\"notes.html\"><p>Dusri drawing zyada saaf thi.</p></blockquote>\n  <figcaption>Meera, workshop notes</figcaption>\n</figure>\n<p>Meera ne ise <q>saaf</q> kaha.</p>",
      result: "Lamba excerpt apna block lega aur naam neeche dikhega. Inline q ke aas-paas browser aam taur par quotation marks lagata hai.",
    }],
    quizzes: [
      { question: "Inline quote ke liye kya chuno?", options: ["blockquote", "q", "figcaption"], answer: 1, explanation: "q sentence ke andar chhota quoted text rakhta hai." },
      { question: "Author ka visible naam yahan kahan hai?", options: ["cite attribute", "q attribute", "figcaption"], answer: 2, explanation: "Caption ka text page par render hota hai." },
      { question: "cite attribute mein kya dete hain?", options: ["Source URL", "Font size", "Quote ki length"], answer: 0, explanation: "URL quotation ka source identify karta hai." },
    ],
  },
  {
    id: "study-foundations-html-comments",
    title: "HTML Comments",
    level: "Beginner",
    summary: "Markup mein aise notes likho jo page padhte waqt nazar na aayen.",
    content: [
      "Comment editor mein agle maintainer ko batata hai ki koi hissa kyun hai. Browser parser comment ko document mein rakh sakta hai par normal page text ki tarah render nahi karta. Source dekhne wala use padh sakta hai.",
      "Comment ko <!-- se shuru aur --> se band karo. Ek chhota hissa temporarily comment karke preview karo. Comments ko ek doosre ke andar nest karne se pehla closing marker boundary khatam kar deta hai.",
    ],
    reading: { title: "W3Schools · HTML Comments", url: "https://www.w3schools.com/html/html_comments.asp" },
    examples: [{
      title: "Draft message chupao",
      code: "<!-- Date confirm hone par doosra session jodna hai. -->\n<p>Pehla session Somvaar ko hai.</p>",
      result: "Page par sirf session ka paragraph aayega. View Source mein maintainer ka note bhi milega.",
    }],
    quizzes: [
      { question: "Page par kaunsa text dikhega?", options: ["Poora comment", "Sirf closing marker", "Pehla session wala paragraph"], answer: 2, explanation: "Parser comment ko visible text mein render nahi karta." },
      { question: "Comment ka end marker kya hai?", options: ["-->", "</comment>", "//"], answer: 0, explanation: "HTML comment ki boundary --> par khatam hoti hai." },
      { question: "Comment mein private password rakhna galat kyun hai?", options: ["Password h1 ban jaata hai", "Source mein padha ja sakta hai", "Browser usse encrypt karta hai"], answer: 1, explanation: "Browser ko bheja gaya source reader inspect kar sakta hai." },
    ],
  },
  {
    id: "study-foundations-html-colors",
    title: "HTML Colors",
    level: "Beginner",
    summary: "Ek rang ko naam, hex ya RGB ke roop mein pehchano.",
    content: [
      "Screen ke rang red, green aur blue light channels ki intensity se bante hain. RGB mein har channel aam taur par 0 se 255 tak hota hai. Chhe-digit hex mein har do digits ek channel hain aur ff ki decimal value 255 hai.",
      "Neeche do samples mein red aur blue mix karke purple banaya hai. Text aur background ka contrast check karo. Status batane ke liye rang ke saath “Khula” jaise shabd bhi do.",
    ],
    reading: { title: "W3Schools · HTML Colors", url: "https://www.w3schools.com/html/html_colors.asp" },
    examples: [{
      title: "Ek rang ki do spellings",
      code: "<p style=\"color: #800080\">Khula</p>\n<p style=\"color: rgb(128, 0, 128)\">Khula</p>",
      result: "Dono labels ek jaise purple dikhte hain kyunki red aur blue 128 hain aur green zero hai.",
    }],
    quizzes: [
      { question: "#ff0000 mein sabse zyada kaunsa channel hai?", options: ["Red", "Blue", "Green"], answer: 0, explanation: "Hex ki pehli pair red ke liye hai." },
      { question: "Dono labels ek jaise kyun hain?", options: ["Dono p hain isliye hamesha same hain", "Channel values barabar hain", "RGB ignore hota hai"], answer: 1, explanation: "80 hexadecimal decimal 128 hota hai." },
      { question: "Status rang ke saath shabdon mein kyun den?", options: ["RGB chhota ho jaaye", "Font load ho jaaye", "Rang alag na dikhe tab bhi matlab mile"], answer: 2, explanation: "Text reader ko independent signal deta hai." },
    ],
  },
  {
    id: "study-foundations-html-css",
    title: "HTML CSS",
    level: "Beginner",
    summary: "Common design ko selector aur stylesheet se kai elements par lagao.",
    content: [
      "CSS rule selector se elements chunta hai aur declarations unka appearance set karte hain. Inline style ek element par lagta hai. Head ke style block ka rule page mein reuse hota hai. External .css file ko kai pages link kar sakte hain.",
      "Ek notice class banao aur do paragraphs ko wahi class do. Jab dono ka look badalna ho to ek rule edit karo. Site ke multiple pages ke liye usi rule ko styles.css mein rakhkar head mein stylesheet link karo.",
    ],
    reading: { title: "W3Schools · HTML CSS", url: "https://www.w3schools.com/html/html_css.asp" },
    examples: [{
      title: "Do notices, ek rule",
      code: "<style>\n  .notice { border-left: 4px solid teal; padding-left: 1rem; }\n</style>\n<p class=\"notice\">Gate A khula hai.</p>\n<p class=\"notice\">Pass saath rakho.</p>",
      result: "Dono notices ki left side par teal line aur text se pehle gap aayega. Ek selector dono class matches ko style karta hai.",
    }],
    quizzes: [
      { question: ".notice kya select karta hai?", options: ["Sirf ek id", "notice class wale elements", "notice naam ka tag"], answer: 1, explanation: "Dot class selector ka prefix hai." },
      { question: "Site ke kai pages ka design kahan rakhoge?", options: ["Har paragraph ke text mein", "Doctype mein", "Shared .css file"], answer: 2, explanation: "Har page usi stylesheet ko link kar sakta hai." },
      { question: "Border aur text ke beech gap kisne diya?", options: ["padding-left", "border color", "class naam ki length"], answer: 0, explanation: "Padding element ki boundary ke andar jagah banati hai." },
    ],
  },
  {
    id: "study-foundations-html-project-ii",
    title: "HTML Project II",
    level: "Beginner",
    summary: "Ek quote card banao jisme baat, bolne wala aur design teenon pehchane ja sakein.",
    content: [
      "Quote ko alag box mein dikhane se reader ko ek nazar mein context milta hai. Pehle quotation aur attribution ka structure banao. Phir class rule se border aur spacing do taaki ek aur quote add karne par design repeat ho sake.",
      "Style block ko head mein aur figure ko body mein rakho. Doosra figure copy karo aur speaker badlo. Check karo ki dono cards mein naam quote ke bahar dikhta hai aur ek rule se dono cards style hote hain.",
    ],
    reading: { title: "W3Schools · HTML Project II", url: "https://www.w3schools.com/html/html_project_quote.php" },
    examples: [{
      title: "Club ka quote card",
      code: "<style>\n  .quote { border-left: 4px solid teal; padding: 1rem; }\n  .quote blockquote { margin: 0 0 .5rem; }\n</style>\n<figure class=\"quote\">\n  <blockquote><p>Har draft se ek naya sawaal milta hai.</p></blockquote>\n  <figcaption>Tara, writing club</figcaption>\n</figure>",
      result: "Tara ki baat aur uska naam ek bordered card mein dikhenge. Naam quote ke neeche apni caption mein hoga.",
    }],
    quizzes: [
      { question: "Tara ka naam quote ke bahar kyun hai?", options: ["Naam CSS hai", "blockquote text chhupa deta hai", "Woh attribution hai"], answer: 2, explanation: "Attribution batata hai kisne kaha aur quotation asli baat rakhta hai." },
      { question: "Doosre card ko wahi style kaise milega?", options: ["figure ko quote class do", "Naya doctype do", "Naam Tara hi rakho"], answer: 0, explanation: "Class selector dono figures match karega." },
      { question: ".quote blockquote kis par lagta hai?", options: ["Har figcaption par", "quote class ke andar ke blockquote par", "Sirf figure ke parent par"], answer: 1, explanation: "Space wala selector descendant ko chunta hai." },
    ],
  },
]);
