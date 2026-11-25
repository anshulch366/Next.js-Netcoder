import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-compiler-nextjs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-compiler-nextjs"} />;
}
