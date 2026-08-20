import type { Metadata } from "next";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Direct Link Care",
  description:
    "How Direct Link Care collects, uses, shares and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-zinc-50">
      <section className="mx-auto max-w-3xl px-4 pt-10 pb-20 sm:px-6 sm:pt-16 sm:pb-28">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-black">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Legal
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-dark uppercase sm:text-5xl">
            Privacy Policy
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-black/70 sm:text-base">
          <p>
            Direct Link Care Ltd is committed to protecting your personal
            information and respecting your privacy.
          </p>

          <div>
            <h2 className="font-heading text-lg font-bold text-black">
              Information we collect
            </h2>
            <p className="mt-3">
              We may collect your name, contact details, enquiry
              information, referral details, employment information and,
              where necessary, health or care information.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-black">
              How we use your information
            </h2>
            <p className="mt-3">We use personal information to:</p>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>Respond to enquiries and referrals</li>
              <li>Assess and deliver care services</li>
              <li>Communicate with families and professionals</li>
              <li>Process job applications</li>
              <li>Manage our legal, safeguarding and regulatory responsibilities</li>
              <li>Improve the quality and security of our services</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-black">Our lawful basis</h2>
            <p className="mt-3">
              We process personal information where it is necessary to
              provide a service, meet a legal obligation, protect someone&apos;s
              vital interests or pursue a legitimate business interest.
              Health and care information is only processed where an
              additional legal condition permits us to do so.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-black">
              Sharing information
            </h2>
            <p className="mt-3">
              We may share relevant information with healthcare
              professionals, local authorities, safeguarding bodies,
              regulators and trusted service providers where necessary and
              lawful. We do not sell personal information.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-black">
              How long we keep information
            </h2>
            <p className="mt-3">
              We retain information only for as long as it is needed for the
              purpose for which it was collected and in accordance with our
              legal, contractual and regulatory retention requirements.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-black">Your rights</h2>
            <p className="mt-3">
              You may have the right to request access to your information,
              ask for inaccurate information to be corrected, request
              deletion or restriction, object to certain uses, or ask for
              your information to be transferred.
            </p>
            <p className="mt-3">
              To exercise your rights, contact{" "}
              <a href="mailto:info@directlinkcare.com" className="font-semibold text-brand">
                info@directlinkcare.com
              </a>
              .
            </p>
            <p className="mt-3">
              If you are dissatisfied with how we use your information, you
              can contact the Information Commissioner&apos;s Office at{" "}
              <a
                href="https://www.ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand"
              >
                www.ico.org.uk
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-black">Contact us</h2>
            <p className="mt-3">
              Direct Link Care Ltd
              <br />
              John Eccles House, Oxford Science Park
              <br />
              Robert Robinson Avenue
              <br />
              Oxford, OX4 4GP
            </p>
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
            </ul>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
