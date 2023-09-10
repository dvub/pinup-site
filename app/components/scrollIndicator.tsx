import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/solid";
import { comfortaa } from "../layout";
import * as React from "react";

// https://stackoverflow.com/questions/63501757/check-if-user-reached-the-bottom-of-the-page-react

export default function ScrollIndicator() {
  const [atBottom, setAtBottom] = React.useState(false);
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    setAtBottom(bottom);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed top-[75vh] w-full h-auto flex justify-center items-center text-slate-100/25 hover:opacity-0 duration-200 z-10 ">
      <div>
        {!atBottom && (
          <div>
            <ArrowDownCircleIcon className="w-10 h-10" />
          </div>
        )}
        {atBottom && <ArrowUpCircleIcon className="w-10 h-10" />}
      </div>
      <p className={`${comfortaa.className} text-center`}>MORE</p>
    </div>
  );
}
