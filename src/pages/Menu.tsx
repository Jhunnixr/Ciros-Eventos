import React from 'react'
import { Music, Users, Utensils, Camera, Sparkles, Clock, Mic, Wine } from 'lucide-react'

const Menu = () => {
  const venuePackages = [
    {
      name: 'Paquete Básico',
      description: 'Ideal para eventos pequeños e íntimos',
      price: 'S/ 800',
      features: [
        'Alquiler del local por 6 horas',
        'Capacidad hasta 50 personas',
        'Mesas y sillas incluidas',
        'Sistema de sonido básico',
        'Iluminación ambiente',
        'Área de baile'
      ]
    },
    {
      name: 'Paquete Premium',
      description: 'Perfecto para celebraciones medianas',
      price: 'S/ 1,200',
      features: [
        'Alquiler del local por 8 horas',
        'Capacidad hasta 100 personas',
        'Decoración temática básica',
        'Sistema de sonido profesional',
        'Iluminación LED multicolor',
        'Área de baile amplia',
        'Servicio de limpieza incluido'
      ]
    },
    {
      name: 'Paquete VIP',
      description: 'La experiencia completa para eventos especiales',
      price: 'S/ 2,000',
      features: [
        'Alquiler del local por 10 horas',
        'Capacidad hasta 150 personas',
        'Decoración personalizada',
        'Sistema audiovisual completo',
        'Iluminación profesional',
        'Área VIP exclusiva',
        'Servicio de seguridad',
        'Coordinador de eventos'
      ]
    }
  ]

  const additionalServices = [
    {
      icon: <Music className="w-8 h-8 text-gold-500" />,
      name: 'DJ Profesional',
      description: 'Música en vivo con DJ experimentado',
      price: 'S/ 300'
    },
    {
      icon: <Mic className="w-8 h-8 text-gold-500" />,
      name: 'Hora Loca',
      description: 'Animación y show para tu evento',
      price: 'S/ 400'
    },
    {
      icon: <Wine className="w-8 h-8 text-gold-500" />,
      name: 'Bartender',
      description: 'Servicio de bar con bartender profesional',
      price: 'S/ 250'
    },
    {
      icon: <Utensils className="w-8 h-8 text-gold-500" />,
      name: 'Catering',
      description: 'Servicio de comida y bebidas',
      price: 'Desde S/ 25 por persona'
    },
    {
      icon: <Camera className="w-8 h-8 text-gold-500" />,
      name: 'Fotografía',
      description: 'Sesión fotográfica profesional',
      price: 'S/ 500'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold-500" />,
      name: 'Decoración Extra',
      description: 'Decoración temática personalizada',
      price: 'S/ 200'
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      name: 'Personal de Servicio',
      description: 'Meseros y personal de apoyo',
      price: 'S/ 80 por persona'
    },
    {
      icon: <Clock className="w-8 h-8 text-gold-500" />,
      name: 'Horas Adicionales',
      description: 'Extensión del horario del evento',
      price: 'S/ 100 por hora'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Paquetes y Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el paquete perfecto para tu evento y personalízalo con nuestros servicios adicionales
          </p>
        </div>

        {/* Venue Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Paquetes del Local
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {venuePackages.map((pkg, index) => (
              <div key={index} className={`card p-8 ${index === 1 ? 'ring-2 ring-gold-400 transform scale-105' : ''}`}>
                {index === 1 && (
                  <div className="bg-gold-400 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-4 -mt-4 mx-auto w-fit">
                    Más Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-gold-600">{pkg.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary w-full">
                  Seleccionar Paquete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Servicios Adicionales
          </h2>
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

        <div className="mt-12 text-center">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              ¿Listo para tu evento perfecto?
            </h3>
            <p className="text-gray-600 mb-6">
              Reserva nuestro local ahora y personaliza tu evento con nuestros servicios adicionales
            </p>
            <a href="/reservations" className="btn-primary">
              Reservar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu