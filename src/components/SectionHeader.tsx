import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'

interface SectionHeaderProps {
  title: string
  subtitle?: string | SerializedEditorState
  type: 'richeditor' | 'text'
}

export default function SectionHeader({
  title,
  subtitle,
  type,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>

      {subtitle &&
        (type === 'richeditor' ? (
          <RichText data={subtitle as SerializedEditorState} />
        ) : (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle as string}
          </p>
        ))}
    </div>
  )
}
