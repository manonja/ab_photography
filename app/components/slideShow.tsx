'use client';
import React, {FC, useState} from 'react';

import Image from "next/image";
import pyr5 from "../../public/pyr/pyr-5.jpg";
import pyr from "../../public/pyr/pyr.jpg";
import pyr20 from "../../public/pyr/pyr-20.jpg";
import pyr29 from "../../public/pyr/pyr-29.jpg";
import portrait1 from "../../public/slides/portrait-1.jpg";
import landscape1 from "../../public/slides/landscape-1.jpg";
import miami1 from "../../public/slides/miami-1.jpg";
import rad1 from "../../public/7rad/7rad1.jpg";



// TODO: pass images as props
export const SlideShow:FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imagesTest = [pyr20, portrait1, landscape1, rad1, miami1]

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === imagesTest.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? imagesTest.length - 1 : prevSlide - 1));
    };


    return (
        <div
            className="flex w-full justify-center items-center overscroll-none">
            <div
                className="flex h-screen w-full justify-center items-center"
                >
                {imagesTest.map((image, index) => (
                    <div key={index} className={index === currentSlide ? ' w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none' : 'hidden'}>
                        <Image src={image} alt={`Slide ${index + 1}`} className="block w-full" />
                    </div>
                ))}

            </div>

            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                onClick={prevSlide}
                >
    <span className="inline-block h-8 w-8">
          <Image
              src="/chevronLeft.svg"
              alt="chevron left"
              height={24}
              width={24}
          />
    </span>

            </button>
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                onClick={nextSlide}>
    <span className="inline-block h-8 w-8">
              <Image
                  src="/chevronRight.svg"
                  alt="chevron right"
                  height={24}
                  width={24}
              />

    </span>

            </button>
        </div>
        )


}
