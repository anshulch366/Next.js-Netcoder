import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "edge-locations");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"edge-locations"} />;
}
