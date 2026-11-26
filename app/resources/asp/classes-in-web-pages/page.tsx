import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("asp", "course-webpages-classes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"asp"} lessonId={"course-webpages-classes"} />;
}
