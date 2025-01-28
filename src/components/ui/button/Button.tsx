import { ButtonHTMLAttributes } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    classBtn?: string;
}

export function Button({title, classBtn, children}: IButton) {
    return (
        <button className={`flex gap-2 rounded-tl-[3.125rem] rounded-tr-[1.25rem] rounded-br-none rounded-bl-[3.125rem] outline-none cursor-pointer leading-7 min-w-[4rem] py-[0.75rem] px-[1.5rem] tracking-[0.02857em] text-white bg-black ${classBtn}`}>
            {title}
            {children}
        </button>
    )
}