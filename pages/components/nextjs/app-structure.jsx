import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const AppStructure = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview imgURL="../../../images/app-structure.png"
        content={`
    // node-modules => installed modules
    // pages => root folder for routes
    //    api => for setting up apis easily
    //    _app.js => importing global styles and children props instead of active pages
    //    index.js => entry point for app
    // components => all of components that are used in pages
    // public => for static files
    // styles => for css styles
    //    global.module.css
    // eslintrc.json => for identifying and reporting on patterns
    // .gitignore => git files and folders to ignore
    // next.config.js => configuration file for next.js
    // package-lock.json => node-modules tree
    // package.json => project dependencies and scripts description
    // README.md => markdown file for documentation
      `}
      />
    </div>
  );
};

export default AppStructure;
