import { Header } from "@/components/site-layout/header/Header";
import { Description } from "@/components/complex-ui/description/Description";
import { FirstScreen } from "@/components/complex-ui/first-screen/FirstScreen"
import { Features } from "@/components/complex-ui/features/Features";
import { FQA } from "@/components/complex-ui/fqa/FQA";
import { Download } from "@/components/complex-ui/download/Download";
import { Footer } from "@/components/site-layout/footer/Footer";

export default function Main () {
    return (
       <>
             <Header/>
            <div className="container">
                <FirstScreen/>
                <Description/>
                <Features/>
                <FQA/>
                <Download/>
            </div>
            <Footer/>
       </>
    )
}
