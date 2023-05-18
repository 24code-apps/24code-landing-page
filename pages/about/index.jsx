import Link from "next/link";
import React from "react";

import Seo from "../../components/Seo";

import { AiFillGithub } from "react-icons/ai";

export default function Developers() {
  return (
    <div>
      <Seo
        title="About Us - 24Code"
        description="We bring quality first website development and app development to the customers, Thereby making an impact in society."
      />
      <div className="mt-2 lg:mt-10 py-10 flex flex-col justify-center items-center">
        <p className="font-bold text-blue-600 text-center max-w-[40vw] opacity-75 mb-3 text-md">
          Our vision
        </p>
        <h2 className="max-w-[80vw] lg:max-w-[60vw] text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          We bring quality first website and app development to the customers.
        </h2>
        <p className="text-black mt-10 text-center max-w-[60vw] lg:max-w-[40vw]  opacity-75 mb-3 text-md">
          We take serously the word <b>Value for money</b>. We bring in you the
          best quality products to grow your business.
        </p>
      </div>
      <hr />
      <div className="py-10 justify-center items-center flex-col flex">
        <h1 className="text-3xl lg:text-5xl font-bold">Meet the Team</h1>
        <p>Since It's Startup, I am the team 🤭</p>
        <div className="bg-zinc-100 p-4 px-8 rounded-md mt-10 flex items-center">
          <img
            className="h-12 w-12 lg:h-32 lg:w-32 rounded-full"
            src="https://avatars.githubusercontent.com/u/36362957?v=4"
            alt=""
          />
          <div className="ml-4 flex flex-col">
            <h2 className="font-bold text-lg lg:text-3xl">Benzigar Codes 👨🏻‍💻</h2>
            <p className="text-md opacity-75">
              <b>Founder</b> & Sr. Full Stack Developer
            </p>

            <Link className="text-blue-500" href={"/p/benzigar-codes"}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
