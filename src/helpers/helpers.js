import { postData } from '../api/fetch'

export const setWithExpiry = (key, value, ttl) => {
  const now = new Date()
  const item = {
    value: value,
    expiry: now.getTime() + ttl
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export const timeToExpire = 3600000

export const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key)
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  if (now.getTime() > item.expiry && item.value > 0) {
    localStorage.removeItem(key)
    return 'expired'
  }
  return item.value
}

export const setCartItemsNumber = async (productCart, setValue) => {
  const res = await postData(productCart)
  const responseNumber = res?.count
  const activeCart = getWithExpiry('cart-items')
  if (activeCart !== 'expired') {
    setValue(responseNumber)
  } else {
    setValue(0)
    return activeCart
  }
}
