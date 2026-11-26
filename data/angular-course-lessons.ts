import type { LearningLesson } from "./learning-resources";

type Row = [string, string, string, string];
const rows: Row[] = [
  ["home","Angular Home","Angular Tutorial","Angular is a TypeScript framework for building structured web applications from components, templates, services, and routes."],
  ["intro","Angular Introduction","Angular Tutorial","An Angular app combines components, dependency injection, routing, and reactive state to build interactive interfaces."],
  ["get-started","Get Started with Angular","Angular Tutorial","Angular CLI creates and serves projects, while standalone components provide a straightforward starting structure."],
  ["first-app","Create a First Angular App","Angular Tutorial","A first app can render one standalone component and display state through its template."],
  ["templates","Angular Templates","Angular Tutorial","Templates describe component views with HTML, interpolation, bindings, directives, and built-in control flow."],
  ["components","Angular Components","Angular Tutorial","Components define a view and its behavior using a TypeScript class, template, and metadata."],
  ["data-binding","Data Binding","Angular Tutorial","Bindings connect component state and user actions to the rendered DOM without manual updates."],
  ["directives","Angular Directives","Angular Tutorial","Directives add behavior or structure to elements; standalone directives can be imported where they are used."],
  ["events","Angular Events","Angular Tutorial","Event bindings run component methods in response to user actions such as clicks and form input."],
  ["conditional","Conditional Rendering","Angular Tutorial","Built-in @if and @else blocks include or omit template content based on an expression."],
  ["lists","Rendering Lists","Angular Tutorial","The @for block renders repeated content and a track expression helps Angular associate items with DOM nodes."],
  ["forms","Angular Forms","Angular Tutorial","Angular forms collect and validate user input through template-driven or reactive approaches."],
  ["router","Angular Router","Angular Tutorial","The router maps URL paths to views and provides navigation links and route parameters."],
  ["services-di","Services and Dependency Injection","Angular Tutorial","Services hold reusable behavior or data, and dependency injection supplies them to components that need them."],
  ["http-client","Angular HTTP Client","Angular Tutorial","HttpClient sends typed HTTP requests and returns RxJS observables for response handling."],
  ["pipes","Angular Pipes","Angular Tutorial","Pipes format values for display in templates without changing the underlying data."],
  ["lifecycle","Lifecycle Hooks","Angular Tutorial","Lifecycle hooks run at defined points as Angular creates, checks, and destroys component instances."],
  ["styling","Angular Styling","Angular Tutorial","Component styles scope presentation to a component by default, with global styles available for shared design rules."],
  ["bootstrap-app","Application Bootstrap","Advanced Angular","Standalone Angular applications start with bootstrapApplication and root component providers."],
  ["control-flow","Built-in Control Flow","Advanced Angular","Built-in @if, @for, and @switch blocks express conditional, repeated, and multi-branch template content."],
  ["signals","Signals","Advanced Angular","Signals hold reactive values and let Angular track where state is read and when dependent views need updates."],
  ["change-detection","Change Detection","Advanced Angular","Change detection synchronizes component state with the rendered view; signals and OnPush can make update boundaries clearer."],
  ["dynamic-components","Dynamic Components","Advanced Angular","Dynamic component APIs create component instances at runtime when the component type depends on application state."],
  ["advanced-di","Advanced Dependency Injection","Advanced Angular","Injection tokens, provider scopes, and hierarchical injectors configure dependencies for different parts of an app."],
  ["advanced-router","Advanced Routing","Advanced Angular","Advanced routing supports lazy-loaded routes, guards, resolvers, nested outlets, and route-level providers."],
  ["http-interceptors","HTTP Interceptors","Advanced Angular","Functional interceptors apply shared request or response behavior such as logging, deadlines, or auth headers."],
  ["reactive-forms","Advanced Reactive Forms","Advanced Angular","Reactive forms model controls and validation in TypeScript and support dynamic, nested form structures."],
  ["state-management","State Management","Advanced Angular","State management organizes shared application data, derived values, and updates across components."],
  ["animations","Angular Animations","Advanced Angular","Modern Angular supports CSS-driven enter and leave animations for elements added to or removed from a view."],
  ["testing","Angular Testing","Advanced Angular","Angular tests verify components, services, templates, routing, and HTTP behavior with controlled dependencies."],
  ["security","Angular Security","Advanced Angular","Angular helps prevent common DOM injection issues, but applications must still validate data and protect server operations."],
  ["ssr-hydration","SSR and Hydration","Advanced Angular","Server-side rendering sends HTML from a server, and hydration reuses that markup to make the page interactive in the browser."],
  ["compiler","Angular CLI and Compiler","Angular Exercises","Angular CLI builds, serves, tests, and checks applications using the framework's compiler and project configuration."],
  ["exercises","Angular Exercises","Angular Exercises","Exercises can combine components, data binding, lists, forms, routes, and services in a small project."],
  ["quiz","Angular Quiz","Angular Exercises","A quiz can check component architecture, template syntax, dependency injection, routing, and reactive state."],
  ["server","Angular Development Server","Angular Exercises","The Angular CLI development server serves a local project with rebuilds during development; production builds need deployment hosting."],
];

const examples: Record<string, string> = {
  "first-app":`import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-root",\n  standalone: true,\n  template: \`<h1>{{ title }}</h1>\`,\n})\nexport class AppComponent {\n  title = "My first Angular app";\n}`,
  "data-binding":`<label for="nickname">Nickname</label>\n<input id="nickname" [(ngModel)]="nickname">\n<p>Hello, {{ nickname }}!</p>\n<!-- Import FormsModule in this standalone component. -->`,
  conditional:`@if (isSignedIn) {\n  <p>Welcome back.</p>\n} @else {\n  <a routerLink="/sign-in">Sign in</a>\n}`,
  lists:`@for (task of tasks; track task.id) {\n  <li>{{ task.label }}</li>\n} @empty {\n  <li>No tasks yet.</li>\n}`,
  signals:`import { computed, signal } from "@angular/core";\n\nconst count = signal(0);\nconst doubled = computed(() => count() * 2);\ncount.update(value => value + 1);\nconsole.log(doubled());`,
  "http-client":`import { HttpClient } from "@angular/common/http";\nimport { inject } from "@angular/core";\n\nconst http = inject(HttpClient);\nconst books$ = http.get<Book[]>("/api/books");`,
  "http-interceptors":`import { HttpInterceptorFn } from "@angular/common/http";\n\nexport const timingInterceptor: HttpInterceptorFn = (request, next) => {\n  const started = performance.now();\n  return next(request).pipe(\n    finalize(() => console.log("Request ms", performance.now() - started)),\n  );\n};`,
  router:`import { Routes } from "@angular/router";\n\nexport const routes: Routes = [\n  { path: "books", loadComponent: () => import("./books.page").then(m => m.BooksPage) },\n  { path: "", redirectTo: "books", pathMatch: "full" },\n];`,
  "reactive-forms":`import { FormControl, FormGroup, Validators } from "@angular/forms";\n\nconst profileForm = new FormGroup({\n  email: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.email] }),\n});\nconsole.log(profileForm.valid);`,
  "ssr-hydration":`// Server rendering returns HTML for the initial route.\n// Hydration starts the browser app and reuses the server-rendered DOM.\n// Avoid reading window or document during server-only execution.`,
  "bootstrap-app":`import { bootstrapApplication } from "@angular/platform-browser";\nimport { AppComponent } from "./app/app.component";\n\nbootstrapApplication(AppComponent).catch(error => console.error(error));`,
  events:`<button type="button" (click)="save()">Save</button>\n\n// In the component class:\nsave() { this.status = "Saved"; }`,
  "advanced-router":`export const routes: Routes = [\n  {\n    path: "admin",\n    canActivate: [authGuard],\n    loadChildren: () => import("./admin/admin.routes").then(m => m.ADMIN_ROUTES),\n  },\n];`,
  "services-di":`import { Injectable, inject } from "@angular/core";\n\n@Injectable({ providedIn: "root" })\nexport class BookService {\n  private http = inject(HttpClient);\n  list() { return this.http.get<Book[]>("/api/books"); }\n}`,
  testing:`import { TestBed } from "@angular/core/testing";\nimport { provideHttpClient } from "@angular/common/http";\n\nbeforeEach(() => TestBed.configureTestingModule({\n  providers: [provideHttpClient()],\n}));`,
  "security":`// Render untrusted strings with interpolation, not bypassSecurityTrustHtml.\n@Component({ template: "<p>{{ userProvidedText }}</p>" })\nexport class NoteComponent { userProvidedText = "Plain text"; }`,
  animations:`/* CSS enter/leave example */\n.card { transition: opacity 160ms ease, transform 160ms ease; }\n.card.ng-enter { opacity: 0; transform: translateY(4px); }\n@media (prefers-reduced-motion: reduce) {\n  .card { transition: none; }\n}`, 
};

function codeFor(id: string): string {
  if (examples[id]) return examples[id];
  if (["forms", "reactive-forms"].includes(id)) return `<form (ngSubmit)="submit()">\n  <label for="email">Email</label>\n  <input id="email" type="email" [formControl]="email">\n  @if (email.invalid && email.touched) { <p>Enter a valid email.</p> }\n  <button type="submit" [disabled]="email.invalid">Join</button>\n</form>`;
  if (id.includes("http")) return `http.get<Item[]>("/api/items").subscribe({\n  next: items => this.items.set(items),\n  error: () => this.error.set("Could not load items."),\n});`;
  if (id.includes("template") || id === "pipes") return `<h2>{{ title }}</h2>\n<p>{{ updatedAt | date:"mediumDate" }}</p>\n<a [routerLink]="['/items', item.id]">Open item</a>`;
  if (id.includes("test")) return `it("shows the page title", () => {\n  const fixture = TestBed.createComponent(HomeComponent);\n  fixture.detectChanges();\n  expect(fixture.nativeElement.textContent).toContain("Home");\n});`;
  return `// ${id.replaceAll("-", " ")}\n@Component({\n  selector: "app-example",\n  standalone: true,\n  template: \`<p>{{ message }}</p>\`,\n})\nexport class ExampleComponent {\n  message = "Angular example";\n}`;
}

function makeLesson([id, title, section, summary]: Row): LearningLesson {
  const code = codeFor(id);
  const url = id.includes("ssr") ? "https://angular.dev/guide/ssr" : id.includes("interceptor") || id === "http-client" ? "https://angular.dev/guide/http" : id === "signals" ? "https://angular.dev/guide/signals" : id.includes("control-flow") || id === "conditional" || id === "lists" ? "https://angular.dev/guide/templates/control-flow" : "https://angular.dev/overview";
  return {
    id: `course-${id}`, title, section, level: "Beginner", summary, contentLanguage: "en",
    content: [summary,
      "Current Angular documentation emphasizes standalone components, explicit imports, and declarative templates. Use the CLI to generate project structure and keep examples aligned with the Angular version in the app.",
      id.includes("ssr") ? "Server-rendered code must not assume browser globals such as window or document are available during rendering. Hydration relies on compatible server and browser markup, so avoid changing the DOM outside Angular before hydration." : id.includes("security") ? "Keep untrusted values in normal template bindings so Angular can apply its context-aware protections. Do not bypass sanitization for arbitrary content; validate and authorize sensitive operations on the server." : "Separate reusable behavior into services, keep templates focused on presentation, and handle loading and error states explicitly. Test keyboard use and accessible labels as part of the feature.",
      "Example walkthrough: adapt names and imports to the component that owns this behavior. Run the Angular compiler and add a focused test for both the expected result and an important edge case.",
    ],
    example: code,
    examples: [{ title: "Angular example", code, result: "The snippet illustrates a pattern; exact imports and setup depend on the Angular version and project configuration." }],
    reading: { title: "Official Angular documentation", url },
    quiz: { question: `What is a good starting point for ${title.toLowerCase()}?`, options: ["Use Angular's documented APIs and keep state and template behavior clear", "Manipulate rendered DOM nodes directly for every update", "Skip error states because Angular handles every application error"], answer: 0, explanation: "Angular patterns are clearest when components, templates, state, and errors have explicit responsibilities." },
  };
}

export const angularCourseLessons: LearningLesson[] = rows.map(makeLesson);
