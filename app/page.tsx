"use client";
import "./globals.css";
import Navbar from "./components/navbar";
import * as React from "react";
import ImageDisplay from "./components/imageDisplay";
import ImageFooter from "./components/imageFooter";
import useWidth from "./components/useWidth";

export default function Home() {
  const { width, breakpoints } = useWidth();
  return (
    <main className={"flex flex-col min-h-screen"}>
      <Navbar/>
      <ImageDisplay />
      <ImageFooter />
    </main>
  );
}
