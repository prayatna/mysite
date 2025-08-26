export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/blog/index.json');
    if (!response.ok) {
      throw new Error('Failed to fetch blog index');
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const [indexResponse, contentResponse] = await Promise.all([
      fetch('/blog/index.json'),
      fetch(`/blog/${slug}.md`)
    ]);

    if (!indexResponse.ok || !contentResponse.ok) {
      throw new Error('Failed to fetch blog post');
    }

    const posts = await indexResponse.json();
    const content = await contentResponse.text();

    const post = posts.find((p: BlogPost) => p.slug === slug);
    if (!post) {
      return null;
    }

    return {
      ...post,
      content,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}
