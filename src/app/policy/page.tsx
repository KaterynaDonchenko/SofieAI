import { Metadata } from "next";
import { Policy } from "./Policy";

export const metadata: Metadata = {
    title: 'Privacy Policy'
};

export default function doctorPage() {
    return (
        <Policy/>
    )
}
