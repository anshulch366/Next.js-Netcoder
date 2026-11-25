import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "complexity");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"complexity"} />;
}
