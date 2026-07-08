import { ROUTES } from "@/lib/navigation";
import {
  caseStudyCardAlt,
  caseStudyCardTitle,
} from "@/lib/image-seo";
import type { CaseStudyListItem } from "./types";

export interface CaseStudyCardData {
  href: string;
  img: string;
  tag: string;
  title: string;
  stat: string;
  statLabel: string;
  imageAlt: string;
  imageTitle: string;
}

export function toCaseStudyCard(
  study: CaseStudyListItem,
  options?: { title?: string; tag?: string; metricIndex?: number },
): CaseStudyCardData {
  const metricIndex = options?.metricIndex ?? 0;
  const metric = study.metrics[metricIndex];

  const tag =
    options?.tag ??
    study.tags[0] ??
    study.subtitle.split("·")[0]?.trim() ??
    "";
  const title = options?.title ?? study.title.replace(/\.$/, "");
  const statLabel = metric?.label ?? "";

  return {
    href: ROUTES.caseStudy(study.slug),
    img: study.heroImage,
    tag,
    title,
    stat: metric?.value ?? "",
    statLabel,
    imageAlt: caseStudyCardAlt(study.metaTitle, tag),
    imageTitle: caseStudyCardTitle(statLabel, study.lead),
  };
}

export function toCaseStudyCards(
  studies: CaseStudyListItem[],
  limit?: number,
): CaseStudyCardData[] {
  const slice = limit ? studies.slice(0, limit) : studies;
  return slice.map((study) => toCaseStudyCard(study));
}

export interface CaseStudyTileData {
  href: string;
  img: string;
  tags: string[];
  title: string;
  desc: string;
  stats: [string, string][];
  imageAlt: string;
  imageTitle: string;
}

export function toCaseStudyTile(study: CaseStudyListItem): CaseStudyTileData {
  const tag = study.tags[0] ?? study.subtitle.split("·")[0]?.trim() ?? "";
  const title = study.title.replace(/\.$/, "");
  return {
    href: ROUTES.caseStudy(study.slug),
    img: study.heroImage,
    tags: study.tags.slice(0, 2),
    title,
    desc: study.lead,
    stats: study.metrics
      .slice(0, 2)
      .map((metric) => [metric.value, metric.label] as [string, string]),
    imageAlt: caseStudyCardAlt(study.metaTitle, tag),
    imageTitle: caseStudyCardTitle(
      study.metrics[0]?.label ?? title,
      study.lead,
    ),
  };
}

export function toCaseStudyTiles(
  studies: CaseStudyListItem[],
  limit?: number,
): CaseStudyTileData[] {
  const slice = limit ? studies.slice(0, limit) : studies;
  return slice.map(toCaseStudyTile);
}
