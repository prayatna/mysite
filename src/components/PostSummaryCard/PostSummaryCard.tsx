import React from "react";
import Link from "next/link";
// import { format } from 'date-fns';

// import Card from '@/components/Card';

// import styles from "./BlogSummaryCard.module.css";

// Define the props interface
interface PostSummaryCardProps {
  slug: string;
  title: string;
  publishedOn: string; // Assuming publishedOn is a string (ISO date)
  description: string;
}

const PostSummaryCard: React.FC<PostSummaryCardProps> = ({
  slug,
  title,
  publishedOn,
  description,
}) => {
  const href = `/blog/${slug}`;
  // const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <div>
      <Link href={href} prefetch={true}>
        {title}
      </Link>
      {/* <time dateTime={publishedOn}>{humanizedDate}</time> */}
      <p>
        {description}
        <Link href={href}>
          Continue reading <span>→</span>
        </Link>
      </p>
    </div>
  );
};

export default PostSummaryCard;
