import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Altitude - Newsletters</title>
      </Head>
      <div className="p-4">
        <div className="navbar bg-base-100 rounded-md">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Home Page</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
