import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-examples-projects");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-examples-projects"} />;
}
