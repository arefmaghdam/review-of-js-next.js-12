import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../code-preview";
import Link from "next/link";

const LinkComponent = () => {

  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../../images/Link-component.png"
        content={`
    //this page codes:

    import React from "react";
    import styles from "../../../styles/Home.module.css";
    import CodePreview from "../code-preview";
    import Link from "next/link";

    const LinkComponent = () => {
    
      return (
        <div className={styles.subPages}>
          <Link href="/">back</Link>
        </div>
      );
    };

    export default LinkComponent;


    // now we want to know that how to navigate between routes:
    // we can use "a" tag and it works correctly but our app page is refreshing
    // and a new request is sended to server and a new page is rendered completely
    // and our state in cleared
    // but we know this is incorrect in react apps or SPA apps
    // so we can use Link component to save our state and rerendered without refresh using reconciliation
      `}
      />
    </div>
  );
};

export default LinkComponent;
