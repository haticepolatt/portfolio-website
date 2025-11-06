import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1>Merhaba, Ben Hatice</h1>
        <p>Yazılım ve görsel tasarım odaklı portfolyo sitesi</p>
        <br></br>
        <a href="#projects" className={styles.cta}>Projelerime Bak</a>
      </div>
    </section>
  );
}
