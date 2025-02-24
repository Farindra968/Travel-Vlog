"use client";

import React, { useState } from "react";
import travlog from "@/assets/images/travlog.png";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { themeMode } from "@/redux/userPreferences/userPreferences";
import { FaMoon, FaSun } from "react-icons/fa6";
import { LIGHT_MODE } from "@/constant/theme";

const Header = () => {
  const { theme } = useSelector((state) => state.userPreferences);
  const dispatch = useDispatch();

  function switchTheme() {
    dispatch(themeMode());
  }
  const [isOpen, setIsOpen] = useState();
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
    <header className="w-full z-50 bg-white bg-opacity-95 dark:bg-gray-800 dark:border-b-2 dark:bg-opacity-95 dark:border-gray-600">
      <section className="max-w-screen-lg mx-auto py-4 px-4 flex justify-between items-center">
        {/* Website Logo */}
        <div>
          <Image src={travlog} width={75} height={50} alt="Travlog" />
        </div>
        {/* Desktp Navbar */}
        <div className="hidden md:block">
          <div className="flex justify-center items-center space-x-6">
            {navItems.map((item, index) => (
              <Link href={item.path} key={index}>
                <button className="font-Poppins-Medium text-gray-600 text-[14px] hover:border-b-2  border-indigo-600 pb-2 dark:text-gray-200">
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile Navbar */}
        <div
          className={`
        fixed top-0 left-0 
        w-72 h-screen 
        bg-white dark:bg-gray-800
        z-50
        px-6 py-4 
        md:hidden 
        transition-transform duration-700 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
        >
          <div className="pb-4 flex justify-between items-center border-b-2 dark:border-gray-700">
            <Image src={travlog} width={75} height={50} alt="Travlog" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-gray-200 w-10 h-10 rounded-md flex items-center justify-center text-2xl dark:text-gray-200 dark:hover:text-gray-900"
            >
              <RxCross2 />
            </button>
          </div>
          <div className="flex flex-col space-y-2 py-6 ">
            {navItems.map((item, index) => (
              <Link href={item.path} key={index}>
                <button className="w-full flex justify-start items-center font-Poppins-Medium text-gray-600 text-[16px] hover:bg-gray-200  border-indigo-600 p-2 rounded-md dark:text-gray-200 dark:hover:text-gray-800">
                  {item.label}
                </button>
              </Link>
            ))}

          </div>
          <div className="bottom-10 flex absolute items-center space-x-3">
          <button className=" font-Poppins-Medium text-[14px] dark:text-gray-300">
            Log In
          </button>
          <button className=" font-Poppins-Medium text-white text-[14px] bg-indigo-600 px-6 py-2 rounded-md">
            Sign Up
              </button>
              </div>
        </div>
        {/* Login and Signup Button */}
        <div className="flex justify-center items-center space-x-3">
          <button className="hidden md:block font-Poppins-Medium text-[14px] dark:text-gray-300">
            Log In
          </button>
          <button className="hidden md:block font-Poppins-Medium text-white text-[14px] bg-indigo-600 px-6 py-2 rounded-2xl shadow-md shadow-indigo-400 dark:shadow-indigo-600">
            Sign Up
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden hover:bg-gray-200 w-10 h-10 rounded-md flex items-center justify-center text-2xl dark:text-gray-200 hover:dark:text-gray-800 "
          >
            {isOpen ? (
              <RxCross2 className="duration-700" />
            ) : (
              <MdOutlineMenu className="duration-700" />
            )}
          </button>
          <div onClick={switchTheme} class=" inline-flex cursor-pointer items-center">
            <buttom className="flex items-center  bg-gray-400 w-12 h-7 rounded-full p-1">
              <p className={`flex items-center justify-center w-6 h-6 rounded-full bg-white ${theme === LIGHT_MODE ? 'translate-x-0 duration-700 ' : 'translate-x-full duration-700'}`}>
                {theme === LIGHT_MODE ? <FaSun/>:<FaMoon/>}
              </p>
            </buttom>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
