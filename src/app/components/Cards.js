"use client";

import styles from "../page.module.scss";

export default function Card({ title, content, color }) {
  function handleClick() {
    console.log("I was clicked!");
  }
  return (
    <div className={`${styles.card} ${color}`}>
      <h2>
        {title}
        <div className="separator-sm"></div>
      </h2>
      <div className={styles.innerContent}>
        <p onClick={handleClick}>{content}</p>
      </div>
    </div>
  );
}
