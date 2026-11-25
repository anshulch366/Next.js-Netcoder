import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "structures");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"structures"} />;
}
