'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { get_resources } from '@/handler/resource.handler'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { useQuery } from '@tanstack/react-query'
import LoadingPage from '@/components/Loading'
import ErrorPage from '@/components/Error'

export default function Page() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['resource'],
    queryFn: get_resources,
  })

  if (isLoading) {
    return <LoadingPage />
  }

  if (isError) {
    return <ErrorPage />
  }
  return (
    <section className="py-16 px-4 bg-gray-50 h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          type="text"
          title="Subject Resources"
          subtitle="Comprehensive study materials, practice problems, and previous year questions"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.docs?.map((subject: any) => (
            <div
              key={subject.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
             
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{subject?.subjectname}</h3>
              <p className="text-gray-600 mb-6">
                <RichText data={subject?.subjectcontent} />
              </p>
              <Link
                href={`/resources/${subject.id}`}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Explore Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
