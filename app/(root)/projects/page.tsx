import type { Metadata } from "next";
import { CardGrid, CtaBanner, PageHero, Section, SplitPanel } from "@/components/PageSections";
import { leaders, projects } from "@/app/siteContent";
import { buildPageMetadata } from "@/app/metadata";
import H3 from "@/components/ui/H3";
import Label from "@/components/ui/Label";

export const metadata: Metadata = buildPageMetadata({
  title: "Projects",
  description:
    "Explore Origin Infinity projects across nanotechnology, sustainability, healthcare innovation, and digital transformation.",
  path: "/projects",
  keywords: ["origin infinity projects", "nanotechnology projects", "sustainability projects"],
});

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="Projects that connect"
        gradientTitle="innovation with real-world purpose."
        description="Origin Infinity's published portfolio mixes digital execution, scientific curiosity, healthcare thinking, and sustainability. This page presents those themes in a cleaner portfolio structure."
        primaryHref="/contact"
        primaryLabel="Discuss a project"
        secondaryHref="/about"
        secondaryLabel="About the company"
      />

      <Section
        title="Selected"
        gradientTitle="work areas"
        description="These projects reflect a mix of research, digital execution, sustainability, and healthcare-oriented thinking, showing how the company approaches work across disciplines."
      >
        <CardGrid
          items={projects.map((project) => ({
            title: project.title,
            kicker: project.location,
            description: project.summary,
          }))}
        />
      </Section>

      <Section
        eyebrow="Founder"
        title="Project leadership shaped by"
        gradientTitle="interdisciplinary work."
        description="Project leadership is shaped by experience across multiple sectors, helping the company connect technical delivery with broader human, scientific, and operational goals."
      >
        <SplitPanel
          left={
            <div>
              <H3 title={leaders.founder.name}/>
              <Label title={leaders.founder.role} />
              <p className="mt-5 text-sm leading-5" style={{ color: "var(--text-secondary)" }}>
                  {leaders.founder.bio}
              </p>
            </div>
          }
          right={
            <div>
              <Label title="Core Areas" />
              <ul className="mt-4 text-sm leading-5" style={{ color: "var(--text-secondary)" }}>
                {leaders.founder.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          }
        />
      </Section>

      <CtaBanner
        title="Have a research, digital, health, or sustainability concept that needs execution?"
        description="Use Origin Infinity when the work crosses disciplines and needs a team that can think beyond a narrow service box."
      />
    </main>
  );
}
