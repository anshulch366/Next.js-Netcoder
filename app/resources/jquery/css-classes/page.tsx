import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "css-classes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"css-classes"} />;
}
