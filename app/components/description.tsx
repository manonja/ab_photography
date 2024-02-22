import Link from "next/link";
import React, { FC } from "react";

interface Props {
  text: string;
  links?: boolean;
}

export const Description: FC<Props> = ({ text, links }) => {
  return (
    <div>
    <div className="flex flex-col w-full text-justify items-center sm:pt-4 ">
      <div className="sm:text-base sm:max-w-[70vh] text-xs text-justify text-gray-300">
        {text}
      </div>
    </div>

      {links && (
        <div className="flex flex-col pt-8 sm:pt-0">
          <Link
            className="flex flex-col items-end sm:pt-4 text-xs text-gray-300 hover:text-orange-500"
            href="https://github.com/pyalanysis/pyalanysis"
          >
            Python Package
          </Link>
          <Link
            className="flex flex-col items-end sm:pt-2 text-xs text-gray-300 hover:text-orange-500 sm:pb-4"
            href="https://www.magnumphotos.com/shop/11-photographic-stories-from-magnums-mentees/"
          >
            Magnum Article
          </Link>
        </div>
      )}
    </div>
    
  );
};
