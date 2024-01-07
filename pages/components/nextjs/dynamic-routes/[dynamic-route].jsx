import React from "react";
import styles from "../../../../styles/Home.module.css";
import CodePreview from "../../code-preview";
import Link from "next/link";
import { useRouter } from "next/router";

const StaticRouting = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../images/dynamic-routes.png"
        content={`
    // this page codes:
    
       import React from "react";
       import styles from "../../../../styles/Home.module.css";
       import CodePreview from "../../code-preview";
       import Link from "next/link";

       const StaticRouting = () => {
         return (
           <div className={styles.subPages}>
             <Link href="/">back</Link>
           </div>
         );
       };
       
       export default StaticRouting;

    // there is a standard for this task:
    // we use [] and write file name into []
    // for example:
    // pages/[userID].jsx => /user1 or /user2 or ... this means [userID] can be every thing 
    // you can see in below:
      `}
      />
      ;
    </div>
  );
};

export default StaticRouting;
