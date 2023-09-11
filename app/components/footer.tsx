import React, { useEffect } from "react";
import { cormorantGaramond } from "../layout";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import useWidth from "./hooks/useWidth";
import Socials from "./socials";
import { Transition } from "@headlessui/react";
export default function Footer() {
  const [email, setEmail] = React.useState("");

  const [status, setStatus] = React.useState(true);
  const { width, breakpoints } = useWidth();

  // default states for different views

  useEffect(() => {
    if (width > breakpoints.medium) {
      setStatus(true);
    }
    if (width <= breakpoints.medium) {
      setStatus(false);
    }
  }, [width, breakpoints]);

  return (
    <div
      className={`${cormorantGaramond.className} text-sm lg:text-xl md:text-md fixed bottom-0 bg-white w-full h-auto z-50`}
    >
      <Transition show={status}>
        <Transition.Child
          enter="transition ease duration-500 transform"
          enterFrom="translate-y-32"
          enterTo="translate-y-0"
          leave="transition ease duration-300 transform"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-32"
        >
          <div className="bg-white fixed bottom-0 left-0 w-full h-auto px-5 py-2 border-t-[1px] border-black ">
            <Transition.Child
              enter="transition ease duration-500 transform"
              enterFrom="opacity-0 translate-y-12"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease duration-300 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-12"
            >
              <div className="flex w-auto justify-between h-auto">
                <div>
                  <div className="flex justify-between border-2 border-black">
                    <p className="p-2">Newsletter</p>
                    <button className="px-2 py-1 bg-black text-white font-bold">
                      Submit
                    </button>
                  </div>

                  <div className="my-1">
                    <form>
                      <input
                        type="text"
                        placeholder="Email..."
                        className="w-full border-black border-2 p-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </form>
                  </div>
                </div>
                <Socials />
              </div>
            </Transition.Child>
          </div>
        </Transition.Child>
      </Transition>

      {width < breakpoints.medium && (
        <div className="flex w-full justify-center p-2 border-t-[1px] border-black z-10">
          <button onClick={() => setStatus(!status)} className="w-auto">
            {!status && (
              <PlusCircleIcon className="w-10 h-10 text-center text-slate-400" />
            )}
            {status && (
              <MinusCircleIcon className="w-10 h-10  text-center text-slate-400" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
