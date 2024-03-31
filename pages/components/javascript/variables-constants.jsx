import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const VariablesAndConstants = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // variables and constants that have 3 step: 1 declaring 2 naming 3 taking value using assignment equal(=)
    // in old version of javascript we use var keyword to declare variables but now we use let keyword

      let number = 20
      let number = 30 // error => syntax error
      console.log(number) // 20
      
    // constants:

      const id = 2
      id = 2  // error => type error
      console.log(id)  // 2 
    
    // note that we must use constants but if we need to variables we use them
    // also we can use mathematical operators for variables and constants
      `}
      />
    </div>
  );
};

export default VariablesAndConstants;
