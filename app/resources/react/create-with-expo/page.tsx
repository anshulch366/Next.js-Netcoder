import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "creating-expo");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"creating-expo"} />;
}
