import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { get_blogs } from '@/handler/blog.handler';
import {ArrowRight} from "lucide-react"
async function BlogSection() {
    try {
        const data = await get_blogs();
        return (
    <div>
         <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
          type='text'
            title="Latest Blogs"
            subtitle="Expert tips, strategies, and subject-specific guidance for GATE CS"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {data?.docs?.map((blog:any) => (
              <BlogCard key={blog.slug} {...blog} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 text-lg"
            >
              View All Blogs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  )     
    } catch (error) {
        return (
            <>
            Somethin went Wrong {String(error)}
            </>
        )
    }
}

export default BlogSection
