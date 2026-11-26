import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-complexity-intro");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-complexity-intro"} />;
}
