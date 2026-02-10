import { Download, FileText } from 'lucide-react';
import Card from './Card';
import { RichText } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

interface DownloadCardProps {
  resoucename:string, 
  resourcelink:string,
  resourcedescription:SerializedEditorState
}

export default function DownloadCard({ resoucename, resourcelink, resourcedescription }: DownloadCardProps) {
  return (
    <Card className=" relative p-6 hover:scale-105 transition-transform h-52">
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          <FileText className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">{resoucename}</h3>
          {resourcedescription && (
            <RichText data={resourcedescription}/>
          )}
        </div>
      </div>
      <a className='bottom-3 absolute hover:cursor-auto' href={resourcelink} download={true}>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
        <Download className="h-4 w-4 mr-2" />
        Download
      </button>
      </a>
    </Card>
  );
}
