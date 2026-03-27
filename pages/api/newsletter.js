export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { email, source } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Valid email is required' })
  }

  console.log('=== NEWSLETTER SIGNUP ===')
  console.log(`Timestamp: ${new Date().toISOString()}`)
  console.log(`Email: ${email}`)
  console.log(`Source: ${source || 'unknown'}`)
  console.log('=========================')

  return res.status(200).json({ success: true, message: 'You are now subscribed to Mriie stories.' })
}
