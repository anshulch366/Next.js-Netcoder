import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-examples-quiz");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-examples-quiz"} />;
}
