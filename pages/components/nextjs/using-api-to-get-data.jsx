import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const UsingAPIToGetData = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // in next step we want to show data/products.json datas to user using GET api
    // for this task we develop an API in api/product.js and so display it in client side

    // api/product.js codes:

    import fs from "fs"
    import path from "path"

    function handler(req, res) {
        if(req.method === "POST") {
            const title = req.body.title
            const price = req.body.price
            const newProduct = {title, price}
            // const products = []
            // products.push(newProduct)
            // console.log(products)
            const filePath = path.join(process.cwd(), "data", "products.json")
            const fileData = fs.readFileSync(filePath)
            const data = JSON.parse(fileData)
            data.push(newProduct)
            fs.writeFileSync(filePath, JSON.stringify(data))
        } else {
            const filePath = path.join(process.cwd(), "data", "products.json")
            const fileData = fs.readFileSync(filePath)
            const data = JSON.parse(fileData)
            res.json({products: data})
        }
    }
        
    export default handler

    // this page codes:

    import {useRef, useState} from "react"

    function FrontendForm() {
        const [productItems, setProductItems] = useState([])
        const titleInputRef = useRef()
        const priceInputRef = useRef()

        async function addProductHandler(event) {
            event.preventDefault()
            const title = titleInputRef.current.value;
            const price = priceInputRef.current.value;
            const reqBody = {title, price}
            console.log(title, price)
            const response = await fetch("/api/product", {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const responseData = await response.json()
            console.log(responseData)
        }

        async function showProductHandler() {
            const response = await fetch("/api/product")
            const responseData = await response.json()
            // console.log(responseData)
            setProductItems(responseData.products)
        }

        return (
            <div>
                <h2>Frontend Form</h2>
                <form onSubmit={addProductHandler}>
                    <div>
                        <input type:"text" placeholder:"Title..." ref={titleInputRef} />
                    </div>
                    <div>
                        <input type:"text" placeholder:"Price..." ref={priceInputRef} />
                    </div>
                    <button>Add</button>
                </form>
                <div>
                    <button onClick={showProductHandler}>Show Products</button>
                    <ul>
                        {productItems.map((item) => (
                            <li key={item.title}>{item.title} - {item.price}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    export default FrontendForm

      `}
      />
    </div>
  );
};

export default UsingAPIToGetData;
