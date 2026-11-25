import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-effect-doing-several-unrelated-things");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-effect-doing-several-unrelated-things"} />;
}
