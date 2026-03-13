import type { Metadata } from "next";
import { CtaBanner, PageHero, Section, SplitPanel } from "@/components/PageSections";
import { leaders } from "@/app/siteContent";
import { buildPageMetadata } from "@/app/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "NGO Connectivity",
  description:
    "Origin Infinity NGO Connectivity builds partnerships between organizations, communities, and impact-led programs.",
  path: "/services/ngo-connectivity",
  keywords: ["NGO connectivity", "community partnerships", "social impact"],
});

export default function NgoConnectivityPage() {
  return (
    <main>
      <PageHero
        eyebrow="NGO Connectivity"
        title="Connecting "
        gradientTitle="NGOs, communities, and purposeful action."
        description="Origin Infinity's NGO Connectivity work focuses on bridge-building: connecting people, resources, and institutions so support can move where it is needed most."
      />

      <Section title="Social impact that depends on coordination, not just intent.">
        <SplitPanel
          left={
            <div>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                {leaders.ngo.name}
              </h3>
              <p className="mt-2 text-sm font-medium" style={{ color: "var(--orange-300)" }}>
                {leaders.ngo.role}
              </p>
              <p className="mt-4 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
                {leaders.ngo.bio}
              </p>
            </div>
          }
          right={
            <div className="space-y-3 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
              <p>NGO relationship building and operational alignment</p>
              <p>Community outreach and support activation</p>
              <p>Partnership structures focused on measurable social value</p>
              <p>Coordination with welfare-driven initiatives like Young Udaan Foundation</p>
            </div>
          }
        />
      </Section>

      <CtaBanner
        title="Looking for an NGO, outreach, or social impact partner?"
        description="Origin Infinity can help shape the collaboration framework and communication flow."
      />
    </main>
  );
}
