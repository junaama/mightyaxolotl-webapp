import Image from 'next/image'
export default function Sponsor(){

    return (
        <section className="flex flex-row items-center py-8 bg-gray-100 justify-around ">
            <h1 className="font-bold font-capriola text-center text-2xl title-font text-gray-900 p-2">Our Values</h1>
            <div className="text-center">
                <h3>Charity Focused</h3>
            <Image src="/images/Charity_logo.svg" width="100" height="100"/>

            </div>
            <div className="text-center">
                <h3>Community First</h3>
            <Image src="/images/Community_logo.svg" width="100" height="100"/>

            </div>
            <div className="text-center">
                <h3>Full Ownership</h3>
                    <Image src="/images/Ownership_logo.svg" width="100" height="100"/>

            </div>

        </section>
    )
}