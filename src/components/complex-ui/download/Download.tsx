import Image from "next/image";
import { Title } from '../../ui/title/Title';
import Link from "next/link";
import AppleStore from '../../../assets/apple-store-bar.svg'
import GooglePlay from '../../../assets/google-play-bar.svg'

export function Download() {
    return (
        <div className="download">
            <div className="wrapper px-6 flex justify-between">
                <Image src='/download-decoration-left.png' alt='download decoration left' width={235} height={306}/>
                <div className="main">
                    <div className="title-wrapper flex justify-between items-center pb-8">
                        <Image src='/sophie-avatar.png' alt='sophie avatar' width={66} height={68}/>
                        <Title title='Meet Sophie now'/>
                    </div>
                    <h2 className="subtitle text-[2.3565rem] text-center font-medium pb-2">Try it for FREE</h2>
                    <div className="stores flex justify-between items-center">
                        <Link href='#'>
                            <AppleStore className=' h-[4.5323rem]'/>
                        </Link>
                        <Link href='#'>
                            <GooglePlay className=' h-[4.375rem]'/>
                        </Link>
                    </div>
                </div>
                <Image src='/download-decoration-right.png' alt='download decoration right' width={253} height={223}/>
            </div>
        </div>
    )
}