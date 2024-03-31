import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const DataTypes = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // javascript data types are:
    // number:

      let age = 25

    // string:

      let name = "Aref"

    // boolean:

      let validUser = true

    // undefined:

      let user

    // log of data and data type:

      console.log(data)
      console.log(typeof data)

    // javascript template string:

      const result = "the age of" + " " + name + " " + "is" + " " + age
      const result = 'the age of {name} is {age}'
      `}
      />
    </div>
  );
};

export default DataTypes;
