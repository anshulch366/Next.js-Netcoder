import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-rest-api");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-rest-api"} />;
}
