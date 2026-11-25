import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-flexbox-flexbox-intro");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-flexbox-flexbox-intro"} />;
}
