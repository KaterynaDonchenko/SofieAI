import { useEffect, useState } from "react";

export function useScroll() {
    const [scroll, setScroll] = useState<boolean>(false)
    const [scrollY, setScrollY] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        const getScrollY = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();
        getScrollY();

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', getScrollY)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('scroll', getScrollY)
        }
    }, [])

    return {
        scroll,
        scrollY
    }
}