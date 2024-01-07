import React from "react";
import styles from "../../../../styles/Home.module.css";
import CodePreview from "../../code-preview";
import Link from "next/link";
import { useRouter } from "next/router";

const StaticRouting = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../images/dynamic-sub-routes.png"
        content={`
    // this page codes:

    import React from "react";
    import styles from "../../../../styles/Home.module.css";
    import CodePreview from "../../code-preview";
    import Link from "next/link";
    import { useRouter } from "next/router";

    const StaticRouting = () => {
      const router = useRouter();

      console.log(router.query);

      return (
        <div className={styles.subPages}>
          <Link href="/">back</Link>
        </div>
      );
    };

    export default StaticRouting;

    // this is [] in []:
    // pages/[userPost]/[userID].jsx => [userPost] and [userID] can be every thing 
    // you can see in below:
      `}
      />
      ;
    </div>
  );
};

export default StaticRouting;
