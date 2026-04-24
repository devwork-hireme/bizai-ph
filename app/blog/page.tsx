async function getPosts() {
  const res = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
      `
    }),
    next: { revalidate: 3600 }
  });
  const data = await res.json();
  return data.data.publication.posts.edges;
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '40px' }}>
        Revenue Machine Blog
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {posts.map(({ node }: any) => (
          <a
            key={node.slug}
            href={`/blog/${node.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <article style={{ borderBottom: '1px solid #eee', paddingBottom: '32px' }}>
              {node.coverImage && (
                <img
                  src={node.coverImage.url}
                  alt={node.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }}
                />
              )}
              <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '8px' }}>
                {node.title}
              </h2>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{node.brief}</p>
              <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '8px' }}>
                {new Date(node.publishedAt).toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </article>
          </a>
        ))}
      </div>
    </main>
  );
}
