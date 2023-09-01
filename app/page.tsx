import "./globals.css";
import Header from "./components/header";
import Image from "next/image";
import { cormorantGaramond } from "./layout";


export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <div >
          <div className="flex justify-center relative w-full">
            <Image
              src="/home/front.jpg"
              alt="front"
              width="0"
              height="0"
              sizes="45vw"
              className="w-auto h-auto "
              quality="100"
            ></Image>
            <Image
              src="/home/back.jpg"
              alt="back"
              width="0"
              height="0"
              sizes="45vw"
              className="w-auto h-auto "
              quality="100"
            ></Image>
          </div>
          <div className="flex justify-center absolute w-full">
            <Image
              src="/home/grid pic.png"
              alt="grid pic"
              width="0"
              height="0"
              sizes="25vw"
              className="w-auto h-auto "
              quality="100"
            ></Image>
          </div>
        </div>
      </div>
      <div className={`${cormorantGaramond.className} mx-10 text-xl`}>
      <p className="text-left">
        [Andrew in the] Patch Pocket denim for Jack.
      </p>
      <p className="text-right">
        Made of a 12.5 oz Japanese Selvedge denim.<br/> Button fly using imported Japanese donut buttons. Front and back pockets inspired by 1940&apos;s denim.
      </p>
      </div>
    </main>
  );
}
