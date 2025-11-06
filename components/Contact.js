import Image from "next/image";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Benimle Çalısın</h2>
          <p>
            Benimle iletişime geçmek veya iş birliği yapmak isterseniz aşağıdaki
            kanallardan bana ulaşabilirsiniz.
          </p>

          <ul className={styles.infoList}>
            <li className={styles.item}>
  <Image
    src="/icons/location.png"
    alt="LinkedIn"
    width={22}
    height={22}
    className={styles.iconImg}
    priority
  />
              Bursa, Türkiye
            </li>
            <li className={styles.item}>
  <Image
    src="/icons/mailing.png"
    alt="LinkedIn"
    width={22}
    height={22}
    className={styles.iconImg}
    priority
  />
              <a href="mailto:haticepolat1603@gmail.com">
                haticepolat1603@gmail.com
              </a>
            </li>
            <li className={styles.item}>
  <Image
    src="/icons/linkedin.png"
    alt="LinkedIn"
    width={22}
    height={22}
    className={styles.iconImg}
    priority
  />
              <a
                href="https://www.linkedin.com/in/hatice-polat-461997355/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profilim
              </a>
            </li>
            <li className={styles.item}>
  <Image
    src="/icons/github.png"
    alt="LinkedIn"
    width={22}
    height={22}
    className={styles.iconImg}
    priority
  />
              <a
                href="https://github.com/haticepolatt"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Hesabım
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <a
            href="mailto:haticepolat1603@gmail.com"
            className={styles.emailBtn}
          >
            E-POSTA GÖNDERİN
          </a>
        </div>
      </div>
    </section>
  );
}