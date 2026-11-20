import { PageLink as Link } from "@/components/layout/PageTransition";
import styles from "./blogs.module.css";

export const metadata = {
  title: "Blogs",
  description: "Read Netcoder’s practical project notes, starting with a reading group’s first SQL report.",
};

export default function BlogsPage() {
  return (
    <div className={styles.blog}>
      <nav aria-label="Breadcrumb" className={styles.trail}>
        <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Blogs</span>
      </nav>
      <div className={styles.masthead}>
        <h1>Blogs <span>&amp; articles.</span></h1>
        <a className={styles.archive} href="https://www.netcoder.in/blog">Netcoder blog archive <span aria-hidden="true">↗</span></a>
      </div>
      <article className={styles.feature} aria-labelledby="sql-project">
        <figure className={styles.cover} aria-label="Example loan register for the SQL project">
          <div className={styles.sheet}>
            <table className={styles.register}>
              <caption><span>Reading group</span>Loan register</caption>
              <thead><tr><th scope="col">Book title</th><th scope="col">Checked out</th></tr></thead>
              <tbody>
                <tr><td>Little Women</td><td>04 May</td></tr>
                <tr><td>Treasure Island</td><td>08 May</td></tr>
                <tr><td>Little Women</td><td>12 May</td></tr>
              </tbody>
            </table>
          </div>
        </figure>
        <div className={styles.story}>
          <div className={styles.meta}><span>SQL</span><span>1 min read</span></div>
          <h2 id="sql-project">A first SQL project with a question worth answering</h2>
          <p>Which book did your reading group borrow most often? Start with a table called <code>loans</code>. Give each checkout its own row, with a book title and the date it left the shelf. Include a book that someone borrowed twice so you can check your result by hand.</p>
          <p>Group the rows by title with <code>GROUP BY</code>, then count the loans in each group with <code>COUNT(*)</code>. Sort the counts from highest to lowest. If two books tie, both belong at the top of your report.</p>
          <Link className={styles.action} href="/resources/sql">Explore SQL resources <span aria-hidden="true">→</span></Link>
        </div>
      </article>
    </div>
  );
}
