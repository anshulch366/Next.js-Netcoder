import { chapter } from "../../resource-chapter";

export const publishingGuide = chapter("HTML Tutorial", [
  {
    id: "study-publishingguide-html-head",
    title: "HTML Head",
    level: "Beginner",
    summary: "Configure the document's encoding, viewport and tab title.",
    content: [
      "The head holds metadata and links to resources. An early charset declaration tells the browser how to decode bytes. The viewport setting influences the initial layout on a phone.",
      "Save the file as UTF-8. Place the charset near the beginning of the head, add the viewport and title, then compare the tab label with a heading in the body.",
    ],
    reading: { title: "W3Schools · HTML Head", url: "https://www.w3schools.com/html/html_head.asp" },
    examples: [{
      title: "Notebook metadata",
      code: "<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Language notebook</title>\n</head>",
      result: "The tab reads “Language notebook”. A mobile browser uses the device width for its initial layout viewport.",
    }],
    quizzes: [
      { question: "Which declaration identifies the byte encoding?", options: ["meta charset", "meta viewport", "meta author"], answer: 0, explanation: "The charset declaration identifies the encoding of the document." },
      { question: "Which setting affects the mobile layout width?", options: ["title", "viewport", "lang"], answer: 1, explanation: "The viewport declaration configures the layout viewport." },
      { question: "Where does the visible article belong?", options: ["head", "meta", "body"], answer: 2, explanation: "The body contains the document's reader-facing content." },
    ],
  },
  {
    id: "study-publishingguide-html-layout",
    title: "HTML Layout",
    level: "Beginner",
    summary: "Divide a document into meaningful regions before arranging them visually.",
    content: [
      "Readers need to locate navigation, primary content and supporting information. Semantic elements establish those regions in source order. CSS can then change their visual arrangement.",
      "Read the header, main and footer in order without styling. Follow the agenda link and check that it targets the primary content.",
    ],
    reading: { title: "W3Schools · HTML Layout", url: "https://www.w3schools.com/html/html_layout.asp" },
    examples: [{
      title: "Regions of a club page",
      code: "<header><nav><a href=\"#agenda\">Agenda</a></nav></header>\n<main id=\"agenda\"><h1>Today's agenda</h1><p>Sketch practice</p></main>\n<footer>Art Club</footer>",
      result: "The navigation link leads to the agenda. The club name appears in the footer and the main region identifies the primary content.",
    }],
    quizzes: [
      { question: "Which region contains the primary task?", options: ["footer", "main", "nav"], answer: 1, explanation: "Main identifies the dominant content of the document." },
      { question: "Which element groups major navigation links?", options: ["aside", "main", "nav"], answer: 2, explanation: "Nav identifies a navigation region." },
      { question: "Why read the unstyled layout?", options: ["To check the logical source order", "To resize the image", "To shorten the URL"], answer: 0, explanation: "Sequential reading depends on the order of the markup." },
    ],
  },
  {
    id: "study-publishingguide-html-responsive",
    title: "HTML Responsive",
    level: "Intermediate",
    summary: "Adapt a page to the space available on different screens.",
    content: [
      "A fixed-width layout can overflow a narrow viewport. Fluid sizes follow the available space. A media query can add columns when there is room for them.",
      "Use the viewport declaration and begin with a single-column grid. Resize the window across 40rem and check that both labels remain readable without horizontal scrolling.",
    ],
    reading: { title: "W3Schools · HTML Responsive", url: "https://www.w3schools.com/html/html_responsive.asp" },
    examples: [{
      title: "Switch from one column to two",
      code: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n  .cards { display: grid; gap: 1rem; }\n  @media (min-width: 40rem) { .cards { grid-template-columns: 1fr 1fr; } }\n</style>\n<div class=\"cards\"><p>Monday</p><p>Tuesday</p></div>",
      result: "The days stack below 40rem. At 40rem and above they occupy two equal tracks.",
    }],
    quizzes: [
      { question: "When does the query match?", options: ["Only at 40px", "Only on phones", "At 40rem and above"], answer: 2, explanation: "min-width includes the specified lower bound." },
      { question: "Which value creates equal flexible tracks?", options: ["1fr 1fr", "1px 4px", "auto 0"], answer: 0, explanation: "Each track receives an equal share of flexible space." },
      { question: "What matches the mobile layout viewport to the device?", options: ["The heading", "The viewport meta declaration", "The grid gap"], answer: 1, explanation: "width=device-width sets the initial layout width." },
    ],
  },
  {
    id: "study-publishingguide-html-project-v",
    title: "HTML Project V",
    level: "Intermediate",
    summary: "Build a responsive workshop schedule with a venue panel.",
    content: [
      "On a phone the programme should precede the venue. A wide display can show them side by side. Using CSS for placement preserves the same reading order in both layouts.",
      "Place the programme in main and the venue in aside. Resize the page across 44rem and compare the track widths and reading order.",
    ],
    reading: { title: "W3Schools · HTML Project V", url: "https://www.w3schools.com/html/html_project_layout.php" },
    examples: [{
      title: "Programme and venue layout",
      code: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n  .day { display: grid; gap: 1rem; }\n  @media (min-width: 44rem) { .day { grid-template-columns: 2fr 1fr; } }\n</style>\n<div class=\"day\">\n  <main><h1>Print day</h1><p>Demo at 10 AM</p></main>\n  <aside><h2>Venue</h2><p>Room 2</p></aside>\n</div>",
      result: "On narrow screens the venue follows the programme. In the wide layout the programme receives two thirds of the flexible space after the gap.",
    }],
    quizzes: [
      { question: "What appears first in the narrow layout?", options: ["Print day", "Room 2", "Venue"], answer: 0, explanation: "The main programme comes first in the source." },
      { question: "Which track receives more flexible space?", options: ["The second, at 1fr", "The first, at 2fr", "Both get 2px"], answer: 1, explanation: "The first track receives twice the share of the second." },
      { question: "Why use aside for the venue?", options: ["It always floats right", "It appears only on phones", "It supports the programme"], answer: 2, explanation: "The choice describes the relationship of the content." },
    ],
  },
  {
    id: "study-publishingguide-html-computercode",
    title: "HTML Computercode",
    level: "Beginner",
    summary: "Distinguish commands, keystrokes, variables and sample output.",
    content: [
      "A technical guide must distinguish what the reader enters from what the program returns. HTML provides code for source, kbd for input, samp for output and var for a variable.",
      "Mark up the key, command and response separately. Use pre when line breaks or indentation matter. Encode a literal opening angle bracket as &lt; when displaying HTML source.",
    ],
    reading: { title: "W3Schools · HTML Computercode", url: "https://www.w3schools.com/html/html_computercode_elements.asp" },
    examples: [{
      title: "A terminal instruction",
      code: "<p><kbd>Enter</kbd> to run the command.</p>\n<pre><code>echo Hello</code></pre>\n<p>Output: <samp>Hello</samp></p>",
      result: "Enter is marked as keyboard input, echo Hello as code and Hello as output. The displayed command is available to read and copy.",
    }],
    quizzes: [
      { question: "Which element represents a keystroke?", options: ["samp", "kbd", "var"], answer: 1, explanation: "The kbd element represents user input." },
      { question: "Where should sample program output go?", options: ["kbd", "nav", "samp"], answer: 2, explanation: "The samp element identifies output from a program." },
      { question: "Which wrapper preserves multiline indentation?", options: ["pre", "code alone", "p"], answer: 0, explanation: "Preformatted content retains whitespace." },
    ],
  },
  {
    id: "study-publishingguide-html-semantics",
    title: "HTML Semantics",
    level: "Beginner",
    summary: "Choose elements that describe the purpose of their content.",
    content: [
      "An independent report can be an article, supporting material an aside and major navigation a nav. These distinctions help readers and assistive technology identify the structure.",
      "Ask whether the item makes sense on its own. Give the report a heading and mark its publication date with a readable label and a machine-readable datetime.",
    ],
    reading: { title: "W3Schools · HTML Semantics", url: "https://www.w3schools.com/html/html5_semantic_elements.asp" },
    examples: [{
      title: "A standalone news item",
      code: "<article>\n  <h2>Library reopens</h2>\n  <time datetime=\"2026-06-12\">12 June 2026</time>\n  <p>The new reading room is ready.</p>\n</article>",
      result: "The headline, publication date and report are grouped. Software can read the standard date from datetime.",
    }],
    quizzes: [
      { question: "Which element fits a self-contained report?", options: ["span", "nav", "article"], answer: 2, explanation: "An article represents an independently meaningful composition." },
      { question: "Which attribute supplies the standard date?", options: ["datetime", "title", "charset"], answer: 0, explanation: "The time element's datetime provides its machine-readable value." },
      { question: "What should guide the choice of a semantic element?", options: ["Its default colour", "The purpose of the content", "The filename length"], answer: 1, explanation: "Semantics describe meaning and relationships." },
    ],
  },
  {
    id: "study-publishingguide-html-project-vi",
    title: "HTML Project VI",
    level: "Intermediate",
    summary: "Publish a blog entry that remains intelligible outside its original page.",
    content: [
      "An individual post needs a title, author, date and body. The blog itself can have a separate site heading. Keeping each entry in its own article makes it easier to add a second one.",
      "Create the site header and place the first article in main. Add a second article beside it. Read either entry independently and check that its subject and date are clear.",
    ],
    reading: { title: "W3Schools · HTML Project VI", url: "https://www.w3schools.com/html/html_project_blog.php" },
    examples: [{
      title: "A sketch diary entry",
      code: "<header><h1>Sketch diary</h1></header>\n<main><article>\n  <h2>First charcoal sketch</h2>\n  <p><time datetime=\"2026-07-04\">4 July 2026</time> · Nisha</p>\n  <p>Today I drew shadows in side lighting.</p>\n</article></main>",
      result: "The dated post appears below the site heading. Its author and observation are grouped with the post title.",
    }],
    quizzes: [
      { question: "Where should a second independent post go?", options: ["In another article inside main", "Inside the first time element", "Inside the site title"], answer: 0, explanation: "Each entry needs its own content group." },
      { question: "What does h1 identify here?", options: ["The publication date", "The blog name", "The first sentence"], answer: 1, explanation: "The header names the site Sketch diary." },
      { question: "Which value expresses 4 July 2026 as a standard calendar date?", options: ["04-2026-07", "July04only", "2026-07-04"], answer: 2, explanation: "The date uses year-month-day order." },
    ],
  },
  {
    id: "study-publishingguide-html-style-guide",
    title: "HTML Style Guide",
    level: "Beginner",
    summary: "Write consistent markup that another person can inspect and edit.",
    content: [
      "Indentation reveals nesting. Consistent casing, quoted values and predictable filenames make changes easier to review. Paths on a case-sensitive server must match the actual filename.",
      "Indent children consistently and quote the class list. Validate the markup, then inspect the rendered page to check both its structure and its behaviour.",
    ],
    reading: { title: "W3Schools · HTML Style Guide", url: "https://www.w3schools.com/html/html5_syntax.asp" },
    examples: [{
      title: "Readable nesting and quoted attributes",
      code: "<article class=\"book note\">\n  <h2>Reading list</h2>\n  <p>Read a story this week.</p>\n</article>",
      result: "The heading and paragraph are visibly nested in the source. Both book and note belong to the same class attribute.",
    }],
    quizzes: [
      { question: "What does indentation make easier to inspect?", options: ["Network speed", "Nesting", "Font delivery"], answer: 1, explanation: "Indentation makes parent-child relationships visible to maintainers." },
      { question: "Why quote this class attribute?", options: ["Quotes assign a colour", "Quotes capitalise the tag", "Its value contains a space"], answer: 2, explanation: "Quotes delimit the complete attribute value." },
      { question: "Why distinguish Photo.jpg from photo.jpg?", options: ["The server may be case-sensitive", "HTML renames every file", "JPG is an inline element"], answer: 0, explanation: "The requested path must match the deployed filename." },
    ],
  },
  {
    id: "study-publishingguide-html-entities",
    title: "HTML Entities",
    level: "Beginner",
    summary: "Display characters that would otherwise be interpreted as markup.",
    content: [
      "A less-than sign can introduce a tag and an ampersand can introduce a character reference. Writing &lt; or &amp; allows the parser to produce the intended literal character.",
      "Encode angle brackets around the example tag. Use a non-breaking space between a number and its unit when they should stay together on one line.",
    ],
    reading: { title: "W3Schools · HTML Entities", url: "https://www.w3schools.com/html/html_entities.asp" },
    examples: [{
      title: "Display an HTML tag as text",
      code: "<p>Use <code>&lt;h1&gt;</code> for a heading.</p>\n<p>Fee: 50&nbsp;rupees</p>",
      result: "The sentence displays the literal text <h1>. The number 50 stays attached to rupees at a normal line break.",
    }],
    quizzes: [
      { question: "Which reference represents a literal less-than sign?", options: ["&gt;", "&amp;", "&lt;"], answer: 2, explanation: "The named reference lt represents less than." },
      { question: "Which reference represents an ampersand?", options: ["&amp;", "&nbsp;", "&lt;"], answer: 0, explanation: "The amp reference decodes to an ampersand." },
      { question: "Which reference keeps the number and unit together?", options: ["br", "&nbsp;", "hr"], answer: 1, explanation: "A non-breaking space prevents a normal break at that position." },
    ],
  },
  {
    id: "study-publishingguide-html-symbols",
    title: "HTML Symbols",
    level: "Beginner",
    summary: "Represent currency, copyright and mathematical symbols in source.",
    content: [
      "When a keyboard lacks a symbol, a numeric reference can identify its Unicode code point. Some common symbols also have named references. A UTF-8 document can contain the character directly.",
      "Compare decimal 8377 with hexadecimal 20B9. Prefix decimal references with &# and hexadecimal references with &#x, and terminate each with a semicolon.",
    ],
    reading: { title: "W3Schools · HTML Symbols", url: "https://www.w3schools.com/html/html_symbols.asp" },
    examples: [{
      title: "Two representations of the rupee sign",
      code: "<p>Ticket: &#8377;80</p>\n<p>&copy; Art Club · &#x20B9;80</p>",
      result: "Both prices display the same rupee sign. The named copy reference produces the copyright symbol.",
    }],
    quizzes: [
      { question: "Which prefix introduces a hexadecimal numeric reference?", options: ["&#x", "&hex-", "#rgb"], answer: 0, explanation: "The x marks the following digits as hexadecimal." },
      { question: "What do &#8377; and &#x20B9; produce?", options: ["Different currencies", "The same rupee sign", "Two file paths"], answer: 1, explanation: "Both numbers identify the same Unicode code point." },
      { question: "Which reference represents copyright?", options: ["&cent;", "&reg;", "&copy;"], answer: 2, explanation: "The named copy reference represents the copyright character." },
    ],
  },
  {
    id: "study-publishingguide-html-emojis",
    title: "HTML Emojis",
    level: "Beginner",
    summary: "Use an emoji alongside text that conveys its meaning.",
    content: [
      "Emoji are Unicode characters or sequences. Their appearance depends on the platform and font. A written label can carry the meaning even when a reader cannot distinguish the icon.",
      "Place a calendar emoji beside the class date. Hide only the decorative icon from assistive technology because the adjacent text already explains the message.",
    ],
    reading: { title: "W3Schools · HTML Emojis", url: "https://www.w3schools.com/html/html_emojis.asp" },
    examples: [{
      title: "A labelled calendar date",
      code: "<p><span aria-hidden=\"true\">📅</span> Next class: 12 June</p>",
      result: "The calendar and date are visible. Assistive technology can read the date without announcing a redundant icon.",
    }],
    quizzes: [
      { question: "Why might the calendar look different across devices?", options: ["HTML changes the date", "Platforms use different fonts", "The paragraph is translated"], answer: 1, explanation: "The platform's emoji design determines the glyph." },
      { question: "Which content is hidden from assistive technology?", options: ["The whole date", "The document", "Only the decorative span"], answer: 2, explanation: "The meaningful date remains accessible." },
      { question: "Why include a written label?", options: ["To communicate the meaning independently", "To duplicate the emoji", "To disable UTF-8"], answer: 0, explanation: "Readers can understand the message without recognising the icon." },
    ],
  },
  {
    id: "study-publishingguide-html-charsets",
    title: "HTML Charsets",
    level: "Beginner",
    summary: "Connect a file's stored bytes to the text a browser displays.",
    content: [
      "Unicode identifies characters by code point. UTF-8 encodes those points as bytes. Decoding them with the wrong encoding can corrupt the appearance of non-ASCII text.",
      "Save the sample as UTF-8 and declare the encoding early in the head. When serving it over HTTP, make sure the response's charset agrees with the actual bytes. This example deliberately contains Hindi text.",
    ],
    reading: { title: "W3Schools · HTML Charsets", url: "https://www.w3schools.com/html/html_charset.asp" },
    examples: [{
      title: "Decode a Hindi title and price",
      code: "<!doctype html>\n<html lang=\"hi\"><head><meta charset=\"utf-8\"><title>कक्षा</title></head>\n<body><p>किताब ₹80</p></body></html>",
      result: "With UTF-8 decoding and suitable font support, the tab shows कक्षा (“class”) and the page shows किताब ₹80 (“book, 80 rupees”).",
    }],
    quizzes: [
      { question: "What is UTF-8?", options: ["A font family", "A language code", "A character encoding"], answer: 2, explanation: "An encoding maps characters to and from bytes." },
      { question: "What does lang=\"hi\" identify?", options: ["The Hindi language", "UTF-8 bytes", "A font size"], answer: 0, explanation: "The language declaration identifies the human language." },
      { question: "What can an encoding mismatch cause?", options: ["A different heading rank", "Garbled characters", "An expired URL"], answer: 1, explanation: "Incorrect decoding interprets bytes as the wrong characters." },
    ],
  },
  {
    id: "study-publishingguide-html-url-encode",
    title: "HTML URL Encode",
    level: "Beginner",
    summary: "Encode search text as data within a URL query.",
    content: [
      "An ampersand normally separates parameters and an equals sign separates a name from its value. User text may contain those characters. Component encoding preserves the intended structure.",
      "Pass the raw search phrase to URLSearchParams and inspect toString(). In this form-style format a space can become + and a literal plus becomes %2B.",
    ],
    reading: { title: "W3Schools · HTML URL Encode", url: "https://www.w3schools.com/html/html_urlencode.asp" },
    examples: [{
      title: "Encode a search phrase",
      code: "<script>\n  const query = new URLSearchParams({ q: \"art & craft\" });\n  console.log(query.toString());\n</script>",
      result: "The console displays q=art+%26+craft. The encoded ampersand remains part of the search phrase, while the plus signs represent spaces.",
    }],
    quizzes: [
      { question: "Which character does %26 represent?", options: ["&", "=", "/"], answer: 0, explanation: "Hexadecimal 26 identifies the ampersand byte." },
      { question: "Why supply a raw value to URLSearchParams?", options: ["It resets the class", "Existing percent signs may otherwise be encoded again", "It makes every form use POST"], answer: 1, explanation: "The serializer performs the encoding itself." },
      { question: "What does + represent in this output?", options: ["A new parameter", "A fragment", "A space"], answer: 2, explanation: "Form-style query serialization represents spaces with plus signs." },
    ],
  },
  {
    id: "study-publishingguide-html-vs-xhtml",
    title: "HTML vs. XHTML",
    level: "Intermediate",
    summary: "Recognise when markup is parsed according to XML rules.",
    content: [
      "An HTML parser can recover from many errors. XHTML uses HTML vocabulary with XML syntax. A document served as application/xhtml+xml must be well-formed, so mismatched tags can stop parsing.",
      "Declare the XHTML namespace, quote attribute values and match opening and closing names exactly. Change the closing p to uppercase under XML parsing and inspect the error.",
    ],
    reading: { title: "W3Schools · HTML vs. XHTML", url: "https://www.w3schools.com/html/html_xhtml.asp" },
    examples: [{
      title: "A well-formed XHTML document",
      code: "<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en\">\n  <head><title>Studio</title></head>\n  <body><p>Room A<br />Floor 2</p></body>\n</html>",
      result: "With matching tags, the paragraph displays on two lines. Changing only the closing tag's case produces an XML name mismatch.",
    }],
    quizzes: [
      { question: "Which response type selects XHTML parsing?", options: ["text/plain", "application/xhtml+xml", "image/png"], answer: 1, explanation: "The XHTML media type signals XML parsing." },
      { question: "Which closing tag matches <p> in XML?", options: ["</P>", "</para>", "</p>"], answer: 2, explanation: "XML element names are case-sensitive." },
      { question: "Does writing <br /> switch a text/html document to XML parsing?", options: ["No, it still uses HTML parsing", "Yes, immediately", "It disables the parser"], answer: 0, explanation: "The response media type determines the parsing mode." },
    ],
  },
]);
