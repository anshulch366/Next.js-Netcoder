import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-tkinter-menu");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-tkinter-menu"} />;
}
