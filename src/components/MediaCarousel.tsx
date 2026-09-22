"use client";

import { useRef, useState } from "react";

type MediaItem = {
  src: string;
  alt: string;
  caption?: string;
};

export default function MediaCarousel({ items }: { items: MediaItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function handleScroll() {
    const el = trackRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActive(Math.min(items.length - 1, Math.max(0, index)));
  }

  function goTo(index: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  if (items.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-[20px]">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex aspect-[3/4] w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <div key={item.src} className="h-full w-full shrink-0 snap-center snap-always">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        {items.length > 1 && (
          <>
            <div className="absolute top-3 right-3 rounded-full bg-black/45 px-2.5 py-1 text-[12px] font-semibold text-white">
              {active + 1}/{items.length}
            </div>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {items.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Bild ${i + 1} anzeigen`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-4 bg-white" : "w-1.5 bg-white/55"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {items[active]?.caption && (
        <p className="mt-2.5 text-[13px] text-[var(--muted-2)]">{items[active].caption}</p>
      )}
    </div>
  );
}
