import NavbarItem from "./navbarItem";
import Link from "next/link";
import { cormorantGaramond, comfortaa } from "../layout";
import { Bars3Icon } from "@heroicons/react/24/solid";
import * as React from "react";
import useWidth from "./hooks/useWidth";
import { Transition } from "@headlessui/react";
import SlideWrapper from "./slideWrapper";
import FadeWrapper from "./fadeWrapper";

function Title() {
  return (
    <Link
      className={`${cormorantGaramond.className} lg:text-6xl text-4xl`}
      href="/"
    >
      by sean hayes.
    </Link>
  );
}

export default function Navbar() {
  const { width, breakpoints } = useWidth();
  const [openNav, setOpenNav] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  React.useEffect(() => {
    if (width > breakpoints.medium) {
      setOpenNav(true);
    }
    if (width <= breakpoints.medium) {
      setOpenNav(false);
    }
  }, [width, breakpoints]);

  return (
    <div
      className={`${comfortaa.className} fixed top-0 bg-white w-full h-auto lg:text-xl md:text-lg text-sm z-50 `}
      style={{ transition: "height 2s" }}
    >
      {width >= breakpoints.medium && (
        <nav className={"flex justify-between items-end nowrap p-5"}>
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
          <div className="relative z-50 flex justify-between py-5 px-5">
            <Title />
            <button
              onClick={() => {
                setOpenNav(!openNav);
              }}
              onPointerDown={() => {
                setClicked(true);
              }}
              onPointerUp={() => {
                setClicked(false);
              }}
            >
              <Bars3Icon
                className={`${clicked ? "h-6 w-6" : "h-8 w-8"} text-black`}
              />
            </button>
          </div>

          <Transition show={openNav}>
            <SlideWrapper translate={"-translate-y-32"}>
              <div className="bg-white fixed top-0 left-0 w-full h-auto px-10 z-0">
                <FadeWrapper>
                  <nav className="my-2">
                    <div>
                      <ul className="list-['→']">
                        <NavbarItem text="CUSTOM INQUIRY" link="/custom" />
                        <NavbarItem text="SHOP" link="shop" />
                        <NavbarItem text="ABOUT" link="about" />
                        <NavbarItem text="CONTACT/QUESTIONS" link="contact" />
                      </ul>
                    </div>
                  </nav>
                </FadeWrapper>
              </div>
            </SlideWrapper>
          </Transition>
        </div>
      )}
    </div>
  );
}
