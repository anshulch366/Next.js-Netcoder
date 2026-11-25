import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "classes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"classes"} />;
}
