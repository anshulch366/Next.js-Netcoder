// Include the fixture in the copyable example so it runs in an empty HTML file.
export function cssDemo(markup: string, baseStyles = "") {
  return (styles: string) => [
    "<!doctype html>",
    '<html lang="en">',
    "<head>",
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1">',
    "  <title>CSS practice</title>",
    "  <style>",
    [baseStyles, styles].filter(Boolean).join("\n").split("\n").map(line => "    " + line).join("\n"),
    "  </style>",
    "</head>",
    "<body>",
    markup,
    "</body>",
    "</html>",
  ].join("\n");
}
