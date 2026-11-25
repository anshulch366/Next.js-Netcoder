import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cybersecurity", "secure-coding");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cybersecurity"} lessonId={"secure-coding"} />;
}
