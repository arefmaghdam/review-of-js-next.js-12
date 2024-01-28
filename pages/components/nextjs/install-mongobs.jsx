import React from "react";
import styles from "../../../styles/Home.module.css";
import CodePreview from "../../components/code-preview";
import Link from "next/link";

const InstallMongodb = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        content={`
    // now we want to save datas into mongodb database
    // for this task we need 3 tools:
    // 1 MongoDB => we should download mongodb from comminuty edition and download it
    // also we can use try free section that uses from Atlass that is a cloud for mongodb
    // after download we extract rar folder and rename it to mongodb and we create a folder that named mongodb-data
    // we should install mongodb, mongodb folder is for mongodb server execution and mongodb-data folder is for mongodb datas
    // these folder can be any where but they should be in location that not deleted after
    // 2 install a GUI for mongodb named Robo 3T but we can use compass GUI that is for mongodb company
    // so we should download and install robo 3t gui that is free and simple
    // 3 MongoDB NodeJS driver npm package, if we want to use mongodb with node js, we should install its driver
    // after install 3 tools
    // we open the cmd and write below command for connection mongodb
    // this command has 2 section that first section for execution mongodb server and next section for data saving
    // /Users/Aref/mongodb/bin/mongod.exe --dbpath=/Users/Aref/mongodb-data  
    // after execution above command in cmd we have a connection between nodejs and mongodb
    // note that we dont close the cmd when we work with mongodb, because mongodb connection terminate when we close cmd
    // now we open the robo 3t and click on the Connect button in top of the app  
      `}
      />
    </div>
  );
};

export default InstallMongodb;
