import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-when-react-attaches-the-refs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-when-react-attaches-the-refs"} />;
}
