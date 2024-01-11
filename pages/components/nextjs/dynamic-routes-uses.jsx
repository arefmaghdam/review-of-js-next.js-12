import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const DynamicRoutesUses = () => {
  const users = [
    { id: 1, username: "Aref" },
    { id: 2, username: "Taha" },
  ];
  return (
    <div className={styles.subPages}>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link href={`/components/nextjs/${item.id}`}>{item.username}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../images/dynamic-routes-uses.png"
        content={`
    this page code:

    import React from "react";
    import styles from "../../../styles/Home.module.css";
    import CodePreview from "../../components/code-preview";
    import Link from "next/link";

    const DynamicRoutesUses = () => {
      const users = [
        { id: 1, username: "Aref" },
        { id: 2, username: "Taha" },
      ];
      return (
        <div className={styles.subPages}>
          <ul>
            {users.map((item) => (
              <li key={item.id}>
                <Link href={'/components/nextjs/' + {item.id}}>{item.username}</Link>
              </li>
            ))}
          </ul>
          <Link href="/">back</Link>
        </div>
      );
    };

    export default DynamicRoutesUses;

        
    // how to navigate between dynamic routes:
    // we use [...get-routes.value].jsx for dynamic navigating
    // and we use an array for mapping and creating routes
      `}
      />
    </div>
  );
};

export default DynamicRoutesUses;
