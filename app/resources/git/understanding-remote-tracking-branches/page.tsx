import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("git", "git-remote-branches");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"git"} lessonId={"git-remote-branches"} />;
}
