// components/Navbar.js
import Link from "next/link";

const Footer = () => {
  return (
    <section className="p-6 border-2 border-black">
      <div className="flex flex-wrap flex-auto items-center mb-4">
        <div className="flex flex-auto">
          <div>
            <p className="text-black text-center font-bold text-3xl">iM</p>
            <p className="text-black font-bold text-xs">iMaintain</p>
          </div>
        </div>
        <div className="flex flex-auto">
          <Link
            className="bg-black text-white text-center mt-4 p-1 rounded-lg transition hover:bg-gray-700 w-[150px]"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div>
        <p className="text-black font-bold text-xl">Head Office</p>
        <p className="text-black">415 S Kansas St. El Paso, TX 79901</p>
        <p className="text-black">team@imconstruct.com</p>
      </div>
    </section>
  );
};

export default Footer;
