import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Post {
  title: string;
  publishedAt: string;
  content: { html: string };
  coverImage: { url: string } | null;
  seo: { title: string; description: string } | null;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            publication(host: "bizaiph.hashnode.dev") {
              post(slug: "${slug}") {
                title
                publishedAt
                content { html }
                coverImage { url }
                seo { title description }
              }
            }
          }
        `,
      }),
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data?.data?.publication?.post ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.seo?.title ?? `${post.title} — BizAI PH`,
    description:
      post.seo?.description ??
      "Practical AI automation and digital growth insights for Philippine businesses.",
    openGraph: {
      title: post.seo?.title ?? post.title,
      description: post.seo?.description ?? "",
      images: post.coverImage ? [{ url: post.coverImage.url }] : [],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--black)", minHeight: "100vh" }}>
        {/* Top glow */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "300px",
            background:
              "radial-gradient(ellipse at top, rgba(232,184,75,0.05) 0%, transparent 65%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <article style={{ position: "relative", zIndex: 1 }}>
          {/* Cover image */}
          {post.coverImage && (
            <div
              style={{
                width: "100%",
                height: "clamp(240px, 40vw, 480px)",
                overflow: "hidden",
                marginTop: "72px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImage.url}
                alt={post.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* Fade-out bottom */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "120px",
                  background:
                    "linear-gradient(to bottom, transparent, var(--black))",
                  pointerEvents: "none",
                }}
              />
            </div>
          )}

          {/* Article header */}
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: post.coverImage
                ? "48px 24px 0"
                : "140px 24px 0",
            }}
          >
            {/* Back link */}
            <a
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), sans-serif",
                marginBottom: "36px",
                transition: "color 0.2s ease",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.35)")
              }
            >
              ← Back to blog
            </a>

            {/* Date */}
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "var(--gold)",
                fontFamily: "var(--font-dm-sans), sans-serif",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {formattedDate}
            </p>

            {/* Title */}
            <h1
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--white)",
                marginBottom: "48px",
              }}
            >
              {post.title}
            </h1>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(232,184,75,0.3), rgba(232,184,75,0.05) 70%, transparent)",
                marginBottom: "48px",
              }}
            />
          </div>

          {/* Prose content */}
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: "0 24px 100px",
            }}
          >
            <div
              className="blog-prose"
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />
          </div>

          {/* Footer CTA */}
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto 80px",
              padding: "0 24px",
            }}
          >
            <div
              style={{
                borderRadius: "16px",
                border: "1px solid rgba(232,184,75,0.2)",
                background:
                  "linear-gradient(135deg, rgba(232,184,75,0.06) 0%, rgba(232,184,75,0.02) 100%)",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  marginBottom: "12px",
                }}
              >
                ✦ Ready to automate?
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--white)",
                  marginBottom: "12px",
                }}
              >
                Turn your business into a revenue machine
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  marginBottom: "28px",
                }}
              >
                Starting at ₱3,999. Results guaranteed in 30 days.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a href="/#contact" className="btn-primary">
                  Get More Customers →
                </a>
                <a href="/blog" className="btn-ghost">
                  ← More articles
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />

      <style>{`
        .blog-prose {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 1.05rem;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.75);
        }
        .blog-prose h1,
        .blog-prose h2,
        .blog-prose h3,
        .blog-prose h4 {
          font-family: var(--font-syne), sans-serif;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .blog-prose h1 { font-size: clamp(1.6rem, 3vw, 2rem); }
        .blog-prose h2 { font-size: clamp(1.35rem, 2.5vw, 1.65rem); }
        .blog-prose h3 { font-size: 1.2rem; }
        .blog-prose h4 { font-size: 1rem; color: rgba(255,255,255,0.85); }
        .blog-prose p { margin-bottom: 1.5rem; }
        .blog-prose a {
          color: var(--gold);
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s ease;
        }
        .blog-prose a:hover { color: var(--gold-3); }
        .blog-prose strong { color: #ffffff; font-weight: 700; }
        .blog-prose em { font-style: italic; color: rgba(255,255,255,0.7); }
        .blog-prose ul,
        .blog-prose ol {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .blog-prose ul { list-style-type: disc; }
        .blog-prose ol { list-style-type: decimal; }
        .blog-prose li { margin-bottom: 0.5rem; }
        .blog-prose li::marker { color: var(--gold); }
        .blog-prose blockquote {
          border-left: 3px solid var(--gold);
          padding: 12px 20px;
          margin: 2rem 0;
          background: rgba(232,184,75,0.05);
          border-radius: 0 8px 8px 0;
          color: rgba(255,255,255,0.6);
          font-style: italic;
        }
        .blog-prose code {
          font-family: "Fira Code", "Cascadia Code", monospace;
          font-size: 0.875em;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 2px 7px;
          border-radius: 5px;
          color: var(--gold-3);
        }
        .blog-prose pre {
          background: #111111;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 20px 24px;
          overflow-x: auto;
          margin: 2rem 0;
        }
        .blog-prose pre code {
          background: none;
          border: none;
          padding: 0;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.75);
        }
        .blog-prose img {
          width: 100%;
          border-radius: 10px;
          margin: 2rem 0;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .blog-prose hr {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,184,75,0.2), transparent);
          margin: 3rem 0;
        }
        .blog-prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          font-size: 0.9rem;
        }
        .blog-prose th {
          background: rgba(232,184,75,0.08);
          color: var(--gold);
          font-weight: 700;
          text-align: left;
          padding: 10px 14px;
          border: 1px solid rgba(255,255,255,0.08);
          font-family: var(--font-dm-sans), sans-serif;
        }
        .blog-prose td {
          padding: 10px 14px;
          border: 1px solid rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.6);
        }
        .blog-prose tr:hover td { background: rgba(255,255,255,0.02); }
      `}</style>
    </>
  );
}
