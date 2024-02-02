"use client";

import React, { FC, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { Photo } from "../types/photo";
import Image from "next/image";

interface Props {
  images: Photo[];
  sequence: number;
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenDialog: FC<Props> = ({ images, sequence, isOpen, onClose }) => {
  const [currentPhoto, setCurrentPhoto] = useState(sequence);
  const side = useMousePosition();

  if (!isOpen) return null;

  const nextPhoto = () => {
    setCurrentPhoto((prevSlide) =>
      prevSlide === images.length ? sequence : prevSlide + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhoto((prevSlide) =>
      prevSlide === sequence ? images.length : prevSlide - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-gray-950 z-50">
      <button
        className="absolute top-4 right-4 text-xl text-white "
        onClick={onClose}
      >
        X
      </button>
      <div
        className={
          side === "left"
            ? "cursor-[url(/chevronLeft.svg),auto] container flex w-full justify-center items-center overscroll-none pt-24"
            : "cursor-[url(/chevronRight.svg),auto] container flex w-full justify-center items-center overscroll-none pt-24"
        }
        onClick={side === "left" ? prevPhoto : nextPhoto}
      >
        <div className="flex h-full w-full justify-center items-center">
          {images.map((image) => (
            <div
              key={image.sequence}
              className={
                image.sequence === currentPhoto
                  ? " w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  : "hidden"
              }
            >
              <Image
                src={image.desktop_blob}
                alt={`Photo ${sequence}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "80%" }}
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FullScreenDialog;
