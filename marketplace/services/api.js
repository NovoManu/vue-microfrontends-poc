import { getToken } from './cookieStorageManager'
import idb from './idb'

const BASE_URL = 'https://api.dev.cloud.sennder.com/marketplace/api'

const getHeaders = () => ({
  'Content-Type': 'application/json',
  'authorization': `Token ${getToken()}`,
  'authorization-host': 'https://sennder-sennder.stg.sennder.com',
})

function handleErrors(response) {
  const Exception = function (code, message) {
    this.code = code
    this.message = message
  }
  if (!response.ok) throw new Exception(response.status, response.statusText)
  return response
}

export const getOrders = async () => {
  try {
    let orders = await idb.orders.get('saved_lanes=false')
    if (orders) return orders
    const response = await fetch(`${BASE_URL}/marketplace/orders?saved_lanes=false`, {
      method: 'GET',
      headers: getHeaders(),
    })
    await handleErrors(response)
    orders = await response.json()
    await idb.orders.set('saved_lanes=false', orders)
    return orders
  } catch (e) {
    throw e
  }
}
