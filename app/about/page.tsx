import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mathieu Best Studio is an independent digital studio creating websites, mobile apps and digital products.",
  alternates: {
    canonical: "https://mathieubeststudio.fr/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
