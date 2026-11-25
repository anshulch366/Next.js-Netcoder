import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "signup-project");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"signup-project"} />;
}
