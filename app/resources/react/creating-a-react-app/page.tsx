import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "creating-react-app");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"creating-react-app"} />;
}
