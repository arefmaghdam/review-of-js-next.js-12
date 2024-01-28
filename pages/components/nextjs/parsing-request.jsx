import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const ParsingRequest = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // in the next step, we want develop an API that when an aPI send to it from client, we can recieve the datas
    // but we dont want to send request using browser address bar and we want to send request using app body and form submition
    // we should use Http methods for this task such as Get, POST, PUT, DELETE and ...
    // when we send a request using browser address bar we have a GET request
    // but when we send request from body of app we have a POST or others methods request
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

        function addProductHandler(event) {
            event.preventDefault()
            const title = titleInputRef.current.value;
            const price = priceInputRef.current.value;
            console.log(title, price)
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

export default ParsingRequest;
