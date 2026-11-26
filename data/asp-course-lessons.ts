import type { LearningLesson } from "./learning-resources";

type Row = [string, string, string, string];
const rows: Row[] = [
  ["home","ASP Overview","ASP Tutorials","ASP is a broad name for server-side web technologies, including Classic ASP, ASP.NET Web Pages with Razor, and modern ASP.NET Core."],
  ["webpages-intro","Web Pages Introduction","ASP Web Pages","ASP.NET Web Pages is a legacy page-focused framework that combines HTML with server-side Razor code."],
  ["webpages-razor","Razor in Web Pages","ASP Web Pages","Razor uses the @ character to transition between markup and server-side C# or Visual Basic expressions."],
  ["webpages-layout","Shared Layouts","ASP Web Pages","A shared layout lets multiple pages reuse the same site structure, navigation, and common markup."],
  ["webpages-folders","Project Folders","ASP Web Pages","A clear folder structure separates pages, shared layouts, scripts, styles, and application data."],
  ["webpages-global","Global Configuration","ASP Web Pages","Application-level files can configure behavior shared across pages, but their conventions depend on the Web Pages version."],
  ["webpages-forms","Web Forms","ASP Web Pages","A server page can read submitted form values, validate them, and render a response."],
  ["webpages-objects","Web Page Objects","ASP Web Pages","Web Pages exposes helper objects for request, response, server, and page context tasks."],
  ["webpages-files","File Operations","ASP Web Pages","Server-side file operations should use controlled paths and validate inputs before reading or writing files."],
  ["webpages-database","Database Access","ASP Web Pages","Server-side database code should use parameterized commands and keep connection details out of public source files."],
  ["webpages-helpers","Web Helpers","ASP Web Pages","Helpers package reusable tasks such as rendering, charting, or messaging for Web Pages applications."],
  ["webpages-webgrid","WebGrid","ASP Web Pages","WebGrid renders tabular data with sorting and paging helpers in ASP.NET Web Pages projects."],
  ["webpages-charts","Web Pages Charts","ASP Web Pages","Chart helpers can visualize server-side data; use current libraries and accessible labels for new work."],
  ["webpages-email","Email from a Web Page","ASP Web Pages","Email features send messages through a configured provider, with validation and abuse controls on the server."],
  ["webpages-security","Web Pages Security","ASP Web Pages","Security includes output encoding, input validation, authentication, authorization, CSRF defenses, and secret management."],
  ["webpages-publish","Publish a Web Pages Site","ASP Web Pages","Publishing copies a prepared app to a compatible host and requires environment-specific configuration and verification."],
  ["webpages-examples","Web Pages Examples","ASP Web Pages","Examples combine Razor markup, server-side code, and helper APIs in a page-oriented application."],
  ["webpages-classes","Classes in Web Pages","ASP Web Pages","C# classes hold reusable data and behavior used by pages and application services."],
  ["razor-intro","ASP.NET Razor Introduction","ASP.NET Razor","Razor is a server-side templating syntax used by several ASP.NET technologies; the host framework determines available APIs."],
  ["razor-syntax","Razor Syntax","ASP.NET Razor","The @ character introduces a Razor expression or code block inside a template."],
  ["razor-csharp-variables","Razor C# Variables","ASP.NET Razor","C# variables can hold values used to render dynamic content in a Razor page."],
  ["razor-csharp-loops","Razor C# Loops","ASP.NET Razor","C# loops can render repeated markup for a collection, though view logic should remain simple."],
  ["razor-csharp-logic","Razor C# Conditions","ASP.NET Razor","Conditional C# blocks choose which markup is rendered based on validated application state."],
  ["razor-vb-variables","Razor VB Variables","ASP.NET Razor","Legacy ASP.NET Web Pages supports Visual Basic code in Razor pages when the project is configured for VB."],
  ["razor-vb-loops","Razor VB Loops","ASP.NET Razor","Visual Basic loop syntax can repeat markup in Razor pages that use VB as their server language."],
  ["razor-vb-logic","Razor VB Conditions","ASP.NET Razor","Visual Basic conditions can select page output based on application state."],
  ["classic-intro","Classic ASP Introduction","Classic ASP","Classic ASP is a legacy IIS technology that runs VBScript or JScript in .asp pages on the server."],
  ["classic-syntax","Classic ASP Syntax","Classic ASP","Classic ASP uses server-side script delimiters to mix code with HTML output."],
  ["classic-variables","Classic ASP Variables","Classic ASP","VBScript variables hold values within a request and can use explicit declarations for clearer code."],
  ["classic-procedures","Classic ASP Procedures","Classic ASP","VBScript procedures and functions group reusable page logic and can accept arguments."],
  ["classic-conditionals","Classic ASP Conditions","Classic ASP","If/Else statements branch based on a condition in a Classic ASP script."],
  ["classic-loops","Classic ASP Loops","Classic ASP","Loop constructs repeat work over values or collections in a server-side script."],
  ["classic-forms","Classic ASP Forms","Classic ASP","Classic ASP reads submitted form values from Request and should validate them before use."],
  ["classic-cookies","Classic ASP Cookies","Classic ASP","Cookies store small client-side values; do not place passwords or secrets in them."],
  ["classic-session","Classic ASP Session","Classic ASP","Session state stores per-user server-side values across requests, subject to lifetime and storage limits."],
  ["classic-application","Classic ASP Application State","Classic ASP","Application state is shared across users in an application worker and requires care with concurrent updates."],
  ["classic-include","ASP Include Files","Classic ASP","Include directives insert shared server-side files into an ASP page during processing."],
  ["classic-global","Global.asa","Classic ASP","Global.asa can define application and session event procedures for a Classic ASP site."],
  ["classic-ajax","AJAX with Classic ASP","Classic ASP","A browser can request a Classic ASP endpoint asynchronously and update part of a page."],
  ["classic-email","Email in Classic ASP","Classic ASP","Classic ASP applications can send email through server components, but credentials and recipients need safeguards."],
  ["classic-examples","Classic ASP Examples","Classic ASP","Classic ASP examples help explain request processing and server-side rendering in existing IIS applications."],
  ["ado-intro","ADO Introduction","ADO","ADO is a legacy Microsoft data-access API used by older ASP applications to work with data sources."],
  ["ado-connect","ADO Connection","ADO","An ADO Connection opens a configured data source so commands can be executed by a server application."],
  ["ado-recordset","ADO Recordset","ADO","A Recordset represents rows returned by a database query in classic ADO code."],
  ["ado-display","Display ADO Data","ADO","A page can iterate over recordset rows and render selected fields with correct output encoding."],
  ["ado-query","ADO Queries","ADO","ADO commands execute SQL or provider-specific operations against a connected data source."],
  ["ado-sort","Sort ADO Results","ADO","A database ORDER BY clause is usually the best place to define predictable result ordering."],
  ["ado-add","Add Data with ADO","ADO","ADO can add records through parameterized commands to avoid treating input as SQL syntax."],
  ["ado-update","Update Data with ADO","ADO","ADO can update selected records using a prepared command and a narrow condition."],
  ["ado-delete","Delete Data with ADO","ADO","ADO can remove selected records, but destructive commands should be tightly scoped and reviewed."],
  ["ado-command","ADO Command","ADO Reference","The ADO Command object represents a command to execute against a provider or connection."],
  ["ado-connection","ADO Connection Reference","ADO Reference","The ADO Connection object manages an open connection and related provider settings."],
  ["ado-error","ADO Error","ADO Reference","ADO error collections expose provider and connection error details for diagnosis."],
  ["ado-field","ADO Field","ADO Reference","A Field object represents a column value in a recordset row."],
  ["ado-parameter","ADO Parameter","ADO Reference","ADO parameters provide typed values to commands separately from SQL text."],
  ["ado-property","ADO Property","ADO Reference","ADO properties describe provider-specific or object configuration settings."],
  ["ado-record","ADO Record","ADO Reference","An ADO Record represents a single record or hierarchical item in supported data sources."],
  ["ado-recordset-ref","ADO Recordset Reference","ADO Reference","The Recordset reference documents navigation, fields, and operations on returned rows."],
  ["ado-stream","ADO Stream","ADO Reference","An ADO Stream handles binary or text data from supported sources."],
  ["ado-data-types","ADO Data Types","ADO Reference","ADO data type constants describe values passed between an application and a provider."],
  ["certificate","ASP Certificate Preparation","ASP Cert","Preparation should distinguish Classic ASP, ASP.NET Web Pages Razor, and ASP.NET Core concepts."],
];

const samples: Record<string, string> = {
  "webpages-razor":`@{\n    var pageTitle = "Reading list";\n}\n<h1>@pageTitle</h1>`,
  "razor-csharp-variables":`@{\n    var title = "Field Notes";\n    var count = 3;\n}\n<p>@title has @count entries.</p>`,
  "razor-csharp-loops":`@foreach (var book in Model.Books)\n{\n    <li>@book.Title</li>\n}`, 
  "razor-csharp-logic":`@if (Model.IsPublished)\n{\n    <span>Published</span>\n}\nelse\n{\n    <span>Draft</span>\n}`, 
  "razor-vb-variables":`@Code\n    Dim pageTitle As String = "Reading list"\nEnd Code\n<h1>@pageTitle</h1>`,
  "razor-vb-loops":`@For Each book In Model.Books\n    @<li>@book.Title</li>\nNext`,
  "razor-vb-logic":`@If Model.IsPublished Then\n    @<span>Published</span>\nElse\n    @<span>Draft</span>\nEnd If`,
  "classic-intro":`<%@ Language="VBScript" %>\n<%\nResponse.Write Server.HTMLEncode("Hello from Classic ASP")\n%>`,
  "classic-forms":`<%\nDim displayName\ndisplayName = Request.Form("displayName")\nResponse.Write Server.HTMLEncode(displayName)\n%>`,
  "classic-conditionals":`<%\nIf Request.QueryString("view") = "summary" Then\n  Response.Write "Summary"\nElse\n  Response.Write "Details"\nEnd If\n%>`,
  "classic-loops":`<%\nDim i\nFor i = 1 To 3\n  Response.Write CStr(i) & " "\nNext\n%>`,
  "classic-session":`<%\nSession("theme") = "light"\nResponse.Write Server.HTMLEncode(Session("theme"))\n%>`,
  "classic-include":`<!--#include file="shared/header.inc" -->\n<main><h1>Archive</h1></main>\n<!--#include file="shared/footer.inc" -->`,
  "ado-connect":`<%\n' Read connection details from protected server configuration.\nSet connection = Server.CreateObject("ADODB.Connection")\nconnection.Open Application("ConnectionString")\n%>`,
  "ado-query":`Set command = Server.CreateObject("ADODB.Command")\nSet command.ActiveConnection = connection\ncommand.CommandText = "SELECT title FROM books WHERE id = ?"\ncommand.Parameters.Append command.CreateParameter("id", 3, 1, , bookId)\nSet rows = command.Execute`,
  "ado-add":`command.CommandText = "INSERT INTO books (title) VALUES (?)"\ncommand.Parameters.Append command.CreateParameter("title", 200, 1, 160, title)\ncommand.Execute`,
  "ado-update":`command.CommandText = "UPDATE books SET title = ? WHERE id = ?"\ncommand.Parameters.Append command.CreateParameter("title", 200, 1, 160, title)\ncommand.Parameters.Append command.CreateParameter("id", 3, 1, , bookId)\ncommand.Execute`,
  "ado-delete":`command.CommandText = "DELETE FROM books WHERE id = ?"\ncommand.Parameters.Append command.CreateParameter("id", 3, 1, , bookId)\ncommand.Execute`,
  "ado-recordset":`Set rows = command.Execute\nIf Not rows.EOF Then\n  Response.Write Server.HTMLEncode(rows("title"))\nEnd If\nrows.Close`,
  "webpages-security":`@AntiForgery.GetHtml()\n@* Validate form fields on the server. Encode untrusted output. *@`,
  "webpages-forms":`@{\n    var displayName = Request.Form["displayName"];\n    if (IsPost && !String.IsNullOrWhiteSpace(displayName)) {\n        // Validate and process the submitted value.\n    }\n}\n<form method="post">\n  <label>Name <input name="displayName" /></label>\n  <button type="submit">Save</button>\n</form>`,
};

function sample(id: string, section: string): string {
  if (samples[id]) return samples[id];
  if (section === "ADO" || section === "ADO Reference") return `' Illustrative ADO pattern; use parameterized commands.\nSet command = Server.CreateObject("ADODB.Command")\nSet command.ActiveConnection = connection\ncommand.CommandText = "SELECT id, title FROM books ORDER BY title"\nSet rows = command.Execute`;
  if (section === "Classic ASP") return `<%\n' Classic ASP / VBScript example\nResponse.Write Server.HTMLEncode("Legacy page")\n%>`;
  if (section === "ASP Web Pages") return `@{\n    var pageMessage = "Example page";\n}\n<p>@pageMessage</p>`;
  if (section === "ASP.NET Razor") return `@{ var pageMessage = "Example page"; }\n<p>@pageMessage</p>`;
  return `@page "/example"\n<h1>ASP.NET Core Razor Page</h1>`;
}

function makeLesson([id, title, section, summary]: Row): LearningLesson {
  const example = sample(id, section);
  const legacy = section === "Classic ASP" || section === "ASP Web Pages" || section === "ADO" || section === "ADO Reference";
  return {
    id: `course-${id}`, title, section, level: "Beginner", summary, contentLanguage: "en",
    content: [summary,
      legacy ? "These patterns belong to older Microsoft web stacks. Classic ASP and ASP.NET Web Pages are not the same as ASP.NET Core. Use them to understand existing systems, and check the exact runtime and server configuration used by the application." : "ASP.NET Core is the current cross-platform web framework in the .NET ecosystem. Razor Pages use .cshtml files with C# and page handlers; the hosting framework determines available APIs and conventions.",
      "For database work, keep credentials in protected server configuration, use parameterized commands, validate inputs, and encode output for the correct context. Do not expose secrets or raw exception details to visitors.",
      "Walkthrough: the example illustrates one small pattern. Confirm framework version and deployment environment before adapting it; legacy Web Pages and ADO APIs may not be available in a modern ASP.NET Core project.",
    ],
    example,
    examples: [{ title: "ASP example", code: example, result: "The result depends on the ASP runtime, language, server configuration, and data source." }],
    reading: { title: "Microsoft ASP.NET documentation", url: legacy ? "https://learn.microsoft.com/en-us/aspnet/web-pages/overview/" : "https://learn.microsoft.com/aspnet/core/" },
    quiz: { question: `What should you confirm before using ${title.toLowerCase()}?`, options: ["Which ASP generation and runtime the project uses", "That Classic ASP, Razor Pages, and ASP.NET Core are interchangeable", "That user input can be trusted automatically"], answer: 0, explanation: "ASP technologies span different generations with different APIs and runtime requirements." },
  };
}

export const aspCourseLessons: LearningLesson[] = rows.map(makeLesson);
