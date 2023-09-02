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
    <div className="z-50 sticky top-0 left-0 bg-white w-full h-auto px-2 py-5">
      <nav
        className={`${comfortaa.className} flex justify-between items-end nowrap lg:text-xl md:text-lg text-sm `}
      >
        <ul className="flex">
          <NavbarItem text="CUSTOM INQUIRY" link="/custom"></NavbarItem>
          <NavbarItem text="SHOP" link="/shop"></NavbarItem>
        </ul>
        <Link
          className={`${cormorantGaramond.className} lg:text-6xl md:text-4xl`}
          href="/"
        >
          by sean hayes.
        </Link>
        <ul className="flex">
          <NavbarItem text="ABOUT" link="about"></NavbarItem>
          <NavbarItem text="CONTACT" link="contact"></NavbarItem>
        </ul>
      </nav>
    </div>
  );
}
