import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "controls");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"controls"} />;
}
