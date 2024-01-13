import React from "react";
import styles from "../styles/Home.module.css";
import CodePreview from "./components/code-preview";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.subPages}>
      <div>
        <h1>this page not found!</h1>
      </div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../../images/not-found.png"
        content={`
    // this page code:

    import React from "react";
    import styles from "../styles/Home.module.css";
    import CodePreview from "./components/code-preview";
    import Link from "next/link";
      
    const NotFound = () => {
      return (
        <div className={styles.subPages}>
          <div>
            <h1>this page not found!</h1>
          </div>
          <Link href="/">back</Link>
        </div>
      );
    };
    
    export default NotFound;
    // next.js has a default option for 404 page and we can customize this option
    // we create a jsx file with name 404.jsx and this will work as a 404 page
      `}
      />
    </div>
  );
};

export default NotFound;
