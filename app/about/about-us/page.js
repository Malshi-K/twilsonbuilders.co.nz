"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import BOTH components with no SSR
const PageTitle = dynamic(() => import("@/components/PageTitle"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] md:h-[600px] bg-gray-200 animate-pulse"></div>
  )
});

const AboutSection = dynamic(() => import("@/components/about/AboutSection"), {
  ssr: false,
  loading: () => (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded-md w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded-md w-1/2 mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded-md w-full"></div>
              <div className="h-4 bg-gray-200 rounded-md w-full"></div>
              <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded-md w-full"></div>
              <div className="h-4 bg-gray-200 rounded-md w-4/5"></div>
            </div>
          </div>
        </div>
        <div className="animate-pulse">
          <div className="rounded-lg bg-gray-200 w-full aspect-video"></div>
        </div>
      </div>
    </div>
  )
});

export default function AboutUs() {
  return (
    <div className="relative min-h-screen">
      <Suspense fallback={<div className="h-[400px] md:h-[600px] bg-gray-200 animate-pulse"></div>}>
        <PageTitle />
      </Suspense>
      
      <Suspense 
        fallback={
          <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="animate-pulse">
                  <div className="h-10 bg-gray-200 rounded-md w-3/4 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded-md w-1/2 mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-4/5"></div>
                  </div>
                </div>
              </div>
              <div className="animate-pulse">
                <div className="rounded-lg bg-gray-200 w-full aspect-video"></div>
              </div>
            </div>
          </div>
        }
      >
        <AboutSection />
      </Suspense>
    </div>
  );
}

