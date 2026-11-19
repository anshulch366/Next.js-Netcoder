import { PageLink as Link } from "@/components/layout/PageTransition";
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
            priority
          />
        </div>
        <Link href="/" className="wordmark" aria-label="Netcoder Technology home">
          <Image
            src="/images/logo/logo.png"
            alt=""
            width={400}
            height={160}
            priority
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
