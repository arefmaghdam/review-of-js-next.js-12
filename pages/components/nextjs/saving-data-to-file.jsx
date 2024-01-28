import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const SaveDataToFile = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // we want to save datas that we recieved from request to a file
    // so we use file system option for this task
    // for this task we should create a folder named data in a main root of app
    // so we should create a file named products.json into data folder and initial that with a [] array
    // note that we dont access to file system in frontend and we should use from backend or api/product.js for this task
    // we can use node.js modules in api.product.js because api/product.js is a server side file
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
        }
    }
        
    export default handler

    // this page codes:

    import {useRef} from "react"

    function FrontendForm() {
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
            </div>
        )
    }

    export default FrontendForm

    //global.css codes:

    input {
        width: 35%;
        border: none;
        border-radius: 0.5rem;
        color: #ffffff;
        background-color: #616161;
        outline: none;
        font: inherit;
        font-size: 0.9rem;
        padding: 0.8rem;
        margin: 0.3rem 0
    }

    ::placeholder {
        color: #9e9e9e;
    }

    button {
        background-color: none;
        border: none;
        color: #ffffff;
        font: inherit;
        font-size: 1.2rem
    }
      `}
      />
    </div>
  );
};

export default SaveDataToFile;
