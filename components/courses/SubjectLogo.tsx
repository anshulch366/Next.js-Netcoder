import Image from "next/image";

export default function SubjectLogo({ subject }: { subject: string }) {
  return <Image src={`/images/subjects/${subject}.svg`} width={36} height={36} alt="" />;
}
