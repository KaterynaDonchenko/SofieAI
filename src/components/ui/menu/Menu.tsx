import Link from "next/link"
import { Button } from "../button/Button"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export function Menu() {
    return (
        <nav className="flex gap-[3rem]">
            <ul className="flex flex-row items-center gap-12">
                <li>
                    <Link className="text-lg cursor-pointer" href='/'>Home</Link>
                </li>
                <li>
                    <Link className="text-lg cursor-pointer" href='/'>Terms of Service</Link>
                </li>
                <li>
                    <Link className="text-lg cursor-pointer" href='/'>Privacy Policy</Link>
                </li>
                <li>
                    <Link className="text-lg cursor-pointer" href='/'>FAQ</Link>
                </li>
            </ul>
            <Button title='Download'>
                <span className="ml-[0.5rem]"><ArrowDownwardIcon className="text-xl"/></span>
            </Button>
        </nav>
    )
}