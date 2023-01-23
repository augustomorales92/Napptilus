import { postData } from "../api/fetch"
export const setWithExpiry = (key, value, ttl) => {
	const now = new Date()
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
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
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key)
		return null
	}
	return item.value
}

export const setCartItemsNumber = async (productCart, currentCartItems, setValue) => {
    const res = await postData(productCart)
    const responseNumber = res?.count
    const totalItems = Number(currentCartItems) + responseNumber
    setValue(totalItems)
}