"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const ref = useRef(null);
  const handleNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  };
  const handleClose = () => {
    setToggleNavbar(false);
    console.log(toggleNavbar);
  };
  useEffect(() => {
    const handleOutClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleClose && handleClose();
      }
    };
    document.addEventListener("click", handleOutClick, true);

    return () => {
      document.removeEventListener("click", handleOutClick, true);
    };
  }, []);
  return (
    <nav className="flex items-center justify-between bg-[#FFFEFC] w-full px-2 py-3 relative transition-all duration-700 md:py-7 lg:px-32 md:px-10">
      <div className="flex justify-between items-center w-full">
        <Link href={"/"}>
          <Image
            src={"/assets/logo1.png"}
            alt="Logo"
            width={60}
            height={32}
            className="w-[90px] h-[32px]"
          />
        </Link>

        <FontAwesomeIcon
          ref={ref}
          onClick={handleNavbar}
          icon={faBars}
          className="w-[20px] h-[20px] md:hidden"
        />
      </div>
      <div
        className={`transition-all duration-500 flex
       ${
         toggleNavbar
           ? "h-full w-full fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.3)]"
           : ""
       }
     w-full `}
      >
        <div
          className={`fixed top-0 right-0 bg-white w-[70%] h-screen z-10 ${
            toggleNavbar ? "translate-x-[5%]" : "translate-x-[100%]"
          }  flex flex-col gap-5 py-8 px-5 transition-all duration-700 md:relative md:flex-row md:w-full md:bg-transparent md:translate-x-0 md:h-full md:justify-between md:p-0 md:items-center`}
        >
          <div className="relative transition-all duration-700">
            <FontAwesomeIcon
              ref={ref}
              onClick={handleClose}
              icon={faClose}
              className="w-[20px] h-[20px] absolute top-[-30px] right-[-10px] p-3 z-20 md:hidden"
            />
            <ul className="flex flex-col gap-5 text-left md:flex-row md:w-full">
              <li>
                <Link
                  className="text-[13px] text-[#1F1F1F] font-normal xl:text-[16px]"
                  href={"#"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#1F1F1F] font-normal xl:text-[16px]"
                  href={"#"}
                >
                  Tenant
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#1F1F1F] font-normal xl:text-[16px]"
                  href={"#"}
                >
                  Landlord
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#1F1F1F] font-normal xl:text-[16px]"
                  href={"#"}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-5 md:flex-row ">
            <button className="px-2 py-1 bg-[#FFE8D1] rounded-[8px] text-[#FF8000] text-[13px] font-medium xl:text-[16px]">
              Sign in
            </button>
            <button className="px-2 py-1 bg-[#FF8000] rounded-[8px] text-[#FFFEFC] text-[13px] font-medium xl:text-[16px]">
              Add listing
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
