import React from "react";
import styles from "./Table.module.scss";
import TableImage from "../../Assets/TableImage.jpg";

function Table() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <p className={styles.heading}>Products</p>
        <input className={styles.input} type="text" placeholder="Search" />
      </div>
      <table className={styles.tableContainer}>
        <thead>
          <tr className={styles.header}>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {Array(5)
            .fill(true)
            .map((item: any, i: number) => {
              return (
                <tr className={styles.body}>
                  <td>
                    <div className={styles.col1}>
                      <div className={styles.imageContainer}>
                        <img
                          className={styles.image}
                          src={TableImage}
                          alt="table"
                        />
                      </div>
                      <div className={styles.infoContainer}>
                        <p>Abstract 3D</p>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                      </div>
                    </div>
                  </td>
                  <td>32 in stock</td>
                  <td>$ 42.99</td>
                  <td>20</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
