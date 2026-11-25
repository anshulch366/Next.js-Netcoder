import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cpp", "types");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cpp"} lessonId={"types"} />;
}
