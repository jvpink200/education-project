import Image from "next/image";
import styles from "./page.module.scss";
import Footer from "./components/footer";
import hpLearning from "../app/images/headphones-learning.jpg";
import Card from "./components/cards";
import data from "./data/data.json";
export default function Home() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.intro}>
        <div className={styles.intro__modern}>
          <p>Modern & Fun</p>
        </div>
        <h1>Online Learning Education</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className={styles.darkBtn}>Read More</button>
        <div className={styles.hpImg}>
          <Image
            src={hpLearning}
            alt="Heaphones Audio Learning"
            priority="true"
          />
        </div>
      </section>
      <section className={styles.cards}>
        {data.map((card) => {
          return (
            <Card
              title={card.title}
              content={card.content}
              color={card.color}
            />
          );
        })}
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </main>
  );
}
