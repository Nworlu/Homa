import { social } from "@/data/dummydata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-2 bg-[#FF8000] text-[11px] font-normal text-[#FFFEFC] uppercase flex flex-col gap-10 py-7 lg:px-32 md:px-10">
      <Link href={"/"}>
        <Image
          src={"/assets/logo2.png"}
          alt="Logo"
          width={60}
          height={32}
          className="w-[90px] h-[32px]"
        />
      </Link>
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-3">
          <ul className="text-[11px] font-normal flex flex-col gap-3">
            <li>
              <Link href={"#"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"#"}>SITEMAP</Link>
            </li>
            <li>
              <Link href={"#"}>TERMS OF USE</Link>
            </li>
            <li>
              <Link href={"#"}>PRIVACY POLICY</Link>
            </li>
            <li>
              <Link href={"#"}>SITE ACCESSIBLITY</Link>
            </li>
          </ul>
          <ul className="text-[11px] font-normal">
            <li>
              <Link href={"#"}>EXERCISING YOUR PRIVACY RIGHTS</Link>
            </li>
          </ul>
          <ul className="text-[11px] font-normal flex flex-col gap-3">
            <li>
              <Link href={"#"}>Customer Service</Link>
            </li>
            <li>
              <Link href={"#"}>Find an office</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="flex flex-col gap-2">
            <p>Follow Us</p>
            <ul className="flex items-center gap-3">
              {social.map((soc, index) => {
                return (
                  <li key={index}>
                    <Link href={"#"}>
                      <Image
                        src={soc.image}
                        alt=""
                        width={20}
                        height={20}
                        className="w-[16px] h-[16px]"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p>Sign up to receive updates from Дома:</p>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Email"
                className="text-[#8C8C8C] text-[12px] font-normal px-3 py-2 bg-[#FFF] border border-[#D3D3D3] w-full"
              />
              <Image
                src={"/assets/email.svg"}
                alt=""
                width={20}
                height={20}
                className="w-[23px] h-[23px] absolute right-2 top-[20%]"
              />
            </div>
          </div>
        </div>
      </div>
      <p>© 2023 Дома, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
