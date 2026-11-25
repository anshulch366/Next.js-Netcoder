import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-advanced-image-modal");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-advanced-image-modal"} />;
}
