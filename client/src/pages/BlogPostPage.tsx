import { useRoute, Link } from "wouter";
import {
  ArrowLeft,
  Calendar,
  User,
  Twitter,
  Linkedin,
  LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getBlogPost } from "@/lib/blog";
import BlogPost from "@/components/BlogPost";
import { useToast } from "@/hooks/use-toast";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { toast } = useToast();

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: () => getBlogPost(slug),
    enabled: !!slug,
  });

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || "Blog Post";

    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "The blog post URL has been copied to your clipboard.",
        });
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <Link
              href="/blog"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors inline-flex items-center"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </nav>

          <article className="animate-pulse">
            <header className="mb-12">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4" />
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
            </header>

            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-gray-200 dark:bg-gray-700 rounded"
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <Link
              href="/blog"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors inline-flex items-center"
              data-testid="back-to-blog"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </nav>

          <div className="text-center py-12" data-testid="blog-post-error">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors inline-flex items-center"
            data-testid="back-to-blog"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
        </nav>

        <article className="blog-content">
          <header className="mb-12">
            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span data-testid="blog-post-date">{post.date}</span>
              <span className="mx-2">•</span>
              <span data-testid="blog-post-read-time">{post.readTime}</span>
              <span className="mx-2">•</span>
              <User className="w-4 h-4 mr-1" />
              <span data-testid="blog-post-author">Prayatna Bhattarai</span>
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
              data-testid="blog-post-title"
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  data-testid={`blog-post-tag-${tag
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none"
            data-testid="blog-post-content"
          >
            <BlogPost content={post.content} />
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <User className="text-white" />
                </div>
                <div>
                  <p
                    className="font-semibold text-gray-900 dark:text-white"
                    data-testid="author-name"
                  >
                    Prayatna Bhattarai
                  </p>
                  <p
                    className="text-sm text-gray-600 dark:text-gray-300"
                    data-testid="author-title"
                  >
                    Software Engineer
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("twitter")}
                  className="p-2"
                  data-testid="share-twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("linkedin")}
                  className="p-2"
                  data-testid="share-linkedin"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("copy")}
                  className="p-2"
                  data-testid="share-copy"
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
