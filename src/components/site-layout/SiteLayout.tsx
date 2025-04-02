'use client';

import { useState, createContext, PropsWithChildren, Dispatch, SetStateAction } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { LenisScroll } from "../ui/lenis-scroll/LenisScroll";

interface IWindowContext { 
    windows: boolean[],
    setWindows: Dispatch<SetStateAction<boolean[]>>
}
export const WindowsContext = createContext<IWindowContext | null>(null)
export default function SiteLayout ({children} : PropsWithChildren) {

    const [windows, setWindows] = useState<boolean[]>([false])

    return (
        <WindowsContext.Provider value={{windows, setWindows}}>
            <LenisScroll>
                <Header/>
                {children}
                <Footer/>
            </LenisScroll>
        </WindowsContext.Provider>
    )
}