import Navbar from "../components/navbar";
import { cormorantGaramond } from "../layout";
export default function Custom() {
  return (
    <main className={`${cormorantGaramond.className} text-6xl m-5`}>
      <Navbar />
      <h1>
        Custom Inquiry
      </h1>
      <form>

      </form>
    </main>
  );
}
