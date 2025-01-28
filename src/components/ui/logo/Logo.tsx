'use client'

import { HTMLAttributes, useEffect, useRef } from 'react';
import Logo  from '../../../assets/logo.svg';

interface IMainLogo extends HTMLAttributes<HTMLImageElement> {
    classLogo?: string,
    classTitleLogo?: string
}
export function MainLogo({classLogo, classTitleLogo}: IMainLogo) {
    const logoRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        if (logoRef.current && classTitleLogo) {
            const titlePathOfSvg = logoRef.current.children[2] as SVGPathElement;
            titlePathOfSvg.classList.add(classTitleLogo)
        }
    }, [classTitleLogo])

    return (
        <Logo ref={logoRef} className={classLogo}/>
    )
}