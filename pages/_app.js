import "@fontsource/roboto/400.css";
import "@fontsource/roboto/900.css";
import "@fontsource/allura";

import "../styles/globals.css";

import NextNProgress from "nextjs-progressbar";
import Script from "next/script";

import React from "react";
import Link from "next/link";
import { AiOutlineRight, AiOutlineRightCircle } from "react-icons/ai";
import { RiApps2Fill } from "react-icons/ri";
import useScrollRestoration from "../utils/hooks/useScrollRestoration";

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

const Header = () => {
  const links = [
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Developers",
      link: "/developers",
    },
  ];
  return (
    <>
      <div className="z-10 sticky top-0 bg-white px-4 lg:px-10 lg:px-24 py-4 justify-between flex items-center">
        <Link href={"/"} className="flex items-center">
          <img
            className="cursor-pointer h-10 rounded-full"
            src="/android-chrome-512x512.png"
            alt=""
          />
          <p className="ml-2 text-md">24code.in</p>
        </Link>
        <div className="hidden sm:flex items-center">
          {links?.map((each, idx) => (
            <>
              <Link href={each.link}>
                <p className="cursor-pointer hover:underline">{each.name}</p>
              </Link>
              {idx !== links.length - 1 ? (
                <div className="rounded-full mx-2 h-1 w-1 bg-black"></div>
              ) : null}
            </>
          ))}
        </div>
        <div className="flex">
          <a
            target={"_blank"}
            href="https://forms.gle/tNqYzXqhQaZAdsmN7"
            className="text-md lg:text-lg flex items-center bg-zinc-800 transition text-white cursor-pointer px-5 rounded-full py-2"
          >
            <p>Get Started</p>
            <RiApps2Fill className="animate-pulse ml-2 text-lg" />
          </a>
        </div>
      </div>
      <div className="flex sm:hidden justify-center text-sm items-center">
        {links?.map((each, idx) => (
          <>
            <Link href={each.link}>
              <p className="cursor-pointer hover:underline">{each.name}</p>
            </Link>
            {idx !== links.length - 1 ? (
              <div className="rounded-full mx-2 h-1 w-1 bg-black"></div>
            ) : null}
          </>
        ))}
      </div>
    </>
  );
};

function MyApp({ Component, pageProps, router }) {
  useScrollRestoration(router);
  const [darkMode, setDarkMode] = React.useState(false);

  const checkDarkMode = async () => {
    const ifDarkMode = localStorage.getItem("darkMode");
    if (ifDarkMode) setDarkMode(true);
  };

  React.useEffect(() => {
    checkDarkMode();
  }, []);

  return (
    <>
      {process.env.NODE_ENV !== "development" ? (
        <>
          {/* <Script
            src={
              "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
              process.env.NEXT_PUBLIC_GOOGLE_AD_ID
            }
            strategy="beforeInteractive"
            crossorigin="anonymous"
          /> */}
          <Script
            src={
              "https://www.googletagmanager.com/gtag/js?id=" +
              process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
            }
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
          </Script>{" "}
        </>
      ) : null}

      <div className={darkMode ? "dark" : ""}>
        <NextNProgress color="#0173C6" />
        <Header />
        <div className="min-h-[80vh]">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
