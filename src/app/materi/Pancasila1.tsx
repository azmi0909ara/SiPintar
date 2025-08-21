import React from 'react';
import { Book } from 'lucide-react';

// Metadata for navigation and detail
export const Pancasila1Metadata = {
  title: "Pendidikan Pancasila",
  subtitle: "Pembelajaran nilai-nilai Pancasila",
  className: "1 Sekolah Dasar",
  curriculum: "Kurikulum Merdeka",
  overlayTitle: "Materi Pendidikan Pancasila Kelas 1",
  overlayContent: [
    {
      title: "Mengenal Diri dan Teman",
      icon: Book,
      detailTitle: "Mengenal Diri dan Teman",
      detailDescription: "Belajar mengenal diri sendiri dan teman-teman di sekitarnya, menghargai perbedaan, dan memahami pentingnya aturan saat bermain bersama.",
      topics: [
        { title: "Perkenalan diri dan teman" },
        { title: "Menghargai perbedaan" },
        { title: "Aturan saat bermain bersama" }
      ]
    },
    {
      title: "Aturan dan Kepatuhan",
      icon: Book,
      detailTitle: "Aturan dan Kepatuhan",
      detailDescription: "Memahami fungsi aturan di keluarga dan sekolah, serta menyadari pentingnya mematuhi aturan untuk menciptakan ketertiban dan kenyamanan bersama.",
      topics: [
        { title: "Aturan di rumah" },
        { title: "Aturan di sekolah" },
        { title: "Manfaat mematuhi aturan" }
      ]
    },
    {
      title: "Simbol Negara dan Nasionalisme",
      icon: Book,
      detailTitle: "Simbol Negara dan Nasionalisme",
      detailDescription: "Mengenal simbol-simbol negara Indonesia seperti bendera, lagu kebangsaan, dan lambang Garuda Pancasila, serta memahami nilai-nilai Pancasila sebagai dasar negara.",
      topics: [
        { title: "Bendera Merah Putih" },
        { title: "Lagu Indonesia Raya" },
        { title: "Lambang Garuda Pancasila" }
      ]
    },
    {
      title: "Gotong Royong dan Kepedulian Lingkungan",
      icon: Book,
      detailTitle: "Gotong Royong dan Kepedulian Lingkungan",
      detailDescription: "Mengenal lingkungan sekitar rumah dan sekolah, mempraktikkan sikap gotong royong, serta aktif menjaga kebersihan dan keindahan lingkungan.",
      topics: [
        { title: "Lingkungan rumah dan sekolah" },
        { title: "Sikap gotong royong" },
        { title: "Menjaga kebersihan lingkungan" }
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

interface Pancasila1Props {
  selectedTopicTitle: string;
}

export default function Pancasila1({ selectedTopicTitle }: Pancasila1Props) {
  const materiData = {
    bab: [
      {
        title: "Mengenal Diri dan Teman",
        color: "blue",
        cerita: {
          judul: "Hari Pertama Sekolah",
          isi: "Hari pertama sekolah, suasana kelas penuh suara ceria. Anak-anak duduk rapi dengan seragam putih merah. Seorang anak laki-laki berdiri di depan kelas dan memperkenalkan diri.\n\n\"Halo, teman-teman. Namaku Sakti. Aku dari Jakarta,\" katanya sambil tersenyum.\n\nLalu, seorang anak perempuan berdiri. \"Namaku Ika. Aku berasal dari Kalimantan. Senang bertemu kalian semua!\"\n\nAnak-anak lain ikut mengenalkan diri. Ada yang dari Sulawesi, ada yang dari Papua, dan ada juga yang dari Bali. Meskipun berbeda tempat asal, mereka semua kini belajar di sekolah yang sama. Mereka pun bermain bersama, berbagi cerita, dan belajar mengenal satu sama lain."
        },
        pengertian: "Setiap anak memiliki keunikan masing-masing. Ada yang suka bernyanyi, ada yang senang menggambar. Ada anak laki-laki, ada anak perempuan. Semua anak punya keistimewaan. Mengenal diri sendiri dan teman-teman di sekitar adalah langkah awal untuk membangun hubungan yang baik dan saling menghargai perbedaan.",
        subtopics: [
          {
            title: "Perkenalan Diri dan Teman",
            content: [
              "Setiap anak memiliki nama, asal daerah, serta kebiasaan masing-masing. Ada yang suka bernyanyi, ada yang senang menggambar. Ada anak laki-laki, ada anak perempuan. Semua anak punya keistimewaan.",
              "Mengenal diri sendiri artinya kita tahu siapa diri kita: nama kita, dari mana asal kita, apa yang kita sukai, dan apa yang bisa kita lakukan sendiri.",
              {
                text: "Contoh perkenalan:",
                examples: [
                  "\"Namaku Bina. Aku perempuan. Aku dari Sulawesi. Aku suka membaca buku dan membantu ibu di rumah.\"",
                  "\"Halo, namaku Raka. Aku laki-laki. Aku dari Bandung. Aku suka bermain bola dan menggambar.\""
                ]
              },
              "Ketika ada teman baru, sambutlah dengan ramah: \"Halo, namamu siapa? Ayo, kita main bersama.\" Dengan begitu, suasana sekolah menjadi lebih hangat dan menyenangkan."
            ]
          },
          {
            title: "Menghargai Perbedaan",
            content: [
              "Teman-teman di sekolah mungkin berbeda dari kita: ada yang kulitnya putih, ada yang sawo matang; ada yang rambutnya lurus, ada yang keriting; ada yang tinggi, ada yang pendek; ada yang laki-laki, ada yang perempuan.",
              {
                text: "Contoh perbedaan fisik:",
                examples: [
                  { text: "Warna kulit berbeda", image: "images/warna-kulit.jpeg" },
                  { text: "Bentuk rambut berbeda", image: "images/bentuk-rambut.jpeg" },
                  { text: "Tinggi badan berbeda", image: "images/tinggi-badan.jpeg" }
                ]
              },
              "Perbedaan bukan untuk dijauhi. Justru, kita harus saling mengenal dan menghargai. Setiap anak berhak punya teman dan merasa diterima.",
              {
                text: "Contoh sikap menghargai perbedaan:",
                examples: [
                  "Tidak menertawakan logat bicara teman",
                  "Tidak mengejek bentuk rambut atau warna kulit",
                  "Mengajak bermain semua teman tanpa membeda-bedakan"
                ]
              },
              "Dengan saling menghargai, kita bisa belajar banyak hal baru dari teman-teman yang berbeda latar belakang."
            ]
          },
          {
            title: "Aturan Saat Bermain Bersama",
            content: [
              "Agar bermain tetap seru dan tidak membuat teman sedih, patuhi aturan permainan. Setiap permainan memiliki aturan masing-masing yang harus disepakati dan ditaati.",
              {
                text: "Contoh permainan dan aturannya:",
                examples: [
                  { text: "Lompat tali: tidak boleh menginjak tali saat bukan giliran", image: "images/lompat-tali.jpeg" },
                  { text: "Petak umpet: tidak boleh mengintip saat pencari sedang menghitung", image: "images/petak-umpet.jpeg" }
                ]
              },
              {
                text: "Aturan umum dalam bermain:",
                examples: [
                  "Tidak curang",
                  "Tidak mendorong teman",
                  "Tidak berebut giliran",
                  "Tidak mengejek saat menang atau kalah"
                ]
              },
              "Permainan akan lebih menyenangkan jika semua anak bermain dengan jujur dan tertib.",
              "Jika ada teman yang melanggar aturan, kita bisa menasihatinya dengan baik dan mengajak bermain lagi dengan cara yang benar."
            ]
          }
        ]
      },
      {
        title: "Aturan dan Kepatuhan",
        color: "green",
        cerita: {
          judul: "Pagi di Rumah Bina",
          isi: "Setiap pagi, Bina bangun sebelum matahari terbit. Ia membereskan tempat tidur, menyikat gigi, dan membantu Ibu menyapu lantai. Hari itu, ia lupa merapikan mainan yang ia keluarkan semalam.\n\nSaat Ibu melihat mainan berserakan, Ibu berkata lembut, \"Bina, kamu masih ingat aturan kita di rumah, kan?\"\n\nBina mengangguk. \"Ya, Bu. Aku harus merapikan mainan setelah bermain.\"\n\nBina pun segera merapikan semua mainannya. Ia tahu, aturan di rumah bukan untuk membuatnya repot, tapi agar rumah tetap rapi dan semua merasa nyaman."
        },
        pengertian: "Di rumah, sekolah, maupun lingkungan sekitar, kita tidak bisa hidup sendiri. Kita hidup bersama orang tua, guru, dan teman-teman. Agar semua bisa merasa aman, tertib, dan nyaman, kita perlu aturan. Aturan dibuat untuk kebaikan bersama. Tanpa aturan, kita bisa saling mengganggu, berebut, atau membuat kekacauan.",
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
                  "Merapikan mainan setelah digunakan"
                ]
              },
              "Dengan aturan, anak-anak belajar bertanggung jawab dan mandiri. Aturan membuat rumah menjadi tempat yang nyaman untuk semua anggota keluarga."
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
                  "Menjaga kebersihan kelas",
                  "Melaksanakan piket kelas sesuai jadwal"
                ]
              },
              "Anak yang mematuhi aturan sekolah akan lebih mudah disukai teman dan dihargai guru. Aturan membantu menciptakan lingkungan belajar yang kondusif."
            ]
          },
          {
            title: "Manfaat Mematuhi Aturan",
            content: [
              "Dengan mematuhi aturan, hidup menjadi lebih tertib dan aman. Kita belajar disiplin dan tanggung jawab. Orang lain merasa nyaman bersama kita, dan kita terhindar dari bahaya atau kerugian.",
              {
                text: "Contoh manfaat mematuhi aturan:",
                examples: [
                  "Mencuci tangan sebelum makan membuat tubuh lebih sehat",
                  "Merapikan kamar menghindari tersandung mainan",
                  "Minta izin sebelum keluar membuat orang tua tidak khawatir"
                ]
              },
              "Jika kita tidak mematuhi aturan, akibatnya bisa merugikan diri sendiri dan orang lain."
            ]
          }
        ]
      },
      {
        title: "Simbol Negara dan Nasionalisme",
        color: "red",
        cerita: {
          judul: "Hari Senin yang Merah Putih",
          isi: "Pagi itu, langit tampak cerah. Sakti dan Panca berjalan cepat ke sekolah karena hari itu Senin --- hari upacara bendera. Mereka mengenakan seragam lengkap: baju putih, celana merah, dasi, dan topi. Sesampainya di halaman sekolah, mereka langsung berbaris rapi.\n\nKetika lagu Indonesia Raya berkumandang, semua siswa berdiri tegap. Bendera Merah Putih pun perlahan naik ke langit. Sakti merasa bangga melihat bendera itu berkibar. \"Itu bendera negara kita,\" bisiknya pada Panca.\n\nHari itu, mereka tidak hanya mengikuti upacara, tapi juga belajar tentang simbol-simbol penting negara Indonesia yang harus dikenali dan dihormati oleh setiap warga negara."
        },
        pengertian: "Indonesia memiliki simbol-simbol negara yang menunjukkan jati diri dan semangat kebangsaan. Simbol ini tidak hanya dikenali oleh orang dewasa, tapi juga harus dikenal sejak kecil oleh seluruh anak Indonesia. Simbol-simbol ini bukan hanya hiasan, tapi memiliki arti penting dan mendalam bagi seluruh rakyat Indonesia.",
        subtopics: [
          {
            title: "Bendera Merah Putih",
            content: [
              "Bendera Indonesia terdiri dari dua warna: merah di bagian atas (melambangkan keberanian) dan putih di bawah (melambangkan kesucian).",
              {
                text: "Bendera Merah Putih:",
                examples: [
                  "Bendera dikibarkan saat upacara",
                  "Bendera di sekolah setiap hari Senin"
                ]
              },
              {
                text: "Cara menghormati bendera:",
                examples: [
                  "Berdiri tegap saat pengibaran bendera",
                  "Tidak boleh diinjak, dicoret, atau digunakan sembarangan",
                  "Disimpan dengan baik setelah digunakan"
                ]
              },
              "Tahukah kamu? Bendera pertama Indonesia dijahit oleh Ibu Fatmawati, istri Presiden Soekarno, menjelang kemerdekaan pada tahun 1945."
            ]
          },
          {
            title: "Lagu Indonesia Raya",
            content: [
              "Lagu Indonesia Raya diciptakan oleh WR Supratman. Lagu ini pertama kali diperdengarkan saat kemerdekaan Indonesia. Lagu ini menyatukan semangat bangsa Indonesia dari Sabang sampai Merauke.",
              {
                text: "Lagu Indonesia Raya:",
                examples: [
                  "Dinyanyikan saat upacara bendera",
                  "Dinyanyikan dengan khidmat",
                ]
              },
              {
                text: "Sikap saat menyanyikan lagu Indonesia Raya:",
                examples: [
                  "Berdiri tegap",
                  "Tidak berbicara atau bercanda",
                  "Menyanyikan dengan suara lantang dan penuh semangat"
                ]
              }
            ]
          },
          {
            title: "Lambang Garuda Pancasila",
            content: [
              "Burung Garuda mencengkeram pita bertuliskan 'Bhinneka Tunggal Ika' yang artinya 'Berbeda-beda tetapi tetap satu'.",
              {
                text: "Lambang Garuda Pancasila:",
                examples: [
                  { text: "Burung Garuda Pancasila", image: "images/garuda-pancasila.jpeg" },        
                ]
              },
              "Di dada Garuda terdapat perisai dengan lima gambar yang mewakili lima sila Pancasila:",
              {
                examples: [
                  { text: "Bintang (Sila ke-1): Ketuhanan Yang Maha Esa", image: "images/bintang-pancasila.png" },
                  { text: "Rantai (Sila ke-2): Kemanusiaan yang Adil dan Beradab", image: "images/rantai-pancasila.png" },
                  { text: "Pohon Beringin (Sila ke-3): Persatuan Indonesia", image: "images/beringin-pancasila.jpeg" },
                  { text: "Kepala Banteng (Sila ke-4): Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan", image: "images/kepala-banteng.png"}, 
                  {text: "Padi dan Kapas (Sila ke-5): Keadilan Sosial bagi Seluruh Rakyat Indonesia", image: "images/padi-kapas.jpeg" }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Gotong Royong dan Kepedulian Lingkungan",
        color: "yellow",
        cerita: {
          judul: "Membersihkan Taman Sekolah",
          isi: "Pagi itu, kelas 1A terlihat berbeda. Bukan karena mereka belajar di luar kelas, tetapi karena mereka semua sedang membersihkan taman sekolah. Rani menyapu daun-daun kering, Bintang menyiram tanaman, dan Arman mengangkat pot bunga yang terjatuh.\n\nSambil mengelap bangku taman, Rani berkata, \"Kalau semua ikut bantu, taman jadi bersih lebih cepat.\"\n\nBu Guru yang mengawasi kegiatan itu tersenyum. \"Nah, inilah namanya gotong royong. Kita bekerja bersama-sama untuk membuat lingkungan jadi lebih nyaman.\"\n\nAnak-anak pun kembali semangat membersihkan, karena mereka tahu --- menjaga lingkungan bukan tugas satu orang saja, tapi tanggung jawab bersama."
        },
        pengertian: "Gotong royong adalah kegiatan bekerja bersama untuk tujuan yang baik. Di Indonesia, gotong royong adalah nilai luhur yang sudah dikenal sejak lama. Kita tidak bekerja sendiri, tapi bersama teman, tetangga, atau keluarga. Lingkungan yang bersih dan rapi membuat kita merasa nyaman dan sehat. Tapi jika lingkungan kotor, kita bisa merasa tidak betah, bahkan bisa jatuh sakit.",
        subtopics: [
          {
            title: "Lingkungan Rumah dan Sekolah",
            content: [
              "Lingkungan adalah tempat kita tinggal dan beraktivitas setiap hari. Bisa rumah, sekolah, jalan, taman, atau tempat bermain.",
              {
                text: "Contoh lingkungan:",
                examples: [
                  { text: "Lingkungan rumah yang bersih", image: "images/lingkungan-rumah.jpeg" },
                  { text: "Lingkungan sekolah yang asri", image: "images/lingkungan-sekolah.jpeg" }
                ]
              },
              {
                text: "Cara menjaga lingkungan rumah dan sekolah:",
                examples: [
                  "Membuang sampah ke tempatnya",
                  "Menyapu halaman atau kelas saat giliran piket",
                  "Tidak mencoret dinding atau meja",
                  "Menyiram tanaman agar tidak layu"
                ]
              }
            ]
          },
          {
            title: "Sikap Gotong Royong",
            content: [
              "Gotong royong bisa dilakukan di rumah, sekolah, maupun lingkungan sekitar. Saat kita gotong royong, kita belajar saling membantu, tidak egois, menyelesaikan masalah bersama, dan merasakan kebahagiaan karena berhasil bersama-sama.",
              {
                text: "Contoh kegiatan gotong royong:",
                examples: [
                  "Di rumah: membantu membersihkan rumah",
                  "Di sekolah: piket bersama",
                  "Di lingkungan: kerja bakti"
                ]
              }
            ]
          },
          {
            title: "Menjaga Kebersihan Lingkungan",
            content: [
              "Kebersihan lingkungan adalah tanggung jawab bersama. Jika kita malas membersihkan dan membiarkan sampah menumpuk, lingkungan menjadi kotor dan tidak nyaman.",
              {
                text: "Tindakan kecil yang bisa dilakukan:",
                examples: [
                  "Memungut sampah meskipun bukan milik kita",
                  "Menanam pohon atau bunga",
                  "Menggunakan kedua sisi kertas"
                ]
              },
              "Kepedulian terhadap lingkungan harus dimulai sejak dini. Kita harus terbiasa hidup bersih, karena itu adalah bagian dari cara kita menghormati diri sendiri dan orang lain."
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
          <p className="text-gray-800">{selectedBab.pengertian}</p>
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
                        return <p key={i}>{item}</p>;
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
                            {item.text && <p className="font-medium">{item.text}</p>}
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                              {item.examples?.map((example, j) => {
                                if (typeof example === 'string') {
                                  return <li key={j}>{example}</li>;
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
                                      <span>{example.text}</span>
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
        {selectedBab.title === "Simbol Negara dan Nasionalisme" && (
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