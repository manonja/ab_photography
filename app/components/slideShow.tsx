'use client';
import React, {FC, useState} from 'react';

import Image from "next/image";
import useMousePosition from '../hooks/useMousePosition';
import { ListBlobResultBlob } from '@vercel/blob';


interface Props {
    images: {
        blobs : ListBlobResultBlob[]
    }
}


export const SlideShow:FC<Props> = ({images}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const side = useMousePosition();


    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.blobs.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.blobs.length - 1 : prevSlide - 1));
    };

    return (
        <div
            className={side === 'left' ? 'cursor-[url(/chevronLeft.svg),auto] container flex w-full justify-center items-center overscroll-none pt-24' : 'cursor-[url(/chevronRight.svg),auto] container flex w-full justify-center items-center overscroll-none pt-24' }
            onClick={side === 'left' ? prevSlide : nextSlide}>
            
            <div
                className="flex h-full w-full justify-center items-center"
                >
                {images.blobs.map((image, index) => (
                    <div key={index} className={index === currentSlide ? ' w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none' : 'hidden'}>
                        <Image src={image.url} alt={`Slide ${index + 1}`} width={0}height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="object-contain" priority />
                    </div>
                ))}
            </div>
        </div>
        )

}
