// Mriie PADL — public warning notice.
//
// SINGLE SOURCE OF TRUTH for everything the site says about the fraud matter.
// The banner, the home page and /notice all read from here, so there is one
// place to correct a fact and one place a lawyer has to review.
//
// RULES THIS FILE ENFORCES (they are the legal defence, not decoration):
//  1. `facts` = only things provable from bank records or written messages we
//     hold. Stated as fact. Never add a line here that rests on hearsay.
//  2. `allegations` = inferences and characterisations. Always published under
//     an "alleged, not yet tested by a court" heading. Never promote one to a
//     fact without a document.
//  3. Anything not yet verified stays behind a `false` flag below and simply
//     does not render. Do not hardcode it into the copy.
//  4. `nameIndividual` stays false until the lawyer signs off. The warning
//     works without a personal name; naming raises the risk (Indonesian
//     UU ITE 27A, KUHP 433, UU PDP 27/2022) without protecting anyone more.
//  5. Every change bumps `updated` and adds a line to `changelog`.

export const NOTICE = {
  updated: '2026-10-10',

  // --- Flags: flip to true ONLY when the underlying document exists ---------
  flags: {
    // Set once a police report (Laporan Polisi) has actually been lodged and
    // you hold the LP number / tanda bukti lapor.
    policeReportFiled: true,
    // Reports filed by other buyers, in Indonesia or abroad. Only flip when you
    // have seen the report yourself — not when someone says they filed one.
    otherReports: false,
    // Naming the individual publicly. Lawyer sign-off required — see rule 4.
    nameIndividual: false,
  },

  // Filled in when flags.policeReportFiled goes true.
  // Polda Bali: Berita Acara Penerimaan Laporan/Pengaduan, SPKT Polda Bali,
  // 19 Sep 2026 (receipt held; no LP number issued yet). SPF report number is
  // the one SPF confirmed to the press.
  policeReport: { date: '2026-09-19', unit: 'SPKT Polda Bali', spf: 'D/20260919/7009' },

  // Published coverage. Link to the article; never add a claim here that the
  // article itself does not make. `featured` renders as the large block.
  press: [
    {
      outlet: 'Baliwananews',
      place: 'Bali',
      date: '2026-10-08',
      featured: true,
      headline: {
        id: 'Diduga Ditipu, Pria Singapura Berpotensi Rugi Rp2,2 Miliar dalam Bisnis Perlengkapan Olahraga Padel di Bali',
        en: 'Allegedly Scammed: Singaporean Man Loses ~Rp2.2 Billion in Bali Padel Sports Gear Business',
      },
      url: {
        id: 'https://baliwananews.com/diduga-ditipu-pria-singapura-berpotensi-rugi-rp22-miliar-dalam-bisnis-perlengkapan-olahraga-padel-di-bali/',
        en: 'https://baliwananews.com/allegedly-scammed-singaporean-man-loses-rp2-2-billion-in-bali-padel-sports-gear-business/',
      },
    },
    {
      outlet: 'Mothership',
      place: 'Singapore',
      date: '2026-09-28',
      headline: { en: 'S’porean man invests S$368,000 in sports business with Batam woman over 7 months, fears he might have been scammed' },
      url: { en: 'https://mothership.sg/2026/09/sporean-man-padel-sports-gear-indonesia-allegedly-scammed/' },
    },
    {
      outlet: 'Shin Min Daily News',
      place: 'Singapore',
      date: '2026-09-27',
      headline: { en: '印尼女邀投资不见回酬 男子恐损15.7万元报警' },
      url: { en: 'https://www.zaobao.com.sg/news/singapore/story20260927-9743477' },
    },
  ],

  // Only used when flags.nameIndividual is true.
  individual: { name: '', role: 'founder and operator of Mriie Padel' },

  // Channels people are still being asked to pay through. Naming the payment
  // rails is the part of the warning that actually stops a transfer.
  // Naming the payment rails is the part of the warning that actually stops a
  // transfer. Company/brand identifiers only — never a personal account.
  payChannels: [
    'CIMB Niaga 800200907000 — "MRIIE OLAHRAGA BERSAMA"',
    '@mriie.padl',
    '@indopadel.camp',
  ],

  // Right-of-reply address. MUST be a mailbox Justin actually controls — a
  // bounced right of reply is worse than none. Leave empty and the notice
  // points at the /contact form (which pipes to Telegram) instead.
  // Do NOT use mriieolahragabersama@gmail.com: that is the company mailbox.
  contactEmail: '',

  changelog: [
    { date: '2026-09-16', text: 'Orders paused; payment processing removed from this website.' },
    { date: '2026-09-20', text: 'Full public notice published, replacing the shop.' },
    { date: '2026-10-10', text: 'Added press coverage (Baliwananews, Mothership, Shin Min), police reports in Bali and Singapore, and reports from other affected people.' },
  ],
}

// Reader-facing copy, per locale. Prose lives here rather than in the i18n
// string map because it is legal text: it must be translated as a block and
// reviewed as a block.
export const NOTICE_COPY = {
  en: {
    bannerTitle: 'Warning — do not send money',
    bannerBody:
      'Buyers, resellers, factories and an investor have paid for Mriie Padel orders and production and received neither the goods nor their money back. Do not pay anyone offering Mriie Padel products, wholesale stock or an investment. This website is not taking orders and has never processed a payment. The matter is with lawyers in Indonesia, has been reported to police in Bali and Singapore, and has been covered by Baliwananews, Mothership and Shin Min.',
    bannerCta: 'Read the full notice',
    kicker: 'Public notice',
    title: 'Do not send money to anyone using the Mriie Padel name.',
    updatedLabel: 'Last updated',
    lede:
      'This website is no longer a shop. It has never taken an order and has never processed a payment. It is published by the investor who funded Mriie Padel production, and it now exists for one reason: to reach the buyers, resellers, factories and investors who are still being asked to pay.',

    pressKicker: 'In the news',
    pressFeaturedLabel: 'Reported in Bali',
    pressRead: 'Read the article',
    pressAlso: 'Also reported in Singapore',

    patternHeading: 'More than one person has been affected',
    pattern: [
      'Baliwananews reported that a Pilates studio in Bali, named as the buyer of 300 padel racket covers in one production order, confirmed it had never placed that order.',
      'In early September 2026, the operator of Mriie Padel told the investor in writing that the company bank account had been frozen after another buyer reported the matter to police.',
      'Since the coverage, another buyer has contacted us to say they also paid into the same CIMB Niaga account.',
      'Padel camps are still being advertised on social media under @indopadel.camp, and a new pilates venture has been promoted. Do not pay deposits for padel camps, clinics, classes or events offered under these names.',
    ],

    whoHeading: 'Who this is for',
    who: [
      'Buyers and resellers who have paid for padel covers, bags, cups, towels or bikinis and are waiting for them.',
      'Clubs, stores and distributors who have been offered wholesale or consignment stock.',
      'Factories and printers who have produced goods for Mriie Padel, or who have been shown a payment receipt they cannot trace at their bank.',
      'Anyone who has been invited to invest in Mriie Padel stock, production batches or a shop.',
    ],

    payHeading: 'Do not pay into:',
    doHeading: 'What to do',
    do: [
      'Do not transfer money for Mriie Padel goods to any bank account, e-wallet, Instagram account or WhatsApp number — retail, wholesale, production or investment.',
      'If you have already paid and received nothing, report it using the form on this site. Keep your transfer receipts and your full chat history; do not delete them.',
      'If you are a factory or supplier who has not been paid, contact us — we hold the payment records for the batches we funded.',
    ],

    factsHeading: 'What is documented',
    factsIntro:
      'The following are stated as fact because they are supported by bank statements and written messages we hold and can produce.',
    facts: [
      'Between 12 February and 17 August 2026, IDR 4,883,004,149 was transferred from the investor to the account "MRIIE OLAHRAGA BERSAMA" at CIMB Niaga (800200907000), to pay for specific agreed production batches.',
      'IDR 2,799,520,852 was paid back. As at 7 September 2026, IDR 2,083,483,297 — about SGD 157,000 — has not been returned, and no goods have been delivered against it. The figures are reconciled line by line against bank statements on both sides.',
      '25 production batches that were paid for in full have not been delivered.',
      'The contracted printing factory in Yogyakarta has delivered nothing since June 2026.',
      'On 7 September 2026, the operator of Mriie Padel confirmed in writing that she was holding money paid by named buyers, and offered to return the investment money. Nothing has been returned since.',
      'The CIMB Niaga account above stopped operating at the beginning of September 2026.',
      '"PT Mriie Olahraga Bersama" is not a PT. The business registry record behind NIB 0708250133921 is a perseroan perorangan — a one-person micro-company with a single owner and no other shareholders.',
    ],

    allegHeading: 'What is alleged',
    allegIntro:
      'The following are allegations. They have not been tested by any court, and nothing on this page should be read as a finding of guilt.',
    allegations: [
      'That production batches and customer orders were presented to the investor, and money was collected for them, without the goods being produced or delivered.',
      'That money paid by buyers and by the investor has been retained without lawful excuse.',
    ],

    stepsHeading: 'What is being done',
    steps: [
      'An Indonesian law firm was instructed on 6 September 2026 and is acting on recovery.',
      'A complete evidence file — bank reconciliation, every transfer receipt, and the full message history — has been prepared for counsel and for the police.',
      'Civil recovery of the outstanding sum is being pursued in Indonesia.',
    ],
    stepPolice: 'Criminal complaints were lodged on {date} with {unit} (Bali Regional Police) and with the Singapore Police Force (report {spf}). The Singapore Police Force has confirmed to the media that the report was received.',
    stepOtherReports: 'We are aware of further complaints made to police by other buyers.',

    replyHeading: 'Right of reply and corrections',
    reply:
      'Every statement on this page is based on a document we hold. If you are named or identified here and believe anything on this page is inaccurate, send us the correction and the evidence for it. We will check it, correct any error promptly, and record the change below. A reply you send will be published alongside this notice if you ask for that.',
    replyCta: 'Send a correction or a reply',
    replyEmail: 'You can also write to {email}.',

    changelogHeading: 'Changes to this notice',

    reportCta: 'Report an order you paid for and never received',
    fullNoticeCta: 'Read the full notice',
  },

  id: {
    bannerTitle: 'Peringatan — jangan mengirim uang',
    bannerBody:
      'Pembeli, reseller, pabrik, dan seorang investor telah membayar pesanan dan produksi Mriie Padel, lalu tidak menerima barang maupun pengembalian uangnya. Jangan membayar siapa pun yang menawarkan produk, stok grosir, atau investasi Mriie Padel. Situs ini tidak menerima pesanan dan tidak pernah memproses pembayaran. Perkara ini sedang ditangani kuasa hukum di Indonesia, telah dilaporkan ke polisi di Bali dan Singapura, dan telah diberitakan Baliwananews, Mothership, dan Shin Min.',
    bannerCta: 'Baca pemberitahuan lengkap',
    kicker: 'Pemberitahuan resmi',
    title: 'Jangan mengirim uang kepada siapa pun yang menggunakan nama Mriie Padel.',
    updatedLabel: 'Terakhir diperbarui',
    lede:
      'Situs ini bukan lagi toko. Situs ini tidak pernah menerima pesanan dan tidak pernah memproses pembayaran. Situs ini diterbitkan oleh investor yang mendanai produksi Mriie Padel, dan kini ada untuk satu alasan: menjangkau para pembeli, reseller, pabrik, dan investor yang masih diminta membayar.',

    pressKicker: 'Diberitakan media',
    pressFeaturedLabel: 'Diberitakan di Bali',
    pressRead: 'Baca beritanya',
    pressAlso: 'Juga diberitakan di Singapura',

    patternHeading: 'Bukan hanya satu orang yang dirugikan',
    pattern: [
      'Baliwananews memberitakan bahwa sebuah studio pilates di Bali, yang disebut sebagai pembeli 300 sarung raket padel dalam satu pesanan produksi, menyatakan tidak pernah memesan.',
      'Pada awal September 2026, pengelola Mriie Padel menyampaikan secara tertulis kepada investor bahwa rekening perusahaan diblokir setelah pembeli lain melapor ke polisi.',
      'Sejak berita terbit, seorang pembeli lain menghubungi kami dan menyatakan bahwa ia juga mentransfer ke rekening CIMB Niaga yang sama.',
      'Padel camp masih dipromosikan di media sosial melalui @indopadel.camp, dan sebuah usaha pilates baru juga dipromosikan. Jangan membayar DP untuk padel camp, klinik, kelas, atau acara yang ditawarkan dengan nama-nama ini.',
    ],

    whoHeading: 'Untuk siapa pemberitahuan ini',
    who: [
      'Pembeli dan reseller yang sudah membayar cover padel, tas, cup, handuk, atau bikini dan masih menunggu barangnya.',
      'Klub, toko, dan distributor yang ditawari stok grosir atau konsinyasi.',
      'Pabrik dan percetakan yang telah memproduksi barang untuk Mriie Padel, atau yang ditunjukkan bukti transfer yang tidak dapat mereka telusuri di bank.',
      'Siapa pun yang diajak berinvestasi pada stok, batch produksi, atau toko Mriie Padel.',
    ],

    payHeading: 'Jangan membayar ke:',
    doHeading: 'Apa yang sebaiknya Anda lakukan',
    do: [
      'Jangan mentransfer uang untuk barang Mriie Padel ke rekening bank, e-wallet, akun Instagram, atau nomor WhatsApp mana pun — baik untuk pembelian eceran, grosir, produksi, maupun investasi.',
      'Jika Anda sudah membayar dan tidak menerima barang, laporkan melalui formulir di situs ini. Simpan bukti transfer dan seluruh riwayat percakapan Anda; jangan dihapus.',
      'Jika Anda pabrik atau pemasok yang belum dibayar, hubungi kami — kami memegang catatan pembayaran untuk batch yang kami danai.',
    ],

    factsHeading: 'Fakta yang terdokumentasi',
    factsIntro:
      'Hal-hal berikut dinyatakan sebagai fakta karena didukung rekening koran bank dan pesan tertulis yang kami pegang dan dapat kami tunjukkan.',
    facts: [
      'Antara 12 Februari dan 17 Agustus 2026, dana sebesar Rp4.883.004.149 ditransfer dari investor ke rekening "MRIIE OLAHRAGA BERSAMA" di CIMB Niaga (800200907000) untuk membayar batch produksi tertentu yang telah disepakati.',
      'Sebesar Rp2.799.520.852 telah dikembalikan. Per 7 September 2026, sebesar Rp2.083.483.297 — sekitar SGD 157.000 — belum dikembalikan dan tidak ada barang yang diserahkan atas dana tersebut. Angka-angka ini direkonsiliasi baris demi baris dengan rekening koran kedua belah pihak.',
      '25 batch produksi yang telah dibayar lunas tidak pernah diserahkan.',
      'Pabrik percetakan rekanan di Yogyakarta tidak menyerahkan apa pun sejak Juni 2026.',
      'Pada 7 September 2026, pengelola Mriie Padel menyatakan secara tertulis bahwa ia memegang uang yang dibayarkan oleh pembeli-pembeli yang disebut namanya, dan menawarkan untuk mengembalikan uang investasi tersebut. Sampai sekarang tidak ada yang dikembalikan.',
      'Rekening CIMB Niaga di atas berhenti beroperasi pada awal September 2026.',
      '"PT Mriie Olahraga Bersama" bukan sebuah PT. Data registrasi usaha di balik NIB 0708250133921 adalah perseroan perorangan — perusahaan mikro satu orang dengan pemilik tunggal dan tanpa pemegang saham lain.',
    ],

    allegHeading: 'Hal yang masih berupa dugaan',
    allegIntro:
      'Hal-hal berikut adalah dugaan. Belum diuji oleh pengadilan mana pun, dan tidak ada bagian dari halaman ini yang boleh dibaca sebagai putusan bersalah.',
    allegations: [
      'Bahwa batch produksi dan pesanan pelanggan disampaikan kepada investor dan uangnya ditagih, tanpa barangnya diproduksi atau diserahkan.',
      'Bahwa uang yang dibayarkan oleh para pembeli dan oleh investor ditahan tanpa alasan yang sah.',
    ],

    stepsHeading: 'Langkah yang sedang ditempuh',
    steps: [
      'Sebuah kantor hukum di Indonesia telah ditunjuk pada 6 September 2026 dan sedang menangani pemulihan dana.',
      'Berkas bukti lengkap — rekonsiliasi bank, seluruh bukti transfer, dan riwayat pesan lengkap — telah disiapkan untuk kuasa hukum dan kepolisian.',
      'Upaya perdata untuk menagih sisa dana sedang ditempuh di Indonesia.',
    ],
    stepPolice: 'Laporan pidana telah disampaikan pada {date} ke {unit} dan ke Kepolisian Singapura (laporan {spf}). Kepolisian Singapura telah mengonfirmasi kepada media bahwa laporan tersebut telah diterima.',
    stepOtherReports: 'Kami mengetahui adanya laporan polisi lain yang dibuat oleh pembeli lain.',

    replyHeading: 'Hak jawab dan koreksi',
    reply:
      'Setiap pernyataan di halaman ini didasarkan pada dokumen yang kami pegang. Jika Anda disebut atau dapat dikenali di halaman ini dan menilai ada yang tidak akurat, kirimkan koreksi beserta buktinya kepada kami. Kami akan memeriksanya, segera memperbaiki kekeliruan, dan mencatat perubahannya di bawah. Jawaban Anda akan kami muat bersama pemberitahuan ini bila Anda memintanya.',
    replyCta: 'Kirim koreksi atau hak jawab',
    replyEmail: 'Anda juga dapat menulis ke {email}.',

    changelogHeading: 'Perubahan pada pemberitahuan ini',

    reportCta: 'Laporkan pesanan yang sudah dibayar tetapi tidak pernah diterima',
    fullNoticeCta: 'Baca pemberitahuan lengkap',
  },

  es: {
    bannerTitle: 'Advertencia — no envíes dinero',
    bannerBody:
      'Compradores, revendedores, fábricas y un inversor han pagado pedidos y producción de Mriie Padel y no han recibido ni la mercancía ni su dinero. No pagues a nadie que ofrezca productos, stock mayorista o una inversión de Mriie Padel. Este sitio no acepta pedidos y nunca ha procesado un pago. El asunto está en manos de abogados en Indonesia, se ha denunciado a la policía en Bali y Singapur, y lo han publicado Baliwananews, Mothership y Shin Min.',
    bannerCta: 'Leer el aviso completo',
    kicker: 'Aviso público',
    title: 'No envíes dinero a nadie que use el nombre Mriie Padel.',
    updatedLabel: 'Última actualización',
    lede:
      'Este sitio web ya no es una tienda. Nunca ha aceptado un pedido ni ha procesado un pago. Lo publica el inversor que financió la producción de Mriie Padel y hoy existe por una sola razón: llegar a los compradores, revendedores, fábricas e inversores a quienes todavía se les pide que paguen.',

    pressKicker: 'En los medios',
    pressFeaturedLabel: 'Publicado en Bali',
    pressRead: 'Leer el artículo',
    pressAlso: 'También publicado en Singapur',

    patternHeading: 'No es una sola persona afectada',
    pattern: [
      'Baliwananews informó de que un estudio de pilates de Bali, señalado como comprador de 300 fundas de pala de pádel en un pedido de producción, confirmó que nunca hizo ese pedido.',
      'A principios de septiembre de 2026, la operadora de Mriie Padel comunicó por escrito al inversor que la cuenta bancaria de la empresa había sido bloqueada después de que otro comprador lo denunciara a la policía.',
      'Desde la publicación, otro comprador nos ha contactado para decir que también pagó en la misma cuenta de CIMB Niaga.',
      'Se siguen anunciando campus de pádel en redes sociales bajo @indopadel.camp, y se ha promocionado un nuevo negocio de pilates. No pagues depósitos por campus, clínicas, clases o eventos de pádel ofrecidos con estos nombres.',
    ],

    whoHeading: 'A quién va dirigido',
    who: [
      'Compradores y revendedores que han pagado fundas de pádel, bolsas, vasos, toallas o bikinis y siguen esperándolos.',
      'Clubes, tiendas y distribuidores a los que se ha ofrecido stock mayorista o en consignación.',
      'Fábricas e imprentas que han producido para Mriie Padel, o a las que se ha mostrado un comprobante de pago que su banco no puede rastrear.',
      'Cualquier persona invitada a invertir en stock, lotes de producción o una tienda de Mriie Padel.',
    ],

    payHeading: 'No pagues a:',
    doHeading: 'Qué hacer',
    do: [
      'No transfieras dinero por productos de Mriie Padel a ninguna cuenta bancaria, monedero electrónico, cuenta de Instagram o número de WhatsApp — ni minorista, ni mayorista, ni producción, ni inversión.',
      'Si ya has pagado y no has recibido nada, repórtalo con el formulario de este sitio. Conserva tus comprobantes de transferencia y todo el historial de chat; no los borres.',
      'Si eres una fábrica o proveedor al que no se ha pagado, escríbenos — conservamos los registros de pago de los lotes que financiamos.',
    ],

    factsHeading: 'Lo que está documentado',
    factsIntro:
      'Lo siguiente se afirma como hecho porque está respaldado por extractos bancarios y mensajes escritos que conservamos y podemos aportar.',
    facts: [
      'Entre el 12 de febrero y el 17 de agosto de 2026 se transfirieron IDR 4.883.004.149 del inversor a la cuenta "MRIIE OLAHRAGA BERSAMA" de CIMB Niaga (800200907000) para pagar lotes de producción concretos y acordados.',
      'Se devolvieron IDR 2.799.520.852. A 7 de septiembre de 2026, IDR 2.083.483.297 — unos SGD 157.000 — no se han devuelto y no se ha entregado mercancía alguna a cambio. Las cifras están conciliadas línea por línea con los extractos bancarios de ambas partes.',
      '25 lotes de producción pagados en su totalidad no se han entregado.',
      'La imprenta contratada en Yogyakarta no ha entregado nada desde junio de 2026.',
      'El 7 de septiembre de 2026, la operadora de Mriie Padel confirmó por escrito que tenía en su poder dinero pagado por compradores identificados y ofreció devolver el dinero de la inversión. Desde entonces no se ha devuelto nada.',
      'La cuenta de CIMB Niaga citada dejó de operar a principios de septiembre de 2026.',
      '"PT Mriie Olahraga Bersama" no es una PT. El registro mercantil correspondiente al NIB 0708250133921 es una perseroan perorangan: una microempresa unipersonal con un único propietario y sin otros socios.',
    ],

    allegHeading: 'Lo que se alega',
    allegIntro:
      'Lo siguiente son alegaciones. No han sido juzgadas por ningún tribunal y nada en esta página debe leerse como una declaración de culpabilidad.',
    allegations: [
      'Que se presentaron al inversor lotes de producción y pedidos de clientes por los que se cobró dinero, sin que la mercancía se produjera ni se entregara.',
      'Que el dinero pagado por los compradores y por el inversor se ha retenido sin causa legítima.',
    ],

    stepsHeading: 'Qué se está haciendo',
    steps: [
      'El 6 de septiembre de 2026 se contrató a un bufete indonesio, que actúa para recuperar los fondos.',
      'Se ha preparado un expediente probatorio completo — conciliación bancaria, todos los comprobantes de transferencia y el historial íntegro de mensajes — para los abogados y para la policía.',
      'Se tramita en Indonesia la reclamación civil del importe pendiente.',
    ],
    stepPolice: 'El {date} se presentaron denuncias penales ante {unit} (Policía Regional de Bali) y ante la Policía de Singapur (denuncia {spf}). La Policía de Singapur ha confirmado a los medios que recibió la denuncia.',
    stepOtherReports: 'Tenemos constancia de otras denuncias presentadas ante la policía por otros compradores.',

    replyHeading: 'Derecho de réplica y correcciones',
    reply:
      'Cada afirmación de esta página se basa en un documento que conservamos. Si apareces nombrado o identificado aquí y consideras que algo es inexacto, envíanos la corrección y su prueba. Lo verificaremos, corregiremos cualquier error sin demora y dejaremos constancia del cambio más abajo. Si lo pides, publicaremos tu respuesta junto al aviso.',
    replyCta: 'Enviar una corrección o una réplica',
    replyEmail: 'También puedes escribir a {email}.',

    changelogHeading: 'Cambios en este aviso',

    reportCta: 'Reportar un pedido pagado y nunca recibido',
    fullNoticeCta: 'Leer el aviso completo',
  },
}

export const noticeCopy = (locale) => NOTICE_COPY[locale] || NOTICE_COPY.en
