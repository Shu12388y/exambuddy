import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Card from './Card';

interface BlogCardProps {
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt?: string;
  id:string
  coverimage:string
}

export default function BlogCard({ coverimage, title,id }: BlogCardProps) {
  return (
    <Card className="overflow-hidden">
      <img
        src={coverimage}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
