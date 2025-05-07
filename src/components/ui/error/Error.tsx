import Image from "next/image";
export function Error() {
    return (
        <div className="error flex items-center gap-2 justify-center">
            <div className="error__img">
                <Image src='/error.webp' alt='error' width={300} height={200}/>
            </div>
            <div className="error__text lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
                No matching content found
            </div>
        </div>
    )
}