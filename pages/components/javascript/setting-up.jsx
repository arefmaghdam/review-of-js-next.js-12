import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const SettingUp = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we use VSC for javascript development environment, also we need to a browser that translate my codes, we use chrome and chrome v8 engine for this course
    // we use javascript in desktop and mobile and backend apps that we use node.js for translate or interpret our codes instead of chrome v8 engine
    // we need some extentions in vsc that are:
    // 1 auto rename tag 2 ES7 react/redux/graphql/ react-native snippets3 live server 4 material icon theme 5 prettier- code formatter
      `}
      />
    </div>
  );
};

export default SettingUp;
