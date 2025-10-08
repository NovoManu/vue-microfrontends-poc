import { getToken } from './cookieStorageManager'

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
  // Return fake user data instead of making API call
  return Promise.resolve({
    id: 1,
    email: 'eve.holt@reqres.in',
    first_name: 'Eve',
    last_name: 'Holt',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
    role: 'admin',
    company: 'Vue Microfrontends POC',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  })
}
