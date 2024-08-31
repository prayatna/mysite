import { getBlogPostList } from "@/helpers/file-helpers";
import Image from "next/image";

export default async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div>
      {blogPosts.map(({ slug, ...delegated }) => (
        <div key={slug}>
          <p>{delegated.title}</p>
          <p>{delegated.description}</p>
        </div>
      ))}
    </div>
  );
}
