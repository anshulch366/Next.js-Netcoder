import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-install-next-steps");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-install-next-steps"} />;
}
