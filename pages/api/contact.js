export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required' })
  }

  console.log('=== CONTACT FORM SUBMISSION ===')
  console.log(`Timestamp: ${new Date().toISOString()}`)
  console.log(`Name: ${name}`)
  console.log(`Email: ${email}`)
  console.log(`Subject: ${subject}`)
  console.log(`Message: ${message}`)
  console.log('================================')

  return res.status(200).json({ success: true, message: 'Message received. We will reply within 24 hours.' })
}
