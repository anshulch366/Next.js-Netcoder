import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-logistic-regression");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-logistic-regression"} />;
}
