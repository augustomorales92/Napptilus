import { postData } from '../api/fetch'
import { getWithExpiry } from './ExpiryFuntions'

export const setCartItems = async (productCart, setValue) => {
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
