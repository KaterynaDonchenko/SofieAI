'use client'

import Link from 'next/link';
import { Menu } from '@/components/ui/menu/Menu';
import { MainLogo } from "@/components/ui/logo/Logo";
import SmallLogo from '../../../assets/small-logo.svg'

import styles from './Header.module.scss'
import { useScroll } from '@/hooks/useScroll';
import { usePathname } from 'next/navigation'
export function Header() {
    const {scroll, scrollY} = useScroll()
    const pathname = usePathname()

    const styleForLogoOnIsNotMainPage = pathname !== '/' ?  styles.titleLogoBlack : styles.titleLogoWhite;

    const logo = scroll ? <SmallLogo/> : <MainLogo classTitleLogo={styleForLogoOnIsNotMainPage} classLogo={styles.logo}/>

    const styleForHeaderAfterScroll = scrollY > 400 ? styles.backgroundOP9 : scrollY > 50 ? styles.backgroundOP4 : '';
    const styleForHeaderWrapperAfterScroll = scroll ? '!py-2' : '';
    const styleForLogoAfterScroll = scroll ? 'h-auto' : styles.logo;

    return (
        <header className={`header fixed top-0 w-full z-40 transition-all duration-[0.3s] ease-linear ${styleForHeaderAfterScroll}`}>
            <div className={`w-[75rem] px-[1.5rem] py-[1.625rem] m-auto flex flex-row justify-between items-center transition-all duration-[0.3s] ease-linear ${styleForHeaderWrapperAfterScroll}`}>
                <Link href="/" className={`logo block h-[4.5rem] ${styleForLogoAfterScroll}`}>
                    {logo}
                </Link>
                <Menu/>
            </div>
        </header>
    )
}