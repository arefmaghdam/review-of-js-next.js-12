import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const Loops = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we use loops to eterate in eteration datas such as strings, arrays and others.

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

    // for loop:

      for(let item = 0; item < products.length ; item++) {
        console.log(products[item].title)
      }

    // do...while

      let item = 0;
      do {
        console.log(products[item].title)
        item++
      } while (item < products.length)

    // while 

      let item = 0;
      while(item < products.length) {
        console.log(products[item].title)
        item++
      }

    // for...in

      for(const item in products) {
        console.log(item) // 0, 1, 2
      }

    // for...of

      for(const item of products) {
        console.log(item) 
      }

      // output:

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
      }

    // forEach:

      products.forEach((item) => console.log(item.title)) // Book 1, Book 2, Book 3

    // map:

      products.map((item) => console.log(item.title)) // ["Book 1", "Book 2", "Book 3"]
      `}
      />
    </div>
  );
};

export default Loops;
