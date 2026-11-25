import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-references-pseudo-elements");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-references-pseudo-elements"} />;
}
