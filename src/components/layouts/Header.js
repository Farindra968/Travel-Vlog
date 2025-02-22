import React from "react";
import travlog from "@/assets/images/travlog.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/",
    },
    {
      label: "Packages",
      path: "/",
    },
    {
      label: "Destinations",
      path: "/",
    },
    {
      label: "Blog",
      path: "/",
    },
    {
      label: "Contact Us",
      path: "/",
    },
  ];
  return (
    <header className="w-full z-50 sticky top-0 bg-white bg-opacity-95">
      <section className="max-w-screen-lg mx-auto py-4 flex justify-between items-center">
        {/* Website Logo */}
        <div>
          <Image src={travlog} width={75} height={50} alt="Travlog" />
        </div>
        {/* Navbar */}
        <div>
          <div className="flex justify-center items-center space-x-6">
            {navItems.map((item, index) => (
              <Link href={item.path} key={index}>
                <button className="font-Poppins-Medium text-gray-600 text-[14px] hover:border-b-2  border-indigo-600 pb-2">
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
              {/* Login and Signup Button */}
              <div className="flex justify-center items-center space-x-3">
                <button className="font-Poppins-Medium text-[14px]">Log In</button>
                <button className="font-Poppins-Medium text-white text-[14px] bg-indigo-600 px-6 py-2 rounded-2xl shadow-lg shadow-indigo-400">Sign Up</button>
              </div>
      </section>
    </header>
  );
};

export default Header;
