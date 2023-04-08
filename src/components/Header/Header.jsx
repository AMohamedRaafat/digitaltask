import React, { useState } from "react";
import styles from "./header.module.css";
import logoOne from "./logo1.png";
import logoTwo from "./logo2.png";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className={styles.Header}>
      <div className={styles.Header__logo}>
        <div className={styles.logo}>
          <img src={logoOne} alt="logoOne" />
          <div className={styles.divider}></div>
          <img src={logoTwo} alt="logoTwo" />
        </div>
        <div className={styles.title}>
          <h2> الرئيسية </h2>
        </div>
      </div>
      <div className={styles.Header__setting}>
        <div className={styles.search}>
          {show ? (
            <form>
              <input type="text" placeholder="ابحث عن حالة مواليد او وفاة" />
              <button type="submit"> بحث </button>
            </form>
          ) : (
            <button onClick={handleShow}>
              <AiOutlineSearch />
              <span> استعلام عن حالة مواليد او وفاة</span>
            </button>
          )}
        </div>
        <div className={styles.setting}>
          <button>
            <AiOutlineSetting className={styles.settingSvg} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
