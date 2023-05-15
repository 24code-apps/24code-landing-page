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
  const [age, setAge] = React.useState(false);

  const [invalidDate, setInvalidDate] = React.useState(false);

  const [date, setDate] = React.useState(false);

  const calculateAge = () => {
    setInvalidDate(false);
    setAge(false);
    try {
      const date = new Date(`${dob.year}-${dob.month}-${dob.date}`);
      const age = calculate(date);
      setAge(age);
    } catch (err) {
      setInvalidDate(true);
    }
  };

  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const calculate = (birthDate) => {
    const now = new Date();
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    let age = now.getFullYear() - birthYear;

    if (
      now.getMonth() < birthMonth ||
      (now.getMonth() === birthMonth && now.getDate() < birthDay)
    ) {
      age--;
    }

    return age;
  };

  return (
    <>
      <Head>
        <title>Age Calculator Online | 24 Code</title>
      </Head>
      <Toaster />
      <div className="min-h-[60vh] my-10 flex flex-col items-center">
        <h1 className="text-center text-4xl lg:text-5xl font-bold">
          Age Calculator
        </h1>
        <div className="flex flex-col">
          <div className="mt-10 justify-between flex items-center">
            <p className="text-lg font-bold">Select Date:</p>
            <button
              onClick={calculateAge}
              className="bg-[#0173C6] text-white py-2 px-4 text-sm rounded-md"
            >
              Find Age
            </button>
          </div>
          <div className="text-md lg:text-xl flex mt-2">
            <div className="flex flex-col">
              <p className="text-md">Date</p>
              <select
                onChange={(e) => {
                  setDob({
                    ...dob,
                    date: e.target.value,
                  });
                }}
                value={dob.date}
                className="text-center appearance-none px-3 bg-zinc-100 py-2"
                name=""
                id=""
              >
                {[...new Array(31)]?.map((each, idx) => (
                  <option key={idx} value={idx + 1}>
                    {idx + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="ml-1 lg:ml-4 flex flex-col">
              <p className="text-md">Month</p>
              <select
                onChange={(e) => {
                  setDob({
                    ...dob,
                    month: e.target.value,
                  });
                }}
                value={dob.month}
                className="text-center appearance-none px-3 bg-zinc-100 py-2"
                name=""
                id=""
              >
                {months?.map((each, idx) => (
                  <option key={idx} value={idx + 1}>
                    {each}
                  </option>
                ))}
              </select>
            </div>
            <div className="ml-1 lg:ml-4 flex flex-col">
              <p className="text-md">Year</p>
              <OtpInput
                shouldAutoFocus
                value={dob.year}
                onChange={(e) => {
                  setDob({
                    ...dob,
                    year: e,
                  });
                }}
                numInputs={4}
                placeholder="YYYY"
                renderSeparator={<span className="text-md lg:text-3xl"></span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="text-center text-xl py-2 bg-zinc-100 mx-1 lg:mx-2"
                    style={{
                      width: 40,
                    }}
                  />
                )}
              />
            </div>
          </div>
          {age ? (
            <div className="mt-24 flex flex-col justify-center items-center">
              <h1 className="font-bold text-8xl">{age}</h1>
              <p>Years</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
