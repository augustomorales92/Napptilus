import { postData } from '../api/fetch'
import { getWithExpiry } from './ExpiryFuntions'

export const setCartItems = async (productCart, value,setValue) => {
  const res = await postData(productCart)
  const responseValue = res?.count
  const currentValue = value
  const totalValue = currentValue + responseValue
  const activeCart = getWithExpiry('cart-items')
  if (activeCart !== 'expired') {
    setValue(totalValue)
  } else {
    setValue(0)
    return activeCart
  }
}
