import Link from "next/link";
import type { ReactNode } from "react";
import Label from "./ui/Label";
import H2 from "./ui/H2";
import Image from "next/image";
import H3 from "./ui/H3";

function getCardTone(index: number) {
  return index % 2 === 0 ? "orange" : "blue";
}

export function PageHero({
  eyebrow,
  title,
  gradientTitle,
  gradientTitleNewLine = false,
  description,
  imageURL = '',
  primaryHref = "/contact",
  primaryLabel = "Contact Us",
  secondaryHref = "/services",
  secondaryLabel = "Explore Services",
}: {
  eyebrow: string;
  title: string;
  gradientTitle?: string;
  gradientTitleNewLine?: boolean;
  description: string;
  imageURL?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="overflow-hidden md:px-6 pb-20 pt-10 md:pb-24 md:pt-18">
      <div className="px-6 py-4 md:px-0 xl:px-6 xl:mx-20 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[32px]">
          <Label title={eyebrow} />
          <H2 title={title} gradientTitle={gradientTitle} newLine={gradientTitleNewLine}/>
         
          <p
            className="card-text mt-6 max-w-2xl text-base leading-8 md:text-lg"
          >
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-glass btn-primary" style={{ fontSize: "1rem", padding: "14px 36px", borderRadius: "14px" }}>
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="btn-glass btn-secondary" style={{ fontSize: "1rem", padding: "14px 36px", borderRadius: "14px" }}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
        {
          imageURL && (
            <div
              className="relative transition-all duration-500 rounded-xl overflow-hidden hidden md:block min-h-[200px] min-w-[200px]"
              style={{
                filter: `drop-shadow(0 0 40px var(--orange-glow))`,
              }}
            >
              Image
              <Image src={imageURL} fill={true} objectFit='cover' alt='Page Hero Image'/>
            </div>
          )
        }
        
      </div>
    </section>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  gradientTitle,
  gradientTitleNewLine = false,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  gradientTitle?: string;
  gradientTitleNewLine?: boolean;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="px-6 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <Label title={eyebrow} />
          ) : null}
          <H2 title={title} gradientTitle={gradientTitle} newLine={gradientTitleNewLine}/>
          {/* <h2
            className="text-3xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2> */}
          {description ? (
            <p
              className="mt-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function CardGrid({
  items,
}: {
  items: {
    title: string;
    description: string;
    kicker?: string;
    href?: string;
    bullets?: string[];
  }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`feature-card rounded-[28px] p-6 ${getCardTone(index) === "orange" ? "feature-card-orange" : "feature-card-blue"}`}
        >
          {item.kicker ? (
            <p className={`mb-3 text-sm font-medium ${getCardTone(index) === "orange" ? "color-orange-400" : "color-blue-400"}`}>
              {item.kicker}
            </p>
          ) : null}
          <h3 className="card-title text-2xl font-semibold">
            {item.title}
          </h3>
          <p className="card-text mt-4 text-sm leading-7">
            {item.description}
          </p>
          {item.bullets?.length ? (
            <ul className="card-text mt-5 space-y-2 text-sm">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {item.href ? (
            <Link href={item.href} className="btn-glass btn-secondary mt-6" style={{ fontSize: "0.9rem", padding: "12px 22px", borderRadius: "14px", width: "fit-content" }}>
              Learn more
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function StatGrid({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={stat.label} className={`feature-card rounded-[24px] p-6 ${getCardTone(index) === "orange" ? "feature-card-orange" : "feature-card-blue"}`}>
          <p
            className="text-4xl font-bold md:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              background: "var(--gradient-text)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {stat.value}
          </p>
          <p className="card-text mt-3 text-sm leading-7">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function SplitPanel({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="feature-card feature-card-orange rounded-[28px] p-6 md:p-8">{left}</div>
      <div className="feature-card feature-card-blue rounded-[28px] p-6 md:p-8">{right}</div>
    </div>
  );
}

export function CtaBanner({
  title,
  description,
  href = "/contact",
  label = "Start a conversation",
}: {
  title: string;
  description: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="feature-card rounded-[32px] p-8 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
          <div className="max-w-3xl">
            <H3 title={title}/>
            {/* <h2
              className="text-3xl font-bold md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h2> */}
            <p className="mt-4 text-base leading-8" style={{ color: "var(--text-secondary)" }}>
              {description}
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href={href} className="btn-glass btn-primary" style={{ fontSize: "1rem", padding: "14px 36px", borderRadius: "14px" }}>
              {label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
