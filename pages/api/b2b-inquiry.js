export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { name, company, email, country, type, units, message } = req.body

  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Name and email are required' })
  }

  console.log('=== B2B INQUIRY RECEIVED ===')
  console.log(`Timestamp: ${new Date().toISOString()}`)
  console.log(`Name: ${name}`)
  console.log(`Company: ${company}`)
  console.log(`Email: ${email}`)
  console.log(`Country: ${country}`)
  console.log(`Type: ${type}`)
  console.log(`Units: ${units}`)
  console.log(`Message: ${message}`)
  console.log('===========================')

  return res.status(200).json({ success: true, message: 'Inquiry received. We will be in touch within 2 business days.' })
}
