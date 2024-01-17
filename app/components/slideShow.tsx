'use client';
import React, {FC, useState} from 'react';

import Image from "next/image";
import { ImageType } from '../types';
import useMousePosition from '../hooks/useMousePosition';


interface Props {
    images: ImageType[]
}


export const SlideShow:FC<Props> = ({images}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const side = useMousePosition();


    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };


    return (
        <div
            className={side === 'left' ? 'cursor-[url(/chevronLeft.svg),auto] container flex w-full justify-center items-center overscroll-none pt-24' : 'cursor-[url(/chevronRight.svg),auto] container flex w-full justify-center items-center overscroll-none pt-24' }
            onClick={side === 'left' ? prevSlide : nextSlide}>
            
            <div
                className="flex h-full w-full justify-center items-center"
                >
                {images.map((image, index) => (
                    <div key={index} className={index === currentSlide ? ' w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none' : 'hidden'}>
                        <Image src={image.src} alt={`Slide ${index + 1}`} width={image.width} height={image.height} className="object-contain" />
                    </div>
                ))}

            </div>
        </div>
        )

}
