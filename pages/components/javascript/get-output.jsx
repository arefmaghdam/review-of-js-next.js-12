import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const GetOutput = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we create a index.html file:

      <html>
        <head>
          <title>JS App</title>
        </head>
        <body></body>
      </html>

    // we have 2 way to add javascript to html file:
    // 1 using script tag into body tag:

      <html>
        <head>
          <title>JS App</title>
        </head>
        <body>
          <script>
            console.log("Hello World!")
          </script>
        </body>
      </html>
    
      // but this is not correct and logical way to add javascript codes into html file, because when our app is very big and complex we face with more problems
      // 2 using from external files, we create a app.js file for javascript codes and we must connect or link app.js and index.html:

        <html>
          <head>
            <title>JS App</title>
          </head>
          <body>
            <script src="app.js"></script>
          </body>
        </html>

      // app.js codes:

        console.log("Hello World!")
      `}
      />
    </div>
  );
};

export default GetOutput;
