export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { name, email, message } = req.body
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: process.env.WEB3FORM_KEY,
      from_name: name,
      email,
      message,
      subject: "Portfolio Contact"
    })
  })

  const json = await response.json()
  return res.status(response.status).json(json)
}
