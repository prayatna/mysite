// Simple markdown parser for basic formatting
export function parseMarkdown(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  html = html.replace(/`([^`]*)`/g, '<code>$1</code>');

  // Links
  html = html.replace(/\[([^\]]*)\]\(([^)]*)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Lists
  html = html.replace(/^\* (.*)$/gm, '<li>$1</li>');
  html = html.replace(/^(\d+)\. (.*)$/gm, '<li>$2</li>');
  
  // Wrap consecutive list items in ul/ol tags
  html = html.replace(/(<li>.*<\/li>)/s, (match) => {
    if (match.includes('<li>')) {
      return `<ul>${match}</ul>`;
    }
    return match;
  });

  // Blockquotes
  html = html.replace(/^> (.*)$/gm, '<blockquote>$1</blockquote>');

  // Paragraphs
  html = html.replace(/^(?!<[hul]|<blockquote|<pre)(.+)$/gm, '<p>$1</p>');

  // Line breaks
  html = html.replace(/\n/g, '<br>');

  return html;
}
