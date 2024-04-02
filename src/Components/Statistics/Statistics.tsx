import React from "react";
import styles from "./Statistics.module.scss";
import { ReactComponent as Dashboard } from "../../Assets/dashboard.svg";

function Statistics() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.statContainer1}>
        <div className={styles.backgroundContainer}>
          <div className={styles.iconContainer}>
            <Dashboard className={styles.icon} />
          </div>
        </div>
        <div className={styles.dataContainer}>
          <p>Earning</p>
          <p>$198k</p>
          <p>
            <span>37.8%</span> this month
          </p>
        </div>
      </div>

      <div className={styles.statContainer2}>
        <div className={styles.backgroundContainer}>
          <div className={styles.iconContainer}>
            <Dashboard className={styles.icon} />
          </div>
        </div>
        <div className={styles.dataContainer}>
          <p>Orders</p>
          <p>$2.4</p>
          <p>
            <span>2%</span> this month
          </p>
        </div>
      </div>

      <div className={styles.statContainer3}>
        <div className={styles.backgroundContainer}>
          <div className={styles.iconContainer}>
            <Dashboard className={styles.icon} />
          </div>
        </div>
        <div className={styles.dataContainer}>
          <p>Balance</p>
          <p>$2.4</p>
          <p>
            <span>2%</span> this month
          </p>
        </div>
      </div>

      <div className={styles.statContainer4}>
        <div className={styles.backgroundContainer}>
          <div className={styles.iconContainer}>
            <Dashboard className={styles.icon} />
          </div>
        </div>
        <div className={styles.dataContainer}>
          <p>Total Sales</p>
          <p>$89k</p>
          <p>
            <span>11%</span> this week
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
