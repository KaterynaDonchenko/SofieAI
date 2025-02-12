// import { useEffect } from "react";
// import gsap from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";























// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import dynamic from 'next/dynamic';

// gsap.registerPlugin(ScrollTrigger);

// interface SmoothScrollProps {
//   children: React.ReactNode;
// }

// const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const locomotiveScrollRef = useRef<any>(null);

//   useEffect(() => {

//     (async () => {
//       const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
//       if (!scrollRef.current) return;

//       locomotiveScrollRef.current = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//         multiplier: 1,
//         class: 'is-revealed',
//         reloadOnContextChange: true,
//         touchMultiplier: 2,
//         lerp: 0.15
//       });

//       // Tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element
//       ScrollTrigger.scrollerProxy(scrollRef.current, {
//         scrollTop(value) {
//           if (arguments.length) {
//             locomotiveScrollRef.current?.scrollTo(value, 0, 0);
//           }
//           return locomotiveScrollRef.current?.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//           return {
//             top: 0,
//             left: 0,
//             width: window.innerWidth,
//             height: window.innerHeight
//           };
//         },
//         pinType: scrollRef.current.style.transform ? "transform" : "fixed"
//       });

//       // Each time Locomotive Scroll updates, tell ScrollTrigger to update too
//       locomotiveScrollRef.current.on("scroll", ScrollTrigger.update);

//       // After everything is set up, refresh ScrollTrigger
//       ScrollTrigger.refresh();

//       // Update locomotive scroll when images are loaded
//       window.addEventListener('load', () => {
//         locomotiveScrollRef.current?.update();
//         ScrollTrigger.refresh();
//       });
//     })();

//     return () => {
//       // Kill all ScrollTriggers and destroy Locomotive Scroll
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       locomotiveScrollRef.current?.destroy();
//     };
//   }, []);

//   return (
//     <div data-scroll-container ref={scrollRef}>
//       {children}
//     </div>
//   );
// };

// // Export as a dynamic component with SSR disabled
// export default dynamic(() => Promise.resolve(SmoothScroll), {
//   ssr: false
// });