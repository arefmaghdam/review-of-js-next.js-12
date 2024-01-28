import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const InsertToDB = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // now we should install MongoDB NodeJS Driver
    // npm install mongodb
    // after the installation we should restart the dev server with command of npm run dev
    // in next step we want save datas to mongodb instead of saving into a json file
    // for this task we should go to the api/product.js file
    // api/product.js codes:

    // import fs from "fs"
    // import path from "path"
    import {MongoClient} from "mongodb"

    async function handler(req, res) {
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
            const client = await MongoClient.connect("mongodb://127.0.0.1:27017/shop") => shop is database name and it maked if it isnt exist
            const db = client.db()
            await db.collection("products").insertOne({title, price})
        } else {
            // const filePath = path.join(process.cwd(), "data", "products.json")
            // const fileData = fs.readFileSync(filePath)
            // const data = JSON.parse(fileData)
            // res.json({products: data})
        }
    }
        
    export default handler

    // now we can insert datas using form and we can see our database and collection and datas using robo 3T
      `}
      />
    </div>
  );
};

export default InsertToDB;
