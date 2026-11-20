import { chapter } from "../resource-chapter";

export const sass = chapter("CSS Sass", [
  {
    id: "sass-start", title: "Compile SCSS and use variables", level: "Beginner",
    summary: "Turn a small SCSS file into the CSS that a browser loads.",
    content: [
      "Use Dart Sass. Save one example at a time as studio.scss and run sass studio.scss studio.css in that directory. Open studio.css to compare the compiled rule with the expected result.",
      "For a visual check, link studio.css from a page containing <article class=\"ticket\"><h2>Print night</h2><p>Doors open at six.</p></article>. Sass variables are resolved during compilation; the browser receives ordinary CSS.",
    ],
    examples: [
      { title: "Compile an ordinary declaration", code: ".ticket { padding: 1rem; }", result: "The compiled stylesheet contains the .ticket padding rule. Plain CSS rules are valid SCSS." },
      { title: "Reuse a colour variable", code: "$ink: #743419;\n.ticket { color: $ink; border: 1px solid $ink; }", result: "Both declarations compile with the same colour value." },
      { title: "Calculate spacing", code: "$step: 4px;\n.ticket { padding: $step * 3; }", result: "The generated padding is 12px." },
      { title: "Share a selector prefix", code: "$name: ticket;\n.#{$name} { background: wheat; }", result: "Interpolation produces the selector .ticket." },
      { title: "Use a comma-separated value", code: "$reading: Georgia, serif;\n.ticket { font-family: $reading; }", result: "The output retains Georgia followed by the serif fallback." },
      { title: "Choose a configurable default", code: "$space: 12px;\n$space: 8px !default;\n.ticket { gap: $space; display: grid; }", result: "The existing 12px value is kept, so the compiled grid gap is 12px." },
    ],
    quizzes: [
      { question: "Which file should the HTML page link to?", options: ["studio.scss","studio.css","The Sass executable"], answer: 1, explanation: "The compiled stylesheet contains the .ticket padding rule. Plain CSS rules are valid SCSS." },
      { question: "When is $ink resolved?", options: ["When the browser hovers the card","When HTML parsing ends","During Sass compilation"], answer: 2, explanation: "Both declarations compile with the same colour value." },
      { question: "What does this expression compile to?", options: ["12px","7px","4rem"], answer: 0, explanation: "The generated padding is 12px." },
      { question: "Which syntax inserts a Sass value into selector text?", options: ["var(...)","#{...}","@use(...)"], answer: 1, explanation: "Interpolation produces the selector .ticket." },
      { question: "What does the comma preserve here?", options: ["Two separate selectors","A media query","A font fallback list"], answer: 2, explanation: "The output retains Georgia followed by the serif fallback." },
      { question: "What does !default do for an already assigned non-null value?", options: ["Keeps the earlier value","Always overwrites it","Emits !important"], answer: 0, explanation: "The existing 12px value is kept, so the compiled grid gap is 12px." },
    ],
  },
  {
    id: "sass-reuse", title: "Nesting, mixins, loops and extension", level: "Intermediate",
    summary: "Generate related rules without repeating their source.",
    content: [
      "Compile each independent SCSS sample with sass studio.scss studio.css. Read the expanded selectors before adding another level of nesting. Each extra ancestor can make later overrides harder.",
      "Mixins emit declarations wherever they are included. Extending a placeholder joins selectors that share styles. Inspect the output of each technique to see which rules are repeated or grouped.",
    ],
    examples: [
      { title: "Nest a descendant", code: ".ticket {\n  h2 { margin-block: 0 .5rem; }\n}", result: "The output selector is .ticket h2 with a descendant combinator." },
      { title: "Attach an interactive state", code: ".ticket a {\n  &:focus-visible { outline: 3px solid teal; }\n}", result: "The parent selector attaches focus-visible directly to the anchor." },
      { title: "Pass a mixin argument", code: "@mixin edge($tone) {\n  border-inline-start: 4px solid $tone;\n}\n.ticket { @include edge(teal); }", result: "The .ticket rule contains a teal 4px start border." },
      { title: "Provide a default argument", code: "@mixin pad($space: 1rem) { padding: $space; }\n.ticket { @include pad; }\n.ticket.compact { @include pad(.5rem); }", result: "The base ticket gets 1rem padding and a compact ticket gets .5rem." },
      { title: "Generate named variants", code: "@each $name, $tone in (open: teal, full: maroon) {\n  .slot-#{$name} { color: $tone; }\n}", result: "The compiler emits .slot-open and .slot-full with their corresponding colours." },
      { title: "Extend a placeholder", code: "%paper { background: ivory; }\n.ticket { @extend %paper; }\n.receipt { @extend %paper; }", result: "Both class selectors share the background rule; the placeholder itself is absent from the output." },
    ],
    quizzes: [
      { question: "Which selector is generated?", options: [".ticketh2",".ticket h2","h2.ticket"], answer: 1, explanation: "The output selector is .ticket h2 with a descendant combinator." },
      { question: "What does & represent here?", options: ["The document root","The next sibling","The enclosing selector"], answer: 2, explanation: "The parent selector attaches focus-visible directly to the anchor." },
      { question: "What inserts the mixin declarations?", options: ["@include","@use alone","@extend .edge"], answer: 0, explanation: "The .ticket rule contains a teal 4px start border." },
      { question: "Which value does the argument-free include use?", options: [".5rem","1rem","0"], answer: 1, explanation: "The base ticket gets 1rem padding and a compact ticket gets .5rem." },
      { question: "How many class rules does this loop emit?", options: ["One","Four","Two"], answer: 2, explanation: "The compiler emits .slot-open and .slot-full with their corresponding colours." },
      { question: "Which selector is omitted from the final CSS?", options: ["%paper",".ticket",".receipt"], answer: 0, explanation: "Both class selectors share the background rule; the placeholder itself is absent from the output." },
    ],
  },
  {
    id: "sass-modules", title: "Modules, functions and configurable libraries", level: "Advanced",
    summary: "Build a small Sass module and inspect its public API.",
    content: [
      "Use Dart Sass with its module system. For multi-file examples, create each file named in a comment in the same folder. Compile only the entry file with sass studio.scss studio.css. Start a fresh folder or replace the matching files between examples.",
      "A partial has an underscore in its filename. @use loads its public members under a namespace; @forward makes selected members available through another module. Keep all @use statements before style rules.",
    ],
    examples: [
      { title: "Import a namespaced partial", code: "// _palette.scss\n$ink: #623524;\n\n// studio.scss\n@use 'palette';\n.ticket { color: palette.$ink; }", result: "The generated .ticket colour is #623524; the namespace comes from the module filename." },
      { title: "Configure a module on load", code: "// _theme.scss\n$pad: 1rem !default;\n.ticket { padding: $pad; }\n\n// studio.scss\n@use 'theme' with ($pad: 2rem);", result: "The module emits a ticket with 2rem padding because its variable allows configuration." },
      { title: "Alias a long module name", code: "// _studio-palette.scss\n$paper: ivory;\n\n// studio.scss\n@use 'studio-palette' as p;\n.ticket { background: p.$paper; }", result: "The alias shortens the namespace to p while preserving module isolation." },
      { title: "Divide with a built-in module", code: "@use 'sass:math';\n.ticket { width: math.percentage(math.div(3, 8)); }", result: "Three eighths is compiled as 37.5%." },
      { title: "Return a calculated value", code: "@function step-space($steps) {\n  @return $steps * .25rem;\n}\n.ticket { padding: step-space(6); }", result: "The function returns 1.5rem for six spacing steps." },
      { title: "Expose a selected member", code: "// _palette.scss\n$ink: brown;\n$draft: pink;\n\n// _kit.scss\n@forward 'palette' show $ink;\n\n// studio.scss\n@use 'kit';\n.ticket { color: kit.$ink; }", result: "Kit forwards ink. The draft variable is not part of kit's public surface." },
    ],
    quizzes: [
      { question: "How is the imported variable accessed?", options: ["palette.$ink","$palette.ink","var(--palette)"], answer: 0, explanation: "The generated .ticket colour is #623524; the namespace comes from the module filename." },
      { question: "Which flag permits configuration with @use ... with?", options: ["!important","!default","!optional"], answer: 1, explanation: "The module emits a ticket with 2rem padding because its variable allows configuration." },
      { question: "Which expression reads the aliased value?", options: ["studio.$p","$paper without a namespace","p.$paper"], answer: 2, explanation: "The alias shortens the namespace to p while preserving module isolation." },
      { question: "Which modern Sass call performs arithmetic division?", options: ["math.div(3, 8)","divide(3:8)","@divide 3 8"], answer: 0, explanation: "Three eighths is compiled as 37.5%." },
      { question: "Which directive gives a Sass function its result?", options: ["@include","@return","@content"], answer: 1, explanation: "The function returns 1.5rem for six spacing steps." },
      { question: "Which value can consumers access through kit?", options: ["kit.$draft","Both palette variables","kit.$ink"], answer: 2, explanation: "Kit forwards ink. The draft variable is not part of kit's public surface." },
    ],
  },
]);
