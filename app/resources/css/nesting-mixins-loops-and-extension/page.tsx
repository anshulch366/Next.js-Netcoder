import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "sass-reuse");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"sass-reuse"} />;
}
