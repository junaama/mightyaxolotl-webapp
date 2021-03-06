import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ConnectButton from "./ConnectButton";
import Link from "next/link"
import WalletModal from "./WalletModal";
const navigation = [
  { name: "About", href: "/#about", current: true },
  { name: "Roadmap", href: "/#roadmap", current: false },
  { name: "Team", href: "/#team", current: false },
  { name: "FAQ", href: "/#faq", current: false },
];

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-4 md:px-14 lg:px-24">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-ma-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-between sm:items-stretch">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                  <a>
                    <img
                    src="site/logo-min.svg"
                    alt="Mighty Axolotl Logo"
                    className="hidden md:block lg:block h-8 w-auto"
                  />
                  </a>
                  </Link>
                  
                  
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-capriola text-black hover:bg-ma-blue hover:text-white px-3 py-2 rounded-md text-md font-medium"
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <WalletModal/>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-capriola text-black hover:bg-ma-blue hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
