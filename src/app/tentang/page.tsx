"use client";

export default function TentangPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black p-6 md:p-12 lg:p-20 pt-[14vh]">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">Tentang SiPintar</h1>
        <p>
          <strong>SiPintar</strong> adalah platform pembelajaran digital (e-learning) 
          yang dirancang khusus untuk anak-anak Sekolah Dasar kelas 1 hingga 3. 
          Kami percaya bahwa setiap anak berhak mendapatkan pengalaman belajar 
          yang menyenangkan, mudah dipahami, dan bisa diakses kapan saja serta di mana saja.
        </p>
        <p>
          Melalui SiPintar, kami ingin mendampingi anak-anak Indonesia dalam menumbuhkan 
          semangat belajar sejak dini, sekaligus memberikan dukungan bagi orang tua dan guru 
          dalam proses pembelajaran.
        </p>

        <h2 className="text-2xl font-semibold">🎓 Apa yang Ada di SiPintar?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Materi Pembelajaran Lengkap</strong> – Disusun sesuai kurikulum untuk kelas 1, 2, dan 3 SD dengan bahasa sederhana, penjelasan, contoh, dan ringkasan.
          </li>
          <li>
            <strong>Kuis dan Latihan Soal</strong> – Anak dapat mengerjakan soal interaktif untuk melatih pemahaman.
          </li>
          <li>
            <strong>Belajar Mandiri dan Fleksibel</strong> – Bisa digunakan di rumah bersama orang tua atau di sekolah bersama guru.
          </li>
          <li>
            <strong>Antarmuka Ramah Anak</strong> – Tampilan sederhana, menarik, dan mudah digunakan.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">🌟 Mengapa Memilih SiPintar?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Mudah Dipahami</strong> – Bahasa sederhana dengan contoh sehari-hari.</li>
          <li><strong>Menyenangkan</strong> – Belajar tidak membosankan karena ada kuis dan latihan soal.</li>
          <li><strong>Bermanfaat</strong> – Membantu anak memahami pelajaran sejak dini.</li>
          <li><strong>Terpercaya</strong> – Materi sesuai kurikulum SD kelas 1–3.</li>
        </ul>

        <h2 className="text-2xl font-semibold">🎯 Visi dan Misi</h2>
        <p><strong>Visi:</strong> Menjadi platform e-learning yang membantu anak-anak Indonesia belajar dengan cara yang menyenangkan, sederhana, dan bermakna.</p>
        <p><strong>Misi:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Menyediakan materi pembelajaran sesuai kurikulum untuk kelas 1–3 SD.</li>
          <li>Membuat proses belajar lebih interaktif dan mudah diakses.</li>
          <li>Mendukung peran orang tua dan guru dalam mendampingi anak belajar.</li>
          <li>Membangun generasi cerdas sejak usia dini melalui teknologi pendidikan.</li>
        </ul>

        <h2 className="text-2xl font-semibold">✨ Harapan Kami</h2>
        <p>
          Dengan <strong>SiPintar</strong>, kami berharap proses belajar anak-anak tidak lagi terasa sulit atau membosankan. 
          Sebaliknya, belajar menjadi kegiatan yang ditunggu-tunggu karena menghadirkan rasa ingin tahu, keceriaan, dan semangat baru setiap harinya.
        </p>
        <p>
          Mari bersama-sama menjadikan <strong>SiPintar sebagai teman belajar anak-anak Indonesia</strong> menuju masa depan yang lebih cerdas dan berprestasi.
        </p>
      </div>
    </div>
  );
}
