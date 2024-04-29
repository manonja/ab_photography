"use client";
import React, { FC, useState, useEffect, useCallback } from "react";

import Image from "next/image";
import useMousePosition from "../hooks/useMousePosition";

interface Props {
  images: string[];
}

export const SlideShow: FC<Props> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const side = useMousePosition();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  }, [images.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 4000);

    // Clear the timer when the component is unmounted or before the next render
    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide]);

  return (
    <div
      className={
        side === "left"
          ? "cursor-[url(/chevronLeft.svg),auto] container flex w-full justify-center items-center overscroll-none pt-24"
          : "cursor-[url(/chevronRight.svg),auto] container flex w-full justify-center items-center overscroll-none pt-24"
      }
      onClick={side === "left" ? prevSlide : nextSlide}
    >
      <div className="flex h-full w-full justify-center items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentSlide
                ? " w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                : "hidden"
            }
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="object-fit"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};
