import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("git", "git-edit-hosted-code");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"git"} lessonId={"git-edit-hosted-code"} />;
}
