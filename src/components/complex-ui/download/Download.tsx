'use client'

import { Title } from '../../ui/title/Title';
import Link from "next/link";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import AppleStore from '../../../assets/apple-store-bar.svg'
import GooglePlay from '../../../assets/google-play-bar.svg'

gsap.registerPlugin(ScrollTrigger)
export function Download() {
    const container = useRef(null)

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.download-title',
                start: "top 80%",
                end: "bottom 10%",
                toggleActions: "play none none none",
            },
        }).to('.download-title', {
            y: 0,
            opacity: 1,
            duration: 2,       
            ease: "power2.out",
        });
    }, []);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.download-subtitle',
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
            },
        }).fromTo(".download-subtitle",
            { opacity: 0,
                y: 100
            },
            {    
            opacity: 1,
            y: 0,        
            duration: 1,       
            ease: "power2.out", 
        });
    }, []);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.download-img-left',
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
            },
        }).fromTo(".download-img-left",
            { opacity: 0,
                x: -100
            },
            {    
            opacity: 1,
            x: 0,        
            duration: 1,       
            ease: "power2.out", 
        });
    }, []);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.download-img-right',
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
            },
        }).fromTo(".download-img-right",
            { opacity: 0,
                x: 100
            },
            {    
            opacity: 1,
            x: 0,        
            duration: 1,       
            ease: "power2.out", 
        });
    }, []);

        return (
            <div id='download' ref={container} className="download">
                <div className="download-wrapper px-6 pb-2 grid grid-cols-[1fr_2fr_1fr]">
                    <div className="left-block h-[223px]">
                        <video className="download-img-left h-full w-full object-contain rounded-md" autoPlay muted loop playsInline>
                            <source src="/videos/SEAL-Alpha-v2.mp4" type="video/mp4" />
                            <source src="/videos/SEAL-Alpha-v2.webm" type="video/webm" />
                        </video>
                    </div>
                    <div className="main">
                        <div className="title-wrapper flex justify-center items-center pb-4">
                            <Title title='Meet Sophie now' classTitle="download-title opacity-0 translate-y-[-30px]"/>
                        </div>
                        <h2 className="download-subtitle subtitle text-[2.3565rem] text-center font-medium pb-2">Try it for FREE</h2>
                        <div className="download__stores flex justify-between items-center">
                            <Link href='https://apps.apple.com/us/app/sophie-guru/id6470261153'>
                                <AppleStore className=' h-[4.5323rem]'/>
                            </Link>
                            <Link href='https://play.google.com/store/apps/details?id=guru.sophie'>
                                <GooglePlay className=' h-[4.375rem] cursor-pointer'/>
                            </Link>
                        </div>
                    </div>
                    <div className="left-block h-[223px]">
                        <video className="download-img-right h-full w-full object-contain rounded-md" autoPlay muted loop playsInline>
                            <source src="/videos/SEAL-Alpha-v2.mp4" type="video/mp4" />
                            <source src="/videos/SEAL-Alpha-v2.webm" type="video/webm" />
                        </video>
                    </div>
                </div>
            </div>
        )
}