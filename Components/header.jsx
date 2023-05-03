import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon,  } from "@heroicons/react/24/outline";


const navigation = [
  { name: "HOME", href: "#",  },
  { name: "WEB3", href: "#",  },
  { name: "BLOCKCHAIN", href: "#",  },
  { name: "AI", href: "#",  },
  { name: "CLOUD COMPUTING", href: "#",  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <>
      <div className="min-h-full ">
        <Disclosure as="nav" className="bg-black">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <div className="flex h-16 items-center  justify-between ">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-shrink-0">
                     
                      <a className="text-white   rounded-md px-3 py-2 text-md font-bold">
                        PANAVERSE
                      </a>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-white  hover:text-[#dc12fc] rounded-md px-3 py-2 text-md font-bold"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="lg:block ">
                    <div className="ml-4 flex justify-between items-center ">
                      <a href="">
                        <img src="/telegram.svg" alt="" className="w-8 ml-3" />
                      </a>
                      <a href="">
                        <img src="/twitter.svg" alt="" className="w-8 ml-3" />
                      </a>
                      <a href="">
                        <img src="/discord.svg" alt="" className="w-8 ml-3" />
                      </a>
                    </div>
                  </div>
                  <Menu as="div" className="relative ml-3 lg:hidden md:block">
                    <div>
                      <Menu.Button className="flex max-w-xs text-white items-center rounded-full ">
                        <Bars3Icon className="text-white w-10" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute  z-10 mt-4 w-36 right-[-8px] origin-top-right rounded-md bg-[#000000B3] py-1  shadow-lg  focus:outline-none">
                        {navigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className="block px-4 py-2 text-md text-[#FFFFFF]"
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
