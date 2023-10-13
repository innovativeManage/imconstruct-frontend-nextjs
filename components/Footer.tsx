// components/Navbar.js
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="p-6 border-2 border-black">
      <div className="flex items-center mb-4">
        <div>
          <p className="text-black text-center font-bold text-3xl">iM</p>
          <p className="text-black font-bold text-xs">iMaintain</p>
        </div>
      </div>
      <div>
        <p className="text-black font-bold text-xl">Head Office</p>
        <p className="text-black">415 S Kansas St. El Paso, TX 79901</p>
        <p className="text-black">(915) 301-3881</p>
        <p className="text-black">team@imconstruct.com</p>
      </div>
      <div className="flex justify-center">
        <Link
          className="bg-black text-white text-center mt-4 p-1 rounded-lg transition hover:bg-gray-700 w-[150px]"
          href="/about-us"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default Footer;
