import Link from "next/link";

export default function About() {
  return (
    <div className="overflow-hidden bg-ma-blue">
      <div className="flex flex-col place-items-center sm:flex sm:flex-row">
        {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static"> */}

        <div className="sm:max-w-lg">
          <img src="images/matitlelg.svg" alt="Mighty Axolotl title" className="w-1/2"/>
          <p className="font-open-sans mt-4 text-xl text-white ">
            Mighty Axolotl is a collection of 10,000 Axolotl NFTS on the
            Ethereum blockchain.
          </p>
          <Link href="/mint">
            <a className="font-open-sans inline-block text-center bg-ma-green-dark border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-ma-green-light">
              Mint an Axolotl
            </a>
          </Link>
        </div>

        <div className="rounded-md  ">
          <img src="images/axoh.gif" className="object-contain w-auto h-full " />
        </div>

        {/* <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="block w-full relative">

                  
                    </div>

                  </div>
                </div>
              </div> */}

        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
