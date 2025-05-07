'use client'

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import dynamic from 'next/dynamic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

enum Colors {
  'BLACK_COLOR' = 'black',
  'WHITE_COLOR' = 'white'
}

gsap.registerPlugin(useGSAP, ScrollTrigger);
export function FirstScreen() {
    const container = useRef(null)
    const [renderCanvas, setRenderCanvas] = useState(false);

    useEffect(() => {
        setRenderCanvas(true);
    }, []);

    const Cylinders = dynamic(() => import('@/components/ui/main-image/Cylinders'), { ssr: false });

    const arrayOfElements = [
      { selector: 'body', duration: 0.5, property: 'backgroundColor' },
      { selector: '.home', duration: 0.5, property: 'color' },
      { selector: '.terms', duration: 0.5, property: 'color' },
      { selector: '.policy', duration: 0.5, property: 'color' },
      { selector: '.faq', duration: 0.5, property: 'color' },
      { selector: '.description_title', duration: 0.5, property: 'color' },
      { selector: '.description_text', duration: 0.5, property: 'color' }
    ];

    useGSAP(
      () => {
        ScrollTrigger.create({
          trigger: '.firstScreen',
          start: 'top 50%',
          end: 'bottom 25%',
          toggleActions: 'play reverse play reverse',
          onEnter: () => animateElements(true),
          onLeave: () => animateElements(false),
          onEnterBack: () => animateElements(true),
          onLeaveBack: () => animateElements(false),
        });
      },
      { scope: container } 
    );


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
      
    return (
        <div id='first-screen' ref={container}>
            <div className="firstScreen pt-[150px] h-[600px]">
              {renderCanvas && <Cylinders/>   }
          </div>
        </div>
    )
}

