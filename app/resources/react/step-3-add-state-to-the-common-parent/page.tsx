import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-add-state-to-common-parent");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-add-state-to-common-parent"} />;
}
