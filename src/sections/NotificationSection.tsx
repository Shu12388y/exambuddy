import React from 'react'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import NotificationCard from '@/components/NotificationCard'
import { ArrowRight } from 'lucide-react'
import { get_nofications } from '@/handler/notification.handler'

async function NotificationSection() {
  try {
    const data = await get_nofications();
    return (
      <div>
           <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
            type='text'
              title="Latest Notifications"
              subtitle="Stay updated with exam dates, job postings, and important announcements"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {data?.docs?.slice(0, 4).map((notification:any) => (
                <NotificationCard key={notification.id} {...notification} />
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/notifications"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 text-lg"
              >
                View All Notifications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  } catch (error) {
        return(
            <>
            Something went wrong {String(error)}
            </>
        )
  }
}

export default NotificationSection
