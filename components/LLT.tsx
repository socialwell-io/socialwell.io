import React from 'react';
import LLTCard from './Services/LLTCard';

export default function LLT() {
  return (
    <section className="px-6 xl:px-0">
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center justify-center w-full  mb-12">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Things We Are Working On
          </h1>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 md:px-12 gap-8 place-items-center place-content-center">
          <LLTCard
            title="React UI Elements"
            img="assets/gif/icons8-doughnut-chart.gif"
          />
         
        </div>
      </div>
    </section>
  );
}
