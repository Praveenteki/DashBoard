import React from "react";
import styles from "./Search.module.scss";

function Search() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.welcomeContainer}>
        <h1>Hello Praveen 👋,</h1>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search" className={styles.input} />
      </div>
    </div>
  );
}

export default Search;
