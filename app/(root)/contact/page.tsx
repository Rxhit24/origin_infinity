import type { Metadata } from "next";
import { CtaBanner, PageHero, Section, SplitPanel } from "@/components/PageSections";
import { company } from "@/app/siteContent";
import { buildPageMetadata } from "@/app/metadata";
import Label from "@/components/ui/Label";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Contact Origin Infinity Private Limited for technology, education, healthcare, sustainability, or collaboration inquiries.",
  path: "/contact",
  keywords: ["contact origin infinity", "origin infinity email", "origin infinity phone"],
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Origin Infinity"
        title="Start the "
        gradientTitle="conversation with clarity."
        description="Contact Origin Infinity to discuss technology, education, healthcare, sustainability, or partnership needs with a team focused on practical collaboration and clear communication."
        primaryLabel="Email Us"
        primaryHref={`mailto:${company.email}`}
        secondaryLabel="View Services"
        secondaryHref="/services"
      />

      <Section
        title="Ready to work together?"
        description="Origin Infinity can support projects in IT, education, healthcare, sustainability, and community-led initiatives. For the fastest response, send a short brief with your goals, timeline, and preferred way to connect."
      >
        <SplitPanel
          left={
            <div className="space-y-6">
              <div>
                <Label title="Contact Details"/>
                <div className="mt-4  text-base" style={{ color: "var(--text-secondary)" }}>
                  <p>{company.phone}</p>
                  <p>{company.email}</p>
                  <p>{company.location}</p>
                </div>
              </div>
              <div>
                <Label title="Best For"/>
                <div className="mt-4 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
                  <p>Project discovery and digital product work</p>
                  <p>Education guidance and Vision Era Education queries</p>
                  <p>Health, NGO, sustainability, and partnership collaboration</p>
                </div>
              </div>
            </div>
          }
          right={
            <div>
              <Label title="Quick Brief"/>
              <ol className="mt-4 space-y-3 text-sm leading-5" style={{ color: "var(--text-secondary)" }}>
                <li>1. What are you trying to build or improve?</li>
                <li>2. Which service area fits best?</li>
                <li>3. What timeline and budget context matters?</li>
                <li>4. Who is the decision maker and preferred contact person?</li>
              </ol>
              <a href={`mailto:${company.email}`} className="btn-glass btn-primary mt-6 inline-flex">
                Send project details
              </a>
            </div>
          }
        />
      </Section>

      <Section eyebrow="Reach" title="Current operating reach">
        <div className="grid gap-4 md:grid-cols-4">
          {company.reach.map((city, index) => (
            <div
              key={city}
              className={`feature-card rounded-[24px] p-6 text-center ${index % 2 === 0 ? "feature-card-orange" : "feature-card-blue"}`}
            >
              <p className="card-title text-lg font-semibold">
                {city}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Prefer a direct email for education-related inquiries?"
        description={`Use ${company.educationEmail} for Vision Era Education communication, or ${company.email} for broader company and project requests.`}
        href={`mailto:${company.educationEmail}`}
        label="Email education team"
      />
    </main>
  );
}
