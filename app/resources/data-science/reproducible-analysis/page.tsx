import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("data-science", "reproducibility");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"data-science"} lessonId={"reproducibility"} />;
}
