import type { Metadata } from "next";
import { CtaBanner, PageHero, Section, SplitPanel } from "@/components/PageSections";
import { buildPageMetadata } from "@/app/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Innovation Services",
  description:
    "Origin Infinity innovation services focus on future technology, nanotechnology, research, and responsible next-generation systems.",
  path: "/services/innovation",
  keywords: ["innovation services", "nanotechnology", "future technology", "research"],
});

export default function InnovationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Innovation"
        title="Future-focused innovation shaped by "
        gradientTitle="responsibility. "
        description="Origin Infinity explores innovation through emerging technologies, research thinking, and practical experimentation that can lead to useful long-term solutions."
      />

      <Section title="Research-led exploration with practical intent.">
        <SplitPanel
          left={
            <div className="space-y-3 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
              <p>Next-generation technology exploration</p>
              <p>Nanotechnology and scientific thinking</p>
              <p>Applied research with scalable long-term potential</p>
              <p>Innovation systems designed to serve people, not distract from them</p>
            </div>
          }
          right={
            <div className="space-y-3 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
              <p>Future technology, infinite innovation</p>
              <p>Where science meets purposeful execution</p>
              <p>Smart systems for sustainable progress</p>
              <p>Ideas translated into meaningful solutions</p>
            </div>
          }
        />
      </Section>

      <CtaBanner
        title="Have an emerging-tech idea that needs structure?"
        description="Use Origin Infinity for innovation work that benefits from research, digital execution, and human-centered framing."
      />
    </main>
  );
}
