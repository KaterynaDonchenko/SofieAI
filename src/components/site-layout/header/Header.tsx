import Link from 'next/link';
import { Menu } from '@/components/ui/menu/Menu';
import { MainLogo } from "@/components/ui/logo/Logo";

import styles from './Header.module.scss'
export function Header() {
    return (
        <header className="fixed top-0 w-full z-40 transition-color duration-[0.3s] ease-linear">
            <div className="w-[75rem] px-[1.5rem] py-[1.625rem] m-auto flex flex-row justify-between items-center">
                <Link href="/" className={`logo block h-[4.5rem] ${styles.logo}`}>
                    <MainLogo classLogo={styles.logo}/>
                </Link>
                <Menu/>
            </div>
        </header>
    )
}