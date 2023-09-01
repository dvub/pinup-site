import Link from "next/link";
import { cormorantGaramond } from "../layout";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div>
      <Link
        className={`${cormorantGaramond.className} text-center`}
        style={{
          color: "black",
          fontSize: "6.25rem",
          fontStyle: "normal",
          margin: "0",
          padding: "0",
        }}
        href="/"
      >
        by sean hayes
      </Link>

      <Navbar></Navbar>
    </div>
  );
}
