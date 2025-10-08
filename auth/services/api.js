const BASE_URL = 'https://reqres.in/api'

export const login = async ({ email, password }) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'reqres-free-v1'
    },
    body: JSON.stringify({ email, password })
  })
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error || 'Login failed')
  }

  return data.token
}

export const logout = async () => {
  try {
    await fetch(`${BASE_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': 'reqres-free-v1'
      },
      body: JSON.stringify({})
    })
  } catch (error) {
    throw new Error(error.message || 'Logout failed')
  }
}

export const register = async ({ email, password }) => {
  const username = email.split('@')[0]
  try {
  const res = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'reqres-free-v1'
    },
    body: JSON.stringify({ username, email, password })
  })
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error || 'Register failed')
    }
  return data.token
  } catch (error) {
    throw new Error(error.message || 'Register failed')
  }
}
