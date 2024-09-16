"use client";
import Image from "next/image";
// import { defineCustomElements } from "@merckgroup/chemuix/dist/esm/loader";
import { useEffect } from "react";
import Pathways from "./pathways/page";

export default function Home() {
  // useEffect(() => {
  //   defineCustomElements(window); // This defines the custom elements globally
  //   console.log("Stencil components initialized");
  //   console.log(customElements.get("reaction-pathway"));
  // }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Pathways /> */}
      </main>
    </div>
  );
}
