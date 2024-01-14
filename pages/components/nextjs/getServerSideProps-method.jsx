import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../code-preview";
import Link from "next/link";

const GetServerSidePropsMethod = ({ username }) => {
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

    const GetServerSidePropsMethod = ({ username }) => {
      return (
        <div className={styles.subPages}>
          <h2>{username}</h2>
          <Link href="/">back</Link>
        </div>
      );
    };

    export const getServerSideProps = async (context) => {
      return {
        props: {
          username: "Aref",
        },
      };
    };

    export default GetServerSidePropsMethod;

    // getStaticProps and getStaticPaths are SSR and SSG methods that generate while my app is loading and prerendered values
    // this means we dont access to user requests and these value created in loading time of app
    // but we can use these method while user send us a request, for example user authentication
    // we use another method for these that said getServerSideProps
    // we must use getServerSideProps method if we want prerendering of page for any user request 
    // we access to user request object if we use getServerSideProps
    // now in above component we dont know which user send request, but we write "Aref" staticly
    // we must change "Aref" to dynamic value using getServerSideProps
      `}
      />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return {
    props: {
      username: "Aref",
    },
  };
};

export default GetServerSidePropsMethod;
