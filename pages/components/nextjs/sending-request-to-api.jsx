import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const SendingRequestToAPI = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // we should to send a POST request to api using fetch
    // api/product.js codes:

    function handler(req, res) {
        if(req.method === "POST") {
            const title = req.body.title
            const price = req.body.price
            const newProduct = {title, price}
            const products = []
            products.push(newProduct)
            console.log(products)
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

export default SendingRequestToAPI;
