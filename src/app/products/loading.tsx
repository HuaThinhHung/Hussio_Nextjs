import React from 'react';
import { ProductGridSkeleton } from '@/components/common/Skeletons';

export default function Loading() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-zinc-50 py-12 md:py-20 border-b border-zinc-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-black tracking-tight uppercase mb-2 animate-pulse bg-zinc-200 h-10 w-64 mx-auto rounded" />
          <div className="flex items-center justify-center space-x-2 mt-4">
             <div className="h-3 w-32 bg-zinc-200 animate-pulse rounded" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="mb-10 pb-6 border-b border-zinc-200 flex justify-between items-center">
           <div className="flex gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 w-20 bg-zinc-100 animate-pulse rounded" />
              ))}
           </div>
        </div>
        <ProductGridSkeleton count={12} />
      </div>
    </div>
  );
}
