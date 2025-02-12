'use client'

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import dynamic from 'next/dynamic';

enum Colors {
  'BLACK_COLOR' = 'black',
  'WHITE_COLOR' = 'white'
}

gsap.registerPlugin(useGSAP);
export function FirstScreen() {
    const container = useRef(null)
    const [renderCanvas, setRenderCanvas] = useState(false);

    useEffect(() => {
        setRenderCanvas(true);
    }, []);

    useGSAP(() => {
        gsap
        .timeline()
        .to(".left-block", {
            x: 0,
            opacity: 1,
            duration: 2,
            delay: 0.5,
        })
    },{ scope: container });

    const Cylinders = dynamic(() => import('@/components/ui/main-image/Cylinders'), { ssr: false });

    const arrayOfElements = [
      { selector: 'body', duration: 0.5, property: 'backgroundColor' },
      { selector: '.header-menu-link', duration: 0.5, property: 'color' },
      { selector: '.description_title', duration: 0.5, property: 'color' },
      { selector: '.description_text', duration: 0.5, property: 'color' }
    ];

    useGSAP(() => {
      gsap.to('body', {
        scrollTrigger: {
          trigger: '.firstScreen',
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse',
          onEnter: () => animateElements(true),
          onLeave: () => animateElements(false),
          onEnterBack: () => animateElements(true),
          onLeaveBack: () => animateElements(false)
        }
      });

      function animateElements(isDark: boolean) {
        arrayOfElements.forEach(({ selector, duration, property }, index) => {
          const element = document.querySelector(selector);
          if (!element) return;

          const color = isDark ? 
            (index === 0 ? Colors.BLACK_COLOR : Colors.WHITE_COLOR) :
            (index === 0 ? Colors.WHITE_COLOR : Colors.BLACK_COLOR);
  
          gsap.to(element, {
            [property]: color,
            duration: duration
          });
        });
      }
    
      }, {scope: container})


    return (
        <div ref={container}>
            <div className="firstScreen pt-[150px] pb-[400px]">
            <div  className="px-4 w-full justify-between items-center">
                <div className="right-block flex justify-center items-center">
                    <div className="relative">
                        {renderCanvas && <Cylinders/>   }
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

{/* <div className="left-block opacity-0 translate-x-[-100px]">
                    <h6 className="text font-bold leading-7 tracking-[0.0075em] text-[#FE5DB0] mb-[0.625rem] z-10">Powered GPT-4</h6>
                    <h1 className="title text-[4rem] font-extrabold leading-[1.162] tracking-[-0.01562em]">Hi 🤟, <br/> I’m Sophie</h1>
                    <h2 className="subtitle text-[2.3565rem] leading-[1.162] font-bold mb-4">Your perfect personal assistant!</h2>
                    <Button title='Get started' classBtn='!bg-[#0057FF]'>
                        <span className="ml-[0.5rem]"><ArrowDownwardIcon className="text-xl rotate-[-46deg]"/></span>
                    </Button>
                </div> */}