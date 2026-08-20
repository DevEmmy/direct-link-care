import type { Metadata } from "next";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Complaints Policy | Direct Link Care",
  description:
    "How to make a complaint to Direct Link Care, what happens next, and how to escalate if you remain dissatisfied.",
};

export default function ComplaintsPolicyPage() {
  return (
    <main className="flex-1 bg-zinc-50">
      <section className="mx-auto max-w-3xl px-4 pt-10 pb-20 sm:px-6 sm:pt-16 sm:pb-28">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-black">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Legal
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-dark uppercase sm:text-5xl">
            Complaints Policy
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-black/70 sm:text-base">
          <p>
            Direct Link Care welcomes feedback and takes all concerns
            seriously. Making a complaint will not affect the care or support
            you receive.
          </p>

          <div>
            <h2 className="font-heading text-lg font-bold text-black">
              How to make a complaint
            </h2>
            <p className="mt-3">You can speak to any member of staff or contact us:</p>
            <ul className="mt-3 flex flex-col gap-1">
              <li>
                Email:{" "}
                <a href="mailto:info@directlinkcare.com" className="font-semibold text-brand">
                  info@directlinkcare.com
                </a>
              </li>
              <li>
                Telephone:{" "}
                <a href="tel:01865338111" className="font-semibold text-brand">
                  01865 338111
                </a>
              </li>
              <li>
                Address: John Eccles House, Oxford Science Park, Robert Robinson
                Avenue, Oxford, OX4 4GP
              </li>
            </ul>
            <p className="mt-3">
              Please explain what happened, when it happened and what you
              would like us to do.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-black">
              What happens next
            </h2>
            <p className="mt-3">
              We will acknowledge your complaint within three working days. A
              manager will review the concerns, investigate what happened and
              keep you informed. We will provide a written response
              explaining our findings and any action taken.
            </p>
            <p className="mt-3">
              If you need help making a complaint, we can provide information
              in another format or work with your representative or
              advocate.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-black">
              If you remain dissatisfied
            </h2>
            <p className="mt-3">
              Once Direct Link Care has completed its investigation, you may
              contact the Local Government and Social Care Ombudsman:
            </p>
            <ul className="mt-3 flex flex-col gap-1">
              <li>Telephone: 0300 061 0614</li>
              <li>
                Website:{" "}
                <a
                  href="https://www.lgo.org.uk/adult-social-care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand"
                >
                  www.lgo.org.uk/adult-social-care
                </a>
              </li>
              <li>Address: PO Box 4771, Coventry, CV4 0EH</li>
            </ul>
            <p className="mt-3">
              Direct Link Care is regulated by the Care Quality Commission.
              The CQC does not investigate individual complaints, but you can
              share information about your experience with it at{" "}
              <a
                href="https://www.cqc.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand"
              >
                www.cqc.org.uk
              </a>
              .
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
