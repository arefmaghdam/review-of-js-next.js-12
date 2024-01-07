import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const Routing = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../images/routing.png"
        content={`
    // next.js 12 routes are based on folder structure and pages folder
    // pages/_app.jsx => identifying the active page
    // pages/index.jsx => "/"
    // pages/about.jsx => "/about"
    // pages/components/index.jsx => "/components/"
    // pages/components/products.jsx => "/components/products/"
      `}
      />
    </div>
  );
};

export default Routing;
