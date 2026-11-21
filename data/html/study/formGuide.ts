import { chapter } from "../../resource-chapter";

export const formGuide = chapter("HTML Forms", [
  {
    id: "study-formguide-html-forms",
    title: "HTML Forms",
    level: "Beginner",
    summary: "Send input values as named fields in a request.",
    content: [
      "A form groups controls for submission. The label asks the question, for and id associate it with a control, and name identifies that control's value in the submitted data.",
      "Enter a city and submit the GET form. Inspect the URL, remove the input's name and repeat the test to see why a visible value may be missing from the request.",
    ],
    reading: { title: "W3Schools · HTML Forms", url: "https://www.w3schools.com/html/html_forms.asp" },
    examples: [{
      title: "Search by city",
      code: "<form method=\"get\">\n  <label for=\"city\">City</label>\n  <input id=\"city\" name=\"city\">\n  <button>Search</button>\n</form>",
      result: "Entering Jaipur produces city=Jaipur in the current page's query. Selecting the label focuses the input.",
    }],
    quizzes: [
      { question: "Which attribute supplies the submitted key?", options: ["name", "id", "for"], answer: 0, explanation: "A successful control contributes its name and value." },
      { question: "What must the label's for value match?", options: ["The button text", "The input id", "The form method"], answer: 1, explanation: "Matching for and id establishes the explicit association." },
      { question: "Where does a GET form send its values?", options: ["In the favicon", "Only in the label", "In the URL query"], answer: 2, explanation: "GET form submission serializes fields as query parameters." },
    ],
  },
  {
    id: "study-formguide-html-form-attributes",
    title: "HTML Form Attributes",
    level: "Beginner",
    summary: "Specify where a form sends data and how it encodes the submission.",
    content: [
      "The action identifies the processing endpoint. GET suits a retrievable search query. POST carries data in the request body. Use HTTPS to protect data in transit.",
      "For a file upload, provide a named file input, use POST and select multipart/form-data. Inspect the method, destination and content type in the Network panel. A server handler must process the upload.",
    ],
    reading: { title: "W3Schools · HTML Form Attributes", url: "https://www.w3schools.com/html/html_forms_attributes.asp" },
    examples: [{
      title: "Upload a workshop poster",
      code: "<form action=\"/posters\" method=\"post\" enctype=\"multipart/form-data\">\n  <label>Poster <input type=\"file\" name=\"poster\" required></label>\n  <button>Upload poster</button>\n</form>",
      result: "After a file is selected, the browser sends a multipart POST to /posters. The file is in the part named poster.",
    }],
    quizzes: [
      { question: "Where is the processing URL specified?", options: ["enctype", "action", "name"], answer: 1, explanation: "The action sets the destination for submission." },
      { question: "Which encoding supports this file upload?", options: ["text/css", "image/png", "multipart/form-data"], answer: 2, explanation: "Multipart encoding carries files and ordinary fields as separate parts." },
      { question: "Where is the POST payload sent?", options: ["In the request body", "In the URL fragment", "In the page title"], answer: 0, explanation: "The request body carries the submitted data." },
    ],
  },
  {
    id: "study-formguide-html-form-elements",
    title: "HTML Form Elements",
    level: "Beginner",
    summary: "Match each question to a suitable form control.",
    content: [
      "Use an input for a short response, a textarea for multiple lines and a select for a fixed set of choices. A fieldset groups related controls and its legend describes the group.",
      "Give each control a label and name. Choose Evening and inspect the submitted slot value. An option's visible label can differ from the value submitted.",
    ],
    reading: { title: "W3Schools · HTML Form Elements", url: "https://www.w3schools.com/html/html_form_elements.asp" },
    examples: [{
      title: "Collect class feedback",
      code: "<form><fieldset><legend>Class feedback</legend>\n  <label>Session <select name=\"slot\"><option value=\"am\">Morning</option><option value=\"pm\">Evening</option></select></label>\n  <label>Comment <textarea name=\"note\" rows=\"3\"></textarea></label>\n</fieldset><button>Bhejo</button></form>",
      result: "Selecting Evening submits slot=pm. The comment field accepts several lines under the Class feedback legend.",
    }],
    quizzes: [
      { question: "Which element accepts a multiline response?", options: ["A text input", "option", "textarea"], answer: 2, explanation: "A textarea supports multiline editing." },
      { question: "Which value is submitted for Evening?", options: ["pm", "Evening", "slot"], answer: 0, explanation: "The selected option has the explicit value pm." },
      { question: "Which element captions the field group?", options: ["The label's for attribute", "legend", "rows"], answer: 1, explanation: "A legend names the associated fieldset." },
    ],
  },
  {
    id: "study-formguide-html-input-types",
    title: "HTML Input Types",
    level: "Beginner",
    summary: "Select an input type that matches the data and the interaction.",
    content: [
      "An email field checks basic address syntax. A radio group allows one choice, while a checkbox can be selected independently. The type can also influence the keyboard on a mobile device.",
      "Give the two session radios the same name and distinct values. Choose Evening, toggle the notes checkbox and attempt to submit an invalid email address.",
    ],
    reading: { title: "W3Schools · HTML Input Types", url: "https://www.w3schools.com/html/html_form_input_types.asp" },
    examples: [{
      title: "Workshop registration controls",
      code: "<form>\n  <label>Email <input type=\"email\" name=\"email\" required></label>\n  <label><input type=\"radio\" name=\"slot\" value=\"am\" checked> Morning</label>\n  <label><input type=\"radio\" name=\"slot\" value=\"pm\"> Evening</label>\n  <label><input type=\"checkbox\" name=\"notes\" value=\"yes\"> Send me notes</label>\n  <button>Register</button>\n</form>",
      result: "Selecting Evening clears Morning. The notes preference remains independent. Invalid email syntax prevents ordinary submission.",
    }],
    quizzes: [
      { question: "What groups the session radio buttons?", options: ["The same name within the same form", "Identical visible labels", "Identical values"], answer: 0, explanation: "Radio buttons in the group share a name." },
      { question: "Which control suits an independent preference?", options: ["Another session radio", "A checkbox", "A date input"], answer: 1, explanation: "A checkbox can be toggled independently." },
      { question: "What does the browser's email validation check?", options: ["Mailbox ownership", "Available inbox storage", "Basic address syntax"], answer: 2, explanation: "A syntactically valid address does not establish ownership." },
    ],
  },
  {
    id: "study-formguide-html-input-attributes",
    title: "HTML Input Attributes",
    level: "Beginner",
    summary: "Declare field limits, initial values and editing permissions.",
    content: [
      "Required fields must have a value. For numeric inputs, min, max and step constrain the permitted numbers. Readonly controls can still contribute values, while disabled controls are left out of submission.",
      "Try a quantity of 5, then 3. Inspect the submission rather than relying on typing restrictions. The server must enforce its own validation rules for incoming values.",
    ],
    reading: { title: "W3Schools · HTML Input Attributes", url: "https://www.w3schools.com/html/html_form_attributes.asp" },
    examples: [{
      title: "Limit ticket quantities",
      code: "<form>\n  <label>Tickets <input type=\"number\" name=\"qty\" min=\"1\" max=\"4\" step=\"1\" required></label>\n  <label>Batch <input name=\"batch\" value=\"A\" readonly></label>\n  <button>Check</button>\n</form>",
      result: "An empty quantity or 5 prevents normal submission. A quantity of 3 is valid and the readonly batch=A is included.",
    }],
    quizzes: [
      { question: "Which constraint rejects 5?", options: ["min=\"1\"", "max=\"4\"", "readonly"], answer: 1, explanation: "The maximum sets the upper limit." },
      { question: "Which rule rejects an empty quantity?", options: ["step", "max", "required"], answer: 2, explanation: "Required controls must contain a value." },
      { question: "Which type of control is normally excluded from form data?", options: ["A disabled control", "A readonly control", "A named editable field"], answer: 0, explanation: "Disabled controls do not contribute submitted values." },
    ],
  },
  {
    id: "study-formguide-input-form-attributes",
    title: "Input Form Attributes",
    level: "Intermediate",
    summary: "Associate an external button with a form and override its destination.",
    content: [
      "A toolbar button can submit a form elsewhere in the document. Its form attribute identifies the owning form by id. A submit button can override selected settings for its own submission.",
      "Keep the normal action for Publish and assign a draft endpoint to the external button. Compare the two requests in the Network panel. Both routes need server handlers.",
    ],
    reading: { title: "W3Schools · Input Form Attributes", url: "https://www.w3schools.com/html/html_form_attributes_form.asp" },
    examples: [{
      title: "Publish or save a draft",
      code: "<form id=\"story\" action=\"/publish\" method=\"post\">\n  <label>Name <input name=\"title\"></label>\n  <button>Publish</button>\n</form>\n<button type=\"submit\" form=\"story\" formaction=\"/draft\">Save draft</button>",
      result: "Publish sends a POST to /publish. Save draft sends the same form data to /draft and retains POST because only the action was overridden.",
    }],
    quizzes: [
      { question: "What must the external button's form value match?", options: ["The input name", "The button label", "The form id"], answer: 2, explanation: "The form attribute associates the control with the form's id." },
      { question: "Which attribute chooses the draft endpoint?", options: ["formaction", "An action input", "A target id"], answer: 0, explanation: "The submitter's formaction overrides the form's action." },
      { question: "Which method does Save draft use?", options: ["GET", "POST", "PATCH"], answer: 1, explanation: "The form specifies POST and the button has no formmethod override." },
    ],
  },
  {
    id: "study-formguide-html-project-vii",
    title: "HTML Project VII",
    level: "Intermediate",
    summary: "Build and test a workshop registration form.",
    content: [
      "Registration requires a name, email address and session. A visible label explains each field, a stable name identifies its submitted value and fixed options keep the session codes consistent.",
      "Test an empty submission, an invalid address and a valid sample entry. This GET exercise lets you inspect dummy data in the URL. A real booking service needs a processing endpoint and storage.",
    ],
    reading: { title: "W3Schools · HTML Project VII", url: "https://www.w3schools.com/html/html_project_form.php" },
    examples: [{
      title: "A practice registration form",
      code: "<form method=\"get\">\n  <label>Name <input name=\"student\" required></label>\n  <label>Email <input name=\"email\" type=\"email\" required></label>\n  <label>Session <select name=\"slot\"><option value=\"am\">Morning</option><option value=\"pm\">Evening</option></select></label>\n  <button>Check details</button>\n</form>",
      result: "A valid sample entry includes student, email and slot=pm when Evening is selected. The static example displays the submission data through the URL.",
    }],
    quizzes: [
      { question: "Why does an empty name prevent submission?", options: ["The field is required", "Its name is student", "The button has a long label"], answer: 0, explanation: "The required attribute enforces a value before normal submission." },
      { question: "Why use select for the session?", options: ["It verifies an email address", "It provides defined choices", "It stores the record"], answer: 1, explanation: "The options use consistent session values." },
      { question: "What does a real service need to retain bookings?", options: ["A different button label", "A new CSS colour", "A server handler and storage"], answer: 2, explanation: "The form sends a request that the service must validate and save." },
    ],
  },
]);
