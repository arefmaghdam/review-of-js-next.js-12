import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const JavascriptBrowser = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // for this task we want to have a form in browser and enter products and display them, so we created a project folder that
    // contain 3 file: app.js - index.html style.css
    // index.html codes:

      <!DOCTYPE html>

      <html>
        <head>
          <title>JS App</title>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <section class="container">
            <h1>افزودن محصول</h1>
            <form id="form">
              <div>
                <input type="text" id="title" placeholder="عنوان" />
              </div>
              <div>
                <input type="text" id="price" placeholder="قیمت" />
              </div>
              <button class="btn" type="submit">افزودن</button>
            </form>
            <ul id="products"></ul>
          </section>
          <script src="app.js"></script>
        </body>
      </html>

    // we want to use javascript to access html tags and do process for our goals, but before we review the DOM
    // DOM => Document Object Model
    // DOM commands => API
    // was to access to html tags:
    // 1 : const form = document.getElementById("form")
    // 2 : const container = document.getElementByClassName("container")
    // 3 : const div = document.getElementByTagName("div") // return an array
    // 4 : const elementName = document.querySelector() => id: "#form" class: ".container" tagName: "div"
    // querySelector return first element but querSelectorAll return all elements as an array
    // note that id is uniqu and use for just 1 tag but class can use for several tags and return an array
      `}
      />
    </div>
  );
};

export default JavascriptBrowser;
