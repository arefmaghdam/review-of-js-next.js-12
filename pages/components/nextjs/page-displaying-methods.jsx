import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../code-preview";
import Link from "next/link";

const PageDisplayingMethod = () => {
  const users = [
    { id: 1, username: "Aref" },
    { id: 2, username: "Taha" },
  ];
  return (
    <div className={styles.subPages}>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link
              href={{
                pathname: "/components/nextjs/[id]",
                query: { id: item.id },
              }}
            >
              {item.username}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../../images/page-displaying-method.png"
        content={`
    // this page code:

    import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../code-preview";
import Link from "next/link";

const PageDisplayingMethod = () => {
  const users = [
    { id: 1, username: "Aref" },
    { id: 2, username: "Taha" },
  ];
  return (
    <div className={styles.subPages}>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link
              href={{
                pathname: "/components/nextjs/[id]",
                query: { id: item.id },
              }}
            >
              {item.username}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">back</Link>
    </div>
  );
};

export default PageDisplayingMethod;


    // there is another way to set href in Link component
    // and it is best when our route is complex and have more nested routes
    // we can use key and value that:
    // {
    //   pathname: '/components/nextjs/[...get-routes-value]',
    //   query: {id: item.id or "Aref"}   
    // }
    // also we can use router.push("components/nextjs/[id]") in a handler function for a button or
    // router.push({
    //    pathname: "/components/nextjs/[id]",
    //    query: {id: item.id or "Aref"}
    // })
      `}
      />
    </div>
  );
};

export default PageDisplayingMethod;
