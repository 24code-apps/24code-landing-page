import React from "react";
import axios from "axios";
import { AiOutlineCopy, AiOutlineReload } from "react-icons/ai";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

export default function MyIP() {
  const [password, setPassword] = React.useState("");
  const [options, setOptions] = React.useState({
    length: 15,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: false,
  });

  const generatePassword = (
    length = 12,
    includeUppercase = true,
    includeNumbers = true,
    includeSymbols = true
  ) => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = '!@#$%^&*()_+-={}[]|:;"<>,.?/~`';

    let chars = lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    setPassword(password);
  };

  React.useEffect(() => {
    generatePassword(
      options.length,
      options.includeUppercase,
      options.includeNumbers,
      options.includeSymbols
    );
  }, [options]);

  return (
    <>
      <Head>
        <title>Online Password Generator | 24 Code</title>
      </Head>
      <Toaster />
      <div className="my-10 flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-center text-2xl lg:text-4xl font-bold">
            Online Passsword Generator
          </h1>

          <div className="flex items-center mt-5">
            <p className="flex-1">Length : </p>
            <input
              className="mx-3 w-24 bg-zinc-100 px-4 py-2"
              onChange={(e) =>
                setOptions({
                  ...options,
                  length: e.target.value,
                })
              }
              value={options.length}
              type="number"
              name=""
              id=""
            />
            <input
              onChange={(e) =>
                setOptions({
                  ...options,
                  length: e.target.value,
                })
              }
              type="range"
              min="2"
              max="20"
              value={options.length}
              width={300}
              class="slider"
              id="myRange"
            />
          </div>
          <div className="flex mt-3">
            <div
              onClick={() => {
                setOptions({
                  ...options,
                  includeUppercase: !options.includeUppercase,
                });
              }}
              className="mr-2 flex"
            >
              <input
                onClick={() => {}}
                checked={options.includeUppercase}
                type="checkbox"
              />
              <p className="ml-2">UpperCase</p>
            </div>
            <div
              onClick={() => {
                setOptions({
                  ...options,
                  includeNumbers: !options.includeNumbers,
                });
              }}
              className="mr-2 flex"
            >
              <input
                onClick={() => {}}
                checked={options.includeNumbers}
                type="checkbox"
              />
              <p className="ml-2">Numbers</p>
            </div>
            <div
              onClick={() => {
                setOptions({
                  ...options,
                  includeSymbols: !options.includeSymbols,
                });
              }}
              className="flex"
            >
              <input
                onClick={() => {}}
                checked={options.includeSymbols}
                type="checkbox"
              />
              <p className="ml-2">Symbols</p>
            </div>
          </div>
          {password ? (
            <div className="mt-10 flex flex-col justify-center items-center">
              <div className="flex mt-1 text-xl lg:text-4xl">
                <div className="flex items-center">
                  <div className="cursor-pointer flex items-center px-5">
                    <p className="mr-4 lg:mr-10">{password}</p>
                    <CopyToClipboard
                      onCopy={() => toast.success("Copied")}
                      text={password}
                    >
                      <button className="ml-2 text-3xl">
                        <AiOutlineCopy />
                      </button>
                    </CopyToClipboard>
                    <button
                      onClick={() => {
                        generatePassword(
                          options.length,
                          options.includeUppercase,
                          options.includeNumbers,
                          options.includeSymbols
                        );
                      }}
                      className="ml-2 text-3xl"
                    >
                      <AiOutlineReload />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
