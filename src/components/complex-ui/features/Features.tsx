'use client'

import { Title } from "@/components/ui/title/Title";
import { Button } from "@/components/ui/button/Button";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Image from "next/image";
import Link from "next/link";
import FeatureBg from '../../../assets/bg.svg'

gsap.registerPlugin(ScrollTrigger);

const arrayOfColor = ['#60C2FB', 
                     'rgb(182, 130, 253)', 
                     'rgb(254, 93, 176)',
                     'rgb(96, 95, 96)']
export function Features() {
    const container = useRef(null)
    const list = useRef<HTMLUListElement | null>(null)
    const featureBg = useRef<HTMLElement | null>(null)

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.features-title',
                start: "top 70%",
                end: "bottom 10%",
                toggleActions: "play none none none",
            },
        }).fromTo(".features-title",
            { opacity: 0,
                y: 100
            },
            {    
            opacity: 1,
            y: 0,        
            duration: 1.5,       
            ease: "power2.out", 
        });
    }, []);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.list',
                start: "top 70%",
                end: "bottom 10%",
                toggleActions: "play none none none",
            },
        }).fromTo(".list",
            { opacity: 0,
                x: -100
            },
            {    
            opacity: 1,
            x: 0,        
            duration: 1.5,       
            ease: "power2.out", 
        });
    }, []);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.features-bottom',
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
            },
        }).fromTo(".features-bottom",
            { opacity: 0,
                y: 100
            },
            {    
            opacity: 1,
            y: 0,
            duration: 1.5,      
            ease: "power2.out", 
        });
    }, []);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.features-img',
                start: "top 70%",
                end: "bottom 10%",
                toggleActions: "play none none none",
            },
        }).fromTo(".features-img",
            { opacity: 0,
                y: 100
            },
            {    
            opacity: 1,
            y: 0,
            duration: 1.5,      
            ease: "power2.out", 
        });
    }, [])

    useEffect(() => {
        if (list.current && featureBg.current) {
            const arrayOfLi = [...list.current.children]

            const imgBgRight = featureBg.current.querySelector("g[mask='url(#bg_svg__b)']")
            const imgBgLeft = featureBg.current.querySelector("g[mask='url(#bg_svg__d)']")
            const imgBgBottom = featureBg.current.querySelector("g[mask='url(#bg_svg__f)']")
            const imgBgCenter = featureBg.current.querySelector("path[mask='url(#bg_svg__center)']")

            const imgBgArray = [imgBgRight, imgBgLeft, imgBgBottom]

            const onChangeImgBg = (color: string) => {
                imgBgArray.forEach(item => item?.setAttribute('stroke', color))
            }

            const onChangeBG = (event: Event) => {
                arrayOfLi.forEach((item, i) => {
                    const element = item as HTMLElement
                    const arrow = item.children[1].children[0].children[0] as HTMLElement

                    if (event.target === element) {
                        element.style.background = arrayOfColor[i]
                        onChangeImgBg(arrayOfColor[i])
                        imgBgCenter?.setAttribute('fill', arrayOfColor[i])
                        arrow.style.transform = 'rotate(-90deg)'
                    } else {
                        element.style.background = "#f2f2f2"
                        arrow.style.transform = 'rotate(-46deg)' 
                    }
                })
            };

            arrayOfLi.forEach((item) => {
                item.addEventListener('click', e => onChangeBG(e))
            })

            return () => {
                arrayOfLi.forEach((item) => {
                    item.removeEventListener('click', e => onChangeBG(e))
                })
            }
        }
    }, [])


    return (
        <div id='feature' ref={container} className="features">
            <Title title="🎉 Features" classTitle='features-title text-center pb-[2rem]'/>
            <div className="wrapper flex gap-x-16 w-full pb-[5.625rem]">
                <div className="left-block w-[40%] grid content-center gap-8">
                    <ul ref={list} className="list grid gap-4">
                        <li className="bg-[#60C2FB] px-6 py-4 rounded-[50px] flex justify-between items-center w-full transition-all duration-[0.8s] ease-in-out">
                            <div className="font-bold">Chat with Sophie about anything</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-90deg] transition-all duration-[0.5s] ease-in-out"/></span></Button>
                        </li>
                        <li className="bg-[#f2f2f2] px-6 py-4 rounded-[50px] flex justify-between items-center w-full transition-all duration-[0.8s] ease-in-out">
                            <div className="font-bold">Ask Sophie to help you understand</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-46deg] transition-all duration-[0.4s] ease-in-out"/></span></Button>
                        </li>
                        <li className="bg-[#f2f2f2] px-6 py-4 rounded-[50px] flex justify-between items-center w-full transition-all duration-[0.8s] ease-in-out">
                            <div className="font-bold">Translate text to other languages</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-46deg] transition-all duration-[0.4s] ease-in-out"/></span></Button>
                        </li>
                        <li className="bg-[#f2f2f2] px-6 py-4 rounded-[50px] flex justify-between items-center w-full transition-all duration-[0.8s] ease-in-out">
                            <div className="font-bold">Rewrite and improve your content</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-46deg] transition-all duration-[0.4s] ease-in-out"/></span></Button>
                        </li>
                    </ul>
                    <div className="features-bottom flex justify-between items-center">
                        <div className="acting font-bold text-[1.417rem]">Try it for <strong className="text-[#FE5DB0]">FREE</strong> </div>
                        <Link href='#download'>
                            <Button title='Download' classBtn="text-[1.125rem]">
                                <span className="ml-[0.4rem]"><ArrowDownwardIcon className="text-xl"/></span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="features-img relative w-[50%]">
                     <FeatureBg ref={featureBg} className='transition-all duration-[0.3s] ease-linear'/>
                     <Image className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] shadow-[7.73056px_7.73056px_0px_0px_rgb(0,0,0)] border border-black rounded-[25px] z-10" src='/chat.gif' alt='chat' unoptimized priority={true} width={220} height={444} />
                </div>
            </div>
        </div>
    )
}
