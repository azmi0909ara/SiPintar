import React from 'react';
import { Book } from 'lucide-react';

// Metadata for navigation
export const Indonesia3Metadata = {
  title: "Bahasa Indonesia: Kawan Seiring",
  subtitle: "Bahasa Indonesia",
  className: "3 Sekolah Dasar",
  curriculum: "Kurikulum Merdeka",
  overlayTitle: "Materi Bahasa Indonesia Kelas 3",
  overlayContent: [
    {
      title: "Bermain dan Bercerita",
      icon: Book,
      detailTitle: "Bermain dan Bercerita",
      detailDescription: "Mengenal berbagai permainan tradisional dan belajar menyampaikan cerita dan pendapat melalui kalimat ajakan, seru, dan pernyataan. Materi juga mencakup penggunaan huruf kapital dan tanda baca yang benar.",
      topics: [
        { title: "Permainan tradisional dan pengalaman bermain" },
        { title: "Kalimat ajakan dan kalimat seru" },
        { title: "Penggunaan huruf kapital dan tanda baca" },
        { title: "Mengungkapkan pendapat secara lisan dan tertulis" }
      ]
    },
    {
      title: "Belajar Bersama Teman",
      icon: Book,
      detailTitle: "Belajar Bersama Teman",
      detailDescription: "Memahami pentingnya kerja sama dan kebersamaan, mampu menyusun kalimat sederhana (S-P-O-K), serta menyusun cerita berdasarkan urutan peristiwa dan membedakan teks fiksi dan nonfiksi.",
      topics: [
        { title: "Cerita tentang kerja sama dan tolong-menolong" },
        { title: "Pola kalimat sederhana: Subjek–Predikat–Objek–Keterangan" },
        { title: "Menyusun cerita berdasarkan urutan peristiwa" },
        { title: "Membandingkan teks fiksi dan nonfiksi" }
      ]
    },
    {
      title: "Semangat dalam Cerita",
      icon: Book,
      detailTitle: "Semangat dalam Cerita",
      detailDescription: "Membaca cerita yang memuat semangat dan ketekunan, belajar menemukan pesan dan ide pokok, serta memahami kalimat langsung dan gaya bahasa (seperti majas hiperbola).",
      topics: [
        { title: "Pengalaman menghadapi kegagalan" },
        { title: "Menentukan ide pokok dan pesan moral dari cerita" },
        { title: "Kalimat langsung dan tidak langsung" },
        { title: "Mengenal majas hiperbola dalam teks" }
      ]
    },
    {
      title: "Orang-Orang di Sekitar Kita",
      icon: Book,
      detailTitle: "Orang-Orang di Sekitar Kita",
      detailDescription: "Mengenal berbagai pekerjaan di sekitar seperti petani dan pedagang, memahami struktur kalimat aktif dan pasif, serta belajar menyampaikan pendapat dan merangkum isi bacaan.",
      topics: [
        { title: "Profesi dan peran orang di lingkungan sekitar" },
        { title: "Kalimat aktif dan pasif" },
        { title: "Menyampaikan pendapat dan alasan secara jelas" },
        { title: "Merangkum ide pokok dan kesimpulan" }
      ]
    },
    {
      title: "Kegiatan Jual Beli dan Promosi",
      icon: Book,
      detailTitle: "Kegiatan Jual Beli dan Promosi",
      detailDescription: "Belajar menggunakan kalimat langsung dalam percakapan jual beli, mengenali bentuk teks poster, serta memperluas kosakata terkait kegiatan promosi dan penggunaan alat ucap secara tepat.",
      topics: [
        { title: "Dialog langsung dalam situasi jual beli" },
        { title: "Struktur dan isi teks poster" },
        { title: "Kosakata seputar bazar dan kegiatan promosi" },
        { title: "Alat ucap dan pelafalan kata yang jelas" }
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

interface Indonesia3Props {
  selectedTopicTitle: string;
}

export default function Indonesia3({ selectedTopicTitle }: Indonesia3Props) {
  const materiData = {
    bab: [
      {
        title: "Bermain dan Bercerita",
        color: "blue",
        cerita: {
          judul: "Serunya Main Gobak Sodor",
          isi: "Pagi itu, Boni sedang bermain bola di teras rumah. Ia melempar bola ke tembok, lalu menangkapnya kembali. Tapi saat ia menendang bola terlalu keras, bola itu memantul dan jatuh ke ember besi.\n\n\"Duk! Duk!\" Bunyi bola terdengar keras dan membuat Boni terkejut. Ia tertawa sendiri sambil berkata, \"Wah, bunyinya lucu!\"\n\nTak lama, adiknya datang dan bertanya, \"Bunyi apa itu?\" Boni menjawab, \"Itu suara bola kena ember. Seru ya bunyinya?\""
        },
        pengertian: "Permainan tradisional adalah permainan yang sudah ada sejak dulu dan biasa dimainkan anak-anak di lingkungan sekitar. Permainan ini tidak memerlukan alat modern dan sering kali dimainkan secara berkelompok.",
        subtopics: [
          {
            title: "Mengenal Permainan Tradisional",
            content: [
              "Beberapa contoh permainan tradisional:",
              {
                text: "",
                examples: [
                  "Lompat tali: dimainkan dengan tali karet, melatih kelincahan",
                  "Congklak: menggunakan papan dan biji, melatih hitungan dan strategi",
                  "Egrang: berjalan di atas tongkat panjang, melatih keseimbangan",
                  "Petak umpet: satu pemain mencari, yang lain bersembunyi",
                  "Gobak sodor: permainan kejar-kejaran dengan strategi menjaga garis"
                ]
              },
              "Selain menyenangkan, permainan tradisional juga mengajarkan:",
              {
                text: "",
                examples: [
                  "Kerja sama dan sportivitas",
                  "Rasa percaya diri",
                  "Cara menerima kekalahan dan kemenangan",
                  "Rasa hormat terhadap teman"
                ]
              }
            ]
          },
          {
            title: "Kalimat Ajakan dan Kalimat Seru",
            content: [
              "Saat bermain, anak-anak sering menggunakan kalimat ajakan dan kalimat seru untuk menyemangati atau mengundang teman bermain bersama.",
              {
                text: "Kalimat ajakan:",
                examples: [
                  "\"Ayo kita main egrang!\"",
                  "\"Mari kita bermain bersama!\"",
                  "\"Yuk, ikut gabung di timku!\""
                ]
              },
              {
                text: "Kalimat seru:",
                examples: [
                  "\"Wah, kamu hebat sekali!\"",
                  "\"Hore, aku menang!\"",
                  "\"Aduh, hampir jatuh!\""
                ]
              },
              "Penggunaan kalimat ajakan dan seru membuat percakapan menjadi lebih hidup dan menyenangkan."
            ]
          },
          {
            title: "Huruf Kapital dan Tanda Baca",
            content: [
              "Menulis dengan baik berarti kita harus memperhatikan penulisan huruf kapital dan tanda baca.",
              {
                text: "Huruf kapital digunakan untuk:",
                examples: [
                  "Awal kalimat: Saya suka bermain congklak.",
                  "Nama orang: Andi, Rina, Iqbal",
                  "Nama tempat: Bandung, Indonesia",
                  "Nama hari dan bulan: Senin, Januari"
                ]
              },
              {
                text: "Tanda baca:",
                examples: [
                  "Titik (.) untuk mengakhiri kalimat biasa: Kami bermain di taman.",
                  "Tanda tanya (?) untuk pertanyaan: Kapan kita mulai bermain?",
                  "Tanda seru (!) untuk seruan atau ajakan: Ayo, cepat lari!"
                ]
              }
            ]
          },
          {
            title: "Mengungkapkan Pendapat",
            content: [
              "Pendapat adalah apa yang kita pikirkan atau rasakan terhadap sesuatu. Pendapat bisa berbeda antara satu orang dengan yang lain, dan itu tidak apa-apa.",
              "Kita bisa menyampaikan pendapat dengan kalimat seperti:",
              {
                text: "",
                examples: [
                  "\"Menurut saya, permainan egrang sangat menantang.\"",
                  "\"Saya lebih suka congklak karena seru dan bisa dimainkan di mana saja.\"",
                  "\"Kalau saya, paling suka bermain petak umpet karena bisa bersembunyi.\""
                ]
              },
              "Saat menyampaikan pendapat, kita juga bisa menambahkan alasan agar orang lain mengerti mengapa kita berpikir begitu."
            ]
          }
        ]
      },
      {
        title: "Belajar Bersama Teman",
        color: "green",
        cerita: {
          judul: "Lagu dari Kami",
          isi: "Alva menulis syair di buku catatannya. Bella mulai mencari nada, Caca melatih suaranya, dan Dida bersiap meniup harmonika. Mereka tidak saling menyuruh, tak ada yang mengatur satu sama lain. Semuanya sibuk dengan bagian mereka masing-masing. Setelah latihan beberapa kali, mereka menampilkan lagu di depan kelas. Lagu sederhana itu berhasil membuat teman-teman tersenyum.\n\n\"Kerja sama kalian hebat!\" kata Ibu Guru.\nAlva dan kawan-kawan merasa bangga. Mereka tahu bahwa tanpa kerja sama, lagu itu tidak akan pernah terdengar seindah tadi."
        },
        pengertian: "Kerja sama adalah kegiatan yang dilakukan bersama untuk mencapai tujuan. Dalam keseharian, kerja sama bisa terjadi di mana saja: di rumah, di sekolah, atau di lingkungan bermain.",
        subtopics: [
          {
            title: "Apa Itu Kerja Sama?",
            content: [
              "Kerja sama adalah kegiatan yang dilakukan bersama untuk mencapai tujuan. Dalam keseharian, kerja sama bisa terjadi di mana saja: di rumah, di sekolah, atau di lingkungan bermain.",
              {
                text: "Beberapa contoh kerja sama sederhana:",
                examples: [
                  "Menyapu kelas bersama sebelum pelajaran dimulai",
                  "Membuat prakarya kelompok",
                  "Menyiapkan pertunjukan seni",
                  "Bermain peran bersama teman"
                ]
              },
              "Melalui kerja sama, kita belajar menghargai pendapat orang lain, membagi tugas dengan adil, dan saling percaya."
            ]
          },
          {
            title: "Menulis Kalimat dengan Struktur S-P-O-K",
            content: [
              "Agar mudah dimengerti, kita perlu menulis dengan susunan kalimat yang benar. Kalimat yang baik memiliki struktur dasar:",
              {
                text: "",
                examples: [
                  "S = Subjek (pelaku)",
                  "P = Predikat (pekerjaan atau kegiatan)",
                  "O = Objek (yang dikenai pekerjaan)",
                  "K = Keterangan (tempat, waktu, cara, dll.)"
                ]
              },
              {
                text: "Contoh:",
                examples: [
                  "\"Alva menulis lagu di kertas.\" (S = Alva, P = menulis, O = lagu, K = di kertas)",
                  "\"Dida meniup harmonika sore tadi.\" (S = Dida, P = meniup, O = harmonika, K = sore tadi)"
                ]
              },
              "Kalimat dengan urutan ini akan membuat pembaca lebih mudah memahami isi tulisan."
            ]
          },
          {
            title: "Menyusun Cerita Berdasarkan Urutan Peristiwa",
            content: [
              "Sebuah cerita yang baik memiliki susunan peristiwa yang teratur:",
              {
                text: "",
                examples: [
                  "1. Awal - memperkenalkan tokoh dan suasana",
                  "2. Tengah - menceritakan konflik atau kejadian utama",
                  "3. Akhir - menunjukkan penyelesaian atau penutup cerita"
                ]
              },
              {
                text: "Contoh:",
                examples: [
                  "\"Sore itu, Tia dan Nara ingin bermain di taman. Tapi langit tampak mendung. Mereka pun memutuskan bermain di teras rumah sambil membuat kartu ucapan. Akhirnya, mereka tertawa senang melihat hasil karya mereka.\""
                ]
              },
              "Dengan menyusun cerita secara runtut, pembaca bisa mengikuti alur cerita dari awal sampai akhir tanpa bingung."
            ]
          },
          {
            title: "Fakta dan Fiksi",
            content: [
              "Saat membaca atau menulis cerita, penting untuk tahu mana yang fakta dan mana yang fiksi.",
              {
                text: "Fakta: kejadian nyata dan bisa dibuktikan",
                examples: [
                  "\"Sali dan Mina bermain bersama di halaman.\""
                ]
              },
              {
                text: "Fiksi: cerita imajinasi atau khayalan",
                examples: [
                  "\"Kue yang mereka jual bisa berbicara.\""
                ]
              },
              {
                text: "Contoh cerita gabungan fakta dan fiksi:",
                examples: [
                  "\"Istana Kue\" adalah cerita tentang dua anak yang membangun istana dari balok dan menjual kue-kue dari imajinasi mereka. Mereka berseru kepada pembeli, \"Selamat datang di Istana Kue Kegembiraan!\""
                ]
              },
              "Memahami perbedaan ini membantu kita membaca dengan lebih kritis dan tidak mudah percaya pada hal yang tidak masuk akal dalam kenyataan."
            ]
          }
        ]
      },
      {
        title: "Semangat dalam Cerita",
        color: "yellow",
        cerita: {
          judul: "Gagal Lagi",
          isi: "Raini berjalan cepat pulang dari sekolah. Teman-temannya memanggil, tapi ia tak menoleh. Hari itu ia merasa kecewa. Ia baru saja gagal menghafal puisi di depan kelas. Meski Bu Guru memberinya semangat, Raini tetap merasa tidak percaya diri. Ia ingin sendiri, menenangkan pikirannya.\n\nNamun sore itu, Intan — sahabatnya — datang berkunjung. \"Pantang menyerah, Raini!\" katanya riang. Intan lalu mengajaknya latihan bersama. Sejak saat itu, Raini mulai kembali bersemangat. Ia belajar bahwa kegagalan bisa dihadapi dengan keberanian dan dukungan dari orang terdekat."
        },
        pengertian: "Cerita-cerita yang kita baca seringkali menghadirkan tokoh yang menghadapi kesulitan, lalu menemukan jalan keluar. Tokoh-tokoh itu memberi pelajaran penting tentang semangat, ketekunan, dan pantang menyerah.",
        subtopics: [
          {
            title: "Belajar dari Tokoh: Semangat dan Pantang Menyerah",
            content: [
              "Cerita-cerita yang kita baca seringkali menghadirkan tokoh yang menghadapi kesulitan, lalu menemukan jalan keluar. Tokoh-tokoh itu memberi pelajaran penting tentang semangat, ketekunan, dan pantang menyerah.",
              "Kita belajar bahwa:",
              {
                text: "",
                examples: [
                  "Tidak apa-apa merasa gagal, asalkan mau mencoba lagi.",
                  "Teman yang baik adalah yang mendukung, bukan mengejek.",
                  "Usaha keras akan membawa hasil, meski tidak langsung terlihat."
                ]
              },
              "Tokoh seperti Raini mengajarkan bahwa keberhasilan datang lewat latihan dan keberanian untuk mencoba kembali."
            ]
          },
          {
            title: "Menentukan Ide Pokok dan Pesan",
            content: [
              "Setiap paragraf dalam cerita biasanya memiliki ide pokok, yaitu gagasan utama dari bagian itu. Selain itu, dari keseluruhan teks kita bisa menemukan pesan moral atau amanat yang bisa kita bawa ke kehidupan sehari-hari.",
              {
                text: "Contoh:",
                examples: [
                  "Teks tentang Raini punya ide pokok: \"Raini ingin menyerah karena gagal menghafal.\"",
                  "Pesan yang bisa kita pelajari: \"Jangan menyerah ketika menghadapi kesulitan. Mintalah bantuan dan terus berlatih.\""
                ]
              }
            ]
          },
          {
            title: "Kalimat Langsung dan Tanda Petik",
            content: [
              "Dalam teks cerita, kita sering melihat kalimat langsung, yaitu ucapan tokoh yang ditulis apa adanya. Kalimat seperti ini ditulis di antara tanda petik.",
              {
                text: "Contoh:",
                examples: [
                  "Intan berkata, \"Pantang menyerah, Raini!\"",
                  "Raini bertanya, \"Maukah kamu menemaniku berlatih sore ini?\""
                ]
              },
              "Kalimat langsung membuat cerita terasa lebih hidup. Kita juga bisa tahu perasaan tokoh dari cara mereka berbicara."
            ]
          },
          {
            title: "Majas Hiperbola: Gaya Bahasa yang Lebih Ekspresif",
            content: [
              "Kadang dalam cerita, ada kalimat yang terdengar \"berlebihan\" tapi sebenarnya hanya untuk menambah kesan. Gaya bahasa seperti ini disebut majas hiperbola.",
              {
                text: "Contoh:",
                examples: [
                  "\"Tasku beratnya satu ton!\" → maksudnya: sangat berat",
                  "\"Aku bisa minum seember air!\" → maksudnya: sangat haus",
                  "\"Puisi ini kuhafal seratus kali!\" → maksudnya: diulang sangat sering"
                ]
              },
              "Dengan memahami majas seperti ini, kita tidak bingung saat membaca cerita yang menggunakan gaya bahasa khas."
            ]
          }
        ]
      },
      {
        title: "Orang-Orang di Sekitar Kita",
        color: "red",
        cerita: {
          judul: "Senyum di Pasar",
          isi: "Pagi itu, Rika ikut ibunya berbelanja ke pasar tradisional. Di sana, suasana sangat ramai. Ada penjual sayur yang berseru menawarkan dagangannya, ada tukang ikan yang tertawa sambil menimbang pesanan, dan anak muda yang mendorong gerobak penuh buah-buahan. Beberapa orang membawa karung berisi sayur, sementara lainnya sibuk menata makanan di atas gerobak.\n\nMeski sibuk, banyak di antara mereka tetap tersenyum ramah. Rika terkesima, \"Ibu, mereka semua seperti sedang bahagia ya?\"\n\n\"Iya,\" jawab ibu sambil tersenyum. \"Mereka bekerja keras, tapi tetap bersikap baik kepada pembeli.\""
        },
        pengertian: "Setiap hari kita bertemu banyak orang di sekitar rumah, sekolah, dan tempat umum. Mereka punya pekerjaan yang berbeda-beda. Meskipun berbeda, semua punya peran penting.",
        subtopics: [
          {
            title: "Mengenal Profesi dan Peran di Lingkungan Sekitar",
            content: [
              "Setiap hari kita bertemu banyak orang di sekitar rumah, sekolah, dan tempat umum. Mereka punya pekerjaan yang berbeda-beda. Meskipun berbeda, semua punya peran penting.",
              {
                text: "Beberapa profesi yang sering kita temui:",
                examples: [
                  "Petani -- menanam padi, sayur, atau buah untuk kebutuhan pangan.",
                  "Penjual di pasar -- menyediakan barang kebutuhan seperti makanan, pakaian, atau alat rumah tangga.",
                  "Pemulung atau tukang sampah -- membantu menjaga kebersihan lingkungan.",
                  "Kasir di swalayan -- menghitung harga belanja dan menerima pembayaran.",
                  "Nelayan -- mencari ikan di laut untuk kebutuhan konsumsi masyarakat."
                ]
              },
              "Setiap pekerjaan perlu kita hargai. Tanpa mereka, banyak kebutuhan hidup kita tidak bisa terpenuhi dengan mudah. Menghormati pekerjaan orang lain adalah bagian dari sikap saling menghargai."
            ]
          },
          {
            title: "Memahami Kalimat Aktif dan Kalimat Pasif",
            content: [
              "Dalam menceritakan kegiatan sehari-hari, kita bisa menggunakan dua jenis kalimat: kalimat aktif dan kalimat pasif.",
              {
                text: "Kalimat Aktif:",
                examples: [
                  "Pedagang menjual buah di pasar.",
                  "Rori menanam bibit di pesemaian.",
                  "Pak Slamet memanggul karung beras."
                ]
              },
              {
                text: "Kalimat Pasif:",
                examples: [
                  "Buah dijual oleh pedagang.",
                  "Bibit ditanam oleh Rori di pesemaian.",
                  "Karung beras dipanggul oleh Pak Slamet."
                ]
              },
              "Dengan memahami perbedaan ini, kita bisa menyusun kalimat yang lebih bervariasi dan tepat saat berbicara atau menulis cerita."
            ]
          },
          {
            title: "Menentukan Ide Pokok dan Kesimpulan",
            content: [
              "Saat membaca satu paragraf, kita perlu memahami apa yang menjadi inti atau ide pokok dari paragraf itu. Ide pokok adalah kalimat yang paling penting. Kalimat lainnya disebut ide pendukung karena menjelaskan atau mendukung ide pokok.",
              {
                text: "Contoh:",
                examples: [
                  "\"Di pasar, banyak pedagang menjual sayur, ikan, dan buah. Pembeli memilih dengan teliti. Suasana pasar terasa sibuk dan hangat.\"",
                  "Ide Pokok: Pasar adalah tempat banyak pedagang dan pembeli berkumpul.",
                  "Ide Pendukung: Jenis barang dagangan dan suasana pasar.",
                  "Kesimpulan: Pasar adalah tempat yang ramai dan bermanfaat bagi masyarakat."
                ]
              },
              "Menentukan ide pokok membantu kita memahami isi bacaan secara lebih cepat dan jelas."
            ]
          },
          {
            title: "Menyampaikan Pendapat dan Alasan",
            content: [
              "Kita bisa menyampaikan pendapat setelah membaca, melihat gambar, atau mendengar cerita. Yang penting, sampaikan dengan sopan dan sertakan alasannya.",
              {
                text: "Contoh:",
                examples: [
                  "\"Saya setuju bahwa petani adalah pahlawan, karena mereka bekerja keras untuk menyediakan makanan.\"",
                  "\"Menurut saya, profesi pemulung sangat penting karena membantu mengurangi sampah.\""
                ]
              },
              "Berlatih menyampaikan pendapat juga mengajarkan kita berani bicara dengan percaya diri dan menghargai pendapat orang lain."
            ]
          }
        ]
      },
      {
        title: "Kegiatan Jual Beli dan Promosi",
        color: "purple",
        cerita: {
          judul: "Siap Berjualan!",
          isi: "Di sekolah, seluruh siswa kelas III tengah sibuk mempersiapkan Hari Pasar. Ardi dan teman-teman sekelompoknya telah bersepakat untuk membuat dan menjual bola-bola cokelat buatan sendiri. Sugeng bertugas mencari resep dari tantenya, Edo membaca buku resep milik ibunya, sementara Ardi dan Rahman sibuk mencari informasi dari internet.\n\nMereka juga menyiapkan poster untuk promosi. \"Buat posternya yang menarik, ya. Pakai warna cerah!\" seru Rina. Saat hari pasar tiba, mereka semua mengenakan celemek dan menyapa pengunjung dengan senyuman.\n\n\"Bola-bola cokelat! Manis, lezat, buatan sendiri!\" teriak mereka sambil mengangkat poster. Hari itu, banyak teman yang datang dan membeli. Mereka tidak hanya belajar berjualan, tetapi juga belajar bekerja sama, menyusun kata-kata promosi, hingga membuat laporan hasil kegiatan."
        },
        pengertian: "Promosi adalah cara mengenalkan barang agar orang lain tertarik membelinya. Salah satu bentuk promosi yang mudah dibuat adalah poster.",
        subtopics: [
          {
            title: "Kalimat Langsung dalam Percakapan Promosi",
            content: [
              "Kalimat langsung adalah kalimat yang ditulis sama persis seperti yang diucapkan seseorang. Biasanya ditandai dengan tanda petik dua (\").",
              {
                text: "Contoh:",
                examples: [
                  "Edo bertanya, \"Berapa harga bola cokelat satu bungkus?\"",
                  "Rina menjawab, \"Hanya lima ribu rupiah!\""
                ]
              },
              "Kalimat langsung membuat percakapan terasa lebih hidup. Ini juga melatih kita untuk memahami penggunaan tanda baca seperti koma, tanda tanya, dan tanda seru dalam dialog."
            ]
          },
          {
            title: "Membuat Poster Promosi yang Menarik",
            content: [
              "Promosi adalah cara mengenalkan barang agar orang lain tertarik membelinya. Salah satu bentuk promosi yang mudah dibuat adalah poster.",
              {
                text: "Ciri poster yang baik:",
                examples: [
                  "Judul menarik",
                  "Nama produk ditulis jelas",
                  "Keunggulan produk disebutkan (misalnya: manis, buatan sendiri, tanpa pengawet)",
                  "Harga dicantumkan",
                  "Ajakan menarik seperti: \"Yuk beli sekarang!\""
                ]
              },
              {
                text: "Contoh isi poster:",
                examples: [
                  "\"Bola-Bola Cokelat Buatan Sendiri — Manis dan Lezat! Hanya Rp5.000/bungkus. Tersedia hari ini di Lapak 3!\""
                ]
              },
              "Dalam dunia nyata maupun kegiatan sekolah, kemampuan membuat poster akan sangat berguna untuk berbagai acara atau kegiatan promosi lainnya."
            ]
          },
          {
            title: "Kosakata tentang Jual Beli",
            content: [
              "Dalam kegiatan bazar sekolah, ada banyak kosakata baru yang bisa dipelajari:",
              {
                text: "",
                examples: [
                  "Bazar — Pasar yang dibuka hanya untuk waktu singkat",
                  "Penjual — Orang yang menawarkan dan menjual barang",
                  "Pembeli — Orang yang membeli barang",
                  "Promosi — Usaha mengenalkan produk agar dikenal banyak orang",
                  "Modal — Uang atau bahan awal untuk memulai usaha",
                  "Laba — Keuntungan dari hasil jual beli"
                ]
              },
              "Mengenal dan menggunakan kosakata ini membantu kita berbicara atau menulis dengan lebih tepat saat membahas topik jual beli."
            ]
          },
          {
            title: "Menulis Laporan atau Reportase Kegiatan",
            content: [
              "Setelah kegiatan selesai, siswa menuliskan laporan singkat sebagai bentuk pertanggungjawaban.",
              {
                text: "Struktur laporan kegiatan:",
                examples: [
                  "1. Awal — Kegiatan apa yang dilakukan dan siapa saja yang terlibat",
                  "2. Tengah — Proses kegiatan dari awal hingga akhir",
                  "3. Akhir — Hasil kegiatan dan perasaan setelah melakukannya"
                ]
              },
              {
                text: "Contoh:",
                examples: [
                  "\"Kami membuat bola-bola cokelat sejak pagi. Setelah itu, kami menghias meja dan memasang poster. Saat jam bazar dibuka, kami menyapa pembeli dengan sopan. Banyak yang membeli dan kami senang karena semua habis terjual.\""
                ]
              },
              "Dengan menulis laporan seperti ini, kita belajar menyampaikan pengalaman secara runtut dan jelas."
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