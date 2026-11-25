import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "values");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"values"} />;
}
