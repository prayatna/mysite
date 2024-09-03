import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface Frontmatter {
  title: string;
  description: string;
  publishedOn: string;
  [key: string]: any; // for any additional properties
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedOn: string;
  [key: string]: any; // for any additional frontmatter properties
}

export async function getBlogPostList(): Promise<BlogPost[]> {
  const fileNames = await readDirectory("/content");

  const blogPosts: BlogPost[] = [];

  for (const fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      ...(frontmatter as Frontmatter),
    });
  }

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export async function loadBlogPost(
  slug: string
): Promise<{ frontmatter: Frontmatter; content: string }> {
  const rawContent = await readFile(`/content/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter: frontmatter as Frontmatter, content };
}

function readFile(localPath: string): Promise<string> {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string): Promise<string[]> {
  return fs.readdir(path.join(process.cwd(), localPath));
}
