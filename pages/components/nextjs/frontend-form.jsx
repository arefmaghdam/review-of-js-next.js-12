import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const FrontendForm = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // we know that the requests doesnt send using browser url in real apps and it send using a form in the codes not in browser
    // and user submit the form and form process and send using POST fetch API
    // api/product.js codes:

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

export default FrontendForm;
