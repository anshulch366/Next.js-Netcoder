"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AssignmentIcon,
  AwardIcon,
  BellIcon,
  BookIcon,
  CalendarIcon,
  CloseIcon,
  CompassIcon,
  DashboardIcon,
  FolderIcon,
  HeadsetIcon,
  LogoutIcon,
  MenuIcon,
  SettingsIcon,
  UserIcon,
} from "@/components/lms/Icons";
import {
  clearServerSession,
  getFirstInitial,
  logoutStudent,
  markAllNotificationsRead,
  markNotificationRead,
  useLmsSession,
} from "@/lib/lms-store";
import { LmsShellSkeleton } from "./LmsSkeleton";
import s from "./lms.module.css";

interface NavItem {
  label: string;
  href: string;
  icon: typeof DashboardIcon;
  badge?: number;
}

export default function LmsShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const session = useLmsSession();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [expandedNavGroups, setExpandedNavGroups] = useState<Record<string, boolean>>({ Learning: true });
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (session.hydrated && !session.loggedIn) {
      let active = true;
      void clearServerSession().then(() => {
        if (active) router.replace("/login");
      });
      return () => {
        active = false;
      };
    }
  }, [session.hydrated, session.loggedIn, router]);

  useEffect(() => {
    setDrawerOpen(false);
    setNotifOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!notifOpen) return;
    function handleOutside(event: PointerEvent) {
      if (event.target instanceof Node && !popoverRef.current?.contains(event.target)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, [notifOpen]);

  const unreadCount = session.account.notifications.filter((n) => !n.read).length;
  const userInitial = getFirstInitial(session.account.profile.fullName);

  const navGroups: Array<{ title: string; items: NavItem[] }> = [
    {
      title: "Learning",
      items: [
        { label: "Dashboard", href: "/dashboard", icon: DashboardIcon },
        { label: "Explore Courses", href: "/dashboard/explore", icon: CompassIcon },
        { label: "My Learning", href: "/dashboard/my-learning", icon: BookIcon },
      ],
    },
    {
      title: "My Activities",
      items: [
        { label: "Schedule", href: "/dashboard/schedule", icon: CalendarIcon },
        { label: "Assignments", href: "/dashboard/assignments", icon: AssignmentIcon },
        { label: "Resources", href: "/dashboard/resources", icon: FolderIcon },
        { label: "Certificates", href: "/dashboard/certificates", icon: AwardIcon },
      ],
    },
    {
      title: "Account",
      items: [
        { label: "My Profile", href: "/dashboard/profile", icon: UserIcon },
        { label: "Notifications", href: "/dashboard/notifications", icon: BellIcon, badge: unreadCount },
        { label: "Settings", href: "/dashboard/settings", icon: SettingsIcon },
      ],
    },
  ];

  function isActive(href: string) {
    if (href === "/dashboard") return pathname === "/dashboard";
    if (href === "/dashboard/my-learning" && pathname.startsWith("/dashboard/courses/")) {
      return true;
    }
    return pathname === href || pathname.startsWith(href + "/");
  }

  useEffect(() => {
    const activeGroup = navGroups.find((group) => group.items.some((item) => isActive(item.href)));
    if (activeGroup) {
      setExpandedNavGroups((groups) => ({ ...groups, [activeGroup.title]: true }));
    }
  }, [pathname]);

  const mobileTabs = [
    { label: "Home", href: "/dashboard", icon: DashboardIcon },
    { label: "Explore", href: "/dashboard/explore", icon: CompassIcon },
    { label: "My Learn", href: "/dashboard/my-learning", icon: BookIcon },
    { label: "Schedule", href: "/dashboard/schedule", icon: CalendarIcon },
    { label: "Profile", href: "/dashboard/profile", icon: UserIcon },
  ];

  const activeSectionLabel =
    navGroups.flatMap((g) => g.items).find((item) => isActive(item.href))?.label ?? "Student LMS";

  async function handleLogout() {
    await logoutStudent();
    router.push("/login");
  }

  if (!session.hydrated || !session.loggedIn) {
    return <LmsShellSkeleton pathname={pathname} />;
  }

  return (
    <div className={s.lmsShell}>
      {drawerOpen && <div className={s.drawerBackdrop} onClick={() => setDrawerOpen(false)} aria-hidden="true" />}

      <aside className={`${s.sidebar} ${drawerOpen ? s.sidebarOpen : ""}`} aria-label="LMS navigation">
        <div className={s.sidebarHead}>
          <Link href="/dashboard" className={s.brandLink} aria-label="Netcoder Technology Dashboard">
            <Image
              src="/images/logo/logo.png"
              alt="Netcoder Technology"
              width={400}
              height={160}
              priority
              className={s.brandLogo}
            />
          </Link>
          <button
            type="button"
            className={s.drawerCloseBtn}
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className={s.navScroll} aria-label="Student portal menu">
          {navGroups.map((group) => (
            <div key={group.title} className={s.navGroup}>
              <button
                type="button"
                className={s.navGroupLabel}
                aria-expanded={Boolean(expandedNavGroups[group.title])}
                aria-controls={`nav-group-${group.title.toLowerCase().replaceAll(" ", "-")}`}
                onClick={() => setExpandedNavGroups((groups) => ({ ...groups, [group.title]: !groups[group.title] }))}
              >
                <span>{group.title}</span>
                <span className={`${s.navChevron} ${expandedNavGroups[group.title] ? s.navChevronOpen : ""}`} aria-hidden="true">⌄</span>
              </button>
              {expandedNavGroups[group.title] && (
                <ul className={s.navList} id={`nav-group-${group.title.toLowerCase().replaceAll(" ", "-")}`}>
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`${s.navLink} ${active ? s.navLinkActive : ""}`}
                          aria-current={active ? "page" : undefined}
                        >
                          <Icon className={s.navIcon} />
                          <span>{item.label}</span>
                          {item.badge !== undefined && item.badge > 0 && (
                            <span className={s.navBadge}>{item.badge}</span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <div className={s.sidebarFooter}>
          <button type="button" className={s.logoutBtn} onClick={() => void handleLogout()}>
            <LogoutIcon />
            <span>Log Out</span>
          </button>

          <div className={s.supportCard}>
            <span className={s.supportIcon}>
              <HeadsetIcon />
            </span>
            <div>
              <strong className={s.supportTitle}>Need Help?</strong>
              <p className={s.supportText}>We&apos;re here to help you.</p>
              <button type="button" className={s.supportLink} onClick={() => setSupportOpen(true)}>
                Contact Support &rarr;
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div className={s.mainStage}>
        <header className={s.topbar}>
          <div className={s.topbarLeft}>
            <button
              type="button"
              className={s.mobileMenuBtn}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </button>
            <Link href="/dashboard" className={s.mobileTopBrand} aria-label="Netcoder Dashboard">
              <Image
                src="/images/logo/logo.png"
                alt="Netcoder Technology"
                width={400}
                height={160}
                className={s.mobileLogoImg}
              />
              <span className={s.mobilePageBadge}>{activeSectionLabel}</span>
            </Link>
          </div>

          <div className={s.topbarRight} ref={popoverRef}>
            <button
              type="button"
              className={s.iconTile}
              aria-label={`Notifications (${unreadCount} unread)`}
              aria-expanded={notifOpen}
              onClick={() => setNotifOpen((prev) => !prev)}
            >
              <BellIcon />
              {unreadCount > 0 && <span className={s.notifDotBadge}>{unreadCount}</span>}
            </button>

            <Link
              href="/dashboard/profile"
              className={s.avatarTile}
              aria-label={`Open profile for ${session.account.profile.fullName}`}
              title={session.account.profile.fullName}
            >
              {userInitial}
            </Link>

            {notifOpen && (
              <div className={s.notifPopover} role="dialog" aria-label="Recent notifications">
                <div className={s.notifPopoverHead}>
                  <span>Notifications ({unreadCount} unread)</span>
                  {unreadCount > 0 && (
                    <button
                      type="button"
                      className={s.inlineActionLink}
                      onClick={() => markAllNotificationsRead()}
                    >
                      Mark all read
                    </button>
                  )}
                </div>

                <div className={s.notifPopoverList}>
                  {session.account.notifications.slice(0, 4).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`${s.notifPopoverItem} ${!item.read ? s.notifPopoverItemUnread : ""}`}
                      onClick={() => markNotificationRead(item.id)}
                    >
                      <strong>{item.title}</strong>
                      <span>{item.message}</span>
                      <span>{item.time}</span>
                    </button>
                  ))}
                </div>

                <Link
                  href="/dashboard/notifications"
                  className={s.inlineActionLink}
                  onClick={() => setNotifOpen(false)}
                >
                  Open all notifications &rarr;
                </Link>
              </div>
            )}
          </div>
        </header>

        <main id="main" className={s.contentSheet}>
          {children}
        </main>
      </div>

      <nav className={s.mobileBottomNav} aria-label="Mobile quick navigation">
        {mobileTabs.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${s.mobileTabLink} ${active ? s.mobileTabLinkActive : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <Icon className={s.mobileTabIcon} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {supportOpen && (
        <div className={s.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="support-modal-title">
          <div className={s.modalCard}>
            <div className={s.infoCardHeader}>
              <h3 id="support-modal-title">Netcoder Student Support</h3>
              <button
                type="button"
                className={s.secondaryBtn}
                onClick={() => setSupportOpen(false)}
              >
                Close
              </button>
            </div>
            <p className={s.pageSubtitle}>
              Need help with courses, live studio links, or campus training? Reach out to our Dharamshala mentor desk.
            </p>
            <div className={s.infoCard}>
              <div className={s.fieldRow}>
                <span className={s.fieldLabel}>Email Support</span>
                <a className={s.inlineActionLink} href="mailto:info@netcoder.in">
                  info@netcoder.in
                </a>
              </div>
              <div className={s.fieldRow}>
                <span className={s.fieldLabel}>Phone (Mon-Sat, 10 AM - 5 PM)</span>
                <span className={s.fieldValue}>+91 98167 32055 / +91 75908 32055</span>
              </div>
              <div className={s.fieldRow}>
                <span className={s.fieldLabel}>Campus Address</span>
                <span className={s.fieldValue}>
                  1st Floor, Above Gramin Bank, Near Govt. ITI, Dari, Dharamshala (176057)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
