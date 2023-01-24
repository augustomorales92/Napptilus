export const timeToExpire = 3600000

export const setWithExpiry = (key, value, ttl) => {
  const now = new Date()
  const item = {
    value: value,
    expiry: now.getTime() + ttl
  }
  localStorage.setItem(key, JSON.stringify(item))
}

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
