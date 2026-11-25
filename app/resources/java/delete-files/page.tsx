import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-delete-files");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-delete-files"} />;
}
