import { chapter } from "../resource-chapter";
import { cssDemo } from "./demo";

const imageEffectsDemo = cssDemo(
  "<figure><img class=\"print\" alt=\"Coral sun above teal hills\" src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='140'%3E%3Crect width='240' height='140' fill='wheat'/%3E%3Ccircle cx='175' cy='40' r='26' fill='coral'/%3E%3Cpath d='M0 100 Q70 40 140 100 T240 85 V140 H0Z' fill='teal'/%3E%3C/svg%3E\"><figcaption>Proof before framing</figcaption></figure>",
  ".print { display: block; max-width: 100%; height: auto; }",
);

export const imageEffects = chapter("CSS Advanced", [
  {
    id: "image-effects", title: "Image filters, clipping and masking", level: "Intermediate",
    summary: "Compare changing pixels, cutting an outline and fading transparency.",
    content: [
      "An image filter changes how the image is painted. A clip path defines a hard visible region, while a mask can also represent partial transparency. None of these effects changes the underlying image file.",
      "Every sample includes its own small SVG picture. Apply the effect to the image and leave its caption alone. Compare the visible silhouette with the rectangular space still occupied by the image.",
    ],
    examples: [
      { title: "Make a monochrome proof", code: imageEffectsDemo(".print { filter: grayscale(100%); }"), result: "The sun and hills become shades of grey; the original SVG stays in colour." },
      { title: "Brighten the artwork", code: imageEffectsDemo(".print { filter: brightness(1.2); }"), result: "A brightness multiplier above one lightens the rendered artwork." },
      { title: "Round the visible silhouette", code: imageEffectsDemo(".print { clip-path: circle(40% at 50% 50%); }"), result: "Only the circular central area is painted; the image's rectangular layout box remains." },
      { title: "Cut the print on a diagonal", code: imageEffectsDemo(".print { clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%); }"), result: "A diagonal cut removes the lower-right corner." },
      { title: "Fade the right edge", code: imageEffectsDemo(".print { mask-image: linear-gradient(to right, black 55%, transparent); }"), result: "The left area remains visible and the right edge fades as mask alpha approaches zero." },
      { title: "Blur the image alone", code: imageEffectsDemo(".print { filter: blur(2px); }"), result: "The picture softens while the sibling figcaption stays sharp." },
    ],
    quizzes: [
      { question: "Which value fully removes visible saturation here?", options: ["grayscale(0%)","grayscale(100%)","opacity(100%)"], answer: 1, explanation: "The sun and hills become shades of grey; the original SVG stays in colour." },
      { question: "Which multiplier leaves brightness unchanged?", options: ["0","2","1"], answer: 2, explanation: "A brightness multiplier above one lightens the rendered artwork." },
      { question: "Which box changes in normal flow?", options: ["Neither its width nor its height","Only its width","Both shrink to the circle"], answer: 0, explanation: "Only the circular central area is painted; the image's rectangular layout box remains." },
      { question: "Which vertex pulls the lower-right point inward?", options: ["100% 0","85% 100%","0 100%"], answer: 1, explanation: "A diagonal cut removes the lower-right corner." },
      { question: "What makes the far right transparent?", options: ["The word black alone","A reduced layout width","Zero mask alpha"], answer: 2, explanation: "The left area remains visible and the right edge fades as mask alpha approaches zero." },
      { question: "Why does the caption stay sharp?", options: ["Only the image matches .print","Captions cannot be filtered","Blur affects only SVG text"], answer: 0, explanation: "The picture softens while the sibling figcaption stays sharp." },
    ],
  },
]);
