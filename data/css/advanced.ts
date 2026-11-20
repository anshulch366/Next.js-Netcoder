import { chapter } from "../resource-chapter";
import { cssDemo } from "./demo";

const surfacesDemo = cssDemo(
  "<p class=\"label\">North gallery · Paper collection</p>",
  ".label { width: 14rem; padding: 1rem; background-color: #fff1dd; }",
);

const motionDemo = cssDemo(
  "<button class=\"stamp\">Inspect stamp</button>",
  ".stamp { margin: 2rem; padding: .65rem 1rem; }",
);

const tokensDemo = cssDemo(
  "<section class=\"theme\"><p class=\"sample\">Morning edition</p><p class=\"sample featured\">Evening edition</p></section>",
);

export const advanced = chapter("CSS Advanced", [
  {
    id: "surfaces", title: "Borders, shadows and layered backgrounds", level: "Beginner",
    summary: "Give a collection label depth and texture using CSS paint.",
    content: [
      "Start with the same label and change one paint layer at a time. A border occupies space in the box model, while a shadow can extend outside it.",
      "Background images are stacked in the order they are listed, with the first closest to the reader. Use transparency in the top layer when the layers below it should remain visible.",
    ],
    examples: [
      { title: "Round individual corners", code: surfacesDemo(".label { border-radius: 1rem 0; }"), result: "The top-left and bottom-right corners are rounded." },
      { title: "Cast an outer shadow", code: surfacesDemo(".label { box-shadow: 3px 6px 10px #5432; }"), result: "The shadow shifts 3px right and 6px down, with a 10px blur." },
      { title: "Draw an inner stripe", code: surfacesDemo(".label { box-shadow: inset 4px 0 #aa421d; }"), result: "The inset shadow paints a stripe inside the label's left edge." },
      { title: "Stack two paint layers", code: surfacesDemo(".label { background: radial-gradient(circle at right, #f70 0 8px, transparent 9px), linear-gradient(to right, white, wheat); }"), result: "An orange spot appears over the gradient because the radial layer is listed first." },
      { title: "Repeat a paper ruling", code: surfacesDemo(".label { background: repeating-linear-gradient(white 0 15px, #cedbe0 15px 16px); }"), result: "A one-pixel coloured rule repeats every 16px." },
      { title: "Clip the background", code: surfacesDemo(".label { border: 8px dashed teal; background-clip: padding-box; }"), result: "The fill ends at the padding edge and does not paint under the dashed border." },
    ],
    quizzes: [
      { question: "Which corners receive the first value?", options: ["Top-left and top-right","Only bottom-right","Top-left and bottom-right"], answer: 2, explanation: "The top-left and bottom-right corners are rounded." },
      { question: "Which value sets the blur radius?", options: ["10px","3px","6px"], answer: 0, explanation: "The shadow shifts 3px right and 6px down, with a 10px blur." },
      { question: "Which keyword moves a shadow inside?", options: ["inside-border","inset","clip"], answer: 1, explanation: "The inset shadow paints a stripe inside the label's left edge." },
      { question: "Which background image is on top?", options: ["The last listed","The widest one","The first listed"], answer: 2, explanation: "An orange spot appears over the gradient because the radial layer is listed first." },
      { question: "What is the repeat interval?", options: ["16px","1px","15rem"], answer: 0, explanation: "A one-pixel coloured rule repeats every 16px." },
      { question: "Which box limits the paint here?", options: ["Content box","Padding box","Margin box"], answer: 1, explanation: "The fill ends at the padding edge and does not paint under the dashed border." },
    ],
  },
  {
    id: "motion", title: "Transforms, transitions and animation", level: "Intermediate",
    summary: "Animate a museum stamp and preserve a reduced-motion option.",
    content: [
      "A transform changes how a box is painted without repositioning its neighbours in normal flow. A transition interpolates between property values when state changes. An animation plays named keyframes.",
      "Use the focusable stamp to test keyboard and pointer interaction. Slow the durations in developer tools to distinguish a single transition from a repeating animation.",
    ],
    examples: [
      { title: "Translate without reflow", code: motionDemo(".stamp { transform: translateX(20px); }"), result: "The stamp is painted 20px to the right while its original layout slot stays put." },
      { title: "Choose a pivot", code: motionDemo(".stamp { transform-origin: left bottom; transform: rotate(-12deg); }"), result: "The stamp rotates around its lower-left corner." },
      { title: "Ease a state change", code: motionDemo(".stamp { transition: transform 240ms ease-out; }\n.stamp:is(:hover, :focus-visible) { transform: scale(1.12); }"), result: "Hovering or tabbing to the stamp smoothly enlarges it." },
      { title: "Define a keyframe sequence", code: motionDemo("@keyframes arrive { from { opacity: .2; } to { opacity: 1; } }\n.stamp { animation: arrive 1s ease-out; }"), result: "The stamp fades toward full opacity over one second when the animation starts." },
      { title: "Reverse every other pass", code: motionDemo("@keyframes sweep { to { transform: translateX(30px); } }\n.stamp { animation: sweep 1s linear 2 alternate; }"), result: "The first pass moves right and the second returns toward the starting position." },
      { title: "Respect reduced motion", code: motionDemo(".stamp:hover { transform: scale(1.05); }\n@media (prefers-reduced-motion: no-preference) {\n  .stamp { transition: transform 200ms; }\n}"), result: "The hover state still changes when reduced motion is requested, but it changes immediately." },
    ],
    quizzes: [
      { question: "What happens to the original layout slot?", options: ["It is preserved","It moves right by 20px","It doubles in width"], answer: 0, explanation: "The stamp is painted 20px to the right while its original layout slot stays put." },
      { question: "Which property sets the pivot?", options: ["perspective-origin alone","transform-origin","align-items"], answer: 1, explanation: "The stamp rotates around its lower-left corner." },
      { question: "Which value controls the transition duration?", options: ["1.12","ease-out","240ms"], answer: 2, explanation: "Hovering or tabbing to the stamp smoothly enlarges it." },
      { question: "Which name connects the animation to its keyframes?", options: ["arrive","ease-out","opacity"], answer: 0, explanation: "The stamp fades toward full opacity over one second when the animation starts." },
      { question: "Which keyword reverses every second pass?", options: ["linear","alternate","forwards"], answer: 1, explanation: "The first pass moves right and the second returns toward the starting position." },
      { question: "Who receives the animated transition?", options: ["Only touch users","Only people requesting reduced motion","Visitors expressing no reduced-motion preference"], answer: 2, explanation: "The hover state still changes when reduced motion is requested, but it changes immediately." },
    ],
  },
  {
    id: "tokens", title: "Custom properties, functions and the cascade", level: "Advanced",
    summary: "Share design values while keeping local overrides predictable.",
    content: [
      "A custom property participates in the cascade on the element where its value is read. A child can inherit a theme and override one token locally. Inspect the resolved value in the Computed panel.",
      "Math functions combine compatible units. A feature query checks whether a browser recognises a declaration, while a cascade layer controls precedence among groups of rules.",
    ],
    examples: [
      { title: "Inherit a palette", code: tokensDemo(".theme { --ink: #753b24; }\n.sample { color: var(--ink); }"), result: "Both samples read the brown token inherited from their parent." },
      { title: "Override a token locally", code: tokensDemo(".theme { --paper: wheat; }\n.featured { --paper: pink; }\n.sample { background: var(--paper); }"), result: "Only Evening edition uses the pink paper value." },
      { title: "Provide a fallback", code: tokensDemo(".sample { border-left: 4px solid var(--accent, teal); }"), result: "The undefined accent token resolves to the fallback teal." },
      { title: "Mix units with calc", code: tokensDemo(".sample { width: calc(100% - 2rem); background: wheat; }"), result: "The width follows its containing block with a two-rem deduction." },
      { title: "Order stylesheet layers", code: tokensDemo("@layer base, theme;\n@layer theme { .sample { color: teal; } }\n@layer base { .theme .sample { color: brown; } }"), result: "For these normal declarations the later-priority theme layer wins despite the heavier base selector." },
      { title: "Enhance when supported", code: tokensDemo(".sample { border: 2px solid teal; }\n@supports (color: color-mix(in srgb, red, white)) {\n  .sample { background: color-mix(in srgb, coral 25%, white); }\n}"), result: "The border remains as a baseline; supporting browsers also paint the mixed background." },
    ],
    quizzes: [
      { question: "Where is --ink initially declared?", options: ["On the parent theme","On the root automatically","On the second sample only"], answer: 0, explanation: "Both samples read the brown token inherited from their parent." },
      { question: "Which sample inherits wheat?", options: ["Evening edition","Morning edition","Neither"], answer: 1, explanation: "Only Evening edition uses the pink paper value." },
      { question: "When is teal used in this example?", options: ["When teal is unsupported","Only when --accent is defined","When --accent is missing"], answer: 2, explanation: "The undefined accent token resolves to the fallback teal." },
      { question: "What determines the percentage term?", options: ["The containing block's width","The border width","The font's zero glyph"], answer: 0, explanation: "The width follows its containing block with a two-rem deduction." },
      { question: "Which layer wins?", options: ["base","theme","The one containing two classes"], answer: 1, explanation: "For these normal declarations the later-priority theme layer wins despite the heavier base selector." },
      { question: "Which at-rule tests a CSS declaration?", options: ["@media","@layer","@supports"], answer: 2, explanation: "The border remains as a baseline; supporting browsers also paint the mixed background." },
    ],
  },
]);
