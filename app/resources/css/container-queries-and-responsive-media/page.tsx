import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "container-media");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"container-media"} />;
}
