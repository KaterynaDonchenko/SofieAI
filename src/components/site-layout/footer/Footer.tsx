import Link from "next/link"
import EmailIcon from '@mui/icons-material/Email';
import AppleStore from '../../../assets/apple-store-bar.svg'
import GooglePlay from '../../../assets/google-play-bar.svg'
import { MainLogo } from "@/components/ui/logo/Logo";

import styles from './Footer.module.scss'

export function Footer() {
    return (
        <footer>
            <div className="wrapper bg-black pt-[2.1875rem] pb-[4rem]">
            <Link href="/" className={`logo pb-[4.125rem] flex justify-center`}>
                <MainLogo classTitleLogo={styles.titleLogo} classLogo={styles.logo}/>
            </Link>
            <div className="footer-menu">
                <nav className="flex justify-center pb-[4.125rem]">
                    <ul className="flex flex-row items-center gap-12">
                        <li>
                            <Link className="cursor-pointer text-white" href='/'>Home</Link>
                        </li>
                        <li>
                            <Link className="cursor-pointer text-white" href='/'>About Sophie</Link>
                        </li>
                        <li>
                            <Link className="cursor-pointer text-white" href='/'>Features</Link>
                        </li>
                        <li>
                            <Link className="cursor-pointer text-white" href='/'>FAQ</Link>
                        </li>
                        <li>
                            <Link className="cursor-pointer text-white" href='/'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link className="cursor-pointer text-white" href='/'>Terms of Service</Link>
                        </li>
                    </ul>
                </nav>
            </div>
                <div className="flex justify-center">
                    <div className="bottom flex justify-between items-center w-[50%]">
                        <div className="contact flex flex-col items-center gap-[0.625rem]">
                            <div className="title text-white font-bold">Contact</div>
                            <address className="block text-white tracking-[0.00938em]"><EmailIcon fontSize="small" className="ml-1"/> hello.sophie@c0x12c.com</address>
                        </div>
                        <div className="stores flex flex-col items-center gap-[0.625rem]">
                            <div className="title text-white font-bold">Download</div>
                            <div className="stores flex justify-between items-center gap-[4%]">
                                <Link href='#'>
                                    <AppleStore className=' h-[2.185rem]'/>
                                </Link>
                                <Link href='#'>
                                    <GooglePlay className=' h-[2.185rem]'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}