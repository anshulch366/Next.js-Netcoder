import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("git", "commits");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"git"} lessonId={"commits"} />;
}
