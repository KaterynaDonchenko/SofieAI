import { Metadata } from "next";
import { Questions } from "./Questions";

export const metadata: Metadata = {
    title: 'Questions'
};

export default function QuestionsPage() {
    return (
        <Questions/>
    )
}
