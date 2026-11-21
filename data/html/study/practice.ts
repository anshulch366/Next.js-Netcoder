import { chapter } from "../../resource-chapter";

export const practice = chapter("HTML Examples", [
  {
    id: "study-practice-html-examples",
    title: "HTML Examples",
    level: "Beginner",
    summary: "Chhote examples se browser behaviour ko predict aur verify karna seekho.",
    content: [
      "Example padhte waqt pehle ek specific sawaal banao. Agar tum ek saath teen cheezein badloge to result ka kaaran pehchanna mushkil hoga. Ek baseline rakho aur ek attribute badalkar compare karo.",
      "Neeche details ka default state dekho. Phir opening tag mein open add karo aur reload karo. Heading aur paragraph same rakho taaki sirf shuru ka expanded state badle.",
    ],
    reading: { title: "W3Schools · HTML Examples", url: "https://www.w3schools.com/html/html_examples.asp" },
    examples: [{
      title: "Disclosure ka experiment",
      code: "<details>\n  <summary>Kit kya laani hai?</summary>\n  <p>Pencil aur sketchbook.</p>\n</details>",
      result: "Pehle summary dikhegi. Use activate karne par list wala paragraph dikhega. open attribute lagane par page pehle se expanded khulega.",
    }],
    quizzes: [
      { question: "Collapsed state mein kaunsa text mila?", options: ["Pencil aur sketchbook.", "Koi text nahi", "Kit kya laani hai?"], answer: 2, explanation: "Summary disclosure ka visible label hai." },
      { question: "Default expanded state ke liye kya jodo?", options: ["open", "checked", "selected"], answer: 0, explanation: "details par open boolean attribute state set karta hai." },
      { question: "Ek waqt par ek change kyun karte hain?", options: ["Browser ko restart karne ke liye", "Result ka cause pehchanne ke liye", "Code chhupaane ke liye"], answer: 1, explanation: "Controlled comparison mein changed variable saaf hota hai." },
    ],
  },
  {
    id: "study-practice-html-videos",
    title: "HTML Videos",
    level: "Beginner",
    summary: "Video lesson dekhte waqt pause, prediction aur practice ko ek saath use karo.",
    content: [
      "Demo dekhkar code pehchanna aur bina dekhe use banana alag skills hain. Teacher output dikhaye usse pehle pause karke apna prediction likho. Phir snippet khud type karo aur result compare karo. Linked video library se apna topic chun sakte ho.",
      "Headings ka video dekhte waqt neeche wale outline ko predict karo. Preview dekhne se pehle batao kaunsa text subsection hoga. Video ke baad topic badalkar wahi pattern bina copy kiye banao.",
    ],
    reading: { title: "W3Schools · HTML Videos", url: "https://www.w3schools.com/html/html_videos.asp" },
    examples: [{
      title: "Pause karke outline predict karo",
      code: "<h1>Photo walk</h1>\n<h2>Equipment</h2>\n<h3>Lens</h3>\n<h2>Route</h2>",
      result: "Lens Equipment ke andar ka subsection hai. Route aur Equipment ek hi rank par hain. Font size badalne par bhi rank wahi rehti hai.",
    }],
    quizzes: [
      { question: "Demo mein Lens kis section ke andar hai?", options: ["Equipment", "Route", "Koi section nahi"], answer: 0, explanation: "Uska h3 pehle h2 ke baad aata hai." },
      { question: "Video pause karke pehle kya likhoge?", options: ["Sirf playback speed", "Expected outline", "File size"], answer: 1, explanation: "Prediction se pata chalta hai kaunsa relationship samjha." },
      { question: "Independent practice kaunsa hai?", options: ["Sirf clip replay karna", "Tab close karna", "Naye topic ka same hierarchy wala page banana"], answer: 2, explanation: "Naya content decision ko dobara apply karwata hai." },
    ],
  },
  {
    id: "study-practice-html-editor",
    title: "HTML Editor",
    level: "Beginner",
    summary: "Try-it editor mein source aur preview ka chhota feedback loop chalao.",
    content: [
      "Interactive editor source pane ki HTML ko preview document mein render karta hai. Local editor mein yahi loop save aur reload se chalta hai. Preview reset hone par unsaved changes kho sakte hain, isliye kaam ka snippet apni file mein rakho.",
      "Snippet ko editor mein paste karke Run karo. Sirf href ka fragment badlo aur dobara Run karo. Matching target par jump aur missing target ka farq dekho. Local browser mein bhi yahi experiment kiya ja sakta hai.",
    ],
    reading: { title: "W3Schools · HTML Editor", url: "https://www.w3schools.com/html/html_editor.asp" },
    examples: [{
      title: "Fragment ko editor mein test karo",
      code: "<a href=\"#answer\">Jawaab par jao</a>\n<details open><summary>Practice</summary><p id=\"answer\">42</p></details>",
      result: "Link #answer ko target karega. href ko #missing karne par fragment badlega par matching element nahi milega. Chhote preview mein scroll ki zaroorat nahi bhi ho sakti.",
    }],
    quizzes: [
      { question: "Preview kis input se banta hai?", options: ["Sirf browser title", "Source pane ki HTML", "File icon"], answer: 1, explanation: "Editor current source ko render karta hai." },
      { question: "#missing target kyun nahi milta?", options: ["details open hai", "Link text Hindi hai", "Matching id maujood nahi hai"], answer: 2, explanation: "Fragment ko corresponding element chahiye." },
      { question: "Apne edits sambhalne ke liye kya karo?", options: ["Snippet apni file mein save karo", "Sirf preview scroll karo", "Font size badlo"], answer: 0, explanation: "Local copy editor reset ke baad bhi milti hai." },
    ],
  },
  {
    id: "study-practice-html-quiz",
    title: "HTML Quiz",
    level: "Beginner",
    summary: "Markup dekhkar output predict karo aur har answer ke peeche ka rule batao.",
    content: [
      "Quiz mein tag ka naam yaad hona kaafi nahi hota. Pehle sawaal pehchano ki woh appearance, meaning ya submitted data pooch raha hai. Phir code se woh line dhoondo jo answer decide karti hai.",
      "Neeche teen controls ke liye pehle paper par submitted pairs likho. Browser mein form submit karo aur query compare karo. Checked state, name aur disabled state ko ek-ek karke badlo.",
    ],
    reading: { title: "W3Schools · HTML Quiz", url: "https://www.w3schools.com/html/html_quiz.asp" },
    examples: [{
      title: "Kaunse pairs jaayenge?",
      code: "<form>\n  <input name=\"city\" value=\"Pune\" readonly>\n  <input name=\"batch\" value=\"A\" disabled>\n  <label><input type=\"checkbox\" name=\"pass\" value=\"yes\" checked> Pass</label>\n  <button>Check</button>\n</form>",
      result: "Pehli submission mein city=Pune aur pass=yes jaayenge. Disabled batch chhootega. Checkbox untick karoge to pass bhi chhootega.",
    }],
    quizzes: [
      { question: "readonly city ka kya hoga?", options: ["Field chhootega", "Input blank hoga", "Pune submit hoga"], answer: 2, explanation: "Readonly editing rokta hai, submission mein field aa sakta hai." },
      { question: "batch kyun chhootega?", options: ["Disabled hai", "Value ek letter hai", "Name chhota hai"], answer: 0, explanation: "Disabled control successful form data ka hissa nahi hai." },
      { question: "Pass untick ho to kya milega?", options: ["pass=false zaroor aayega", "Pass key gayab hogi", "pass=yes rahega"], answer: 1, explanation: "Unchecked checkbox apna pair submit nahi karta." },
    ],
  },
  {
    id: "study-practice-html-exercises",
    title: "HTML Exercises",
    level: "Beginner",
    summary: "Adhoore snippet ko ek clearly defined requirement ke hisaab se poora karo.",
    content: [
      "Exercise mein expected behaviour pehle samajhna solution yaad karne se zyada kaam aata hai. Is task mein label click karne par seats field focus honi chahiye aur value 1 se kam submit nahi honi chahiye.",
      "Khud se label, id aur minimum likho. Phir worked answer se compare karo. Pehle label click, phir 0 aur 1 se submission test karo. Har check ek alag requirement verify karta hai.",
    ],
    reading: { title: "W3Schools · HTML Exercises", url: "https://www.w3schools.com/html/html_exercises.asp" },
    examples: [{
      title: "Seats field ka worked answer",
      code: "<form>\n  <label for=\"seats\">Seats</label>\n  <input id=\"seats\" name=\"seats\" type=\"number\" min=\"1\" required>\n  <button>Check seats</button>\n</form>",
      result: "Label focus transfer karta hai. Empty ya 0 invalid hai aur 1 valid hai. Valid submit mein seats=1 query parameter milega.",
    }],
    quizzes: [
      { question: "Label focus test fail ho to kya milao?", options: ["for aur id", "name aur min", "type aur required"], answer: 0, explanation: "Explicit label target input id se match karta hai." },
      { question: "Boundary test ke liye kaunsi pair achhi hai?", options: ["12 aur 13", "0 aur 1", "8 aur 9"], answer: 1, explanation: "Minimum ke turant neeche aur minimum par behaviour alag hai." },
      { question: "Empty value ko kaunsa rule rokta hai?", options: ["min akela", "id", "required"], answer: 2, explanation: "Minimum range aur missing value do alag constraints hain." },
    ],
  },
  {
    id: "study-practice-html-challenges",
    title: "HTML Challenges",
    level: "Intermediate",
    summary: "Requirements se solution design karo jab tag names pehle se na diye hon.",
    content: [
      "Challenge mein aapko outcome milta hai. Yahan goal hai FAQs ka answer keyboard se khule, close ho aur bina script chale. Pehle browser ka native element dhoondo jo yeh behaviour already deta hai.",
      "Do alag questions banao. Tab se pehle question tak jao aur Enter se toggle karo. Doosre ko bhi kholo aur verify karo ki independent disclosures ek doosre ko zabardasti band nahi karte.",
    ],
    reading: { title: "W3Schools · HTML Challenges", url: "https://www.w3schools.com/html/html_challenges.asp" },
    examples: [{
      title: "Do keyboard-friendly FAQs",
      code: "<details><summary>Entry kab hai?</summary><p>9 baje.</p></details>\n<details><summary>Kit milegi?</summary><p>Haan, reception par.</p></details>",
      result: "Har summary apna answer kholti hai. Dono khule reh sakte hain. Native disclosure bina custom JS kaam karta hai.",
    }],
    quizzes: [
      { question: "Question ka interactive label kahan hai?", options: ["p", "summary", "details ka title attribute"], answer: 1, explanation: "Summary disclosure ka activation control hai." },
      { question: "Doosre question ko kholne par pehla kyun khula reh sakta hai?", options: ["Dono ka text same hai", "JavaScript force karta hai", "Dono independent details hain"], answer: 2, explanation: "Is markup mein exclusive grouping nahi hai." },
      { question: "Keyboard requirement kaise verify karoge?", options: ["Tab aur Enter se operate karke", "Sirf mouse hover se", "Screen width badhaakar"], answer: 0, explanation: "Keyboard-only test actual focus aur activation check karta hai." },
    ],
  },
  {
    id: "study-practice-html-projects",
    title: "HTML Projects",
    level: "Intermediate",
    summary: "Ek brief ko deliverable, sample content aur acceptance checks mein badlo.",
    content: [
      "Project ek saath kai decisions test karta hai. Reading list ke liye pehle reader ka kaam likho: kitaab pehchanna aur uski notes file kholna. Isse heading, list aur descriptive links ki need seedhe samajh aati hai.",
      "Do local notes files banao, phir index mein unhe link karo. Dono links keyboard se kholo aur file ke title se manzil check karo. Ek teesri kitaab jodkar dekho ki structure aasani se badhta hai.",
    ],
    reading: { title: "W3Schools · HTML Projects", url: "https://www.w3schools.com/html/html_projects.php" },
    examples: [{
      title: "Reading list project",
      code: "<main><h1>Meri reading list</h1>\n  <ul>\n    <li><a href=\"river.html\">River ke notes</a></li>\n    <li><a href=\"forest.html\">Forest ke notes</a></li>\n  </ul>\n</main>",
      result: "Do book-specific links dikhenge. river.html aur forest.html usi directory mein available hon to dono apna local page kholenge.",
    }],
    quizzes: [
      { question: "Brief ki primary user action kya hai?", options: ["Text rotate karna", "Photo upload", "Sahi notes kholna"], answer: 2, explanation: "Project ka link structure isi need ko poora karta hai." },
      { question: "Teesri kitaab kahan add hogi?", options: ["ul mein naya li", "h1 ke andar li", "Doctype se pehle"], answer: 0, explanation: "List ka har item ek kitaab represent karta hai." },
      { question: "Kaunsa acceptance check sabse direct hai?", options: ["Sirf border dekhna", "Har link se intended notes file kholna", "Text ka character count"], answer: 1, explanation: "Navigation requirement ko actual destination se test karte hain." },
    ],
  },
  {
    id: "study-practice-html-website",
    title: "HTML Website",
    level: "Beginner",
    summary: "Alag pages ko consistent navigation se ek chhoti website banao.",
    content: [
      "Ek website mein har document ka apna URL aur title hota hai. Same navigation order se learner doosre page par bhi apna raasta pehchanta hai. Relative links folder structure se judte hain, isliye file move karne par unhe check karo.",
      "Index aur about file ek folder mein banao. Neeche ka nav dono mein rakho. Current page par aria-current=\"page\" sahi link ko do. Dono directions mein jaakar tab title aur active link verify karo.",
    ],
    reading: { title: "W3Schools · HTML Website", url: "https://www.w3schools.com/html/html_website.asp" },
    examples: [{
      title: "About page ki navigation",
      code: "<title>About · Art Club</title>\n<nav aria-label=\"Site\">\n  <a href=\"index.html\">Home</a>\n  <a href=\"about.html\" aria-current=\"page\">About</a>\n</nav>\n<main><h1>About the club</h1></main>",
      result: "About par current page ki pehchan milti hai. Home link isi folder ki index.html kholta hai. Home file mein current marker Home par lagana hoga.",
    }],
    quizzes: [
      { question: "Current page kis attribute se bataya?", options: ["aria-current=\"page\"", "target=\"page\"", "alt=\"page\""], answer: 0, explanation: "Assistive technology ko active destination ki information milti hai." },
      { question: "About aur index kahan hone chahiye is example mein?", options: ["Hamesha alag domains par", "Same folder mein", "Sirf downloads mein"], answer: 1, explanation: "Simple filenames current directory mein resolve hote hain." },
      { question: "Home page par current marker kahan rakhen?", options: ["Dono links par", "Title ke andar", "Home link par"], answer: 2, explanation: "Navigation mein actual current page mark hona chahiye." },
    ],
  },
  {
    id: "study-practice-html-syllabus",
    title: "HTML Syllabus",
    level: "Beginner",
    summary: "Topics ka sequence unki dependencies ke hisaab se samjho.",
    content: [
      "Document aur elements samajhoge to attributes ka target saaf hoga. Links aur ids samajhoge to accessible labels aur fragment navigation aasaan honge. Forms aur media ke baad APIs par jaane se markup aur behaviour ka rishta samajh aayega.",
      "Har unit ka ek observable outcome banao. Neeche ke snippet mein pehle heading pehchano, phir id aur href ka match samjhao, phir keyboard se jump test karo. Isi task se teen units revise ho jaate hain.",
    ],
    reading: { title: "W3Schools · HTML Syllabus", url: "https://www.w3schools.com/html/html_syllabus.asp" },
    examples: [{
      title: "Milestone: linked section",
      code: "<h1>Course notebook</h1>\n<a href=\"#forms-unit\">Forms unit kholo</a>\n<section id=\"forms-unit\"><h2>Forms</h2><p>Label aur input ka rishta.</p></section>",
      result: "Ek document, ek named target aur us tak jaata link milta hai. Learner code se structure aur navigation dono demonstrate kar sakta hai.",
    }],
    quizzes: [
      { question: "Label association se pehle kaunsa concept kaam aayega?", options: ["Video codec", "Attributes aur id", "Worker lifecycle"], answer: 1, explanation: "Label ka for target ki id se milta hai." },
      { question: "Is milestone ka observable output kya hai?", options: ["Sirf topic ka naam yaad hona", "Page download hona", "Link se Forms section target hona"], answer: 2, explanation: "Target jump ko reader action se check kar sakta hai." },
      { question: "Forms heading h2 kyun hai?", options: ["Notebook ke andar unit hai", "Forms hamesha h2 hai", "id usse h2 banati hai"], answer: 0, explanation: "Heading rank outline ke relation se aati hai." },
    ],
  },
  {
    id: "study-practice-html-study-plan",
    title: "HTML Study Plan",
    level: "Beginner",
    summary: "Padhai ko chhote repeatable sessions aur yaad se practice mein baanto.",
    content: [
      "Ek session mein concept padho, apna example banao aur agle session mein use bina notes phir banao. Retrieval se pata chalta hai ki rule yaad hai ya sirf example familiar lag raha tha. Mushkil topic ko jaldi revisit karo.",
      "Teen sessions ka ordered plan banao. Day 1 document, Day 2 links aur Day 3 dono milaakar mini index banao. Har din code run karne ke baad ek line likho ki kya predict kiya aur actual kya hua.",
    ],
    reading: { title: "W3Schools · HTML Study Plan", url: "https://www.w3schools.com/html/html_study_plan.asp" },
    examples: [{
      title: "Teen din ka practice plan",
      code: "<ol>\n  <li>Din 1: Bina copy kiye title aur heading banao.</li>\n  <li>Din 2: Do files ko relative link se jodo.</li>\n  <li>Din 3: Dono milaakar mini site test karo.</li>\n</ol>",
      result: "Browser teen ordered tasks dikhata hai. Din 3 ka test tab poora hoga jab page pehchan aur dono files ke beech navigation kaam kare.",
    }],
    quizzes: [
      { question: "Plan ke liye ol kyun fit hai?", options: ["Har item link hai", "Number CSS ko rokta hai", "Sessions ka order meaningful hai"], answer: 2, explanation: "Later task earlier skills use karta hai." },
      { question: "Din 2 ka practical check kya hai?", options: ["Link se doosri file khule", "Heading underline ho", "File name bold ho"], answer: 0, explanation: "Relative path ko actual navigation se verify karte hain." },
      { question: "Agle din bina notes code banana kya check karta hai?", options: ["Internet speed", "Rule recall aur application", "Browser ka version"], answer: 1, explanation: "Khud reproduce karne se learning gaps nazar aate hain." },
    ],
  },
  {
    id: "study-practice-html-interview-prep",
    title: "HTML Interview Prep",
    level: "Intermediate",
    summary: "Interview mein markup choice ko example aur trade-off ke saath samjhao.",
    content: [
      "Aksar sawaal hota hai: link ya button kab? Pehle user ki intent bolo. Navigation ke liye href wala anchor naya address deta hai. Page ke andar action ke liye button keyboard behaviour ke saath milta hai. Sirf dono ka ek jaisa look decision nahi karta.",
      "Neeche dono controls padhkar pehle unka kaam samjhao. Phir batao ki native controls use karne se keyboard users ko kya milta hai. Chhote demo mein help open aur close karke apna jawab verify karo.",
    ],
    reading: { title: "W3Schools · HTML Interview Prep", url: "https://www.w3schools.com/html/html_interview_prep.asp" },
    examples: [{
      title: "Navigation aur action",
      code: "<a href=\"schedule.html\">Schedule dekho</a>\n<button popovertarget=\"help\">Help kholo</button>\n<p id=\"help\" popover>Schedule mein apna batch chuno.</p>",
      result: "Link doosra document kholta hai. Button supported browser mein isi page ki help toggle karta hai. Dono apna expected native interaction rakhte hain.",
    }],
    quizzes: [
      { question: "Schedule ke liye anchor kyun hai?", options: ["Destination URL hai", "Hamesha blue chahiye", "Anchor form submit karta hai"], answer: 0, explanation: "User doosre resource par navigate karta hai." },
      { question: "Help ke liye button kyun hai?", options: ["Button hi text dikha sakta hai", "Isi page par action hai", "Button ke paas href hai"], answer: 1, explanation: "Toggle navigation ke bajay state change hai." },
      { question: "Interview answer ko kaise demonstrate karoge?", options: ["Sirf colors gin kar", "Dono ko div kehkar", "Dono controls keyboard se chalaakar"], answer: 2, explanation: "Demonstration native focus aur behaviour saaf dikhata hai." },
    ],
  },
  {
    id: "study-practice-html-summary",
    title: "HTML Summary",
    level: "Beginner",
    summary: "Ek final page review mein structure, navigation aur accessible input ko saath check karo.",
    content: [
      "HTML ka kaam content ko roles aur relationships dena hai. Review ke waqt pehle tab aur page heading check karo, phir links ki manzil aur form labels test karo. Sirf dekhne se broken association pakad mein nahi aata.",
      "Neeche page ko keyboard se padho. Search link se form tak jao, label activate karo aur dummy topic submit karo. Phir source mein id, for aur name dhoondhkar har result ka reason batao.",
    ],
    reading: { title: "W3Schools · HTML Summary", url: "https://www.w3schools.com/html/html_summary.asp" },
    examples: [{
      title: "Tez revision ka mini page",
      code: "<title>Topic search</title>\n<main><h1>Library</h1><a href=\"#search\">Search par jao</a>\n  <form id=\"search\"><label for=\"topic\">Topic</label>\n    <input id=\"topic\" name=\"q\"><button>Khojo</button>\n  </form>\n</main>",
      result: "Tab Topic search, heading Library, fragment target search aur submitted key q hai. Har result ek alag markup decision se aata hai.",
    }],
    quizzes: [
      { question: "Form ka fragment target kya hai?", options: ["topic", "search", "q"], answer: 1, explanation: "Link ka #search form ki id refer karta hai." },
      { question: "Label click kis input ko focus karega?", options: ["name search wale ko", "Har input ko", "id topic wale ko"], answer: 2, explanation: "for=\"topic\" matching id ko target karta hai." },
      { question: "Submit mein field ka naam kya hoga?", options: ["q", "topic", "search"], answer: 0, explanation: "Input name submitted key define karta hai." },
    ],
  },
  {
    id: "study-practice-html-accessibility",
    title: "HTML Accessibility",
    level: "Intermediate",
    summary: "Aisa page banao jo keyboard, screen reader aur text alternatives ke saath kaam kare.",
    content: [
      "Visible label, logical heading order aur meaningful alt reader ko alag tareekon se wahi information dete hain. Native controls keyboard focus aur activation sambhalte hain. Placeholder typing ke baad gayab ho jaata hai, isliye permanent label zaroori hai.",
      "Field ko visible label aur extra instruction do. aria-describedby se hint ko field se jodo. Keyboard se focus le jao aur accessibility tree mein name aur description alag-alag check karo.",
    ],
    reading: { title: "W3Schools · HTML Accessibility", url: "https://www.w3schools.com/html/html_accessibility.asp" },
    examples: [{
      title: "Seat code ka accessible field",
      code: "<label for=\"seat\">Seat code</label>\n<input id=\"seat\" name=\"seat\" aria-describedby=\"seat-hint\">\n<p id=\"seat-hint\">Ticket par A12 jaisa code dekho.</p>",
      result: "Field ka accessible naam Seat code aur description ticket wala hint hoga. Label click input ko focus karta hai aur typing ke baad bhi label dikhta hai.",
    }],
    quizzes: [
      { question: "Accessible naam kahan se aata hai?", options: ["Sirf name attribute", "Hint ki id ka text khud", "Associated label"], answer: 2, explanation: "Label control ko human-readable naam deta hai." },
      { question: "Extra hint ka relation kaunsa attribute banata hai?", options: ["aria-describedby", "aria-current", "href"], answer: 0, explanation: "Attribute description element ki id refer karta hai." },
      { question: "Keyboard test mein kya dekhna chahiye?", options: ["Sirf mouse hover", "Logical focus aur usable controls", "File ka extension"], answer: 1, explanation: "Keyboard users ko action tak pahunchna aur use poora karna chahiye." },
    ],
  },
]);
