import "./globals.css";
import { cormorantGaramond } from "./layout";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <main>
      <h1
        className={cormorantGaramond.className}
        style={{
          color: "black",
          fontSize: "6.25rem",
          fontStyle: "normal",
          textAlign: "center",
          margin: '0',
          padding: '0'
        }}
      >
        by sean hayes
      </h1>
      <Navbar></Navbar>
    </main>
  );
}
