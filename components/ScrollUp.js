import {useRouter } from "next/router"
import { useEffect, useState } from "react";
import {ArrowUpIcon} from '@heroicons/react/outline'


export default function ScrollUp(){
    const [showScrollButton, setShowScrollButton] = useState(true)
    
    useEffect(()=> {
        const scrollLogic = () => {
            if(typeof window !== "undefined"){
                window.onscroll = () => {
                    let currentScrollPos = window.pageYOffset;
                    console.log(currentScrollPos)
                    let maxScroll = document.body.scrollHeight - window.innerHeight;
                    console.log("scr: ", maxScroll)
                    if(currentScrollPos > 400 && currentScrollPos < maxScroll) {
                        setShowScrollButton(true)
                    } else {
                        setShowScrollButton(false)
                    }
                }
            }
        }
        scrollLogic()
    },[])

    const router = useRouter();

    const handleScrollUp = () => {
        router.push("/")
    }

    return (
        <div className={showScrollButton ? "fixed bottom-0 p-10 right-0" : "hidden"}>
            <button className="border-radius-5 bg-ma-pink p-2 " onClick={handleScrollUp }>              <ArrowUpIcon className="h-5"/>
 </button>
        </div>
    )
}