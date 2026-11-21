import { chapter } from "../../resource-chapter";

export const lookup = chapter("HTML References", [
  {
    id: "study-lookup-html-tag-list",
    title: "HTML Tag List",
    level: "Beginner",
    summary: "Tag reference mein naam ke saath purpose, allowed content aur usage dekho.",
    content: [
      "Tag list tab kaam aati hai jab desired result pata hai par element ka naam ya syntax yaad nahi. Pehle content ka role decide karo. Phir reference entry mein dekho ki element kahan allowed hai, children kya ho sakte hain aur closing tag kaise likhna hai.",
      "Expandable answer ke liye details aur summary entries dekho. Summary ko pehla child aur baaki content ko uske baad rakho. Neeche ke reading link se poori tag list kholkar kisi doosre element ka purpose bhi check kar sakte ho.",
    ],
    reading: { title: "W3Schools · HTML Tag List", url: "https://www.w3schools.com/tags/default.asp" },
    examples: [{
      title: "Reference se disclosure banao",
      code: "<details>\n  <summary>Workshop address</summary>\n  <p>Room 4, Library building</p>\n</details>",
      result: "Workshop address label dikhega. Activate karne par address khulega. Summary ki jagah aur purpose reference ki content rules se milte hain.",
    }],
    quizzes: [
      { question: "Tag choose karne ki pehli basis kya hai?", options: ["Content ka role", "Sabse chhota tag naam", "Default color"], answer: 0, explanation: "Semantic purpose se suitable element milta hai." },
      { question: "details ka label kaunsa child hai?", options: ["caption", "summary", "legend"], answer: 1, explanation: "Summary disclosure ka label deta hai." },
      { question: "Koi tag nest karne se pehle kya check karoge?", options: ["Browser ka wallpaper", "File size akela", "Allowed content aur parent"], answer: 2, explanation: "Valid nesting reference ke content rules se milti hai." },
    ],
  },
  {
    id: "study-lookup-html-attributes",
    title: "HTML Attributes",
    level: "Beginner",
    summary: "Attribute reference mein dekho kaunsa attribute kin elements par valid hai.",
    content: [
      "Har attribute har tag par meaning nahi rakhta. href anchor ki destination, src image ka resource aur alt image ka text alternative deta hai. Reference mein attribute ke saath applicable elements, accepted values aur behaviour dekho.",
      "Ek link ke andar logo image rakho. Image hi link ka saara content hai, isliye alt destination ka purpose bataye. Phir href aur src ko alag-alag badalkar navigation aur displayed resource ka farq check karo.",
    ],
    reading: { title: "W3Schools · HTML Attributes", url: "https://www.w3schools.com/tags/ref_attributes.asp" },
    examples: [{
      title: "Logo se home link",
      code: "<a href=\"index.html\">\n  <img src=\"logo.png\" alt=\"Art Club home\" width=\"64\" height=\"64\">\n</a>",
      result: "logo.png dikhta hai aur activate karne par index.html khulta hai. Link ka readable naam image ke alternative se milta hai.",
    }],
    quizzes: [
      { question: "Image file badalni hai. Kya edit karoge?", options: ["href", "src", "alt akela"], answer: 1, explanation: "src linked image resource choose karta hai." },
      { question: "Click ki destination kis attribute mein hai?", options: ["src", "width", "href"], answer: 2, explanation: "Anchor href document ka destination deta hai." },
      { question: "Attribute reference mein applicability kyun dekhen?", options: ["Behaviour element par depend karta hai", "Har attribute har tag par same hai", "Tags ke color fix hain"], answer: 0, explanation: "Element-specific attributes apne supported contexts mein meaning rakhte hain." },
    ],
  },
  {
    id: "study-lookup-html-global-attributes",
    title: "HTML Global Attributes",
    level: "Beginner",
    summary: "Global attributes ko alag element types par consistent tarah se lagao.",
    content: [
      "id, class, lang, title aur data-* jaise attributes HTML elements par broadly use kiye ja sakte hain. lang text ki bhasha batata hai. data-* apne script ke liye custom string data rakhta hai. Browser is custom value ko apne aap screen par nahi dikhata.",
      "Mixed-language note mein phrase par lang set karo aur article par data-level do. JavaScript mein data-level ko dataset.level se padho. Visible instruction ko normal text mein bhi rakho.",
    ],
    reading: { title: "W3Schools · HTML Global Attributes", url: "https://www.w3schools.com/tags/ref_standardattributes.asp" },
    examples: [{
      title: "Language aur custom data",
      code: "<article id=\"note\" data-level=\"basic\">\n  <p>French mein hello ko <span lang=\"fr\">bonjour</span> kehte hain.</p>\n</article>\n<script>console.log(document.querySelector(\"#note\").dataset.level);</script>",
      result: "Bonjour ka language French mark hoga. Console mein basic milega aur page par paragraph dikhega.",
    }],
    quizzes: [
      { question: "Custom attribute ka standard prefix kya hai?", options: ["custom:", "aria-data-only", "data-"], answer: 2, explanation: "data-* custom application data ka convention hai." },
      { question: "data-level ka DOM access kya hai?", options: ["dataset.level", "dataset.data-level", "style.level"], answer: 0, explanation: "dataset data- prefix hataakar property deta hai." },
      { question: "Sirf bonjour par French kaise mark ki?", options: ["Page ka charset fr", "span par lang=\"fr\"", "data-level=\"fr\""], answer: 1, explanation: "lang local text ki language override karta hai." },
    ],
  },
  {
    id: "study-lookup-html-browser-support",
    title: "HTML Browser Support",
    level: "Intermediate",
    summary: "Reference table padhkar feature ko target browsers mein test karo aur fallback do.",
    content: [
      "Browser support ek tag ke basic parsing aur uski har feature ke liye alag ho sakta hai. Current reference mein specific feature aur version dekho. Apne target browser mein behaviour verify karo. Feature detection se optional enhancement conditionally laga sakte ho.",
      "Help text pehle se visible rakho. Sirf jab showPopover method available ho tab usse popover banao aur button dikhao. Dono paths mein actual message padhe jaane ka test karo.",
    ],
    reading: { title: "W3Schools · HTML Browser Support", url: "https://www.w3schools.com/tags/ref_html_browsersupport.asp" },
    examples: [{
      title: "Feature detection ke saath help",
      code: "<button id=\"trigger\" hidden popovertarget=\"hint\">Hint</button>\n<p id=\"hint\">Apne ticket ka seat code dekho.</p>\n<script>\n  const hint = document.querySelector(\"#hint\");\n  if (typeof hint.showPopover === \"function\") {\n    hint.setAttribute(\"popover\", \"\");\n    document.querySelector(\"#trigger\").hidden = false;\n  }\n</script>",
      result: "Support ho to button help kholta hai. Method available na ho to paragraph shuru se readable rehta hai aur bekaar button hidden rehta hai.",
    }],
    quizzes: [
      { question: "Snippet kya detect karta hai?", options: ["showPopover method", "Browser ka naam", "OS ka wallpaper"], answer: 0, explanation: "Capability check directly feature ki availability dekhta hai." },
      { question: "Unsupported browser ko hint kaise milta hai?", options: ["Sirf console mein", "Normal visible paragraph se", "Dead button se"], answer: 1, explanation: "Default markup content ko readable rakhta hai." },
      { question: "Support table ke baad bhi test kyun karein?", options: ["Version numbers font badalte hain", "HTML run hi nahi hota", "Apna actual interaction verify karne ke liye"], answer: 2, explanation: "Version support aur poora user flow alag checks hain." },
    ],
  },
  {
    id: "study-lookup-html-event-attributes",
    title: "HTML Event Attributes",
    level: "Intermediate",
    summary: "click, input aur change jaise events ko unke trigger se samjho.",
    content: [
      "Event attribute browser ko batata hai ki kisi event par kaunsa JavaScript chale. oninput typing ke saath value badalte hi chal sakta hai. onchange text field par aam taur par changed value commit hone par chalta hai. Bade projects mein addEventListener se logic markup se alag rakh sakte ho.",
      "Neeche oninput ke chhote example mein har edit par character count update hota hai. Paste aur delete bhi try karo. Sirf keydown sunne par mouse se paste jaise edits miss ho sakte hain.",
    ],
    reading: { title: "W3Schools · HTML Event Attributes", url: "https://www.w3schools.com/tags/ref_eventattributes.asp" },
    examples: [{
      title: "Field ka live length",
      code: "<label>Naam <input oninput=\"document.getElementById('length').textContent = this.value.length\"></label>\n<output id=\"length\">0</output>",
      result: "Mira type karne par 4 dikhega. Ek character delete karoge to 3 dikhega. JavaScript length UTF-16 code units ginti hai, isliye kuch emojis ka count alag ho sakta hai.",
    }],
    quizzes: [
      { question: "Har edit par kaunsa event suitable hai?", options: ["load", "input", "submit"], answer: 1, explanation: "input value edits par trigger hota hai." },
      { question: "Handler mein this yahan kya hai?", options: ["Poora document", "Output element", "Input element"], answer: 2, explanation: "Inline handler ka this us element ko refer karta hai." },
      { question: "Mira se a hataane par output kya hoga?", options: ["3", "4", "0"], answer: 0, explanation: "Bachi string Mir ki length 3 hai." },
    ],
  },
  {
    id: "study-lookup-html-colors",
    title: "HTML Colors",
    level: "Beginner",
    summary: "Named color reference se readable CSS value chuno aur contrast verify karo.",
    content: [
      "CSS named colors fixed sRGB values ko naam dete hain. Reference mein naam aur hex equivalent dekhkar design specification se match kar sakte ho. Foreground ka naam akela readability decide nahi karta, background ke saath contrast bhi check karo.",
      "Reference mein navy aur ivory dekho. Ek sample ko names aur doosre ko equivalent hex values se style karo. Dono ko side by side compare karo aur message ke meaning ke liye text bhi rakho.",
    ],
    reading: { title: "W3Schools · HTML Colors", url: "https://www.w3schools.com/tags/ref_colornames.asp" },
    examples: [{
      title: "Naam aur equivalent hex",
      code: "<p style=\"color: navy; background: ivory\">Room khula hai</p>\n<p style=\"color: #000080; background: #fffff0\">Room khula hai</p>",
      result: "Dono paragraphs ka foreground aur background ek jaisa hoga. Navy ka blue channel 128 hai aur ivory halka warm background hai.",
    }],
    quizzes: [
      { question: "navy ka hex kya hai?", options: ["#800000", "#008000", "#000080"], answer: 2, explanation: "Navy mein red aur green zero aur blue 128 hai." },
      { question: "Text readability ke liye kya compare karoge?", options: ["Foreground aur background", "Sirf naam ki length", "Sirf border width"], answer: 0, explanation: "Contrast dono colors ke combination par depend karta hai." },
      { question: "Names ko exact hex se badalne par kya badlega?", options: ["Text gayab hoga", "Yahan appearance same rahegi", "Paragraph link banega"], answer: 1, explanation: "Named values specified colors par map hoti hain." },
    ],
  },
  {
    id: "study-lookup-html-canvas",
    title: "HTML Canvas",
    level: "Intermediate",
    summary: "Canvas 2D reference mein properties, path commands aur paint methods alag pehchano.",
    content: [
      "strokeStyle pen ka rang set karta hai. beginPath naya path shuru karta hai, moveTo starting point rakhta hai aur lineTo segment jodta hai. Jab tak stroke ya fill nahi karoge, sirf path banana pixels par line paint nahi karta.",
      "Canvas lo, context ka current path shuru karo aur do coordinates jodo. stroke ko temporarily hataakar redraw karo. Blank canvas se clear hoga ki geometry define karna aur use paint karna do steps hain.",
    ],
    reading: { title: "W3Schools · HTML Canvas", url: "https://www.w3schools.com/tags/ref_canvas.asp" },
    examples: [{
      title: "Ek diagonal line",
      code: "<canvas id=\"line\" width=\"120\" height=\"60\">Upar jaati line</canvas>\n<script>\n  const ctx = document.querySelector(\"#line\").getContext(\"2d\");\n  ctx.strokeStyle = \"navy\";\n  ctx.beginPath();\n  ctx.moveTo(10, 50);\n  ctx.lineTo(110, 10);\n  ctx.stroke();\n</script>",
      result: "Line left-bottom ke paas se right-top ki taraf jaayegi. strokeStyle rang deta hai aur stroke actual path draw karta hai.",
    }],
    quizzes: [
      { question: "Path ko paint kaun karta hai?", options: ["stroke()", "moveTo()", "beginPath()"], answer: 0, explanation: "Stroke current path ki outline draw karta hai." },
      { question: "Naya path shuru karne se pehle kaunsa call?", options: ["lineTo()", "beginPath()", "getItem()"], answer: 1, explanation: "beginPath previous current path ko reset karta hai." },
      { question: "Line right jaate hue upar kyun uthti hai?", options: ["Dono coordinates ghat rahe hain", "Canvas bottom se y ginta hai", "x badh raha aur y ghat raha hai"], answer: 2, explanation: "Default origin top-left mein hota hai." },
    ],
  },
  {
    id: "study-lookup-html-audio-video",
    title: "HTML Audio/Video",
    level: "Intermediate",
    summary: "Media DOM reference se player ki state, actions aur events padho.",
    content: [
      "Audio aur video HTMLMediaElement ki properties share karte hain. paused current state, currentTime seconds mein position aur duration total length batata hai. Metadata load hone se pehle duration available na ho sakti hai.",
      "Apni recording rakho aur loadedmetadata listener lagao. Listener mein duration padho aur result ko text mein dikhao. Play ke baad console se currentTime check karo aur pause par compare karo.",
    ],
    reading: { title: "W3Schools · HTML Audio/Video", url: "https://www.w3schools.com/tags/ref_av_dom.asp" },
    examples: [{
      title: "Duration metadata padhna",
      code: "<audio id=\"clip\" controls></audio>\n<p id=\"seconds\">Duration ka intezaar</p>\n<script>\n  const clip = document.querySelector(\"#clip\");\n  clip.addEventListener(\"loadedmetadata\", () => {\n    document.querySelector(\"#seconds\").textContent = Math.round(clip.duration) + \" seconds\";\n  });\n  clip.src = \"intro.mp3\";\n</script>",
      result: "Valid finite recording load hone par rounded duration dikhegi. 12.6 second ki recording ke liye text 13 seconds hoga.",
    }],
    quizzes: [
      { question: "Duration kab padh rahe hain?", options: ["CSS load par", "loadedmetadata par", "First keydown par"], answer: 1, explanation: "Event media ki metadata availability batata hai." },
      { question: "Playback position ki property kya hai?", options: ["duration", "paused", "currentTime"], answer: 2, explanation: "currentTime current time offset seconds mein deta hai." },
      { question: "12.6 ko example kaise dikhayega?", options: ["13 seconds", "12 milliseconds", "126 minutes"], answer: 0, explanation: "Math.round nearest integer leta hai." },
    ],
  },
  {
    id: "study-lookup-html-doctypes",
    title: "HTML Doctypes",
    level: "Beginner",
    summary: "DOCTYPE ki historical aur modern role ko samjho.",
    content: [
      "Purane HTML versions ke doctypes mein public identifiers aur DTD references milte the. Modern HTML ka short doctype browser ko standards mode select karne deta hai. Yeh visible element ya version download karne ka command nahi hai.",
      "Nayi file mein sabse pehle doctype rakho. Browser console mein document.compatMode padhkar mode check karo. Doctype hataakar ek alag test file reload karo aur result compare karo.",
    ],
    reading: { title: "W3Schools · HTML Doctypes", url: "https://www.w3schools.com/tags/ref_html_dtd.asp" },
    examples: [{
      title: "Document mode check",
      code: "<!doctype html>\n<html lang=\"en\">\n<head><title>Mode test</title></head>\n<body><script>document.body.append(document.compatMode);</script></body>\n</html>",
      result: "Is document mein CSS1Compat likha dikhega. Isi simple test se doctype hataane par quirks mode mein BackCompat milta hai.",
    }],
    quizzes: [
      { question: "Modern HTML declaration kya hai?", options: ["<doctype version=\"6\">", "<html5>", "<!doctype html>"], answer: 2, explanation: "Short declaration modern document ka standard start hai." },
      { question: "Is example mein standards mode ka output kya hai?", options: ["CSS1Compat", "BackCompat", "strictHTML"], answer: 0, explanation: "Browser document.compatMode mein CSS1Compat deta hai." },
      { question: "Doctype ko kahan likhen?", options: ["Footer ke andar", "Root html se pehle", "Har paragraph se pehle"], answer: 1, explanation: "Parser mode chunne ke liye shuruaat mein declaration dekhta hai." },
    ],
  },
  {
    id: "study-lookup-html-character-sets",
    title: "HTML Character Sets",
    level: "Beginner",
    summary: "Character repertoire, code point aur bytes ko alag samjho.",
    content: [
      "ASCII ke basic letters aur digits limited range mein hain. Unicode Hindi, currency aur aur bhi scripts ko code points deta hai. UTF-8 in numbers ko ek ya zyada bytes mein store karta hai. Reference tables kisi character ka number ya encoding samajhne mein madad deti hain.",
      "A aur ₹ ko TextEncoder se encode karke lengths dekho. Dono ek-ek Unicode code point hain par unki UTF-8 byte lengths alag hain. File ka size count karte waqt visible characters ginne se galat estimate ho sakta hai.",
    ],
    reading: { title: "W3Schools · HTML Character Sets", url: "https://www.w3schools.com/tags/ref_charactersets.asp" },
    examples: [{
      title: "Do symbols ki byte length",
      code: "<script>\n  const encoder = new TextEncoder();\n  console.log(encoder.encode(\"A\").length);\n  console.log(encoder.encode(\"₹\").length);\n</script>",
      result: "Console mein pehle 1 aur phir 3 aayega. A UTF-8 mein ek byte aur rupee sign teen bytes leta hai.",
    }],
    quizzes: [
      { question: "TextEncoder ka default output encoding kya hai?", options: ["UTF-8", "ASCII only", "UTF-16"], answer: 0, explanation: "Web TextEncoder UTF-8 bytes banata hai." },
      { question: "₹ kitne UTF-8 bytes leta hai?", options: ["1", "3", "8"], answer: 1, explanation: "U+20B9 ki UTF-8 sequence teen bytes hai." },
      { question: "Character count se byte count hamesha kyun nahi milta?", options: ["Har symbol ek image hai", "HTML har text double karta hai", "UTF-8 variable-length hai"], answer: 2, explanation: "Alag code points ki byte length alag ho sakti hai." },
    ],
  },
  {
    id: "study-lookup-html-url-encode",
    title: "HTML URL Encode",
    level: "Intermediate",
    summary: "Percent-encoding table se URL component ka encoded aur decoded roop milao.",
    content: [
      "Percent sign ke baad do hexadecimal digits ek byte represent karte hain. / path segments alag karta hai aur ? query ki shuruaat karta hai. Agar ye kisi value ke actual characters hon to component encode karo. Non-ASCII character ke UTF-8 bytes multiple percent pairs ban sakte hain.",
      "JavaScript console mein raw value ko encodeURIComponent se encode karo aur decodeURIComponent se wapas padho. Yeh kaam component par karo taaki full URL ka https:// aur routing separators apna role banaye rakhein.",
    ],
    reading: { title: "W3Schools · HTML URL Encode", url: "https://www.w3schools.com/tags/ref_urlencode.asp" },
    examples: [{
      title: "Shelf label round trip",
      code: "<script>\n  const label = \"A/B + C\";\n  const encoded = encodeURIComponent(label);\n  console.log(encoded);\n  console.log(decodeURIComponent(encoded));\n</script>",
      result: "Pehle A%2FB%20%2B%20C aur phir A/B + C milega. Slash, space aur literal plus alag encodings rakhte hain.",
    }],
    quizzes: [
      { question: "%2F kaunse character ko represent karta hai?", options: ["Plus", "Slash", "Space"], answer: 1, explanation: "Hex 2F slash ka byte hai." },
      { question: "encodeURIComponent space kaise likhta hai?", options: ["%2B", "Hamesha +", "%20"], answer: 2, explanation: "Yeh function space ko percent-encode karta hai." },
      { question: "decodeURIComponent ka result kya hoga?", options: ["A/B + C", "A B C", "A%2FB hi"], answer: 0, explanation: "Valid encoded component decode hokar original text deta hai." },
    ],
  },
  {
    id: "study-lookup-html-language-codes",
    title: "HTML Language Codes",
    level: "Beginner",
    summary: "lang ke liye bhasha ka code chuno aur zaroorat par script ya region jodo.",
    content: [
      "Document ki primary language root html par dene se pronunciation aur language-aware processing mein madad milti hai. BCP 47 tags mein hi Hindi, en English aur fr French ko darshate hain. Latin script mein Hindi ke liye hi-Latn likh sakte ho.",
      "Page ki main language do aur alag language ke phrase par local override do. Language codes ka reference spelling ke liye dekho. Encoding ke liye meta charset alag rakho.",
    ],
    reading: { title: "W3Schools · HTML Language Codes", url: "https://www.w3schools.com/tags/ref_language_codes.asp" },
    examples: [{
      title: "Roman Hindi mein French phrase",
      code: "<html lang=\"hi-Latn\">\n<head><meta charset=\"utf-8\"><title>Greeting</title></head>\n<body><p>French mein <span lang=\"fr\">bonjour</span> bolte hain.</p></body>\n</html>",
      result: "Document ki primary language Roman Hindi aur phrase ki language French mark hoti hai. Supporting speech software pronunciation badal sakta hai.",
    }],
    quizzes: [
      { question: "hi-Latn mein Latn kya batata hai?", options: ["Country", "Encoding", "Latin script"], answer: 2, explanation: "Script subtag writing system identify karta hai." },
      { question: "French phrase ka code kya hai?", options: ["fr", "fi", "fa"], answer: 0, explanation: "fr French language subtag hai." },
      { question: "lang aur charset mein kya farq hai?", options: ["Dono file size hain", "Bhasha aur encoding", "Dono font names hain"], answer: 1, explanation: "Language human language batati hai, charset bytes ki decoding." },
    ],
  },
  {
    id: "study-lookup-html-country-codes",
    title: "HTML Country Codes",
    level: "Beginner",
    summary: "Language tag mein region subtag se regional variant pehchano.",
    content: [
      "Country code bhasha ka substitute nahi hai. en-GB aur en-US dono English hain par region variants alag hain. Region tab jodo jab spelling, terminology ya localization ke liye detail relevant ho. ISO country codes ki reference listing se region verify kar sakte ho.",
      "Do phrases ko unki English variants se mark karo. Language pehle aur region uske baad hyphen se likho. Browser text ko khud translate ya respell nahi karta, isliye actual wording tumhe likhni hoti hai.",
    ],
    reading: { title: "W3Schools · HTML Country Codes", url: "https://www.w3schools.com/tags/ref_country_codes.asp" },
    examples: [{
      title: "Regional spellings",
      code: "<p lang=\"en-GB\">Choose a colour.</p>\n<p lang=\"en-US\">Choose a color.</p>",
      result: "Pehle paragraph mein colour aur doosre mein color wahi dikhenge jaise likhe hain. Language tags tools ko regional context dete hain.",
    }],
    quizzes: [
      { question: "en-GB mein GB ka role kya hai?", options: ["Region subtag", "English ka code", "UTF encoding"], answer: 0, explanation: "GB United Kingdom region ko identify karta hai." },
      { question: "India ki English variant ka tag kya hoga?", options: ["IN-en", "en-IN", "en_IN.html"], answer: 1, explanation: "BCP 47 mein language pehle aur region baad mein aata hai." },
      { question: "Kya lang change karte hi color ki spelling badlegi?", options: ["Haan, hamesha", "Sirf h1 mein", "Nahi, text author likhta hai"], answer: 2, explanation: "lang metadata deta hai, translation ya spelling replacement nahi karta." },
    ],
  },
  {
    id: "study-lookup-http-status-codes",
    title: "HTTP Status Codes",
    level: "Intermediate",
    summary: "Network response se pata karo browser ki resource request ka kya hua.",
    content: [
      "Status code server ke response ka short signal hai. 2xx success, 3xx redirection se related, 4xx client request ki problem aur 5xx server side failure batate hain. Broken image dekhkar sirf markup badalne ke bajay Network panel mein request URL aur status dono padho.",
      "Site par available aur missing file ko request karo. fetch 404 par bhi response object de sakta hai, isliye response.ok aur status inspect karo. Neeche URL ko apni test file ke path se badlo.",
    ],
    reading: { title: "W3Schools · HTTP Status Codes", url: "https://www.w3schools.com/tags/ref_httpmessages.asp" },
    examples: [{
      title: "Response code inspect karo",
      code: "<script>\n  fetch(\"poster.png\").then(response => {\n    console.log(response.status, response.ok);\n  }).catch(() => console.log(\"Network request poori nahi hui\"));\n</script>",
      result: "Same-origin server 200 de to 200 true aur 404 de to 404 false dikhega. Network failure catch branch mein ja sakta hai.",
    }],
    quizzes: [
      { question: "404 ka aam matlab kya hai?", options: ["Request successful", "Resource nahi mila", "Server redirect"], answer: 1, explanation: "Server ko requested resource nahi mila ya woh uski maujoodgi disclose nahi karta." },
      { question: "500 kis category ka hai?", options: ["Success", "Redirect", "Server-side error"], answer: 2, explanation: "5xx responses server processing failure indicate karte hain." },
      { question: "fetch 404 ko kaise pehchanoge?", options: ["Response ka status check karke", "Sirf catch se", "Page title se"], answer: 0, explanation: "HTTP error status par fetch promise response ke saath fulfill ho sakta hai." },
    ],
  },
  {
    id: "study-lookup-http-request-methods",
    title: "HTTP Request Methods",
    level: "Intermediate",
    summary: "Request method se server ko operation ka intended meaning batao.",
    content: [
      "GET resource read karta hai, POST submission process karwata hai, PUT target representation replace karne ke liye aur DELETE removal request ke liye hota hai. Method ki semantics aur server implementation dono important hain. Regular HTML form submissions ke liye GET aur POST standard choices hain.",
      "Search ke liye GET form banao taaki query URL share ho sake. Data create karna ho to suitable POST endpoint use karo. Network panel mein method aur URL ko alag fields ke roop mein padho.",
    ],
    reading: { title: "W3Schools · HTTP Request Methods", url: "https://www.w3schools.com/tags/ref_httpmethods.asp" },
    examples: [{
      title: "Shareable catalog search",
      code: "<form action=\"/catalog\" method=\"get\">\n  <label>Topic <input name=\"q\" value=\"html\"></label>\n  <button>Search</button>\n</form>",
      result: "Submit /catalog?q=html par GET karega. Server ko actual catalog result dena hoga. URL copy karke wahi query share kar sakte ho.",
    }],
    quizzes: [
      { question: "Read-only search ke liye yahan kaunsa method hai?", options: ["DELETE", "PUT", "GET"], answer: 2, explanation: "GET resource retrieval ke liye hai." },
      { question: "Nayi booking ki submission aam taur par kaise bhejoge?", options: ["POST endpoint par", "GET se delete karke", "CSS upload se"], answer: 0, explanation: "POST server ko submitted data process karne deta hai." },
      { question: "Target representation replace karne ki semantics kiski hain?", options: ["HEAD", "PUT", "GET"], answer: 1, explanation: "PUT specified target ki representation create ya replace karne ki request hai." },
    ],
  },
  {
    id: "study-lookup-px-to-em-converter",
    title: "PX to EM Converter",
    level: "Beginner",
    summary: "Font-size ke liye desired pixels ko parent size ke hisaab se em mein badlo.",
    content: [
      "Agar parent font 16px hai aur child ko 24px chahiye to ratio 24/16 = 1.5em hai. Parent 20px ho to wahi 1.5em ab 30px banega. Font-size ke alawa padding jaisi properties mein em element ke apne computed font-size par based hota hai.",
      "Neeche dono pixel values positive rakho. Button target ko base se divide karta hai. 24 aur 16 test karo, phir sirf base ko 12 karo. Reference link par isi ratio ko doosri values se bhi check kar sakte ho.",
    ],
    reading: { title: "W3Schools · PX to EM Converter", url: "https://www.w3schools.com/tags/ref_pxtoemconversion.asp" },
    examples: [{
      title: "Chhota working converter",
      code: "<form id=\"units\">\n  <label>Target px <input name=\"targetPx\" type=\"number\" value=\"24\" min=\"0\" step=\"any\" required></label>\n  <label>Base px <input name=\"basePx\" type=\"number\" value=\"16\" min=\"0.01\" step=\"any\" required></label>\n  <button>EM nikalo</button><output id=\"em\"></output>\n</form>\n<script>\n  document.querySelector(\"#units\").onsubmit = e => {\n    e.preventDefault();\n    const inputs = e.currentTarget.elements;\n    document.querySelector(\"#em\").textContent = inputs.targetPx.valueAsNumber / inputs.basePx.valueAsNumber + \"em\";\n  };\n</script>",
      result: "Pehli calculation 1.5em degi. Base 12 karne par 24/12 = 2em aayega. Zero base ko form validation rokegi.",
    }],
    quizzes: [
      { question: "Target 18px aur base 12px ka answer kya hai?", options: ["1.5em", "6em", "0.67em"], answer: 0, explanation: "Target ko base se divide karte hain." },
      { question: "Zero base kyun roka hai?", options: ["Zero font naam hai", "Zero se division meaningful ratio nahi deta", "Output HTML ban jaata hai"], answer: 1, explanation: "Conversion ko positive reference size chahiye." },
      { question: "Child ka font-size 2em aur parent 14px ho to result kya hai?", options: ["7px", "16px", "28px"], answer: 2, explanation: "Relative font-size parent ke computed size se multiply hota hai." },
    ],
  },
  {
    id: "study-lookup-keyboard-shortcuts",
    title: "Keyboard Shortcuts",
    level: "Beginner",
    summary: "Browser aur editor mein keyboard se navigation, activation aur search karo.",
    content: [
      "Keyboard shortcuts ka context matter karta hai. Browser mein Tab agle focusable control, Shift+Tab pichhle control aur Enter focused link ko activate karta hai. Windows/Linux par Ctrl+F aur macOS par Command+F aam taur par current page mein text search kholta hai.",
      "Neeche ke demo mein mouse hataakar Tab press karo. Link se button aur phir Shift+Tab se wapas jao. Focus indicator visible rehna chahiye. Button ko Space ya Enter se test karo aur browser Find se Room text dhoondo.",
    ],
    reading: { title: "W3Schools · Keyboard Shortcuts", url: "https://www.w3schools.com/tags/ref_keyboardshortcuts.asp" },
    examples: [{
      title: "Focus aur activation practice",
      code: "<a href=\"#room\">Room dekho</a>\n<button type=\"button\" popovertarget=\"tip\">Tip kholo</button>\n<p id=\"tip\" popover>Pass saath rakho.</p>\n<h2 id=\"room\">Room 4</h2>",
      result: "Tab se link aur button focus hote hain. Enter link ka target kholta hai. Supporting browser mein focused button par Space ya Enter tip ko toggle karta hai.",
    }],
    quizzes: [
      { question: "Pichhle focusable control par kaise jaoge?", options: ["Ctrl+F", "Shift+Tab", "Escape"], answer: 1, explanation: "Shift+Tab reverse focus navigation hai." },
      { question: "Focused link ko activate kaunsi key karti hai?", options: ["Alt akela", "Caps Lock", "Enter"], answer: 2, explanation: "Native anchor Enter se navigate karta hai." },
      { question: "macOS browser mein page text search ka common shortcut kya hai?", options: ["Command+F", "Command+P", "Shift+Tab"], answer: 0, explanation: "Find current page mein text match dhoondhta hai." },
    ],
  },
]);
