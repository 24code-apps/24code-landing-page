import "@fontsource/roboto/400.css";
import "@fontsource/roboto/900.css";
import "@fontsource/allura";

import "../styles/globals.css";

import NextNProgress from "nextjs-progressbar";

import React from "react";
import Link from "next/link";

const Footer = () => (
  <>
    <div className="cursor-pointer justify-center pt-10 flex items-center">
      <Link href={"/p/terms"} className="hover:underline">
        Terms and Conditions
      </Link>
      <div className="rounded-full mx-2 h-1 w-1 bg-black"></div>
      <Link href={"/p/privacy"} className="hover:underline">
        Privacy Policy
      </Link>
    </div>
    <p className="my-5 text-center text-sm">
      © 2023 24code.in Inc. All rights reserved
    </p>
  </>
);

const Header = () => (
  <div className="z-10 sticky top-0 bg-white px-4 lg:px-10 lg:px-24 py-4 justify-between flex items-center">
    <Link href={"/"} className="flex items-center">
      <img
        className="cursor-pointer h-10 rounded-full"
        src="/android-chrome-512x512.png"
        alt=""
      />
      <p className="ml-2 text-md">24code.in</p>
    </Link>
    {/* <div className="flex items-center">
      <p className="cursor-pointer hover:underline">Apps</p>
      <div className="rounded-full mx-2 h-1 w-1 bg-black"></div>
      <p className="cursor-pointer hover:underline">Pricing</p>
      <div className="rounded-full mx-2 h-1 w-1 bg-black"></div>
      <p className="cursor-pointer hover:underline">Developers</p>
      <div className="rounded-full mx-2 h-1 w-1 bg-black"></div>
      <p className="cursor-pointer hover:underline">Articles</p>
    </div> */}
    <div className="flex">
      <a
        target={"_blank"}
        href="https://forms.gle/tNqYzXqhQaZAdsmN7"
        className="text-sm cursor-pointer border-2 px-4 rounded-md py-2 hover:bg-zinc-100"
      >
        Get Started
      </a>
    </div>
  </div>
);

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = React.useState(false);

  const checkDarkMode = async () => {
    const ifDarkMode = localStorage.getItem("darkMode");
    if (ifDarkMode) setDarkMode(true);
  };

  React.useEffect(() => {
    checkDarkMode();
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <NextNProgress color="#0173C6" />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
