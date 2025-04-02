import { Metadata } from "next";
import { Questions } from "./Questions";

export const metadata: Metadata = {
    title: 'Privacy Policy'
};

export default function QuestionsPage() {
    return (
        <Questions/>
    )
}
