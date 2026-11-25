import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-flexbox-flex-container");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-flexbox-flex-container"} />;
}
