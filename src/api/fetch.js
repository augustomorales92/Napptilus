import { BASE_API_URL } from "./config"

export const getDataById = async (id) => {
  const res = await fetch(
    `${BASE_API_URL}/product/${id}`
  )
  const data = await res.json()
  return data
}

export const getAllData = async () => {
  const res = await fetch(
    `${BASE_API_URL}/product`
  )
  const data = await res.json()
  return data
}

export const postData = async (productCart) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productCart)
  }

  const res = await fetch(
    `${BASE_API_URL}/cart`,
    requestOptions
  )
  const data = await res.json()
  return data
}
