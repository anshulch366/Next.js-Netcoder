import { tutorial } from "./tutorial";
import { methods } from "./methods";
import { classes } from "./classes";
import { errors } from "./errors";
import { problemSolving, projects } from "./problemSolving";
import { files } from "./files";
import { streams } from "./streams";
import { structures } from "./structures";
import { advanced } from "./advanced";
import { certificate, howTo, practice } from "./practice";
import { reference } from "./reference";

export const javaLessons = [
  ...tutorial, ...methods, ...classes, ...errors, ...problemSolving, ...projects,
  ...files, ...streams, ...structures, ...advanced, ...certificate, ...howTo,
  ...practice, ...reference,
];
