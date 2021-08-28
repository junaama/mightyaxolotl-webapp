import Link from "next/link";

export default function About() {
  return (
    <div className="relative bg-white overflow-hidden bg-ma-blue">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-6xl font font-extrabold font-capriola tracking-tight sm:text-8xl text-ma-pink">
              Mighty Axolotls
            </h1>
              
            <p className="font-open-sans mt-4 text-xl text-magreen ">
              Mighty Axolotl is a collection of 10,000 Axolotl NFTS on the
              Ethereum blockchain.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="images/axo1.png"
                          alt=""
                          className="w-full h-full object-center object-contain"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="images/axo2.png"
                          alt=""
                          className="w-full h-full object-center object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="images/axo3.png"
                          alt=""
                          className="w-full h-full object-center object-contain"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="images/axo4.png"
                          alt=""
                          className="w-full h-full object-center object-contain"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="images/axo1.png"
                          alt=""
                          className="w-full h-full object-center object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="images/axo2.png"
                          alt=""
                          className="w-full h-full object-center object-contain"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="images/axo3.png"
                          alt=""
                          className="w-full h-full object-center object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/mint">
                <a className="font-open-sans inline-block text-center bg-ma-green-dark border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-ma-green-light">
                  Mint an Axolotl
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
