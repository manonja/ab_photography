"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {usePlausible} from "next-plausible";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const plausible = usePlausible()

  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="fixed top-0 z-20 bg-neutral-900 w-full h-24 shadow-xl">
      <div className="flex items-center justify-between h-full w-full px-4 2xl:px-16 ">
        <Link href="/" className="text-white">
          Anton Bossenbroek
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link
              href="/7rad"
              className="text-white p-2 text-xs hover:border-b"
              onClick={() => plausible('7RadClicked')}
            >
              7Rad
            </Link>
            <Link
                href="/pyrenees"
                className="text-white p-2 text-xs hover:border-b"
            >
              Pyrénées
            </Link>
            <Link
              href="/about"
              className="text-white p-2 text-xs hover:border-b"
            >
              About
            </Link>
          </ul>
        </div>

        {/*mobile menu*/}
        <div className="sm:hidden flex items-center">
          <button
            className=" items-center justify-center p-2 rounded-md text-white md:text-white
                hover:text-white "
            onClick={handleNav}
          >
            {isMenuOpen ? (
              <Image src="/close.svg" alt="close icon" width={28} height={28} />
            ) : (
              <Image src="/menu.svg" alt="menu icon" width={28} height={28} />
            )}
          </button>
        </div>
        <div
          className={
            isMenuOpen
              ? "fixed left-0 top-20 w-[100%] h-[40%] sm:hidden h-screen bg-[#171717] ease-in-duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-duration-500 "
          }
        >
          <div className="md:hidden flex w-full">
            <div className="flex-col flex pl-2">
              <ul>
                <Link href="/7rad" className="text-white p-2 text-xs">
                  7rad
                </Link>
              </ul>
              <ul>
                <Link href="/pyrenees" className="text-white p-2 text-xs">
                  Pyrénées
                </Link>
              </ul>

              <ul>
                <Link href="/project" className="text-white p-2 text-xs">
                  About
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
