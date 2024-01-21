'use client';

import {FC, useState} from "react";
import { ListBlobResultBlob } from "@vercel/blob";
import Image from "next/image";

import FullScreenDialog from "./fullScreenDialog";

interface ImageGalleryProps {
    image: ListBlobResultBlob;
}

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const ImageGallery:FC<ImageGalleryProps> = ({image}) =>  {
    const [isLoading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    return (
        <>
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image
                    alt={image.pathname}
                    src={image.url}
                    fill
                    sizes="100vh"
                    className={cn(
                        'group-hover:opacity-80 duration-700 ease-in-out object-cover cursor-pointer',
                        isLoading
                            ? 'grayscale blur-2xl scale-110'
                            : 'grayscale-0 blur-0 scale-100'
                    )}
                    onLoad={() => setLoading(false)}
                    onClick={openDialog} 
                />
    
            </div>
            <FullScreenDialog isOpen={isOpen} onClose={closeDialog}>
                <Image src={image.url} alt={image.pathname} width="1000" height="1000" className="object-contain max-w-full max-h-full overflow-auto" />
            </FullScreenDialog>
        </>
    
    );
}
