import React from 'react';
import { Book } from 'lucide-react';

// Metadata for navigation and detail
export const Pancasila2Metadata = {
  title: "Pendidikan Pancasila",
  subtitle: "Pembelajaran nilai-nilai Pancasila",
  className: "2 Sekolah Dasar",
  curriculum: "Kurikulum Merdeka",
  overlayTitle: "Materi Pendidikan Pancasila Kelas 2",
  overlayContent: [
    {
      title: "Aku Anak Indonesia",
      icon: Book,
      detailTitle: "Aku Anak Indonesia",
      detailDescription: "Mengenal identitas diri, keluarga, dan teman sebagai bagian dari keberagaman bangsa Indonesia serta memahami tempat tinggal sebagai bagian dari wilayah Negara Kesatuan Republik Indonesia (NKRI).",
      topics: [
        { title: "Mengenal identitas diri dan teman" },
        { title: "Keberagaman suku, budaya, dan bahasa" },
        { title: "Mengenal wilayah tempat tinggal sebagai bagian dari NKRI" },
        { title: "Menumbuhkan sikap saling menghargai dan rukun dalam perbedaan" }
      ]
    },
    {
      title: "Aku Patuh Aturan",
      icon: Book,
      detailTitle: "Aku Patuh Aturan",
      detailDescription: "Menumbuhkan kesadaran akan pentingnya aturan di rumah, sekolah, dan masyarakat serta memahami hak dan kewajiban dalam kehidupan sehari-hari.",
      topics: [
        { title: "Aturan di sekolah dan bentuk pelanggarannya" },
        { title: "Kesepakatan bersama di lingkungan sekolah" },
        { title: "Hak dan kewajiban di rumah" },
        { title: "Hak dan kewajiban di sekolah" }
      ]
    },
    {
      title: "Berbeda Itu Indah",
      icon: Book,
      detailTitle: "Berbeda Itu Indah",
      detailDescription: "Mengenal kekayaan suku bangsa, budaya, dan bahasa sebagai bentuk keberagaman bangsa serta mengembangkan sikap saling menghormati dan bangga menjadi bagian dari Indonesia.",
      topics: [
        { title: "Keanekaragaman suku bangsa dan budaya di Indonesia" },
        { title: "Bahasa sebagai alat pemersatu bangsa" },
        { title: "Toleransi terhadap perbedaan budaya, agama, dan kepercayaan" }
      ]
    },
    {
      title: "Ayo Mengenal Pancasila",
      icon: Book,
      detailTitle: "Ayo Mengenal Pancasila",
      detailDescription: "Memahami nilai-nilai dalam setiap sila Pancasila melalui simbol, lagu, dan teladan para perumus Pancasila serta menumbuhkan kebiasaan yang mencerminkan nilai-nilai tersebut.",
      topics: [
        { title: "Mengenal simbol-simbol negara dan makna lambang Garuda Pancasila" },
        { title: "Nilai-nilai dalam setiap sila Pancasila dan contohnya" },
        { title: "Teladan para perumus Pancasila" },
        { title: "Meneladani sikap Pelajar Pancasila dalam kehidupan sehari-hari" }
      ]
    }
  ]
};

const cardColors = [
  { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-800' },
  { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-800' },
  { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-800' },
  { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-800' }
];

interface ContentItem {
  text?: string;
  examples?: (string | { text: string; image?: string })[];
  image?: string;
}

interface Subtopic {
  title: string;
  content: (string | ContentItem)[];
}

interface Bab {
  title: string;
  color: string;
  cerita: {
    judul: string;
    isi: string;
  };
  pengertian: string;
  subtopics: Subtopic[];
}

interface Pancasila2Props {
  selectedTopicTitle: string;
}

export default function Pancasila2({ selectedTopicTitle }: Pancasila2Props) {
  const materiData = {
    bab: [
      {
        title: "Aku Anak Indonesia",
        color: "blue",
        cerita: {
          judul: "Hari Pertama Sekolah",
          isi: "Hari pertama sekolah, suasana kelas penuh suara ceria. Anak-anak duduk rapi dengan seragam putih merah. Seorang anak laki-laki berdiri di depan kelas dan memperkenalkan diri.\n\n\"Halo, teman-teman. Namaku Sakti. Aku dari Jakarta,\" katanya sambil tersenyum.\n\nLalu, seorang anak perempuan berdiri. \"Namaku Ika. Aku berasal dari Kalimantan. Senang bertemu kalian semua!\"\n\nAnak-anak lain ikut mengenalkan diri. Ada yang dari Sulawesi, ada yang dari Papua, dan ada juga yang dari Bali. Meskipun berbeda tempat asal, mereka semua kini belajar di sekolah yang sama. Mereka pun bermain bersama, berbagi cerita, dan belajar mengenal satu sama lain."
        },
        pengertian: "Setiap anak memiliki nama, asal daerah, serta kebiasaan masing-masing. Ada yang suka bernyanyi, ada yang senang menggambar. Ada anak laki-laki, ada anak perempuan. Semua anak punya keistimewaan.\n\nMengenal diri sendiri artinya kita tahu siapa diri kita:\n- Siapa nama kita\n- Dari mana asal kita\n- Apa yang kita sukai\n- Apa yang bisa kita lakukan sendiri\n\nMisalnya:\nNamaku Bina. Aku perempuan. Aku dari Sulawesi. Aku suka membaca buku dan membantu ibu di rumah.",
        subtopics: [
          {
            title: "Mengenal Diri Sendiri",
            content: [
              "Setiap anak memiliki nama, asal daerah, serta kebiasaan masing-masing. Ada yang suka bernyanyi, ada yang senang menggambar. Ada anak laki-laki, ada anak perempuan. Semua anak punya keistimewaan.",
              "Mengenal diri sendiri artinya kita tahu siapa diri kita:\n- Siapa nama kita\n- Dari mana asal kita\n- Apa yang kita sukai\n- Apa yang bisa kita lakukan sendiri",
              {
                text: "Contoh:",
                examples: [
                  "\"Namaku Bina. Aku perempuan. Aku dari Sulawesi. Aku suka membaca buku dan membantu ibu di rumah.\""
                ]
              }
            ]
          },
          {
            title: "Mengenal Teman",
            content: [
              "Saat sekolah, kita akan bertemu banyak teman. Mereka mungkin berbeda dari kita:\n- Ada yang kulitnya putih, ada yang sawo matang\n- Ada yang rambutnya lurus, ada yang keriting\n- Ada yang tinggi, ada yang pendek\n- Ada yang laki-laki, ada yang Perempuan",
              "Perbedaan itu bukan untuk dijauhi. Justru, kita harus saling mengenal dan menghargai. Setiap anak berhak punya teman dan merasa diterima.",
              {
                text: "Ketika ada teman baru, sambutlah dengan ramah:",
                examples: [
                  "\"Halo, namamu siapa?\"",
                  "\"Ayo, kita main bersama.\""
                ]
              }
            ]
          },
          {
            title: "Aturan Saat Bermain Bersama",
            content: [
              "Agar bermain tetap seru dan tidak membuat teman lain sedih, kita perlu mematuhi aturan permainan. Setiap permainan memiliki aturan masing-masing yang harus disepakati dan ditaati.",
              {
                text: "Contoh aturan dalam permainan:",
                examples: [
                  "Tidak curang",
                  "Tidak mendorong teman",
                  "Tidak berebut giliran",
                  "Tidak mengejek saat menang atau kalah"
                ]
              },
              "Permainan seperti lompat tali, engklek, petak umpet, atau gobak sodor jadi lebih menyenangkan kalau semua anak bermain dengan jujur dan tertib.\n\nJika ada teman yang melanggar aturan, bukan berarti tidak bisa berteman. Kita bisa menasihatinya dengan baik dan mengajak bermain lagi dengan cara yang benar."
            ]
          }
        ]
      },
      {
        title: "Aku Patuh Aturan",
        color: "green",
        cerita: {
          judul: "Pagi di Rumah Bina",
          isi: "Setiap pagi, Bina bangun sebelum matahari terbit. Ia membereskan tempat tidur, menyikat gigi, dan membantu Ibu menyapu lantai. Hari itu, ia lupa merapikan mainan yang ia keluarkan semalam.\n\nSaat Ibu melihat mainan berserakan, Ibu berkata lembut, \"Bina, kamu masih ingat aturan kita di rumah, kan?\"\n\nBina mengangguk. \"Ya, Bu. Aku harus merapikan mainan setelah bermain.\"\n\nBina pun segera merapikan semua mainannya. Ia tahu, aturan di rumah bukan untuk membuatnya repot, tapi agar rumah tetap rapi dan semua merasa nyaman."
        },
        pengertian: "Di rumah, sekolah, maupun lingkungan sekitar, kita tidak bisa hidup sendiri. Kita hidup bersama orang tua, guru, dan teman-teman. Agar semua bisa merasa aman, tertib, dan nyaman, kita perlu aturan.\n\nAturan dibuat untuk kebaikan bersama.\nTanpa aturan, kita bisa saling mengganggu, berebut, atau membuat kekacauan.\nMisalnya:\n- Jika semua anak bicara keras-keras di kelas, pelajaran jadi tidak terdengar.\n- Jika tidak antre saat jajan, semua jadi berebut dan bisa bertengkar.\n\nDengan aturan, semua tahu apa yang boleh dan tidak boleh dilakukan.",
        subtopics: [
          {
            title: "Aturan di Rumah",
            content: [
              "Setiap keluarga punya aturan yang berbeda. Tapi semua bertujuan agar rumah menjadi tempat yang nyaman.",
              {
                text: "Contoh aturan di rumah:",
                examples: [
                  "Bangun pagi tepat waktu",
                  "Merapikan tempat tidur sendiri",
                  "Mencuci tangan sebelum dan sesudah makan",
                  "Tidak bermain saat waktu belajar",
                  "Meminta izin sebelum pergi ke luar",
                  "Merapikan mainan setelah digunakan",
                  "Membantu orang tua jika dibutuhkan"
                ]
              },
              "Dengan aturan, anak-anak belajar bertanggung jawab dan mandiri."
            ]
          },
          {
            title: "Aturan di Sekolah",
            content: [
              "Sekolah adalah tempat kita belajar, bermain, dan bertemu banyak teman. Agar semua bisa belajar dengan baik, ada aturan yang perlu diikuti bersama.",
              {
                text: "Contoh aturan di sekolah:",
                examples: [
                  "Datang tepat waktu",
                  "Memakai seragam lengkap",
                  "Mengucapkan salam kepada guru dan teman",
                  "Berdoa sebelum dan sesudah pelajaran",
                  "Tidak mencoret meja atau dinding",
                  "Menjaga kebersihan kelas",
                  "Meminta izin jika ingin keluar kelas",
                  "Melaksanakan piket kelas sesuai jadwal"
                ]
              },
              "Anak yang mematuhi aturan sekolah akan lebih mudah disukai teman dan dihargai guru."
            ]
          },
          {
            title: "Manfaat Mematuhi Aturan",
            content: [
              "Dengan mematuhi aturan:",
              {
                examples: [
                  "Hidup menjadi lebih tertib dan aman",
                  "Kita belajar disiplin dan tanggung jawab",
                  "Orang lain merasa nyaman bersama kita",
                  "Kita terhindar dari bahaya atau kerugian"
                ]
              },
              "Contohnya, jika kita mencuci tangan sebelum makan, tubuh kita akan lebih sehat. Jika kita berdoa sebelum belajar, hati kita lebih tenang dan siap menerima pelajaran."
            ]
          },
          {
            title: "Apa yang Terjadi Jika Tidak Mematuhi Aturan?",
            content: [
              "Jika kita tidak mematuhi aturan, akibatnya bisa merugikan diri sendiri dan orang lain.",
              {
                text: "Misalnya:",
                examples: [
                  "Tidak mencuci tangan sebelum makan bisa membuat sakit perut",
                  "Tidak merapikan kamar bisa membuat kita tersandung mainan",
                  "Tidak minta izin keluar bisa membuat orang tua khawatir",
                  "Tidak tertib saat bermain bisa menyebabkan teman terlaku"
                ]
              },
              "Oleh karena itu, penting sekali untuk selalu mengingat dan menjalankan aturan yang berlaku."
            ]
          }
        ]
      },
      {
        title: "Berbeda Itu Indah",
        color: "yellow",
        cerita: {
          judul: "Warna-Warni di Kelas Raka",
          isi: "Kelas Raka selalu terasa hidup. Teman-temannya berasal dari berbagai daerah. Ada yang berasal dari Bugis, ada yang dari Sunda, dan ada juga yang baru pindah dari Kalimantan. Kadang saat bercerita, mereka menggunakan logat yang berbeda. Saat istirahat, mereka membuka bekal yang berbeda pula, ada nasi kuning, lontong sayur, dan ikan bakar dengan sambal khas daerah masing-masing.\n\nAwalnya, Raka merasa heran melihat banyak perbedaan itu. Tapi lama-kelamaan ia menyadari, justru karena semua orang tidak sama, ia bisa belajar banyak hal. Ia bisa mencicipi makanan baru, mendengar cerita adat dari tempat lain, dan mengenal kebiasaan yang belum pernah ia lihat. \"Ternyata, perbedaan itu membuat hidup jadi lebih seru,\" pikir Raka."
        },
        pengertian: "Indonesia adalah negara yang besar, tidak hanya karena wilayahnya, tapi juga karena keragaman penduduknya. Setiap daerah punya suku, bahasa, adat, dan kebiasaan yang berbeda-beda. Di satu tempat kita bisa melihat rumah-rumah beratap rumbia, di tempat lain berdiri rumah panggung dari kayu. Di satu daerah orang menyapa dengan \"halo\", di daerah lain dengan \"apa kabar\" atau \"pi kabar\".\n\nSemua perbedaan ini adalah bagian dari jati diri bangsa Indonesia. Kita hidup dalam keberagaman sejak lahir. Contohnya di rumah, di sekolah, bahkan saat berbelanja di pasar. Perbedaan itu bukan sesuatu yang aneh, melainkan sesuatu yang membuat Indonesia menjadi kaya budaya dan istimewa.",
        subtopics: [
          {
            title: "Hidup dalam Keberagaman",
            content: [
              "Indonesia adalah negara yang besar, tidak hanya karena wilayahnya, tapi juga karena keragaman penduduknya. Setiap daerah punya suku, bahasa, adat, dan kebiasaan yang berbeda-beda.",
              "Semua perbedaan ini adalah bagian dari jati diri bangsa Indonesia. Kita hidup dalam keberagaman sejak lahir. Contohnya di rumah, di sekolah, bahkan saat berbelanja di pasar."
            ]
          },
          {
            title: "Bahasa Indonesia Menyatukan Kita",
            content: [
              "Di tengah semua perbedaan bahasa daerah, kita punya satu alat penting yang bisa menyatukan kita: bahasa Indonesia.",
              "Dengan bahasa ini, kita bisa belajar bersama, bermain bersama, dan menyampaikan ide kita kepada siapa pun.",
              "Misalnya, saat ada teman dari daerah lain pindah ke sekolah kita, kita tetap bisa berbicara dan berteman dengannya karena kita punya bahasa yang sama. Kita bisa belajar dari guru, membaca buku pelajaran, dan menulis cerita dengan bahasa Indonesia. Karena itulah bahasa Indonesia disebut bahasa pemersatu bangsa.",
              "Meskipun kita tetap boleh menggunakan bahasa daerah di rumah atau dalam acara khusus, bahasa Indonesia tetap penting agar kita tetap bisa saling memahami satu sama lain."
            ]
          },
          {
            title: "Saling Menghargai di Tengah Perbedaan",
            content: [
              "Hidup bersama orang yang berbeda mengajarkan kita untuk saling menghargai. Kita tidak boleh memaksakan kebiasaan kita kepada orang lain. Apa yang biasa kita lakukan belum tentu biasa bagi orang lain, dan sebaliknya.",
              {
                text: "Contohnya:",
                examples: [
                  "Kita tidak menertawakan cara bicara teman yang logatnya berbeda.",
                  "Kita tidak merasa makanan khas kita lebih enak dari makanan teman.",
                  "Kita tidak memaksa teman untuk bermain seperti yang kita inginkan saja.",
                  "Kita belajar mendengarkan saat teman bercerita tentang adat atau kepercayaannya."
                ]
              },
              "Sikap saling menghargai ini penting agar tidak muncul perasaan tersinggung atau dijauhkan. Justru dengan menghargai, kita membuat teman merasa diterima dan dihormati."
            ]
          },
          {
            title: "Menumbuhkan Rasa Bangga sebagai Anak Indonesia",
            content: [
              "Semua kekayaan budaya yang kita miliki adalah harta yang perlu dijaga. Sebagai anak Indonesia, kita perlu merasa bangga atas keberagaman yang kita miliki. Bangga bukan hanya dalam kata-kata, tetapi juga dalam sikap.",
              {
                text: "Kita bisa menunjukkan rasa bangga itu dengan:",
                examples: [
                  "Mengenal lagu daerah dari berbagai tempat",
                  "Mau mencoba tarian tradisional saat ada pentas seni",
                  "Menghargai teman yang berpakaian adat saat perayaan sekolah",
                  "Tidak malu berbicara tentang asal-usul keluarga kita",
                  "Mempelajari cerita rakyat dari daerah lain dengan senang hati"
                ]
              },
              "Dengan begitu, kita ikut menjaga kekayaan bangsa dan membantu agar budaya-budaya itu tidak hilang ditelan waktu."
            ]
          }
        ]
      },
      {
        title: "Ayo Mengenal Pancasila",
        color: "red",
        cerita: {
          judul: "Gambar di Dadaku",
          isi: "Setiap hari Senin, saat upacara bendera, Keyla berdiri tegak bersama teman-temannya. Ia memakai seragam lengkap dengan dasi merah dan topi putih. Ketika memperhatikan bajunya, matanya tertuju pada gambar kecil berbentuk burung garuda yang menempel di dadanya. \"Apa arti burung ini, ya?\" pikir Keyla. Ia pun bertanya kepada Bu Guru.\n\n\"Itu bukan sekadar gambar,\" kata Bu Guru. \"Itu lambang negara kita, Garuda Pancasila. Di dalamnya, ada lima nilai penting yang menjadi dasar bangsa Indonesia.\" Keyla pun tertarik. Ia ingin tahu lebih banyak tentang Pancasila dan mengapa semua orang Indonesia harus mengenalnya."
        },
        pengertian: "Indonesia adalah negara besar dengan banyak pulau, suku bangsa, bahasa, dan budaya. Walaupun berbeda-beda, kita tetap hidup dalam satu negara yang sama. Supaya semua orang bisa hidup rukun, adil, dan saling menghargai, kita perlu memiliki dasar hidup bersama. Dasar itulah yang disebut Pancasila.\n\nKata Pancasila berasal dari bahasa Sanskerta. Panca berarti lima, dan sila berarti dasar atau pedoman. Jadi, Pancasila adalah lima dasar penting yang dijadikan pedoman dalam kehidupan berbangsa dan bernegara.",
        subtopics: [
          {
            title: "Pancasila: Dasar Hidup Bersama",
            content: [
              "Indonesia adalah negara besar dengan banyak pulau, suku bangsa, bahasa, dan budaya. Walaupun berbeda-beda, kita tetap hidup dalam satu negara yang sama. Supaya semua orang bisa hidup rukun, adil, dan saling menghargai, kita perlu memiliki dasar hidup bersama. Dasar itulah yang disebut Pancasila.",
              "Kata Pancasila berasal dari bahasa Sanskerta. Panca berarti lima, dan sila berarti dasar atau pedoman. Jadi, Pancasila adalah lima dasar penting yang dijadikan pedoman dalam kehidupan berbangsa dan bernegara."
            ]
          },
          {
            title: "Lambang Garuda Pancasila",
            content: [
              "Pancasila digambarkan dalam lambang negara yang disebut Garuda Pancasila. Garuda adalah burung besar yang kuat dan tangguh. Di bagian dada Garuda terdapat perisai dengan lima gambar yang mewakili lima sila Pancasila, dasar negara Indonesia.",
              {
                text: "Kelima gambar itu adalah:",
                examples: [
                  { text: "Bintang: Ketuhanan Yang Maha Esa", image: "images/bintang-pancasila.png" },
                  { text: "Rantai: Kemanusiaan yang Adil dan Beradab", image: "images/rantai-pancasila.png" },
                  { text: "Pohon Beringin: Persatuan Indonesia", image: "images/beringin-pancasila.jpeg" },
                  { text: "Kepala Banteng: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan", image: "images/kepala-banteng.png"}, 
                  { text: "Padi dan Kapas: Keadilan Sosial bagi Seluruh Rakyat Indonesia", image: "images/padi-kapas.jpeg" }
                ]
              },
              "Burung Garuda mencengkeram pita bertuliskan Bhinneka Tunggal Ika yang artinya: Berbeda-beda tetapi tetap satu.\n\nMaknanya, meskipun kita berasal dari suku, agama, atau budaya yang berbeda, kita tetap satu bangsa: Indonesia."
            ]
          },
          {
            title: "Mengamalkan Nilai Pancasila",
            content: [
              "Pancasila bukan sekadar untuk dihafalkan. Nilai-nilainya dapat kita terapkan dalam kegiatan sehari-hari, baik di rumah, di sekolah, maupun di lingkungan masyarakat.",
              {
                text: "Contoh sikap yang mencerminkan Pancasila:",
                examples: [
                  "Berdoa sebelum belajar, menghormati teman yang berbeda agama (Sila ke-1: Ketuhanan Yang Maha Esa)",
                  "Bersikap sopan, tidak mengejek, dan suka membantu (Sila ke-2: Kemanusiaan yang adil dan beradab)",
                  "Mengikuti upacara bendera dengan tertib, tidak membeda-bedakan teman (Sila ke-3: Persatuan Indonesia)",
                  "Berdiskusi saat kerja kelompok, mendengarkan pendapat teman (Sila ke-4: Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan)",
                  "Bersikap adil dalam bermain, mau berbagi dengan teman (Sila ke-5: Keadilan sosial bagi seluruh rakyat Indonesia)"
                ]
              }
            ]
          },
          {
            title: "Tokoh Perumus Pancasila",
            content: [
              "Pancasila tidak muncul begitu saja. Sebelum Indonesia merdeka, para tokoh bangsa berkumpul dalam sidang BPUPKI tahun 1945. Mereka berdiskusi dan menyampaikan usulan tentang dasar negara Indonesia. Tiga tokoh penting yang mengusulkan rumusan dasar negara adalah:",
              {
                text: "",
                examples: [
                  "Mohammad Yamin (29 Mei 1945)\nBeliau menyampaikan lima asas dasar negara secara lisan dan tertulis. Rumusannya mencakup:\n- Peri kebangsaan\n- Peri kemanusiaan\n- Peri ketuhanan\n- Peri kerakyatan\n- Kesejahteraan rakyat",
                  "Dr. Soepomo (31 Mei 1945)\nIa menekankan pentingnya persatuan dan semangat kekeluargaan. Rumusannya mencakup:\n- Persatuan\n- Kekeluargaan\n- Keseimbangan lahir dan batin\n- Musyawarah\n- Keadilan rakyat",
                  "Ir. Soekarno (1 Juni 1945)\nDalam pidatonya, beliau pertama kali menyebut istilah \"Pancasila\". Usulannya meliputi:\n- Kebangsaan Indonesia\n- Internasionalisme atau perikemanusiaan\n- Mufakat atau demokrasi\n- Kesejahteraan sosial\n- Ketuhanan yang berkebudayaan"
                ]
              },
              "Setelah itu, dibentuk Panitia Sembilan yang menyusun naskah Piagam Jakarta, yang menjadi dasar perumusan Pancasila dalam pembukaan Undang-Undang Dasar 1945. Pancasila kemudian ditetapkan secara resmi pada 18 Agustus 1945."
            ]
          },
          {
            title: "Menjadi Pelajar Pancasila",
            content: [
              "Sebagai anak Indonesia, kita juga bisa menunjukkan sikap sebagai pelajar Pancasila. Pelajar Pancasila adalah anak yang menjunjung tinggi nilai-nilai Pancasila dan menerapkannya dalam kehidupan sehari-hari.",
              {
                text: "Contoh sikap pelajar Pancasila:",
                examples: [
                  "Jujur dan bertanggung jawab terhadap tugas sekolah",
                  "Menjaga kebersihan kelas tanpa disuruh",
                  "Tidak memihak saat terjadi pertengkaran kecil",
                  "Sopan dalam berbicara dan bersikap",
                  "Berteman dengan siapa saja tanpa pilih-pilih",
                  "Mau berdiskusi dan mendengarkan teman lain"
                ]
              },
              "Sikap seperti itu tidak perlu menunggu dewasa. Kita bisa melatihnya sejak sekarang, dari hal-hal kecil yang kita lakukan setiap hari."
            ]
          }
        ]
      }
    ],
    implementasi: [
      "Berdoa sebelum belajar (Sila 1: Ketuhanan Yang Maha Esa)",
      "Bersikap adil dan tidak menyakiti teman (Sila 2: Kemanusiaan yang Adil dan Beradab)",
      "Bermain dengan semua teman tanpa membeda-bedakan (Sila 3: Persatuan Indonesia)",
      "Musyawarah saat memilih permainan (Sila 4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan)",
      "Berbagi makanan dengan teman (Sila 5: Keadilan Sosial bagi Seluruh Rakyat Indonesia)"
    ]
  };

  const selectedBab = materiData.bab.find(bab => bab.title === selectedTopicTitle);

  if (!selectedBab) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Materi Tidak Ditemukan</h2>
          <p className="text-gray-700">Tidak dapat menemukan materi untuk topik: {selectedTopicTitle}</p>
        </div>
      </div>
    );
  }

  const mainColor = cardColors.find(color => color.border.includes(selectedBab.color)) || cardColors[0];

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <article className="bg-white rounded-lg shadow-sm p-6">
        {selectedBab.cerita && (
          <div className="mb-8 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Cerita: {selectedBab.cerita.judul}
            </h3>
            <div className="bg-white p-4 rounded">
              <p className="text-gray-700 italic whitespace-pre-line">
                {selectedBab.cerita.isi}
              </p>
            </div>
          </div>
        )}

        <div className={`${mainColor.bg} border-l-4 ${mainColor.border} p-6 mb-8 rounded-lg`}>
          <h3 className={`text-xl font-semibold mb-3 ${mainColor.text}`}>
            Pengertian {selectedBab.title}
          </h3>
          <p className="text-gray-800 whitespace-pre-line">{selectedBab.pengertian}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
            Materi Pembelajaran:
          </h3>
          <div className="space-y-6">
            {selectedBab.subtopics.map((subtopic, index) => {
              const color = cardColors[index % cardColors.length];
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-l-4 ${color.border} ${color.bg} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <h4 className={`font-semibold text-lg mb-3 ${color.text}`}>
                    {subtopic.title}
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    {subtopic.content.map((item, i) => {
                      if (typeof item === 'string') {
                        return <p key={i} className="whitespace-pre-line">{item}</p>;
                      } else if ('image' in item && item.image) {
                        return (
                          <div key={i} className="my-4">
                            <img 
                              src={typeof item.image === 'string' ? item.image : ''}
                              alt={subtopic.title}
                              className="mx-auto rounded-lg shadow-md max-w-full h-auto"
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div key={i}>
                            {'text' in item && <p className="font-medium">{item.text}</p>}
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                              {item.examples?.map((example, j) => {
                                if (typeof example === 'string') {
                                  return <li key={j} className="whitespace-pre-line">{example}</li>;
                                } else {
                                  return (
                                    <li key={j} className="flex items-start gap-2">
                                      {example.image && (
                                        <img 
                                          src={example.image} 
                                          alt={example.text.split('--')[0].trim()} 
                                          className="w-40 h-35 object-cover rounded"
                                        />
                                      )}
                                      <span className="whitespace-pre-line">{example.text}</span>
                                    </li>
                                  );
                                }
                              })}
                            </ul>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Special implementation section for Pancasila values */}
        {selectedBab.title === "Ayo Mengenal Pancasila" && (
          <div className="mt-8">
            <div className="bg-gradient-to-r from-red-100 to-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Implementasi Nilai Pancasila:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {materiData.implementasi.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}