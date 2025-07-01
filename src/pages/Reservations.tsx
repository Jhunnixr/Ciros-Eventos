import React, { useState, useEffect } from 'react'
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { saveReservation, getUserReservations, Reservation } from '../lib/storage'
import { Link } from 'react-router-dom'

const Reservations = () => {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    special_requests: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [userReservations, setUserReservations] = useState<Reservation[]>([])

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || ''
      }))
      fetchUserReservations()
    }
  }, [user])

  const fetchUserReservations = () => {
    if (!user) return
    const reservations = getUserReservations(user.id)
    setUserReservations(reservations)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) {
      setError('Debes iniciar sesión para hacer una reserva')
      return
    }

    setLoading(true)
    setError('')

    try {
      saveReservation({
        userId: user.id,
        ...formData,
        status: 'pending'
      })

      setSuccess(true)
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        special_requests: ''
      })
      fetchUserReservations()
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError('Error al crear la reserva')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmada'
      case 'pending':
        return 'Pendiente'
      case 'cancelled':
        return 'Cancelada'
      default:
        return status
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Inicia sesión para hacer reservas
          </h2>
          <p className="text-gray-600 mb-8">
            Necesitas una cuenta para poder reservar una mesa en Ciros
          </p>
          <div className="space-x-4">
            <Link to="/login" className="btn-primary">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="btn-secondary">
              Crear Cuenta
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Reservar Mesa
          </h1>
          <p className="text-xl text-gray-600">
            Asegura tu lugar en Ciros para una experiencia gastronómica única
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reservation Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Nueva Reserva
            </h2>

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg mb-6 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                ¡Reserva creada exitosamente! Te contactaremos pronto para confirmar.
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="+51 987 654 321"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Fecha
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Hora
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Seleccionar hora</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                  <Users className="inline w-4 h-4 mr-1" />
                  Número de Personas
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="input-field"
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="special_requests" className="block text-sm font-medium text-gray-700 mb-1">
                  <MessageSquare className="inline w-4 h-4 mr-1" />
                  Solicitudes Especiales (Opcional)
                </label>
                <textarea
                  id="special_requests"
                  name="special_requests"
                  rows={3}
                  value={formData.special_requests}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Alergias, celebraciones especiales, preferencias de mesa..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creando reserva...' : 'Reservar Mesa'}
              </button>
            </form>
          </div>

          {/* User Reservations */}
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Mis Reservas
            </h2>

            {userReservations.length === 0 ? (
              <p className="text-gray-600 text-center py-8">
                No tienes reservas aún. ¡Haz tu primera reserva!
              </p>
            ) : (
              <div className="space-y-4">
                {userReservations.map((reservation) => (
                  <div key={reservation.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {new Date(reservation.date).toLocaleDateString('es-ES', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p className="text-gray-600">
                          {reservation.time} - {reservation.guests} personas
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(reservation.status)}`}>
                        {getStatusText(reservation.status)}
                      </span>
                    </div>
                    {reservation.special_requests && (
                      <p className="text-sm text-gray-600 mt-2">
                        <strong>Solicitudes:</strong> {reservation.special_requests}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservations