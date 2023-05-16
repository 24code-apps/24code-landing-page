import React from "react";
import axios from "axios";
import { AiOutlineCopy } from "react-icons/ai";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";

export default function MyIP() {
  const [ip, setIP] = React.useState(false);

  const fetchIPAddress = async () => {
    try {
      // const { data } = await axios("https://api.ipify.org/?format=json");
      const { data } = await axios("/api/myIp");
      setIP(data.ip);
    } catch (err) {
      alert("Something went wrong, retry later");
    }
  };

  React.useEffect(() => {
    fetchIPAddress();
  }, []);

  return (
    <>
      <Head>
        <title>What is my IP Address</title>
      </Head>
      <Toaster />
      <div className="my-10 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl lg:text-5xl font-bold">
          Your current IP Address
        </h1>
        {ip ? (
          <CopyToClipboard
            onCopy={() => toast.success("Copied")}
            text={ip ? ip : "-----------"}
          >
            <div className="cursor-pointer flex items-center text-2xl lg:text-4xl my-10 px-5 py-2 rounded-md bg-zinc-100">
              <p className="">{ip ? ip : "---.--.--.---"}</p>
              <button className="ml-2 text-3xl">
                <AiOutlineCopy />
              </button>
            </div>
          </CopyToClipboard>
        ) : (
          <div className="flex items-center mt-10">
            <p className="mr-2 text-2xl">Loading</p>
            <ReactLoading
              type={"spin"}
              color={"black"}
              height={30}
              width={30}
            />
          </div>
        )}
      </div>
    </>
  );
}
