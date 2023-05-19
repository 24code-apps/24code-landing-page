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
  const techs = [
    {
      name: "Google Cloud",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
    },
    {
      name: "Vercel",
      image:
        "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png",
    },
    {
      name: "Digital Ocean",
      image:
        "https://companieslogo.com/img/orig/DOCN-6eec72eb.png?t=1660638083",
    },
    {
      name: "AWS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "Planet Scale",
      image:
        "https://seeklogo.com/images/P/planetscale-logo-0EEA8CAEB4-seeklogo.com.png",
    },
  ];

  return (
    <div className="min-h-[70vh] bg-white flex flex-col">
      <Seo />
      <div className="mt-10 flex-1 bg-white text-black justify-center items-center flex flex-col">
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
            Get Started
          </a>
        </div>
      </div>
      <div className="mt-24 justify-center flex-col flex items-center">
        <h2 className="text-[#0173C6] text-md">OUR TECH PARTNERS</h2>
        <div className="mt-5 flex items-center">
          {techs?.map((each) => (
            <Link
              target={"_blank"}
              href={"https://www.google.com/search?q=" + each.name}
            >
              <img
                className="grayscale h-10 mx-5"
                src={each.image}
                alt={each.name}
              />
            </Link>
          ))}
          {/* <img
            className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png"
            alt=""
          />
          <img
            className="h-10"
            src="https://consent.trustarc.com/v2/asset/20:55:23.714y33gof_DO_Logo-Blue.png"
            alt=""
          />
          <img
            className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt=""
          />
          <img
            className="h-10"
            src="https://mms.businesswire.com/media/20220524005472/en/1465062/5/planetscale-logo-full-black.jpg"
            alt=""
          /> */}
        </div>
      </div>
      <div className="mt-24 border-b-2 pb-5 flex flex-col items-center mx-auto">
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
