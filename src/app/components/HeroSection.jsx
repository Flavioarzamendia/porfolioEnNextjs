"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

 

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left py-8'>
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 '>
            Hola!{" "}
          </span>
          <br />
          <TypeAnimation
      sequence={[
        
        'Soy Flavio',
        2000, 
        'Web Developer',
        2000,
        'Frontend ',
        2000,
        'Wordpress',
        2000,
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    />

          </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lf:text-xl py-3'>
          Soy un Desarrollador web Frontend, con conocimientos en Worpress,html css y JavaScript.
          </p>
          <div className='py-8'>
            <button className='px-7 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
              <a href="https://www.linkedin.com/in/flavio-arzamendia-salinas" target='_blank'>Visita Mi Linkedin</a>
              </button>
            <button className='px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 mt-3 text-white'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-7 py-3'><a href="https://github.com/Flavioarzamendia" target='_blank'>Visita Mi GitHub</a></span>
              </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[15.625em] h-[15.625em] lg:w-[25em] lg:h-[25em] relative'>
          <img 
          src="/images/hero-img.webp" 
          alt="hero imagen"
          title='Working'
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          width={300}
          height={300}
          />
          </div>
        </div>
        </div>
    </section>
  )
}

export default HeroSection
