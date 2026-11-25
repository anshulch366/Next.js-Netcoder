import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cybersecurity", "incident-response");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cybersecurity"} lessonId={"incident-response"} />;
}
