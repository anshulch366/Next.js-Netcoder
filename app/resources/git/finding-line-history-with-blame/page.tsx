import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("git", "git-blame");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"git"} lessonId={"git-blame"} />;
}
