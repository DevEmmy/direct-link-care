import type { Metadata } from "next";
import ContactSection from "./_components/ContactSection";
import ContactDetailsStrip from "./_components/ContactDetailsStrip";

export const metadata: Metadata = {
  title: "Contact Us | Direct Link Care",
  description:
    "Get in touch with Direct Link Care for referrals or further information. Call, email, or send us a message.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-zinc-50">
      <ContactSection />
      <ContactDetailsStrip />
    </main>
  );
}
