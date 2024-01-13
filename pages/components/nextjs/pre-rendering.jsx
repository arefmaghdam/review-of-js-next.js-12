import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../code-preview";
import Link from "next/link";

const PreRendering = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // nextjs is better than react for seo challenge resolving reason
    // and there is html tags in source page of nextjs apps
    // so search engines can detect nextjs pages and seo problem is solving
    // this task do using prerendering or pre generating
    // this means nextjs apps is rendering in server and result is sending for client
    // nextjs apps are SSR defaultly, note that all of the nextjs pages are SSR defaultly.
      `}
      />
    </div>
  );
};

export default PreRendering;
