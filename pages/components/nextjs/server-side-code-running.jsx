import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../code-preview";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

const ServerSideCodeRunning = ({ products }) => {
  return (
    <div className={styles.subPages}>
      {/* <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // this page codes:

    import React from "react";
    import styles from "../../../styles/Home.module.css";
    import CodePreview from "../code-preview";
    import Link from "next/link";
    import fs from "fs/promises";
    import path from "path";

    const ServerSideCodeRunning = ({ products }) => {
      return (
        <div className={styles.subPages}>
          {/* <ul>
            {products.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul> */}
          <Link href="/">back</Link>
        </div>
      );
    };

    export const getStaticProps = async () => {
      const filePath = path.join(process.cwd(), "data", "products.json");
      const jsonData = await fs.readFile(filePath);
      const data = JSON.parse(jsonData);
      return {
        props: {
          products: data.products,
        },
      };
    };

    export default ServerSideCodeRunning;


    // we create a data named folder in the app root and a products.json as a file system
    // and we know that we dont access to file system in react but this is accessible in nextjs
    // we must imort fs module first, we can access to file systems using fs, when current page is building
    // also we must use path module for create project path and cwd is current working directory
    // now products is reading from file sysytem, but this option is deprecated now
      `}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
  };
};

export default ServerSideCodeRunning;
