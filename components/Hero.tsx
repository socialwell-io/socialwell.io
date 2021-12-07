import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container px-4 pt-20 xl:pt-24 mx-auto">
      <div className="w-full px-4 md:mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-6  lg:text-5xl text-5xl font-extrabold leading-1 tracking-normal text-black-900 md:text-6xl md:tracking-tight">
          Building Farmer Collectives Together <br />
          <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-900  to-[#4a8da7] lg:inline">
            Design. Build. Grow.
          </span>{' '}
        </h1>
        <p className="px-0 mb-6 text-lg text-black-500 md:text-xl lg:px-24 ">
          Let's bring tech and consulting to power farmer collectives.
        </p>
      </div>
      <div className="flex justify-center w-full mx-auto text-center md:w-10/12">
        <img src="/assets/png/community.jpg" className="h-96" />
      </div>
    </section>
  );
}
