import React, { useState, useRef } from "react";
import styles from "./SideBar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
const SideBar = () => {
  const ref = useRef();
  console.log(ref.current);
  const show = () => {
    ref.current.classList.toggle("showbar");
  };
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className={styles.SideBar} ref={ref} id="sideBar">
        <div className={styles.close}>
          <AiOutlineClose onClick={show} />
        </div>
        <div className={styles.menu}>
          <div className={styles.dropdown}>
            <div className={styles.dropdownHead} onClick={toggleMenu}>
              <h3>المواليد</h3>
              {menu ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {menu ? (
              <>
                <div className={styles.dropdownBody}>
                  <h4>تسجيل واقعة ميلاد</h4>
                </div>
                <div className={styles.dropdownBody}>
                  <h4>تسجيل ساقط قيد ميلاد</h4>
                </div>
                <div className={styles.dropdownBody}>
                  <h4>تسجيل ميلاد (معثور عليه)</h4>
                </div>
                <div className={styles.dropdownBody}>
                  <h4>تسجيل ميلاد (ساقط قيد معثور عليه)</h4>
                </div>
                <div className={styles.dropdownBody}>
                  <h4>استعلام - تعديل واقعة ميلاد</h4>
                </div>
                <div className={styles.dropdownBody}>
                  <h4>طلب تعديل واقعة ميلاد</h4>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
