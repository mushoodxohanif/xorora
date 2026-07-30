import { OutcomeGrid } from "@/components/services";

const WHY = [
  {
    icon: "shield-check",
    title: "Certified, industry-trained designers",
    body: "Our UI/UX designers are certified and trained in the discipline, not generalists doing design on the side.",
  },
  {
    icon: "rocket",
    title: "Agile UI/UX design process",
    body: "We work in an agile process, so you see and shape the design as it takes form.",
  },
  {
    icon: "layers",
    title: "Full-cycle design and development",
    body: "We cover the whole path from research and design through to development, under one team.",
  },
  {
    icon: "handshake",
    title: "Multilingual and inclusive UX",
    body: "We design for diverse audiences, so your product works for the people it needs to reach.",
  },
  {
    icon: "gauge",
    title: "Data-driven UX optimization",
    body: "We tune the experience against real user data, not opinion.",
  },
  {
    icon: "target",
    title: "Flexible engagement models",
    body: "We match the engagement to how you want to work, whether a focused project or an ongoing partnership.",
  },
] as const;

export function UiuxWhy() {
  return (
    <OutcomeGrid
      label="Why Xorora"
      title="Why choose our UI/UX design services"
      items={[...WHY]}
      columns={3}
    />
  );
}
