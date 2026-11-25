import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-formguide-html-project-vii");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-formguide-html-project-vii"} />;
}
