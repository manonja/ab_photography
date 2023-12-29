'use client';
import {FC, useState} from "react";
import {ImageType} from "../types";
import Image from "next/image";

interface ImageGalleryProps {
    image: ImageType
}

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const ImageGallery:FC<ImageGalleryProps> = ({image}) =>  {
    const [isLoading, setLoading] = useState(true);
    return (
        <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image
                    alt={image.src}
                    src={image.src}
                    layout="fill"
                    style={{objectFit:"cover"}}
                    className={cn(
                        'group-hover:opacity-80 duration-700 ease-in-out',
                        isLoading
                            ? 'grayscale blur-2xl scale-110'
                            : 'grayscale-0 blur-0 scale-100'
                    )}
                    onLoad={() => setLoading(false)}
                />
            </div>
            {/*<h3 className="mt-4 text-sm text-gray-700">{image.src}</h3>*/}
        </a>
    );
}
