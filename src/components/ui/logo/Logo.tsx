'use client'

import { HTMLAttributes, useEffect, useRef } from 'react';
import Logo  from '../../../assets/logo.svg';

interface IMainLogo extends HTMLAttributes<HTMLImageElement> {
    classLogo?: string,
    classTitleLogo?: string
}
export function MainLogo({classLogo, classTitleLogo}: IMainLogo) {
    const logoRef = useRef<SVGSVGElement>(null)
    const prevClassRef = useRef<string | null>(null);

    useEffect(() => {
        if (logoRef.current && classTitleLogo) {
            const titlePathOfSvg = logoRef.current.children[2] as SVGPathElement;

            if (prevClassRef.current) {
                titlePathOfSvg.classList.remove(prevClassRef.current);
            }

            titlePathOfSvg.classList.add(classTitleLogo);

            prevClassRef.current = classTitleLogo;
        }
    }, [classTitleLogo])

    return (
        <Logo ref={logoRef} className={`${classLogo} transition-all duration-[0.3s] ease-linear`}/>
    )
}
