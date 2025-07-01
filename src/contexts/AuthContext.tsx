import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, getCurrentUser, removeCurrentUser, registerUser, loginUser, saveUser } from '../lib/storage'

interface AuthContextType {
  user: User | null
  loading: boolean
  signUp: (email: string, password: string, name: string) => Promise<{ error?: string }>
  signIn: (email: string, password: string) => Promise<{ error?: string }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing user on mount
    const currentUser = getCurrentUser()
    setUser(currentUser)
    setLoading(false)
  }, [])

  const signUp = async (email: string, password: string, name: string) => {
    const result = registerUser(email, password, name)
    if (result.success) {
      const loginResult = loginUser(email, password)
      if (loginResult.success && loginResult.user) {
        setUser(loginResult.user)
        saveUser(loginResult.user)
      }
      return {}
    } else {
      return { error: result.error }
    }
  }

  const signIn = async (email: string, password: string) => {
    const result = loginUser(email, password)
    if (result.success && result.user) {
      setUser(result.user)
      saveUser(result.user)
      return {}
    } else {
      return { error: result.error }
    }
  }

  const signOut = async () => {
    setUser(null)
    removeCurrentUser()
  }

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}