'use client'

import { Description } from "@/components/complex-ui/description/Description";
import { FirstScreen } from "@/components/complex-ui/first-screen/FirstScreen";
import { Features } from "@/components/complex-ui/features/Features";
import { FQA } from "@/components/complex-ui/fqa/FQA";
import { Download } from "@/components/complex-ui/download/Download";
import Link from "next/link";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Main () {

    return (
        <div className="container">
            <FirstScreen/>
            <Description/>
            <Features/> 
            <FQA questions={4}>
                <Link href="/questions" className="text-[#0057FF] flex gap-2 items-center">View more <ArrowDownwardIcon className="text-xl rotate-[-90deg]"/></Link>
            </FQA>
            <Download/>
        </div>
    )
}
