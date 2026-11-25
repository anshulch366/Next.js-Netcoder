import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-putting-effects-all-together");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-putting-effects-all-together"} />;
}
