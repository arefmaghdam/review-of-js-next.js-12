import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const DynamicAPIRoutes = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // we add id to data/products.json as below:
    // [
    //     { "id": "p1", "title": "Product 1", "price": "299" },
    //     { "id": "p2", "title": "Product 2", "price": "399" },
    //     { "id": "p3", "title": "Product 3", "price": "499" }
    // ]
    // we want to have dynamic api routes, it means if we go to "/api/p1"
    // we see the product details that is related to "p1"
    // we create api/[productId].js and write below codes into:
    
    [productId].js codes:

    import fs from "fs"
    import path from "path"

    function handler(req, res) {
        const pId = req.guery.productId
        const filePath = path.join(process.cwd(), "data", "products.json")
        const fileData = fs.readFileSync(filePath)
        const data = JSON.parse(fileData)
        const product = data.find((item) => item.id === pId)
        res.json({product})
    }

    export default handler

    // this page codes:

    import {useState} from "react"

    import fs from "fs"
    import path from "path"

    function ProductPage(props) {
        const [productData, setProductData] = useState()

        async function productPriceHandler(id) {
            const response = await fetch("/api/" + {id})
            const responseData = await response.json()
            setProductData(responseData.product)
        }

        const {productItems} = props
        return (
            <div>
            {productData && <p>{productData.price}</p>}
                <ul>
                    {productItems.map((item) => (
                        <li key={item.title}>{item.title}
                            <button onClick={productPriceHandler.bind(null, item.id)}>Show Price</button>
                        </li>
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

export default DynamicAPIRoutes;
