import { basics } from "./basics";
import { values } from "./values";
import { dataTools } from "./dataTools";
import { asyncBasics } from "./asyncBasics";
import { firstSteps } from "./firstSteps";
import { browserTutorial } from "./browserTutorial";
import { webApis } from "./webApis";
import { advancedTopics } from "./advancedTopics";
import { olderTechnologies } from "./olderTechnologies";
import { workedExamples } from "./workedExamples";

const topics = new Map([
  ...basics, ...values, ...dataTools, ...asyncBasics,
  ...firstSteps, ...browserTutorial, ...webApis, ...advancedTopics,
  ...olderTechnologies, ...workedExamples,
].map(lesson => [lesson.id, lesson]));

function sectionLessons(section: string, entries: [id: string, page: string, title?: string][]) {
  return entries.map(([id, page, title]) => {
    const lesson = topics.get(id);
    if (!lesson) throw new Error(`Unknown JavaScript lesson: ${id}`);
    const heading = title ?? lesson.title;
    return {
      ...lesson,
      id: `js-${id}`,
      title: heading,
      section,
      reading: { title: `W3Schools · ${heading}`, url: `https://www.w3schools.com/js/${page}.asp` },
    };
  });
}

export const javascriptLessons = [
  ...sectionLessons("JS Tutorial", [
    ["home", "default"],
    ["variables", "js_intro", "JS Introduction"],
    ["where-to", "js_whereto"],
    ["output", "js_output"],
    ["syntax", "js_syntax"],
    ["operators", "js_operators", "JS Operators"],
    ["conditions", "js_if", "JS If Conditions"],
    ["loops", "js_loops", "JS Loops"],
    ["strings", "js_strings", "JS Strings"],
    ["numbers", "js_numbers", "JS Numbers"],
    ["functions", "js_functions", "JS Functions"],
    ["timers", "js_timers"],
    ["objects", "js_objects", "JS Objects"],
    ["scope", "js_scope"],
    ["dates", "js_dates", "JS Dates"],
    ["arrays", "js_arrays", "JS Arrays"],
    ["sets", "js_sets"],
    ["maps", "js_maps"],
    ["array-methods", "js_looping", "JS Iterations"],
    ["math", "js_math"],
    ["regex", "js_regexp", "JS RegExp"],
    ["types", "js_datatypes", "JS Data Types"],
    ["errors", "js_errors_intro", "JS Errors"],
    ["debugging", "js_debugging"],
    ["style-guide", "js_conventions"],
    ["reference", "js_alphabetic_reference"],
    ["projects", "js_project_counter"],
    ["versions", "js_2027"],
    ["html-dom", "js_htmldom"],
    ["html-events", "js_events"],
    ["html-first", "js_htmlfirst"],
  ]),
  ...sectionLessons("JS Web API", [
    ["window", "js_window"],
    ["fetch", "js_api_fetch"],
    ["json", "js_json", "JS JSON"],
    ["web-api", "js_api_intro"],
  ]),
  ...sectionLessons("JS Advanced", [
    ["temporal", "js_temporal"],
    ["advanced-functions", "js_function_advanced"],
    ["advanced-objects", "js_object_advanced"],
    ["classes", "js_classes"],
    ["async-basics", "js_asynchronous", "JS Asynchronous"],
    ["modules", "js_modules"],
    ["meta-proxy", "js_meta_programming"],
    ["typed-arrays", "js_typed_arrays"],
    ["dom-navigation", "js_htmldom_navigation"],
    ["graphics", "js_graphics"],
  ]),
  ...sectionLessons("Old Technologies", [
    ["ajax", "js_ajax_intro"],
    ["jquery", "js_jquery_selectors"],
    ["jsonp", "js_json_jsonp"],
  ]),
  ...sectionLessons("JS Examples", [
    ["examples", "js_examples"],
  ]),
];
