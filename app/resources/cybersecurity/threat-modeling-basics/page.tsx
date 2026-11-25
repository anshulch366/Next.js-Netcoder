import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cybersecurity", "threat-model");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cybersecurity"} lessonId={"threat-model"} />;
}
