import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cpp", "vectors");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cpp"} lessonId={"vectors"} />;
}
