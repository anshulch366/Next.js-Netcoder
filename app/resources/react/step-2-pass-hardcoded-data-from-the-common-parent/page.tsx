import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-pass-hardcoded-data-common-parent");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-pass-hardcoded-data-common-parent"} />;
}
