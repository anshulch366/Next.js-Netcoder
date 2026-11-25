import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-playback-html-project-viii");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-playback-html-project-viii"} />;
}
