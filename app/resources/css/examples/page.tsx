import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-examples-examples");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-examples-examples"} />;
}
