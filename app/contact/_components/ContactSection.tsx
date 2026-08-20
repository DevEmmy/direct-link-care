import ContactForm from "./ContactForm";
import ContactIntro from "./ContactIntro";

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-6 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.3fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <ContactIntro />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
