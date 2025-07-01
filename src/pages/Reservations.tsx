import React, { useState, useEffect } from 'react'
import { Calendar, Clock, Users, MessageSquare, CheckCircle, Music, Utensils, Camera, Sparkles, Mic, Wine, Calculator } from 'lucide-react'
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
    guests: 100,
    eventType: '',
    additionalServices: [] as string[],
    special_requests: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [userReservations, setUserReservations] = useState<Reservation[]>([])

  const eventTypes = [
    'Boda',
    'Cumpleaños',
    'Promoción/Graduación',
    'Aniversario',
    'Evento Corporativo',
    'Fiesta Temática',
    'Quinceañero',
    'Bautizo',
    'Baby Shower',
    'Otro'
  ]

  const additionalServices = [
    { id: 'dj', name: 'DJ Profesional', price: 400, icon: <Music className="w-5 h-5" /> },
    { id: 'hora-loca', name: 'Hora Loca', price: 500, icon: <Mic className="w-5 h-5" /> },
    { id: 'bartender', name: 'Bartender', price: 300, icon: <Wine className="w-5 h-5" /> },
    { id: 'bocaditos', name: 'Bocaditos', price: 15, icon: <Utensils className="w-5 h-5" />, perPerson: true },
    { id: 'fotografia', name: 'Fotografía', price: 600, icon: <Camera className="w-5 h-5" /> },
    { id: 'decoracion', name: 'Decoración Temática', price: 350, icon: <Sparkles className="w-5 h-5" /> }
  ]

  const timeSlots = [
    '09:00 - 17:00',
    '10:00 - 18:00',
    '11:00 - 19:00',
    '12:00 - 20:00',
    '13:00 - 21:00',
    '14:00 - 22:00',
    '15:00 - 23:00',
    '16:00 - 24:00'
  ]

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

    if (formData.guests < 100) {
      setError('El mínimo de personas para reservar es 100')
      return
    }

    if (formData.guests > 300) {
      setError('El máximo de personas para el local es 300')
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
        guests: 100,
        eventType: '',
        additionalServices: [],
        special_requests: ''
      })
      fetchUserReservations()
      setTimeout(() => setSuccess(false), 5000)
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

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter(id => id !== serviceId)
        : [...prev.additionalServices, serviceId]
    }))
  }

  const calculateTotal = () => {
    let total = 38 * formData.guests // Precio base por cubierto

    formData.additionalServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId)
      if (service) {
        if (service.perPerson) {
          total += service.price * formData.guests
        } else {
          total += service.price
        }
      }
    })

    return total
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
            Inicia sesión para reservar el local
          </h2>
          <p className="text-gray-600 mb-8">
            Necesitas una cuenta para poder reservar nuestro local de eventos
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Reservar Local de Eventos
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Reserva nuestro local en Chimbote para tu evento especial
          </p>
          <div className="bg-gold-100 border border-gold-300 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-gold-800 font-semibold">
              💡 S/ 38 por cubierto | 8 horas de alquiler
            </p>
            <p className="text-gold-700 text-sm">
              Capacidad: 100 - 300 personas
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reservation Form */}
          <div className="lg:col-span-2 card p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Nueva Reserva
            </h2>

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg mb-6 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                ¡Reserva creada exitosamente! Te contactaremos pronto para confirmar los detalles.
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

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Evento
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Seleccionar tipo de evento</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Fecha del Evento
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
                    Horario (8 horas)
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Seleccionar horario</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                  <Users className="inline w-4 h-4 mr-1" />
                  Número de Invitados
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  required
                  min="100"
                  max="300"
                  value={formData.guests}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Mínimo 100, máximo 300"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Capacidad: 100 - 300 personas
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Servicios Adicionales
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {additionalServices.map((service) => (
                    <div key={service.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                      <input
                        type="checkbox"
                        id={service.id}
                        checked={formData.additionalServices.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                      />
                      <div className="flex items-center space-x-2 flex-grow">
                        {service.icon}
                        <div>
                          <label htmlFor={service.id} className="text-sm font-medium text-gray-900 cursor-pointer">
                            {service.name}
                          </label>
                          <p className="text-xs text-gray-600">
                            S/ {service.price}{service.perPerson ? ' por persona' : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
                  placeholder="Decoración específica, requerimientos especiales, alergias, etc."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando reserva...' : 'Solicitar Reserva'}
              </button>
            </form>
          </div>

          {/* Pricing Calculator & User Reservations */}
          <div className="space-y-6">
            {/* Pricing Calculator */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Cotización
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {formData.guests} personas × S/ 38
                  </span>
                  <span className="font-semibold">
                    S/ {(38 * formData.guests).toLocaleString()}
                  </span>
                </div>
                
                {formData.additionalServices.map(serviceId => {
                  const service = additionalServices.find(s => s.id === serviceId)
                  if (!service) return null
                  
                  const cost = service.perPerson ? service.price * formData.guests : service.price
                  return (
                    <div key={serviceId} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {service.name}
                        {service.perPerson && ` (${formData.guests} × S/ ${service.price})`}
                      </span>
                      <span>S/ {cost.toLocaleString()}</span>
                    </div>
                  )
                })}
                
                <div className="border-t pt-3 flex justify-between text-lg font-bold text-gold-600">
                  <span>Total Estimado</span>
                  <span>S/ {calculateTotal().toLocaleString()}</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                * Precio final sujeto a confirmación
              </p>
            </div>

            {/* User Reservations */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mis Reservas
              </h3>

              {userReservations.length === 0 ? (
                <p className="text-gray-600 text-center py-4">
                  No tienes reservas aún.
                </p>
              ) : (
                <div className="space-y-3">
                  {userReservations.slice(0, 3).map((reservation) => (
                    <div key={reservation.id} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <p className="font-medium text-gray-900 text-sm">
                            {reservation.eventType}
                          </p>
                          <p className="text-xs text-gray-600">
                            {new Date(reservation.date).toLocaleDateString('es-ES')} - {reservation.time}
                          </p>
                          <p className="text-xs text-gray-600">
                            {reservation.guests} personas
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(reservation.status)}`}>
                          {getStatusText(reservation.status)}
                        </span>
                      </div>
                    </div>
                  ))}
                  {userReservations.length > 3 && (
                    <p className="text-xs text-gray-500 text-center">
                      Y {userReservations.length - 3} reservas más...
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservations