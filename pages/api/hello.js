// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  res = await fetch(`http://localhost:1337/api/offer-cards`)
  const data = await res.json()
  res.status(200).json(data)
}
