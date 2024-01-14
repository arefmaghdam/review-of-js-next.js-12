import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const DynamicDisplayPage = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // [pid].jsx codes are:

    import React from "react";
    import fs from "fs/promises";
    import path from "path";

    const ProductDetailPage = ({ loadedProduct }) => {
      return (
        <div>
          {/* <h2>{loadedProduct.title}</h2>
          <p>{loadedProduct.price}</p> */}
        </div>
      );
    };

    const getData = async () => {
      const filePath = path.join(process.cwd(), "data", "products.json");
      const jsonData = await fs.readFile(filePath);
      const data = JSON.parse(jsonData);
      return data;
    };

    export const getStaticProps = async (context) => {
      const { params } = context;
      const productId = params.pid;
      const data = await getData();
      const product = data.products.find((item) => item.id === productId);
      return {
        props: {
          loadedProduct: product,
        },
      };
    };

    // export const getStaticPaths = async () => {
    //   const data = await getData();
    //   const ids = data.products.map((item) => item.id);
    //   const params = ids.map((item) => ({ params: { pid: item } }));
    //   return {
    //     paths: params,
    //     fallback: false,
    //   };
    // };

    export default ProductDetailPage;


    // we want to generate and display routes dynamicly, this means that routes in getStaticPaths in [pid].jsx does not be static and must be dynamic in paths key
      `}
      />
    </div>
  );
};

export default DynamicDisplayPage;
