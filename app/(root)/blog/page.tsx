import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, formatBlogDate } from "@/app/blogData";
import { company } from "@/app/siteContent";
import { buildPageMetadata } from "@/app/metadata";
import { CtaBanner, PageHero, Section } from "@/components/PageSections";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Read Origin Infinity insights on innovation, IT solutions, education, healthcare, sustainability, and social impact.",
  path: "/blog",
  keywords: [
    "Origin Infinity blog",
    "IT solutions blog",
    "education and healthcare insights",
    "sustainability blog India",
  ],
});

export default function BlogPage() {
  const latestPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${company.shortName} Blog`,
    url: `${company.siteUrl}/blog`,
    description: metadata.description,
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: company.siteUrl,
      logo: `${company.siteUrl}/origin_logo.webp`,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${company.siteUrl}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { "@type": "Organization", name: post.author },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <PageHero
        eyebrow="Blog"
        title="Ideas for practical"
        gradientTitle=" innovation and human impact."
        description="Read concise thinking from Origin Infinity on digital systems, education, healthcare, sustainability, and community-focused innovation."
        primaryHref={`/blog/${latestPost.slug}`}
        primaryLabel="Read latest"
        secondaryHref="/contact"
        secondaryLabel="Discuss an idea"
      />

      <Section
        eyebrow="Latest"
        title="Featured insight"
        description="Each article is currently managed from a JSON file, so the content structure is ready to move into a database later."
      >
        <article className="blog-feature-card">
          <Link href={`/blog/${latestPost.slug}`} className="blog-feature-image" aria-label={latestPost.title}>
            <Image
              src={latestPost.coverImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
              priority
            />
          </Link>
          <div className="blog-feature-content">
            <p className="blog-meta">
              {latestPost.category} / {formatBlogDate(latestPost.publishedAt)} / {latestPost.readingTime}
            </p>
            <h2 className="blog-card-title">
              <Link href={`/blog/${latestPost.slug}`}>{latestPost.title}</Link>
            </h2>
            <p className="blog-card-excerpt">{latestPost.excerpt}</p>
            <div className="blog-tag-row">
              {latestPost.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link href={`/blog/${latestPost.slug}`} className="btn-glass btn-primary blog-read-link">
              Read article
            </Link>
          </div>
        </article>
      </Section>

      <Section eyebrow="Articles" title="More from the blog">
        <div className="blog-grid">
          {otherPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link href={`/blog/${post.slug}`} className="blog-card-image" aria-label={post.title}>
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 44vw, 100vw"
                  className="object-cover"
                />
              </Link>
              <div className="blog-card-body">
                <p className="blog-meta">
                  {post.category} / {formatBlogDate(post.publishedAt)}
                </p>
                <h2 className="blog-card-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="blog-inline-link">
                  Continue reading
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Have a topic that should become a public insight?"
        description="Share the idea with Origin Infinity and we can shape it into a useful article, case note, or service explainer."
      />
    </main>
  );
}
