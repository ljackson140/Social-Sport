import { apiFetch, clearToken, getToken, setToken } from './apiClient'
import type {
  AuthResponse,
  LoginPayload,
  SignupPayload,
  UserResponse,
} from '../data/request'


export async function signupApi(payload: SignupPayload): Promise<{ user: UserResponse }> {
  return apiFetch<{ user: UserResponse }>('/user/signup', {
    method: 'POST',
    body: payload,
  })
}


export async function loginApi(payload: LoginPayload): Promise<AuthResponse> {
  const auth = await apiFetch<AuthResponse>('/user/login', {
    method: 'POST',
    body: payload,
  })
  if (!auth?.accessToken) {
    throw new Error('No access token returned from server')
  }
  setToken(auth.accessToken)
  return auth
}

export async function logout() {
  try {
    await apiFetch('/user/logout', { method: 'POST' })
  } catch {
    // Ignore errors - we want to clear the token and log out the user even if the API call fails
  } finally {
    clearToken()
  }
}

export function isAuthenticated() {
  return !!getToken()
}
