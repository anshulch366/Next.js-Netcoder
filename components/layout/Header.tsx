import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <div className="bar wrap">
        <div className="home-logo-slot">
          {/* Insert your homepage logo image here. Its dimensions are set in home.module.css. */}
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
