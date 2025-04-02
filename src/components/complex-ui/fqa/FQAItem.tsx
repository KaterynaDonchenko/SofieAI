import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button/Button";
import AddIcon from '@mui/icons-material/Add';
import { IQuestions } from "@/types/questions.type";

interface IFQAItem {
    question: IQuestions,
    index: number
}
export function FQAItem({question, index}: IFQAItem) {
    const [stateBtn, setStateBtn] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    const {title, color, text} = question

    useEffect(() => {
        if (ref.current) {
          setContentHeight(ref.current.clientHeight);
        }
    }, [ref.current?.textContent]);

    const onChangeAnswerStyles = () => {
        setStateBtn(prevState => !prevState)
    }

    const stylesOfAnswerBlock = stateBtn ? `${contentHeight}px` : `0px`;

    return (
        <li className="faq-item py-4 px-8 pb-8 border-t-[1px] border-black">
                <div className="wrapper flex justify-between items-start pb-8">
                    <div className="question">
                        <h3 className="number text-[2.3565rem] font-bold">0{index}/</h3>
                        <div className="text text-[1.417rem] leading-4">
                            {title.start} 
                            <strong className={`text-[${color}] font-bold`}>{title.highlighted}</strong>
                            {title.end}
                            </div>
                    </div>
                    <div className="btn" onClick={onChangeAnswerStyles}>
                        <Button title='' classBtn='self-end !bg-[#0057FF] !rounded-tl-full !rounded-tr-full !rounded-br-full !rounded-bl-full !min-w-[2.875rem] !h-[2.875rem] !py-0 !px-0 justify-center items-center flex justify-center items-center'><span className="border-white border-2 rounded-full w-5 h-5 flex justify-center items-center"><AddIcon className="text-white font-bold text-sm rotate-[-90deg]"/></span></Button>
                    </div>
                </div>
                <div 
                 className={`answer overflow-hidden transition-[height] duration-[0.2s] ease-linear $`}
                 style={{
                    height: stylesOfAnswerBlock,
                }}>
                    <div ref={ref} style={{ whiteSpace: "pre-line" }}>{text}</div>
                </div>
            </li>
    )
}