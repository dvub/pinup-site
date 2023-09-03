import Image from "next/image";

import panelPic from "../../public/home/4panels.png";
import gridPic from "../../public/home/grid pic.png";
import frontPic from "../../public/home/square front.png";
import backPic from "../../public/home/square back.png";

import { cormorantGaramond } from "../layout";
import useWidth from "./useWidth";

export default function ImageDisplay() {
    const { width, breakpoints } = useWidth();

  return (
    <div className="flex-grow">
      {width > breakpoints.medium && (
        <div className="h-auto w-auto">
          <Image
            src={panelPic}
            alt="Front view, close-up fit, close-up fabric, Back view"
            quality={"100"}
            priority
            sizes="2001px"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      {width <= breakpoints.medium && (
        <div>
          <Image
            src={gridPic}
            alt="close-up fit, close-up fabric"
            quality={"100"}
            sizes="1080px"
            priority
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
