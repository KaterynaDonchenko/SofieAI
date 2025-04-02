import { ButtonHTMLAttributes, useContext } from "react"
import { WindowsContext } from '../../site-layout/SiteLayout';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    initialStyle?: boolean,
    title?: string,
    classBtn?: string,
    label?: string,
    index?: number
}

export function Button({initialStyle = true, title, classBtn, label, index = 0, children}: IButton) {
    const windowsContext = useContext(WindowsContext)

    if (!windowsContext) {
        throw new Error("useWindowContext must be used within a WindowContextProvider");
    }  

    const {setWindows} = windowsContext

    const style = 'flex gap-2 rounded-tl-[3.125rem] rounded-tr-[1.25rem] rounded-br-none rounded-bl-[3.125rem] outline-none cursor-pointer leading-7 min-w-[4rem] py-[0.75rem] px-[1.5rem] tracking-[0.02857em] text-white bg-black transition-all duration-[0.3s] ease-linear'
    
    const toggleWindow = () => {
        setWindows(prev => {
            const newWindows = [...prev]; 
            newWindows[index] = !newWindows[index]; 
            return newWindows;
        })
    }

    return (
        <button className={`${classBtn} ${initialStyle ? style : classBtn}`}
                onClick={label === 'window' ? () => toggleWindow() : undefined}>
            {title}
            {children}
        </button>
    )
}