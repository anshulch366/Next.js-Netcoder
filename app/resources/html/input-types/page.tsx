import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-formguide-html-input-types");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-formguide-html-input-types"} />;
}
