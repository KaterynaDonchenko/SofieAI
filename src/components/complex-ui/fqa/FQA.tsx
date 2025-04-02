'use client'

import { Title } from "@/components/ui/title/Title";
import { ReactNode, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { QUESTIONS } from "@/constants/variable.constants";
import { FQAItem } from "./FQAItem";
import { IQuestions } from "@/types/questions.type";

gsap.registerPlugin(ScrollTrigger)

interface IFQA {
    questions: number,
    search?: string | null,
    children?: ReactNode;
}
export function FQA({questions, search, children}: IFQA) {
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
            stagger: 0.3,        
            duration: 1.5,       
            ease: "power2.out", 
        });
    }, []);

    const getQuestionList = (array: IQuestions[]) => {
        return array.slice(0, questions).map((item, i) => {
            return <FQAItem key={i} question={item} index={i+1}/>
        })
    }

    const getSearchQuestions = (array: IQuestions[], search: string) => {
        return array.filter(item => item.title.start.toLowerCase().match(search.toLowerCase()) ||
                                    item.title.highlighted.toLowerCase().match(search.toLowerCase()) ||
                                    item.title.end.toLowerCase().match(search.toLowerCase()))
    }


    const list = search && search?.length > 2  
                ? getQuestionList(getSearchQuestions(QUESTIONS, search)) 
                : getQuestionList(QUESTIONS)               

    const mainTitle = <Title title="📮 FAQ"/>                                  
    const titleResult = <Title title="💡 Results"/>
    const titleNoResult = <Title title="🕳 No Results"/>

    const title = !search || search.length < 2 
                  ? mainTitle 
                  : search.length > 2 && list.length === 0 
                  ? titleNoResult 
                  : titleResult;

    return (
        <div ref={container} className="fqa">
            <div className="title flex justify-between items-center pb-8">
                {title}
                {children}
            </div>
            <div className="questions pb-[5.625rem]">
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    )
}

