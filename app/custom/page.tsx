"use client";
import ImageDisplay from "../components/imageDisplay";
import Navbar from "../components/navbar";
import { cormorantGaramond } from "../layout";
export default function Custom() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 px-5">
        <h1 className={`${cormorantGaramond.className} text-6xl`}>Custom Inquiry</h1>
        <form>
          <input type="text" value="asd" className="outline"></input>

        </form>
      </div>
    </main>
  );
}
