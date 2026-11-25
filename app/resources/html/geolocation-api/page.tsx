import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-browserapis-geolocation-api");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-browserapis-geolocation-api"} />;
}
