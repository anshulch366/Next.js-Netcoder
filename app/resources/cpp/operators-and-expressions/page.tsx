import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cpp", "course-operators");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cpp"} lessonId={"course-operators"} />;
}
