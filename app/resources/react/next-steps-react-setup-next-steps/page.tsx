import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-setup-next-steps");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-setup-next-steps"} />;
}
