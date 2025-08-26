import { parseMarkdown } from '@/lib/markdown';
import { useMemo } from 'react';

interface BlogPostProps {
  content: string;
}

export default function BlogPost({ content }: BlogPostProps) {
  const htmlContent = useMemo(() => parseMarkdown(content), [content]);

  return (
    <div 
      className="blog-content prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      data-testid="markdown-content"
    />
  );
}
