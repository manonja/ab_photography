import React, {FC} from 'react';

interface ParagraphProps {
    text: string;
}

export const Paragraph:FC<ParagraphProps> = ({text}) => {

    return (
        <div
            className="flex w-full justify-center items-center sm:pt-4 ">
                <div className="sm:text-lg	sm:max-w-[50vh] text-xs text-justify text-gray-300">{text}</div>
        </div>
    )


}
