import Link from "next/link";
import { PageLink } from "@/components/layout/PageTransition";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <div className="bar wrap">
        <div className="home-logo-slot">
          <Image
            src="/images/logo/logo.png"
            alt="Netcoder Technology"
            fill
            sizes="168px"
            priority
          />
        </div>
        <PageLink href="/" className="wordmark" aria-label="Netcoder Technology home">
          <Image
            src="/images/logo/logo.png"
            alt=""
            width={400}
            height={160}
            priority
          />
        </PageLink>
        <div className="header-actions">
          <Link href="/login" className="header-login">Login</Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
