"use client";

import Link from "next/link";
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

      <section className={s.detailGrid}>
        <div className={s.detailPanel}>
          <span className={s.eyebrow}>WHAT YOU'LL DO</span>
          <h2>From ideas to practice</h2>
          <p>{course.description}</p>
          <div className={s.moduleList}>
            {course.modules.map((module, index) => (
              <div key={module.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{module.title}</strong></div>
            ))}
          </div>
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
