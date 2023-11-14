import Image from "next/image";

import panelPic from "../../public/home/4panels.png";
import gridPic from "../../public/home/grid pic.png";
import frontPic from "../../public/home/square front.png";
import backPic from "../../public/home/square back.png";

import useWidth from "./hooks/useWidth";
export default function ImageDisplay() {
  const { width, breakpoints } = useWidth();

  return (
    <div className=" absolute top-0 left-0 h-full w-full">
      {width > breakpoints.medium && (
        <Image
          src={panelPic}
          alt="Front view, close-up fit, close-up fabric, Back view"
          quality={"100"}
          priority
          sizes="2001px"
          fill
          style={{ objectFit: "cover" }}
        />
      )}
      {width <= breakpoints.medium && (
        <div>
          <Image
            src={gridPic}
            alt="close-up fit, close-up fabric"
            quality={"100"}
            sizes="1080px"
          />
          <Image
            src={frontPic}
            alt="Front view"
            quality={"100"}
            sizes="2048px" // this will download the image in full quality
          />
          <Image
            src={backPic}
            alt="Back view"
            quality={"100"}
            sizes="2048px" // this will download the image in full quality
          />
        </div>
      )}
    </div>
  );
}
