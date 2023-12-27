import Link from "next/link";
import Image from "next/image";
import {SubscribeForm} from "./subscribeForm";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 w-full h-24">
      <div className="flex flex-col items-start justify-center sm:flex-row sm:items-center sm:justify-between h-full  px-4 2xl:px-16 sm:mt-6">
        <div className="flex justify-between w-full sm:w-auto">
          <SubscribeForm/>
          <div className="sm:hidden flex items-center space-x-4">
            <div>
              <Link
                href="https://www.instagram.com/anton__photography"
                className="text-xs text-neutral-600"
              >
                <Image
                  src="/instagram.svg"
                  alt="instagram icon"
                  height={20}
                  width={20}
                  color="text-slate-600"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-xs text-neutral-600">© 2023 Anton Bossenbroek</div>
        <div className="hidden sm:flex sm:space-x-4 sm:items-center">
          <div>
            <Link
              href="https://www.instagram.com/anton__photography"
              className="text-xs text-neutral-600"
            >
              <Image
                src="/instagram.svg"
                alt="instagram icon"
                height={28}
                width={28}
                color="text-neutral-600"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
