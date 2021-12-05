import { getToken } from './cookieStorageManager'

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

export const getOrders = () => {
  return fetch(`${BASE_URL}/marketplace/orders?saved_lanes=false`, {
    method: 'GET',
    headers: getHeaders(),
  })
    .then(handleErrors)
    .then(res => res.json())
    .catch(e => {
      throw e
    })
}
