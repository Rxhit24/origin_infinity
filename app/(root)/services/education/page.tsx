import type { Metadata } from "next";
import { CtaBanner, PageHero, Section, SplitPanel } from "@/components/PageSections";
import { company, leaderGroups } from "@/app/siteContent";
import { buildPageMetadata } from "@/app/metadata";
import Label from "@/components/ui/Label";

export const metadata: Metadata = buildPageMetadata({
  title: "Education Services",
  description:
    "Vision Era Education by Origin Infinity supports students with guidance, registration, admission clarity, and purpose-driven learning.",
  path: "/services/education",
  keywords: ["education services", "vision era education", "student guidance"],
});

export default function EducationPage() {
  const educationTeam = leaderGroups.find((group) => group.slug === "education")?.members ?? [];

  return (
    <main>
      <PageHero
        eyebrow="Education"
        title="Education that gives"
        gradientTitle="students direction, not confusion."
        description="Vision Era Education supports students with clear academic guidance, admission support, and practical learning direction so they can make confident decisions about their future."
      />

      <Section
        title="A more practical approach to student support."
        description="The published content emphasizes learning that supports academic progress, decision-making, and long-term confidence."
      >
        <SplitPanel
          left={
            <div className="space-y-4 text-sm" style={{ color: "var(--text-secondary)" }}>
              <p>Learning with clarity and ease.</p>
              <p>Building stronger academic and professional foundations.</p>
              <p>Receiving more accurate guidance for university admissions.</p>
              <p>Staying aligned with career paths and longer-term goals.</p>
              <p>Using education as a tool for a progressive and developed India.</p>
            </div>
          }
          right={
            <div>
              <Label title="Contact Vision Era Team"/>
              <p className="mt-4 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
                {company.educationEmail}
                <br />
                {company.phone}
              </p>
            </div>
          }
        />
      </Section>

      <Section eyebrow="Team" title="Vision Era Education team">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {educationTeam.map((member) => (
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
        title="Need admission or education guidance?"
        description="Use the contact route or email the education team directly for Vision Era Education support."
        href={`mailto:${company.educationEmail}`}
        label="Contact education team"
      />
    </main>
  );
}
