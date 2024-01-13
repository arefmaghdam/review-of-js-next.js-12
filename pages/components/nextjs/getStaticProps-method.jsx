import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../code-preview";
import Link from "next/link";

const GetPropsMethod = ({ products }) => {
  return (
    <div className={styles.subPages}>
      {/* <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../../images/get-static-props.png"
        content={`
    // this page codes:

    import React from "react";
    import styles from "../../../styles/Home.module.css";
    import CodePreview from "../code-preview";
    import Link from "next/link";

    const GetPropsMethod = ({ products }) => {
      return (
        <div className={styles.subPages}>
          {/* <ul>
            {products.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul> */}
          <Link href="/">back</Link>
        </div>
      );
    };

    // export const getStaticProps = async () => {

    //   return {
    //     props: {
    //       products: [
    //         { id: "p1", title: "Product 1" },
    //         { id: "p2", title: "Product 2" },
    //         { id: "p3", title: "Product 3" },
    //       ],
    //     },
    //   };
    // };

    export default GetPropsMethod;


    // all of codes in nextjs components are rendering in server and results are displaying in client
    // nextjs has a method that execute just on server and before current component and not display in client and client just uses its result as a props
    // this is getStaticProps function that is a async built-in function
    // this function return an object with props key, props is a bridge between this function and current component
    // so current component should has a props when we use getStaticProps
    // because getStaticProps execute first and take props to current component
    // we access to props in current component using object destructuring:
    // const {products} = props => products is an array into props object in getStaticProps
    // getStaticProps is deprecated now
      `}
      />
    </div>
  );
};

// export const getStaticProps = async () => {

//   return {
//     props: {
//       products: [
//         { id: "p1", title: "Product 1" },
//         { id: "p2", title: "Product 2" },
//         { id: "p3", title: "Product 3" },
//       ],
//     },
//   };
// };

export default GetPropsMethod;
