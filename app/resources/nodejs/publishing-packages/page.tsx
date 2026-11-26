import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-publish-packages");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-publish-packages"} />;
}
