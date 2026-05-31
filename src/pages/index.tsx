import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
// @ts-ignore
import blogPostList from "@site/.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json";

interface BlogPostItem {
  title: string;
  permalink: string;
  unlisted: boolean;
}

export default function Index() {
  const posts: BlogPostItem[] = blogPostList?.items || [];

  return (
    <Layout title="Home" description="All blog posts">
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
        <div style={{ marginTop: "2rem" }}>
          {posts.map((post, index) => (
            <article
              key={index}
              style={{
                marginBottom: "2rem",
                borderBottom: "1px solid var(--ifm-color-emphasis-300)",
              }}
            >
              <Link
                to={post.permalink}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h2 style={{ fontSize: "1.2rem" }}>{post.title}</h2>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}
