import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-grid-project-viii");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-grid-project-viii"} />;
}
