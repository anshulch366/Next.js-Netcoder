import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-lists-and-arrays");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-lists-and-arrays"} />;
}
