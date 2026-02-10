import { ExternalLink } from 'lucide-react';
import Card from './Card';

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  description: string;
}

export default function BookCard({ title, author, cover, description }: BookCardProps) {
  return (
    <Card className="overflow-hidden">
      <img
        src={cover}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">by {author}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
          Buy Book
          <ExternalLink className="ml-2 h-4 w-4" />
        </button>
      </div>
    </Card>
  );
}
