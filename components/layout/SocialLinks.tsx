const socials = [
  { label: "Facebook", href: "https://www.facebook.com/netcodertechnology/", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/netcodertechnology/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/@netcodertechnology", icon: "youtube" },
];

export default function SocialLinks({ className, linkClassName }: { className: string; linkClassName: string }) {
  return (
    <nav className={className} aria-label="Social media">
      {socials.map((social) => (
        <a className={linkClassName} href={social.href} key={social.icon} aria-label={social.label}>
          {social.icon === "facebook" && <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" /></svg>}
          {social.icon === "instagram" && <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.7" cy="6.6" r=".8" fill="currentColor" stroke="none" /></svg>}
          {social.icon === "youtube" && <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.7 15.5v-7l6 3.5-6 3.5Z" /></svg>}
        </a>
      ))}
    </nav>
  );
}
