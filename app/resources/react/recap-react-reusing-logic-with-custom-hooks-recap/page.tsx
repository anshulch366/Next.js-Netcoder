import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-reusing-logic-with-custom-hooks-recap");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-reusing-logic-with-custom-hooks-recap"} />;
}
