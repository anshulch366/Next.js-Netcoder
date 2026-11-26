import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-template-tag-reference");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-template-tag-reference"} />;
}
