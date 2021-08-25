import {useRouter } from "next/router"
import { useEffect, useState } from "react";
import {ArrowUpIcon} from '@heroicons/react/outline'


export default function ScrollUp(){
    const [showScrollButton, setShowScrollButton] = useState(true)
    
    const router = useRouter();

    const handleScrollUp = () => {
        router.push("/")
    }

    return (
        <div className={showScrollButton ? "fixed bottom-0 p-10 right-0" : "hidden"}>
            <button className="border-radius-5 bg-green-500 p-5 " onClick={handleScrollUp }>              <ArrowUpIcon className="h-5"/>
 </button>
        </div>
    )
}