import { useState } from 'react'
import lenisHeader from './assets/lenis.svg'
import sfdrLogo from './assets/sfdr.svg'

function App() {

  return (
    <div className="w-full px-4 md:px-10 selection:text-black selection:bg-primary">
      <section className="flex flex-col justify-between h-[100vh]">
        <div className="w-full  mt-8">
          <img src={lenisHeader} alt="Lenis header" />
          <div className="flex justify-between mt-2 md:mt-6">
            <img src={sfdrLogo} className="h-10" alt="Sfdr logo" />
            <div className='flex flex-col items-end'>
              <h2 style={{ fontStretch: 'expanded' }} className='md:text-6xl w-full font-black uppercase text-white'>
                Smooth Scroll
              </h2>
              <span className='mt-2 uppercase text-sm text-grey'>
                © {new Date().getFullYear()} Studio Freight
              </span>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-2 md:mt-6 mb-8'>
          <div>
            scroll to explore
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
