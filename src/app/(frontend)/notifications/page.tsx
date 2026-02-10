import NotificationCard from '@/components/NotificationCard';
import SectionHeader from '@/components/SectionHeader';
import { get_nofications } from '@/handler/notification.handler';



export default async function Page() {
      const data = await get_nofications();
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Notifications</h1>
            <p className="text-xl text-blue-100">
              Stay updated with exam dates, job postings, and important announcements
            </p>
          </div>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 py-16">
          <SectionHeader
          type='text'
            title="Latest Updates"
            subtitle="Never miss an important deadline or opportunity"
          />
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data?.docs?.map((notification:any) => (
              <NotificationCard key={notification.id} {...notification} />
            ))}
          </div>
        </div>
      </div>
    );

}
