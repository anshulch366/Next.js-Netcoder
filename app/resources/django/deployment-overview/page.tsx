import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-deploy-elastic-beanstalk");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-deploy-elastic-beanstalk"} />;
}
