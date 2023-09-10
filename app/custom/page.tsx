"use client";
import Link from "next/link";
import ImageDisplay from "../components/imageDisplay";
import Navbar from "../components/navbar";
import { comfortaa, cormorantGaramond } from "../layout";
import Image from "next/image";
import panelPic from "../../public/home/4panels.png";
import gridPic from "../../public/home/grid pic.png";
import frontPic from "../../public/home/square front.png";
import backPic from "../../public/home/square back.png";
import Footer from "../components/footer";
import useWidth from "../components/hooks/useWidth";
import Info from "./info";
export default function Custom() {
  const { width, breakpoints } = useWidth();
  return (
    <main className={`${comfortaa.className} overflow-hidden`}>
      <Navbar />
      {width > breakpoints.medium && (
        <div>
          <ImageDisplay />
          <div className="w-full flex justify-center">
            <div className="absolute py-32 px-5 z-10 bg-white w-[60%] overflow-y-scroll h-full">
              <Info />
            </div>
          </div>
        </div>
      )}
      {width <= breakpoints.medium && (
        <div className="absolute py-32 px-5">
          <Info />
        </div>
      )}
      <Footer />
    </main>
  );
}
