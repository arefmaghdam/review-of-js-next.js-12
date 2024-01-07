import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../code-preview";
import Link from "next/link";
import { useRouter } from "next/router";

const GetRoutesValue = () => {
  const router = useRouter();

  console.log(router.query); // output: ["get-routes-value", "products", "book1"]

  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../../images/get-routes-value.png"
        content={`
    // the route queries is saved in a string array, when i use ... into []
    //this page codes:

    import React from "react";
    import styles from "../../../styles/Home.module.css";
    import CodePreview from "../code-preview";
    import Link from "next/link";
    import { useRouter } from "next/router";
      
    const GetRoutesValue = () => {
      const router = useRouter()
    
      console.log(router.query);   // output: ["get-routes-value", "products", "book1"]
    
      return (
        <div className={styles.subPages}>
          <Link href="/">back</Link>
        </div>
      );
    };
    
    export default GetRoutesValue;
      `}
      />
    </div>
  );
};

export default GetRoutesValue;
