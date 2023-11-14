import React, { useEffect } from "react";
import { cormorantGaramond } from "../layout";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import useWidth from "./hooks/useWidth";
import Socials from "./socials";
import { Transition } from "@headlessui/react";
import SlideWrapper from "./slideWrapper";
import FadeWrapper from "./fadeWrapper";

export default function Footer() {
  const [email, setEmail] = React.useState("");

  const [status, setStatus] = React.useState(true);
  const [clicked, setClicked] = React.useState(false);
  const [hover, setHover] = React.useState(false);
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
        <SlideWrapper translate="translate-y-32">
          <div className="bg-white fixed bottom-0 left-0 w-full h-auto px-5 py-2">
            <FadeWrapper>
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
            </FadeWrapper>
          </div>
        </SlideWrapper>
      </Transition>
      {width < breakpoints.medium && (
        <div className="relative flex w-full justify-between items-center py-2 px-10 z-10 h-16">
          <p
            className={`${
              !status ? "opacity-100" : "opacity-0"
            } transition-opacity duration-100 ease-in-out`}
          >
            Newsletter
          </p>
          <button
            onClick={() => {
              setStatus(!status);
            }}
            onPointerDown={() => {
              setClicked(true);
            }}
            onPointerUp={() => {
              setClicked(false);
            }}
            onPointerOver={() => {
              setHover(true);
            }}
            onPointerLeave={() => {
              if (clicked) setClicked(false);
              setHover(false);
            }}
            className=""
          >
            {!status && (
              <PlusCircleIcon
                className={`
                ${clicked ? "w-9 h-9 duration-[25ms]" : "w-10 h-10"} 
                ${
                  hover && !clicked ? "w-11 h-11 duration-100" : ""
                } text-black transition-width transition-height ease-in-out`}
              />
            )}
            {status && (
              <div>
                <MinusCircleIcon
                  className={`
                  ${clicked ? "w-9 h-9 duration-[25ms]" : "w-10 h-10"} 
                  ${
                    hover && !clicked ? "w-11 h-11 duration-100" : ""
                  } text-black transition-width transition-height ease-in-out`}
                />
              </div>
            )}
          </button>
          <p
            className={`${
              !status ? "opacity-100" : "opacity-0"
            } transition-opacity duration-100 ease-in-out`}
          >
            Socials
          </p>
        </div>
      )}
    </div>
  );
}
