'use client'

import { FQA } from "@/components/complex-ui/fqa/FQA"
import styles from './Questions.module.scss'
import { Search } from "@/components/ui/search/Search"
import { createContext, useState, Dispatch, SetStateAction } from "react"

interface ISearchContext {
    questionsSearch: string,
    setQuestionsSearch: Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext<ISearchContext | null>(null);
export const Questions = () => {

    const [questionsSearch, setQuestionsSearch] = useState<string>('')

    return (
        <div className={styles.questions}>
            <div className="container">
                <SearchContext.Provider value={{questionsSearch, setQuestionsSearch}}>
                    <FQA questions={12} search={questionsSearch}>
                        <Search/>
                    </FQA>
                </SearchContext.Provider>
            </div>
        </div>
    )
}