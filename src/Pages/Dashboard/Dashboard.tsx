import React from "react";
import styles from "./Dashboard.module.scss";
import Search from "../../Components/Search/Search";
import Statistics from "../../Components/Statistics/Statistics";
import Charts from "../../Components/Charts/Charts";
import Table from "../../Components/Table/Table";

function Dashboard() {
  return (
    <div className={styles.mainContainer}>
      <Search />
      <Statistics />
      <Charts />
      <Table />
    </div>
  );
}

export default Dashboard;
