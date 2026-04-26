import type { Metadata } from "next";
import { CtaBanner, PageHero, Section, SplitPanel } from "@/components/PageSections";
import { leaderGroups, leaders } from "@/app/siteContent";
import { buildPageMetadata } from "@/app/metadata";
import { PersonGrid } from "@/components/PersonCards";

export const metadata: Metadata = buildPageMetadata({
  title: "Human Health Services",
  description:
    "Origin Infinity human health services combine healthcare innovation, pharmacy expertise, lab support, and ethical medical practice.",
  path: "/services/health",
  keywords: ["human health services", "healthcare innovation", "pharmacy support"],
});

export default function HumanHealthPage() {
  const healthTeam = leaderGroups.find((group) => group.slug === "health")?.members ?? [];

  return (
    <main>
      <PageHero
        eyebrow="Human Health"
        title="Health work grounded in "
        gradientTitle="ethics, expertise, and real care."
        description="Origin Infinity's health services combine medical expertise, ethical practice, and operational support to improve care quality, consultation clarity, and health-focused innovation."
      />

      <Section
        title="Medical and health support built around responsibility."
        description="Origin Infinity positions health as a core part of its purpose, with an emphasis on accurate diagnosis, clear consultation, effective treatment support, and professional integrity."
      >
        <SplitPanel
          left={
            <div>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                {leaders.health.name}
              </h3>
              <p className="mt-2 text-sm font-medium" style={{ color: "var(--orange-300)" }}>
                {leaders.health.role}
              </p>
              <p className="mt-4 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
                {leaders.health.bio}
              </p>
            </div>
          }
          right={
            <div className="space-y-3 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
              <p>Pharmacy support and practical health operations</p>
              <p>Lab technician and clinical workflow support</p>
              <p>Medical standards, safety, and ethical practice</p>
              <p>Health-focused innovation with human-centered impact</p>
            </div>
          }
        />
      </Section>

      <Section eyebrow="Team" title="Human health team">
        <PersonGrid people={healthTeam} compact />
      </Section>

      <CtaBanner
        title="Looking to collaborate on a health-focused initiative?"
        description="Use the contact page to discuss healthcare innovation, pharmacy workflows, or human-centered health programs."
      />
    </main>
  );
}
