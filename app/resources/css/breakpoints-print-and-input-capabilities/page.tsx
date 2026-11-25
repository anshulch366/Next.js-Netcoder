import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "media-queries");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"media-queries"} />;
}
