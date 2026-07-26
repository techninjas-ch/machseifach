import Image from "next/image";

export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      <Image src="/podcast-logo.png" alt="Mach's eifach" fill className="object-cover" />
    </div>
  );
}

export function Wordmark({
  className = "",
  color = "var(--accent-soft)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={`font-[family-name:var(--font-caveat)] font-bold ${className}`}
      style={{ color }}
    >
      mach&apos;s eifach
    </span>
  );
}
