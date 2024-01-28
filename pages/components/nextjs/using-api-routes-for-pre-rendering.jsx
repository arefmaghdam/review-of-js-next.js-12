import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const UsingAPIRoutesForPreRendering = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // we want to have a route named "/products" that display the products into it
    // for this task, we create pages/product/index.js 
    // we can send a request from client side and recieve datas and show in client
    // but we want to get datas in server side and pre-rendering and show datas in client side
    // but we cant use fetch in getStaticProps method because fetch is for external apis but not internal apis,
    // this method is into server and we cant use fetch because our api is internal and we cant
    // fetch to our server that we are into, we can use fs module and recieve data from file and show it in client side
    // now these datas are prerendring datas and we dont send a new request to server

    // this page codes:

    import fs from "fs"
    import path from "path"

    function ProductPage(props) {
        const {productItems} = props
        return (
            <div>
                <ul>
                    {productItems.map((item) => (
                        <li key={item.title}>{item.title} - {item.price}</li>
                    ))}
                </ul>
            </div>
        )
    }

    export function getStaticProps() {
        const filePath = path.join(process.cwd(). "data", "products.json")
        const fileData = fs.readFileSync(filePath)
        const data = JSON.parse(fileData)
        return {
            props: {
                productItems: data
            }
        }
    }

    export default ProductPage

      `}
      />
    </div>
  );
};

export default UsingAPIRoutesForPreRendering;
