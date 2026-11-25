import s from "./lms.module.css";
import k from "./skeleton.module.css";

function SkeletonHeader({ breadcrumb }: { breadcrumb: string }) {
  return (
    <>
      <div className={s.breadcrumbBar}>{breadcrumb}</div>
      <div className={s.pageHeader}>
        <div style={{ flex: 1, minWidth: 220 }}>
          <span className={`${k.sk} ${k.titleLg}`} aria-hidden="true" />
          <span className={`${k.sk} ${k.subtitle}`} aria-hidden="true" />
        </div>
        <span className={`${k.skWarm} ${k.btnPrimary}`} aria-hidden="true" />
      </div>
    </>
  );
}

export function DashboardHomeSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading dashboard overview">
      <span className={k.srOnly}>Loading dashboard overview...</span>
      <SkeletonHeader breadcrumb="Dashboard / Overview" />

      <div className={s.heroBanner} aria-hidden="true">
        <span className={`${k.skWarm} ${k.pill}`} style={{ marginBottom: 12 }} />
        <span className={`${k.sk} ${k.titleMd}`} />
        <span className={`${k.sk} ${k.subtitle}`} style={{ marginBottom: 16 }} />
        <span className={`${k.skWarm} ${k.btnPrimary}`} />
      </div>

      <div className={k.kpiFourGrid} aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={s.metricCard}>
            <div className={s.metricTop}>
              <span className={`${k.sk} ${k.labelSm}`} />
              <span className={`${k.sk} ${k.navSkIcon}`} />
            </div>
            <span className={`${k.sk} ${k.statNum}`} />
            <span className={`${k.sk} ${k.lineShort}`} />
          </div>
        ))}
      </div>

      <div className={s.sectionBar} aria-hidden="true">
        <span className={`${k.sk} ${k.titleMd}`} style={{ width: 190 }} />
        <span className={`${k.sk} ${k.labelSm}`} />
      </div>

      <div className={s.featuredGrid} aria-hidden="true">
        {[0, 1].map((i) => (
          <div key={i} className={s.previewCard}>
            <span className={`${k.skWarm} ${k.bannerAspect}`} />
            <div className={k.stackGapSm}>
              <span className={`${k.sk} ${k.titleMd}`} />
              <span className={`${k.sk} ${k.lineShort}`} />
              <span className={`${k.sk} ${k.progressBar}`} />
            </div>
            <div className={k.cardActionsRow}>
              <span className={`${k.skWarm} ${k.btnSmall}`} />
              <span className={`${k.sk} ${k.labelSm}`} />
            </div>
          </div>
        ))}
      </div>

      <div className={s.stepsCard} aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div key={i} className={s.stepRow}>
            <span className={`${k.skWarm} ${k.iconBox}`} />
            <div className={k.stackGapSm} style={{ flex: 1 }}>
              <span className={`${k.sk} ${k.lineMed}`} style={{ height: 16 }} />
              <span className={`${k.sk} ${k.lineShort}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExploreSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading course catalog">
      <span className={k.srOnly}>Loading course catalog...</span>
      <SkeletonHeader breadcrumb="Dashboard / Explore Courses" />

      <span className={`${k.sk} ${k.inputBar}`} aria-hidden="true" />

      <div className={s.mobileFilterBar} aria-hidden="true">
        <span className={`${k.sk} ${k.btnSmall}`} style={{ width: 88, flexShrink: 0 }} />
        <div className={s.mobileCategoryChips}>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`${k.sk} ${k.tabChip}`} />
          ))}
        </div>
      </div>

      <div className={s.exploreLayout} aria-hidden="true">
        <div className={s.filterPanel}>
          <div className={s.filterHeader}>
            <span className={`${k.sk} ${k.labelSm}`} style={{ height: 14 }} />
            <span className={`${k.sk} ${k.labelSm}`} style={{ width: 42 }} />
          </div>
          {[0, 1, 2].map((grp) => (
            <div key={grp} className={s.filterGroup}>
              <span className={`${k.sk} ${k.lineMed}`} style={{ height: 15, marginBottom: 10 }} />
              <div className={k.stackGapSm}>
                <span className={`${k.sk} ${k.line}`} style={{ width: "86%" }} />
                <span className={`${k.sk} ${k.line}`} style={{ width: "72%" }} />
                <span className={`${k.sk} ${k.line}`} style={{ width: "80%" }} />
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className={s.sectionBar}>
            <span className={`${k.sk} ${k.lineMed}`} style={{ width: 180 }} />
            <span className={`${k.sk} ${k.btnSmall}`} style={{ width: 132, height: 32 }} />
          </div>
          <div className={s.exploreGrid}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={s.exploreCard}>
                <span className={`${k.skWarm} ${k.exploreAspect}`} />
                <span className={`${k.skWarm} ${k.pill}`} style={{ width: 92, marginBottom: 0 }} />
                <span className={`${k.sk} ${k.titleMd}`} style={{ width: "88%" }} />
                <span className={`${k.sk} ${k.line}`} />
                <span className={`${k.sk} ${k.lineMed}`} />
                <div className={k.cardActionsRow}>
                  <span className={`${k.sk} ${k.labelSm}`} style={{ width: 64 }} />
                  <span className={`${k.skWarm} ${k.btnSmall}`} style={{ width: 104 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MyLearningSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading my learning workspace">
      <span className={k.srOnly}>Loading my learning workspace...</span>
      <SkeletonHeader breadcrumb="Dashboard / My Learning" />

      <div className={k.kpiFourGrid} aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={s.metricCard}>
            <div className={s.metricTop}>
              <span className={`${k.sk} ${k.labelSm}`} />
              <span className={`${k.sk} ${k.navSkIcon}`} />
            </div>
            <span className={`${k.sk} ${k.statNum}`} />
            <span className={`${k.sk} ${k.lineShort}`} />
          </div>
        ))}
      </div>

      <div className={k.tabsSk} aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`${i === 0 ? k.skWarm : k.sk} ${k.tabChip}`} />
        ))}
      </div>

      <div className={s.learningGrid} aria-hidden="true">
        {[0, 1].map((i) => (
          <div key={i} className={s.learningCard}>
            <span className={`${k.skWarm} ${k.bannerAspect}`} />
            <div className={k.stackGapSm}>
              <span className={`${k.sk} ${k.titleMd}`} />
              <span className={`${k.sk} ${k.lineShort}`} />
            </div>
            <div className={s.attendanceCard}>
              <span className={`${k.sk} ${k.progressBar}`} />
              <div className={s.attendanceCountsGrid}>
                <div className={s.attendanceStatCell}>
                  <span className={`${k.sk} ${k.labelSm}`} />
                  <span className={`${k.sk} ${k.statNum}`} />
                </div>
                <div className={s.attendanceStatCell}>
                  <span className={`${k.sk} ${k.labelSm}`} />
                  <span className={`${k.sk} ${k.statNum}`} />
                </div>
              </div>
            </div>
            <div className={s.programBox}>
              <span className={`${k.sk} ${k.labelSm}`} style={{ width: 120 }} />
              <div className={s.programModuleList}>
                {[0, 1, 2].map((m) => (
                  <div key={m} className={s.programModuleItem}>
                    <span className={`${k.sk} ${k.lineMed}`} />
                    <span className={`${k.sk} ${k.labelSm}`} style={{ width: 52 }} />
                  </div>
                ))}
              </div>
            </div>
            <span className={`${k.skWarm} ${k.btnFull}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CourseDetailSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading course overview and attendance">
      <span className={k.srOnly}>Loading course overview and attendance...</span>
      <div className={s.breadcrumbBar}>Dashboard / My Learning / Course Overview</div>

      <div className={s.heroBanner} aria-hidden="true">
        <div className={s.courseHeroSplit}>
          <div className={k.stackGapSm}>
            <span className={`${k.skWarm} ${k.pill}`} />
            <span className={`${k.sk} ${k.titleLg}`} style={{ width: "86%" }} />
            <span className={`${k.sk} ${k.line}`} />
            <span className={`${k.sk} ${k.lineMed}`} />
            <div className={k.cardActionsRow} style={{ paddingTop: 10 }}>
              <span className={`${k.skWarm} ${k.btnPrimary}`} />
              <span className={`${k.sk} ${k.btnSmall}`} />
            </div>
          </div>
          <div className={k.stackGapSm}>
            <span className={`${k.skWarm} ${k.heroThumbAspect}`} />
            <span className={`${k.sk} ${k.progressBar}`} />
          </div>
        </div>
      </div>

      <div className={s.aboutGrid} aria-hidden="true">
        <div className={s.profileCol}>
          <div className={s.infoCard}>
            <span className={`${k.sk} ${k.titleMd}`} style={{ marginBottom: 14 }} />
            <span className={`${k.sk} ${k.line}`} style={{ marginBottom: 8 }} />
            <span className={`${k.sk} ${k.lineMed}`} style={{ marginBottom: 14 }} />
            {[0, 1, 2].map((r) => (
              <div key={r} className={s.fieldRow}>
                <span className={`${k.sk} ${k.labelSm}`} style={{ marginBottom: 6 }} />
                <span className={`${k.sk} ${k.lineMed}`} />
              </div>
            ))}
          </div>
          <div className={s.infoCard}>
            <span className={`${k.sk} ${k.titleMd}`} style={{ marginBottom: 14 }} />
            <div className={s.attendanceCountsGrid} style={{ marginBottom: 14 }}>
              <div className={s.attendanceStatCell}>
                <span className={`${k.sk} ${k.labelSm}`} />
                <span className={`${k.sk} ${k.statNum}`} />
              </div>
              <div className={s.attendanceStatCell}>
                <span className={`${k.sk} ${k.labelSm}`} />
                <span className={`${k.sk} ${k.statNum}`} />
              </div>
            </div>
            <div className={k.stackGapSm}>
              {[0, 1, 2].map((c) => (
                <span key={c} className={`${k.sk} ${k.inputBar}`} style={{ height: 52, marginBottom: 0 }} />
              ))}
            </div>
          </div>
        </div>

        <div className={s.infoCard}>
          <span className={`${k.sk} ${k.titleMd}`} style={{ marginBottom: 14 }} />
          {[0, 1, 2, 3].map((m) => (
            <div key={m} className={s.syllabusItem}>
              <div className={k.stackGapSm} style={{ flex: 1 }}>
                <span className={`${k.sk} ${k.lineMed}`} />
                <span className={`${k.sk} ${k.line}`} />
              </div>
              <span className={`${k.sk} ${k.labelSm}`} style={{ width: 54 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ModuleCardsSkeleton({ breadcrumb, withSearch = false }: { breadcrumb: string; withSearch?: boolean }) {
  return (
    <div role="status" aria-busy="true" aria-label={`Loading ${breadcrumb}`}>
      <span className={k.srOnly}>Loading {breadcrumb}...</span>
      <SkeletonHeader breadcrumb={breadcrumb} />
      {withSearch && <span className={`${k.sk} ${k.inputBar}`} aria-hidden="true" />}
      <div className={k.tabsSk} aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`${i === 0 ? k.skWarm : k.sk} ${k.tabChip}`} />
        ))}
      </div>
      <div className={s.moduleGrid} aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={s.moduleCard}>
            <div className={s.moduleCardHeader}>
              <span className={`${k.sk} ${k.titleMd}`} />
              <span className={`${k.skWarm} ${k.pill}`} style={{ width: 78, marginBottom: 0 }} />
            </div>
            <span className={`${k.sk} ${k.line}`} />
            <span className={`${k.sk} ${k.lineMed}`} />
            <div className={k.cardActionsRow}>
              <span className={`${k.sk} ${k.labelSm}`} />
              <span className={`${k.skWarm} ${k.btnSmall}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ModuleListSkeleton({ breadcrumb }: { breadcrumb: string }) {
  return (
    <div role="status" aria-busy="true" aria-label={`Loading ${breadcrumb}`}>
      <span className={k.srOnly}>Loading {breadcrumb}...</span>
      <SkeletonHeader breadcrumb={breadcrumb} />
      <div className={k.tabsSk} aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`${i === 0 ? k.skWarm : k.sk} ${k.tabChip}`} />
        ))}
      </div>
      <div className={s.stackList} aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={s.moduleCard}>
            <div className={s.moduleCardHeader}>
              <span className={`${k.sk} ${k.titleMd}`} />
              <span className={`${k.skWarm} ${k.pill}`} style={{ width: 82, marginBottom: 0 }} />
            </div>
            <span className={`${k.sk} ${k.line}`} />
            <span className={`${k.sk} ${k.lineShort}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading student profile">
      <span className={k.srOnly}>Loading student profile...</span>
      <SkeletonHeader breadcrumb="Dashboard / My Profile" />

      <div className={s.identityBanner} aria-hidden="true">
        <div className={s.identityLeft}>
          <span className={`${k.skWarm} ${k.avatarLg}`} />
          <div className={k.stackGapSm}>
            <span className={`${k.sk} ${k.titleMd}`} style={{ width: 170 }} />
            <span className={`${k.sk} ${k.lineShort}`} style={{ width: 200 }} />
          </div>
        </div>
        <span className={`${k.skWarm} ${k.iconBox}`} />
      </div>

      <div className={s.profileGrid} aria-hidden="true">
        <div className={s.profileCol}>
          {[0, 1].map((card) => (
            <div key={card} className={s.infoCard}>
              <div className={s.infoCardHeader}>
                <span className={`${k.sk} ${k.titleMd}`} style={{ width: 165 }} />
                <span className={`${k.skWarm} ${k.iconBox}`} />
              </div>
              {[0, 1, 2, 3].map((row) => (
                <div key={row} className={s.fieldRow}>
                  <span className={`${k.sk} ${k.labelSm}`} style={{ marginBottom: 6 }} />
                  <span className={`${k.sk} ${k.lineMed}`} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={s.profileCol}>
          <div className={s.metricsGrid}>
            {[0, 1].map((m) => (
              <div key={m} className={s.metricCard}>
                <span className={`${k.sk} ${k.labelSm}`} />
                <span className={`${k.sk} ${k.statNum}`} />
                <span className={`${k.sk} ${k.lineShort}`} />
              </div>
            ))}
          </div>
          <div className={s.infoCard}>
            <div className={s.infoCardHeader}>
              <span className={`${k.sk} ${k.titleMd}`} style={{ width: 155 }} />
            </div>
            {[0, 1, 2].map((row) => (
              <div key={row} className={s.fieldRow}>
                <span className={`${k.sk} ${k.labelSm}`} style={{ marginBottom: 6 }} />
                <span className={`${k.sk} ${k.line}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LmsRouteSkeleton({ pathname }: { pathname: string }) {
  if (pathname.startsWith("/dashboard/explore")) return <ExploreSkeleton />;
  if (pathname.startsWith("/dashboard/my-learning")) return <MyLearningSkeleton />;
  if (pathname.startsWith("/dashboard/courses/")) return <CourseDetailSkeleton />;
  if (pathname.startsWith("/dashboard/schedule")) return <ModuleCardsSkeleton breadcrumb="Dashboard / Schedule" />;
  if (pathname.startsWith("/dashboard/assignments")) return <ModuleListSkeleton breadcrumb="Dashboard / Assignments" />;
  if (pathname.startsWith("/dashboard/resources")) return <ModuleCardsSkeleton breadcrumb="Dashboard / Resources" withSearch />;
  if (pathname.startsWith("/dashboard/certificates")) return <ModuleCardsSkeleton breadcrumb="Dashboard / Certificates" />;
  if (pathname.startsWith("/dashboard/profile")) return <ProfileSkeleton />;
  if (pathname.startsWith("/dashboard/notifications")) return <ModuleListSkeleton breadcrumb="Dashboard / Notifications" />;
  if (pathname.startsWith("/dashboard/settings")) {
    return (
      <div role="status" aria-busy="true" aria-label="Loading account settings">
        <span className={k.srOnly}>Loading account settings...</span>
        <SkeletonHeader breadcrumb="Dashboard / Settings" />
        <div className={s.profileGrid} aria-hidden="true">
          {[0, 1].map((card) => (
            <div key={card} className={s.infoCard}>
              <span className={`${k.sk} ${k.titleMd}`} style={{ marginBottom: 14 }} />
              {[0, 1, 2].map((row) => (
                <div key={row} className={s.fieldRow}>
                  <span className={`${k.sk} ${k.labelSm}`} style={{ marginBottom: 6 }} />
                  <span className={`${k.sk} ${k.inputBar}`} style={{ height: 38, marginBottom: 0 }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <DashboardHomeSkeleton />;
}

export function LmsShellSkeleton({ pathname }: { pathname: string }) {
  return (
    <div className={s.lmsShell}>
      <aside className={s.sidebar} aria-hidden="true">
        <div className={s.sidebarHead}>
          <span className={`${k.sk} ${k.brandSk}`} />
        </div>
        <div className={s.navScroll}>
          {[3, 4, 3].map((count, grp) => (
            <div key={grp} className={s.navGroup}>
              <span className={`${k.sk} ${k.labelSm}`} style={{ margin: "0 0 8px 10px" }} />
              <div className={s.navList}>
                {Array.from({ length: count }).map((_, idx) => (
                  <div key={idx} className={k.navSkItem}>
                    <span className={`${k.sk} ${k.navSkIcon}`} />
                    <span className={`${k.sk} ${k.navSkLabel}`} style={{ width: idx % 2 === 0 ? 104 : 88 }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={s.sidebarFooter}>
          <span className={`${k.skWarm} ${k.btnFull}`} />
          <div className={s.supportCard}>
            <span className={`${k.skWarm} ${k.navSkIcon}`} style={{ width: 28, height: 28 }} />
            <div className={k.stackGapSm} style={{ flex: 1 }}>
              <span className={`${k.sk} ${k.lineShort}`} />
              <span className={`${k.sk} ${k.lineMed}`} />
            </div>
          </div>
        </div>
      </aside>

      <div className={s.mainStage}>
        <header className={s.topbar} aria-hidden="true">
          <div className={s.topbarLeft}>
            <span className={`${k.sk} ${k.tileSq} ${s.mobileMenuBtn}`} />
            <span className={`${k.sk} ${k.mobileBrandSk} ${s.mobileTopBrand}`} />
          </div>
          <div className={s.topbarRight}>
            <span className={`${k.sk} ${k.tileSq}`} />
            <span className={`${k.skWarm} ${k.tileSq}`} />
          </div>
        </header>

        <main id="main" className={s.contentSheet}>
          <LmsRouteSkeleton pathname={pathname} />
        </main>
      </div>

      <nav className={s.mobileBottomNav} aria-hidden="true">
        {[0, 1, 2, 3, 4].map((idx) => (
          <div key={idx} className={k.mobileTabSk}>
            <span className={`${k.sk} ${k.navSkIcon}`} />
            <span className={`${k.sk} ${k.labelSm}`} style={{ width: 34, height: 8 }} />
          </div>
        ))}
      </nav>
    </div>
  );
}
