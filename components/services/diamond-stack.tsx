interface DiamondStackProps {
  active: number;
  count?: number;
  gradientId?: string;
  /** Active diamond color scheme */
  tone?: "indigo" | "indigoLight" | "tangerine";
}

const TONES = {
  indigo: {
    stops: ["#3A63D8", "#1E3FA8"] as const,
    idleFill: "rgba(70,90,180,0.13)",
    idleStroke: "rgba(70,90,180,0.30)",
    shadow: "drop-shadow(0 14px 22px rgba(40,70,180,0.35))",
  },
  indigoLight: {
    stops: ["#9398CF", "#6B70B6"] as const,
    idleFill: "rgba(147,152,207,0.18)",
    idleStroke: "rgba(107,112,182,0.35)",
    shadow: "drop-shadow(0 14px 22px rgba(107,112,182,0.35))",
  },
  tangerine: {
    stops: ["#FF8A3D", "#D2540F"] as const,
    idleFill: "rgba(242,107,33,0.12)",
    idleStroke: "rgba(242,107,33,0.32)",
    shadow: "drop-shadow(0 14px 22px rgba(210,84,15,0.35))",
  },
} as const;

export function DiamondStack({
  active,
  count = 4,
  gradientId = "diaActive",
  tone = "indigo",
}: DiamondStackProps) {
  const cx = 150;
  const rx = 104;
  const ry = 46;
  const startY = 66;
  const gap = count > 4 ? 38 : 46;
  const cys = Array.from({ length: count }, (_, i) => startY + i * gap);
  const viewHeight = (cys[count - 1] ?? startY) + ry + 20;
  const path = (cy: number) =>
    `M${cx},${cy - ry} L${cx + rx},${cy} L${cx},${cy + ry} L${cx - rx},${cy} Z`;
  const indices = Array.from({ length: count }, (_, i) => i);
  const order = indices.filter((i) => i !== active).concat(active);
  const colors = TONES[tone];

  return (
    <svg
      viewBox={`0 0 300 ${viewHeight}`}
      width="100%"
      className="max-w-[340px] overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={colors.stops[0]} />
          <stop offset="1" stopColor={colors.stops[1]} />
        </linearGradient>
      </defs>
      {order.map((i) => {
        const on = i === active;
        return (
          <path
            key={i}
            d={path(cys[i] ?? startY)}
            fill={on ? `url(#${gradientId})` : colors.idleFill}
            stroke={on ? "none" : colors.idleStroke}
            strokeWidth="1"
            style={{
              filter: on ? colors.shadow : "none",
              transition: "fill .25s, stroke .25s",
            }}
          />
        );
      })}
    </svg>
  );
}
