import Link from "next/link";

export default function About() {
  return (
    <div className="relative px-6 bg-ma-blue">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-sl mx-auto  items-center">
        <div className="w-full max-w-screen-sm mx-auto md:mx-0 md:w-6/12 flex-shrink-0 relative">
          <img
            src="images/Mighty-Axolotl.gif"
            className="block object-contain max-w-full-lg h-auto p-16 "
          />
        </div>
        <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md-w-6/12 md:mt-0 md:mr-12 lg:mr-16 md:order-first md:pl-10">
          <div className="lg:py-8 text-center md:text-left">
            <img
              src="images/matitle.svg"
              alt="Mighty Axolotl title"
              className="md:text-left"
            />
            <p className="my-4 font-open-sans text-center md:text-left  md:text-base lg:text-lg font-medium leading-relaxed text-white">
              Mighty Axolotl is a handdrawn collection of 10,000 cute and mighty axolotls minted as NFTs on the
              Ethereum blockchain. We aim to support axolotl research and build our community through this collection.{" "}
            </p>

            <Link href="/mint">
              <a className="font-open-sans inline-block text-center bg-ma-green-dark border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-ma-green-light mb-4">
                Mint an Axolotl
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
