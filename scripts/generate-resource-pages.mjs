import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { registerHooks, stripTypeScriptTypes } from "node:module";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith(".") && context.parentURL?.startsWith("file:")) {
      const parent = path.dirname(fileURLToPath(context.parentURL));
      const candidates = [
        path.resolve(parent, `${specifier}.ts`),
        path.resolve(parent, specifier, "index.ts"),
      ];
      const match = candidates.find(candidate => fs.existsSync(candidate));
      if (match) return { url: pathToFileURL(match).href, shortCircuit: true };
    }
    return nextResolve(specifier, context);
  },
  load(url, context, nextLoad) {
    if (url.endsWith(".ts")) {
      const source = fs.readFileSync(fileURLToPath(url), "utf8");
      return {
        format: "module",
        source: stripTypeScriptTypes(source, { mode: "transform", sourceUrl: url }),
        shortCircuit: true,
      };
    }
    return nextLoad(url, context);
  },
});

const { learningLanguages } = await import(pathToFileURL(path.join(root, "data/learning-resources.ts")));
const { resourceLessonFolderName } = await import(pathToFileURL(path.join(root, "data/resource-navigation.ts")));
let generated = 0;
let subjectPages = 0;

for (const subject of learningLanguages) {
  const subjectFolder = path.join(root, "app", "resources", subject.id);
  fs.mkdirSync(subjectFolder, { recursive: true });
  const subjectPage = path.join(subjectFolder, "page.tsx");
  if (!fs.existsSync(subjectPage) && subject.lessons[0]) {
    const content = `import { redirect } from "next/navigation";\nimport { resourceHref } from "@/data/resource-navigation";\n\nexport default function Page() {\n  redirect(resourceHref(${JSON.stringify(subject.id)}, ${JSON.stringify(subject.lessons[0].id)}));\n}\n`;
    fs.writeFileSync(subjectPage, content, "utf8");
    subjectPages += 1;
  }

  for (const lesson of subject.lessons) {
    const segment = resourceLessonFolderName(subject.id, lesson.id);
    const folder = path.join(subjectFolder, segment);
    fs.mkdirSync(folder, { recursive: true });
    const file = path.join(folder, "page.tsx");
    const content = `import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";\n\nexport function generateMetadata() {\n  return resourceLessonMetadata(${JSON.stringify(subject.id)}, ${JSON.stringify(lesson.id)});\n}\n\nexport default function Page() {\n  return <ResourceLessonPage subjectId={${JSON.stringify(subject.id)}} lessonId={${JSON.stringify(lesson.id)}} />;\n}\n`;
    fs.writeFileSync(file, content, "utf8");
    generated += 1;
  }
}

console.log(`Generated ${generated} static lesson pages and ${subjectPages} subject landing pages.`);
