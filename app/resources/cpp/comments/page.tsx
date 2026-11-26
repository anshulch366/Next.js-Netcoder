import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cpp", "course-comments");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cpp"} lessonId={"course-comments"} />;
}
