import { useContext, useEffect, useState } from 'react'
import styles from './GreyBackground.module.scss'
import { WindowsContext } from '@/components/site-layout/SiteLayout'
export default function GreyBackground({className = ''}) {

    const [display, setDisplay] = useState('opacity-[0] invisible')
    const windowsContext = useContext(WindowsContext)
    
        if (!windowsContext) {
            throw new Error("WindowsContext must be used within a WindowsContextProvider");
        }  
    
        const { windows } = windowsContext
    
        useEffect(() => {
            if (windows) {
                const isWindowOpen = windows.filter(item => item)

                if (isWindowOpen.length > 0) {
                    setDisplay('opacity-[0.4] visible')
                } else {
                    setDisplay('opacity-[0] invisible')
                }
            }

        }, [windows])

    return (
        <div className={`${styles.greyBg} ${className} ${display}`}>
        </div>
    )
}