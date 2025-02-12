import Link from "next/link"
import { Button } from "../button/Button"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useScroll } from "@/hooks/useScroll";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
export function Menu() {
    const scroll = useScroll()
    const container = useRef()

    return (
        <nav ref={container} className="flex gap-[3rem]">
            <ul className="flex flex-row items-center gap-12">
                <li>
                    <Link className={`header-menu-link text-lg text-white cursor-pointer transition-all duration-[0.3s] ease-linear ${scroll ? 'text-[16px]' : ''}`} href='/'>Home</Link>
                </li>
                <li>
                    <Link className={`header-menu-link text-lg text-white cursor-pointer transition-all duration-[0.3s] ease-linear ${scroll ? 'text-[16px]' : ''}`} href='/'>Terms of Service</Link>
                </li>
                <li>
                    <Link className={`header-menu-link text-lg text-white cursor-pointer transition-all duration-[0.3s] ease-linear ${scroll ? 'text-[16px]' : ''}`} href='/'>Privacy Policy</Link>
                </li>
                <li>
                    <Link className={`header-menu-link text-lg text-white cursor-pointer transition-all duration-[0.3s] ease-linear ${scroll ? 'text-[16px]' : ''}`} href='/'>FAQ</Link>
                </li>
            </ul>
            <Button title='Download' classBtn={`${scroll ? 'px-[20px] py-[10px] text-[14px]' : 'bg-white !text-black'}`}>
                <span className="ml-[0.5rem]"><ArrowDownwardIcon className={`${scroll ? 'text-white': 'text-black'}$text-xl`}/></span>
            </Button>
        </nav>
    )
}