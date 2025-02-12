'use client'

import Link from 'next/link';
import { Menu } from '@/components/ui/menu/Menu';
import { MainLogo } from "@/components/ui/logo/Logo";
import SmallLogo from '../../../assets/small-logo.svg'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

import styles from './Header.module.scss'
import { useScroll } from '@/hooks/useScroll';
export function Header() {
    const scroll = useScroll()

    // useEffect(() => {
    //     const tl = gsap.timeline({
    //       repeat: -1,
    //       defaults: { duration: 5, ease: "power1.inOut" }
    //     });
    
    //     tl.to('header', {
    //       background: 'linear-gradient(45deg, rgba(0, 255, 0, 0.4), rgb(0, 0, 255, 0.4))',
    //     })
    //     .to('header', {
    //       background: 'linear-gradient(45deg, rgb(0, 0, 255, 0.4), rgb(255, 0, 0, 0.4))',
    //     });
    
    //   }, []);

    const logo = scroll ? <SmallLogo/> : <MainLogo classTitleLogo={styles.titleLogo} classLogo={styles.logo}/>

    return (
        <header className={`fixed top-0 w-full z-40 transition-all duration-[0.3s] ease-linear ${scroll ? styles.background : ''}`}>
            <div className={`w-[75rem] px-[1.5rem] py-[1.625rem] m-auto flex flex-row justify-between items-center transition-all duration-[0.3s] ease-linear ${scroll ? '!py-2' : ''}`}>
                <Link href="/" className={`logo block h-[4.5rem] ${scroll ? 'h-auto' : styles.logo}`}>
                    {logo}
                </Link>
                <Menu/>
            </div>
        </header>
    )
}