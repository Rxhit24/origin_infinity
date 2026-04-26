import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, formatBlogDate, getBlogPost } from "@/app/blogData";
import { company } from "@/app/siteContent";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: `Blog | ${company.shortName}`,
    };
  }

  const title = `${post.seo.title} | ${company.shortName}`;
  const url = `/blog/${post.slug}`;

  return {
    title,
    description: post.seo.description,
    keywords: [company.shortName, "Origin Infinity", ...post.seo.keywords, ...post.tags],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: post.seo.description,
      url,
      siteName: company.shortName,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.seo.description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo.description,
    image: `${company.siteUrl}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: `${company.siteUrl}/origin_logo.webp`,
      },
    },
    mainEntityOfPage: `${company.siteUrl}/blog/${post.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="blog-article">
        <div className="blog-article-header">
          <Link href="/blog" className="blog-back-link">
            Blog
          </Link>
          <p className="blog-meta">
            {post.category} / {formatBlogDate(post.publishedAt)} / {post.readingTime}
          </p>
          <h1>{post.title}</h1>
          <p className="blog-article-excerpt">{post.excerpt}</p>
          <div className="blog-tag-row blog-tag-row-centered">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="blog-article-image">
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="blog-prose">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="blog-article-footer">
          <p>
            Written by {post.author}. Last updated {formatBlogDate(post.updatedAt)}.
          </p>
          <Link href="/contact" className="btn-glass btn-primary blog-read-link">
            Start a conversation
          </Link>
        </div>
      </article>
    </main>
  );
}
