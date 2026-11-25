import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "geolocation");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"geolocation"} />;
}
