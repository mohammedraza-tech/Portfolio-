"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const roles = ["Founder", "Scholar", "Developer", "Creative"];

export default function RotatingRole() {
  const wordRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const word = wordRef.current;
    if (!word || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let index = 0;
    const interval = window.setInterval(() => {
      gsap.to(word, {
        opacity: 0,
        y: -8,
        duration: 0.25,
        onComplete: () => {
          index = (index + 1) % roles.length;
          word.textContent = roles[index];
          gsap.fromTo(word, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35 });
        },
      });
    }, 2600);

    return () => {
      window.clearInterval(interval);
      gsap.killTweensOf(word);
    };
  }, []);

  return (
    <p className="role-line">
      <span className="sr-only">A founder, scholar, developer, and creative lives in Bangalore.</span>
      <span aria-hidden="true">A <em ref={wordRef}>Founder</em> lives in Bangalore.</span>
    </p>
  );
}
