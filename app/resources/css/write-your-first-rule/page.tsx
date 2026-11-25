import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "selectors");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"selectors"} />;
}
