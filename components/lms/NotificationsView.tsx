"use client";

import { useState } from "react";
import { markAllNotificationsRead, markNotificationRead, useLmsSession } from "@/lib/lms-store";
import s from "./lms.module.css";

export default function NotificationsView() {
  const session = useLmsSession();
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unreadCount = session.account.notifications.filter((n) => !n.read).length;
  const items = session.account.notifications.filter((n) => (filter === "unread" ? !n.read : true));

  return (
    <div>
      <div className={s.breadcrumbBar}>Dashboard / Notifications</div>

      <div className={s.pageHeader}>
        <div>
          <h1 className={s.pageTitle}>Notifications</h1>
          <p className={s.pageSubtitle}>
            Class announcements, unlocked lessons, and assignment updates.
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            type="button"
            className={s.secondaryBtn}
            onClick={() => markAllNotificationsRead()}
          >
            Mark all as read
          </button>
        )}
      </div>

      <div className={s.pillTabsRow}>
        <button
          type="button"
          className={`${s.pillTab} ${filter === "all" ? s.pillTabActive : ""}`}
          onClick={() => setFilter("all")}
        >
          All ({session.account.notifications.length})
        </button>
        <button
          type="button"
          className={`${s.pillTab} ${filter === "unread" ? s.pillTabActive : ""}`}
          onClick={() => setFilter("unread")}
        >
          Unread ({unreadCount})
        </button>
      </div>

      <div className={s.stackList}>
        {items.map((item) => (
          <article
            key={item.id}
            className={s.moduleCard}
            style={{
              background: item.read ? "#fafafa" : "#fff4f1",
              borderColor: item.read ? "#e7e5e3" : "#f7c7bc",
            }}
          >
            <div className={s.moduleCardHeader}>
              <div>
                <h3>{item.title}</h3>
                <p style={{ margin: "4px 0 0", fontSize: "0.85rem" }}>{item.message}</p>
              </div>
              <span className={`${s.statusBadge} ${item.read ? s.badgeNeutral : s.badgeOrange}`}>
                {item.category}
              </span>
            </div>

            <div className={s.exploreCardActions}>
              <span style={{ fontSize: "0.75rem", color: "#76726f" }}>{item.time}</span>
              {!item.read && (
                <button
                  type="button"
                  className={s.inlineActionLink}
                  onClick={() => markNotificationRead(item.id)}
                >
                  Mark as read
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
