'use client';

import Image from 'next/image';

export function Genre({
  genreName,
  src,
  idx,
}: {
  genreName: string;
  src: string;
  idx: number;
}) {
  return (
    <div className="relative">
      <Image
        className="aspect-[3/4] object-cover rounded-md"
        src={src}
        width={600}
        height={800}
        alt={genreName}
      />
      <div className="absolute bottom-0 z-10 h-full w-full bg-gradient-to-t from-slate-900"></div>
      <p className="absolute bottom-10 z-50 left-36 text-3xl font-bold text-background">
        {genreName}
      </p>
    </div>
  );
}
