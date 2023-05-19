import Link from "next/link";
import React from "react";

import Seo from "../../components/Seo";

import { AiFillGithub } from "react-icons/ai";

export default function Developers() {
  return (
    <div>
      <Seo title="Developers - 24Code" />
      <div className="mt-10 py-10 flex flex-col justify-center items-center">
        <h2 className="text-3xl lg:text-6xl font-bold text-center">
          We Love ❤️ Open Source
        </h2>
        <p className="text-center max-w-[80vw] lg:max-w-[40vw] opacity-75 mt-3 text-md">
          We Love to work with developers all around the world. So, Let's bring
          us together in community.
        </p>
        <div className="mt-5 flex">
          <Link target={"_blank"} href={"https://github.com/24code-apps"}>
            <button className="bg-zinc-800 flex items-center text-white px-4 py-2 rounded-md">
              <AiFillGithub className="text-2xl" />
              <p className="ml-1">Star Us</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-10 pb-5 flex flex-col items-center mx-auto">
        <p className="text-lg mb-1">
          Some of our Tiny <span className="font-bold">Apps</span> ❤️
        </p>
        <div className="flex flex-col lg:flex-row items-center">
          <Link
            href={"/apps/online-notepad"}
            className="cursor-pointer hover:underline"
          >
            Notepad
          </Link>
          <div className="hidden lg:flex rounded-full mx-2 h-1 w-1 bg-black"></div>
          <Link
            href={"/apps/my-ip-address"}
            className="cursor-pointer hover:underline"
          >
            My IP Address
          </Link>
          <div className="hidden lg:flex rounded-full mx-2 h-1 w-1 bg-black"></div>
          <Link
            href={"/apps/password-generator-online"}
            className="cursor-pointer hover:underline"
          >
            Password Generator
          </Link>
          <div className="hidden lg:flex rounded-full mx-2 h-1 w-1 bg-black"></div>
          <Link
            href={"/apps/where-is-domain"}
            className="cursor-pointer hover:underline"
          >
            Where is Domain
          </Link>
          <div className="hidden lg:flex rounded-full mx-2 h-1 w-1 bg-black"></div>
          <Link
            href={"/apps/age-calculator"}
            className="cursor-pointer hover:underline"
          >
            Age Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
