import "./globals.css";
import Header from "./components/header";
import Image from "next/image";
import { cormorantGaramond } from "./layout";
import layeredPics from "../public/home/Layered pics.png";
export default function Home() {
  const width = '80vw';

  return (
    <main>
      <Header />
      <div className="flex justify-center ">
        <Image
          src={layeredPics}
          alt="Andrew in the Patch Pocket denim for Jack."
          quality={"100"}
          className={`mt-5`}
          style={{width: width,}}
          priority
        />
      </div>
      <div
        className={`${cormorantGaramond.className} text-xl flex items-center justify-center`}
      >
        <div style={{width: width}}>
          <p className="text-left">
            [Andrew in the] Patch Pocket denim for Jack.
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
