import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const ClientSideDataFetching = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../images/app-structure.png"
        content={`
    // sometimes we dont want to have data fetching in server side and we dont want to have server side pre-rendering or pre-generating
    // because sometimes we have most dynamic datas such as user orders that we want to data fetching in client side
    // for this task, we need to a fake API such as JSON placeholder or json-server package
    // we can install json-server package using below CLI command:
    // npm install json-server
    // and so we change package.json scripts as below:
    // "server": "json-server --watch db.json --port 5000"
    // now we start a new terminal and start json-server using below command:
    // npm run server
    // db.json is maked after above command that we can use the http://localhost5000/posts url for data fetching
    // but we want customize the db.json as below:
    // {
    //     "orders" : [
    //         {
    //             "id": "u1",
    //             "username": "Aref",
    //             "amount": "99"
    //         },
    //         {
    //             "id": "u2",
    //             "username": "Admin",
    //             "amount": "299"
    //         }
    //     ]
    // }
    // now we can access the orders using http://localhost5000/orders url
    // this page codes:
    import { useEffect, useState } from "react"

    function OrdersPage() {
        const [orders, setOrders ] = useState([])

        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch("http://localhost:5000/orders)
                const responseData = await response.json()
                setOrders(responseData)
            }
            fetchData()
        }, [])
        return (
            <div>
                {orders.map((item) => (
                    <div key={item.id}>
                        {item.username} - {item.amount}
                    <div/>
                ))}
            <div/>
        )
    }

    export default OrdersPage
      `}
      />
    </div>
  );
};

export default ClientSideDataFetching;
