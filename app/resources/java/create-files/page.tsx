import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-create-files");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-create-files"} />;
}
