import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-references-reference-aural");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-references-reference-aural"} />;
}
