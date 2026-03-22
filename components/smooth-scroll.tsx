"use client";

import { useEffect, useRef } from "react";

export function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;

    if (prefersReducedMotion || isTouchDevice) {
      document.body.style.height = "";
      return;
    }

    let current = window.scrollY;
    let target = window.scrollY;
    let frame = 0;
    let resizeObserver: ResizeObserver | null = null;

    const syncHeight = () => {
      document.body.style.height = `${content.scrollHeight}px`;
    };

    const animate = () => {
      target = window.scrollY;
      current += (target - current) * 0.085;

      if (Math.abs(target - current) < 0.1) {
        current = target;
      }

      content.style.transform = `translate3d(0, ${-current}px, 0)`;
      frame = window.requestAnimationFrame(animate);
    };

    syncHeight();
    content.style.willChange = "transform";
    wrapper.style.position = "fixed";
    wrapper.style.inset = "0";
    wrapper.style.width = "100%";
    wrapper.style.overflow = "hidden";

    resizeObserver = new ResizeObserver(syncHeight);
    resizeObserver.observe(content);

    frame = window.requestAnimationFrame(animate);

    const handleResize = () => syncHeight();
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
      document.body.style.height = "";
      content.style.transform = "";
      content.style.willChange = "";
      wrapper.style.position = "";
      wrapper.style.inset = "";
      wrapper.style.width = "";
      wrapper.style.overflow = "";
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
