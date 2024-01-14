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
