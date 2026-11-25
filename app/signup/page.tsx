import AuthView from "@/components/auth/AuthView";
import { pageMetadata } from "@/app/site-metadata";

export const metadata = pageMetadata(
  "/signup",
  "Create Your Account | Netcoder Technology LMS",
  "Create your Netcoder Technology student account and start learning design, web development, programming, and digital skills.",
);

export default function SignUpPage() {
  return <AuthView mode="signup" />;
}
