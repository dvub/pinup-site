"use client";
import "./globals.css";
import Navbar from "./components/navbar";
import * as React from "react";
import ImageDisplay from "./components/imageDisplay";
import ImageFooter from "./components/imageFooter";
import ScrollIndicator from "./components/scrollIndicator";

export default function Home() {

  return (
    <main className={"flex flex-col min-h-screen"}>
      <Navbar />
      <ScrollIndicator />
      <ImageDisplay />
      <ImageFooter />
    </main>
  );
}
