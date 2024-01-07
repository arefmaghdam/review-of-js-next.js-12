import React from "react";
import styles from "../styles/Home.module.css";
import NextProvider from "./components/next-provider";
import JSProvider from "./components/js-provider";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeItems}>
          <h1>Next.JS 12</h1>
          <NextProvider />
        </div>
        <div className={styles.homeItems}>
          <h1>Javascript</h1>
          <JSProvider />
        </div>
      </div>
    </>
  );
};

export default Home;
