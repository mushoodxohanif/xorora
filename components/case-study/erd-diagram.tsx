import { KeyRound, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ErdEntity {
  name: string;
  fields: string[];
}

interface ErdDiagramProps {
  entities: ErdEntity[];
  relationships?: string[];
  onDark?: boolean;
  className?: string;
}

function isPrimaryKey(field: string) {
  return /\(PK\)/i.test(field) || /\bPK\b/i.test(field);
}

function isForeignKey(field: string) {
  return /\(FK/i.test(field) || /\bFK\b/i.test(field) || /→/.test(field);
}

export function ErdDiagram({
  entities,
  relationships,
  onDark = true,
  className,
}: ErdDiagramProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {entities.map((entity) => (
          <article
            key={entity.name}
            className={cn(
              "overflow-hidden rounded-[var(--r-lg)] border shadow-xs",
              onDark
                ? "border-white/12 bg-white/[0.04]"
                : "border-border bg-white",
            )}
          >
            <header
              className={cn(
                "flex items-center gap-2 border-b px-4 py-3",
                onDark
                  ? "border-white/10 bg-indigo-500/15"
                  : "border-border bg-indigo-50",
              )}
            >
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-[var(--r-sm)]",
                  onDark
                    ? "bg-indigo-400/20 text-indigo-200"
                    : "bg-xo-indigo/10 text-xo-indigo",
                )}
              >
                <KeyRound className="h-3.5 w-3.5" aria-hidden />
              </span>
              <h4
                className={cn(
                  "m-0 font-sans font-semibold text-[14.5px] tracking-[-0.01em]",
                  onDark ? "text-white" : "text-fg1",
                )}
              >
                {entity.name}
              </h4>
            </header>
            <ul className="m-0 list-none p-0">
              {entity.fields.map((field) => {
                const pk = isPrimaryKey(field);
                const fk = isForeignKey(field);
                return (
                  <li
                    key={field}
                    className={cn(
                      "flex items-start gap-2 border-b px-4 py-2 font-mono text-[12px] leading-snug last:border-b-0",
                      onDark
                        ? "border-white/[0.06] text-white/70"
                        : "border-slate-100 text-fg2",
                      pk &&
                        (onDark
                          ? "bg-tangerine-400/10 text-tangerine-200"
                          : "bg-tangerine-50 text-tangerine-700"),
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 shrink-0 font-bold font-sans text-[9px] uppercase tracking-[0.08em]",
                        pk
                          ? onDark
                            ? "text-tangerine-300"
                            : "text-tangerine-600"
                          : fk
                            ? onDark
                              ? "text-indigo-300"
                              : "text-xo-indigo"
                            : onDark
                              ? "text-white/35"
                              : "text-slate-400",
                      )}
                    >
                      {pk ? "PK" : fk ? "FK" : "·"}
                    </span>
                    <span className="min-w-0 break-words">{field}</span>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>

      {relationships && relationships.length > 0 && (
        <div
          className={cn(
            "mt-4 rounded-[var(--r-lg)] border p-4",
            onDark
              ? "border-white/10 bg-white/[0.03]"
              : "border-border bg-slate-50",
          )}
        >
          <div className="mb-3 flex items-center gap-2">
            <Link2
              className={cn(
                "h-4 w-4",
                onDark ? "text-indigo-300" : "text-xo-indigo",
              )}
              aria-hidden
            />
            <p
              className={cn(
                "m-0 font-mono text-[11px] uppercase tracking-[0.12em]",
                onDark ? "text-white/55" : "text-fg3",
              )}
            >
              Relationships
            </p>
          </div>
          <ul className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2">
            {relationships.map((rel) => (
              <li
                key={rel}
                className={cn(
                  "rounded-[var(--r-md)] border px-3.5 py-2.5 font-sans text-[13.5px] leading-snug",
                  onDark
                    ? "border-white/8 bg-white/[0.03] text-white/72"
                    : "border-border bg-white text-fg2",
                )}
              >
                {rel}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
