import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        {/* --- Favicon --- */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* --- Karakter seti --- */}
        <meta charSet="UTF-8" />

        {/* --- Temel SEO --- */}
        <meta name="title" content="Hatice POLAT — Portfolyo" />
        <meta
          name="description"
          content="Yazılım ve görsel tasarım odaklı portfolyo sitesi"
        />
        <meta
          name="keywords"
          content="Hatice Polat, Frontend Developer, Web Designer, React, Next.js, Node.js, UI Design, Photoshop, Mobil Uygulama Geliştirme, Makine Öğrenmesi, Veri Analizi, Yönetim Bilişim Sistemleri, Portfolyo, Antalya, Bursa"
        />
        <meta name="author" content="Hatice Polat" />

        {/* --- Open Graph (Facebook / LinkedIn / WhatsApp) --- */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-website-nbwgmxsoq-hatices-projects-151d4cda.vercel.app"
        />
        <meta
          property="og:title"
          content="Hatice POLAT — Frontend Developer & Web Designer"
        />
        <meta
          property="og:description"
          content="Frontend geliştirme, UI design ve modern web teknolojileriyle hazırlanmış kişisel portföy sitesi."
        />
        <meta
          property="og:image"
          content="https://portfolio-website-nbwgmxsoq-hatices-projects-151d4cda.vercel.app/images/preview.jpg"
        />
        <meta property="og:locale" content="tr_TR" />

        {/* --- Twitter Card --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://portfolio-website-nbwgmxsoq-hatices-projects-151d4cda.vercel.app"
        />
        <meta
          name="twitter:title"
          content="Hatice POLAT — Frontend Developer & UI Designer"
        />
        <meta
          name="twitter:description"
          content="Frontend geliştirme, UI design ve modern web teknolojileriyle hazırlanmış kişisel portföy sitesi."
        />
        <meta
          name="twitter:image"
          content="https://portfolio-website-nbwgmxsoq-hatices-projects-151d4cda.vercel.app/images/preview.jpg"
        />

        {/* --- Renk ayarı (isteğe bağlı) --- */}
        <meta name="theme-color" content="#EBD9D8" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
