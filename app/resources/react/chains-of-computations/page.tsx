import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-chains-of-computations");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-chains-of-computations"} />;
}
