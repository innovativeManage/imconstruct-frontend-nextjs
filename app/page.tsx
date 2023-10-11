"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <Navbar />
      <div className={"pt-10"}>
        <section className="relative">
          <video autoPlay loop muted className="w-full h-full">
            <source src="/file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-left">
            <div className="bg-gray-800 bg-opacity-60 w-full rounded-lg p-4">
              <div className="text-white pl-14 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-bold">
                Facilities
              </div>
              <div className="text-white pl-14 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-bold">
                Maintenance
              </div>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center">
          <img
            src={"/minerutepimage.webp"}
          />
          <div className="text-white pl-14 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-bold">
            New Program for Miners
          </div>
        </section>
      </div>
    </div>
  );
}
