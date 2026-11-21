import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const effects = chapter("CSS Advanced", [
  {
    id: "css-advanced-rounded-corners", title: "CSS Rounded Corners", level: "Intermediate",
    summary: "Round a box's corners with a radius.",
    content: [
      "A length sets the curve of each corner. A 50% radius rounds a square into a circle and a rectangle into an ellipse.",
      "Compare a square avatar with a rectangular badge. Change their dimensions to see how a percentage radius follows the box.",
    ],
    examples: [{
      title: "CSS Rounded Corners · Practice",
      code: cssDemo("<span class=\"avatar\">A</span><span class=\"pill\">Mentor</span>")("span { display: inline-grid; place-items: center; background: lavender; }\n.avatar { width: 3rem; height: 3rem; border-radius: 50%; }\n.pill { padding: .4rem 1rem; border-radius: 999px; }"),
      result: "The A appears in a circle and “Mentor” in a pill-shaped badge.",
    }],
    quizzes: [
      { question: "What dimensions make a circle with a 50% radius?", options: ["Zero height", "Equal width and height", "Any aspect ratio"], answer: 1, explanation: "Equal axes give the curve the same radius in each direction." },
      { question: "What does the radius control?", options: ["Border thickness", "Margin", "Corner shape"], answer: 2, explanation: "The border-radius property defines the corner curve." },
      { question: "Why does a large radius create a pill?", options: ["The browser fits the curves inside the box", "The font rotates", "The width doubles"], answer: 0, explanation: "Overlapping corner radii scale down proportionally." },
    ],
  },
  {
    id: "css-advanced-border-images", title: "CSS Border Images", level: "Intermediate",
    summary: "Use the edges of an image to frame a box.",
    content: [
      "The border-image property divides a source into slices to paint the corners and edges. A gradient can provide the image, so this demo needs no external asset.",
      "Set the border width and style first. Use a gradient source with a slice value of 1. Increase the border width and compare the frame with the background behind the content.",
    ],
    examples: [{
      title: "CSS Border Images · Practice",
      code: cssDemo("<p>Exhibition pass</p>")("p { padding: 1rem; border: 8px solid teal; border-image: linear-gradient(90deg, teal, gold) 1; }"),
      result: "An 8px frame blends from teal to gold around the content.",
    }],
    quizzes: [
      { question: "What supplies the image?", options: ["Text color", "Drop shadow", "Linear gradient"], answer: 2, explanation: "A gradient can be used as an image value." },
      { question: "How much width is allocated to the frame?", options: ["8px", "1px", "90px"], answer: 0, explanation: "The border shorthand sets the width." },
      { question: "What does the final 1 specify?", options: ["Opacity", "Slice", "Margin"], answer: 1, explanation: "In this border-image shorthand, the slice follows the source." },
    ],
  },
  {
    id: "css-advanced-backgrounds", title: "CSS Backgrounds", level: "Intermediate",
    summary: "Paint multiple background layers on one box.",
    content: [
      "The first image in a comma-separated list appears on top. Transparent areas reveal the image below, and the background color sits behind all images.",
      "Place a corner highlight above a broad gradient. Make the first layer completely opaque and observe what happens to the gradient underneath.",
    ],
    examples: [{
      title: "CSS Backgrounds · Practice",
      code: cssDemo("<div class=\"cover\">Workshop</div>")(".cover { padding: 2rem; color: white; background: radial-gradient(circle at top left, #ffffff70, transparent 45%), linear-gradient(90deg, navy, teal); }"),
      result: "A light highlight appears at the top left over a horizontal navy-to-teal blend.",
    }],
    quizzes: [
      { question: "Which image is on top?", options: ["Radial gradient", "Linear gradient", "Text"], answer: 0, explanation: "The first background image paints above the other images." },
      { question: "Where can the lower color show through?", options: ["Only in the text", "In transparent areas", "Nowhere"], answer: 1, explanation: "Transparency reveals the lower layers." },
      { question: "What separates background layers?", options: ["Semicolon", "Slash", "Comma"], answer: 2, explanation: "A comma separates independent background layers." },
    ],
  },
  {
    id: "css-advanced-colors", title: "CSS Colors", level: "Intermediate",
    summary: "Adjust hue, saturation, lightness, and alpha independently.",
    content: [
      "In HSL, an angle sets the hue, saturation sets its intensity, and lightness moves the color from dark to light. Alpha controls how it blends with its backdrop.",
      "Give two swatches the same hue and saturation. Change only the lightness and compare them. Use an alpha value in the background color to make just that layer translucent.",
    ],
    examples: [{
      title: "CSS Colors · Practice",
      code: cssDemo("<span class=\"dark\">A</span><span class=\"light\">B</span>")("span { display: inline-block; padding: 1rem; }\n.dark { background: hsl(180 60% 25%); color: white; }\n.light { background: hsl(180 60% 80%); }"),
      result: "Both swatches are shades of cyan. B has a much lighter background.",
    }],
    quizzes: [
      { question: "How does the lightness change?", options: ["From 180 to 60", "From 25% to 80%", "From 60% to 25%"], answer: 1, explanation: "Lightness is the third HSL component." },
      { question: "What is the hue?", options: ["60", "80", "180"], answer: 2, explanation: "The first component sets the hue angle." },
      { question: "How would you make the color half-transparent?", options: ["hsl(180 60% 25% / .5)", "hsl(180 60% 25% / 5)", "opacity: 50px"], answer: 0, explanation: "An alpha of .5 after the slash gives the color half opacity." },
    ],
  },
  {
    id: "css-advanced-gradients", title: "CSS Gradients", level: "Intermediate",
    summary: "Create a transition between colors without a bitmap.",
    content: [
      "A linear gradient follows a direction, a radial gradient spreads outward from a center, and a conic gradient changes with the angle around its center.",
      "Put two adjacent color stops at 50% to create a sharp boundary. Change the percentage to adjust the filled proportion of the progress bar.",
    ],
    examples: [{
      title: "CSS Gradients · Practice",
      code: cssDemo("<div class=\"progress\">50% complete</div>")(".progress { padding: .6rem; background: linear-gradient(to right, lightgreen 50%, gainsboro 50%); }"),
      result: "The left half is green and the right half is gray. A text label also gives the progress value.",
    }],
    quizzes: [
      { question: "Why is the edge sharp?", options: ["The gradient is radial", "The font is bold", "Both stops are at 50%"], answer: 2, explanation: "Colors switch immediately when their stops share an offset." },
      { question: "Which direction does the gradient follow?", options: ["Left to right", "Top to bottom", "Clockwise"], answer: 0, explanation: "The value to right gives a horizontal progression." },
      { question: "How can readers tell the value without distinguishing the colors?", options: ["From green alone", "From the text label", "From the shadow alone"], answer: 1, explanation: "The label gives the progress as a number." },
    ],
  },
  {
    id: "css-advanced-shadows", title: "CSS Shadows", level: "Intermediate",
    summary: "Give a surface and its text separate shadows.",
    content: [
      "A box shadow follows the box, while a text shadow follows the letters. Offsets set direction, blur softens the edges, and an optional spread changes the size of a box shadow.",
      "Use a positive vertical offset and blur to make the card appear raised. Set the offset to zero and compare how evenly the shadow spreads around it.",
    ],
    examples: [{
      title: "CSS Shadows · Practice",
      code: cssDemo("<article>Library pass</article>")("article { padding: 1rem; margin: 1rem; box-shadow: 0 4px 10px #0004; text-shadow: 1px 1px 1px #0002; }"),
      result: "A soft shadow appears beneath the box and a faint shadow appears beside the letters.",
    }],
    quizzes: [
      { question: "What is the box shadow's vertical offset?", options: ["4px", "10px", "0"], answer: 0, explanation: "The second length sets the y offset." },
      { question: "What does 10px set?", options: ["Border width", "Blur", "Spread"], answer: 1, explanation: "The third length is the blur radius." },
      { question: "Does a shadow occupy layout space?", options: ["Always 10px", "Only horizontally", "No"], answer: 2, explanation: "A shadow is a paint effect." },
    ],
  },
  {
    id: "css-advanced-text-effects", title: "CSS Text Effects", level: "Intermediate",
    summary: "Fit a single-line label into a limited width with an ellipsis.",
    content: [
      "The text-overflow property can mark text clipped in the inline direction. If wrapping is enabled, the text can move onto another line.",
      "Apply nowrap, hidden overflow, and an ellipsis to a narrow label. Widen it until the whole text fits and the dots disappear.",
    ],
    examples: [{
      title: "CSS Text Effects · Practice",
      code: cssDemo("<p>Saturday watercolour exhibition schedule</p>")("p { width: 12ch; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }"),
      result: "The long name appears on one line with an ellipsis at the end. The full text remains in the DOM.",
    }],
    quizzes: [
      { question: "What prevents wrapping?", options: ["width: auto", "white-space: nowrap", "ellipsis alone"], answer: 1, explanation: "The white-space rule keeps the text on one line." },
      { question: "Which property supplies the overflow marker?", options: ["font-style", "line-height", "text-overflow"], answer: 2, explanation: "The ellipsis marks truncated text." },
      { question: "What happens once the full text fits?", options: ["The entire name appears", "The dots always remain", "The text is deleted"], answer: 0, explanation: "An ellipsis appears only when needed." },
    ],
  },
  {
    id: "css-advanced-custom-fonts", title: "CSS Custom Fonts", level: "Intermediate",
    summary: "Register a font file under a family name.",
    content: [
      "The @font-face rule gives the browser a font name and its source. With font-display: swap, text can appear in a fallback and switch when the requested font loads.",
      "Place a licensed WOFF2 font at fonts/club.woff2. List a fallback after the custom family on the heading. Make the file unavailable and inspect the network request and the rendered font.",
    ],
    examples: [{
      title: "CSS Custom Fonts · Practice",
      code: cssDemo("<h2>Studio diary</h2>")("@font-face { font-family: Club; src: url(\"fonts/club.woff2\") format(\"woff2\"); font-display: swap; }\nh2 { font-family: Club, Georgia, serif; }"),
      result: "The heading uses Club if the file loads. If the file is missing, the serif fallback keeps the heading readable.",
    }],
    quizzes: [
      { question: "Which rule registers the font?", options: ["@import-font", "@media", "@font-face"], answer: 2, explanation: "The rule associates a font source with its descriptors." },
      { question: "Which descriptor gives the file location?", options: ["src", "font-display", "font-weight"], answer: 0, explanation: "The src descriptor identifies the font resource." },
      { question: "Which family comes next if Club is unavailable?", options: ["Always Arial", "Georgia", "No text"], answer: 1, explanation: "The browser tries fallbacks in the listed order." },
    ],
  },
  {
    id: "css-advanced-2d-transforms", title: "CSS 2D Transforms", level: "Intermediate",
    summary: "Move, rotate, or scale a box while preserving its space in flow.",
    content: [
      "A transform changes the painted geometry. The original layout slot stays in place, so a scaled box can overlap a neighbor.",
      "Display the inline badge as an inline-block and rotate it. Set the angle to zero and compare the placement of the surrounding text.",
    ],
    examples: [{
      title: "CSS 2D Transforms · Practice",
      code: cssDemo("<p>Ticket <span>SALE</span> ends today</p>")("span { display: inline-block; background: gold; transform: rotate(-8deg); transform-origin: center; }"),
      result: "“SALE” appears tilted. The surrounding text flows around the badge's original slot.",
    }],
    quizzes: [
      { question: "Which unit measures the rotation angle?", options: ["deg", "px", "fr"], answer: 0, explanation: "Degrees measure an angle." },
      { question: "What specifies the center of rotation?", options: ["margin", "transform-origin", "float"], answer: 1, explanation: "The transform origin sets the pivot point." },
      { question: "Does rotation enlarge a neighbor's flow slot?", options: ["By the rotation angle", "It doubles", "No"], answer: 2, explanation: "The transform applies after normal layout." },
    ],
  },
  {
    id: "css-advanced-3d-transforms", title: "CSS 3D Transforms", level: "Intermediate",
    summary: "Show depth by rotating a surface in perspective.",
    content: [
      "The rotateY function turns a surface about its vertical axis. Perspective on the parent sets a viewing distance so nearer and farther edges project at different sizes.",
      "Give the stage perspective and rotate the card with rotateY. Try zero and then 45deg. Compare the apparent width with the card's original layout width.",
    ],
    examples: [{
      title: "CSS 3D Transforms · Practice",
      code: cssDemo("<div class=\"stage\"><p>Club pass</p></div>")(".stage { perspective: 420px; }\np { width: 8rem; padding: 1rem; background: lavender; transform: rotateY(35deg); }"),
      result: "The card looks turned to one side. Perspective changes the appearance of the farther edge.",
    }],
    quizzes: [
      { question: "Which function rotates around the vertical axis?", options: ["rotateX", "rotateY", "translateZ"], answer: 1, explanation: "The y-axis is vertical." },
      { question: "Where is the viewing distance set?", options: ["Text node", "Body title", "On the parent stage"], answer: 2, explanation: "The parent's perspective projects its transformed child." },
      { question: "What happens if you replace 35deg with zero?", options: ["The card faces forward", "The card is hidden", "Its height becomes zero"], answer: 0, explanation: "A rotation of zero leaves the orientation unchanged." },
    ],
  },
  {
    id: "css-advanced-transitions", title: "CSS Transitions", level: "Intermediate",
    summary: "Make a change between two states gradual.",
    content: [
      "Declare the transition in the base rule to animate both entering and leaving a state. Choose a property, duration, and timing function.",
      "Raise the button slightly on hover or keyboard focus. Disable the transition for reduced motion and keep the keyboard focus indicator visible.",
    ],
    examples: [{
      title: "CSS Transitions · Practice",
      code: cssDemo("<button>Next lesson</button>")("button { transition: transform 180ms ease-out; }\nbutton:hover, button:focus-visible { transform: translateY(-3px); }\n@media (prefers-reduced-motion: reduce) { button { transition: none; } }"),
      result: "The button rises 3px over 180ms. With reduced motion enabled, it changes state immediately.",
    }],
    quizzes: [
      { question: "How long does the transition take?", options: ["3ms", "180s", "180ms"], answer: 2, explanation: "The duration sets the transition time." },
      { question: "Which way does a negative translateY move the button?", options: ["Up", "Down", "Right"], answer: 0, explanation: "Positive y values point down by default." },
      { question: "Why does the transition work in both directions?", options: ["It is declared only on hover", "It is declared in the base rule", "The button is fixed"], answer: 1, explanation: "The transition is available when entering or leaving the state." },
    ],
  },
  {
    id: "css-advanced-animations", title: "CSS Animations", level: "Intermediate",
    summary: "Animate movement over time with keyframes.",
    content: [
      "Use @keyframes to define values along a timeline and the animation property to set timing and repetition. Account for the reader's reduced-motion preference.",
      "Move a dot and bring it back. Increase the distance in the middle frame and check that the cycle still takes the same time. Include essential status information in text.",
    ],
    examples: [{
      title: "CSS Animations · Practice",
      code: cssDemo("<p><span></span> Loading demo</p>")("span { display: inline-block; width: .6rem; height: .6rem; background: teal; }\n@keyframes hop { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }\n@media (prefers-reduced-motion: no-preference) { span { animation: hop 1s ease 3; } }"),
      result: "When motion is allowed, the dot rises and returns three times. The “Loading demo” text stays still.",
    }],
    quizzes: [
      { question: "At which frame does the dot reach its peak?", options: ["50%", "100%", "0%"], answer: 0, explanation: "The middle keyframe sets the translation to -6px." },
      { question: "How many cycles run?", options: ["1", "3", "Infinite"], answer: 1, explanation: "The animation iteration count is 3." },
      { question: "What appears when reduced motion is requested?", options: ["An empty page", "A constantly moving dot", "A stationary dot and text"], answer: 2, explanation: "The animation is inside the no-preference media query." },
    ],
  },
  {
    id: "css-advanced-tooltips", title: "CSS Tooltips", level: "Intermediate",
    summary: "Show a control's extra hint on hover and keyboard focus.",
    content: [
      "Give the control a meaningful label of its own. Use hover and focus-within to reveal a short inline hint.",
      "Give the button a descriptive name and the hint an ID. Move the pointer onto the hint and focus the button with the keyboard. The inline hint leaves surrounding content visible.",
    ],
    examples: [{
      title: "CSS Tooltips · Practice",
      code: cssDemo("<span class=\"help\"><button aria-describedby=\"hint\">Seat code</button><span id=\"hint\" role=\"tooltip\"> Look for a code such as A12 on your ticket.</span></span>")("#hint { visibility: hidden; }\n.help:hover #hint, .help:focus-within #hint { visibility: visible; }"),
      result: "The hint appears on hover or button focus. Its space is reserved while visibility is hidden.",
    }],
    quizzes: [
      { question: "Which condition matches the wrapper during keyboard focus?", options: ["Only :hover", ":focus-within", ":visited"], answer: 1, explanation: "The wrapper matches when a descendant has focus." },
      { question: "What associates the hint with the control?", options: ["display", "background", "aria-describedby"], answer: 2, explanation: "The attribute references the hint's ID." },
      { question: "Why does the hidden hint already have space?", options: ["visibility hidden", "display none", "opacity zero height"], answer: 0, explanation: "Hidden visibility preserves its layout box." },
    ],
  },
  {
    id: "css-advanced-image-styling", title: "CSS Image Styling", level: "Intermediate",
    summary: "Fit a photo to a content column while preserving its proportions.",
    content: [
      "A maximum width of 100% keeps a large image inside its parent. Automatic height preserves its natural aspect ratio. A border radius rounds the corners.",
      "Try the demo with your own image URL. Narrow the parent and check for overflow. Give meaningful images appropriate alt text in the HTML.",
    ],
    examples: [{
      title: "CSS Image Styling · Practice",
      code: cssDemo("<figure><img src=\"/images/courses/python.png\" alt=\"Python course\"></figure>")("figure { max-width: 16rem; }\nimg { display: block; max-width: 100%; height: auto; border-radius: .75rem; }"),
      result: "The image fits the available width, retains its natural proportions, and has rounded corners.",
    }],
    quizzes: [
      { question: "What preserves the aspect ratio?", options: ["Height fixed 100px", "Border radius", "height: auto"], answer: 2, explanation: "Automatic height scales with the width." },
      { question: "What prevents the image from growing wider than its container?", options: ["max-width: 100%", "display: block alone", "alt"], answer: 0, explanation: "The percentage maximum uses the containing block's width as an upper bound." },
      { question: "Which property rounds the edges?", options: ["outline", "border-radius", "clip text"], answer: 1, explanation: "The radius sets the corner curve." },
    ],
  },
  {
    id: "css-advanced-image-modal", title: "CSS Image Modal", level: "Intermediate",
    summary: "Open a larger image in a modal dialog from a thumbnail.",
    content: [
      "A modal blocks background interaction, so keyboard users need a way to close it. CSS styles the backdrop and sizes the image. The native dialog enters its modal state with showModal().",
      "Activate the thumbnail, then test Escape and the Close button. In a local copy, use your own photo URL. Size the dialog image to fit the viewport.",
    ],
    examples: [{
      title: "CSS Image Modal · Practice",
      code: cssDemo("<button id=\"show\"><img width=\"72\" src=\"/images/courses/python.png\" alt=\"Enlarge the Python course cover\"></button><dialog id=\"view\"><img src=\"/images/courses/python.png\" alt=\"Python course cover\"><form method=\"dialog\"><button>Close</button></form></dialog><script>document.querySelector(\"#show\").onclick = () => document.querySelector(\"#view\").showModal();</script>")("dialog img { max-width: 75vw; max-height: 65vh; display: block; }\ndialog::backdrop { background: rgb(0 0 0 / 65%); }"),
      result: "Clicking the thumbnail opens a larger cover against a dark backdrop. Closing it restores interaction with the page.",
    }],
    quizzes: [
      { question: "What opens the dialog in its modal state?", options: ["showModal()", "display: block", "opacity: 1"], answer: 0, explanation: "The native dialog method provides modal behavior." },
      { question: "Which selector targets the overlay behind the dialog?", options: ["dialog:hover", "dialog::backdrop", "img::before"], answer: 1, explanation: "The backdrop paints behind the top-layer dialog." },
      { question: "How does the Close button work?", options: ["img alt", "width 72", "method=\"dialog\""], answer: 2, explanation: "Submitting a form with method=\"dialog\" closes its dialog." },
    ],
  },
]);
