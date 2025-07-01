import React from 'react'
import { Music, Users, Utensils, Camera, Sparkles, Clock, Mic, Wine, MapPin, Star } from 'lucide-react'

const Menu = () => {
  const venues = [
    {
      name: 'Salón Principal',
      description: 'Nuestro salón principal con capacidad para grandes eventos',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '100-200 personas',
      features: [
        'Pista de baile amplia',
        'Sistema de sonido profesional',
        'Iluminación LED',
        'Aire acondicionado',
        'Área de bar',
        'Cocina equipada'
      ],
      pricePerPerson: 38
    },
    {
      name: 'Salón VIP',
      description: 'Espacio exclusivo para eventos más íntimos pero elegantes',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '100-150 personas',
      features: [
        'Decoración premium',
        'Área VIP exclusiva',
        'Sistema audiovisual',
        'Servicio personalizado',
        'Terraza privada',
        'Estacionamiento'
      ],
      pricePerPerson: 45
    },
    {
      name: 'Salón Jardín',
      description: 'Perfecto para eventos al aire libre con ambiente natural',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '100-180 personas',
      features: [
        'Ambiente al aire libre',
        'Jardín decorativo',
        'Área techada',
        'Iluminación natural',
        'Espacio para ceremonia',
        'Zona de fotos'
      ],
      pricePerPerson: 42
    }
  ]

  const additionalServices = [
    {
      icon: <Music className="w-8 h-8 text-gold-500" />,
      name: 'DJ Profesional',
      description: 'Música en vivo con DJ experimentado y equipo de sonido',
      price: 'S/ 400'
    },
    {
      icon: <Mic className="w-8 h-8 text-gold-500" />,
      name: 'Hora Loca',
      description: 'Animación, show y entretenimiento para tu evento',
      price: 'S/ 500'
    },
    {
      icon: <Wine className="w-8 h-8 text-gold-500" />,
      name: 'Bartender',
      description: 'Servicio de bar profesional con cocteles y bebidas',
      price: 'S/ 300'
    },
    {
      icon: <Utensils className="w-8 h-8 text-gold-500" />,
      name: 'Bocaditos',
      description: 'Variedad de bocaditos y aperitivos para tu evento',
      price: 'S/ 15 por persona'
    },
    {
      icon: <Camera className="w-8 h-8 text-gold-500" />,
      name: 'Fotografía',
      description: 'Sesión fotográfica profesional del evento',
      price: 'S/ 600'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold-500" />,
      name: 'Decoración Temática',
      description: 'Decoración personalizada según el tema de tu evento',
      price: 'S/ 350'
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      name: 'Personal de Servicio',
      description: 'Meseros y personal de apoyo para atender a tus invitados',
      price: 'S/ 80 por persona'
    },
    {
      icon: <Clock className="w-8 h-8 text-gold-500" />,
      name: 'Horas Adicionales',
      description: 'Extensión del horario del evento más allá de las 6 horas',
      price: 'S/ 150 por hora'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Nuestros Locales
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el espacio perfecto para tu evento. Todos nuestros locales incluyen 6 horas de alquiler y tienen capacidad mínima para 100 personas.
          </p>
          <div className="mt-4 bg-gold-100 border border-gold-300 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-gold-800 font-semibold">
              💡 Precio por cubierto: S/ 38 - S/ 45 por persona
            </p>
            <p className="text-gold-700 text-sm">
              Mínimo 100 personas
            </p>
          </div>
        </div>

        {/* Venue Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Opciones de Locales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <div key={index} className="card overflow-hidden hover:scale-105 transition-transform">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${venue.image})` }}>
                  <div className="h-full bg-black bg-opacity-40 flex items-end">
                    <div className="p-4 text-white">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{venue.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {venue.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{venue.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gold-600 mb-1">
                      S/ {venue.pricePerPerson} por persona
                    </div>
                    <div className="text-sm text-gray-500">
                      Mínimo 100 personas
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {venue.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <Star className="w-3 h-3 text-gold-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn-primary w-full">
                    Reservar Este Local
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Servicios Adicionales
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Personaliza tu evento con nuestros servicios adicionales
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <div className="text-lg font-bold text-gold-600">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Information */}
        <div className="mt-16">
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
              Información de Precios
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">¿Qué incluye el precio por cubierto?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    Alquiler del local por 6 horas
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    Mesas y sillas para todos los invitados
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    Sistema de sonido básico
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    Iluminación ambiente
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    Servicio de limpieza
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Ejemplo de Cotización</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>120 personas × S/ 38</span>
                    <span>S/ 4,560</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>DJ Profesional</span>
                    <span>S/ 400</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Bocaditos (120 × S/ 15)</span>
                    <span>S/ 1,800</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-gold-600">
                    <span>Total</span>
                    <span>S/ 6,760</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/reservations" className="btn-primary">
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu