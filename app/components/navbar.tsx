import { Comfortaa } from "next/font/google";
import NavbarItem from "./navbar-item";
import Link from "next/link";
import { cormorantGaramond } from "../layout";
export const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--comfortaa",
});

export default function Navbar() {
  return (
    <div>
      <nav
        className={`${comfortaa.className} flex justify-between items-end nowrap mx-10 text-2xl`}
      >
        <ul className="flex">
          <NavbarItem text="CUSTOM INQUIRY" link="/"></NavbarItem>
          <NavbarItem text="SHOP" link="/"></NavbarItem>
        </ul>
        <Link
          className={`${cormorantGaramond.className} text-8xl`}
          href="/"
        >
          by sean hayes.
        </Link>
        <ul className="flex">
          <NavbarItem text="ABOUT" link="about"></NavbarItem>
          <NavbarItem text="CONTACT" link="about"></NavbarItem>
        </ul>
      </nav>
    </div>
  );
}
