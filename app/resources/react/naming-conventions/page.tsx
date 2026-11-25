import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-updater-naming-conventions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-updater-naming-conventions"} />;
}
