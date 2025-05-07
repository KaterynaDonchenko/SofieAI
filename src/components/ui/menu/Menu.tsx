import Link from "next/link"
import { Button } from "../button/Button"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useScroll } from "@/hooks/useScroll";
import { usePathname } from 'next/navigation'

import styles from './Menu.module.scss'
export function Menu() {    
    const {scroll} = useScroll()
    const pathname = usePathname()


    const styleForMenuItemAfterScroll = scroll ? 'gap-8' : 'gap-12';
    const styleForButtonAfterScroll = scroll ? 'px-[20px] py-[10px] text-[14px]' : 'bg-white !text-black';
    const styleForArrowInButton = scroll ? 'text-white': 'text-black';

    const styleForMenuItemOnIsNotMainPage = pathname !== '/' ?  '!text-black' : '';
    const styleForButtonOnIsNotMainPage = pathname !== '/' ?  '!bg-black !text-white' : '';

    const isActive = (href: string) => pathname === href ? styles.link : '';

    return (
        <>
            <nav className="menu flex gap-[3rem]">
                <ul className={`menu-list flex flex-row items-center transition-all duration-[0.3s] ease-linear ${styleForMenuItemAfterScroll}`}>
                    <li className="menu-item">
                        <Link href='/' 
                            className={`header-menu-link md:text-base home text-lg text-white cursor-pointer transition-all duration-[0.3s] ease-linear ${styleForMenuItemAfterScroll} ${styleForMenuItemOnIsNotMainPage} ${isActive('/')}`}>Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link href='/terms' 
                            className={`header-menu-link md:text-base terms text-lg text-white cursor-pointer transition-all duration-[0.3s] ease-linear ${styleForMenuItemAfterScroll} ${styleForMenuItemOnIsNotMainPage} ${isActive('/terms')}`}>Terms of Service</Link>
                    </li>
                    <li className="menu-item">
                        <Link href='/policy' 
                            className={`header-menu-link md:text-base policy text-lg text-white cursor-pointer transition-all duration-[0.3s] ease-linear ${styleForMenuItemAfterScroll} ${styleForMenuItemOnIsNotMainPage} ${isActive('/policy')}`}>Privacy Policy</Link>
                    </li>
                    <li className="menu-item">
                        <Link href='/questions'
                            className={`header-menu-link md:text-base faq text-lg text-white cursor-pointer transition-all duration-[0.3s] ease-linear ${styleForMenuItemAfterScroll} ${styleForMenuItemOnIsNotMainPage} ${isActive('/questions')}`}>FAQ</Link>
                    </li>
                </ul>
                <Link href='#download' className="header__btn" >
                        <Button title='Download' classBtn={`glowing-shimmer-text menu__btn ${styleForButtonAfterScroll} ${styleForButtonOnIsNotMainPage}`}>
                            <span className="ml-[0.5rem]"><ArrowDownwardIcon className={`transition-all duration-[0.3s] ease-linear ${styleForArrowInButton}$text-xl`}/></span>
                        </Button>
                </Link>
            </nav>
        </>
    )
}