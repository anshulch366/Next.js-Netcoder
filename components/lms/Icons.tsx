import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function DashboardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1.8" />
      <rect x="13" y="3" width="8" height="8" rx="1.8" />
      <rect x="3" y="13" width="8" height="8" rx="1.8" />
      <rect x="13" y="13" width="8" height="8" rx="1.8" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <polygon points="15.8 8.2 13.7 13.7 8.2 15.8 10.3 10.3 15.8 8.2" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3H12v16H4.5A2.5 2.5 0 0 0 2 21V5.5Z" />
      <path d="M22 5.5A2.5 2.5 0 0 0 19.5 3H12v16h7.5a2.5 2.5 0 0 1 2.5 2V5.5Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function AssignmentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 6a2 2 0 0 1 2-2h4.2l2 2.4H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" />
    </svg>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7.5 21l4.5-2.2 4.5 2.2-1.5-7.5" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6.5 2 6.5H4S6 14 6 9Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.66 0-1.25.4-1.51 1Z" />
    </svg>
  );
}

export function LogoutIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
      <rect x="2" y="13" width="4" height="6" rx="1.5" />
      <rect x="18" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19v1a2 2 0 0 1-2 2h-4" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CheckSquareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="m8.5 12.5 2.5 2.5 4.8-5.5" />
    </svg>
  );
}

export function EditIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

export function EyeIcon({ off, ...props }: IconProps & { off?: boolean }) {
  if (off) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5.5 20 2 12 2 12a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A10.7 10.7 0 0 1 12 4c6.5 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19" />
        <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2 12s3.5-8 10-8 10 8 10 8-3.5 8-10 8-10-8-10-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h12M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#4285F4" d="M21.8 12.23c0-.72-.06-1.4-.18-2.06H12v3.9h5.5a4.7 4.7 0 0 1-2.04 3.08v2.56h3.3c1.93-1.78 3.04-4.4 3.04-7.48Z" />
      <path fill="#34A853" d="M12 22c2.76 0 5.08-.91 6.77-2.47l-3.3-2.56c-.91.61-2.08.98-3.47.98-2.67 0-4.93-1.8-5.74-4.23H2.85v2.64A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.26 13.72A5.99 5.99 0 0 1 5.94 12c0-.6.11-1.17.32-1.72V7.64H2.85A10 10 0 0 0 2 12c0 1.61.39 3.14 1.07 4.36l3.19-2.64Z" />
      <path fill="#EA4335" d="M12 6.05c1.5 0 2.85.52 3.91 1.53l2.93-2.93C17.07 3 14.76 2 12 2A10 10 0 0 0 2.85 7.64l3.41 2.64C7.07 7.85 9.33 6.05 12 6.05Z" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.36 12.76c-.02-2.06 1.68-3.05 1.76-3.1-.96-1.4-2.45-1.59-2.98-1.61-1.26-.13-2.47.74-3.11.74-.64 0-1.63-.72-2.69-.7-1.38.02-2.65.8-3.36 2.04-1.44 2.5-.37 6.2 1.03 8.22.68.99 1.5 2.1 2.57 2.06 1.03-.04 1.42-.67 2.67-.67 1.24 0 1.6.67 2.68.65 1.11-.02 1.81-1.01 2.49-2 .79-1.15 1.11-2.26 1.13-2.32-.03-.01-2.16-.83-2.19-3.31ZM14.32 6.72c.57-.69.95-1.65.85-2.61-.82.03-1.82.55-2.41 1.23-.53.61-.99 1.59-.86 2.53.91.07 1.85-.46 2.42-1.15Z" />
    </svg>
  );
}

export function IndiaFlagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
      <rect width="24" height="5.33" fill="#FF9933" />
      <rect y="5.33" width="24" height="5.34" fill="#FFFFFF" />
      <rect y="10.67" width="24" height="5.33" fill="#138808" />
      <circle cx="12" cy="8" r="1.9" fill="none" stroke="#000080" strokeWidth="0.7" />
      <circle cx="12" cy="8" r="0.5" fill="#000080" />
    </svg>
  );
}
