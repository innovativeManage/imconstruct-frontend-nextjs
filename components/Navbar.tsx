// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white p-5 fixed top-0 left-0 w-full z-10 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link className="text-black" href="/">
            iM
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-black" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-black" href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-black" href="/contact">
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
