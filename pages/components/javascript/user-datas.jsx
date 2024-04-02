import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const UserDatas = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to do this project:
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

    // app.js codes:

      const form = document.querySelector(#form)
      const title = document.querySelector("#title")
      const price = document.querySelector("#price")
      const products = document.querySelector("#products")

      const addProduct = (event) => {
        event.preventDefault()
        const productItem = document.createElement("li")
        const productInfo = document.createTextNode('{title.value} - {price.value}')
        productItem.appendChild(productInfo)
        products.appendChild(productItem)
        title.value = ""
        price.value = ""
      }

      form.addEventListener("submit", addProduct)
      `}
      />
    </div>
  );
};

export default UserDatas;
