import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-sass-sass-tutorial");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-sass-sass-tutorial"} />;
}
