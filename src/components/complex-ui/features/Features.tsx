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

const arrayOfColor = ['#9e789b', 
                     'rgba(128, 194, 255, 0.6)', 
                     'rgba(171, 152, 255, 0.6)',
                     'rgba(254, 157, 249, 0.6)']
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

    const getBgElements = () => {
        if (!featureBg.current) return { imgBgArray: [], imgBgCenter: null };
    
        const imgBgRight = featureBg.current.querySelector("g[mask='url(#bg_svg__b)']");
        const imgBgLeft = featureBg.current.querySelector("g[mask='url(#bg_svg__d)']");
        const imgBgBottom = featureBg.current.querySelector("g[mask='url(#bg_svg__f)']");
        const imgBgCenter = featureBg.current.querySelector("path[mask='url(#bg_svg__center)']");
    
        return {
          imgBgArray: [imgBgRight, imgBgLeft, imgBgBottom],
          imgBgCenter,
        };
      };
    
      const onChangeImgBg = (color: string, bgArray: (Element | null)[]) => {
        bgArray.forEach((item) => item?.setAttribute("stroke", color));
      };
    
      const onChangeBG = (
        index: number,
        items: HTMLLIElement[],
        imgBgArray: (Element | null)[],
        imgBgCenter: Element | null
      ) => {
        items.forEach((item, i) => {
          const element = item as HTMLElement;
          const arrow = item.children[1].children[0].children[0] as HTMLElement;

    
          if (i === index) {
            element.style.background = arrayOfColor[i];
            onChangeImgBg(arrayOfColor[i], imgBgArray);
            imgBgCenter?.setAttribute("fill", arrayOfColor[i]);
            arrow.style.transform = "rotate(-90deg)";
          } else {
            element.style.background = "#f2f2f2";
            arrow.style.transform = "rotate(-46deg)";
          }
        });
      };
    
      useEffect(() => {
        if (!list.current || !featureBg.current) return;
    
        const items = Array.from(list.current.children) as HTMLLIElement[];
        const { imgBgArray, imgBgCenter } = getBgElements();
    
        const handleClick = (index: number) => () =>
          onChangeBG(index, items, imgBgArray, imgBgCenter);
    
        items.forEach((item, index) => {
          item.addEventListener("click", handleClick(index));
        });
    
        return () => {
          items.forEach((item, index) => {
            item.removeEventListener("click", handleClick(index));
          });
        };
      }, []);


    return (
        <div id='feature' ref={container} className="features">
            <Title title="Features" classTitle='features-title text-center pb-[2rem]'/>
            <div className="feature__wrapper flex gap-16 w-full pb-[5.625rem]">
                <div className="feature__left-block w-[40%] grid content-center gap-8">
                    <ul ref={list} className="list grid gap-4">
                        <li className="glowing-shimmer-text cursor-pointer gap-1 bg-[#9e789b] px-6 py-4 rounded-[50px] flex justify-between items-center w-full transition-all duration-[0.8s] ease-in-out">
                            <div className="font-bold">Chat with Sophie about anything</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-90deg] transition-all duration-[0.5s] ease-in-out"/></span></Button>
                        </li>
                        <li className="glowing-shimmer-text cursor-pointer gap-1 bg-[#f2f2f2] px-6 py-4 rounded-[50px] flex justify-between items-center w-full transition-all duration-[0.8s] ease-in-out">
                            <div className="font-bold">Ask Sophie to help you understand</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-46deg] transition-all duration-[0.4s] ease-in-out"/></span></Button>
                        </li>
                        <li className="glowing-shimmer-text cursor-pointer gap-1 bg-[#f2f2f2] px-6 py-4 rounded-[50px] flex justify-between items-center w-full transition-all duration-[0.8s] ease-in-out">
                            <div className="font-bold">Translate text to other languages</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-46deg] transition-all duration-[0.4s] ease-in-out"/></span></Button>
                        </li>
                        <li className="glowing-shimmer-text cursor-pointer gap-1 bg-[#f2f2f2] px-6 py-4 rounded-[50px] flex justify-between items-center w-full transition-all duration-[0.8s] ease-in-out">
                            <div className="font-bold">Rewrite and improve your content</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-46deg] transition-all duration-[0.4s] ease-in-out"/></span></Button>
                        </li>
                    </ul>
                    <div className="features-bottom flex justify-between items-center">
                        <div className="acting font-bold text-[1.417rem]">Try it for <strong className="text-[#FE5DB0]">FREE</strong> </div>
                        <Link href='#download'>
                            <Button title='Download' classBtn="glowing-shimmer-text text-[1.125rem]">
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
