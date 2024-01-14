import React from "react";
import fs from "fs/promises";
import path from "path";

const ProductDetailPage = ({loadedProduct}) => {
  return (
    <div>
      {/* <h2>{loadedProduct.title}</h2>
      <p>{loadedProduct.price}</p> */}
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
