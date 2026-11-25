import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-there-is-more-than-one-way-to-do-it");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-there-is-more-than-one-way-to-do-it"} />;
}
