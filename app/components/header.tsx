import Link from "next/link";
import { cormorantGaramond } from "../layout";
import Navbar from "./navbar";

export default function Header() {
  return (
    <>
      {/* wrapper flexbox div, this will allow us to center the link*/}
      <div className="flex justify-center py-0 text-8xl ">
        <Link
          className={`${cormorantGaramond.className}`}
          href="/"
        >
          by sean hayes
        </Link>
      </div>
      <Navbar></Navbar>
    </>
  );
}
