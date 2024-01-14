import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../code-preview";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

const DynamicParametersUses = ({ products }) => {
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
    import fs from "fs/promises";
    import path from "path";

    const DynamicParametersUses = ({ products }) => {
      return (
        <div className={styles.subPages}>
          <ul>
            {products.map((item) => (
              <li key={item.id}>
                <Link href={'/components/nextjs/'+{item.id}}>{item.id}</Link>
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

    export default DynamicParametersUses;


    // [pid].jsx file codes are:

    import React from "react";
    import fs from "fs/promises";
    import path from "path";

    const ProductDetailPage = ({loadedProduct}) => {
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
      const product = data.products.find((item) => item.id === productId)
      return {
        props: {
            loadedProduct: product
        }
      }
    };

    export default ProductDetailPage;


    // we create [pid].jsx file for display products details and we use getStaticProps for getting products from data/products.json
    // there is a difference between [pid].jsx getStaticProps and other files getStaticProps
    // we have dynamic datas in [pid].jsx based on products id getted from url params id
    // so we should use from context parameter in getStaticProps for accessing for url params
    // note that context is same of useRouter, but useRouter is for components and client side and context is for getStaticProps and server side
    // finally we have an error that said we must use from getStaticPaths
    // this options are deprecated now
      `}
      />
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

export default DynamicParametersUses;
