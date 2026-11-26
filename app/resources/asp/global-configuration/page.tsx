import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("asp", "course-webpages-global");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"asp"} lessonId={"course-webpages-global"} />;
}
