import React, { forwardRef, PropsWithChildren, useContext, useEffect, useState } from 'react';
import styles from './Window.module.scss'
import { WindowsContext } from '../../site-layout/SiteLayout';

interface TypeWindow extends React.HTMLProps<HTMLDivElement> {
    className?: string,
    animation: string, 
    index: number
}

function Window({ className, animation, index, children, ...props }: PropsWithChildren<TypeWindow>, ref: React.Ref<HTMLDivElement>) {

    const [windowStyleAnimation, setWindowStyleAnimation] = useState(false)
    const windowsContext = useContext(WindowsContext)

    if (!windowsContext) {
        throw new Error("WindowsContext must be used within a WindowsContextProvider");
    }  

    const { windows } = windowsContext

    useEffect(() => {
        if (windows) {
            handelAnimation(index, windows)
        }
    }, [windows, index])

    const handelAnimation = (index: number, array: boolean[]) => {
        array.forEach((item, i) => {
            if (i === index) {
                setWindowStyleAnimation(item)
            }
        })
    }

    const animationStyle = windowStyleAnimation ? animation : 'opacity-0 invisible'

    return (
        <div ref={ref}
             key={index.toString()} 
             className={`${styles.window} ${className || ''} ${animationStyle}`}
             {...props}>
            {children}
        </div>
    )
}

export default forwardRef(Window);