import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-reference-agent");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-reference-agent"} />;
}
