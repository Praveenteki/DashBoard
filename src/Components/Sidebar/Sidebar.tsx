import React from "react";
import styles from "./Sidebar.module.scss";
import { ReactComponent as Dashboard } from "../../Assets/dashboard.svg";
import Profile from "../../Assets/profile.jpg";

function Sidebar() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.headingContainer}>
          <div className={styles.iconContainer}>
            <Dashboard className={styles.icon} />
          </div>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.menusContainer}>
          <div className={styles.menuActive}>
            <div className={styles.iconContainer}>
              <Dashboard className={styles.icon} />
            </div>
            <p>Dashboard</p>
          </div>

          <div className={styles.menu}>
            <div className={styles.iconContainer}>
              <Dashboard className={styles.icon} />
            </div>
            <p>Dashboard</p>
          </div>

          <div className={styles.menu}>
            <div className={styles.iconContainer}>
              <Dashboard className={styles.icon} />
            </div>
            <p>Dashboard</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.profileContainer}>
          <div className={styles.imageContainer}>
            <img src={Profile} alt="profile" className={styles.image} />
          </div>
          <div className={styles.infoContainer}>
            <p>Praveen</p>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
