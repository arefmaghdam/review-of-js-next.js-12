import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const Conditions = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // conditions

      const price = 99
      const newPrice = 109
      if (newPrice > price) {
        console.log("discount added!")
      } else if (newPrice < price) {
        console.log("discount doesnt contain")
      } else {
        console.log("price is fit")
      }

    // note that we shouldnt use else and we must use if for better performance
      `}
      />
    </div>
  );
};

export default Conditions;
