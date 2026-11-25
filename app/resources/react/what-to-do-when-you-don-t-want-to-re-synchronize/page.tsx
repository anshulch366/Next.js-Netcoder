import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-what-to-do-when-you-dont-want-to-resynchronize");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-what-to-do-when-you-dont-want-to-resynchronize"} />;
}
