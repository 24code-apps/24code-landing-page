import React from "react";
import axios from "axios";
import { AiOutlineCopy } from "react-icons/ai";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";
import OtpInput from "react-otp-input";

export default function MyIP() {
  const [dob, setDob] = React.useState({
    date: 1,
    month: 9,
    year: 1997,
  });

  return (
    <>
      <Head>
        <title>Age Calculator Online | 24 Code</title>
      </Head>
      <Toaster />
      <div className="my-10 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl lg:text-5xl font-bold">
          Age Calculator
        </h1>
        <p>Select Date:</p>
        <div className="text-2xl flex mt-10">
          <div className="flex flex-col">
            <select className="px-3 bg-zinc-100 py-2" name="" id="">
              {[...new Array(31)]?.map((each, idx) => (
                <option key={idx} value={idx + 1}>
                  {idx + 1}
                </option>
              ))}
            </select>
          </div>
          <OtpInput
            shouldAutoFocus
            value={dob.date}
            onChange={(e) => {
              setDob({
                ...date,
                date: e,
              });
            }}
            numInputs={2}
            placeholder="DDMMYYYY"
            renderSeparator={<span className="text-3xl">-</span>}
            renderInput={(props) => (
              <input
                {...props}
                className="text-center text-xl py-3 bg-zinc-100 mx-2"
                style={{
                  width: 40,
                }}
              />
            )}
          />
        </div>
      </div>
    </>
  );
}
