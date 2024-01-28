import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const FetchDataFromDB = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // now we want to read data from db
    // api/product.js codes:

    // import fs from "fs"
    // import path from "path"
    import {MongoClient} from "mongodb"

    async function handler(req, res) {
        const client = await MongoClient.connect("mongodb://127.0.0.1:27017/shop") => shop is database name and it maked if it isnt exist
        if(req.method === "POST") {
            // const title = req.body.title
            // const price = req.body.price
            const {title, price} = req.body
            // const newProduct = {title, price}
            // const products = []
            // products.push(newProduct)
            // console.log(products)
            // const filePath = path.join(process.cwd(), "data", "products.json")
            // const fileData = fs.readFileSync(filePath)
            // const data = JSON.parse(fileData)
            // data.push(newProduct)
            // fs.writeFileSync(filePath, JSON.stringify(data))
            const db = client.db()
            await db.collection("products").insertOne({title, price})
        } else {
            // const filePath = path.join(process.cwd(), "data", "products.json")
            // const fileData = fs.readFileSync(filePath)
            // const data = JSON.parse(fileData)
            const db = client.db()
            const data = await db.collection("products").find().toArray()
            res.json({products: data})
        }
    }
        
    export default handler

      `}
      />
    </div>
  );
};

export default FetchDataFromDB;
