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

export default function Custom() {
  return (
    <main
      className={`${comfortaa.className} lg:overflow-hidden w-screen h-screen`}
    >
      <Navbar />
      <div className="flex pt-24 px-5 ">
        <div className="w-[50%]">
          <h2 className={`${cormorantGaramond.className} text-6xl`}>
            Custom pants
          </h2>
          <p className="p-2">
            Custom pants start at 300USD + fabric cost + design complexity.
            (i.e. the price increases with the complexity of the desired design)
            Fabric is sourced for each pair individually based on your ideal
            specifications; you can expect the fabric to cost 20-50USD.
          </p>
          <h2 className={`${cormorantGaramond.className} text-6xl`}>
            Required Measurements
          </h2>
          <div className="p-2">
            <p>Please provide the following measurements in your inquiry:</p>
            <ul className="p-1 list-['+']">
              <li>waist</li>
              <li>hips</li>
              <li>rise</li>
              <li>thigh</li>
              <li>inseam</li>
              <li>leg opening</li>
            </ul>
          </div>
          <h2 className={`${cormorantGaramond.className} text-6xl`}>Designs</h2>
          <p className="p-2">
            Include any specific design aspects you want and a
            reference/inspiration photo. I draft the pattern based on everything
            you provide, so please be thorough.
          </p>
          <h1 className={`${cormorantGaramond.className} text-6xl`}>Submit</h1>
          <p className="p-2">
            Once you have the above measurements, reference pictures, etc. and
            are ready to place your order, shoot me an email here: [EMAIL HERE]{" "}
            <br />
            Expect a turn-around time of a few weeks to a month based on the
            number of orders ahead of yours. I will keep you updated on
            everything and work as quickly as possible. Include anything else
            you feel is important to your design; Again, don&apos;t be afraid to
            be thorough. Custom garments come with free repairs for life :)
          </p>

          <h1 className={`${cormorantGaramond.className} text-6xl`}>
            Other Garments
          </h1>
          <p className="p-2">
            if you&apos;re interested in anything other than pants: please
            contact me{" "}
            <u>
              <Link href="contact">here</Link>
            </u>
            . I&apos;ll get back to you ASAP.
          </p>
        </div>
        <div className="w-[50%]">
          <Image
            src={gridPic}
            alt="close-up fit, close-up fabric"
            quality={"100"}
            sizes="1080px"
            priority
          />
          <div className="w-full flex">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
