import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-keeping-pure");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-keeping-pure"} />;
}
