import React from 'react';
import { Book } from 'lucide-react';

// Metadata for navigation and detail
export const Pancasila3Metadata = {
  title: "Pendidikan Pancasila",
  subtitle: "Pembelajaran nilai-nilai Pancasila",
  className: "3 Sekolah Dasar",
  curriculum: "Kurikulum Merdeka",
  overlayTitle: "Materi Pendidikan Pancasila Kelas 3",
  overlayContent: [
    {
      title: "Aku Bagian dari Indonesia",
      icon: Book,
      detailTitle: "Aku Bagian dari Indonesia",
      detailDescription: "Mengenal identitas diri, keluarga, dan asal-usul sosial-budaya sebagai bagian dari bangsa Indonesia. Menumbuhkan rasa bangga sebagai warga negara dan semangat cinta tanah air.",
      topics: [
        { title: "Mengenal identitas diri dan asal-usul" },
        { title: "Hidup bersama di tengah perbedaan" },
        { title: "Menjaga hubungan baik di lingkungan" }
      ]
    },
    {
      title: "Hidup Tertib dan Bertanggung Jawab",
      icon: Book,
      detailTitle: "Hidup Tertib dan Bertanggung Jawab",
      detailDescription: "Memahami arti pentingnya aturan dan tanggung jawab dalam kehidupan di rumah, sekolah, dan masyarakat. Menumbuhkan sikap disiplin dan taat aturan sebagai wujud pelaksanaan nilai-nilai Pancasila.",
      topics: [
        { title: "Arti penting hidup tertib" },
        { title: "Aturan yang berlaku di berbagai lingkungan" },
        { title: "Hak dan kewajiban sebagai warga" }
      ]
    },
    {
      title: "Bangga terhadap Keberagaman",
      icon: Book,
      detailTitle: "Bangga terhadap Keberagaman",
      detailDescription: "Menghargai keragaman budaya, suku, agama, dan bahasa sebagai kekayaan bangsa. Menumbuhkan semangat persatuan, toleransi, dan cinta terhadap warisan budaya Indonesia.",
      topics: [
        { title: "Keragaman suku dan budaya di Indonesia" },
        { title: "Toleransi dalam keberagaman agama" },
        { title: "Persatuan dan saling menghargai" }
      ]
    },
    {
      title: "Pancasila dan Kehidupan Sehari-Hari",
      icon: Book,
      detailTitle: "Pancasila dan Kehidupan Sehari-Hari",
      detailDescription: "Mengenal nilai-nilai dalam sila-sila Pancasila dan bagaimana mengamalkannya dalam kehidupan sehari-hari. Menumbuhkan sikap sesuai dengan karakter Pelajar Pancasila.",
      topics: [
        { title: "Lambang dan arti sila-sila Pancasila" },
        { title: "Sikap dan perilaku sesuai nilai Pancasila" },
        { title: "Penerapan nilai Pancasila di sekolah dan rumah" }
      ]
    },
    {
      title: "Sejarah Lahirnya Pancasila",
      icon: Book,
      detailTitle: "Sejarah Lahirnya Pancasila",
      detailDescription: "Mengenal proses perumusan Pancasila sebagai dasar negara Indonesia. Mengenal tokoh-tokoh yang berjasa dan memahami pentingnya peran BPUPKI dalam sidang-sidang awal kemerdekaan.",
      topics: [
        { title: "BPUPKI dan latar belakang pembentukan dasar negara" },
        { title: "Rumusan Pancasila dari tokoh-tokoh pendiri bangsa" },
        { title: "Nilai-nilai luhur dari perumusan Pancasila" }
      ]
    }
  ]
};

const cardColors = [
  { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-800' },
  { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-800' },
  { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-800' },
  { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-800' },
  { bg: 'bg-purple-100', border: 'border-purple-500', text: 'text-purple-800' } // Added for 'Sejarah Lahirnya Pancasila'
];

// Updated ContentItem interface to match Pancasila2.tsx
interface ContentItem {
  text?: string;
  examples?: (string | { text: string; image?: string })[]; // Allows string or object with text and optional image
  image?: string; // For standalone images
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

interface Pancasila3Props {
  selectedTopicTitle: string;
}

export default function Pancasila3({ selectedTopicTitle }: Pancasila3Props) {
  const materiData = {
    bab: [
      {
        title: "Aku Bagian dari Indonesia",
        color: "blue",
        cerita: {
          judul: "Teman dari Banyak Tempat",
          isi: "Hari itu Arka berdiri gugup di depan kelas barunya. Ia baru pindah dari Kalimantan ke Jawa karena ayahnya dipindahtugaskan. Saat memperkenalkan diri, ia menyebutkan asalnya dan bahasa daerah yang biasa ia gunakan di rumah.\n\n\"Wah, kamu bisa bahasa Banjar?\" tanya seorang teman bernama Gibran dengan antusias.\n\n\"Iya. Di rumah aku biasa pakai itu,\" jawab Arka.\n\nTak butuh waktu lama, Arka sudah bermain bersama Gibran, Rani, dan teman-teman lainnya. Mereka bertukar cerita tentang makanan khas dari daerah masing-masing. Saat makan siang, Arka memperkenalkan wadai apam, sedangkan Gibran menunjukkan foto keluarganya saat memakai pakaian adat Jawa.\n\nDari pertemuan itu, Arka sadar bahwa meskipun mereka berbeda asal dan budaya, mereka tetap bisa belajar dan bermain bersama dengan gembira."
        },
        pengertian: "Setiap orang memiliki identitas yang unik. Identitas ini bukan hanya tentang nama dan tempat tinggal, tetapi juga tentang budaya, bahasa, dan kebiasaan yang dibawa dari rumah. Indonesia adalah rumah bagi ribuan pulau dan ratusan suku bangsa. Kita hidup berdampingan dengan teman yang berbeda agama, bahasa, adat, dan budaya. Namun semua itu adalah bagian dari satu bangsa: bangsa Indonesia.",
        subtopics: [
          {
            title: "Mengenal Jati Diri sebagai Warga Indonesia",
            content: [
              "Beberapa hal yang menjadi bagian dari identitas diri antara lain:",
              {
                examples: [
                  "Nama lengkap",
                  "Tempat dan tanggal lahir",
                  "Nama orang tua",
                  "Suku bangsa dan bahasa daerah",
                  "Agama yang dianut",
                  "Kebiasaan atau adat keluarga"
                ]
              },
              "Dengan mengenali siapa diri kita, kita bisa lebih menghargai asal-usul dan memahami bahwa setiap orang juga punya latar belakang yang berbeda."
            ]
          },
          {
            title: "Hidup Rukun di Tengah Perbedaan",
            content: [
              "Keberagaman adalah ciri khas bangsa Indonesia. Namun perbedaan bukan untuk dipertentangkan, melainkan untuk dihargai dan dirayakan. Kita bisa berbeda dalam banyak hal, tapi tetap hidup rukun.",
              {
                text: "Contoh sikap hidup rukun:",
                examples: [
                  "Menghormati teman yang berbeda agama atau kebiasaan",
                  "Tidak mengejek cara bicara atau penampilan teman",
                  "Menyapa dengan ramah siapa pun, meskipun berbeda latar belakang",
                  "Menolong siapa saja tanpa membedakan suku atau agama",
                  "Bermusyawarah saat bekerja sama dalam kelompok"
                ]
              },
              "Sikap rukun membuat suasana di rumah, sekolah, dan masyarakat menjadi lebih damai dan menyenangkan."
            ]
          },
          {
            title: "Cinta Tanah Air dalam Kehidupan Sehari-hari",
            content: [
              "Mencintai tanah air bukan hanya ditunjukkan dengan menghafal lagu kebangsaan atau ikut upacara bendera. Cinta tanah air bisa dilakukan lewat tindakan sederhana, seperti:",
              {
                examples: [
                  "Menjaga kebersihan lingkungan sekitar",
                  "Tidak merusak fasilitas umum",
                  "Menggunakan barang buatan Indonesia dengan bangga",
                  "Mengenal budaya daerah dan warisan leluhur",
                  "Menghormati simbol negara seperti bendera merah putih, Garuda Pancasila, dan lagu Indonesia Raya"
                ]
              },
              "Anak-anak Indonesia yang cinta tanah air akan tumbuh menjadi warga negara yang bertanggung jawab, peduli, dan berjiwa persatuan."
            ]
          },
          {
            title: "Menjadi Anak Indonesia yang Membanggakan",
            content: [
              "Menjadi anak Indonesia artinya siap menjadi bagian dari bangsa yang besar. Kita bisa mulai dengan:",
              {
                examples: [
                  "Berani tampil apa adanya tanpa malu pada asal-usul sendiri",
                  "Bangga memakai pakaian adat atau berbicara dengan logat daerah",
                  "Menjadi jembatan antara perbedaan, bukan pemisah",
                  "Mengajak teman untuk berteman tanpa memandang latar belakang"
                ]
              },
              "Contohnya, saat ada teman baru di kelas, kita bisa menyapanya duluan. Jika ada teman yang berbeda agama, kita tetap mengucapkan selamat saat hari rayanya. Jika ada teman yang berasal dari daerah lain, kita bisa bertanya dan belajar tentang budaya mereka."
            ]
          }
        ]
      },
      {
        title: "Hidup Tertib dan Bertanggung Jawab",
        color: "green",
        cerita: {
          judul: "Kesepakatan Kelas 3B",
          isi: "Hari Senin pagi, suasana kelas 3B masih belum rapi. Tas berserakan di lantai, kursi tidak beraturan, dan tempat sampah penuh dengan bungkus makanan. Bu Rini, wali kelas mereka, masuk dan hanya tersenyum.\n\n\"Kelas ini seperti habis dilanda angin ribut,\" katanya sambil menatap satu per satu muridnya.\n\nSemua anak menunduk, merasa bersalah.\n\n\"Apa kalian nyaman belajar dalam keadaan seperti ini?\" tanya Bu Rini.\n\n\"Tidak, Bu...\" jawab anak-anak serempak.\n\nHari itu Bu Rini tidak memarahi. Ia mengajak seluruh siswa berdiskusi. Mereka bersama-sama membuat kesepakatan kelas: jadwal piket, aturan menyimpan tas, waktu bicara di kelas, dan konsekuensi jika melanggar. Semua siswa menandatangani lembar kesepakatan sebagai tanda setuju.\n\nSejak saat itu, kelas 3B jadi lebih tertib. Mereka menyadari bahwa hidup tertib dimulai dari diri sendiri, bukan dari perintah guru."
        },
        pengertian: "Hidup tertib adalah hidup yang teratur, sesuai aturan yang berlaku, dan menghargai hak orang lain. Aturan dibuat untuk menciptakan ketertiban, keamanan, dan kenyamanan bersama. Tanpa aturan, bisa terjadi kekacauan.",
        subtopics: [
          {
            title: "Apa Itu Hidup Tertib?",
            content: [
              "Anak-anak yang hidup tertib biasanya:",
              {
                examples: [
                  "Datang ke sekolah tepat waktu",
                  "Tidak menyela saat orang lain berbicara",
                  "Menyimpan barang pada tempatnya",
                  "Mengikuti antrian tanpa mendorong",
                  "Mematuhi jadwal belajar dan bermain"
                ]
              },
              "Tertib bukan sekadar mengikuti aturan karena takut dimarahi. Tertib adalah tanda bahwa seseorang peduli pada ketertiban bersama."
            ]
          },
          {
            title: "Mengapa Aturan Dibutuhkan?",
            content: [
              "Aturan dibuat untuk menciptakan ketertiban, keamanan, dan kenyamanan bersama. Tanpa aturan, bisa terjadi kekacauan.",
              {
                text: "Misalnya:",
                examples: [
                  "Jika tidak ada aturan lalu lintas, kendaraan akan saling berebut jalan.",
                  "Jika tidak ada aturan berbicara di kelas, semua anak akan berbicara bersamaan dan pelajaran jadi kacau.",
                  "Jika di rumah semua orang tidur semaunya, kegiatan keluarga akan terganggu."
                ]
              },
              "Di sekolah, aturan bisa tertulis (seperti tata tertib) dan tidak tertulis (seperti menghargai guru dan teman). Di rumah, aturan bisa berupa tidur maksimal pukul 9 malam, tidak bermain ponsel saat makan, atau menyelesaikan PR sebelum bermain."
            ]
          },
          {
            title: "Kesepakatan Bersama Membentuk Tanggung Jawab",
            content: [
              "Kesepakatan bersama adalah aturan yang dibuat bersama dan disetujui oleh semua pihak. Karena dibuat bersama, setiap orang merasa bertanggung jawab untuk melaksanakannya.",
              {
                text: "Contohnya:",
                examples: [
                  "Siswa menyusun jadwal piket dan melaksanakannya tanpa disuruh",
                  "Tim olahraga menyepakati siapa yang bertugas membawa perlengkapan",
                  "Anak-anak bermain sepakat tidak saling mengejek, siapa yang melanggar tidak boleh ikut bermain"
                ]
              },
              "Dengan kesepakatan, semua anak belajar saling menghargai dan bertanggung jawab atas aturan yang telah disetujui bersama."
            ]
          },
          {
            title: "Hak dan Kewajiban Harus Seimbang",
            content: [
              "Setiap anak memiliki hak (apa yang layak diterima) dan kewajiban (apa yang harus dilakukan).",
              {
                text: "Misalnya:",
                examples: [
                  "Hak mendapat pendidikan = Kewajiban belajar dengan sungguh-sungguh",
                  "Hak bermain = Kewajiban menjaga keamanan dan ketertiban saat bermain",
                  "Hak mendapat makanan = Kewajiban tidak pilih-pilih makanan dan tidak membuang-buang"
                ]
              },
              "Jika setiap orang hanya menuntut hak tanpa menjalankan kewajiban, maka tidak akan tercipta keadilan. Tapi jika setiap orang melakukan kewajiban dengan baik, maka hak semua orang juga akan terpenuhi."
            ]
          },
          {
            title: "Tanggung Jawab adalah Ciri Orang Bisa Dipercaya",
            content: [
              "Anak yang bertanggung jawab adalah anak yang bisa diandalkan. Ia tidak mudah menyalahkan orang lain, menyelesaikan tugas tanpa disuruh, dan menepati janji.",
              {
                text: "Contoh:",
                examples: [
                  "Jika menjadi petugas upacara, ia datang lebih awal dan menyiapkan tugasnya.",
                  "Jika mendapat tugas kelompok, ia mengerjakan bagian tugasnya tanpa menunggu diingatkan.",
                  "Jika diberi kepercayaan menjaga barang teman, ia melakukannya dengan hati-hati."
                ]
              },
              "Tanggung jawab adalah sikap yang sangat penting untuk membentuk karakter yang baik sejak dini."
            ]
          }
        ]
      },
      {
        title: "Bangga terhadap Keberagaman",
        color: "yellow",
        cerita: {
          judul: "Suara dari Banyak Daerah",
          isi: "Sekolah SD Nusantara sedang mempersiapkan \"Pekan Budaya Nusantara.\" Setiap kelas menampilkan budaya dari berbagai daerah. Kelas 3 mendapat tugas membawakan lagu daerah dan mengenakan pakaian adat dari daerah masing-masing orang tua mereka.\n\nRiko mengenakan ulos dari Sumatra Utara, Diah memakai kebaya dari Jawa, sementara Damar mengenakan baju adat dari Nusa Tenggara Timur. Di tengah latihan, Nando terlihat ragu. Ia berkata, \"Aku tidak tahu harus pakai apa. Aku lahir di Jakarta, tapi orang tuaku dari dua suku yang berbeda.\"\n\nBu Maya tersenyum dan menjawab, \"Kamu bisa bercerita tentang dua budaya itu. Keberagamanmu justru istimewa, Nando. Itu membuatmu kaya.\"\n\nHari tampil, semua siswa berdiri percaya diri. Tak ada yang malu. Mereka bangga membawa nama budaya masing-masing. Dan ketika lagu daerah dinyanyikan, suara mereka berpadu harmonis. Berbeda, tapi tetap satu."
        },
        pengertian: "Indonesia adalah negara yang sangat kaya akan budaya, suku, dan adat istiadat. Setiap daerah punya keunikan yang berbeda-beda. Keragaman ini bukan hanya tampak dalam pakaian adat, tetapi juga dalam bahasa daerah, rumah tradisional, lagu dan tarian daerah, makanan khas, serta tradisi dan upacara adat.",
        subtopics: [
          {
            title: "Kekayaan Budaya Indonesia",
            content: [
              "Contoh kekayaan budaya Indonesia:",
              {
                examples: [
                  "Suku Bugis terkenal dengan perahu pinisi dan pakaian bodo",
                  "Suku Batak memiliki rumah bolon dan tradisi gotong royong",
                  "Suku Bali punya tradisi upacara dan seni ukir yang mendunia",
                  "Suku Papua dikenal dengan rumah honai dan tarian perang"
                ]
              },
              "Semua budaya ini membentuk jati diri bangsa Indonesia yang unik dan beragam."
            ]
          },
          {
            title: "Menghargai Perbedaan Adalah Tanda Persatuan",
            content: [
              "Perbedaan bukan penghalang untuk berteman. Justru, saat kita mau mengenal perbedaan dan menghargainya, kita belajar menjadi pribadi yang terbuka.",
              {
                text: "Sikap yang menunjukkan penghargaan terhadap perbedaan:",
                examples: [
                  "Mau berteman dengan siapa saja, tanpa melihat suku, agama, atau kebiasaan",
                  "Mengucapkan selamat saat teman merayakan hari besar keagamaannya",
                  "Tidak mengejek logat bicara atau warna kulit orang lain",
                  "Mendengarkan cerita teman tentang budaya asalnya",
                  "Menghargai makanan khas dan tidak mencela kebiasaan orang lain"
                ]
              },
              "Sikap ini melatih kita untuk tidak merasa lebih baik dari orang lain. Kita semua berbeda, dan perbedaan itu adalah kekuatan, bukan alasan untuk bertengkar."
            ]
          },
          {
            title: "Bahasa Indonesia: Pengikat Keberagaman",
            content: [
              "Meski kita berbicara dengan bahasa daerah yang berbeda, seluruh rakyat Indonesia disatukan oleh satu bahasa persatuan, yaitu Bahasa Indonesia.",
              {
                text: "Bahasa Indonesia digunakan dalam:",
                examples: [
                  "Pelajaran dan buku di sekolah",
                  "Upacara dan kegiatan resmi",
                  "Komunikasi antar suku",
                  "Menulis surat dan membaca berita"
                ]
              },
              "Dengan menggunakan Bahasa Indonesia, semua warga bisa saling mengerti, meskipun berasal dari suku yang berbeda. Ini sebabnya kita diajarkan menggunakan Bahasa Indonesia dengan baik dan benar sejak kecil."
            ]
          },
          {
            title: "Warisan Budaya dan Cara Melestarikannya",
            content: [
              "Warisan budaya adalah sesuatu yang diwariskan dari nenek moyang kepada generasi sekarang. Bisa berupa:",
              {
                examples: [
                  "Lagu tradisional seperti \"Yamko Rambe Yamko\" atau \"Gundul-Gundul Pacul\"",
                  "Tarian seperti Tari Saman, Tari Kecak, atau Tari Tor-tor",
                  "Pakaian adat seperti kebaya, baju bodo, atau pakaian Dayak",
                  "Permainan tradisional seperti congklak, egrang, dan gasing"
                ]
              },
              {
                text: "Sebagai anak Indonesia, kita bisa menjaga warisan budaya dengan:",
                examples: [
                  "Mengikuti pentas seni dan kegiatan kebudayaan",
                  "Mengenakan pakaian adat saat perayaan khusus",
                  "Belajar dan mengenal tarian atau lagu daerah",
                  "Tidak malu memperkenalkan budaya daerah di sekolah"
                ]
              },
              "Pelestarian budaya bukan hanya tugas orang dewasa. Anak-anak juga punya peran penting agar kekayaan budaya kita tidak punah."
            ]
          }
        ]
      },
      {
        title: "Pancasila dan Kehidupan Sehari-Hari",
        color: "red",
        cerita: {
          judul: "Lima Warna yang Menyatu",
          isi: "Di sekolah SD Nusantara, kelas 3 sedang menyiapkan drama mini tentang nilai-nilai Pancasila. Setiap kelompok diminta menunjukkan contoh sikap yang mencerminkan salah satu sila.\n\nKelompok 1 membuat adegan doa bersama sebelum belajar. Kelompok 2 memperagakan anak yang menolong teman jatuh dari sepeda. Kelompok 3 menampilkan anak-anak dari berbagai suku bermain dan bernyanyi bersama. Kelompok 4 menunjukkan diskusi musyawarah saat memilih ketua kelas. Kelompok 5 memperagakan berbagi makanan dengan teman yang tidak membawa bekal.\n\nSetelah semua tampil, Bu Lestari bertepuk tangan sambil berkata, \"Kalian telah menunjukkan bahwa meskipun warna kita berbeda, kita bisa bersatu dalam satu lukisan indah yang bernama Pancasila.\""
        },
        pengertian: "Pancasila bukan sekadar nama. Ia adalah dasar dari semua aturan dan nilai yang berlaku di Indonesia. Pancasila juga menjadi panduan bagi semua warga negara dalam bersikap dan bertindak. Setiap sila memiliki makna yang dalam dan menggambarkan karakter bangsa.",
        subtopics: [
          {
            title: "Mengenal Pancasila Sebagai Dasar Negara",
            content: [
              "Pancasila sering dikenalkan dengan simbol pada lambang Garuda Pancasila:",
              {
                examples: [
                  { text: "Bintang -- Ketuhanan Yang Maha Esa: Percaya kepada Tuhan, rajin berdoa, dan menghargai semua agama.", image: "images/bintang-pancasila.png" },
                  { text: "Rantai -- Kemanusiaan yang Adil dan Beradab: Bersikap adil, sopan, membantu sesama, dan menghargai hak orang lain.", image: "images/rantai-pancasila.png" },
                  { text: "Pohon Beringin -- Persatuan Indonesia: Mencintai tanah air, menghormati perbedaan, dan menjaga kebersamaan.", image: "images/beringin-pancasila.jpeg" },
                  { text: "Kepala Banteng -- Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan: Mau berdiskusi, tidak memaksakan kehendak, dan menghargai pendapat.", image: "images/kepala-banteng.png" },
                  { text: "Padi dan Kapas -- Keadilan Sosial bagi Seluruh Rakyat Indonesia: Peduli pada sesama, berbagi, dan tidak semena-mena terhadap yang lemah.", image: "images/padi-kapas.jpeg" }
                ]
              },
              "Simbol-simbol ini tidak sekadar gambar, tapi punya makna yang harus dihidupkan dalam tindakan sehari-hari."
            ]
          },
          {
            title: "Pancasila dalam Tindakan Sehari-hari",
            content: [
              "Setiap anak bisa mengamalkan Pancasila dengan cara sederhana:",
              {
                text: "Sila 1: Ketuhanan Yang Maha Esa:",
                examples: [
                  "Mengucap syukur dan berdoa sesuai agama masing-masing",
                  "Tidak mengganggu teman saat mereka beribadah",
                  "Menghormati hari raya keagamaan orang lain"
                ]
              },
              {
                text: "Sila 2: Kemanusiaan yang Adil dan Beradab:",
                examples: [
                  "Meminta maaf jika berbuat salah",
                  "Tidak menyakiti teman secara fisik atau perkataan",
                  "Membantu teman yang kesulitan"
                ]
              },
              {
                text: "Sila 3: Persatuan Indonesia:",
                examples: [
                  "Berteman tanpa memilih-milih",
                  "Bangga menyanyikan lagu Indonesia Raya",
                  "Menghargai perbedaan bahasa, warna kulit, dan kebiasaan"
                ]
              },
              {
                text: "Sila 4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan:",
                examples: [
                  "Berdiskusi sebelum memilih ketua kelompok",
                  "Tidak memaksa pendapat sendiri",
                  "Menghargai keputusan Bersama"
                ]
              },
              {
                text: "Sila 5: Keadilan Sosial bagi Seluruh Rakyat Indonesia:",
                examples: [
                  "Membagi alat tulis atau bekal makanan kepada teman yang butuh",
                  "Menjaga fasilitas umum agar bisa digunakan semua",
                  "Tidak mengambil hak orang lain"
                ]
              }
            ]
          },
          {
            title: "Profil Pelajar Pancasila",
            content: [
              "Pemerintah mengenalkan Profil Pelajar Pancasila sebagai gambaran anak-anak Indonesia yang ideal. Siswa yang baik bukan hanya pandai, tapi juga punya sikap dan kepribadian yang sesuai nilai Pancasila.",
              {
                text: "Ciri-cirinya antara lain:",
                examples: [
                  "Beriman dan bertakwa: Rajin berdoa, hormat pada guru dan orang tua",
                  "Berkebinekaan global: Terbuka terhadap perbedaan, suka belajar budaya lain",
                  "Mandiri: Mampu mengerjakan tugas sendiri, tidak tergantung",
                  "Bergotong royong: Suka membantu dan bekerja sama",
                  "Kreatif dan kritis: Berani bertanya, suka mencoba hal baru, berpikir logis"
                ]
              },
              "Anak-anak bisa mulai dari langkah kecil. Saat menepati janji, menyelesaikan tugas tanpa disuruh, dan bersikap adil pada teman---itulah tanda-tanda Pelajar Pancasila."
            ]
          }
        ]
      },
      {
        title: "Sejarah Lahirnya Pancasila",
        color: "purple",
        cerita: {
          judul: "Menengok ke Masa Lalu",
          isi: "Di ruang kelas, Bu Ani membawa beberapa gambar hitam putih dan menunjukkan kepada siswa.\n\n\"Anak-anak, siapa yang tahu siapa orang di gambar ini?\" tanyanya sambil mengangkat foto seorang pria berkacamata.\n\n\"Pak Soekarno!\" jawab beberapa siswa.\n\n\"Benar,\" kata Bu Ani. \"Dan hari ini, kita akan belajar bagaimana Pancasila, dasar negara kita, lahir dari pemikiran para tokoh seperti beliau.\"\n\nAnak-anak pun mendengarkan dengan penuh semangat. Mereka membayangkan bagaimana dulu para tokoh bangsa berdiskusi dengan serius demi merumuskan dasar negara yang bisa menyatukan seluruh rakyat Indonesia yang beragam."
        },
        pengertian: "Sebelum Indonesia merdeka, para pemimpin bangsa sadar bahwa negara yang besar ini harus berdiri di atas dasar yang kokoh dan adil. Indonesia terdiri dari berbagai suku, agama, bahasa, dan adat istiadat. Jika tidak ada dasar negara yang bisa diterima oleh semua golongan, maka persatuan akan sulit diwujudkan.",
        subtopics: [
          {
            title: "Indonesia Butuh Dasar Negara",
            content: [
              "Pada tahun 1945, dibentuklah sebuah lembaga bernama BPUPKI (Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan Indonesia). Tugas utamanya adalah:",
              {
                examples: [
                  "Merancang bentuk negara",
                  "Menyusun dasar negara",
                  "Mempersiapkan kemerdekaan Indonesia"
                ]
              },
              "Dalam sidang BPUPKI, para tokoh bangsa saling bertukar pendapat. Mereka menyampaikan usulan tentang dasar negara yang bisa menyatukan semua rakyat Indonesia."
            ]
          },
          {
            title: "Tiga Tokoh Perumus Pancasila",
            content: [
              "Ada tiga tokoh penting yang dikenal sebagai pengusul rumusan Pancasila dalam sidang-sidang BPUPKI:",
              {
                text: "1. Muhammad Yamin",
                examples: [
                  "Seorang ahli hukum dan budayawan",
                  "Rumusan Yamin secara tertulis: Peri kebangsaan, Peri kemanusiaan, Peri ketuhanan, Peri kerakyatan, Kesejahteraan rakyat",
                  "Ia menekankan pentingnya semangat kebangsaan dan kemanusiaan"
                ]
              },
              {
                text: "2. Dr. Soepomo",
                examples: [
                  "Seorang ahli hukum tata negara",
                  "Gagasan utama: Negara berdasar kesatuan, Tidak mementingkan golongan, Pemerintahan berdasarkan musyawarah, Keadilan sosial sebagai tujuan",
                  "Soepomo lebih banyak membahas filosofi bangsa dan budaya Indonesia"
                ]
              },
              {
                text: "3. Ir. Soekarno",
                examples: [
                  "Pada tanggal 1 Juni 1945, Soekarno menyampaikan pidatonya di depan sidang BPUPKI",
                  "Memperkenalkan istilah \"Pancasila\" sebagai dasar negara",
                  "Lima sila yang diusulkan: Kebangsaan Indonesia, Internasionalisme atau perikemanusiaan, Mufakat atau demokrasi, Kesejahteraan sosial, Ketuhanan yang berkebudayaan",
                  "Istilah \"Pancasila\" berasal dari bahasa Sanskerta: Panca berarti lima, dan Sila berarti prinsip atau asas"
                ]
              }
            ]
          },
          {
            title: "Disepakatinya Pancasila",
            content: [
              "Setelah mendengarkan usulan dari para tokoh, BPUPKI membentuk Panitia Kecil untuk merumuskan dasar negara. Akhirnya, disepakati lima sila Pancasila yang dimuat dalam Pembukaan UUD 1945, dan inilah yang kita gunakan hingga sekarang.",
              {
                text: "Isi Pancasila yang resmi adalah:",
                examples: [
                  "Ketuhanan Yang Maha Esa",
                  "Kemanusiaan yang adil dan beradab",
                  "Persatuan Indonesia",
                  "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
                  "Keadilan sosial bagi seluruh rakyat Indonesia"
                ]
              },
              "Tanggal 1 Juni diperingati sebagai Hari Lahir Pancasila, untuk mengenang pidato Soekarno yang menjadi dasar lahirnya istilah tersebut."
            ]
          },
          {
            title: "Menghargai Perjuangan Para Tokoh",
            content: [
              "Para tokoh bangsa memperjuangkan Pancasila dengan pikiran dan hati. Mereka tidak mementingkan golongan atau suku, melainkan ingin menyatukan seluruh rakyat Indonesia.",
              {
                text: "Sebagai anak bangsa, kita bisa menghargai perjuangan mereka dengan:",
                examples: [
                  "Mengamalkan nilai-nilai Pancasila setiap hari",
                  "Belajar dengan sungguh-sungguh",
                  "Menjaga persatuan meski berbeda latar belakang",
                  "Tidak mengejek budaya atau kepercayaan orang lain",
                  "Bertanggung jawab atas tugas dan janji"
                ]
              },
              "Sikap-sikap ini adalah bentuk penghormatan kepada para tokoh bangsa."
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
                              src={item.image?.toString() || ''}
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
        {selectedBab.title === "Pancasila dan Kehidupan Sehari-Hari" && (
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
