import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger & kapatma ikonları

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // menüde linke tıklanınca menüyü kapat
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <h1 className={styles.brand}>
        <img src="/favicon.ico" alt="Logo" className={styles.logoIcon}/> Hatice POLAT</h1>

      {/* Hamburger butonu (sadece mobilde görünür) */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menü linkleri */}
      <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        <Link className={styles.link} href="#home" onClick={handleLinkClick}>
          Ana Sayfa
        </Link>
        <Link className={styles.link} href="#about" onClick={handleLinkClick}>
          Hakkımda
        </Link>
        <Link className={styles.link} href="#projects" onClick={handleLinkClick}>
          Projeler
        </Link>
        <Link className={styles.link} href="#contact" onClick={handleLinkClick}>
          İletişim
        </Link>

        {/* CV İndir bağlantısı eklendi */}
        <a
          href="/Hatice-Polat_CV.pdf"
          download
          className={`${styles.link} ${styles.cvLink}`}
          onClick={handleLinkClick}
        >
          CV İndir
        </a>
      </div>
    </nav>
  );
}
