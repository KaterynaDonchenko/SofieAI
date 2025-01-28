import { Title } from "@/components/ui/title/Title";
import { Button } from "@/components/ui/button/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Image from "next/image";

export function Features() {
    return (
        <div className="features">
            <Title title="🎉 Features" classTitle='text-center pb-[2rem]'/>
            <div className="wrapper flex gap-4 w-full pb-[5.625rem]">
                <div className="list w-[40%] grid content-center gap-8">
                    <ul className="grid gap-4">
                        <li className="bg-[#60C2FB] px-6 py-4 rounded-[50px] flex justify-between items-center w-full">
                            <div className="font-bold">Chat with Sophie about anything</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-90deg]"/></span></Button>
                        </li>
                        <li className="bg-[#f2f2f2] px-6 py-4 rounded-[50px] flex justify-between items-center w-full">
                            <div className="font-bold">Ask Sophie to help you understand</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-46deg]"/></span></Button>
                        </li>
                        <li className="bg-[#f2f2f2] px-6 py-4 rounded-[50px] flex justify-between items-center w-full">
                            <div className="font-bold">Translate text to other languages</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-46deg]"/></span></Button>
                        </li>
                        <li className="bg-[#f2f2f2] px-6 py-4 rounded-[50px] flex justify-between items-center w-full">
                            <div className="font-bold">Rewrite and improve your content</div>
                            <Button title='' classBtn='!bg-white !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-11 !h-11 !py-0 !px-0 justify-center items-center'><span className=""><ArrowDownwardIcon className="text-black text-xl rotate-[-46deg]"/></span></Button>
                        </li>
                    </ul>
                    <div className="bottom flex justify-between items-center">
                        <div className="acting font-bold text-[1.417rem]">Try it for <strong className="text-[#FE5DB0]">FREE</strong> </div>
                        <Button title='Download' classBtn="text-[1.125rem]">
                            <span className="ml-[0.5rem]"><ArrowDownwardIcon className="text-xl"/></span>
                        </Button>
                    </div>
                </div>
                <div className="img relative">
                    <Image src='/bg.svg' alt='background for image' priority={true} width={681} height={600} />
                    <Image className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] shadow-[7.73056px_7.73056px_0px_0px_rgb(0,0,0)] border border-black rounded-[25px] z-10" src='/chat.gif' alt='chat' unoptimized priority={true} width={220} height={444} />
                </div>
            </div>
        </div>
    )
}
