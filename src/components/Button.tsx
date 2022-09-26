import gsap, { Expo } from 'gsap';
import { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import githubLogo from '../assets/github-logo.png'

const Button = ({ children } : {children: ReactNode}) => {

  const btnElement = useRef<HTMLButtonElement>(null);
  const textBtnElement = useRef<HTMLSpanElement>(null);
  const textBtnElementHover = useRef<HTMLSpanElement>(null);
  const [isHover, setIsHover] = useState(false);

  const effectBtnHide = {
    transform: "scaleY(0)",
    transformOrigin: "top",
    opacity: 0,
    duration: .8,
    ease: Expo.easeOut
  }

  const effectBtnAppear = {
    transform: "scaleY(1)",
    transformOrigin: "bottom",
    opacity: 1,
    duration: .8,
    ease: Expo.easeOut
  }

  useLayoutEffect(() => {
    gsap.set(textBtnElementHover.current, {
      opacity: 0,
      transform: "scaleY(0)",
    })

    if (btnElement.current) {
      gsap.fromTo(btnElement.current, {
        opacity: .5,
        transform: "translate3d(0, 100%, 0)",
      },
      {
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
        duration: 2.5,
        ease: Expo.easeOut,
      })
    }
  }, []);

  return (
    <button
      ref={btnElement}
      onMouseEnter={() => {
        gsap.to(textBtnElement.current, effectBtnHide)
        gsap.to(textBtnElementHover.current, effectBtnAppear)
      }}
      onMouseLeave={() => {
        gsap.to(textBtnElementHover.current, effectBtnHide)
        gsap.to(textBtnElement.current, effectBtnAppear)
      }}
      className="flex border-2 border-primary hover:border-white" type="button"
    >
      <div className="bg-black p-3">
        <img className="w-6 h-6 text-white" src={githubLogo} />
      </div>
      <div className="relative px-8 py-3.5 font-bold text-sm leading-5 uppercase text-black bg-primary">
        <span ref={textBtnElementHover} className="absolute z-10 inset-0 py-3.5 bg-white">
          {children}
        </span>
        <span ref={textBtnElement} className="block">
          {children}
        </span>
      </div>
    </button>
  )
}

export default Button