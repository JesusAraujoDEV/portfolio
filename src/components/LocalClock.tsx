"use client";

import { useEffect, useState } from "react";

export default function LocalClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("es-VE", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/Caracas",
      }).format(new Date());

    const tick = () => setTime(format());
    const timeout = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(id);
    };
  }, []);

  return (
    <span className="hidden font-mono text-xs tracking-wider text-foreground/70 sm:inline">
      {time ?? "--:--:--"} VET · Valencia, VE
    </span>
  );
}
