import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-props-recap-challenges");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-props-recap-challenges"} />;
}
