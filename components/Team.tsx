import React from 'react';
import TeamMate from '@/components/Team/TeamMate';

export default function Team() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto py-12">
        <div className="flex flex-col items-center justify-center w-full mb-24">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Meet The Team
          </h1>
          <hr className="w-36 h-1 bg-brand-700 rounded-full" />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-10/12">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <TeamMate
                name="Aditya"
                img="https://picsum.photos/350"
                designation="Full Stack Developer"
                github="https://github.com/adikeshri"
                twitter="https://twitter.com/adi_keshri"
                lin="https://www.linkedin.com/in/adikeshri"
                web="https://adikeshri.ml"
              />
              <TeamMate
                name="Avinash"
                img="https://picsum.photos/250"
                designation="Full Stack Developer"
                lin='https://www.linkedin.com/in/iavinas'
              />
              <TeamMate
                name="Shekhar"
                img="https://picsum.photos/300"
                designation="Full Stack Developer"
                github="https://github.com/sekharjha"
                web="web-link"
              />
              <TeamMate
                name="Deep Narayan Tandan"
                img="https://picsum.photos/200"
                designation="Full Stack Developer"
                web="https://dntandan.ml"
                lin="https://linkedin.com/in/dntandan"
                twitter="https://twitter.com/dntandan"
                github="https://github.com/dntandan"
              />
              <TeamMate
                name="Avikant"
                img="https://picsum.photos/250"
                designation="Full Stack Developer"
                lin="https://www.linkedin.com/in/avikant-srivastava-74b860171/"
                github="https://github.com/AvikantSrivastava"
                web="https://avikantsrivastava.github.io/"
                fb="web-link"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
