import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const ArrayMethods = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // array methods:

      const products = [
        {
          id: 1,
          title: "Book 1",
          price: 99, 
          exists: true,
        },
        {
          id: 2,
          title: "Book 2",
          price: 199, 
          exists: false,
        },
        {
          id: 3,
          title: "Book 3",
          price: 299, 
          exists: true,
        },
      ]

    // forEach:

      products.forEach((item) =>{
        console.log(item.title)
      })

      // output:  Book 1
                  Book 2
                  Book 3

    // map:

      const productsTitle = products.map((item) => {
        return item.title
      })

      console.log(productsTitle)

      // output: ["Book 1", "Book 2", "Book 3"]

    // differences between forEach and map:
    // 1 map must have a return value but return value of forEach is undefined
    // 2 output of map is an array but output of forEach is string for any item

    // fillter:

      const existingProducts = products.fillter((item) => {
        return item.exists === true
      })

      console.log(existingProducts)

      // output:

        [
          {
            id: 1,
            title: "Book 1",
            price: 99, 
            exists: true,
          },
          {
            id: 3,
            title: "Book 3",
            price: 299, 
            exists: true,
          },
        ]
      `}
      />
    </div>
  );
};

export default ArrayMethods;
