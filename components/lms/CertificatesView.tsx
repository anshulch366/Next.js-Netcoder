"use client";

import Link from "next/link";
import { useState } from "react";
import { AwardIcon, ClockIcon } from "@/components/lms/Icons";
import type { LmsCertificate } from "@/data/lms-courses";
import { useLmsSession } from "@/lib/lms-store";
import s from "./lms.module.css";

export default function CertificatesView() {
  const session = useLmsSession();
  const [previewCert, setPreviewCert] = useState<LmsCertificate | null>(null);

  return (
    <div className={s.pageWidth}>
      <div className={s.breadcrumbBar}>Dashboard / Certificates</div>

      <div className={s.pageHeader}>
        <div>
          <h1 className={s.pageTitle}>Certificates</h1>
          <p className={s.pageSubtitle}>
            Completion certificates unlocked after attending 100% of a selected program&apos;s classes.
          </p>
        </div>
      </div>

      {session.account.certificates.length === 0 ? (
        <div className={s.emptyState}>
          <h3>No certificates earned yet</h3>
          <p className={s.pageSubtitle}>
            Select a course in Explore Courses and attend all program classes to unlock your verified Netcoder certificate.
          </p>
          <Link href="/dashboard/my-learning" className={s.primaryBtn}>
            Open My Learning
          </Link>
        </div>
      ) : (
        <div className={s.moduleGrid}>
          {session.account.certificates.map((cert) => (
            <article key={cert.id} className={s.moduleCard}>
              <div className={s.moduleCardHeader}>
                <span className={`${s.statusBadge} ${s.badgeGreen}`}>
                  <AwardIcon style={{ width: 13, height: 13, marginRight: 5 }} />
                  {cert.status}
                </span>
                <span style={{ fontSize: "0.75rem", color: "#76726f" }}>{cert.issuedOn}</span>
              </div>

              <div>
                <h3>{cert.title}</h3>
                <p className={s.courseMetaLine}>Credential ID: {cert.credentialCode}</p>
              </div>

              <div className={s.courseStatsRow}>
                <span className={s.courseStatItem}>
                  <ClockIcon />
                  {cert.hours}
                </span>
                <span>Awarded to {session.account.profile.fullName}</span>
              </div>

              <div style={{ marginTop: "auto", paddingTop: 6 }}>
                <button
                  type="button"
                  className={s.primaryBtn}
                  onClick={() => setPreviewCert(cert)}
                >
                  View Certificate
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {previewCert && (
        <div className={s.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="cert-modal-title">
          <div className={s.modalCard}>
            <div className={s.infoCardHeader}>
              <h3 id="cert-modal-title">Certificate Preview</h3>
              <button
                type="button"
                className={s.secondaryBtn}
                onClick={() => setPreviewCert(null)}
              >
                Close
              </button>
            </div>

            <div className={s.certificateFrame}>
              <span className={s.softPill} style={{ marginInline: "auto" }}>
                Netcoder Technology LMS
              </span>
              <p style={{ margin: 0, fontSize: "0.82rem" }}>Certificate of Completion</p>
              <h2 className={s.pageTitle} style={{ fontSize: "1.45rem" }}>
                {session.account.profile.fullName}
              </h2>
              <p style={{ margin: "4px 0", fontSize: "0.88rem" }}>
                has successfully attended and completed <strong>{previewCert.title}</strong> ({previewCert.hours})
              </p>
              <p style={{ margin: 0, fontSize: "0.76rem" }}>
                Issued on {previewCert.issuedOn} &middot; Credential {previewCert.credentialCode}
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <button
                type="button"
                className={s.primaryBtn}
                onClick={() => window.print()}
              >
                Print / Save PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
