import FeatureCard from "@/components/ui/FeatureCard";
import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";
import Image from "next/image";
import {
  IoDownloadOutline,
  IoConstructOutline,
  IoEyeOutline,
  IoRocketOutline,
} from "react-icons/io5";

interface Props {}

export default function AboutPage({}: Props) {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-16 pt-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeUp>
            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--text-primary)] mb-6 leading-normal pb-2">
              About Us
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-serif text-[var(--text-primary)] text-lg md:text-xl max-w-4xl mx-auto leading-[1.75]">
              We are a premier digital solutions and IT services firm dedicated
              to engineering custom, enterprise-level software architectures.
              Operating at the intersection of high-performance technology and
              strategic business design, we build bespoke systems tailored for
              the FinTech, E-Commerce, Regulatory, and Governance sectors. Our
              approach ignores generic, off-the-shelf software models. Instead,
              we deep-dive into our client's operational realities to identify
              underlying inefficiencies, security risks, and infrastructural
              bottlenecks. By thoroughly analyzing these distinct organizational
              pain points, we curate highly flexible, robust, and optimized
              digital solutions that protect data integrity and streamline
              regulatory compliance.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10">
              <a
                href="/assets/company_document-flatten.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--text-primary)] text-[var(--bg)] px-8 py-3.5 text-sm rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Company Profile
                <IoDownloadOutline className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-24 lg:py-36 px-6  border-t border-b border-[var(--border)]/15">
        <div className="max-w-7xl mx-auto flex flex-col gap-20 md:gap-32">
          {/* Mission */}
          <FadeUp>
            <div className="max-w-3xl">
              <h2 className="font-mono font-normal text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
                Our Mission
              </h2>
              <p className="font-serif text-[var(--text-primary)] text-xl md:text-2xl leading-[1.75]">
                We help businesses turn useful technology into working products.
                We build AI tools, scalable web systems, and data products
                without the overhead or slow process of a large agency.
              </p>
            </div>
          </FadeUp>

          {/* Values */}
          <div>
            <div className="mb-12">
              <FadeUp>
                <h2 className="font-mono font-normal text-3xl md:text-4xl text-[var(--text-primary)] mt-0 mb-0">
                  Our Values
                </h2>
              </FadeUp>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeUp delay={0.1}>
                <FeatureCard
                  title="Craft over speed"
                  body="We don't cut corners. Every line of code and pixel is intentional."
                  className="border border-dashed border-[var(--border)] rounded-2xl h-full"
                  icon={
                    <IoConstructOutline className="w-10 h-10 text-[var(--icon-color)]" />
                  }
                />
              </FadeUp>
              <FadeUp delay={0.2}>
                <FeatureCard
                  title="Transparency always"
                  body="No hidden agendas or complex contracts. Just honest work and clear communication."
                  className="border border-dashed border-[var(--border)] rounded-2xl h-full"
                  icon={
                    <IoEyeOutline className="w-10 h-10 text-[var(--icon-color)]" />
                  }
                />
              </FadeUp>
              <FadeUp delay={0.3}>
                <FeatureCard
                  title="Ship, then improve"
                  body="We believe in the power of iteration. Get it live, gather data, and make it better."
                  className="border border-dashed border-[var(--border)] rounded-2xl h-full"
                  icon={
                    <IoRocketOutline className="w-10 h-10 text-[var(--icon-color)]" />
                  }
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Organization Section */}
      <section className="py-16 md:py-24 lg:py-36 px-6 border-t border-b border-[var(--border)]/15">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col gap-12 lg:gap-16">
            {/* Top: Logo and Title */}
            <div className="w-full">
              <FadeUp>
                <div className="mb-8">
                  <span className="font-mono text-sm uppercase tracking-widest text-[var(--accent)] font-bold">
                    PARENT ORGANIZATION
                  </span>
                </div>
                <div className="relative w-full h-auto flex items-center justify-start mb-8 overflow-hidden">
                  <Image
                    src="/project-logos/Reliance.avif"
                    alt="Reliance Corporation Ltd Logo"
                    width={480}
                    height={180}
                    className="object-contain max-h-32 lg:max-h-40 origin-left"
                  />
                </div>
                <h2 className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] mt-0 mb-4">
                  Reliance Corp
                </h2>
              </FadeUp>
            </div>

            {/* Bottom: Detailed descriptions */}
            <div className="w-full flex flex-col gap-8 lg:mt-8">
              <FadeUp delay={0.1}>
                <p className="font-serif text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
                  Reliance Corporation (Pvt.) Ltd. is a dynamic and
                  forward-thinking organization with a strong presence across
                  international markets, supported by its sister concerns
                  including Reliance Hardware Technologies and Reliance Link
                  Trading. The Group specializes in import and export solutions
                  for hardware, IT equipment, and advanced technology systems,
                  offering comprehensive procurement and logistics services to a
                  diverse client base. With a firm commitment to customer
                  satisfaction, operational excellence, and reliability,
                  Reliance has established itself as a trusted partner for
                  businesses seeking efficient and cost-effective solutions.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="font-serif text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
                  Building upon this foundation, the Group delivers cutting-edge
                  technology solutions across a wide spectrum of sectors,
                  including Robotics & Smart Machines, Artificial Intelligence,
                  Software Systems, Data Processing Solutions, IT & Biometrics,
                  Smart and Electronic Cards, Payment Devices, and associated
                  spare parts. Driven by a commitment to quality, integrity, and
                  innovation, Reliance Corporation continues to play a pivotal
                  role in introducing advanced technologies and delivering
                  tailored solutions, ensuring sustained growth and long-term
                  value for its partners and stakeholders.
                </p>
              </FadeUp>

              {/* Mission, Dedication, Vision Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 pt-8 border-t border-[var(--border)]/20">
                <FadeUp delay={0.3}>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-[var(--text-primary)] mb-3 font-semibold">
                    Mission
                  </h4>
                  <p className="font-serif text-[var(--text-muted)] text-sm leading-relaxed">
                    Our mission is to empower organizations and governments with
                    advanced technological solutions that enhance security,
                    efficiency, and productivity.
                  </p>
                </FadeUp>
                <FadeUp delay={0.4}>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-[var(--text-primary)] mb-3 font-semibold">
                    Dedication
                  </h4>
                  <p className="font-serif text-[var(--text-muted)] text-sm leading-relaxed">
                    Bridging global innovation and mission-critical needs, we
                    empower government and local partners through strategic
                    oversight and technical expertise to maximize technological
                    potential.
                  </p>
                </FadeUp>
                <FadeUp delay={0.5}>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-[var(--text-primary)] mb-3 font-semibold">
                    Vision
                  </h4>
                  <p className="font-serif text-[var(--text-muted)] text-sm leading-relaxed">
                    To be recognized as a global leader in technology and
                    security solutions, setting the standard for excellence and
                    innovation in every facet of our business.
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>

          {/* Strategic Partners 
          <div className="pt-16 border-t border-[var(--border)]/15">
            <FadeUp>
              <h3 className="font-mono font-normal text-2xl md:text-3xl text-[var(--text-primary)] mb-10">
                Strategic Partners
              </h3>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20"> */}
          {/* TeraRare Solutions Card */}
          {/* <FadeUp delay={0.1}>
                <a
                  href="https://www.terarare.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start group"
                >
                  <div className="relative w-full h-20 md:h-28 flex items-center justify-start mb-6 overflow-hidden">
                    <Image
                      src="/project-logos/terarare.svg"
                      alt="TeraRare Solutions Logo"
                      width={280}
                      height={100}
                      className="object-contain max-h-16 md:max-h-24 transition-transform duration-500 group-hover:scale-105 origin-left"
                    />
                  </div>
                  <h3 className="font-mono text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    TeraRare Solutions
                  </h3>
                  <p className="font-serif text-[var(--text-secondary)] text-sm md:text-base leading-relaxed max-w-md">
                    A dynamic software agency specializing in innovative digital
                    products, enterprise web solutions, and custom software
                    development.
                  </p>
                </a>
              </FadeUp> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 lg:py-36 px-6">
        <FadeUp>
          <div className="max-w-5xl mx-auto text-center bg-accent/5 border-t border-b border-dashed border-accent/20  p-8 md:p-12">
            <h2 className="font-mono font-normal text-2xl md:text-3xl text-[var(--text-primary)] mb-3 leading-relaxed pb-2">
              Ready to build something great?
            </h2>
            <p className="font-serif text-[var(--text-primary)] text-lg mb-8 max-w-lg mx-auto leading-[1.75]">
              Let's discuss how our technical intelligence can accelerate your
              next big project.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--text-primary)] text-[var(--bg)] px-8 py-3.5 text-sm rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get Started Today
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
