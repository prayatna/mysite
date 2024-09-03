import { getBlogPostList, loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound, redirect } from "next/navigation";

export default async function Blog({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = await loadBlogPost(params.slug);

  return (
    <main>
      <article>
        {/* <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      /> */}
        <div>
          <MDXRemote
            source={content}
            //components={COMPONENT_MAP}
          />
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getBlogPostList();

  return posts.map((b) => ({
    slug: b.slug,
  }));
}
