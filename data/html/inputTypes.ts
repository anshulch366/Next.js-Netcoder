import { chapter } from "../resource-chapter";

export const inputTypes = chapter("HTML Forms", [
  {
    id: "special-inputs", title: "Specialised inputs and live output", level: "Intermediate",
    summary: "Select suitable controls for contact details, colours and numeric readings.",
    content: ["Controls have distinct value formats and validation rules even when they look similar. For example, a telephone field accepts various formats, while a URL input checks whether a nonempty value is a valid absolute URL.",
      "Put these examples inside a form with a submit button to inspect validation. For the slider, paste the script immediately after its controls to see the output update as you drag."],
    examples: [
      { title: "Request a telephone number", code: "<label>Contact number <input type=\"tel\" name=\"phone\" autocomplete=\"tel\"></label>", result: "A phone-friendly keyboard may appear. Tel does not enforce one country's number format." },
      { title: "Request a portfolio URL", code: "<label>Portfolio <input type=\"url\" name=\"portfolio\" placeholder=\"https://example.org\"></label>", result: "A nonempty entry such as hello fails URL validation while https://example.org passes." },
      { title: "Mask a password", code: "<label>Account password <input type=\"password\" name=\"pass\" autocomplete=\"current-password\"></label>", result: "The browser masks the characters on screen. A real login also needs HTTPS and a server-side handler." },
      { title: "Choose an ink colour", code: "<label>Ink <input type=\"color\" name=\"ink\" value=\"#235d70\"></label>", result: "The colour picker starts with the specified blue-green swatch." },
      { title: "Select a time", code: "<label>Arrival <input type=\"time\" name=\"arrival\" min=\"09:00\" max=\"17:00\"></label>", result: "A time such as 14:30 is valid within the permitted daytime interval." },
      { title: "Display a slider's value", code: "<label>Pressure <input id=\"pressure\" type=\"range\" min=\"0\" max=\"10\" value=\"4\"></label>\n<output id=\"reading\" for=\"pressure\">4</output>\n<script>\n  const slider = document.querySelector(\"#pressure\");\n  slider.oninput = () => { document.querySelector(\"#reading\").value = slider.value; };\n</script>", result: "The input event updates the output while the thumb is moving." },
    ],
    quizzes: [
      { question: "Which check is provided automatically by type=tel?", options: ["Exactly ten digits","A working mobile connection","No universal phone-format check"], answer: 2, explanation: "A phone-friendly keyboard may appear. Tel does not enforce one country's number format." },
      { question: "Which entry is a valid absolute URL?", options: ["https://example.org/gallery","gallery/index.html","a studio page"], answer: 0, explanation: "A nonempty entry such as hello fails URL validation while https://example.org passes." },
      { question: "What does type=password itself provide?", options: ["Encryption of a plain HTTP connection","Visual masking while typing","Proof of account ownership"], answer: 1, explanation: "The browser masks the characters on screen. A real login also needs HTTPS and a server-side handler." },
      { question: "Which value gives this picker its initial swatch?", options: ["ink","color","#235d70"], answer: 2, explanation: "The colour picker starts with the specified blue-green swatch." },
      { question: "Which time passes both limits?", options: ["14:30","08:45","18:00"], answer: 0, explanation: "A time such as 14:30 is valid within the permitted daytime interval." },
      { question: "Which event gives continuous updates during adjustment?", options: ["submit","input","focus alone"], answer: 1, explanation: "The input event updates the output while the thumb is moving." },
    ],
  },
]);
