import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-scatter-plot");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-scatter-plot"} />;
}
