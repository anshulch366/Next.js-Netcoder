import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "types");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"types"} />;
}
