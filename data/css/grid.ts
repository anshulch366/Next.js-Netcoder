import { chapter } from "../resource-chapter";
import { cssDemo } from "./demo";

const gridTracksDemo = cssDemo(
  "<section class=\"shelf\"><b>A</b><b>B</b><b>C</b><b>D</b></section>",
  ".shelf { display: grid; border: 1px solid; }\n.shelf > b { background: peachpuff; padding: .4rem; }",
);

const gridAreasDemo = cssDemo(
  "<section class=\"shelf\"><b>A</b><b>B</b><b>C</b><b>D</b></section>",
  ".shelf { display: grid; border: 1px solid; }\n.shelf > b { background: peachpuff; padding: .4rem; }\n.shelf { grid-template-columns: repeat(3, 1fr); gap: 4px; }",
);

const gridIntrinsicDemo = cssDemo(
  "<div class=\"shelf\"><article><b>Linocut</b><span>Edition 8</span></article><article><b>Woodblock</b><span>Edition 3</span></article></div>",
  ".shelf { display: grid; gap: .5rem; }\narticle { background: #fff0df; }",
);

export const grid = chapter("CSS Grid", [
  {
    id: "grid-tracks", title: "Grid containers, tracks and gaps", level: "Beginner",
    summary: "Build a shelf in rows and columns.",
    content: [
      "The container defines tracks, and its direct children become grid items. An explicit track is one you declare. Additional rows can be created automatically as the browser places more items.",
      "The fraction unit divides leftover space after fixed tracks and gaps are accounted for. Start with short labels so intrinsic text size does not limit the tracks.",
    ],
    examples: [
      { title: "Make two fixed tracks", code: gridTracksDemo(".shelf { grid-template-columns: 80px 100px; }"), result: "A and B fill the first row and C and D form a second." },
      { title: "Share the leftover space", code: gridTracksDemo(".shelf { width: 300px; grid-template-columns: 1fr 2fr; }"), result: "The two columns take 100px and 200px in the 300px content box." },
      { title: "Mix fixed and flexible tracks", code: gridTracksDemo(".shelf { width: 300px; grid-template-columns: 84px 1fr; }"), result: "The flexible track takes the remaining 216px." },
      { title: "Repeat a pattern", code: gridTracksDemo(".shelf { grid-template-columns: repeat(4, 1fr); }"), result: "The four items occupy four equal tracks in one row." },
      { title: "Set different gutters", code: gridTracksDemo(".shelf { grid-template-columns: 1fr 1fr; gap: 8px 20px; }"), result: "Rows are 8px apart and columns are 20px apart." },
      { title: "Size implicit rows", code: gridTracksDemo(".shelf { grid-template-columns: 1fr 1fr; grid-auto-rows: 4rem; }"), result: "Both automatically created rows are 4rem high." },
    ],
    quizzes: [
      { question: "How many columns are explicit?", options: ["Four","One","Two"], answer: 2, explanation: "A and B fill the first row and C and D form a second." },
      { question: "How wide is the second track?", options: ["200px","150px","100px"], answer: 0, explanation: "The two columns take 100px and 200px in the 300px content box." },
      { question: "What space is available to the 1fr track?", options: ["300px","216px","84px"], answer: 1, explanation: "The flexible track takes the remaining 216px." },
      { question: "What does the first repeat argument count?", options: ["Items per cell","Implicit rows","Track-pattern repetitions"], answer: 2, explanation: "The four items occupy four equal tracks in one row." },
      { question: "What is the column gap?", options: ["20px","8px","28px"], answer: 0, explanation: "Rows are 8px apart and columns are 20px apart." },
      { question: "Which property sizes implicit rows?", options: ["grid-template-columns","grid-auto-rows","grid-row"], answer: 1, explanation: "Both automatically created rows are 4rem high." },
    ],
  },
  {
    id: "grid-areas", title: "Grid lines, spans and named areas", level: "Intermediate",
    summary: "Place a header, notes and tools without moving their markup.",
    content: [
      "A track runs between two grid lines, so three columns have four bounding lines. Negative line numbers count back from the end of the explicit grid.",
      "Use areas when region names communicate the layout more clearly than numbers. Each named area must form one rectangle. Unassigned items still participate in auto-placement.",
    ],
    examples: [
      { title: "Span the entire width", code: gridAreasDemo(".shelf > :first-child { grid-column: 1 / -1; }"), result: "A stretches from the first line to the last explicit column line." },
      { title: "Reserve two tracks", code: gridAreasDemo(".shelf > :first-child { grid-column: span 2; }"), result: "A occupies two columns and B fits in the remaining column of row one." },
      { title: "Start at a line", code: gridAreasDemo(".shelf > :first-child { grid-column: 2 / 4; }"), result: "A starts at line 2 and occupies the second and third tracks." },
      { title: "Span rows", code: gridAreasDemo(".shelf > :first-child { grid-row: span 2; }"), result: "A occupies two rows vertically while the other items can fill neighbouring cells." },
      { title: "Name a header area", code: gridAreasDemo(".shelf { grid-template-areas: \"head head head\" \"left mid right\"; }\n.shelf > :first-child { grid-area: head; }"), result: "The named head region covers all three columns in the first row." },
      { title: "Name column lines", code: gridAreasDemo(".shelf { grid-template-columns: [start] 1fr [middle] 1fr [end]; }\n.shelf > :last-child { grid-column: start / end; }"), result: "D stretches across both tracks using the names of the bounding lines." },
    ],
    quizzes: [
      { question: "What does -1 identify here?", options: ["The last item","The last explicit line","The last implicit row"], answer: 1, explanation: "A stretches from the first line to the last explicit column line." },
      { question: "How many columns does A consume?", options: ["One","Three","Two"], answer: 2, explanation: "A occupies two columns and B fits in the remaining column of row one." },
      { question: "How many tracks lie between lines 2 and 4?", options: ["Two","Three","Four"], answer: 0, explanation: "A starts at line 2 and occupies the second and third tracks." },
      { question: "Which axis changes with grid-row?", options: ["Column placement","Row placement","Inline text direction"], answer: 1, explanation: "A occupies two rows vertically while the other items can fill neighbouring cells." },
      { question: "What shape must a named area form?", options: ["Any connected path","A single cell only","A rectangle"], answer: 2, explanation: "The named head region covers all three columns in the first row." },
      { question: "Which names identify the outer edges?", options: ["start and end","middle and end","start and middle"], answer: 0, explanation: "D stretches across both tracks using the names of the bounding lines." },
    ],
  },
  {
    id: "grid-intrinsic", title: "Intrinsic tracks, auto-fit and subgrid", level: "Advanced",
    summary: "Build a grid that adapts to both the container and its contents.",
    content: [
      "Minmax defines a track's lower and upper sizing functions. A zero minimum on a flexible track allows it to become narrower than a long item, so decide how text should wrap as well.",
      "For auto-fit and auto-fill, make the container wide enough to fit more tracks than there are items. The difference is visible in the empty tracks. Subgrid lets a nested grid align its children to tracks of its parent.",
    ],
    examples: [
      { title: "Use a zero minimum", code: gridIntrinsicDemo(".shelf { grid-template-columns: repeat(2, minmax(0, 1fr)); }\narticle { overflow-wrap: anywhere; }"), result: "The tracks can shrink below a word's intrinsic width; long words can wrap." },
      { title: "Collapse unused tracks", code: gridIntrinsicDemo(".shelf { grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr)); }"), result: "When several tracks fit but only two have items, unused tracks collapse and occupied tracks expand." },
      { title: "Retain empty tracks", code: gridIntrinsicDemo(".shelf { grid-template-columns: repeat(auto-fill, minmax(min(100%, 10rem), 1fr)); }"), result: "With surplus width an empty column can remain beside the two articles." },
      { title: "Size to the content", code: gridIntrinsicDemo(".shelf { grid-template-columns: max-content 1fr; }"), result: "The first track takes the width its content needs without soft wrapping; the other uses remaining space." },
      { title: "Align an individual card", code: gridIntrinsicDemo(".shelf { grid-template-columns: 1fr 1fr; }\narticle:first-child { justify-self: end; }"), result: "The first article sits at the inline end of its track instead of stretching across it." },
      { title: "Share parent tracks", code: gridIntrinsicDemo(".shelf { grid-template-columns: 8rem 1fr; }\narticle { grid-column: 1 / -1; display: grid; grid-template-columns: subgrid; }"), result: "Each article spans the parent and its title and edition align to the same two columns." },
    ],
    quizzes: [
      { question: "What is the explicit minimum track size?", options: ["One fraction","The longest word","Zero"], answer: 2, explanation: "The tracks can shrink below a word's intrinsic width; long words can wrap." },
      { question: "Which repeat mode collapses empty tracks?", options: ["auto-fit","auto-fill","repeat(2, ...)"], answer: 0, explanation: "When several tracks fit but only two have items, unused tracks collapse and occupied tracks expand." },
      { question: "Which mode keeps available empty tracks?", options: ["auto-fit","auto-fill","grid-auto-flow: row"], answer: 1, explanation: "With surplus width an empty column can remain beside the two articles." },
      { question: "Which keyword measures content without soft wrapping?", options: ["min-content","auto-fit","max-content"], answer: 2, explanation: "The first track takes the width its content needs without soft wrapping; the other uses remaining space." },
      { question: "Which property places one item on the inline axis?", options: ["justify-self","justify-content","grid-auto-rows"], answer: 0, explanation: "The first article sits at the inline end of its track instead of stretching across it." },
      { question: "What does subgrid reuse?", options: ["Every parent style declaration","Parent grid tracks on the selected axis","Only the parent's background"], answer: 1, explanation: "Each article spans the parent and its title and edition align to the same two columns." },
    ],
  },
]);
