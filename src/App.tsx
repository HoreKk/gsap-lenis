import React, { useLayoutEffect, useRef } from 'react'
import lenisHeader from './assets/lenis.svg'
import sfdrLogo from './assets/sfdr.svg'
import { gsap, Expo,  } from "gsap";

function App() {

  const el = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(el);

  const PopInComponent = ({ elClass, children } : {elClass?: string, children: React.ReactNode}) => {
    return (
      <div className='overflow-hidden'>
        <span className={`block textPopIn ${elClass}`}>
          {children}
        </span>
      </div>
    );
  };

  useLayoutEffect(() => {
    gsap.from(q('.textFadeIn'), {
      opacity: 0,
      y: 75,
      duration: 2.5,
      ease: Expo.easeOut,
    })

    gsap.fromTo(q(".textPopIn"),{
      transform: "translate3d(0, 200%, 0)",
      y: 75,
    }, 
    {
      transform: "translate3d(0, 0, 0)",
      duration: 2.5,
      y: 0,
      ease: Expo.easeOut,
    });

    gsap.from(q(".barYoyo"),{
      scale: 0,
      repeat: -1,
      yoyo: true,
      duration: 2,
      transformOrigin: 'top',
      ease: "slow (1, 1, false)",
    });
  });

  return (
    <div className="w-full px-4 md:px-10 selection:text-black selection:bg-primary" ref={el}>
      <section className="flex flex-col justify-between h-[100vh]">
        <div className="w-full mt-9">
          <img src={lenisHeader} alt="Lenis header" />
          <div className="flex justify-between mt-2 md:mt-6 overflow-hidden">
            <img src={sfdrLogo} className="textFadeIn h-10" alt="Sfdr logo" />
            <div className='flex flex-col items-end'>
              <div className="overflow-hidden">
                <h2 style={{ fontStretch: 'expanded' }} className='textPopIn md:text-6xl w-full font-black uppercase text-white'>
                  Smooth Scroll
                </h2>
              </div>
              <PopInComponent elClass='mt-2 uppercase text-sm font-semibold text-grey'>
                © {new Date().getFullYear()} Studio Freight
              </PopInComponent>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between mt-2 md:mt-6 mb-12'>
          <div className='flex items-center gap-28'>
            <div className='flex'>
              <div className='w-0.5 mr-3.5'>
                <div className="bg-primary h-20 w-0.5 absolute barYoyo" />
              </div>
              <div className="flex flex-col font-black leading-none text-2xl uppercase">
                <PopInComponent>
                  scroll
                </PopInComponent>
                <PopInComponent>
                  to explore
                </PopInComponent>
              </div>
            </div>
            <div className="flex flex-col font-semibold leading-tight text-sm uppercase">
              <PopInComponent>
                A NEW SMOOTH SCROLL LIBRARY
              </PopInComponent>
              <PopInComponent>
                FRESH OUT OF THE
              </PopInComponent>
              <PopInComponent>
                STUDIO FREIGHT DARKROOM
              </PopInComponent>
            </div>
          </div>
          <button role="button">
              Check it out on github
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
