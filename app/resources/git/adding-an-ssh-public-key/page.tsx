import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("git", "git-add-ssh-key");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"git"} lessonId={"git-add-ssh-key"} />;
}
