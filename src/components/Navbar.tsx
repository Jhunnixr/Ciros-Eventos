import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { user, signOut } = useAuth()

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Reservas', href: '/reservations' },
    { name: 'Locales', href: '/menu' },
    { name: 'Reseñas', href: '/reviews' },
    { name: 'Contacto', href: '/contact' },
  ]

  const handleSignOut = async () => {
    await signOut()
    setIsOpen(false)
  }

  return (
    <nav className="bg-gradient-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-serif font-bold text-gold-400">
                Ciros
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`navbar-link ${
                  location.pathname === item.href
                    ? 'text-gold-400 border-b-2 border-gold-400'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-white text-sm">
                  Hola, {user.name || user.email}
                </span>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-white hover:text-gold-300 transition-colors"
                >
                  <LogOut size={16} />
                  <span>Salir</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="navbar-link flex items-center space-x-1"
                >
                  <User size={16} />
                  <span>Iniciar Sesión</span>
                </Link>
                <Link
                  to="/register"
                  className="btn-primary text-sm py-2 px-4"
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold-300 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-white hover:text-gold-300 transition-colors ${
                  location.pathname === item.href ? 'text-gold-400' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <div className="px-3 py-2 border-t border-gray-700">
                <p className="text-white text-sm mb-2">
                  Hola, {user.name || user.email}
                </p>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-white hover:text-gold-300 transition-colors"
                >
                  <LogOut size={16} />
                  <span>Salir</span>
                </button>
              </div>
            ) : (
              <div className="px-3 py-2 border-t border-gray-700 space-y-2">
                <Link
                  to="/login"
                  className="block text-white hover:text-gold-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="block btn-primary text-center text-sm py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar