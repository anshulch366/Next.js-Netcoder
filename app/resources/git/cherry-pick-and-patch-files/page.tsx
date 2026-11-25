import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("git", "git-cherry-pick-patch");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"git"} lessonId={"git-cherry-pick-patch"} />;
}
