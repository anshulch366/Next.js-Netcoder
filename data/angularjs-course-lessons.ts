import type { LearningLesson } from "./learning-resources";

type Row = [string, string, string, string];
const rows: Row[] = [
  ["home","AngularJS Home","Tutorial","AngularJS is the original 1.x JavaScript framework, distinct from modern Angular, and is mainly relevant when maintaining older applications."],
  ["intro","AngularJS Introduction","Tutorial","AngularJS organizes browser applications around modules, scopes, controllers, directives, dependency injection, and templates."],
  ["expressions","AngularJS Expressions","Tutorial","Expressions evaluate values in a template scope and display results through interpolation or directive bindings."],
  ["modules","AngularJS Modules","Tutorial","An AngularJS module registers controllers, services, directives, filters, and configuration for an application."],
  ["directives","AngularJS Directives","Tutorial","Directives extend HTML with behavior or structure, using built-in forms such as ng-if and ng-repeat or custom definitions."],
  ["model","AngularJS Model","Tutorial","ng-model connects a form control to a model expression and participates in form state and validation."],
  ["data-binding","AngularJS Data Binding","Tutorial","Data binding keeps template output connected to scope values through interpolation and directive bindings."],
  ["controllers","AngularJS Controllers","Tutorial","Controllers expose view state and actions, though reusable business logic generally belongs in services."],
  ["scopes","AngularJS Scopes","Tutorial","Scopes provide the context for expressions and connect controller data to templates."],
  ["filters","AngularJS Filters","Tutorial","Filters format values for display and can be composed in template expressions."],
  ["services","AngularJS Services","Tutorial","Services hold reusable application logic and are provided through AngularJS dependency injection."],
  ["http","AngularJS HTTP","Tutorial","The $http service sends requests and returns promises that resolve or reject with a response."],
  ["tables","AngularJS Tables","Tutorial","ng-repeat can render table rows from a collection, with stable track-by keys helping preserve row identity."],
  ["select","AngularJS Select Controls","Tutorial","ng-options builds select choices from a collection and can bind selected values to a model."],
  ["sql","AngularJS and SQL","Tutorial","A browser app should call a server API for database operations; SQL credentials and database access belong on the server."],
  ["dom","AngularJS and the DOM","Tutorial","AngularJS directives manage view updates; avoid direct DOM manipulation in controllers and prefer directives for DOM-specific behavior."],
  ["events","AngularJS Events","Tutorial","AngularJS event directives connect user actions to expressions while keeping application state in the model."],
  ["forms","AngularJS Forms","Tutorial","AngularJS forms track control values and validity and expose aggregate form state to the template."],
  ["validation","AngularJS Validation","Tutorial","Built-in input constraints and AngularJS form state expose whether controls are valid, invalid, pristine, or touched."],
  ["api","AngularJS API","Tutorial","The AngularJS API reference documents modules, services, directives, filters, and testing helpers."],
  ["css","AngularJS with CSS","Tutorial","CSS frameworks can style AngularJS markup, while semantic HTML and accessible states remain the application's responsibility."],
  ["includes","AngularJS Includes","Tutorial","ng-include loads a template fragment, but reusable directives or components may provide clearer ownership and bindings."],
  ["animations","AngularJS Animations","Tutorial","The ngAnimate module coordinates CSS classes or JavaScript hooks with selected AngularJS structural changes."],
  ["routing","AngularJS Routing","Tutorial","The ngRoute module maps client-side URL paths to templates and controllers in a single-page app."],
  ["application","AngularJS Application","Tutorial","A typical application configures a module, declares its root with ng-app, and organizes views and reusable services."],
  ["certificate","AngularJS Certificate Preparation","AngularJS","Review AngularJS 1.x concepts and practice reading legacy code; distinguish these APIs from modern Angular."],
  ["examples","AngularJS Examples","Examples","Small examples reveal how a module, controller, model, and directive work together."],
  ["syllabus","AngularJS Syllabus","Examples","A study path covers modules, expressions, directives, data binding, forms, services, HTTP, and routing."],
  ["study-plan","AngularJS Study Plan","Examples","A study plan for AngularJS should focus on reading and maintaining existing applications and understanding upgrade paths."],
  ["reference","AngularJS Directive Reference","Reference","The directive reference lists built-in directives, their inputs, and their effects on the template."],
];

const code: Record<string, string> = {
  modules:`angular.module("readingApp", [])\n  .controller("BookController", function () {\n    this.title = "River Maps";\n  });`,
  expressions:`<div ng-app="readingApp" ng-init="first='Ari'; count=3">\n  <p>{{ first }} has {{ count }} notes.</p>\n</div>`,
  "data-binding":`<div ng-app="readingApp" ng-init="name='Mina'">\n  <label>Name <input ng-model="name"></label>\n  <p>Hello, {{ name }}!</p>\n</div>`,
  "controllers":`angular.module("readingApp", [])\n  .controller("BookController", function () {\n    this.books = ["River Maps", "Coastal Atlas"];\n  });\n\n// Template: <li ng-repeat="book in $ctrl.books">{{ book }}</li>`,
  "scopes":`angular.module("readingApp", [])\n  .controller("ProfileController", function () {\n    this.displayName = "Kai";\n  });\n\n// Controller-as template: <p>{{ $ctrl.displayName }}</p>`,
  "filters":`<p>{{ price | currency }}</p>\n<li ng-repeat="book in books | orderBy:'title'">\n  {{ book.title }}\n</li>`,
  "services":`angular.module("readingApp", [])\n  .service("BookStore", function () {\n    this.all = function () { return [{ title: "River Maps" }]; };\n  });`,
  "http":`angular.module("readingApp", [])\n  .controller("BookController", function ($http) {\n    var vm = this;\n    vm.error = null;\n    $http.get("/api/books").then(function (response) {\n      vm.books = response.data;\n    }, function () { vm.error = "Could not load books."; });\n  });`,
  "tables":`<table ng-app="readingApp" ng-controller="BookController as vm">\n  <tr ng-repeat="book in vm.books track by book.id">\n    <td>{{ book.title }}</td><td>{{ book.year }}</td>\n  </tr>\n</table>`,
  "select":`<select ng-model="vm.selectedId"\n  ng-options="book.id as book.title for book in vm.books">\n  <option value="">Choose a book</option>\n</select>`,
  "sql":`// Browser -> authenticated API -> server-side database query\n$http.get("/api/books", { params: { q: searchText } });\n// Never put database credentials in browser code.`,
  "events":`<button ng-click="vm.save()" type="button">Save</button>\n<p role="status">{{ vm.status }}</p>`,
  "forms":`<form name="profileForm" ng-submit="vm.save()" novalidate>\n  <label>Email\n    <input name="email" type="email" ng-model="vm.email" required>\n  </label>\n  <button ng-disabled="profileForm.$invalid">Save</button>\n</form>`,
  "validation":`<form name="f">\n  <input name="email" type="email" ng-model="email" required>\n  <p ng-if="f.email.$touched && f.email.$invalid">Enter a valid email.</p>\n</form>`,
  "includes":`<main ng-app="readingApp">\n  <div ng-include="'partials/book-summary.html'"></div>\n</main>`,
  "routing":`angular.module("readingApp", ["ngRoute"])\n  .config(function ($routeProvider) {\n    $routeProvider.when("/books", {\n      templateUrl: "books.html", controller: "BookController", controllerAs: "vm"\n    }).otherwise({ redirectTo: "/books" });\n  });`,
  "application":`<html ng-app="readingApp">\n  <body>\n    <main ng-view></main>\n    <script src="angular.js"></script>\n    <script src="app.js"></script>\n  </body>\n</html>`,
  "animations":`/* ngAnimate can add enter/leave classes to structural changes. */\n.item.ng-enter { opacity: 0; transition: opacity 150ms ease; }\n.item.ng-enter-active { opacity: 1; }\n@media (prefers-reduced-motion: reduce) {\n  .item { transition: none; }\n}`,
};

function makeLesson([id, title, section, summary]: Row): LearningLesson {
  const example = code[id] ?? `<!-- ${title} -->\n<div ng-app="readingApp">\n  <p>{{ message }}</p>\n</div>\n\n// In app.js, define readingApp and its behavior.`;
  return {
    id: `course-${id}`, title, section, level: "Beginner", summary, contentLanguage: "en",
    content: [summary,
      "AngularJS uses directives such as ng-app, ng-controller, ng-model, and ng-repeat to connect HTML templates with JavaScript state. Its dependency injection system supplies services to controllers and other components.",
      "AngularJS support ended in January 2022. Treat these lessons as guidance for understanding or maintaining a legacy application; use actively supported Angular or another maintained framework for new projects. Keep legacy dependencies isolated and plan a migration when practical.",
      "Walkthrough: the snippet demonstrates a small AngularJS 1.x pattern. Confirm which AngularJS and companion module versions the existing app uses, because APIs and migration steps can differ across versions.",
    ],
    example,
    examples: [{ title: "Legacy AngularJS example", code: example, result: "The rendered result depends on loading a compatible AngularJS 1.x build and configuring the module shown." }],
    reading: { title: "AngularJS Developer Guide", url: id === "reference" ? "https://docs.angularjs.org/api" : "https://docs.angularjs.org/guide/introduction" },
    quiz: { question: `What is the right context for ${title.toLowerCase()}?`, options: ["Understanding or maintaining an existing AngularJS 1.x application", "Assuming AngularJS and modern Angular are the same framework", "Starting every new application with an unsupported framework"], answer: 0, explanation: "AngularJS is a legacy 1.x framework whose official support ended; distinguish it from modern Angular." },
  };
}

export const angularjsCourseLessons: LearningLesson[] = rows.map(makeLesson);
