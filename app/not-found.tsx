import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found/not-found-view";

export const metadata: Metadata = {
  title: "Page not found | Xorora",
  description:
    "This page isn't on the map. Head home or talk to Xorora about what you were looking for.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function NotFound() {
  return (
    <div className="bg-navy-900">
      <NotFoundView />
    </div>
  );
}
