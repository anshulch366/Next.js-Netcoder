import type { LearningLesson } from "../learning-resources";
import { tutorial } from "./tutorial";
import { interfaceStyles } from "./interfaceStyles";
import { advanced } from "./advanced";
import { imageEffects } from "./imageEffects";
import { flexbox } from "./flexbox";
import { grid } from "./grid";
import { responsive } from "./responsive";
import { cert } from "./cert";
import { sass } from "./sass";
import { projects } from "./projects";
import { references } from "./references";
import { basics } from "./study/basics";
import { flow } from "./study/flow";
import { interfaces } from "./study/interfaces";
import { effects } from "./study/effects";
import { advancedTools } from "./study/advancedTools";
import { flexLessons } from "./study/flexLessons";
import { gridLessons } from "./study/gridLessons";
import { rwdLessons } from "./study/rwdLessons";
import { certLesson } from "./study/certLesson";
import { sassLesson } from "./study/sassLesson";
import { practiceLessons } from "./study/practiceLessons";
import { referenceLessons } from "./study/referenceLessons";

const chapters = [
  { topics: [...tutorial, ...interfaceStyles], title: "W3Schools CSS tutorial", url: "https://www.w3schools.com/css/" },
  { topics: [...advanced, ...imageEffects], title: "W3Schools advanced CSS variables", url: "https://www.w3schools.com/css/css3_variables.asp" },
  { topics: flexbox, title: "W3Schools Flexbox guide", url: "https://www.w3schools.com/css/css3_flexbox.asp" },
  { topics: grid, title: "W3Schools Grid guide", url: "https://www.w3schools.com/css/css_grid.asp" },
  { topics: responsive, title: "W3Schools responsive design guide", url: "https://www.w3schools.com/css/css_rwd_intro.asp" },
  { topics: cert, title: "W3Schools CSS certificate and exam information", url: "https://www.w3schools.com/css/css_exam.asp" },
  { topics: sass, title: "W3Schools Sass tutorial", url: "https://www.w3schools.com/sass/default.asp" },
  { topics: projects, title: "W3Schools CSS examples", url: "https://www.w3schools.com/css/css_examples.asp" },
  { topics: references, title: "W3Schools CSS reference", url: "https://www.w3schools.com/cssref/index.php" },
];

const levels = ["Beginner", "Intermediate", "Advanced"] as const;
const workshops = chapters.flatMap(({ topics, title, url }) =>
  levels.flatMap(level => topics.filter(topic => topic.level === level).map(topic => ({
    ...topic,
    section: "Extra practice · CSS workshops",
    reading: { title, url },
  }))),
);

const studyLessons = [
  ...basics, ...flow, ...interfaces,
  ...effects, ...advancedTools,
  ...flexLessons, ...gridLessons, ...rwdLessons,
  ...certLesson, ...sassLesson, ...practiceLessons, ...referenceLessons,
];

export const cssLessons: LearningLesson[] = [
  ...studyLessons,
  ...workshops,
];
