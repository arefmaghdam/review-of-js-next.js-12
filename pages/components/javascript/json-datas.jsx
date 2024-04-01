import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const JSONDatas = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // when we want to send datas to backend we must transter datas to json datas, json is a standard for data types that transfer between frontend and backend
    // we change data type to string using JSON technology

      const products = [
        {
          id:1,
          title: "Book 1",
          price: 99,
          exists: true,
        },
        {
          id:2,
          title: "Book 2",
          price: 199,
          exists: false,
        },
      ]

      const data = JSON.stringify(products)
      console.log(data)

    // we use JSON.stringify() to change data for sending to backend, now if datas come from backend to frontend as a json data we must
    // change json data to normal data:

      const response = JSON.parse(data)
      console.log(response)
      `}
      />
    </div>
  );
};

export default JSONDatas;
