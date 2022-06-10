import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Masthead from "../components/masthead";
import AboutUs from "../components/about";
import Statement from "../components/statement";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>B7 Customs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutUs />
      <Statement />
      <Statement />
    </div>
  );
};

export default Home;
