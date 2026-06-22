import FadeUp from "@/components/ui/FadeUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Antilinear Technologies",
  description: "Privacy Policy for Antilinear Technologies",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] mb-8">
            Privacy Policy
          </h1>
          <p className="font-serif text-[var(--text-secondary)] text-lg mb-12 leading-relaxed">
            Antilinear Technologies ("we," "us," or "our") operates the
            Antilinear Technologies platform (the "Service"). This page informs
            you of our policies regarding the collection, use, and disclosure of
            personal data when you use our Service and the choices you have
            associated with that data.
          </p>
        </FadeUp>

        <div className="space-y-16">
          {/* Section 1 */}
          <FadeUp delay={0.1}>
            <h2 className="font-mono text-2xl text-[var(--text-primary)] mb-4">
              Information Collection and Use
            </h2>
            <p className="font-serif text-[var(--text-secondary)] mb-6 leading-relaxed">
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>
            <h3 className="font-mono text-xl text-[var(--text-primary)] mb-4 mt-6">
              Types of Data Collected
            </h3>
            <ul className="list-disc pl-6 space-y-6 font-serif text-[var(--text-secondary)] leading-relaxed marker:text-[var(--accent)]">
              <li>
                <strong className="text-[var(--text-primary)] font-semibold">
                  Personal Data:
                </strong>{" "}
                While using our Service, we may ask you to provide us with
                certain personally identifiable information that can be used to
                contact or identify you ("Personal Data"). This includes, but is
                not limited to:
                <ul className="list-[circle] pl-6 mt-4 space-y-2">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                </ul>
              </li>
              <li>
                <strong className="text-[var(--text-primary)] font-semibold">
                  Location Data:
                </strong>{" "}
                We may use and store information about your location if you give
                us permission to do so ("Location Data"). We use this data to
                provide features of our Service.
              </li>
              <li>
                <strong className="text-[var(--text-primary)] font-semibold">
                  Usage Data:
                </strong>{" "}
                We may also collect information on how the Service is accessed
                and used ("Usage Data").
              </li>
            </ul>
          </FadeUp>

          {/* Section 2 */}
          <FadeUp delay={0.2}>
            <h2 className="font-mono text-2xl text-[var(--text-primary)] mb-4">
              Use of Data
            </h2>
            <p className="font-serif text-[var(--text-secondary)] mb-6 leading-relaxed">
              Antilinear Technologies uses the collected data for various
              purposes:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-serif text-[var(--text-secondary)] leading-relaxed marker:text-[var(--accent)]">
              <li>To provide and maintain our Service.</li>
              <li>To notify you about changes to our Service.</li>
              <li>
                To allow you to participate in interactive features of our
                Service when you choose to do so.
              </li>
              <li>To provide customer support.</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our Service.
              </li>
              <li>To monitor the usage of our Service.</li>
              <li>To detect, prevent, and address technical issues.</li>
            </ul>
          </FadeUp>

          {/* Section 3 */}
          <FadeUp delay={0.3}>
            <h2 className="font-mono text-2xl text-[var(--text-primary)] mb-4">
              Data Safety & Disclosure
            </h2>
            <p className="font-serif text-[var(--text-secondary)] mb-6 leading-relaxed">
              We do not sell your personal data. Your information may be
              disclosed only under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-4 font-serif text-[var(--text-secondary)] leading-relaxed marker:text-[var(--accent)]">
              <li>
                <strong className="text-[var(--text-primary)] font-semibold">
                  With Partners:
                </strong>{" "}
                To facilitate communication and transactions you initiate within
                our services.
              </li>
              <li>
                <strong className="text-[var(--text-primary)] font-semibold">
                  Legal Requirements:
                </strong>{" "}
                We may disclose your Personal Data in the good faith belief that
                such action is necessary to comply with a legal obligation
                (e.g., SECP regulations or Pakistani Law).
              </li>
              <li>
                <strong className="text-[var(--text-primary)] font-semibold">
                  Service Providers:
                </strong>{" "}
                We may employ third-party companies (e.g., payment processors)
                to facilitate our Service.
              </li>
            </ul>
          </FadeUp>

          {/* Section 4 */}
          <FadeUp delay={0.4}>
            <h2 className="font-mono text-2xl text-[var(--text-primary)] mb-4">
              Security of Data
            </h2>
            <p className="font-serif text-[var(--text-secondary)] leading-relaxed">
              The security of your data is important to us. We implement
              industry-standard encryption and security protocols to protect
              your information. However, remember that no method of transmission
              over the Internet or method of electronic storage is 100% secure.
            </p>
          </FadeUp>

          {/* Section 5 */}
          <FadeUp delay={0.5}>
            <h2 className="font-mono text-2xl text-[var(--text-primary)] mb-4">
              Data Deletion & Rights
            </h2>
            <p className="font-serif text-[var(--text-secondary)] mb-6 leading-relaxed">
              In compliance with global data protection policies, we provide
              users with the right to delete their data.
            </p>
            <ul className="list-disc pl-6 space-y-4 font-serif text-[var(--text-secondary)] leading-relaxed marker:text-[var(--accent)]">
              <li>
                <strong className="text-[var(--text-primary)] font-semibold">
                  Account Deletion:
                </strong>{" "}
                You may delete your account and all associated personal data
                directly within the App Settings or by contacting us.
              </li>
              <li>
                <strong className="text-[var(--text-primary)] font-semibold">
                  Data Access:
                </strong>{" "}
                You have the right to request a copy of the personal data we
                hold about you.
              </li>
            </ul>
          </FadeUp>

          {/* Section 6 */}
          <FadeUp delay={0.6}>
            <h2 className="font-mono text-2xl text-[var(--text-primary)] mb-4">
              Children's Privacy
            </h2>
            <p className="font-serif text-[var(--text-secondary)] leading-relaxed">
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13.
            </p>
          </FadeUp>

          {/* Section 7 */}
          <FadeUp delay={0.7}>
            <h2 className="font-mono text-2xl text-[var(--text-primary)] mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="font-serif text-[var(--text-secondary)] leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "effective date" at the top.
            </p>
          </FadeUp>

          {/* Section 8 */}
          <FadeUp delay={0.8}>
            <h2 className="font-mono text-2xl text-[var(--text-primary)] mb-4">
              Contact Us
            </h2>
            <p className="font-serif text-[var(--text-secondary)] mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-serif text-[var(--text-secondary)] leading-relaxed marker:text-[var(--accent)]">
              <li>
                <strong className="text-[var(--text-primary)] font-semibold">
                  Email:
                </strong>{" "}
                support@antilinear.com
              </li>
              <li>
                <strong className="text-[var(--text-primary)] font-semibold">
                  Address:
                </strong>{" "}
                Office 501, 5th Floor, Mosaic District, I-8 Markaz, Islamabad
              </li>
            </ul>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
