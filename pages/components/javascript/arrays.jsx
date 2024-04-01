import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const Arrays = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // arrays:

      const product = ["Book", 99, true]
      console.log(product) // ["Book", 99, true]
      console.log(product[0])  // Book
      product[3] = 89
      console.log(product) // ["Book", 99, true, 89]
    
    // we cant reassign product array:

      product = [1, 2, 3] // we have error

    // but we can change the assigned array items, add edit or delete
    // array methods:

      product.push("P1")
      console.log(product)  // ["Book", 99, true, 89, "P1"]
      product.unshift("P2")
      console.log(product)  // ["P2", "Book", 99, true, 89, "P1"]
      product.pop() // pop delete last item from array
      console.log(product)  // ["P2", "Book", 99, true, 89]
      console.log(product.length) // 5

    // array destructuring:

      const product = ["Book", 99, true]
      const [title, price] = product
      console.log(product)  // ["Book", 99, true]
      console.log(title)  // Book
      console.log(price)  // 99

    // rest operator:

      const product = ["Book", 99, true]
      const [title, ...other] = product
      console.log(product)  // ["Book", 99, true]
      console.log(title)  // Book
      console.log(other)  // [99, true]    
      `}
      />
    </div>
  );
};

export default Arrays;
