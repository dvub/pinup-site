import { Comfortaa } from "next/font/google";
import NavbarItem from "./navbar-item";
export const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--comfortaa",
});

export default function Navbar() {
  return (
    <div>
      <nav
        className={`${comfortaa.className} flex justify-between nowrap`}
      >
        <ul className="flex">
          <NavbarItem text="CUSTOM INQUIRY" link="/"></NavbarItem>
          <NavbarItem text="SHOP" link="/"></NavbarItem>
        </ul>
        <ul className="flex">
          <NavbarItem text="ABOUT" link="about"></NavbarItem>
          <NavbarItem text="CONTACT" link="about"></NavbarItem>
        </ul>
      </nav>
    </div>
  );
}
