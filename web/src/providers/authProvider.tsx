import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { AuthContext, type AuthContextValue } from '../context/authContext'
import { clearToken, getToken } from '../services/apiClient'
import { getCurrentUser, loginApi, logout as logoutApi } from '../services/auth'
import type { LoginPayload } from '../data/request'

const LOGGEDIN_USER_QUERY_KEY = ['me'] as const

export function AuthProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient()
  const [token, setTokenState] = useState<string | null>(() => getToken())

  
  const loggedUserQuery = useQuery({
    queryKey: LOGGEDIN_USER_QUERY_KEY,
    queryFn: getCurrentUser,
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
    retry: false,
  })

  
  useEffect(() => {
    if (token && loggedUserQuery.isError) {
      clearToken()
      setTokenState(null)
      queryClient.removeQueries({ queryKey: LOGGEDIN_USER_QUERY_KEY })
    }
  }, [token, loggedUserQuery.isError, queryClient])

  const login = useCallback(
    async (payload: LoginPayload) => {
      const auth = await loginApi(payload)
      setTokenState(auth.accessToken)
      queryClient.setQueryData(LOGGEDIN_USER_QUERY_KEY, auth.user)
    },
    [queryClient],
  )

  const logout = useCallback(async () => {
    await logoutApi() 
    setTokenState(null)
    queryClient.removeQueries({ queryKey: LOGGEDIN_USER_QUERY_KEY })
  }, [queryClient])

  const value: AuthContextValue = {
    user: loggedUserQuery.data ?? null,
    token,
    isAuthenticated: !!token,
    isLoading: !!token && loggedUserQuery.isLoading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
