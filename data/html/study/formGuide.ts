import { chapter } from "../../resource-chapter";

export const formGuide = chapter("HTML Forms", [
  {
    id: "study-formguide-html-forms",
    title: "HTML Forms",
    level: "Beginner",
    summary: "Reader ke input ko named values ke roop mein bhejo.",
    content: [
      "Form controls ek jagah jama karta hai aur submit par unke names aur values se request banata hai. Label reader ko sawaal batata hai. id aur for label ko control se jodte hain, jabki name server ko field ki pehchan deta hai.",
      "Local page par GET form banao aur apna shehar likho. Submit ke baad URL dekho. name hataakar dobara submit karo aur dekho ki field ka text screen par hone ke bawajood parameter kyun gayab hai.",
    ],
    reading: { title: "W3Schools · HTML Forms", url: "https://www.w3schools.com/html/html_forms.asp" },
    examples: [{
      title: "Shehar se search",
      code: "<form method=\"get\">\n  <label for=\"city\">Shehar</label>\n  <input id=\"city\" name=\"city\">\n  <button>Khojo</button>\n</form>",
      result: "Jaipur likhkar submit karoge to current page ke URL mein city=Jaipur aayega. Label click karne par input focus hota hai.",
    }],
    quizzes: [
      { question: "Server ko field ki key kis se milti hai?", options: ["name", "id", "for"], answer: 0, explanation: "Form data mein key name se banti hai." },
      { question: "Label ka for kis se match karega?", options: ["Button text", "Input id", "Form method"], answer: 1, explanation: "Matching id se explicit label association banta hai." },
      { question: "GET form ka data kahan dikhta hai?", options: ["Favicon mein", "Sirf label mein", "URL query mein"], answer: 2, explanation: "GET submission query parameters banata hai." },
    ],
  },
  {
    id: "study-formguide-html-form-attributes",
    title: "HTML Form Attributes",
    level: "Beginner",
    summary: "Poore form ki destination, method aur data format set karo.",
    content: [
      "action processing endpoint ka address hai. GET filtering aur search jaise read operations mein values URL mein rakhta hai. POST data request body mein bhejta hai aur submission handle karne wala server chahiye. Transport privacy ke liye HTTPS zaroori hai.",
      "Upload ke liye file input ko name do, method post aur enctype multipart/form-data rakho. Network panel mein request ka method, destination aur content type dekho. Real file save tabhi hogi jab endpoint upload accept kare.",
    ],
    reading: { title: "W3Schools · HTML Form Attributes", url: "https://www.w3schools.com/html/html_forms_attributes.asp" },
    examples: [{
      title: "Poster upload ki request",
      code: "<form action=\"/posters\" method=\"post\" enctype=\"multipart/form-data\">\n  <label>Poster <input type=\"file\" name=\"poster\" required></label>\n  <button>Poster bhejo</button>\n</form>",
      result: "File chunne par form /posters ko POST karega. Multipart body mein poster field ki file hogi. Server handler uska response dega.",
    }],
    quizzes: [
      { question: "Processing URL kahan set hua?", options: ["enctype", "action", "name"], answer: 1, explanation: "action submission ka destination hai." },
      { question: "File upload ka encoding type kya hai?", options: ["text/css", "image/png", "multipart/form-data"], answer: 2, explanation: "Multipart encoding file aur normal fields alag parts mein bhejti hai." },
      { question: "POST data aam taur par kahan jaata hai?", options: ["Request body mein", "URL fragment mein", "Page title mein"], answer: 0, explanation: "Method POST submitted payload ko body mein le jaata hai." },
    ],
  },
  {
    id: "study-formguide-html-form-elements",
    title: "HTML Form Elements",
    level: "Beginner",
    summary: "Sawaal ke jawaab ki shape dekhkar control chuno.",
    content: [
      "Ek line ke liye input, lambi tipanni ke liye textarea aur limited choices ke liye select achha fit hai. fieldset related controls ko group karta hai aur legend poore group ka sawaal deta hai.",
      "Har control ko label aur name do. select ke option ka visible text reader dekhta hai aur value submit hoti hai. Textarea ki initial value uske tags ke beech rakho.",
    ],
    reading: { title: "W3Schools · HTML Form Elements", url: "https://www.w3schools.com/html/html_form_elements.asp" },
    examples: [{
      title: "Feedback group",
      code: "<form><fieldset><legend>Class feedback</legend>\n  <label>Session <select name=\"slot\"><option value=\"am\">Subah</option><option value=\"pm\">Shaam</option></select></label>\n  <label>Tipanni <textarea name=\"note\" rows=\"3\"></textarea></label>\n</fieldset><button>Bhejo</button></form>",
      result: "Shaam chunne par slot=pm jaata hai. Tipanni box multiple lines leta hai aur group ka naam Class feedback dikhta hai.",
    }],
    quizzes: [
      { question: "Multiple lines ke liye kya chuno?", options: ["input type=\"text\"", "option", "textarea"], answer: 2, explanation: "Textarea multiline editing deta hai." },
      { question: "Shaam ki submitted value kya hai?", options: ["pm", "Shaam", "slot"], answer: 0, explanation: "Option ki explicit value submit hoti hai." },
      { question: "Group ka caption kya hai?", options: ["label ka for", "legend", "rows"], answer: 1, explanation: "legend fieldset ko naam deta hai." },
    ],
  },
  {
    id: "study-formguide-html-input-types",
    title: "HTML Input Types",
    level: "Beginner",
    summary: "Input ka type badalkar keyboard, validation aur selection behaviour badlo.",
    content: [
      "Email input address ki basic shape check karta hai. Date input date choose karne ka control deta hai. Radio group mein ek choice aur checkbox group mein kai choices ho sakti hain. Phone number ke liye tel theek hai kyunki leading zero meaningful ho sakta hai.",
      "Ek hi sawaal ke radios ko same name aur alag values do. Checkbox independent rakho. Submit se pehle invalid email type karke browser ki validation dekho. Email ki shape check hone se mailbox ka exist karna prove nahi hota.",
    ],
    reading: { title: "W3Schools · HTML Input Types", url: "https://www.w3schools.com/html/html_form_input_types.asp" },
    examples: [{
      title: "Workshop registration ke controls",
      code: "<form>\n  <label>Email <input type=\"email\" name=\"email\" required></label>\n  <label><input type=\"radio\" name=\"slot\" value=\"am\" checked> Subah</label>\n  <label><input type=\"radio\" name=\"slot\" value=\"pm\"> Shaam</label>\n  <label><input type=\"checkbox\" name=\"notes\" value=\"yes\"> Notes chahiye</label>\n  <button>Register</button>\n</form>",
      result: "Shaam choose karte hi Subah deselect hota hai. Notes alag se tick ho sakte hain. Galat shape ka email normal submission rokega.",
    }],
    quizzes: [
      { question: "Radios ek group kaise bante hain?", options: ["Same form mein same name", "Same label text", "Same value zaroori"], answer: 0, explanation: "Shared name single-choice group banata hai." },
      { question: "Optional independent choice ke liye kya chuno?", options: ["radio group ka doosra slot", "checkbox", "date"], answer: 1, explanation: "Checkbox ka checked state independently toggle hota hai." },
      { question: "Email validation kya check karti hai?", options: ["Mailbox ownership", "Inbox storage", "Basic address syntax"], answer: 2, explanation: "Address ki syntax se ownership verify nahi hoti." },
    ],
  },
  {
    id: "study-formguide-html-input-attributes",
    title: "HTML Input Attributes",
    level: "Beginner",
    summary: "Field ki limits, initial value aur edit permission declare karo.",
    content: [
      "required empty submission rokta hai. Number input par min, max aur step valid range aur increments batate hain. readonly value dikhata aur aam taur par submit karta hai, disabled control submit data se bahar rehta hai.",
      "Tickets ko 1 se 4 ke beech rakho. Pehle 5 likhkar submit karo, phir 3 se retry karo. Browser validation typing ke har step ko block karna zaroori nahi samajhti, isliye submit par bhi check karo. Server ko apne rules bhi validate karne chahiye.",
    ],
    reading: { title: "W3Schools · HTML Input Attributes", url: "https://www.w3schools.com/html/html_form_attributes.asp" },
    examples: [{
      title: "Tickets ki limit",
      code: "<form>\n  <label>Tickets <input type=\"number\" name=\"qty\" min=\"1\" max=\"4\" step=\"1\" required></label>\n  <label>Batch <input name=\"batch\" value=\"A\" readonly></label>\n  <button>Check</button>\n</form>",
      result: "5 ya khaali quantity par normal submit rukega. 3 valid hai aur readonly batch=A bhi request mein shaamil hoga.",
    }],
    quizzes: [
      { question: "5 ko kaunsa attribute invalid banata hai?", options: ["min=\"1\"", "max=\"4\"", "readonly"], answer: 1, explanation: "Max upper bound set karta hai." },
      { question: "Quantity khaali chhodne par kaunsa rule rokta hai?", options: ["step", "max", "required"], answer: 2, explanation: "Required field ko value chahiye." },
      { question: "Kaunsa control normally submit se bahar hota hai?", options: ["disabled", "readonly", "Named editable field"], answer: 0, explanation: "Disabled controls form data mein include nahi hote." },
    ],
  },
  {
    id: "study-formguide-input-form-attributes",
    title: "Input Form Attributes",
    level: "Intermediate",
    summary: "Ek control ko uske form se jodo aur ek submit button ka destination alag rakho.",
    content: [
      "Kabhi toolbar ka button form ke bahar hota hai. form attribute us button ko id se form ka owner deta hai. Submitter par formaction aur formmethod jaise attributes us particular submission ke liye form ki settings override kar sakte hain.",
      "Default button ko publish ke liye chhodo aur external button ko draft endpoint do. Dono press karke Network panel mein path compare karo. Dono paths ko process karne ke liye server handlers chahiye.",
    ],
    reading: { title: "W3Schools · Input Form Attributes", url: "https://www.w3schools.com/html/html_form_attributes_form.asp" },
    examples: [{
      title: "Ek form, do destinations",
      code: "<form id=\"story\" action=\"/publish\" method=\"post\">\n  <label>Naam <input name=\"title\"></label>\n  <button>Publish</button>\n</form>\n<button type=\"submit\" form=\"story\" formaction=\"/draft\">Draft rakho</button>",
      result: "Publish /publish ko POST karta hai. Draft button usi form ka data /draft ko POST karta hai kyunki sirf action override hua hai.",
    }],
    quizzes: [
      { question: "External button ka form value kis se milta hai?", options: ["Input name", "Button text", "Form id"], answer: 2, explanation: "form=\"story\" owner ki id refer karta hai." },
      { question: "Draft ke liye URL kahan override hua?", options: ["formaction", "action input", "target id"], answer: 0, explanation: "Submit button ka formaction form action par precedence leta hai." },
      { question: "Draft ka method kya rahega?", options: ["GET", "POST", "PATCH"], answer: 1, explanation: "Button ne formmethod override nahi kiya." },
    ],
  },
  {
    id: "study-formguide-html-project-vii",
    title: "HTML Project VII",
    level: "Intermediate",
    summary: "Workshop signup form banao jisme naam, email aur session ki choice submit ho.",
    content: [
      "Pehle socho registration process ko kaunse values chahiye. Har field ka visible label aur stable name banao. Required rules se missing input jaldi pakad mein aata hai aur select se session values consistent rehti hain.",
      "Body mein form rakho. Khaali submit, invalid email aur valid entry ke teen tests karo. Demo mein GET se dummy data address bar mein inspect karo. Real registration mein POST endpoint ko values validate karke booking save karni hogi.",
    ],
    reading: { title: "W3Schools · HTML Project VII", url: "https://www.w3schools.com/html/html_project_form.php" },
    examples: [{
      title: "Signup ka local practice form",
      code: "<form method=\"get\">\n  <label>Naam <input name=\"student\" required></label>\n  <label>Email <input name=\"email\" type=\"email\" required></label>\n  <label>Session <select name=\"slot\"><option value=\"am\">Subah</option><option value=\"pm\">Shaam</option></select></label>\n  <button>Details check karo</button>\n</form>",
      result: "Dummy naam, valid email aur Shaam ke saath submit karne par query mein student, email aur slot=pm milenge. Static page booking store nahi karta.",
    }],
    quizzes: [
      { question: "Khaali naam par submit kyun rukega?", options: ["required laga hai", "Name student hai", "Button ka text lamba hai"], answer: 0, explanation: "Required input mein value honi chahiye." },
      { question: "Session ke liye select ka faayda kya hai?", options: ["Email verify hota hai", "Defined choices milti hain", "Record save hota hai"], answer: 1, explanation: "Option values se consistent slots milte hain." },
      { question: "Real booking persist karne ke liye kya chahiye?", options: ["Sirf button rename", "Naya CSS color", "Server handler aur storage"], answer: 2, explanation: "Static form sirf request banata hai." },
    ],
  },
]);
