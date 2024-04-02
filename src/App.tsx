import React from "react";
import styles from "./App.module.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.pageContainer}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
