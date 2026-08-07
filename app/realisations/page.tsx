import type { Metadata } from "next";
import RealisationsContent from "@/components/RealisationsContent";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Découvrez les applications et projets développés par Mathieu Best Studio.",
  alternates: {
    canonical: "https://mathieubeststudio.fr/realisations",
  },
};

export default function RealisationsPage() {
  return <RealisationsContent />;
}
