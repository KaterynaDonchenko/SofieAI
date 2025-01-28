import Image from "next/image";
import { Button } from "../../ui/button/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export function FirstScreen() {
    return (
        <div className="firstScreen pt-[250px]">
            <div className="px-4 w-full flex justify-between items-center">
                <div className="left-block">
                    <h6 className="text font-bold leading-7 tracking-[0.0075em] text-[#FE5DB0] mb-[0.625rem] z-10">Powered GPT-4</h6>
                    <h1 className="title text-[4rem] font-extrabold leading-[1.162] tracking-[-0.01562em]">Hi 🤟, <br/> I’m Sophie</h1>
                    <h2 className="subtitle text-[2.3565rem] leading-[1.162] font-bold mb-4">Your perfect personal assistant!</h2>
                    <Button title='Get started' classBtn='!bg-[#0057FF]'>
                        <span className="ml-[0.5rem]"><ArrowDownwardIcon className="text-xl rotate-[-46deg]"/></span>
                    </Button>
                </div>
                <div className="right-block flex justify-center items-center">
                    <Image src='/piclumen.webp' alt='main image' height={400} width={600}/>
                </div>
            </div>
        </div>
    )
}