import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Manajemen Data Warga',
    imgSrc: '/img/manajemen-data-warga.gif',
    description: (
      <>
        Cara menambah, mengubah, dan mengelola database kependudukan warga Anda.
      </>
    ),
  },
  {
    title: 'Keuangan & Kas RT',
    imgSrc: '/img/keuangan-kas-rt.gif',
    description: (
      <>
        Mencatat iuran bulanan, pengeluaran, dan membagikan laporan kas kepada warga secara transparan.
      </>
    ),
  },
  {
    title: 'Pembuatan Surat Warga',
    imgSrc: '/img/pembuatan-surat-warga.gif',
    description: (
      <>
        Buat surat untuk kebutuhan administrasi warga hanya dengan input NIK, surat siap di unduh dan otomatis masuk ke dalam arsip RT.
      </>
    ),
  },
  {
    title: 'AI Assistant',
    imgSrc: '/img/grup-whatsapp-asisten.gif',
    description: (
      <>
        Gunakan kecerdasan buatan untuk menyusun notulen rapat secara otomatis dan membaca gambar (Vision) dengan cepat.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--6', 'margin-bottom--lg')}>
      <div className="glass-card">
        <div className="text--center">
          <img src={imgSrc} alt={title} className="feature-img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
