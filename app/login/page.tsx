import AuthView from "@/components/auth/AuthView";
import { pageMetadata } from "@/app/site-metadata";

export const metadata = pageMetadata(
  "/login",
  "Student Sign In | Netcoder Technology LMS",
  "Sign in to your Netcoder Technology LMS account to explore courses, track lessons, submit assignments, and earn certificates.",
);

export default function LoginPage() {
  return <AuthView mode="login" />;
}
