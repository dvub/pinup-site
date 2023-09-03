
import NavbarItem from "./navbarItem";
import Link from "next/link";
import { cormorantGaramond, comfortaa } from "../layout";
import { Bars3Icon } from "@heroicons/react/24/solid";
import * as React from "react";
import useWidth from "./hooks/useWidth";


function Title() {
  return (
    <Link
      className={`${cormorantGaramond.className} lg:text-6xl md:text-4xl`}
      href="/"
    >
      by sean hayes.
    </Link>
  );
}

export default function Navbar() {
  const { width, breakpoints } = useWidth();
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <div
      className={`${comfortaa.className} z-50 fixed top-0 left-0 bg-white w-full h-auto px-2 py-5 lg:text-xl md:text-lg text-sm`}
    >
      {width >= breakpoints.medium && (
        <nav className={"flex justify-between items-end nowrap"}>
          <ul className="flex">
            <NavbarItem text="CUSTOM INQUIRY" link="/custom" />
            <NavbarItem text="SHOP" link="/shop" />
          </ul>
          <Title />
          <ul className="flex">
            <NavbarItem text="ABOUT" link="about" />
            <NavbarItem text="CONTACT/QUESTIONS" link="contact" />
          </ul>
        </nav>
      )}
      {width < breakpoints.medium && (
        <div>
          <div className="flex justify-between">
            <Title />
            <button onClick={() => setOpenNav(!openNav)}>
              <Bars3Icon className="h-8 w-8 text-black" />
            </button>
          </div>
          {openNav && (
            <div className="pt-5">
              <nav>
                <ul>
                  <NavbarItem text="CUSTOM INQUIRY" link="/custom" />
                  <NavbarItem text="SHOP" link="shop" />
                  <NavbarItem text="ABOUT" link="about" />
                  <NavbarItem text="CONTACT/QUESTIONS" link="contact" />
                </ul>
              </nav>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
