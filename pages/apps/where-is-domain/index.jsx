import React from "react";
import axios from "axios";
import { AiOutlineCopy } from "react-icons/ai";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";

import { BiPaste } from "react-icons/bi";

export default function MyIP() {
  const [ip, setIP] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [address, setAddress] = React.useState("https://www.24code.in");

  const extractDomain = (url) => {
    try {
      const parsedUrl = new URL(url?.includes("http") ? url : "https://" + url);
      const hostname = parsedUrl.hostname;
      return hostname;
    } catch (err) {
      toast.error("Invalid URL");
      return;
    }
  };

  const fetchIPAddress = async () => {
    setLoading(true);
    setIP(null);
    try {
      const domain = extractDomain(address);
      if (domain) {
        const { data } = await axios.post("/api/getDns", {
          address: domain,
        });
        setIP(data);
      }
    } catch (err) {}
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>What is the Domain | Find the IP Address of Domain</title>
      </Head>
      <Toaster />
      <div className="my-10 flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-center text-2xl lg:text-4xl font-bold">
            Find the IP Address of Domain
          </h1>
          <h1 className="mt-5">Domain Name : </h1>
          <div className="mt-2 flex">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") fetchIPAddress();
              }}
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="text"
              className="focus:outline-none flex-1 px-4 py-3 rounded-l-md bg-zinc-100"
            />
            <button
              onClick={async () => {
                const text = await navigator.clipboard.readText();
                if (text) {
                  setAddress(text);
                  toast.success("Pasted");
                }
              }}
              className="bg-zinc-100 text-xl rounded-r-md text-black hover:bg-zinc-100 px-4"
            >
              <BiPaste />
            </button>
            <button
              onClick={fetchIPAddress}
              className="ml-2 bg-zinc-500 text-white hover:bg-zinc-700 px-4"
            >
              {loading ? "Loading..." : "Find"}
            </button>
          </div>
          {ip && ip?.length > 0 ? (
            <div className="mt-10 flex flex-col">
              <h1 className="font-bold mb-2">The IP Address : </h1>
              {ip?.map((each, idx) => (
                <div className="flex mt-1">
                  <CopyToClipboard
                    onCopy={() => toast.success("Copied")}
                    text={each.address}
                  >
                    <div className="flex items-center">
                      <p>
                        Server {idx + 1} {"=>"}
                      </p>
                      <div className="cursor-pointer flex items-center text-md px-5">
                        <p className="">{each.address}</p>
                        <button className="ml-2 text-3xl">
                          <AiOutlineCopy />
                        </button>
                      </div>
                    </div>
                  </CopyToClipboard>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
