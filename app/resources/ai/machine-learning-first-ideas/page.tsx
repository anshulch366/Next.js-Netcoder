import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "course-ml-intro");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"course-ml-intro"} />;
}
