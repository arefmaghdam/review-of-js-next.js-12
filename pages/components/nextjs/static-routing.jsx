import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const StaticRouting = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../images/routing.png"
        content={`
    // next.js 12 routes are based on folder structure and pages folder
    // pages/_app.jsx => identifying the active page
    // pages/index.jsx => "/"
    // pages/about.jsx => "/about" => about is a static value
    // pages/components/index.jsx => "/components/" => components is a static value
    // pages/components/products.jsx => "/components/products/" => products is a static value
    // index.jsx is entry point for each route/sub-route or folder
    // all of the above routes that we were used, are static routes same as below picture:
      `}
      />
    </div>
  );
};

export default StaticRouting;
