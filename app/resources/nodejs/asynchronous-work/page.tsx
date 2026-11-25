import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "async");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"async"} />;
}
