import React from 'react';
import TeamMate from '@/components/Team/TeamMate';
export default function Team() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto py-12">
        <div className="flex flex-col items-center justify-center w-full mb-24">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            We Build With Partners
          </h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-10/12">
            <div className="filter grayscale grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <TeamMate
                name="Abt Associates"
                img="assets/logo/abt-logo.png"
                designation="Under 5 Child Health, Bihar"
              />
              <TeamMate
                name="GIZ"
                img="assets/logo/giz-logo.png"
                designation="FPO Teaching Notes"
              />
              <TeamMate
                name="ACCESS Development Services"
                img="assets/logo/access-logo.png"
                designation="FPO Training Manuals"
              />
              <TeamMate
                name="FIRE Africa"
                img="assets/logo/fireafrica-logo.png"
                designation="GBV App"
              />

              <TeamMate
                name="Udyama"
                img="assets/logo/udyama-logo.png"
                designation="FPO App"
              />
              <TeamMate
                name="PFAN"
                img="assets/logo/pfan-logo.png"
                designation="Product mentoring"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
