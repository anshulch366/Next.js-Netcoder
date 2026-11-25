import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "build-react-from-scratch");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"build-react-from-scratch"} />;
}
