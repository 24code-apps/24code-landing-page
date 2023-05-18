import Head from "next/head";
import Link from "next/link";
import {
  AiFillBulb,
  AiFillClockCircle,
  AiFillFire,
  AiOutlineCloudServer,
  AiOutlineMobile,
} from "react-icons/ai";

import Seo from "../components/Seo";

const App = () => {
  return (
    <div className="min-h-[70vh] bg-white flex flex-col">
      <Seo />
      <div className="flex-1 bg-white text-black justify-center items-center flex flex-col">
        {/* <h1 className="px-10 text-center text-4xl md:text-6xl lg:text-7xl max-w-[800px]">
          <span className="items-center flex flex-wrap">
            <img
              className="hidden md:flex h-14 w-15 mr-2"
              src="https://em-content.zobj.net/thumbs/240/whatsapp/352/rocket_1f680.png"
              alt=""
            />
            <p className="text-center">
              Creating <span className="ml-2 robo">Software </span>
            </p>
          </span>
          is <span className="robo text-[#0173C6]">easy</span> with us.
        </h1> */}
        <h1 className="px-10 text-center text-4xl md:text-6xl lg:text-7xl max-w-[800px]">
          <span className="items-center flex flex-wrap">
            {/* <img
              className="hidden md:flex h-14 w-15 mr-2"
              src="https://em-content.zobj.net/thumbs/240/whatsapp/352/rocket_1f680.png"
              alt=""
            /> */}
            <p className="mt-10 text-center">
              <span className="font-bold">Grow</span> Your{" "}
              <span className="robo text-[#0173C6]">Business</span> With{" "}
              <span className="font-bold">Technology</span>
            </p>
          </span>
          {/* is <span className="robo text-[#0173C6]">easy</span> with us. */}
        </h1>
        <p className="flex items-center text-lg mt-10">
          Your Idea <AiFillBulb className="text-yellow-500" /> + Our Technology{" "}
          = <AiFillFire className="text-red-500" />
        </p>
        <div className="flex">
          {/* <button
            className="hover:bg-zinc-100 border-2 text-black px-6 text-black py-3 rounded-md mt-5"
            href="mailto:24code.apps@gmail.com"
          >
            <p>See Pricing</p>
          </button> */}
          <a
            target={"_blank"}
            className="hover:bg-zinc-100 border-2 text-black px-6 text-black py-3 rounded-md mt-5"
            href="https://forms.gle/tNqYzXqhQaZAdsmN7"
          >
            Contact Us Now
          </a>
        </div>
      </div>
      <div className="mt-10 border-b-2 pb-5 flex flex-col items-center mx-auto">
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
};

export default App;
