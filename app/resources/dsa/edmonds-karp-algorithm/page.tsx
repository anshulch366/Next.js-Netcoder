import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-edmonds-karp");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-edmonds-karp"} />;
}
