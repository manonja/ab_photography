import React, {FC} from 'react';
import Image, { StaticImageData } from "next/image";

interface PhotoProps {
    photo: StaticImageData;
    withDivider?: boolean;
}

export const Photo:FC<PhotoProps> = ({photo, withDivider}) => {

    return (
        <div
            className="flex w-full justify-center items-center">
            <div className="flex flex-col md:h-screen h-[60vh] w-full sm:w-11/12 justify-center">
                <Image src={photo} alt={"photo-name"} className="block w-full" />
                <div className="text-xs pt-2 pb-24 font-light text-gray-400 md:pb-8">radiance</div>
                {withDivider && <div className="border-t border-gray-700"/>}
            </div>
        </div>
    )


}
