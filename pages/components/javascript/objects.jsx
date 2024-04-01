import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const Objects = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    //  objects:

      const product = {
        title: "Book",
        prrice: 99,
        exists: true
      }

      console.log(product.title)

    // object destructuring:

      const product = {
        title: "Book",
        prrice: 99,
        exists: true
      }

      const {title} = product

      console.log(title)  // Book
      `}
      />
    </div>
  );
};

export default Objects;
