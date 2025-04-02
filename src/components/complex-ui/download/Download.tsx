'use client'

import Image from "next/image";
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
        }).fromTo(".download-title",
            { opacity: 0,
                x: 100
            },
            {    
            opacity: 1,
            x: 0,        
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
            <div className="wrapper px-6 flex justify-between">
                <Image className="download-img-left" src='/download-decoration-left.png' alt='download decoration left' width={235} height={306}/>
                <div className="main">
                    <div className="title-wrapper flex justify-between items-center pb-8">
                        <Image src='/sophie-avatar.png' alt='sophie avatar' width={66} height={68}/>
                        <Title title='Meet Sophie now' classTitle="download-title"/>
                    </div>
                    <h2 className="download-subtitle subtitle text-[2.3565rem] text-center font-medium pb-2">Try it for FREE</h2>
                    <div className="stores flex justify-between items-center">
                        <Link href='https://apps.apple.com/us/app/sophie-guru/id6470261153'>
                            <AppleStore className=' h-[4.5323rem]'/>
                        </Link>
                        <Link href='https://play.google.com/store/apps/details?id=guru.sophie'>
                            <GooglePlay className=' h-[4.375rem] cursor-pointer'/>
                        </Link>
                    </div>
                </div>
                <Image className="download-img-right" src='/download-decoration-right.png' alt='download decoration right' width={253} height={223}/>
            </div>
        </div>
    )
}