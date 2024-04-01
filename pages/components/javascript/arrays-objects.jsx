import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const ArraysObjects = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    //  objects and arrays:

      const products: [
        {
          id: 1,
          title: "Book 1",
          price: 99,
          exists: true.
        },
        {
          id: 2,
          title: "Book 2",
          price: 199,
          exists: false.
        },
        {
          id: 3,
          title: "Book 3",
          price: 299,
          exists: true,
        },
      ]

      console.log(products)
      `}
      />
    </div>
  );
};

export default ArraysObjects;
