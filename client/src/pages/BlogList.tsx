import { Link } from 'wouter';
import { Calendar, ArrowRight, Code, Server, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { getBlogPosts } from '@/lib/blog';

export default function BlogList() {
  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Blog Posts</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Insights about software development, technology trends, and lessons learned from building applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700" />
                <div className="p-6">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
                  <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const getIconForSlug = (slug: string) => {
    if (slug.includes('react')) return <Code className="text-3xl text-white" />;
    if (slug.includes('microservices')) return <Server className="text-3xl text-white" />;
    if (slug.includes('performance')) return <Rocket className="text-3xl text-white" />;
    return <Code className="text-3xl text-white" />;
  };

  const getGradientForSlug = (slug: string) => {
    if (slug.includes('react')) return 'from-primary-500 to-indigo-600';
    if (slug.includes('microservices')) return 'from-green-500 to-emerald-600';
    if (slug.includes('performance')) return 'from-purple-500 to-pink-600';
    return 'from-blue-500 to-cyan-600';
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Blog Posts</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights about software development, technology trends, and lessons learned from building applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group" data-testid={`blog-card-${post.slug}`}>
              <div className={`aspect-video bg-gradient-to-br ${getGradientForSlug(post.slug)} flex items-center justify-center`}>
                {getIconForSlug(post.slug)}
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span data-testid={`blog-date-${post.slug}`}>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span data-testid={`blog-read-time-${post.slug}`}>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  <Link href={`/blog/${post.slug}`} data-testid={`blog-title-link-${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3" data-testid={`blog-excerpt-${post.slug}`}>
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded" data-testid={`blog-tag-${tag.toLowerCase().replace(' ', '-')}-${post.slug}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors inline-flex items-center"
                  data-testid={`blog-read-more-${post.slug}`}
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-12" data-testid="no-blog-posts">
            <p className="text-gray-600 dark:text-gray-300">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
