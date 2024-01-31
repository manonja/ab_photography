import React, { FC } from 'react';
import FullScreenDialog from '../../components/fullScreenDialog';
import Image from 'next/image';

interface Props {
    params: { id: number}
    isOpen: boolean
    closeDialog: () => void
}


const SevenRadDetailPhoto:FC<Props> = ({params: {id}, isOpen, closeDialog}) => {


    //fetch image by projectId 
    const image = {url: "", caption: "", sequence: 1 }
    return (
        <FullScreenDialog isOpen={isOpen} onClose={closeDialog}>
            <Image src={image.url} alt={image.caption} width={0}height={0} sizes="(max-width: 768px) 33vh, (max-width: 1200px) 50vw, 100vw"
            style={{ width: '100%', height: 'auto' }} className="object-contain max-w-390 max-h-310 overflow-auto" priority />
        </FullScreenDialog>
    )
}

export default SevenRadDetailPhoto;