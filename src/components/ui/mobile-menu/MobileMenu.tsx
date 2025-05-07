import Window from "../window/Window";
import { useContext, useState } from "react";
import { WindowsContext } from "@/components/site-layout/SiteLayout";
import { Button } from "../button/Button";
import Link from "next/link";
import styles from '../menu/Menu.module.scss'
import { useWindowWidth } from "@/hooks/useWindowWidth";

export function MobileMenu() {
    const [burgerMenu, setBurgerMenu] = useState(true)
    const screenWidth = useWindowWidth()

    const windowsContext = useContext(WindowsContext)
    
    if (!windowsContext) {
        throw new Error("WindowsContext must be used within a WindowsContextProvider")
    }

    const { setWindows } = windowsContext
     const closeWindow = (index: number) => {
        setWindows(prev => {
            const newWindows = [...prev]; 
            newWindows[index] = !newWindows[index]; 
            return newWindows;
        })
        toggleBurgerMenu()
    }

    const toggleBurgerMenu = () => {
        setBurgerMenu(!burgerMenu)
    }

    const windowAnimationStyle = screenWidth && screenWidth >= 640 ?  'opacity-1 left-[50%]' : 'opacity-1 left-[20%]'

    return (
        <nav className="mobile-menu hidden">
                <Button index={3} label='window' title='' classBtn={`${burgerMenu ? 'flex': '!hidden'}`}>
                    <div className={`${styles.mobileIcon}`} 
                         onClick={toggleBurgerMenu}>
                        <div className={styles.mobileIconLine}></div>
                        <div className={styles.mobileIconLine}></div>
                        <div className={styles.mobileIconLine}></div>
                    </div>
                </Button>
                <Window index={3} className="mobile-menu__window absolute top-0 w-[50%] transition-all duration-[0.5s] ease-linear" animation={windowAnimationStyle} initialAnimationStyle='opacity-0 left-[100%]'>
                    <div className="mobile-menu__list pl-[10px] bg-[linear-gradient(to_bottom,_#80c2ff,_#ab98ff,_#ffddb5,_#fe9df9)] absolute right-0 top-0 w-[100%] z-[99] h-[100vh] transition-all duration-[0.3s] ease-linear animate-gradient-y bg-[length:200%_200%]">
                        <div className="bg-black/10 pt-[100px] h-[100vh]">
                            <div className="close_btn" onClick={() => closeWindow(3)}>
                                <Button initialStyle={false} classBtn="absolute right-[20px] top-[20px] border-solid border-[2px] border-black rounded-full py-[4px] px-[20px] font-bold text-[20px] mb-3">X</Button>
                            </div>
                            <ul className='flex flex-col items-center px-10 gap-5'>
                                <li className="w-full">
                                    <Link href='/'
                                        onClick={() => closeWindow(3)} 
                                        className={`w-full block header-menu-link md:text-base home text-[30px] text-white cursor-pointer transition-all duration-[0.3s] ease-linear`}>Home</Link>
                                </li>
                                <li className="w-full">
                                    <Link href='/terms'
                                        onClick={() => closeWindow(3)} 
                                        className={`w-full block header-menu-link md:text-base terms text-[30px] text-white cursor-pointer transition-all duration-[0.3s] ease-linear`}>Terms of Service</Link>
                                </li>
                                <li className="w-full">
                                    <Link href='/policy'
                                        onClick={() => closeWindow(3)} 
                                        className={`w-full block header-menu-link md:text-base policy text-[30px] text-white cursor-pointer transition-all duration-[0.3s] ease-linear`}>Privacy Policy</Link>
                                </li>
                                <li className="w-full">
                                    <Link href='/questions'
                                        onClick={() => closeWindow(3)}
                                        className={`w-full block header-menu-link md:text-base faq text-[30px] text-white cursor-pointer transition-all duration-[0.3s] ease-linear`}>FAQ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Window>
            </nav>
    )
}
