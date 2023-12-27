import React, {FC} from 'react';
import Image from "next/image";

interface PhotoProps {
    photo: string
}

export const Photo:FC<PhotoProps> = ({photo}) => {

    return (
        <div
            className="flex w-full justify-center items-center overscroll-none">
            <div className="flex h-screen w-full justify-center items-center">
                <Image src={photo} alt={photo} className="block w-full" />
            </div>
        </div>
    )


}
