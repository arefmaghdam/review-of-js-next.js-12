import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const ServerSideDataFetching = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // when we want to pre-render the datas we can fusion the client side data fetching with server side data fetching
    // when our app is very big we want to show initial datas to user using per-render and then updata datas using client
    // side data fetching
    // this fusion can be a pattern for big apps
    // data returned from getStaticProps is used in useState initial state and this is a data fusion
    // this page codes:
    import { useEffect, useState } from "react"

    function OrdersPage(props) {
        const {orders} = props
        const [orders, setOrders ] = useState(orders) => data fusion of client side and server side data fetching

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

    export async function getStaticProps() {
        const response = await fetch("http://localhost5000/orders")
        const responseData = await response.json()
        return {
            props: {orders: responseData}
        }
    }
      `}
      />
    </div>
  );
};

export default ServerSideDataFetching;
