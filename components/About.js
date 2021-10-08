import Image from "next/image";
import MintButton from "./MintButton";
import MintCounter from "./MintCounter";
export default function About() {

  return (
    <div className="relative px-6 bg-ma-blue">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-sl mx-auto  items-center">
        <div className="w-full max-w-screen-sm mx-auto md:mx-0 md:w-6/12 flex-shrink-0 relative">
          <Image src="/site/masite.gif" width="512" height="485" layout="responsive" alt="mighty axolotl gif of nfts"/>

        </div>
        <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md-w-6/12 md:mt-0 md:mr-12 lg:mr-16 md:order-first md:pl-10">
          <div className="lg:py-8 text-center md:text-left">
            <img
              src="images/Black_Title.svg"
              alt="Mighty Axolotl title"
              className="md:text-left"
              width="1277"
              height="407"
            />
            <p className="my-4 font-open-sans text-center md:text-left  md:text-base lg:text-lg font-medium leading-relaxed text-black">
              Mighty Axolotl is a hand-drawn collection of 10,000 cute and
              mighty axolotls minted as NFTs on the Ethereum blockchain. We aim
              to support environmental safeguard for the species.{" "}
            </p>
            <MintButton/>
            <MintCounter/>
          </div>
        </div>
      </div>
    </div>
  );
}
