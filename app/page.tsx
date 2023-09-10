"use client";
import "./globals.css";
import Navbar from "./components/navbar";
import * as React from "react";
import ImageDisplay from "./components/imageDisplay";
import Footer from "./components/footer";
import ScrollIndicator from "./components/scrollIndicator";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollIndicator />
      <ImageDisplay />
      <Footer />
    </main>
  );
}
