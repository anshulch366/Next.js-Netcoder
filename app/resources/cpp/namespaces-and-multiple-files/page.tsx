import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cpp", "course-namespaces");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cpp"} lessonId={"course-namespaces"} />;
}
