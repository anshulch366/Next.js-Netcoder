import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "attribute-reference");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"attribute-reference"} />;
}
