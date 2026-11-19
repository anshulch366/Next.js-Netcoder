"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useTransition, type ComponentProps, type ReactNode } from "react";

const NavigationContext = createContext<(action: () => void) => void>((action) => action());

export function PageTransition({ children }: { children: ReactNode }) {
  const [pending, startTransition] = useTransition();
  const latestNavigation = useRef(0);

  useEffect(() => {
    const cancel = () => { latestNavigation.current++; };
    window.addEventListener("popstate", cancel);
    return () => window.removeEventListener("popstate", cancel);
  }, []);

  function navigate(action: () => void) {
    const request = ++latestNavigation.current;
    startTransition(async () => {
      // Let the outgoing page paint even when the destination is already cached.
      await new Promise<void>((resolve) => window.setTimeout(resolve, 140));
      if (request === latestNavigation.current) startTransition(action);
    });
  }

  return (
    <NavigationContext.Provider value={navigate}>
      <div className="site-frame" aria-busy={pending}>{children}</div>
    </NavigationContext.Provider>
  );
}

type PageLinkProps = Omit<ComponentProps<typeof Link>, "ref" | "onNavigate">;

export function PageLink({ replace, scroll, transitionTypes, ...props }: PageLinkProps) {
  const anchor = useRef<HTMLAnchorElement>(null);
  const navigate = useContext(NavigationContext);
  const router = useRouter();

  return (
    <Link {...props} ref={anchor} replace={replace} scroll={scroll} transitionTypes={transitionTypes}
      onNavigate={(event) => {
        const target = anchor.current;
        if (!target || (target.pathname === location.pathname && target.search === location.search)) return;
        event.preventDefault();
        const href = target.pathname + target.search + target.hash;
        router.prefetch(href);
        navigate(() => {
          if (replace) router.replace(href, { scroll, transitionTypes });
          else router.push(href, { scroll, transitionTypes });
        });
      }}
    />
  );
}
