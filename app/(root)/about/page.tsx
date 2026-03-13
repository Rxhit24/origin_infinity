import type { Metadata } from "next";
import { CardGrid, CtaBanner, PageHero, Section, SplitPanel, StatGrid } from "@/components/PageSections";
import { company, companyStats, leaderGroups, leaders, services } from "@/app/siteContent";
import { buildPageMetadata } from "@/app/metadata";
import Label from "@/components/ui/Label";
import H3 from "@/components/ui/H3";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn how Origin Infinity Private Limited combines technology, education, healthcare, sustainability, and social impact to build a stronger future.",
  path: "/about",
  keywords: ["about origin infinity", "company profile", "innovation company india"],
});

const focusAreas = [
  "IT solutions and digital transformation",
  "Website and application development",
  "EdTech and digital learning",
  "HealthTech innovation",
  "Sustainability and green initiatives",
  "NGO connectivity and social impact",
  "Skill development programs",
];

export default function AboutPage() {
  const featuredGroups = leaderGroups.filter((group) =>
    ["it", "education", "environment", "health", "art"].includes(group.slug),
  );

  return (
    <main>
      <PageHero
        eyebrow="About Origin Infinity"
        title="Building a."
        gradientTitle=" skilled, sustainable, and human-centered future."
        description="Origin Infinity Private Limited was founded with a simple belief: innovation matters only when it improves human life. Our work connects digital systems, education, healthcare, sustainability, and social responsibility into practical initiatives that can scale."
        primaryHref="/contact"
        secondaryHref="/services"
      />

      <Section
        title="A multi-service company built around meaningful impact."
        eyebrow="Our Dream"
        description="Origin Infinity brings together technology, education, healthcare, sustainability, and community-focused initiatives under one mission: creating practical work that supports long-term social and economic progress."
      >
        <SplitPanel
          left={
            <div>
              <Label title="What we can do?"/>
              <p className="text-base" style={{ color: "var(--text-secondary)" }}>
                {company.mission} We focus on secure execution, practical skill building,
                responsible operations, and long-term community value instead of surface-level
                digital polish.
              </p>
              <ul className="mt-4" style={{ color: "var(--text-secondary)" }}>
                {focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          }
          right={
            <div>
              <Label title="Vision"/>
              <H3 title="Innovation with humanity, not innovation for its own sake." />
              <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
                The company vision centers on empowering communities, strengthening digital
                ecosystems, expanding access to skills, and creating ethical systems that remain
                useful over time.
              </p>
            </div>
          }
        />
      </Section>

      <Section eyebrow="Scale" title="Signals of momentum">
        <StatGrid stats={companyStats} />
      </Section>

      <Section
        eyebrow="Leadership"
        title="A founder profile shaped across healthcare, education, and technology."
        description="The leadership team reflects a cross-functional background in healthcare, education, innovation, and digital execution, giving the company a broader and more practical decision-making lens."
      >
        <CardGrid
          items={[
            {
              title: leaders.founder.name,
              kicker: leaders.founder.role,
              description: leaders.founder.bio,
              bullets: leaders.founder.focus,
            },
            {
              title: leaders.ngo.name,
              kicker: leaders.ngo.role,
              description: leaders.ngo.bio,
            },
            {
              title: leaders.environment.name,
              kicker: leaders.environment.role,
              description: leaders.environment.bio,
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="Teams"
        title="Members organized by group and working area."
        description="Origin Infinity operates across multiple domains, so the team is easier to understand when grouped by function instead of shown as one undifferentiated list."
      >
        <CardGrid
          items={featuredGroups.map((group) => ({
            title: group.title,
            kicker: `${group.members.length} members`,
            description: group.description,
            bullets: group.members.map((member) => `${member.name} - ${member.role}`),
          }))}
        />
      </Section>

      <Section
        eyebrow="Capabilities"
        title="What the company actively works on."
        description="These service areas show how Origin Infinity applies its experience across multiple domains, from digital platforms and learning support to health, sustainability, and innovation."
      >
        <CardGrid
          items={services.map((service) => ({
            title: service.title,
            kicker: service.kicker,
            description: service.summary,
            bullets: service.bullets,
            href: service.href,
          }))}
        />
      </Section>

      <CtaBanner
        title="Need a partner that can work across sectors, not just one silo?"
        description="Use the contact page to discuss a project, partnership, education initiative, health collaboration, or social-impact program."
      />
    </main>
  );
}
