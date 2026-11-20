import { chapter } from "../resource-chapter";

export const colours = chapter("HTML References", [
  {
    id: "colour-reference", title: "Colour names, hex, RGB and HSL", level: "Intermediate",
    summary: "Read the colour values that appear in style attributes and SVG.",
    content: ["HTML identifies the content and CSS supplies its colours. Each example uses an inline declaration so you can compare values without creating a separate stylesheet. The same colour value can be used in an external CSS rule.",
      "Hex and RGB describe red, green and blue channels. HSL describes hue, saturation and lightness. When comparing foreground and background, check legibility in the actual layout and include a text cue for important states."],
    examples: [
      { title: "Use a named colour", code: "<p style=\"color:navy\">Evening schedule</p>", result: "The CSS named colour navy gives the paragraph a dark blue foreground." },
      { title: "Read three hex channels", code: "<p style=\"color:#993300\">Kiln room</p>", result: "99 is the red byte, 33 the green byte and 00 the blue byte in hexadecimal." },
      { title: "Expand short hex", code: "<p style=\"background:#ace\">Stock list</p>", result: "Each hex digit doubles, so #ace expands to #aaccee." },
      { title: "Write the same colour in RGB", code: "<p style=\"color:rgb(153 51 0)\">Kiln room</p>", result: "The decimal channels 153, 51 and 0 match hexadecimal 99, 33 and 00." },
      { title: "Set hue and lightness", code: "<p style=\"color:hsl(180 100% 20%)\">Water tray</p>", result: "A hue of 180 degrees with full saturation and low lightness yields dark cyan." },
      { title: "Add transparency behind text", code: "<p style=\"background:rgb(255 85 50 / 15%);color:#242424\">Booked · morning shift</p>", result: "The orange background has a 15% alpha value while the text remains opaque and explicitly names the state." },
    ],
    quizzes: [
      { question: "Which property sets the text foreground?", options: ["background-color","color","border-width"], answer: 1, explanation: "The CSS named colour navy gives the paragraph a dark blue foreground." },
      { question: "Which pair sets the green channel in #993300?", options: ["99","00","33"], answer: 2, explanation: "99 is the red byte, 33 the green byte and 00 the blue byte in hexadecimal." },
      { question: "Which long value equals #ace?", options: ["#aaccee","#aceace","#0a0c0e"], answer: 0, explanation: "Each hex digit doubles, so #ace expands to #aaccee." },
      { question: "Which hex colour matches these channels?", options: ["#153510","#993300","#339900"], answer: 1, explanation: "The decimal channels 153, 51 and 0 match hexadecimal 99, 33 and 00." },
      { question: "Which HSL component should increase to make this same hue lighter?", options: ["Hue","Alpha","Lightness"], answer: 2, explanation: "A hue of 180 degrees with full saturation and low lightness yields dark cyan." },
      { question: "What does the 15% after the slash control?", options: ["Background colour alpha","Text size","Hue rotation"], answer: 0, explanation: "The orange background has a 15% alpha value while the text remains opaque and explicitly names the state." },
    ],
  },
]);
