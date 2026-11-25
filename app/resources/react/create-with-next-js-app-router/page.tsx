import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "creating-nextjs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"creating-nextjs"} />;
}
