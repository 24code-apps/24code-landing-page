import React from "react";
import axios from "axios";
import { AiOutlineCopy, AiOutlineReload } from "react-icons/ai";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

export default function MyIP() {
  const [notes, setNotes] = React.useState("");
  const textArea = React.useRef(null);

  const saveToStorage = async () => {
    setCookie("single-note", notes);
  };

  const loadStorage = async () => {
    const note = getCookie("single-note");
    if (note) setNotes(note);
  };

  function setCookie(name, value, expiresDays = 1000000) {
    const date = new Date();
    date.setTime(date.getTime() + expiresDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }

    return null;
  }

  React.useEffect(() => {
    textArea.current.focus();
    loadStorage();
  }, []);

  React.useEffect(() => {
    saveToStorage();
  }, [notes]);

  return (
    <>
      <Head>
        <title>Online Notepad | 24 Code</title>
      </Head>
      <Toaster />
      <div className="my-10 flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-center text-2xl lg:text-4xl font-bold">
            Online Notepad
          </h1>
        </div>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          ref={textArea}
          className="text-xl rounded-md mt-5 focus:outline-zinc-500 p-5 w-[80vw] h-[80vh] bg-zinc-100"
          type="text"
          name=""
          id=""
        />
      </div>
    </>
  );
}
