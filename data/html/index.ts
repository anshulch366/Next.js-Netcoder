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
import type { LearningLesson } from "../learning-resources";

const levels = ["Beginner", "Intermediate", "Advanced"] as const;
function byLevel(topics: LearningLesson[]) {
  return levels.flatMap(level => topics.filter(topic => topic.level === level));
}

export const htmlLessons = [
  ...byLevel([...tutorial, ...publishing]),
  ...byLevel([...forms, ...inputTypes]),
  ...graphics,
  ...media,
  ...apis,
  ...backgroundApis,
  ...projects,
  ...byLevel([...references, ...colours]),
];
