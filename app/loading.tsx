import Image from "next/image";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <main className={styles.loading} role="status" aria-live="polite" aria-label="Loading page">
      <Image src="/images/logo/logo.png" alt="Netcoder Technology" width={154} height={62} />
      <span className={styles.track} aria-hidden="true"><span /></span>
      <p>Loading your page…</p>
    </main>
  );
}
