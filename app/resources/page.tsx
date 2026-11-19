export const metadata = { title: "Resource library" };

import ResourceStudio from "@/components/resources/ResourceStudio";

export default async function ResourcesPage({ searchParams }: PageProps<"/resources">) {
  const { subject } = await searchParams;
  const initialSubject = typeof subject === "string" ? subject : undefined;
  return <ResourceStudio key={initialSubject} initialSubject={initialSubject} />;
}
