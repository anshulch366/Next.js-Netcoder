import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-ford-fulkerson");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-ford-fulkerson"} />;
}
