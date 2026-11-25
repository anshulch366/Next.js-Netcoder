import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "image-effects");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"image-effects"} />;
}
