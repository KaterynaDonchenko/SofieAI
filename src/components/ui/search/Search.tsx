'use client'

import { useContext } from "react"
import type { ChangeEvent } from "react"
import { useState } from "react"
import { SearchContext } from "@/app/questions/Questions"
import Image from "next/image"

import styles from './Search.module.scss'

interface ISearchProps {
    inputClass?: string,
    iconClass?: string,
    placeholder?: string
}
export function Search({placeholder = 'Search...', 
                        inputClass = '', 
                        iconClass = ''}: ISearchProps) {

    const [ search, setSearchParam] = useState<string | null>(null)
    const searchContext = useContext(SearchContext)

    if (!searchContext) {
        throw new Error("useSearchContext must be used within a SearchContextProvider");
    }

    const { setQuestionsSearch } = searchContext; 

    const onSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParam(e.target.value)
        setQuestionsSearch(e.target.value)
    }

    return (
        <div className={styles.search}>
            <div className={`${styles.iconWrapper} ${iconClass}`}>
                <Image
                    src={'/icons/search.svg'}
                    alt='search'
                    height={20}
                    width={20}
                />
            </div>
            <input onChange={onSetSearch}
                   value={search || ''}
                   className={`${styles.input} ${inputClass}`} 
                   placeholder={placeholder}/>
        </div>
    )
}