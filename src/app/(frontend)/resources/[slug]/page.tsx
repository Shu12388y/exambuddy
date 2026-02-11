'use client'

import { useParams } from 'next/navigation'
import DownloadCard from '@/components/DownloadCard'
import SectionHeader from '@/components/SectionHeader'
import { useQuery } from '@tanstack/react-query'
import { get_resource } from '@/handler/resource.handler'
import { RichText } from '@payloadcms/richtext-lexical/react'
import LoadingPage from '@/components/Loading'
import ErrorPage from '@/components/Error'

export default function SubjectDetail() {
  const { slug } = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['resources'],
    queryFn: () => get_resource(slug as string),
    refetchInterval: 8000,
  })

  if (isLoading) {
    return (
      <>
        <LoadingPage />
      </>
    )
  }
  if (isError) {
    return (
      <>
        <ErrorPage />
      </>
    )
  }
  const notesInfo = data?.resourcetypejoin?.docs?.filter(
    (ele: { category: string }) => ele.category === 'notes',
  )
  const dppinfo = data?.resourcetypejoin?.docs?.filter(
    (ele: { category: string }) => ele.category === 'dpps',
  )
  const pyqsinfo = data?.resourcetypejoin?.docs?.filter(
    (ele: { category: string }) => ele.category === 'pyqs',
  )
  const cheatsheetinfo = data?.resourcetypejoin?.docs?.filter(
    (ele: { category: string }) => ele.category === 'cheatsheet',
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-4">{data?.icon}</div>
          <h1 className="text-5xl font-bold mb-4">{data?.subjectname}</h1>
          <p className="text-xl text-blue-100">
            <RichText data={data?.subjectcontent} />
          </p>
        </div>
      </div>

      {notesInfo.length != 0 && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <SectionHeader
            type="text"
            title="Notes"
            subtitle="Comprehensive study notes for complete understanding"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notesInfo.map((ele: any) => {
              return (
                <>
                  <section className="mb-16">
                    <DownloadCard {...ele} />
                  </section>
                </>
              )
            })}
          </div>
        </div>
      )}

      {dppinfo.length != 0 && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <SectionHeader
            type="text"
            title="DPP Practice"
            subtitle="Daily Practice Problems to strengthen your concepts"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dppinfo.map((ele: any) => {
              return (
                <>
                  <section className="mb-16">
                    <DownloadCard {...ele} />
                  </section>
                </>
              )
            })}
          </div>
        </div>
      )}

      {pyqsinfo.length != 0 && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <SectionHeader
            type="text"
            title="Previous Year Questions"
            subtitle="Practice with actual GATE questions from past years"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pyqsinfo.map((ele: any) => {
              return (
                <>
                  <section className="mb-16">
                    <DownloadCard {...ele} />
                  </section>
                </>
              )
            })}
          </div>
        </div>
      )}

      {cheatsheetinfo.length != 0 && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <SectionHeader
            type="text"
            title="Cheat Sheets"
            subtitle="Quick reference sheets for last-minute revision"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cheatsheetinfo.map((ele: any) => {
              return (
                <>
                  <section className="mb-16">
                    <DownloadCard {...ele} />
                  </section>
                </>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
