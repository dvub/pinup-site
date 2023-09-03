import { cormorantGaramond } from "../layout";

export default function ImageFooter() {
  return (
    <div
      className={`${cormorantGaramond.className} text-xs lg:text-xl fixed right-0 bottom-0 bg-white w-full h-auto px-5 py-2`}
    >
      <div>
        <p className="text-left">
          above: [Andrew in the] Patch Pocket denim for Jack.
        </p>
        <p className="text-right">
          Made of a 12.5 oz Japanese Selvedge denim.
          <br /> Button fly using imported Japanese donut buttons. Front and
          back pockets inspired by 1940&apos;s denim.
        </p>
      </div>
    </div>
  );
}
