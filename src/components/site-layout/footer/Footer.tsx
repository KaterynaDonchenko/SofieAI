import { useContext } from "react";
import Link from "next/link"
import EmailIcon from '@mui/icons-material/Email';
import AppleStore from '../../../assets/apple-store-bar.svg'
import GooglePlay from '../../../assets/google-play-bar.svg'
import { MainLogo } from "@/components/ui/logo/Logo";
import Window from "@/components/ui/window/Window";
import Image from "next/image";
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
                <Link href="/" className={`logo pb-[4.125rem] flex justify-center`}>
                    <MainLogo classTitleLogo={styles.titleLogo} classLogo={styles.logo}/>
                </Link>
                <div className="footer-menu">
                    <nav className="flex justify-center pb-[4.125rem]">
                        <ul className="flex flex-row items-center gap-12">
                            <li>
                                <Link href='#first-screen' className="cursor-pointer text-white">Home</Link>
                            </li>
                            <li>
                                <Link href='#description' className="cursor-pointer text-white">About Sophie</Link>
                            </li>
                            <li>
                                <Link href='#feature' className="cursor-pointer text-white">Features</Link>
                            </li>
                            <li>
                                <Link href='/questions' className="cursor-pointer text-white">FAQ</Link>
                            </li>
                            <li>
                                <Link href='/policy' className="cursor-pointer text-white">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href='/terms' className="cursor-pointer text-white">Terms of Service</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-center">
                    <div className="bottom flex justify-between items-center w-[50%]">
                        <div className="contact flex flex-col items-center gap-[0.625rem]">
                            <div className="title text-white font-bold">Contact</div>
                            <Link href='mailto:hello.sophie@c0x12c.com' className="block text-white tracking-[0.00938em]"><EmailIcon fontSize="small" className="ml-1"/> hello.sophie@c0x12c.com</Link>
                        </div>
                        <div className="stores flex flex-col items-center gap-[0.625rem]">
                            <div className="title text-white font-bold">Download</div>
                            <div className="stores flex justify-between items-center gap-[4%]">
                                <Link href='https://apps.apple.com/us/app/sophie-guru/id6470261153'>
                                    <AppleStore className=' h-[2.185rem]'/>
                                </Link>
                                <Link href='https://play.google.com/store/apps/details?id=guru.sophie'>
                                    <GooglePlay className=' h-[2.185rem]'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Window index={0} className={`${styles.window} bg-[#FFDEEF]`} animation="opacity-100 visible">
                        <div className="wrapper flex gap-8">
                            <Image className="pb-2" src='/content-writer.png' alt='content writer' width={366} height={292}/>
                            <div className="content">
                                <div className="top flex justify-between items-center pb-2">
                                    <h3 className="text-[2.3565rem] font-semibold title">Content Writer</h3>
                                    <div className="close_btn" onClick={() => closeWindow(0)}>
                                        <Button initialStyle={false} classBtn="border-solid border-[2px] border-black rounded-full py-0 px-[7px] font-bold mb-3">x</Button>
                                    </div>
                                </div>
                                <ul className="window-list">
                                    <li className="window-item list-disc">Sophie is an AI-powered writing assistant that helps you craft high-quality content for any purpose.</li>
                                    <li className="window-item list-disc">Whether you need blog posts, product descriptions, or ad copy, Sophie can help you write engaging and effective content.</li>
                                    <li className="window-item list-disc">With Sophie, you can create content that stands out from the crowd. She is an AI writing assistant that adapts to your needs and goals.</li>
                                </ul>
                            </div>
                        </div>
                    </Window>
                    <Window index={1} className={`${styles.window} bg-[#E2CDFF]`} animation="opacity-100 visible">
                        <div className="wrapper flex gap-8">
                           <Image src='/knowledge-base.png' alt='knowledge-base' width={303} height={246}/>
                            <div className="content">
                                <div className="top flex justify-between items-center pb-2">
                                    <h3 className="text-[2.3565rem] font-semibold title">Knowledge Base</h3>
                                    <div className="close_btn" onClick={() => closeWindow(1)}>
                                        <Button initialStyle={false} classBtn="border-solid border-[2px] border-black rounded-full py-0 px-[7px] font-bold mb-3">x</Button>
                                    </div>
                                </div>
                                <ul className="window-list">
                                    <li className="window-item list-disc">Sophie captures human expert knowledge to support decision-making and problem-solving.</li>
                                    <li className="window-item list-disc">Breadth of knowledge refers to the extent of one`s understanding and familiarity across various domains and disciplines. A person with a broad knowledge base possesses a comprehensive understanding of a wide range of subjects, enabling them to make connections, draw parallels, and apply their knowledge in diverse contexts..</li>
                                    <li className="window-item list-disc">Ability to find the right information the user needs involves the skill of effectively identifying and retrieving relevant information from various sources. This entails understanding the user`s query, evaluating the credibility and reliability of information sources, and synthesizing information from multiple sources to provide a comprehensive response.</li>
                                </ul>
                            </div>
                        </div>
                    </Window>
                    <Window index={2} className={`${styles.window} bg-[#F2F2F2]`} animation="opacity-100 visible">
                        <div className="wrapper flex gap-8">
                            <Image className='pb-6' src='/creativity.png' alt='creativity' width={303} height={98}/>
                            <div className="content">
                                <div className="top flex justify-between items-center pb-2">
                                    <h3 className="text-[2.3565rem] font-semibold title">Creativity & Ideas</h3>
                                    <div className="close_btn" onClick={() => closeWindow(2)}>
                                        <Button initialStyle={false} classBtn="border-solid border-[2px] border-black rounded-full py-0 px-[7px] font-bold mb-3">x</Button>
                                    </div>
                                </div>
                                <ul className="window-list">
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