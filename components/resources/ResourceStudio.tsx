"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { LearningLesson } from "@/data/learning-resources";
import { resourceHref, type ResourceSubject, type SubjectLink } from "@/data/resource-navigation";
import styles from "./ResourceStudio.module.css";

type StudioProps = {
  subjects: SubjectLink[];
  language: ResourceSubject;
  lesson: LearningLesson;
  directory?: { subject: string; chapters: { title: string; href: string }[] }[];
};

export default function ResourceStudio(props: StudioProps) {
  return <LessonView key={props.language.id + ":" + props.lesson.id} {...props} />;
}

function LessonView({ subjects, language, lesson, directory }: StudioProps) {
  const router = useRouter();
  const LibraryTitle = directory ? "h1" : "p";
  const LessonTitle = directory ? "h2" : "h1";
  const [topicSearch, setTopicSearch] = useState("");
  const [quizChoices, setQuizChoices] = useState<Record<number, number | null>>({});
  const [submittedQuizzes, setSubmittedQuizzes] = useState<Record<number, boolean>>({});
  const [copiedExample, setCopiedExample] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const lessonKey = `${language.id}:${lesson.id}`;
  const examples = lesson.examples ?? [{ title: "Example", code: lesson.example }];
  const quizzes = lesson.quizzes ?? [lesson.quiz];
  const activeIndex = language.lessons.findIndex((item) => item.id === lesson.id);
  const sections = [...new Set(language.lessons.flatMap(item => item.section ? [item.section] : []))];
  const query = topicSearch.trim().toLowerCase();
  const visibleLessons = language.lessons.filter(item => {
    if (!query) return item.section === lesson.section;
    const terms = [item.title, item.section, item.level, ...item.exampleTitles];
    return terms.join(" ").toLowerCase().includes(query);
  });
  const totalLessons = subjects.reduce((total, item) => total + item.count, 0);
  const progress = Math.round((completedLessons.length / totalLessons) * 100);

  function topicHref(id: string) {
    return resourceHref(language.id, id) + "#lesson-title";
  }

  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(sessionStorage.getItem("resource-completion") ?? "[]");
      if (Array.isArray(saved)) setCompletedLessons(saved.filter(key => typeof key === "string"));
    } catch { /* Storage may be unavailable. */ }
  }, []);

  function toggleCompleted() {
    const next = completedLessons.includes(lessonKey)
      ? completedLessons.filter(key => key !== lessonKey)
      : [...completedLessons, lessonKey];
    setCompletedLessons(next);
    try { sessionStorage.setItem("resource-completion", JSON.stringify(next)); } catch { /* Optional storage. */ }
  }

  async function copyExample(index: number, code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedExample(index);
      window.setTimeout(() => setCopiedExample(null), 1800);
    } catch {
      setCopiedExample(null);
    }
  }

  return (
    <div className={styles.studio}>
      <div className={styles.kickerRow}>
        <div className={styles.libraryMark}><span aria-hidden="true">N</span><span>Netcoder <b>Learning Library</b></span></div>
        <div className={styles.progressSummary} aria-label={`${completedLessons.length} of ${totalLessons} lessons complete`}>
          <span>{completedLessons.length}/{totalLessons} lessons</span>
          <span className={styles.progressTrack}><span style={{ width: `${progress}%` }} /></span>
        </div>
      </div>

      <section className={styles.hero} aria-labelledby="library-title">
        <p className={styles.eyebrow}>LEARN · PRACTICE · BUILD</p>
        <LibraryTitle className={styles.libraryTitle} id="library-title">Netcoder <span>Learning Library</span></LibraryTitle>
        <p className={styles.heroCopy}>Practical, bite-sized guides for the tools behind the web. Pick a subject, explore a topic, and learn by doing.</p>
      </section>

      {directory && <details className={styles.directory}>
        <summary>Browse subjects and chapters</summary>
        <nav aria-label="Library chapters">
          {directory.map(group => <section key={group.subject}>
            <h2>{group.subject}</h2>
            <ul>{group.chapters.map(chapter => <li key={chapter.href}><Link prefetch={false} href={chapter.href}>{chapter.title}</Link></li>)}</ul>
          </section>)}
        </nav>
      </details>}

      <nav className={styles.languageNav} aria-label="Choose a technology">
        <div className={styles.languageNavLabel}>EXPLORE</div>
        <div className={styles.languageList}>
          {subjects.map((item) => (
            <Link
              className={`${styles.languageButton} ${language.id === item.id ? styles.languageActive : ""}`}
              key={item.id}
              href={resourceHref(item.id)}
              prefetch={false}
              aria-current={language.id === item.id ? "true" : undefined}
            >
              {item.label}<span>{item.count}</span>
            </Link>
          ))}
        </div>
      </nav>

      <div className={styles.learningLayout}>
        <aside className={styles.sidebar} aria-label={`${language.label} topics`}>
          <div className={styles.sidebarHeader}>
            <div><p className={styles.sidebarEyebrow}>{language.category}</p><h2>{language.label} path</h2></div>
            <span className={styles.topicCount}>{language.lessons.length}</span>
          </div>
          {lesson.section && (
            <div className={styles.chapterPicker}>
              <label className={styles.searchLabel} htmlFor="chapter-select">CHAPTER</label>
              <select id="chapter-select" value={lesson.section} onChange={event => {
                const first = language.lessons.find(item => item.section === event.target.value);
                if (first) {
                  setTopicSearch("");
                  router.push(topicHref(first.id));
                }
              }}>
                {sections.map(section => <option key={section}>{section}</option>)}
              </select>
            </div>
          )}
          <label className={styles.searchLabel} htmlFor="topic-search">FIND A TOPIC</label>
          <div className={styles.searchBox}>
            <span aria-hidden="true">⌕</span>
            <input id="topic-search" type="search" placeholder="Search topics" value={topicSearch} onChange={(event) => setTopicSearch(event.target.value)} />
            <kbd>/</kbd>
          </div>
          <nav className={styles.topicNav} aria-label={`${language.label} lesson list`}>
            {visibleLessons.map((item) => {
              const itemKey = `${language.id}:${item.id}`;
              const isComplete = completedLessons.includes(itemKey);
              return (
                <Link
                  className={`${styles.topicButton} ${lesson.id === item.id ? styles.topicActive : ""}`}
                  key={item.id}
                  href={topicHref(item.id)}
                  prefetch={false}
                  aria-current={lesson.id === item.id ? "step" : undefined}
                >
                  <span className={styles.topicNumber}>{isComplete ? "✓" : String(language.lessons.indexOf(item) + 1).padStart(2, "0")}</span>
                  <span>{item.title}{item.section && <small className={styles.topicLevel}>{item.level}{query && ` · ${item.section}`}</small>}</span>
                  {lesson.id === item.id && <span className={styles.topicArrow} aria-hidden="true">›</span>}
                </Link>
              );
            })}
            {visibleLessons.length === 0 && <p className={styles.emptySearch}>No topics match “{topicSearch}”.</p>}
          </nav>
          <a className={styles.docsCard} href={language.docs} target="_blank" rel="noreferrer">
            <span className={styles.docsIcon} aria-hidden="true">↗</span>
            <span><b>Official documentation</b><small>Go deeper with {language.label}</small></span>
          </a>
        </aside>

        <section className={styles.lessonMain} aria-label={`${language.label} lesson`}>
          <div className={styles.breadcrumb}><span>Library</span><span aria-hidden="true">/</span><span>{language.label}</span><span aria-hidden="true">/</span><span>{lesson.title}</span></div>
          <article className={styles.lessonArticle}>
            <header className={styles.lessonHeader}>
              <div className={styles.lessonMeta}><span className={styles.languageTag}>{language.label}</span><span>LESSON {String(activeIndex + 1).padStart(2, "0")} <i>·</i> {language.lessons.length} TOPICS</span></div>
              {lesson.section && <p className={styles.chapterMeta}>{lesson.section} · {lesson.level}</p>}
              <LessonTitle className={styles.lessonTitle} id="lesson-title" tabIndex={-1}>{lesson.title}</LessonTitle>
              <p lang={lesson.contentLanguage}>{lesson.summary}</p>
            </header>

            <section className={styles.guideSection} aria-labelledby="key-ideas">
              <h3 id="key-ideas"><span className={styles.sectionIcon}>✳</span> Key ideas</h3>
              {lesson.content.map((paragraph) => <p lang={lesson.contentLanguage} key={paragraph}>{paragraph}</p>)}
              <div className={styles.tip}><span aria-hidden="true">✦</span><p><b>Pro tip</b> Build one small example of your own after reading. Changing a value and observing the result is one of the fastest ways to make a concept stick.</p></div>
            </section>

            <section className={styles.exampleSection} aria-labelledby="example-title">
              <div className={styles.sectionHeading}>
                <div><h3 id="example-title"><span className={styles.sectionIcon}>⌘</span> Worked examples</h3><p>{examples.length} practical patterns to try.</p></div>
              </div>
              <div className={styles.examplesList}>
                {examples.map((example, index) => (
                  <div className={styles.exampleItem} key={`${example.title}-${index}`}>
                    <div className={styles.exampleItemHeading}><h4>{example.title}</h4><button className={styles.copyButton} type="button" onClick={() => copyExample(index, example.code)} aria-label={`Copy ${example.title}`}>{copiedExample === index ? "✓ Copied" : "Copy code"}</button></div>
                    <div className={styles.codeWindow}>
                      <div className={styles.codeTop}><span><i /><i /><i /></span><span>{language.label.toLowerCase()} · example</span><span>{String(index + 1).padStart(2, "0")}</span></div>
                      <pre><code>{example.code}</code></pre>
                    </div>
                    {example.result && <p className={styles.exampleResult}><b>Expected result</b> <span lang={lesson.contentLanguage}>{example.result}</span></p>}
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.quizSection} aria-labelledby="quiz-title">
              <div className={styles.quizHeading}><span className={styles.quizIcon}>?</span><div><p className={styles.sidebarEyebrow}>QUICK CHECK</p><h3 id="quiz-title">Test your understanding · {quizzes.length} questions</h3></div></div>
              {quizzes.map((quiz, quizIndex) => {
                const choice = quizChoices[quizIndex] ?? null;
                const submitted = submittedQuizzes[quizIndex] ?? false;
                return (
                  <div className={styles.quizQuestion} key={`${quiz.question}-${quizIndex}`}>
                    <p lang={lesson.contentLanguage} className={styles.question}><span>{String(quizIndex + 1).padStart(2, "0")}</span>{quiz.question}</p>
                    <div lang={lesson.contentLanguage} className={styles.answerList} role="group" aria-label={`Question ${quizIndex + 1} answer choices`}>
                      {quiz.options.map((option, optionIndex) => {
                        const isCorrect = submitted && optionIndex === quiz.answer;
                        const isWrong = submitted && choice === optionIndex && optionIndex !== quiz.answer;
                        return (
                          <button className={`${styles.answerOption} ${choice === optionIndex ? styles.answerSelected : ""} ${isCorrect ? styles.answerCorrect : ""} ${isWrong ? styles.answerWrong : ""}`} type="button" key={option} onClick={() => { setQuizChoices((current) => ({ ...current, [quizIndex]: optionIndex })); setSubmittedQuizzes((current) => ({ ...current, [quizIndex]: false })); }} aria-pressed={choice === optionIndex}>
                            <span className={styles.radioMark}>{choice === optionIndex ? "●" : ""}</span>{option}
                            {isCorrect && <span className={styles.answerStatus}>Correct answer</span>}
                          </button>
                        );
                      })}
                    </div>
                    <div className={styles.quizFooter}>
                      {submitted ? <p className={choice === quiz.answer ? styles.correctFeedback : styles.wrongFeedback} role="status">{choice === quiz.answer ? "Nice work! " : "Not quite. "}{quiz.explanation}</p> : <p>Choose an answer, then check your understanding.</p>}
                      <button className={styles.checkButton} type="button" disabled={choice === null} onClick={() => setSubmittedQuizzes((current) => ({ ...current, [quizIndex]: true }))}>{submitted ? "Check again" : "Check answer"}</button>
                    </div>
                  </div>
                );
              })}
            </section>

            {language.id === "html" && lesson.section && !lesson.reading && (
              <p className={styles.furtherReading}>Further reading · <a href="https://www.w3schools.com/html/">W3Schools HTML tutorial</a> · <a href="https://html.spec.whatwg.org/multipage/indices.html">HTML Standard reference</a></p>
            )}
            {lesson.reading && (
              <p className={styles.furtherReading}>Further reading · <a href={lesson.reading.url}>{lesson.reading.title}</a>
                {lesson.section === "CSS Sass" && <> · <a href="https://sass-lang.com/documentation/">Sass documentation</a></>}
              </p>
            )}
            <div className={styles.lessonActions}>
              <button className={`${styles.completeButton} ${completedLessons.includes(lessonKey) ? styles.completedButton : ""}`} type="button" onClick={toggleCompleted}>{completedLessons.includes(lessonKey) ? "✓ Completed" : "Mark as complete"}</button>
              <div className={styles.stepActions}>
                {activeIndex > 0 && <Link prefetch={false} rel="prev" href={topicHref(language.lessons[activeIndex - 1].id)}>← Previous</Link>}
                {activeIndex + 1 < language.lessons.length && <Link className={styles.nextButton} prefetch={false} rel="next" href={topicHref(language.lessons[activeIndex + 1].id)}>Next topic <span aria-hidden="true">→</span></Link>}
              </div>
            </div>
          </article>
        </section>
      </div>
      <footer className={styles.studioFooter}><span>Thoughtful guides for curious builders.</span><span>Made for learning, by Netcoder Technology <b>✳</b></span></footer>
    </div>
  );
}
