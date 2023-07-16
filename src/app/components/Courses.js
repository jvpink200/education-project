import styles from "../page.module.scss";
export default function Courses() {
  let ages = [
    { title: "Free Online Math Classes", group: "3-5" },
    {
      title: "English Language",
      group: "4-6",
    },
    { title: "iRobot Education", group: "7-9" },
    { title: "Motion Animation", group: "5-9" },
    { title: "Crafts for Kids", group: "3-5" },
    { title: "Drawing with Us", group: "7-9" },
  ];
  return (
    <section className={styles.learning}>
      <div className={styles.learning__courses}>
        {ages.map((ageGroup, index) => {
          return (
            <div className={styles.learning__card} key={index}>
              <h2>{ageGroup.title}</h2>
              <p>{ageGroup.group} years</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
