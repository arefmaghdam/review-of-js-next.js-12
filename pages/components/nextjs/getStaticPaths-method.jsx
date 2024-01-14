import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../code-preview";
import Link from "next/link";

const GetpathsMethod = ({ products }) => {
  return (
    <div className={styles.subPages}>
      {/* <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link href={`/components/nextjs/${item.id}`}>{item.id}</Link>
          </li>
        ))}
      </ul> */}
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // this page codes:

    import React from "react";
    import styles from "../../../styles/Home.module.css";
    import CodePreview from "../code-preview";
    import Link from "next/link";
        
    const GetpathsMethod = ({ products }) => {
      return (
        <div className={styles.subPages}>
          <ul>
            {products.map((item) => (
              <li key={item.id}>
                <Link href={'/components/nextjs/' + {item.id}}>{item.id}</Link>
              </li>
            ))}
          </ul>
          <Link href="/">back</Link>
        </div>
      );
    };
    
    export const getStaticProps = async () => {
      const filePath = path.join(process.cwd(), "data", "products.json");
      const jsonData = await fs.readFile(filePath);
      const data = JSON.parse(jsonData);
      return {
        props: {
          products: data.products,
        },
      };
    };
    
    export default GetpathsMethod;

    // [pid].jsx codes are:

    import React from "react";
    import fs from "fs/promises";
    import path from "path";

    const ProductDetailPage = ({ loadedProduct }) => {
      return (
        <div>
          <h2>{loadedProduct.title}</h2>
          <p>{loadedProduct.price}</p>
        </div>
      );
    };

    export const getStaticProps = async (context) => {
      const { params } = context;
      const productId = params.pid;
      const filePath = path.join(process.cwd(), "data", "products.json");
      const jsonData = await fs.readFile(filePath);
      const data = JSON.parse(jsonData);
      const product = data.products.find((item) => item.id === productId);
      return {
        props: {
          loadedProduct: product,
        },
      };
    };

    // export const getStaticPaths = async () => {
    //   return {
    //     paths: [
    //       { params: { pid: "p1" } },
    //       { params: { pid: "p2" } },
    //       { params: { pid: "p3" } },
    //     ],
    //     fallback: false,
    //   };
    // };

    export default ProductDetailPage;

    // why we couldent use from getStaticProps for dynamic routes and dynamic parameters uses?
    // nextjs uses pre-rendering for all of the pages and when we use from dynamic routes and pages 
    // nextjs cant detect these pages because number of them is not defined and pre-rendering is not occure
    // for resolving this problem we must use from getStaticPaths in dynamic pages same as [pid].jsx
    // getStaticPaths return an object with paths key that we define paths that must be pre-render into the paths:
    // all of the routes in paths are prerender bum if we dont know how many dynamic routes we have, we must use from fallback true
      `}
      />
    </div>
  );
};

// export const getStaticProps = async () => {
//   const filePath = path.join(process.cwd(), "data", "products.json");
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);
//   return {
//     props: {
//       products: data.products,
//     },
//   };
// };

export default GetpathsMethod;
