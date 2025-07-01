import React from 'react'
import { Music, Users, Utensils, Camera, Sparkles, Clock, Mic, Wine, MapPin, Star, Calendar } from 'lucide-react'

const Menu = () => {
  const packages = [
    {
      name: 'Paquete Básico',
      description: 'Alquiler del local por 8 horas con servicios esenciales',
      image: '/imagenes/image.png',
      features: [
        'Alquiler del local por 8 horas',
        'Mesas y sillas para todos los invitados',
        'Sistema de sonido básico',
        'Iluminación ambiente',
        'Servicio de limpieza',
        'Personal de apoyo básico'
      ],
      pricePerPerson: 38,
      popular: false
    },
    {
      name: 'Paquete Premium',
      description: 'Todo lo del paquete básico más servicios adicionales',
      image: '/imagenes/image copy.png',
      features: [
        'Todo lo del paquete básico',
        'DJ Profesional incluido',
        'Decoración temática básica',
        'Bartender por 4 horas',
        'Bocaditos de bienvenida',
        'Personal de servicio adicional'
      ],
      pricePerPerson: 55,
      popular: true
    },
    {
      name: 'Paquete Full',
      description: 'La experiencia completa para tu evento perfecto',
      image: '/imagenes/image.png',
      features: [
        'Todo lo del paquete premium',
        'Hora loca incluida',
        'Fotografía profesional',
        'Decoración premium personalizada',
        'Bocaditos durante todo el evento',
        'Coordinador de eventos dedicado'
      ],
      pricePerPerson: 75,
      popular: false
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
      description: 'Extensión del horario del evento más allá de las 8 horas',
      price: 'S/ 150 por hora'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Nuestro Local de Eventos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Local elegante en Chimbote para tus celebraciones más importantes. Alquiler por 8 horas con capacidad para 100-300 personas.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-gold-100 border border-gold-300 rounded-lg p-3">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5 text-gold-600" />
                <span className="text-gold-800 font-semibold">100-300 personas</span>
              </div>
            </div>
            <div className="bg-gold-100 border border-gold-300 rounded-lg p-3">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-gold-600" />
                <span className="text-gold-800 font-semibold">8 horas de alquiler</span>
              </div>
            </div>
            <div className="bg-gold-100 border border-gold-300 rounded-lg p-3">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-gold-600" />
                <span className="text-gold-800 font-semibold">Chimbote, Perú</span>
              </div>
            </div>
          </div>
        </div>

        {/* Galería del Local */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Galería del Local
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card overflow-hidden hover:scale-105 transition-transform">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(/imagenes/image.png)` }}>
                <div className="h-full bg-black bg-opacity-20 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold">Salón Principal</h3>
                    <p className="text-sm">Vista general del local</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card overflow-hidden hover:scale-105 transition-transform">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(/imagenes/image copy.png)` }}>
                <div className="h-full bg-black bg-opacity-20 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold">Área de Ceremonia</h3>
                    <p className="text-sm">Espacio para eventos especiales</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card overflow-hidden hover:scale-105 transition-transform">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(/imagenes/image.png)` }}>
                <div className="h-full bg-black bg-opacity-20 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold">Pista de Baile</h3>
                    <p className="text-sm">Espacio para celebrar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Paquetes Disponibles */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Paquetes Disponibles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`card overflow-hidden hover:scale-105 transition-transform relative ${pkg.popular ? 'ring-2 ring-gold-400' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Más Popular
                  </div>
                )}
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${pkg.image})` }}>
                  <div className="h-full bg-black bg-opacity-40 flex items-end">
                    <div className="p-4 text-white">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">8 horas de alquiler</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gold-600 mb-1">
                      S/ {pkg.pricePerPerson} por persona
                    </div>
                    <div className="text-sm text-gray-500">
                      Mínimo 100 personas
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <Star className="w-3 h-3 text-gold-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn-primary w-full">
                    Reservar Este Paquete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios Adicionales */}
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

        {/* Información del Local */}
        <div className="mt-16">
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
              Características del Local
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Instalaciones</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    Salón cerrado con aire acondicionado
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    Pista de baile amplia
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    Sistema de sonido profesional
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    Iluminación LED personalizable
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    Área de bar equipada
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    Cocina para catering
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Ejemplo de Cotización</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>150 personas × S/ 38</span>
                    <span>S/ 5,700</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>DJ Profesional</span>
                    <span>S/ 400</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Bocaditos (150 × S/ 15)</span>
                    <span>S/ 2,250</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Decoración temática</span>
                    <span>S/ 350</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-gold-600">
                    <span>Total</span>
                    <span>S/ 8,700</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  * Incluye 8 horas de alquiler del local
                </p>
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