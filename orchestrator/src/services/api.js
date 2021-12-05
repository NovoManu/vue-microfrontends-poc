import { getToken } from './localStorageManager'

const BASE_URL = 'https://sennder-sennder.stg.sennder.com'

const getHeaders = () => ({
  'Content-Type': 'application/json',
  'authorization': `Token ${getToken()}`
})

function handleErrors(response) {
  const Exception = function (code, message) {
    this.code = code
    this.message = message
  }
  if (!response.ok) throw new Exception(response.status, response.statusText)
  return response
}

export const getMe = () => {
  return fetch(`${BASE_URL}/accounts/users/me`, {
    method: 'GET',
    headers: getHeaders(),
  })
    .then(handleErrors)
    .then(res => res.json())
    .catch(e => {
      throw e
    })
}
