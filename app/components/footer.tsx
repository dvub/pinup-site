import { cormorantGaramond } from "../layout";

export default function Footer() {
  return (
    <div
      className={`${cormorantGaramond.className} text-sm lg:text-xl md:text-md fixed bottom-0 bg-white w-full h-auto px-5 py-2`}
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
