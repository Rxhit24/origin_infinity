import type { Metadata } from "next";
import { CtaBanner, PageHero, Section, SplitPanel } from "@/components/PageSections";
import { leaderGroups, leaders } from "@/app/siteContent";
import { buildPageMetadata } from "@/app/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Save Environment",
  description:
    "Origin Infinity environmental services focus on sustainability, agriculture-informed ecological strategy, and long-term environmental responsibility.",
  path: "/services/save-environment",
  keywords: ["save environment", "sustainability services", "environment strategy"],
});

export default function SaveEnvironmentPage() {
  const environmentTeam = leaderGroups.find((group) => group.slug === "environment")?.members ?? [];

  return (
    <main>
      <PageHero
        eyebrow="Save Environment"
        title="Environmental work with "
        gradientTitle="strategy, science, and accountability."
        description="The source page blends sustainability messaging with agronomy expertise and environmental field leadership. This page preserves that positioning in a cleaner structure."
      />

      <Section title="Sustainability that translates into action.">
        <SplitPanel
          left={
            <div>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                {leaders.environment.name}
              </h3>
              <p className="mt-2 text-sm font-medium" style={{ color: "var(--orange-300)" }}>
                {leaders.environment.role}
              </p>
              <p className="mt-4 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
                {leaders.environment.bio}
              </p>
            </div>
          }
          right={
            <div className="space-y-3 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
              <p>Environmental strategy and ecological responsibility</p>
              <p>Agriculture-informed sustainability planning</p>
              <p>Field operations and eco-focused implementation</p>
              <p>Long-term thinking for a healthier planet and stronger communities</p>
            </div>
          }
        />
      </Section>

      <Section eyebrow="Team" title="Environment team">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {environmentTeam.map((member) => (
            <div key={member.name} className="glass rounded-[24px] border p-5 text-center">
              <p className="text-sm font-semibold">{member.name}</p>
              <p className="mt-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Need support for a sustainability or environmental initiative?"
        description="Origin Infinity can support planning, communication, and structured execution for eco-focused work."
      />
    </main>
  );
}
