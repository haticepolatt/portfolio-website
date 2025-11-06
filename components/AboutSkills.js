import styles from "./AboutSkills.module.css";

export default function AboutSkills() {
  const skills = [
    {
      icon: "💻",
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Next.js"],
    },
    {
      icon: "🎨",
      title: "UI Design",
      items: ["Adobe Photoshop","Figma (Başlangıç)"],
    },
    {
      icon: "🗄️",
      title: "Veri & Backend",
      items: ["C#", "SQL Server (Temel)", "Python (Temel)", "Makine Öğrenmesi"],
    },
  ];

  return (
    <section id="about" className={styles.aboutSkillsSection}>
      <div className={styles.container}>
        {/* Sol taraf: Fotoğraf + Hakkımda */}
        <div className={styles.leftSide}>
          <img
            src="/images/pp2.jpg"
            alt="Hatice"
            className={styles.profilePhoto}
          />
          <div className={styles.aboutText}>
            <h2>Hakkımda</h2>
            <p>
              Merhaba, ben Hatice. Akdeniz Üniversitesi Yönetim Bilişim Sistemleri 4. sınıf
              öğrencisiyim. Frontend geliştirme ve görsel tasarım alanlarında
              çalışıyorum. Aynı zamanda mobil uygulama geliştirme ve veri analizi
              konularında da kendimi geliştiriyorum. Daha fazlası için menüden CV'mi indirebilirsiniz!
            </p>
          </div>
        </div>

        {/* Sağ taraf: Yeteneklerim */}
        <div className={styles.rightSide}>
          <h2>Yeteneklerim</h2>
          <div className={styles.skillGrid}>
            {skills.map((skill, i) => (
              <div key={i} className={styles.skillBox}>
                <span className={styles.icon}>{skill.icon}</span>
                <h4>{skill.title}</h4>
                <ul>
                  {skill.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
