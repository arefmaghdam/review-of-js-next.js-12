import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const Classes = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // classes:

      class Product {
        constructor(title, price) {
          this.title = title
          this.price = price
        }

        productInfo() {
          return 'Title: {this.title} - Price: {this.price}'
        }
      }

      const product1 = new Product("Book 1", 99)
      const product2 = new Product("Book 2", 199)

      console.log(product1)
      console.log(product2)
      console.log(product1.productInfo)
      console.log(product2.productInfo)
      `}
      />
    </div>
  );
};

export default Classes;
