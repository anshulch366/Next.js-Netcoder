import { chapter } from "../../resource-chapter";

export const foundations = chapter("HTML Tutorial", [
  {
    id: "study-foundations-html-home",
    title: "HTML HOME",
    level: "Beginner",
    summary: "Create a class notice and open it in a browser.",
    content: [
      "A notice needs a subject and a time. A heading identifies the subject, while a paragraph gives readers the details. HTML lets the browser recognise both roles.",
      "Save the example as index.html in a plain-text editor. Open the file in a browser, change the time in the paragraph, save it and refresh the page.",
    ],
    reading: { title: "W3Schools · HTML HOME", url: "https://www.w3schools.com/html/default.asp" },
    examples: [{
      title: "A class announcement",
      code: "<!doctype html>\n<html lang=\"en\">\n<head><meta charset=\"utf-8\"><title>Class notice</title></head>\n<body>\n  <h1>Today's class</h1>\n  <p>Class starts at 4 PM.</p>\n</body>\n</html>",
      result: "The tab reads “Class notice”. The page shows “Today's class” above the start time. Changing 4 to 5 updates the time without changing the heading.",
    }],
    quizzes: [
      { question: "Which filename identifies an HTML document?", options: ["index.jpg", "index.html.txt", "index.html"], answer: 2, explanation: "The final extension identifies the file as HTML." },
      { question: "Which element contains the visible class time?", options: ["p", "title", "head"], answer: 0, explanation: "The paragraph in the document body contains the time." },
      { question: "How do you preview a change to this local file?", options: ["Rename the heading", "Save the file and refresh the browser", "Delete the title"], answer: 1, explanation: "Refreshing loads the saved version from disk." },
    ],
  },
  {
    id: "study-foundations-html-introduction",
    title: "HTML Introduction",
    level: "Beginner",
    summary: "Trace the relationship between HTML source and the page a browser displays.",
    content: [
      "HTML stands for HyperText Markup Language. Markup identifies structures such as paragraphs and links. The browser represents their relationships in a tree called the Document Object Model (DOM).",
      "Place a link inside a paragraph. Inspect the paragraph in the browser's Elements panel to see its child anchor, then follow the link to a second file in the same directory.",
    ],
    reading: { title: "W3Schools · HTML Introduction", url: "https://www.w3schools.com/html/html_intro.asp" },
    examples: [{
      title: "A link within a sentence",
      code: "<p>For the next class, <a href=\"schedule.html\">view the schedule</a>.</p>",
      result: "The paragraph appears as a sentence. Only “view the schedule” links to schedule.html.",
    }],
    quizzes: [
      { question: "Which feature demonstrates hypertext?", options: ["A link between documents", "An installed font", "A compressed image"], answer: 0, explanation: "Hypertext connects a reader to another document or location." },
      { question: "Which element is the parent of the anchor?", options: ["href", "p", "schedule.html"], answer: 1, explanation: "The anchor lies between the paragraph's opening and closing tags." },
      { question: "How can you change the destination while keeping the label?", options: ["Edit the anchor text", "Rename the paragraph", "Edit href"], answer: 2, explanation: "The href attribute holds the destination URL." },
    ],
  },
  {
    id: "study-foundations-html-editors",
    title: "HTML Editors",
    level: "Beginner",
    summary: "Build a reliable edit, save and preview workflow.",
    content: [
      "A text editor stores the markup you write. The browser reads those characters and renders the page. A word processor can add formatting that interferes with this workflow.",
      "Save hello.html as UTF-8 plain text. Open that file in a browser, change one word in the editor and reload after saving. If the browser displays the tags, check the full filename for an extra .txt extension.",
    ],
    reading: { title: "W3Schools · HTML Editors", url: "https://www.w3schools.com/html/html_editors.asp" },
    examples: [{
      title: "Preview a saved edit",
      code: "<!doctype html>\n<meta charset=\"utf-8\">\n<title>Editor test</title>\n<p>My first draft</p>",
      result: "The page displays “My first draft”. Replace “draft” with “page”, save and reload to see the revised sentence.",
    }],
    quizzes: [
      { question: "Which tool is suitable for writing HTML source?", options: ["An image viewer", "A plain-text editor", "An audio player"], answer: 1, explanation: "A plain-text editor preserves the markup as text." },
      { question: "What is the final extension of hello.html.txt?", options: [".html", ".hello", ".txt"], answer: 2, explanation: "Only the suffix after the last dot is the final extension." },
      { question: "When will a manually refreshed preview show your edit?", options: ["After saving and reloading", "When the cursor moves", "When the tab is renamed"], answer: 0, explanation: "The browser must read the updated file." },
    ],
  },
  {
    id: "study-foundations-html-basic",
    title: "HTML Basic",
    level: "Beginner",
    summary: "Build the document structure that separates page settings from visible content.",
    content: [
      "The doctype selects modern standards mode. Inside the root html element, head holds metadata and body holds the content readers see. This structure gives each later example a clear place in the file.",
      "Change only the title and inspect the tab. Then change the h1 and inspect the page. Give them different wording so their roles are easy to distinguish.",
    ],
    reading: { title: "W3Schools · HTML Basic", url: "https://www.w3schools.com/html/html_basic.asp" },
    examples: [{
      title: "A library opening-hours page",
      code: "<!doctype html>\n<html lang=\"en\">\n  <head><meta charset=\"utf-8\"><title>Library hours</title></head>\n  <body><h1>Opening times</h1><p>Monday, 9 AM</p></body>\n</html>",
      result: "The tab reads “Library hours”. The page displays “Opening times” followed by Monday's opening time.",
    }],
    quizzes: [
      { question: "Where does the doctype belong?", options: ["Inside h1", "After body", "Before the root element"], answer: 2, explanation: "The browser reads the declaration when it begins parsing the document." },
      { question: "Which element contains the document metadata?", options: ["head", "body", "p"], answer: 0, explanation: "The title and character encoding belong in the head." },
      { question: "Which edit changes the visible “Opening times” heading?", options: ["Change lang", "Change the h1 text", "Change the title"], answer: 1, explanation: "The h1 supplies the heading in the document body." },
    ],
  },
  {
    id: "study-foundations-html-elements",
    title: "HTML Elements",
    level: "Beginner",
    summary: "Distinguish a tag from an element and nest elements correctly.",
    content: [
      "The opening tag, content and closing tag together form a paragraph element. Elements may contain other elements. Closing the inner element first preserves the intended relationship.",
      "Mark just the word ID as important using strong. Insert br to start a second line within the same paragraph. A line break is a void element and takes neither content nor a closing tag.",
    ],
    reading: { title: "W3Schools · HTML Elements", url: "https://www.w3schools.com/html/html_elements.asp" },
    examples: [{
      title: "Nesting emphasis and a line break",
      code: "<p>Bring your <strong>ID</strong>.<br>Meet at Gate 2.</p>",
      result: "ID is marked as important and usually appears bold. The instruction about Gate 2 starts on the next line of the same paragraph.",
    }],
    quizzes: [
      { question: "Which example is a complete paragraph element?", options: ["<p>Hello</p>", "<p>", "</p>"], answer: 0, explanation: "The complete element includes both tags and their content." },
      { question: "Which element closes immediately after ID?", options: ["p", "strong", "br"], answer: 1, explanation: "The inner strong element applies only to ID." },
      { question: "Why does br have no closing tag?", options: ["It ends the paragraph", "It is a CSS declaration", "It is a void element"], answer: 2, explanation: "A void element cannot contain child content." },
    ],
  },
  {
    id: "study-foundations-html-attributes",
    title: "HTML Attributes",
    level: "Beginner",
    summary: "Use attributes to configure individual elements.",
    content: [
      "An element identifies the kind of content. Its attributes describe this particular instance. Two anchors can have similar labels and still lead to different pages because their href values differ.",
      "Write the attribute name and quoted value inside the opening tag. Change the label first, then the URL. Follow each link to see which edit affects its destination.",
    ],
    reading: { title: "W3Schools · HTML Attributes", url: "https://www.w3schools.com/html/html_attributes.asp" },
    examples: [{
      title: "Two links with different destinations",
      code: "<a href=\"map.html\" title=\"Campus map\">Map</a>\n<a href=\"hours.html\">Opening hours</a>",
      result: "Map opens map.html and Opening hours opens hours.html. Some browsers display the title as a pointer-hover hint.",
    }],
    quizzes: [
      { question: "Where do you write an HTML attribute?", options: ["After the closing tag", "In the opening tag", "Inside the visible label"], answer: 1, explanation: "The browser reads the element's attributes from its opening tag." },
      { question: "Which value supplies the map destination?", options: ["Campus map", "Map", "map.html"], answer: 2, explanation: "The href contains the destination URL." },
      { question: "How do you change the visible link label?", options: ["Edit the text between the anchor tags", "Edit only title", "Edit only href"], answer: 0, explanation: "The anchor's text provides its visible label." },
    ],
  },
  {
    id: "study-foundations-html-headings",
    title: "HTML Headings",
    level: "Beginner",
    summary: "Organise a document into sections and subsections.",
    content: [
      "Heading ranks communicate the document's outline. Readers using assistive technology can navigate by heading, so a subsection should have a rank that reflects its place in the hierarchy.",
      "Use h1 for the recipe title, h2 for each main stage and h3 for a task within a stage. Adjust visual size with CSS while preserving the heading ranks.",
    ],
    reading: { title: "W3Schools · HTML Headings", url: "https://www.w3schools.com/html/html_headings.asp" },
    examples: [{
      title: "A recipe outline",
      code: "<h1>Making poha</h1>\n<h2>Preparation</h2>\n<h3>Rinsing the rice</h3>\n<h2>Cooking</h2>",
      result: "Preparation and Cooking are sibling sections. Rinsing the rice is a subsection of Preparation.",
    }],
    quizzes: [
      { question: "Which rank suits another section alongside Cooking?", options: ["h1", "h4", "h2"], answer: 2, explanation: "Both sections belong immediately beneath the recipe title." },
      { question: "Which section contains Rinsing the rice?", options: ["Preparation", "Cooking", "Neither section"], answer: 0, explanation: "The h3 follows Preparation and precedes the next h2." },
      { question: "How should you change the visual size of a heading?", options: ["Skip a heading rank", "Use CSS font-size", "Change the doctype"], answer: 1, explanation: "CSS controls appearance while heading rank describes structure." },
    ],
  },
  {
    id: "study-foundations-html-paragraphs",
    title: "HTML Paragraphs",
    level: "Beginner",
    summary: "Choose between a paragraph, a line break and preformatted text.",
    content: [
      "In normal paragraph text, browsers collapse sequences of spaces and line endings. Separate ideas need separate paragraphs. A line break is appropriate when the lines belong together, as in an address.",
      "Divide the address with br and place the following instruction in its own p. Use pre for the final sample, where the columns depend on preserving spaces and line endings.",
    ],
    reading: { title: "W3Schools · HTML Paragraphs", url: "https://www.w3schools.com/html/html_paragraphs.asp" },
    examples: [{
      title: "An address and a preformatted sample",
      code: "<p>Room 12<br>First floor</p>\n<p>Bring your pass.</p>\n<pre>A    B\n1    2</pre>",
      result: "The room and floor appear on separate lines. The pass instruction starts a new paragraph. The columns inside pre keep their spacing.",
    }],
    quizzes: [
      { question: "Which element starts a separate idea?", options: ["p", "br", "span"], answer: 0, explanation: "A paragraph groups a distinct passage of text." },
      { question: "How do you separate the room and floor within one paragraph?", options: ["Add several spaces", "Insert br", "Add a title attribute"], answer: 1, explanation: "A br explicitly requests a line break." },
      { question: "Which element preserves the sample's indentation?", options: ["p", "em", "pre"], answer: 2, explanation: "Preformatted text preserves the source whitespace." },
    ],
  },
  {
    id: "study-foundations-html-styles",
    title: "HTML Styles",
    level: "Beginner",
    summary: "Apply CSS declarations to one element with the style attribute.",
    content: [
      "A notice may need a specific text colour, background or amount of space. Each inline declaration selects a property and supplies its value for that element.",
      "Put a colon between each property and value. Separate declarations with semicolons. Change the text colour to green and check which other properties keep their values.",
    ],
    reading: { title: "W3Schools · HTML Styles", url: "https://www.w3schools.com/html/html_styles.asp" },
    examples: [{
      title: "Style a library notice",
      code: "<p style=\"color: navy; background-color: ivory; padding: 8px;\">The library opens tomorrow.</p>",
      result: "The notice has navy text, an ivory background and 8px of space between the content and its edge.",
    }],
    quizzes: [
      { question: "Which property changes the text colour?", options: ["padding", "color", "background-color"], answer: 1, explanation: "The color property sets the foreground colour." },
      { question: "Which property would you change to increase the inner spacing?", options: ["color", "lang", "padding"], answer: 2, explanation: "Padding adds space inside the element's boundary." },
      { question: "What separates declarations in an inline style?", options: ["A semicolon", "A comma", "A slash"], answer: 0, explanation: "A semicolon ends one CSS declaration before the next begins." },
    ],
  },
  {
    id: "study-foundations-html-project-i",
    title: "HTML Project I",
    level: "Beginner",
    summary: "Publish an announcement that answers what, when and where.",
    content: [
      "Readers should be able to identify the event, time and venue at a glance. Give the event one main heading and use separate paragraphs for the time and place. A short title helps readers recognise the browser tab.",
      "Save the complete example as notice.html and read it without styling. Change the venue to Room 3, reload and check both the page and tab.",
    ],
    reading: { title: "W3Schools · HTML Project I", url: "https://www.w3schools.com/html/html_project_webpage.php" },
    examples: [{
      title: "A reading club announcement",
      code: "<!doctype html>\n<html lang=\"en\">\n<head><meta charset=\"utf-8\"><title>Reading club</title></head>\n<body>\n  <h1>Story evening</h1>\n  <p>Meet on Saturday at 5 PM.</p>\n  <p>Venue: Library hall</p>\n</body>\n</html>",
      result: "The tab identifies the Reading club. The event name, meeting time and venue appear separately on the page. Editing the venue changes one paragraph.",
    }],
    quizzes: [
      { question: "Where should the main event name appear?", options: ["meta", "A title attribute", "h1"], answer: 2, explanation: "The h1 identifies the page's main subject." },
      { question: "Which part changes when the club moves to Room 3?", options: ["The second paragraph", "The first paragraph", "The doctype"], answer: 0, explanation: "The second paragraph contains the venue." },
      { question: "What appears in the browser tab?", options: ["Library hall", "Reading club", "Story evening"], answer: 1, explanation: "The document title supplies the tab label." },
    ],
  },
  {
    id: "study-foundations-html-formatting",
    title: "HTML Formatting",
    level: "Beginner",
    summary: "Use markup to express importance, emphasis and revisions.",
    content: [
      "Strong marks importance and em marks stress emphasis. A deleted price and its replacement have a different relationship, which del and ins can express. CSS controls how these meanings appear visually.",
      "Wrap only the affected text. Use del for the old price and ins for its replacement. Use sub for the atom count in a chemical formula and sup for an exponent.",
    ],
    reading: { title: "W3Schools · HTML Formatting", url: "https://www.w3schools.com/html/html_formatting.asp" },
    examples: [{
      title: "A revised price and a chemical formula",
      code: "<p><strong>New price:</strong> <del>₹90</del> <ins>₹75</ins></p>\n<p>The formula for water is H<sub>2</sub>O.</p>",
      result: "Browsers usually strike through the old price and underline the replacement. The 2 in the water formula sits below the baseline.",
    }],
    quizzes: [
      { question: "Which element marks the price that was removed?", options: ["del", "ins", "em"], answer: 0, explanation: "The del element identifies deleted content." },
      { question: "Which element lowers the 2 in the formula?", options: ["sup", "sub", "mark"], answer: 1, explanation: "Subscript positions the number below the baseline." },
      { question: "Which element marks an important warning?", options: ["i", "small", "strong"], answer: 2, explanation: "The strong element conveys importance." },
    ],
  },
  {
    id: "study-foundations-html-quotations",
    title: "HTML Quotations",
    level: "Beginner",
    summary: "Distinguish quoted words from the surrounding prose and attribution.",
    content: [
      "Use q for a short inline quotation and blockquote for a quoted passage. The cite attribute can identify the source URL. Readers need a visible attribution if the author's identity matters.",
      "Group the quotation and attribution in a figure. Place the passage in blockquote and its attribution in figcaption. Use a separate inline quotation in the following sentence.",
    ],
    reading: { title: "W3Schools · HTML Quotations", url: "https://www.w3schools.com/html/html_quotation_elements.asp" },
    examples: [{
      title: "Attribute workshop feedback",
      code: "<figure>\n  <blockquote cite=\"notes.html\"><p>The second drawing was clearer.</p></blockquote>\n  <figcaption>Meera, workshop notes</figcaption>\n</figure>\n<p>Meera described it as <q>clear</q>.</p>",
      result: "The extended quotation occupies its own block with Meera's name below. Browsers usually add quotation marks around the inline q.",
    }],
    quizzes: [
      { question: "Which element suits a quotation within a sentence?", options: ["blockquote", "q", "figcaption"], answer: 1, explanation: "The q element marks short inline quotations." },
      { question: "Where does the reader see the speaker's name here?", options: ["The cite attribute", "The q attribute", "figcaption"], answer: 2, explanation: "The caption renders the attribution as visible text." },
      { question: "What does a blockquote's cite attribute contain?", options: ["A source URL", "A font size", "The length of the quotation"], answer: 0, explanation: "The URL identifies the source of the quoted passage." },
    ],
  },
  {
    id: "study-foundations-html-comments",
    title: "HTML Comments",
    level: "Beginner",
    summary: "Leave source notes for maintainers without adding visible page text.",
    content: [
      "A comment can explain why a section exists or record an unfinished edit. The browser can retain it in the document tree. Anyone with access to the page source can read it.",
      "Start a comment with <!-- and end it with -->. Temporarily comment out a small section and inspect the result. HTML comments cannot be nested.",
    ],
    reading: { title: "W3Schools · HTML Comments", url: "https://www.w3schools.com/html/html_comments.asp" },
    examples: [{
      title: "Document a pending schedule change",
      code: "<!-- Add the second session when the date is confirmed. -->\n<p>The first session is on Monday.</p>",
      result: "The page displays the date of the first session. The note about confirming a second date is visible in the source.",
    }],
    quizzes: [
      { question: "Which text appears on the page?", options: ["The full comment", "Only the closing marker", "The session paragraph"], answer: 2, explanation: "Comments are excluded from rendered text." },
      { question: "Which marker closes an HTML comment?", options: ["-->", "</comment>", "//"], answer: 0, explanation: "The parser ends the comment at -->." },
      { question: "Why should credentials never appear in an HTML comment?", options: ["Comments become headings", "Visitors can inspect the source", "The browser encrypts comments"], answer: 1, explanation: "Comments are delivered to the browser along with the markup." },
    ],
  },
  {
    id: "study-foundations-html-colors",
    title: "HTML Colors",
    level: "Beginner",
    summary: "Read the same colour in hexadecimal and RGB notation.",
    content: [
      "Screen colours combine red, green and blue light. Six-digit hexadecimal notation gives each channel two digits. In RGB notation the channels can be expressed as decimal values from 0 to 255.",
      "Compare the two labels, then change one channel in only the second declaration. Keep the status word visible so readers can understand it independently of colour.",
    ],
    reading: { title: "W3Schools · HTML Colors", url: "https://www.w3schools.com/html/html_colors.asp" },
    examples: [{
      title: "Two ways to specify purple",
      code: "<p style=\"color: #800080\">Open</p>\n<p style=\"color: rgb(128, 0, 128)\">Open</p>",
      result: "Both labels are purple because hexadecimal 80 equals decimal 128. The red and blue channels match and green is zero.",
    }],
    quizzes: [
      { question: "Which channel is strongest in #ff0000?", options: ["Red", "Blue", "Green"], answer: 0, explanation: "The first pair encodes red and ff is its maximum value." },
      { question: "Why do the two labels match?", options: ["Paragraphs always use the same colour", "Their channel values are identical", "RGB is ignored"], answer: 1, explanation: "Hexadecimal 80 and decimal 128 represent the same number." },
      { question: "Why include the status in words?", options: ["It shortens RGB notation", "It loads the font", "Readers may not distinguish the colours"], answer: 2, explanation: "The label communicates the status without relying on colour." },
    ],
  },
  {
    id: "study-foundations-html-css",
    title: "HTML CSS",
    level: "Beginner",
    summary: "Share presentation rules across multiple elements or pages.",
    content: [
      "A CSS selector chooses elements and its declarations describe their appearance. A style block can serve the entire page. An external stylesheet can provide common rules to several documents.",
      "Assign the notice class to both paragraphs. Change the border in the shared rule and inspect both notices. To reuse the rule across pages, place it in styles.css and link that file from each head.",
    ],
    reading: { title: "W3Schools · HTML CSS", url: "https://www.w3schools.com/html/html_css.asp" },
    examples: [{
      title: "Style two notices with one rule",
      code: "<style>\n  .notice { border-left: 4px solid teal; padding-left: 1rem; }\n</style>\n<p class=\"notice\">Gate A is open.</p>\n<p class=\"notice\">Bring your pass.</p>",
      result: "Both paragraphs have a teal line on the left and space between the line and the text.",
    }],
    quizzes: [
      { question: "What does .notice select?", options: ["Only one element by id", "Elements with the notice class", "A tag named notice"], answer: 1, explanation: "The dot introduces a class selector." },
      { question: "Where should several pages share the same rules?", options: ["Inside each paragraph's text", "In the doctype", "In a linked CSS file"], answer: 2, explanation: "Multiple documents can link the same stylesheet." },
      { question: "Which declaration separates the text from the left border?", options: ["padding-left", "border-color", "The class name"], answer: 0, explanation: "Padding adds space on the content side of the border." },
    ],
  },
  {
    id: "study-foundations-html-project-ii",
    title: "HTML Project II",
    level: "Beginner",
    summary: "Build a reusable quotation card with a visible attribution.",
    content: [
      "A quotation card needs to distinguish the speaker's words from the speaker's name. A figure can group the two pieces while a shared class controls the border and spacing.",
      "Put the style block in the head and the figure in the body. Add a second figure with a different speaker. Check that both cards share a design and that each attribution remains outside the quotation.",
    ],
    reading: { title: "W3Schools · HTML Project II", url: "https://www.w3schools.com/html/html_project_quote.php" },
    examples: [{
      title: "A writing club quotation card",
      code: "<style>\n  .quote { border-left: 4px solid teal; padding: 1rem; }\n  .quote blockquote { margin: 0 0 .5rem; }\n</style>\n<figure class=\"quote\">\n  <blockquote><p>Each draft raises a new question.</p></blockquote>\n  <figcaption>Tara, writing club</figcaption>\n</figure>",
      result: "Tara's observation appears above her name. The left border and padding group the quotation and caption into a card.",
    }],
    quizzes: [
      { question: "Why is Tara's name outside blockquote?", options: ["It is a CSS property", "A blockquote hides its text", "It is an attribution"], answer: 2, explanation: "The quotation contains the spoken words; the caption identifies their source." },
      { question: "How can another card share this design?", options: ["Give its figure the quote class", "Add another doctype", "Use the same speaker"], answer: 0, explanation: "The class selector matches both figures." },
      { question: "What does .quote blockquote select?", options: ["Every figcaption", "Blockquotes inside a quote-class element", "The figure's parent"], answer: 1, explanation: "The space is a descendant combinator." },
    ],
  },
]);
