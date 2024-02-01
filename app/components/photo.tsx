import React, {FC} from 'react';
import Image from "next/image";
import { HeadBlobResult } from '@vercel/blob';

interface PhotoProps {
    photo: string;
    withDivider?: boolean;
    priority?: boolean
}

export const Photo:FC<PhotoProps> = ({photo, withDivider, priority}) => {

    return (
        <div
            className="sm:flex sm:w-full sm:justify-center sm:items-center hidden">
            <div className="flex flex-col md:h-screen h-[60vh] w-full sm:w-11/12 justify-center">
                <Image src={photo} alt={photo} width={0}height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="object-contain" priority={priority} />
                {/* <div className="text-xs pt-2 pb-24 font-light text-gray-400 md:pb-8">radiance</div> */}
                {withDivider && <div className="border-t border-gray-700"/>}
            </div>
        </div>
    )


}
