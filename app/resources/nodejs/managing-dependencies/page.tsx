import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-manage-dependencies");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-manage-dependencies"} />;
}
