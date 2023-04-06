import React from "react";
import DatePick from "./DatePick/DatePick";
import Status from "./Status/Status";
import Percent from "./Percent/Percent";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.date}>
        <DatePick />
      </div>
      <Status />
      <Percent />
    </div>
  );
};

export default Main;
