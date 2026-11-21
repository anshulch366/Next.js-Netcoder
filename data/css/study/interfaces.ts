import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const interfaces = chapter("CSS Tutorial", [
  {
    id: "css-tutorial-navigation-bars", title: "CSS Navigation Bars", level: "Intermediate",
    summary: "Arrange page links in a flexible navigation row.",
    content: [
      "The nav element provides a navigation landmark. Flexbox arranges its links in a row. Underline the current page so readers can recognize it by more than its color.",
      "Allow the links to wrap. Narrow the window until the links move to another line. Put aria-current only on the link for the active page.",
    ],
    examples: [{
      title: "CSS Navigation Bars · Practice",
      code: cssDemo("<nav><a href=\"index.html\" aria-current=\"page\">Home</a><a href=\"about.html\">About</a></nav>")("nav { display: flex; flex-wrap: wrap; gap: 1rem; }\nnav [aria-current=\"page\"] { text-decoration-thickness: 3px; }"),
      result: "Home has a thicker underline, and a gap separates the two links.",
    }],
    quizzes: [
      { question: "Which property allows the links to wrap?", options: ["gap", "flex-wrap", "display: inline"], answer: 1, explanation: "Wrapping lets items move onto another flex line." },
      { question: "Which attribute identifies the current destination?", options: ["href alone", "title", "aria-current"], answer: 2, explanation: "The page value identifies the current page." },
      { question: "What adds space between the links?", options: ["gap", "Border", "Underline"], answer: 0, explanation: "The gap property creates space between flex items." },
    ],
  },
  {
    id: "css-tutorial-dropdowns", title: "CSS Dropdowns", level: "Intermediate",
    summary: "Build a dropdown that opens from the keyboard.",
    content: [
      "Menus that depend on hover can be hard to use with a keyboard or touchscreen. The native details and summary elements manage the open state.",
      "Tab to the summary and press Enter. Position the panel absolutely below the relatively positioned details element. Tab to the link and check the focus indicator.",
    ],
    examples: [{
      title: "CSS Dropdowns · Practice",
      code: cssDemo("<details><summary>Topics</summary><nav><a href=\"#forms\">Forms</a></nav></details><h2 id=\"forms\">Forms</h2>")("details { position: relative; width: max-content; }\ndetails nav { position: absolute; top: 100%; background: ivory; padding: .5rem; border: 1px solid; }"),
      result: "Activating Topics reveals the links below it. Activating the summary again closes the panel.",
    }],
    quizzes: [
      { question: "Which element manages the open state?", options: ["CSS color", "nav", "details"], answer: 2, explanation: "The details element tracks whether its contents are open." },
      { question: "What does top: 100% place the panel below?", options: ["Positioned details", "Always the viewport", "The link's font"], answer: 0, explanation: "The percentage uses the height of the containing block." },
      { question: "Which key can activate a focused summary?", options: ["Ctrl+F", "Enter", "Only Escape"], answer: 1, explanation: "The native summary element supports keyboard activation." },
    ],
  },
  {
    id: "css-tutorial-image-gallery", title: "CSS Image Gallery", level: "Intermediate",
    summary: "Arrange images of different sizes in a responsive gallery.",
    content: [
      "Grid tracks define columns, and object-fit preserves thumbnail proportions. Give each meaningful image alternative text that fits its context.",
      "The demo uses the project's subject icons. If you copy it into a local file, replace the two src values with your own image paths. Resize the window to inspect the columns and thumbnails.",
    ],
    examples: [{
      title: "CSS Image Gallery · Practice",
      code: cssDemo("<div class=\"gallery\"><img src=\"/images/subjects/html.svg\" alt=\"HTML\"><img src=\"/images/subjects/css.svg\" alt=\"CSS\"></div>")(".gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(8rem, 100%), 1fr)); gap: .75rem; }\n.gallery img { width: 100%; height: 6rem; object-fit: contain; }"),
      result: "Two columns fit when space allows. At narrow widths there is one column. Each frame shows the entire logo.",
    }],
    quizzes: [
      { question: "What does object-fit: contain keep visible?", options: ["The whole image", "Only a cropped area filling the frame", "A resized source file"], answer: 0, explanation: "Contain scales the entire image proportionally to fit the frame." },
      { question: "What lets the columns adapt?", options: ["alt", "auto-fit and minmax", "Height alone"], answer: 1, explanation: "Grid fits as many tracks as the available width allows." },
      { question: "What expresses an image's purpose in text?", options: ["gap", "The length of src", "alt"], answer: 2, explanation: "The alt attribute supplies a meaningful text alternative." },
    ],
  },
  {
    id: "css-tutorial-image-sprites", title: "CSS Image Sprites", level: "Intermediate",
    summary: "Show part of a shared image sheet through a small window.",
    content: [
      "A sprite sheet stores icons at known coordinates. The background-position property shifts the sheet behind a box. Keep each slot's dimensions consistent.",
      "The demo gradient represents two 24px swatches. Give the second box a negative horizontal offset. For a real sprite sheet, use the image URL and its dimensions.",
    ],
    examples: [{
      title: "CSS Image Sprites · Practice",
      code: cssDemo("<span class=\"swatch\"></span> <span class=\"swatch second\"></span>")(".swatch { display: inline-block; width: 24px; height: 24px; background: linear-gradient(to right, teal 50%, gold 50%) 0 0 / 48px 24px no-repeat; }\n.second { background-position: -24px 0; }"),
      result: "The first box is teal and the second is gold. Both use the same 48px-wide background.",
    }],
    quizzes: [
      { question: "What is the second swatch's horizontal offset?", options: ["24px", "-24px", "0"], answer: 1, explanation: "Moving the sheet left reveals the second slot." },
      { question: "How wide is one slot?", options: ["48px", "12px", "24px"], answer: 2, explanation: "The visible box is one icon wide." },
      { question: "Which property selects the visible slot?", options: ["background-position", "object-fit", "color"], answer: 0, explanation: "The position determines which part of the sheet shows through." },
    ],
  },
  {
    id: "css-tutorial-attribute-selectors", title: "CSS Attribute Selectors", level: "Intermediate",
    summary: "Style elements using attributes already in the markup.",
    content: [
      "Attribute selectors can test for presence, an exact value, or a suffix. For example, you can style PDF links without adding a class to each one.",
      "Use [href$=\".pdf\"] to match URLs ending in .pdf. Append a query string and observe how the literal ending changes. Download behavior depends on the link and server.",
    ],
    examples: [{
      title: "CSS Attribute Selectors · Practice",
      code: cssDemo("<a href=\"kit.pdf\">Kit PDF</a> <a href=\"kit.html\">Kit page</a>")("a[href$=\".pdf\"] { border-bottom: 3px dotted teal; }"),
      result: "Only Kit PDF gets a dotted border. The URL kit.pdf?v=2 no longer ends in .pdf.",
    }],
    quizzes: [
      { question: "Which operator matches a suffix?", options: ["^=", "~=", "$="], answer: 2, explanation: "The $= operator tests the end of a string." },
      { question: "Which selector tests only for the presence of an attribute?", options: ["[href]", "[href=\"\"]", ".href"], answer: 0, explanation: "Brackets around an attribute name test for its presence." },
      { question: "What does this selector inspect?", options: ["The actual file format", "The literal href value", "Link label"], answer: 1, explanation: "CSS matches the attribute in the markup." },
    ],
  },
  {
    id: "css-tutorial-forms", title: "CSS Forms", level: "Intermediate",
    summary: "Make form fields readable, aligned, and easy to use with a keyboard.",
    content: [
      "Keep the label visible and show which field has focus. Inheriting the surrounding font gives inputs and buttons a consistent appearance.",
      "Use grid on the label, add padding to the input, and press Tab to check focus. Try a narrow viewport and check that the field fits its container.",
    ],
    examples: [{
      title: "CSS Forms · Practice",
      code: cssDemo("<label>Email<input type=\"email\" name=\"email\"></label>")("label { display: grid; gap: .3rem; max-width: 20rem; }\ninput { box-sizing: border-box; width: 100%; font: inherit; padding: .5rem; }\ninput:focus-visible { outline: 3px solid teal; }"),
      result: "The label sits above the input. The padded field fits the parent's width and shows a ring on focus.",
    }],
    quizzes: [
      { question: "What keeps padding inside the specified width?", options: ["border-box", "content-box", "outline"], answer: 0, explanation: "With border-box, the width includes both padding and borders." },
      { question: "How can the input use the surrounding font?", options: ["width: inherit", "font: inherit", "display: grid"], answer: 1, explanation: "The input inherits its parent's font settings." },
      { question: "What indicates focus?", options: ["Input name", "Email type", "Teal outline"], answer: 2, explanation: "The focus rule draws a visible outline." },
    ],
  },
  {
    id: "css-tutorial-project-vii", title: "CSS Project VII", level: "Intermediate",
    summary: "Design a registration form whose fields and submit button are easy to find.",
    content: [
      "Keep each label close to its input and use a larger gap between field groups to show which items belong together.",
      "Set separate gaps for the form and its labels. Fill in the name using the keyboard, then try submitting with the field empty. HTML handles required-field validation and CSS makes focus visible.",
    ],
    examples: [{
      title: "CSS Project VII · Practice",
      code: cssDemo("<form><label>Name<input name=\"name\" required></label><label>Batch<select name=\"batch\"><option>A</option><option>B</option></select></label><button>Register</button></form>")("form, label { display: grid; }\nform { max-width: 22rem; gap: 1rem; }\nlabel { gap: .25rem; }\ninput, select, button { font: inherit; padding: .5rem; }\n:focus-visible { outline: 3px solid navy; }"),
      result: "A quarter rem separates each label from its field. Groups are 1rem apart. An empty name prevents submission.",
    }],
    quizzes: [
      { question: "How large is the gap between groups?", options: [".25rem", "1rem", ".5rem"], answer: 1, explanation: "The form sets the gap between its direct children." },
      { question: "What prevents submission with an empty name?", options: ["outline", "display grid", "required"], answer: 2, explanation: "HTML validation checks for a missing required value." },
      { question: "Why use a smaller gap between a label and its field?", options: ["To show their relationship", "To disable validation", "To remove the button"], answer: 0, explanation: "Closely spaced items appear to belong together." },
    ],
  },
  {
    id: "css-tutorial-counters", title: "CSS Counters", level: "Intermediate",
    summary: "Number repeated headings automatically.",
    content: [
      "Use counter-reset to initialize a counter, counter-increment to advance it at each match, and counter() to insert its current value into generated content.",
      "Reset the count on the container and increment it on each h2::before. Insert a heading between the existing two and watch the later numbers update.",
    ],
    examples: [{
      title: "CSS Counters · Practice",
      code: cssDemo("<section><h2>Mix</h2><h2>Fold</h2></section>")("section { counter-reset: step; }\nh2::before { counter-increment: step; content: counter(step) \". \"; }"),
      result: "The headings read “1. Mix” and “2. Fold.” For instructions with a meaningful order, you can also use an HTML ordered list.",
    }],
    quizzes: [
      { question: "What initializes the counter?", options: ["counter()", "content", "counter-reset"], answer: 2, explanation: "The reset property initializes the named counter." },
      { question: "Where does the increment happen?", options: ["On every h2::before", "Only on the section", "At the end of the body"], answer: 0, explanation: "The matching pseudo-element increments the number for each heading." },
      { question: "What number does Fold get after you insert a heading between Mix and Fold?", options: ["2", "3", "0"], answer: 1, explanation: "The new heading adds an earlier increment." },
    ],
  },
  {
    id: "css-tutorial-units", title: "CSS Units", level: "Intermediate",
    summary: "Choose a unit based on what the size should follow.",
    content: [
      "A px is a CSS pixel. A rem depends on the root font size, an em on the relevant font size, and a vw on the viewport width. The reference for a percentage depends on the property.",
      "Give the parent a 20px font and the child a 1.5em font. Set the child's padding to 1em and compare what em refers to in font-size and in padding.",
    ],
    examples: [{
      title: "CSS Units · Practice",
      code: cssDemo("<div><span>Ticket</span></div>")("div { font-size: 20px; }\nspan { display: inline-block; font-size: 1.5em; padding: 1em; background: ivory; }"),
      result: "The child has a 30px font and 30px of padding on each side. Its padding uses its own computed font size.",
    }],
    quizzes: [
      { question: "What font size does 1.5em produce here?", options: ["30px", "20px", "15px"], answer: 0, explanation: "Multiplying 20px by 1.5 gives 30px." },
      { question: "What is 1vw?", options: ["1% of the parent's width", "1% of the viewport width", "Root font"], answer: 1, explanation: "The vw unit is relative to the viewport." },
      { question: "Which unit scales with the root font size?", options: ["Always em", "px", "rem"], answer: 2, explanation: "A rem uses the root font size." },
    ],
  },
  {
    id: "css-tutorial-inheritance", title: "CSS Inheritance", level: "Intermediate",
    summary: "Identify which values pass from a parent to its children.",
    content: [
      "Properties such as color and font-family inherit by default. Box properties such as border and padding normally apply only to the box on which you set them.",
      "Set a color and border on the parent. Inspect the child's computed styles. Override its color and check the colors of the parent and its other children.",
    ],
    examples: [{
      title: "CSS Inheritance · Practice",
      code: cssDemo("<article><p>An <em>important</em> word in the notice.</p></article>")("article { color: navy; border: 2px solid teal; }\nem { color: maroon; }"),
      result: "The paragraph is navy and the emphasized word is maroon. Only the article has a border.",
    }],
    quizzes: [
      { question: "Why is the paragraph navy?", options: ["The border sets its color", "It inherits color", "All paragraphs are navy"], answer: 1, explanation: "The paragraph has no competing color declaration." },
      { question: "Why doesn't each child have a border?", options: ["The color is invalid", "The em is inline", "Borders do not inherit by default"], answer: 2, explanation: "Most box properties do not inherit automatically." },
      { question: "What is the final color of the em?", options: ["Maroon", "Navy", "Teal"], answer: 0, explanation: "Its own specified color takes precedence over inheritance." },
    ],
  },
  {
    id: "css-tutorial-specificity", title: "CSS Specificity", level: "Intermediate",
    summary: "Compare the specificity of competing selectors.",
    content: [
      "Within the same origin, importance, and cascade layer, ID selectors outweigh classes, and classes outweigh type selectors. When specificity ties, a later matching rule can win.",
      "Give the paragraph both a class and an ID. Check the final color with the ID rule written first. Remove that rule to compare the class and type selectors.",
    ],
    examples: [{
      title: "CSS Specificity · Practice",
      code: cssDemo("<p class=\"note\" id=\"today\">Tomorrow's class</p>")("#today { color: navy; }\n.note { color: teal; }\np { color: maroon; }"),
      result: "The text is navy. Removing the ID rule turns it teal because the class selector is more specific than the type selector.",
    }],
    quizzes: [
      { question: "Which selector is most specific?", options: [".note", "p", "#today"], answer: 2, explanation: "An ID has the highest specificity among these selectors." },
      { question: "What color wins after removing the ID rule?", options: ["Teal", "Maroon", "Navy"], answer: 0, explanation: "The class selector outweighs the remaining type selector." },
      { question: "What breaks a tie when specificity and other cascade conditions are equal?", options: ["Always the first rule", "Later rule", "Alphabetical order"], answer: 1, explanation: "The later rule wins by source order." },
    ],
  },
  {
    id: "css-tutorial-important", title: "CSS !important", level: "Intermediate",
    summary: "See how importance affects the cascade.",
    content: [
      "An important author declaration takes precedence over a normal author declaration, even when the normal selector is more specific. Frequent overrides can make later edits difficult to reason about.",
      "Apply an important color to a class and a normal color to an ID. Toggle !important in DevTools. If both declarations are important in the same layer, specificity matters again.",
    ],
    examples: [{
      title: "CSS !important · Practice",
      code: cssDemo("<p id=\"slot\" class=\"closed\">Booking is closed</p>")(".closed { color: maroon !important; }\n#slot { color: teal; }"),
      result: "Maroon wins. Removing !important lets the ID rule turn the text teal.",
    }],
    quizzes: [
      { question: "Where does !important go?", options: ["After the declaration's value", "Before the selector", "Inside the element's ID"], answer: 0, explanation: "Importance applies to an individual declaration." },
      { question: "Which rule wins after you remove !important?", options: [".closed", "#slot", "The rules cancel out"], answer: 1, explanation: "Among these normal rules, the ID is more specific." },
      { question: "If both are important in the same layer, which selector wins here?", options: ["Always the class", "Always the first selector", "The ID"], answer: 2, explanation: "With equal importance, specificity decides this case." },
    ],
  },
  {
    id: "css-tutorial-math-functions", title: "CSS Math Functions", level: "Intermediate",
    summary: "Calculate sizes from the available space.",
    content: [
      "Use calc for arithmetic with compatible units, min for the smaller value, and max for the larger one. Use clamp to combine a lower bound, a preferred value, and an upper bound.",
      "Make the box 2rem narrower than its parent and give the title a fluid font size with limits. Resize the window to see the font stop at each bound. Leave spaces around + and - in calc expressions.",
    ],
    examples: [{
      title: "CSS Math Functions · Practice",
      code: cssDemo("<article><h2>Class notes</h2></article>")("article { width: calc(100% - 2rem); background: ivory; }\nh2 { font-size: clamp(1rem, 4vw, 2rem); }"),
      result: "The article is 2rem narrower than its parent. The heading grows with the viewport between 1rem and 2rem.",
    }],
    quizzes: [
      { question: "Which value is the preferred size?", options: ["1rem", "4vw", "2rem"], answer: 1, explanation: "The middle argument of clamp sets the preferred value." },
      { question: "What is the largest heading size?", options: ["4rem", "1vw", "2rem"], answer: 2, explanation: "The last argument sets the upper bound." },
      { question: "Which function can subtract a fixed length from the parent's width?", options: ["calc", "rgb", "counter"], answer: 0, explanation: "The calc function can combine a percentage with a length." },
    ],
  },
  {
    id: "css-tutorial-optimization", title: "CSS Optimization", level: "Intermediate",
    summary: "Reduce duplicate style rules and measure the result.",
    content: [
      "Sharing declarations can simplify maintenance and reduce the amount of CSS transferred. Measure performance to determine the actual effect.",
      "Group the declarations common to both buttons and write their differences separately. Inspect each button in DevTools and check its appearance and focus state after the edit.",
    ],
    examples: [{
      title: "CSS Optimization · Practice",
      code: cssDemo("<button class=\"save\">Save</button> <button class=\"cancel\">Cancel</button>")(".save, .cancel { padding: .5rem 1rem; border-radius: .4rem; }\n.save { background: navy; color: white; }"),
      result: "Both buttons share a shape and padding. Only Save gets the navy styling.",
    }],
    quizzes: [
      { question: "What does the comma introduce?", options: ["Descendant match", "Pseudo state", "Selector list"], answer: 2, explanation: "The declarations apply to every selector in the list." },
      { question: "What should you compare after the change?", options: ["Rendered states and measured size", "Only the line count", "The file name"], answer: 0, explanation: "Check both behavior and the amount of CSS delivered." },
      { question: "Where is the styling unique to Save?", options: ["Common selector", ".save rule", "Button text"], answer: 1, explanation: "The .save rule extends the shared styles." },
    ],
  },
  {
    id: "css-tutorial-accessibility", title: "CSS Accessibility", level: "Intermediate",
    summary: "Design focus indicators, contrast, and cues that work beyond color.",
    content: [
      "Readers can miss an error indicated only by a red border. A visible message associated with the field explains what needs attention.",
      "Label the invalid field and provide an error message. Give the error border and focus outline distinct styles. Check both the ring and the message with keyboard navigation and zoom.",
    ],
    examples: [{
      title: "CSS Accessibility · Practice",
      code: cssDemo("<label>Email <input aria-invalid=\"true\" aria-describedby=\"err\"></label><p id=\"err\">Add an @ sign to your email address.</p>")("[aria-invalid=\"true\"] { border: 2px solid maroon; }\n:focus-visible { outline: 3px solid navy; outline-offset: 2px; }"),
      result: "The invalid field has a border and a visible error message. Keyboard focus adds a separate outline.",
    }],
    quizzes: [
      { question: "What associates the message with the input?", options: ["aria-describedby", "border color", "outline-offset"], answer: 0, explanation: "The attribute refers to the message's ID." },
      { question: "What communicates the error in addition to color?", options: ["Margin", "Visible error text", "Font family"], answer: 1, explanation: "The message explains what the user needs to correct." },
      { question: "What offset does the focus ring use?", options: ["3px", "0", "2px"], answer: 2, explanation: "The outline-offset property separates the ring from the border." },
    ],
  },
  {
    id: "css-tutorial-website-layout", title: "CSS Website Layout", level: "Intermediate",
    summary: "Arrange a header, main content, and sidebar while preserving source order.",
    content: [
      "A single column often follows the natural reading order on mobile. A wider screen can accommodate secondary information in another column.",
      "Put the main content first in the default flow. At 45rem, use grid to divide the flexible space in a 2:1 ratio. Resize the browser and navigate with the keyboard to check both layouts.",
    ],
    examples: [{
      title: "CSS Website Layout · Practice",
      code: cssDemo("<header>Club</header><div class=\"page\"><main><h1>Programme</h1></main><aside>Room A</aside></div>")(".page { display: grid; gap: 1rem; }\n@media (min-width: 45rem) { .page { grid-template-columns: 2fr 1fr; } }"),
      result: "On narrow screens, the room appears below the main content. In the wide layout, main and aside sit side by side, with more space for main.",
    }],
    quizzes: [
      { question: "How many explicit columns are there before the breakpoint?", options: ["Two", "None", "Three"], answer: 1, explanation: "Default placement creates one implicit column." },
      { question: "What share of flexible space does main receive?", options: ["One part", "A fixed 2px", "Two parts"], answer: 2, explanation: "The 2fr and 1fr tracks divide the remaining space proportionally." },
      { question: "What determines the underlying reading order?", options: ["HTML source order", "Column color", "Gap"], answer: 0, explanation: "The semantic source order guides sequential navigation." },
    ],
  },
]);
