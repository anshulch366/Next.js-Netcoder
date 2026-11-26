import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-es6");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-es6"} />;
}
