'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query';
import { get_blog } from '@/handler/blog.handler';
import Link from 'next/link';
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Calendar,  ArrowLeft } from 'lucide-react';


function Page() {
    const {slug} = useParams();
    const {data,isLoading,isError} = useQuery({
        queryKey:['blog'],
        queryFn:()=>get_blog(slug as string)
    });


    if(isLoading){
        return(
            <>
            Loading
            </>
        )
    }

    if(isError){
        return(
            <>
            Something went wrong
            </>
        )
    }

    console.log(data)
    return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white hover:text-blue-100 mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blogs
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{data?.title}</h1>
          <div className="flex flex-wrap gap-6 text-blue-100">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{data?.createdAt}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <img
            src={data?.coverimage}
            alt={data?.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        <div
        className="prose prose-lg max-w-none"
        >
            <RichText data={data?.content}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Page
