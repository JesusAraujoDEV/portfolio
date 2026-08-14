"use client";

import { useEffect } from "react";

const SECTION_IDS = ["about", "experience", "projects", "gustos", "contact"];

/**
 * Watches the section elements and keeps the URL hash in sync with whichever
 * one is currently the primary section in view, using replaceState so
 * scrolling never spams browser history. Never scrolls the page itself.
 */
export function useActiveSectionHash() {
  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    let current: string | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible || visible.target.id === current) return;
        current = visible.target.id;
        const url = new URL(window.location.href);
        url.hash = current;
        window.history.replaceState(null, "", url);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
