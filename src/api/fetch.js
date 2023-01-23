export const getDataById = async (id) => {
    const res = await fetch(`https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/product/${id}`)
    const data = await res.json()
    return data
}

export const getAllData = async () => {
    const res = await fetch('https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/product')
    const data = await res.json()
    return data
  }


export const postData = async(productCart) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productCart),
    }
  
    const res = await fetch(
      'https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/cart',
      requestOptions,
    )
    const data = await res.json()
    return data
      
  }