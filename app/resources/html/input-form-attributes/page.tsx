import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-formguide-input-form-attributes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-formguide-input-form-attributes"} />;
}
