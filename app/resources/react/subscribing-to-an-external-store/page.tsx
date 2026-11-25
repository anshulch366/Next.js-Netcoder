import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-subscribing-to-an-external-store-without-effect");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-subscribing-to-an-external-store-without-effect"} />;
}
