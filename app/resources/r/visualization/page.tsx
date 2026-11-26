import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("r", "visualization");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"r"} lessonId={"visualization"} />;
}
