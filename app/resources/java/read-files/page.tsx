import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-read-files");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-read-files"} />;
}
