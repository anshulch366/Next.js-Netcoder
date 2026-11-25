import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("git", "git-set-remote");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"git"} lessonId={"git-set-remote"} />;
}
