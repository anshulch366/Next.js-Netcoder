import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "views-forms");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"views-forms"} />;
}
