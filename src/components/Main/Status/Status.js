import React from "react";
import styles from "./Status.module.css";
import { BiRotateRight } from "react-icons/bi";

const Status = () => {
  return (
    <>
      <div className={styles.status}>
        <div className={styles.row}>
          <div className={styles.parent}>
            <div className={styles.icon}>
              <div></div>
            </div>
            <div className={styles.text}>
              <h2>10,918</h2>
              <h4>عدد المواليد المدخلين</h4>
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.icon}>
              <div className={styles.dead}></div>
            </div>
            <div className={styles.text}>
              <h2>20</h2>
              <h4>عدد الوفيات المدخلين</h4>
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.icon}>
              <BiRotateRight />
            </div>
            <div className={styles.text}>
              <h2>400</h2>
              <h4>طلبات تعديل مقدمة</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
