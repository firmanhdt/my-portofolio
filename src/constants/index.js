import certif1 from "../assets/projects/certif-js-dicoding.webp";
import certif2 from "../assets/projects/belajar-aws-dicoding.png";
import certif3 from "../assets/projects/sertifikat-digitalent.png";
import certif4 from "../assets/projects/magang-gavin.png";
import certif5 from "../assets/projects/magang-radar.png";

export const HERO_CONTENT = `Seorang mahasiswa jurusan Teknik Informatika di Institut Teknologi Indonesia 2021, awalnya memiliki
ketertarikan pada industri kreatif, kemudian tenggelam dalam dunia pengembangan website.Saya
memiliki pengalaman dan merasa cocok untuk terlibat dalam seluruh siklus pengembangan sistem,
dimulai dengan identifikasi masalah, menguraikan persyaratan rinci, menyusun solusi terbaik, tercepat,
dan paling hemat biaya, mengoordinasikan upaya pengembangan, dan pada akhirnya memberikan
produk akhir kepada pelanggan.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "April 2024 - Oktober 2024",
    role: "Full Stack Developer",
    company: "PT. Garuda Visi Nusantara",
    description: `Mengembangkan fitur edit di Jakarta Digital Twin menggunakan Vue.js dan Node.js untuk memperbarui file JSON, mengelola backend aplikasi berbasis Laravel dengan Filament untuk Website KSP, serta membangun sistem multiuser dengan berbagai role di Skynesia menggunakan Laravel, dan membuat frontend untuk landing page, dashboard, profile, serta peta area of services menggunakan Bootstrap dan Leaflet.`,
    technologies: ["Bootstrap","Mysql", "Node.js", "Laravel", "Filament"],
  },
  {
    year: "November 2023 - Maret 2024",
    role: "Full Stack Developer",
    company: "PT. Radar Teknologi Komputer",
    description: `Membuat website absensi karyawan menggunakan Laravel dan MySQL, serta mengembangkan website invoice dengan Laravel, MySQL, dan Vue.js untuk sistem pembuatan dan pengelolaan invoice yang efisien.`,
    technologies: ["Tailwind", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "Januari 2020 - Maret 2020",
    role: "IT Support",
    company: "Saint Jhon Catholic School",
    description: `Memasang dan melakukan perbaikan jaringan serta sistem CCTV untuk memastikan konektivitas dan keamanan berjalan optimal.`,
    technologies: ["Router", "Analog Camera", "UTP/STP cables"],
  },
];

export const CERTIFICATE = [
  {
    title: "Dicoding Indonesia",
    image: certif1,
    description:
      "Belajar Dasar Pemrograman JavaScript ",
    year: "11 Maret 2024 - 11 Maret 2027",
  },
  {
    title: "Dicoding Indonesia",
    image: certif2,
    description:
      "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud) ",
    year: ["11 Maret 2024 - 11 Maret 2027"],
  },
  {
    title: "Digitalent Kominfo",
    image: certif3,
    description:
      "Junior Web Developer Vocational School Graduate Academy Digital Talent Scholarship 2024 ",
  },
  {
    title: "PT. Garuda Visi Nusantara",
    image: certif4,
    description:
      "Magang - Posisi Full Stack Developer",
    year: ["November 2024"],
  },

  {
    title: "PT. Radar Teknologi Komputer",
    image: certif5,
    description:
      "Magang - Posisi Full Stack Developer",
    year: ["Maret 2024"],
  },
];

export const CONTACT = {
  address: "Kab. Tangerang, Banten ",
  phoneNo: "+62 851 6133 4257 ",
  email: "firmanhidayat7007@gmail.com",
};
