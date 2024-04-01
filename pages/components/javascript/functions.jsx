import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const Functions = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // functions:

      function addProduct(title, price) {
        console.log('Title: {title} - Price: {price}')
        return ('Title: {title} - Price: {price}')
      }

      const result = addProduct("book", 99)
      console.log(result)

    // default parameters (modern javascript):

      function addProduct(title = "Book 2", price = 109) {
        return ('Title: {title} - Price: {price}')
      }

      const result = addProduct()
      console.log(result)

    // arrow functions (modern javascript):

      const addProduct = (title, price) => {
        return ('Title: {title} - Price: {price}')
      }

      const result = addProduct("Book", 99)
      console.log(result)

    // when we return just 1 line code we can delete return keyword and {} (modern javascript):

      const addProduct = (title, price) => ('Title: {title} - Price: {price}')
      `}
      />
    </div>
  );
};

export default Functions;
