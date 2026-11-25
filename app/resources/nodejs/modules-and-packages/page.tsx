import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "modules");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"modules"} />;
}
