"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import { courseEnquiryInfo } from "@/data/course-enquiry";
import { getCourseTotalClasses, type LmsCourse } from "@/data/lms-courses";
import { enrollInCourse, updateStudentProfile, useLmsSession } from "@/lib/lms-store";
import s from "./course-enquiry.module.css";

export default function CourseEnquiryView({ course }: { course: LmsCourse }) {
  const session = useLmsSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [qualification, setQualification] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const info = courseEnquiryInfo(course);

  useEffect(() => {
    if (!session.hydrated) return;
    setName(session.account.profile.fullName);
    setEmail(session.account.profile.email);
    setMobile(session.account.profile.mobile);
    setQualification(session.account.profile.qualification);
  }, [session.hydrated, session.account.id]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !mobile.trim()) {
      setError("Please enter your name, email, and mobile number.");
      return;
    }
    const result = updateStudentProfile({ fullName: name, email, mobile, qualification });
    if (!result.ok) {
      setError(result.error);
      return;
    }
    enrollInCourse(course.id);
    setSubmitted(true);
  }

  return (
    <div className={s.page}>
      <nav className={s.breadcrumb} aria-label="Breadcrumb">
        <Link href="/dashboard/explore">Explore Courses</Link><span>/</span><span>{course.title}</span>
      </nav>

      <section className={s.hero} aria-labelledby="course-enquiry-title">
        <div className={s.heroCopy}>
          <span className={s.eyebrow}>NETCODER TECHNOLOGY · {course.category}</span>
          <h1 id="course-enquiry-title">Your next step starts with <em>{course.title}.</em></h1>
          <p>{course.description}</p>
          <div className={s.heroFacts}>
            <span><strong>{course.durationLabel}</strong> guided learning</span>
            <span><strong>{getCourseTotalClasses(course)}</strong> classes</span>
            <span><strong>{course.level}</strong> level</span>
          </div>
          <div className={s.heroPhoto}>
            <Image src="/images/courses/learning-studio.png" alt="Learners collaborating around a laptop in a training studio" fill sizes="(max-width: 900px) 100vw, 560px" />
          </div>
        </div>

        <div className={s.formCard}>
          {submitted ? (
            <div className={s.confirmation} role="status">
              <span className={s.confirmIcon} aria-hidden="true">✓</span>
              <h2>Course selected</h2>
              <p>{course.title} has been added to My Learning. Your details were saved to your LMS profile.</p>
              <Link className={s.submitButton} href="/dashboard/my-learning">Go to My Learning →</Link>
            </div>
          ) : (
            <>
              <span className={s.formKicker}>JOIN THE LEARNING PATH</span>
              <h2>Interested in {course.title}?</h2>
              <p>Confirm your details to add this course to your Netcoder LMS.</p>
              <form onSubmit={submit} className={s.form}>
                <label>Full name<input required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" /></label>
                <label>Email address<input required type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></label>
                <label>Mobile number<input required type="tel" autoComplete="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Your mobile number" /></label>
                <label>Current qualification <span>(optional)</span><input autoComplete="off" value={qualification} onChange={(e) => setQualification(e.target.value)} placeholder="For example, student or graduate" /></label>
                {error && <p className={s.error} role="alert">{error}</p>}
                <button className={s.submitButton} type="submit">Confirm course selection →</button>
              </form>
              <p className={s.formNote}>Your details stay in your LMS profile on this device.</p>
            </>
          )}
        </div>
      </section>

      <section className={s.highlights} aria-label="Program highlights">
        <div><strong>{course.modules.length}</strong><span>Focused modules</span></div>
        <div><strong>{getCourseTotalClasses(course)}</strong><span>Practical classes</span></div>
        <div><strong>{course.skills.length}</strong><span>Core skills</span></div>
        <div><strong>{course.level}</strong><span>Starting level</span></div>
      </section>

      <section className={s.overview} aria-labelledby="overview-title">
        <div className={s.sectionIntro}>
          <span className={s.eyebrow}>THE COURSE AT A GLANCE</span>
          <h2 id="overview-title">Build skills you can put to work.</h2>
          <p>{course.subtitle}</p>
        </div>
        <div className={s.overviewGrid}>
          <article><span className={s.cardNumber}>01 / DURATION</span><h3>Learn at your pace</h3><p>{course.durationLabel} of course content across {getCourseTotalClasses(course)} classes and {course.modules.length} modules.</p></article>
          <article><span className={s.cardNumber}>02 / WHAT YOU'LL LEARN</span><h3>Practical skills</h3><ul>{course.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>
          <article><span className={s.cardNumber}>03 / TOOLS</span><h3>Tools and methods</h3><ul>{info.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></article>
        </div>
      </section>

      <section className={s.learningApproach} aria-labelledby="approach-title">
        <div className={s.approachPhoto}>
          <Image src="/images/courses/project-workshop.png" alt="Learners planning a hands-on project together" fill sizes="(max-width: 900px) 100vw, 520px" />
        </div>
        <div className={s.approachCopy}>
          <span className={s.eyebrow}>LEARN BY DOING</span>
          <h2 id="approach-title">Learn the idea. Try it. Make it yours.</h2>
          <p>{course.description}</p>
          <ul>
            <li>Follow a structured path through {course.modules.length} modules.</li>
            <li>Practice the topics with the lessons in your LMS workspace.</li>
            <li>Track your classes and revisit skills as you progress.</li>
          </ul>
        </div>
      </section>

      <section className={s.curriculum} aria-labelledby="curriculum-title">
        <div className={s.sectionIntro}>
          <span className={s.eyebrow}>CURRICULUM</span>
          <h2 id="curriculum-title">What you will study</h2>
          <p>A closer look at the modules and lessons included in {course.title}.</p>
        </div>
        <div className={s.curriculumList}>
          {course.modules.map((module, index) => (
            <details key={module.id} className={s.curriculumModule} open={index === 0}>
              <summary><span className={s.moduleIndex}>{String(index + 1).padStart(2, "0")}</span><strong>{module.title}</strong><span className={s.lessonCount}>{module.lessons.length} lessons</span></summary>
              <ul>{module.lessons.map((lesson) => <li key={lesson.id}><span>{lesson.title}</span><small>{lesson.duration}</small><p>{lesson.summary}</p></li>)}</ul>
            </details>
          ))}
        </div>
      </section>

      <section className={s.detailGrid}>
        <div className={s.detailPanel}>
          <span className={s.eyebrow}>TOOLS & METHODS</span>
          <h2>Get familiar with the toolkit</h2>
          <p>These are the tools and methods connected to this learning path.</p>
          <div className={s.toolTags}>{info.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        </div>
        <div className={s.detailPanel}>
          <span className={s.eyebrow}>WHAT'S NEXT</span>
          <h2>Where this can take you</h2>
          <p>{info.opportunities}</p>
          <Link className={s.textLink} href="/dashboard/explore">Explore more courses →</Link>
        </div>
      </section>
    </div>
  );
}
