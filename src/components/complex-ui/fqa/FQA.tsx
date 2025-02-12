'use client'

import { Title } from "@/components/ui/title/Title";
import Link from "next/link";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Button } from "@/components/ui/button/Button";
import AddIcon from '@mui/icons-material/Add';

gsap.registerPlugin(ScrollTrigger)
export function FQA() {
    const container = useRef(null)

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.faq-item',
                start: "top 80%",
                end: "bottom 10%",
                toggleActions: "play none none none"
            },
        }).fromTo(".faq-item",
            { opacity: 0,
                y: 100
            },
            {    
            opacity: 1,
            y: 0,
            stagger: 0.3,        // Final rotation value
            duration: 1.5,       // Animation duration in seconds
            ease: "power2.out", // Easing function
        });
    }, []);

    return (
        <div ref={container} className="fqa">
            <div className="title flex justify-between items-center pb-8">
                <Title title="📮 FAQ"/>
                <Link href="/" className="text-[#0057FF] flex gap-2 items-center">View more <ArrowDownwardIcon className="text-xl rotate-[-90deg]"/></Link>
            </div>
            <div className="questions pb-[5.625rem]">
                <ul>
                    <li className="faq-item flex justify-between items-start py-4 px-8 pb-8 border-t-[1px] border-black">
                        <div className="question">
                            <h3 className="number text-[2.3565rem] font-bold">01/</h3>
                            <div className="text text-[1.417rem] leading-4">What is <strong className="text-[#B682FD] font-bold">Sophie?</strong></div>
                        </div>
                        <Button title='' classBtn='self-end !bg-[#0057FF] !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-[2.875rem] !h-[2.875rem] !py-0 !px-0 justify-center items-center flex justify-center items-center'><span className="border-white border-2 rounded-full w-5 h-5 flex justify-center items-center"><AddIcon className="text-white font-bold text-sm rotate-[-90deg]"/></span></Button>
                    </li>
                    <li className="faq-item flex justify-between items-start py-4 px-8 pb-8 border-t-[1px] border-black">
                        <div className="question">
                            <h3 className="number text-[2.3565rem] font-bold">02/</h3>
                            <div className="text text text-[1.417rem] leading-4">Where can I see <strong className="text-[#FE5DB0] font-bold">Sophie’s</strong> Privacy Policy & Terms of Use?</div>
                        </div>
                        <Button title='' classBtn='self-end !bg-[#0057FF] !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-[2.875rem] !h-[2.875rem] !py-0 !px-0 justify-center items-center flex justify-center items-center'><span className="border-white border-2 rounded-full w-5 h-5 flex justify-center items-center"><AddIcon className="text-white font-bold text-sm rotate-[-90deg]"/></span></Button>
                    </li>
                    <li className="faq-item flex justify-between items-start py-4 px-8 pb-8 border-t-[1px]  border-black">
                        <div className="question">
                            <h3 className="number text-[2.3565rem] font-bold">03/</h3>
                            <div className="text text text-[1.417rem] leading-4">How can <strong className="text-black font-bold"> I start with Sophie?</strong></div>
                        </div>
                        <Button title='' classBtn='self-end !bg-[#0057FF] !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-[2.875rem] !h-[2.875rem] !py-0 !px-0 justify-center items-center flex justify-center items-center'><span className="border-white border-2 rounded-full w-5 h-5 flex justify-center items-center"><AddIcon className="text-white font-bold text-sm rotate-[-90deg]"/></span></Button>
                    </li>
                    <li className="faq-item flex justify-between items-start py-4 px-8 pb-8 border-t-[1px] border-b-[1px] border-black">
                        <div className="question">
                            <h3 className="number text-[2.3565rem] font-bold">04/</h3>
                            <div className="text text text-[1.417rem] leading-4">How can I personalize <strong className="text-[#FE5DB0] font-bold">Sophie’s</strong> responses?</div>
                        </div>
                        <Button title='' classBtn='self-end !bg-[#0057FF] !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-[2.875rem] !h-[2.875rem] !py-0 !px-0 justify-center items-center flex justify-center items-center'><span className="border-white border-2 rounded-full w-5 h-5 flex justify-center items-center"><AddIcon className="text-white font-bold text-sm rotate-[-90deg]"/></span></Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
