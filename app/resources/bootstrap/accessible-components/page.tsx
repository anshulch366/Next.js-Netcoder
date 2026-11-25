import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "components");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"components"} />;
}
