import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "course-tfjs-example-one-training");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"course-tfjs-example-one-training"} />;
}
