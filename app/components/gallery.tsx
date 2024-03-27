"use client";

import { Photo } from "../types/photo";
import { ImageGallery } from "./imageGallery";
import { FC } from "react";

interface GalleryProps {
  images: Photo[];
}

export const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-2 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <>
          {images.map((image, i) => (
            <ImageGallery key={`${image}-${i}`} image={image} images={images} />
          ))}
        </>
      </div>
    </div>
  );
};
