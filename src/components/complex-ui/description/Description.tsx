'use client'

import Link from "next/link";
import { Title } from "../../ui/title/Title";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../../ui/button/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import styles from './Descriptions.module.scss'

gsap.registerPlugin(ScrollTrigger);
export function Description() {
    const container = useRef(null)
    useEffect(() => {
        const elements = [
            { selector: ".description_title", delay: 0.3 },
            { selector: ".description_text", delay: 0.5 },
        ];

        elements.forEach(({ selector, delay }) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: selector,
                    start: "top 70%",
                    end: "bottom 10%",
                    toggleActions: "play none none none"
                },
            }).to(selector, {
                x: 0,
                opacity: 1,
                duration: 1.5,
                delay,
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, []);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.card',
                start: "top 70%",
                end: "bottom 10%",
                toggleActions: "play none none none"
            },
        }).fromTo(".card",
            { autoAlpha: 0,
                perspective: 2500,
                rotateY: -100, 
            },
            {    
            autoAlpha: 1, 
            perspective: 2500, 
            rotateY: 0,        
            duration: 2,       
            ease: "power2.out", 
        })
    }, [])

    return (
        <div id="description" ref={container} className="description">
                <div className="description__container px-4 pt-[300px] grid gap-[2rem] pb-[5.625rem]">
                    <Title title='Get started with Sophie' classTitle='description_title opacity-0 translate-x-[-100px]'/>
                    <div className="description_text opacity-0 translate-x-[-100px]"><strong>Sophie</strong> is a revolutionary <strong>AI</strong> chatbot powered by <span className="text-[#FE5DB0] font-semibold">GPT-4</span>. From summarize, translate, enhance your text, and generate to answering any question from you, <strong>Sophie</strong> can do it all!</div>
                    <div className="description__wrapper grid gap-[1.625rem] grid-cols-3">
                        <div className="card p-8 rounded-[30px] bg-[black] flex flex-col gap-4">
                            <h3 className="description__title text-white text-[2.3565rem] font-semibold leading-[1.167]">Content Writer</h3>
                            <div className={`${styles.img} description__img`}>
                                <video className="w-full h-auto rounded-lg shadow-lg" autoPlay muted loop playsInline>
                                    <source src="/videos/Automotive_4k_Automotive-4k-mp4.mp4" type="video/mp4" />
                                    <source src="/videos/Automotive_4k_Automotive-4k-webm.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="text text-white pb-6 text-[1.25rem]"><span className="text-[#B682FD]">Sophie is a writing assistant.</span> that helps you create high-quality content for various uses cases.</div>
                            <div className="bottom flex items-end justify-between flex-grow">
                                <Button index={0} label='window' title='' classBtn="!text-[1.3118rem] !text-[#605F60] !font-bold !leading-[1.334] !p-0">
                                    View more
                                </Button>
                                <Button index={0} label='window' title='' classBtn='glowing-shimmer-text !bg-[#9e789b] !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-10 !h-10 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-xl rotate-[-46deg]"/></span></Button>
                            </div>
                        </div>
                        <div className="card p-8 rounded-[30px] bg-black flex flex-col gap-4">
                            <h3 className="description__title text-white text-[2.3565rem] font-semibold leading-[1.167]">Knowledge Base</h3>
                            <div className={`${styles.img} description__img`}>
                                <video className="w-full h-auto rounded-lg shadow-lg" autoPlay muted loop playsInline>
                                    <source src="/videos/Data_Engine-4k-mp4.mp4" type="video/mp4" />
                                    <source src="/videos/Data_Engine-4k-webm.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="text text-white pb-6 text-[1.25rem]"><span className="text-[#FE5DB0]">Sophie’s knowledge base aims to capture human expert knowledge</span> to support decision-making, problem solving, and more.</div>
                            <div className="bottom flex items-end justify-between flex-grow">
                                <Button index={1} label='window' title='' classBtn="!text-[1.3118rem] !text-[#605F60] !font-bold !leading-[1.334] !p-0">
                                    View more
                                </Button>
                                <Button index={1} label='window' title='' classBtn='glowing-shimmer-text !bg-[#9e789b] !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-10 !h-10 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-xl rotate-[-46deg]"/></span></Button>
                            </div>
                        </div>
                        <div className="complex-card grid gap-6">
                            <div className="card p-8 rounded-[30px] bg-black flex flex-col gap-4">
                                <h3 className="description__title text-white text-[2.3565rem] font-semibold leading-[1.167] pb-4">Creativity & Ideas</h3>
                                <div className={`${styles.img} description__img`}>
                                    <video className="w-full h-auto rounded-lg shadow-lg" autoPlay muted loop playsInline>
                                        <source src="/videos/GenAI_720p_GenAI-720p-mp4.mp4" type="video/mp4" />
                                        <source src="/videos/GenAI_720p_GenAI-720p-webm.webm" type="video/webm" />
                                    </video>
                                </div>
                                <div className="text text-white pb-6 text-[1.25rem]"><strong>Producing unique combinations</strong> of familiar ideas.</div>
                                <div className="bottom flex items-end justify-between flex-grow">
                                    <Button index={2} label='window' title='' classBtn="!text-[1.3118rem] !text-[#605F60] !font-bold !leading-[1.334] !p-0">
                                        View more
                                    </Button>
                                    <Button index={2} label='window' title='' classBtn='glowing-shimmer-text !bg-[#9e789b] !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-10 !h-10 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-xl rotate-[-46deg]"/></span></Button>
                                </div>
                            </div>
                            <div className="card p-8 rounded-[30px] bg-black">
                                <div className="text text-white pb-6 text-[1.25rem]"><strong>Discover more interesting features that Sophie supports you.</strong></div>
                                <div className="bottom flex items-end justify-between flex-grow">
                                    <Link href='#download' className="text-[1.3118rem] text-[#605F60] font-bold leading-[1.334]">And more</Link>
                                    <Link href='#download'>
                                        <Button title='' classBtn='glowing-shimmer-text !bg-[#9e789b] !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-10 !h-10 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-xl rotate-[-46deg]"/></span></Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
