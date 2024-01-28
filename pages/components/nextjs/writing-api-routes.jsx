import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const WritingAPIRoutes = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // next.js is a fullstack framework => implement backend and frontend and devops similar to MERN stack
    // backend is implement using api routest that we create a api folder into pages folder as a next.js standard and write apis
    // we create a product.js into api folder, this is a built-in features of next.js
    // all of the codes into api/product.js is execute in server side, so we cant use react components into api files 
    // because react components are client side and api files are server side, we should use javascript functions for this task
    // this functoin work with req and res because we work with api that api includes req and res
    // in step1: we dont want process req and we want return a simple res
    // now we send a request using browser with below url:
    // http://localhost3000/api/product
    // so we see a json response in browser as below:
    // {"message": "Product API"}
    // this page codes:

    // api/product.js codes:

    function handler(req, res) {
      res.json({ message: "Product API" });
    }
    
    export default handler;
      `}
      />
    </div>
  );
};

export default WritingAPIRoutes;
