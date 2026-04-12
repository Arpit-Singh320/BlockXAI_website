import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";
import { PageTransition } from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BlockXAI Limited. Get started today to discuss blockchain and AI solutions for your business.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactContent />
    </PageTransition>
  );
}
