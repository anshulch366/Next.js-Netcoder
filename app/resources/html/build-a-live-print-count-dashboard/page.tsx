import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "dashboard-project");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"dashboard-project"} />;
}
