import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "dimensions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"dimensions"} />;
}
