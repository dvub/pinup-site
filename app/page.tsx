import "./globals.css";
import Image from "next/image";
import { cormorantGaramond } from "./layout";
import panels from "../public/home/4panels.png";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <main>
      {/* small wrapping div over the navbar because 
        we have this weird absolute image background thing
        i SWEAR i know how to code dude im not a fake :)

        */}
      <div className="z-50 absolute bg-white w-full h-auto ">
        <Navbar />
      </div>
      {/* 
        this is basically just a background image
        if stretched or compressed really weirdly the dimensions will start to look weird
      */}
      <Image
        src={panels}
        alt="Andrew in the Patch Pocket denim for Jack."
        quality={"100"}
        priority
        layout="fill"
        objectFit="cover"
        className="z-0 absolute inset-0"
      />
      {/* 
        here's the footer for the home page, basically just a short description of the background pic item.
      */}
      <div
        className={`${cormorantGaramond.className} text-xs lg:text-xl absolute bottom-0 right-0 left-0 bg-white w-full h-auto `}
      >
        <div className="m-5">
        <p className="text-left">
            <b>CURRENT DISPLAY PIECE:</b> <br/> [Andrew in the] Patch Pocket denim for Jack.
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
