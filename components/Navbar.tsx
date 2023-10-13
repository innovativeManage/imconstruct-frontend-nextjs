// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white p-2 fixed top-0 left-0 w-full z-10 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link className="text-black" href="/">
            <div className="flex items-center">
              <div>
                <p className="text-black text-center font-bold text-3xl">iM</p>
                <p className="text-black font-bold text-xs">iMaintain</p>
              </div>
            </div>
          </Link>
          <ul className="flex space-x-1">
            <li>
              <Link
                className="bg-black text-white font-bold text-sm md:text-md mt-4 p-2 md:p-4 rounded-lg transition hover:bg-gray-700"
                href="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="bg-black text-white font-bold text-sm md:text-md mt-4 p-2 md:p-4 rounded-lg transition hover:bg-gray-700"
                href="/about-us"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="bg-black text-white font-bold text-sm md:text-md mt-4 p-2 md:p-4 rounded-lg transition hover:bg-gray-700"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
