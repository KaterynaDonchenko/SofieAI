import { Metadata } from "next";
import { Terms } from "./Terms";

export const metadata: Metadata = {
    title: 'Terms of Service'
};

export default function doctorPage() {
    return (
        <Terms/>
    )
}


