import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "add-react-existing");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"add-react-existing"} />;
}
