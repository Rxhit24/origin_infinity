import type { Metadata } from "next";
import { CtaBanner, PageHero, Section, SplitPanel } from "@/components/PageSections";
import { leaderGroups } from "@/app/siteContent";
import { buildPageMetadata } from "@/app/metadata";
import { PersonGrid } from "@/components/PersonCards";

export const metadata: Metadata = buildPageMetadata({
  title: "IT Services",
  description:
    "Origin Infinity IT services cover websites, applications, APIs, software engineering, data systems, and secure digital transformation.",
  path: "/services/it",
  keywords: ["IT services", "software engineering", "web development", "application development"],
});

export default function ItPage() {
  const engineers = leaderGroups.find((group) => group.slug === "it")?.members ?? [];

  return (
    <main>
      <PageHero
        eyebrow="IT Solution"
        title="Secure, scalable digital systems"
        gradientTitle=" built with engineering discipline."
        description="Origin Infinity delivers IT services that combine web development, application engineering, secure system design, and digital transformation support for growing organizations."
      />

      <Section
        title="Core IT capabilities"
        description="Origin Infinity's IT work spans frontend and backend product development, data systems, APIs, and practical optimization."
      >
        <SplitPanel
          left={
            <div className="space-y-3 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
              <p>Website and web application development</p>
              <p>Backend systems, REST APIs, and authentication flows</p>
              <p>Data operations, analysis support, and business insights</p>
              <p>Optimization, reliability, and maintainable system design</p>
            </div>
          }
          right={
            <div className="space-y-3 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
              <p>Frontend: Vue.js, React, Inertia.js</p>
              <p>Backend: Laravel, Node.js, Express.js</p>
              <p>Data: Python, SQL, Power BI, QlikView, Hadoop, Hive</p>
              <p>Tools: Electron, Puppeteer, API-driven architectures</p>
            </div>
          }
        />
      </Section>

      <Section eyebrow="Team" title="IT experts behind our delivery work">
        <PersonGrid people={engineers} compact />
      </Section>

      <CtaBanner
        title="Need a website, application, API platform, or data-backed system?"
        description="Use the contact page with a short brief and business context. That will make the technical scoping more accurate."
      />
    </main>
  );
}
