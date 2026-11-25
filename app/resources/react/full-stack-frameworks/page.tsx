import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "creating-full-stack-frameworks");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"creating-full-stack-frameworks"} />;
}
