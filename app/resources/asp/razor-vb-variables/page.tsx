import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("asp", "course-razor-vb-variables");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"asp"} lessonId={"course-razor-vb-variables"} />;
}
