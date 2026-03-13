import type { Metadata } from "next";
import { CardGrid, CtaBanner, PageHero, Section } from "@/components/PageSections";
import { services } from "@/app/siteContent";
import { buildPageMetadata } from "@/app/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore Origin Infinity services across education, IT, human health, NGO connectivity, sustainability, and innovation.",
  path: "/services",
  keywords: ["origin infinity services", "IT services", "education services", "health services"],
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Cross-functional services for"
        gradientTitle=" technology, humanity, and growth."
        description="Origin Infinity offers services across technology, education, healthcare, sustainability, and innovation, helping organizations move from ideas to practical outcomes."
        primaryHref="/contact"
        primaryLabel="Request a quote"
        secondaryHref="/projects"
        secondaryLabel="See projects"
      />

      <Section
        title="Service lines built around real operational needs."
        description="Each service area is structured to explain what the company delivers, where it adds value, and how different teams contribute to measurable progress."
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
        title="Need help choosing the right service lane?"
        description="Start with the contact page and describe the problem, not just the deliverable. That makes it easier to route the work correctly."
      />
    </main>
  );
}
