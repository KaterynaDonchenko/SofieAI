import { useContext } from "react";
import Link from "next/link"
import EmailIcon from '@mui/icons-material/Email';
import AppleStore from '../../../assets/apple-store-bar.svg'
import GooglePlay from '../../../assets/google-play-bar.svg'
import { MainLogo } from "@/components/ui/logo/Logo";
import Window from "@/components/ui/window/Window";
import { Button } from "@/components/ui/button/Button";

import styles from './Footer.module.scss'
import { WindowsContext } from "../SiteLayout";
import GreyBackground from "@/components/ui/greyBackground/GreyBackground";

export function Footer() {
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
    }

    return (
        <footer>
            <div className="wrapper bg-black pt-[2.1875rem] pb-[4rem]">
                <Link href="/" className={`footer-logo logo pb-[4.125rem] flex justify-center`}>
                    <MainLogo classTitleLogo={styles.titleLogo} classLogo={styles.logo}/>
                </Link>
                <div className="footer-menu">
                    <nav className="footer__nav flex justify-center pb-[4.125rem] md:pb-[2rem]">
                        <ul className="footer-list flex flex-row items-center gap-12">
                            <li className="w-full">
                                <Link href='#first-screen' className="footer-link cursor-pointer text-white">Home</Link>
                            </li>
                            <li className="w-full">
                                <Link href='#description' className="footer-link cursor-pointer text-white">About Sophie</Link>
                            </li>
                            <li className="w-full">
                                <Link href='#feature' className="footer-link cursor-pointer text-white">Features</Link>
                            </li>
                            <li className="w-full">
                                <Link href='/questions' className="footer-link cursor-pointer text-white">FAQ</Link>
                            </li>
                            <li className="w-full">
                                <Link href='/policy' className="footer-link cursor-pointer text-white">Privacy Policy</Link>
                            </li>
                            <li className="w-full">
                                <Link href='/terms' className="footer-link cursor-pointer text-white">Terms of Service</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-center">
                    <div className="footer-bottom flex justify-between items-center w-[50%]">
                        <div className="contact flex flex-col items-center gap-[0.625rem]">
                            <div className="footer-bottom__title text-white font-bold">Contact</div>
                            <Link href='mailto:hello.sophie@c0x12c.com' className="footer__email block text-white tracking-[0.00938em] text-[19px]"><EmailIcon fontSize="small" className="ml-1"/> hello.sophie@c0x12c.com</Link>
                        </div>
                        <div className="stores flex flex-col items-center gap-[0.625rem]">
                            <div className="footer-bottom__title text-white font-bold">Download</div>
                            <div className="stores flex justify-between items-center gap-[4%]">
                                <Link href='https://apps.apple.com/us/app/sophie-guru/id6470261153'>
                                    <AppleStore className='footer__appleStore h-[2.5rem]'/>
                                </Link>
                                <Link href='https://play.google.com/store/apps/details?id=guru.sophie'>
                                    <GooglePlay className='footer__googleStore h-[2.5rem]'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Window index={0} className={`${styles.window} bg-black border border-[#9e789b]`} animation="opacity-100 visible">
                        <div className="window__wrapper flex gap-8">
                            <div className="window__img relative w-full m-auto">
                                <video className="w-full h-full rounded-lg shadow-lg" autoPlay muted loop playsInline>
                                    <source src="/videos/Automotive_4k_Automotive-4k-mp4.mp4" type="video/mp4" />
                                    <source src="/videos/Automotive_4k_Automotive-4k-webm.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="content w-full">
                                <div className="top flex justify-between items-start pb-2">
                                    <h3 className="window__text text-[2.3565rem] pt-5 text-white font-semibold title">Content Writer</h3>
                                    <div className="close_btn" onClick={() => closeWindow(0)}>
                                        <Button initialStyle={false} classBtn="border-solid border-[2px] border-white text-white rounded-full py-0 px-[7px] font-bold mb-3">x</Button>
                                    </div>
                                </div>
                                <ul className="window-list text-white">
                                    <li className="window-item list-disc">Sophie is an AI-powered writing assistant that helps you craft high-quality content for any purpose.</li>
                                    <li className="window-item list-disc">Whether you need blog posts, product descriptions, or ad copy, Sophie can help you write engaging and effective content.</li>
                                    <li className="window-item list-disc">With Sophie, you can create content that stands out from the crowd. She is an AI writing assistant that adapts to your needs and goals.</li>
                                </ul>
                            </div>
                        </div>
                    </Window>
                    <Window index={1} className={`${styles.window} bg-black border border-[#9e789b]`} animation="opacity-100 visible">
                        <div className="window__wrapper flex gap-8">
                            <div className="window__img relative w-full m-auto">
                                <video className="w-full h-auto rounded-lg shadow-lg" autoPlay muted loop playsInline>
                                    <source src="/videos/Data_Engine-4k-mp4.mp4" type="video/mp4" />
                                    <source src="/videos/Data_Engine-4k-webm.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="content w-full">
                                <div className="top flex justify-between items-start pb-2">
                                    <h3 className="window__text text-[2.3565rem] pt-5 text-white font-semibold title">Knowledge Base</h3>
                                    <div className="close_btn" onClick={() => closeWindow(1)}>
                                        <Button initialStyle={false} classBtn="border-solid border-[2px] border-white text-white rounded-full py-0 px-[7px] font-bold mb-3">x</Button>
                                    </div>
                                </div>
                                <ul className="window-list text-white">
                                    <li className="window-item list-disc">Sophie captures human expert knowledge to support decision-making and problem-solving.</li>
                                    <li className="window-item list-disc">Breadth of knowledge refers to the extent of one`s understanding and familiarity across various domains and disciplines.</li>
                                    <li className="window-item list-disc">Ability to find the right information the user needs involves the skill of effectively identifying and retrieving relevant information from various sources</li>
                                </ul>
                            </div>
                        </div>
                    </Window>
                    <Window index={2} className={`${styles.window} bg-black border border-[#9e789b]`} animation="opacity-100 visible">
                        <div className="window__wrapper flex gap-8">
                            <div className="window__img relative w-full m-auto">
                                <video className="w-full h-full rounded-lg shadow-lg" autoPlay muted loop playsInline>
                                    <source src="/videos/GenAI_720p_GenAI-720p-mp4.mp4" type="video/mp4" />
                                    <source src="/videos/GenAI_720p_GenAI-720p-webm.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="content w-full">
                                <div className="top flex justify-between items-start pb-2">
                                    <h3 className="window__text text-[2.3565rem] pt-5 text-white font-semibold title">Creativity & Ideas</h3>
                                    <div className="close_btn" onClick={() => closeWindow(2)}>
                                        <Button initialStyle={false} classBtn="border-solid border-[2px] border-white text-white rounded-full py-0 px-[7px] font-bold mb-3">x</Button>
                                    </div>
                                </div>
                                <ul className="window-list text-white">
                                    <li className="window-item list-disc">Sophie helps you explore new angles, approaches, and ideas that you might not have considered before.</li>
                                </ul>
                            </div>
                        </div>
                    </Window>
                    <GreyBackground/>
            </div>
        </footer>
    )
}