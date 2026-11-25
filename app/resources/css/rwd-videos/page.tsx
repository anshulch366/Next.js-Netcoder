import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-responsive-rwd-videos");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-responsive-rwd-videos"} />;
}
