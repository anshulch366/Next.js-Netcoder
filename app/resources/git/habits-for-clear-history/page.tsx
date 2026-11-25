import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("git", "git-best-practices");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"git"} lessonId={"git-best-practices"} />;
}
