"use client";

import { useEffect, useState } from "react";
import { nextEpisode } from "@/lib/episodes";

function getCountdown(targetDate: string) {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

export default function NextEpisodeTeaser() {
  const [countdown, setCountdown] = useState<ReturnType<typeof getCountdown>>(null);

  useEffect(() => {
    setCountdown(getCountdown(nextEpisode.date));
    const interval = setInterval(() => {
      setCountdown(getCountdown(nextEpisode.date));
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!countdown) return null;

  return (
    <div className="mx-auto mt-14 max-w-5xl px-6">
      <div className="flex flex-col items-center gap-6 rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)] p-7 text-center sm:flex-row sm:text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-2xl font-bold text-[var(--background)]">
          ?
        </div>
        <div className="flex-1">
          <div className="font-[family-name:var(--font-caveat)] text-xl font-bold text-[var(--accent-soft)]">
            Nächste Folge
          </div>
          <h3 className="mt-0.5 text-lg font-bold">Zu Gast: ???</h3>
          <p className="mt-1 text-sm text-[var(--muted-2)]">
            {new Date(nextEpisode.date).toLocaleDateString("de-CH", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="flex shrink-0 gap-4">
          {[
            { value: countdown.days, label: "Tage" },
            { value: countdown.hours, label: "Std" },
            { value: countdown.minutes, label: "Min" },
          ].map((unit) => (
            <div key={unit.label} className="text-center">
              <div className="text-2xl font-bold text-[var(--accent)]">{unit.value}</div>
              <div className="text-[11px] tracking-wide text-[var(--muted-2)] uppercase">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
