'use client'
import { useState } from 'react';
import Image from 'next/image';

type Props = {
  images: string[];
};

export default function ProductGallery({ images }: Props) {
  const [activeImg, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-6 mb-4">
      {/* Active Image */}
      <div className="relative w-full aspect-square">
        <Image
          src={activeImg}
          alt="Active Product Image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex flex-row justify-between h-24 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-24 h-24 relative cursor-pointer rounded-md overflow-hidden"
            onClick={() => setActiveImage(image)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
