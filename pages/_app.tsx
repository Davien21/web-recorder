import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";

import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

import "../index.css";
import Head from "next/head";

import React from "react";
import { Nav, PageLoader } from "components";
import { useRouteChangeHandler } from "hooks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} />
      <Head>
        <link rel="icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Audio Rec App." />
        <meta name="keywords" content="Audio Rec App"></meta>
        <title>Audio Recorder | Home </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
