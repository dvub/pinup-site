import React, { useEffect } from "react";
import { cormorantGaramond } from "../layout";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import useWidth from "./hooks/useWidth";
import Socials from "./socials";
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
      className={`${cormorantGaramond.className} text-sm lg:text-xl md:text-md px-5 py-2 fixed bottom-0 bg-white w-full h-auto z-50 border-t-2 border-black`}
    >
      {status && (
        <div className=" flex w-auto justify-between">
          <div className="">
            <div className="flex justify-between border-2 border-black">
              <p className="p-2">Newsletter</p>
              <button className="px-2 py-1 bg-black text-white font-bold ">
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
      )}
      {width < breakpoints.medium && (
        <div className="flex w-full justify-center">
          <button onClick={() => setStatus(!status)} className="w-auto">
            {!status && <PlusCircleIcon className="w-10 h-10 text-center" />}
            {status && <MinusCircleIcon className="w-10 h-10 text-center" />}
          </button>
        </div>
      )}
    </div>
  );
}
