import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "course-ml-javascript");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"course-ml-javascript"} />;
}
