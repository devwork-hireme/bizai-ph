async function getPost(slug: string) {
  const res = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          publication(host: "bizaiph.hashnode.dev") {
            post(slug: "${slug}") {
              title
              content { html }
              publishedAt
              coverImage { url }
              seo { title description }
            }
          }
        }
      `
    }),
    next: { revalidate: 3600 }
  });
  const data = await res.json();
  return data.data.publication.post;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <a href="/blog" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>
        ← Back to blog
      </a>
      {post.coverImage && (
        <img
          src={post.coverImage.url}
          alt={post.title}
          style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', margin: '24px 0' }}
        />
      )}
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>{post.title}</h1>
      <p style={{ color: '#999', marginBottom: '32px' }}>
        {new Date(post.publishedAt).toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: post.content.html }}
        style={{ lineHeight: '1.8', fontSize: '1.1rem' }}
      />
    </main>
  );
}
