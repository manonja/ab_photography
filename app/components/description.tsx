import React, {FC} from 'react';

interface Props {
    text: string;
}

export const Description:FC<Props> = ({text}) => {

    return (
        <div
            className="flex flex-col w-full justify-center items-center sm:pt-4 ">
                <div className="sm:text-lg	sm:max-w-[70vh] text-xs text-justify text-gray-300">{text}</div>
        </div>
    )


}
