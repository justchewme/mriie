// Mriie PADL — lightweight i18n.
// Translation-by-source-string: t('English text') returns the locale's version,
// falling back to the English source. Add new UI strings to BOTH locale maps.
// Product copy is overridden per-locale via PRODUCT_I18N + localizeProduct().
import { useRouter } from 'next/router'

export const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'id', label: 'ID' },
]

const es = {
  // Layout
  'Help': 'Ayuda',
  'Bag': 'Cesta',
  'Thermal padel covers, bags and linen towels — handmade in Bali, shipped worldwide.':
    'Fundas térmicas de pádel, bolsas y toallas de lino — hechas a mano en Bali, con envío a todo el mundo.',
  'Our {area} shop on {street} is opening soon.': 'Nuestra tienda en {street}, {area}, abre muy pronto.',
  'Shop': 'Tienda',
  'FAQ': 'Preguntas frecuentes',
  'Padel in Bali guide': 'Guía de pádel en Bali',
  'Shipping & Delivery': 'Envíos y entrega',
  'Returns': 'Devoluciones',
  'Terms & Privacy': 'Términos y privacidad',
  'Contact': 'Contacto',
  'WhatsApp us': 'Escríbenos por WhatsApp',
  'Handmade in Bali': 'Hecho a mano en Bali',
  'Secured by Stripe': 'Pago seguro con Stripe',

  // Home
  'Handmade in Bali · Ships Worldwide': 'Hecho a mano en Bali · Envío mundial',
  'Thermal covers, court bags and linen towels in signature prints — each piece handmade by our artisans in Bali. Tap a swatch to see the colours.':
    'Fundas térmicas, bolsas de pista y toallas de lino con estampados exclusivos — cada pieza hecha a mano por nuestros artesanos en Bali. Toca una muestra para ver los colores.',
  'Add to bag': 'Añadir a la cesta',
  'Or buy this colour now': 'O compra este color ahora',
  'Added ✓': 'Añadido ✓',
  'in your bag': 'en tu cesta',
  'Colour:': 'Color:',
  'Handmade to order — we confirm your dispatch date within 24 hours':
    'Hecho a mano bajo pedido — confirmamos tu fecha de envío en 24 horas',
  'From a Bali workshop': 'Desde un taller de Bali',
  'Stitched in the village': 'Cosido en el pueblo',
  'Every cover, bag and towel is cut and sewn by hand by our artisans in Bali — over 10,000 pieces so far, shipped to players in six countries. Soon you can visit us too: our {area} shop on {street} is opening soon.':
    'Cada funda, bolsa y toalla se corta y cose a mano por nuestros artesanos en Bali — más de 10.000 piezas hasta hoy, enviadas a jugadores de seis países. Pronto podrás visitarnos: nuestra tienda en {street}, {area}, abre muy pronto.',
  'Stocked at City Padel Bali · Jungle Padel Lembongan · Zabbo Padel Batam':
    'Disponible en City Padel Bali · Jungle Padel Lembongan · Zabbo Padel Batam',
  'New to the island? Our guide to padel in Bali →': '¿De visita en Bali? Nuestra guía de pádel en la isla →',
  'Follow us — @{ig} ↗': 'Síguenos — @{ig} ↗',
  'Ordering': 'Cómo comprar',
  'Add your pieces and pay securely by card — checkout is handled by Stripe. Prefer to chat? Order via WhatsApp and pay by bank transfer instead. No account needed either way.':
    'Añade tus piezas y paga con tarjeta de forma segura — el pago lo gestiona Stripe. ¿Prefieres hablar? Haz tu pedido por WhatsApp y paga por transferencia. Sin necesidad de crear cuenta.',
  'Delivery': 'Entrega',
  'DHL Express worldwide at a flat {currency}{fee}, typically 5–10 business days. In Bali? Self-collection is free.':
    'DHL Express a todo el mundo por una tarifa fija de {currency}{fee}, normalmente de 5 a 10 días laborables. ¿Estás en Bali? La recogida es gratuita.',
  'More prints': 'Más estampados',
  'Every piece is handmade in 20+ signature prints — the swatches are just the start.':
    'Cada pieza se hace a mano en más de 20 estampados exclusivos — las muestras son solo el principio.',
  'Ask us on WhatsApp': 'Pregúntanos por WhatsApp',
  'to see them all.': 'para verlos todos.',
  'item': 'artículo',
  'items': 'artículos',
  'Checkout →': 'Tramitar pedido →',

  // Checkout
  'Checkout': 'Tramitar pedido',
  'Your bag': 'Tu cesta',
  'Your bag is empty': 'Tu cesta está vacía',
  'Add a cover, bag or towel and come back here to check out.':
    'Añade una funda, bolsa o toalla y vuelve aquí para completar tu pedido.',
  'Back to the shop': 'Volver a la tienda',
  'Remove': 'Eliminar',
  'Subtotal': 'Subtotal',
  'Choose below': 'Elige abajo',
  'Free': 'Gratis',
  'Total': 'Total',
  'Self-collection — Bali': 'Recogida — Bali',
  'We share the pickup point with you on WhatsApp': 'Te enviamos el punto de recogida por WhatsApp',
  'DHL Express — worldwide': 'DHL Express — todo el mundo',
  'Tracked door-to-door, typically 5–10 business days': 'Con seguimiento puerta a puerta, normalmente 5–10 días laborables',
  'Name': 'Nombre',
  'Your name': 'Tu nombre',
  'WhatsApp number': 'Número de WhatsApp',
  'Email': 'Email',
  'you@email.com (optional)': 'tu@email.com (opcional)',
  'Address': 'Dirección',
  'Street address': 'Calle y número',
  'City': 'Ciudad',
  'Postal code': 'Código postal',
  'Country': 'País',
  'Notes': 'Notas',
  'Anything else — other prints, gift wrapping, questions…': 'Cualquier otra cosa — otros estampados, envoltorio de regalo, preguntas…',
  'Please choose delivery or self-collection.': 'Elige entrega o recogida, por favor.',
  'Please tell us your name.': 'Dinos tu nombre, por favor.',
  'Please add your WhatsApp number so we can confirm your order.': 'Añade tu número de WhatsApp para confirmar tu pedido, por favor.',
  'Please fill in your delivery address and country.': 'Completa tu dirección de entrega y país, por favor.',
  'Could not start the card payment — please try again or order via WhatsApp.':
    'No se pudo iniciar el pago con tarjeta — inténtalo de nuevo o haz tu pedido por WhatsApp.',
  'Opening secure payment…': 'Abriendo pago seguro…',
  'Pay by card — {currency}{total}': 'Pagar con tarjeta — {currency}{total}',
  'Or order via WhatsApp': 'O pedir por WhatsApp',
  'Place order via WhatsApp': 'Hacer pedido por WhatsApp',
  'Card payments are processed securely by Stripe. Prefer to chat first? Order via WhatsApp and we confirm everything there.':
    'Los pagos con tarjeta los procesa Stripe de forma segura. ¿Prefieres hablar primero? Haz tu pedido por WhatsApp y lo confirmamos todo allí.',

  // Wholesale
  'Wholesale': 'Mayoristas',
  'For stores, clubs & distributors': 'Para tiendas, clubes y distribuidores',
  'Handmade in Bali, wholesale to the world — over 10,000 pieces supplied to partners in six countries. Made to order in your choice of 20+ signature prints, with custom co-branding available for clubs and stores.':
    'Hecho a mano en Bali, al por mayor para el mundo — más de 10.000 piezas suministradas a socios en seis países. Fabricado bajo pedido en más de 20 estampados exclusivos, con co-branding personalizado para clubes y tiendas.',
  'Trial orders from 100 pcs': 'Pedidos de prueba desde 100 uds',
  'Lead time 3–6 weeks': 'Plazo de producción 3–6 semanas',
  '50% deposit': '50% de depósito',
  'Custom logo +$4.50/pc': 'Logo personalizado +$4,50/ud',
  'pcs': 'uds',
  'pc': 'ud',
  'Start a wholesale conversation': 'Inicia una conversación mayorista',
  'Tell us where you are and roughly what you need — it opens straight into a WhatsApp chat with our founding team, with the catalogue to follow.':
    'Dinos dónde estás y aproximadamente qué necesitas — se abre directamente un chat de WhatsApp con nuestro equipo fundador, y te enviamos el catálogo.',
  'Company / club': 'Empresa / club',
  'Optional': 'Opcional',
  'e.g. Spain': 'p. ej. España',
  'Estimated quantities': 'Cantidades estimadas',
  'Anything else?': '¿Algo más?',
  'Custom prints, co-branding, timeline…': 'Estampados personalizados, co-branding, plazos…',
  'Please tell us your country.': 'Dinos tu país, por favor.',
  'Please enter a quantity for at least one product.': 'Indica una cantidad para al menos un producto, por favor.',
  'Prefer email?': '¿Prefieres email?',
  'Buying for a store or club? Wholesale tiers →': '¿Compras para una tienda o club? Tarifas mayoristas →',

  // WhatsApp placed screen
  'Almost there': 'Casi listo',
  'Press send in WhatsApp': 'Pulsa enviar en WhatsApp',
  'Your order is waiting in your WhatsApp chat — just press send. We’ll reply shortly to confirm your colours, stock and payment (bank transfer or card).':
    'Tu pedido te espera en tu chat de WhatsApp — solo pulsa enviar. Te responderemos en breve para confirmar colores, disponibilidad y pago (transferencia o tarjeta).',
  'WhatsApp didn’t open?': '¿No se abrió WhatsApp?',
  'Tap here to chat with us': 'Toca aquí para hablar con nosotros',
  'or email': 'o escribe a',
  'Done — clear my bag': 'Listo — vaciar mi cesta',

  // Success
  'Thank you': 'Gracias',
  'Payment received': 'Pago recibido',
  'Thank you for your order': 'Gracias por tu pedido',
  'Questions?': '¿Preguntas?',
  'Chat with us on WhatsApp': 'Habla con nosotros por WhatsApp',
}

const id = {
  // Layout
  'Help': 'Bantuan',
  'Bag': 'Tas',
  'Thermal padel covers, bags and linen towels — handmade in Bali, shipped worldwide.':
    'Sarung padel thermal, tas, dan handuk linen — buatan tangan di Bali, dikirim ke seluruh dunia.',
  'Our {area} shop on {street} is opening soon.': 'Toko kami di {street}, {area}, segera buka.',
  'Shop': 'Toko',
  'FAQ': 'Tanya jawab',
  'Padel in Bali guide': 'Panduan padel di Bali',
  'Shipping & Delivery': 'Pengiriman',
  'Returns': 'Pengembalian',
  'Terms & Privacy': 'Ketentuan & privasi',
  'Contact': 'Kontak',
  'WhatsApp us': 'WhatsApp kami',
  'Handmade in Bali': 'Buatan tangan di Bali',
  'Secured by Stripe': 'Aman dengan Stripe',

  // Home
  'Handmade in Bali · Ships Worldwide': 'Buatan Tangan di Bali · Kirim ke Seluruh Dunia',
  'Thermal covers, court bags and linen towels in signature prints — each piece handmade by our artisans in Bali. Tap a swatch to see the colours.':
    'Sarung thermal, tas lapangan, dan handuk linen dengan motif khas — setiap piece dibuat tangan oleh pengrajin kami di Bali. Ketuk swatch untuk melihat warnanya.',
  'Add to bag': 'Masukkan ke tas',
  'Or buy this colour now': 'Atau beli warna ini sekarang',
  'Added ✓': 'Ditambahkan ✓',
  'in your bag': 'di tas kamu',
  'Colour:': 'Warna:',
  'Handmade to order — we confirm your dispatch date within 24 hours':
    'Dibuat sesuai pesanan — tanggal kirim dikonfirmasi dalam 24 jam',
  'From a Bali workshop': 'Dari bengkel kerja di Bali',
  'Stitched in the village': 'Dijahit di desa',
  'Every cover, bag and towel is cut and sewn by hand by our artisans in Bali — over 10,000 pieces so far, shipped to players in six countries. Soon you can visit us too: our {area} shop on {street} is opening soon.':
    'Setiap sarung, tas, dan handuk dipotong dan dijahit tangan oleh pengrajin kami di Bali — lebih dari 10.000 piece sejauh ini, dikirim ke pemain di enam negara. Sebentar lagi kamu juga bisa mampir: toko kami di {street}, {area}, segera buka.',
  'Stocked at City Padel Bali · Jungle Padel Lembongan · Zabbo Padel Batam':
    'Tersedia di City Padel Bali · Jungle Padel Lembongan · Zabbo Padel Batam',
  'New to the island? Our guide to padel in Bali →': 'Baru di Bali? Panduan padel kami →',
  'Follow us — @{ig} ↗': 'Ikuti kami — @{ig} ↗',
  'Ordering': 'Cara pesan',
  'Add your pieces and pay securely by card — checkout is handled by Stripe. Prefer to chat? Order via WhatsApp and pay by bank transfer instead. No account needed either way.':
    'Pilih barangmu dan bayar aman pakai kartu — pembayaran diproses Stripe. Lebih suka chat? Pesan lewat WhatsApp dan bayar transfer. Tanpa perlu akun.',
  'Delivery': 'Pengiriman',
  'DHL Express worldwide at a flat {currency}{fee}, typically 5–10 business days. In Bali? Self-collection is free.':
    'DHL Express ke seluruh dunia dengan tarif flat {currency}{fee}, biasanya 5–10 hari kerja. Di Bali? Ambil sendiri gratis.',
  'More prints': 'Motif lainnya',
  'Every piece is handmade in 20+ signature prints — the swatches are just the start.':
    'Setiap piece dibuat tangan dalam 20+ motif khas — swatch di sini baru permulaan.',
  'Ask us on WhatsApp': 'Tanya kami di WhatsApp',
  'to see them all.': 'untuk lihat semuanya.',
  'item': 'barang',
  'items': 'barang',
  'Checkout →': 'Checkout →',

  // Checkout
  'Checkout': 'Checkout',
  'Your bag': 'Tas kamu',
  'Your bag is empty': 'Tas kamu masih kosong',
  'Add a cover, bag or towel and come back here to check out.':
    'Tambahkan sarung, tas, atau handuk lalu kembali ke sini untuk checkout.',
  'Back to the shop': 'Kembali ke toko',
  'Remove': 'Hapus',
  'Subtotal': 'Subtotal',
  'Choose below': 'Pilih di bawah',
  'Free': 'Gratis',
  'Total': 'Total',
  'Self-collection — Bali': 'Ambil sendiri — Bali',
  'We share the pickup point with you on WhatsApp': 'Titik pengambilan kami infokan lewat WhatsApp',
  'DHL Express — worldwide': 'DHL Express — seluruh dunia',
  'Tracked door-to-door, typically 5–10 business days': 'Dengan pelacakan sampai alamat, biasanya 5–10 hari kerja',
  'Name': 'Nama',
  'Your name': 'Nama kamu',
  'WhatsApp number': 'Nomor WhatsApp',
  'Email': 'Email',
  'you@email.com (optional)': 'kamu@email.com (opsional)',
  'Address': 'Alamat',
  'Street address': 'Nama jalan dan nomor',
  'City': 'Kota',
  'Postal code': 'Kode pos',
  'Country': 'Negara',
  'Notes': 'Catatan',
  'Anything else — other prints, gift wrapping, questions…': 'Ada lagi? — motif lain, bungkus kado, pertanyaan…',
  'Please choose delivery or self-collection.': 'Silakan pilih pengiriman atau ambil sendiri.',
  'Please tell us your name.': 'Silakan isi nama kamu.',
  'Please add your WhatsApp number so we can confirm your order.': 'Silakan isi nomor WhatsApp untuk konfirmasi pesanan.',
  'Please fill in your delivery address and country.': 'Silakan lengkapi alamat pengiriman dan negara.',
  'Could not start the card payment — please try again or order via WhatsApp.':
    'Pembayaran kartu gagal dimulai — coba lagi atau pesan lewat WhatsApp.',
  'Opening secure payment…': 'Membuka pembayaran aman…',
  'Pay by card — {currency}{total}': 'Bayar pakai kartu — {currency}{total}',
  'Or order via WhatsApp': 'Atau pesan lewat WhatsApp',
  'Place order via WhatsApp': 'Pesan lewat WhatsApp',
  'Card payments are processed securely by Stripe. Prefer to chat first? Order via WhatsApp and we confirm everything there.':
    'Pembayaran kartu diproses aman oleh Stripe. Mau ngobrol dulu? Pesan lewat WhatsApp dan semuanya kami konfirmasi di sana.',

  // Wholesale
  'Wholesale': 'Grosir',
  'For stores, clubs & distributors': 'Untuk toko, klub & distributor',
  'Handmade in Bali, wholesale to the world — over 10,000 pieces supplied to partners in six countries. Made to order in your choice of 20+ signature prints, with custom co-branding available for clubs and stores.':
    'Buatan tangan di Bali, grosir ke seluruh dunia — lebih dari 10.000 piece dipasok ke mitra di enam negara. Dibuat sesuai pesanan dengan pilihan 20+ motif khas, tersedia co-branding khusus untuk klub dan toko.',
  'Trial orders from 100 pcs': 'Pesanan percobaan mulai 100 pcs',
  'Lead time 3–6 weeks': 'Waktu produksi 3–6 minggu',
  '50% deposit': 'DP 50%',
  'Custom logo +$4.50/pc': 'Logo custom +$4,50/pc',
  'pcs': 'pcs',
  'pc': 'pc',
  'Start a wholesale conversation': 'Mulai obrolan grosir',
  'Tell us where you are and roughly what you need — it opens straight into a WhatsApp chat with our founding team, with the catalogue to follow.':
    'Beritahu lokasi dan perkiraan kebutuhanmu — langsung terbuka chat WhatsApp dengan tim pendiri kami, katalog menyusul.',
  'Company / club': 'Perusahaan / klub',
  'Optional': 'Opsional',
  'e.g. Spain': 'mis. Spanyol',
  'Estimated quantities': 'Perkiraan jumlah',
  'Anything else?': 'Ada lagi?',
  'Custom prints, co-branding, timeline…': 'Motif custom, co-branding, jadwal…',
  'Please tell us your country.': 'Silakan isi negara kamu.',
  'Please enter a quantity for at least one product.': 'Silakan isi jumlah untuk minimal satu produk.',
  'Prefer email?': 'Lebih suka email?',
  'Buying for a store or club? Wholesale tiers →': 'Beli untuk toko atau klub? Harga grosir →',

  // WhatsApp placed screen
  'Almost there': 'Hampir selesai',
  'Press send in WhatsApp': 'Tekan kirim di WhatsApp',
  'Your order is waiting in your WhatsApp chat — just press send. We’ll reply shortly to confirm your colours, stock and payment (bank transfer or card).':
    'Pesananmu sudah siap di chat WhatsApp — tinggal tekan kirim. Kami segera balas untuk konfirmasi warna, stok, dan pembayaran (transfer atau kartu).',
  'WhatsApp didn’t open?': 'WhatsApp tidak terbuka?',
  'Tap here to chat with us': 'Ketuk di sini untuk chat dengan kami',
  'or email': 'atau email',
  'Done — clear my bag': 'Selesai — kosongkan tas',

  // Success
  'Thank you': 'Terima kasih',
  'Payment received': 'Pembayaran diterima',
  'Thank you for your order': 'Terima kasih atas pesananmu',
  'Questions?': 'Ada pertanyaan?',
  'Chat with us on WhatsApp': 'Chat dengan kami di WhatsApp',
}

const DICTS = { es, id }

// Interpolates {tokens} after lookup: t('Hi {name}', {name: 'Ana'})
export function useT() {
  const { locale } = useRouter()
  const dict = DICTS[locale] || null
  const t = (s, vars) => {
    let out = (dict && dict[s]) || s
    if (vars) for (const [k, v] of Object.entries(vars)) out = out.split(`{${k}}`).join(v)
    return out
  }
  return { t, locale: locale || 'en' }
}

// --- Product copy overrides ---
const PRODUCT_I18N = {
  es: {
    cover: {
      name: 'Funda Térmica de Pádel',
      tagline: 'Funda térmica para pala · bolsillo con cremallera',
      description:
        'Mantiene tu pala fresca en pleno partido. Forro térmico aislante, bolsillo con cremallera para objetos de valor, correa ajustable — y una bolsa guardapolvo con cada funda. Cada una hecha a mano en Bali.',
      specs: [
        'Compatible con todas las palas de pádel estándar',
        'Forro térmico aislante · exterior tejido con estampados exclusivos',
        'Bolsillo con cremallera · correa de hombro ajustable',
        'Incluye bolsa guardapolvo con cordón',
        'Cuidado: limpieza localizada, secar al aire lejos del sol directo',
      ],
    },
    bag: {
      name: 'Bolsa Térmica de Pádel',
      tagline: 'Bolsa de pista con compartimento térmico para palas',
      description:
        'Todo el partido en una bolsa. Un bolso amplio de pista con compartimento térmico para palas, bolsillos laterales para botella y bolas, y espacio para todo lo demás. Hecha a mano en Bali, para vivirla.',
      specs: [
        'El compartimento térmico admite 2 palas de pádel',
        'Bolsillos laterales para botella y bolas · bolsillo interior para objetos de valor',
        'Exterior tejido con estampados exclusivos · asas resistentes',
        'Cuidado: limpieza localizada, secar al aire lejos del sol directo',
      ],
    },
    towel: {
      name: 'Toalla Deportiva de Lino',
      tagline: 'Rayas tejidas · secado rápido · a juego con tu funda',
      description:
        'Una toalla de pista que se gana su sitio en la foto. Mezcla de lino tejido, secado rápido, con los mismos estampados que nuestras fundas — hecha para combinar.',
      specs: [
        '30 × 75 cm — tamaño de pista',
        'Mezcla de lino tejido · secado rápido',
        'Estampados a juego con nuestras fundas y bolsas',
        'Cuidado: lavar a máquina en frío, secar al aire',
      ],
    },
  },
  id: {
    cover: {
      name: 'Sarung Padel Thermal',
      tagline: 'Sarung raket berinsulasi · kantong ritsleting',
      description:
        'Menjaga raketmu tetap adem di tengah panasnya permainan. Lapisan thermal berinsulasi, kantong ritsleting untuk barang berharga, tali yang bisa diatur — plus dust bag serut di setiap sarung. Semuanya buatan tangan di Bali.',
      specs: [
        'Muat semua raket padel standar',
        'Lapisan thermal berinsulasi · bagian luar tenun bermotif khas',
        'Kantong ritsleting · tali bahu bisa diatur',
        'Termasuk dust bag serut',
        'Perawatan: lap bagian kotor, angin-anginkan jauh dari sinar matahari langsung',
      ],
    },
    bag: {
      name: 'Tas Padel Thermal',
      tagline: 'Tas lapangan dengan kompartemen raket berinsulasi',
      description:
        'Semua perlengkapan main dalam satu tas. Tote lapangan yang lega dengan kompartemen raket berinsulasi, kantong samping untuk botol dan bola, dan ruang untuk semua lainnya. Buatan tangan di Bali.',
      specs: [
        'Kompartemen berinsulasi muat 2 raket padel',
        'Kantong samping untuk botol dan bola · kantong dalam untuk barang berharga',
        'Bagian luar tenun bermotif khas · pegangan kokoh',
        'Perawatan: lap bagian kotor, angin-anginkan jauh dari sinar matahari langsung',
      ],
    },
    towel: {
      name: 'Handuk Olahraga Linen',
      tagline: 'Garis tenun · cepat kering · serasi dengan sarungmu',
      description:
        'Handuk pinggir lapangan yang pantas masuk foto. Campuran linen tenun, cepat kering, dengan motif yang sama seperti sarung kami — dibuat untuk serasi.',
      specs: [
        '30 × 75 cm — ukuran pinggir lapangan',
        'Campuran linen tenun · cepat kering',
        'Motif serasi dengan sarung dan tas kami',
        'Perawatan: cuci mesin air dingin, angin-anginkan',
      ],
    },
  },
}

export const localizeProduct = (product, locale) => {
  const o = PRODUCT_I18N[locale]?.[product.id]
  return o ? { ...product, ...o } : product
}
