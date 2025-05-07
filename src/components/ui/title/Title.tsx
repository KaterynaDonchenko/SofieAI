import { HTMLAttributes } from "react"

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
    title: string,
    classTitle?: string
}
export function Title({title, classTitle}: ITitle) {
    return (
        <h2 className={`title text-[2.9167rem] font-extrabold tracking-[-0.00833em] leading-[1.2] ${classTitle}`}>{title}</h2>
    )
}