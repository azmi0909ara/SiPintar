import React from 'react';
import { Book } from 'lucide-react';

export const Indonesia1Metadata = {
  title: "Bahasa Indonesia: Aku Bisa!",
  subtitle: "Bahasa Indonesia",
  className: "1 Sekolah Dasar",
  curriculum: "Kurikulum Merdeka",
  overlayTitle: "Materi Bahasa Indonesia Kelas 1",
  overlayContent: [
    {
      title: "Bunyi dan Huruf",
      icon: Book,
      detailTitle: "Bunyi dan Huruf",
      detailDescription: "Mengenal bunyi dan bentuk huruf alfabet, mampu membaca suku kata sederhana, dan menulis kata-kata dasar dengan benar.",
      topics: [
        { title: "Mengenal bunyi dan huruf alfabet" },
        { title: "Membaca suku kata dasar" },
        { title: "Menulis kata sederhana" }
      ]
    },
    {
      title: "Membaca Cerita dan Tanda Baca",
      icon: Book,
      detailTitle: "Membaca Cerita dan Tanda Baca",
      detailDescription: "Membaca cerita pendek dengan pemahaman, mengenal tanda tanya dan tanda seru, serta menerapkan penggunaan tanda baca dalam menulis kalimat.",
      topics: [
        { title: "Membaca cerita pendek" },
        { title: "Tanda tanya dan tanda seru" },
        { title: "Menulis kalimat dengan tanda baca" }
      ]
    },
    {
      title: "Komunikasi dan Etika Berbicara",
      icon: Book,
      detailTitle: "Komunikasi dan Etika Berbicara",
      detailDescription: "Menggunakan kata-kata sopan seperti tolong, maaf, terima kasih, dan permisi dalam komunikasi sehari-hari dengan sikap santun.",
      topics: [
        { title: "Kata sopan (tolong, maaf, terima kasih, permisi)" },
        { title: "Berbicara sopan di rumah dan sekolah" }
      ]
    },
    {
      title: "Teman dan Perbedaan",
      icon: Book,
      detailTitle: "Teman dan Perbedaan",
      detailDescription: "Mengembangkan sikap saling menghargai keberagaman teman dan melatih sikap tolong-menolong dalam interaksi sosial.",
      topics: [
        { title: "Menghargai keberagaman teman" },
        { title: "Sikap tolong-menolong" }
      ]
    },
    {
      title: "Kebutuhan dan Keinginan",
      icon: Book,
      detailTitle: "Kebutuhan dan Keinginan",
      detailDescription: "Membedakan antara kebutuhan dan keinginan, mengenal fungsi uang, dan memahami konsep menabung dengan sederhana.",
      topics: [
        { title: "Membedakan kebutuhan dan keinginan" },
        { title: "Mengenal uang dan tabungan" }
      ]
    },
    {
      title: "Lingkungan dan Keselamatan",
      icon: Book,
      detailTitle: "Lingkungan dan Keselamatan",
      detailDescription: "Mengenal arah dan letak di lingkungan sekitar, mengenal petugas keamanan, dan memahami cara menjaga keselamatan diri di rumah dan sekolah.",
      topics: [
        { title: "Letak dan arah di sekitar rumah" },
        { title: "Mengenal petugas keamanan" },
        { title: "Menjaga keselamatan diri" }
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
  { bg: 'bg-pink-100', border: 'border-pink-500', text: 'text-pink-800' },
  { bg: 'bg-indigo-100', border: 'border-indigo-500', text: 'text-indigo-800' },
  { bg: 'bg-teal-100', border: 'border-teal-500', text: 'text-teal-800' }
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

interface Indonesia1Props {
  selectedTopicTitle: string;
}

export default function Indonesia1({ selectedTopicTitle }: Indonesia1Props) {
  const materiData = {
    bab: [
      {
        title: "Bunyi dan Huruf",
        color: "blue",
        cerita: {
          judul: "Bola di Teras",
          isi: "Pagi itu, Boni sedang bermain bola di teras rumah. Ia melempar bola ke tembok, lalu menangkapnya kembali. Tapi saat ia menendang bola terlalu keras, bola itu memantul dan jatuh ke ember besi.\n\n\"Duk! Duk!\" Bunyi bola terdengar keras dan membuat Boni terkejut. Ia tertawa sendiri sambil berkata, \"Wah, bunyinya lucu!\"\n\nTak lama, adiknya datang dan bertanya, \"Bunyi apa itu?\" Boni menjawab, \"Itu suara bola kena ember. Seru ya bunyinya?\""
        },
        pengertian: "Seperti yang Boni alami, bunyi bisa kita dengar dari banyak hal. Bunyi bisa datang dari benda yang jatuh, suara binatang, orang berbicara, bahkan dari suara kita sendiri. Bunyi adalah awal kita belajar bahasa. Dari mendengar bunyi, kita mulai bisa bicara, membaca, dan menulis.",
        subtopics: [
          {
            title: "Mengenal Bunyi",
            content: [
              "Bunyi bisa terdengar keras atau pelan.",
              {
                text: "Contoh bunyi keras:",
                examples: ["suara petir", "drum", "bola jatuh ke ember"]
              },
              {
                text: "Contoh bunyi pelan:", 
                examples: ["bisikan", "langkah kaki lembut"]
              },
              {
                text: "Sumber bunyi bisa dari:",
                examples: [
                  "Hewan: ayam berkokok, kucing mengeong",
                  "Benda: bola jatuh, pintu tertutup",
                  "Manusia: tertawa, bersin, berbicara"
                ]
              }
            ]
          },
          {
            title: "Huruf Alfabet",
            content: [
              "Huruf adalah lambang dari bunyi.",
              "Bahasa Indonesia memiliki 26 huruf dari A sampai Z.",
              {
                text: "Huruf ditulis dalam dua bentuk:",
                examples: [
                  "Huruf besar/kapital: A, B, C",
                  "Huruf kecil: a, b, c"
                ]
              },
              {
                text: "Contoh bunyi huruf:",
                examples: [
                  "B berbunyi 'be' (bola)",
                  "M berbunyi 'em' (mata)",
                  "D berbunyi 'de' (dadu)"
                ]
              }
            ]
          },
          {
            title: "Suku Kata dan Kata",
            content: [
              "Suku kata adalah gabungan huruf yang membentuk satu bunyi.",
              {
                text: "Contoh suku kata:",
                examples: ["ba, bi, bu, be, bo", "da, di, du, de, do"]
              },
              {
                text: "Gabungan suku kata menjadi kata:",
                examples: [
                  "ba + ju = baju",
                  "bu + ku = buku",
                  "bo + la = bola",
                  "bi + ru = biru"
                ]
              },
              "Dengan membaca suku kata, kita bisa membaca banyak kata sehari-hari."
            ]
          }
        ]
      },
      {
        title: "Membaca Cerita dan Tanda Baca",
        color: "purple",
        cerita: {
          judul: "Cerita Sebelum Tidur",
          isi: "Setiap malam, sebelum tidur, Sita selalu minta dibacakan cerita oleh ibunya. Malam itu, ibunya membuka buku bergambar dan mulai membaca:\n\n\"Pada suatu hari, ada seekor kucing kecil yang ingin bermain.\"\n\nTiba-tiba Sita bertanya, \"Bu, kenapa kalimatnya pakai tanda tanya dan tanda seru?\"\n\nIbunya tersenyum. \"Tanda-tanda itu membantu kita membaca dengan ekspresi. Yuk, Ibu jelaskan.\""
        },
        pengertian: "Cerita adalah rangkaian kalimat yang saling berhubungan. Dalam cerita, kita bisa mengenal tokoh, kejadian, dan suasana. Tanda baca adalah simbol kecil di akhir atau di tengah kalimat yang memberi tahu kita bagaimana cara membaca kalimat tersebut.",
        subtopics: [
          {
            title: "Tanda Tanya (?)",
            content: [
              "Digunakan untuk kalimat yang menanyakan sesuatu.",
              {
                text: "Contoh:",
                examples: [
                  "\"Apa kamu sudah makan?\"",
                  "\"Siapa nama kucing itu?\"",
                  "\"Di mana rumah nenek?\""
                ]
              },
              "Saat membaca tanda tanya, suara kita naik di akhir kalimat, seperti sedang bertanya."
            ]
          },
          {
            title: "Tanda Seru (!)",
            content: [
              "Digunakan untuk kalimat yang menyatakan perasaan kuat atau perintah.",
              {
                text: "Contoh:",
                examples: [
                  "\"Awas, ada mobil!\"",
                  "\"Hore, aku menang!\"",
                  "\"Cepat ambil bukumu!\""
                ]
              },
              "Tanda seru membuat kita membaca dengan lebih semangat atau tegas."
            ]
          },
          {
            title: "Membaca dengan Ekspresi",
            content: [
              "Tanda baca membantu kita membaca dengan ekspresi:",
              {
                text: "Contoh penerapan:",
                examples: [
                  "\"Siapa itu?\" (dibaca dengan nada penasaran)",
                  "\"Hore, hari ini libur!\" (dibaca dengan gembira)"
                ]
              },
              "Dengan memperhatikan tanda baca, cerita menjadi lebih hidup dan mudah dipahami."
            ]
          }
        ]
      },
      {
        title: "Komunikasi dan Etika Berbicara",
        color: "teal",
        cerita: {
          judul: "Di Meja Makan",
          isi: "Saat makan malam, Lala ingin mengambil sambal yang ada di depan ayahnya. Tanpa bicara, ia langsung menyela dan mengambilnya dari tengah.\n\nAyah tersenyum lalu berkata, \"Lala, kalau kamu ingin sesuatu, bilang dulu ya.\" Lala mengangguk malu dan menjawab, \"Maaf, Yah. Tolong ambilkan sambalnya, ya.\"\n\nIbu yang duduk di sebelahnya berkata, \"Nah, itu baru bicara dengan sopan. Kata-kata kecil seperti 'tolong' dan 'maaf' itu penting.\""
        },
        pengertian: "Berbicara dengan sopan menunjukkan bahwa kita menghargai orang lain. Dengan kata-kata yang baik dan sikap yang santun, orang lain akan merasa nyaman dan senang berbicara dengan kita.",
        subtopics: [
          {
            title: "Kata-Kata Sopan",
            content: [
              "Kata-kata sopan penting dalam komunikasi sehari-hari:",
              {
                text: "Contoh kata sopan:",
                examples: [
                  "Tolong - saat meminta bantuan",
                  "Maaf - saat melakukan kesalahan",
                  "Terima kasih - setelah menerima bantuan",
                  "Permisi - saat ingin lewat atau masuk"
                ]
              },
              "Meskipun kata-kata ini sederhana, maknanya sangat besar dalam membangun hubungan baik."
            ]
          },
          {
            title: "Etika Berbicara",
            content: [
              "Selain kata-kata, sikap juga penting dalam komunikasi:",
              {
                text: "Hal yang perlu diperhatikan:",
                examples: [
                  "Gunakan nada suara yang lembut",
                  "Tunjukkan wajah yang ramah",
                  "Dengarkan saat orang lain berbicara",
                  "Jangan memotong pembicaraan"
                ]
              },
              {
                text: "Contoh penerapan:",
                examples: [
                  "\"Halo, namaku Raka. Senang bertemu denganmu.\"",
                  "\"Ayo, aku bantu. Tapi tolong, kita lakukan bersama-sama, ya.\""
                ]
              }
            ]
          },
          {
            title: "Situasi Berbicara",
            content: [
              "Kita perlu menyesuaikan cara berbicara di situasi berbeda:",
              {
                text: "Di rumah:",
                examples: [
                  "\"Tolong, Bu, boleh ambilkan minum?\"",
                  "\"Maaf, Ayah, aku tidak sengaja menjatuhkan piring.\""
                ]
              },
              {
                text: "Di sekolah:",
                examples: [
                  "\"Permisi, Bu Guru, saya ingin bertanya.\"",
                  "\"Terima kasih sudah meminjamkan pensil.\""
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Teman dan Perbedaan",
        color: "emerald",
        cerita: {
          judul: "Teman Baru di Kelas",
          isi: "Hari Senin pagi, kelas 1 mendapat teman baru bernama Bimo. Ia pindahan dari kota lain. Kulitnya lebih gelap, rambutnya keriting, dan logat bicaranya terdengar sedikit berbeda.\n\nBeberapa teman langsung menyapa, \"Halo, Bimo! Ayo main bareng.\" Tapi ada juga yang berbisik, \"Kok beda, ya?\"\n\nMendengar itu, Ibu Guru tersenyum dan berkata, \"Setiap anak memang unik. Perbedaan itu bukan untuk dijauhi, tapi untuk dihargai.\""
        },
        pengertian: "Setiap orang memiliki ciri khas masing-masing. Ada yang tinggi, ada yang pendek. Ada yang suka menggambar, ada yang suka bernyanyi. Perbedaan ini adalah hal yang wajar. Justru dari perbedaan itulah kita bisa saling belajar dan saling melengkapi.",
        subtopics: [
          {
            title: "Keberagaman Teman",
            content: [
              "Setiap teman memiliki keunikan masing-masing:",
              {
                text: "Perbedaan yang sering ditemui:",
                examples: [
                  "Fisik: rambut lurus/keriting, kulit terang/gelap",
                  "Hobi: menggambar, bernyanyi, olahraga",
                  "Latar belakang: kota, desa, budaya berbeda"
                ]
              },
              {
                text: "Contoh:",
                examples: [
                  "Ada yang suka menggambar, ada yang suka bermain bola",
                  "Ada yang berasal dari kota, ada yang dari desa"
                ]
              }
            ]
          },
          {
            title: "Menghargai Perbedaan",
            content: [
              "Cara menghargai teman yang berbeda:",
              {
                text: "Sikap yang baik:",
                examples: [
                  "Menerima teman apa adanya",
                  "Tidak menertawakan logat bicara teman",
                  "Tidak mengejek bentuk fisik teman",
                  "Mengajak bermain bersama"
                ]
              },
              {
                text: "Contoh kalimat:",
                examples: [
                  "\"Halo, mau main bersama kami?\"",
                  "\"Ayo duduk di sini!\""
                ]
              }
            ]
          },
          {
            title: "Sikap Tolong-menolong",
            content: [
              "Tolong-menolong membuat persahabatan lebih erat:",
              {
                text: "Cara membantu teman:",
                examples: [
                  "Membantu mengikat tali sepatu",
                  "Meminjamkan alat tulis",
                  "Menemani teman yang sedang sedih"
                ]
              },
              {
                text: "Kalimat sederhana:",
                examples: [
                  "\"Mau aku bantu?\"",
                  "\"Ayo, kita kerjakan bersama.\""
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Kebutuhan dan Keinginan",
        color: "green",
        cerita: {
          judul: "Ke Toko Bersama Ibu",
          isi: "Suatu hari, Dika ikut ibu berbelanja ke toko. Ibu ingin membeli beras, telur, dan sabun. Tapi saat melewati rak mainan, Dika berhenti dan menunjuk sebuah mobil-mobilan.\n\n\"Bu, aku mau mainan itu!\"\n\nIbu tersenyum. \"Mainan itu memang menarik. Tapi kita ke sini untuk membeli yang kita butuh, bukan yang hanya kita inginkan.\"\n\nDika bertanya, \"Apa bedanya, Bu?\""
        },
        pengertian: "Kebutuhan adalah barang atau hal yang sangat penting dalam hidup kita, seperti makanan, pakaian, dan alat tulis. Keinginan adalah barang yang kita ingin miliki karena menyenangkan, seperti mainan atau permen. Memahami perbedaan ini membantu kita menggunakan uang dengan bijak.",
        subtopics: [
          {
            title: "Kebutuhan",
            content: [
              "Kebutuhan adalah hal yang harus dipenuhi:",
              {
                text: "Contoh kebutuhan:",
                examples: [
                  "Makanan dan minuman bergizi",
                  "Pakaian bersih dan layak pakai",
                  "Tempat tinggal yang nyaman",
                  "Alat tulis untuk sekolah"
                ]
              },
              "Kebutuhan harus didahulukan karena penting untuk hidup sehat dan nyaman."
            ]
          },
          {
            title: "Keinginan",
            content: [
              "Keinginan adalah hal yang ingin kita miliki:",
              {
                text: "Contoh keinginan:",
                examples: [
                  "Mainan baru",
                  "Permen dan jajanan",
                  "Baju baru yang lucu",
                  "Gawai atau alat elektronik"
                ]
              },
              "Keinginan boleh dimiliki, tapi tidak harus dipenuhi setiap saat."
            ]
          },
          {
            title: "Mengelola Uang",
            content: [
              "Cara bijak mengelola uang:",
              {
                text: "Prinsip dasar:",
                examples: [
                  "Beli kebutuhan terlebih dahulu",
                  "Hemat dalam berbelanja",
                  "Menabung untuk masa depan"
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
          }
        ]
      },
      {
        title: "Lingkungan dan Keselamatan",
        color: "yellow",
        cerita: {
          judul: "Menunggu Ayah",
          isi: "Hari sudah sore, sekolah mulai sepi. Bayu duduk di bangku depan kelas sambil menatap jalanan. Ia sedang menunggu ayahnya menjemput. Tiba-tiba, sebuah mobil berhenti di depan pagar.\n\n\"Bayu, ayo naik! Biar Bapak antar pulang,\" kata seorang pria dari dalam mobil.\n\nBayu merasa tidak kenal orang itu. Ia menggeleng dan segera masuk kembali ke sekolah. Untunglah, Bu Guru melihatnya dan menenangkan Bayu sambil menelepon Ayah. Tak lama kemudian, Ayah Bayu datang.\n\nBayu belajar hari itu: jika tidak bersama orang yang dikenal, lebih baik menunggu di tempat aman dan tidak pergi dengan orang asing."
        },
        pengertian: "Lingkungan adalah tempat di sekitar kita. Untuk bisa tinggal dan bergerak dengan aman, kita perlu mengenal arah dan letak di lingkungan sekitar, serta tahu cara menjaga keselamatan diri.",
        subtopics: [
          {
            title: "Mengenal Arah",
            content: [
              "Mengetahui arah penting untuk navigasi:",
              {
                text: "Arah dasar:",
                examples: [
                  "Kanan dan kiri",
                  "Depan dan belakang",
                  "Atas dan bawah"
                ]
              },
              {
                text: "Contoh penggunaan:",
                examples: [
                  "\"Belok kanan setelah lampu merah\"",
                  "\"Rumahku ada di sebelah kiri sekolah\""
                ]
              }
            ]
          },
          {
            title: "Petugas Keamanan",
            content: [
              "Petugas keamanan membantu kita:",
              {
                text: "Jenis petugas keamanan:",
                examples: [
                  "Satpam di sekolah",
                  "Polisi di jalan",
                  "Petugas keamanan di perumahan"
                ]
              },
              {
                text: "Tugas mereka:",
                examples: [
                  "Mengatur lalu lintas",
                  "Menjaga keamanan lingkungan",
                  "Membantu saat darurat"
                ]
              }
            ]
          },
          {
            title: "Keselamatan Diri",
            content: [
              "Cara menjaga keselamatan:",
              {
                text: "Prinsip dasar:",
                examples: [
                  "Tidak pergi dengan orang asing",
                  "Tidak bermain di tempat berbahaya",
                  "Menunggu di tempat aman saat tersesat"
                ]
              },
              {
                text: "Tips tambahan:",
                examples: [
                  "Membuat kartu identitas dengan nomor telepon orang tua",
                  "Menghafal alamat rumah"
                ]
              }
            ]
          }
        ]
      }
    ],
    tips: [
      "Banyak membaca buku cerita untuk mengenal huruf dan kata",
      "Berlatih menulis huruf dan kata sederhana setiap hari",
      "Menggunakan kata-kata sopan dalam berbicara",
      "Menghargai teman yang berbeda dan saling membantu",
      "Membedakan antara kebutuhan dan keinginan",
      "Selalu menjaga kebersihan lingkungan sekitar"
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