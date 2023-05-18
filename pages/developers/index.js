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
    </div>
  );
}
