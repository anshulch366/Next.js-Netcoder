import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-effect-firing-twice-in-development");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-effect-firing-twice-in-development"} />;
}
