import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-tutorial-project-vi");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-tutorial-project-vi"} />;
}
