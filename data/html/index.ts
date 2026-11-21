import { tutorial } from "./tutorial";
import { publishing } from "./publishing";
import { forms } from "./forms";
import { inputTypes } from "./inputTypes";
import { graphics } from "./graphics";
import { media } from "./media";
import { apis } from "./apis";
import { backgroundApis } from "./backgroundApis";
import { projects } from "./projects";
import { references } from "./references";
import { colours } from "./colours";
import { foundations } from "./study/foundations";
import { structure } from "./study/structure";
import { publishingGuide } from "./study/publishingGuide";
import { formGuide } from "./study/formGuide";
import { drawing } from "./study/drawing";
import { playback } from "./study/playback";
import { browserApis } from "./study/browserApis";
import { certificate } from "./study/certificate";
import { practice } from "./study/practice";
import { lookup } from "./study/lookup";
import type { LearningLesson } from "../learning-resources";

const levels = ["Beginner", "Intermediate", "Advanced"] as const;
function byLevel(topics: LearningLesson[]) {
  return levels.flatMap(level => topics.filter(topic => topic.level === level));
}

const workshops = [
  ...byLevel([...tutorial, ...publishing]),
  ...byLevel([...forms, ...inputTypes]),
  ...graphics,
  ...media,
  ...apis,
  ...backgroundApis,
  ...projects,
  ...byLevel([...references, ...colours]),
];

const studyLessons = [
  ...foundations,
  ...structure,
  ...publishingGuide,
  ...formGuide,
  ...drawing,
  ...playback,
  ...browserApis,
  ...certificate,
  ...practice,
  ...lookup,
];

export const htmlLessons: LearningLesson[] = [
  ...studyLessons.map(lesson => ({ ...lesson, contentLanguage: "hi-Latn" })),
  ...workshops.map(lesson => ({ ...lesson, section: "Extra practice · HTML workshops" })),
];
