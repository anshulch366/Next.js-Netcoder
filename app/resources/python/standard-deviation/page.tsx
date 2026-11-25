import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-standard-deviation");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-standard-deviation"} />;
}
