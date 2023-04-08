import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import styles from "./DatePick.module.css";
import { AiOutlineMenu } from "react-icons/ai";
const DatePick = () => {
  dayjs.extend(customParseFormat);
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";
  const show = () => {
    document.getElementById("sideBar").classList.toggle("showbar");
  };
  return (
    <>
      <div className={styles.tabmenu} onClick={show}>
        <AiOutlineMenu />
      </div>
      <Space direction="vertical" size="12">
        <RangePicker
          defaultValue={[
            dayjs("2015/01/01", dateFormat),
            dayjs("2015/01/01", dateFormat),
          ]}
          format={dateFormat}
        />
      </Space>
      <div className={`${styles.tabs} tabs`}>
        <div className="active">
          <p>الكل</p>
        </div>
        <div>
          <p className={styles.none}>غير موثق</p>
        </div>
        <div>
          <p className={styles.verfiy}>موثق</p>
        </div>
      </div>
    </>
  );
};

export default DatePick;
