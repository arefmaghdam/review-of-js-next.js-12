import React from "react";
import styles from "../../../styles/Home.module.css"
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const SettingUp = () => {
  return (
    <div className={styles.subPages}>
      <h3>What is Next.js: The React Framework for Production</h3>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // 0- requirements:
    // install node.js
    // install VSCode
    // 1- install:
    // npx create-next-app or npx create-next-app@latest => for latest version that is 14 now
    // for version of 12:
    // npm init -y
    // npm install next@12.3.4 react react-dom
    // 2- edit your package.json with next scripts:
    // "scripts": {
    //   "dev": "next dev",
    //   "build": "next build",
    //   "start": "next start",
    //   "lint": "next lint"
    // }
    // 3- create the file structure:
    // .
    // ├── package.json
    // ├── pages
    // │   ├── index.js
    // 4- init your index.js:

    // import React from "react";

    // function index() {
    //   return <div>Hello world</div>;
    // }

    // export default index;

    // 5- start next
    // npm run dev
      `}
      />
    </div>
  );
};

export default SettingUp;
