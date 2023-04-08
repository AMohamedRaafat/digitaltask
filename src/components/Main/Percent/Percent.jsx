import React, { useEffect, useRef } from "react";
import styles from "./Percent.module.css";
const Percent = () => {
  const womanStopBorn = useRef();
  const manStopBorn = useRef();
  const womanStopDead = useRef();
  const manStopDead = useRef();
  const womanPer = "88%";
  const manPer = "12%";
  const womanPerDead = "76%";
  const manPerDead = "38%";
  useEffect(() => {
    womanStopBorn.current.setAttribute("offset", womanPer);
    manStopBorn.current.setAttribute("offset", manPer);
    womanStopDead.current.setAttribute("offset", womanPerDead);
    manStopDead.current.setAttribute("offset", manPerDead);
  });
  return (
    <div className={styles.percent}>
      <div className={styles.row}>
        <div className={styles.data}>
          <h3>النسبة بين الذكور والإناث للمواليد</h3>
          <div className={styles.chart}>
            <div className={styles.woman}>
              <span>إناث</span>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 221.2 500"
                enableBackground="new 0 0 221.2 500"
                xmlSpace="preserve"
              >
                <linearGradient y2="0%" x2="0" y1="100%" x1="0%" id="womanBorn">
                  <stop
                    stopColor="#e85099"
                    offset="0%"
                    id="F1gst1"
                    ref={womanStopBorn}
                  />
                  <stop stopColor="#dddddd" offset="0%" id="F1gst2" />
                </linearGradient>

                <g>
                  <path
                    id="Path_2275"
                    fill="url(#womanBorn)"
                    d="M157.7,94.8c0,26-21.1,47.1-47.1,47.1c-26,0-47.1-21.1-47.1-47.1s21.1-47.1,47.1-47.1
		c0,0,0,0,0,0C136.6,47.8,157.7,68.8,157.7,94.8z M215.3,304.6l-36.5-138.7c0-0.1,0-0.1-0.1-0.2c-1.2-6.2-6.6-10.7-12.9-10.7H55.4
		c-6.3,0-11.7,4.5-12.9,10.7c0,0,0,0.1-0.1,0.2L5.9,304.6c-2,7.8,2.6,15.7,10.4,17.8c7.8,2,15.7-2.6,17.8-10.4l29.5-112.2v62.7
		L34.8,371.6h28.7v109.9c0,10.2,8.3,18.5,18.5,18.5s18.5-8.3,18.5-18.5V371.8h20.1v109.7c0,10.2,8.3,18.5,18.5,18.5
		s18.5-8.3,18.5-18.5V371.8h28.7l-28.7-109.1v-62.9L187.2,312c2,7.8,10,12.4,17.8,10.4C212.7,320.3,217.3,312.3,215.3,304.6
		L215.3,304.6z"
                  />
                </g>
              </svg>
              <h3>{womanPer}%</h3>
            </div>
            <div className={styles.man}>
              <span>ذكور</span>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 221.2 500"
                enableBackground="new 0 0 221.2 500"
                xmlSpace="preserve"
              >
                <linearGradient y2="0%" x2="0" y1="100%" x1="0%" id="manBorn">
                  <stop
                    stopColor="#e85099"
                    offset="0%"
                    id="F1gst3"
                    ref={manStopBorn}
                  />
                  <stop stopColor="#dddddd" offset="0%" id="F1gst4" />
                </linearGradient>
                <g id="Group_2478" transform="translate(0 0)">
                  <g id="Group_2477">
                    <path
                      id="Path_2278"
                      fill="url(#manBorn)"
                      d="M161.2,61.7c0,27.9-22.6,50.6-50.5,50.6c-27.9,0-50.6-22.6-50.6-50.5
			c0-27.9,22.6-50.6,50.5-50.6l0,0C138.6,11.2,161.2,33.8,161.2,61.7z M184.4,126.4H37c-8.6,0-15.6,7-15.6,15.6v153.3c-0.1,8.6,6.6,15.8,15.1,16.2
			c8.6,0.3,15.8-6.5,16.1-15.1c0-0.2,0-0.3,0-0.5V161.4c0-2.1,1.7-3.8,3.8-3.8c0,0,0,0,0,0l0,0c2.1,0,3.8,1.7,3.8,3.8c0,0,0,0,0,0
			v314.9c-0.1,10.6,8,19.6,18.6,20.5c11,0.7,20.4-7.6,21.2-18.5c0-0.4,0-0.9,0-1.3V311.6h21.5v164.6c-0.1,10.6,8,19.6,18.6,20.5
			c11,0.7,20.4-7.6,21.2-18.5c0-0.4,0-0.9,0-1.3V161.4c0-2.1,1.7-3.8,3.8-3.8c0,0,0,0,0,0l0,0c2.1,0,3.8,1.7,3.8,3.8c0,0,0,0,0,0
			v134c-0.1,8.6,6.5,15.8,15.1,16.2c8.6,0.3,15.8-6.5,16.1-15.1c0-0.2,0-0.3,0-0.5V142C200,133.3,193,126.4,184.4,126.4z"
                    />
                  </g>
                </g>
              </svg>

              <h3>{manPer}</h3>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.data}>
          <h3>النسبة بين الذكور والإناث للوفيات</h3>
          <div className={styles.chart}>
            <div className={styles.woman}>
              <span>إناث</span>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 221.2 500"
                enableBackground="new 0 0 221.2 500"
                xmlSpace="preserve"
              >
                <linearGradient y2="0%" x2="0" y1="100%" x1="0%" id="womanDead">
                  <stop
                    stopColor="#7d7d94"
                    offset="0%"
                    id="F1gst4"
                    ref={womanStopDead}
                  />
                  <stop stopColor="#dddddd" offset="0%" id="F1gst5" />
                </linearGradient>
                <g>
                  <path
                    id="Path_2275"
                    fill="url(#womanDead)"
                    d="M157.7,94.8c0,26-21.1,47.1-47.1,47.1c-26,0-47.1-21.1-47.1-47.1s21.1-47.1,47.1-47.1
		c0,0,0,0,0,0C136.6,47.8,157.7,68.8,157.7,94.8z M215.3,304.6l-36.5-138.7c0-0.1,0-0.1-0.1-0.2c-1.2-6.2-6.6-10.7-12.9-10.7H55.4
		c-6.3,0-11.7,4.5-12.9,10.7c0,0,0,0.1-0.1,0.2L5.9,304.6c-2,7.8,2.6,15.7,10.4,17.8c7.8,2,15.7-2.6,17.8-10.4l29.5-112.2v62.7
		L34.8,371.6h28.7v109.9c0,10.2,8.3,18.5,18.5,18.5s18.5-8.3,18.5-18.5V371.8h20.1v109.7c0,10.2,8.3,18.5,18.5,18.5
		s18.5-8.3,18.5-18.5V371.8h28.7l-28.7-109.1v-62.9L187.2,312c2,7.8,10,12.4,17.8,10.4C212.7,320.3,217.3,312.3,215.3,304.6
		L215.3,304.6z"
                  />
                </g>
              </svg>
              <h3>{womanPerDead}</h3>
            </div>
            <div className={styles.man}>
              <span>ذكور</span>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 221.2 500"
                enableBackground="new 0 0 221.2 500"
                xmlSpace="preserve"
              >
                <linearGradient y2="0%" x2="0" y1="100%" x1="0%" id="manDead">
                  <stop
                    stopColor="#7d7d94"
                    offset="0%"
                    id="F1gst5"
                    ref={manStopDead}
                  />
                  <stop stopColor="#dddddd" offset="0%" id="F1gst6" />
                </linearGradient>
                <g id="Group_2478" transform="translate(0 0)">
                  <g id="Group_2477">
                    <path
                      id="Path_2278"
                      fill="url(#manDead)"
                      d="M161.2,61.7c0,27.9-22.6,50.6-50.5,50.6c-27.9,0-50.6-22.6-50.6-50.5
			c0-27.9,22.6-50.6,50.5-50.6l0,0C138.6,11.2,161.2,33.8,161.2,61.7z M184.4,126.4H37c-8.6,0-15.6,7-15.6,15.6v153.3c-0.1,8.6,6.6,15.8,15.1,16.2
			c8.6,0.3,15.8-6.5,16.1-15.1c0-0.2,0-0.3,0-0.5V161.4c0-2.1,1.7-3.8,3.8-3.8c0,0,0,0,0,0l0,0c2.1,0,3.8,1.7,3.8,3.8c0,0,0,0,0,0
			v314.9c-0.1,10.6,8,19.6,18.6,20.5c11,0.7,20.4-7.6,21.2-18.5c0-0.4,0-0.9,0-1.3V311.6h21.5v164.6c-0.1,10.6,8,19.6,18.6,20.5
			c11,0.7,20.4-7.6,21.2-18.5c0-0.4,0-0.9,0-1.3V161.4c0-2.1,1.7-3.8,3.8-3.8c0,0,0,0,0,0l0,0c2.1,0,3.8,1.7,3.8,3.8c0,0,0,0,0,0
			v134c-0.1,8.6,6.5,15.8,15.1,16.2c8.6,0.3,15.8-6.5,16.1-15.1c0-0.2,0-0.3,0-0.5V142C200,133.3,193,126.4,184.4,126.4z"
                    />
                  </g>
                </g>
              </svg>

              <h3>{manPerDead}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Percent;
