import { redirect } from "next/navigation";
import { resourceHref } from "@/data/resource-navigation";

export default function Page() {
  redirect(resourceHref("data-science", "questions"));
}
