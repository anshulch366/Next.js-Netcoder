import Link from "next/link";
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
          <span aria-hidden="true">netc<i />der</span>
          <small aria-hidden="true">Technology</small>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
