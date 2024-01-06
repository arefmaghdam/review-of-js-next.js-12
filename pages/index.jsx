import React from "react";
import styles from "../styles/Home.module.css";
import Provider from "./provider";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeItems}>
          <h1>Next.JS 12</h1>
          <Provider />
        </div>
        <div className={styles.homeItems}>
          <h1>Javascript</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
