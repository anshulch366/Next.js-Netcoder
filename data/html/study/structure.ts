import { chapter } from "../../resource-chapter";

export const structure = chapter("HTML Tutorial", [
  {
    id: "study-structure-html-links",
    title: "HTML Links",
    level: "Beginner",
    summary: "Connect documents, files and sections with meaningful links.",
    content: [
      "An absolute URL includes a scheme and host. A relative URL resolves against the document's base URL. A fragment identifies an element within the destination document.",
      "Give the fees heading a unique id and use it in the link. Read the label on its own to check that the destination is clear.",
    ],
    reading: { title: "W3Schools · HTML Links", url: "https://www.w3schools.com/html/html_links.asp" },
    examples: [{
      title: "Link to the fees section",
      code: "<a href=\"#fees\">View course fees</a>\n<h2 id=\"fees\">Fees</h2>\n<p>The workshop is free.</p>",
      result: "Activating the link adds #fees to the URL and brings the heading into view when scrolling is necessary.",
    }],
    quizzes: [
      { question: "What must match #fees?", options: ["The target id", "The target class", "The heading rank"], answer: 0, explanation: "A fragment identifies an element by id." },
      { question: "Which address can identify another website?", options: ["A fragment alone", "An absolute HTTPS URL", "A filename initial"], answer: 1, explanation: "The scheme and host identify the external destination." },
      { question: "Which label describes its destination most clearly?", options: ["Here", "Click", "View course fees"], answer: 2, explanation: "The first label identifies the information the reader will find." },
    ],
  },
  {
    id: "study-structure-html-images",
    title: "HTML Images",
    level: "Beginner",
    summary: "Display a photograph and provide an alternative description.",
    content: [
      "The src attribute identifies the image file. The alt attribute conveys its meaning when the image cannot be seen. A purely decorative image should have an empty alternative.",
      "Place a 400 by 300 photograph named poster.jpg beside the HTML file. Set its dimensions, then temporarily rename the file to test the alternative.",
    ],
    reading: { title: "W3Schools · HTML Images", url: "https://www.w3schools.com/html/html_images.asp" },
    examples: [{
      title: "A workshop photograph",
      code: "<img src=\"poster.jpg\" alt=\"Tara paints a clay pot blue\" width=\"400\" height=\"300\">",
      result: "The photograph appears when the file is available. Its description conveys the action to a reader who cannot see it.",
    }],
    quizzes: [
      { question: "Which attribute identifies the file?", options: ["alt", "src", "height"], answer: 1, explanation: "The browser requests the URL in src." },
      { question: "Which alternative suits a decorative image?", options: ["alt=\"image\"", "alt=\"important\"", "alt=\"\""], answer: 2, explanation: "An empty alternative allows assistive technology to skip decoration." },
      { question: "Why supply both dimensions?", options: ["To reserve space while loading", "To compress the file", "To generate alternative text"], answer: 0, explanation: "The dimensions establish an aspect ratio before the image arrives." },
    ],
  },
  {
    id: "study-structure-html-favicon",
    title: "HTML Favicon",
    level: "Beginner",
    summary: "Identify a website with a small tab icon.",
    content: [
      "When several tabs are open, a familiar icon helps a reader recognise a site. A link element in the head describes the relationship between the document and the icon.",
      "Save a square PNG as icon.png beside the document. Supply its path and type. If a browser keeps a cached icon, try a new filename and update the link.",
    ],
    reading: { title: "W3Schools · HTML Favicon", url: "https://www.w3schools.com/html/html_favicon.asp" },
    examples: [{
      title: "An icon for the Art Club tab",
      code: "<head>\n  <title>Art Club</title>\n  <link rel=\"icon\" type=\"image/png\" href=\"icon.png\">\n</head>",
      result: "A supporting browser can display the PNG beside the tab title when the file is available.",
    }],
    quizzes: [
      { question: "Which relationship identifies a favicon?", options: ["stylesheet", "next", "icon"], answer: 2, explanation: "The rel attribute describes the linked resource's role." },
      { question: "Which attribute contains the icon path?", options: ["href", "title", "alt"], answer: 0, explanation: "A link element uses href to locate its resource." },
      { question: "Which element displays a photograph in the page body?", options: ["title", "img", "meta"], answer: 1, explanation: "An img element embeds visual content in the document." },
    ],
  },
  {
    id: "study-structure-html-page-title",
    title: "HTML Page Title",
    level: "Beginner",
    summary: "Give each page a recognisable name in tabs, history and bookmarks.",
    content: [
      "A site name alone makes similar tabs hard to distinguish. The document title identifies the page in browser interfaces, while the main heading introduces its visible content.",
      "Place a specific page name followed by the site name in a single title in the head. Open two pages and check that their tab labels distinguish them.",
    ],
    reading: { title: "W3Schools · HTML Page Title", url: "https://www.w3schools.com/html/html_page_title.asp" },
    examples: [{
      title: "Identify a schedule page",
      code: "<head><title>Class schedule | Art Club</title></head>\n<body><h1>This week's classes</h1></body>",
      result: "The tab identifies the class schedule and Art Club. The page heading reads “This week's classes”.",
    }],
    quizzes: [
      { question: "Where does the title element belong?", options: ["head", "footer", "h1"], answer: 0, explanation: "The title is document metadata." },
      { question: "Why give each page a distinct title?", options: ["To load images faster", "To distinguish tabs", "To change link colours"], answer: 1, explanation: "Browsers use titles to identify individual pages." },
      { question: "Which element produces the visible main heading?", options: ["title", "head", "h1"], answer: 2, explanation: "An h1 in the body introduces the page's main subject." },
    ],
  },
  {
    id: "study-structure-html-tables",
    title: "HTML Tables",
    level: "Beginner",
    summary: "Represent facts that depend on both row and column headings.",
    content: [
      "A timetable entry such as 4 PM needs a day and a time heading for context. A table expresses these relationships with rows, header cells and data cells. A caption names the dataset.",
      "Use th for headers and td for values. Set scope to col for a column heading and row for a row heading. Add another day using the same column order.",
    ],
    reading: { title: "W3Schools · HTML Tables", url: "https://www.w3schools.com/html/html_tables.asp" },
    examples: [{
      title: "A class timetable",
      code: "<table>\n  <caption>Art classes</caption>\n  <tr><th scope=\"col\">Day</th><th scope=\"col\">Time</th></tr>\n  <tr><th scope=\"row\">Monday</th><td>4 PM</td></tr>\n</table>",
      result: "The caption names the timetable. The value 4 PM belongs to the Time column and the Monday row.",
    }],
    quizzes: [
      { question: "Which element groups the cells of a row?", options: ["td", "tr", "th"], answer: 1, explanation: "A tr contains the row's header and data cells." },
      { question: "Which scope applies to the Monday header?", options: ["col", "table", "row"], answer: 2, explanation: "Monday identifies the data in its row." },
      { question: "Where should the timetable's visible name go?", options: ["caption", "Every td", "colspan"], answer: 0, explanation: "A caption labels the table as a whole." },
    ],
  },
  {
    id: "study-structure-html-lists",
    title: "HTML Lists",
    level: "Beginner",
    summary: "Choose a list structure that preserves the relationship between items.",
    content: [
      "A materials inventory can be reordered. A set of instructions may depend on its sequence. Use ul for the inventory, ol for ordered steps and dl to pair terms with descriptions.",
      "Separate materials from actions. Insert a step in the middle of the ordered list and observe the numbering. Give the term Outline a definition using dt and dd.",
    ],
    reading: { title: "W3Schools · HTML Lists", url: "https://www.w3schools.com/html/html_lists.asp" },
    examples: [{
      title: "Materials, steps and a definition",
      code: "<ul><li>Pencil</li><li>Paper</li></ul>\n<ol><li>Draw an outline</li><li>Add shading</li></ol>\n<dl><dt>Outline</dt><dd>The outer edge of a shape</dd></dl>",
      result: "Materials appear as bullets, actions as numbered steps and the definition follows its term.",
    }],
    quizzes: [
      { question: "Which list describes a sequence of steps?", options: ["ul", "dl", "ol"], answer: 2, explanation: "An ordered list expresses a meaningful sequence." },
      { question: "Which element contains the description of a term?", options: ["dd", "dt", "li"], answer: 0, explanation: "A dt names the term and a dd describes it." },
      { question: "Who updates the numbers when a step is inserted?", options: ["Each item's title", "The browser", "The doctype"], answer: 1, explanation: "The ordered list's counter follows the order of its items." },
    ],
  },
  {
    id: "study-structure-html-project-iii",
    title: "HTML Project III",
    level: "Beginner",
    summary: "Publish a hobbies page with a practice routine.",
    content: [
      "Interests form an inventory, while a practice routine has a sequence. Separate section headings help readers find the part they need. Different list types preserve the distinction between choices and steps.",
      "Replace the sample interests with your own. Add a practice step before the last item and check both the order and the section headings.",
    ],
    reading: { title: "W3Schools · HTML Project III", url: "https://www.w3schools.com/html/html_project_hobbies.php" },
    examples: [{
      title: "A hobby notebook",
      code: "<h1>My hobbies</h1>\n<h2>Interests</h2>\n<ul><li>Sketching</li><li>Cycling</li></ul>\n<h2>Sketch routine</h2>\n<ol><li>Choose an object</li><li>Draw an outline</li><li>Add shadows</li></ol>",
      result: "The interests appear as two bullets. The sketch routine has three numbered steps under a heading at the same level as Interests.",
    }],
    quizzes: [
      { question: "Which list should contain Cycling?", options: ["The interests ul", "The routine ol", "A new dl"], answer: 0, explanation: "Cycling is one of the independent interests." },
      { question: "What number does the last step receive after inserting a step before it?", options: ["3", "4", "2"], answer: 1, explanation: "The new item moves the original third step to fourth position." },
      { question: "Why are both section headings h2 elements?", options: ["Both are clickable", "Both are paragraphs", "They are sibling sections"], answer: 2, explanation: "They have the same rank beneath the main heading." },
    ],
  },
  {
    id: "study-structure-html-block-inline",
    title: "HTML Block & Inline",
    level: "Beginner",
    summary: "Compare block and inline boxes in normal flow.",
    content: [
      "A paragraph normally starts on a new line and fills the available width. A span normally occupies a portion of a line of text. CSS display can change this layout behaviour.",
      "Wrap one letter in a span and change its colour. Add another paragraph and narrow the window to see how inline text wraps within its paragraph.",
    ],
    reading: { title: "W3Schools · HTML Block & Inline", url: "https://www.w3schools.com/html/html_blocks.asp" },
    examples: [{
      title: "Highlight a gate identifier",
      code: "<p>Gate <span style=\"color: teal\">A</span> is the entrance.</p>\n<p>Show your pass.</p>",
      result: "The letter A appears in teal within the sentence. The instruction to show a pass begins in a separate block.",
    }],
    quizzes: [
      { question: "Which element is inline by default?", options: ["p", "span", "div"], answer: 1, explanation: "A span participates in normal inline text flow." },
      { question: "Why does the second instruction start on a new line?", options: ["The letter is teal", "The letter is uppercase", "It is a separate paragraph"], answer: 2, explanation: "Paragraphs generate block boxes by default." },
      { question: "Which CSS property changes the type of layout box?", options: ["display", "lang", "alt"], answer: 0, explanation: "The display property controls box generation and layout behaviour." },
    ],
  },
  {
    id: "study-structure-html-div",
    title: "HTML Div",
    level: "Beginner",
    summary: "Group related elements inside a common container.",
    content: [
      "A card may need one border around a heading and a price. A div provides a generic grouping when the wrapper itself needs no more specific meaning. Elements such as main and nav describe more specific roles.",
      "Place both children inside the wrapper and give the wrapper a border and padding. Move the border to the paragraph to compare the boundaries.",
    ],
    reading: { title: "W3Schools · HTML Div", url: "https://www.w3schools.com/html/html_div.asp" },
    examples: [{
      title: "Group ticket details",
      code: "<div style=\"border: 1px solid gray; padding: 12px\">\n  <h2>Evening pass</h2>\n  <p>Entry at 5 PM</p>\n</div>",
      result: "One border surrounds the heading and entry time. A border applied only to the paragraph would exclude the heading.",
    }],
    quizzes: [
      { question: "How can one border surround both children?", options: ["Style only the heading", "Capitalise the paragraph", "Style their common parent"], answer: 2, explanation: "The parent box contains both children." },
      { question: "What does a div represent by default?", options: ["A generic grouping", "A navigation landmark", "The document title"], answer: 0, explanation: "A div groups content without assigning a more specific role." },
      { question: "What should you repeat for a second card?", options: ["Only the closing tag", "The wrapper and its children", "Only the style value"], answer: 1, explanation: "Each card needs its own container." },
    ],
  },
  {
    id: "study-structure-html-classes",
    title: "HTML Classes",
    level: "Beginner",
    summary: "Share styles across elements and combine independent classes.",
    content: [
      "A class is a reusable label. One element can have several classes, allowing a shared base style and a separate state such as open. Each selector can then handle one part of the design.",
      "Separate class names with spaces in HTML and prefix each class selector with a dot in CSS. Add open to the second label and observe which property changes.",
    ],
    reading: { title: "W3Schools · HTML Classes", url: "https://www.w3schools.com/html/html_classes.asp" },
    examples: [{
      title: "Combine a base class and a state",
      code: "<style>.tag { padding: 4px; } .open { color: green; }</style>\n<span class=\"tag open\">Open</span>\n<span class=\"tag\">Closed</span>",
      result: "Both labels have padding. Only Open initially receives the green text colour.",
    }],
    quizzes: [
      { question: "How do you assign these two classes in HTML?", options: ["class=\"tag open\"", "class=\".tag.open\"", "class=\"tag,open\""], answer: 0, explanation: "Whitespace separates class names in an HTML class attribute." },
      { question: "Which selector matches the open class?", options: ["#open", ".open", "@open"], answer: 1, explanation: "A dot introduces a class selector." },
      { question: "How could you give Closed the same green colour?", options: ["Change the doctype", "Set id=\"green\"", "Add open to its class list"], answer: 2, explanation: "The existing .open rule will match the second label." },
    ],
  },
  {
    id: "study-structure-html-id",
    title: "HTML Id",
    level: "Beginner",
    summary: "Name a specific element so a link, label or script can find it.",
    content: [
      "An id must be unique within the document. A fragment link uses that value to identify one destination. Repeated components can share a class and still have distinct ids.",
      "Set the link destination to #room and the target id to room. Change the heading text while keeping the id and test the link again.",
    ],
    reading: { title: "W3Schools · HTML Id", url: "https://www.w3schools.com/html/html_id.asp" },
    examples: [{
      title: "Target the room details",
      code: "<a href=\"#room\">View the room</a>\n<h2 id=\"room\">Art studio</h2>",
      result: "The link targets the Art studio heading. The fragment name and the heading's visible wording can differ.",
    }],
    quizzes: [
      { question: "How often should id=\"room\" occur in one document?", options: ["On every heading", "Once", "On every paragraph"], answer: 1, explanation: "A unique value identifies a single target." },
      { question: "Which character introduces the fragment in href?", options: [".", "@", "#"], answer: 2, explanation: "A hash introduces the fragment component of a URL." },
      { question: "What happens if only the heading text changes?", options: ["The same target is found", "The link becomes disabled", "The tab title changes"], answer: 0, explanation: "The fragment matches the id independently of the heading text." },
    ],
  },
  {
    id: "study-structure-html-project-iv",
    title: "HTML Project IV",
    level: "Beginner",
    summary: "Build a reusable member card with a direct profile link.",
    content: [
      "A directory needs consistent presentation for every member and a distinct destination for each profile. A shared class supplies the design. A unique id supplies the link target.",
      "Build Meera's profile as an article. Add a second member using the same class and a new id, then follow each fragment to check its destination.",
    ],
    reading: { title: "W3Schools · HTML Project IV", url: "https://www.w3schools.com/html/html_project_card.php" },
    examples: [{
      title: "A member directory card",
      code: "<style>.member { padding: 1rem; border: 1px solid teal; }</style>\n<a href=\"#meera\">Meera's profile</a>\n<article class=\"member\" id=\"meera\">\n  <h2>Meera</h2><p>Sketch club mentor</p>\n</article>",
      result: "The link targets Meera's article. Both the border and spacing come from the reusable member class.",
    }],
    quizzes: [
      { question: "Which value should a second profile reuse?", options: ["The meera id", "The member's name", "The member class"], answer: 2, explanation: "A class shares presentation across cards." },
      { question: "What is the target of #meera?", options: ["The profile article", "The style block", "The browser tab"], answer: 0, explanation: "The article carries the matching id." },
      { question: "Where should the description of Meera's role be edited?", options: ["In href", "In the card's paragraph", "In the CSS selector"], answer: 1, explanation: "The paragraph contains the visible profile description." },
    ],
  },
  {
    id: "study-structure-html-buttons",
    title: "HTML Buttons",
    level: "Beginner",
    summary: "Choose an explicit button type for each form action.",
    content: [
      "A submit button sends a form. A reset button restores its initial values. A button with type=\"button\" has no default submission action and can be connected to a script. Descriptive labels tell users what to expect.",
      "Edit the search field, activate Reset and inspect its value. Then submit the form and inspect the query string. An actual search service would have to process that request.",
    ],
    reading: { title: "W3Schools · HTML Buttons", url: "https://www.w3schools.com/html/html_buttons.asp" },
    examples: [{
      title: "Search and reset a form",
      code: "<form method=\"get\">\n  <label>Topic <input name=\"q\" value=\"HTML\"></label>\n  <button type=\"submit\">Search</button>\n  <button type=\"reset\">Reset</button>\n</form>",
      result: "Reset restores HTML. Search sends the current q value to the current page as a GET query.",
    }],
    quizzes: [
      { question: "What does Reset restore in this example?", options: ["HTML", "An empty field in all cases", "q"], answer: 0, explanation: "A form reset restores the control's initial value." },
      { question: "Which type suits a form button that only opens a scripted panel?", options: ["submit", "button", "reset"], answer: 1, explanation: "This type has no built-in submit or reset action." },
      { question: "Where does the GET request carry q?", options: ["In the doctype", "In the button class", "In the URL query"], answer: 2, explanation: "A named field becomes a query parameter." },
    ],
  },
  {
    id: "study-structure-html-iframes",
    title: "HTML Iframes",
    level: "Beginner",
    summary: "Display a separate document inside a region of the page.",
    content: [
      "An iframe creates a browsing context with its own document. A descriptive title helps readers using assistive technology identify its purpose. External sites can restrict whether a page may be embedded.",
      "Provide a small inline document with srcdoc. For a separate file use src and specify its URL. Set the frame dimensions and inspect the embedded paragraph.",
    ],
    reading: { title: "W3Schools · HTML Iframes", url: "https://www.w3schools.com/html/html_iframe.asp" },
    examples: [{
      title: "Embed a notice preview",
      code: "<iframe title=\"Notice preview\" width=\"300\" height=\"100\"\n  srcdoc=\"<p>The workshop is tomorrow.</p>\"></iframe>",
      result: "A small frame appears in the parent page. The workshop notice renders inside the frame's own document.",
    }],
    quizzes: [
      { question: "Which attribute supplies an inline HTML document?", options: ["srcset", "srcdoc", "action"], answer: 1, explanation: "The srcdoc attribute holds the embedded markup." },
      { question: "What identifies the frame's purpose to assistive technology?", options: ["width", "height", "title"], answer: 2, explanation: "A descriptive title provides an accessible name." },
      { question: "Which attribute loads a separate document by URL?", options: ["src", "alt", "for"], answer: 0, explanation: "The src attribute specifies the resource to embed." },
    ],
  },
  {
    id: "study-structure-html-javascript",
    title: "HTML JavaScript",
    level: "Beginner",
    summary: "Change a page in response to a user action.",
    content: [
      "HTML supplies the initial structure. JavaScript can find a DOM element, listen for activation and update its text. A local interface change can therefore happen without loading another document.",
      "Place the script after the button and status paragraph so both elements exist at lookup time. Register the click handler and assign the new message to textContent.",
    ],
    reading: { title: "W3Schools · HTML JavaScript", url: "https://www.w3schools.com/html/html_scripts.asp" },
    examples: [{
      title: "Update a seat status",
      code: "<button type=\"button\" id=\"join\">Join</button>\n<p id=\"status\">A seat is available.</p>\n<script>\n  document.querySelector(\"#join\").addEventListener(\"click\", () => {\n    document.querySelector(\"#status\").textContent = \"Seat selected.\";\n  });\n</script>",
      result: "The initial message reports an available seat. Activating Join changes the paragraph to “Seat selected.” The change applies only to this page.",
    }],
    quizzes: [
      { question: "Which event triggers the update?", options: ["load", "submit", "click"], answer: 2, explanation: "The listener is registered for button activation." },
      { question: "Which property replaces the paragraph text?", options: ["textContent", "className", "href"], answer: 0, explanation: "Assigning textContent replaces the element's text." },
      { question: "Why does the script follow the elements?", options: ["It makes the text bold", "The lookup needs the elements to exist", "It resets the button"], answer: 1, explanation: "The parser has created both nodes when the script runs." },
    ],
  },
  {
    id: "study-structure-html-file-paths",
    title: "HTML File Paths",
    level: "Beginner",
    summary: "Resolve a resource address using the document's folder structure.",
    content: [
      "A relative path is resolved against a base URL. A filename refers to the current directory, ../ moves up one level and a leading slash starts at the site's root. These distinctions matter when moving a page into a nested directory.",
      "Start at /club/pages/about.html. To reach the logo, go up to /club and then enter images. Inspect the requested URL in the Network panel to verify the calculation.",
    ],
    reading: { title: "W3Schools · HTML File Paths", url: "https://www.w3schools.com/html/html_filepaths.asp" },
    examples: [{
      title: "Load a logo from a nested page",
      code: "<!-- Page: /club/pages/about.html -->\n<img src=\"../images/logo.png\" alt=\"Art Club\">\n<a href=\"/contact.html\">Contact</a>",
      result: "The image request goes to /club/images/logo.png. The contact link opens /contact.html at the site root.",
    }],
    quizzes: [
      { question: "What does ../ do in a relative path?", options: ["Moves up one directory", "Leaves the site", "Enters the current file"], answer: 0, explanation: "The two-dot segment refers to the parent directory." },
      { question: "Where would logo.png alone resolve here?", options: ["/club/logo.png", "/club/pages/logo.png", "/logo.png"], answer: 1, explanation: "A filename without a directory prefix resolves in the current directory." },
      { question: "What does the leading slash in /contact.html identify?", options: ["The parent folder", "A fragment", "The site root"], answer: 2, explanation: "A root-relative path starts at the root of the current host." },
    ],
  },
]);
