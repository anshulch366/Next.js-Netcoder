import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "box-model");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"box-model"} />;
}
