import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-binary-trees");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-binary-trees"} />;
}
