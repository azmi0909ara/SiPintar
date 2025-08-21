import React from 'react';
import { Book } from 'lucide-react';

// Metadata for navigation
export const Indonesia5Metadata = {
  title: "Bahasa Indonesia: Keluargaku Unik",
  subtitle: "Bahasa Indonesia",
  className: "5 Sekolah Dasar",
  curriculum: "Kurikulum Merdeka",
  overlayTitle: "Materi Bahasa Indonesia Kelas 5",
  overlayContent: [
    {
      title: "Mengenal Perasaan",
      icon: Book,
      detailTitle: "Mengenal Perasaan",
      detailDescription: "Mengajak mengenal berbagai jenis perasaan seperti senang, sedih, marah, takut, dan malu melalui cerita dan pengalaman sehari-hari.",
      topics: [
        { title: "Jenis-jenis perasaan dan penyebabnya" },
        { title: "Menyampaikan perasaan dengan kata-kata" },
        { title: "Mengenali ekspresi wajah dan suasana hati" }
      ]
    },
    {
      title: "Menjaga Kesehatan Tubuh",
      icon: Book,
      detailTitle: "Menjaga Kesehatan Tubuh",
      detailDescription: "Memahami pentingnya menjaga kebersihan dan kesehatan tubuh melalui kebiasaan baik.",
      topics: [
        { title: "Kebiasaan baik untuk kesehatan" },
        { title: "Jadwal kegiatan sehat" },
        { title: "Menulis tentang kegiatan sehat" }
      ]
    },
    {
      title: "Berhati-hati di Mana Saja",
      icon: Book,
      detailTitle: "Berhati-hati di Mana Saja",
      detailDescription: "Belajar pentingnya berhati-hati di lingkungan sekitar seperti rumah, sekolah, dan jalan.",
      topics: [
        { title: "Tindakan aman di rumah dan sekolah" },
        { title: "Tanda larangan dan peringatan" },
        { title: "Kalimat larangan dan ajakan" }
      ]
    },
    {
      title: "Keluargaku Unik",
      icon: Book,
      detailTitle: "Keluargaku Unik",
      detailDescription: "Mengenal keberagaman anggota keluarga dan peran masing-masing di rumah.",
      topics: [
        { title: "Peran dalam keluarga" },
        { title: "Kata ganti orang" },
        { title: "Menulis cerita tentang keluarga" }
      ]
    },
    {
      title: "Berteman dalam Keragaman",
      icon: Book,
      detailTitle: "Berteman dalam Keragaman",
      detailDescription: "Belajar menghargai perbedaan teman dan menggunakan kata sifat dalam kalimat.",
      topics: [
        { title: "Menghargai perbedaan teman" },
        { title: "Kata sifat dan penggunaannya" },
        { title: "Sinonim dan antonim" }
      ]
    },
    {
      title: "Bijak Menggunakan Uang",
      icon: Book,
      detailTitle: "Bijak Menggunakan Uang",
      detailDescription: "Mengenal perbedaan kebutuhan dan keinginan serta cara menabung.",
      topics: [
        { title: "Kebutuhan vs keinginan" },
        { title: "Cara menabung" },
        { title: "Pantun tentang menabung" }
      ]
    }
  ]
};

const cardColors = [
  { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-800' },
  { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-800' },
  { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-800' },
  { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-800' },
  { bg: 'bg-purple-100', border: 'border-purple-500', text: 'text-purple-800' },
  { bg: 'bg-pink-100', border: 'border-pink-500', text: 'text-pink-800' }
];

interface ContentItem {
  text?: string;
  examples?: string[];
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

interface Indonesia5Props {
  selectedTopicTitle: string;
}

export default function Indonesia5({ selectedTopicTitle }: Indonesia5Props) {
  const materiData = {
    bab: [
      {
        title: "Mengenal Perasaan",
        color: "blue",
        cerita: {
          judul: "Hari yang Penuh Warna",
          isi: "Hari itu, Nara mengalami banyak hal. Pagi-pagi, ia merasa senang karena Ibu memasakkan roti panggang kesukaannya. Di sekolah, ia semangat belajar dan bermain bersama teman-teman. Namun, saat istirahat, ia menjadi sedih karena kehilangan pulpen barunya. Ia mencari ke mana-mana tapi tidak menemukannya. Tak lama, salah satu teman menemukan pulpen itu di bawah meja. Nara pun merasa lega. Tapi menjelang pulang, ia sempat merasa marah karena ada teman yang mengejek gambarnya. Ia cemberut, tapi kemudian Bu Guru datang dan menenangkan mereka berdua."
        },
        pengertian: "Perasaan adalah sesuatu yang kita rasakan di dalam hati. Setiap orang bisa merasakan berbagai perasaan seperti senang, sedih, marah, takut, atau malu. Perasaan bisa muncul karena pengalaman yang kita alami setiap hari.",
        subtopics: [
          {
            title: "Jenis-jenis Perasaan",
            content: [
              "Beberapa perasaan yang sering kita alami:",
              {
                text: "Contoh perasaan dan penyebabnya:",
                examples: [
                  "Senang: saat bermain bersama teman atau mendapat hadiah",
                  "Sedih: saat kehilangan barang atau dimarahi",
                  "Marah: saat merasa disakiti atau diejek",
                  "Takut: saat sendirian atau melihat sesuatu yang menakutkan",
                  "Malu: saat melakukan kesalahan di depan umum"
                ]
              }
            ]
          },
          {
            title: "Mengenali Ekspresi",
            content: [
              "Perasaan bisa terlihat dari wajah dan sikap tubuh:",
              {
                text: "Contoh ekspresi:",
                examples: [
                  "Senang: tersenyum dan mata berbinar",
                  "Sedih: wajah murung dan kadang menangis",
                  "Marah: cemberut dan suara keras",
                  "Takut: wajah tegang dan gelisah",
                  "Malu: menunduk dan diam"
                ]
              },
              "Dengan mengenali ekspresi, kita bisa memahami perasaan orang lain."
            ]
          },
          {
            title: "Menyampaikan Perasaan",
            content: [
              "Penting untuk menyampaikan perasaan dengan kata-kata yang baik:",
              {
                text: "Contoh kalimat:",
                examples: [
                  "\"Aku senang karena hari ini aku mendapat bintang.\"",
                  "\"Aku sedih karena teman dekatku pindah sekolah.\"",
                  "\"Aku marah karena aku diejek saat bermain.\""
                ]
              },
              "Menyampaikan perasaan membantu orang lain memahami apa yang kita rasakan."
            ]
          }
        ]
      },
      {
        title: "Menjaga Kesehatan Tubuh",
        color: "green",
        cerita: {
          judul: "Pagi Sehat Bersama Ibu",
          isi: "Setiap pagi, Dafa bangun dengan semangat. Setelah merapikan tempat tidur, ia langsung menuju kamar mandi. Ia menyikat gigi, mandi dengan sabun, lalu mengenakan seragam sekolah. Di meja makan, Ibu sudah menyiapkan sarapan bergizi --- nasi, telur rebus, dan segelas susu hangat. Sebelum makan, Dafa mencuci tangan dengan sabun. \"Ayo makan, agar kamu punya energi ke sekolah,\" kata Ibu. Dafa pun makan dengan lahap. Ia merasa tubuhnya lebih segar dan pikirannya lebih siap untuk belajar."
        },
        pengertian: "Tubuh yang sehat membuat kita bisa melakukan banyak hal. Kita bisa belajar di sekolah dengan nyaman, bermain bersama teman, dan membantu orang tua di rumah. Menjaga kesehatan tubuh perlu dilakukan setiap hari dengan kebiasaan baik.",
        subtopics: [
          {
            title: "Kebiasaan Sehat",
            content: [
              "Beberapa kebiasaan baik untuk kesehatan tubuh:",
              {
                text: "Contoh kebiasaan sehat:",
                examples: [
                  "Mandi dua kali sehari",
                  "Menyikat gigi pagi dan malam",
                  "Mencuci tangan sebelum makan",
                  "Makan makanan bergizi",
                  "Minum air putih yang cukup",
                  "Tidur yang cukup"
                ]
              }
            ]
          },
          {
            title: "Jadwal Kegiatan Sehat",
            content: [
              "Mengatur waktu membantu kita melakukan kegiatan sehat dengan teratur:",
              {
                text: "Contoh jadwal harian:",
                examples: [
                  "Pukul 06.00: Bangun tidur dan mandi",
                  "Pukul 06.30: Sarapan dan bersiap ke sekolah",
                  "Pukul 12.30: Makan siang dan istirahat",
                  "Pukul 15.00: Bermain atau olahraga ringan",
                  "Pukul 19.00: Makan malam",
                  "Pukul 20.00: Tidur"
                ]
              }
            ]
          },
          {
            title: "Menulis Tentang Kesehatan",
            content: [
              "Kita bisa menulis cerita atau kalimat tentang kegiatan sehat:",
              {
                text: "Contoh kalimat:",
                examples: [
                  "\"Setiap pagi aku menyikat gigi setelah bangun tidur.\"",
                  "\"Aku suka makan sayur bayam yang dimasak Ibu.\"",
                  "\"Aku tidur pukul delapan malam supaya besok bisa bangun pagi.\""
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Berhati-hati di Mana Saja",
        color: "yellow",
        cerita: {
          judul: "Arsa Hampir Terjatuh",
          isi: "Pagi itu Arsa berlari tergesa-gesa menuju sekolah. Ia hampir terpeleset saat melintasi lantai koridor yang basah karena hujan semalam. Untung saja ia segera berhenti dan memegang dinding. \"Kalau tadi aku tidak hati-hati, bisa-bisa aku jatuh,\" pikir Arsa. Sejak kejadian itu, ia mulai lebih memperhatikan langkahnya, terutama saat berada di tempat umum."
        },
        pengertian: "Keselamatan adalah hal penting. Setiap hari kita berada di tempat yang berbeda: di rumah, sekolah, jalan raya, taman bermain, atau pasar. Kita perlu berhati-hati dan waspada di mana saja agar tidak mengalami kecelakaan.",
        subtopics: [
          {
            title: "Tempat yang Perlu Diwaspadai",
            content: [
              "Beberapa tempat yang membutuhkan kewaspadaan:",
              {
                text: "Di rumah:",
                examples: [
                  "Dapur saat kompor menyala",
                  "Area dengan kabel atau colokan listrik",
                  "Lantai yang basah atau licin"
                ]
              },
              {
                text: "Di sekolah:",
                examples: [
                  "Lorong saat ramai",
                  "Tangga atau area tinggi",
                  "Kantin saat antre makanan"
                ]
              }
            ]
          },
          {
            title: "Tanda Peringatan",
            content: [
              "Kita perlu mengenali tanda-tanda peringatan:",
              {
                text: "Contoh tanda:",
                examples: [
                  "🚫 Dilarang merokok",
                  "⚠️ Hati-hati lantai licin",
                  "⚠️ Awas kabel listrik"
                ]
              },
              "Tanda-tanda ini membantu kita menghindari bahaya."
            ]
          },
          {
            title: "Kalimat Larangan dan Ajakan",
            content: [
              "Kita sering mendengar kalimat larangan atau ajakan:",
              {
                text: "Contoh kalimat larangan:",
                examples: [
                  "\"Jangan berlari di lorong sekolah!\"",
                  "\"Tidak boleh memegang barang pecah belah.\""
                ]
              },
              {
                text: "Contoh kalimat ajakan:",
                examples: [
                  "\"Ayo kita antri dengan rapi.\"",
                  "\"Mari buang sampah di tempatnya.\""
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Keluargaku Unik",
        color: "red",
        cerita: {
          judul: "Suasana di Rumah Dita",
          isi: "Di rumah Dita, semua anggota keluarga memiliki kebiasaan yang berbeda. Ayah suka berkebun, Ibu gemar memasak makanan baru, Dita senang menggambar, dan kakaknya suka membaca. Meskipun mereka punya kegiatan masing-masing, setiap sore mereka duduk bersama di ruang tamu untuk saling bercerita. Dita pun menyadari, meskipun berbeda, keluarganya tetap saling menyayangi. \"Keluargaku unik,\" pikirnya, \"dan itu membuatku bangga.\""
        },
        pengertian: "Setiap keluarga memiliki bentuk dan kebiasaan yang tidak selalu sama. Ada yang tinggal bersama ayah dan ibu saja. Ada yang bersama nenek, kakek, atau saudara lainnya. Kebiasaan-kebiasaan ini membuat setiap keluarga berbeda, tapi tetap istimewa.",
        subtopics: [
          {
            title: "Peran dalam Keluarga",
            content: [
              "Setiap anggota keluarga memiliki peran penting:",
              {
                text: "Contoh peran:",
                examples: [
                  "Ayah: mencari nafkah dan membantu memperbaiki rumah",
                  "Ibu: memasak dan membersihkan rumah",
                  "Anak: belajar dan membantu pekerjaan ringan",
                  "Kakak: menjaga adik dan membantu belajar"
                ]
              }
            ]
          },
          {
            title: "Kata Ganti Orang",
            content: [
              "Saat bercerita tentang keluarga, kita menggunakan kata ganti:",
              {
                text: "Contoh kata ganti:",
                examples: [
                  "Aku: untuk diri sendiri",
                  "Kamu: untuk orang yang diajak bicara",
                  "Dia: untuk orang ketiga tunggal",
                  "Mereka: untuk lebih dari satu orang"
                ]
              },
              {
                text: "Contoh kalimat:",
                examples: [
                  "\"Aku tinggal bersama Ibu dan Ayah.\"",
                  "\"Dia adalah kakakku yang suka membaca.\""
                ]
              }
            ]
          },
          {
            title: "Menulis Cerita tentang Keluarga",
            content: [
              "Kita bisa menulis cerita pendek tentang keluarga:",
              {
                text: "Contoh cerita:",
                examples: [
                  "\"Namaku Lani. Aku tinggal bersama Ayah, Ibu, dan Kakakku. Setiap Minggu pagi, kami membersihkan rumah bersama. Ayah menyapu halaman, Ibu mengepel lantai, dan aku membantu kakak mencuci piring. Setelah itu, kami duduk di ruang tengah sambil makan buah. Aku senang karena rumah kami bersih dan kami melakukannya bersama-sama.\""
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Berteman dalam Keragaman",
        color: "purple",
        cerita: {
          judul: "Teman-Teman yang Berbeda",
          isi: "Vira punya banyak teman di kelasnya. Ada yang tinggi, ada yang pendek. Ada yang kulitnya terang, ada yang agak gelap. Beberapa suka menyanyi, beberapa lebih senang membaca. Vira dulu merasa canggung saat bermain dengan teman yang berbeda kebiasaan. Tapi semakin lama, ia menyadari bahwa justru dari perbedaan itulah mereka bisa belajar dan saling melengkapi. Kini, Vira merasa bangga karena bisa berteman dengan siapa saja."
        },
        pengertian: "Setiap orang memiliki keunikan. Tidak ada dua anak yang benar-benar sama. Kita berbeda dalam banyak hal seperti penampilan, cara berbicara, kebiasaan, atau makanan kesukaan. Perbedaan bukanlah penghalang untuk berteman. Justru dengan perbedaan, kita bisa saling membantu dan belajar.",
        subtopics: [
          {
            title: "Menghargai Perbedaan",
            content: [
              "Cara menghargai teman yang berbeda:",
              {
                text: "Sikap yang baik:",
                examples: [
                  "Mendengarkan saat teman berbicara",
                  "Mengajak bermain tanpa memilih-milih",
                  "Tidak menertawakan kekurangan teman",
                  "Menyapa semua teman dengan ramah"
                ]
              }
            ]
          },
          {
            title: "Kata Sifat",
            content: [
              "Kata sifat membantu mendeskripsikan teman:",
              {
                text: "Contoh kata sifat:",
                examples: [
                  "Untuk orang: sabar, lucu, baik, rajin",
                  "Untuk benda: besar, kecil, ringan",
                  "Untuk suasana: ramai, tenang, nyaman"
                ]
              },
              {
                text: "Contoh kalimat:",
                examples: [
                  "\"Alya adalah anak yang ramah.\"",
                  "\"Kelas kami rapi dan bersih.\""
                ]
              }
            ]
          },
          {
            title: "Sinonim dan Antonim",
            content: [
              "Sinonim adalah kata yang artinya mirip, antonim artinya berlawanan:",
              {
                text: "Contoh sinonim:",
                examples: [
                  "Cantik - indah",
                  "Cepat - gesit",
                  "Baik - ramah"
                ]
              },
              {
                text: "Contoh antonim:",
                examples: [
                  "Besar - kecil",
                  "Panas - dingin",
                  "Bersih - kotor"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Bijak Menggunakan Uang",
        color: "pink",
        cerita: {
          judul: "Uang Saku Arai",
          isi: "Setiap Senin pagi, Ibu memberi uang saku untuk Arai dan kakaknya, Labih. Arai sangat senang karena bisa membeli jajanan yang ia suka. Namun, Arai sering kali kehabisan uang bahkan sebelum hari Rabu tiba. Sebaliknya, Labih selalu punya sisa uang saku dan bahkan bisa menabung sedikit demi sedikit. Suatu sore, Arai ingin membeli kue dange yang harum dan hangat. Tapi uangnya sudah habis. Ia pun datang ke Labih dan berharap bisa meminjam uang. Tapi Labih tidak langsung memberi. Ia justru menawarkan sebungkus kerupuk ikan yang ia simpan. Arai pun senang. Mereka makan bersama sambil tertawa."
        },
        pengertian: "Uang adalah alat tukar untuk membeli barang atau jasa. Kita perlu belajar menggunakan uang dengan bijak, membedakan antara kebutuhan dan keinginan, serta membiasakan diri untuk menabung.",
        subtopics: [
          {
            title: "Kebutuhan dan Keinginan",
            content: [
              "Perbedaan antara kebutuhan dan keinginan:",
              {
                text: "Kebutuhan:",
                examples: [
                  "Makanan dan minuman bergizi",
                  "Pakaian bersih",
                  "Alat tulis sekolah"
                ]
              },
              {
                text: "Keinginan:",
                examples: [
                  "Mainan baru",
                  "Permen dan jajanan",
                  "Baju baru yang lucu"
                ]
              }
            ]
          },
          {
            title: "Cara Menabung",
            content: [
              "Menabung adalah menyisihkan uang untuk masa depan:",
              {
                text: "Manfaat menabung:",
                examples: [
                  "Bisa membeli barang yang dibutuhkan",
                  "Membantu saat ada kebutuhan mendadak",
                  "Melatih kesabaran dan tanggung jawab"
                ]
              },
              {
                text: "Contoh menabung:",
                examples: [
                  "Menabung untuk membeli sepatu baru",
                  "Menabung untuk hadiah ulang tahun teman"
                ]
              }
            ]
          },
          {
            title: "Pantun tentang Menabung",
            content: [
              "Pantun bisa mengajarkan kebiasaan baik:",
              {
                text: "Contoh pantun:",
                examples: [
                  "Pagi hari telah berganti siang",
                  "Kucing tidur nyenyak di bawah meja",
                  "Jangan suka menghabiskan uang",
                  "Lebih baik ditabung saja"
                ]
              }
            ]
          }
        ]
      }
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
                      } else {
                        return (
                          <div key={i}>
                            <p className="font-medium">{item.text}</p>
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                              {item.examples?.map((example, j) => (
                                <li key={j}>{example}</li>
                              ))}
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
      </article>
    </div>
  );
}