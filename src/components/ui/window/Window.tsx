import React, { forwardRef, PropsWithChildren, useContext, useEffect, useState } from 'react';
import styles from './Window.module.scss'
import { WindowsContext } from '../../site-layout/SiteLayout';

interface TypeWindow extends React.HTMLProps<HTMLDivElement> {
    className?: string,
    animation: string, 
    index: number,
    initialAnimationStyle?: string
}

function Window({ className, 
                  animation, 
                  initialAnimationStyle = 'opacity-0 invisible', 
                  index, 
                  children, 
                  ...props }: PropsWithChildren<TypeWindow>, ref: React.Ref<HTMLDivElement>) {

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

    const animationStyle = windowStyleAnimation ? animation : initialAnimationStyle

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