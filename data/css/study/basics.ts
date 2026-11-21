import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const basics = chapter("CSS Tutorial", [
  {
    id: "css-tutorial-home", title: "CSS HOME", level: "Beginner",
    summary: "Give the heading on your first page a color.",
    content: [
      "HTML identifies the heading. CSS controls how it looks. One rule can style every heading of the same type.",
      "Save the example as index.html and open it in a browser. Change teal to purple, save the file, and refresh to see the heading change color.",
    ],
    examples: [{
      title: "CSS HOME · Practice",
      code: cssDemo("<h1>Art club</h1><p>Everyone is welcome.</p>")("h1 { color: teal; }"),
      result: "“Art club” appears in teal. The paragraph keeps its default text color.",
    }],
    quizzes: [
      { question: "Which element does the rule style?", options: ["h1", "p", "body"], answer: 0, explanation: "The h1 selector matches the heading." },
      { question: "Which declaration sets the text color?", options: ["background: teal", "color: teal", "border: teal"], answer: 1, explanation: "The color property sets the foreground color." },
      { question: "What happens if you add another h1?", options: ["Only the first heading gets styled", "The paragraph becomes bold", "The new heading is also teal"], answer: 2, explanation: "A type selector matches every element of that type." },
    ],
  },
  {
    id: "css-tutorial-introduction", title: "CSS Introduction", level: "Beginner",
    summary: "Keep a page's design consistent with a shared style rule.",
    content: [
      "With Cascading Style Sheets, the browser combines matching rules to determine each element's final styles. You can change the design without rewriting the content.",
      "Give two paragraphs the same class. Target that class in the style block and change the border width. Watch both notices respond to one edit.",
    ],
    examples: [{
      title: "CSS Introduction · Practice",
      code: cssDemo("<p class=\"notice\">Gate A</p><p class=\"notice\">Gate B</p>")(".notice { border-left: 4px solid navy; padding-left: 8px; }"),
      result: "Each paragraph has a navy line on the left and 8px of space between the line and the text.",
    }],
    quizzes: [
      { question: "What do both notices share?", options: ["The same ID", "The notice class", "The first word of their text"], answer: 1, explanation: "Several elements can share a class." },
      { question: "Which value would you change to make the line thicker?", options: ["8px", "The notice text", "4px"], answer: 2, explanation: "The border width is 4px." },
      { question: "What stays the same when you change the CSS border width?", options: ["The notice text in the HTML", "Every pixel", "The border width"], answer: 0, explanation: "CSS controls the presentation of the notice." },
    ],
  },
  {
    id: "css-tutorial-syntax", title: "CSS Syntax", level: "Beginner",
    summary: "Identify the selector and declarations in a rule.",
    content: [
      "The selector identifies the elements to style. Inside the braces, each declaration assigns a value to a property. A block can hold several independent declarations.",
      "Use a colon between a property and its value and a semicolon between declarations. In DevTools, uncheck one declaration to see what the other does on its own.",
    ],
    examples: [{
      title: "CSS Syntax · Practice",
      code: cssDemo("<h2>Schedule</h2>")("h2 { color: navy; letter-spacing: 2px; }"),
      result: "The heading appears in navy with extra space between its letters.",
    }],
    quizzes: [
      { question: "Which part is the selector?", options: ["navy", "2px", "h2"], answer: 2, explanation: "The selector appears before the opening brace." },
      { question: "What separates a property from its value?", options: ["Colon", "Comma", "Dot"], answer: 0, explanation: "A colon separates the property name from its value." },
      { question: "What remains if you remove only the spacing declaration?", options: ["A blank heading", "Navy color", "A second selector"], answer: 1, explanation: "The color declaration still applies." },
    ],
  },
  {
    id: "css-tutorial-selectors", title: "CSS Selectors", level: "Beginner",
    summary: "Select elements by type, class, or ID.",
    content: [
      "A type selector matches an element name. A dot introduces a class selector and a hash introduces an ID selector. You can group selectors to give several targets the same styles.",
      "Give one paragraph the note class and another the lead ID. Both receive the p rule. Check which extra style each paragraph gets.",
    ],
    examples: [{
      title: "CSS Selectors · Practice",
      code: cssDemo("<p class=\"note\">Bring a pencil</p><p id=\"lead\">Meet tomorrow morning</p>")("p { padding: 6px; }\n.note { color: teal; }\n#lead { font-weight: bold; }"),
      result: "Both paragraphs have padding. The first is teal and the second is bold.",
    }],
    quizzes: [
      { question: "Which prefix selects a class?", options: ["Dot", "Hash", "Colon"], answer: 0, explanation: "The dot in .note introduces a class name." },
      { question: "Which selector matches both elements?", options: ["#lead", "p", ".note"], answer: 1, explanation: "Both elements are paragraphs." },
      { question: "Which selector targets an ID?", options: [".lead", "lead", "#lead"], answer: 2, explanation: "Write a hash before the ID." },
    ],
  },
  {
    id: "css-tutorial-how-to", title: "CSS How To", level: "Beginner",
    summary: "Compare inline, internal, and external styles.",
    content: [
      "An inline style belongs to one element. An internal stylesheet sits in the page's head. Several pages can link to the same external stylesheet.",
      "Here the internal rule colors all paragraphs teal, and an inline declaration colors the second one maroon. To share the rule across pages, move it to site.css and add <link rel=\"stylesheet\" href=\"site.css\"> to each page's head.",
    ],
    examples: [{
      title: "CSS How To · Practice",
      code: cssDemo("<p>Library</p><p style=\"color: maroon\">Lab</p>")("p { color: teal; }"),
      result: "“Library” appears in teal and “Lab” in maroon. The inline color wins over the competing normal author rule.",
    }],
    quizzes: [
      { question: "Where should you put rules shared by several pages?", options: ["In each paragraph's text", "Linked CSS file", "In each ID name"], answer: 1, explanation: "Editing one shared stylesheet updates every page linked to it." },
      { question: "Which element holds internal CSS rules?", options: ["The text inside a link element", "script", "style"], answer: 2, explanation: "The style element contains CSS rules." },
      { question: "What color is “Lab”?", options: ["Maroon", "Teal", "Inherited black"], answer: 0, explanation: "The inline color takes precedence over this normal stylesheet rule." },
    ],
  },
  {
    id: "css-tutorial-comments", title: "CSS Comments", level: "Beginner",
    summary: "Document the reason for a style with a CSS comment.",
    content: [
      "The CSS parser skips text between /* and */. You can explain a design decision to a maintainer or temporarily disable a declaration.",
      "The color declaration is inside a comment. Remove the comment markers and reload to see the text color change. CSS comments cannot be nested.",
    ],
    examples: [{
      title: "CSS Comments · Practice",
      code: cssDemo("<p class=\"alert\">The time has changed</p>")(".alert {\n  /* color: navy; */\n  background: ivory;\n}"),
      result: "The background is ivory. The commented-out navy text color has no effect.",
    }],
    quizzes: [
      { question: "How does a CSS comment begin?", options: ["//", "<!--", "/*"], answer: 2, explanation: "A slash followed by an asterisk opens the comment." },
      { question: "Which declaration is active?", options: ["background", "color", "Both"], answer: 0, explanation: "The background declaration is outside the comment." },
      { question: "What color will the text be if you remove just the comment markers?", options: ["Ivory", "Navy", "Transparent"], answer: 1, explanation: "The color declaration becomes active again." },
    ],
  },
  {
    id: "css-tutorial-errors", title: "CSS Errors", level: "Beginner",
    summary: "Find an invalid declaration in an otherwise valid rule.",
    content: [
      "The browser usually skips an unknown property or invalid value and continues with the next declaration. A missing brace or semicolon can affect more of the rule.",
      "The example deliberately misspells the text color property. Find the warning in the DevTools Styles pane, change colour to color, and compare the result.",
    ],
    examples: [{
      title: "CSS Errors · Practice",
      code: cssDemo("<p>Workshop notice</p>")("p { colour: navy; background: ivory; }"),
      result: "At first, only the ivory background appears. Correcting the spelling makes the text navy.",
    }],
    quizzes: [
      { question: "Which spelling does CSS recognize?", options: ["color", "colour", "colr"], answer: 0, explanation: "The property name is color." },
      { question: "What happens to the valid background declaration?", options: ["It is always discarded", "It applies", "It turns navy"], answer: 1, explanation: "The browser parses the declaration after the semicolon separately." },
      { question: "Where can you inspect an ignored declaration?", options: ["Bookmarks", "Download list", "DevTools Styles"], answer: 2, explanation: "The Styles pane shows matching rules and flags invalid declarations." },
    ],
  },
  {
    id: "css-tutorial-colors", title: "CSS Colors", level: "Beginner",
    summary: "Choose readable foreground and background colors.",
    content: [
      "A six-digit hex color uses a pair of digits for each red, green, and blue channel. RGB can express the same values in decimal. The contrast between text and background affects readability.",
      "Replace #003366 with rgb(0, 51, 102). Then change only the background and check whether the dark text is easy to read.",
    ],
    examples: [{
      title: "CSS Colors · Practice",
      code: cssDemo("<p>The reading room is open</p>")("p { color: #003366; background-color: ivory; }"),
      result: "Dark blue text appears on ivory. The equivalent RGB value produces the same color.",
    }],
    quizzes: [
      { question: "Which channel does the first hex pair represent?", options: ["Blue", "Red", "Alpha"], answer: 1, explanation: "Six-digit hex colors use RRGGBB order." },
      { question: "Which property colors the area behind the text?", options: ["color", "accent-color", "background-color"], answer: 2, explanation: "The background is painted on the element's box." },
      { question: "What is the decimal value of the blue channel in #003366?", options: ["102", "66", "51"], answer: 0, explanation: "Hexadecimal 66 equals decimal 102." },
    ],
  },
  {
    id: "css-tutorial-backgrounds", title: "CSS Backgrounds", level: "Beginner",
    summary: "Control how a box's background color and image are painted.",
    content: [
      "A background is decorative. Include meaningful information in the page text as well. Set the image's size, position, and repetition independently.",
      "Make a small gradient tile and repeat it horizontally. Change its size or repeat direction to see how far the pattern extends.",
    ],
    examples: [{
      title: "CSS Backgrounds · Practice",
      code: cssDemo("<p>Workshop pass</p>")("p { padding: 24px; background-color: ivory; background-image: linear-gradient(teal, navy); background-size: 12px 4px; background-repeat: repeat-x; }"),
      result: "A repeating strip runs across the top of the ivory box. It is four pixels high, and padding gives the text room below it.",
    }],
    quizzes: [
      { question: "In which direction does repeat-x tile the image?", options: ["Vertical", "Both directions", "Horizontal"], answer: 2, explanation: "The x-axis runs horizontally." },
      { question: "How tall is the tile?", options: ["4px", "12px", "24px"], answer: 0, explanation: "The second background-size value sets the height." },
      { question: "What color is the rest of the box?", options: ["Navy", "Ivory", "Teal"], answer: 1, explanation: "The background color is painted beneath the image layer." },
    ],
  },
  {
    id: "css-tutorial-project-i", title: "CSS Project I", level: "Beginner",
    summary: "Design a class notice that distinguishes the event title from its time.",
    content: [
      "Store the notice's background and spacing in a reusable class. Keep each event's name and time in the HTML so you can publish new notices with the same design.",
      "Give the article a class and target its heading. Copy the notice, change the time, and check that the same rule styles both notices.",
    ],
    examples: [{
      title: "CSS Project I · Practice",
      code: cssDemo("<article class=\"notice\"><h2>Sketch class</h2><p>Saturday at four</p></article>")(".notice { background: #eef8f5; padding: 1rem; }\n.notice h2 { color: #175849; margin-top: 0; }"),
      result: "A pale green card displays a dark heading with the class time below it.",
    }],
    quizzes: [
      { question: "Which box receives the background?", options: ["Article", "Only the h2", "Only the p"], answer: 0, explanation: "The article matches .notice." },
      { question: "What should the second card reuse?", options: ["Unique id", "The notice class", "The exact same time"], answer: 1, explanation: "The class applies the same styles to both cards." },
      { question: "What does .notice h2 select?", options: ["Every article", "The heading's parent", "An h2 inside the notice"], answer: 2, explanation: "The space selects a descendant." },
    ],
  },
  {
    id: "css-tutorial-borders", title: "CSS Borders", level: "Beginner",
    summary: "Draw a visible boundary around a box.",
    content: [
      "A border has a width, a style, and a color. Setting only the width leaves the default style of none, so the line stays invisible.",
      "Use the border shorthand on all sides, then increase the left border width. Inspect the box to see where the padding ends and the border begins.",
    ],
    examples: [{
      title: "CSS Borders · Practice",
      code: cssDemo("<p>Entry pass</p>")("p { border: 2px solid teal; border-left-width: 8px; padding: 6px; }"),
      result: "A teal border surrounds the box. The left edge is 8px wide and the other edges are 2px wide.",
    }],
    quizzes: [
      { question: "Which value sets the line pattern?", options: ["teal", "solid", "2px"], answer: 1, explanation: "The solid value sets the border style." },
      { question: "What is the final width of the left border?", options: ["2px", "6px", "8px"], answer: 2, explanation: "The later declaration sets the left border width." },
      { question: "What creates space inside the border?", options: ["padding", "margin", "outline-offset"], answer: 0, explanation: "Padding sits between the content and the border." },
    ],
  },
  {
    id: "css-tutorial-margins", title: "CSS Margins", level: "Beginner",
    summary: "Leave space between the outer edges of boxes.",
    content: [
      "Margins sit outside the border, beyond the element's painted background. Some vertical margins collapse in normal block flow.",
      "Set the notice's width and give it auto horizontal margins. When the parent is wider, the margins share the remaining space. Resize the window to see how the gaps change.",
    ],
    examples: [{
      title: "CSS Margins · Practice",
      code: cssDemo("<p class=\"notice\">Today's notice</p>")(".notice { width: 60%; margin: 12px auto; background: ivory; }"),
      result: "The notice takes up 60% of its parent's width and sits in the center, with 12px margins above and below.",
    }],
    quizzes: [
      { question: "Which margins are set to auto here?", options: ["Top and bottom", "All four", "Left and right"], answer: 2, explanation: "In this two-value shorthand, the second value sets the horizontal margins." },
      { question: "Does the box's own background cover its margins?", options: ["No", "Only on the left", "Always"], answer: 0, explanation: "The element's background stops at the border edge." },
      { question: "What percentage of the available width does the notice use?", options: ["12%", "60%", "40px"], answer: 1, explanation: "The percentage width is relative to the containing block." },
    ],
  },
  {
    id: "css-tutorial-padding", title: "CSS Padding", level: "Beginner",
    summary: "Leave space between text and the edge of its box.",
    content: [
      "Padding lies inside the painted background. Adding padding to a button also enlarges its clickable area.",
      "Give the button two padding values. Increase only the second value and watch its width grow while its height stays the same.",
    ],
    examples: [{
      title: "CSS Padding · Practice",
      code: cssDemo("<button>Join class</button>")("button { padding: 8px 20px; border: 1px solid teal; background: ivory; }"),
      result: "The button has 8px of padding above and below the text and 20px on each side.",
    }],
    quizzes: [
      { question: "How much padding is above the text?", options: ["8px", "20px", "1px"], answer: 0, explanation: "The first value sets the top and bottom padding." },
      { question: "Why does the clickable area grow?", options: ["The margin is clickable", "Padding belongs to the button's box", "The font grows automatically"], answer: 1, explanation: "Padding falls within the button's boundary." },
      { question: "Which property changes just the left padding?", options: ["margin-left", "border-left", "padding-left"], answer: 2, explanation: "The longhand property targets one side." },
    ],
  },
  {
    id: "css-tutorial-height-width", title: "CSS Height / Width", level: "Beginner",
    summary: "Leave room for content to grow when sizing a box.",
    content: [
      "A long paragraph can overflow a fixed-height box. A minimum height gives the box a lower bound while allowing it to grow with the content.",
      "Give the card half the parent's width and a minimum height. Paste in several more lines and compare the result with a fixed height.",
    ],
    examples: [{
      title: "CSS Height / Width · Practice",
      code: cssDemo("<div class=\"card\">Lesson notes</div>")(".card { width: 50%; min-height: 4rem; background: lavender; }"),
      result: "The box is half as wide as its parent and at least 4rem tall. More text can make it taller.",
    }],
    quizzes: [
      { question: "What determines the 50% width?", options: ["Screen height", "The containing block's width", "Font weight"], answer: 1, explanation: "A percentage width resolves against the containing block." },
      { question: "Which property keeps the box at least 4rem tall?", options: ["max-height", "line-height", "min-height"], answer: 2, explanation: "A minimum height sets the lower bound." },
      { question: "Which choice allows room for longer content?", options: ["Auto height with min-height", "height: 1px", "Always using overflow: hidden"], answer: 0, explanation: "The box can expand as the text wraps." },
    ],
  },
  {
    id: "css-tutorial-box-model", title: "CSS Box Model", level: "Beginner",
    summary: "Work out how much space content, padding, borders, and margins occupy.",
    content: [
      "With the default content-box sizing, the declared width measures the content alone. Add the padding and borders on both sides to get the visible box's width.",
      "Calculate the card's border-box width, then check it in the DevTools box model. Add a margin and measure again. The margin adds space outside the border box.",
    ],
    examples: [{
      title: "CSS Box Model · Practice",
      code: cssDemo("<div class=\"box\">Ticket</div>")(".box { box-sizing: content-box; width: 100px; padding: 10px; border: 2px solid navy; margin: 5px; }"),
      result: "The box measures 124px from border to border and occupies 134px including its horizontal margins.",
    }],
    quizzes: [
      { question: "How wide is the content?", options: ["124px", "134px", "100px"], answer: 2, explanation: "With content-box, the declared width sets the content width." },
      { question: "Which calculation gives 124px?", options: ["100 + 20 + 4", "100 + 10 + 2", "100 + 10 + 4"], answer: 0, explanation: "Add the padding and borders on both sides." },
      { question: "How much width does the margin add to the visible box?", options: ["5px", "0px", "10px"], answer: 1, explanation: "The margin sits outside the border box." },
    ],
  },
  {
    id: "css-tutorial-project-ii", title: "CSS Project II", level: "Beginner",
    summary: "Fit a ticket card into a space exactly 240px wide.",
    content: [
      "The ticket needs padding and a border. A row of tickets can overflow its container if their outer widths exceed the space available.",
      "Use border-box, then set the width, padding, and border. Calculate the content width. Increase the padding to 20px and measure the outside again.",
    ],
    examples: [{
      title: "CSS Project II · Practice",
      code: cssDemo("<article class=\"ticket\"><h2>Workshop pass</h2><p>Seat A12</p></article>")(".ticket { box-sizing: border-box; width: 240px; padding: 16px; border: 2px dashed teal; }"),
      result: "The ticket is 240px wide, with a 204px content area and a dashed border around the edge.",
    }],
    quizzes: [
      { question: "How wide is the content?", options: ["204px", "240px", "276px"], answer: 0, explanation: "Subtract 32px of padding and 4px of borders from 240px." },
      { question: "How wide is the outer box with 20px padding?", options: ["248px", "240px", "232px"], answer: 1, explanation: "The declared width includes the padding." },
      { question: "What pattern marks the ticket's edge?", options: ["Double", "Dotted", "Dashed"], answer: 2, explanation: "The border shorthand specifies dashed." },
    ],
  },
  {
    id: "css-tutorial-outline", title: "CSS Outline", level: "Beginner",
    summary: "Make keyboard focus visible without shifting nearby controls.",
    content: [
      "An outline is painted outside the border without taking up space in the layout. A focus ring shows which control will receive the next keyboard action.",
      "Press Tab to focus the button. Increase outline-offset to see the gap between the ring and the border grow. Provide a visible replacement when changing the default focus style.",
    ],
    examples: [{
      title: "CSS Outline · Practice",
      code: cssDemo("<button>Next lesson</button>")("button:focus-visible { outline: 3px solid navy; outline-offset: 3px; }"),
      result: "Keyboard focus draws a navy ring outside the button. Nearby controls stay in place.",
    }],
    quizzes: [
      { question: "When does the ring appear?", options: ["On every hover", "When :focus-visible matches", "Only after submission"], answer: 1, explanation: "The pseudo-class targets cases where a focus indicator is appropriate, such as keyboard navigation." },
      { question: "Which property controls the gap around the ring?", options: ["outline-color", "padding-top", "outline-offset"], answer: 2, explanation: "The offset sets the distance between the border and the outline." },
      { question: "Does the outline increase the layout width?", options: ["No", "6px", "3px"], answer: 0, explanation: "Outlines do not contribute to box dimensions." },
    ],
  },
  {
    id: "css-tutorial-text", title: "CSS Text", level: "Beginner",
    summary: "Make paragraphs easier to read with alignment, line spacing, and text decoration.",
    content: [
      "Long lines and tightly packed text can be difficult to read. A unitless line-height scales in proportion to the font size.",
      "Limit the paragraph's line length and set its line-height. Change the font size and see how the line height scales. Center the heading and keep the body text aligned for reading.",
    ],
    examples: [{
      title: "CSS Text · Practice",
      code: cssDemo("<h2>Club diary</h2><p>Every week we draw a new sketch and write the story behind it.</p>")("h2 { text-align: center; }\np { max-width: 30ch; line-height: 1.5; }"),
      result: "The heading is centered. The paragraph wraps into shorter lines with space between them.",
    }],
    quizzes: [
      { question: "What line height does 1.5 give a 16px font?", options: ["17.5px", "1.5px", "24px"], answer: 2, explanation: "Multiply the font size by the unitless value." },
      { question: "What does text-align center?", options: ["Inline content", "The outer block box", "Viewport"], answer: 0, explanation: "The property aligns inline content within the box." },
      { question: "Which property limits line length here?", options: ["line-height", "max-width", "text-align"], answer: 1, explanation: "The maximum width determines where the paragraph wraps." },
    ],
  },
  {
    id: "css-tutorial-fonts", title: "CSS Fonts", level: "Beginner",
    summary: "Set the font family, size, and weight independently.",
    content: [
      "The browser tries font families in order. Include a generic family at the end so the browser has a fallback when a named font is missing.",
      "Give the heading a serif stack and the paragraph a sans-serif stack. Replace the first font with an unavailable name to see the fallback. Use font-weight for bold text and rem for sizing.",
    ],
    examples: [{
      title: "CSS Fonts · Practice",
      code: cssDemo("<h2>Reading club</h2><p>Sunday session</p>")("h2 { font-family: Georgia, serif; font-weight: 700; }\np { font-family: Arial, sans-serif; font-size: 1rem; }"),
      result: "The heading is bold and serif. The paragraph uses a sans-serif face. The exact fonts depend on what's available on the device.",
    }],
    quizzes: [
      { question: "What is the fallback if Georgia is unavailable?", options: ["Generic serif", "Always Arial", "Hidden text"], answer: 0, explanation: "The browser tries the next family in the list." },
      { question: "What does 700 control?", options: ["Width", "Weight", "Font size"], answer: 1, explanation: "The font-weight property selects a weight." },
      { question: "What is a rem based on?", options: ["The paragraph's width", "Viewport height", "Root font size"], answer: 2, explanation: "A rem is a multiple of the root element's font size." },
    ],
  },
  {
    id: "css-tutorial-project-iii", title: "CSS Project III", level: "Beginner",
    summary: "Design the typography for a reading excerpt.",
    content: [
      "Use a heading and paragraphs to give the title, excerpt, and author distinct roles. A scale of font sizes makes that hierarchy easier to see.",
      "Limit the article's reading width, give the title a serif face, and make the byline smaller. Check the excerpt in a narrow window and at higher zoom for clipped text.",
    ],
    examples: [{
      title: "CSS Project III · Practice",
      code: cssDemo("<article><h2>Morning market</h2><p>The street was quiet before the shops opened.</p><p class=\"byline\">Meera</p></article>")("article { max-width: 42ch; line-height: 1.6; }\nh2 { font-family: Georgia, serif; }\n.byline { font-size: .875rem; }"),
      result: "A serif title and smaller byline appear in a bounded reading column. The article grows taller as the text wraps.",
    }],
    quizzes: [
      { question: "Which selector changes the author's font size?", options: ["article max-width", ".byline", "h2"], answer: 1, explanation: "Only the author paragraph has the byline class." },
      { question: "What does 42ch limit?", options: ["The number of lines", "Heading weight", "Column width"], answer: 2, explanation: "The ch unit is based on the advance width of the font's zero glyph." },
      { question: "Why test with browser zoom?", options: ["To check wrapping and readability", "To install a font", "To rename the HTML file"], answer: 0, explanation: "Zoom changes the apparent size and the space available for text." },
    ],
  },
]);
