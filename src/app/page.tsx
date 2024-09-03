import PostSummaryCard from "@/components/PostSummaryCard";
import { getBlogPostList } from "@/helpers/file-helpers";

export default async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div>
      <h1>Recent posts:</h1>
      {blogPosts.map(({ slug, ...delegated }) => (
        <PostSummaryCard key={slug} slug={slug} {...delegated} />
        // <div key={slug}>
        //   <p>{delegated.title}</p>
        //   <p>{delegated.description}</p>
        // </div>
      ))}
    </div>
  );
}
