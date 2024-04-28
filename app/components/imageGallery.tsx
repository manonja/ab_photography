"use client";

import { FC, useState } from "react";
import Image from "next/image";

import FullScreenDialog from "./fullScreenDialog";
import { Photo } from "../types/photo";

interface ImageGalleryProps {
  image: Photo;
  images: Photo[];
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const ImageGallery: FC<ImageGalleryProps> = ({ image, images }) => {
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <div className="w-full bg-grey-900 overflow-hidden">
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Image
          alt={image.caption}
          src={image.gallery_blob}
          priority
          width={0}
          height={0}
          sizes="(max-width: 768px) 33vh, (max-width: 1200px) 50vw, 100vw"
          style={{ width: "100%", height: "auto" }}
          className={cn(
            "group-hover:opacity-80 duration-700 ease-in-out object-cover cursor-pointer sm:max-h-48 sm:max-w-[100%] max-w-64",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoad={() => setLoading(false)}
          onClick={openDialog}
        />
      </div>

      <FullScreenDialog
        images={images}
        sequence={image.sequence}
        isOpen={isOpen}
        onClose={closeDialog}
      />
    </>
  );
};
