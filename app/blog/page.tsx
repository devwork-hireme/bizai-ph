import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PostNode {
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  coverImage: { url: string } | null;
}

async function getPosts(): Promise<{ node: PostNode }[]> {
  try {
    const res = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            publication(host: "bizaiph.hashnode.dev") {
              posts(first: 20) {
                edges {
                  node {
                    title
                    brief
                    slug
                    publishedAt
                    coverImage { url }
                  }
                }
              }
            }
          }
        `,
      }),
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data?.data?.publication?.posts?.edges ?? [];
  } catch {
    return [];
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const metadata = {
  title: "Revenue Machine Blog — BizAI PH",
  description:
    "Practical guides on AI automation, lead generation, and digital growth for Philippine businesses.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--black)", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            paddingTop: "140px",
            paddingBottom: "72px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "900px",
              height: "400px",
              background:
                "radial-gradient(ellipse at top, rgba(232,184,75,0.07) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
            <p className="section-label">
              <span>✦</span> Revenue Machine Blog
            </p>
            <h1
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "var(--white)",
                maxWidth: "680px",
                marginBottom: "20px",
              }}
            >
              Guides that actually{" "}
              <span className="gradient-text">grow your business</span>
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.45)",
                fontFamily: "var(--font-dm-sans), sans-serif",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Practical AI automation tips, lead generation tactics, and digital
              growth strategies for Philippine businesses.
            </p>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Posts grid */}
        <section className="section-pad">
          <div className="section-inner">
            {posts.length === 0 ? (
              /* Empty state */
              <div
                style={{
                  textAlign: "center",
                  padding: "80px 20px",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "var(--gold-subtle)",
                    border: "1px solid var(--gold-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: "1.5rem",
                  }}
                >
                  ✦
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: "10px",
                  }}
                >
                  First post coming soon
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.95rem",
                    maxWidth: "360px",
                    margin: "0 auto 32px",
                    lineHeight: 1.7,
                  }}
                >
                  We&apos;re writing practical guides on AI automation and
                  digital growth for Philippine businesses. Check back soon.
                </p>
                <a href="/" className="btn-ghost" style={{ fontSize: "0.9rem" }}>
                  ← Back to home
                </a>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                  gap: "28px",
                }}
              >
                {posts.map(({ node }) => (
                  <BlogCard key={node.slug} post={node} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        {posts.length > 0 && (
          <>
            <hr className="section-divider" />
            <section style={{ padding: "80px 0" }}>
              <div className="section-inner" style={{ textAlign: "center" }}>
                <p className="section-label" style={{ justifyContent: "center" }}>
                  <span>✦</span> Ready to automate?
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "var(--white)",
                    marginBottom: "16px",
                  }}
                >
                  Turn your business into a{" "}
                  <span className="gradient-text">revenue machine</span>
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "1rem",
                    marginBottom: "32px",
                  }}
                >
                  Starting at ₱3,999. Results guaranteed in 30 days.
                </p>
                <a href="/#contact" className="btn-primary">
                  Get More Customers →
                </a>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

function BlogCard({ post }: { post: PostNode }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <article
        className="card-premium"
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(232,184,75,0.3)";
          el.style.transform = "translateY(-4px)";
          el.style.boxShadow =
            "0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,184,75,0.1)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(255,255,255,0.06)";
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        {post.coverImage && (
          <div
            style={{
              width: "100%",
              height: "200px",
              overflow: "hidden",
              borderRadius: "14px 14px 0 0",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage.url}
              alt={post.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
          </div>
        )}
        <div
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            flexGrow: 1,
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "var(--gold)",
              fontFamily: "var(--font-dm-sans), sans-serif",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {formatDate(post.publishedAt)}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "var(--white)",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
            }}
          >
            {post.title}
          </h2>
          {post.brief && (
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.45)",
                fontFamily: "var(--font-dm-sans), sans-serif",
                lineHeight: 1.7,
                flexGrow: 1,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.brief}
            </p>
          )}
          <span
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "var(--gold)",
              fontFamily: "var(--font-dm-sans), sans-serif",
              marginTop: "4px",
            }}
          >
            Read article →
          </span>
        </div>
      </article>
    </a>
  );
}
