import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Accordion() {
  return (
    <div className="w-full p-4" id="faq">
      <h1 className="font-bold font-capriola text-center text-2xl title-font mb-4 text-gray-900">
        FAQ
      </h1>
      <div className="w-full p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black bg-ma-green-light rounded-lg hover:bg-ma-green focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="font-capriola">What makes Mighty Axolotl different from other NFT collections?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="font-open-sans px-4 pt-4 pb-2 text-md font-open-sans text-gray-500">
                Mighty Axolotl represents a community-led initiative to raise awareness about the different medicinal and biological applications of regenerative science. Each member has the power to influence the product and support a meaningful cause.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black bg-ma-green-light rounded-lg hover:bg-ma-green focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="font-capriola">Can I choose my axolotl character?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md font-open-sans text-gray-500">
                No. The Mighty Axolotl will be randomly distributed when minted.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black bg-ma-green-light rounded-lg hover:bg-ma-green focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="font-capriola">How do I join the presale? </span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md font-open-sans text-gray-500">
                Join our Discord and be one of the first 200 people to claim a spot! Presale starts September 20 @ 10PM CEST
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black bg-ma-green-light rounded-lg hover:bg-ma-green focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="font-capriola">When is the reveal?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md font-open-sans text-gray-500">
                All NFTS are revealed on launch date! Stay tuned.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black bg-ma-green-light rounded-lg hover:bg-ma-green focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="font-capriola">When does the sale start?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md font-open-sans text-gray-500">
                September 23 @ 10PM CEST! Keep your eyes posted in  <a href="https://discord.gg/J4ehYV4Yrz" className="text-ma-blue underline">Discord</a> for more details!
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black bg-ma-green-light rounded-lg hover:bg-ma-green focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="font-capriola">How can I contact the team? </span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md font-open-sans text-gray-500">
                Feel free to contact the creators on <a href="https://discord.gg/J4ehYV4Yrz" className="text-ma-blue underline">Discord</a> !
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      
      </div>
    </div>
  );
}
