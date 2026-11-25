import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-syllabus-study-plan");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-syllabus-study-plan"} />;
}
