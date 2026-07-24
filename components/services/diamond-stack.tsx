interface DiamondStackProps {
  active: number;
  count?: number;
  gradientId?: string;
}

export function DiamondStack({
  active,
  count = 4,
  gradientId = "diaActive",
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

  return (
    <svg
      viewBox={`0 0 300 ${viewHeight}`}
      width="100%"
      className="max-w-[340px] overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3A63D8" />
          <stop offset="1" stopColor="#1E3FA8" />
        </linearGradient>
      </defs>
      {order.map((i) => {
        const on = i === active;
        return (
          <path
            key={i}
            d={path(cys[i] ?? startY)}
            fill={on ? `url(#${gradientId})` : "rgba(70,90,180,0.13)"}
            stroke={on ? "none" : "rgba(70,90,180,0.30)"}
            strokeWidth="1"
            style={{
              filter: on
                ? "drop-shadow(0 14px 22px rgba(40,70,180,0.35))"
                : "none",
              transition: "fill .25s, stroke .25s",
            }}
          />
        );
      })}
    </svg>
  );
}
