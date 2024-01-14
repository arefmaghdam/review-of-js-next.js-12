import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../code-preview";
import Link from "next/link";

const ContextParameterSSR = ({ username }) => {
  return (
    <div className={styles.subPages}>
      <h2>{username}</h2>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // this page codes:

    import React from "react";
    import styles from "../../../styles/Home.module.css";
    import CodePreview from "../code-preview";
    import Link from "next/link";

    const ContextParameterSSR = ({ username }) => {
      return (
        <div className={styles.subPages}>
          <h2>{username}</h2>
          <Link href="/">back</Link>
        </div>
      );
    };

    export const getServerSideProps = async (context) => {
      const { params, req, res } = context;
      console.log(req);
      console.log(res);
      return {
        props: {
          username: "Aref",
        },
      };
    };

    export default ContextParameterSSR;


    // we access to user request object and details using context, for example params, req and res
    // const { params, req, res } = context;
    // note that user request is sending while refresh is doing
      `}
      />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;
  console.log(req);
  console.log(res);
  return {
    props: {
      username: "Aref",
    },
  };
};

export default ContextParameterSSR;
