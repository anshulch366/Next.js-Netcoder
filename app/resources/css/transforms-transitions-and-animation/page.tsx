import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "motion");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"motion"} />;
}
