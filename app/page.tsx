"use client";
import "./globals.css";
import Image from "next/image";
import { cormorantGaramond } from "./layout";
import Navbar from "./components/navbar";
import * as React from "react";

import panelPic from "../public/home/4panels.png";
import gridPic from "../public/home/grid pic.png";
import frontPic from "../public/home/square front.png";
import backPic from "../public/home/square back.png";

export default function Home() {
  //

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1100; // the width of the side-by-side picture on its own
  const smallBreakpoint = 800;

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">

      {width > breakpoint && (
        <div >
          <Image
            src={panelPic}
            alt="Andrew in the Patch Pocket denim for Jack."
            quality={"100"}
            priority
            sizes="2001px"
            fill
            objectFit="cover"
          />
        </div>
      )}
      {width <= breakpoint && (
        <div>
          <Image
            src={gridPic}
            alt="Andrew in the Patch Pocket denim for Jack."
            quality={"100"}
            sizes="1080px"
          />
          {width <= smallBreakpoint && (
            <div>
              <p className={`absolute w-full text-center ${cormorantGaramond.className}`}>[scroll]</p>
              <Image
                src={frontPic}
                alt="Andrew in the Patch Pocket denim for Jack."
                quality={"100"}
                sizes="2048px" // this will download the image in full quality
              />
              <Image
                src={backPic}
                alt="Andrew in the Patch Pocket denim for Jack."
                quality={"100"}
                sizes="2048px" // this will download the image in full quality
              />
            </div>
          )}
        </div>
      )}
            </div>
      <div
        className={`${cormorantGaramond.className} text-xs lg:text-xl sticky right-0 bottom-0 bg-white w-full h-auto`}
      >
        <div className="px-5 py-2">
          <p className="text-left">
            above: [Andrew in the] Patch Pocket denim for Jack.
          </p>
          <p className="text-right">
            Made of a 12.5 oz Japanese Selvedge denim.
            <br /> Button fly using imported Japanese donut buttons. Front and
            back pockets inspired by 1940&apos;s denim.
          </p>
        </div>
      </div>
    </main>
  );
}
