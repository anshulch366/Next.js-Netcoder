import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-custom-hooks-share-logic-between-components");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-custom-hooks-share-logic-between-components"} />;
}
