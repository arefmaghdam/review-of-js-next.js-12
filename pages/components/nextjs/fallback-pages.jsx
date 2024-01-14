import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const FallbackPages = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // fallback is used for optimization and when we have so many dynamic routes we use fallback true and
    // nextjs pre rendered all pages that we write into paths key but nextjs displayed other same valid pages without prerendering
    // this means if we enter the id in url we havve an error because we have a new request while we dont have prerender for current id
    // for resolving this problem, we must write an if in first of pid component and before of component return:
    // if(!loadedProduct) {
    //   return <p>Loading ... </p>
    // }
      `}
      />
    </div>
  );
};

export default FallbackPages;
