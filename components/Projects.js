"use client";
import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const projects = [
    {
      title: "Hava Durumu Uygulaması",
      desc: "Expo + React Native ile geliştirilmiş hava durumu uygulaması (OpenWeatherMap API)",
      img: "/images/project1.png",
      link: "https://github.com/haticepolatt/react-native-weather",
    },
    {
      title: "Beni Seviyor Musun?",
      desc: "HTML, CSS ve JavaScript kullanılarak hazırlanmış etkileşimli eğlencelik mini proje.",
      img: "/images/project2.png",
      link: "https://github.com/haticepolatt/offer-do-you-love-me",

    },
    {
      title: "Ürün Tanıtımı",
      desc: "Adobe Photoshop kullanılarak hazırlanmış bir ürün tanıtım tasarımıdır.",
      img: "/images/projectt3.jpg",
      link: "https://github.com/haticepolatt/product-promotion",
      
    },
    {
      title: "Belirsizlik Altında Karar Verme",
      desc: "C# kullanılarak yazılmış belirsizlik altında karar verme programı.",
      img: "/images/projectt4.png",
      link: "https://github.com/haticepolatt/decision-making-under-uncertainty",
      
    },
    {
      title: "Web Sitesi Hazırlama",
      desc: "Adobe Photoshop ile dizayn edilmiş bir web sitesi örneği.",
      img: "/images/project5.jpg",
      link: "https://github.com/haticepolatt/preparing-website-interface",
      
    },
    {
      title: "Car Evaluation Dataset ile Makine Öğrenmesi",
      desc: " Car Evaluation veri seti kullanılarak geliştirilmiş bir Karar ağacı (Decision Tree) modelini içermektedir.",
      img: "/images/proje6.png",
      link: "https://github.com/haticepolatt/car-evaluation-decision-tree",
      
    },
    
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Bazı Projelerim</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ 
          clickable: true, 
          el: ".custom-pagination"}}
        loop={true}
        breakpoints={{
          680: { slidesPerView: 1.4 },
          900: { slidesPerView: 2 },
        }}
        className={styles.swiper}
      >
        {projects.map((p, i) => (
          <SwiperSlide key={i}>
            <div className={styles.projectCard}>
              <div className={styles.media}>
                <img src={p.img} alt={p.title} />
              </div>

              <div className={styles.cardContent}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.moreBtn}
                >
                  Daha Fazla Gör
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination"></div>
    </section>
  );
}
