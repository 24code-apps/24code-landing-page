"use client";
import React, { useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const JsonViewer = dynamic(import("react-json-view"), { ssr: false });
import CodeMirror from "@uiw/react-codemirror";
import { json as jsonLang } from "@codemirror/lang-json";
import styles from "./App.module.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

const App = () => {
  const cmRef = useRef(null);
  const [code, setCode] = React.useState("");
  const [json, setJson] = React.useState();
  const [message, setMessage] = React.useState("");

  const handleJson = useCallback(() => {
    setMessage("");
    try {
      if (code) {
        const obj = JSON.parse(code);
        setJson(obj);
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
        setJson(undefined);
      } else {
        throw error;
      }
    }
  }, [code]);

  useEffect(() => {
    handleJson();
  }, [code, handleJson]);

  const editor = (
    <div className="w-[50%] px-10">
      <div className="h-full border-2">
        <CodeMirror
          value={code}
          ref={cmRef}
          height="100%"
          style={{ fontSize: 20, height: "100%" }}
          extensions={[jsonLang()]}
          onChange={(value, viewUpdate) => {
            setCode(value);
          }}
        />
      </div>
    </div>
  );

  const preview = (
    <div className="w-[50%] px-5">
      {message && (
        <pre style={{ padding: 0, margin: 0, color: "red" }}>{message}</pre>
      )}
      {json && typeof json == "object" && (
        <div className="border-2 h-full px-3">
          <JsonViewer
            src={json}
            theme="rjv-default"
            style={{
              fontSize: 20,
            }}
            displayDataTypes={false}
          />
        </div>
      )}
    </div>
  );
  return (
    <>
      <Head>
        <title>JSON Formatter</title>
      </Head>
      <Toaster />
      <div className="my-10 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl lg:text-5xl font-bold">
          JSON Formatter
        </h1>
        <div className="mt-10 flex min-h-[80vh] w-full">
          {editor}
          {preview}
        </div>
      </div>
    </>
  );
};

export default App;
