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
  'Important notice': 'Aviso importante',
  'mriie.com is not taking orders and has never processed a payment. Orders placed through Instagram (@mriie.padl), WhatsApp or bank transfer were handled by the brand’s Indonesian operator, not by this website. If you paid for an order that has not arrived, please report it here with your WhatsApp number. Reports are being compiled for the lawyers handling this matter.': 'mriie.com no acepta pedidos y nunca ha procesado un pago. Los pedidos realizados por Instagram (@mriie.padl), WhatsApp o transferencia bancaria fueron gestionados por la operadora indonesia de la marca, no por este sitio web. Si pagaste un pedido que no ha llegado, repórtalo aquí con tu número de WhatsApp. Los reportes se están recopilando para los abogados que llevan este asunto.',
  'Report an undelivered order': 'Reportar un pedido no entregado',
  'Orders are paused — this website is not taking payments.': 'Los pedidos están en pausa — este sitio no acepta pagos.',
  'Orders are paused': 'Pedidos en pausa',
  'This website is not taking orders or payments at the moment. If you paid for an order that has not arrived, please report it and we will get back to you.': 'Este sitio no acepta pedidos ni pagos por el momento. Si pagaste un pedido que no ha llegado, repórtalo y te responderemos.',
  'Contact': 'Contacto',
  'If you paid for a Mriie Padel order that has not arrived, tell us what happened below. Every message goes straight to the person compiling these reports and you will get a personal reply.': 'Si pagaste un pedido de Mriie Padel que no ha llegado, cuéntanos qué pasó abajo. Cada mensaje llega directamente a la persona que recopila estos reportes y recibirás una respuesta personal.',
  'Please include: what you ordered, the date, the amount, how you paid (bank transfer, Instagram, WhatsApp) and who you paid. Leave your WhatsApp number so we can reach you.': 'Incluye: qué pediste, la fecha, el importe, cómo pagaste (transferencia, Instagram, WhatsApp) y a quién. Deja tu número de WhatsApp para poder contactarte.',
  'Your WhatsApp number (with country code)': 'Tu número de WhatsApp (con código de país)',
  'I paid for an order that has not arrived': 'Pagué un pedido que no ha llegado',
  'General question': 'Pregunta general',
  'Wholesale / partnership': 'Mayorista / colaboración',
  'What you ordered, when, how much you paid, how and to whom — and what happened since.': 'Qué pediste, cuándo, cuánto pagaste, cómo y a quién — y qué ha pasado desde entonces.',
  'Send report': 'Enviar reporte',
  'Report received': 'Reporte recibido',
  'Thank you — it has been delivered and you will hear back on WhatsApp shortly.': 'Gracias — se ha entregado y recibirás respuesta por WhatsApp en breve.',
  'Leave your details here and we will reply personally.': 'Déjanos tus datos aquí y te responderemos personalmente.',
  'WhatsApp chat is not available at the moment. Send your message here instead — it reaches us directly.': 'El chat de WhatsApp no está disponible por ahora. Envíanos tu mensaje aquí — nos llega directamente.',
  'Use the contact form': 'Usa el formulario de contacto',
  'Handmade in Bali': 'Hecho a mano en Bali',
  'Secured by Stripe': 'Pago seguro con Stripe',

  // Home
  'Handmade in Bali · Ships Worldwide': 'Hecho a mano en Bali · Envío mundial',
  'Thermal covers, court bags and linen towels in signature prints — each piece handmade by our artisans in Bali. Tap a swatch to see the colours.':
    'Fundas térmicas, bolsas de pista y toallas de lino con estampados exclusivos — cada pieza hecha a mano por nuestros artesanos en Bali. Toca una muestra para ver los colores.',
  'Add to bag': 'Añadir a la cesta',
  'Or buy this colour now': 'O compra este color ahora',
  'Message us': 'Escríbenos',
  'Our WhatsApp is being upgraded right now. Send your message here instead — it reaches us instantly and we reply just as fast.': 'Nuestro WhatsApp se está actualizando en este momento. Envía tu mensaje aquí — nos llega al instante y respondemos igual de rápido.',
  'Send us a message': 'Envíanos un mensaje',
  'Prefer not to use WhatsApp, or it did not open? Leave your details here and we will reply personally.': '¿Prefieres no usar WhatsApp, o no se abrió? Déjanos tus datos y te responderemos personalmente.',
  'Message sent': 'Mensaje enviado',
  'Thank you — we have received it and will get back to you shortly.': 'Gracias: lo hemos recibido y te responderemos en breve.',
  'Your name': 'Tu nombre',
  'WhatsApp number or email': 'Número de WhatsApp o correo',
  'What would you like to ask or order?': '¿Qué quieres preguntar o pedir?',
  'Sending…': 'Enviando…',
  'Send message': 'Enviar mensaje',
  'You can also reach us on': 'También puedes contactarnos por',
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
  'Custom logo available': 'Logo personalizado disponible',
  'Tiered wholesale pricing — shared privately with the catalogue.': 'Precios mayoristas por volumen — compartidos en privado con el catálogo.',
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

  // Direct-to-Telegram forms (Aug 2026)
  'Request the catalogue & pricing': 'Solicita el catálogo y los precios',
  'Tell us where you are and roughly what you need — it goes straight to our founding team, and we reply personally with the private catalogue and pricing.':
    'Dinos dónde estás y aproximadamente qué necesitas — llega directamente a nuestro equipo fundador y te respondemos personalmente con el catálogo privado y los precios.',
  'Please add your WhatsApp number or email so we can reply.': 'Añade tu número de WhatsApp o tu correo para poder responderte, por favor.',
  'Something went wrong — please try again.': 'Algo salió mal — inténtalo de nuevo, por favor.',
  'Send inquiry': 'Enviar solicitud',
  'Inquiry sent': 'Solicitud enviada',
  'Thank you — the catalogue and wholesale pricing are on their way to you.': 'Gracias — el catálogo y los precios mayoristas van de camino.',
  'We could not send your order — please try again or WhatsApp us.': 'No pudimos enviar tu pedido — inténtalo de nuevo o escríbenos por WhatsApp.',
  'Order received': 'Pedido recibido',
  'Your order has reached us. We’ll message you on WhatsApp shortly to confirm your colours, stock and payment (bank transfer or card). Nothing has been charged.':
    'Tu pedido nos ha llegado. Te escribiremos por WhatsApp en breve para confirmar colores, disponibilidad y pago (transferencia o tarjeta). No se ha cobrado nada.',
  'Email us at': 'Escríbenos a',
  'Or order now, pay on confirmation': 'O pide ahora y paga al confirmar',
  'Place order — pay on confirmation': 'Haz tu pedido — paga al confirmar',
  'Card payments are processed securely by Stripe. Prefer not to pay by card? Place the order and we confirm payment (bank transfer or card) on WhatsApp — nothing is charged on this page.':
    'Los pagos con tarjeta se procesan de forma segura con Stripe. ¿Prefieres no pagar con tarjeta? Haz tu pedido y confirmamos el pago (transferencia o tarjeta) por WhatsApp — no se cobra nada en esta página.',
  'Your order reaches us instantly — we confirm stock, colours and payment on WhatsApp. Nothing is charged on this page.':
    'Tu pedido nos llega al instante — confirmamos disponibilidad, colores y pago por WhatsApp. No se cobra nada en esta página.',
  'Local courier — Indonesia': 'Mensajería local — Indonesia',
  'Cheapest within Indonesia — we confirm the exact rate on WhatsApp before you pay':
    'Lo más económico dentro de Indonesia — confirmamos la tarifa exacta por WhatsApp antes de pagar',
  'At cost': 'A precio de coste',
  'Confirmed on WhatsApp': 'Se confirma por WhatsApp',
  'Please fill in your delivery address.': 'Rellena tu dirección de entrega, por favor.',
  'Pop-up every Monday at Little Brew, Bali · 08.00–17.00': 'Pop-up todos los lunes en Little Brew, Bali · 08.00–17.00',

  // Audit build (21 Aug 2026)
  'Our Story': 'Nuestra historia',
  'Terms': 'Términos',
  'Privacy': 'Privacidad',
  'Our story — made by hand in Bali →': 'Nuestra historia — hecho a mano en Bali →',
  'Trusted by clubs & partners': 'Clubes y socios que confían en nosotros',
  'Wholesale partner to Padelbox.de, Germany — repeat production runs shipped to Europe.':
    'Socio mayorista de Padelbox.de, Alemania — producciones recurrentes enviadas a Europa.',
  '600 custom-branded covers produced for a single Pilates studio order.':
    '600 fundas personalizadas producidas para un solo pedido de un estudio de Pilates.',
  'Bulk orders shipped to clubs and resellers in Australia, Turkey and Thailand.':
    'Pedidos al por mayor enviados a clubes y distribuidores en Australia, Turquía y Tailandia.',
  'Consigned island-wide across Bali padel clubs — the covers you see on court are ours.':
    'En consignación por toda la isla en los clubes de pádel de Bali — las fundas que ves en pista son nuestras.',
  'B2B references available on request — ask on the wholesale page.':
    'Referencias B2B disponibles bajo petición — pídelas en la página de mayoristas.',
  'Track record': 'Trayectoria',
  'Billed in USD': 'Se cobra en USD',
  'Secure checkout by Stripe': 'Pago seguro con Stripe',
  '{n}-month workmanship guarantee': 'Garantía de fabricación de {n} meses',
  '▶ View post — loads Instagram': '▶ Ver publicación — carga Instagram',
  'Complete the set': 'Completa el conjunto',
  'Every piece comes in 20+ signature prints — ask on WhatsApp to see them all.':
    'Cada pieza existe en más de 20 estampados exclusivos — pídelos todos por WhatsApp.',
  'Please choose your delivery region.': 'Elige tu región de entrega, por favor.',
  'Deliver to': 'Entregar en',
  'Choose your region…': 'Elige tu región…',
  'Choose region': 'Elige región',
  'days': 'días',
  'From {currency}25': 'Desde {currency}25',
  'Tracked door-to-door — price and delivery time depend on your region':
    'Con seguimiento puerta a puerta — el precio y el plazo dependen de tu región',
  'Southeast Asia': 'Sudeste Asiático',
  'Australia, NZ & East Asia': 'Australia, NZ y Asia Oriental',
  'Middle East & Gulf': 'Oriente Medio y el Golfo',
  'USA & Canada': 'EE. UU. y Canadá',
  'Europe & UK': 'Europa y Reino Unido',
  'Tracked worldwide delivery from {currency}20 — Standard (EMS) or Express (DHL), priced by region. In Indonesia? Local courier at cost, or free self-collection in Bali.':
    'Envío mundial con seguimiento desde {currency}20 — Estándar (EMS) o Exprés (DHL), según región. ¿En Indonesia? Mensajería local a precio de coste o recogida gratuita en Bali.',
  'International delivery — worldwide': 'Envío internacional — todo el mundo',
  'Tracked to your door — price and delivery time depend on your region':
    'Con seguimiento hasta tu puerta — el precio y el plazo dependen de tu región',
  'From {currency}20': 'Desde {currency}20',
  'from': 'desde',
  'business days': 'días laborables',
  'Standard — EMS, tracked': 'Estándar — EMS, con seguimiento',
  'Express — DHL': 'Exprés — DHL',
  'More details': 'Más detalles',
  'Fewer details': 'Menos detalles',
  'Buy now': 'Comprar ahora',
  'Arrives in signature Mriie gift packaging': 'Llega en el empaquetado de regalo exclusivo de Mriie',
  'Speed': 'Velocidad',
  'or use the': 'o usa el',
  'contact form': 'formulario de contacto',
  'Flat fee anywhere in Indonesia — 2–5 business days, tracked':
    'Tarifa fija a cualquier punto de Indonesia — 2–5 días laborables, con seguimiento',
  'Prefer to chat?': '¿Prefieres hablar?',
  'WhatsApp us directly': 'Escríbenos directamente por WhatsApp',
  'Partners': 'Socios',
  'Partners & Wholesale': 'Socios y mayoristas',
  'Partner with Mriie': 'Asóciate con Mriie',
  'Buying for a store or club? Partner with us →': '¿Compras para una tienda o club? Asóciate con nosotros →',
  'pieces shipped': 'piezas enviadas',
  'countries supplied': 'países atendidos',
  'signature prints': 'estampados exclusivos',
  'trial order minimum': 'pedido de prueba mínimo',
  'Seen on court & in store': 'En pista y en tienda',
  'Our pieces on shelves, court-side and at events across Bali — tap any photo to see the moment on Instagram.':
    'Nuestras piezas en estanterías, a pie de pista y en eventos por todo Bali — toca cualquier foto para ver el momento en Instagram.',
  'Monday pop-up display': 'Pop-up de los lunes',
  'Stockist': 'Punto de venta',
  'Event prize partner': 'Socio de premios del evento',
  'Pop-up market': 'Mercado pop-up',
  'One parcel, one shipping fee': 'Un paquete, una sola tarifa de envío',
  'Shipping is {fee} whether the parcel holds one piece or three — right now that’s {per} per piece. One more piece and it drops to {next}.':
    'El envío cuesta {fee} lleve el paquete una pieza o tres — ahora mismo sale a {per} por pieza. Con una pieza más baja a {next}.',
  'Shipping is one flat fee for the whole parcel — every piece you add ships at no extra cost.':
    'El envío es una tarifa única por todo el paquete — cada pieza que añadas viaja sin coste extra.',
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
  'Important notice': 'Pemberitahuan penting',
  'mriie.com is not taking orders and has never processed a payment. Orders placed through Instagram (@mriie.padl), WhatsApp or bank transfer were handled by the brand’s Indonesian operator, not by this website. If you paid for an order that has not arrived, please report it here with your WhatsApp number. Reports are being compiled for the lawyers handling this matter.': 'mriie.com tidak menerima pesanan dan tidak pernah memproses pembayaran. Pesanan yang dibuat lewat Instagram (@mriie.padl), WhatsApp, atau transfer bank ditangani oleh operator merek di Indonesia, bukan oleh situs ini. Jika Anda sudah membayar pesanan yang belum sampai, laporkan di sini dengan nomor WhatsApp Anda. Laporan sedang dikumpulkan untuk pengacara yang menangani kasus ini.',
  'Report an undelivered order': 'Laporkan pesanan yang belum sampai',
  'Orders are paused — this website is not taking payments.': 'Pemesanan dihentikan sementara — situs ini tidak menerima pembayaran.',
  'Orders are paused': 'Pemesanan dihentikan sementara',
  'This website is not taking orders or payments at the moment. If you paid for an order that has not arrived, please report it and we will get back to you.': 'Situs ini sedang tidak menerima pesanan atau pembayaran. Jika Anda sudah membayar pesanan yang belum sampai, laporkan dan kami akan menghubungi Anda.',
  'Contact': 'Kontak',
  'If you paid for a Mriie Padel order that has not arrived, tell us what happened below. Every message goes straight to the person compiling these reports and you will get a personal reply.': 'Jika Anda sudah membayar pesanan Mriie Padel yang belum sampai, ceritakan apa yang terjadi di bawah ini. Setiap pesan langsung diterima oleh orang yang mengumpulkan laporan ini dan Anda akan mendapat balasan pribadi.',
  'Please include: what you ordered, the date, the amount, how you paid (bank transfer, Instagram, WhatsApp) and who you paid. Leave your WhatsApp number so we can reach you.': 'Sertakan: apa yang Anda pesan, tanggalnya, jumlahnya, cara bayar (transfer bank, Instagram, WhatsApp), dan kepada siapa Anda membayar. Tinggalkan nomor WhatsApp agar kami bisa menghubungi Anda.',
  'Your WhatsApp number (with country code)': 'Nomor WhatsApp Anda (dengan kode negara)',
  'I paid for an order that has not arrived': 'Saya sudah bayar tapi pesanan belum sampai',
  'General question': 'Pertanyaan umum',
  'Wholesale / partnership': 'Grosir / kemitraan',
  'What you ordered, when, how much you paid, how and to whom — and what happened since.': 'Apa yang Anda pesan, kapan, berapa yang dibayar, bagaimana dan kepada siapa — dan apa yang terjadi setelahnya.',
  'Send report': 'Kirim laporan',
  'Report received': 'Laporan diterima',
  'Thank you — it has been delivered and you will hear back on WhatsApp shortly.': 'Terima kasih — laporan sudah terkirim dan Anda akan segera dihubungi lewat WhatsApp.',
  'Leave your details here and we will reply personally.': 'Tinggalkan detail Anda di sini dan kami akan membalas secara pribadi.',
  'WhatsApp chat is not available at the moment. Send your message here instead — it reaches us directly.': 'Chat WhatsApp sedang tidak tersedia. Kirim pesan Anda di sini — langsung sampai ke kami.',
  'Use the contact form': 'Gunakan formulir kontak',
  'Handmade in Bali': 'Buatan tangan di Bali',
  'Secured by Stripe': 'Aman dengan Stripe',

  // Home
  'Handmade in Bali · Ships Worldwide': 'Buatan Tangan di Bali · Kirim ke Seluruh Dunia',
  'Thermal covers, court bags and linen towels in signature prints — each piece handmade by our artisans in Bali. Tap a swatch to see the colours.':
    'Sarung thermal, tas lapangan, dan handuk linen dengan motif khas — setiap piece dibuat tangan oleh pengrajin kami di Bali. Ketuk swatch untuk melihat warnanya.',
  'Add to bag': 'Masukkan ke tas',
  'Or buy this colour now': 'Atau beli warna ini sekarang',
  'Message us': 'Hubungi kami',
  'Our WhatsApp is being upgraded right now. Send your message here instead — it reaches us instantly and we reply just as fast.': 'WhatsApp kami sedang ditingkatkan saat ini. Kirim pesan Anda di sini — langsung sampai ke kami dan kami balas secepatnya.',
  'Send us a message': 'Kirim pesan kepada kami',
  'Prefer not to use WhatsApp, or it did not open? Leave your details here and we will reply personally.': 'Tidak ingin memakai WhatsApp, atau tidak terbuka? Tinggalkan data Anda di sini dan kami akan membalas langsung.',
  'Message sent': 'Pesan terkirim',
  'Thank you — we have received it and will get back to you shortly.': 'Terima kasih — pesan Anda sudah kami terima dan akan segera kami balas.',
  'Your name': 'Nama Anda',
  'WhatsApp number or email': 'Nomor WhatsApp atau email',
  'What would you like to ask or order?': 'Apa yang ingin Anda tanyakan atau pesan?',
  'Sending…': 'Mengirim…',
  'Send message': 'Kirim pesan',
  'You can also reach us on': 'Anda juga bisa menghubungi kami lewat',
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
  'Custom logo available': 'Logo custom tersedia',
  'Tiered wholesale pricing — shared privately with the catalogue.': 'Harga grosir bertingkat — dibagikan secara pribadi bersama katalog.',
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

  // Direct-to-Telegram forms (Aug 2026)
  'Request the catalogue & pricing': 'Minta katalog & harga',
  'Tell us where you are and roughly what you need — it goes straight to our founding team, and we reply personally with the private catalogue and pricing.':
    'Beri tahu lokasi Anda dan perkiraan kebutuhan — langsung sampai ke tim pendiri kami, dan kami balas secara pribadi dengan katalog privat beserta harga.',
  'Please add your WhatsApp number or email so we can reply.': 'Mohon isi nomor WhatsApp atau email agar kami bisa membalas.',
  'Something went wrong — please try again.': 'Terjadi kesalahan — silakan coba lagi.',
  'Send inquiry': 'Kirim permintaan',
  'Inquiry sent': 'Permintaan terkirim',
  'Thank you — the catalogue and wholesale pricing are on their way to you.': 'Terima kasih — katalog dan harga grosir sedang dikirim ke Anda.',
  'We could not send your order — please try again or WhatsApp us.': 'Kami tidak bisa mengirim pesanan Anda — coba lagi atau WhatsApp kami.',
  'Order received': 'Pesanan diterima',
  'Your order has reached us. We’ll message you on WhatsApp shortly to confirm your colours, stock and payment (bank transfer or card). Nothing has been charged.':
    'Pesanan Anda sudah sampai ke kami. Kami akan menghubungi Anda lewat WhatsApp untuk konfirmasi warna, stok, dan pembayaran (transfer bank atau kartu). Belum ada tagihan.',
  'Email us at': 'Email kami di',
  'Or order now, pay on confirmation': 'Atau pesan sekarang, bayar setelah konfirmasi',
  'Place order — pay on confirmation': 'Buat pesanan — bayar setelah konfirmasi',
  'Card payments are processed securely by Stripe. Prefer not to pay by card? Place the order and we confirm payment (bank transfer or card) on WhatsApp — nothing is charged on this page.':
    'Pembayaran kartu diproses aman oleh Stripe. Tidak ingin pakai kartu? Buat pesanan dan kami konfirmasi pembayaran (transfer bank atau kartu) lewat WhatsApp — tidak ada tagihan di halaman ini.',
  'Your order reaches us instantly — we confirm stock, colours and payment on WhatsApp. Nothing is charged on this page.':
    'Pesanan Anda langsung sampai ke kami — kami konfirmasi stok, warna, dan pembayaran lewat WhatsApp. Tidak ada tagihan di halaman ini.',
  'Local courier — Indonesia': 'Kurir lokal — Indonesia',
  'Cheapest within Indonesia — we confirm the exact rate on WhatsApp before you pay':
    'Paling hemat untuk seluruh Indonesia — ongkir pasti kami konfirmasi lewat WhatsApp sebelum Anda bayar',
  'At cost': 'Sesuai ongkir',
  'Confirmed on WhatsApp': 'Dikonfirmasi via WhatsApp',
  'Please fill in your delivery address.': 'Mohon isi alamat pengiriman Anda.',
  'Pop-up every Monday at Little Brew, Bali · 08.00–17.00': 'Pop-up setiap Senin di Little Brew, Bali · 08.00–17.00',

  // Audit build (21 Aug 2026)
  'Our Story': 'Kisah Kami',
  'Terms': 'Ketentuan',
  'Privacy': 'Privasi',
  'Our story — made by hand in Bali →': 'Kisah kami — buatan tangan di Bali →',
  'Trusted by clubs & partners': 'Dipercaya klub & mitra',
  'Wholesale partner to Padelbox.de, Germany — repeat production runs shipped to Europe.':
    'Mitra grosir Padelbox.de, Jerman — produksi berulang dikirim ke Eropa.',
  '600 custom-branded covers produced for a single Pilates studio order.':
    '600 sarung custom berlogo diproduksi untuk satu pesanan studio Pilates.',
  'Bulk orders shipped to clubs and resellers in Australia, Turkey and Thailand.':
    'Pesanan besar dikirim ke klub dan reseller di Australia, Turki, dan Thailand.',
  'Consigned island-wide across Bali padel clubs — the covers you see on court are ours.':
    'Konsinyasi di klub-klub padel seluruh Bali — sarung yang Anda lihat di lapangan adalah buatan kami.',
  'B2B references available on request — ask on the wholesale page.':
    'Referensi B2B tersedia atas permintaan — tanyakan di halaman grosir.',
  'Track record': 'Rekam jejak',
  'Billed in USD': 'Ditagih dalam USD',
  'Secure checkout by Stripe': 'Checkout aman oleh Stripe',
  '{n}-month workmanship guarantee': 'Garansi pengerjaan {n} bulan',
  '▶ View post — loads Instagram': '▶ Lihat post — memuat Instagram',
  'Complete the set': 'Lengkapi setnya',
  'Every piece comes in 20+ signature prints — ask on WhatsApp to see them all.':
    'Setiap produk hadir dalam 20+ motif khas — tanya lewat WhatsApp untuk melihat semuanya.',
  'Please choose your delivery region.': 'Mohon pilih wilayah pengiriman Anda.',
  'Deliver to': 'Kirim ke',
  'Choose your region…': 'Pilih wilayah Anda…',
  'Choose region': 'Pilih wilayah',
  'days': 'hari',
  'From {currency}25': 'Mulai {currency}25',
  'Tracked door-to-door — price and delivery time depend on your region':
    'Terlacak sampai pintu — harga dan lama kirim tergantung wilayah Anda',
  'Southeast Asia': 'Asia Tenggara',
  'Australia, NZ & East Asia': 'Australia, NZ & Asia Timur',
  'Middle East & Gulf': 'Timur Tengah & Teluk',
  'USA & Canada': 'AS & Kanada',
  'Europe & UK': 'Eropa & Inggris',
  'Tracked worldwide delivery from {currency}20 — Standard (EMS) or Express (DHL), priced by region. In Indonesia? Local courier at cost, or free self-collection in Bali.':
    'Pengiriman terlacak ke seluruh dunia mulai {currency}20 — Standar (EMS) atau Ekspres (DHL), sesuai wilayah. Di Indonesia? Kurir lokal sesuai ongkir, atau ambil sendiri gratis di Bali.',
  'International delivery — worldwide': 'Pengiriman internasional — seluruh dunia',
  'Tracked to your door — price and delivery time depend on your region':
    'Terlacak sampai pintu — harga dan lama kirim tergantung wilayah Anda',
  'From {currency}20': 'Mulai {currency}20',
  'from': 'mulai',
  'business days': 'hari kerja',
  'Standard — EMS, tracked': 'Standar — EMS, terlacak',
  'Express — DHL': 'Ekspres — DHL',
  'More details': 'Detail lengkap',
  'Fewer details': 'Tutup detail',
  'Buy now': 'Beli sekarang',
  'Arrives in signature Mriie gift packaging': 'Dikirim dalam kemasan hadiah khas Mriie',
  'Speed': 'Kecepatan',
  'or use the': 'atau lewat',
  'contact form': 'formulir kontak',
  'Flat fee anywhere in Indonesia — 2–5 business days, tracked':
    'Ongkir flat ke seluruh Indonesia — 2–5 hari kerja, terlacak',
  'Prefer to chat?': 'Lebih suka chat?',
  'WhatsApp us directly': 'WhatsApp kami langsung',
  'Partners': 'Mitra',
  'Partners & Wholesale': 'Mitra & Grosir',
  'Partner with Mriie': 'Bermitra dengan Mriie',
  'Buying for a store or club? Partner with us →': 'Beli untuk toko atau klub? Bermitra dengan kami →',
  'pieces shipped': 'produk terkirim',
  'countries supplied': 'negara tujuan',
  'signature prints': 'motif khas',
  'trial order minimum': 'minimum pesanan percobaan',
  'Seen on court & in store': 'Di lapangan & di toko',
  'Our pieces on shelves, court-side and at events across Bali — tap any photo to see the moment on Instagram.':
    'Produk kami di etalase, di pinggir lapangan, dan di berbagai acara di Bali — ketuk foto untuk melihat momennya di Instagram.',
  'Monday pop-up display': 'Display pop-up Senin',
  'Stockist': 'Stokis',
  'Event prize partner': 'Mitra hadiah acara',
  'Pop-up market': 'Pasar pop-up',
  'One parcel, one shipping fee': 'Satu paket, satu ongkos kirim',
  'Shipping is {fee} whether the parcel holds one piece or three — right now that’s {per} per piece. One more piece and it drops to {next}.':
    'Ongkirnya {fee} baik paketnya berisi satu maupun tiga — sekarang berarti {per} per barang. Tambah satu lagi, turun jadi {next}.',
  'Shipping is one flat fee for the whole parcel — every piece you add ships at no extra cost.':
    'Ongkir dihitung sekali untuk seluruh paket — setiap barang tambahan dikirim tanpa biaya ekstra.',
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
    'bag-men': {
      name: 'Bolsa de Pádel Hombre',
      tagline: 'La colección masculina · bolso de pista minimalista en negro',
      description:
        'Todo el partido en una bolsa — reducida al negro. El mismo bolso amplio de pista con compartimento térmico para palas y bolsillos laterales para botella y bolas, en un tejido carbón minimalista. Hecha a mano en Bali.',
      specs: [
        'El compartimento térmico admite 2 palas de pádel',
        'Bolsillos laterales para botella y bolas · bolsillo interior para objetos de valor',
        'Tejido carbón minimalista · asas resistentes',
        'Cuidado: limpieza localizada, secar al aire lejos del sol directo',
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
    'bag-men': {
      name: 'Tas Padel Pria',
      tagline: 'Koleksi pria · tote lapangan minimalis serba hitam',
      description:
        'Semua perlengkapan main dalam satu tas — tampil simpel dalam hitam. Tote lapangan lega yang sama dengan kompartemen raket berinsulasi dan kantong samping untuk botol dan bola, dalam tenun charcoal minimalis. Buatan tangan di Bali.',
      specs: [
        'Kompartemen berinsulasi muat 2 raket padel',
        'Kantong samping untuk botol dan bola · kantong dalam untuk barang berharga',
        'Tenun charcoal minimalis · pegangan kokoh',
        'Perawatan: lap bagian kotor, angin-anginkan jauh dari sinar matahari langsung',
      ],
    },
  },
}

export const localizeProduct = (product, locale) => {
  const o = PRODUCT_I18N[locale]?.[product.id]
  return o ? { ...product, ...o } : product
}
