import Link from 'next/link';
import { useState } from 'react';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
} from 'react-icons/io5';

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const openSidebar = () => {
    setActive(!isActive);
  };
  return (
    <header className="z-30 w-full pl-4 md:px-8 py-4 bg-white sm:px-4">
      <div className="flex items-center justify-between px-4">
        <Link href="/">
          <span className="flex items-center">
            <img
              src="/assets/logo/socialwell_logo_linkedin.png"
              alt="SocialWell Logo"
              className="h-12"
            />
            <span className="lg:text-4xl text-5xl flex items-center justify-between px-4">Open Source</span>
          </span>
        </Link>
        <div className="hidden ml-[10%] md:flex uppercase tracking-widest gap-7 justify-between cursor-pointer">
          <Link href="/">
            <a className="text-black-600 hover:text-brand-800 hover:text-bold">
              Home
            </a>
          </Link>
          {/* <Link href="/blogs">
            <a className="text-black-600 hover:text-brand-700 hover:text-bold">
              Projects
            </a>
          </Link> */}
          {/* <Link href="/contributors">
            <a className="text-black-600 hover:text-brand-700 hover:text-bold">
              Contributors
            </a>
          </Link> */}
        </div>

        <div className="flex items-center px-4">
          <div className="hidden md:flex">
            <div className="flex flex-row gap-3 place-items-center mr-4">
              <Link href="https://twitter.com/SocialWellNet/">
                <a>
                  <IoLogoTwitter className="text-xl hover:text-brand-300" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/company/socialwell/">
                <a>
                  <IoLogoLinkedin className="text-xl hover:text-brand-300" />
                </a>
              </Link>
              <Link href="https://github.com/socialwell-io/">
                <a>
                  <IoLogoGithub className="text-xl hover:text-brand-300" />
                </a>
              </Link>
            </div>
          </div>

          <div className="inline-flex md:hidden">
            <button
              onClick={openSidebar}
              className="flex-none px-2 btn btn-white btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span className="sr-only">Open Menu</span>
            </button>
          </div>

          <div className="relative flex md:hidden ">
            <div
              className={`${
                isActive ? '' : 'hidden'
              } fixed inset-0 z-10 w-full h-full  opacity-5`}
              onClick={openSidebar}
            ></div>
            <div
              className={`${
                isActive ? '' : 'hidden'
              } fixed z-50 w-5/12 h-auto text-black shadow-lg bg-gray-50 rounded-lg right-4 top-14`}
            >
              <ul className="py-2">
                <Link href="/">
                  <a>
                    <li className="px-6 py-2 bg-gray-50 hover:bg-brand-600 hover:text-white">
                      Home
                    </li>
                  </a>
                </Link>
                {/* <Link href="/projects">
                  <a>
                    <li className="px-6 py-2 bg-gray-50 hover:bg-brand-800 hover:text-white">
                      Projects
                    </li>
                  </a>
                </Link> */}
                {/* <Link href="/contributors">
                  <a>
                    <li className="px-6 py-2 bg-gray-50 hover:bg-brand-800 hover:text-white">
                      Contributors
                    </li>
                  </a>
                </Link> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
