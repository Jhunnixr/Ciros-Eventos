// Local storage utilities for managing data without database
export interface User {
  id: string
  email: string
  name: string
}

export interface Reservation {
  id: string
  userId: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  special_requests: string | null
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at: string
}

export interface Review {
  id: string
  userId: string
  name: string
  rating: number
  comment: string
  created_at: string
}

// User management
export const saveUser = (user: User) => {
  localStorage.setItem('currentUser', JSON.stringify(user))
}

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('currentUser')
  return userStr ? JSON.parse(userStr) : null
}

export const removeCurrentUser = () => {
  localStorage.removeItem('currentUser')
}

export const registerUser = (email: string, password: string, name: string): { success: boolean; error?: string } => {
  const users = getUsers()
  
  if (users.find(u => u.email === email)) {
    return { success: false, error: 'El usuario ya existe' }
  }
  
  const newUser: User = {
    id: Date.now().toString(),
    email,
    name
  }
  
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  
  // Also save password (in real app, this would be hashed)
  const passwords = getPasswords()
  passwords[email] = password
  localStorage.setItem('passwords', JSON.stringify(passwords))
  
  return { success: true }
}

export const loginUser = (email: string, password: string): { success: boolean; user?: User; error?: string } => {
  const users = getUsers()
  const passwords = getPasswords()
  
  const user = users.find(u => u.email === email)
  if (!user || passwords[email] !== password) {
    return { success: false, error: 'Credenciales incorrectas' }
  }
  
  return { success: true, user }
}

const getUsers = (): User[] => {
  const usersStr = localStorage.getItem('users')
  return usersStr ? JSON.parse(usersStr) : []
}

const getPasswords = (): Record<string, string> => {
  const passwordsStr = localStorage.getItem('passwords')
  return passwordsStr ? JSON.parse(passwordsStr) : {}
}

// Reservations management
export const saveReservation = (reservation: Omit<Reservation, 'id' | 'created_at'>): Reservation => {
  const reservations = getReservations()
  const newReservation: Reservation = {
    ...reservation,
    id: Date.now().toString(),
    created_at: new Date().toISOString()
  }
  
  reservations.push(newReservation)
  localStorage.setItem('reservations', JSON.stringify(reservations))
  
  return newReservation
}

export const getReservations = (): Reservation[] => {
  const reservationsStr = localStorage.getItem('reservations')
  return reservationsStr ? JSON.parse(reservationsStr) : []
}

export const getUserReservations = (userId: string): Reservation[] => {
  return getReservations().filter(r => r.userId === userId)
}

// Reviews management
export const saveReview = (review: Omit<Review, 'id' | 'created_at'>): Review => {
  const reviews = getReviews()
  const newReview: Review = {
    ...review,
    id: Date.now().toString(),
    created_at: new Date().toISOString()
  }
  
  reviews.push(newReview)
  localStorage.setItem('reviews', JSON.stringify(reviews))
  
  return newReview
}

export const getReviews = (): Review[] => {
  const reviewsStr = localStorage.getItem('reviews')
  return reviewsStr ? JSON.parse(reviewsStr) : []
}