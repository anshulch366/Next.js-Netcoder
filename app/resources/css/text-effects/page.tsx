import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-advanced-text-effects");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-advanced-text-effects"} />;
}
