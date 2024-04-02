import React from "react";
import styles from "./Charts.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Charts() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Data",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: "#5A32EA",
      },
    ],
  };

  const pieData = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 40],
        backgroundColor: ["#6139E9", "#F23C9C"],
        borderColor: ["#6139E9", "#F23C9C"],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.barChartContainer}>
        <Bar options={options} data={data} />
      </div>
      <div className={styles.pieChartContainer}>
        <div className={styles.infoContainer}>
          <p>Customers</p>
          <p>Customers that buy product</p>
        </div>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

export default Charts;
