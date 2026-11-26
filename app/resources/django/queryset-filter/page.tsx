import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-queryset-filter");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-queryset-filter"} />;
}
