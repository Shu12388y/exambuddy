import { Calendar, Download, ExternalLink } from 'lucide-react';
import Card from './Card';
import { RichText } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'


interface NotificationCardProps {
  title: string;
  createdAt:string,
  content:SerializedEditorState,
  importantdate:string,
  downloadlink:string,
  applylink:string 
}

export default function NotificationCard({
  title,
  createdAt,
  content,
  importantdate,
  downloadlink,
  applylink
}: NotificationCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900 flex-1">{title}</h3>
        <span className="text-sm text-gray-500">{createdAt}</span>
      </div>

      {importantdate && (
        <div className="flex items-center text-sm text-orange-600 bg-orange-50 px-3 py-2 rounded-lg mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="font-semibold">Important Date: {importantdate}</span>
        </div>
      )}

      <p className="text-gray-700 mb-4">
        <RichText data={content}/>
      </p>

      <div className="flex flex-wrap gap-3">
        <a href={downloadlink} download={true}>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </button>
        </a>
        <a href={applylink} target='_blank'>
        <button className="flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          <ExternalLink className="h-4 w-4 mr-2" />
          Apply Now
        </button>
        </a>
      </div>
    </Card>
  );
}
